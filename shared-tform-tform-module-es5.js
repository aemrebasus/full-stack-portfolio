function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-tform-tform-module"], {
  /***/
  "./src/pma-app/consts.ts":
  /*!*******************************!*\
    !*** ./src/pma-app/consts.ts ***!
    \*******************************/

  /*! exports provided: BASE_URL */

  /***/
  function srcPmaAppConstsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BASE_URL", function () {
      return BASE_URL;
    });

    var BASE_URL = '/pma';
    /***/
  },

  /***/
  "./src/pma-app/services/common/router.control.ts":
  /*!*******************************************************!*\
    !*** ./src/pma-app/services/common/router.control.ts ***!
    \*******************************************************/

  /*! exports provided: RouterControl */

  /***/
  function srcPmaAppServicesCommonRouterControlTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouterControl", function () {
      return RouterControl;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pma_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @pma/consts */
    "./src/pma-app/consts.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RouterControl =
    /*#__PURE__*/
    function () {
      function RouterControl(router, route) {
        _classCallCheck(this, RouterControl);

        this.router = router;
        this.route = route;
      }

      _createClass(RouterControl, [{
        key: "navigateHome",
        value: function navigateHome() {
          this.router.navigate([_pma_consts__WEBPACK_IMPORTED_MODULE_1__["BASE_URL"]]);
        }
      }]);

      return RouterControl;
    }();

    RouterControl.ɵfac = function RouterControl_Factory(t) {
      return new (t || RouterControl)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    RouterControl.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RouterControl,
      factory: RouterControl.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouterControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/pma-app/shared/tform/reactive-form/reactive-form.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/pma-app/shared/tform/reactive-form/reactive-form.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ReactiveFormComponent */

  /***/
  function srcPmaAppSharedTformReactiveFormReactiveFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReactiveFormComponent", function () {
      return ReactiveFormComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_tconfirmation_confirm_confirm_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/tconfirmation/confirm/confirm.interfaces */
    "./src/pma-app/shared/tconfirmation/confirm/confirm.interfaces.ts");
    /* harmony import */


    var _pma_services_common_router_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @pma-services/common/router.control */
    "./src/pma-app/services/common/router.control.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tmodal_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../tmodal/modal-wrapper/modal-wrapper.component */
    "./src/pma-app/shared/tmodal/modal-wrapper/modal-wrapper.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ReactiveFormComponent_div_5_div_8_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var input_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, input_r59.name), " is required. ");
      }
    }

    function ReactiveFormComponent_div_5_div_8_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var input_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, input_r59.name), " does not meet the minimum-length requirement. ");
      }
    }

    function ReactiveFormComponent_div_5_div_8_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var input_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r63.value(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, input_r59.name)), " is not allowed . ");
      }
    }

    function ReactiveFormComponent_div_5_div_8_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var input_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r64.value(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, input_r59.name)), " is not a number . ");
      }
    }

    function ReactiveFormComponent_div_5_div_8_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var input_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r65.value(input_r59.name), " is not an email . ");
      }
    }

    function ReactiveFormComponent_div_5_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReactiveFormComponent_div_5_div_8_div_1_Template, 3, 3, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ReactiveFormComponent_div_5_div_8_div_2_Template, 3, 3, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ReactiveFormComponent_div_5_div_8_div_3_Template, 3, 3, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ReactiveFormComponent_div_5_div_8_div_4_Template, 3, 3, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ReactiveFormComponent_div_5_div_8_div_5_Template, 2, 1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var input_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r60.errors(input_r59.name).required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r60.errors(input_r59.name).minLength);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r60.errors(input_r59.name).forbiddenName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r60.errors(input_r59.name).NaN);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r60.errors(input_r59.name).email);
      }
    }

    function ReactiveFormComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ReactiveFormComponent_div_5_div_8_Template, 6, 5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var input_r59 = ctx.$implicit;

        var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", input_r59.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 11, input_r59.label));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r56.invalid(input_r59.name))("is-valid", ctx_r56.valid(input_r59.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", input_r59.name)("id", input_r59.name)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 13, input_r59.placeholder));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](input_r59.helperText);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r56.invalid(input_r59.name));
      }
    }

    function ReactiveFormComponent_button_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Reset form ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ReactiveFormComponent_button_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-target", ctx_r58.submitType());

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx_r58.submitLabel()), " ");
      }
    }

    var ReactiveFormComponent =
    /*#__PURE__*/
    function () {
      function ReactiveFormComponent(routerControl, route) {
        _classCallCheck(this, ReactiveFormComponent);

        this.routerControl = routerControl;
        this.route = route;
        /**
         * Contains confirmation messages
         */

        this.confirmationMetas = _shared_tconfirmation_confirm_confirm_interfaces__WEBPACK_IMPORTED_MODULE_2__["ConfirmationMetas"].all();
      }

      _createClass(ReactiveFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.data.subscribe(function (result) {
            _this.config = result.resolved;
          });
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
          this.config.inputs.forEach(function (input) {
            var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', input.validators);

            _this.form.addControl(input.name, control);

            _this.disableIdField(input.name);
          });

          for (var _i = 0, _Object$keys = Object.keys(this.config.data); _i < _Object$keys.length; _i++) {
            var e = _Object$keys[_i];

            if (e !== 'meta') {
              this.getControl(e).setValue(this.config.data[e]);
            }
          }
        }
      }, {
        key: "disableIdField",
        value: function disableIdField(name) {
          if (name.toLowerCase() === 'id') {
            this.getControl(name).disable();
          }
        }
        /**
         * template helpers
         */

      }, {
        key: "submitLabel",
        value: function submitLabel() {
          return this.config.meta.submitLabel;
        } // Helper for comfirmatoin | converts the submit label to the selector for Confirmation modal so that when use clicks the submit button 
        // corresboding Modal shows up.

      }, {
        key: "submitType",
        value: function submitType() {
          return "#".concat(this.submitLabel().split(' ')[0].toLowerCase());
        }
      }, {
        key: "isFormValid",
        value: function isFormValid() {
          return this.form.valid && this.form.dirty;
        }
      }, {
        key: "isDirty",
        value: function isDirty() {
          return this.form.dirty;
        }
      }, {
        key: "bgColor",
        value: function bgColor() {
          return this.config.meta.bgColor;
        }
      }, {
        key: "title",
        value: function title() {
          return this.config.meta.title || this.config.meta.name;
        }
      }, {
        key: "inputs",
        value: function inputs() {
          return this.config.inputs;
        } // Form controller Access

      }, {
        key: "getControl",
        value: function getControl(controlName) {
          return this.form.controls[controlName];
        }
      }, {
        key: "value",
        value: function value(controlName) {
          return this.getControl(controlName).value;
        }
      }, {
        key: "setControlValue",
        value: function setControlValue(controlName, value) {
          try {
            this.getControl(controlName).setValue(value);
          } catch (err) {
            throw new Error("Could not find the field with the name ".concat(controlName));
          }
        }
      }, {
        key: "getControlValue",
        value: function getControlValue(controlname) {
          return this.getControl(controlname).value;
        }
      }, {
        key: "valid",
        value: function valid(name) {
          var c = this.getControl(name);
          return c.valid && c.touched && c.dirty;
        }
      }, {
        key: "invalid",
        value: function invalid(name) {
          var c = this.getControl(name);
          return c.invalid && c.touched && c.dirty;
        }
        /**
         * return the validation result of the control
         * @param controlName contol name
         */

      }, {
        key: "errors",
        value: function errors(controlName) {
          return this.getControl(controlName).errors;
        } // Form Controller Acess
        // confirmation

      }, {
        key: "confirm",
        value: function confirm(event) {
          if (event.status) {
            switch (event.type) {
              case 'back':
                this.onBack(event);
                break;

              case 'reset':
                this.onReset(event);
                break;

              case 'cancel':
                this.onBack(event);
                break;

              case 'close':
                this.onBack(event);
                break;

              case 'save':
                this.onSubmit(event);
                break;

              case 'delete':
                this.onDelete(event);
                break;

              case 'update':
                this.onSubmit(event);
                break;
            }
          }
        } // Event handlers

      }, {
        key: "onSubmit",
        value: function onSubmit(event) {
          try {
            this.config.events.submit({
              type: 'submit',
              paylaod: this.form.value
            });
            console.log(this.form.value);
          } catch (err) {// do nothing
          } finally {
            this.backHome();
          }
        }
      }, {
        key: "onDelete",
        value: function onDelete(event) {
          try {
            this.config.events.submit({
              type: 'delete',
              paylaod: this.form.value
            });
          } catch (err) {// do nothing...
          } finally {
            this.backHome();
          }
        }
      }, {
        key: "onBack",
        value: function onBack(event) {
          try {
            this.config.events.submit({
              type: 'back',
              paylaod: this.form.value
            });
          } catch (err) {// do nothing...
          } finally {
            this.backHome();
          }
        }
      }, {
        key: "onReset",
        value: function onReset(event) {
          var _this2 = this;

          try {
            this.config.events.submit({
              type: 'reset',
              paylaod: this.form.value
            });
          } catch (err) {// do nothing.
          } finally {
            Object.entries(this.form.controls).forEach(function (e) {
              _this2.form.controls[e[0]].reset('', {
                invalid: null,
                valid: null,
                dirty: null,
                touched: null
              });
            });
          }
        }
      }, {
        key: "backHome",
        value: function backHome() {
          this.routerControl.navigateHome();
        }
      }]);

      return ReactiveFormComponent;
    }();

    ReactiveFormComponent.ɵfac = function ReactiveFormComponent_Factory(t) {
      return new (t || ReactiveFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_pma_services_common_router_control__WEBPACK_IMPORTED_MODULE_3__["RouterControl"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    ReactiveFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ReactiveFormComponent,
      selectors: [["app-reactive-form"]],
      inputs: {
        config: "config",
        form: "form"
      },
      decls: 11,
      vars: 9,
      consts: [[3, "bgColor", "title", "confirmEvent"], [1, "card-body", "bg-info"], [3, "formGroup"], ["class", "form-group", 4, "ngFor", "ngForOf"], ["data-toggle", "modal", "data-target", "#back", 1, "btn", "btn-dark", "mr-2"], ["aria-hidden", "true", 1, "fa", "fa-arrow-left"], ["class", "btn btn-dark mr-2", "type", "button", "data-toggle", "modal", "data-target", "#reset", 4, "ngIf"], ["class", "btn btn-warning mr-2", "type", "button", "data-toggle", "modal", 4, "ngIf"], [1, "form-group"], [3, "for"], ["type", "text", "autocomplete", "off", 1, "form-control", 3, "formControlName", "id", "placeholder"], [1, "form-text", "text-muted"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"], [4, "ngIf"], ["type", "button", "data-toggle", "modal", "data-target", "#reset", 1, "btn", "btn-dark", "mr-2"], ["aria-hidden", "true", 1, "fa", "fa-trash"], ["type", "button", "data-toggle", "modal", 1, "btn", "btn-warning", "mr-2"]],
      template: function ReactiveFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-modal-wrapper", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("confirmEvent", function ReactiveFormComponent_Template_app_modal_wrapper_confirmEvent_0_listener($event) {
            return ctx.confirm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ReactiveFormComponent_div_5_Template, 9, 15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Back ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ReactiveFormComponent_button_9_Template, 3, 0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ReactiveFormComponent_button_10_Template, 3, 4, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bgColor", ctx.bgColor())("title", ctx.title());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 7, ctx.form.value), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.inputs());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDirty());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isFormValid());
        }
      },
      directives: [_tmodal_modal_wrapper_modal_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["ModalWrapperComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]],
      styles: ["input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:active, select[_ngcontent-%COMP%]:active {\n  border: thin solid gray;\n  color: #272727;\n}\n\ninput[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n  color: #272727;\n  box-shadow: none;\n}\n\ninput[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 3px black;\n}\n\ninput[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:active {\n  box-shadow: 3px 3px 0px rgba(71, 71, 71, 0.4), -3px 3px 0px rgba(71, 71, 71, 0.4), 3px -3px 0px rgba(71, 71, 71, 0.4), -3px -3px 0px rgba(71, 71, 71, 0.4);\n}\n\nselect[_ngcontent-%COMP%], option[_ngcontent-%COMP%], option[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nselect[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n\ni[_ngcontent-%COMP%] {\n  color: #d8d8d8;\n}\n\n.me-col-12[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.me-col-10[_ngcontent-%COMP%] {\n  width: 83.6%;\n}\n\n.me-col-9[_ngcontent-%COMP%] {\n  width: 74.97%;\n}\n\n.me-col-6[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.me-col-5[_ngcontent-%COMP%] {\n  width: 42.65%;\n}\n\n.me-col-3[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.me-col-2[_ngcontent-%COMP%] {\n  width: 16.66%;\n}\n\n.me-col-1[_ngcontent-%COMP%] {\n  width: 8.33%;\n}\n\n.list-group[_ngcontent-%COMP%], .list-item[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%], .dropdown-menu[_ngcontent-%COMP%], .nav-item[_ngcontent-%COMP%], .card[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n*[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-shadow: 0px 0px 1px black;\n  border-radius: 10px;\n  transition: all ease-in-out 400ms;\n}\n\n*[_ngcontent-%COMP%]::-moz-selection {\n  background-color: orangered;\n  color: white;\n  font-size: 15px;\n  text-shadow: 0px 0px 1px black;\n}\n\n*[_ngcontent-%COMP%]::selection {\n  background-color: orangered;\n  color: white;\n  font-size: 15px;\n  text-shadow: 0px 0px 1px black;\n}\n\n.flex-row-stretch[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: stretch;\n  border: 5px solid #252525;\n  padding: 1px;\n}\n\n[class^=me-col][_ngcontent-%COMP%] {\n  border: 3px solid #353232;\n}\n\nselect[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%], .dropdown-menu[_ngcontent-%COMP%], .nav-item[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%], label[_ngcontent-%COMP%], .card-header[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #8d8d8d;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 3px black;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: #3f4042;\n  color: white;\n}\n\n[class^=me-col][_ngcontent-%COMP%] {\n  box-shadow: inset 0px 0px 0px black;\n  padding: 10px;\n}\n\n.modal-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 99999;\n}\n\n@media (min-width: 1500px) and (max-width: 3000px) {\n  .notification[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n}\n\n@media (min-width: 0px) and (max-width: 1300px) {\n  [class^=me-col][_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbWEtYXBwL3NoYXJlZC90Zm9ybS9yZWFjdGl2ZS1mb3JtL0M6XFxVc2Vyc1xcYWhtZXRcXHNvdXJjZVxccmVwb3NcXGZ1bGwtc3RhY2stcG9ydGZvbGlvXFxwcmV2aW91cy13b3Jrc1xcd2ViLWFwcC1wbWEvc3JjXFxwbWEtYXBwXFxzaGFyZWRcXHN0eWxlXFxzdHlsZS5pbnB1dC5zY3NzIiwic3JjL3BtYS1hcHAvc2hhcmVkL3Rmb3JtL3JlYWN0aXZlLWZvcm0vQzpcXFVzZXJzXFxhaG1ldFxcc291cmNlXFxyZXBvc1xcZnVsbC1zdGFjay1wb3J0Zm9saW9cXHByZXZpb3VzLXdvcmtzXFx3ZWItYXBwLXBtYS9zcmNcXHBtYS1hcHBcXHNoYXJlZFxcc3R5bGVcXHN0eWxlLnZhcnMuc2NzcyIsInNyYy9wbWEtYXBwL3NoYXJlZC90Zm9ybS9yZWFjdGl2ZS1mb3JtL3JlYWN0aXZlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvcG1hLWFwcC9zaGFyZWQvdGZvcm0vcmVhY3RpdmUtZm9ybS9DOlxcVXNlcnNcXGFobWV0XFxzb3VyY2VcXHJlcG9zXFxmdWxsLXN0YWNrLXBvcnRmb2xpb1xccHJldmlvdXMtd29ya3NcXHdlYi1hcHAtcG1hL3NyY1xccG1hLWFwcFxcc2hhcmVkXFxzdHlsZVxcc3R5bGUuZ3JpZC5zY3NzIiwic3JjL3BtYS1hcHAvc2hhcmVkL3Rmb3JtL3JlYWN0aXZlLWZvcm0vQzpcXFVzZXJzXFxhaG1ldFxcc291cmNlXFxyZXBvc1xcZnVsbC1zdGFjay1wb3J0Zm9saW9cXHByZXZpb3VzLXdvcmtzXFx3ZWItYXBwLXBtYS9zcmNcXHBtYS1hcHBcXHNoYXJlZFxcc3R5bGVcXHN0eWxlLmJvcmRlci5zY3NzIiwic3JjL3BtYS1hcHAvc2hhcmVkL3Rmb3JtL3JlYWN0aXZlLWZvcm0vQzpcXFVzZXJzXFxhaG1ldFxcc291cmNlXFxyZXBvc1xcZnVsbC1zdGFjay1wb3J0Zm9saW9cXHByZXZpb3VzLXdvcmtzXFx3ZWItYXBwLXBtYS9zcmNcXHBtYS1hcHBcXHNoYXJlZFxcc3R5bGVcXHN0eWxlLmNvcmUuc2NzcyIsInNyYy9wbWEtYXBwL3NoYXJlZC90Zm9ybS9yZWFjdGl2ZS1mb3JtL0M6XFxVc2Vyc1xcYWhtZXRcXHNvdXJjZVxccmVwb3NcXGZ1bGwtc3RhY2stcG9ydGZvbGlvXFxwcmV2aW91cy13b3Jrc1xcd2ViLWFwcC1wbWEvc3JjXFxwbWEtYXBwXFxzaGFyZWRcXHN0eWxlXFxzdHlsZS5icmVha3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7RUFLSSx1QkFBQTtFQUNBLGNDdUJVO0FDdEJkOztBRkVBO0VBQ0kseUJDa0JhO0VEakJiLGNDa0JVO0VEakJWLGdCQUFBO0FFQ0o7O0FGRUE7O0VBRUksNkJBQUE7QUVDSjs7QUZJQTs7RUFFSSwwSkFBQTtBRURKOztBRklBOzs7RUFHSSxlQUFBO0FFREo7O0FGSUE7RUFDSSxnQkFBQTtBRURKOztBRklBO0VBQ0ksY0NiUztBQ1liOztBQ3BDQTtFQUNJLFdBQUE7QUR1Q0o7O0FDcENBO0VBQ0ksWUFBQTtBRHVDSjs7QUNyQ0E7RUFDSSxhQUFBO0FEd0NKOztBQ3JDQTtFQUNJLFVBQUE7QUR3Q0o7O0FDckNBO0VBQ0ksYUFBQTtBRHdDSjs7QUNyQ0E7RUFDSSxVQUFBO0FEd0NKOztBQ3JDQTtFQUNJLGFBQUE7QUR3Q0o7O0FDckNBO0VBQ0ksWUFBQTtBRHdDSjs7QUVyRUE7Ozs7Ozs7Ozs7O0VBV0ksbUJITmlCO0FDOEVyQjs7QUduRkE7RUFDSSxlSmdDVTtFSS9CViw4QkFBQTtFQUNBLG1CSkVpQjtFSURqQixpQ0FBQTtBSHNGSjs7QUduRkE7RUFDSSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUhzRko7O0FHMUZBO0VBQ0ksMkJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FIc0ZKOztBR25GQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBSHNGSjs7QUduRkE7RUFDSSx5QkFBQTtBSHNGSjs7QUduRkE7Ozs7Ozs7OztFQVNJLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBSHNGSjs7QUduRkE7RUFDSSx5QkpMd0I7QUMyRjVCOztBR25GQTtFQUNJLDZCQUFBO0FIc0ZKOztBR25GQTtFQUNJLHlCSlZtQjtFSVduQixZSlZnQjtBQ2dHcEI7O0FHbkZBO0VBQ0ksbUNBQUE7RUFDQSxhQUFBO0FIc0ZKOztBR25GQTtFQUNJLGVBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0FIcUZKOztBSXZKQTtFQUNJO0lBQ0ksWUFBQTtFSjBKTjtBQUNGOztBSXZKQTtFQUNJO0lBQ0ksV0FBQTtFSnlKTjtBQUNGIiwiZmlsZSI6InNyYy9wbWEtYXBwL3NoYXJlZC90Zm9ybS9yZWFjdGl2ZS1mb3JtL3JlYWN0aXZlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCxcclxuc2VsZWN0LFxyXG5pbnB1dDpmb2N1cyxcclxuaW5wdXQ6YWN0aXZlLFxyXG5zZWxlY3Q6YWN0aXZlIHtcclxuICAgIGJvcmRlcjogdGhpbiBzb2xpZCAkaW5wdXQtYm9yZGVyLWNvbG9yO1xyXG4gICAgY29sb3I6ICRpbnB1dC1jb2xvcjtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJnLWNvbG9yO1xyXG4gICAgY29sb3I6ICRpbnB1dC1jb2xvcjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0LFxyXG5idXR0b24ge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAkYm94LXNoYWRvdy1zaXplIGJsYWNrO1xyXG59XHJcblxyXG5cclxuJGExMjMxMjM6IHJnYmEocmdiKDcxLCA3MSwgNzEpLCAwLjQpO1xyXG5pbnB1dDpmb2N1cyxcclxuaW5wdXQ6YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMHB4ICRhMTIzMTIzLCAtM3B4IDNweCAwcHggJGExMjMxMjMsIDNweCAtM3B4IDBweCAkYTEyMzEyMywgLTNweCAtM3B4IDBweCAkYTEyMzEyMztcclxufVxyXG5cclxuc2VsZWN0LFxyXG5vcHRpb24sXHJcbm9wdGlvbiAqIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbmkge1xyXG4gICAgY29sb3I6ICRpY29uLWNvbG9yO1xyXG59XHJcbiIsIiRtYXgtaGVpZ2h0LWZpcnN0LWxheWVyOiA1MHZoO1xyXG4kbWF4LWhlaWdodC1zZWNvbmQtbGF5ZXI6IDUwdmg7XHJcbiRtYXgtaGVpZ2h0LXRoaXJkLWxheWVyOiA1MHZoO1xyXG5cclxuLy8gQm9yZGVyIFJhZGlvdXMgR2xvYmFsXHJcbiRib3JkZXItcmFkaXVzLXNpemU6IDEwcHg7XHJcblxyXG4vLyBUZXh0IFNoYWRvdyBHbG9iYWxcclxuJHRleHQtc2hhZG93LXNpemU6IDFweDtcclxuLy8gQm94IFNoYWRvdyBnbG9iYWxcclxuJGJveC1zaGFkb3ctc2l6ZTogM3B4O1xyXG5cclxuJGJveC1zaGFkb3ctaW5zZXQtc2l6ZTogMHB4O1xyXG5cclxuLy8gUm9vdCBDb250YWluZXJcclxuJHJvb3QtY29udGFpbmVyLWJvcmRlci1zaXplOiA1cHg7XHJcbiRyb290LWNvbnRhaW5lci1ib3JkZXItY29sb3I6IHJnYigzNywgMzcsIDM3KTtcclxuXHJcbi8vIFN1YiBjb250YWluZXIgR2xvYmFsIHNpemVcclxuJGNvbnRhaW5lci1ib3JkZXItc2l6ZTogM3B4O1xyXG4vLyBTdWIgY29udGFpbmVyIEdsb2JhbCBDb2xvclxyXG4kY29udGFpbmVyLWJvcmRlci1jb2xvcjogcmdiKDUzLCA1MCwgNTApO1xyXG5cclxuLy8gYm9keVxyXG4kYm9keS1iZy1jb2xvcjogcmdiKDE1NiwgMTU2LCAxNTYpO1xyXG4kaWNvbi1jb2xvcjogcmdiKDIxNiwgMjE2LCAyMTYpO1xyXG5cclxuLy8gSW5wdXQgY29sb3JzXHJcbiRpbnB1dC1iZy1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4kaW5wdXQtY29sb3I6IHJnYigzOSwgMzksIDM5KTtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogZ3JheTtcclxuXHJcbi8vIEZvbnQgc2l6ZVxyXG4kZy1mb250LXNpemU6IDEycHg7XHJcblxyXG4vLyBOYXZiYXJcclxuJG5hdmJhci1idXR0b24taG92ZXItY29sb3I6IHJnYigxNDEsIDE0MSwgMTQxKTtcclxuXHJcbi8vIEZvcm0gQ29sb3JzXHJcbiRmb3JtLWhlYWRlci1iZy1jb2xvcjogcmdiKDYzLCA2NCwgNjYpO1xyXG4kZm9ybS1oZWFkZXItY29sb3I6IHdoaXRlO1xyXG4iLCJpbnB1dCxcbnNlbGVjdCxcbmlucHV0OmZvY3VzLFxuaW5wdXQ6YWN0aXZlLFxuc2VsZWN0OmFjdGl2ZSB7XG4gIGJvcmRlcjogdGhpbiBzb2xpZCBncmF5O1xuICBjb2xvcjogIzI3MjcyNztcbn1cblxuaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICBjb2xvcjogIzI3MjcyNztcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaW5wdXQsXG5idXR0b24ge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCBibGFjaztcbn1cblxuaW5wdXQ6Zm9jdXMsXG5pbnB1dDphY3RpdmUge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDBweCByZ2JhKDcxLCA3MSwgNzEsIDAuNCksIC0zcHggM3B4IDBweCByZ2JhKDcxLCA3MSwgNzEsIDAuNCksIDNweCAtM3B4IDBweCByZ2JhKDcxLCA3MSwgNzEsIDAuNCksIC0zcHggLTNweCAwcHggcmdiYSg3MSwgNzEsIDcxLCAwLjQpO1xufVxuXG5zZWxlY3QsXG5vcHRpb24sXG5vcHRpb24gKiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuc2VsZWN0IHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuaSB7XG4gIGNvbG9yOiAjZDhkOGQ4O1xufVxuXG4ubWUtY29sLTEyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tZS1jb2wtMTAge1xuICB3aWR0aDogODMuNiU7XG59XG5cbi5tZS1jb2wtOSB7XG4gIHdpZHRoOiA3NC45NyU7XG59XG5cbi5tZS1jb2wtNiB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5tZS1jb2wtNSB7XG4gIHdpZHRoOiA0Mi42NSU7XG59XG5cbi5tZS1jb2wtMyB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5tZS1jb2wtMiB7XG4gIHdpZHRoOiAxNi42NiU7XG59XG5cbi5tZS1jb2wtMSB7XG4gIHdpZHRoOiA4LjMzJTtcbn1cblxuLmxpc3QtZ3JvdXAsXG4ubGlzdC1pdGVtLFxuaW5wdXQsXG5zZWxlY3QsXG4uYnRuLFxuLmRyb3Bkb3duLFxuLmRyb3Bkb3duLWl0ZW0sXG4uZHJvcGRvd24tbWVudSxcbi5uYXYtaXRlbSxcbi5jYXJkLFxuLmNhcmQgKiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbioge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDFweCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDQwMG1zO1xufVxuXG4qOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggYmxhY2s7XG59XG5cbi5mbGV4LXJvdy1zdHJldGNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIGJvcmRlcjogNXB4IHNvbGlkICMyNTI1MjU7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxuW2NsYXNzXj1tZS1jb2xdIHtcbiAgYm9yZGVyOiAzcHggc29saWQgIzM1MzIzMjtcbn1cblxuc2VsZWN0LFxuLmJ0bixcbi5kcm9wZG93bixcbi5kcm9wZG93bi1pdGVtLFxuLmRyb3Bkb3duLW1lbnUsXG4ubmF2LWl0ZW0sXG4ubmF2YmFyLFxubGFiZWwsXG4uY2FyZC1oZWFkZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZDhkOGQ7XG59XG5cbi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggYmxhY2s7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjQwNDI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuW2NsYXNzXj1tZS1jb2xdIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5tb2RhbC13cmFwcGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIHotaW5kZXg6IDk5OTk5O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTUwMHB4KSBhbmQgKG1heC13aWR0aDogMzAwMHB4KSB7XG4gIC5ub3RpZmljYXRpb24ge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICBbY2xhc3NePW1lLWNvbF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59IiwiXHJcbi5tZS1jb2wtMTIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tZS1jb2wtMTAge1xyXG4gICAgd2lkdGg6IDgzLjYlO1xyXG59XHJcbi5tZS1jb2wtOSB7XHJcbiAgICB3aWR0aDogNzQuOTclO1xyXG59XHJcblxyXG4ubWUtY29sLTYge1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLm1lLWNvbC01IHtcclxuICAgIHdpZHRoOiA0Mi42NSU7XHJcbn1cclxuXHJcbi5tZS1jb2wtMyB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4ubWUtY29sLTIge1xyXG4gICAgd2lkdGg6IDE2LjY2JTtcclxufVxyXG5cclxuLm1lLWNvbC0xIHtcclxuICAgIHdpZHRoOiA4LjMzJTtcclxufVxyXG4iLCIubGlzdC1ncm91cCxcclxuLmxpc3QtaXRlbSxcclxuaW5wdXQsXHJcbnNlbGVjdCxcclxuLmJ0bixcclxuLmRyb3Bkb3duLFxyXG4uZHJvcGRvd24taXRlbSxcclxuLmRyb3Bkb3duLW1lbnUsXHJcbi5uYXYtaXRlbSxcclxuLmNhcmQsXHJcbi5jYXJkICoge1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc2l6ZTtcclxufVxyXG5cclxuIiwiKiB7XHJcbiAgICBmb250LXNpemU6ICRnLWZvbnQtc2l6ZTtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4ICR0ZXh0LXNoYWRvdy1zaXplIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc2l6ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCA0MDBtcztcclxufVxyXG5cclxuKjo6c2VsZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDFweCBibGFjaztcclxufVxyXG5cclxuLmZsZXgtcm93LXN0cmV0Y2gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgICBib3JkZXI6ICRyb290LWNvbnRhaW5lci1ib3JkZXItc2l6ZSBzb2xpZCAkcm9vdC1jb250YWluZXItYm9yZGVyLWNvbG9yO1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG59XHJcblxyXG5bY2xhc3NePVwibWUtY29sXCJdIHtcclxuICAgIGJvcmRlcjogJGNvbnRhaW5lci1ib3JkZXItc2l6ZSBzb2xpZCAkY29udGFpbmVyLWJvcmRlci1jb2xvcjtcclxufVxyXG5cclxuc2VsZWN0LFxyXG4uYnRuLFxyXG4uZHJvcGRvd24sXHJcbi5kcm9wZG93bi1pdGVtLFxyXG4uZHJvcGRvd24tbWVudSxcclxuLm5hdi1pdGVtLFxyXG4ubmF2YmFyLFxyXG5sYWJlbCxcclxuLmNhcmQtaGVhZGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2YmFyLWJ1dHRvbi1ob3Zlci1jb2xvcjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAkYm94LXNoYWRvdy1zaXplIGJsYWNrO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGZvcm0taGVhZGVyLWJnLWNvbG9yO1xyXG4gICAgY29sb3I6ICRmb3JtLWhlYWRlci1jb2xvcjtcclxufVxyXG5cclxuW2NsYXNzXj1cIm1lLWNvbFwiXSB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4ICRib3gtc2hhZG93LWluc2V0LXNpemUgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubW9kYWwtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKGJsYWNrLCAwLjgpO1xyXG4gICAgei1pbmRleDogOTk5OTk7XHJcbn1cclxuIiwiQG1lZGlhIChtaW4td2lkdGg6IDE1MDBweCkgYW5kIChtYXgtd2lkdGg6IDMwMDBweCkge1xyXG4gICAgLm5vdGlmaWNhdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDowcHgpIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAgIFtjbGFzc149XCJtZS1jb2xcIl0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReactiveFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-reactive-form',
          templateUrl: './reactive-form.component.html',
          styleUrls: ['./reactive-form.component.scss']
        }]
      }], function () {
        return [{
          type: _pma_services_common_router_control__WEBPACK_IMPORTED_MODULE_3__["RouterControl"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/pma-app/shared/tform/tform.module.ts":
  /*!**************************************************!*\
    !*** ./src/pma-app/shared/tform/tform.module.ts ***!
    \**************************************************/

  /*! exports provided: TformModule */

  /***/
  function srcPmaAppSharedTformTformModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TformModule", function () {
      return TformModule;
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


    var _reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./reactive-form/reactive-form.component */
    "./src/pma-app/shared/tform/reactive-form/reactive-form.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tmodal_tmodal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../tmodal/tmodal.module */
    "./src/pma-app/shared/tmodal/tmodal.module.ts");
    /* harmony import */


    var _wait_wait_for_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./wait/wait-for.pipe */
    "./src/pma-app/shared/tform/wait/wait-for.pipe.ts");
    /* harmony import */


    var _shared_tconfirmation_tconfirmation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @shared/tconfirmation/tconfirmation.module */
    "./src/pma-app/shared/tconfirmation/tconfirmation.module.ts");

    var TformModule = function TformModule() {
      _classCallCheck(this, TformModule);
    };

    TformModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TformModule
    });
    TformModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TformModule_Factory(t) {
        return new (t || TformModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_tconfirmation_tconfirmation_module__WEBPACK_IMPORTED_MODULE_7__["TconfirmationModule"], _tmodal_tmodal_module__WEBPACK_IMPORTED_MODULE_5__["TmodalModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TformModule, {
        declarations: [_reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormComponent"], _wait_wait_for_pipe__WEBPACK_IMPORTED_MODULE_6__["WaitForPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_tconfirmation_tconfirmation_module__WEBPACK_IMPORTED_MODULE_7__["TconfirmationModule"], _tmodal_tmodal_module__WEBPACK_IMPORTED_MODULE_5__["TmodalModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TformModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormComponent"], _wait_wait_for_pipe__WEBPACK_IMPORTED_MODULE_6__["WaitForPipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_tconfirmation_tconfirmation_module__WEBPACK_IMPORTED_MODULE_7__["TconfirmationModule"], _tmodal_tmodal_module__WEBPACK_IMPORTED_MODULE_5__["TmodalModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
            path: '',
            component: _reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormComponent"]
          }])]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/pma-app/shared/tform/wait/wait-for.pipe.ts":
  /*!********************************************************!*\
    !*** ./src/pma-app/shared/tform/wait/wait-for.pipe.ts ***!
    \********************************************************/

  /*! exports provided: WaitForPipe */

  /***/
  function srcPmaAppSharedTformWaitWaitForPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WaitForPipe", function () {
      return WaitForPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WaitForPipe =
    /*#__PURE__*/
    function () {
      function WaitForPipe() {
        _classCallCheck(this, WaitForPipe);
      }

      _createClass(WaitForPipe, [{
        key: "transform",
        value: function transform(value, wait) {
          return new Promise(function (res, rej) {
            return [setTimeout(function () {
              res(value);
            }, wait)];
          });
        }
      }]);

      return WaitForPipe;
    }();

    WaitForPipe.ɵfac = function WaitForPipe_Factory(t) {
      return new (t || WaitForPipe)();
    };

    WaitForPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "waitFor",
      type: WaitForPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WaitForPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'waitFor'
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=shared-tform-tform-module-es5.js.map