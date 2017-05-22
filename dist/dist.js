(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"), require("angular2-signaturepad"), require("angular2-signaturepad/signature-pad"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/common", "angular2-signaturepad", "angular2-signaturepad/signature-pad"], factory);
	else if(typeof exports === 'object')
		exports["IonicForms"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"), require("angular2-signaturepad"), require("angular2-signaturepad/signature-pad"));
	else
		root["IonicForms"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"], root["angular2-signaturepad"], root["angular2-signaturepad/signature-pad"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonicDogeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forms_signature_field_signature_field_component__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var IonicDogeModule = (function () {
    function IonicDogeModule() {
    }
    return IonicDogeModule;
}());
IonicDogeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__forms_signature_field_signature_field_component__["a" /* SignatureField */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad__["SignaturePadModule"]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__forms_signature_field_signature_field_component__["a" /* SignatureField */]
        ]
    })
], IonicDogeModule);



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignatureField; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignatureField = SignatureField_1 = (function () {
    function SignatureField() {
        this._signature = null;
        this.hasFocus = false;
        this.propagateChange = function () { };
        this.propagateTouch = function () { };
        this.options = {
            penColor: 'rgb(0, 0, 0)',
            backgroundColor: 'rgb(255, 255, 255)'
        };
    }
    Object.defineProperty(SignatureField.prototype, "signature", {
        get: function () {
            return this._signature;
        },
        set: function (value) {
            this._signature = value;
            this.propagateChange(this.signature);
        },
        enumerable: true,
        configurable: true
    });
    SignatureField.prototype.ngAfterViewInit = function () {
        this._maxHeight = this.signatureFieldContainer.nativeElement.clientHeight;
        this.beResponsive();
    };
    SignatureField.prototype.writeValue = function (value) {
        if (!value) {
            return;
        }
        this._signature = value;
        if (this.signaturePad) {
            this.signaturePad.fromDataURL(this.signature);
        }
    };
    SignatureField.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    SignatureField.prototype.registerOnTouched = function (fn) {
        this.propagateTouch = fn;
    };
    SignatureField.prototype.beResponsive = function () {
        if (this.signaturePad) {
            this.signaturePad.set('canvasWidth', this.signatureFieldContainer.nativeElement.clientWidth);
            this.signaturePad.set('canvasHeight', this._maxHeight);
            this.signaturePad.clear();
        }
    };
    SignatureField.prototype.drawBegin = function () {
        this.hasFocus = true;
        console.log('dsadsa');
        this.propagateTouch();
    };
    SignatureField.prototype.drawComplete = function () {
        console.log('end');
        this.hasFocus = false;
        if (this.signaturePad) {
            this._signature = this.signaturePad.toDataURL('image/png', 1);
            this.propagateChange(this.signature);
        }
    };
    SignatureField.prototype.clear = function () {
        if (this.signaturePad) {
            this.signaturePad.clear();
            this.signature = '';
            this.propagateChange(this.signature);
        }
    };
    return SignatureField;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"])
], SignatureField.prototype, "signaturePad", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('signatureFieldContainer'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], SignatureField.prototype, "signatureFieldContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], SignatureField.prototype, "readonly", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SignatureField.prototype, "label", void 0);
SignatureField = SignatureField_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ion-doge-signature',
        templateUrl: 'signature-field.component.html',
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return SignatureField_1; }),
                multi: true,
            },
        ],
    })
], SignatureField);

var SignatureField_1;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ionic_doge_module__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IonicDogeModule", function() { return __WEBPACK_IMPORTED_MODULE_0__components_ionic_doge_module__["a"]; });



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("angular2-signaturepad");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("angular2-signaturepad/signature-pad");

/***/ })
/******/ ]);
});
//# sourceMappingURL=dist.js.map