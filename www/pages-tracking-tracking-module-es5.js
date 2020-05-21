function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tracking-tracking-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracking/tracking.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracking/tracking.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTrackingTrackingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      <img class=\"headerlogog\" src=\"/assets/images/uranselogo-white.png\" />\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"default\" fullscreen>\n  <ion-searchbar autocorrect=\"off\" color=\"dark\" type=\"text\"></ion-searchbar>\n  <ion-segment class=\"ion-padding\" color=\"tertiary\">\n    <ion-segment-button value=\"all\"> <ion-label>All</ion-label></ion-segment-button>\n    <ion-segment-button value=\"received\"> <ion-label>To Me</ion-label></ion-segment-button>\n    <ion-segment-button value=\"sent\"> <ion-label>From Me</ion-label></ion-segment-button>\n  </ion-segment>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/tracking/tracking.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/tracking/tracking.module.ts ***!
    \***************************************************/

  /*! exports provided: TrackingPageModule */

  /***/
  function srcAppPagesTrackingTrackingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrackingPageModule", function () {
      return TrackingPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _tracking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tracking.page */
    "./src/app/pages/tracking/tracking.page.ts");

    var routes = [{
      path: '',
      component: _tracking_page__WEBPACK_IMPORTED_MODULE_6__["TrackingPage"]
    }];

    var TrackingPageModule = function TrackingPageModule() {
      _classCallCheck(this, TrackingPageModule);
    };

    TrackingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
      declarations: [_tracking_page__WEBPACK_IMPORTED_MODULE_6__["TrackingPage"]]
    })], TrackingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/tracking/tracking.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/tracking/tracking.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTrackingTrackingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWRlL0Rlc2t0b3AvVXJhbnNlL3VyYW5zZS1tb2JpbGUvc3JjL2FwcC9wYWdlcy90cmFja2luZy90cmFja2luZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RyYWNraW5nL3RyYWNraW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90cmFja2luZy90cmFja2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/tracking/tracking.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/tracking/tracking.page.ts ***!
    \*************************************************/

  /*! exports provided: TrackingPage */

  /***/
  function srcAppPagesTrackingTrackingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrackingPage", function () {
      return TrackingPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/spinner.service */
    "./src/app/services/spinner.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TrackingPage =
    /*#__PURE__*/
    function () {
      function TrackingPage(spinner) {
        _classCallCheck(this, TrackingPage);

        this.spinner = spinner;
      }

      _createClass(TrackingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.spinner.presentLoading();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.spinner.dismiss();
        }
      }]);

      return TrackingPage;
    }();

    TrackingPage.ctorParameters = function () {
      return [{
        type: _services_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"]
      }];
    };

    TrackingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-tracking',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tracking.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracking/tracking.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tracking.page.scss */
      "./src/app/pages/tracking/tracking.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"]])], TrackingPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-tracking-tracking-module-es5.js.map