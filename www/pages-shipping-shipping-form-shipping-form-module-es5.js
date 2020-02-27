function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-shipping-shipping-form-shipping-form-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shipping/shipping-form/shipping-form.page.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shipping/shipping-form/shipping-form.page.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesShippingShippingFormShippingFormPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"prev()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      <img\n        class=\"headerlogog\"\n        alt=\"Uranse\"\n        src=\"/assets/images/uranselogo-white.png\"\n      />\n    </ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"navigateHome()\">\n        <ion-icon slot=\"icon-only\" name=\"home\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-progress-bar\n      color=\"tertiary\"\n      value=\"{{ progressValue }}\"\n    ></ion-progress-bar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"senderForm\" *ngIf=\"step == 1\" class=\"ion-padding\">\n    <div>\n      <ion-text><h4>Where are you shipping from?</h4></ion-text>\n    </div>\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <!-- Name -->\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">\n         &nbsp; Name\n        </ion-label>\n        <ion-input\n          type=\"text\"\n          formControlName=\"name\"\n          clearInput\n          required\n        ></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.name\">\n          <div\n            class=\"error-message\"\n            *ngIf=\"\n              senderForm.get('name').hasError(validation.type) &&\n              (senderForm.get('name').dirty || senderForm.get('name').touched)\n            \"\n          >\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      <!--Business Name -->\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">\n          &nbsp; Business Name\n        </ion-label>\n        <ion-input\n          type=\"text\"\n          formControlName=\"businessname\"\n          clearInput\n        ></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.businessname\">\n          <div\n            class=\"error-message\"\n            *ngIf=\"\n              senderForm.get('businessname').hasError(validation.type) &&\n              (senderForm.get('businessname').dirty ||\n                senderForm.get('businessname').touched)\n            \"\n          >\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      <!-- Country -->\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Country</ion-label>\n        <ion-select\n          formControlName=\"country\"\n          cancelText=\"Cancel\"\n          okText=\"OK\"\n          required\n          (ionChange)=\"onCountryChange($event)\"\n        >\n          <ion-select-option *ngFor=\"let item of countries\" [value]=\"item\" >\n            {{ item.name }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <!--Address 1 -->\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">\n          &nbsp; Address 1\n        </ion-label>\n        <ion-input\n          type=\"text\"\n          formControlName=\"address1\"\n          clearInput\n          required\n        ></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.address1\">\n          <div\n            class=\"error-message\"\n            *ngIf=\"\n              senderForm.get('address1').hasError(validation.type) &&\n              (senderForm.get('address1').dirty ||\n                senderForm.get('address1').touched)\n            \"\n          >\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      <!-- Address 2 -->\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">\n          &nbsp; Address 2\n        </ion-label>\n        <ion-input\n          type=\"text\"\n          formControlName=\"address2\"\n          clearInput\n        ></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.address2\">\n          <div\n            class=\"error-message\"\n            *ngIf=\"\n              senderForm.get('address2').hasError(validation.type) &&\n              (senderForm.get('address2').dirty ||\n                senderForm.get('address2').touched)\n            \"\n          >\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      <!-- Postal code -->\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">\n          &nbsp; Postal Code\n        </ion-label>\n        <ion-input\n          type=\"text\"\n          formControlName=\"postalcode\"\n          clearInput\n        ></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.postalcode\">\n          <div\n            class=\"error-message\"\n            *ngIf=\"\n              senderForm.get('postalcode').hasError(validation.type) &&\n              (senderForm.get('postalcode').dirty ||\n                senderForm.get('postalcode').touched)\n            \"\n          >\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      <!-- City / town -->\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">\n          &nbsp; City/Town\n        </ion-label>\n        <ion-input\n          type=\"text\"\n          formControlName=\"city\"\n          clearInput\n          required\n        ></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.city\">\n          <div\n            class=\"error-message\"\n            *ngIf=\"\n              senderForm.get('city').hasError(validation.type) &&\n              (senderForm.get('city').dirty || senderForm.get('city').touched)\n            \"\n          >\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      <!-- State -->\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">&nbsp;State / Province</ion-label>\n        <ion-select\n          formControlName=\"state\"\n          cancelText=\"Cancel\"\n          okText=\"OK\"\n          required\n          [disabled]=\"!(senderForm.get('country').dirty ||\n          senderForm.get('country').touched)\"\n        >\n          <ion-select-option\n            *ngFor=\"let item of states\"\n            [value]=\"item\"\n          >\n            {{ item }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <!-- Phone -->\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">\n          &nbsp; Phone\n        </ion-label>\n        <ion-input\n          type=\"text\"\n          formControlName=\"phone\"\n          clearInput\n          required\n          placeholder=\"{{ senderForm.value.country.phoneCode }}\"\n        ></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.phone\">\n          <div\n            class=\"error-message\"\n            *ngIf=\"\n              senderForm.get('phone').hasError(validation.type) &&\n              (senderForm.get('phone').dirty || senderForm.get('phone').touched)\n            \"\n          >\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      <!-- Email -->\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">\n          &nbsp; Email\n        </ion-label>\n        <ion-input\n          type=\"email\"\n          formControlName=\"email\"\n          clearInput\n          inputmode=\"email\"\n          required\n        ></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.email\">\n          <div\n            class=\"error-message\"\n            *ngIf=\"\n              senderForm.get('email').hasError(validation.type) &&\n              (senderForm.get('email').dirty || senderForm.get('email').touched)\n            \"\n          >\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n    </ion-list>\n\n    <ion-button\n      expand=\"full\"\n      color=\"tertiary\"\n      [disabled]=\"!senderForm.valid\"\n      (click)=\"next()\"\n    >\n      Continue\n    </ion-button>\n  </form>\n  <form [formGroup]=\"destinationForm\" *ngIf=\"step == 2\" class=\"ion-padding form-animate\">\n    <div>\n      <ion-text><h4>Where is this shipment going?</h4></ion-text>\n    </div>\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <!-- Name -->\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">\n          &nbsp; Name\n        </ion-label>\n        <ion-input\n          type=\"text\"\n          formControlName=\"name\"\n          clearInput\n          required\n        ></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.name\">\n          <div\n            class=\"error-message\"\n            *ngIf=\"\n              destinationForm.get('name').hasError(validation.type) &&\n              (destinationForm.get('name').dirty ||\n                destinationForm.get('name').touched)\n            \"\n          >\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      <!--Business Name -->\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">\n          &nbsp; Business Name\n        </ion-label>\n        <ion-input\n          type=\"text\"\n          formControlName=\"businessname\"\n          clearInput\n        ></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.businessname\">\n          <div\n            class=\"error-message\"\n            *ngIf=\"\n              destinationForm.get('businessname').hasError(validation.type) &&\n              (destinationForm.get('businessname').dirty ||\n                destinationForm.get('businessname').touched)\n            \"\n          >\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      <!-- Country -->\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">&nbsp;Country</ion-label>\n        <ion-select\n          formControlName=\"country\"\n          cancelText=\"Cancel\"\n          okText=\"OK\"\n          required\n          (ionChange)=\"onCountryChange($event)\"\n        >\n          <ion-select-option *ngFor=\"let item of countries\" [value]=\"item\">\n            {{ item.name }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <!-- Address 1 -->\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">\n          &nbsp; Address 1\n        </ion-label>\n        <ion-input\n          type=\"text\"\n          formControlName=\"address1\"\n          clearInput\n          required\n        ></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.address1\">\n          <div\n            class=\"error-message\"\n            *ngIf=\"\n              destinationForm.get('address1').hasError(validation.type) &&\n              (destinationForm.get('address1').dirty ||\n                destinationForm.get('address1').touched)\n            \"\n          >\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      <!-- Address 2 -->\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">\n          &nbsp; Address 2\n        </ion-label>\n        <ion-input\n          type=\"text\"\n          formControlName=\"address2\"\n          clearInput\n        ></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.address2\">\n          <div\n            class=\"error-message\"\n            *ngIf=\"\n              destinationForm.get('address2').hasError(validation.type) &&\n              (destinationForm.get('address2').dirty ||\n                destinationForm.get('address2').touched)\n            \"\n          >\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      <!-- Postal Code -->\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">\n          &nbsp; Postal Code\n        </ion-label>\n        <ion-input\n          type=\"text\"\n          formControlName=\"postalcode\"\n          clearInput\n        ></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.postalcode\">\n          <div\n            class=\"error-message\"\n            *ngIf=\"\n              destinationForm.get('postalcode').hasError(validation.type) &&\n              (destinationForm.get('postalcode').dirty ||\n                destinationForm.get('postalcode').touched)\n            \"\n          >\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      <!-- City -->\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">\n          &nbsp; City/Town\n        </ion-label>\n        <ion-input\n          type=\"text\"\n          formControlName=\"city\"\n          clearInput\n          required\n        ></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.city\">\n          <div\n            class=\"error-message\"\n            *ngIf=\"\n              destinationForm.get('city').hasError(validation.type) &&\n              (destinationForm.get('city').dirty ||\n                destinationForm.get('city').touched)\n            \"\n          >\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      <!-- State -->\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">&nbsp;State / Province</ion-label>\n        <ion-select\n          formControlName=\"state\"\n          cancelText=\"Cancel\"\n          okText=\"OK\"\n          required\n          [disabled]=\"!(destinationForm.get('country').dirty ||\n          destinationForm.get('country').touched)\"\n        >\n          <ion-select-option\n            *ngFor=\"let item of states\"\n            [value]=\"item\"\n          >\n            {{ item }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <!-- Phone -->\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">\n          &nbsp; Phone\n        </ion-label>\n        <ion-input\n          type=\"text\"\n          formControlName=\"phone\"\n          clearInput\n          required\n          placeholder=\"{{ destinationForm.value.country.phoneCode }}\"\n        ></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.phone\">\n          <div\n            class=\"error-message\"\n            *ngIf=\"\n              destinationForm.get('phone').hasError(validation.type) &&\n              (destinationForm.get('phone').dirty ||\n                destinationForm.get('phone').touched)\n            \"\n          >\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n      <!-- Email -->\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">\n          &nbsp; Email\n        </ion-label>\n        <ion-input\n          type=\"email\"\n          formControlName=\"email\"\n          clearInput\n          inputmode=\"email\"\n          required\n        ></ion-input>\n      </ion-item>\n      <div class=\"error-container\">\n        <ng-container *ngFor=\"let validation of validations.email\">\n          <div\n            class=\"error-message\"\n            *ngIf=\"\n              destinationForm.get('email').hasError(validation.type) &&\n              (destinationForm.get('email').dirty ||\n                destinationForm.get('email').touched)\n            \"\n          >\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n            <span>{{ validation.message }}</span>\n          </div>\n        </ng-container>\n      </div>\n    </ion-list>\n\n    <ion-button\n      expand=\"full\"\n      color=\"tertiary\"\n      [disabled]=\"!destinationForm.valid\"\n      (click)=\"next()\"\n    >\n      Continue\n    </ion-button>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/config/countries.ts":
  /*!*************************************!*\
    !*** ./src/app/config/countries.ts ***!
    \*************************************/

  /*! exports provided: COUNTRYLIST */

  /***/
  function srcAppConfigCountriesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COUNTRYLIST", function () {
      return COUNTRYLIST;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var COUNTRYLIST = [{
      iso: 'US',
      name: 'United States',
      states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
      phoneCode: '+1'
    }, {
      iso: 'NG',
      name: 'Nigeria',
      states: ['Abia', 'Abuja Federal Capital', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nassarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'],
      phoneCode: '+234'
    }, {
      iso: 'GB',
      name: 'United Kingdom',
      states: ['Aberconwy and Colwyn', 'Aberdeen City', 'Aberdeenshire', 'Anglesey', 'Angus', 'Antrim', 'Argyll and Bute', 'Armagh', 'Avon', 'Ayrshire', 'Bath and NE Somerset', 'Bedfordshire', 'Belfast', 'Berkshire', 'Berwickshire', 'BFPO', 'Blaenau Gwent', 'Buckinghamshire', 'Caernarfonshire', 'Caerphilly', 'Caithness', 'Cambridgeshire', 'Cardiff', 'Cardiganshire', 'Carmarthenshire', 'Ceredigion', 'Channel Islands', 'Cheshire', 'City of Bristol', 'Clackmannanshire', 'Clwyd', 'Conwy', 'Cornwall/Scilly', 'Cumbria', 'Denbighshire', 'Derbyshire', 'Derry/Londonderry', 'Devon', 'Dorset', 'Down', 'Dumfries and Galloway', 'Dunbartonshire', 'Dundee', 'Durham', 'Dyfed', 'East Ayrshire', 'East Dunbartonshire', 'East Lothian', 'East Renfrewshire', 'East Riding Yorkshire', 'East Sussex', 'Edinburgh', 'England', 'Essex', 'Falkirk', 'Fermanagh', 'Fife', 'Flintshire', 'Glasgow', 'Gloucestershire', 'Greater London', 'Greater Manchester', 'Gwent', 'Gwynedd', 'Hampshire', 'Hartlepool', 'Hereford and Worcester', 'Hertfordshire', 'Highlands', 'Inverclyde', 'Inverness-Shire', 'Isle of Man', 'Isle of Wight', 'Kent', 'Kincardinshire', 'Kingston Upon Hull', 'Kinross-Shire', 'Kirklees', 'Lanarkshire', 'Lancashire', 'Leicestershire', 'Lincolnshire', 'Londonderry', 'Merseyside', 'Merthyr Tydfil', 'Mid Glamorgan', 'Mid Lothian', 'Middlesex', 'Monmouthshire', 'Moray', 'Neath & Port Talbot', 'Newport', 'Norfolk', 'North Ayrshire', 'North East Lincolnshire', 'North Lanarkshire', 'North Lincolnshire', 'North Somerset', 'North Yorkshire', 'Northamptonshire', 'Northern Ireland', 'Northumberland', 'Nottinghamshire', 'Orkney and Shetland Isles', 'Oxfordshire', 'Pembrokeshire', 'Perth and Kinross', 'Powys', 'Redcar and Cleveland', 'Renfrewshire', 'Rhonda Cynon Taff', 'Rutland', 'Scottish Borders', 'Shetland', 'Shropshire', 'Somerset', 'South Ayrshire', 'South Glamorgan', 'South Gloucesteshire', 'South Lanarkshire', 'South Yorkshire', 'Staffordshire', 'Stirling', 'Stockton On Tees', 'Suffolk', 'Surrey', 'Swansea', 'Torfaen', 'Tyne and Wear', 'Tyrone', 'Vale Of Glamorgan', 'Wales', 'Warwickshire', 'West Berkshire', 'West Dunbartonshire', 'West Glamorgan', 'West Lothian', 'West Midlands', 'West Sussex', 'West Yorkshire', 'Western Isles', 'Wiltshire', 'Wirral', 'Worcestershire', 'Wrexham', 'York'],
      phoneCode: '+44'
    }, {
      iso: 'GH',
      name: 'Ghana',
      states: ['Ashanti', 'Brong-Ahafo', 'Central', 'Eastern', 'Greater Accra', 'Northern', 'Upper East', 'Upper West', 'Volta', 'Western'],
      phoneCode: '+233'
    }, {
      iso: 'CA',
      name: 'Canada',
      states: ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon Territory'],
      phoneCode: '+1'
    }];
    /***/
  },

  /***/
  "./src/app/pages/shipping/shipping-form/shipping-form.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/shipping/shipping-form/shipping-form.module.ts ***!
    \**********************************************************************/

  /*! exports provided: ShippingFormPageModule */

  /***/
  function srcAppPagesShippingShippingFormShippingFormModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShippingFormPageModule", function () {
      return ShippingFormPageModule;
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


    var _shipping_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shipping-form.page */
    "./src/app/pages/shipping/shipping-form/shipping-form.page.ts");

    var routes = [{
      path: '',
      component: _shipping_form_page__WEBPACK_IMPORTED_MODULE_6__["ShippingFormPage"]
    }];

    var ShippingFormPageModule = function ShippingFormPageModule() {
      _classCallCheck(this, ShippingFormPageModule);
    };

    ShippingFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
      declarations: [_shipping_form_page__WEBPACK_IMPORTED_MODULE_6__["ShippingFormPage"]]
    })], ShippingFormPageModule);
    /***/
  },

  /***/
  "./src/app/pages/shipping/shipping-form/shipping-form.page.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/shipping/shipping-form/shipping-form.page.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesShippingShippingFormShippingFormPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".inputs-list {\n  --ion-item-background: var(--page-background);\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n}\n.inputs-list ion-list-header {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n}\n.inputs-list ion-list-header .header-title {\n  text-transform: uppercase;\n  font-size: 16px;\n  color: var(--ion-color-secondary);\n}\n.inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n.inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n.inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n  flex-shrink: 0;\n}\n.ng-valid[required], .ng-valid.required, .ng-invalid[required], .ng-invalid.required {\n  border-left: 2px solid #7951ff;\n}\n.form-animate {\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hpcHBpbmcvc2hpcHBpbmctZm9ybS9DOlxcVXNlcnNcXHZhZGV5ZW1pXFxEb2N1bWVudHNcXGdvYXZpbmNlXFx1cmFuc2UtbW9iaWxlL3NyY1xcYXBwXFxwYWdlc1xcc2hpcHBpbmdcXHNoaXBwaW5nLWZvcm1cXHNoaXBwaW5nLWZvcm0ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaGlwcGluZy9zaGlwcGluZy1mb3JtL3NoaXBwaW5nLWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkNBQUE7RUFFQSwyRUFBQTtBQ0FGO0FERUU7RUFDRSwwQkFBQTtVQUFBLHlCQUFBO0FDQUo7QURFSTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FDQU47QURJRTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ0ZKO0FETUU7RUFDRSx3Q0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNKSjtBRE1JO0VBQ0UsaURBQUE7VUFBQSxnREFBQTtFQUNBLGNBQUE7QUNKTjtBRFVBO0VBQ0UsOEJBQUE7QUNQRjtBRFNBO0VBQ0UscUNBQUE7RUFBQSw2QkFBQTtBQ05GIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2hpcHBpbmcvc2hpcHBpbmctZm9ybS9zaGlwcGluZy1mb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dHMtbGlzdCB7XHJcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG5cclxuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XHJcblxyXG4gIGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xyXG5cclxuICAgIC5oZWFkZXItdGl0bGUge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbnB1dC1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gIH1cclxuXHJcbi5lcnJvci1jb250YWluZXIge1xyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbn1cclxuXHJcbi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCwgLm5nLWludmFsaWRbcmVxdWlyZWRdLCAubmctaW52YWxpZC5yZXF1aXJlZCAge1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzc5NTFmZjtcclxufVxyXG4uZm9ybS1hbmltYXRle1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XHJcbn0iLCIuaW5wdXRzLWxpc3Qge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi5pbnB1dHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xufVxuLmlucHV0cy1saXN0IGlvbi1saXN0LWhlYWRlciAuaGVhZGVyLXRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4uaW5wdXRzLWxpc3QgLmlucHV0LWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4uaW5wdXRzLWxpc3QgLmVycm9yLWNvbnRhaW5lciAuZXJyb3ItbWVzc2FnZSB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmlucHV0cy1saXN0IC5lcnJvci1jb250YWluZXIgLmVycm9yLW1lc3NhZ2UgaW9uLWljb24ge1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4ubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQsIC5uZy1pbnZhbGlkW3JlcXVpcmVkXSwgLm5nLWludmFsaWQucmVxdWlyZWQge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM3OTUxZmY7XG59XG5cbi5mb3JtLWFuaW1hdGUge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/shipping/shipping-form/shipping-form.page.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/shipping/shipping-form/shipping-form.page.ts ***!
    \********************************************************************/

  /*! exports provided: ShippingFormPage */

  /***/
  function srcAppPagesShippingShippingFormShippingFormPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShippingFormPage", function () {
      return ShippingFormPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/spinner.service */
    "./src/app/services/spinner.service.ts");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _config_countries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../config/countries */
    "./src/app/config/countries.ts");

    var ShippingFormPage =
    /*#__PURE__*/
    function () {
      function ShippingFormPage(router, alert, spinner) {
        _classCallCheck(this, ShippingFormPage);

        this.router = router;
        this.alert = alert;
        this.spinner = spinner;
        this.countries = [];
        this.states = [];
        this.step = 1;
        this.totalStep = 4;
        this.progressValue = this.step / this.totalStep;
        this.validations = {
          'name': [{
            type: 'required',
            message: 'Name is required.'
          }],
          'businessname': [{
            type: 'minlength',
            message: 'Business name must be at least 5 characters long.'
          }, {
            type: 'maxlength',
            message: 'Business name cannot be more than 50 characters long.'
          }],
          'address1': [{
            type: 'required',
            message: 'Address is required.'
          }, {
            type: 'minlength',
            message: 'Address must be at least 5 characters long.'
          }, {
            type: 'maxlength',
            message: 'Address cannot be more than 50 characters long.'
          }],
          'address2': [{
            type: 'minlength',
            message: 'Address must be at least 5 characters long.'
          }, {
            type: 'maxlength',
            message: 'Address cannot be more than 50 characters long.'
          }],
          'postalcode': [{
            type: 'minlength',
            message: 'Address must be at least 3 characters long.'
          }, {
            type: 'maxlength',
            message: 'Address cannot be more than 6 characters long.'
          }],
          'phone': [{
            type: 'required',
            message: 'Phone is required.'
          }, {
            type: 'pattern',
            message: 'Enter a valid phone number.'
          }],
          'city': [{
            type: 'required',
            message: 'City is required.'
          }],
          'email': [{
            type: 'required',
            message: 'Email is required.'
          }, {
            type: 'pattern',
            message: 'Enter a valid email.'
          }]
        };
      }

      _createClass(ShippingFormPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.spinner.presentLoading();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.spinner.dismiss();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.countries = _config_countries__WEBPACK_IMPORTED_MODULE_6__["COUNTRYLIST"];
          this.states = _config_countries__WEBPACK_IMPORTED_MODULE_6__["COUNTRYLIST"][0].states;
          this.senderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'businessname': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)])),
            'country': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.countries[0], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'address1': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            'address2': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)])),
            'postalcode': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)])),
            'city': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'state': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.countries[0].states[0], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^\\+[1-9]\\d{1,14}$')])),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]))
          });
          this.destinationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'businessname': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)])),
            'country': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.countries[0], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'address1': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            'address2': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)])),
            'postalcode': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)])),
            'city': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'state': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.countries[0].states[0], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^\\+[1-9]\\d{1,14}$')])),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]))
          });
        }
      }, {
        key: "onCountryChange",
        value: function onCountryChange(e) {
          this.states = e.target.value.states;
        }
      }, {
        key: "next",
        value: function next() {
          this.spinner.presentLoading();
          this.step += 1;
          this.spinner.dismiss();
          this.progressValue = this.step / this.totalStep;
        }
      }, {
        key: "prev",
        value: function prev() {
          this.spinner.presentLoading();

          if (this.step === 1) {
            this.router.navigate(['home/ship']);
            this.senderForm.reset();
            this.destinationForm.reset();
            this.spinner.dismiss();
          } else {
            this.step -= 1;
            this.spinner.dismiss();
            this.progressValue = this.step / this.totalStep;
          }
        }
      }, {
        key: "navigateHome",
        value: function navigateHome() {
          this.router.navigate(['/home']);
          this.senderForm.reset();
          this.destinationForm.reset();
        }
      }]);

      return ShippingFormPage;
    }();

    ShippingFormPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
      }, {
        type: _services_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"]
      }];
    };

    ShippingFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-shipping-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shipping-form.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shipping/shipping-form/shipping-form.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shipping-form.page.scss */
      "./src/app/pages/shipping/shipping-form/shipping-form.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"], _services_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"]])], ShippingFormPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-shipping-shipping-form-shipping-form-module-es5.js.map