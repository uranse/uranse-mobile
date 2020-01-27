function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


    __webpack_exports__["default"] = "<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\" color=\"primary\">\r\n    <ion-tab-button tab=\"track\">\r\n      <ion-icon name=\"search\" color=\"light\"></ion-icon>\r\n      <ion-label>TRACK</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"ship\">\r\n      <ion-icon name=\"cube\" color=\"light\"></ion-icon>\r\n      <ion-label>SHIP</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"rates\">\r\n      <ion-icon name=\"calculator\" color=\"light\"></ion-icon>\r\n      <ion-label>RATE</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"settings\">\r\n      <ion-icon name=\"settings\" color=\"light\"></ion-icon>\r\n      <ion-label>SETTINGS</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n";
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _navtab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./navtab.page */
    "./src/app/navtab/navtab.page.ts");

    var routes = [{
      path: '',
      component: _navtab_page__WEBPACK_IMPORTED_MODULE_3__["NavtabPage"] // canActivate: [HomeGuard],

    }];

    var NavtabPageRoutingModule = function NavtabPageRoutingModule() {
      _classCallCheck(this, NavtabPageRoutingModule);
    };

    NavtabPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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


    __webpack_exports__["default"] = "ion-content {\n  opacity: 0;\n}\n\nion-icon {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2dGFiL0M6XFxVc2Vyc1xcdmFkZXllbWlcXERvY3VtZW50c1xcZ29hdmluY2VcXHVyYW5zZS1tb2JpbGUvc3JjXFxhcHBcXG5hdnRhYlxcbmF2dGFiLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmF2dGFiL25hdnRhYi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9uYXZ0YWIvbmF2dGFiLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5pb24taWNvbntcclxuICAgIGNvbG9yOiBibGFjaztcclxufSIsImlvbi1jb250ZW50IHtcbiAgb3BhY2l0eTogMDtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogYmxhY2s7XG59Il19 */";
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