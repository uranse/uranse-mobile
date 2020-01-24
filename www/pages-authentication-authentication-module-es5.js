function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-authentication-authentication-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/authentication.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/authentication.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthenticationAuthenticationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"loginPage\" color=\"light\">\r\n  <ion-nav-push>\r\n    <ion-button color=\"primary\" size=\"small\" fill=\"clear\">SKIP</ion-button>\r\n  </ion-nav-push>\r\n\r\n  <div class=\"divmargin ion-padding\">\r\n    <img src=\"/assets/images/black-whit-bkgrd.png\" alt=\"Uranse\" class=\"ion-padding\" />\r\n    <h3>Get your one-time code</h3>\r\n  </div>\r\n  <div class=\"ion-padding\">\r\n    <form>\r\n      <ion-input name=\"phonenumber\" class=\"ion-padding\" placeholder=\"Phone Number\" type=\"tel\" autocomplete=\"on\" autocorrect=\"off\"\r\n        inputmode=\"tel\" minlength=10 [(ngModel)] = \"phonenumber\"></ion-input>\r\n      <ion-button expand=\"block\" color=\"primary\" size=\"big\" strong (click) = \"verifyPhoneNumber()\">\r\n        Continue\r\n      </ion-button>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar color=\"primary\">\r\n    <p class=\"ion-padding\">\r\n      By signing in you accept our\r\n      <a>Terms of use</a>\r\n      and\r\n      <a>privacy policy</a>\r\n    </p>\r\n  </ion-toolbar>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/authentication/authentication.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/authentication/authentication.module.ts ***!
    \***************************************************************/

  /*! exports provided: AuthenticationPageModule */

  /***/
  function srcAppPagesAuthenticationAuthenticationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationPageModule", function () {
      return AuthenticationPageModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _authentication_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./authentication.page */
    "./src/app/pages/authentication/authentication.page.ts");

    var routes = [{
      path: '',
      component: _authentication_page__WEBPACK_IMPORTED_MODULE_6__["AuthenticationPage"]
    }];

    var AuthenticationPageModule = function AuthenticationPageModule() {
      _classCallCheck(this, AuthenticationPageModule);
    };

    AuthenticationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_authentication_page__WEBPACK_IMPORTED_MODULE_6__["AuthenticationPage"]]
    })], AuthenticationPageModule);
    /***/
  },

  /***/
  "./src/app/pages/authentication/authentication.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/authentication/authentication.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAuthenticationAuthenticationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h3 {\n  text-align: center;\n}\n\n.divmargin {\n  margin-top: 8em;\n}\n\nion-footer > ion-toolbar {\n  color: #ffffff;\n  font-size: 12px;\n}\n\nion-footer > ion-toolbar > p > a {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aGVudGljYXRpb24vQzpcXFVzZXJzXFx2YWRleWVtaVxcRG9jdW1lbnRzXFxnb2F2aW5jZVxcdXJhbnNlLW1vYmlsZS9zcmNcXGFwcFxccGFnZXNcXGF1dGhlbnRpY2F0aW9uXFxhdXRoZW50aWNhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0dKOztBRERBO0VBQ0ksVUFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmRpdm1hcmdpbntcclxuICAgIG1hcmdpbi10b3A6IDhlbTtcclxufVxyXG5pb24tZm9vdGVyID4gaW9uLXRvb2xiYXIge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuaW9uLWZvb3RlciA+IGlvbi10b29sYmFyID4gcCA+IGEge1xyXG4gICAgY29sb3I6IHJlZDtcclxufSIsImgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGl2bWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogOGVtO1xufVxuXG5pb24tZm9vdGVyID4gaW9uLXRvb2xiYXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24tZm9vdGVyID4gaW9uLXRvb2xiYXIgPiBwID4gYSB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/authentication/authentication.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/authentication/authentication.page.ts ***!
    \*************************************************************/

  /*! exports provided: AuthenticationPage */

  /***/
  function srcAppPagesAuthenticationAuthenticationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationPage", function () {
      return AuthenticationPage;
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

    var AuthenticationPage =
    /*#__PURE__*/
    function () {
      function AuthenticationPage(router) {
        _classCallCheck(this, AuthenticationPage);

        this.router = router;
      }

      _createClass(AuthenticationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "verifyPhoneNumber",
        value: function verifyPhoneNumber() {}
      }]);

      return AuthenticationPage;
    }();

    AuthenticationPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthenticationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-authentication',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./authentication.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/authentication.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./authentication.page.scss */
      "./src/app/pages/authentication/authentication.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthenticationPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-authentication-authentication-module-es5.js.map