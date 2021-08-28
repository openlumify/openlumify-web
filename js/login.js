
define([
    'flight/lib/component',
    'loginTpl.hbs',
    'configuration/plugins/registry',
    'util/withDataRequest',
    'tpl!util/alert',
    'util/requirejs/promise!util/service/propertiesPromise'
], function(
    defineComponent,
    template,
    registry,
    withDataRequest,
    alertTemplate,
    configProperties) {
    'use strict';

    const LoginMessageKey = 'loginErrorMessage';
    const ExpireLoginErrorMessageMillis = 60 * 1000;

    const LoginComponent = defineComponent(Login, withDataRequest);

    LoginComponent.setErrorMessage = function(errorMessage) {
        try {
            if (errorMessage) {
                sessionStorage.setItem(LoginMessageKey, JSON.stringify({
                    errorMessage,
                    date: Date.now()
                }));
            } else {
                sessionStorage.removeItem(LoginMessageKey);
            }
        } catch(e) {
            console.warn('Unable to write to sessionStorage, can\'t set error message', e);
        }
    }

    return LoginComponent;

    function Login() {

        this.defaultAttrs({
            authenticationSelector: '.authentication'
        });

        this.before('teardown', function() {
            this.$node.remove();
        });

        this.after('initialize', function() {

            /**
             * Provide custom authentication interface to login users.
             *
             * _OpenLumify will display an error if:_
             *
             * * No authentication plugins are registered
             * * More than one plugins are registered
             *
             * @param {string} componentPath {@link org.openlumify.authentication~Component|Component} that renders the interface to login users
             */
            registry.documentExtensionPoint('org.openlumify.authentication',
                'Provides interface for authentication',
                function(e) {
                    return _.isString(e.componentPath);
                },
                'http://docs.openlumify.org/extension-points/front-end/authentication'
            );

            this.$node.html(template({ showPoweredBy: configProperties['login.showPoweredBy'] === 'true' }));
            var self = this,
                authPlugins = registry.extensionsForPoint('org.openlumify.authentication'),
                authNode = this.select('authenticationSelector'),
                error = '',
                componentPath = '';

            this.on('showErrorMessage', function(event, data) {
                authNode.html(alertTemplate({ error: data.message }));
            })

            if (authPlugins.length === 0) {
                error = 'No authentication extension registered.';
            } else if (authPlugins.length > 1) {
                error = 'Multiple authentication extensions registered. (See console for more info)';
                console.error('Authentication plugins:', authPlugins);
            } else {
                componentPath = authPlugins[0].componentPath;
            }

            if (error) {
                authNode.html(alertTemplate({ error: error }));
            } else if (componentPath) {
                require([componentPath], function(AuthenticationPlugin) {

                    let errorMessage = self.attr.errorMessage;
                    const messageJson = sessionStorage.getItem(LoginMessageKey);

                    if (!errorMessage) {
                        const message = messageJson && JSON.parse(messageJson);
                        // Ignore messages from too far back
                        if (message &&
                            _.isString(message.errorMessage) &&
                            _.isNumber(message.date) &&
                            (Date.now() - message.date) < ExpireLoginErrorMessageMillis) {
                            errorMessage = message.errorMessage;
                        }
                    }
                    if (messageJson) {
                        LoginComponent.setErrorMessage(null);
                    }

                    /**
                     * Custom authentication interface. Trigger `loginSucess`
                     * upon successful login.
                     *
                     * Display `errorMessage` property somewhere in interface
                     * if it is non-empty.
                     *
                     * @typedef org.openlumify.authentication~Component
                     * @property {string} [errorMessage=''] Error Message to display
                     * @fires org.openlumify.authentication#loginSuccess
                     */
                    AuthenticationPlugin.attachTo(authNode, {
                        errorMessage
                    });

                    /**
                     * Notify OpenLumify that user is valid and application should
                     * start.
                     *
                     * Will fail if `/user/me` actually returns `403` errors
                     *
                     * @event org.openlumify.authentication#loginSuccess
                     * @example
                     * this.trigger('loginSuccess')
                     */
                });
            }
        });

    }

});
