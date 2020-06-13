(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/home/welcome/welcome.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/home/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"] },
                { path: 'pma', loadChildren: () => __webpack_require__.e(/*! import() | pma-app-pma-app-module */ "pma-pma-app-module").then(__webpack_require__.bind(null, /*! ../../pma-app/pma-app.module */ "./src/pma-app/pma-app.module.ts")).then(m => m.ProjectManagementAppModule) }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"],
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"] },
                        { path: 'pma', loadChildren: () => __webpack_require__.e(/*! import() | pma-app-pma-app-module */ "pma-pma-app-module").then(__webpack_require__.bind(null, /*! ../../pma-app/pma-app.module */ "./src/pma-app/pma-app.module.ts")).then(m => m.ProjectManagementAppModule) }
                    ])
                ],
                exports: [
                    _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/welcome/welcome.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/welcome/welcome.component.ts ***!
  \***************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return [""]; };
const _c1 = function () { return ["pma"]; };
class WelcomeComponent {
    constructor(router) {
        this.router = router;
        this.greetings = [
            'Hi, there!',
            'My Name is Ahmet',
            'I am a full stack developer',
            'My passion is my power',
            'Angular (expert)',
            'JavaScript (Very Good)',
            'TypeScript (Excellent)',
            'NodeJS (It is Huge)',
            'Java (Certified)',
            'OOP & Generic Programming Genius',
            'MongoDB, Mongoose, MySql, MariaDB, any DBs :)',
            'Click the button below to see my cute application.',
            'Hi, there!',
        ];
        this.greeting = this.greetings[0];
    }
    ngOnInit() {
        setInterval(() => {
            this.greeting = this.greetings[this.greetings.indexOf(this.greeting) + 1];
        }, 2000);
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 20, vars: 5, consts: [[1, "navbar", "navbar-expand-sm", "bg-dark", "navbar-dark"], [1, "navbar-brand", 3, "routerLink"], [1, "body", "bg-dark"], [1, "cover-container", "d-flex", "h-100", "p-3", "mx-auto", "flex-column"], ["role", "main", 1, "inner", "cover"], [1, "cover-heading"], [1, "lead"], ["href", "https://app.pluralsight.com/profile/ahmet-emrebas", "target", "_blank", 1, "btn", "btn-lg", "btn-dark"], ["type", "button", "id", "menuButton", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-outline-success", "text-light", 3, "routerLink"], ["href", "https://www.linkedin.com/in/ahmet-emrebas/"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Project Management Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "main", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "I developed an application for you!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Would you like to learn more about me?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Go to app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Application is built by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " @Ahmet Emrebas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.greeting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%] {\n  transition: all ease-in-out 400ms;\n}\n\n\n\na[_ngcontent-%COMP%] {\n  color: orange;\n  letter-spacing: 3px;\n}\n\na[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover {\n  color: orangered;\n}\n\n\n\n.btn-secondary[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%]:hover, .btn-secondary[_ngcontent-%COMP%]:focus {\n  color: #333;\n  text-shadow: none;\n  \n  background-color: #fff;\n  border: 0.05rem solid #fff;\n}\n\n.body[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);\n  height: 100vh;\n}\n\n.inner-cover[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n\n.cover-container[_ngcontent-%COMP%] {\n  max-width: 42em;\n}\n\n\n\n.masthead[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.masthead-brand[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.nav-masthead[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 0.25rem 0;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.5);\n  background-color: transparent;\n  border-bottom: 0.25rem solid transparent;\n}\n\n.nav-masthead[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .nav-masthead[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus {\n  border-bottom-color: rgba(255, 255, 255, 0.25);\n}\n\n.nav-masthead[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]    + .nav-link[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.nav-masthead[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #fff;\n  border-bottom-color: #fff;\n}\n\n@media (min-width: 48em) {\n  .masthead-brand[_ngcontent-%COMP%] {\n    float: left;\n  }\n\n  .nav-masthead[_ngcontent-%COMP%] {\n    float: right;\n  }\n}\n\n\n\n.cover[_ngcontent-%COMP%] {\n  padding: 0 1.5rem;\n  text-align: center;\n}\n\n.cover[_ngcontent-%COMP%]   .btn-lg[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  font-weight: 700;\n}\n\nfooter[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\n.footer[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS93ZWxjb21lL0M6XFxVc2Vyc1xcYWhtZXRcXHNvdXJjZVxccmVwb3NcXGZ1bGwtc3RhY2stcG9ydGZvbGlvXFxwcmV2aW91cy13b3Jrc1xcd2ViLWFwcC1wbWEvc3JjXFxhcHBcXGhvbWVcXHdlbGNvbWVcXHdlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7QUNDSjs7QURFQSxVQUFBOztBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7O0VBRUksZ0JBQUE7QUNFSjs7QURDQSwwQkFBQTs7QUFDQTs7O0VBR0ksV0FBQTtFQUNBLGlCQUFBO0VBQW1CLHFDQUFBO0VBQ25CLHNCQUFBO0VBQ0EsMEJBQUE7QUNHSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxnREFBQTtFQUNBLGFBQUE7QUNHSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ0dKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBREFBOztFQUFBOztBQUdBO0VBQ0ksbUJBQUE7QUNHSjs7QURBQTtFQUNJLGdCQUFBO0FDR0o7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLHdDQUFBO0FDR0o7O0FEQUE7O0VBRUksOENBQUE7QUNHSjs7QURBQTtFQUNJLGlCQUFBO0FDR0o7O0FEQUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUNHSjs7QURBQTtFQUNJO0lBQ0ksV0FBQTtFQ0dOOztFRERFO0lBQ0ksWUFBQTtFQ0lOO0FBQ0Y7O0FEREE7O0VBQUE7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEREE7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0FDSUo7O0FEREE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7QUNLSjs7QURGQTtFQUNJLGtCQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDQwMG1zO1xyXG59XHJcblxyXG4vKiBMaW5rcyAqL1xyXG5hIHtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG59XHJcbmE6Zm9jdXMsXHJcbmE6aG92ZXIge1xyXG4gICAgY29sb3I6IG9yYW5nZXJlZDtcclxufVxyXG5cclxuLyogQ3VzdG9tIGRlZmF1bHQgYnV0dG9uICovXHJcbi5idG4tc2Vjb25kYXJ5LFxyXG4uYnRuLXNlY29uZGFyeTpob3ZlcixcclxuLmJ0bi1zZWNvbmRhcnk6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTsgLyogUHJldmVudCBpbmhlcml0YW5jZSBmcm9tIGAuYm9keWAgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDAuMDVyZW0gc29saWQgI2ZmZjtcclxufVxyXG5cclxuLmJvZHkge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwLjA1cmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uaW5uZXItY292ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb3Zlci1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA0MmVtO1xyXG59XHJcblxyXG4vKlxyXG4gKiBIZWFkZXJcclxuICovXHJcbi5tYXN0aGVhZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4ubWFzdGhlYWQtYnJhbmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLm5hdi1tYXN0aGVhZCAubmF2LWxpbmsge1xyXG4gICAgcGFkZGluZzogMC4yNXJlbSAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5uYXYtbWFzdGhlYWQgLm5hdi1saW5rOmhvdmVyLFxyXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluazpmb2N1cyB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG59XHJcblxyXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluayArIC5uYXYtbGluayB7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuLm5hdi1tYXN0aGVhZCAuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcclxuICAgIC5tYXN0aGVhZC1icmFuZCB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAubmF2LW1hc3RoZWFkIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbiAqIENvdmVyXHJcbiAqL1xyXG4uY292ZXIge1xyXG4gICAgcGFkZGluZzogMCAxLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNvdmVyIC5idG4tbGcge1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9vdGVyICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbiIsIioge1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgNDAwbXM7XG59XG5cbi8qIExpbmtzICovXG5hIHtcbiAgY29sb3I6IG9yYW5nZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbn1cblxuYTpmb2N1cyxcbmE6aG92ZXIge1xuICBjb2xvcjogb3JhbmdlcmVkO1xufVxuXG4vKiBDdXN0b20gZGVmYXVsdCBidXR0b24gKi9cbi5idG4tc2Vjb25kYXJ5LFxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIsXG4uYnRuLXNlY29uZGFyeTpmb2N1cyB7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgLyogUHJldmVudCBpbmhlcml0YW5jZSBmcm9tIGAuYm9keWAgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAwLjA1cmVtIHNvbGlkICNmZmY7XG59XG5cbi5ib2R5IHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAwIDAuMDVyZW0gMC4xcmVtIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmlubmVyLWNvdmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvdmVyLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNDJlbTtcbn1cblxuLypcbiAqIEhlYWRlclxuICovXG4ubWFzdGhlYWQge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4ubWFzdGhlYWQtYnJhbmQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluayB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDAuMjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5uYXYtbWFzdGhlYWQgLm5hdi1saW5rOmhvdmVyLFxuLm5hdi1tYXN0aGVhZCAubmF2LWxpbms6Zm9jdXMge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xufVxuXG4ubmF2LW1hc3RoZWFkIC5uYXYtbGluayArIC5uYXYtbGluayB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ubmF2LW1hc3RoZWFkIC5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcbiAgLm1hc3RoZWFkLWJyYW5kIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gIC5uYXYtbWFzdGhlYWQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxufVxuLypcbiAqIENvdmVyXG4gKi9cbi5jb3ZlciB7XG4gIHBhZGRpbmc6IDAgMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb3ZlciAuYnRuLWxnIHtcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvb3RlciAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map