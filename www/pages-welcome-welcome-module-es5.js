function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header-logo/header-logo.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header-logo/header-logo.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderLogoHeaderLogoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      <img class=\"headerlogog\" src=\"/assets/images/uranselogo-white.png\" />\n    </ion-title>\n  </ion-toolbar>\n</ion-header>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSlidesSlidesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  \n<ion-slides pager=\"true\" [options]=\"slideOpts\">\n  <ion-slide>\n    <img src=\"/assets/images/welcometouranse.png\" />\n    <h3>The Messenger</h3>\n  </ion-slide>\n</ion-slides>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/start-button/start-button.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/start-button/start-button.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsStartButtonStartButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-button expand=\"block\" color=\"light\" (click)=\"navigateToLogin()\" strong>Start</ion-button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesWelcomeWelcomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content padding=\"true\" color=\"primary\">\n  <app-slides></app-slides>\n  <app-start-button></app-start-button>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/components/component.module.ts":
  /*!************************************************!*\
    !*** ./src/app/components/component.module.ts ***!
    \************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _header_logo_header_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header-logo/header-logo.component */
    "./src/app/components/header-logo/header-logo.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _slides_slides_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./slides/slides.component */
    "./src/app/components/slides/slides.component.ts");
    /* harmony import */


    var _start_button_start_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./start-button/start-button.component */
    "./src/app/components/start-button/start-button.component.ts"); //import { TimeAgoPipe } from 'time-ago-pipe';
    //import { FeedCardComponent } from './feed-card/feed-card.component';
    //import { FeedUpdateComponent } from './feed-update/feed-update.component';
    //import { TimeagoComponent } from './timeago/timeago.component';


    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_slides_slides_component__WEBPACK_IMPORTED_MODULE_6__["SlidesComponent"], _start_button_start_button_component__WEBPACK_IMPORTED_MODULE_7__["StartButtonComponent"], _header_logo_header_logo_component__WEBPACK_IMPORTED_MODULE_1__["HeaderLogoComponent"] //FeedCardComponent,
      //FeedUpdateComponent,
      // TimeagoComponent,
      //TimeAgoPipe
      ],
      exports: [_slides_slides_component__WEBPACK_IMPORTED_MODULE_6__["SlidesComponent"], _start_button_start_button_component__WEBPACK_IMPORTED_MODULE_7__["StartButtonComponent"], _header_logo_header_logo_component__WEBPACK_IMPORTED_MODULE_1__["HeaderLogoComponent"] // FeedCardComponent,
      //FeedUpdateComponent,
      //TimeagoComponent
      ],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"]]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/header-logo/header-logo.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/header-logo/header-logo.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderLogoHeaderLogoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".headerlogog {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWRlL0Rlc2t0b3AvVXJhbnNlL3VyYW5zZS1tb2JpbGUvc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci1sb2dvL2hlYWRlci1sb2dvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci1sb2dvL2hlYWRlci1sb2dvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXItbG9nby9oZWFkZXItbG9nby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJsb2dvZ3tcbiAgd2lkdGg6IDEwMHB4XG59IiwiLmhlYWRlcmxvZ29nIHtcbiAgd2lkdGg6IDEwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/header-logo/header-logo.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/header-logo/header-logo.component.ts ***!
    \*****************************************************************/

  /*! exports provided: HeaderLogoComponent */

  /***/
  function srcAppComponentsHeaderLogoHeaderLogoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderLogoComponent", function () {
      return HeaderLogoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderLogoComponent = function HeaderLogoComponent() {
      _classCallCheck(this, HeaderLogoComponent);
    };

    HeaderLogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header-logo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header-logo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header-logo/header-logo.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header-logo.component.scss */
      "./src/app/components/header-logo/header-logo.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HeaderLogoComponent);
    /***/
  },

  /***/
  "./src/app/components/slides/slides.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/slides/slides.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSlidesSlidesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-slide {\n  padding: 160px 20px 160px 20px;\n  display: block;\n}\nion-slide h3 {\n  font-size: 30px;\n  font-weight: bold;\n  font-style: italic;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWRlL0Rlc2t0b3AvVXJhbnNlL3VyYW5zZS1tb2JpbGUvc3JjL2FwcC9jb21wb25lbnRzL3NsaWRlcy9zbGlkZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZSB7XG4gIHBhZGRpbmc6IDE2MHB4IDIwcHggMTYwcHggMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cbn0iLCJpb24tc2xpZGUge1xuICBwYWRkaW5nOiAxNjBweCAyMHB4IDE2MHB4IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLXNsaWRlIGgzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogI2ZmZmZmZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/slides/slides.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/slides/slides.component.ts ***!
    \*******************************************************/

  /*! exports provided: SlidesComponent */

  /***/
  function srcAppComponentsSlidesSlidesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidesComponent", function () {
      return SlidesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SlidesComponent = function SlidesComponent() {
      _classCallCheck(this, SlidesComponent);

      this.slideOpts = {
        speed: 400
      };
    };

    SlidesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-slides',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./slides.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./slides.component.scss */
      "./src/app/components/slides/slides.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SlidesComponent);
    /***/
  },

  /***/
  "./src/app/components/start-button/start-button.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/start-button/start-button.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsStartButtonStartButtonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhcnQtYnV0dG9uL3N0YXJ0LWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/start-button/start-button.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/start-button/start-button.component.ts ***!
    \*******************************************************************/

  /*! exports provided: StartButtonComponent */

  /***/
  function srcAppComponentsStartButtonStartButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartButtonComponent", function () {
      return StartButtonComponent;
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

    var StartButtonComponent =
    /*#__PURE__*/
    function () {
      function StartButtonComponent(router) {
        _classCallCheck(this, StartButtonComponent);

        this.router = router;
      }

      _createClass(StartButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navigateToLogin",
        value: function navigateToLogin() {
          this.router.navigate(['/login']);
        }
      }]);

      return StartButtonComponent;
    }();

    StartButtonComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    StartButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-start-button',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./start-button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/start-button/start-button.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./start-button.component.scss */
      "./src/app/components/start-button/start-button.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], StartButtonComponent);
    /***/
  },

  /***/
  "./src/app/pages/welcome/welcome.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/welcome/welcome.module.ts ***!
    \*************************************************/

  /*! exports provided: WelcomePageModule */

  /***/
  function srcAppPagesWelcomeWelcomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function () {
      return WelcomePageModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./welcome.page */
    "./src/app/pages/welcome/welcome.page.ts");
    /* harmony import */


    var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../components/component.module */
    "./src/app/components/component.module.ts");

    var routes = [{
      path: '',
      component: _welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]
    }];

    var WelcomePageModule = function WelcomePageModule() {
      _classCallCheck(this, WelcomePageModule);
    };

    WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes), _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
    })], WelcomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/welcome/welcome.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/welcome/welcome.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesWelcomeWelcomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/welcome/welcome.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/welcome/welcome.page.ts ***!
    \***********************************************/

  /*! exports provided: WelcomePage */

  /***/
  function srcAppPagesWelcomeWelcomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomePage", function () {
      return WelcomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WelcomePage =
    /*#__PURE__*/
    function () {
      function WelcomePage() {
        _classCallCheck(this, WelcomePage);
      }

      _createClass(WelcomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WelcomePage;
    }();

    WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-welcome',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./welcome.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./welcome.page.scss */
      "./src/app/pages/welcome/welcome.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], WelcomePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-welcome-welcome-module-es5.js.map