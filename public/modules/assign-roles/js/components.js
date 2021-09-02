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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VError.vue":
/*!*********************************************************************************!*\
  !*** ./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VError.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VError_vue_vue_type_template_id_77363ab7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VError.vue?vue&type=template&id=77363ab7&scoped=true& */ "./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VError.vue?vue&type=template&id=77363ab7&scoped=true&");
/* harmony import */ var _VError_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VError.vue?vue&type=script&lang=js& */ "./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VError.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VError_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VError_vue_vue_type_template_id_77363ab7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VError_vue_vue_type_template_id_77363ab7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "77363ab7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VError.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VError.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VError.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_VError_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../vue-loader/lib??vue-loader-options!./VError.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VError.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_VError_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VError.vue?vue&type=template&id=77363ab7&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VError.vue?vue&type=template&id=77363ab7&scoped=true& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_VError_vue_vue_type_template_id_77363ab7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../vue-loader/lib??vue-loader-options!./VError.vue?vue&type=template&id=77363ab7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VError.vue?vue&type=template&id=77363ab7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_VError_vue_vue_type_template_id_77363ab7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_VError_vue_vue_type_template_id_77363ab7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VFormLabel.vue":
/*!*************************************************************************************!*\
  !*** ./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VFormLabel.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VFormLabel_vue_vue_type_template_id_ed4c4482_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VFormLabel.vue?vue&type=template&id=ed4c4482&scoped=true& */ "./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VFormLabel.vue?vue&type=template&id=ed4c4482&scoped=true&");
/* harmony import */ var _VFormLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VFormLabel.vue?vue&type=script&lang=js& */ "./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VFormLabel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VFormLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VFormLabel_vue_vue_type_template_id_ed4c4482_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VFormLabel_vue_vue_type_template_id_ed4c4482_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ed4c4482",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VFormLabel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VFormLabel.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VFormLabel.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_VFormLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../vue-loader/lib??vue-loader-options!./VFormLabel.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VFormLabel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_VFormLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VFormLabel.vue?vue&type=template&id=ed4c4482&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VFormLabel.vue?vue&type=template&id=ed4c4482&scoped=true& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_VFormLabel_vue_vue_type_template_id_ed4c4482_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../vue-loader/lib??vue-loader-options!./VFormLabel.vue?vue&type=template&id=ed4c4482&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VFormLabel.vue?vue&type=template&id=ed4c4482&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_VFormLabel_vue_vue_type_template_id_ed4c4482_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_VFormLabel_vue_vue_type_template_id_ed4c4482_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VHelpText.vue":
/*!************************************************************************************!*\
  !*** ./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VHelpText.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VHelpText_vue_vue_type_template_id_6616362f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VHelpText.vue?vue&type=template&id=6616362f& */ "./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VHelpText.vue?vue&type=template&id=6616362f&");
