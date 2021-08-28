define([
    'flight/lib/component',
    'util/vertex/formatters',
    'util/withDataRequest',
    'configuration/plugins/registry'
], function(defineComponent, F, withDataRequest, registry) {
    'use strict';

    return defineComponent(DetailPane, withDataRequest);

    function DetailPane() {

        this.defaultAttrs({
            mapCoordinatesSelector: '.map-coordinates',
            detailTypeContentSelector: '.type-content'
        });

        this.after('initialize', function() {
            this.on('click', {
                mapCoordinatesSelector: this.onMapCoordinatesClicked
            });
            this.on('finishedLoadingTypeContent', this.onFinishedTypeContent);

            this.on(document, 'objectsSelected', this.onObjectsSelected);
            this.on(document, 'selectObjects', this.onSelectObjects);
            this.preventDropEventsFromPropagating();

            this.before('teardown', this.teardownComponents);

            this.$node.html('<div class="type-content"></div>');
        });

        this.onFinishedTypeContent = function() {
            this.$node.removeClass('loading');
        };

        // Ignore drop events so they don't propagate to the graph/map
        this.preventDropEventsFromPropagating = function() {
            this.$node.droppable({ tolerance: 'pointer', accept: '*' });
        };

        this.onMapCoordinatesClicked = function(evt, data) {
            evt.preventDefault();
            var $target = $(evt.target).closest('a');
            this.trigger('mapCenter', $target.data());
        };

        this.onSelectObjects = function(event, data) {
            this.collapsed = !this.$node.closest('.detail-pane').is('.visible');
        };

        this.onObjectsSelected = function(evt, data) {
            var self = this,
                { vertices, edges, options } = data,
                moduleName, moduleData, moduleName2,
                pane = this.$node.closest('.detail-pane');

            if (!vertices.length && !edges.length) {

                this.cancelTransitionTeardown = false;

                return pane.on(TRANSITION_END, function(e) {
                    if (/transform/.test(e.originalEvent && e.originalEvent.propertyName)) {
                        if (self.cancelTransitionTeardown !== true) {
                            self.teardownComponents();
                        }
                        pane.off(TRANSITION_END);
                    }
                });
            }

            this.cancelTransitionTeardown = true;
            this.teardownComponents();
            this.$node.addClass('loading');

            vertices = _.unique(vertices, 'id');
            edges = _.unique(edges, 'id');

            Promise.all([
                Promise.require('detail/item/item'),
                this.collapsed ?
                    new Promise(function(f) {
                        pane.on(TRANSITION_END, function(e) {
                            if (/transform/.test(e.originalEvent && e.originalEvent.propertyName)) {
                                pane.off(TRANSITION_END);
                                f();
                            }
                        });
                    }) :
                    Promise.resolve()
            ]).done(function(results) {
                var Module = results.shift();
                Module.attachTo(self.select('detailTypeContentSelector').teardownAllComponents(), {
                    model: vertices.concat(edges),
                    constraints: ['width'],
                    focus: options.focus
                });
            })
        };

        this.teardownComponents = function() {
            this.select('detailTypeContentSelector').find('*').teardownAllComponents();
            this.select('detailTypeContentSelector').teardownAllComponents().empty();
        }
    }
});
