(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-switch-user-switch-module"],{

/***/ "./src/app/user-switch/user-switch.module.ts":
/*!***************************************************!*\
  !*** ./src/app/user-switch/user-switch.module.ts ***!
  \***************************************************/
/*! exports provided: UserSwitchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSwitchPageModule", function() { return UserSwitchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_switch_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-switch.page */ "./src/app/user-switch/user-switch.page.ts");







var routes = [
    {
        path: '',
        component: _user_switch_page__WEBPACK_IMPORTED_MODULE_6__["UserSwitchPage"]
    }
];
var UserSwitchPageModule = /** @class */ (function () {
    function UserSwitchPageModule() {
    }
    UserSwitchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_switch_page__WEBPACK_IMPORTED_MODULE_6__["UserSwitchPage"]]
        })
    ], UserSwitchPageModule);
    return UserSwitchPageModule;
}());



/***/ }),

/***/ "./src/app/user-switch/user-switch.page.html":
/*!***************************************************!*\
  !*** ./src/app/user-switch/user-switch.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title text-center>\r\n      Portal KPMB\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"dark-grey\">\r\n  <div class=\"ion-padding\">\r\n  \t<ion-grid>\r\n\t    <ion-row>\r\n\t    \t<ion-col size=\"6\">\r\n\t    \t\t<ion-card class=\"card-border\" color=\"primary\" text-center routerLink=\"/staff-home\" routerDirection=\"forward\">\r\n\t    \t\t\t<ion-card-header class=\"card-header\">\r\n\t\t\t\t\t    <ion-card-title class=\"fsr-3\">\r\n\t\t\t\t\t    \t<img class=\"mb-5\" src=\"../assets/img/teacher.png\"/>\t\t\t\t\t    \t\r\n\t\t\t\t\t    </ion-card-title>\r\n\t\t\t\t\t  </ion-card-header>\r\n\t\t    \t\t<ion-card-content class=\"pt-0 inline-content\">\r\n\t\t\t\t   \t\tKakitangan\r\n\t\t\t\t  </ion-card-content>\r\n\t\t\t\t</ion-card>\r\n\t    \t</ion-col>\r\n\t    \t<ion-col size=\"6\">\r\n\t    \t\t<ion-card class=\"card-border\" color=\"success\" text-center routerLink=\"/student-home\" routerDirection=\"forward\">\r\n\t    \t\t\t<ion-card-header class=\"card-header\">\r\n\t\t\t\t\t    <ion-card-title class=\"fsr-3\">\r\n\t\t\t\t\t    \t<img class=\"mb-5\" src=\"../assets/img/student.png\"/>\t\t\t\t\t    \t\r\n\t\t\t\t\t    </ion-card-title>\r\n\t\t\t\t\t  </ion-card-header>\r\n\t\t    \t\t<ion-card-content class=\"pt-0 inline-content\">\r\n\t\t\t\t    Pelajar\r\n\t\t\t\t  </ion-card-content>\r\n\t\t\t\t</ion-card>\r\n\t    \t</ion-col>\r\n\t    </ion-row>\r\n\t    <ion-row text-center>\r\n\t\t\t<ion-button (click)=\"presentAlertConfirm()\" class=\"exit-button\" color=\"danger\">Exit</ion-button>\r\n\t    </ion-row>\r\n  \t</ion-grid>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/user-switch/user-switch.page.scss":
/*!***************************************************!*\
  !*** ./src/app/user-switch/user-switch.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-border {\n  margin: 5px;\n  height: 100%;\n  padding-top: 10px; }\n\n.exit-button {\n  margin: auto;\n  margin-top: 20px; }\n\n.card-header {\n  padding-bottom: 0; }\n\n.fsr-3 {\n  font-size: 3rem; }\n\n.pt-0 {\n  padding-top: 0; }\n\n.inline-content {\n  display: inline-block; }\n\nion-content {\n  --ion-background-color: #92d0f3; }\n\nion-toolbar {\n  --ion-background-color: #92d0f3; }\n\n.mb-5 {\n  margin-bottom: 0.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1zd2l0Y2gvRDpcXFN5YW1pbVxcc2VtXzVcXGtwbSBwb3J0YWwgdjJcXHByb2plY3RcXGtwbS1wb3J0YWwvc3JjXFxhcHBcXHVzZXItc3dpdGNoXFx1c2VyLXN3aXRjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUdsQjtFQUVDLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHakI7RUFDQyxpQkFBaUIsRUFBQTs7QUFHbEI7RUFDQyxlQUFlLEVBQUE7O0FBR2hCO0VBQ0MsY0FBYyxFQUFBOztBQUdmO0VBQ0MscUJBQXFCLEVBQUE7O0FBR3RCO0VBQ0MsK0JBQXVCLEVBQUE7O0FBR3hCO0VBQ0MsK0JBQXVCLEVBQUE7O0FBR3hCO0VBQ0MscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyLXN3aXRjaC91c2VyLXN3aXRjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ib3JkZXIge1xyXG5cdG1hcmdpbjogNXB4O1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmV4aXQtYnV0dG9uXHJcbntcclxuXHRtYXJnaW46IGF1dG87XHJcblx0bWFyZ2luLXRvcDogMjBweDtcdFxyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG5cdHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG4uZnNyLTN7XHJcblx0Zm9udC1zaXplOiAzcmVtO1xyXG59XHJcblxyXG4ucHQtMHtcclxuXHRwYWRkaW5nLXRvcDogMDtcclxufVxyXG5cclxuLmlubGluZS1jb250ZW50e1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcblx0LS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzkyZDBmMztcclxufVxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcblx0LS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzkyZDBmMztcclxufVxyXG5cclxuLm1iLTV7XHJcblx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user-switch/user-switch.page.ts":
/*!*************************************************!*\
  !*** ./src/app/user-switch/user-switch.page.ts ***!
  \*************************************************/
/*! exports provided: UserSwitchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSwitchPage", function() { return UserSwitchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var UserSwitchPage = /** @class */ (function () {
    function UserSwitchPage(navCtrl, platform, alertCtrl) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
    }
    UserSwitchPage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirmation',
                            message: 'Do you really want to exit this app',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Cancel');
                                    }
                                }, {
                                    text: 'Confirm',
                                    handler: function () {
                                        // tslint:disable-next-line: no-string-literal
                                        navigator['app'].exitApp();
                                        console.log('Confirm');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserSwitchPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.subscription = this.platform.backButton.subscribe(function (_) {
            _this.presentAlertConfirm();
        });
    };
    UserSwitchPage.prototype.ionViewWillLeave = function () {
        this.subscription.unsubscribe();
    };
    UserSwitchPage.prototype.ngOnInit = function () {
    };
    UserSwitchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-switch',
            template: __webpack_require__(/*! ./user-switch.page.html */ "./src/app/user-switch/user-switch.page.html"),
            styles: [__webpack_require__(/*! ./user-switch.page.scss */ "./src/app/user-switch/user-switch.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], UserSwitchPage);
    return UserSwitchPage;
}());



/***/ })

}]);
//# sourceMappingURL=user-switch-user-switch-module.js.map