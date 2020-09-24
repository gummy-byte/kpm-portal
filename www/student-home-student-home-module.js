(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-home-student-home-module"],{

/***/ "./src/app/student-home/student-home.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/student-home/student-home.module.ts ***!
  \*****************************************************/
/*! exports provided: StudentHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentHomePageModule", function() { return StudentHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _student_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-home.page */ "./src/app/student-home/student-home.page.ts");







var routes = [
    {
        path: '',
        component: _student_home_page__WEBPACK_IMPORTED_MODULE_6__["StudentHomePage"]
    }
];
var StudentHomePageModule = /** @class */ (function () {
    function StudentHomePageModule() {
    }
    StudentHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_student_home_page__WEBPACK_IMPORTED_MODULE_6__["StudentHomePage"]]
        })
    ], StudentHomePageModule);
    return StudentHomePageModule;
}());



/***/ }),

/***/ "./src/app/student-home/student-home.page.html":
/*!*****************************************************!*\
  !*** ./src/app/student-home/student-home.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n\t<ion-back-button slot=\"start\" color=\"light\" text ></ion-back-button>\r\n    <ion-title text-center>\r\n      PELAJAR\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"dark-grey\">\r\n  <div class=\"ion-padding\">\r\n  \t<ion-grid>\r\n\t    <ion-row>\r\n\t    \t<ion-col size=\"6\">\r\n\t    \t\t<ion-card class=\"card-border\" color=\"warning\" text-center (click)=\"openWithSystemBrowser('https://beranang.kpm.edu.my/')\">\r\n\t    \t\t\t<ion-card-header class=\"card-header\">\r\n\t\t\t\t\t    <ion-card-title class=\"fsr-3\">\r\n\t\t\t\t\t    \t<img class=\"mb-5\" src=\"../assets/img/global-network.png\"/>\t\t\t\t\t    \t\r\n\t\t\t\t\t    </ion-card-title>\r\n\t\t\t\t\t  </ion-card-header>\r\n\t\t    \t\t<ion-card-content class=\"pt-0 inline-content\">\r\n\t\t\t\t    Laman Web Rasmi KPMB\r\n\t\t\t\t  </ion-card-content>\r\n\t\t\t\t</ion-card>\r\n\t    \t</ion-col>\r\n\t    \t<ion-col size=\"6\">\r\n\t    \t\t<ion-card class=\"card-border\" color=\"light\" text-center routerLink=\"/lect-room\" routerDirection=\"forward\">\r\n\t    \t\t\t<ion-card-header class=\"card-header\">\r\n\t\t\t\t\t    <ion-card-title class=\"fsr-3\">\r\n\t\t\t\t\t    \t<img class=\"mb-5\" src=\"../assets/img/lecturer.png\"/>\r\n\t\t\t\t\t    </ion-card-title>\r\n\t\t\t\t\t  </ion-card-header>\r\n\t\t    \t\t<ion-card-content class=\"pt-0 inline-content\">\r\n\t\t\t\t    Senarai Pensyarah\r\n\t\t\t\t  </ion-card-content>\r\n\t\t\t\t</ion-card>\r\n\t    \t</ion-col>\r\n\t    </ion-row>\r\n\t    <ion-row>\r\n\t    \t\r\n\t    \t<ion-col size=\"6\">\r\n\t    \t\t<ion-card class=\"card-border\" color=\"success\" text-center (click)=\"openWithSystemBrowser('http://beranang.kpm.edu.my/cms/loginPenjaga.php')\">\r\n\t    \t\t\t<ion-card-header class=\"card-header\">\r\n\t\t\t\t\t    <ion-card-title class=\"fsr-3\">\r\n\t\t\t\t\t    \t<img class=\"mb-5\" src=\"../assets/img/boss.png\"/>\r\n\t\t\t\t\t    </ion-card-title>\r\n\t\t\t\t\t  </ion-card-header>\r\n\t\t    \t\t<ion-card-content class=\"pt-0 inline-content\">\r\n\t\t\t\t    CMS KPMB\r\n\t\t\t\t  </ion-card-content>\r\n\t\t\t\t</ion-card>\r\n\t    \t</ion-col>\r\n\t    \t<ion-col size=\"6\">\r\n\t    \t\t<ion-card class=\"card-border\" color=\"tertiary\" text-center (click)=\"openWithSystemBrowser('http://myintervensi.kpmb.my/myIntervensi/index.php')\">\r\n\t    \t\t\t<ion-card-header class=\"card-header\">\r\n\t\t\t\t\t    <ion-card-title class=\"fsr-3\">\r\n\t\t\t\t\t    \t<img class=\"mb-5\" src=\"../assets/img/jainism.png\"/>\r\n\t\t\t\t\t    </ion-card-title>\r\n\t\t\t\t\t  </ion-card-header>\r\n\t\t    \t\t<ion-card-content class=\"pt-0 inline-content\">\r\n\t\t\t\t    AIMS\r\n\t\t\t\t  </ion-card-content>\r\n\t\t\t\t</ion-card>\r\n\t    \t</ion-col>\r\n\t    \t<ion-col size=\"6\">\r\n\t    \t\t<ion-card class=\"card-border\" color=\"light\" text-center (click)=\"openWithSystemBrowser('http://beranang.kpm.edu.my/sars/')\">\r\n\t    \t\t\t<ion-card-header class=\"card-header\">\r\n\t\t\t\t\t    <ion-card-title class=\"fsr-3\">\r\n\t\t\t\t\t    \t<img class=\"mb-5\" src=\"../assets/img/news-report.png\"/>\r\n\t\t\t\t\t    </ion-card-title>\r\n\t\t\t\t\t  </ion-card-header>\r\n\t\t    \t\t<ion-card-content class=\"pt-0 inline-content\">\r\n\t\t\t\t    SARS\r\n\t\t\t\t  </ion-card-content>\r\n\t\t\t\t</ion-card>\r\n\t    \t</ion-col>\r\n\t    </ion-row>\r\n  \t</ion-grid>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/student-home/student-home.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/student-home/student-home.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-border {\n  margin: 5px;\n  height: 100%;\n  padding-top: 10px; }\n\n.card-header {\n  padding-bottom: 0; }\n\n.fsr-3 {\n  font-size: 3rem; }\n\n.pt-0 {\n  padding-top: 0; }\n\n.inline-content {\n  display: inline-block; }\n\nion-content {\n  --ion-background-color: #92d0f3; }\n\nion-toolbar {\n  --ion-background-color: #92d0f3; }\n\n.mb-5 {\n  margin-bottom: 0.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC1ob21lL0Q6XFxTeWFtaW1cXHNlbV81XFxrcG0gcG9ydGFsIHYyXFxwcm9qZWN0XFxrcG0tcG9ydGFsL3NyY1xcYXBwXFxzdHVkZW50LWhvbWVcXHN0dWRlbnQtaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLGVBQWUsRUFBQTs7QUFHaEI7RUFDQyxjQUFjLEVBQUE7O0FBR2Y7RUFDQyxxQkFBcUIsRUFBQTs7QUFHdEI7RUFDQywrQkFBdUIsRUFBQTs7QUFHeEI7RUFDQywrQkFBdUIsRUFBQTs7QUFHeEI7RUFDQyxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtaG9tZS9zdHVkZW50LWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYm9yZGVyIHtcclxuXHRtYXJnaW46IDVweDtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0cGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcblx0cGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5mc3ItM3tcclxuXHRmb250LXNpemU6IDNyZW07XHJcbn1cclxuXHJcbi5wdC0we1xyXG5cdHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4uaW5saW5lLWNvbnRlbnR7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuXHQtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjOTJkMGYzO1xyXG59XHJcblxyXG5pb24tdG9vbGJhcntcclxuXHQtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjOTJkMGYzO1xyXG59XHJcblxyXG4ubWItNXtcclxuXHRtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/student-home/student-home.page.ts":
/*!***************************************************!*\
  !*** ./src/app/student-home/student-home.page.ts ***!
  \***************************************************/
/*! exports provided: StudentHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentHomePage", function() { return StudentHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");




var StudentHomePage = /** @class */ (function () {
    function StudentHomePage(theInAppBrowser, bar) {
        this.theInAppBrowser = theInAppBrowser;
        this.bar = bar;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
    }
    StudentHomePage.prototype.ngOnInit = function () {
    };
    StudentHomePage.prototype.openWithSystemBrowser = function (url) {
        var target = "_system";
        this.theInAppBrowser.create(url, target, this.options);
    };
    StudentHomePage.prototype.openWithInAppBrowser = function (url) {
        var target = "_blank";
        this.theInAppBrowser.create(url, target, this.options);
    };
    StudentHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-home',
            template: __webpack_require__(/*! ./student-home.page.html */ "./src/app/student-home/student-home.page.html"),
            styles: [__webpack_require__(/*! ./student-home.page.scss */ "./src/app/student-home/student-home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
    ], StudentHomePage);
    return StudentHomePage;
}());



/***/ })

}]);
//# sourceMappingURL=student-home-student-home-module.js.map