/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/awesome-notifications/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/awesome-notifications/dist/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={modal:"awn-modal",toast:"awn-toast",btn:"awn-btn",confirm:"awn-confirm"};t.tConsts={prefix:i.toast,klass:{label:i.toast+"-label",content:i.toast+"-content",icon:i.toast+"-icon",progressBar:i.toast+"-progress-bar",progressBarPause:i.toast+"-progress-bar-paused"},ids:{container:i.toast+"-container"}},t.mConsts={prefix:i.modal,klass:{buttons:"awn-buttons",button:i.btn,successBtn:i.btn+"-success",cancelBtn:i.btn+"-cancel",title:i.modal+"-title",body:i.modal+"-body",content:i.modal+"-content",dotAnimation:i.modal+"-loading-dots"},ids:{wrapper:i.modal+"-wrapper",confirmOk:i.confirm+"-ok",confirmCancel:i.confirm+"-cancel"}},t.eConsts={klass:{hiding:"awn-hiding"},lib:"awn"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(0);var r=function(){function e(t,n,i,o,r){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"div";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.newNode=document.createElement(s),n&&(this.newNode.id=n),i&&(this.newNode.className=i),r&&(this.newNode.innerHTML=r),o&&(this.newNode.style.cssText=o),this.parent=t,this.options={}}return i(e,[{key:"fire",value:function(e){return e?e.replace(this.newNode,this.type):this.insert()}},{key:"beforeInsert",value:function(){}},{key:"insert",value:function(){this.beforeInsert(),this.el=this.parent.appendChild(this.newNode),this.afterInsert()}},{key:"replace",value:function(e,t){var n=this;if(this.getElement())return this.beforeDelete().then(function(){n.type=t,n.parent.replaceChild(e,n.el),n.el=document.getElementById(e.id),n.afterInsert()})}},{key:"afterInsert",value:function(){}},{key:"beforeDelete",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el;return new Promise(function(n,i){t.classList.add(o.eConsts.klass.hiding),setTimeout(n,e.options.animationDuration||300)})}},{key:"delete",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el;return this.getElement(t)?this.beforeDelete(t).then(function(){return e.parent.removeChild(t)}):null}},{key:"getElement",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el;return document.getElementById(e.id)}},{key:"addEvent",value:function(e,t){this.el.addEventListener(e,t)}},{key:"addClass",value:function(e){this.el.classList.add(e)}},{key:"removeClass",value:function(e){this.el.classList.remove(e)}}]),e}();t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(1),s=(i=r)&&i.__esModule?i:{default:i},a=n(0);var u=function(e){function t(e,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,document.body,a.mConsts.ids.wrapper,null,"animation-duration: "+i.getSecs("animationDuration")+";"));return o.options=i,o.type=n,o.setInnerHtml(e),o.insert(),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default),o(t,[{key:"setInnerHtml",value:function(e){var t=this.options.applyReplacements(e,this.type);switch(this.type){case"confirm":t="\n          "+this.options.icon(this.type)+"\n          <div class='"+a.mConsts.klass.title+"'>\n            "+this.options.label(this.type)+'\n          </div>\n          <div class="'+a.mConsts.klass.content+'">'+t+"</div>\n          <div class='"+a.mConsts.klass.buttons+"'>\n            <button class='"+a.mConsts.klass.button+" "+a.mConsts.klass.successBtn+"' id='"+a.mConsts.ids.confirmOk+"'>"+this.options.modal.okLabel+"</button>\n            <button class='"+a.mConsts.klass.button+" "+a.mConsts.klass.cancelBtn+"' id='"+a.mConsts.ids.confirmCancel+"'>"+this.options.modal.cancelLabel+"</button>\n          </div>\n       ";break;case"async-block":t=t+'<div class="'+a.mConsts.klass.dotAnimation+'"></div>'}this.newNode.innerHTML='\n      <div class="'+a.mConsts.klass.body+" "+a.mConsts.prefix+"-"+this.type+'" style="max-width: '+this.options.modal.maxWidth+';">\n        '+t+"\n      </div>\n     "}},{key:"hideAsync",value:function(e){var t=this,n=Date.now()-e;return new Promise(function(e,i){n>=t.options.asyncBlockMinDuration?(t.delete(),e()):setTimeout(function(){t.delete(),e()},t.options.asyncBlockMinDuration-n)})}}]),t}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.callback=t,this.remaining=n,this.resume()}return i(e,[{key:"pause",value:function(){window.clearTimeout(this.timerId),this.remaining-=new Date-this.start}},{key:"resume",value:function(){var e=this;this.start=new Date,window.clearTimeout(this.timerId),this.timerId=window.setTimeout(function(){window.clearTimeout(e.timerId),e.callback()},this.remaining)}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=a(n(1)),r=a(n(3)),s=n(0);function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e,n,i,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,o,s.tConsts.prefix+"-"+Math.floor(Date.now()-100*Math.random()),s.tConsts.prefix+" "+s.tConsts.prefix+"-"+n,"animation-duration: "+i.getSecs("animationDuration")+";"));return r.options=i,r.type=n,r.setInnerHtml(e),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),i(t,[{key:"setInnerHtml",value:function(e){e=this.options.applyReplacements(e,this.type);var t="";"async"!==this.type&&(t="<div class='"+s.tConsts.klass.progressBar+"' style=\"animation-duration:"+this.options.getSecs("duration")+';"></div>'),this.newNode.innerHTML="\n    "+t+"\n    "+this.getLabel()+'\n    <div class="'+s.tConsts.klass.content+'">'+e+'</div>\n    <span class="'+s.tConsts.klass.icon+'">'+this.options.icon(this.type)+"</span>\n    "}},{key:"beforeInsert",value:function(){var e=this;if(this.parent.childElementCount>=this.options.maxNotifications){var t=Array.from(this.parent.getElementsByClassName(s.tConsts.prefix));this.delete(t.find(function(t){return!e.isDeleted(t)}))}}},{key:"afterInsert",value:function(){var e=this;"async"!=this.type&&(this.timer=new r.default(function(){return e.delete()},this.options.duration),this.addEvent("click",function(){return e.delete()}),this.addEvent("mouseenter",function(){e.isDeleted()||(e.addClass(s.tConsts.klass.progressBarPause),e.timer.pause())}),this.addEvent("mouseleave",function(){e.isDeleted()||(e.removeClass(s.tConsts.klass.progressBarPause),e.timer.resume())}))}},{key:"isDeleted",value:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el).classList.contains(s.eConsts.klass.hiding)}},{key:"getLabel",value:function(){return'<b class="'+s.tConsts.klass.label+'">'+this.options.label(this.type)+"</b>"}}]),t}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var r={labels:{tip:"Tip",info:"Info",success:"Success",warning:"Attention",alert:"Error",async:"Loading",confirm:"Confirmation required"},icons:{tip:"question-circle",info:"info-circle",success:"check-circle",warning:"exclamation-circle",alert:"warning",async:"cog fa-spin",confirm:"warning",prefix:"<i class='fa fa-fw fa-",suffix:"'></i>",enabled:!0},replacements:{tip:"",info:"",success:"",warning:"",alert:"",async:"","async-block":"",modal:"",confirm:"",general:{"<script>":"","<\/script>":""}},modal:{okLabel:"OK",cancelLabel:"Cancel",maxWidth:"500px"},messages:{async:"Please, wait...","async-block":"Loading"},handleReject:function(e){if("string"!=typeof e)throw Error("promise.reject() returning value should be a string, Given "+(void 0===e?"undefined":o(e))+" "+e);return e},maxNotifications:10,animationDuration:300,asyncBlockMinDuration:500,position:"bottom-right",duration:5e3},s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.assign(this,function e(t,n){var i={};for(var r in t)n.hasOwnProperty(r)?"object"===o(t[r])?i[r]=e(t[r],n[r]):i[r]=n[r]:i[r]=t[r];return i}(r,t))}return i(e,[{key:"icon",value:function(e){return this.icons.enabled?""+this.icons.prefix+this.icons[e]+this.icons.suffix:""}},{key:"label",value:function(e){return this.labels[e]}},{key:"getSecs",value:function(e){return this[e]/1e3+"s"}},{key:"applyReplacements",value:function(e,t){if(!e)return this.messages[t]||"";for(var n in this.replacements.general)e=e.replace(n,this.replacements.general[n]);if(this.replacements[t])for(var i in this.replacements[t])e=e.replace(i,this.replacements[t][i]);return e}}]),e}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=l(n(5)),s=l(n(4)),a=l(n(2)),u=l(n(1)),c=n(0);function l(e){return e&&e.__esModule?e:{default:e}}var f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=new r.default(t)}return o(e,[{key:"_err",value:function(e){throw Error(e)}},{key:"tip",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err("missing 'html' parameter");this.notify(e,"tip")}},{key:"info",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err("missing 'html' parameter");this.notify(e,"info")}},{key:"success",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err("missing 'html' parameter");this.notify(e,"success")}},{key:"warning",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err("missing 'html' parameter");this.notify(e,"warning")}},{key:"alert",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err("missing 'html' parameter");this.notify(e,"alert")}},{key:"async",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err("missing 'promise' parameter"),t=arguments[1],n=this,i=arguments[2],o=arguments[3],r=this.notify(o,"async");return e.then(function(e){return n._runFunction(!0,t,e,r)},function(e){return Promise.reject(n._runFunction(!1,i,e,r))})}},{key:"notify",value:function(e,t,n){var i=new s.default(e,t,this.options,this._getContainer());return i.fire(n),i}},{key:"confirm",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err("missing 'html' parameter"),t=this,n=arguments[1],i=arguments[2],o=new a.default(e,"confirm",this.options);o.addEvent("click",function(e){if("BUTTON"!==e.target.nodeName)return!1;switch(o.delete(),e.target.id){case c.mConsts.ids.confirmOk:return t._runFunction(!0,n);case c.mConsts.ids.confirmCancel:return t._runFunction(!0,i)}})}},{key:"asyncBlock",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err("missing 'promise' parameter"),t=arguments[1],n=this,i=arguments[2],o=arguments[3],r=new a.default(o,"async-block",this.options),s=Date.now();return e.then(function(e){return r.hideAsync(s).then(function(){return n._runFunction(!0,t,e)})},function(e){return r.hideAsync(s).then(function(){return Promise.reject(n._runFunction(!1,i,e))})})}},{key:"modal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._err("missing 'html' parameter"),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._err("missing className parameter"),n=new a.default(e,t,this.options);n.addEvent("click",function(e){e.target.id===n.el.id&&n.delete()})}},{key:"_getContainer",value:function(){return this.container||(this.container=document.getElementById(c.tConsts.ids.container)||this._createContainer()),this.container}},{key:"_createContainer",value:function(){var e=this.options.position.split("-"),t="top"===e[0]?c.eConsts.lib+"-top":"";"left"===e[1]&&(t=t+" "+c.eConsts.lib+"-left");var n=new u.default(document.body,c.tConsts.ids.container,t);return n.insert(),n.el}},{key:"_runFunction",value:function(e,t,n,o){switch(void 0===t?"undefined":i(t)){case"function":return o&&o.delete(),t(n);case"string":return this.notify(t,e?"success":"alert",o),n}return e?o&&o.delete():this.notify(this.options.handleReject(n),"alert",o),n}}]),e}();t.default=f}])});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/AddRole.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/participant/AddRole.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddRoleForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddRoleForm */ "./resources/js/components/participant/AddRoleForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AddRole",
  components: {
    AddRoleForm: _AddRoleForm__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    allowed: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    },
    onlyOneRole: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      roles: []
    };
  },
  created: function created() {
    var _this = this;

    this.$http.get('role').then(function (response) {
      return _this.roles = response.data;
    })["catch"](function (error) {
      return _this.$notify.alert('Could not load roles: ' + error.message);
    });
  },
  methods: {
    positionIsAvailable: function positionIsAvailable(position) {
      if (this.onlyOneRole.filter(function (p) {
        return p.id === position.id;
      }).length > 0) {
        if (this.roles.filter(function (role) {
          return role.position_id === position.id;
        }).length > 0) {
          return false;
        }
      }

      return true;
    }
  },
  computed: {
    positions: function positions() {
      var _this2 = this;

      return this.allowed.filter(function (position) {
        return _this2.positionIsAvailable(position);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/AddRoleForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/participant/AddRoleForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AddRoleForm",
  props: {
    positions: {
      required: true,
      type: Array
    }
  },
  data: function data() {
    return {
      positionId: null,
      role_name: null,
      email: null
    };
  },
  watch: {
    positionId: function positionId(newVal, oldVal) {
      // If role name is empty or hasn't been changed then assign Position Name
      return !this.role_name || this.role_name === this.getPositionName(oldVal) ? this.role_name = this.getPositionName(newVal) : '';
    }
  },
  methods: {
    getPositionName: function getPositionName(positionId) {
      if (this.positions.filter(function (p) {
        return p.id === positionId;
      }).length > 0) {
        return this.positions.filter(function (p) {
          return p.id === positionId;
        })[0].data.name;
      }

      return 'position #' + positionId;
    },
    createRole: function createRole() {
      var _this = this;

      var self = this;
      this.$http.post('/role', {
        position_id: this.positionId,
        role_name: this.role_name === '' ? null : this.role_name,
        email: this.email === '' ? null : this.email
      }).then(function (response) {
        _this.$bvModal.msgBoxConfirm('Would you like to add a user to the role?', {
          title: 'Confirmation',
          size: 'sm',
          buttonSize: 'sm',
          okTitle: 'YES',
          cancelTitle: 'NO',
          footerClass: 'p-2',
          hideHeaderClose: true,
          centered: true
        }).then(function (value) {
          if (value === true) {
            // Refresh Table and Trigger other Modal:
            self.$root.$emit('triggerRefresh', response.data.id);

            _this.$bvModal.hide('add-role');

            return;
          } // Refresh Page:


          self.$root.$emit('triggerRefresh');

          _this.$notify.success('Created the role');

          _this.$bvModal.hide('add-role');
        })["catch"](function () {});
      })["catch"](function (error) {
        _this.$notify.alert('Could not create the role: ' + error.message);
      });
    }
  },
  computed: {
    positionOptions: function positionOptions() {
      return this.positions.map(function (position) {
        return {
          value: position.id,
          text: position.data.name
        };
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/AddUser.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/participant/AddUser.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AddUser",
  props: {
    role: {
      required: true,
      type: Object
    },
    availableUsers: {
      required: false,
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    assignedUsers: {
      required: false,
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    onlyOneUser: {
      required: false,
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      selectedUser: null
    };
  },
  methods: {
    addUser: function addUser() {
      var _this = this;

      var self = this;
      this.$http.patch('role/' + this.role.id + '/user/' + this.selectedUser).then(function (response) {
        _this.$notify.success('User assigned to role');

        _this.$bvModal.hide('add-user-' + _this.role.id);

        self.$root.$emit('triggerRefresh');
      })["catch"](function (error) {
        return _this.$notify.alert('User could not be assigned to role: ' + error.message);
      });
    }
  },
  computed: {
    modalTitle: function modalTitle() {
      return 'Add a user to ' + this.role.data.role_name;
    },
    options: function options() {
      var _this2 = this;

      return this.availableUsers.sort(function (a, b) {
        return a.data.first_name.localeCompare(b.data.first_name);
      }).filter(function (member) {
        return _this2.assignedUsers.filter(function (u) {
          return u.id === member.id;
        }).length === 0;
      }).map(function (member) {
        return {
          value: member.id,
          text: member.data.first_name + ' ' + member.data.last_name
        };
      });
    },
    roleShouldOnlyHaveOneUser: function roleShouldOnlyHaveOneUser() {
      var _this3 = this;

      return this.onlyOneUser.filter(function (position) {
        return position.id === _this3.role.position_id;
      }).length > 0;
    },
    spaceAvailable: function spaceAvailable() {
      return !this.roleShouldOnlyHaveOneUser || this.role.users.length === 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/AssignedUser.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/participant/AssignedUser.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AssignedUser",
  props: {
    user: {
      required: true,
      type: Object
    },
    role: {
      required: true,
      type: Object
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    deleteUser: function deleteUser() {
      var _this = this;

      var self = this;
      this.$bvModal.msgBoxConfirm('Are you sure you want to remove this user?', {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      }).then(function (value) {
        if (value) {
          _this.$http["delete"]('role/' + _this.role.id + '/user/' + _this.user.id).then(function (response) {
            _this.$notify.success('User removed from role');

            self.$root.$emit('triggerRefresh');
          })["catch"](function (error) {
            return _this.$notify.alert('User could not be removed from role: ' + error.message);
          });
        }
      })["catch"](function (err) {// An error occurred
      });
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/DeleteRole.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/participant/DeleteRole.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DeleteRole",
  props: {
    role: {
      required: true,
      type: Object
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    deleteRole: function deleteRole() {
      var _this = this;

      var self = this;

      if (this.role.users.length > 0) {
        this.couldNotDeleteBox();
      } else {
        this.deleteRoleBox().then(function (val) {
          if (val) {
            console.log(val);

            _this.$http["delete"]('role/' + _this.role.id).then(function (response) {
              _this.$notify.success('User removed from role');

              self.$root.$emit('triggerRefresh');
            })["catch"](function (error) {
              return _this.$notify.alert('User could not be removed from role: ' + error.message);
            });
          }
        })["catch"](function (error) {
          console.log(error);
        });
      }
    },
    deleteRoleBox: function deleteRoleBox() {
      return this.$bvModal.msgBoxConfirm('Are you sure you want to remove this role?', {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      });
    },
    couldNotDeleteBox: function couldNotDeleteBox() {
      this.$bvModal.msgBoxOk('Could not delete the role. Please remove users from this role first.', {
        title: 'Could not delete role',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'info',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        centered: true
      }).then(function (value) {})["catch"](function (err) {// An error occurred
      });
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/EditRole.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/participant/EditRole.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "EditRole",
  props: {
    role: {
      required: true,
      type: Object
    }
  },
  data: function data() {
    return {
      name: null,
      email: null
    };
  },
  created: function created() {
    this.name = this.role.data.role_name;
    this.email = this.role.data.email;
  },
  methods: {
    editRole: function editRole() {
      var _this = this;

      var self = this;
      var attributes = {};

      if (this.name !== this.role.data.role_name) {
        attributes['role_name'] = this.name;
      }

      if (this.email !== this.role.data.email) {
        attributes['email'] = this.email;
      }

      this.$http.patch('/role/' + this.role.id, attributes).then(function (response) {
        _this.$notify.success('Role updated');

        self.$root.$emit('triggerRefresh');
      })["catch"](function (error) {
        return _this.$notify.alert('Could not update role: ' + error.message);
      });
    }
  },
  computed: {
    positions: function positions() {
      var _this2 = this;

      return this.allowed.filter(function (position) {
        return _this2.positionIsAvailable(position);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/RoleTable.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/participant/RoleTable.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AssignedUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssignedUser */ "./resources/js/components/participant/AssignedUser.vue");
/* harmony import */ var _AddUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddUser */ "./resources/js/components/participant/AddUser.vue");
/* harmony import */ var _DeleteRole__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeleteRole */ "./resources/js/components/participant/DeleteRole.vue");
/* harmony import */ var _EditRole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditRole */ "./resources/js/components/participant/EditRole.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "RoleTable",
  components: {
    EditRole: _EditRole__WEBPACK_IMPORTED_MODULE_3__["default"],
    DeleteRole: _DeleteRole__WEBPACK_IMPORTED_MODULE_2__["default"],
    AddUser: _AddUser__WEBPACK_IMPORTED_MODULE_1__["default"],
    AssignedUser: _AssignedUser__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    allowed: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    },
    onlyOneRole: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    },
    onlyOneUser: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    },
    userOnlyHasOneRole: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    }
  },
  created: function created() {
    this.loadRoles();
    this.loadMembers();
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.$on('triggerRefresh', function (data) {
      _this.addRole = data; // Update Table Data:

      _this.loadRoles();

      _this.loadMembers();
    });
  },
  data: function data() {
    return {
      fields: [{
        key: 'position.data.name',
        label: 'Position Type'
      }, {
        key: 'data.role_name',
        label: 'Role Title'
      }, {
        key: 'data.email',
        label: 'Generic Email'
      }, {
        key: 'assigned',
        label: 'Name(s) of post holder(s)'
      }, {
        key: 'actions',
        label: 'Actions'
      }],
      roles: [],
      members: [],
      loadingRoles: false,
      addRole: null
    };
  },
  methods: {
    loadRoles: function loadRoles() {
      var _this2 = this;

      this.loadingRoles = true;
      this.$http.get('role').then(function (response) {
        return _this2.roles = response.data;
      })["catch"](function (error) {
        return _this2.$notify.alert('Could not load the roles: ' + error.message);
      }).then(function () {
        return _this2.loadingRoles = false;
      }).then(function () {
        if (_this2.addRole) {
          // Open Modal:
          _this2.$bvModal.show('add-user-' + _this2.addRole); // Reset Value:


          _this2.addRole = null;
        }
      });
    },
    loadMembers: function loadMembers() {
      var _this3 = this;

      this.$http.get('/members').then(function (response) {
        return _this3.members = response.data;
      })["catch"](function (error) {
        return _this3.$notify.alert('Members could not be loaded: ' + error.message);
      });
    },
    deleteRole: function deleteRole(roleId) {
      var _this4 = this;

      var self = this;
      this.$bvModal.msgBoxConfirm('Are you sure you want to remove this role?', {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      }).then(function (value) {
        if (value) {
          _this4.$http["delete"]('role/' + _this4.role.id + '/user/' + _this4.user.id).then(function (response) {
            _this4.$notify.success('User removed from role');

            self.$root.$emit('triggerRefresh');
          })["catch"](function (error) {
            return _this4.$notify.alert('User could not be removed from role: ' + error.message);
          });
        }
      })["catch"](function (err) {// An error occurred
      });
    }
  },
  computed: {
    tableRoles: function tableRoles() {
      return this.roles.map(function (role) {
        return {
          position_name: role.position.data.name,
          role_name: role.data.role_name,
          role_email: role.data.email,
          users: role.users
        };
      });
    },
    takenUsers: function takenUsers() {
      var _this5 = this;

      return this.roles.filter(function (role) {
        return _this5.userOnlyHasOneRole.filter(function (position) {
          return position.id === role.position_id;
        }).length > 0;
      }).map(function (role) {
        return role.users;
      }).flat(1);
    },
    availableUsers: function availableUsers() {
      var _this6 = this;

      return this.members.filter(function (member) {
        console.log(_this6.takenUsers);
        return _this6.takenUsers.filter(function (user) {
          return user.id === member.id;
        }).length === 0;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/AddRole.vue?vue&type=template&id=71164640&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/participant/AddRole.vue?vue&type=template&id=71164640&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.positions.length > 0
        ? _c(
            "div",
            { staticStyle: { "text-align": "right" } },
            [
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "b-modal",
                      rawName: "v-b-modal.add-role",
                      modifiers: { "add-role": true }
                    }
                  ],
                  attrs: { size: "lg", variant: "outline-info" }
                },
                [_vm._v("Add Role")]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "add-role",
            "ok-only": "",
            "ok-title": "Cancel",
            "ok-variant": "danger"
          }
        },
        [_c("add-role-form", { attrs: { positions: _vm.positions } })],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/AddRoleForm.vue?vue&type=template&id=1a42a124&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/participant/AddRoleForm.vue?vue&type=template&id=1a42a124&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.createRole.apply(null, arguments)
            }
          }
        },
        [
          _c(
            "b-form-group",
            {
              attrs: {
                id: "position-id-group",
                label: "Position Type",
                "label-for": "position-id",
                description: "What type of role is this?"
              }
            },
            [
              _c(
                "b-form-select",
                {
                  attrs: { options: _vm.positionOptions, required: "" },
                  model: {
                    value: _vm.positionId,
                    callback: function($$v) {
                      _vm.positionId = $$v
                    },
                    expression: "positionId"
                  }
                },
                [
                  _c(
                    "b-form-select-option",
                    { attrs: { value: null, disabled: "" } },
                    [_vm._v("-- Please select an option --")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                id: "role-name-group",
                label: "Role Title",
                "label-for": "role-name",
                description: "What should the role be called?"
              }
            },
            [
              _c("b-form-input", {
                attrs: { id: "role-name", type: "text", required: "" },
                model: {
                  value: _vm.role_name,
                  callback: function($$v) {
                    _vm.role_name = $$v
                  },
                  expression: "role_name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              attrs: {
                id: "role-email-group",
                label: "Role Email Address",
                "label-for": "role-email",
                description:
                  "(Optional) Do you have a generic email address that's not a users email address for this role that we may need to contact?"
              }
            },
            [
              _c("b-form-input", {
                attrs: {
                  id: "role-email",
                  type: "email",
                  placeholder: "president@society.co.uk"
                },
                model: {
                  value: _vm.email,
                  callback: function($$v) {
                    _vm.email = $$v
                  },
                  expression: "email"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("b-button", { attrs: { type: "submit", variant: "primary" } }, [
            _vm._v("Add Role")
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/AddUser.vue?vue&type=template&id=7117ff15&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/participant/AddUser.vue?vue&type=template&id=7117ff15&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.spaceAvailable
        ? _c(
            "b-button",
            {
              directives: [
                {
                  name: "b-modal",
                  rawName: "v-b-modal",
                  value: "add-user-" + _vm.role.id,
                  expression: "'add-user-' + role.id"
                }
              ],
              attrs: { size: "sm", variant: "outline-success" }
            },
            [_vm._v("Add")]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "add-user-" + _vm.role.id,
            title: _vm.modalTitle,
            "hide-footer": ""
          }
        },
        [
          _c(
            "b-form-group",
            {
              attrs: {
                id: "user-search-group",
                description: "The user must be a member of your group",
                label: "Search for a user",
                "label-for": "user-search"
              }
            },
            [
              _c(
                "b-form-select",
                {
                  attrs: { options: _vm.options },
                  model: {
                    value: _vm.selectedUser,
                    callback: function($$v) {
                      _vm.selectedUser = $$v
                    },
                    expression: "selectedUser"
                  }
                },
                [
                  _c(
                    "b-form-select-option",
                    { attrs: { value: null, disabled: "" } },
                    [_vm._v("-- Please select a user --")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.selectedUser !== null
            ? _c("b-button", { on: { click: _vm.addUser } }, [
                _vm._v("\n            Add User\n        ")
              ])
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/AssignedUser.vue?vue&type=template&id=05f0d100&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/participant/AssignedUser.vue?vue&type=template&id=05f0d100&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._v(
        "\n    " +
          _vm._s(_vm.user.data.first_name) +
          " " +
          _vm._s(_vm.user.data.last_name) +
          " "
      ),
      _c(
        "b-button",
        {
          attrs: { size: "sm", variant: "outline-danger" },
          on: { click: _vm.deleteUser }
        },
        [_c("i", { staticClass: "fa fa-trash" })]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/DeleteRole.vue?vue&type=template&id=4c01a2c8&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/participant/DeleteRole.vue?vue&type=template&id=4c01a2c8&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-button",
        {
          attrs: { size: "sm", variant: "outline-danger" },
          on: { click: _vm.deleteRole }
        },
        [_c("i", { staticClass: "fa fa-trash" }), _vm._v("Delete\n    ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/EditRole.vue?vue&type=template&id=3007ebe7&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/participant/EditRole.vue?vue&type=template&id=3007ebe7&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-button",
        {
          directives: [
            {
              name: "b-modal",
              rawName: "v-b-modal",
              value: "edit-role-" + _vm.role.id,
              expression: "'edit-role-' + role.id"
            }
          ],
          attrs: { size: "sm", variant: "outline-info" }
        },
        [_c("i", { staticClass: "fa fa-edit" }), _vm._v("Edit\n    ")]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "edit-role-" + _vm.role.id,
            "ok-only": "",
            "ok-title": "Cancel",
            "ok-variant": "danger"
          }
        },
        [
          _c(
            "b-form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.editRole.apply(null, arguments)
                }
              }
            },
            [
              _c(
                "b-form-group",
                {
                  attrs: {
                    description: "What should the role be called?",
                    id: "role-name-group",
                    label: "Role Title",
                    "label-for": "role-name"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: { id: "role-name", required: "", type: "text" },
                    model: {
                      value: _vm.name,
                      callback: function($$v) {
                        _vm.name = $$v
                      },
                      expression: "name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    id: "role-email-group",
                    label: "Generic Role Email",
                    "label-for": "role-email",
                    description:
                      "Is there a generic email for this role, e.g. president@society.co.uk?"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: { id: "role-email", type: "email" },
                    model: {
                      value: _vm.email,
                      callback: function($$v) {
                        _vm.email = $$v
                      },
                      expression: "email"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-button",
                { attrs: { type: "submit", variant: "primary" } },
                [_vm._v("Submit")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/RoleTable.vue?vue&type=template&id=28b1d5c1&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/participant/RoleTable.vue?vue&type=template&id=28b1d5c1&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("b-table", {
        attrs: { fields: _vm.fields, items: _vm.roles, busy: _vm.loadingRoles },
        scopedSlots: _vm._u([
          {
            key: "table-busy",
            fn: function() {
              return [
                _c(
                  "div",
                  { staticClass: "text-center text-danger my-2" },
                  [
                    _c("b-spinner", { staticClass: "align-middle" }),
                    _vm._v(" "),
                    _c("strong", [_vm._v("Loading...")])
                  ],
                  1
                )
              ]
            },
            proxy: true
          },
          {
            key: "cell(assigned)",
            fn: function(data) {
              return [
                _vm._l(data.item.users, function(user) {
                  return _c("assigned-user", {
                    key: user.id,
                    attrs: { user: user, role: data.item }
                  })
                }),
                _vm._v(" "),
                _c("add-user", {
                  attrs: {
                    role: data.item,
                    "available-users": _vm.availableUsers,
                    "assigned-users": data.item.users,
                    "only-one-user": _vm.onlyOneUser
                  }
                })
              ]
            }
          },
          {
            key: "cell(actions)",
            fn: function(data) {
              return [
                _c(
                  "b-row",
                  [
                    _c(
                      "b-col",
                      { staticStyle: { "text-align": "right" } },
                      [_c("edit-role", { attrs: { role: data.item } })],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-col",
                      { staticStyle: { "text-align": "left" } },
                      [_c("delete-role", { attrs: { role: data.item } })],
                      1
                    )
                  ],
                  1
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/participant/AddRole.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/participant/AddRole.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddRole_vue_vue_type_template_id_71164640_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddRole.vue?vue&type=template&id=71164640&scoped=true& */ "./resources/js/components/participant/AddRole.vue?vue&type=template&id=71164640&scoped=true&");
/* harmony import */ var _AddRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddRole.vue?vue&type=script&lang=js& */ "./resources/js/components/participant/AddRole.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddRole_vue_vue_type_template_id_71164640_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddRole_vue_vue_type_template_id_71164640_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "71164640",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/participant/AddRole.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/participant/AddRole.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/participant/AddRole.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddRole.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/AddRole.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/participant/AddRole.vue?vue&type=template&id=71164640&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/participant/AddRole.vue?vue&type=template&id=71164640&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRole_vue_vue_type_template_id_71164640_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddRole.vue?vue&type=template&id=71164640&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/AddRole.vue?vue&type=template&id=71164640&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRole_vue_vue_type_template_id_71164640_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRole_vue_vue_type_template_id_71164640_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/participant/AddRoleForm.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/participant/AddRoleForm.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddRoleForm_vue_vue_type_template_id_1a42a124_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddRoleForm.vue?vue&type=template&id=1a42a124&scoped=true& */ "./resources/js/components/participant/AddRoleForm.vue?vue&type=template&id=1a42a124&scoped=true&");
/* harmony import */ var _AddRoleForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddRoleForm.vue?vue&type=script&lang=js& */ "./resources/js/components/participant/AddRoleForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddRoleForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddRoleForm_vue_vue_type_template_id_1a42a124_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddRoleForm_vue_vue_type_template_id_1a42a124_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1a42a124",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/participant/AddRoleForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/participant/AddRoleForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/participant/AddRoleForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRoleForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddRoleForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/AddRoleForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRoleForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/participant/AddRoleForm.vue?vue&type=template&id=1a42a124&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/participant/AddRoleForm.vue?vue&type=template&id=1a42a124&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRoleForm_vue_vue_type_template_id_1a42a124_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddRoleForm.vue?vue&type=template&id=1a42a124&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/AddRoleForm.vue?vue&type=template&id=1a42a124&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRoleForm_vue_vue_type_template_id_1a42a124_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRoleForm_vue_vue_type_template_id_1a42a124_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/participant/AddUser.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/participant/AddUser.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddUser_vue_vue_type_template_id_7117ff15_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddUser.vue?vue&type=template&id=7117ff15&scoped=true& */ "./resources/js/components/participant/AddUser.vue?vue&type=template&id=7117ff15&scoped=true&");
/* harmony import */ var _AddUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddUser.vue?vue&type=script&lang=js& */ "./resources/js/components/participant/AddUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddUser_vue_vue_type_template_id_7117ff15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddUser_vue_vue_type_template_id_7117ff15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7117ff15",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/participant/AddUser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/participant/AddUser.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/participant/AddUser.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/AddUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/participant/AddUser.vue?vue&type=template&id=7117ff15&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/participant/AddUser.vue?vue&type=template&id=7117ff15&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_template_id_7117ff15_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddUser.vue?vue&type=template&id=7117ff15&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/AddUser.vue?vue&type=template&id=7117ff15&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_template_id_7117ff15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_template_id_7117ff15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/participant/AssignedUser.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/participant/AssignedUser.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AssignedUser_vue_vue_type_template_id_05f0d100_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssignedUser.vue?vue&type=template&id=05f0d100&scoped=true& */ "./resources/js/components/participant/AssignedUser.vue?vue&type=template&id=05f0d100&scoped=true&");
/* harmony import */ var _AssignedUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssignedUser.vue?vue&type=script&lang=js& */ "./resources/js/components/participant/AssignedUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AssignedUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AssignedUser_vue_vue_type_template_id_05f0d100_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AssignedUser_vue_vue_type_template_id_05f0d100_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "05f0d100",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/participant/AssignedUser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/participant/AssignedUser.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/participant/AssignedUser.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignedUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AssignedUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/AssignedUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignedUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/participant/AssignedUser.vue?vue&type=template&id=05f0d100&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/participant/AssignedUser.vue?vue&type=template&id=05f0d100&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignedUser_vue_vue_type_template_id_05f0d100_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AssignedUser.vue?vue&type=template&id=05f0d100&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/AssignedUser.vue?vue&type=template&id=05f0d100&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignedUser_vue_vue_type_template_id_05f0d100_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignedUser_vue_vue_type_template_id_05f0d100_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/participant/DeleteRole.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/participant/DeleteRole.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeleteRole_vue_vue_type_template_id_4c01a2c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteRole.vue?vue&type=template&id=4c01a2c8&scoped=true& */ "./resources/js/components/participant/DeleteRole.vue?vue&type=template&id=4c01a2c8&scoped=true&");
/* harmony import */ var _DeleteRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteRole.vue?vue&type=script&lang=js& */ "./resources/js/components/participant/DeleteRole.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeleteRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeleteRole_vue_vue_type_template_id_4c01a2c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeleteRole_vue_vue_type_template_id_4c01a2c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4c01a2c8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/participant/DeleteRole.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/participant/DeleteRole.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/participant/DeleteRole.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DeleteRole.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/DeleteRole.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/participant/DeleteRole.vue?vue&type=template&id=4c01a2c8&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/participant/DeleteRole.vue?vue&type=template&id=4c01a2c8&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteRole_vue_vue_type_template_id_4c01a2c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DeleteRole.vue?vue&type=template&id=4c01a2c8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/DeleteRole.vue?vue&type=template&id=4c01a2c8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteRole_vue_vue_type_template_id_4c01a2c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteRole_vue_vue_type_template_id_4c01a2c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/participant/EditRole.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/participant/EditRole.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditRole_vue_vue_type_template_id_3007ebe7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditRole.vue?vue&type=template&id=3007ebe7&scoped=true& */ "./resources/js/components/participant/EditRole.vue?vue&type=template&id=3007ebe7&scoped=true&");
/* harmony import */ var _EditRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditRole.vue?vue&type=script&lang=js& */ "./resources/js/components/participant/EditRole.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditRole_vue_vue_type_template_id_3007ebe7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditRole_vue_vue_type_template_id_3007ebe7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3007ebe7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/participant/EditRole.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/participant/EditRole.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/participant/EditRole.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditRole.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/EditRole.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/participant/EditRole.vue?vue&type=template&id=3007ebe7&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/participant/EditRole.vue?vue&type=template&id=3007ebe7&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRole_vue_vue_type_template_id_3007ebe7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditRole.vue?vue&type=template&id=3007ebe7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/EditRole.vue?vue&type=template&id=3007ebe7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRole_vue_vue_type_template_id_3007ebe7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRole_vue_vue_type_template_id_3007ebe7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/participant/RoleTable.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/participant/RoleTable.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoleTable_vue_vue_type_template_id_28b1d5c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoleTable.vue?vue&type=template&id=28b1d5c1&scoped=true& */ "./resources/js/components/participant/RoleTable.vue?vue&type=template&id=28b1d5c1&scoped=true&");
/* harmony import */ var _RoleTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoleTable.vue?vue&type=script&lang=js& */ "./resources/js/components/participant/RoleTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RoleTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoleTable_vue_vue_type_template_id_28b1d5c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoleTable_vue_vue_type_template_id_28b1d5c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "28b1d5c1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/participant/RoleTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/participant/RoleTable.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/participant/RoleTable.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/RoleTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/participant/RoleTable.vue?vue&type=template&id=28b1d5c1&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/participant/RoleTable.vue?vue&type=template&id=28b1d5c1&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleTable_vue_vue_type_template_id_28b1d5c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleTable.vue?vue&type=template&id=28b1d5c1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/participant/RoleTable.vue?vue&type=template&id=28b1d5c1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleTable_vue_vue_type_template_id_28b1d5c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleTable_vue_vue_type_template_id_28b1d5c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/module.js":
/*!********************************!*\
  !*** ./resources/js/module.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var awesome_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! awesome-notifications */ "./node_modules/awesome-notifications/dist/index.js");
/* harmony import */ var awesome_notifications__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(awesome_notifications__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bristol_su_frontend_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bristol-su/frontend-toolkit */ "@bristol-su/frontend-toolkit");
/* harmony import */ var _bristol_su_frontend_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bristol_su_frontend_toolkit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_participant_RoleTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/participant/RoleTable */ "./resources/js/components/participant/RoleTable.vue");
/* harmony import */ var _components_participant_AddRole__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/participant/AddRole */ "./resources/js/components/participant/AddRole.vue");





vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(_bristol_su_frontend_toolkit__WEBPACK_IMPORTED_MODULE_2___default.a);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$notify = new awesome_notifications__WEBPACK_IMPORTED_MODULE_1___default.a({
  position: 'top-right'
});
var vue = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  el: '#assign-roles-root',
  components: {
    RoleTable: _components_participant_RoleTable__WEBPACK_IMPORTED_MODULE_3__["default"],
    AddRole: _components_participant_AddRole__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./resources/sass/module.scss":
/*!************************************!*\
  !*** ./resources/sass/module.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*******************************************************************!*\
  !*** multi ./resources/js/module.js ./resources/sass/module.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /mnt/5F242F4A45A0248A/development/bristolsu/portal/portal-sites/playground/repos/bristol-su/assign-roles/resources/js/module.js */"./resources/js/module.js");
module.exports = __webpack_require__(/*! /mnt/5F242F4A45A0248A/development/bristolsu/portal/portal-sites/playground/repos/bristol-su/assign-roles/resources/sass/module.scss */"./resources/sass/module.scss");


/***/ }),

/***/ "@bristol-su/frontend-toolkit":
/*!**************************!*\
  !*** external "Toolkit" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Toolkit;

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })

/******/ });