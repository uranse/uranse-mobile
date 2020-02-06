function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-verification-verification-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verification/verification.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verification/verification.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesVerificationVerificationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"verificationPage\" color=\"light\">\r\n  <div class=\"divmargin ion-padding\">\r\n    <img\r\n      src=\"/assets/images/black-whit-bkgrd.png\"\r\n      alt=\"Uranse\"\r\n      class=\"ion-padding\"\r\n    />\r\n    <h3>Enter your code</h3>\r\n  </div>\r\n  <div class=\"ion-padding\">\r\n        <ion-input class=\"ion-padding\" placeholder=\"Security code\" type=\"text\"\r\n          autocomplete=\"on\" autocorrect=\"off\" inputmode=\"text\" maxlength = 6 minlength = 6\r\n        >\r\n\r\n        </ion-input>\r\n   \r\n    <ion-button\r\n      expand=\"block\"\r\n      color=\"primary\"\r\n      strong\r\n      (click) = \"loginAction()\"\r\n    >\r\n      Continue\r\n    </ion-button>\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar color=\"primary\">\r\n    <p class=\"ion-padding\">\r\n      By signing in you accept our\r\n      <a>Terms of use</a>\r\n      and\r\n      <a>privacy policy</a>\r\n    </p>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/verification/verification.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/verification/verification.module.ts ***!
    \***********************************************************/

  /*! exports provided: VerificationPageModule */

  /***/
  function srcAppPagesVerificationVerificationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationPageModule", function () {
      return VerificationPageModule;
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


    var _verification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./verification.page */
    "./src/app/pages/verification/verification.page.ts");

    var routes = [{
      path: '',
      component: _verification_page__WEBPACK_IMPORTED_MODULE_6__["VerificationPage"]
    }];

    var VerificationPageModule = function VerificationPageModule() {
      _classCallCheck(this, VerificationPageModule);
    };

    VerificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_verification_page__WEBPACK_IMPORTED_MODULE_6__["VerificationPage"]]
    })], VerificationPageModule);
    /***/
  },

  /***/
  "./src/app/pages/verification/verification.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/verification/verification.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesVerificationVerificationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h3 {\n  text-align: center;\n}\n\n.divmargin {\n  margin-top: 8em;\n}\n\nion-footer > ion-toolbar {\n  color: #ffffff;\n  font-size: 12px;\n}\n\nion-footer > ion-toolbar > p > a {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVyaWZpY2F0aW9uL0M6XFxVc2Vyc1xcdmFkZXllbWlcXERvY3VtZW50c1xcZ29hdmluY2VcXHVyYW5zZS1tb2JpbGUvc3JjXFxhcHBcXHBhZ2VzXFx2ZXJpZmljYXRpb25cXHZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEREE7RUFDRSxVQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92ZXJpZmljYXRpb24vdmVyaWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgze1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZGl2bWFyZ2lue1xyXG4gIG1hcmdpbi10b3A6IDhlbTtcclxufVxyXG5pb24tZm9vdGVyID4gaW9uLXRvb2xiYXIge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5pb24tZm9vdGVyID4gaW9uLXRvb2xiYXIgPiBwID4gYSB7XHJcbiAgY29sb3I6IHJlZDtcclxufSIsImgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGl2bWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogOGVtO1xufVxuXG5pb24tZm9vdGVyID4gaW9uLXRvb2xiYXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24tZm9vdGVyID4gaW9uLXRvb2xiYXIgPiBwID4gYSB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/verification/verification.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/verification/verification.page.ts ***!
    \*********************************************************/

  /*! exports provided: VerificationPage */

  /***/
  function srcAppPagesVerificationVerificationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerificationPage", function () {
      return VerificationPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/toast.service */
    "./src/app/services/toast.service.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var VerificationPage =
    /*#__PURE__*/
    function () {
      function VerificationPage(router, toastService, authService, storageService, alertService) {
        _classCallCheck(this, VerificationPage);

        this.router = router;
        this.toastService = toastService;
        this.authService = authService;
        this.storageService = storageService;
        this.alertService = alertService;
      }

      _createClass(VerificationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loginAction",
        value: function loginAction() {
          this.authService.login();
          this.alertService.presentAlertConfirm('logged in', 'welcome');
          this.router.navigate(['home']);
        }
      }]);

      return VerificationPage;
    }();

    VerificationPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
      }, {
        type: _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]
      }];
    };

    VerificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
      selector: 'app-authentication',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./verification.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verification/verification.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verification.page.scss */
      "./src/app/pages/verification/verification.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])], VerificationPage);
    /***/
  },

  /***/
  "./src/app/services/alert.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/alert.service.ts ***!
    \*******************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppServicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var AlertService =
    /*#__PURE__*/
    function () {
      function AlertService(alertController) {
        _classCallCheck(this, AlertService);

        this.alertController = alertController;
      }

      _createClass(AlertService, [{
        key: "presentAlertConfirm",
        value: function presentAlertConfirm(header, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var choice, alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: header,
                      message: message,
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel'
                      }, {
                        text: 'Okay',
                        role: 'okay'
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                    _context.next = 7;
                    return alert.onDidDismiss().then(function (data) {
                      choice = data;
                    });

                  case 7:
                    return _context.abrupt("return", choice);

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AlertService;
    }();

    AlertService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], AlertService);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./storage.service */
    "./src/app/services/storage.service.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(storageService, router) {
        _classCallCheck(this, AuthService);

        this.storageService = storageService;
        this.router = router;
        this.userData$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login() {
          this.storageService.setIsLoggedIn();
          this.storageService.setIsNotNewUser();
        }
      }, {
        key: "logout",
        value: function logout() {
          this.storageService.removeItem('isloggedin');
          this.storageService.clear();
          this.router.navigate(['']);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/services/toast.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/toast.service.ts ***!
    \*******************************************/

  /*! exports provided: ToastService */

  /***/
  function srcAppServicesToastServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastService", function () {
      return ToastService;
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


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");

    var Toast = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Toast;

    var ToastService =
    /*#__PURE__*/
    function () {
      function ToastService() {
        _classCallCheck(this, ToastService);
      } // Display toast


      _createClass(ToastService, [{
        key: "show",
        value: function show(textToShow, toastDuration, toastPosition) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return Toast.show({
                      duration: toastDuration,
                      text: textToShow
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }]);

      return ToastService;
    }();

    ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ToastService);
    /***/
  }
}]);
//# sourceMappingURL=pages-verification-verification-module-es5.js.map