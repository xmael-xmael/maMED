(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-results-home-results-module"],{

/***/ "./src/app/components/popmenu/popmenu.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/popmenu/popmenu.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-fab vertical=\"bottom\" horizontal=\"center\"  slot=\"no-fixed\" class=\"animated fadeInDown\">\n  <ion-fab-button (click)=\"togglePopupMenu()\">\n    <ion-ripple-effect></ion-ripple-effect>\n    <ion-icon name=\"apps\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<div class=\"popup-menu\">\n  <div class=\"popup-menu-overlay\" [ngClass]=\"{'in': openMenu}\"></div>\n  <div class=\"popup-menu-panel\" [ngClass]=\"{'in': openMenu}\">\n    <div class=\"popup-menu-item\">\n      <ion-icon name=\"cog\" slot=\"middle\" size=\"large\" (click)=\"goToEditProgile()\"></ion-icon>\n      <span>Edit Profil</span>\n    </div>\n    <div class=\"popup-menu-item\">\n      <ion-icon name=\"list-box\" slot=\"middle\" size=\"large\"  (click)=\"presentImage(themeCover)\"></ion-icon>\n      <span>Mesure</span>\n    </div>\n    <div class=\"popup-menu-item\">\n      <ion-icon name=\"add-circle\"  slot=\"middle\" size=\"large\" (click)=\"searchFilter()\"></ion-icon>\n     \n      <span>+ Mesure</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/popmenu/popmenu.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/popmenu/popmenu.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popup-menu-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.15s ease-in-out;\n  background-image: linear-gradient(rgba(79, 36, 172, 0.85) 0%, rgba(79, 36, 172, 0.65) 100%); }\n  .popup-menu-overlay.in {\n    opacity: 1;\n    visibility: visible; }\n  .popup-menu-toggle {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  bottom: 10px;\n  left: 50%;\n  margin-left: -20px;\n  background-color: var(--ion-color-primary);\n  border-radius: 50%;\n  z-index: 101;\n  transition: all .25s ease-in-out; }\n  .popup-menu-toggle.out {\n    opacity: 0;\n    visibility: hidden;\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    transition: all .15s ease-in-out; }\n  .popup-menu-toggle.out:before {\n      transition: all .15s ease-in-out;\n      -webkit-transform: scale(0);\n      transform: scale(0); }\n  .popup-menu-panel {\n  position: fixed;\n  width: 300px;\n  border-radius: 5%;\n  bottom: 80px;\n  left: 50%;\n  margin-left: -150px;\n  padding: 20px;\n  background-color: var(--ion-color-primary);\n  z-index: 102;\n  transition: all .25s ease-in-out;\n  transition-delay: .15s;\n  -webkit-transform-origin: 50% 100%;\n  transform-origin: 50% 100%;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  display: -moz-flex;\n  display: flex;\n  flex-wrap: wrap; }\n  .popup-menu-panel .popup-menu-item {\n    margin: auto;\n    -moz-flex: 1 0 30%;\n    flex: 1 0 30%;\n    display: -moz-flex;\n    display: flex;\n    -moz-flex-direction: column;\n    flex-direction: column;\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    opacity: 0;\n    transition: all .25s ease-in-out; }\n  .popup-menu-panel .popup-menu-item ion-icon {\n      margin: 0 auto;\n      text-align: center;\n      color: #fff; }\n  .popup-menu-panel .popup-menu-item span {\n      padding: 0;\n      margin: 0 0 auto 0;\n      color: #fff;\n      text-align: center;\n      font-size: 12px;\n      text-transform: uppercase;\n      font-weight: 500;\n      line-height: 18px; }\n  .popup-menu-panel .popup-menu-item:active i {\n      color: #dd4135;\n      transition: all 0.15s; }\n  .popup-menu-panel .popup-menu-item:active span {\n      color: #dd4135;\n      transition: all .15s; }\n  .popup-menu-panel.in {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    transition-delay: 0s; }\n  .popup-menu-panel.in .popup-menu-item {\n      -webkit-transform: scale(1);\n      transform: scale(1);\n      opacity: 1;\n      transition-delay: .15s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3BtZW51L0Y6XFxtYU1lZC9zcmNcXGFwcFxcY29tcG9uZW50c1xccG9wbWVudVxccG9wbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFFbEIsaUNBQWlDO0VBRWpDLDJGQUFxRixFQUFBO0VBWnpGO0lBY1EsVUFBVTtJQUNWLG1CQUFtQixFQUFBO0VBSTNCO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixZQUFZO0VBRVosZ0NBQWdDLEVBQUE7RUFYcEM7SUFhUSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFFbkIsZ0NBQWdDLEVBQUE7RUFsQnhDO01BcUJZLGdDQUFnQztNQUNoQywyQkFBMkI7TUFDM0IsbUJBQW1CLEVBQUE7RUFLL0I7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUVaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osU0FBUztFQUNULG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsMENBQTBDO0VBQzFDLFlBQVk7RUFFWixnQ0FBZ0M7RUFFaEMsc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUluQixrQkFBa0I7RUFFbEIsYUFBYTtFQUliLGVBQWUsRUFBQTtFQTVCbkI7SUE4QlEsWUFBWTtJQUlaLGtCQUFrQjtJQUVsQixhQUFhO0lBSWIsa0JBQWtCO0lBRWxCLGFBQWE7SUFJYiwyQkFBMkI7SUFFM0Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsVUFBVTtJQUVWLGdDQUFnQyxFQUFBO0VBckR4QztNQXVEWSxjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLFdBQVcsRUFBQTtFQXpEdkI7TUE0RFksVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLGVBQWU7TUFDZix5QkFBeUI7TUFDekIsZ0JBQWdCO01BQ2hCLGlCQUFpQixFQUFBO0VBbkU3QjtNQXVFZ0IsY0FBcUI7TUFFckIscUJBQXFCLEVBQUE7RUF6RXJDO01BNEVnQixjQUFxQjtNQUVyQixvQkFBb0IsRUFBQTtFQTlFcEM7SUFtRlEsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUVuQixvQkFBb0IsRUFBQTtFQXRGNUI7TUF3RlksMkJBQTJCO01BQzNCLG1CQUFtQjtNQUNuQixVQUFVO01BRVYsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcG1lbnUvcG9wbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBvcHVwIE1lbnUgLy9cbi5wb3B1cC1tZW51LW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogMTAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2JhKDc5LDM2LDE3MiwgLjg1KSAwJSwgcmdiYSg3OSwzNiwxNzIsIC42NSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoNzksMzYsMTcyLCAuODUpIDAlLCByZ2JhKDc5LDM2LDE3MiwgLjY1KSAxMDAlKTtcbiAgICAmLmluIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG59XG5cbi5wb3B1cC1tZW51LXRvZ2dsZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHotaW5kZXg6IDEwMTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0O1xuICAgICYub3V0IHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucG9wdXAtbWVudS1wYW5lbCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAzMDBweDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgIGJvdHRvbTogODBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB6LWluZGV4OiAxMDI7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC4xNXM7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjE1cztcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgICAtbW96LWZsZXgtd3JhcDogd3JhcDtcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAucG9wdXAtbWVudS1pdGVtIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxIDAgMzAlO1xuICAgICAgICAtd2Via2l0LWZsZXg6IDEgMCAzMCU7XG4gICAgICAgIC1tb3otYm94LWZsZXg6IDEgMCAzMCU7XG4gICAgICAgIC1tb3otZmxleDogMSAwIDMwJTtcbiAgICAgICAgLW1zLWZsZXg6IDEgMCAzMCU7XG4gICAgICAgIGZsZXg6IDEgMCAzMCU7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIGF1dG8gMDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgfVxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDIyMSw2NSw1Myk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjE1cztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDIyMSw2NSw1Myk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjE1cztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmLmluIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgLnBvcHVwLW1lbnUtaXRlbSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogLjE1cztcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC4xNXM7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/popmenu/popmenu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/popmenu/popmenu.component.ts ***!
  \*********************************************************/
/*! exports provided: PopmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopmenuComponent", function() { return PopmenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pages_modal_image_image_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/modal/image/image.page */ "./src/app/pages/modal/image/image.page.ts");
/* harmony import */ var _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/modal/search-filter/search-filter.page */ "./src/app/pages/modal/search-filter/search-filter.page.ts");
/* harmony import */ var _services_getInfos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/getInfos-service */ "./src/app/services/getInfos-service.ts");
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





