(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-estimate-estimate-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/estimate/estimate.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/estimate/estimate.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Rates</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content></ion-content>\n");

/***/ }),

/***/ "./src/app/pages/estimate/estimate.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/estimate/estimate.module.ts ***!
  \***************************************************/
/*! exports provided: EstimatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimatePageModule", function() { return EstimatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _estimate_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estimate.page */ "./src/app/pages/estimate/estimate.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







const routes = [
    {
        path: '',
        component: _estimate_page__WEBPACK_IMPORTED_MODULE_5__["EstimatePage"]
    }
];
let EstimatePageModule = class EstimatePageModule {
};
EstimatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
        ],
        declarations: [_estimate_page__WEBPACK_IMPORTED_MODULE_5__["EstimatePage"]]
    })
], EstimatePageModule);



/***/ }),

/***/ "./src/app/pages/estimate/estimate.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/estimate/estimate.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VzdGltYXRlL2VzdGltYXRlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/estimate/estimate.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/estimate/estimate.page.ts ***!
  \*************************************************/
/*! exports provided: EstimatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimatePage", function() { return EstimatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EstimatePage = class EstimatePage {
    constructor() { }
    ngOnInit() {
    }
};
EstimatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-estimate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./estimate.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/estimate/estimate.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./estimate.page.scss */ "./src/app/pages/estimate/estimate.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EstimatePage);



/***/ })

}]);
//# sourceMappingURL=pages-estimate-estimate-module-es2015.js.map