webpackJsonp([3],{215:function(e,t,n){"use strict";var r=n(18),o=(n(219),n(245)),i=n(222),a=n(247),s=n(225),c=r.createClass({displayName:"demoComponent",getInitialState:function(){return{}},componentWillMount:function(){o.use()},componentWillUnmount:function(){o.unuse()},render:function(){return r.createElement("div",{className:"home-box"},r.createElement(i,{title:"home"}),r.createElement(a,null),r.createElement(s,null))}});e.exports=c},217:function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},218:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(l(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(l(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:a}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s=i[1],c=i[2],u=i[3],l={css:s,media:c,sourceMap:u};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}function i(e,t){var n=v(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=y[y.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",u(t,e.attrs),i(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",u(t,e.attrs),i(e,t),t}function u(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function l(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var u=g++;n=b||(b=s(t)),r=f.bind(null,n,u,!1),o=f.bind(null,n,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=m.bind(null,n,t),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=p.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=N(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function m(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=x(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var d={},h=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),b=null,g=0,y=[],x=n(221);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=h()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=d[s.id];c.refs--,i.push(c)}if(e){r(o(e,t),t)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete d[c.id]}}}};var N=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},219:function(e,t,n){var r=n(220);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(218)(r,o);r.locals&&(e.exports=r.locals)},220:function(e,t,n){t=e.exports=n(217)(void 0),t.push([e.i,'* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\t-webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n}\nbody {\n\tbackground-color: #fff;\n\tfont-family:"\\5B8B\\4F53", "\\5FAE\\8F6F\\96C5\\9ED1", "arial";\n}\n\n/*浮动*/\n.left { \n\tfloat: left;\n}\n.right { \n\tfloat: right;\n}\n\n/*清除浮动*/\n.clearfix:after {\n\tcontent: "";\n\tdisplay: block;\n\theight: 0;\n\tvisibility: hidden;\n\tclear: both;\n}\n.clearfix {\n\tzoom:1;\n}    ',""])},221:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},222:function(e,t,n){"use strict";var r=n(18),o=n(223),i=n(95),a=n(96),s=i.projectName,c=r.createClass({displayName:"headerComponent",getInitialState:function(){return{selectedItem:"bianmin"}},getDefaultProps:function(){return{selectedItem:"bianmin"}},componentWillMount:function(){o.use()},componentWillUnmount:function(){o.unuse()},componentDidMount:function(){this.setDefaultSelectedItem()},getMenuList:function(){return[{enName:"bianmin",cnName:"便民"},{enName:"caijing",cnName:"财经"},{enName:"shipin",cnName:"视频"},{enName:"lvtu",cnName:"旅途"}]},handleMenuItemClick:function(e){if(e!==this.state.selectedItem){var t="bianmin"===e?"/"+s:"/"+s+"/"+e;a.replace(t)}},setDefaultSelectedItem:function(){var e=this.props.selectedItem;this.setState({selectedItem:e})},render:function(){var e=this,t=this.getMenuList(),n=this.state.selectedItem;return r.createElement("section",{className:"header-box"},r.createElement("ul",{className:"header-items"},t.map(function(t,o){var i=t.enName,a=t.cnName,s=n===i?"header-item-selected":"";return r.createElement("li",{onClick:e.handleMenuItemClick.bind(e,i),key:o,className:"header-item item-"+i+" "+s},a)})))}});e.exports=c},223:function(e,t,n){var r,o=0,i=n(224);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(t.locals=i.locals),t.use=t.ref=function(){return o++||(r=n(218)(i,{})),t},t.unuse=t.unref=function(){o>0&&!--o&&(r(),r=null)}},224:function(e,t,n){t=e.exports=n(217)(void 0),t.push([e.i,".header-items {\n    height: .88rem;\n    line-height: .88rem;\n    background-color: #f4f5f6;\n}\n.header-item {\n\tfloat: left;\n\twidth: 25%;\n    list-style-type: none;\n    text-align: center;\n    color: #333;\n    font-size: .32rem;\n}\n.header-item-selected {\n    color: #f85959;\n}",""])},225:function(e,t,n){"use strict";var r=n(18),o=n(226),i=r.createClass({displayName:"footerComponent",getInitialState:function(){return{}},componentWillMount:function(){o.use()},componentWillUnmount:function(){o.unuse()},render:function(){return r.createElement("div",{className:"footer-box"})}});e.exports=i},226:function(e,t,n){var r,o=0,i=n(227);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(t.locals=i.locals),t.use=t.ref=function(){return o++||(r=n(218)(i,{})),t},t.unuse=t.unref=function(){o>0&&!--o&&(r(),r=null)}},227:function(e,t,n){t=e.exports=n(217)(void 0),t.push([e.i,".footer-box {\n\n}",""])},245:function(e,t,n){var r,o=0,i=n(246);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(t.locals=i.locals),t.use=t.ref=function(){return o++||(r=n(218)(i,{})),t},t.unuse=t.unref=function(){o>0&&!--o&&(r(),r=null)}},246:function(e,t,n){t=e.exports=n(217)(void 0),t.push([e.i,".home-box {\n\t\n}",""])},247:function(e,t,n){"use strict";var r=n(18),o=n(248),i=r.createClass({displayName:"contentComponent",getInitialState:function(){return{}},componentWillMount:function(){o.use()},componentWillUnmount:function(){o.unuse()},render:function(){return r.createElement("div",{className:"content-box"},r.createElement("div",{className:"demo-part demo-part1"},"第一部分"),r.createElement("div",{className:"demo-part demo-part2"},"第二部分"),r.createElement("div",{className:"demo-part demo-part3"},"第三部分"),r.createElement("div",{className:"demo-part demo-part4"},"第四部分"),r.createElement("div",{className:"demo-part demo-part5"},"第五部分"))}});e.exports=i},248:function(e,t,n){var r,o=0,i=n(249);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(t.locals=i.locals),t.use=t.ref=function(){return o++||(r=n(218)(i,{})),t},t.unuse=t.unref=function(){o>0&&!--o&&(r(),r=null)}},249:function(e,t,n){t=e.exports=n(217)(void 0),t.push([e.i,".content-box {\n    font-size: .26rem;\n    text-align: center;\n    margin-top: .5rem;\n}",""])}});