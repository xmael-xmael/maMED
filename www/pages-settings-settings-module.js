(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"],{

/***/ "./src/app/pages/settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/settings/settings.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/settings/settings.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Prefernces</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item class=\"bg-profile\">\n    <ion-avatar slot=\"start\">\n      <img src=\"{{urlPicture}}\" class=\"user-avatar\">\n    </ion-avatar>\n    <ion-label>\n      <ion-text color=\"light\">\n        <h2>\n          <strong>{{name}}</strong>\n        </h2>\n      </ion-text>\n      <ion-text color=\"tertiary\">\n        <h3>\n          {{email}}\n        </h3>\n      </ion-text>\n      <ion-button icon-left size=\"small\" shape=\"round\" color=\"dark\" (click)=\"editProfile()\">\n        <ion-icon name=\"contact\"></ion-icon>\n        Edit profile\n      </ion-button>\n      <ion-button icon-left size=\"small\" shape=\"round\" color=\"secondary\" (click)=\"logout()\">\n        <ion-icon name=\"log-out\"></ion-icon>\n        logout\n      </ion-button>\n    </ion-label>\n  </ion-item>\n\n  <ion-list no-border>\n    <ion-list-header>\n      <ion-text color=\"dark\">\n        <h5>Activer / desactiver Alarme</h5>\n      </ion-text>\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\"notifications\" slot=\"start\" color=\"primary\"></ion-icon>\n      <ion-label color=\"primary\">Alarme préventive hypoglycémie</ion-label>\n      <ion-checkbox color=\"primary\"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"notifications\" slot=\"start\" color=\"primary\"></ion-icon>\n      <ion-label color=\"primary\">Rappels controle après le repas</ion-label>\n      <ion-checkbox color=\"primary\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n \n  <ion-list>\n      <ion-radio-group>\n        <ion-list-header>\n            <ion-text color=\"dark\">\n                <h5>Unités</h5>\n              </ion-text>\n        </ion-list-header>\n    \n        <ion-item>\n          <ion-label> g/l</ion-label>\n          <ion-radio slot=\"end\" value=\"biff\" checked></ion-radio>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label>mg/dl</ion-label>\n          <ion-radio slot=\"end\" value=\"griff\"></ion-radio>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label>mmol/l</ion-label>\n          <ion-radio slot=\"end\" value=\"buford\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n\n  \n\n    <ion-list>\n        <ion-list-header>\n        <ion-text color=\"dark\">\n          <h5>Mesures</h5>\n        </ion-text>\n      </ion-list-header>\n      <ion-item>\n        \n        <ion-label color=\"primary\">Au lever</ion-label>\n        <ion-checkbox color=\"primary\"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        \n        <ion-label color=\"primary\">Avant le petit dejeuner</ion-label>\n        <ion-checkbox color=\"primary\"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        \n        <ion-label color=\"primary\">Apres le petit dejeuner</ion-label>\n        <ion-checkbox color=\"primary\"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        \n        <ion-label color=\"primary\">Avant le dejeuner</ion-label>\n        <ion-checkbox color=\"primary\"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        \n        <ion-label color=\"primary\">Après le dejeuner</ion-label>\n        <ion-checkbox color=\"primary\"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        \n        <ion-label color=\"primary\">Avant le diner</ion-label>\n        <ion-checkbox color=\"primary\"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        \n        <ion-label color=\"primary\">Après le diner</ion-label>\n        <ion-checkbox color=\"primary\"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n          \n          <ion-label color=\"primary\">Après le diner</ion-label>\n          <ion-checkbox color=\"primary\"></ion-checkbox>\n      </ion-item>\n    \n    </ion-list>\n    <ion-item>\n        <ion-button color=\"primary\" (click)=\"presentAlertPrompt()\">Edit password</ion-button>\n    </ion-item>\n\n \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/settings/settings.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(-135deg, var(--ion-color-medium), var(--ion-color-light))\n  ; }\n\nion-avatar {\n  width: 68px;\n  height: 68px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZ3MvRjpcXG1hTWVkL3NyY1xcYXBwXFxwYWdlc1xcc2V0dGluZ3NcXHNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJO0VBQWEsRUFBQTs7QUFJakI7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSksIHZhcigtLWlvbi1jb2xvci1saWdodCkpXG4gIH1cbn1cblxuaW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDY4cHg7XG4gICAgaGVpZ2h0OiA2OHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/settings/settings.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/url-service */ "./src/app/services/url-service.ts");
/* harmony import */ var _services_getInfos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/getInfos-service */ "./src/app/services/getInfos-service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, urlService, info, http, alertController) {
        this.navCtrl = navCtrl;
        this.urlService = urlService;
        this.info = info;
        this.http = http;
        this.alertController = alertController;
        this.languages = ['English', 'Portuguese', 'French'];
        this.paymentMethods = ['Paypal', 'Credit Card'];
        this.currencies = ['USD', 'BRL', 'EUR'];
        this.urlPicture = this.urlService.picture + this.info.data.chemin;
        this.name = this.info.data.prenom + ' ' + this.info.data.nom;
        this.email = this.info.data.email;
    }
    SettingsPage.prototype.ngOnInit = function () {
    };
    SettingsPage.prototype.editProfile = function () {
        this.navCtrl.navigateForward('edit-profile');
    };
    SettingsPage.prototype.logout = function () {
        this.navCtrl.navigateRoot('/');
    };
    SettingsPage.prototype.presentAlertPrompt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Nouveau mot de passe',
                            inputs: [
                                {
                                    name: 'ancien',
                                    type: 'text',
                                    placeholder: 'Ancien mot de passe'
                                },
                                {
                                    name: 'nouveau',
                                    type: 'text',
                                    id: 'name2-id',
                                    placeholder: 'Nouveau mot de passe'
                                },
                                {
                                    name: 'repeat',
                                    type: 'text',
                                    id: 'name2-id',
                                    placeholder: 'Entrez encore'
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function () {
                                        console.log('Confirm Ok');
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
    SettingsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.page.html */ "./src/app/pages/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/pages/settings/settings.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_url_service__WEBPACK_IMPORTED_MODULE_2__["UrlService"],
            _services_getInfos_service__WEBPACK_IMPORTED_MODULE_3__["GetInfosService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-settings-settings-module.js.map