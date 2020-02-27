function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["navtab-navtab-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navtab/navtab.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navtab/navtab.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavtabNavtabPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\" color=\"primary\">\r\n    <ion-tab-button tab=\"track\">\r\n      <ion-icon name=\"search\"></ion-icon>\r\n      <ion-label>TRACK</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"ship\">\r\n      <ion-icon name=\"cube\"></ion-icon>\r\n      <ion-label>SHIP</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"estimate\">\r\n      <ion-icon name=\"calculator\"></ion-icon>\r\n      <ion-label>RATE</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"settings\">\r\n      <ion-icon name=\"settings\"></ion-icon>\r\n      <ion-label>SETTINGS</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n";
    /***/
  },

  /***/
  "./src/app/guards/home.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/home.guard.ts ***!
    \**************************************/

  /*! exports provided: HomeGuard */

  /***/
  function srcAppGuardsHomeGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeGuard", function () {
      return HomeGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _config_auth_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../config/auth-constants */
    "./src/app/config/auth-constants.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomeGuard =
    /*#__PURE__*/
    function () {
      function HomeGuard(storageService, router) {
        _classCallCheck(this, HomeGuard);

        this.storageService = storageService;
        this.router = router;
      }

      _createClass(HomeGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var _this = this;

          return new Promise(function (resolve) {
            _this.storageService.getIsLoggedIn(_config_auth_constants__WEBPACK_IMPORTED_MODULE_1__["AuthConstants"].loginKey).then(function (res) {
              if (res) {
                resolve(true);
              } else {
                _this.router.navigate(['login']);

                resolve(false);
              }
            }).catch(function (err) {
              resolve(false);
            });
          });
        }
      }]);

      return HomeGuard;
    }();

    HomeGuard.ctorParameters = function () {
      return [{
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    HomeGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], HomeGuard);
    /***/
  },

  /***/
  "./src/app/navtab/navtab-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/navtab/navtab-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: NavtabPageRoutingModule */

  /***/
  function srcAppNavtabNavtabRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavtabPageRoutingModule", function () {
      return NavtabPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _guards_home_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../guards/home.guard */
    "./src/app/guards/home.guard.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _navtab_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./navtab.page */
    "./src/app/navtab/navtab.page.ts");

    var routes = [{
      path: 'home',
      component: _navtab_page__WEBPACK_IMPORTED_MODULE_4__["NavtabPage"],
      canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_2__["HomeGuard"]],
      children: [{
        path: 'track',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-tracking-tracking-module */
            [__webpack_require__.e("common"), __webpack_require__.e("pages-tracking-tracking-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/tracking/tracking.module */
            "./src/app/pages/tracking/tracking.module.ts")).then(function (m) {
              return m.TrackingPageModule;
            });
          }
        }]
      }, {
        path: 'ship',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-shipping-shipping-module */
          "pages-shipping-shipping-module").then(__webpack_require__.bind(null,
          /*! ../pages/shipping/shipping.module */
          "./src/app/pages/shipping/shipping.module.ts")).then(function (m) {
            return m.ShippingPageModule;
          });
        } // children: [
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

      }, {
        path: 'estimate',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-estimate-estimate-module */
            "pages-estimate-estimate-module").then(__webpack_require__.bind(null,
            /*! ../pages/estimate/estimate.module */
            "./src/app/pages/estimate/estimate.module.ts")).then(function (m) {
              return m.EstimatePageModule;
            });
          }
        }]
      }, {
        path: 'settings',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | pages-settings-settings-module */
            "pages-settings-settings-module").then(__webpack_require__.bind(null,
            /*! ../pages/settings/settings.module */
            "./src/app/pages/settings/settings.module.ts")).then(function (m) {
              return m.SettingsPageModule;
            });
          }
        }]
      }, {
        path: '',
        redirectTo: '/home/track',
        pathMatch: 'full'
      }]
    }];

    var NavtabPageRoutingModule = function NavtabPageRoutingModule() {
      _classCallCheck(this, NavtabPageRoutingModule);
    };

    NavtabPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], NavtabPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/navtab/navtab.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/navtab/navtab.module.ts ***!
    \*****************************************/

  /*! exports provided: NavtabPageModule */

  /***/
  function srcAppNavtabNavtabModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavtabPageModule", function () {
      return NavtabPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _navtab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./navtab-routing.module */
    "./src/app/navtab/navtab-routing.module.ts");
    /* harmony import */


    var _navtab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./navtab.page */
    "./src/app/navtab/navtab.page.ts");

    var NavtabPageModule = function NavtabPageModule() {
      _classCallCheck(this, NavtabPageModule);
    };

    NavtabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _navtab_routing_module__WEBPACK_IMPORTED_MODULE_5__["NavtabPageRoutingModule"]],
      declarations: [_navtab_page__WEBPACK_IMPORTED_MODULE_6__["NavtabPage"]]
    })], NavtabPageModule);
    /***/
  },

  /***/
  "./src/app/navtab/navtab.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/navtab/navtab.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavtabNavtabPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  opacity: 0;\n}\n\nion-label {\n  color: primary;\n}\n\nion-tab-button {\n  --color: var(--ion-color-light);\n  --color-selected: var(--ion-color-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2dGFiL0M6XFxVc2Vyc1xcdmFkZXllbWlcXERvY3VtZW50c1xcZ29hdmluY2VcXHVyYW5zZS1tb2JpbGUvc3JjXFxhcHBcXG5hdnRhYlxcbmF2dGFiLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmF2dGFiL25hdnRhYi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0FDRUo7O0FEQUE7RUFDSSwrQkFBQTtFQUNBLHlDQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9uYXZ0YWIvbmF2dGFiLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5pb24tbGFiZWx7XHJcbiAgICBjb2xvcjogcHJpbWFyeTtcclxufVxyXG5pb24tdGFiLWJ1dHRvbiB7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgfVxyXG4gICIsImlvbi1jb250ZW50IHtcbiAgb3BhY2l0eTogMDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6IHByaW1hcnk7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/navtab/navtab.page.ts":
  /*!***************************************!*\
    !*** ./src/app/navtab/navtab.page.ts ***!
    \***************************************/

  /*! exports provided: NavtabPage */

  /***/
  function srcAppNavtabNavtabPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavtabPage", function () {
      return NavtabPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavtabPage =
    /*#__PURE__*/
    function () {
      function NavtabPage() {
        _classCallCheck(this, NavtabPage);
      }

      _createClass(NavtabPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavtabPage;
    }();

    NavtabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navtab',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navtab.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navtab/navtab.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navtab.page.scss */
      "./src/app/navtab/navtab.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NavtabPage);
    /***/
  }
}]);
//# sourceMappingURL=navtab-navtab-module-es5.js.map