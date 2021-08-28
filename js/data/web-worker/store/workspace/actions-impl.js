define(['../actions', '../../util/ajax', 'require'], function(actions, ajax, require) {
    actions.protectFromMain();

    const sort = workspaces => _.sortBy(
        _.filter(workspaces, function(w) {
            return !w.sharedToUser && ('createdBy' in w);
        }),
        w => w.title.toLowerCase()
    );

    const api = {

        setCurrent: ({ workspaceId }) => (dispatch, getState) => {
            if (!workspaceId) {
                var workspaces = getState().workspace;
                return Promise.try(() => {
                    if (workspaces.allLoaded) {
                        return Promise.resolve(sort(Object.values(workspaces.byId)));
                    } else {
                        publicData.currentWorkspaceId = null;
                        return ajax('GET', '/workspace/all')
                            .then(function(result) {
                                dispatch(api.setAll({ workspaces: result.workspaces }));
                                return sort(result.workspaces);
                            })
                    }
                }).then(list => {
                    if (list.length) {
                        return list[0].workspaceId
                    }
                    return ajax('POST', '/workspace/create').then(workspace => {
                        dispatch(api.update({ workspace }))
                        return workspace.workspaceId;
                    })
                }).then(workspaceId => {
                    return new Promise(f => {
                        require(['../ontology/actions-impl'], ontologyActions => {
                            const getOntology = ontologyActions.get({ workspaceId })(dispatch, getState)
                            Promise.resolve(getOntology).then(() => {
                                dispatch({ type: 'WORKSPACE_SETCURRENT', payload: { workspaceId } })
                                pushSocketMessage({ type: 'setActiveWorkspace', data: { workspaceId } });
                                f();
                            })
                        })
                    })
                })
            } else {
                return new Promise(f => {
                    require(['../ontology/actions-impl'], ontologyActions => {
                        const getOntology = ontologyActions.get({ workspaceId })(dispatch, getState)
                        Promise.resolve(getOntology).then(() => {
                            dispatch({ type: 'WORKSPACE_SETCURRENT', payload: { workspaceId } })
                            dispatch(api.get({ workspaceId }))
                            pushSocketMessage({ type: 'setActiveWorkspace', data: { workspaceId } });
                            f();
                        })
                    })
                })
            }
        },

        setAll: ({ workspaces }) => ({
            type: 'WORKSPACE_SET_ALL',
            payload: { workspaces }
        }),

        deleteWorkspace: ({ workspaceId }) => (dispatch, getState) => {
            const workspaces = getState().workspace;
            const workspace = workspaces.byId[workspaceId];

            if (workspace) {
                dispatch({
                    type: 'WORKSPACE_DELETE',
                    payload: { workspaceId }
                })

                const workspaces = getState().workspace;
                if (workspaces.currentId === workspaceId) {
                    dispatch(api.setCurrent({ workspaceId: undefined }))
                }
            }
        },

        get: ({ workspaceId, invalidate }) => (dispatch, getState) => {
            var workspace = getState().workspace.byId[workspaceId];
            if (!workspace || invalidate) {
                ajax('GET', '/workspace', { workspaceId })
                    .then(workspace => dispatch(api.update({ workspace })))
            }
        },

        update: ({ workspace }) => (dispatch, getState) => {
            const state = getState();
            const { currentId, byId } = state.workspace;
            const { current } = state.user;
            const currentUserId = current && current.id;
            // Sometimes withdrawing access can send a change message after
            // permission has been removed
            const hasAccess = currentUserId === workspace.createdBy ||
                workspace.users.some(({userId}) => userId === currentUserId)

            if (hasAccess) {
                dispatch({
                    type: 'WORKSPACE_UPDATE',
                    payload: { workspace }
                })
                if (!currentId || !byId[currentId]) {
                    dispatch(api.setCurrent({ workspaceId: workspace.workspaceId }))
                } else {
                    require([
                        'data/web-worker/store/product/actions-impl',
                        'data/web-worker/store/product/selectors'
                    ], (productActions, productSelectors) => {
                        const selectedProduct = productSelectors.getProduct(state);
                        if (selectedProduct && selectedProduct.extendedData) {
                                dispatch(productActions.get({ productId: selectedProduct.id, invalidate: true }));
                        }
                    })
                }
            }
        }
    }

    return api;
})

