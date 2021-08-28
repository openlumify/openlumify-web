define([
    'create-react-class',
    'prop-types',
    'jstz',
    'util/formatters',
    'util/withDataRequest',
    './TimeZoneDropDown'
], function (createReactClass, PropTypes, jstz, F, withDataRequest, TimeZoneDropDown) {
    'use strict';

    const TimeZoneSetting = createReactClass({
        getInitialState() {
            const prefs = F.timezone.getPreferences();
            return {
                ...prefs,
                disabled: false
            };
        },

        handleDetectChange(evt) {
            this.savePreferences({
                detect: evt.target.checked,
                timeZone: evt.target.checked ? jstz.determine().name() : this.state.timeZone
            });
        },

        handleTimeZoneChange(tzName) {
            this.savePreferences({
                detect: false,
                timeZone: tzName
            });
        },

        savePreferences(preferences) {
            withDataRequest.dataRequest('user', 'preference', 'org.openlumify.timezone', JSON.stringify(preferences))
                .then(() => {
                    openlumifyData.currentUser.uiPreferences['org.openlumify.timezone'] = JSON.stringify(preferences);
                    F.timezone.setCurrentTimezone(null);
                    this.setState({
                        ...preferences,
                        disabled: false
                    });
                });
        },

        render() {
            return (<div>
                <div className="display-name">{i18n(this.props.setting.displayName)}</div>
                <div style={{display: 'block'}}>
                    <TimeZoneDropDown disabled={this.state.disabled || this.state.detect}
                                      onChange={this.handleTimeZoneChange}
                                      value={this.state.timeZone}/>
                    <label style={{display: 'inline'}}>
                        <input type="checkbox"
                               disabled={this.state.disabled}
                               style={{marginLeft: '.5em', marginBottom: '4px', display: 'inline'}}
                               checked={this.state.detect}
                               onChange={this.handleDetectChange}/> {i18n('org.openlumify.user.account.page.setting.timezone.field.detect')}
                    </label>
                </div>
            </div>);
        }
    });

    return TimeZoneSetting;
});
