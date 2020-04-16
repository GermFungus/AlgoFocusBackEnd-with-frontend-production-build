function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/Services/apiparser/apiparser.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/Services/apiparser/apiparser.service.ts ***!
    \*********************************************************/

  /*! exports provided: ApiparserService */

  /***/
  function srcAppServicesApiparserApiparserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiparserService", function () {
      return ApiparserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ApiparserService = /*#__PURE__*/function () {
      function ApiparserService(httpClient, Router) {
        _classCallCheck(this, ApiparserService);

        this.httpClient = httpClient;
        this.Router = Router;
      }

      _createClass(ApiparserService, [{
        key: "hit",
        value: function hit(url, method, data) {
          var needRaw = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
          url = "https://algofocus-assignment.herokuapp.com" + url;
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.parse(this.httpClient[method](url, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(60000)), needRaw, headers);
        }
      }, {
        key: "parse",
        value: function parse(reqPromise, needRaw, headers) {
          var _this = this;

          return new Promise(function (resolve, reject) {
            reqPromise.subscribe(function (res) {
              var response = res ? res.data || res : res;
              resolve(response);
            }, function (res) {
              if (res && res.status === 401) {
                _this.Router.navigate(['/']);
              }

              reject(res.error);
            });
          });
        }
      }]);

      return ApiparserService;
    }();

    ApiparserService.ɵfac = function ApiparserService_Factory(t) {
      return new (t || ApiparserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ApiparserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiparserService,
      factory: ApiparserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiparserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Services/registration/registration.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Services/registration/registration.service.ts ***!
    \***************************************************************/

  /*! exports provided: RegistrationService */

  /***/
  function srcAppServicesRegistrationRegistrationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationService", function () {
      return RegistrationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _apiparser_apiparser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../apiparser/apiparser.service */
    "./src/app/Services/apiparser/apiparser.service.ts");

    var RegistrationService = /*#__PURE__*/function () {
      function RegistrationService(parser) {
        _classCallCheck(this, RegistrationService);

        this.parser = parser;
      }

      _createClass(RegistrationService, [{
        key: "register",
        value: function register(params) {
          return this.parser.hit('/user/register', 'post', {
            params: params
          });
        }
      }]);

      return RegistrationService;
    }();

    RegistrationService.ɵfac = function RegistrationService_Factory(t) {
      return new (t || RegistrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_apiparser_apiparser_service__WEBPACK_IMPORTED_MODULE_1__["ApiparserService"]));
    };

    RegistrationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RegistrationService,
      factory: RegistrationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _apiparser_apiparser_service__WEBPACK_IMPORTED_MODULE_1__["ApiparserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _views_common_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./views/common/header/header.component */
    "./src/app/views/common/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _views_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./views/common/footer/footer.component */
    "./src/app/views/common/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'frontEnd';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_views_common_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _views_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _main_module_main_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main-module/main-module.module */
    "./src/app/main-module/main-module.module.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _views_common_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./views/common/header/header.component */
    "./src/app/views/common/header/header.component.ts");
    /* harmony import */


    var _views_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./views/common/footer/footer.component */
    "./src/app/views/common/footer/footer.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _main_module_main_module_module__WEBPACK_IMPORTED_MODULE_2__["MainModuleModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _views_common_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _views_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _main_module_main_module_module__WEBPACK_IMPORTED_MODULE_2__["MainModuleModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _views_common_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _views_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _main_module_main_module_module__WEBPACK_IMPORTED_MODULE_2__["MainModuleModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-module/main-module.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/main-module/main-module.component.ts ***!
    \******************************************************/

  /*! exports provided: MainModuleComponent */

  /***/
  function srcAppMainModuleMainModuleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainModuleComponent", function () {
      return MainModuleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Services_registration_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Services/registration/registration.service */
    "./src/app/Services/registration/registration.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function MainModuleComponent_div_3_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_3_li_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_3_li_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_3_li_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_3_div_27_p_14_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is required!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_3_div_27_p_14_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid Name.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_3_div_27_p_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainModuleComponent_div_3_div_27_p_14_span_1_Template, 2, 0, "span", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainModuleComponent_div_3_div_27_p_14_span_2_Template, 2, 0, "span", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors.pattern);
      }
    }

    function MainModuleComponent_div_3_div_27_p_20_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is required!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_3_div_27_p_20_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid last name.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_3_div_27_p_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainModuleComponent_div_3_div_27_p_20_span_1_Template, 2, 0, "span", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainModuleComponent_div_3_div_27_p_20_span_2_Template, 2, 0, "span", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors.pattern);
      }
    }

    function MainModuleComponent_div_3_div_27_p_26_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_3_div_27_p_26_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid email address.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_3_div_27_p_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainModuleComponent_div_3_div_27_p_26_span_1_Template, 2, 0, "span", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainModuleComponent_div_3_div_27_p_26_span_2_Template, 2, 0, "span", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r12.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r12.errors.pattern);
      }
    }

    function MainModuleComponent_div_3_div_27_p_36_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date of Birth is required!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_3_div_27_p_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainModuleComponent_div_3_div_27_p_36_span_1_Template, 2, 0, "span", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r15.errors.required);
      }
    }

    function MainModuleComponent_div_3_div_27_p_42_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone Number is required!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_3_div_27_p_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainModuleComponent_div_3_div_27_p_42_span_1_Template, 2, 0, "span", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r17.errors.required);
      }
    }

    function MainModuleComponent_div_3_div_27_p_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Phone Number is required with 10 digits only no spaces!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainModuleComponent_div_3_div_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Fill Your Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MainModuleComponent_div_3_div_27_Template_form_ngSubmit_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r28.register(_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "First Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 22, 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MainModuleComponent_div_3_div_27_p_14_Template, 3, 2, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Last Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 25, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MainModuleComponent_div_3_div_27_p_20_Template, 3, 2, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 27, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MainModuleComponent_div_3_div_27_p_26_Template, 3, 2, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Date Of Birth");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 30, 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainModuleComponent_div_3_div_27_Template_button_click_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

          return _r14.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, MainModuleComponent_div_3_div_27_p_36_Template, 2, 1, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Phone Number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 34, 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, MainModuleComponent_div_3_div_27_p_42_Template, 2, 1, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, MainModuleComponent_div_3_div_27_p_43_Template, 3, 0, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Continue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "You\u2019ll love Offorms");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Free");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " for developers");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u2713");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Your data is safe");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u2713");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Build better understanding");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u2713");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Showcase all your skills");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r8.valid && _r7.submitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r10.valid && _r7.submitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r12.valid && _r7.submitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r15.valid && _r7.submitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r17.valid && _r7.submitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.phoneState);
      }
    }

    function MainModuleComponent_div_3_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Provide data by you with us is following:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("First Name : ", ctx_r6.userDetails.user.firstName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Last Name : ", ctx_r6.userDetails.user.lastName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("E-Mail Adress : ", ctx_r6.userDetails.user.email, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Phone Number : ", ctx_r6.userDetails.user.phone, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date Of Birth : ", ctx_r6.userDetails.user.dp.day + "-" + ctx_r6.userDetails.user.dp.month + "-" + ctx_r6.userDetails.user.dp.year, "");
      }
    }

    function MainModuleComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Join Offorms - Developer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Submit your details for evaluation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MainModuleComponent_div_3_li_10_Template, 2, 0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MainModuleComponent_div_3_li_11_Template, 2, 0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Step 1: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Complete the form");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MainModuleComponent_div_3_li_20_Template, 2, 0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MainModuleComponent_div_3_li_21_Template, 2, 0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Step 2: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Save and Veiw Data");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MainModuleComponent_div_3_div_27_Template, 68, 6, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MainModuleComponent_div_3_div_28_Template, 14, 5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.step == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.step == 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.step == 2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.step == 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.step == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.step == 2);
      }
    }

    var MainModuleComponent = /*#__PURE__*/function () {
      function MainModuleComponent(router, route, RegistrationService) {
        _classCallCheck(this, MainModuleComponent);

        this.router = router;
        this.route = route;
        this.RegistrationService = RegistrationService;
        this.step = 1;
        this.looper = [1];
        this.counter = 1;
        this.phoneState = true;
      }

      _createClass(MainModuleComponent, [{
        key: "register",
        value: function register(user) {
          var _this2 = this;

          if (!user || !user.valid) return;
          var userToSend = {
            user: user.form.value
          };
          console.log(userToSend);
          this.RegistrationService.register(userToSend).then(function (result) {
            if (result[0] === 'sucess') {
              _this2.userDetails = userToSend;
              console.log(_this2.userDetails);
              _this2.step = 2;
            }

            if (result[0] === 'Incomplete') {
              _this2.phoneState = false;
            }
          })["catch"](function (err) {
            err = err || new Object();
          });
        }
      }, {
        key: "continue",
        value: function _continue() {
          this.step = this.step + 1;
        }
      }, {
        key: "adder",
        value: function adder() {
          this.counter = this.counter + 1;
          this.looper.push(this.counter);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainModuleComponent;
    }();

    MainModuleComponent.ɵfac = function MainModuleComponent_Factory(t) {
      return new (t || MainModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_registration_registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"]));
    };

    MainModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainModuleComponent,
      selectors: [["app-main-module"]],
      decls: 4,
      vars: 1,
      consts: [[1, "home-main-container"], [1, "developer_registartion"], [1, "container"], ["class", "main-registration-part", 4, "ngIf"], [1, "main-registration-part"], [1, "heading-11"], [1, "tab-section"], [1, "Coloumn-gap"], [1, "steps-details"], [4, "ngIf"], [2, "margin-top", "4px !important"], ["src", "assets/images/Head-Icon.png", "alt", ""], ["src", "assets/images/HeadGrey.png", "alt", ""], ["src", "assets/images/link_icon_grey.png", "alt", ""], ["src", "assets/images/link_icon_blue.png", "alt", ""], [1, "step-1-section"], [1, "step-form-information"], [1, "row"], [1, "col-md-6", "col-sm-6"], [1, "w_60", 3, "ngSubmit"], ["user", "ngForm"], [1, "form-group"], ["ngModel", "", "required", "", "type", "text", "name", "firstName", "placeholder", "First Name", "pattern", "[a-zA-Z][a-zA-Z ]+", 1, "form-control"], ["firstName", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["ngModel", "", "required", "", "type", "text", "name", "lastName", "placeholder", "Last Name", "pattern", "[a-zA-Z][a-zA-Z ]+", 1, "form-control"], ["lastName", "ngModel"], ["ngModel", "", "required", "", "type", "email", "name", "email", "placeholder", "Email", "pattern", "^[_a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,4})$", 1, "form-control"], ["email", "ngModel"], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngModel", "", "ngbDatepicker", "", "required", "", 1, "form-control"], ["d", "ngbDatepicker", "dp", "ngModel"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "calendar", 3, "click"], ["ngModel", "", "required", "", "type", "text", "name", "phone", "placeholder", "Number", "required", "", 1, "form-control"], ["phone", "ngModel"], ["type", "submit", 1, "button", "btn-steps"], [1, "free-points"], [1, "free"], [1, "list"], [1, "text-danger"], ["class", "d-block text-left mt-1 ml-1 small text-danger", 4, "ngIf"], [1, "d-block", "text-left", "mt-1", "ml-1", "small", "text-danger"], [1, "step-2-section"]],
      template: function MainModuleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainModuleComponent_div_3_Template, 29, 6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step != 4);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepicker"]],
      styles: ["@charset \"UTF-8\";\n@font-face {\n  font-family: Lato-Light;\n  src: url(/assets/font/Lato-Light.ttf);\n}\n@font-face {\n  font-family: Lato-Regular;\n  src: url(/assets/font/Lato-Regular.ttf);\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  font-family: Lato-Light;\n}\n.home-main-container[_ngcontent-%COMP%] {\n  margin-bottom: 170px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%] {\n  background-color: #232633;\n  width: 100%;\n  padding: 23px 55px 56px 104px;\n  position: relative;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: -28px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .dotted-img[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  bottom: -62px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 4px;\n  padding: 20px;\n  width: 375px;\n  box-shadow: 0px 6px 9px -1px #4a4a4a;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-image: url(/assets/images/down-arrow.png);\n  background-repeat: no-repeat;\n  background-position: right 15px bottom 7px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: Lato-Light;\n  color: #707070;\n  font-size: 16px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .opp-text[_ngcontent-%COMP%] {\n  font-family: Lato-Light;\n  color: #707070;\n  font-size: 14px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-custom[_ngcontent-%COMP%] {\n  height: 34px;\n  border-radius: 8px;\n  border: 1px solid #b7b7b7;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .pad-2[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   .main_title[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 82%;\n  font-size: 36px;\n  font-weight: bold;\n  line-height: 45px;\n  margin-bottom: 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 40px;\n  letter-spacing: 1px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 5px 0px;\n  font-size: 20px;\n  font-style: italic;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 15px 0px;\n  font-size: 17px;\n  letter-spacing: 2px;\n  line-height: 25px;\n}\n.home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .btn-custom[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #7365a8;\n  color: #fff;\n  font-size: 24px;\n  font-family: Lato-Light;\n  margin-top: 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%] {\n  padding: 50px 115px;\n  overflow: hidden;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .heading-text-2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .heading-text-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 36px;\n  letter-spacing: 2px;\n  font-weight: 600;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .mar-bot-25[_ngcontent-%COMP%] {\n  margin-bottom: 45px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%] {\n  padding: 5px 9px;\n  text-align: center;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%] {\n  margin-left: 13px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: Lato-Regular;\n  color: #949494;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #7a7777;\n  font-size: 18px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #595959;\n  margin-top: 9px;\n  height: 83px;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 29px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #979696;\n  font-size: 16px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .user-box-connect[_ngcontent-%COMP%] {\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .user-box-connect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%] {\n  padding: 50px 115px;\n}\n.home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .heading-text-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 37px;\n}\n.home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-questions[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-questions[_ngcontent-%COMP%]   .faq-1[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-questions[_ngcontent-%COMP%]   .faq-1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: Lato-Regular;\n  color: #727272;\n  margin-bottom: 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-questions[_ngcontent-%COMP%]   .faq-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Lato-Light;\n  color: #727272;\n  margin-bottom: 20px;\n  font-size: 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  padding: 50px 115px;\n  overflow: hidden;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .heading-text-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 37px;\n  margin-bottom: 45px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n  display: flex;\n  flex: 1 1 0;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 28px 20px;\n  text-align: center;\n  box-shadow: -3px 2px 13px 0px #c0cdce;\n  width: 100%;\n  position: relative;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: Lato-Regular;\n  height: 80px;\n  font-size: 28px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border: 1px solid #ff6b81;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #707070;\n  font-size: 18px;\n  margin: 30px 0px 90px;\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   .icon-tab[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12px;\n  left: 50%;\n  transform: translate(-50%);\n}\n.home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #ff6b81;\n  border-radius: 50px;\n  display: inline-block;\n  margin: 15px 4px 0px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%] {\n  padding: 22px 0px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .btn-steps[_ngcontent-%COMP%] {\n  width: 217px;\n  height: 47px;\n  background: #7365a8;\n  color: #fff;\n  border: 0px;\n  font-size: 20px;\n  font-family: Lato-Regular;\n  border-radius: 4px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%] {\n  padding: 0px 50px;\n  margin-bottom: 30px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .heading-11[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #595959;\n  font-family: Lato-Regular;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .heading-11[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #595959;\n  font-family: Lato-Regular;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 40px 0px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .steps-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  padding: 7px 20px;\n  margin: 0px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .steps-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 6px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .steps-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 16px;\n  color: #000;\n  font-family: Lato-Regular;\n  margin-left: 30px;\n  display: block;\n  font-weight: 600;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .steps-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #595959;\n  font-weight: normal;\n  display: block;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .Coloumn-gap[_ngcontent-%COMP%] {\n  width: 33%;\n  display: inline-block;\n  float: left;\n  border: 1px solid #a6a6a6;\n  margin-right: 2px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #000;\n  font-family: Lato-Regular;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .step-form-information[_ngcontent-%COMP%] {\n  padding: 34px 0px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .step-form-information[_ngcontent-%COMP%]   .w_60[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .step-form-information[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: Lato-Regular;\n  color: #595959;\n  font-weight: 100;\n  margin-bottom: 8px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .step-form-information[_ngcontent-%COMP%]   .custom-idea[_ngcontent-%COMP%] {\n  padding: 20px 12px;\n  border-radius: 6px;\n  border: 1px solid #a6a6a6;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  width: 320px;\n  float: right;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: Lato-Regular;\n  padding: 20px 20px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%]   .free[_ngcontent-%COMP%] {\n  padding: 0px 35px;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%]   .free[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 15px 0px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  padding: 20px 35px;\n  list-style: none;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #32d039;\n  margin-right: 10px;\n  font-weight: bold;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #000;\n  font-family: Lato-Regular;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #979696;\n  font-size: 16px;\n  margin: 15px 0 20px 0;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #000;\n  font-family: Lato-Regular;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .form-custom[_ngcontent-%COMP%] {\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid #b7b7b7;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  padding-left: 25px;\n  margin-bottom: 12px;\n  top: -2px;\n  float: right;\n  cursor: pointer;\n  font-size: 15px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  position: relative;\n  top: 3px;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background-color: #fff;\n  border-color: #abaaaa;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 5px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  content: \"\u2713\";\n  position: absolute;\n  display: none;\n  color: #32d039;\n  top: 0;\n  left: 2px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .cust-btn[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  background-color: #f8204f;\n  border-width: 2px;\n  border-color: #f8204f;\n  color: #fff;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .cust-btn[_ngcontent-%COMP%]:hover {\n  border-color: #f8204f;\n  background-color: #fff;\n  color: #f8204f;\n  border-radius: 20px;\n  transform-style: 2s;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  float: right;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .btn-custom[_ngcontent-%COMP%] {\n  width: 300px;\n  float: right;\n  margin-top: 14px;\n  height: 60px;\n  background: #7365a8;\n  color: #fff;\n  font-size: 24px;\n  font-family: Lato-Light;\n  letter-spacing: 1px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #000;\n  font-family: Lato-Regular;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #979696;\n  font-size: 16px;\n  margin: 15px 0 20px 0;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-custom[_ngcontent-%COMP%] {\n  height: 36px;\n  border-radius: 8px;\n  border: 1px solid #b7b7b7;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #ff6b81;\n  font-size: 24px;\n  margin: 0px 27px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   .btn-custom.form-btn[_ngcontent-%COMP%] {\n  width: 300px;\n  float: right;\n  margin-top: 14px;\n  height: 60px;\n  background: #7365a8;\n  color: #fff;\n  font-size: 24px;\n  font-family: Lato-Light;\n  letter-spacing: 1px;\n}\n.home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   .btn-add.skip-details[_ngcontent-%COMP%] {\n  clear: both;\n  float: right;\n  margin: 6px 0px;\n  color: #404040;\n  background: transparent;\n  font-size: 24px;\n}\n@media screen and (max-width: 1200px) {\n  .home-main-container[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%] {\n    padding: 50px 25px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .mar-bot-25[_ngcontent-%COMP%] {\n    margin-bottom: 45px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .user-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    height: 94px;\n    font-size: 21px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .user-box-connect[_ngcontent-%COMP%] {\n    height: 84px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%] {\n    padding: 0px 25px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .heading-text-2[_ngcontent-%COMP%] {\n    margin-bottom: 45px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%] {\n    padding: 50px 25px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n    width: 14px;\n    height: 14px;\n    border: 2px solid #ff6b81;\n    border-radius: 50px;\n    display: inline-block;\n    margin: 15px 1px 0px;\n  }\n}\n@media screen and (max-width: 991px) {\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%] {\n    padding: 0px 25px 50px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%] {\n    flex-direction: column;\n    display: block;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%] {\n    padding: 50px 25px 12px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .mar-right[_ngcontent-%COMP%] {\n    border-right: 0px;\n    border-bottom: 1px solid #DCDCDC;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%] {\n    margin: 60px 0px 38px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%] {\n    width: 336px;\n    margin: 0 auto;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .user-box-connect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-questions[_ngcontent-%COMP%]   .faq-1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]   .faq-questions[_ngcontent-%COMP%]   .faq-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 17px;\n    margin-bottom: 0px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%] {\n    box-shadow: 0px 2px 13px 0px #c0cdce !important;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .work-box-1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    height: 50px !important;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%]   .work-steps[_ngcontent-%COMP%]   .same-box[_ngcontent-%COMP%] {\n    margin-bottom: 22px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%] {\n    padding: 4px 25px 50px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%] {\n    margin-top: 45px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .dotted-img[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 640px) {\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%] {\n    padding: 5px 0px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .btn-steps[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 27px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%] {\n    padding: 0px 10px;\n    margin-bottom: 10px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .tab-section[_ngcontent-%COMP%]   .Coloumn-gap[_ngcontent-%COMP%] {\n    display: block;\n    float: none;\n    width: 100%;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .step-form-information[_ngcontent-%COMP%]   .w_60[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-1-section[_ngcontent-%COMP%]   .free-points[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    border: 1px solid #ccc;\n    width: 100%;\n    float: none;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n    display: inline-block;\n    position: relative;\n    padding-left: 25px;\n    margin-bottom: 12px;\n    top: -2px;\n    float: right;\n    cursor: pointer;\n    font-size: 15px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n    position: relative;\n    top: 3px;\n    left: 0;\n    height: 20px;\n    width: 20px;\n    background-color: #fff;\n    border-color: #abaaaa;\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 5px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n    background-color: #fff;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n    content: \"\u2713\";\n    position: absolute;\n    display: none;\n    color: #32d039;\n    top: 0;\n    left: 2px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n    display: block;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .cust-btn[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    background-color: #f8204f;\n    border-width: 2px;\n    border-color: #f8204f;\n    color: #fff;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .cust-btn[_ngcontent-%COMP%]:hover {\n    border-color: #f8204f;\n    background-color: #fff;\n    color: #f8204f;\n    border-radius: 20px;\n    transform-style: 2s;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n    float: right;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-2-section[_ngcontent-%COMP%]   .btn-custom[_ngcontent-%COMP%] {\n    width: 300px;\n    float: right;\n    margin-top: 14px;\n    height: 60px;\n    background: #7365a8;\n    color: #fff;\n    font-size: 24px;\n    font-family: Lato-Light;\n    letter-spacing: 1px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 25px;\n    color: #000;\n    font-family: Lato-Regular;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #979696;\n    font-size: 16px;\n    margin: 15px 0 20px 0;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-custom[_ngcontent-%COMP%] {\n    height: 36px;\n    border-radius: 8px;\n    border: 1px solid #b7b7b7;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n    background: transparent;\n    color: #ff6b81;\n    font-size: 24px;\n    margin: 0px 27px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   .btn-custom.form-btn[_ngcontent-%COMP%] {\n    width: 300px;\n    float: right;\n    margin-top: 14px;\n    height: 60px;\n    background: #7365a8;\n    color: #fff;\n    font-size: 24px;\n    font-family: Lato-Light;\n    letter-spacing: 1px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .developer_registartion[_ngcontent-%COMP%]   .main-registration-part[_ngcontent-%COMP%]   .step-3-section[_ngcontent-%COMP%]   .recommend_form[_ngcontent-%COMP%]   .btn-add.skip-details[_ngcontent-%COMP%] {\n    clear: both;\n    float: right;\n    margin: 6px 0px;\n    color: #404040;\n    background: transparent;\n    font-size: 24px;\n  }\n}\n@media screen and (max-width: 480px) {\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%] {\n    padding: 4px 7px 77px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .form-custom[_ngcontent-%COMP%] {\n    height: 42px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .main-section[_ngcontent-%COMP%]   .information-form[_ngcontent-%COMP%]   .form-background[_ngcontent-%COMP%]   .btn-custom[_ngcontent-%COMP%] {\n    height: 58px;\n    font-size: 20px;\n    margin-top: 15px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%] {\n    padding: 21px 7px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .heading-text-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%] {\n    margin: 0px 0px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%] {\n    margin: 30px 0px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%]   .join-sections[_ngcontent-%COMP%]   .main-box-section[_ngcontent-%COMP%]   .box-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 22px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%] {\n    padding: 25px 14px;\n  }\n  .home-main-container[_ngcontent-%COMP%]   .section-4[_ngcontent-%COMP%] {\n    padding: 25px 7px;\n  }\n}\n.apllied[_ngcontent-%COMP%] {\n  width: 60%;\n  margin-left: 20%;\n  text-align: center;\n  padding: 50px;\n  border: #595959 solid 1px;\n}\n.ha[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n  text-align: center;\n  margin: 15px;\n  color: #595959;\n  font-family: Lato-Regular;\n}\n.pa[_ngcontent-%COMP%] {\n  padding: 5px;\n  text-align: center;\n  margin: 15px;\n  text-decoration: none;\n  font-size: 16px;\n  color: #595959;\n  font-family: Lato-Regular;\n  display: block;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1tb2R1bGUvbWFpbi1tb2R1bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4tbW9kdWxlL0Q6XFxXZWIgRGV2ZWxvcG1lbnRcXEFsZ29Gb2N1c1xcZnJvbnRFbmQvc3JjXFxhcHBcXG1haW4tbW9kdWxlXFxtYWluLW1vZHVsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSx1QkFBQTtFQUNBLHFDQUFBO0FERUo7QUNBRTtFQUNFLHlCQUFBO0VBQ0EsdUNBQUE7QURFSjtBQ0FFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FERUo7QUNBRTtFQUNFLG9CQUFBO0FER0o7QUNGSTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QURJTjtBQ0hNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURLUjtBQ0pRO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBRE1WO0FDSlE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBRE1WO0FDTFU7RUFDRSxtQkFBQTtBRE9aO0FDTlk7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvREFBQTtFQUNBLDRCQUFBO0VBQ0EsMENBQUE7QURRZDtBQ05ZO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRFFkO0FDTlk7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEUWQ7QUNOWTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FEUWQ7QUNMVTtFQUNFLFlBQUE7QURPWjtBQ0ZVO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FESVo7QUNGVTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VB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bnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbiAgc3JjOiB1cmwoL2Fzc2V0cy9mb250L0xhdG8tTGlnaHQudHRmKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnQvTGF0by1SZWd1bGFyLnR0Zik7XG59XG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xufVxuXG4uaG9tZS1tYWluLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDE3MHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzI2MzM7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyM3B4IDU1cHggNTZweCAxMDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC0yOHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuZG90dGVkLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE2cHg7XG4gIGJvdHRvbTogLTYycHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIC5mb3JtLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAzNzVweDtcbiAgYm94LXNoYWRvdzogMHB4IDZweCA5cHggLTFweCAjNGE0YTRhO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuZm9ybS1iYWNrZ3JvdW5kIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5tYWluLXNlY3Rpb24gLmluZm9ybWF0aW9uLWZvcm0gLmZvcm0tYmFja2dyb3VuZCAuZm9ybS1ncm91cCBzZWxlY3Qge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2Rvd24tYXJyb3cucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTVweCBib3R0b20gN3B4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuZm9ybS1iYWNrZ3JvdW5kIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIC5mb3JtLWJhY2tncm91bmQgLmZvcm0tZ3JvdXAgLm9wcC10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIC5mb3JtLWJhY2tncm91bmQgLmZvcm0tZ3JvdXAgLmZvcm0tY3VzdG9tIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiN2I3Yjc7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIC5mb3JtLWJhY2tncm91bmQgLnBhZC0yIHtcbiAgcGFkZGluZzogMnB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuaGVhZGluZy10ZXh0IC5tYWluX3RpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA4MiU7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuaGVhZGluZy10ZXh0IGgyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIC5oZWFkaW5nLXRleHQgcCB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDVweCAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuaGVhZGluZy10ZXh0IGg0IHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMTVweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIC5idG4tY3VzdG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICM3MzY1YTg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiB7XG4gIHBhZGRpbmc6IDUwcHggMTE1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5oZWFkaW5nLXRleHQtMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmhlYWRpbmctdGV4dC0yIGgyIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLm1hci1ib3QtMjUge1xuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAuZmlyc3QtYm94IHtcbiAgcGFkZGluZzogNXB4IDlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAuZmlyc3QtYm94IC51c2VyLWJveCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmZpcnN0LWJveCAudGV4dC1ib3gge1xuICBtYXJnaW4tbGVmdDogMTNweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmZpcnN0LWJveCAudGV4dC1ib3ggaDMge1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICBjb2xvcjogIzk0OTQ5NDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmZpcnN0LWJveCAudGV4dC1ib3ggcCB7XG4gIGNvbG9yOiAjN2E3Nzc3O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC5ib3gtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmJveC10ZXh0IGgyIHtcbiAgY29sb3I6ICM1OTU5NTk7XG4gIG1hcmdpbi10b3A6IDlweDtcbiAgaGVpZ2h0OiA4M3B4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAuYm94LXRleHQgcCB7XG4gIGNvbG9yOiAjOTc5Njk2O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC51c2VyLWJveC1jb25uZWN0IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC51c2VyLWJveC1jb25uZWN0IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmZhcS1zZWN0aW9uIHtcbiAgcGFkZGluZzogNTBweCAxMTVweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5mYXEtc2VjdGlvbiAuaGVhZGluZy10ZXh0LTIgaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzdweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5mYXEtc2VjdGlvbiAuZmFxLXF1ZXN0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZmFxLXNlY3Rpb24gLmZhcS1xdWVzdGlvbnMgLmZhcS0xIHtcbiAgbWFyZ2luLXRvcDogMjhweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5mYXEtc2VjdGlvbiAuZmFxLXF1ZXN0aW9ucyAuZmFxLTEgaDMge1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICBjb2xvcjogIzcyNzI3MjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5mYXEtc2VjdGlvbiAuZmFxLXF1ZXN0aW9ucyAuZmFxLTEgcCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xuICBjb2xvcjogIzcyNzI3MjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tNCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZzogNTBweCAxMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTQgLmhlYWRpbmctdGV4dC0yIGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDM3cHg7XG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTQgLndvcmstc3RlcHMgLnNhbWUtYm94IHtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDEgMSAwO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tNCAud29yay1zdGVwcyAuc2FtZS1ib3ggLndvcmstYm94LTEge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAyOHB4IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogLTNweCAycHggMTNweCAwcHggI2MwY2RjZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTQgLndvcmstc3RlcHMgLnNhbWUtYm94IC53b3JrLWJveC0xIGgyIHtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgaGVpZ2h0OiA4MHB4O1xuICBmb250LXNpemU6IDI4cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIC5zYW1lLWJveCAud29yay1ib3gtMSBociB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjZiODE7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIC5zYW1lLWJveCAud29yay1ib3gtMSBwIHtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAzMHB4IDBweCA5MHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tNCAud29yay1zdGVwcyAuc2FtZS1ib3ggLndvcmstYm94LTEgLmljb24tdGFiIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEycHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIC5zYW1lLWJveCAud29yay1ib3gtMSAuY2lyY2xlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmNmI4MTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDE1cHggNHB4IDBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIHtcbiAgcGFkZGluZzogMjJweCAwcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAuYnRuLXN0ZXBzIHtcbiAgd2lkdGg6IDIxN3B4O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIGJhY2tncm91bmQ6ICM3MzY1YTg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCB7XG4gIHBhZGRpbmc6IDBweCA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLmhlYWRpbmctMTEgaDIge1xuICBjb2xvcjogIzU5NTk1OTtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5oZWFkaW5nLTExIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNTk1OTU5O1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnRhYi1zZWN0aW9uIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiA0MHB4IDBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC50YWItc2VjdGlvbiAuc3RlcHMtZGV0YWlscyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDdweCAyMHB4O1xuICBtYXJnaW46IDBweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC50YWItc2VjdGlvbiAuc3RlcHMtZGV0YWlscyB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAudGFiLXNlY3Rpb24gLnN0ZXBzLWRldGFpbHMgdWwgbGkgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnRhYi1zZWN0aW9uIC5zdGVwcy1kZXRhaWxzIHVsIGxpIGEgc3BhbiB7XG4gIGNvbG9yOiAjNTk1OTU5O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC50YWItc2VjdGlvbiAuQ29sb3Vtbi1nYXAge1xuICB3aWR0aDogMzMlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTZhNmE2O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTEtc2VjdGlvbiBoMiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0xLXNlY3Rpb24gLnN0ZXAtZm9ybS1pbmZvcm1hdGlvbiB7XG4gIHBhZGRpbmc6IDM0cHggMHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMS1zZWN0aW9uIC5zdGVwLWZvcm0taW5mb3JtYXRpb24gLndfNjAge1xuICB3aWR0aDogNjAlO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMS1zZWN0aW9uIC5zdGVwLWZvcm0taW5mb3JtYXRpb24gbGFiZWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIGNvbG9yOiAjNTk1OTU5O1xuICBmb250LXdlaWdodDogMTAwO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0xLXNlY3Rpb24gLnN0ZXAtZm9ybS1pbmZvcm1hdGlvbiAuY3VzdG9tLWlkZWEge1xuICBwYWRkaW5nOiAyMHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2E2YTZhNjtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTEtc2VjdGlvbiAuZnJlZS1wb2ludHMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB3aWR0aDogMzIwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTEtc2VjdGlvbiAuZnJlZS1wb2ludHMgaDIge1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0xLXNlY3Rpb24gLmZyZWUtcG9pbnRzIC5mcmVlIHtcbiAgcGFkZGluZzogMHB4IDM1cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTEtc2VjdGlvbiAuZnJlZS1wb2ludHMgLmZyZWUgcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTVweCAwcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0xLXNlY3Rpb24gLmZyZWUtcG9pbnRzIC5saXN0IHtcbiAgcGFkZGluZzogMjBweCAzNXB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMS1zZWN0aW9uIC5mcmVlLXBvaW50cyAubGlzdCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTEtc2VjdGlvbiAuZnJlZS1wb2ludHMgLmxpc3QgbGkgc3BhbiB7XG4gIGNvbG9yOiAjMzJkMDM5O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIGgyIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiBwIHtcbiAgY29sb3I6ICM5Nzk2OTY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAxNXB4IDAgMjBweCAwO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIGg0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuZm9ybS1jdXN0b20ge1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I3YjdiNztcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuY2hlY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB0b3A6IC0ycHg7XG4gIGZsb2F0OiByaWdodDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gLmNoZWNrIGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gLmNoZWNrbWFyayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2FiYWFhYTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuY2hlY2sgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5jaGVja21hcms6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKck1wiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGNvbG9yOiAjMzJkMDM5O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDJweDtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuY2hlY2sgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuY3VzdC1idG4ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjgyMDRmO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiAjZjgyMDRmO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuY3VzdC1idG46aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNmODIwNGY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjZjgyMDRmO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0cmFuc2Zvcm0tc3R5bGU6IDJzO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5idG4tY3VzdG9tIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogIzczNjVhODtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0zLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMy1zZWN0aW9uIGgyIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbn1cbi5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTMtc2VjdGlvbiBwIHtcbiAgY29sb3I6ICM5Nzk2OTY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAxNXB4IDAgMjBweCAwO1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMy1zZWN0aW9uIC5yZWNvbW1lbmRfZm9ybSBmb3JtIC5mb3JtLWN1c3RvbSB7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjdiN2I3O1xufVxuLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMy1zZWN0aW9uIC5yZWNvbW1lbmRfZm9ybSBmb3JtIC5idG4tYWRkIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmY2YjgxO1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbjogMHB4IDI3cHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0zLXNlY3Rpb24gLnJlY29tbWVuZF9mb3JtIC5idG4tY3VzdG9tLmZvcm0tYnRuIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogIzczNjVhODtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0zLXNlY3Rpb24gLnJlY29tbWVuZF9mb3JtIC5idG4tYWRkLnNraXAtZGV0YWlscyB7XG4gIGNsZWFyOiBib3RoO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogNnB4IDBweDtcbiAgY29sb3I6ICM0MDQwNDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZm9ybS1iYWNrZ3JvdW5kIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIge1xuICAgIHBhZGRpbmc6IDUwcHggMjVweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5tYXItYm90LTI1IHtcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLnVzZXItYm94IGltZyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC5ib3gtdGV4dCBoMiB7XG4gICAgaGVpZ2h0OiA5NHB4O1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC5ib3gtdGV4dCBwIHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAuZmlyc3QtYm94IC50ZXh0LWJveCBwIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAudXNlci1ib3gtY29ubmVjdCB7XG4gICAgaGVpZ2h0OiA4NHB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5mYXEtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMHB4IDI1cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmZhcS1zZWN0aW9uIC5oZWFkaW5nLXRleHQtMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IHtcbiAgICBwYWRkaW5nOiA1MHB4IDI1cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tNCAud29yay1zdGVwcyB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi00IC53b3JrLXN0ZXBzIC53b3JrLWJveC0xIGgyIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tNCAud29yay1zdGVwcyAud29yay1ib3gtMSBwIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tNCAud29yay1zdGVwcyAud29yay1ib3gtMSAuY2lyY2xlIHtcbiAgICB3aWR0aDogMTRweDtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmNmI4MTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDE1cHggMXB4IDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMHB4IDI1cHggNTBweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIge1xuICAgIHBhZGRpbmc6IDUwcHggMjVweCAxMnB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1hci1yaWdodCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEQ0RDREM7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiB7XG4gICAgbWFyZ2luOiA2MHB4IDBweCAzOHB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmZpcnN0LWJveCB7XG4gICAgd2lkdGg6IDMzNnB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmJveC10ZXh0IGgyIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiAudXNlci1ib3gtY29ubmVjdCBpbWcge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5mYXEtc2VjdGlvbiAuZmFxLXF1ZXN0aW9ucyAuZmFxLTEgaDMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZmFxLXNlY3Rpb24gLmZhcS1xdWVzdGlvbnMgLmZhcS0xIHAge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tNCAud29yay1zdGVwcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tNCAud29yay1zdGVwcyAud29yay1ib3gtMSB7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxM3B4IDBweCAjYzBjZGNlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tNCAud29yay1zdGVwcyAud29yay1ib3gtMSBoMiB7XG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tNCAud29yay1zdGVwcyAuc2FtZS1ib3gge1xuICAgIG1hcmdpbi1ib3R0b206IDIycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5tYWluLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDRweCAyNXB4IDUwcHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogNDVweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIC5kb3R0ZWQtaW1nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiB7XG4gICAgcGFkZGluZzogNXB4IDBweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAuYnRuLXN0ZXBzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI3cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQge1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnRhYi1zZWN0aW9uIC5Db2xvdW1uLWdhcCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMS1zZWN0aW9uIC5zdGVwLWZvcm0taW5mb3JtYXRpb24gLndfNjAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTEtc2VjdGlvbiAuZnJlZS1wb2ludHMge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gLmNoZWNrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIHRvcDogLTJweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuY2hlY2sgaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gLmNoZWNrbWFyayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogM3B4O1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjYWJhYWFhO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuY2hlY2sgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLmRldmVsb3Blcl9yZWdpc3RhcnRpb24gLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQgLnN0ZXAtMi1zZWN0aW9uIC5jaGVja21hcms6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwi4pyTXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgY29sb3I6ICMzMmQwMzk7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDJweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gLmNoZWNrIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gLmN1c3QtYnRuIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmODIwNGY7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjgyMDRmO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuY3VzdC1idG46aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogI2Y4MjA0ZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjZjgyMDRmO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiAycztcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0yLXNlY3Rpb24gc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTItc2VjdGlvbiAuYnRuLWN1c3RvbSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNzM2NWE4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTMtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0zLXNlY3Rpb24gaDIge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTMtc2VjdGlvbiBwIHtcbiAgICBjb2xvcjogIzk3OTY5NjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAxNXB4IDAgMjBweCAwO1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTMtc2VjdGlvbiAucmVjb21tZW5kX2Zvcm0gZm9ybSAuZm9ybS1jdXN0b20ge1xuICAgIGhlaWdodDogMzZweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I3YjdiNztcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0zLXNlY3Rpb24gLnJlY29tbWVuZF9mb3JtIGZvcm0gLmJ0bi1hZGQge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjZmY2YjgxO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW46IDBweCAyN3B4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9uIC5tYWluLXJlZ2lzdHJhdGlvbi1wYXJ0IC5zdGVwLTMtc2VjdGlvbiAucmVjb21tZW5kX2Zvcm0gLmJ0bi1jdXN0b20uZm9ybS1idG4ge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZDogIzczNjVhODtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuZGV2ZWxvcGVyX3JlZ2lzdGFydGlvbiAubWFpbi1yZWdpc3RyYXRpb24tcGFydCAuc3RlcC0zLXNlY3Rpb24gLnJlY29tbWVuZF9mb3JtIC5idG4tYWRkLnNraXAtZGV0YWlscyB7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbjogNnB4IDBweDtcbiAgICBjb2xvcjogIzQwNDA0MDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5tYWluLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDRweCA3cHggNzdweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIC5oZWFkaW5nLXRleHQgaDQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAubWFpbi1zZWN0aW9uIC5pbmZvcm1hdGlvbi1mb3JtIC5mb3JtLWJhY2tncm91bmQgLmZvcm0tY3VzdG9tIHtcbiAgICBoZWlnaHQ6IDQycHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLm1haW4tc2VjdGlvbiAuaW5mb3JtYXRpb24tZm9ybSAuZm9ybS1iYWNrZ3JvdW5kIC5idG4tY3VzdG9tIHtcbiAgICBoZWlnaHQ6IDU4cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiB7XG4gICAgcGFkZGluZzogMjFweCA3cHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuaGVhZGluZy10ZXh0LTIgaDIge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIHtcbiAgICBtYXJnaW46IDBweCAwcHg7XG4gIH1cbiAgLmhvbWUtbWFpbi1jb250YWluZXIgLnNlY3Rpb24tMiAuam9pbi1zZWN0aW9ucyAubWFpbi1ib3gtc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAzMHB4IDBweDtcbiAgfVxuICAuaG9tZS1tYWluLWNvbnRhaW5lciAuc2VjdGlvbi0yIC5qb2luLXNlY3Rpb25zIC5tYWluLWJveC1zZWN0aW9uIC5maXJzdC1ib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTIgLmpvaW4tc2VjdGlvbnMgLm1haW4tYm94LXNlY3Rpb24gLmJveC10ZXh0IGgyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5mYXEtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMjVweCAxNHB4O1xuICB9XG4gIC5ob21lLW1haW4tY29udGFpbmVyIC5zZWN0aW9uLTQge1xuICAgIHBhZGRpbmc6IDI1cHggN3B4O1xuICB9XG59XG4uYXBsbGllZCB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNTBweDtcbiAgYm9yZGVyOiAjNTk1OTU5IHNvbGlkIDFweDtcbn1cblxuLmhhIHtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxNXB4O1xuICBjb2xvcjogIzU5NTk1OTtcbiAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcbn1cblxuLnBhIHtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNTk1OTU5O1xuICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iLCJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250L0xhdG8tTGlnaHQudHRmKTtcclxuICB9XHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xyXG4gICAgc3JjOiB1cmwoL2Fzc2V0cy9mb250L0xhdG8tUmVndWxhci50dGYpO1xyXG4gIH1cclxuICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwe1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogTGF0by1MaWdodDtcclxuICB9XHJcbiAgLmhvbWUtbWFpbi1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNzBweDtcclxuICAgIC5tYWluLXNlY3Rpb257XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzI2MzM7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDIzcHggNTVweCA1NnB4IDEwNHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIC5pbmZvcm1hdGlvbi1mb3JtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTI4cHg7XHJcbiAgICAgICAgLmRvdHRlZC1pbWd7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMTZweDtcclxuICAgICAgICAgIGJvdHRvbTogLTYycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLWJhY2tncm91bmQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMzc1cHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggNnB4IDlweCAtMXB4ICM0YTRhNGE7XHJcbiAgICAgICAgICAuZm9ybS1ncm91cHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgc2VsZWN0e1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvZG93bi1hcnJvdy5wbmcpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTVweCBib3R0b20gN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiM3MDcwNzA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHAtdGV4dHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogTGF0by1MaWdodDtcclxuICAgICAgICAgICAgICBjb2xvcjojNzA3MDcwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybS1jdXN0b217XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjdiN2I3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucGFkLTJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRpbmctdGV4dCB7XHJcbiAgICAgICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAubWFpbl90aXRsZXtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MiU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHtcclxuICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgbWFyZ2luOjVweCAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDR7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLWN1c3RvbXtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgLy8gaGVpZ2h0OiA2N3B4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzczNjVhODtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlY3Rpb24tMntcclxuICAgICAgcGFkZGluZzo1MHB4IDExNXB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAuaGVhZGluZy10ZXh0LTJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLm1hci1ib3QtMjV7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxuICAgICAgfVxyXG4gICAgICAuam9pbi1zZWN0aW9ucyB7XHJcbiAgICAgICAgLm1haW4tYm94LXNlY3Rpb257XHJcbiAgICAgICAgICAuZmlyc3QtYm94e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggOXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC51c2VyLWJveHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHQtYm94e1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG4gICAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiM5NDk0OTQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzdhNzc3NztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3gtdGV4dHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICBjb2xvcjogIzU5NTk1OTtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA4M3B4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgY29sb3I6Izk3OTY5NjtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC51c2VyLWJveC1jb25uZWN0IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZmFxLXNlY3Rpb257XHJcbiAgICAgIC5oZWFkaW5nLXRleHQtMntcclxuICBcclxuICAgICAgICBoMntcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzdweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcGFkZGluZzo1MHB4IDExNXB4O1xyXG4gICAgICAuZmFxLXF1ZXN0aW9uc3tcclxuICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICAgICAgLmZhcS0xe1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xyXG4gICAgICAgICAgICBjb2xvcjojNzI3MjcyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzI3MjcyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbi00e1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIC5oZWFkaW5nLXRleHQtMntcclxuICAgICAgICBoMntcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzdweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHBhZGRpbmc6NTBweCAxMTVweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgLndvcmstc3RlcHN7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIC5zYW1lLWJveHtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXg6IDEgMSAwO1xyXG4gICAgICAgICAgLndvcmstYm94LTF7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MjhweCAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0zcHggMnB4IDEzcHggMHB4ICNjMGNkY2U7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICAgIC8vIGNvbG9yOiNmZjZiODE7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhye1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjZiODE7XHJcbiAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDBweCA5MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pY29uLXRhYntcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNpcmNsZXtcclxuICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmNmI4MTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICBtYXJnaW46IDE1cHggNHB4IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRldmVsb3Blcl9yZWdpc3RhcnRpb257XHJcbiAgICAgIHBhZGRpbmc6IDIycHggMHB4O1xyXG4gICAgICAuYnRuLXN0ZXBze1xyXG4gICAgICAgIHdpZHRoOiAyMTdweDtcclxuICAgICAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzczNjVhODtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXI6IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIH1cclxuICAgICAgLm1haW4tcmVnaXN0cmF0aW9uLXBhcnQge1xyXG4gICAgICAgIC5oZWFkaW5nLTExIHtcclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgY29sb3I6ICM1OTU5NTk7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzU5NTk1OTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAudGFiLXNlY3Rpb24ge1xyXG4gICAgICAgICAgLnN0ZXBzLWRldGFpbHMge1xyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogN3B4IDIwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTk1OTU5O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBtYXJnaW46IDQwcHggMHB4O1xyXG4gICAgICAgICAgLkNvbG91bW4tZ2FwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2E2YTZhNjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdGVwLTEtc2VjdGlvbiB7XHJcbiAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RlcC1mb3JtLWluZm9ybWF0aW9uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMzRweCAwcHg7XHJcbiAgICAgICAgICAgIC53XzYwe1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNTk1OTU5O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jdXN0b20taWRlYSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAxMnB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYTZhNmE2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZnJlZS1wb2ludHMge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mcmVle1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAzNXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpc3R7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAzNXB4O1xyXG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzMyZDAzOTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0ZXAtMi1zZWN0aW9ue1xyXG4gICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwe1xyXG4gICAgICAgICAgICBjb2xvcjogIzk3OTY5NjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMCAyMHB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoNHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLWN1c3RvbXtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiN2I3Yjc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2hlY2sge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgICB0b3A6IC0ycHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaGVja21hcmsge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNhYmFhYWE7XHJcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2hlY2sgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwi4pyTXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICMzMmQwMzk7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNoZWNrIHtcclxuICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgICAgICAgICAvLyAgIGxlZnQ6IDVweDtcclxuICAgICAgICAgICAgLy8gICB0b3A6IDFweDtcclxuICAgICAgICAgICAgLy8gICB3aWR0aDogNXB4O1xyXG4gICAgICAgICAgICAvLyAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgLy8gICBib3JkZXI6IHNvbGlkO1xyXG4gICAgICAgICAgICAvLyAgIGJvcmRlci1jb2xvcjogI2FiYWFhYTtcclxuICAgICAgICAgICAgLy8gICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xyXG4gICAgICAgICAgICAvLyAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAvLyAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgIC8vICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY3VzdC1idG4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjgyMDRmO1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjgyMDRmO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjgyMDRmO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmODIwNGY7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IDJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1jdXN0b217XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3MzY1YTg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RlcC0zLXNlY3Rpb257XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwe1xyXG4gICAgICAgICAgICBjb2xvcjogIzk3OTY5NjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMCAyMHB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVjb21tZW5kX2Zvcm17XHJcbiAgICAgICAgICAgIGZvcm17XHJcbiAgICAgICAgICAgICAgLmZvcm0tY3VzdG9te1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I3YjdiNztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmJ0bi1hZGR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY2YjgxO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMjdweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bi1jdXN0b20uZm9ybS1idG57XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzM2NWE4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogTGF0by1MaWdodDtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4tYWRkLnNraXAtZGV0YWlsc3tcclxuICAgICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA2cHggMHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNDA0MDQwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5ob21lLW1haW4tY29udGFpbmVye1xyXG4gICAgICAuZm9ybS1iYWNrZ3JvdW5kIHtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5zZWN0aW9uLTIge1xyXG4gICAgICAgIHBhZGRpbmc6NTBweCAyNXB4O1xyXG4gICAgICAgIC5tYXItYm90LTI1e1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmpvaW4tc2VjdGlvbnMge1xyXG4gICAgICAgICAgLm1haW4tYm94LXNlY3Rpb24ge1xyXG4gICAgICAgICAgICAudXNlci1ib3h7XHJcbiAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ODAlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm94LXRleHR7XHJcbiAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5NHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZpcnN0LWJveHtcclxuICAgICAgICAgICAgICAudGV4dC1ib3h7XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlci1ib3gtY29ubmVjdHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6ODRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZmFxLXNlY3Rpb257XHJcbiAgICAgICAgLmhlYWRpbmctdGV4dC0ye1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFkZGluZzowcHggMjVweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuc2VjdGlvbi00IHtcclxuICAgICAgICBwYWRkaW5nOjUwcHggMjVweDtcclxuICAgICAgICAud29yay1zdGVwcyB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgICAgLndvcmstYm94LTF7XHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jaXJjbGUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmY2YjgxO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMTVweCAxcHggMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuaG9tZS1tYWluLWNvbnRhaW5lcntcclxuICAgICAgLm1haW4tc2VjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDI1cHggNTBweDtcclxuICAgICAgICAuaW5mb3JtYXRpb24tZm9ybSB7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnNlY3Rpb24tMntcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDI1cHggMTJweDtcclxuICAgICAgICAuam9pbi1zZWN0aW9uc3tcclxuICAgICAgICAgIC5tYXItcmlnaHR7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENEQztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tYWluLWJveC1zZWN0aW9ue1xyXG4gICAgICAgICAgICAuZmlyc3QtYm94e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzMzZweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXJnaW46IDYwcHggMHB4IDM4cHg7XHJcbiAgICAgICAgICAgIC5ib3gtdGV4dCB7XHJcbiAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlci1ib3gtY29ubmVjdHtcclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5mYXEtc2VjdGlvbntcclxuICAgICAgICAuZmFxLXF1ZXN0aW9uc3tcclxuICAgICAgICAgIC5mYXEtMXtcclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5zZWN0aW9uLTR7XHJcbiAgICAgICAgLndvcmstc3RlcHMge1xyXG4gICAgICAgICAgLndvcmstYm94LTF7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMTNweCAwcHggI2MwY2RjZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAuc2FtZS1ib3gge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmhvbWUtbWFpbi1jb250YWluZXJ7XHJcbiAgICAgIC5tYWluLXNlY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCAyNXB4IDUwcHg7XHJcbiAgICAgICAgLmluZm9ybWF0aW9uLWZvcm0ge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNDVweDtcclxuICAgICAgICAgIC5kb3R0ZWQtaW1ne1xyXG4gICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgICAuaG9tZS1tYWluLWNvbnRhaW5lcntcclxuICAgIC5kZXZlbG9wZXJfcmVnaXN0YXJ0aW9ue1xyXG4gICAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG4gICAgICAuYnRuLXN0ZXBze1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjdweDtcclxuICAgICAgfVxyXG4gICAgICAubWFpbi1yZWdpc3RyYXRpb24tcGFydCB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAudGFiLXNlY3Rpb24ge1xyXG4gICAgICAgICAgLkNvbG91bW4tZ2FwIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0ZXAtMS1zZWN0aW9uIHtcclxuICAgICAgICAgIC5zdGVwLWZvcm0taW5mb3JtYXRpb24ge1xyXG4gICAgICAgICAgICAud182MHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZyZWUtcG9pbnRzIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RlcC0yLXNlY3Rpb257XHJcbiAgICAgICAgICAuY2hlY2sge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgICB0b3A6IC0ycHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaGVja21hcmsge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNhYmFhYWE7XHJcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2hlY2sgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwi4pyTXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICMzMmQwMzk7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNoZWNrIHtcclxuICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgICAgICAgICAvLyAgIGxlZnQ6IDVweDtcclxuICAgICAgICAgICAgLy8gICB0b3A6IDFweDtcclxuICAgICAgICAgICAgLy8gICB3aWR0aDogNXB4O1xyXG4gICAgICAgICAgICAvLyAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgLy8gICBib3JkZXI6IHNvbGlkO1xyXG4gICAgICAgICAgICAvLyAgIGJvcmRlci1jb2xvcjogI2FiYWFhYTtcclxuICAgICAgICAgICAgLy8gICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xyXG4gICAgICAgICAgICAvLyAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAvLyAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgIC8vICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY3VzdC1idG4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjgyMDRmO1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjgyMDRmO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjgyMDRmO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmODIwNGY7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IDJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1jdXN0b217XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3MzY1YTg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RlcC0zLXNlY3Rpb257XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwe1xyXG4gICAgICAgICAgICBjb2xvcjogIzk3OTY5NjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMCAyMHB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVjb21tZW5kX2Zvcm17XHJcbiAgICAgICAgICAgIGZvcm17XHJcbiAgICAgICAgICAgICAgLmZvcm0tY3VzdG9te1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I3YjdiNztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmJ0bi1hZGR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY2YjgxO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMjdweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bi1jdXN0b20uZm9ybS1idG57XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzM2NWE4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogTGF0by1MaWdodDtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4tYWRkLnNraXAtZGV0YWlsc3tcclxuICAgICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA2cHggMHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNDA0MDQwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5ob21lLW1haW4tY29udGFpbmVye1xyXG4gICAgICAubWFpbi1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiA0cHggN3B4IDc3cHg7XHJcbiAgICAgICAgLmluZm9ybWF0aW9uLWZvcm17XHJcbiAgICAgICAgICAuaGVhZGluZy10ZXh0e1xyXG4gICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1iYWNrZ3JvdW5ke1xyXG4gICAgICAgICAgICAuZm9ybS1jdXN0b20ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuLWN1c3RvbSB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1OHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5zZWN0aW9uLTIge1xyXG4gICAgICAgIHBhZGRpbmc6IDIxcHggN3B4O1xyXG4gICAgICAgIC5oZWFkaW5nLXRleHQtMntcclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuam9pbi1zZWN0aW9ucyB7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCAwcHg7XHJcbiAgICAgICAgICAubWFpbi1ib3gtc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIC5maXJzdC1ib3h7XHJcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXJnaW46IDMwcHggMHB4O1xyXG4gICAgICAgICAgICAuYm94LXRleHR7XHJcbiAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjJweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmZhcS1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiAyNXB4IDE0cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnNlY3Rpb24tNCB7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCA3cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmFwbGxpZWR7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBib3JkZXI6ICM1OTU5NTkgc29saWQgMXB4O1xyXG4gIH1cclxuICAgIC5oYXtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgICBjb2xvcjogIzU5NTk1OTtcclxuICAgICAgZm9udC1mYW1pbHk6IExhdG8tUmVndWxhcjtcclxuICAgIH1cclxuICAgIC5wYXtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiAjNTk1OTU5O1xyXG4gICAgICBmb250LWZhbWlseTogTGF0by1SZWd1bGFyO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-module',
          templateUrl: './main-module.component.html',
          styleUrls: ['./main-module.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _Services_registration_registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-module/main-module.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/main-module/main-module.module.ts ***!
    \***************************************************/

  /*! exports provided: MainModuleModule */

  /***/
  function srcAppMainModuleMainModuleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainModuleModule", function () {
      return MainModuleModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _main_module_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main-module.routing */
    "./src/app/main-module/main-module.routing.ts");
    /* harmony import */


    var _main_module_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main-module.component */
    "./src/app/main-module/main-module.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var MainModuleModule = function MainModuleModule() {
      _classCallCheck(this, MainModuleModule);
    };

    MainModuleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MainModuleModule
    });
    MainModuleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MainModuleModule_Factory(t) {
        return new (t || MainModuleModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _main_module_routing__WEBPACK_IMPORTED_MODULE_3__["MainModuleRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModuleModule, {
        declarations: [_main_module_component__WEBPACK_IMPORTED_MODULE_4__["MainModuleComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _main_module_routing__WEBPACK_IMPORTED_MODULE_3__["MainModuleRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModuleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_main_module_component__WEBPACK_IMPORTED_MODULE_4__["MainModuleComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _main_module_routing__WEBPACK_IMPORTED_MODULE_3__["MainModuleRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main-module/main-module.routing.ts":
  /*!****************************************************!*\
    !*** ./src/app/main-module/main-module.routing.ts ***!
    \****************************************************/

  /*! exports provided: MainModuleRoutingModule */

  /***/
  function srcAppMainModuleMainModuleRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainModuleRoutingModule", function () {
      return MainModuleRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _main_module_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main-module.component */
    "./src/app/main-module/main-module.component.ts");

    var routes = [{
      path: '',
      component: _main_module_component__WEBPACK_IMPORTED_MODULE_2__["MainModuleComponent"]
    }];

    var MainModuleRoutingModule = function MainModuleRoutingModule() {
      _classCallCheck(this, MainModuleRoutingModule);
    };

    MainModuleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MainModuleRoutingModule
    });
    MainModuleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MainModuleRoutingModule_Factory(t) {
        return new (t || MainModuleRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModuleRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModuleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/common/footer/footer.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/views/common/footer/footer.component.ts ***!
    \*********************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppViewsCommonFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 7,
      vars: 0,
      consts: [[1, "footer-class"], [1, "footer-logo"], ["href", "#"], ["src", "assets/images/logo-new.png"], [1, "copy-text"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xA9 Copyright 2020, Offorms. All rights reserved.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".footer-class[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 50px 115px;\n  color: #fff;\n  background-color: #232633;\n}\n.footer-class[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 175px;\n  margin-bottom: 20px;\n}\n@media screen and (max-width: 767px) {\n  .footer-class[_ngcontent-%COMP%] {\n    padding: 50px 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29tbW9uL2Zvb3Rlci9EOlxcV2ViIERldmVsb3BtZW50XFxBbGdvRm9jdXNcXGZyb250RW5kL3NyY1xcYXBwXFx2aWV3c1xcY29tbW9uXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvY29tbW9uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBRUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNBRjtBRENFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFQTtFQUNFO0lBQ0Usa0JBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvY29tbW9uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWNsYXNze1xuICB3aWR0aDogMTAwJTtcbiAgLy8gbWFyZ2luLXRvcDogMTcwcHg7XG4gIHBhZGRpbmc6IDUwcHggMTE1cHg7XG4gIGNvbG9yOiNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzI2MzM7XG4gIC5mb290ZXItbG9nbyBpbWd7XG4gICAgd2lkdGg6IDE3NXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb290ZXItY2xhc3N7XG4gICAgcGFkZGluZzogNTBweCAxNXB4O1xuICB9XG59XG4iLCIuZm9vdGVyLWNsYXNzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDUwcHggMTE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyNjMzO1xufVxuLmZvb3Rlci1jbGFzcyAuZm9vdGVyLWxvZ28gaW1nIHtcbiAgd2lkdGg6IDE3NXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZm9vdGVyLWNsYXNzIHtcbiAgICBwYWRkaW5nOiA1MHB4IDE1cHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/common/header/header.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/views/common/header/header.component.ts ***!
    \*********************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppViewsCommonHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(router) {
        _classCallCheck(this, HeaderComponent);

        this.router = router;
        this.loggedIn = false;
      }

      _createClass(HeaderComponent, [{
        key: "home",
        value: function home() {
          this.router.navigate(['']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 4,
      vars: 0,
      consts: [[1, "header-class"], [1, "header-logo"], [3, "click"], ["src", "assets/images/logo-new.png"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_2_listener() {
            return ctx.home();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@font-face {\n  font-family: Lato-Light;\n  src: url(/assets/font/Lato-Light.ttf);\n}\n@font-face {\n  font-family: Lato-Regular;\n  src: url(/assets/font/Lato-Regular.ttf);\n}\n.header-class[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #232633;\n  padding: 16px 25px;\n  font-family: Lato-Light;\n}\n.header-class[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 175px;\n  cursor: pointer;\n}\n.header-class[_ngcontent-%COMP%]   .logout-div[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: -40px;\n  color: white;\n  font-weight: bold;\n  padding: 12px;\n  font-size: 18px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29tbW9uL2hlYWRlci9EOlxcV2ViIERldmVsb3BtZW50XFxBbGdvRm9jdXNcXGZyb250RW5kL3NyY1xcYXBwXFx2aWV3c1xcY29tbW9uXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvY29tbW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLHFDQUFBO0FDQ0Y7QURDQTtFQUNFLHlCQUFBO0VBQ0EsdUNBQUE7QUNDRjtBREVBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0FGO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnQvTGF0by1MaWdodC50dGYpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udC9MYXRvLVJlZ3VsYXIudHRmKTtcbn1cblxuLmhlYWRlci1jbGFzc3tcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzI2MzM7XG4gIHBhZGRpbmc6IDE2cHggMjVweDtcbiAgZm9udC1mYW1pbHk6IExhdG8tTGlnaHQ7XG4gIC5oZWFkZXItbG9nbyBpbWd7XG4gICAgd2lkdGg6IDE3NXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAubG9nb3V0LWRpdntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogLTQwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLUxpZ2h0O1xuICBzcmM6IHVybCgvYXNzZXRzL2ZvbnQvTGF0by1MaWdodC50dGYpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvLVJlZ3VsYXI7XG4gIHNyYzogdXJsKC9hc3NldHMvZm9udC9MYXRvLVJlZ3VsYXIudHRmKTtcbn1cbi5oZWFkZXItY2xhc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjYzMztcbiAgcGFkZGluZzogMTZweCAyNXB4O1xuICBmb250LWZhbWlseTogTGF0by1MaWdodDtcbn1cbi5oZWFkZXItY2xhc3MgLmhlYWRlci1sb2dvIGltZyB7XG4gIHdpZHRoOiAxNzVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhlYWRlci1jbGFzcyAubG9nb3V0LWRpdiB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogLTQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Web Development\AlgoFocus\frontEnd\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map