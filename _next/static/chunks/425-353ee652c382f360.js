"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[425],{1425:function(e,t,r){r.d(t,{n:function(){return T}});var o,i=r(33),n=r(3213),s=r(696),a=r(8838),l=r(3784),d=r(5827),u=r(4961),p=r(9070),c=r(2660),h=r(4911),f=r(3162),m=r(3632),g=r(3332),v=function(){var e,t=(0,g.J)();return null!==(e=null==t?void 0:t.navigator)&&void 0!==e&&!!e.userAgent&&t.navigator.userAgent.indexOf("rv:11.0")>-1},b=(0,d.y)(),x="TextField",_=function(e){function t(t){var r,o=e.call(this,t)||this;o._textElement=s.createRef(),o._onFocus=function(e){o.props.onFocus&&o.props.onFocus(e),o.setState({isFocused:!0},function(){o.props.validateOnFocusIn&&o._validate(o.value)})},o._onBlur=function(e){o.props.onBlur&&o.props.onBlur(e),o.setState({isFocused:!1},function(){o.props.validateOnFocusOut&&o._validate(o.value)})},o._onRenderLabel=function(e){var t=e.label,r=e.required,i=o._classNames.subComponentStyles?o._classNames.subComponentStyles.label:void 0;return t?s.createElement(a._,{required:r,htmlFor:o._id,styles:i,disabled:e.disabled,id:o._labelId},e.label):null},o._onRenderDescription=function(e){return e.description?s.createElement("span",{className:o._classNames.description},e.description):null},o._onRevealButtonClick=function(e){o.setState(function(e){return{isRevealingPassword:!e.isRevealingPassword}})},o._onInputChange=function(e){var t,r,i=e.target.value,n=y(o.props,o.state)||"";if(void 0===i||i===o._lastChangeValue||i===n){o._lastChangeValue=void 0;return}o._lastChangeValue=i,null===(r=(t=o.props).onChange)||void 0===r||r.call(t,e,i),o._isControlled||o.setState({uncontrolledValue:i})},(0,u.l)(o),o._async=new p.e(o),o._fallbackId=(0,c.z)(x),o._descriptionId=(0,c.z)(x+"Description"),o._labelId=(0,c.z)(x+"Label"),o._prefixId=(0,c.z)(x+"Prefix"),o._suffixId=(0,c.z)(x+"Suffix"),o._warnControlledUsage();var i=void 0===(r=t.defaultValue)?"":r;return"number"==typeof i&&(i=String(i)),o.state={uncontrolledValue:o._isControlled?void 0:i,isFocused:!1,errorMessage:""},o._delayedValidate=o._async.debounce(o._validate,o.props.deferredValidationTime),o._lastValidation=0,o}return(0,n.ZT)(t,e),Object.defineProperty(t.prototype,"value",{get:function(){return y(this.props,this.state)},enumerable:!1,configurable:!0}),t.prototype.componentDidMount=function(){this._adjustInputHeight(),this.props.validateOnLoad&&this._validate(this.value)},t.prototype.componentWillUnmount=function(){this._async.dispose()},t.prototype.getSnapshotBeforeUpdate=function(e,t){return{selection:[this.selectionStart,this.selectionEnd]}},t.prototype.componentDidUpdate=function(e,t,r){var o,i=this.props,n=void 0===(o=(r||{}).selection)?[null,null]:o,s=n[0],a=n[1];!!e.multiline!=!!i.multiline&&t.isFocused&&(this.focus(),null!==s&&null!==a&&s>=0&&a>=0&&this.setSelectionRange(s,a)),e.value!==i.value&&(this._lastChangeValue=void 0);var l=y(e,t),d=this.value;l!==d&&(this._warnControlledUsage(e),this.state.errorMessage&&!i.errorMessage&&this.setState({errorMessage:""}),this._adjustInputHeight(),E(i)&&this._delayedValidate(d))},t.prototype.render=function(){var e,t,r,i,a,d,u=(e=this.props).borderless,p=e.className,c=e.disabled,f=e.invalid,m=e.iconProps,x=e.inputClassName,_=e.label,y=e.multiline,E=e.required,C=e.underlined,R=e.prefix,T=e.resizable,I=e.suffix,S=e.theme,B=e.styles,F=e.autoAdjustHeight,w=e.canRevealPassword,N=e.revealPasswordAriaLabel,M=e.type,k=void 0===(t=e.onRenderPrefix)?this._onRenderPrefix:t,V=void 0===(r=e.onRenderSuffix)?this._onRenderSuffix:r,P=void 0===(i=e.onRenderLabel)?this._onRenderLabel:i,H=void 0===(a=e.onRenderDescription)?this._onRenderDescription:a,q=(d=this.state).isFocused,A=d.isRevealingPassword,z=this._errorMessage,O="boolean"==typeof f?f:!!z,J=!!w&&"password"===M&&function(){if("boolean"!=typeof o){var e=(0,g.J)();if(null==e?void 0:e.navigator){var t=/Edg/.test(e.navigator.userAgent||"");o=!(v()||t)}else o=!0}return o}(),j=this._classNames=b(B,{theme:S,className:p,disabled:c,focused:q,required:E,multiline:y,hasLabel:!!_,hasErrorMessage:O,borderless:u,resizable:T,hasIcon:!!m,underlined:C,inputClassName:x,autoAdjustHeight:F,hasRevealButton:J});return s.createElement("div",{ref:this.props.elementRef,className:j.root},s.createElement("div",{className:j.wrapper},P(this.props,this._onRenderLabel),s.createElement("div",{className:j.fieldGroup},(void 0!==R||this.props.onRenderPrefix)&&s.createElement("div",{className:j.prefix,id:this._prefixId},k(this.props,this._onRenderPrefix)),y?this._renderTextArea():this._renderInput(),m&&s.createElement(l.J,(0,n.pi)({className:j.icon},m)),J&&s.createElement("button",{"aria-label":N,className:j.revealButton,onClick:this._onRevealButtonClick,"aria-pressed":!!A,type:"button"},s.createElement("span",{className:j.revealSpan},s.createElement(l.J,{className:j.revealIcon,iconName:A?"Hide":"RedEye"}))),(void 0!==I||this.props.onRenderSuffix)&&s.createElement("div",{className:j.suffix,id:this._suffixId},V(this.props,this._onRenderSuffix)))),this._isDescriptionAvailable&&s.createElement("span",{id:this._descriptionId},H(this.props,this._onRenderDescription),z&&s.createElement("div",{role:"alert"},s.createElement(h.U,null,this._renderErrorMessage()))))},t.prototype.focus=function(){this._textElement.current&&this._textElement.current.focus()},t.prototype.blur=function(){this._textElement.current&&this._textElement.current.blur()},t.prototype.select=function(){this._textElement.current&&this._textElement.current.select()},t.prototype.setSelectionStart=function(e){this._textElement.current&&(this._textElement.current.selectionStart=e)},t.prototype.setSelectionEnd=function(e){this._textElement.current&&(this._textElement.current.selectionEnd=e)},Object.defineProperty(t.prototype,"selectionStart",{get:function(){return this._textElement.current?this._textElement.current.selectionStart:-1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"selectionEnd",{get:function(){return this._textElement.current?this._textElement.current.selectionEnd:-1},enumerable:!1,configurable:!0}),t.prototype.setSelectionRange=function(e,t){this._textElement.current&&this._textElement.current.setSelectionRange(e,t)},t.prototype._warnControlledUsage=function(e){var t;this._id,this.props,null!==this.props.value||this._hasWarnedNullValue||(this._hasWarnedNullValue=!0,(0,f.Z)("Warning: 'value' prop on '".concat(x,"' should not be null. Consider using an ")+"empty string to clear the component or undefined to indicate an uncontrolled component."))},Object.defineProperty(t.prototype,"_id",{get:function(){return this.props.id||this._fallbackId},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_isControlled",{get:function(){var e,t;return void 0!==(e=this.props)[t="value"]&&null!==e[t]},enumerable:!1,configurable:!0}),t.prototype._onRenderPrefix=function(e){var t=e.prefix;return s.createElement("span",{style:{paddingBottom:"1px"}},t)},t.prototype._onRenderSuffix=function(e){var t=e.suffix;return s.createElement("span",{style:{paddingBottom:"1px"}},t)},Object.defineProperty(t.prototype,"_errorMessage",{get:function(){var e;return(void 0===(e=this.props.errorMessage)?this.state.errorMessage:e)||""},enumerable:!1,configurable:!0}),t.prototype._renderErrorMessage=function(){var e=this._errorMessage;return e?"string"==typeof e?s.createElement("p",{className:this._classNames.errorMessage},s.createElement("span",{"data-automation-id":"error-message"},e)):s.createElement("div",{className:this._classNames.errorMessage,"data-automation-id":"error-message"},e):null},Object.defineProperty(t.prototype,"_isDescriptionAvailable",{get:function(){var e=this.props;return!!(e.onRenderDescription||e.description||this._errorMessage)},enumerable:!1,configurable:!0}),t.prototype._renderTextArea=function(){var e,t=void 0===(e=this.props.invalid)?!!this._errorMessage:e,r=(0,m.pq)(this.props,m.FI,["defaultValue"]),o=this.props["aria-labelledby"]||(this.props.label?this._labelId:void 0);return s.createElement("textarea",(0,n.pi)({id:this._id},r,{ref:this._textElement,value:this.value||"",onInput:this._onInputChange,onChange:this._onInputChange,className:this._classNames.field,"aria-labelledby":o,"aria-describedby":this._isDescriptionAvailable?this._descriptionId:this.props["aria-describedby"],"aria-invalid":t,"aria-label":this.props.ariaLabel,readOnly:this.props.readOnly,onFocus:this._onFocus,onBlur:this._onBlur}))},t.prototype._renderInput=function(){var e,t,r,o=(e=this.props).ariaLabel,i=void 0===(t=e.invalid)?!!this._errorMessage:t,a=e.onRenderPrefix,l=e.onRenderSuffix,d=e.prefix,u=e.suffix,p=void 0===(r=e.type)?"text":r,c=e.label,h=[];c&&h.push(this._labelId),(void 0!==d||a)&&h.push(this._prefixId),(void 0!==u||l)&&h.push(this._suffixId);var f=(0,n.pi)((0,n.pi)({type:this.state.isRevealingPassword?"text":p,id:this._id},(0,m.pq)(this.props,m.Gg,["defaultValue","type"])),{"aria-labelledby":this.props["aria-labelledby"]||(h.length>0?h.join(" "):void 0),ref:this._textElement,value:this.value||"",onInput:this._onInputChange,onChange:this._onInputChange,className:this._classNames.field,"aria-label":o,"aria-describedby":this._isDescriptionAvailable?this._descriptionId:this.props["aria-describedby"],"aria-invalid":i,onFocus:this._onFocus,onBlur:this._onBlur}),g=function(e){return s.createElement("input",(0,n.pi)({},e))};return(this.props.onRenderInput||g)(f,g)},t.prototype._validate=function(e){var t=this;if(!(this._latestValidateValue===e&&E(this.props))){this._latestValidateValue=e;var r=this.props.onGetErrorMessage,o=r&&r(e||"");if(void 0!==o){if("string"!=typeof o&&"then"in o){var i=++this._lastValidation;o.then(function(r){i===t._lastValidation&&t.setState({errorMessage:r}),t._notifyAfterValidate(e,r)})}else this.setState({errorMessage:o}),this._notifyAfterValidate(e,o)}else this._notifyAfterValidate(e,"")}},t.prototype._notifyAfterValidate=function(e,t){e===this.value&&this.props.onNotifyValidationResult&&this.props.onNotifyValidationResult(t,e)},t.prototype._adjustInputHeight=function(){var e,t;if(this._textElement.current&&this.props.autoAdjustHeight&&this.props.multiline){var r=null===(t=null===(e=this.props.scrollContainerRef)||void 0===e?void 0:e.current)||void 0===t?void 0:t.scrollTop,o=this._textElement.current;o.style.height="",o.style.height=o.scrollHeight+"px",r&&(this.props.scrollContainerRef.current.scrollTop=r)}},t.defaultProps={resizable:!0,deferredValidationTime:200,validateOnLoad:!0},t}(s.Component);function y(e,t){var r=e.value,o=void 0===r?t.uncontrolledValue:r;return"number"==typeof o?String(o):o}function E(e){return!(e.validateOnFocusIn||e.validateOnFocusOut)}var C=r(1315),R={root:"ms-TextField",description:"ms-TextField-description",errorMessage:"ms-TextField-errorMessage",field:"ms-TextField-field",fieldGroup:"ms-TextField-fieldGroup",prefix:"ms-TextField-prefix",suffix:"ms-TextField-suffix",wrapper:"ms-TextField-wrapper",revealButton:"ms-TextField-reveal",multiline:"ms-TextField--multiline",borderless:"ms-TextField--borderless",underlined:"ms-TextField--underlined",unresizable:"ms-TextField--unresizable",required:"is-required",disabled:"is-disabled",active:"is-active"},T=(0,i.z)(_,function(e){var t,r,o,i,s,a,l,d,u,p,c,h,f,m,g,v,b,x,_=e.theme,y=e.className,E=e.disabled,T=e.focused,I=e.required,S=e.multiline,B=e.hasLabel,F=e.borderless,w=e.underlined,N=e.hasIcon,M=e.resizable,k=e.hasErrorMessage,V=e.inputClassName,P=e.autoAdjustHeight,H=e.hasRevealButton,q=_.semanticColors,A=_.effects,z=_.fonts,O=(0,C.Cn)(R,_),J={background:q.disabledBackground,color:E?q.disabledText:q.inputPlaceholderText,display:"flex",alignItems:"center",padding:"0 10px",lineHeight:1,whiteSpace:"nowrap",flexShrink:0,selectors:((l={})[C.qJ]={background:"Window",color:E?"GrayText":"WindowText"},l)},j=[{color:q.inputPlaceholderText,opacity:1,selectors:((d={})[C.qJ]={color:"GrayText"},d)}],D={color:q.disabledText,selectors:((u={})[C.qJ]={color:"GrayText"},u)};return{root:[O.root,z.medium,I&&O.required,E&&O.disabled,T&&O.active,S&&O.multiline,F&&O.borderless,w&&O.underlined,C.Fv,{position:"relative"},y],wrapper:[O.wrapper,w&&[{display:"flex",borderBottom:"1px solid ".concat(k?q.errorText:q.inputBorder),width:"100%"},E&&{borderBottomColor:q.disabledBackground,selectors:((p={})[C.qJ]=(0,n.pi)({borderColor:"GrayText"},(0,C.xM)()),p)},!E&&{selectors:{":hover":{borderBottomColor:k?q.errorText:q.inputBorderHovered,selectors:((c={})[C.qJ]=(0,n.pi)({borderBottomColor:"Highlight"},(0,C.xM)()),c)}}},T&&[{position:"relative"},(0,C.$Y)(k?q.errorText:q.inputFocusBorderAlt,0,"borderBottom")]]],fieldGroup:[O.fieldGroup,C.Fv,{border:"1px solid ".concat(q.inputBorder),borderRadius:A.roundedCorner2,background:q.inputBackground,cursor:"text",height:32,display:"flex",flexDirection:"row",alignItems:"stretch",position:"relative"},S&&{minHeight:"60px",height:"auto",display:"flex"},!T&&!E&&{selectors:{":hover":{borderColor:q.inputBorderHovered,selectors:((h={})[C.qJ]=(0,n.pi)({borderColor:"Highlight"},(0,C.xM)()),h)}}},T&&!w&&(0,C.$Y)(k?q.errorText:q.inputFocusBorderAlt,A.roundedCorner2),E&&{borderColor:q.disabledBackground,selectors:((f={})[C.qJ]=(0,n.pi)({borderColor:"GrayText"},(0,C.xM)()),f),cursor:"default"},F&&{border:"none"},F&&T&&{border:"none",selectors:{":after":{border:"none"}}},w&&{flex:"1 1 0px",border:"none",textAlign:"left"},w&&E&&{backgroundColor:"transparent"},k&&!w&&{borderColor:q.errorText,selectors:{"&:hover":{borderColor:q.errorText}}},!B&&I&&{selectors:((m={":before":{content:"'*'",color:q.errorText,position:"absolute",top:-5,right:-10}})[C.qJ]={selectors:{":before":{color:"WindowText",right:-14}}},m)}],field:[z.medium,O.field,C.Fv,{borderRadius:0,border:"none",background:"none",backgroundColor:"transparent",color:q.inputText,padding:"0 8px",width:"100%",minWidth:0,textOverflow:"ellipsis",outline:0,selectors:((g={"&:active, &:focus, &:hover":{outline:0},"::-ms-clear":{display:"none"}})[C.qJ]={background:"Window",color:E?"GrayText":"WindowText"},g)},(0,C.Sv)(j),S&&!M&&[O.unresizable,{resize:"none"}],S&&{minHeight:"inherit",lineHeight:17,flexGrow:1,paddingTop:6,paddingBottom:6,overflow:"auto",width:"100%"},S&&P&&{overflow:"hidden"},N&&!H&&{paddingRight:24},S&&N&&{paddingRight:40},E&&[{backgroundColor:q.disabledBackground,color:q.disabledText,borderColor:q.disabledBackground},(0,C.Sv)(D)],w&&{textAlign:"left"},T&&!F&&{selectors:((v={})[C.qJ]={paddingLeft:11,paddingRight:11},v)},T&&S&&!F&&{selectors:((b={})[C.qJ]={paddingTop:4},b)},V],icon:[S&&{paddingRight:24,alignItems:"flex-end"},{pointerEvents:"none",position:"absolute",bottom:6,right:8,top:"auto",fontSize:C.ld.medium,lineHeight:18},E&&{color:q.disabledText}],description:[O.description,{color:q.bodySubtext,fontSize:z.xSmall.fontSize}],errorMessage:[O.errorMessage,C.k4.slideDownIn20,z.small,{color:q.errorText,margin:0,paddingTop:5,display:"flex",alignItems:"center"}],prefix:[O.prefix,J],suffix:[O.suffix,J],revealButton:[O.revealButton,"ms-Button","ms-Button--icon",(0,C.GL)(_,{inset:1}),{height:30,width:32,border:"none",padding:"0px 4px",backgroundColor:"transparent",color:q.link,selectors:{":hover":{outline:0,color:q.primaryButtonBackgroundHovered,backgroundColor:q.buttonBackgroundHovered,selectors:((x={})[C.qJ]={borderColor:"Highlight",color:"Highlight"},x)},":focus":{outline:0}}},N&&{marginRight:28}],revealSpan:{display:"flex",height:"100%",alignItems:"center"},revealIcon:{margin:"0px 4px",pointerEvents:"none",bottom:6,right:8,top:"auto",fontSize:C.ld.medium,lineHeight:18},subComponentStyles:{label:(t=e.underlined,r=e.disabled,o=e.focused,s=(i=e.theme).palette,a=i.fonts,function(){var e;return{root:[t&&r&&{color:s.neutralTertiary},t&&{fontSize:a.medium.fontSize,marginRight:8,paddingLeft:12,paddingRight:0,lineHeight:"22px",height:32},t&&o&&{selectors:((e={})[C.qJ]={height:31},e)}]}})}}},void 0,{scope:"TextField"})},4911:function(e,t,r){r.d(t,{U:function(){return s}});var o=r(3213),i=r(696),n=r(3332),s=function(e){function t(t){var r=e.call(this,t)||this;return r.state={isRendered:void 0===(0,n.J)()},r}return(0,o.ZT)(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props.delay;this._timeoutId=window.setTimeout(function(){e.setState({isRendered:!0})},t)},t.prototype.componentWillUnmount=function(){this._timeoutId&&clearTimeout(this._timeoutId)},t.prototype.render=function(){return this.state.isRendered?i.Children.only(this.props.children):null},t.defaultProps={delay:0},t}(i.Component)}}]);
//# sourceMappingURL=425-353ee652c382f360.js.map