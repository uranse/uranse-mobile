(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-shipping-shipping-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shipping/shipping.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shipping/shipping.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Ship</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content></ion-content>\n");

/***/ }),

/***/ "./src/app/pages/shipping/shipping.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/shipping/shipping.module.ts ***!
  \***************************************************/
/*! exports provided: ShippingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingPageModule", function() { return ShippingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shipping_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shipping.page */ "./src/app/pages/shipping/shipping.page.ts");







const routes = [
    {
        path: '',
        component: _shipping_page__WEBPACK_IMPORTED_MODULE_6__["ShippingPage"]
    }
];
let ShippingPageModule = class ShippingPageModule {
};
ShippingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ],
        declarations: [_shipping_page__WEBPACK_IMPORTED_MODULE_6__["ShippingPage"]]
    })
], ShippingPageModule);



/***/ }),

/***/ "./src/app/pages/shipping/shipping.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/shipping/shipping.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoaXBwaW5nL3NoaXBwaW5nLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/shipping/shipping.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/shipping/shipping.page.ts ***!
  \*************************************************/
/*! exports provided: ShippingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingPage", function() { return ShippingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShippingPage = class ShippingPage {
    constructor() { }
    ngOnInit() {
    }
};
ShippingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shipping',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shipping.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shipping/shipping.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shipping.page.scss */ "./src/app/pages/shipping/shipping.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ShippingPage);



/***/ })

}]);
//# sourceMappingURL=pages-shipping-shipping-module-es2015.js.map