var PopmenuComponent = /** @class */ (function () {
    function PopmenuComponent(navCtrl, events, modalCtrl, getInfosService) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.getInfosService = getInfosService;
        this.openMenu = false;
        this.themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
    }
    PopmenuComponent.prototype.ngOnInit = function () {
    };
    PopmenuComponent.prototype.togglePopupMenu = function () {
        return this.openMenu = !this.openMenu;
    };
    PopmenuComponent.prototype.searchFilter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_3__["SearchFilterPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PopmenuComponent.prototype.goToEditProgile = function () {
        var _this = this;
        this.events.subscribe('nom', function (data) {
            _this.data = data;
            console.log(data); // 👋 Hello from page1!
        });
        this.navCtrl.navigateForward('edit-profile');
    };
    PopmenuComponent.prototype.presentImage = function (image) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _pages_modal_image_image_page__WEBPACK_IMPORTED_MODULE_2__["ImagePage"],
                            componentProps: { value: image }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PopmenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'popmenu',
            template: __webpack_require__(/*! ./popmenu.component.html */ "./src/app/components/popmenu/popmenu.component.html"),
            styles: [__webpack_require__(/*! ./popmenu.component.scss */ "./src/app/components/popmenu/popmenu.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _services_getInfos_service__WEBPACK_IMPORTED_MODULE_4__["GetInfosService"]])
    ], PopmenuComponent);
    return PopmenuComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-results/home-results.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.module.ts ***!
  \***********************************************************/
/*! exports provided: HomeResultsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResultsPageModule", function() { return HomeResultsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_popmenu_popmenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/popmenu/popmenu.component */ "./src/app/components/popmenu/popmenu.component.ts");
/* harmony import */ var _home_results_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-results.page */ "./src/app/pages/home-results/home-results.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _home_results_page__WEBPACK_IMPORTED_MODULE_6__["HomeResultsPage"]
    }
];
var HomeResultsPageModule = /** @class */ (function () {
    function HomeResultsPageModule() {
    }
    HomeResultsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_results_page__WEBPACK_IMPORTED_MODULE_6__["HomeResultsPage"], _components_popmenu_popmenu_component__WEBPACK_IMPORTED_MODULE_5__["PopmenuComponent"]]
        })
    ], HomeResultsPageModule);
    return HomeResultsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/home-results/home-results.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n        <ion-text color=\"light\">\n          <ion-text color=\"light\" class=\"fw700\">maMED</ion-text>\n        </ion-text>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"notifications()\">\n          <ion-icon name=\"mail-unread\"></ion-icon>\n        <ion-badge color=\"dark\" slot=\"end\">2</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content>\n  <ion-card no-margin class=\"no-radius\">\n    <ion-item lines=\"none\" color=\"medium\">\n      <ion-label>\n        <h2 no-margin class=\"fw500 no-margin\">\n          <ion-text color=\"dark\">maMED-Journal</ion-text>\n        </h2>\n\n      </ion-label>\n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\" color=\"primary\" (click)=\"onShow(Voir)\"> {{Voir}}\n       \n        <ion-icon name=\"locate\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-card>\n\n  <ion-card *ngIf=\"showt == 'clara'\">\n      <ion-card-header color=\"primary\">\n      Mes informations\n      </ion-card-header>\n        \n      <ion-item>\n          <ion-label>&nbsp;&nbsp;&nbsp;&nbsp;Sexe:</ion-label>\n          <ion-label slot=\"end\">{{menu.sexe}}</ion-label>\n      </ion-item>\n      \n      <ion-item>\n          <ion-label>&nbsp;&nbsp;&nbsp;&nbsp;Naissance</ion-label>\n          <ion-label slot=\"end\">{{menu.datenaiss}}</ion-label>\n      </ion-item>\n      \n      <ion-item>\n          <ion-label>&nbsp;&nbsp;&nbsp;&nbsp;Adresse</ion-label>\n          <ion-label slot=\"end\">{{menu.adresse}}</ion-label>\n      </ion-item>\n      \n      <ion-item>\n          <ion-label>&nbsp;&nbsp;&nbsp;&nbsp;Telephone</ion-label>\n          <ion-label slot=\"end\">{{menu.tel}}</ion-label>\n      </ion-item>\n      <ion-item>\n          <ion-label>&nbsp;&nbsp;&nbsp;&nbsp;Télephone1</ion-label>\n          <ion-label slot=\"end\">{{menu.tel2}}</ion-label>\n      </ion-item>\n      <ion-item>\n          <ion-label>&nbsp;&nbsp;&nbsp;&nbsp;Email</ion-label>\n          <ion-label slot=\"end\">{{menu.email}}</ion-label>\n      </ion-item>\n      <ion-item>\n          <ion-label>&nbsp;&nbsp;&nbsp;&nbsp;Type de diabète</ion-label>\n          <ion-label slot=\"end\">{{menu.type}}</ion-label>\n      </ion-item>\n      <ion-item>\n          <ion-label>&nbsp;&nbsp;&nbsp;&nbsp;Taille(cm):</ion-label>\n          <ion-label slot=\"end\">{{menu.taille}}</ion-label>\n      </ion-item>\n      <ion-item>\n          <ion-label>&nbsp;&nbsp;&nbsp;&nbsp;Poids(kg):</ion-label>\n          <ion-label slot=\"end\">{{menu.poids}}</ion-label>\n      </ion-item>\n      <ion-item>\n          <ion-label>&nbsp;&nbsp;&nbsp;&nbsp;IMC:</ion-label>\n          <ion-label slot=\"end\">{{menu.imc}}</ion-label>\n      </ion-item>\n      <ion-item>\n          <ion-label>&nbsp;&nbsp;&nbsp;&nbsp;Interpretation:</ion-label>\n          <ion-label slot=\"end\">{{menu.interpretation}}</ion-label>\n      </ion-item>\n      <ion-item>\n          <ion-label>&nbsp;&nbsp;&nbsp;&nbsp;Urgence:</ion-label>\n          <ion-label slot=\"end\">{{menu.nom_contact_urgence}}</ion-label>\n      </ion-item>\n      <ion-item>\n          <ion-label>&nbsp;&nbsp;&nbsp;&nbsp;tel. Urgence:</ion-label>\n          <ion-label slot=\"end\">{{menu.telephone_contact_urgence}}</ion-label>\n      </ion-item>\n      \n           \n        <div style=\"text-align: center\">\n          <ion-button shape=\"round\"  color=\"secondary\" (click)=\"onShow('Cacher mes infos')\">Cacher </ion-button>\n          <ion-button  shape=\"round\"  color=\"warning\" (click)=\"goToEditProgile()\"> Edit </ion-button>\n          <!-- <button ion-button outline item-end icon-start style=\"align-self: end; \" class=\"round\">Mesure</button> -->\n        </div>\n    </ion-card>\n\n\n\n  <div *ngIf = \"menu.approbation == 'Nok' && foletia == 'papa'\">\n    <ion-card class=\"bg-white\" *ngFor = \"let vil of menu1\">\n      <h5 style=\"text-align: center\">{{vil.medeciniNom}}&nbsp;&nbsp;{{vil.medeciniPrenom}}</h5>\n      <p style=\"text-align: center\">({{vil.libelle}},&nbsp;&nbsp;{{vil.anciennete}} ans d'expériences)</p>\n      <div style=\"text-align: center\">\n        <ion-button shape=\"round\"  color=\"secondary\" (click)=\"onStopSuivis('approuver.php', vil.idphm, vil.idmedecin)\">Approuver </ion-button>\n        <ion-button  shape=\"round\"  color=\"warning\" (click)=\"onStopSuivis('suprimer.php', vil.idphm, vil.idmedecin)\"> Suprimer </ion-button>\n        <!-- <button ion-button outline item-end icon-start style=\"align-self: end; \" class=\"round\">Mesure</button> -->\n      </div>\n    </ion-card>\n  </div>\n  <div  *ngIf = \"menu.approbation == 'ok' && foletia == 'papa'\">\n\n      <ion-card class=\"bg-white\" >\n        <ion-card-header color=\"primary\">\n            Medecin traitant\n        </ion-card-header>\n        <h5 style=\"text-align: center\">{{menu.medeciniNom}}&nbsp;&nbsp;{{menu.medeciniPrenom}}</h5>\n        <p style=\"text-align: center\">({{menu.libelle}},&nbsp;&nbsp;{{menu.anciennete}} ans d'expériences)</p>\n        <ion-button expand=\"full\" color=\"dark\" (click)=\"onStopSuivis('arreterSuivis.php', ' ', ' ')\" no-margin>\n            Arreter le suivis\n        </ion-button>\n      </ion-card>\n  </div>\n\n  <ion-list no-border>\n      <ion-list-header>\n        <ion-text color=\"dark\">\n          <h5>Rappels</h5>\n        </ion-text>\n      </ion-list-header>\n      <ion-item>\n          <ion-icon name=\"notifications\" slot=\"start\" color=\"primary\"></ion-icon>\n          <ion-label class=\"label\" color=\"primary\"> Rappels controle apres repas </ion-label>\n          <ion-toggle [(ngModel)]=\"rapelRepas\" (ionChange)=\"onSave()\" checked=\"true\"></ion-toggle>\n      </ion-item>\n      <div *ngIf=\"clara == true\">\n          <ion-item>\n              <ion-label>Définir l'heure</ion-label>\n              <ion-datetime displayFormat=\"h:mm A\" minuteValues=\"0,15,30,45\" [(ngModel)]=\"repas\" (ionChange)=\"saveHours()\"></ion-datetime>\n            </ion-item>\n      </div>\n      <ion-item>\n          <ion-icon name=\"notifications\" slot=\"start\" color=\"primary\"></ion-icon>\n          <ion-label class=\"label\" color=\"primary\"> Alarme préventive hypoglycémie  </ion-label>\n          <ion-toggle [(ngModel)]=\"rapelHypo\" (ionChange)=\"onSave1()\" checked=\"true\"></ion-toggle>\n      </ion-item>\n      <div  *ngIf=\"clara1 == true\">\n          <ion-item>\n              <ion-label>Définir l'heure</ion-label>\n              <ion-datetime displayFormat=\"h:mm A\" minuteValues=\"0,15,30,45\" [(ngModel)]=\"preventive\" (ionChange)=\"onSaveHours()\"></ion-datetime>\n            </ion-item>\n      </div>\n    \n    </ion-list>\n  \n  <popmenu></popmenu>\n</ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/home-results/home-results.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-light); }\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium); }\n\n:host ion-card.no-radius {\n  border-radius: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS1yZXN1bHRzL0Y6XFxtYU1lZC9zcmNcXGFwcFxccGFnZXNcXGhvbWUtcmVzdWx0c1xcaG9tZS1yZXN1bHRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLG9DQUFhLEVBQUE7O0FBRnJCO0VBTVEsZ0JBQWdCO0VBQ2hCLGlEQUFpRCxFQUFBOztBQVB6RDtFQVlZLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS1yZXN1bHRzL2hvbWUtcmVzdWx0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIH1cblxuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgJi5uby1yYWRpdXMge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home-results/home-results.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.page.ts ***!
  \*********************************************************/
