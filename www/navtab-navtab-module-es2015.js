(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["navtab-navtab-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navtab/navtab.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navtab/navtab.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar slot=\"bottom\" color=\"primary\">\n    <ion-tab-button tab=\"track\">\n      <ion-icon name=\"search\"></ion-icon>\n      <ion-label>TRACK</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"ship\">\n      <ion-icon name=\"cube\"></ion-icon>\n      <ion-label>SHIP</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"estimate\">\n      <ion-icon name=\"calculator\"></ion-icon>\n      <ion-label>RATE</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"settings\">\n      <ion-icon name=\"settings\"></ion-icon>\n      <ion-label>SETTINGS</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "./src/app/guards/home.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/home.guard.ts ***!
  \**************************************/
/*! exports provided: HomeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeGuard", function() { return HomeGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _config_auth_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../config/auth-constants */ "./src/app/config/auth-constants.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HomeGuard = class HomeGuard {
    constructor(storageService, router) {
        this.storageService = storageService;
        this.router = router;
    }
    canActivate() {
        return new Promise(resolve => {
            this.storageService.getIsLoggedIn(_config_auth_constants__WEBPACK_IMPORTED_MODULE_1__["AuthConstants"].loginKey).then(res => {
                if (res) {
                    resolve(true);
                }
                else {
                    this.router.navigate(['login']);
                    resolve(false);
                }
            }).catch(err => {
                resolve(false);
            });
        });
    }
};
HomeGuard.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HomeGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], HomeGuard);



/***/ }),

/***/ "./src/app/navtab/navtab-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/navtab/navtab-routing.module.ts ***!
  \*************************************************/
/*! exports provided: NavtabPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavtabPageRoutingModule", function() { return NavtabPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _guards_home_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../guards/home.guard */ "./src/app/guards/home.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _navtab_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navtab.page */ "./src/app/navtab/navtab.page.ts");





const routes = [
    {
        path: 'home',
        component: _navtab_page__WEBPACK_IMPORTED_MODULE_4__["NavtabPage"],
        canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_2__["HomeGuard"]],
        children: [
            {
                path: 'track',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | pages-tracking-tracking-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-tracking-tracking-module")]).then(__webpack_require__.bind(null, /*! ../pages/tracking/tracking.module */ "./src/app/pages/tracking/tracking.module.ts")).then(m => m.TrackingPageModule)
                    }
                ]
            },
            {
                path: 'ship',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-shipping-shipping-module */ "pages-shipping-shipping-module").then(__webpack_require__.bind(null, /*! ../pages/shipping/shipping.module */ "./src/app/pages/shipping/shipping.module.ts")).then(m => m.ShippingPageModule)
                // children: [
                //   {
                //     path: '',
                //     loadChildren: () =>
                //       import('../pages/shipping/shipping.module').then(m => m.ShippingPageModule)
                //   },
                // {
                //   path: 'shippingform',
                //   loadChildren: () =>
                //     import('../pages/shipping/shipping-form/shipping-form.module').then(m => m.ShippingFormPageModule)
                // },
                // {
                //   path: 'shippinghistory',
                //   loadChildren: () =>
                //     import('../pages/shipping/shipping-history/shipping-history.module').then(m => m.ShippingHistoryPageModule)
                // }
                // ]
            },
            {
                path: 'estimate',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-estimate-estimate-module */ "pages-estimate-estimate-module").then(__webpack_require__.bind(null, /*! ../pages/estimate/estimate.module */ "./src/app/pages/estimate/estimate.module.ts")).then(m => m.EstimatePageModule)
                    }
                ]
            },
            {
                path: 'settings',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | pages-settings-settings-module */ "pages-settings-settings-module").then(__webpack_require__.bind(null, /*! ../pages/settings/settings.module */ "./src/app/pages/settings/settings.module.ts")).then(m => m.SettingsPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/home/track',
                pathMatch: 'full'
            }
        ]
    }
];
let NavtabPageRoutingModule = class NavtabPageRoutingModule {
};
NavtabPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], NavtabPageRoutingModule);



/***/ }),

/***/ "./src/app/navtab/navtab.module.ts":
/*!*****************************************!*\
  !*** ./src/app/navtab/navtab.module.ts ***!
  \*****************************************/
/*! exports provided: NavtabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavtabPageModule", function() { return NavtabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _navtab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navtab-routing.module */ "./src/app/navtab/navtab-routing.module.ts");
/* harmony import */ var _navtab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navtab.page */ "./src/app/navtab/navtab.page.ts");







let NavtabPageModule = class NavtabPageModule {
};
NavtabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _navtab_routing_module__WEBPACK_IMPORTED_MODULE_5__["NavtabPageRoutingModule"]
        ],
        declarations: [_navtab_page__WEBPACK_IMPORTED_MODULE_6__["NavtabPage"]]
    })
], NavtabPageModule);



/***/ }),

/***/ "./src/app/navtab/navtab.page.scss":
/*!*****************************************!*\
  !*** ./src/app/navtab/navtab.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  opacity: 0;\n}\n\nion-label {\n  color: primary;\n}\n\nion-tab-button {\n  --color: var(--ion-color-light);\n  --color-selected: var(--ion-color-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWRlL0Rlc2t0b3AvVXJhbnNlL3VyYW5zZS1tb2JpbGUvc3JjL2FwcC9uYXZ0YWIvbmF2dGFiLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmF2dGFiL25hdnRhYi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0FDRUo7O0FEQUE7RUFDSSwrQkFBQTtFQUNBLHlDQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9uYXZ0YWIvbmF2dGFiLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIG9wYWNpdHk6IDA7XG59XG5pb24tbGFiZWx7XG4gICAgY29sb3I6IHByaW1hcnk7XG59XG5pb24tdGFiLWJ1dHRvbiB7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAtLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgfVxuICAiLCJpb24tY29udGVudCB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGNvbG9yOiBwcmltYXJ5O1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/navtab/navtab.page.ts":
/*!***************************************!*\
  !*** ./src/app/navtab/navtab.page.ts ***!
  \***************************************/
/*! exports provided: NavtabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavtabPage", function() { return NavtabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavtabPage = class NavtabPage {
    constructor() { }
    ngOnInit() {
    }
};
NavtabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navtab',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navtab.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navtab/navtab.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navtab.page.scss */ "./src/app/navtab/navtab.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavtabPage);



/***/ })

}]);
//# sourceMappingURL=navtab-navtab-module-es2015.js.map