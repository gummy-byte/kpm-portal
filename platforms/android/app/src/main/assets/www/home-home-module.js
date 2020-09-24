(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n\t<ion-back-button slot=\"start\" color=\"light\" text=\"\"></ion-back-button>\r\n    <ion-title text-center>\r\n      KAKITANGAN\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"dark-grey\">\r\n  <div class=\"ion-padding\">\r\n  \t<ion-grid>\r\n\t    <ion-row>\r\n\t    \t<ion-col size=\"6\">\r\n\t    \t\t<ion-card class=\"card-border\" color=\"warning\" text-center (click)=\"openWithSystemBrowser('https://beranang.kpm.edu.my/')\">\r\n\t    \t\t\t<ion-card-header class=\"card-header\">\r\n\t\t\t\t\t    <ion-card-title class=\"fsr-3\">\r\n\t\t\t\t\t    \t<img class=\"mb-5\" src=\"../assets/img/global-network.png\"/>\t\t\t\t\t    \t\r\n\t\t\t\t\t    </ion-card-title>\r\n\t\t\t\t\t  </ion-card-header>\r\n\t\t    \t\t<ion-card-content class=\"pt-0 inline-content\">\r\n\t\t\t\t    Laman Web Rasmi KPMB\r\n\t\t\t\t  </ion-card-content>\r\n\t\t\t\t</ion-card>\r\n\t    \t</ion-col>\r\n\t    \t<ion-col size=\"6\">\r\n\t    \t\t<ion-card class=\"card-border\" color=\"success\" text-center (click)=\"openWithSystemBrowser('http://beranang.kpm.edu.my/cms/loginPenjaga.php')\">\r\n\t    \t\t\t<ion-card-header class=\"card-header\">\r\n\t\t\t\t\t    <ion-card-title class=\"fsr-3\">\r\n\t\t\t\t\t    \t<img class=\"mb-5\" src=\"../assets/img/boss.png\"/>\r\n\t\t\t\t\t    </ion-card-title>\r\n\t\t\t\t\t  </ion-card-header>\r\n\t\t    \t\t<ion-card-content class=\"pt-0 inline-content\">\r\n\t\t\t\t    CMS KPMB\r\n\t\t\t\t  </ion-card-content>\r\n\t\t\t\t</ion-card>\r\n\t    \t</ion-col>\r\n\t    </ion-row>\r\n\t    <ion-row>\r\n\t    \t<ion-col size=\"6\">\r\n\t    \t\t<ion-card class=\"card-border\" color=\"tertiary\" text-center (click)=\"openWithSystemBrowser('http://myintervensi.kpmb.my/myIntervensi/index.php')\">\r\n\t    \t\t\t<ion-card-header class=\"card-header\">\r\n\t\t\t\t\t    <ion-card-title class=\"fsr-3\">\r\n\t\t\t\t\t    \t<img class=\"mb-5\" src=\"../assets/img/jainism.png\"/>\r\n\t\t\t\t\t    </ion-card-title>\r\n\t\t\t\t\t  </ion-card-header>\r\n\t\t    \t\t<ion-card-content class=\"pt-0 inline-content\">\r\n\t\t\t\t    AIMS\r\n\t\t\t\t  </ion-card-content>\r\n\t\t\t\t</ion-card>\r\n\t    \t</ion-col>\r\n\t    \t<ion-col size=\"6\">\r\n\t    \t\t<ion-card class=\"card-border\" color=\"light\" text-center (click)=\"openWithSystemBrowser('http://beranang.kpm.edu.my/sars/')\">\r\n\t    \t\t\t<ion-card-header class=\"card-header\">\r\n\t\t\t\t\t    <ion-card-title class=\"fsr-3\">\r\n\t\t\t\t\t    \t<img class=\"mb-5\" src=\"../assets/img/news-report.png\"/>\r\n\t\t\t\t\t    </ion-card-title>\r\n\t\t\t\t\t  </ion-card-header>\r\n\t\t    \t\t<ion-card-content class=\"pt-0 inline-content\">\r\n\t\t\t\t    SARS\r\n\t\t\t\t  </ion-card-content>\r\n\t\t\t\t</ion-card>\r\n\t    \t</ion-col>\r\n\t    </ion-row>\r\n\t    <ion-row>\r\n\t    \t<ion-col size=\"6\">\r\n\t    \t\t<ion-card class=\"card-border\" color=\"primary\" text-center (click)=\"openWithSystemBrowser('https://teams.beranang.kpm.edu.my/login')\">\r\n\t    \t\t\t<ion-card-header class=\"card-header\">\r\n\t\t\t\t\t    <ion-card-title class=\"fsr-3\">\r\n\t\t\t\t\t    \t<img class=\"mb-5\" src=\"../assets/img/team.png\"/>\r\n\t\t\t\t\t    </ion-card-title>\r\n\t\t\t\t\t  </ion-card-header>\r\n\t\t    \t\t<ion-card-content class=\"pt-0 inline-content\">\r\n\t\t\t\t    TEAMS\r\n\t\t\t\t  </ion-card-content>\r\n\t\t\t\t</ion-card>\r\n\t    \t</ion-col>\r\n\t    \t<ion-col size=\"6\">\r\n\t    \t\t<ion-card class=\"card-border\" color=\"tertiary\" text-center (click)=\"openWithSystemBrowser('http://eboss.kpmb.my/Web/?')\">\r\n\t    \t\t\t<ion-card-header class=\"card-header\">\r\n\t\t\t\t\t    <ion-card-title class=\"fsr-3\">\r\n\t\t\t\t\t    \t<img class=\"mb-5\" src=\"../assets/img/homework.png\"/>\r\n\t\t\t\t\t    </ion-card-title>\r\n\t\t\t\t\t  </ion-card-header>\r\n\t\t    \t\t<ion-card-content class=\"pt-0 inline-content\">\r\n\t\t\t\t    E-Boss\r\n\t\t\t\t  </ion-card-content>\r\n\t\t\t\t</ion-card>\r\n\t    \t</ion-col>\r\n\t    </ion-row>\r\n\t    <ion-row>\r\n\t    \t<ion-col size=\"6\">\r\n\t    \t\t<ion-card class=\"card-border\" color=\"light\" text-center (click)=\"openWithSystemBrowser('http://beranang.kpm.edu.my/vfixit/')\">\r\n\t    \t\t\t<ion-card-header class=\"card-header\">\r\n\t\t\t\t\t    <ion-card-title class=\"fsr-3\">\r\n\t\t\t\t\t    \t<img class=\"mb-5\" src=\"../assets/img/pliers.png\"/>\r\n\t\t\t\t\t    </ion-card-title>\r\n\t\t\t\t\t  </ion-card-header>\r\n\t\t    \t\t<ion-card-content class=\"pt-0 inline-content\">\r\n\t\t\t\t    V-FIX\r\n\t\t\t\t  </ion-card-content>\r\n\t\t\t\t</ion-card>\r\n\t    \t</ion-col>\r\n\t    \t<ion-col size=\"6\">\r\n\t    \t\t<ion-card class=\"card-border\" color=\"medium\" text-center (click)=\"openWithSystemBrowser('http://gotna.mara.gov.my/staff')\">\r\n\t    \t\t\t<ion-card-header class=\"card-header\">\r\n\t\t\t\t\t    <ion-card-title class=\"fsr-3\">\r\n\t\t\t\t\t    \t<img class=\"mb-5\" src=\"../assets/img/presentation.png\"/>\r\n\t\t\t\t\t    </ion-card-title>\r\n\t\t\t\t\t  </ion-card-header>\r\n\t\t    \t\t<ion-card-content class=\"pt-0 inline-content\">\r\n\t\t\t\t    Gotna\r\n\t\t\t\t  </ion-card-content>\r\n\t\t\t\t</ion-card>\r\n\t    \t</ion-col>\r\n\t    </ion-row>\r\n\t    <ion-row>\r\n\t    \t<ion-col size=\"6\">\r\n\t    \t\t<ion-card class=\"card-border\" color=\"primary\" text-center (click)=\"openWithSystemBrowser('https://hrmis2.eghrmis.gov.my/HRMISNET/Common/Main/Login.aspx')\">\r\n\t    \t\t\t<ion-card-header class=\"card-header\">\r\n\t\t\t\t\t    <ion-card-title class=\"fsr-3\">\r\n\t\t\t\t\t    \t<img class=\"mb-5\" src=\"../assets/img/target.png\"/>\r\n\t\t\t\t\t    </ion-card-title>\r\n\t\t\t\t\t  </ion-card-header>\r\n\t\t    \t\t<ion-card-content class=\"pt-0 inline-content\">\r\n\t\t\t\t    HRMIS\r\n\t\t\t\t  </ion-card-content>\r\n\t\t\t\t</ion-card>\r\n\t    \t</ion-col>\r\n\t    \t<ion-col size=\"6\">\r\n\t    \t\t<ion-card class=\"card-border\" color=\"danger\" text-center (click)=\"openWithSystemBrowser('https://online07.mara.gov.my/epenyata/')\">\r\n\t    \t\t\t<ion-card-header class=\"card-header\">\r\n\t\t\t\t\t    <ion-card-title class=\"fsr-3\">\r\n\t\t\t\t\t    \t<img class=\"mb-5\" src=\"../assets/img/money-bag.png\"/>\r\n\t\t\t\t\t    </ion-card-title>\r\n\t\t\t\t\t  </ion-card-header>\r\n\t\t    \t\t<ion-card-content class=\"pt-0 inline-content\">\r\n\t\t\t\t    E-Penyata\r\n\t\t\t\t  </ion-card-content>\r\n\t\t\t\t</ion-card>\r\n\t    \t</ion-col>\r\n\t    </ion-row>\r\n\t    <ion-row>\r\n\t    \t<ion-col size=\"6\">\r\n\t    \t\t<ion-card class=\"card-border\" color=\"tertiary\" text-center (click)=\"openWithSystemBrowser('https://beranang.kpm.edu.my/index.php/galeri-foto-dan-video')\">\r\n\t    \t\t\t<ion-card-header class=\"card-header\">\r\n\t\t\t\t\t    <ion-card-title class=\"fsr-3\">\r\n\t\t\t\t\t    \t<img class=\"mb-5\" src=\"../assets/img/picture.png\"/>\r\n\t\t\t\t\t    </ion-card-title>\r\n\t\t\t\t\t  </ion-card-header>\r\n\t\t    \t\t<ion-card-content class=\"pt-0 inline-content\">\r\n\t\t\t\t    Album KPMB\r\n\t\t\t\t  </ion-card-content>\r\n\t\t\t\t</ion-card>\t    \t</ion-col>\r\n\t    \t<ion-col size=\"6\">\r\n\t    \t\t<ion-card class=\"card-border\" color=\"secondary\" text-center (click)=\"openWithSystemBrowser('http://online06.mara.gov.my/erehat')\">\r\n\t    \t\t\t<ion-card-header class=\"card-header\">\r\n\t\t\t\t\t    <ion-card-title class=\"fsr-3\">\r\n\t\t\t\t\t    \t<img class=\"mb-5\" src=\"../assets/img/house.png\"/>\r\n\t\t\t\t\t    </ion-card-title>\r\n\t\t\t\t\t  </ion-card-header>\r\n\t\t    \t\t<ion-card-content class=\"pt-0 inline-content\">\r\n\t\t\t\t    Rumah Rehat\r\n\t\t\t\t  </ion-card-content>\r\n\t\t\t\t</ion-card>\r\n\t    \t</ion-col>\r\n\t    \t<ion-col size=\"6\">\r\n\t    \t\t<ion-card class=\"card-border\" color=\"light\" text-center routerLink=\"/lect-room\" routerDirection=\"forward\">\r\n\t    \t\t\t<ion-card-header class=\"card-header\">\r\n\t\t\t\t\t    <ion-card-title class=\"fsr-3\">\r\n\t\t\t\t\t    \t<img class=\"mb-5\" src=\"../assets/img/lecturer.png\"/>\r\n\t\t\t\t\t    </ion-card-title>\r\n\t\t\t\t\t  </ion-card-header>\r\n\t\t    \t\t<ion-card-content class=\"pt-0 inline-content\">\r\n\t\t\t\t    Senarai Pensyarah\r\n\t\t\t\t  </ion-card-content>\r\n\t\t\t\t</ion-card>\r\n\t    \t</ion-col>\r\n\t    </ion-row>\r\n  \t</ion-grid>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-border {\n  margin: 5px;\n  height: 100%;\n  padding-top: 10px; }\n\n.card-header {\n  padding-bottom: 0; }\n\n.fsr-3 {\n  font-size: 3rem; }\n\n.pt-0 {\n  padding-top: 0; }\n\n.inline-content {\n  display: inline-block; }\n\nion-content {\n  --ion-background-color: #92d0f3; }\n\nion-toolbar {\n  --ion-background-color: #92d0f3; }\n\n.mb-5 {\n  margin-bottom: 0.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcU3lhbWltXFxzZW1fNVxca3BtIHBvcnRhbCB2MlxccHJvamVjdFxca3BtLXBvcnRhbC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLGVBQWUsRUFBQTs7QUFHaEI7RUFDQyxjQUFjLEVBQUE7O0FBR2Y7RUFDQyxxQkFBcUIsRUFBQTs7QUFHdEI7RUFDQywrQkFBdUIsRUFBQTs7QUFHeEI7RUFDQywrQkFBdUIsRUFBQTs7QUFFeEI7RUFDQyxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ib3JkZXIge1xyXG5cdG1hcmdpbjogNXB4O1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuXHRwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmZzci0ze1xyXG5cdGZvbnQtc2l6ZTogM3JlbTtcclxufVxyXG5cclxuLnB0LTB7XHJcblx0cGFkZGluZy10b3A6IDA7XHJcbn1cclxuXHJcbi5pbmxpbmUtY29udGVudHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG5cdC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM5MmQwZjM7XHJcbn1cclxuXHJcbmlvbi10b29sYmFye1xyXG5cdC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM5MmQwZjM7XHJcbn1cclxuLm1iLTV7XHJcblx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");




var HomePage = /** @class */ (function () {
    function HomePage(theInAppBrowser, bar) {
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
    HomePage.prototype.openWithSystemBrowser = function (url) {
        var target = "_system";
        this.theInAppBrowser.create(url, target, this.options);
    };
    HomePage.prototype.openWithInAppBrowser = function (url) {
        var target = "_blank";
        this.theInAppBrowser.create(url, target, this.options);
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map