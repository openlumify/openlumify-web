define(['create-react-class','prop-types','jstz','util/formatters'],function(createReactClass,PropTypes,jstz,F){'use strict';var TimeZoneDropDown=createReactClass({displayName:'TimeZoneDropDown',propTypes:{value:PropTypes.string.isRequired,onChange:PropTypes.func.isRequired,disabled:PropTypes.bool},handleTimeZoneChange:function handleTimeZoneChange(evt){var name=evt.target.value;this.props.onChange(name);},render:function render(){var disabled='disabled'in this.props?this.props.disabled:false;return React.createElement('select',{disabled:disabled,onChange:this.handleTimeZoneChange,value:this.props.value},Object.keys(jstz.olson.timezones).map(function(key){var tz=jstz.olson.timezones[key];var tzInfo=F.timezone.lookupTimezone(tz);var components=key.split(',');var offsetMinutes=parseInt(components[0],10);var offset=F.timezone.offsetDisplay(offsetMinutes);var tzPretty=tz.replace(/_/g,' ');return React.createElement('option',{key:key,value:tz},offset,' ',tzPretty,tzInfo.dst?'*':'');}));}});return TimeZoneDropDown;});
//# sourceMappingURL=TimeZoneDropDown.js.map