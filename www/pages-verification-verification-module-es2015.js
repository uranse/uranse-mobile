(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-verification-verification-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verification/verification.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verification/verification.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"verificationPage\" color=\"light\">\n  <div class=\"divmargin ion-padding\">\n    <img\n      src=\"/assets/images/black-whit-bkgrd.png\"\n      alt=\"Uranse\"\n      class=\"ion-padding\"\n    />\n    <h3>Enter your code</h3>\n  </div>\n  <div class=\"ion-padding\">\n        <ion-input class=\"ion-padding\" placeholder=\"Security code\" type=\"text\"\n          autocomplete=\"on\" autocorrect=\"off\" inputmode=\"text\" maxlength = 6 minlength = 6\n        >\n\n        </ion-input>\n   \n    <ion-button\n      expand=\"block\"\n      color=\"primary\"\n      strong\n      (click) = \"loginAction()\"\n    >\n      Continue\n    </ion-button>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color=\"primary\">\n    <p class=\"ion-padding\">\n      By signing in you accept our\n      <a>Terms of use</a>\n      and\n      <a>privacy policy</a>\n    </p>\n  </ion-toolbar>\n</ion-footer>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\n  text-align: center;\n}\n\n.divmargin {\n  margin-top: 8em;\n}\n\nion-footer > ion-toolbar {\n  color: #ffffff;\n  font-size: 12px;\n}\n\nion-footer > ion-toolbar > p > a {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWRlL0Rlc2t0b3AvVXJhbnNlL3VyYW5zZS1tb2JpbGUvc3JjL2FwcC9wYWdlcy92ZXJpZmljYXRpb24vdmVyaWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNHRjs7QUREQTtFQUNFLFVBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kaXZtYXJnaW57XG4gIG1hcmdpbi10b3A6IDhlbTtcbn1cbmlvbi1mb290ZXIgPiBpb24tdG9vbGJhciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDEycHg7XG59XG5pb24tZm9vdGVyID4gaW9uLXRvb2xiYXIgPiBwID4gYSB7XG4gIGNvbG9yOiByZWQ7XG59IiwiaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaXZtYXJnaW4ge1xuICBtYXJnaW4tdG9wOiA4ZW07XG59XG5cbmlvbi1mb290ZXIgPiBpb24tdG9vbGJhciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlvbi1mb290ZXIgPiBpb24tdG9vbGJhciA+IHAgPiBhIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */");

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
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");







let VerificationPage = class VerificationPage {
    constructor(router, toastService, authService, storageService, alertService) {
        this.router = router;
        this.toastService = toastService;
        this.authService = authService;
        this.storageService = storageService;
        this.alertService = alertService;
    }
    ngOnInit() {
    }
    loginAction() {
        this.authService.login();
        this.router.navigate(['home']);
    }
};
VerificationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }
];
VerificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-authentication',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verification.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verification/verification.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verification.page.scss */ "./src/app/pages/verification/verification.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
], VerificationPage);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.service */ "./src/app/services/storage.service.ts");





let AuthService = class AuthService {
    constructor(storageService, router) {
        this.storageService = storageService;
        this.router = router;
        this.userData$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    login() {
        this.storageService.setIsLoggedIn();
        this.storageService.setIsNotNewUser();
    }
    logout() {
        this.storageService.removeItem('isloggedin');
        this.storageService.clear();
        this.router.navigate(['']);
    }
};
AuthService.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AuthService);



/***/ }),

/***/ "./src/app/services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



const { Toast } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let ToastService = class ToastService {
    constructor() { }
    // Display toast
    show(textToShow, toastDuration, toastPosition) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield Toast.show({
                duration: toastDuration,
                text: textToShow,
            });
        });
    }
};
ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ToastService);



/***/ })

}]);
//# sourceMappingURL=pages-verification-verification-module-es2015.js.map