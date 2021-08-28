define([
    'flight/lib/component',
    './userSelectTpl.hbs',
    './user.hbs',
    'util/withDataRequest'
], function(
    defineComponent,
    template,
    userTemplate,
    withDataRequest) {
    'use strict';

    return defineComponent(UserSelect, withDataRequest);

    function UserSelect() {

        this.defaultAttrs({
            inputSelector: 'input',
            filterUserIds: []
        });

        this.after('initialize', function() {
            this.on('clearUser', this.onClearUser);
            this.on('updateFilterUserIds', this.onUpdateFilterUserIds);

            this.$node.html(template({
                placeholder: this.attr.placeholder || i18n('user.selection.field.placeholder')
            }));

            this.setupTypeahead();
        });

        this.onUpdateFilterUserIds = function(event, data) {
            this.attr.filterUserIds = data.userIds;
        };

        this.onClearUser = function() {
            var self = this;

            _.defer(function() {
                self.select('inputSelector').val('');
            });
        };

        this.setupTypeahead = function() {
            var self = this,
                userMap = {};

            this.select('inputSelector').typeahead({
                source: function(query, callback) {
                    if ($.trim(query).length) {
                        self.dataRequest('user', 'search', { query: query })
                            .done(function(users) {
                                var otherUsers = users.filter(function(user) {
                                        return self.attr.filterUserIds.indexOf(user.id) === -1;
                                    }),
                                    ids = _.pluck(otherUsers, 'id');

                                userMap = _.indexBy(otherUsers, 'id');

                                callback(ids);
                            });
                    } else {
                        callback([]);
                    }
                },
                matcher: function() {
                    return true;
                },
                sorter: function(userIds) {
                    return _.sortBy(userIds, function(userId) {
                        return userMap[userId].displayName;
                    });
                },
                updater: function(userId) {
                    self.trigger('userSelected', {
                        user: userMap[userId]
                    });
                    return userMap[userId].displayName;
                },
                highlighter: function(userId) {
                    const user = userMap[userId];
                    return userTemplate({
                        json: JSON.stringify(user),
                        displayName: user.displayName,
                        subtitle: (user.displayName.toLowerCase() !== (user.email || user.userName).toLowerCase()) ?
                            (user.email || user.userName) : null
                    });
                }
            });
        };

    }
});
