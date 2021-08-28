define([
    'create-react-class',
    'prop-types',
    'react-redux',
    './ProductList',
    'data/web-worker/store/product/actions',
    'data/web-worker/store/product/selectors',
    'configuration/plugins/registry'
], function(createReactClass, PropTypes, redux, ProductList, productActions, productSelectors, registry) {
    'use strict';

    registry.markUndocumentedExtensionPoint('org.openlumify.workproduct')

    var initial;
    $(document)
        .on('menubarToggleDisplay', function handler(event, data) {
            const { name, options } = data;
            if (name === 'products' && !_.isEmpty(options)) {
                if ('id' in options) {
                    const { id: productId, ...rest } = options;
                    initial = { productId, ...rest };
                    $(document).off('menubarToggleDisplay', handler)
                } else console.warn('Specify id=[product id] in url to open product. #tools=products&id=...')
            }
        })
        .on('productsPaneVisible', function handler(event, data) {
            $(document).off('productsPaneVisible', handler);
            if (initial) return;
            openlumifyData.storePromise.then(store => {
                const state = store.getState();
                const selected = productSelectors.getSelectedId(state)
                if (!selected) {
                    const products = productSelectors.getProducts(state);
                    if (products.length) {
                        store.dispatch(productActions.select(products[0].id))
                    }
                }
            })
        })


    return redux.connect(

        (state, props) => {
            return {
                status: productSelectors.getStatus(state),
                types: productSelectors.getProductTypes(state),
                selected: productSelectors.getSelectedId(state),
                products: productSelectors.getProducts(state),
                previewHashes: productSelectors.getPreviewHashesById(state),
                user: state.user.current,
                workspace: state.workspace.currentId ?
                    state.workspace.byId[state.workspace.currentId] : null
            }
        },

        (dispatch, props) => {

            return {
                onLoadProducts: () => { dispatch(productActions.list(initial)); initial = undefined },
                onCreate: (type) => { dispatch(productActions.create('Untitled', type)) },
                onDeleteProduct: (productId) => { dispatch(productActions.delete(productId)) },
                onUpdateTitle: (productId, title) => {
                    dispatch(productActions.updateTitle(productId, title));
                },
                onSelectProduct: (productId) => {
                    dispatch(productActions.select(productId))
                },
                onDropElements: (product, elements) => {
                    const extension = _.findWhere(registry.extensionsForPoint('org.openlumify.workproduct'), {
                        identifier: product.kind
                    });

                    if (extension.storeActions && _.isFunction(extension.storeActions.dropElements)) {
                        dispatch(extension.storeActions.dropElements(product.id, elements, { undoable: true }));
                    }
                }
            }
        }

    )(ProductList);
});