/* harmony import */ var _VHelpText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VHelpText.vue?vue&type=script&lang=js& */ "./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VHelpText.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VHelpText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VHelpText_vue_vue_type_template_id_6616362f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VHelpText_vue_vue_type_template_id_6616362f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VHelpText.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VHelpText.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VHelpText.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_VHelpText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../vue-loader/lib??vue-loader-options!./VHelpText.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VHelpText.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_VHelpText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VHelpText.vue?vue&type=template&id=6616362f&":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VHelpText.vue?vue&type=template&id=6616362f& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_VHelpText_vue_vue_type_template_id_6616362f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../vue-loader/lib??vue-loader-options!./VHelpText.vue?vue&type=template&id=6616362f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VHelpText.vue?vue&type=template&id=6616362f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_VHelpText_vue_vue_type_template_id_6616362f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_VHelpText_vue_vue_type_template_id_6616362f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/dynamic-form/FormInputMixin.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/dynamic-form/FormInputMixin.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VFormLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../VFormLabel */ "./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VFormLabel.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        id: {type: String, required: true},
        label: {validator: (val) => val === null || typeof val === 'string', required: false},
        required: {type: Boolean, required: false},
        visible: {type: Boolean, required: false},
        hint: {validator: (val) => val === null || typeof val === 'string', required: false},
        tooltip: {validator: (val) => val === null || typeof val === 'string', required: false},
        value: {required: false, default: null}
    },
    components: {
        VFormLabel: _VFormLabel__WEBPACK_IMPORTED_MODULE_0__["default"]
    },
    methods: {
        setValue(value) {
            this.$emit('input', value);
        },
        recheckErrors() {
            this.formErrors = this.$ui.errors.has(this.id) ? this.$ui.errors.get(this.id) : [];
        },
    },
    created() {
        this.$ui.eventBus.$on('errors-updated', () => this.recheckErrors());
        this.recheckErrors();
    },
    data() {
        return {
            formErrors: []
        }
    },
    computed: {
        name() {
            return this.id;
        },
        title() {
            return this.label
        },
        hasTooltip() {
            return this.tooltip !== null;
        },
        hasHint() {
            return this.hint !== null;
        },
        help() {
            return this.hint;
        },
        dynamicValue: {
            get() {
                return this.value;
            },
            set(updatedValue) {
                this.setValue(updatedValue);
            }
        },
        labelProps() {
            let props = {
                id: this.id,
                title: this.title,
                required: this.required,
                help: this.help,
                tooltip: this.tooltip,
                errors: this.formErrors
            }

            return Object.fromEntries(Object.entries(props).filter(([_, v]) => v !== null)); // Only return non-empty values
        }
    }
});


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/form-settings/PositionSetting.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/form-settings/PositionSetting.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
  name: "PositionSetting",
  props: {
    positions: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    },
    value: {
      required: false,
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    logicId: {
      required: true,
      type: Number
    }
  },
  data: function data() {
    return {
      settings: {
        allowed: [],
        only_one_role: [],
        only_one_user: [],
        user_only_has_one_role: []
      }
    };
  },
  mounted: function mounted() {
    if (this.value !== undefined) {
      if (this.value.hasOwnProperty('allowed')) {
        this.settings.allowed = this.value.allowed;
      }

      if (this.value.hasOwnProperty('only_one_role')) {
        this.settings.only_one_role = this.value.only_one_role;
      }

      if (this.value.hasOwnProperty('only_one_user')) {
        this.settings.only_one_user = this.value.only_one_user;
      }

      if (this.value.hasOwnProperty('user_only_has_one_role')) {
        this.settings.user_only_has_one_role = this.value.user_only_has_one_role;
      }
    }
  },
  watch: {
    settings: {
      deep: true,
      handler: function handler() {
        this.updateValues();
      }
    }
  },
  methods: {
    updateValues: function updateValues() {
      this.$emit('input', {
        logic_id: this.logicId,
        allowed: this.settings.allowed,
        only_one_role: this.settings.only_one_role,
        only_one_user: this.settings.only_one_user,
        user_only_has_one_role: this.settings.user_only_has_one_role
      });
    }
  },
  computed: {
    form: function form() {
      var positionOptions = this.positions.map(function (position) {
        return {
          id: position.id,
          text: position.data.name
        };
      });
      return this.$tools.generator.form.newForm().withGroup(this.$tools.generator.group.newGroup().withField(this.$tools.generator.field.checkList('allowed').label('Allowed Positions').hint('These positions are able to be assigned to committee members').setOptions(positionOptions)).withField(this.$tools.generator.field.checkList('only_one_role').label('Only one role').hint('These positions may only belong to a single role. If used, a new role cannot be created with this position.').setOptions(positionOptions)).withField(this.$tools.generator.field.checkList('only_one_user').label('Only one user').hint('Roles with these positions may only have a single user assigned to them. Once one user is assigned, another cannot be.').setOptions(positionOptions)).withField(this.$tools.generator.field.checkList('user_only_has_one_role').label('User only has one role').hint('A user assigned to a role with this position cannot be assigned to anything else.').setOptions(positionOptions))).generate().asJson();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/form-settings/PositionSettings.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/form-settings/PositionSettings.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bristol_su_portal_ui_kit_src_components_atomic_dynamic_form_FormInputMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bristol-su/portal-ui-kit/src/components/atomic/dynamic-form/FormInputMixin */ "./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/dynamic-form/FormInputMixin.js");
/* harmony import */ var _PositionSetting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PositionSetting */ "./resources/js/form-settings/PositionSetting.vue");
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
  name: "PositionSettings",
  components: {
    PositionSetting: _PositionSetting__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [_bristol_su_portal_ui_kit_src_components_atomic_dynamic_form_FormInputMixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    logic: {
      required: false,
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    positions: {
      required: false,
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      newlySelectedLogic: [],
      logicToAdd: null
    };
  },
  methods: {
    logicName: function logicName(id) {
      var logic = this.logic.filter(function (l) {
        return l.id === id;
      });

      if (logic.length > 0) {
        return logic[0].name;
      }

      return 'Logic #' + id;
    },
    addLogic: function addLogic() {
      this.newlySelectedLogic.push(this.logicToAdd);
      this.logicToAdd = null;
    },
    getValue: function getValue(logicId) {
      this.checkValueExists();

      if (this.dynamicValue.filter(function (v) {
        return v.logic_id === logicId;
      }).length > 0) {
        return this.dynamicValue.filter(function (v) {
          return v.logic_id === logicId;
        })[0];
      }

      return {};
    },
    setValue: function setValue(logicId, val) {
      this.checkValueExists();

      if (this.newlySelectedLogic.indexOf(logicId) !== -1) {
        this.newlySelectedLogic.splice(this.newlySelectedLogic.indexOf(logicId), 1);
      }

      if (this.dynamicValue.filter(function (v) {
        return v.logic_id === logicId;
      }).length > 0) {
        this.dynamicValue[this.dynamicValue.indexOf(this.dynamicValue.filter(function (v) {
          return v.logic_id === logicId;
        })[0])] = val;
      } else {
        this.dynamicValue.push(val);
      }
    },
    checkValueExists: function checkValueExists() {
      if (this.dynamicValue === undefined || this.dynamicValue === null) {
        this.dynamicValue = [];
      }
    }
  },
  computed: {
    logicSelectOptions: function logicSelectOptions() {
      var _this = this;

      return this.logic.filter(function (l) {
        return _this.selectedLogic.indexOf(l.id) === -1;
      }).map(function (l) {
        return {
          id: l.id,
          value: l.name
        };
      });
    },
    selectedLogic: function selectedLogic() {
      this.checkValueExists();
      return this.dynamicValue.map(function (v) {
        return v.logic_id;
      }).concat(this.newlySelectedLogic);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/form-settings/RequiredPosition.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/form-settings/RequiredPosition.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "RequiredPosition",
  props: {
    positions: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    },
    value: {
      required: false,
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    logicId: {
      required: true,
      type: Number
    }
  },
  data: function data() {
    return {
      required: {}
    };
  },
  mounted: function mounted() {
    if (this.value !== undefined) {
      if (this.value.hasOwnProperty('required')) {
        this.required = this.value.required;
      }
    }
  },
  watch: {
    required: {
      deep: true,
      handler: function handler() {
        this.updateValues();
      }
    }
  },
  methods: {
    updateValues: function updateValues() {
      this.$emit('input', {
        logic_id: this.logicId,
        required: this.required.required
      });
    }
  },
  computed: {
    form: function form() {
      return this.$tools.generator.form.newForm().withGroup(this.$tools.generator.group.newGroup().withField(this.$tools.generator.field.checkList('required').value([]).label('Required Positions').hint('These positions need to be filled to mark the module as complete').setOptions(this.positions.map(function (position) {
        return {
          id: position.id,
          text: position.data.name
        };
      })))).generate().asJson();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/form-settings/RequiredPositions.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/form-settings/RequiredPositions.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bristol_su_portal_ui_kit_src_components_atomic_dynamic_form_FormInputMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bristol-su/portal-ui-kit/src/components/atomic/dynamic-form/FormInputMixin */ "./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/dynamic-form/FormInputMixin.js");
/* harmony import */ var _RequiredPosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequiredPosition */ "./resources/js/form-settings/RequiredPosition.vue");
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
  name: "RequiredPositions",
  components: {
    RequiredPosition: _RequiredPosition__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [_bristol_su_portal_ui_kit_src_components_atomic_dynamic_form_FormInputMixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    logic: {
      required: false,
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    positions: {
      required: false,
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      newlySelectedLogic: [],
      logicToAdd: null
    };
  },
  methods: {
    logicName: function logicName(id) {
      var logic = this.logic.filter(function (l) {
        return l.id === id;
      });

      if (logic.length > 0) {
        return logic[0].name;
      }

      return 'Logic #' + id;
    },
    addLogic: function addLogic() {
      this.newlySelectedLogic.push(this.logicToAdd);
      this.logicToAdd = null;
    },
    getValue: function getValue(logicId) {
      this.checkValueExists();

      if (this.dynamicValue.filter(function (v) {
        return v.logic_id === logicId;
      }).length > 0) {
        return this.dynamicValue.filter(function (v) {
          return v.logic_id === logicId;
        })[0];
      }

      return {};
    },
    setValue: function setValue(logicId, val) {
      this.checkValueExists();

      if (this.newlySelectedLogic.indexOf(logicId) !== -1) {
        this.newlySelectedLogic.splice(this.newlySelectedLogic.indexOf(logicId), 1);
      }

      if (this.dynamicValue.filter(function (v) {
        return v.logic_id === logicId;
      }).length > 0) {
        this.dynamicValue[this.dynamicValue.indexOf(this.dynamicValue.filter(function (v) {
          return v.logic_id === logicId;
        })[0])] = val;
      } else {
        this.dynamicValue.push(val);
      }
    },
    checkValueExists: function checkValueExists() {
      if (this.dynamicValue === undefined) {
        this.dynamicValue = [];
      }
    }
  },
  computed: {
    logicSelectOptions: function logicSelectOptions() {
      var _this = this;

      return this.logic.filter(function (l) {
        return _this.selectedLogic.indexOf(l.id) === -1;
      }).map(function (l) {
        return {
          id: l.id,
          value: l.name
        };
      });
    },
    selectedLogic: function selectedLogic() {
      this.checkValueExists();
      return this.dynamicValue.map(function (v) {
        return v.logic_id;
      }).concat(this.newlySelectedLogic);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VError.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VError.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "VError",
    props: {
        error: {type: String, required: true}
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VFormLabel.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VFormLabel.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VHelpText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VHelpText */ "./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VHelpText.vue");
/* harmony import */ var _VError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VError */ "./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VError.vue");
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




/* harmony default export */ __webpack_exports__["default"] = ({ // Wrapper Component for Inputs which shows Tooltip and Help text, also will need to handle errors
    name: "VFormLabel",
    components: {
        VHelpText: _VHelpText__WEBPACK_IMPORTED_MODULE_0__["default"],
        VError: _VError__WEBPACK_IMPORTED_MODULE_1__["default"]
    },
    props: {
        id: {type: String, required: true},
        title: {type: String, required: false},
        required: {type: Boolean, required: false, default: false},
        help: {type: String, required: false},
        tooltip: {type: String, required: false},
        errors: {type: Array, required: false, default: () => []}
    },
    computed: {
        hasHelp() {
            return !!this.help;
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VHelpText.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VHelpText.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "VHelpText",
  props: {
      help: {type: String, required: true}
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VError.vue?vue&type=template&id=77363ab7&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VError.vue?vue&type=template&id=77363ab7&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("p", {
    staticClass: "text-red-500 text-xs italic",
    domProps: { textContent: _vm._s(_vm.error) }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VFormLabel.vue?vue&type=template&id=ed4c4482&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VFormLabel.vue?vue&type=template&id=ed4c4482&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "relative mt-4" },
    [
      _vm.title
        ? _c(
            "label",
            {
              directives: [
                {
                  name: "tippy",
                  rawName: "v-tippy",
                  value: {
                    arrow: true,
                    animation: "fade",
                    placement: "top-start",
                    arrow: true,
                    interactive: true,
                    onShow: function() {
                      return !!_vm.tooltip
                    }
                  },
                  expression:
                    "{ arrow: true, animation: 'fade', placement: 'top-start', arrow: true, interactive: true, onShow: () => !!tooltip }"
                }
              ],
              staticClass: "text-base leading-7 text-blueGray-500",
              attrs: { content: _vm.tooltip, for: _vm.id }
            },
            [
              _c("span", { staticClass: "inline-flex" }, [
                _vm._v(_vm._s(_vm.title) + "\n        "),
                _vm.required
                  ? _c("span", [
                      _vm._v(" * "),
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("Required")
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.tooltip
                  ? _c(
                      "svg",
                      {
                        staticClass: "h-4 w-4",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 20 20",
                          fill: "currentColor"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            "fill-rule": "evenodd",
                            d:
                              "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",
                            "clip-rule": "evenodd"
                          }
                        })
                      ]
                    )
                  : _vm._e()
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._t("default"),
      _vm._v(" "),
      _vm.hasHelp ? _c("v-help-text", { attrs: { help: _vm.help } }) : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.errors, function(error) {
        return _vm.errors
          ? _c("div", [_c("v-error", { attrs: { error: error } })], 1)
          : _vm._e()
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VHelpText.vue?vue&type=template&id=6616362f&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@bristol-su/portal-ui-kit/src/components/atomic/VHelpText.vue?vue&type=template&id=6616362f& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  return _c("p", {
    staticClass: "mt-2 text-gray-600 text-xs italic",
    domProps: { textContent: _vm._s(_vm.help) }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/form-settings/PositionSetting.vue?vue&type=template&id=77bf0794&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/form-settings/PositionSetting.vue?vue&type=template&id=77bf0794&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      _c("p-dynamic-form", {
        attrs: { schema: _vm.form },
        model: {
          value: _vm.settings,
          callback: function($$v) {
            _vm.settings = $$v
          },
          expression: "settings"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/form-settings/PositionSettings.vue?vue&type=template&id=78caa8a6&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/form-settings/PositionSettings.vue?vue&type=template&id=78caa8a6&scoped=true& ***!
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
    { staticStyle: { width: "100%" } },
    [
      _c(
        "p-tabs",
        [
          _c(
            "p-tab",
            { key: "add", attrs: { title: "Add Logic" } },
            [
              _c("p-select", {
                attrs: {
                  id: "logic-select-options",
                  title: "Setting group",
                  hint: "The group that the position settings will apply to",
                  tooltip:
                    "The position settings control which positions can be assigned. The settings will come from the group the user is in.",
                  selectOptions: _vm.logicSelectOptions
                },
                model: {
                  value: _vm.logicToAdd,
                  callback: function($$v) {
                    _vm.logicToAdd = $$v
                  },
                  expression: "logicToAdd"
                }
              }),
              _vm._v(" "),
              _vm.logicToAdd !== null
                ? _c(
                    "p-button",
                    {
                      attrs: { variant: "secondary" },
                      on: { click: _vm.addLogic }
                    },
                    [_vm._v("Add")]
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.selectedLogic, function(logicId) {
            return _c(
              "p-tab",
              { key: logicId, attrs: { title: _vm.logicName(logicId) } },
              [
                _c("position-setting", {
                  attrs: {
                    logicId: logicId,
                    positions: _vm.positions,
                    value: _vm.getValue(logicId)
                  },
                  on: {
                    input: function($event) {
                      return _vm.setValue(logicId, $event)
                    }
                  }
                })
              ],
              1
            )
          })
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/form-settings/RequiredPosition.vue?vue&type=template&id=023db1ae&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/form-settings/RequiredPosition.vue?vue&type=template&id=023db1ae&scoped=true& ***!
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
      _c("p-dynamic-form", {
        attrs: { schema: _vm.form },
        model: {
          value: _vm.required,
          callback: function($$v) {
            _vm.required = $$v
          },
          expression: "required"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/form-settings/RequiredPositions.vue?vue&type=template&id=3e2141cc&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/form-settings/RequiredPositions.vue?vue&type=template&id=3e2141cc&scoped=true& ***!
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
    { staticStyle: { width: "100%" } },
    [
      _c(
        "p-tabs",
        [
          _c(
            "p-tab",
            { attrs: { title: "Add Group" } },
            [
              _c("p-select", {
                attrs: {
                  id: "logic-select-options",
                  title: "Setting group",
                  hint: "The group that the position settings will apply to",
                  tooltip:
                    "The position settings control which positions can be assigned. The settings will come from the group the user is in.",
                  "select-options": _vm.logicSelectOptions
                },
                model: {
                  value: _vm.logicToAdd,
                  callback: function($$v) {
                    _vm.logicToAdd = $$v
                  },
                  expression: "logicToAdd"
                }
              }),
              _vm._v(" "),
              _vm.logicToAdd !== null
                ? _c(
                    "p-button",
                    {
                      attrs: { variant: "secondary" },
                      on: { click: _vm.addLogic }
                    },
                    [_vm._v("Add")]
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.selectedLogic, function(logicId) {
            return _c(
              "p-tab",
              { key: logicId, attrs: { title: _vm.logicName(logicId) } },
              [
                _c("required-position", {
                  attrs: {
                    logicId: logicId,
                    positions: _vm.positions,
                    value: _vm.getValue(logicId)
                  },
                  on: {
                    input: function($event) {
                      return _vm.setValue(logicId, $event)
                    }
                  }
                })
              ],
              1
            )
          })
        ],
        2
      )
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

/***/ "./resources/js/form-settings/PositionSetting.vue":
/*!********************************************************!*\
  !*** ./resources/js/form-settings/PositionSetting.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PositionSetting_vue_vue_type_template_id_77bf0794_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PositionSetting.vue?vue&type=template&id=77bf0794&scoped=true& */ "./resources/js/form-settings/PositionSetting.vue?vue&type=template&id=77bf0794&scoped=true&");
/* harmony import */ var _PositionSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PositionSetting.vue?vue&type=script&lang=js& */ "./resources/js/form-settings/PositionSetting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PositionSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PositionSetting_vue_vue_type_template_id_77bf0794_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PositionSetting_vue_vue_type_template_id_77bf0794_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "77bf0794",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/form-settings/PositionSetting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/form-settings/PositionSetting.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/form-settings/PositionSetting.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PositionSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PositionSetting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/form-settings/PositionSetting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PositionSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/form-settings/PositionSetting.vue?vue&type=template&id=77bf0794&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/form-settings/PositionSetting.vue?vue&type=template&id=77bf0794&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PositionSetting_vue_vue_type_template_id_77bf0794_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PositionSetting.vue?vue&type=template&id=77bf0794&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/form-settings/PositionSetting.vue?vue&type=template&id=77bf0794&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PositionSetting_vue_vue_type_template_id_77bf0794_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PositionSetting_vue_vue_type_template_id_77bf0794_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/form-settings/PositionSettings.vue":
/*!*********************************************************!*\
  !*** ./resources/js/form-settings/PositionSettings.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PositionSettings_vue_vue_type_template_id_78caa8a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PositionSettings.vue?vue&type=template&id=78caa8a6&scoped=true& */ "./resources/js/form-settings/PositionSettings.vue?vue&type=template&id=78caa8a6&scoped=true&");
/* harmony import */ var _PositionSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PositionSettings.vue?vue&type=script&lang=js& */ "./resources/js/form-settings/PositionSettings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PositionSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PositionSettings_vue_vue_type_template_id_78caa8a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PositionSettings_vue_vue_type_template_id_78caa8a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "78caa8a6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/form-settings/PositionSettings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/form-settings/PositionSettings.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/form-settings/PositionSettings.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PositionSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PositionSettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/form-settings/PositionSettings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PositionSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/form-settings/PositionSettings.vue?vue&type=template&id=78caa8a6&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/form-settings/PositionSettings.vue?vue&type=template&id=78caa8a6&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PositionSettings_vue_vue_type_template_id_78caa8a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PositionSettings.vue?vue&type=template&id=78caa8a6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/form-settings/PositionSettings.vue?vue&type=template&id=78caa8a6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PositionSettings_vue_vue_type_template_id_78caa8a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PositionSettings_vue_vue_type_template_id_78caa8a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/form-settings/RequiredPosition.vue":
/*!*********************************************************!*\
  !*** ./resources/js/form-settings/RequiredPosition.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequiredPosition_vue_vue_type_template_id_023db1ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RequiredPosition.vue?vue&type=template&id=023db1ae&scoped=true& */ "./resources/js/form-settings/RequiredPosition.vue?vue&type=template&id=023db1ae&scoped=true&");
/* harmony import */ var _RequiredPosition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequiredPosition.vue?vue&type=script&lang=js& */ "./resources/js/form-settings/RequiredPosition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RequiredPosition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RequiredPosition_vue_vue_type_template_id_023db1ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RequiredPosition_vue_vue_type_template_id_023db1ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "023db1ae",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/form-settings/RequiredPosition.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/form-settings/RequiredPosition.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/form-settings/RequiredPosition.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequiredPosition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RequiredPosition.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/form-settings/RequiredPosition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequiredPosition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/form-settings/RequiredPosition.vue?vue&type=template&id=023db1ae&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/form-settings/RequiredPosition.vue?vue&type=template&id=023db1ae&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequiredPosition_vue_vue_type_template_id_023db1ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RequiredPosition.vue?vue&type=template&id=023db1ae&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/form-settings/RequiredPosition.vue?vue&type=template&id=023db1ae&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequiredPosition_vue_vue_type_template_id_023db1ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequiredPosition_vue_vue_type_template_id_023db1ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/form-settings/RequiredPositions.vue":
/*!**********************************************************!*\
  !*** ./resources/js/form-settings/RequiredPositions.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequiredPositions_vue_vue_type_template_id_3e2141cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RequiredPositions.vue?vue&type=template&id=3e2141cc&scoped=true& */ "./resources/js/form-settings/RequiredPositions.vue?vue&type=template&id=3e2141cc&scoped=true&");
/* harmony import */ var _RequiredPositions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequiredPositions.vue?vue&type=script&lang=js& */ "./resources/js/form-settings/RequiredPositions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RequiredPositions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RequiredPositions_vue_vue_type_template_id_3e2141cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RequiredPositions_vue_vue_type_template_id_3e2141cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3e2141cc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/form-settings/RequiredPositions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/form-settings/RequiredPositions.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/form-settings/RequiredPositions.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequiredPositions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RequiredPositions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/form-settings/RequiredPositions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RequiredPositions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/form-settings/RequiredPositions.vue?vue&type=template&id=3e2141cc&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/form-settings/RequiredPositions.vue?vue&type=template&id=3e2141cc&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequiredPositions_vue_vue_type_template_id_3e2141cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RequiredPositions.vue?vue&type=template&id=3e2141cc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/form-settings/RequiredPositions.vue?vue&type=template&id=3e2141cc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequiredPositions_vue_vue_type_template_id_3e2141cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RequiredPositions_vue_vue_type_template_id_3e2141cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/form-settings/components.js":
/*!**************************************************!*\
  !*** ./resources/js/form-settings/components.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PositionSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PositionSettings */ "./resources/js/form-settings/PositionSettings.vue");
/* harmony import */ var _RequiredPositions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequiredPositions */ "./resources/js/form-settings/RequiredPositions.vue");
/* harmony import */ var _bristol_su_frontend_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bristol-su/frontend-toolkit */ "@bristol-su/frontend-toolkit");
/* harmony import */ var _bristol_su_frontend_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bristol_su_frontend_toolkit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_3__);




vue__WEBPACK_IMPORTED_MODULE_3___default.a.use(_bristol_su_frontend_toolkit__WEBPACK_IMPORTED_MODULE_2___default.a);
vue__WEBPACK_IMPORTED_MODULE_3___default.a.component('p-assign-roles-position-settings', _PositionSettings__WEBPACK_IMPORTED_MODULE_0__["default"]);
vue__WEBPACK_IMPORTED_MODULE_3___default.a.component('p-assign-roles-required-positions', _RequiredPositions__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ 1:
/*!********************************************************!*\
  !*** multi ./resources/js/form-settings/components.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aidanlaycock/Desktop/ElbowSpace/Portal/portal-ui-dev/repos/assign-roles/resources/js/form-settings/components.js */"./resources/js/form-settings/components.js");


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