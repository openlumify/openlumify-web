define(['create-react-class','prop-types'],function(createReactClass,PropTypes){'use strict';var Alert=createReactClass({displayName:'Alert',propTypes:{error:PropTypes.any,onDismiss:PropTypes.func},componentWillReceiveProps:function componentWillReceiveProps(nextProps){if(nextProps.error&&nextProps.error!==this.props.error){console.error(nextProps.error);}},renderMessage:function renderMessage(){var error=this.props.error;var info;if(_.isString(error)){info=error;}else if(error.statusText){info=error.statusText;}else{info=i18n('admin.plugin.error');}if(_.isArray(info)&&info.length>1){return React.createElement('ul',null,info.map(function(i){return React.createElement('li',null,i);}));}else if(_.isArray(info)){return React.createElement('div',null,info[0]);}else{return React.createElement('div',null,info);}},renderType:function renderType(){if(this.props.error.type){return React.createElement('strong',null,this.props.error.type);}return null;},handleDismissClick:function handleDismissClick(e){if(this.props.onDismiss){this.props.onDismiss(e);}},render:function render(){if(!this.props.error){return null;}return React.createElement('div',{className:'alert alert-error'},this.props.onDismiss?React.createElement('button',{type:'button',className:'close',onClick:this.handleDismissClick},'\xD7'):null,this.renderType(),this.renderMessage());}});return Alert;});
//# sourceMappingURL=Alert.js.map
