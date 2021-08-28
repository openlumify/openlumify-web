define([
    'flight/lib/component',
    'util/withDataRequest',
    './withItem'
], function(defineComponent, withDataRequest, withItem) {
    'use strict';

    return defineComponent(Elements, withDataRequest, withItem);

    function Elements() {

        this.attributes({
            model: null,
            ignoreUpdateModelNotImplemented: true,
            headerSelector: '.org-openlumify-layout-elements-header',
            bodySelector: '.org-openlumify-layout-elements-body',
            listSelector: '.org-openlumify-layout-elements-list',
            singleSelector: '.org-openlumify-layout-root'
        })

        this.after('initialize', function() {

            this.on(this.select('listSelector'), 'selectObjects', this.onSelectObjects);
            this.on(this.select('listSelector'), 'objectsSelected', this.onObjectsSelected);

            var self = this,
                $list = this.select('listSelector'),
                key = 'elements[].list',
                heightPreference = openlumifyData.currentUser.uiPreferences['pane-' + key],
                originalHeight = heightPreference ?
                    parseInt(heightPreference, 10) :
                    Math.round($(window).height() * 0.3);

            $list.css({ height: originalHeight + 'px' }).attr('data-height-preference', key);
            createResizable($list);

            // Hack to support nested resizables, destroy and recreate child
            // resizable on parent resize
            $list.parent().closest('.ui-resizable')
                .on('resizestart', function(event) {
                    if ($(event.target).closest($list).length) return;
                    if ($list.data('ui-resizable')) {
                        $list.resizable('destroy');
                    }
                })
                .on('resizestop', function(event) {
                    if ($(event.target).closest($list).length) return;
                    if (!$list.data('ui-resizable')) {
                        createResizable($list);
                    }
                })
        });

        this.onObjectsSelected = function(event, data) {
            event.stopPropagation();
        };

        this.onSelectObjects = function(event, data) {
            event.stopPropagation();

            var self = this;

            this.dataRequest(data.vertexIds.length ? 'vertex' : 'edge', 'store', data)
                .done(function(results) {
                    var first = _.first(results),
                        $single = self.select('singleSelector'),
                        $list = self.select('listSelector'),
                        $histogram = self.select('bodySelector')
                            .add(self.select('headerSelector'));

                    if (self.currentSelectedItemId && first.id === self.currentSelectedItemId) {
                        $single.teardownAllComponents().remove();
                        $histogram.show();
                        $list.find('.element-list').trigger('objectsSelected', {
                            vertices: [], edges: [], vertexIds: [], edgeIds: []
                        });
                        self.currentSelectedItemId = null;
                    } else {
                        self.currentSelectedItemId = first.id;

                        if (!$single.length) {
                            $single = $('<div>')
                                .css('flex', 1)
                                .hide()
                                .insertBefore($list)
                        }

                        require(['detail/item/item'], function(Item) {
                            Item.attachTo($single.empty().teardownAllComponents(), {
                                constraints: ['width'],
                                model: first
                            })
                            self.select('bodySelector')
                                .add(self.select('headerSelector'))
                                .hide();
                            $single.show();
                        });

                        $list.find('.element-list').trigger('objectsSelected', {
                            vertices: data.vertexIds.length ? results : [],
                            edges: data.edgeIds.length ? results : [],
                            vertexIds: data.vertexIds,
                            edgeIds: data.edgeIds
                        })
                    }
                })
        };
    }

    function createResizable(el) {
        $(el).resizable({
            handles: 'n',
            start: function(event) {
                event.stopPropagation();
            },
            stop: function(event) {
                event.stopPropagation();
            },
            resize: function(event, ui) {
                event.stopPropagation();
                $(this).css('top', '');
            }
        });
    }

});
