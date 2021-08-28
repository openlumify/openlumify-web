define([
    'detail/toolbar/toolbar',
    'util/vertex/formatters'
], function(Toolbar, F) {
    'use strict';

    return [
        {
            applyTo: { type: 'element[]' },
            identifier: 'org.openlumify.layout.root',
            layout: { type: 'flex', options: { direction: 'column' }},
            componentPath: 'detail/item/elements',
            children: [
                { ref: 'org.openlumify.layout.elements.header' },
                { ref: 'org.openlumify.layout.elements.body', style: { flex: '1 1 auto', overflow: 'auto', minHeight: '5.5em' } },
                { ref: 'org.openlumify.layout.elements.list', style: { flex: '0 0 auto' }, className: 'ui-ignore-pane-width' }
            ]
        },
        {
            identifier: 'org.openlumify.layout.elements.header',
            children: [
                { componentPath: 'detail/toolbar/toolbar', className: 'org-openlumify-toolbar' }
            ]
        },
        {
            identifier: 'org.openlumify.layout.elements.body',
            children: [
                { componentPath: 'detail/properties/histograms' }
            ]
        },
        {
            identifier: 'org.openlumify.layout.elements.list',
            layout: { type: 'flex', options: { direction: 'column' }},
            children: [
                {
                    componentPath: 'util/element/list',
                    style: { overflow: 'auto', flex: 1 },
                    attributes: function(model) {
                        return {
                            items: model,
                            showSelected: false,
                            singleSelection: true,
                            ignoreUpdateModelNotImplemented: true
                        };
                    }
                }
            ]
        }
    ];
});