/*! exports provided: HomeResultsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResultsPage", function() { return HomeResultsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/url-service */ "./src/app/services/url-service.ts");
/* harmony import */ var _services_getInfos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/getInfos-service */ "./src/app/services/getInfos-service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/modal/search-filter/search-filter.page */ "./src/app/pages/modal/search-filter/search-filter.page.ts");
/* harmony import */ var _modal_image_image_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../modal/image/image.page */ "./src/app/pages/modal/image/image.page.ts");
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






// Modals


var HomeResultsPage = /** @class */ (function () {
    function HomeResultsPage(navCtrl, menuCtrl, popoverCtrl, alertCtrl, modalCtrl, toastCtrl, loadingCtrl, router, route, http, urlService, events, getInfosService) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.route = route;
        this.http = http;
        this.urlService = urlService;
        this.events = events;
        this.getInfosService = getInfosService;
        this.searchKey = '';
        this.yourLocation = '123 Test Street';
        this.themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
        this.clara = false;
        this.clara1 = false;
        this.showt = "";
        this.Voir = " Voir mes infos";
        this.json = {
            idpers: this.idPers,
        };
        this.appUrlLogin = this.urlService.journal;
        this.appUrlSuivis = this.urlService.approbation;
    }
    HomeResultsPage.prototype.saveHours = function () {
        var _this = this;
        var urlSaveHours = this.urlService.saveHours + this.getInfosService.data.idpersonne + '&startstop=' + this.repas;
        this.http.post(urlSaveHours, JSON.stringify(this.json))
            .subscribe(function (data) {
            if (data == "success") {
                _this.onAlert('Quel success', 'Heure de rapel repas mise ajour avec succes');
            }
            else {
                _this.onAlert('Echec', 'Quelque chose a mal tournée signalé au service d\'assistance');
            }
        }, function (err) {
            _this.onAlert('Echec', 'Quelque chose a mal tournée signalé au service d\'assistance');
        });
    };
    HomeResultsPage.prototype.onSaveHours = function () {
        var _this = this;
        var onSaveHours = this.urlService.onSaveHours + this.getInfosService.data.idpersonne + '&startstop=' + this.preventive;
        this.http.post(onSaveHours, JSON.stringify(this.json))
            .subscribe(function (data) {
            if (data == "success") {
                _this.onAlert('Quel success', 'Heure de rapel Hypoglemie mise ajour avec succes');
            }
            else {
                _this.onAlert('Echec', 'Quelque chose a mal tournée signalé au service d\'assistance');
            }
        }, function (err) {
            _this.onAlert('Echec', 'Quelque chose a mal tournée signalé au service d\'assistance');
        });
    };
    HomeResultsPage.prototype.onAlert = function (par, param) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: par,
                            message: param,
                            buttons: ['Dismiss']
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeResultsPage.prototype.onShow = function (voir) {
        this.Voir = voir;
        if (this.Voir == "Voir mes infos") {
            this.Voir = "Cacher mes infos";
            this.showt = "clara";
        }
        else {
            this.Voir = "Voir mes infos";
            this.showt = "";
        }
    };
    HomeResultsPage.prototype.onSave = function () {
        this.clara = !this.clara;
    };
    HomeResultsPage.prototype.onSave1 = function () {
        this.clara1 = !this.clara1;
    };
    HomeResultsPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
        this.idPers = this.route.parent.snapshot.paramMap.get('idUser');
        console.log(this.idPers);
        this.getJournal(this.idPers);
        this.presentLoading();
        this.foletia = this.getInfosService.foletia;
    };
    HomeResultsPage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Patientez 200 ms',
                            duration: 200
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomeResultsPage.prototype.getJournal = function (idpers) {
        var _this = this;
        this.http.post(this.appUrlLogin + idpers, JSON.stringify(this.json))
            .subscribe(function (data) {
            //console.log(data);
            _this.menu = data;
            //console.log(this.menu.idpatient);
            _this.name = _this.menu.prenom + ' ' + _this.menu.nom;
            _this.events.publish('nom', _this.name); //publication du name
            _this.picture = _this.urlService.picture + _this.menu.chemin;
            _this.events.publish('picture', _this.picture); //publication de la photo de profil
            _this.events.publish('status', 'Patient');
            _this.events.publish('infos', _this.menu);
            _this.getInfosService.data = _this.menu;
            console.log(_this.getInfosService.data);
            _this.idpatient = _this.getInfosService.data.idpatient;
            _this.idphm = _this.getInfosService.data.idphm;
            _this.vare = typeof _this.idphm;
            _this.idmedecin = _this.getInfosService.data.idmedecin;
            console.log(_this.idpatient);
            //this.approbation(this.menu.idpatient);
            if (_this.menu.approbation == 'Nok') {
                _this.medecinN = _this.menu.medeciniNom + ' ' + _this.menu.medeciniPrenom;
                _this.specialite = _this.menu.libelle;
                _this.getSuivis(_this.idPers);
            }
            else {
            }
        }, function (err) {
            console.log(err);
            //this.errs = 'Erreurs de connexion assurez vous d\'avoir une connexion internet';
        });
    };
    HomeResultsPage.prototype.onStopSuivis = function (param, action, idmed) {
        var _this = this;
        this.param = param;
        if (action != ' ' && idmed != ' ') {
            this.idphm = action;
            this.idmedecin = idmed;
        }
        this.urlSuivis = this.urlService.stop + this.param + '?id=' + this.idphm + '&idmedecin=' + this.idmedecin + '&idpatient=' + this.idpatient;
        this.http.post(this.urlSuivis, JSON.stringify(this.json))
            .subscribe(function (data) {
            console.log(_this.urlSuivis);
            if (data == "1") {
                _this.getJournal(_this.idPers);
            }
        }, function (err) {
            console.log(err);
            //this.errs = 'Erreurs de connexion assurez vous d\'avoir une connexion internet';
        });
    };
    HomeResultsPage.prototype.getSuivis = function (idpers) {
        var _this = this;
        this.http.post(this.appUrlSuivis + idpers, JSON.stringify(this.json))
            .subscribe(function (data) {
            console.log(data);
            _this.menu1 = data;
        }, function (err) {
            console.log(err);
            //this.errs = 'Erreurs de connexion assurez vous d\'avoir une connexion internet';
        });
    };
    HomeResultsPage.prototype.settings = function () {
        this.navCtrl.navigateForward('settings');
    };
    HomeResultsPage.prototype.alertLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var changeLocation;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Change Location',
                            message: 'Type your Address.',
                            inputs: [
                                {
                                    name: 'location',
                                    placeholder: 'Enter your new Location',
                                    type: 'text'
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function (data) {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Change',
                                    handler: function (data) { return __awaiter(_this, void 0, void 0, function () {
                                        var toast;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    console.log('Change clicked', data);
                                                    this.yourLocation = data.location;
                                                    return [4 /*yield*/, this.toastCtrl.create({
                                                            message: 'Location was change successfully',
                                                            duration: 3000,
                                                            position: 'top',
                                                            closeButtonText: 'OK',
                                                            showCloseButton: true
                                                        })];
                                                case 1:
                                                    toast = _a.sent();
                                                    toast.present();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        changeLocation = _a.sent();
                        changeLocation.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeResultsPage.prototype.searchFilter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_6__["SearchFilterPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomeResultsPage.prototype.presentImage = function (image) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _modal_image_image_page__WEBPACK_IMPORTED_MODULE_7__["ImagePage"],
                            componentProps: { value: image }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomeResultsPage.prototype.notifications = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.navigateForward('fluid');
                return [2 /*return*/];
            });
        });
    };
    HomeResultsPage.prototype.goToEditProgile = function () {
        this.navCtrl.navigateForward('edit-profile');
    };
    HomeResultsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-results',
            template: __webpack_require__(/*! ./home-results.page.html */ "./src/app/pages/home-results/home-results.page.html"),
            styles: [__webpack_require__(/*! ./home-results.page.scss */ "./src/app/pages/home-results/home-results.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_url_service__WEBPACK_IMPORTED_MODULE_2__["UrlService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"],
            _services_getInfos_service__WEBPACK_IMPORTED_MODULE_3__["GetInfosService"]])
    ], HomeResultsPage);
    return HomeResultsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-results-home-results-module.js.map