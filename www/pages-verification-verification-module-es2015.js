(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-verification-verification-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verification/verification.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verification/verification.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"loginPage\" color=\"light\">\r\n  <ion-nav-push>\r\n    <ion-button color=\"primary\" size=\"small\" fill=\"clear\">SKIP</ion-button>\r\n  </ion-nav-push>\r\n\r\n  <div class=\"divmargin ion-padding\">\r\n    <img\r\n      src=\"/assets/images/black-whit-bkgrd.png\"\r\n      alt=\"Uranse\"\r\n      class=\"ion-padding\"\r\n    />\r\n    <h3>Enter your code</h3>\r\n  </div>\r\n  <div class=\"ion-padding\">\r\n        <ion-input class=\"ion-padding\" placeholder=\"Security code\" type=\"text\"\r\n          autocomplete=\"on\" autocorrect=\"off\" inputmode=\"text\" maxlength = 6 minlength = 6\r\n        >\r\n\r\n        </ion-input>\r\n   \r\n    <ion-button\r\n      expand=\"full\"\r\n      color=\"primary\"\r\n      size=\"small\"\r\n      strong\r\n    >\r\n      Continue\r\n    </ion-button>\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar color=\"primary\">\r\n    <p class=\"ion-padding\">\r\n      By signing in you accept our\r\n      <a>Terms of use</a>\r\n      and\r\n      <a>privacy policy</a>\r\n    </p>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/pages/verification/verification.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/verification/verification.module.ts ***!
  \***********************************************************/
/*! exports provided: VerificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPageModule", function() { return VerificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verification.page */ "./src/app/pages/verification/verification.page.ts");







const routes = [
    {
        path: '',
        component: _verification_page__WEBPACK_IMPORTED_MODULE_6__["VerificationPage"]
    }
];
let VerificationPageModule = class VerificationPageModule {
};
VerificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_verification_page__WEBPACK_IMPORTED_MODULE_6__["VerificationPage"]]
    })
], VerificationPageModule);



/***/ }),

/***/ "./src/app/pages/verification/verification.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/verification/verification.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\n  text-align: center;\n}\n\n.divmargin {\n  margin-top: 8em;\n}\n\nion-footer > ion-toolbar {\n  color: #ffffff;\n  font-size: 12px;\n}\n\nion-footer > ion-toolbar > p > a {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVyaWZpY2F0aW9uL0M6XFxVc2Vyc1xcdmFkZXllbWlcXERvY3VtZW50c1xcZ29hdmluY2VcXHVyYW5zZS1tb2JpbGUvc3JjXFxhcHBcXHBhZ2VzXFx2ZXJpZmljYXRpb25cXHZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEREE7RUFDRSxVQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92ZXJpZmljYXRpb24vdmVyaWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgze1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZGl2bWFyZ2lue1xyXG4gIG1hcmdpbi10b3A6IDhlbTtcclxufVxyXG5pb24tZm9vdGVyID4gaW9uLXRvb2xiYXIge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5pb24tZm9vdGVyID4gaW9uLXRvb2xiYXIgPiBwID4gYSB7XHJcbiAgY29sb3I6IHJlZDtcclxufSIsImgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGl2bWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogOGVtO1xufVxuXG5pb24tZm9vdGVyID4gaW9uLXRvb2xiYXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24tZm9vdGVyID4gaW9uLXRvb2xiYXIgPiBwID4gYSB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/verification/verification.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/verification/verification.page.ts ***!
  \*********************************************************/
/*! exports provided: VerificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPage", function() { return VerificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VerificationPage = class VerificationPage {
    constructor() { }
    ngOnInit() {
    }
};
VerificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-authentication',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verification.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verification/verification.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verification.page.scss */ "./src/app/pages/verification/verification.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], VerificationPage);



/***/ })

}]);
//# sourceMappingURL=pages-verification-verification-module-es2015.js.map