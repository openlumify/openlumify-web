define([
    'create-react-class',
    'configuration/plugins/registry'
], function(createReactClass, registry) {
    'use strict';

    const RegistryInjectorHOC = (WrappedComponent, identifiers) => {
        if (!_.isArray(identifiers)) throw new Error('identifiers must be an array');

        const WithRegistry = createReactClass({
            displayName: `RegistryInjectorHOC(${WrappedComponent.displayName || 'Component'})`,
            componentDidMount() {
                if (identifiers.length === 0) {
                    console.warn('RegistryInjectorHOC invoked with no identifiers')
                }
                $(document).on('extensionsChanged.registryInjector', (event, {extensionPoint}) => {
                    if (identifiers.includes(extensionPoint)) {
                        this.forceUpdate();
                    }
                });
            },
            componentWillUnmount() {
                $(document).off('extensionsChanged.registryInjector');
            },
            render() {
                // Ref used by DroppableHOC
                return (<WrappedComponent ref="wrapped" {...this.props} registry={registry.extensionsForPoints(identifiers)} />);
            }
        })

        return WithRegistry;
    };

    RegistryInjectorHOC.registry = registry;

    return RegistryInjectorHOC;
});
