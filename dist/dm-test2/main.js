(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _modules_subject_subject_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/subject/subject.component */ "./src/app/modules/subject/subject.component.ts");
/* harmony import */ var _modules_subject_subject_detail_subject_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/subject/subject-detail/subject-detail.component */ "./src/app/modules/subject/subject-detail/subject-detail.component.ts");
/* harmony import */ var _modules_subject_subject_deeds_subject_deeds_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/subject/subject-deeds/subject-deeds.component */ "./src/app/modules/subject/subject-deeds/subject-deeds.component.ts");
/* harmony import */ var _modules_comparables_comparables_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/comparables/comparables.component */ "./src/app/modules/comparables/comparables.component.ts");
/* harmony import */ var _modules_comparables_addenda_addenda_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/comparables/addenda/addenda.component */ "./src/app/modules/comparables/addenda/addenda.component.ts");
/* harmony import */ var _modules_comparables_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/comparables/grid/grid.component */ "./src/app/modules/comparables/grid/grid.component.ts");
/* harmony import */ var _modules_comparables_comp_deeds_comp_deeds_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/comparables/comp-deeds/comp-deeds.component */ "./src/app/modules/comparables/comp-deeds/comp-deeds.component.ts");
/* harmony import */ var _modules_comparables_map_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/comparables/map/map.component */ "./src/app/modules/comparables/map/map.component.ts");
/* harmony import */ var _modules_market_conditions_market_conditions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/market-conditions/market-conditions.component */ "./src/app/modules/market-conditions/market-conditions.component.ts");
/* harmony import */ var _modules_market_conditions_graphs_graphs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/market-conditions/graphs/graphs.component */ "./src/app/modules/market-conditions/graphs/graphs.component.ts");
/* harmony import */ var _modules_market_conditions_mc_detail_mc_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/market-conditions/mc-detail/mc-detail.component */ "./src/app/modules/market-conditions/mc-detail/mc-detail.component.ts");
/* harmony import */ var _modules_market_conditions_report_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/market-conditions/report/report.component */ "./src/app/modules/market-conditions/report/report.component.ts");
/* harmony import */ var _modules_market_conditions_import_import_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/market-conditions/import/import.component */ "./src/app/modules/market-conditions/import/import.component.ts");
/* harmony import */ var _modules_comparables_upload_upload_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/comparables/upload/upload.component */ "./src/app/modules/comparables/upload/upload.component.ts");
/* harmony import */ var _modules_subject_subject_search_subject_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/subject/subject-search/subject-search.component */ "./src/app/modules/subject/subject-search/subject-search.component.ts");
/* harmony import */ var _modules_summary_summary_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/summary/summary.component */ "./src/app/modules/summary/summary.component.ts");




















var routes = [
    {
        path: '',
        //component: HomeComponent,
        redirectTo: '/Home',
        pathMatch: 'full'
    },
    {
        path: 'Home',
        component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'Subject',
        component: _modules_subject_subject_component__WEBPACK_IMPORTED_MODULE_4__["SubjectComponent"],
        children: [
            {
                // path: 'detail/:id', component: DetailComponent,
                path: 'detail', component: _modules_subject_subject_detail_subject_detail_component__WEBPACK_IMPORTED_MODULE_5__["SubjectDetailComponent"],
                children: [
                    { path: ':id', component: _modules_subject_subject_detail_subject_detail_component__WEBPACK_IMPORTED_MODULE_5__["SubjectDetailComponent"] },
                    { path: '**', redirectTo: '/Subject/detail/1' }
                ]
            },
            { path: 'deeds', component: _modules_subject_subject_deeds_subject_deeds_component__WEBPACK_IMPORTED_MODULE_6__["SubjectDeedsComponent"] },
            { path: 'search', component: _modules_subject_subject_search_subject_search_component__WEBPACK_IMPORTED_MODULE_18__["SubjectSearchComponent"] },
            { path: '', component: _modules_subject_subject_detail_subject_detail_component__WEBPACK_IMPORTED_MODULE_5__["SubjectDetailComponent"] },
            { path: '**', redirectTo: '/Subject' }
        ]
    },
    {
        path: 'Comparables',
        component: _modules_comparables_comparables_component__WEBPACK_IMPORTED_MODULE_7__["ComparablesComponent"],
        children: [
            { path: 'addenda', component: _modules_comparables_addenda_addenda_component__WEBPACK_IMPORTED_MODULE_8__["AddendaComponent"] },
            { path: 'grid', component: _modules_comparables_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__["GridComponent"] },
            { path: 'deeds', component: _modules_comparables_comp_deeds_comp_deeds_component__WEBPACK_IMPORTED_MODULE_10__["CompDeedsComponent"] },
            { path: 'map', component: _modules_comparables_map_map_component__WEBPACK_IMPORTED_MODULE_11__["MapComponent"] },
            { path: 'upload', component: _modules_comparables_upload_upload_component__WEBPACK_IMPORTED_MODULE_17__["UploadComponent"] },
            { path: '', component: _modules_comparables_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__["GridComponent"] }
        ]
    },
    {
        path: 'market-conditions',
        component: _modules_market_conditions_market_conditions_component__WEBPACK_IMPORTED_MODULE_12__["MarketConditionsComponent"],
        children: [
            { path: 'graphs', component: _modules_market_conditions_graphs_graphs_component__WEBPACK_IMPORTED_MODULE_13__["GraphsComponent"] },
            { path: 'detail', component: _modules_market_conditions_mc_detail_mc_detail_component__WEBPACK_IMPORTED_MODULE_14__["McDetailComponent"] },
            { path: 'report', component: _modules_market_conditions_report_report_component__WEBPACK_IMPORTED_MODULE_15__["ReportComponent"] },
            { path: 'import', component: _modules_market_conditions_import_import_component__WEBPACK_IMPORTED_MODULE_16__["ImportComponent"] },
            { path: '', component: _modules_market_conditions_report_report_component__WEBPACK_IMPORTED_MODULE_15__["ReportComponent"] }
        ]
    },
    {
        path: 'Summary',
        component: _modules_summary_summary_component__WEBPACK_IMPORTED_MODULE_19__["SummaryComponent"]
    },
    {
        path: '**',
        component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] // todo: replace with 404
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"body-container {{hasSubheader ? 'has-subheader' : ''}}\">\r\n\r\n  <div class=\"sidebar expanded\">\r\n    <app-sidebar></app-sidebar>\r\n  </div>\r\n\r\n  <div class=\"body-content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'dm-test2';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _modules_home_files_files_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/home/files/files.component */ "./src/app/modules/home/files/files.component.ts");
/* harmony import */ var _modules_home_files_map_files_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/home/files-map/files-map.component */ "./src/app/modules/home/files-map/files-map.component.ts");
/* harmony import */ var _modules_home_news_news_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/home/news/news.component */ "./src/app/modules/home/news/news.component.ts");
/* harmony import */ var _ui_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
/* harmony import */ var _ui_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ui/sidebar/sidebar.component */ "./src/app/ui/sidebar/sidebar.component.ts");
/* harmony import */ var _modules_home_new_file_new_file_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/home/new-file/new-file.component */ "./src/app/modules/home/new-file/new-file.component.ts");
/* harmony import */ var _modules_home_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/home/analytics/analytics.component */ "./src/app/modules/home/analytics/analytics.component.ts");
/* harmony import */ var _modules_comparables_comparables_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/comparables/comparables.component */ "./src/app/modules/comparables/comparables.component.ts");
/* harmony import */ var _modules_comparables_addenda_addenda_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/comparables/addenda/addenda.component */ "./src/app/modules/comparables/addenda/addenda.component.ts");
/* harmony import */ var _modules_comparables_comp_deeds_comp_deeds_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/comparables/comp-deeds/comp-deeds.component */ "./src/app/modules/comparables/comp-deeds/comp-deeds.component.ts");
/* harmony import */ var _modules_comparables_grid_grid_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/comparables/grid/grid.component */ "./src/app/modules/comparables/grid/grid.component.ts");
/* harmony import */ var _modules_comparables_map_map_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/comparables/map/map.component */ "./src/app/modules/comparables/map/map.component.ts");
/* harmony import */ var _modules_market_conditions_market_conditions_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/market-conditions/market-conditions.component */ "./src/app/modules/market-conditions/market-conditions.component.ts");
/* harmony import */ var _modules_market_conditions_graphs_graphs_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/market-conditions/graphs/graphs.component */ "./src/app/modules/market-conditions/graphs/graphs.component.ts");
/* harmony import */ var _modules_market_conditions_mc_detail_mc_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/market-conditions/mc-detail/mc-detail.component */ "./src/app/modules/market-conditions/mc-detail/mc-detail.component.ts");
/* harmony import */ var _modules_market_conditions_report_report_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modules/market-conditions/report/report.component */ "./src/app/modules/market-conditions/report/report.component.ts");
/* harmony import */ var _modules_subject_subject_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modules/subject/subject.component */ "./src/app/modules/subject/subject.component.ts");
/* harmony import */ var _modules_subject_subject_detail_subject_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modules/subject/subject-detail/subject-detail.component */ "./src/app/modules/subject/subject-detail/subject-detail.component.ts");
/* harmony import */ var _modules_subject_subject_deeds_subject_deeds_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./modules/subject/subject-deeds/subject-deeds.component */ "./src/app/modules/subject/subject-deeds/subject-deeds.component.ts");
/* harmony import */ var _modules_market_conditions_import_import_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./modules/market-conditions/import/import.component */ "./src/app/modules/market-conditions/import/import.component.ts");
/* harmony import */ var _modules_comparables_upload_upload_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./modules/comparables/upload/upload.component */ "./src/app/modules/comparables/upload/upload.component.ts");
/* harmony import */ var _modules_subject_subject_search_subject_search_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./modules/subject/subject-search/subject-search.component */ "./src/app/modules/subject/subject-search/subject-search.component.ts");
/* harmony import */ var _modules_summary_summary_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./modules/summary/summary.component */ "./src/app/modules/summary/summary.component.ts");

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _modules_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _modules_home_files_files_component__WEBPACK_IMPORTED_MODULE_9__["FilesComponent"],
                _modules_home_files_map_files_map_component__WEBPACK_IMPORTED_MODULE_10__["FilesMapComponent"],
                _modules_home_news_news_component__WEBPACK_IMPORTED_MODULE_11__["NewsComponent"],
                _ui_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _ui_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
                _modules_home_new_file_new_file_component__WEBPACK_IMPORTED_MODULE_15__["NewFileComponent"],
                _modules_home_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_16__["AnalyticsComponent"],
                _modules_comparables_comparables_component__WEBPACK_IMPORTED_MODULE_17__["ComparablesComponent"],
                _modules_comparables_addenda_addenda_component__WEBPACK_IMPORTED_MODULE_18__["AddendaComponent"],
                _modules_comparables_comp_deeds_comp_deeds_component__WEBPACK_IMPORTED_MODULE_19__["CompDeedsComponent"],
                _modules_comparables_grid_grid_component__WEBPACK_IMPORTED_MODULE_20__["GridComponent"],
                _modules_comparables_map_map_component__WEBPACK_IMPORTED_MODULE_21__["MapComponent"],
                _modules_market_conditions_market_conditions_component__WEBPACK_IMPORTED_MODULE_22__["MarketConditionsComponent"],
                _modules_market_conditions_graphs_graphs_component__WEBPACK_IMPORTED_MODULE_23__["GraphsComponent"],
                _modules_market_conditions_mc_detail_mc_detail_component__WEBPACK_IMPORTED_MODULE_24__["McDetailComponent"],
                _modules_market_conditions_report_report_component__WEBPACK_IMPORTED_MODULE_25__["ReportComponent"],
                _modules_subject_subject_component__WEBPACK_IMPORTED_MODULE_26__["SubjectComponent"],
                _modules_subject_subject_detail_subject_detail_component__WEBPACK_IMPORTED_MODULE_27__["SubjectDetailComponent"],
                _modules_subject_subject_deeds_subject_deeds_component__WEBPACK_IMPORTED_MODULE_28__["SubjectDeedsComponent"],
                _modules_market_conditions_import_import_component__WEBPACK_IMPORTED_MODULE_29__["ImportComponent"],
                _modules_comparables_upload_upload_component__WEBPACK_IMPORTED_MODULE_30__["UploadComponent"],
                _modules_subject_subject_search_subject_search_component__WEBPACK_IMPORTED_MODULE_31__["SubjectSearchComponent"],
                _modules_summary_summary_component__WEBPACK_IMPORTED_MODULE_32__["SummaryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyAs_Y6kGdxcrtXwIaNvaexYCMsiw4o22i0' })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/models/mocks/mock-data-source.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/models/mocks/mock-data-source.ts ***!
  \*******************************************************/
/*! exports provided: DATASOURCES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATASOURCES", function() { return DATASOURCES; });
var DATASOURCES = [
    { displayName: 'WFRMLS', type: 'MLS' },
    { displayName: 'CoreLogic Public Records', type: 'PublicRecords' }
];


/***/ }),

/***/ "./src/app/core/models/mocks/mock-file-info.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/models/mocks/mock-file-info.ts ***!
  \*****************************************************/
/*! exports provided: FILEINFOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILEINFOS", function() { return FILEINFOS; });
var FILEINFOS = [
    { id: 1, fileName: '123-45-6789', address: { addressLine1: '929 S Arbor Way', addressLine2: '', city: 'Layton', state: 'UT', zip: '84041' }, fileType: '1004', lastModified: new Date(new Date(Date.now()).setHours(new Date(Date.now()).getHours() - 3)), exportCount: 0, exportTargets: ['ACI'] },
    { id: 2, fileName: '456-78-9123', address: { addressLine1: '325 E Gordon Ave.', addressLine2: '', city: 'Layton', state: 'UT', zip: '84041' }, fileType: '1073', lastModified: new Date(new Date(Date.now()).setHours(new Date(Date.now()).getHours() - 49)), exportCount: 4, exportTargets: ['a la mode'] },
    { id: 3, fileName: '789-12-3456', address: { addressLine1: '498 W 2457 N', addressLine2: '', city: 'Layton', state: 'UT', zip: '84041' }, fileType: '1004', lastModified: new Date(new Date(Date.now()).setHours(new Date(Date.now()).getHours() - 95)), exportCount: 2, exportTargets: ['a la mode'] },
    { id: 4, fileName: '789-12-3456', address: { addressLine1: '765 E Gordon Ave.', addressLine2: '', city: 'Layton', state: 'UT', zip: '84041' }, fileType: '1099', lastModified: new Date(new Date(Date.now()).setHours(new Date(Date.now()).getHours() - 116)), exportCount: 3, exportTargets: ['ACI'] },
    { id: 5, fileName: '654-78-3219', address: { addressLine1: '2939 N 725 W', addressLine2: '', city: 'Layton', state: 'UT', zip: '84041' }, fileType: '1004', lastModified: new Date(new Date(Date.now()).setHours(new Date(Date.now()).getHours() - 260)), exportCount: 1, exportTargets: ['ACI'] },
    { id: 6, fileName: '987-32-1654', address: { addressLine1: '1435 N Hill Field Rd', addressLine2: '', city: 'Layton', state: 'UT', zip: '84041' }, fileType: '1004', lastModified: new Date(new Date(Date.now()).setHours(new Date(Date.now()).getHours() - 750)), exportCount: 2, exportTargets: ['ACI'] },
    { id: 7, fileName: '122-44-9877', address: { addressLine1: '2900 N 1100 W', addressLine2: '', city: 'Layton', state: 'UT', zip: '84041' }, fileType: '1099', lastModified: new Date(new Date(Date.now()).setHours(new Date(Date.now()).getHours() - 3222)), exportCount: 2, exportTargets: ['a la mode'] },
    { id: 8, fileName: '546-88-5555_urar', address: { addressLine1: '2421 N 490 W', addressLine2: '', city: 'Layton', state: 'UT', zip: '84041' }, fileType: '1004', lastModified: new Date(new Date(Date.now()).setHours(new Date(Date.now()).getHours() - 9222)), exportCount: 3, exportTargets: ['ACI'] }
];


/***/ }),

/***/ "./src/app/core/models/mocks/mock-news-feed.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/models/mocks/mock-news-feed.ts ***!
  \*****************************************************/
/*! exports provided: NEWSFEED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEWSFEED", function() { return NEWSFEED; });
var NEWSFEED = [
    {
        "title": "DataMaster for Appraisers",
        "link": "",
        "feedDisplayName": "DataMaster",
        "description": "The Right Data | The Right Time | The Right Decision",
        "items": [
            {
                "title": "Confidentiality in Appraising: Definitions and Guidance",
                "link": "https://www.datamasterusa.com/confidentiality-in-appraising-definitions-and-guidance/",
                "commentsLink": null,
                "publishDate": new Date("2019-06-06T21:33:35-06:00"),
                "creator": "Marty Hamilton",
                "description": "Just how important is confidentiality to an appraiser? Let's put it this way: You could violate rules and regulations and put your license at risk.\nThe post Confidentiality in Appraising: Definitions and Guidance appeared first on DataMaster for Appraisers.\n",
                "category": "Appraisal Business",
                "guid": "http://www.datamasterusa.com/?p=10127"
            },
            {
                "title": "Advisory Opinion 37 – USPAP & Technology",
                "link": "https://www.datamasterusa.com/advisory-opinion-37-uspap-technology/",
                "commentsLink": null,
                "publishDate": new Date("2019-05-28T08:22:25-06:00"),
                "creator": "Marty Hamilton",
                "description": "Advisory Opinion 37, Computer Assisted Valuation Tools was originally included in the 2018-2019 version of the Uniform Standards of Professional Appraisal Practice (USPAP). So, what does it mean for you? AO-37 clarifies the scope of computer-assisted valuation tools related to appraisers and their responsibilities. These tools gather and analyze market data, and when used correctly, [&#8230;]\nThe post Advisory Opinion 37 &#8211; USPAP &#038; Technology appeared first on DataMaster for Appraisers.\n",
                "category": "Uncategorized",
                "guid": "http://www.datamasterusa.com/?p=10352"
            },
            {
                "title": "3 Articles to Read Today to be a Better Appraiser",
                "link": "https://www.datamasterusa.com/3-articles-to-read-today-to-be-a-better-appraiser/",
                "commentsLink": null,
                "publishDate": new Date("2019-04-01T10:35:26-06:00"),
                "creator": "Marty Hamilton",
                "description": "As appraisers, we don&#8217;t often talk about delighting our clients and customers. We rely on our businesses to let us know whether our clients are satisfied through the number of orders we receive. We also rely on underwriters to give us feedback by suggesting additional comps (which we&#8217;ve probably already considered) or accepting the valuation [&#8230;]\nThe post 3 Articles to Read Today to be a Better Appraiser appeared first on DataMaster for Appraisers.\n",
                "category": "Uncategorized",
                "guid": "http://www.datamasterusa.com/?p=9174"
            },
            {
                "title": "6 Ways to Grow your Appraisal Business",
                "link": "https://www.datamasterusa.com/6-ways-to-grow-your-appraisal-business/",
                "commentsLink": null,
                "publishDate": new Date("2019-03-21T21:00:33-06:00"),
                "creator": "Marty Hamilton",
                "description": "When it comes to your appraisal business, there are a number of things you can do to make yourself stand out. Although they probably won&#8217;t work overnight, they can help you establish a culture of grown and to home in on what&#8217;s important to you. I&#8217;d encourage you to experiment where you feel comfortable and [&#8230;]\nThe post 6 Ways to Grow your Appraisal Business appeared first on DataMaster for Appraisers.\n",
                "category": "Appraisal Business",
                "guid": "http://www.datamasterusa.com/?p=8920"
            },
            {
                "title": "Is Self-Improvement Important to Your Business?",
                "link": "https://www.datamasterusa.com/is-self-improvement-important-to-your-business/",
                "commentsLink": null,
                "publishDate": new Date("2019-03-18T12:33:24-06:00"),
                "creator": "Marty Hamilton",
                "description": "When I think of self-improvement, the first thing I think of is the story of the Woodcutter. As the story goes, there once was a strong woodcutter who needed a job and he asked a local timber merchant for a job. The merchant had heard good things about the woodcutter and gave him a good [&#8230;]\nThe post Is Self-Improvement Important to Your Business? appeared first on DataMaster for Appraisers.\n",
                "category": "Appraisal Business",
                "guid": "http://www.datamasterusa.com/?p=8885"
            },
            {
                "title": "Here’s What I Do To Get Myself Out Of A Rut",
                "link": "https://www.datamasterusa.com/rut/",
                "commentsLink": null,
                "publishDate": new Date("2018-12-07T13:40:35-07:00"),
                "creator": "Marty Hamilton",
                "description": "Who hasn&#8217;t been in a rut? It&#8217;s one of the most common things in life. You get into a groove in your life and then that groove gets deeper, and you&#8217;re in a rut. It kind of seems unfair. But, as I tell my children, life isn&#8217;t always fair. Now what? Are you going to [&#8230;]\nThe post Here&#8217;s What I Do To Get Myself Out Of A Rut appeared first on DataMaster for Appraisers.\n",
                "category": "Appraisal Business",
                "guid": "http://www.datamasterusa.com/?p=8031"
            },
            {
                "title": "Five Ways Appraisers Can Be More Efficient",
                "link": "https://www.datamasterusa.com/five-ways-efficient/",
                "commentsLink": null,
                "publishDate": new Date("2018-11-07T09:07:53-07:00"),
                "creator": "Marty Hamilton",
                "description": "We all do things that make us less efficient than we could be. Most of us try to be as useful as possible, so we don&#8217;t waste time or energy. There are three categories of things we do that hinder our efficiency and effectiveness. First, there are things we know we could (and should) change. [&#8230;]\nThe post Five Ways Appraisers Can Be More Efficient appeared first on DataMaster for Appraisers.\n",
                "category": "Appraisal Business",
                "guid": "http://www.datamasterusa.com/?p=7994"
            },
            {
                "title": "(Not) Another Networking Article!",
                "link": "https://www.datamasterusa.com/not-another-networking-article/",
                "commentsLink": null,
                "publishDate": new Date("2018-11-02T09:56:51-06:00"),
                "creator": "Marty Hamilton",
                "description": "When business is slow, the first thing anyone will tell you to do is go networking, as if it&#8217;s something fun that everyone enjoys. Whenever I hear people talking about networking like a fun event, I think of it as trick or treating, but instead of good candy, all you get are regular-sized Bit O&#8217;Honeys. [&#8230;]\nThe post (Not) Another Networking Article! appeared first on DataMaster for Appraisers.\n",
                "category": "Appraisal Business",
                "guid": "http://www.datamasterusa.com/?p=7878"
            },
            {
                "title": "5 Ways to Future-Proof Your Appraisal Business",
                "link": "https://www.datamasterusa.com/future-proof-appraisal-business/",
                "commentsLink": null,
                "publishDate": new Date("2018-08-28T12:43:41-06:00"),
                "creator": "Marty Hamilton",
                "description": "Last week, Jared Preisler, SRA, DataMaster&#8217;s Chief Appraiser and I held an hour-long webinar/podcast to address how you can build your appraisal business to withstand changes in the real estate market. We are in the midst of a technological revolution in appraising involving artificial intelligence (AI) and automation. These changes present unique challenges for appraisers. [&#8230;]\nThe post 5 Ways to Future-Proof Your Appraisal Business appeared first on DataMaster for Appraisers.\n",
                "category": "Appraisal Business",
                "guid": "http://www.datamasterusa.com/?p=7634"
            },
            {
                "title": "The Big Black Box; The Difference Between Big Data and Big Analytics",
                "link": "https://www.datamasterusa.com/big-data/",
                "commentsLink": null,
                "publishDate": new Date("2018-06-12T05:45:04-06:00"),
                "creator": "Marty Hamilton",
                "description": "He stood before the three men and one woman with a bead of sweat creeping down his left temple.  It was not that their presence was particularly ominous in appearance. After all, they were seated on metal folding chairs behind a plastic banquet table.  No, his trepidation was more about what they represented and even [&#8230;]\nThe post The Big Black Box; The Difference Between Big Data and Big Analytics appeared first on DataMaster for Appraisers.\n",
                "category": "Data",
                "guid": "http://www.datamasterusa.com/?p=7556"
            }
        ]
    },
    {
        "title": "www.nar.realtor - Appraisal & Valuation",
        "link": "https://www.nar.realtor/taxonomy/term/25816",
        "feedDisplayName": "NAR Appraisal & Valuation",
        "description": "",
        "items": [
            {
                "title": "NAR Policy is All About Appraiser Independence",
                "link": "https://www.nar.realtor/articles/nar-policy-is-all-about-appraiser-independence",
                "commentsLink": null,
                "publishDate": new Date("2019-06-17T12:02:52-06:00"),
                "creator": "",
                "description": "The chair and co-chair of NAR’s Real Property Valuation Committee made a few remarks on&nbsp;video about NAR’s appraiser independence policy last week during the 2018 REALTORS® Legislative Meetings in Washington.&nbsp;\n",
                "category": "",
                "guid": "180221 at https://www.nar.realtor"
            },
            {
                "title": "Monday Minute: Week of June 17, 2019",
                "link": "https://www.nar.realtor/monday-minute/monday-minute-week-of-june-17-2019",
                "commentsLink": null,
                "publishDate": new Date("2019-06-14T16:06:06-06:00"),
                "creator": "",
                "description": "Both the House and Senate are in session this week. What issues should REALTORS® follow? Terrorism Risk Insurance Program Reauthorization (NAR Statement); Unmanned Aircraft Systems Security; Collection of Beneficial Ownership Information (NAR Questions Likely); and Home Appraisal Industry (NAR Staff Attending).",
                "category": "",
                "guid": "180219 at https://www.nar.realtor"
            },
            {
                "title": "North Dakota Appraisal Requirement Waiver Request",
                "link": "https://www.nar.realtor/washington-report/north-dakota-appraisal-requirement-waiver-request",
                "commentsLink": null,
                "publishDate": new Date("2019-05-31T08:10:40-06:00"),
                "creator": "",
                "description": "Comments on the North Dakota's request for a waiver of appraiser credentialing requirements must be received by the Appraisal Subcommittee (ASC) of the Federal Financial Institutions Examination Council (FFIEC) on or before July 1, 2019.",
                "category": "",
                "guid": "173267 at https://www.nar.realtor"
            },
            {
                "title": "VA Appraisal Request Change",
                "link": "https://www.nar.realtor/washington-report/va-appraisal-request-change",
                "commentsLink": null,
                "publishDate": new Date("2019-05-28T13:44:42-06:00"),
                "creator": "",
                "description": "As of May 16, 2019, the Department of Veteran's Affairs will require that the ordering of an appraisal related to the VA Home Loan program must have the Certificate of Eligibility (COE) be in&nbsp; \"Active or Pending\" status.",
                "category": "",
                "guid": "173249 at https://www.nar.realtor"
            },
            {
                "title": "Are Hybrid Appraisals Becoming the New Normal In Real Estate Transactions?",
                "link": "https://www.nar.realtor/newsroom/are-hybrid-appraisals-becoming-the-new-normal-in-real-estate-transactions",
                "commentsLink": null,
                "publishDate": new Date("2019-05-15T06:59:12-06:00"),
                "creator": "",
                "description": "With advancements in technology and the rise of big data, alternatives to the traditional appraisal field are beginning to become more prevalent in the U.S.",
                "category": "",
                "guid": "173206 at https://www.nar.realtor"
            },
            {
                "title": "NAR Comments on Appraisal Threshold",
                "link": "https://www.nar.realtor/washington-report/nar-comments-on-appraisal-threshold-0",
                "commentsLink": null,
                "publishDate": new Date("2019-02-11T13:36:18-07:00"),
                "creator": "",
                "description": "NAR submitted comments to the Office of the Comptroller of the Currency, the Board of Governors of the Federal Reserve System, and the Federal Deposit Insurance Corporation (collectively “the Agencies”) on a the threshold for requiring an appraisal in commercial real estate transactions to $400,000 from the current level of $250,000.",
                "category": "",
                "guid": "172664 at https://www.nar.realtor"
            },
            {
                "title": "In-Depth on NAR Commercial Members Work By Various Property Types",
                "link": "https://www.nar.realtor/economists-outlook/in-depth-on-nar-commercial-members-work-by-various-property-types",
                "commentsLink": null,
                "publishDate": new Date("2019-01-25T10:42:55-07:00"),
                "creator": "",
                "description": "In 2017, NAR commercial members sold a median of nine industrial properties and eight office spaces.",
                "category": "",
                "guid": "179006 at https://www.nar.realtor"
            },
            {
                "title": "The Voice for Real Estate 94: Shutdown Rental Income, Committees",
                "link": "https://www.nar.realtor/the-voice-for-real-estate/94-shutdown-rental-income-committees",
                "commentsLink": null,
                "publishDate": new Date("2019-01-23T15:40:22-07:00"),
                "creator": "",
                "description": "A review of IRS guidance on rental income and the 20% income deduction. Plus, Vince Malta speaks before the House Financial Services Committee.",
                "category": "",
                "guid": "172602 at https://www.nar.realtor"
            },
            {
                "title": "Window to the Law: Working with Appraisers",
                "link": "https://www.nar.realtor/window-to-the-law/working-with-appraisers",
                "commentsLink": null,
                "publishDate": new Date("2019-01-02T13:56:47-07:00"),
                "creator": "",
                "description": "Charlie Lee discusses best practices for working with appraisers and the kind of communications that real estate professionals can have with appraisers.",
                "category": "",
                "guid": "172525 at https://www.nar.realtor"
            },
            {
                "title": "Third Party Liability: 2018 Yearly Update",
                "link": "https://www.nar.realtor/legal-pulse/third-party-liability-2018-yearly-update",
                "commentsLink": null,
                "publishDate": new Date("2018-12-19T15:27:12-07:00"),
                "creator": "",
                "description": "In this section, we examine the liability of inspectors, appraisers, and other third parties involved in real estate transactions.",
                "category": "",
                "guid": "172502 at https://www.nar.realtor"
            }
        ]
    },
    {
        "title": "Appraisal Institute News",
        "link": "https://www.appraisalinstitute.org/news/",
        "feedDisplayName": "Appraisal Institute Industry News",
        "description": "",
        "items": [
            {
                "title": "Properties Located in Opportunity Zones Show Sales Growth: Real Capital Analytics ",
                "link": "https://www.globest.com/2019/06/10/are-deals-moving-in-opportunity-zones-after-all/",
                "commentsLink": null,
                "publishDate": new Date("2019-06-19T06:30:00-06:00"),
                "creator": "Justin ,Richards",
                "description": "Interest in properties located within opportunity zones is rising, which is spurring owners of lower-quality assets to finally sell, according to a study released June 10 by Real Capital Analytics, GlobeSt.com reported. The study noted, however, many of the properties have deferred maintenance and a [...]",
                "category": "",
                "guid": ""
            },
            {
                "title": "Freddie Mac Introduces CMBS Program Backed by Green Bonds ",
                "link": "https://www.bloomberg.com/news/articles/2019-06-10/freddie-mac-targeting-esg-investors-with-green-mortgage-bonds",
                "commentsLink": null,
                "publishDate": new Date("2019-06-19T06:30:00-06:00"),
                "creator": "Justin ,Richards",
                "description": "Freddie Mac on June 10 unveiled a commercial mortgage-backed security program backed by loans made to apartment building owners who perform sustainable property improvements, Bloomberg reported. The green bond will exclusively securitize loans made through Freddie’s Green Advantage program.",
                "category": "",
                "guid": ""
            },
            {
                "title": "FHFA Director to Congress: End Fannie, Freddie Conservatorship",
                "link": "https://www.bloomberg.com/news/articles/2019-06-12/fannie-freddie-regulator-asks-congress-to-help-end-u-s-control",
                "commentsLink": null,
                "publishDate": new Date("2019-06-19T06:30:00-06:00"),
                "creator": "Justin ,Richards",
                "description": "Fannie Mae and Freddie Mac should be returned to private hands, and doing so could reduce taxpayer risk, promote competition and support homeownership, Federal Housing Finance Agency Director Mark Calabria stated June 11 in a letter accompanying his annual report to Congress, Bloomberg reported. Cal [...]",
                "category": "",
                "guid": ""
            },
            {
                "title": "40% of Surveyed Economists Said They Expect a Fed Rate Drop Within the Next Year",
                "link": "https://www.bankrate.com/personal-finance/smart-money/economic-indicator-survey-june-2019/",
                "commentsLink": null,
                "publishDate": new Date("2019-06-12T06:30:00-06:00"),
                "creator": "Justin ,Richards",
                "description": "Forty percent of economists who responded to Bankrate’s Second-Quarter Economic Indicator survey released June 6 said they believe that the Federal Reserve will lower interest rates in the next year. Respondents cited escalating U.S. tensions with China, slowing international growth and depleting fi [...]",
                "category": "",
                "guid": ""
            },
            {
                "title": "Fannie, Freddie Launch Uniform Mortgage-backed Security ",
                "link": "https://themreport.com/daily-dose/06-03-2019/uniform-mortgage-backed-security-launches",
                "commentsLink": null,
                "publishDate": new Date("2019-06-12T06:30:00-06:00"),
                "creator": "Justin ,Richards",
                "description": "Fannie Mae and Freddie Mac on June 3 launched the Uniform Mortgage-Backed Security, completing the their single-security initiative, MReport reported. The government-sponsored enterprises expect more efficiency and liquidity in the housing market, but critics argue that the UMBS won’t lower mortgage [...]",
                "category": "",
                "guid": ""
            },
            {
                "title": "Local Governments Have Worst Homebuilding Regulations: FHFA",
                "link": "https://www.housingwire.com/articles/49247-calabria-calls-on-cities-to-deregulate-to-spur-more-home-building",
                "commentsLink": null,
                "publishDate": new Date("2019-06-12T06:30:00-06:00"),
                "creator": "Justin ,Richards",
                "description": "Local municipalities need to reduce the number of regulations and the costs associated with them in order to spur homebuilding, Mark Calabria, director of the Federal Housing Finance Agency, told attendees June 3 at a conference in Washington, HousingWire reported. Calabria said the supply of homes  [...]",
                "category": "",
                "guid": ""
            },
            {
                "title": "PACE Financing, HMDA Act Among Top Rulemaking Priorities for CFPB for the Year",
                "link": "https://www.consumerfinance.gov/about-us/blog/spring-2019-rulemaking-agenda/",
                "commentsLink": null,
                "publishDate": new Date("2019-06-05T06:30:00-06:00"),
                "creator": "Justin ,Richards",
                "description": "The Consumer Financial Protection Bureau published its rulemaking agenda May 22, revealing that two of the biggest regulatory matters it will focus on over the next year will be financing for property assessed clean energy loans and new rules related to the Home Mortgage Disclosure Act. The agenda c [...]",
                "category": "",
                "guid": ""
            },
            {
                "title": "Louisiana Appraisers May Start Performing Evaluations Aug. 1",
                "link": "https://www.appraisalinstitute.org/ano/louisiana-appraisers-may-start-performing-evaluations-aug-1-/?pg=2&F_All=y",
                "commentsLink": null,
                "publishDate": new Date("2019-06-05T06:30:00-06:00"),
                "creator": "Justin ,Richards",
                "description": "Louisiana Gov. John Bel Edwards on May 30 signed HB 340, legislation that allows appraisers in the state to provide evaluations for federally insured depository institutions. The law takes effect Aug. 1.\n\n",
                "category": "",
                "guid": ""
            },
            {
                "title": "Licensed Alabama Appraisers Now Can Begin Performing Evaluations",
                "link": "https://www.appraisalinstitute.org/ano/licensed-alabama-appraisers-now-can-begin-performing-evaluations/?pg=2&F_All=y",
                "commentsLink": null,
                "publishDate": new Date("2019-06-05T06:30:00-06:00"),
                "creator": "Justin ,Richards",
                "description": "Alabama enacted legislation, effective May 29, allowing state-licensed appraisers to perform evaluations for federally regulated financial institutions.\n\n&#8203;",
                "category": "",
                "guid": ""
            },
            {
                "title": "Government Agencies to Improve Relationship with Lenders: FHA ",
                "link": "http://bit.ly/30RqUij",
                "commentsLink": null,
                "publishDate": new Date("2019-05-29T11:05:00-06:00"),
                "creator": "Jay,Scheider",
                "description": "Regulatory compliance standards are discouraging lenders from working with various government housing agencies, Brian Montgomery, Federal Housing Administration commissioner, told attendees May 23 at a Mortgage Bankers Association conference, MBA NewsLink reported. Montgomery said the agencies are s [...]",
                "category": "",
                "guid": ""
            },
            {
                "title": "Survey Shows 47% of Homebuyers Affected by Tax Changes",
                "link": "https://www.redfin.com/blog/how-tax-reform-impacts-homebuyers",
                "commentsLink": null,
                "publishDate": new Date("2019-05-29T11:03:00-06:00"),
                "creator": "Jay,Scheider",
                "description": "Tax changes affected the house hunt of 47% of potential homebuyers this year, down from 56% last year when the effects of tax reform were mostly still speculative and not yet realized in paychecks, the online real estate marketplace Redfin reported in a survey released May 16.",
                "category": "",
                "guid": ""
            },
            {
                "title": "Mortgage Industry May Struggle with 'Zombie' LIBOR After Phaseout, Reuters Reports ",
                "link": "https://www.reuters.com/article/usa-libor-mortgages/zombie-libor-seen-besetting-us-mortgage-industry-idUSL2N22X19P",
                "commentsLink": null,
                "publishDate": new Date("2019-05-29T10:59:00-06:00"),
                "creator": "Jay,Scheider",
                "description": "The nation's mortgage industry probably will still have to deal with a \"zombie\" version of the London Interbank Offered Rate even after the benchmark is phased out in 2021, Reuters reported May 21. The trade group Alternative Reference Rates Committee has introduced guidelines, backed by the Federal [...]",
                "category": "",
                "guid": ""
            },
            {
                "title": "US Office Sector Steady During First Quarter, Bodes Well for New Construction: JLL",
                "link": "https://www.nreionline.com/office/office-sector-got-good-start-first-quarter-new-deliveries-are-worry",
                "commentsLink": null,
                "publishDate": new Date("2019-05-15T06:30:00-06:00"),
                "creator": "Justin ,Richards",
                "description": "The U.S. office sector proved resilient during the first quarter, absorbing around 14 million square feet — even after the delivery of 6.8 million square feet of newly constructed space, according to real estate firm JLL, National Real Estate Investor reported May 9. An additional 110.4 million squa [...]",
                "category": "",
                "guid": ""
            },
            {
                "title": "Rural Communities Likely to Continue Declining, Data Shows",
                "link": "https://www.citylab.com/perspective/2019/05/most-of-americas-rural-areas-are-doomed-to-decline/588883/",
                "commentsLink": null,
                "publishDate": new Date("2019-05-15T06:30:00-06:00"),
                "creator": "Justin ,Richards",
                "description": "Rural areas, which comprise 42 percent of the nation’s counties, suffered significant population and job losses due to the Great Recession and likely won’t recover, leaving their housing and commercial bases to struggle, according to Commerce Department data, CityLab reported May 7. Communities in t [...]",
                "category": "",
                "guid": ""
            },
            {
                "title": "GSEs Can End Oversight Without Congress Approval: FHFA",
                "link": "https://www.bloomberg.com/news/articles/2019-05-08/fannie-freddie-may-be-released-without-congress-calabria-says",
                "commentsLink": null,
                "publishDate": new Date("2019-05-15T06:30:00-06:00"),
                "creator": "Justin ,Richards",
                "description": "Fannie Mae and Freddie Mac can be freed from government oversight even if Congress doesn’t pass a housing-financial overhaul involving the government-sponsored enterprises, the Federal Housing Finance Agency Director, Mark Calabria, told Bloomberg May 8. He noted that Congress will get at least an e [...]",
                "category": "",
                "guid": ""
            },
            {
                "title": "Hospitality Properties in the South, West Show Strong Fundamentals: Marcus & Millichap ",
                "link": "https://www.nreionline.com/hotel/western-and-southern-hotels-lead-rest-us",
                "commentsLink": null,
                "publishDate": new Date("2019-05-08T06:30:00-06:00"),
                "creator": "Justin ,Richards",
                "description": "Hospitality properties in the south and west are outperforming those in other U.S. markets, and attracting investment dollars thanks to growth in revenue per room and occupancy rates, according to real estate firm Marcus & Millichap, National Real Estate Investor reported April 29. Texas is expected [...]",
                "category": "",
                "guid": ""
            },
            {
                "title": "Rockefeller Center to Add 200 Guest Rooms in Airbnb Deal ",
                "link": "https://www.bloomberg.com/news/articles/2019-04-29/airbnb-to-offer-200-new-luxury-suites-at-rockefeller-plaza",
                "commentsLink": null,
                "publishDate": new Date("2019-05-08T06:30:00-06:00"),
                "creator": "Justin ,Richards",
                "description": "Airbnb and real estate firm RXR Realty announced on April 29 a deal to convert 10 stories in New York City’s iconic Rockefeller Plaza to short-term rental units, Bloomberg reported. The project will create 200 suites inside the art deco high-rise, as well as meeting and events spaces, collaborative  [...]",
                "category": "",
                "guid": ""
            },
            {
                "title": "Generation Z May Revive Shopping Malls, ICSC Study Says",
                "link": "https://www.bloomberg.com/news/articles/2019-04-25/are-u-s-malls-dead-not-if-gen-z-keeps-shopping-the-way-they-do",
                "commentsLink": null,
                "publishDate": new Date("2019-05-08T06:30:00-06:00"),
                "creator": "Justin ,Richards",
                "description": "Generation Z may save the mall, according to a study from the International Council of Shopping Centers, Bloomberg reported April 25. Gen Z (those aged 7 to 22) prefer shopping in-store rather than online, and about 95% visited a mall during a three-month period in 2018 as opposed to 75% of millenni [...]",
                "category": "",
                "guid": ""
            },
            {
                "title": "Outlet Centers Bring Stability to Otherwise Shaky Retail Sector, Consulting Firm Reports",
                "link": "https://www.nreionline.com/retail/are-outlet-centers-immune-retail-apocalypse-or-are-they-next",
                "commentsLink": null,
                "publishDate": new Date("2019-05-01T06:30:00-06:00"),
                "creator": "Justin ,Richards",
                "description": "Outlet centers remain a bright spot in the retail sector, according to consulting company Outlet Resource Group, National Real Estate Investor reported April 25. There are roughly 200 outlet centers in the U.S., with an average vacancy rate of 3.6%, compared to 1,100 regional and superregional malls [...]",
                "category": "",
                "guid": ""
            },
            {
                "title": "Retail, Office Net Lease Cap Rates Rise: Boulder Group",
                "link": "https://www.nreionline.com/net-lease/cap-rates-net-lease-sector-continue-inch",
                "commentsLink": null,
                "publishDate": new Date("2019-05-01T06:30:00-06:00"),
                "creator": "Justin ,Richards",
                "description": "Cap rates on net lease retail properties increased 2 basis points in the first quarter to 6.37 percent while cap rates on net lease office assets jumped 8 basis points to 7.1 percent, according to The Boulder Group investment firm, National Real Estate Investor reported April 22.\n\n",
                "category": "",
                "guid": ""
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/core/models/mocks/mock-user-info.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/models/mocks/mock-user-info.ts ***!
  \*****************************************************/
/*! exports provided: USERINFO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERINFO", function() { return USERINFO; });
var USERINFO = {
    firstName: 'Rick',
    lastName: 'Lifferth',
    companyName: 'Lifferth-Lawson Appraisal',
    username: 'riclif@datamster.io',
    email: 'riclif@datamaster.io',
    title: 'Appraiser',
};


/***/ }),

/***/ "./src/app/core/services/data-source.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/data-source.service.ts ***!
  \******************************************************/
/*! exports provided: DataSourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceService", function() { return DataSourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_mocks_mock_data_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/mocks/mock-data-source */ "./src/app/core/models/mocks/mock-data-source.ts");




var DataSourceService = /** @class */ (function () {
    function DataSourceService() {
    }
    DataSourceService.prototype.getDataSources = function () {
        // TODO: Get this from an API
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_models_mocks_mock_data_source__WEBPACK_IMPORTED_MODULE_3__["DATASOURCES"]);
    };
    DataSourceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataSourceService);
    return DataSourceService;
}());



/***/ }),

/***/ "./src/app/core/services/file-info.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/file-info.service.ts ***!
  \****************************************************/
/*! exports provided: FileInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInfoService", function() { return FileInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_mocks_mock_file_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/mocks/mock-file-info */ "./src/app/core/models/mocks/mock-file-info.ts");




var FileInfoService = /** @class */ (function () {
    function FileInfoService() {
    }
    FileInfoService.prototype.getFileInfos = function () {
        // TODO: Get this from an API
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_models_mocks_mock_file_info__WEBPACK_IMPORTED_MODULE_3__["FILEINFOS"]);
    };
    FileInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FileInfoService);
    return FileInfoService;
}());



/***/ }),

/***/ "./src/app/core/services/header-nav.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/services/header-nav.service.ts ***!
  \*****************************************************/
/*! exports provided: HeaderNavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNavService", function() { return HeaderNavService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var HeaderNavService = /** @class */ (function () {
    function HeaderNavService() {
        this.isNavVisible = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    HeaderNavService.prototype.getShowNav = function () {
        return this.isNavVisible.asObservable();
    };
    HeaderNavService.prototype.setShowNav = function (activatedParentRoute) {
        switch (activatedParentRoute) {
            case 'Subject':
            case 'Comparables':
            case 'market-conditions':
            case 'Summary': {
                this.isNavVisible.next(true);
                break;
            }
            default:
                this.isNavVisible.next(false);
                break;
        }
    };
    HeaderNavService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderNavService);
    return HeaderNavService;
}());



/***/ }),

/***/ "./src/app/core/services/news.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/news.service.ts ***!
  \***********************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_mocks_mock_news_feed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/mocks/mock-news-feed */ "./src/app/core/models/mocks/mock-news-feed.ts");






var NewsService = /** @class */ (function () {
    function NewsService(http) {
        this.http = http;
    }
    NewsService.prototype.getNewsFeed = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_models_mocks_mock_news_feed__WEBPACK_IMPORTED_MODULE_5__["NEWSFEED"]); // Mock
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].newsFeedUrl + '/all';
        var requestOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Controll-Allow-Origin': '*' }) };
        var results = this.http.get(url, requestOptions); // I don't thing this will work - need to scrub the data
        return results; // TODO:  Need to normalize the results 
    };
    NewsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "./src/app/core/services/sidebar-logo.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/sidebar-logo.service.ts ***!
  \*******************************************************/
/*! exports provided: SidebarLogoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLogoService", function() { return SidebarLogoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SidebarLogoService = /** @class */ (function () {
    function SidebarLogoService() {
        this.isSbExpanded = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.sidebarWidth = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    SidebarLogoService.prototype.getSidebarExpanded = function () {
        return this.isSbExpanded.asObservable();
    };
    SidebarLogoService.prototype.getSidebarWidth = function () {
        return this.sidebarWidth.asObservable();
    };
    SidebarLogoService.prototype.setSidebarExpanded = function (isExpanded) {
        this.isSbExpanded.next(isExpanded);
    };
    SidebarLogoService.prototype.setSidebarWidth = function (sidebarWidth) {
        this.sidebarWidth.next(sidebarWidth);
    };
    SidebarLogoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarLogoService);
    return SidebarLogoService;
}());



/***/ }),

/***/ "./src/app/core/services/user-info.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/user-info.service.ts ***!
  \****************************************************/
/*! exports provided: UserInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoService", function() { return UserInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_mocks_mock_user_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/mocks/mock-user-info */ "./src/app/core/models/mocks/mock-user-info.ts");




var UserInfoService = /** @class */ (function () {
    function UserInfoService() {
    }
    UserInfoService.prototype.getUserInfo = function () {
        // TODO: Get this from an API
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_models_mocks_mock_user_info__WEBPACK_IMPORTED_MODULE_3__["USERINFO"]);
    };
    UserInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserInfoService);
    return UserInfoService;
}());



/***/ }),

/***/ "./src/app/modules/comparables/addenda/addenda.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/comparables/addenda/addenda.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  addenda works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/comparables/addenda/addenda.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/comparables/addenda/addenda.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tcGFyYWJsZXMvYWRkZW5kYS9hZGRlbmRhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/comparables/addenda/addenda.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/comparables/addenda/addenda.component.ts ***!
  \******************************************************************/
/*! exports provided: AddendaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddendaComponent", function() { return AddendaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddendaComponent = /** @class */ (function () {
    function AddendaComponent() {
    }
    AddendaComponent.prototype.ngOnInit = function () {
    };
    AddendaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addenda',
            template: __webpack_require__(/*! ./addenda.component.html */ "./src/app/modules/comparables/addenda/addenda.component.html"),
            styles: [__webpack_require__(/*! ./addenda.component.scss */ "./src/app/modules/comparables/addenda/addenda.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddendaComponent);
    return AddendaComponent;
}());



/***/ }),

/***/ "./src/app/modules/comparables/comp-deeds/comp-deeds.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/comparables/comp-deeds/comp-deeds.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  comp-deeds works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/comparables/comp-deeds/comp-deeds.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/comparables/comp-deeds/comp-deeds.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tcGFyYWJsZXMvY29tcC1kZWVkcy9jb21wLWRlZWRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/comparables/comp-deeds/comp-deeds.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/comparables/comp-deeds/comp-deeds.component.ts ***!
  \************************************************************************/
/*! exports provided: CompDeedsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompDeedsComponent", function() { return CompDeedsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CompDeedsComponent = /** @class */ (function () {
    function CompDeedsComponent() {
    }
    CompDeedsComponent.prototype.ngOnInit = function () {
    };
    CompDeedsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comp-deeds',
            template: __webpack_require__(/*! ./comp-deeds.component.html */ "./src/app/modules/comparables/comp-deeds/comp-deeds.component.html"),
            styles: [__webpack_require__(/*! ./comp-deeds.component.scss */ "./src/app/modules/comparables/comp-deeds/comp-deeds.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CompDeedsComponent);
    return CompDeedsComponent;
}());



/***/ }),

/***/ "./src/app/modules/comparables/comparables.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/comparables/comparables.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-menu\">\r\n  <div class=\"navbar-nav container\">\r\n    <a class=\"nav-item navbar-link \" routerLink=\"./upload\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n      <span class=\"far fa-file-upload\"></span>\r\n      Load Comps\r\n    </a>\r\n    <a class=\"nav-item navbar-link {{isActiveLink}}\" routerLink=\"./grid\">\r\n      <span class=\"fa fa-th\"></span>\r\n      Comp Grid\r\n    </a>\r\n    <a class=\"nav-item navbar-link \" routerLink=\"./deeds\" routerLinkActive=\"active\">\r\n      <span class=\"far fa-file-alt\"></span>\r\n      Deeds\r\n    </a>\r\n    <a class=\"nav-item navbar-link \" routerLink=\"./map\" routerLinkActive=\"active\">\r\n      <span class=\"far fa-map\"></span>\r\n      Map\r\n    </a>\r\n    <a class=\"nav-item navbar-link \" routerLink=\"./addenda\" routerLinkActive=\"active\">\r\n      <span class=\"far fa-edit\"></span>\r\n      Addenda\r\n    </a>\r\n  </div>\r\n</div>\r\n<div class=\"clear\"></div>\r\n\r\n<div class=\"grid-header row\">\r\n  <div class=\"col\">\r\n\r\n    <div class=\"form\">\r\n      <label>Form</label>\r\n      <span class=\"text\">{{formType}}</span>\r\n    </div>\r\n\r\n    <div class=\"comp-summary\">\r\n      <span class=\"comp-count\">\r\n        <label>Comp Count</label>\r\n        <span class=\"count\">{{compCount}}</span>\r\n      </span>\r\n      <a href=\"#\" class=\"btn btn-primary btn-add-comps d-none\" data-toggle=\"modal\" data-target=\"#addComps\">Add Comps</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"col\">\r\n\r\n    <div class=\"data-source-list\" *ngIf=\"dataSources.length > 0\">\r\n      <h6 class=\"background-fade-out\">\r\n        Data sources loaded\r\n      </h6>\r\n      <div class=\"source-list background-fade-out\">\r\n        <div class=\"row\" *ngFor=\"let source of dataSources\">\r\n          <div class=\"table-layout\">\r\n            <div class=\"source-name\">{{source.displayName}}</div>\r\n            <label>{{source.type}}</label>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/modules/comparables/comparables.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/modules/comparables/comparables.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-header {\n  font-size: 13px;\n  font-weight: 600;\n  margin: 5px 0;\n  overflow: auto;\n  padding: 0; }\n  .grid-header.row {\n    margin: 0; }\n  .grid-header .form {\n    display: inline-block; }\n  .grid-header .form label {\n      color: #607eab;\n      display: inline-block;\n      font-weight: normal;\n      margin: 2px 5px 0 0; }\n  .grid-header .form .text {\n      font-weight: 600; }\n  .grid-header .comp-summary .comp-count {\n    color: #607eab;\n    display: inline-block;\n    font-size: 13px;\n    font-weight: normal;\n    margin: 0;\n    position: relative; }\n  .grid-header .comp-summary .comp-count .count {\n      color: #000;\n      display: inline-block;\n      font-size: 14px;\n      font-weight: 600;\n      margin: 0 0 0 5px; }\n  .grid-header .comp-summary .btn.btn-add-comps {\n    font-size: 12px;\n    margin-bottom: 10px;\n    padding: 4px 10px;\n    text-transform: uppercase; }\n  .grid-header .data-source-list {\n    float: right;\n    display: table-cell;\n    vertical-align: top;\n    margin-left: 0;\n    margin-right: 15px; }\n  .grid-header .data-source-list h6 {\n      color: #607eab;\n      /*color: #46689c;*/\n      display: block;\n      font-size: 13px;\n      font-weight: 400;\n      margin: 0;\n      padding: 0 7px 0 0;\n      text-align: right;\n      text-decoration: none;\n      text-transform: capitalize;\n      white-space: nowrap;\n      transition: all .5s linear; }\n  .grid-header .data-source-list .source-list {\n      padding-left: 20px;\n      transition: all 3s linear; }\n  .grid-header .data-source-list .source-list .row {\n        display: table;\n        width: 100%;\n        line-height: 15px;\n        margin-left: 0;\n        margin-right: 0; }\n  .grid-header .data-source-list .source-list .row .table-layout {\n          padding: 0;\n          display: table-row; }\n  .grid-header .data-source-list .source-list .row:hover {\n          background-color: #ebebeb; }\n  .grid-header .data-source-list .source-list .row label {\n          color: #707070;\n          display: table-cell;\n          float: right;\n          font-size: 10px;\n          margin: 2px 5px 0 8px;\n          text-transform: uppercase;\n          vertical-align: middle;\n          white-space: nowrap; }\n  .grid-header .data-source-list .source-list .row .source-name {\n          color: #008b8b;\n          display: table-cell;\n          font-size: 11px;\n          margin: 0 5px;\n          padding-left: 4px;\n          vertical-align: middle;\n          white-space: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21wYXJhYmxlcy9DOlxcVXNlcnNcXHJsaWZmZXJ0aFxcc291cmNlXFxyZXBvc1xcVGVzdFxcRE0uTmcuV2ViXFxkbS10ZXN0Mi9zcmNcXGFwcFxcbW9kdWxlc1xcY29tcGFyYWJsZXNcXGNvbXBhcmFibGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztFQUNkLFVBQVUsRUFBQTtFQUxaO0lBUUksU0FBUyxFQUFBO0VBUmI7SUFZSSxxQkFBcUIsRUFBQTtFQVp6QjtNQWVNLGNBQWM7TUFDZCxxQkFBcUI7TUFDckIsbUJBQW1CO01BQ25CLG1CQUFtQixFQUFBO0VBbEJ6QjtNQXNCTSxnQkFBZ0IsRUFBQTtFQXRCdEI7SUE2Qk0sY0FBYztJQUNkLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxrQkFBa0IsRUFBQTtFQWxDeEI7TUFxQ1EsV0FBVztNQUNYLHFCQUFxQjtNQUNyQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGlCQUFpQixFQUFBO0VBekN6QjtJQStDUSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQix5QkFBeUIsRUFBQTtFQWxEakM7SUF3REksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFFbkIsY0FBYztJQUNkLGtCQUFrQixFQUFBO0VBN0R0QjtNQXNFTSxjQUFjO01BQ2Qsa0JBQUE7TUFDQSxjQUFjO01BQ2QsZUFBZTtNQUNmLGdCQUFnQjtNQUdoQixTQUFTO01BQ1Qsa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixxQkFBcUI7TUFDckIsMEJBQTBCO01BQzFCLG1CQUFtQjtNQUNuQiwwQkFBMEIsRUFBQTtFQW5GaEM7TUF1Rk0sa0JBQWtCO01BQ2xCLHlCQUF5QixFQUFBO0VBeEYvQjtRQTJGUSxjQUFjO1FBQ2QsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsZUFBZSxFQUFBO0VBL0Z2QjtVQWtHVSxVQUFVO1VBQ1Ysa0JBQWtCLEVBQUE7RUFuRzVCO1VBdUdVLHlCQUF5QixFQUFBO0VBdkduQztVQTJHVSxjQUFjO1VBQ2QsbUJBQW1CO1VBQ25CLFlBQVk7VUFDWixlQUFlO1VBQ2YscUJBQXFCO1VBQ3JCLHlCQUF5QjtVQUN6QixzQkFBc0I7VUFDdEIsbUJBQW1CLEVBQUE7RUFsSDdCO1VBc0hVLGNBQWM7VUFDZCxtQkFBbUI7VUFDbkIsZUFBZTtVQUNmLGFBQWE7VUFDYixpQkFBaUI7VUFDakIsc0JBQXNCO1VBQ3RCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb21wYXJhYmxlcy9jb21wYXJhYmxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luOiA1cHggMDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG5cclxuICAmLnJvdyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBjb2xvcjogIzYwN2VhYjtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBtYXJnaW46IDJweCA1cHggMCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb21wLXN1bW1hcnkge1xyXG4gICAgLy9jbGVhcjogbGVmdDtcclxuICAgIC5jb21wLWNvdW50IHtcclxuICAgICAgY29sb3I6ICM2MDdlYWI7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLy90ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG4gICAgICAuY291bnQge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW46IDAgMCAwIDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4ge1xyXG4gICAgICAmLmJ0bi1hZGQtY29tcHMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kYXRhLXNvdXJjZS1saXN0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgLy9tYXJnaW4tbGVmdDogMThweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG5cclxuICAgIC5iYWNrZ3JvdW5kLWZhZGUtb3V0IHtcclxuICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMCwwLjMpO1xyXG4gICAgICAvL2JveC1zaGFkb3c6IDAgMCAxMHB4IDRweCByZ2JhKDI1NSwyNTUsMCwwLjMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoNiB7XHJcbiAgICAgIGNvbG9yOiAjNjA3ZWFiO1xyXG4gICAgICAvKmNvbG9yOiAjNDY2ODljOyovXHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIC8vbWFyZ2luOiAxNnB4IDAgMDtcclxuICAgICAgLy9tYXJnaW4tdG9wOiAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDAgN3B4IDAgMDtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgbGluZWFyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zb3VyY2UtbGlzdCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDNzIGxpbmVhcjtcclxuXHJcbiAgICAgIC5yb3cge1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuXHJcbiAgICAgICAgLnRhYmxlLWxheW91dCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgZGlzcGxheTogdGFibGUtcm93O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAycHggNXB4IDAgOHB4O1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNvdXJjZS1uYW1lIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDA4YjhiO1xyXG4gICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/comparables/comparables.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/comparables/comparables.component.ts ***!
  \**************************************************************/
/*! exports provided: ComparablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparablesComponent", function() { return ComparablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_data_source_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/data-source.service */ "./src/app/core/services/data-source.service.ts");




var ComparablesComponent = /** @class */ (function () {
    function ComparablesComponent(router, dataSourceService) {
        this.router = router;
        this.dataSourceService = dataSourceService;
    }
    ComparablesComponent.prototype.ngOnInit = function () {
        this.isActiveLink = this.isActive();
        this.getDataSources();
        this.formType = "1004 URAR - UAD";
        this.compCount = 5;
    };
    ComparablesComponent.prototype.isActive = function () {
        // This seems like a hack
        // Just to get two routes to show active on the same tab
        return this.router.isActive('/Comparables', true) || this.router.isActive('/Comparables/grid', false) ? 'active' : '';
    };
    ComparablesComponent.prototype.getDataSources = function () {
        var _this = this;
        this.dataSourceService.getDataSources()
            .subscribe(function (dataSources) {
            _this.dataSources = dataSources;
        });
    };
    ComparablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comparables',
            template: __webpack_require__(/*! ./comparables.component.html */ "./src/app/modules/comparables/comparables.component.html"),
            styles: [__webpack_require__(/*! ./comparables.component.scss */ "./src/app/modules/comparables/comparables.component.scss"), __webpack_require__(/*! ../../ui/header/header.component.scss */ "./src/app/ui/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_services_data_source_service__WEBPACK_IMPORTED_MODULE_3__["DataSourceService"]])
    ], ComparablesComponent);
    return ComparablesComponent;
}());



/***/ }),

/***/ "./src/app/modules/comparables/grid/grid.component.html":
/*!**************************************************************!*\
  !*** ./src/app/modules/comparables/grid/grid.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"comps-grid-container\">\r\n\r\n  <div class=\"grid-item subject\">\r\n    <h1>Subject</h1>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <!--@Helpers.ParcelHelpers.ParcelPhoto(selectedPhoto, \"Subject\")-->\r\n        <div class=\"item-photo\">\r\n          <span class=\"fal fa-image fa-5x photo-icon\"></span>\r\n          <span class=\"fal fa-plus-circle fa-2x add-photo-icon\"></span>\r\n        </div>\r\n\r\n        <div class=\"parcel-detail-link-container\">\r\n          <a href=\"#\">Listing</a>\r\n          <a href=\"#\">Deeds</a>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"row grid-row address-row\">\r\n      <div class=\"col-md-12\">\r\n        <address>\r\n          <div class=\"address\">{{addressLine1}}</div>\r\n          <div class=\"address-sub\">{{city}}, {{state}} {{zip}}</div>\r\n        </address>\r\n      </div>\r\n      <!--@Helpers.ParcelHelpers.BuildInputFlyout(prePrioritizedList, new List<string> { \"\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"AddressLine1\"), null, \"address\")-->\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-12 grid-label\">\r\n        Proximity to Subject\r\n      </div>\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-6 grid-label\">\r\n        Sale Price\r\n      </div>\r\n      <div class=\"col-md-6 grid-input\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\">$</span>\r\n          <input type=\"text\" id=\"SalePriceSubject\" value=\"\" pattern=\"[0-9]*\" class=\"form-control\">\r\n        </div>\r\n      </div>\r\n      <!--@Helpers.ParcelHelpers.BuildInputFlyout(prePrioritizedList, new List<string> { \"SalePrice\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"SalePrice\"), item => String.Format(\"{0:0,0}\", item))-->\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-6 grid-label\">\r\n        Sale Price/GLA\r\n      </div>\r\n      <div class=\"col-md-6 grid-input\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\">$</span>\r\n          <input type=\"number\" id=\"GlaPriceSubject\" value=\"\" class=\"form-control\">\r\n          <span class=\"input-group-addon trailing sm\">sqft</span>\r\n        </div>\r\n      </div>\r\n      <!--@Helpers.ParcelHelpers.BuildInputFlyout(prePrioritizedList, new List<string> { \"SalePricePerGrossLivingArea\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"SalePricePerGrossLivingArea\"), item => String.Format(\"{0:0,0.00}\", item))-->\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-12 grid-label\">\r\n        Data Source(s)\r\n      </div>\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-12 grid-label\">\r\n        Verification Source(s)\r\n      </div>\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-6 grid-label label-header\">\r\n        ADJUSTMENTS\r\n      </div>\r\n      <div class=\"col-md-6 grid-label label-header\">\r\n        DESCRIPTION\r\n      </div>\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-12 grid-label\">\r\n        Sale or Financing\r\n      </div>\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-12 grid-label\">\r\n        Concessions\r\n      </div>\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-12 grid-label\">\r\n        Date of Sale\r\n      </div>\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-6 grid-label\">\r\n        Location\r\n      </div>\r\n      <div class=\"col-md-6 grid-input\">\r\n        <input type=\"text\" id=\"LocationSubject\" value=\"\" class=\"form-control\">\r\n      </div>\r\n      <!--@Helpers.ParcelHelpers.BuildInputFlyout(prePrioritizedList, new List<string> { \"Location\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"Location\"), null)-->\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-6 grid-label\">\r\n        Leasehold/Fee Simple\r\n      </div>\r\n      <div class=\"col-md-6 grid-input\">\r\n        <input type=\"text\" id=\"FeeSimpleSubject\" value=\"\" class=\"form-control\">\r\n      </div>\r\n      <!--@Helpers.ParcelHelpers.BuildInputFlyout(prePrioritizedList, new List<string> { \"LeaseholdFeeSimple\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"LeaseholdFeeSimple\"), null)-->\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-6 grid-label\">\r\n        Site\r\n      </div>\r\n      <div class=\"col-md-6 grid-input\">\r\n        <input type=\"text\" id=\"SiteSubject\" value=\"\" class=\"form-control\">\r\n      </div>\r\n      <!--@Helpers.ParcelHelpers.BuildInputFlyout(prePrioritizedList, new List<string> { \"SiteArea\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"SiteArea\"), item => String.Format(\"{0:0,0.00}\", item))-->\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-6 grid-label\">\r\n        View\r\n      </div>\r\n      <div class=\"col-md-6 grid-input\">\r\n        <input type=\"text\" id=\"ViewSubject\" value=\"\" class=\"form-control\">\r\n      </div>\r\n      <!--@Helpers.ParcelHelpers.BuildInputFlyout(prePrioritizedList, new List<string> { \"View\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"View\"), null)-->\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-6 grid-label\">\r\n        Design (Style)\r\n      </div>\r\n      <div class=\"col-md-6 grid-input\">\r\n        <input type=\"text\" id=\"DesignSubject\" value=\"\" class=\"form-control\">\r\n      </div>\r\n      <!--@Helpers.ParcelHelpers.BuildInputFlyout(prePrioritizedList, new List<string> { \"Style\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"Style\"), null)-->\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-6 grid-label\">\r\n        Quality of Construction\r\n      </div>\r\n      <div class=\"col-md-6 grid-input\">\r\n        <input type=\"text\" id=\"QualitySubject\" value=\"\" class=\"form-control\">\r\n      </div>\r\n      <!--@Helpers.ParcelHelpers.BuildInputFlyout(prePrioritizedList, new List<string> { \"QualityOfConstruction\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"QualityOfConstruction\"), null)-->\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-6 grid-label\">\r\n        Actual Age\r\n      </div>\r\n      <div class=\"col-md-6 grid-input\">\r\n        <input type=\"text\" id=\"AgeSubject\" value=\"\" class=\"form-control\">\r\n      </div>\r\n      <!--@Helpers.ParcelHelpers.BuildInputFlyout(prePrioritizedList, new List<string> { \"EffectiveAge\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"EffectiveAge\"), item => String.Format(\"{0:0,0}\", item))-->\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-6 grid-label\">\r\n        Condition\r\n      </div>\r\n      <div class=\"col-md-6 grid-input\">\r\n        <input type=\"text\" id=\"ConditionSubject\" value=\"\" class=\"form-control\">\r\n      </div>\r\n      <!--@Helpers.ParcelHelpers.BuildInputFlyout(prePrioritizedList, new List<string> { \"Condition\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"Condition\"), null)-->\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-6 grid-label room-count\">\r\n        Above Grade Room Count\r\n      </div>\r\n      <div class=\"col-md-6 room-count grid-input\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4 grid-label\">total</div>\r\n            <div class=\"col-md-4 grid-label\">bed</div>\r\n            <div class=\"col-md-4 grid-label\">bath</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4 grid-input\">\r\n              <input type=\"text\" id=\"TotalRoomCountSubject\" value=\"\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"col-md-4 grid-input\">\r\n              <input type=\"text\" id=\"BedroomCountSubject\" value=\"\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"col-md-4 grid-input\">\r\n              <input type=\"text\" id=\"BathroomCountSubject\" value=\"\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-6 grid-label\">\r\n        Gross Living Area\r\n      </div>\r\n      <div class=\"col-md-6 grid-input\">\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" id=\"GlaSubject\" value=\"\" class=\"form-control\">\r\n          <span class=\"input-group-addon trailing sm\">sqft</span>\r\n        </div>\r\n      </div>\r\n      <!--@Helpers.ParcelHelpers.BuildInputFlyout(prePrioritizedList, new List<string> { \"AboveGradeGla\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"AboveGradeGla\"), item => String.Format(\"{0:0,0}\", item))-->\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-6 grid-label\">\r\n        Basement & Finished\r\n      </div>\r\n      <div class=\"col-md-6 grid-input\">\r\n        <input type=\"text\" id=\"BasementAndFinishedSubject\" value=\"\" class=\"form-control\">\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-6 grid-label\">\r\n        Rooms Below Grade\r\n      </div>\r\n      <div class=\"col-md-6 grid-input\">\r\n        <input type=\"text\" id=\"RoomsBelowGradeSubject\" value=\"\" class=\"form-control\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-6 grid-label\">\r\n        Functional Utility\r\n      </div>\r\n      <div class=\"col-md-6 grid-input\">\r\n        <input type=\"text\" id=\"FunctionalUtilitySubject\" value=\"\" class=\"form-control\">\r\n      </div>\r\n      <!--@Helpers.ParcelHelpers.BuildInputFlyout(prePrioritizedList, new List<string> { \"FunctionalUtility\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"FunctionalUtility\"), null)-->\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-6 grid-label\">\r\n        Heating/Cooling\r\n      </div>\r\n      <div class=\"col-md-6 grid-input\">\r\n        <input type=\"text\" id=\"HeatingCoolingSubject\" value=\"\" class=\"form-control\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-6 grid-label\">\r\n        Energy Efficient Items\r\n      </div>\r\n      <div class=\"col-md-6 grid-input\">\r\n        <input type=\"text\" id=\"EnergyEfficientSubject\" value=\"\" class=\"form-control\">\r\n      </div>\r\n      <!--@Helpers.ParcelHelpers.BuildInputFlyout(prePrioritizedList, new List<string> { \"EnergyEffecientItemsAdjustment\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"EnergyEffecientItemsAdjustment\"), null)-->\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-6 grid-label\">\r\n        Garage/Carport\r\n      </div>\r\n      <div class=\"col-md-6 grid-input\">\r\n        <input type=\"text\" id=\"ParkingSubject\" value=\"\" class=\"form-control\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-6 grid-label\">\r\n        Porch/Patio/Deck\r\n      </div>\r\n      <div class=\"col-md-6 grid-input\">\r\n        <input type=\"text\" id=\"PorchSubject\" value=\"\" class=\"form-control\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-6 grid-label\">\r\n        Extra Item 1\r\n      </div>\r\n      <div class=\"col-md-6 grid-input\">\r\n        <input type=\"text\" id=\"ExtraItem1Subject\" value=\"\" class=\"form-control\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-6 grid-label\">\r\n        Extra Item 2\r\n      </div>\r\n      <div class=\"col-md-6 grid-input\">\r\n        <input type=\"text\" id=\"ExtraItem2Subject\" value=\"\" class=\"form-control\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-6 grid-label\">\r\n        Extra Item 3\r\n      </div>\r\n      <div class=\"col-md-6 grid-input\">\r\n        <input type=\"text\" id=\"ExtraItem3Subject\" value=\"\" class=\"form-control\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-12 grid-label\">\r\n        Net Adjustment (Total)\r\n      </div>\r\n    </div>\r\n    <div class=\"row grid-row\">\r\n      <div class=\"col-md-12 grid-label adjusted-sales-price\">\r\n        Adjusted Sale Price of Comparables\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"comp-container\">\r\n    <div class=\"comps\" id=\"Comps\">\r\n\r\n      <div class=\"grid-item\" draggable=\"true\" *ngFor=\"let comp of [1,2,3,4,5]\">\r\n        <h1>\r\n          <span class=\"draggable-icon\"></span>\r\n          Comp {{comp}}\r\n        </h1>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"item-photo\">\r\n              <span class=\"fal fa-image fa-5x photo-icon\"></span>\r\n              <span class=\"fal fa-plus-circle fa-2x add-photo-icon\"></span>\r\n            </div>\r\n            <!--@Helpers.ParcelHelpers.ParcelPhoto(selectedPhoto, compNumber.ToString())-->\r\n\r\n            <div class=\"parcel-detail-link-container\">\r\n              <a href=\"#\">Listing</a>\r\n              <a href=\"#\">Deeds</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row grid-row address-row\">\r\n          <div class=\"col-md-12\">\r\n            <address>\r\n              <div class=\"address\">{{addressLine1}}</div>\r\n              <div class=\"address-sub\">{{city}}, {{state}} {{zip}}</div>\r\n            </address>\r\n            <!--@Html.Hidden(\"FullAddressComp\" + compNumber, AddressUtil.BuildAddressString(Model).ToLower(), new { @class = \"full-comp-address\" })-->\r\n          </div>\r\n          <!--@Helpers.ParcelHelpers.BuildInputFlyout(compPrePrioritizedList, new List<string> { \"\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"AddressLine1\"), null, \"address\")-->\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-12 grid-input\">\r\n            <input type=\"text\" value=\"\" placeholder=\"proximity to subject\" class=\"form-control\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-12 grid-input\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input type=\"text\" value=\"\" placeholder=\"sale price\" class=\"form-control\" />\r\n            </div>\r\n          </div>\r\n          <!--@Helpers.ParcelHelpers.BuildInputFlyout(compPrePrioritizedList, new List<string> { \"SalePrice\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"SalePrice\"), item => String.Format(\"{0:0,0}\", item))-->\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-12 grid-input\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input type=\"text\" value=\"\" placeholder=\"sale price/GLA\" class=\"form-control\" />\r\n              <span class=\"input-group-addon trailing sm\">sqft</span>\r\n            </div>\r\n          </div>\r\n          <!--@Helpers.ParcelHelpers.BuildInputFlyout(compPrePrioritizedList, new List<string> { \"SalePricePerGrossLivingArea\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"SalePricePerGrossLivingArea\"), item => String.Format(\"{0:0,0.00}\", item))-->\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-12 grid-input\">\r\n            <input type=\"text\" value=\"\" placeholder=\"data source(s)\" class=\"form-control\" />\r\n          </div>\r\n          <!--@Helpers.ParcelHelpers.BuildInputFlyout(compPrePrioritizedList, new List<string> { \"ReportedDataSources\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"ReportedDataSources\"), null)-->\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-12 grid-input\">\r\n            <input type=\"text\" value=\"\" placeholder=\"verification source(s)\" class=\"form-control\" />\r\n          </div>\r\n          <!--@Helpers.ParcelHelpers.BuildInputFlyout(compPrePrioritizedList, new List<string> { \"VerificationSource\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"VerificationSource\"), null)-->\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-label label-header\">\r\n            DESCRIPTION\r\n          </div>\r\n          <div class=\"col-md-6 grid-label label-header\">\r\n            +(-) $ Adjustment\r\n          </div>\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input\">\r\n            <input type=\"text\" id=\"SaleFinance{{comp}}\" value=\"\" placeholder=\"sale or financing\" class=\"form-control\" />\r\n          </div>\r\n          <div class=\"col-md-6 grid-input grid-adjust\">\r\n            <input type=\"number\" id=\"SaleFinanceAdjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n          </div>\r\n          <!--@Helpers.ParcelHelpers.BuildInputFlyout(compPrePrioritizedList, new List<string> { \"\" }, 0, null)-->\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input\">\r\n            <input type=\"text\" id=\"Concessions{{comp}}\" value=\"\" placeholder=\"concessions\" class=\"form-control\" />\r\n          </div>\r\n          <div class=\"col-md-6 grid-input grid-adjust\">\r\n            <input type=\"number\" id=\"ConcessionsAdjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n          </div>\r\n          <!--@Helpers.ParcelHelpers.BuildInputFlyout(compPrePrioritizedList, new List<string> { \"ConcessionAmount\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"ConcessionAmount\"), item => String.Format(\"{0:0,0.00}\", item))-->\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input\">\r\n            <input type=\"text\" id=\"DateOfSale{{comp}}\" value=\"\" placeholder=\"date of sale\" class=\"form-control\" />\r\n          </div>\r\n          <div class=\"col-md-6 grid-input grid-adjust\">\r\n            <input type=\"number\" id=\"DateOfSaleAdjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input\">\r\n            <input type=\"text\" id=\"Location{{comp}}\" value=\"\" placeholder=\"location\" class=\"form-control\" />\r\n          </div>\r\n          <div class=\"col-md-6 grid-input grid-adjust\">\r\n            <input type=\"number\" id=\"LocationAdjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n          </div>\r\n          <!--@Helpers.ParcelHelpers.BuildInputFlyout(compPrePrioritizedList, new List<string> { \"Location\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"Location\"), null)-->\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input\">\r\n            <input type=\"text\" id=\"FeeSimple{{comp}}\" value=\"\" placeholder=\"leasehold/fee simple\" class=\"form-control\" />\r\n          </div>\r\n          <div class=\"col-md-6 grid-input grid-adjust\">\r\n            <input type=\"number\" id=\"FeeSimpleAdjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n          </div>\r\n          <!--@Helpers.ParcelHelpers.BuildInputFlyout(compPrePrioritizedList, new List<string> { \"LeaseholdFeeSimple\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"LeaseholdFeeSimple\"), null)-->\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input\">\r\n            <input type=\"number\" id=\"Site{{comp}}\" value=\"\" placeholder=\"site\" class=\"form-control\" />\r\n          </div>\r\n          <div class=\"col-md-6 grid-input grid-adjust\">\r\n            <input type=\"number\" id=\"SiteAdjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n          </div>\r\n          <!--@Helpers.ParcelHelpers.BuildInputFlyout(compPrePrioritizedList, new List<string> { \"SiteArea\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"SiteArea\"), item => String.Format(\"{0:0,0.00}\", item))-->\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input\">\r\n            <input type=\"text\" id=\"View{{comp}}\" value=\"\" placeholder=\"view\" class=\"form-control\" />\r\n          </div>\r\n          <div class=\"col-md-6 grid-input grid-adjust\">\r\n            <input type=\"number\" id=\"ViewAdjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n          </div>\r\n          <!--@Helpers.ParcelHelpers.BuildInputFlyout(compPrePrioritizedList, new List<string> { \"View\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"View\"), null)-->\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input\">\r\n            <input type=\"text\" id=\"Design{{comp}}\" value=\"\" placeholder=\"design (style)\" class=\"form-control\" />\r\n          </div>\r\n          <div class=\"col-md-6 grid-input grid-adjust\">\r\n            <input type=\"number\" id=\"DesignAdjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n          </div>\r\n          <!--@Helpers.ParcelHelpers.BuildInputFlyout(compPrePrioritizedList, new List<string> { \"Style\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"Style\"), null)-->\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input\">\r\n            <input type=\"text\" id=\"Quality{{comp}}\" value=\"\" placeholder=\"quality of const\" class=\"form-control\" />\r\n          </div>\r\n          <div class=\"col-md-6 grid-input grid-adjust\">\r\n            <input type=\"number\" id=\"QualityAdjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n          </div>\r\n          <!--@Helpers.ParcelHelpers.BuildInputFlyout(compPrePrioritizedList, new List<string> { \"QualityOfConstruction\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"QualityOfConstruction\"), null)-->\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input\">\r\n            <input type=\"text\" id=\"Age{{comp}}\" value=\"\" placeholder=\"actual age\" class=\"form-control\" />\r\n          </div>\r\n          <div class=\"col-md-6 grid-input grid-adjust\">\r\n            <input type=\"number\" id=\"AgeAdjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n          </div>\r\n          <!--@Helpers.ParcelHelpers.BuildInputFlyout(compPrePrioritizedList, new List<string> { \"EffectiveAge\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"EffectiveAge\"), item => String.Format(\"{0:0,0}\", item))-->\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input\">\r\n            <input type=\"text\" id=\"Condition{{comp}}\" value=\"\" placeholder=\"condition\" class=\"form-control\" />\r\n          </div>\r\n          <div class=\"col-md-6 grid-input grid-adjust\">\r\n            <input type=\"number\" id=\"ConditionAdjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n          </div>\r\n          <!--@Helpers.ParcelHelpers.BuildInputFlyout(compPrePrioritizedList, new List<string> { \"Condition\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"Condition\"), null)-->\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input room-count\">\r\n            <div class=\"container-fluid\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4 grid-label\">total</div>\r\n                <div class=\"col-md-4 grid-label\">bed</div>\r\n                <div class=\"col-md-4 grid-label\">bath</div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4 grid-input\">\r\n                  <input type=\"text\" id=\"TotalRoomCount{{comp}}\" value=\"\" class=\"form-control\" />\r\n                </div>\r\n                <div class=\"col-md-4 grid-input\">\r\n                  <input type=\"text\" id=\"BedroomCount{{comp}}\" value=\"\" class=\"form-control\" />\r\n                </div>\r\n                <div class=\"col-md-4 grid-input\">\r\n                  <input type=\"text\" id=\"BathroomCount{{comp}}\" value=\"\" class=\"form-control\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 grid-input room-count\">\r\n            <div class=\"container-fluid\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 grid-label\">&nbsp;</div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 grid-adjust grid-input\">\r\n                  <input type=\"number\" id=\"RoomCountAdjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input\">\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" id=\"Gla{{comp}}\" value=\"\" placeholder=\"GLA\" class=\"form-control\" />\r\n              <span class=\"input-group-addon trailing sm\">sqft</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 grid-input grid-adjust\">\r\n            <input type=\"number\" id=\"GlaAdjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n          </div>\r\n          <!--@Helpers.ParcelHelpers.BuildInputFlyout(compPrePrioritizedList, new List<string> { \"AboveGradeGla\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"AboveGradeGla\"), item => String.Format(\"{0:0,0}\", item))-->\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input\">\r\n            <input type=\"text\" id=\"BasementAndFinished{{comp}}\" value=\"\" placeholder=\"basement/finished\" class=\"form-control\" />\r\n          </div>\r\n          <div class=\"col-md-6 grid-input grid-adjust\">\r\n            <input type=\"number\" id=\"BasementAndFinishedAdjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input\">\r\n            <input type=\"text\" id=\"RoomsBelowGrade{{comp}}\" placeholder=\"rooms below grd\" class=\"form-control\" />\r\n          </div>\r\n          <div class=\"col-md-6 grid-input grid-adjust\">\r\n            <input type=\"number\" id=\"RoomsBelowGradeAdjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input\">\r\n            <input type=\"text\" id=\"FunctionalUtility{{comp}}\" value=\"\" placeholder=\"functional util\" class=\"form-control\" />\r\n          </div>\r\n          <div class=\"col-md-6 grid-input grid-adjust\">\r\n            <input type=\"number\" id=\"FunctionalUtilityAdjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n          </div>\r\n          <!--@Helpers.ParcelHelpers.BuildInputFlyout(compPrePrioritizedList, new List<string> { \"FunctionalUtility\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"FunctionalUtility\"), null)-->\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input\">\r\n            <input type=\"text\" id=\"HeatingCooling{{comp}}\" placeholder=\"heat/cool\" class=\"form-control\" />\r\n          </div>\r\n          <div class=\"col-md-6 grid-input grid-adjust\">\r\n            <input type=\"number\" id=\"HeatingCoolingAdjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input\">\r\n            <input type=\"text\" id=\"EnergyEfficient{{comp}}\" value=\"\" placeholder=\"energy effct items\" class=\"form-control\" />\r\n          </div>\r\n          <div class=\"col-md-6 grid-input grid-adjust\">\r\n            <input type=\"number\" id=\"EnergyEfficientAdjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n          </div>\r\n          <!--@Helpers.ParcelHelpers.BuildInputFlyout(compPrePrioritizedList, new List<string> { \"EnergyEffecientItemsAdjustment\" }, GetSelectedDataSourceId(fieldDataSourcePairList, \"EnergyEffecientItemsAdjustment\"), null)-->\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input\">\r\n            <input type=\"text\" id=\"Parking{{comp}}\" value=\"\" placeholder=\"garage/carport\" class=\"form-control\" />\r\n          </div>\r\n          <div class=\"col-md-6 grid-input grid-adjust\">\r\n            <input type=\"number\" id=\"ParkingAdjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input\">\r\n            <input type=\"text\" id=\"Porch{{comp}}\" value=\"\" placeholder=\"porch/patio/deck\" class=\"form-control\" />\r\n          </div>\r\n          <div class=\"col-md-6 grid-input grid-adjust\">\r\n            <input type=\"number\" id=\"PorchAdjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input\">\r\n            <input type=\"text\" id=\"ExtraItem1{{comp}}\" value=\"\" placeholder=\"extra item 1\" class=\"form-control\" />\r\n          </div>\r\n          <div class=\"col-md-6 grid-input grid-adjust\">\r\n            <input type=\"number\" id=\"ExtraItem1Adjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input\">\r\n            <input type=\"text\" id=\"ExtraItem2{{comp}}\" value=\"\" placeholder=\"extra item 2\" class=\"form-control\" />\r\n          </div>\r\n          <div class=\"col-md-6 grid-input grid-adjust\">\r\n            <input type=\"number\" id=\"ExtraItem2Adjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input\">\r\n            <input type=\"text\" id=\"ExtraItem3{{comp}}\" value=\"\" placeholder=\"extra item 3\" class=\"form-control\" />\r\n          </div>\r\n          <div class=\"col-md-6 grid-input grid-adjust\">\r\n            <input type=\"number\" id=\"ExtraItem3Adjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input adjust-plus-minus\">\r\n            <a href=\"#\" class=\"fa fa-plus fa-lg\"></a>\r\n            <a href=\"#\" class=\"fa fa-minus fa-lg selected\"></a>\r\n          </div>\r\n          <div class=\"col-md-6 grid-input grid-adjust\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input type=\"text\" id=\"NetAdjustTotal{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row grid-row\">\r\n          <div class=\"col-md-6 grid-input adjusted-sales-price\">\r\n            <div class=\"container-fluid\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 grid-label\">net adj.</div>\r\n                <div class=\"col-md-6 grid-input\">\r\n                  <div class=\"input-group\">\r\n                    <input type=\"number\" id=\"NetAdjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n                    <span class=\"input-group-addon\">%</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 grid-label\">gross adj.</div>\r\n                <div class=\"col-md-6 grid-input\">\r\n                  <div class=\"input-group\">\r\n                    <input type=\"number\" id=\"GrossAdjust{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n                    <span class=\"input-group-addon\">%</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 grid-input grid-adjust adjusted-sales-price\">\r\n            <div class=\"input-group vert-align\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input type=\"text\" id=\"AdjustedSalesPrice{{comp}}\" placeholder=\"\" class=\"form-control\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/comparables/grid/grid.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/modules/comparables/grid/grid.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comps-grid-container {\n  padding-left: 10px; }\n  .comps-grid-container .grid-item {\n    /*border-top: 10px solid $grid-green;*/\n    border: 1px solid #abadb3;\n    border-left: none;\n    display: inline-block;\n    float: left;\n    margin: 0;\n    margin-bottom: 10px;\n    min-height: 300px;\n    overflow: visible;\n    position: relative;\n    transition: -webkit-transform 0.2s ease;\n    transition: transform 0.2s ease;\n    transition: transform 0.2s ease, -webkit-transform 0.2s ease;\n    width: 230px; }\n  .comps-grid-container .grid-item.grid-item-focus {\n      box-shadow: 0 0 2px 2px rgba(255, 242, 0, 0.3); }\n  .comps-grid-container .grid-item h1 {\n      background-color: #00bb3f;\n      color: #fff;\n      font-family: Montserrat;\n      font-size: 14px;\n      font-weight: normal;\n      margin: 0;\n      padding: 6px 0 5px 30px;\n      position: relative;\n      text-transform: uppercase;\n      /*.draggable-icon {\r\n        background: transparent url(../images/draggable-icon.png) no-repeat 0 0;\r\n        cursor: move;\r\n        display: inline-block;\r\n        height: 15px;\r\n        left: 6px;\r\n        opacity: 0.3;\r\n        position: absolute;\r\n        top: 5px;\r\n        width: 15px;\r\n      }*/ }\n  .comps-grid-container .grid-item .row {\n      margin-left: 0;\n      margin-right: 0; }\n  .comps-grid-container .grid-item .row .col-md-12 {\n        padding: 0; }\n  .comps-grid-container .grid-item .row .item-photo {\n        cursor: pointer;\n        display: inline-block;\n        height: 100px;\n        margin: 4px 0 0 4px;\n        position: relative;\n        width: 133px;\n        float: left; }\n  .comps-grid-container .grid-item .row .item-photo img {\n          border: 1px solid #000;\n          height: 100px;\n          min-width: 132.66px;\n          width: auto; }\n  .comps-grid-container .grid-item .row .item-photo .photo-icon {\n          color: #327fba;\n          padding: 12px 0 0 19px; }\n  .comps-grid-container .grid-item .row .item-photo .add-photo-icon {\n          background-color: #fff;\n          border-radius: 17px;\n          top: 55px;\n          color: #00bb3f;\n          position: absolute;\n          right: 30px; }\n  .comps-grid-container .grid-item .row .parcel-detail-link-container {\n        display: block;\n        float: right;\n        margin: 34px 1px 0 1px;\n        padding: 0;\n        vertical-align: middle;\n        width: 89px; }\n  .comps-grid-container .grid-item .row .parcel-detail-link-container a {\n          background-color: rgba(50, 127, 186, 0.85);\n          color: #fff;\n          display: block;\n          font-size: 13px;\n          padding: 8px 0;\n          text-align: center; }\n  .comps-grid-container .grid-item .row .parcel-detail-link-container a:first-child {\n            border-bottom: 1px solid #fff; }\n  .comps-grid-container .grid-item .row .parcel-detail-link-container a:hover, .comps-grid-container .grid-item .row .parcel-detail-link-container a:focus {\n            text-decoration: none;\n            background-color: rgba(50, 127, 186, 0.95); }\n  .comps-grid-container .grid-item .row address {\n        margin: 5px 0 15px;\n        padding-left: 4px; }\n  .comps-grid-container .grid-item .row address .address {\n          font-size: 15.5px;\n          font-weight: bold;\n          line-height: normal; }\n  .comps-grid-container .grid-item .row address .address-sub {\n          font-size: 0.9em;\n          line-height: 11px; }\n  .comps-grid-container .grid-item .row.no-data {\n        height: 1168px; }\n  .comps-grid-container .grid-item .row.no-data .no-data-found {\n          display: block;\n          font-family: Lato, Montserrat;\n          line-height: normal;\n          font-size: 23px;\n          margin-top: 80px;\n          text-align: center; }\n  .comps-grid-container .grid-item .row.no-data .add-property-data {\n          color: rgba(51, 122, 183, 0.8);\n          display: block;\n          font-family: Montserrat;\n          font-size: 15px;\n          font-weight: 100;\n          margin-top: 10px;\n          text-align: center;\n          text-transform: uppercase; }\n  .comps-grid-container .grid-item .row.no-data .add-property-data:hover {\n            color: #337ab7;\n            text-decoration: none; }\n  .comps-grid-container .grid-item .row.grid-row {\n        border-top: 1px solid #abadb3;\n        position: relative; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"] {\n          padding: 6px 0 6px 2px;\n          height: 30px; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"] .form-control {\n            background-color: transparent;\n            border: none;\n            border-radius: 0;\n            height: 30px;\n            padding: 0 4px;\n            /*$placeholder-color: rgba(171, 173, 179,0.6);*/ }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"] .form-control::-webkit-input-placeholder {\n              color: rgba(0, 114, 188, 0.3);\n              font-size: 12px; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"] .form-control::-moz-placeholder {\n              color: rgba(0, 114, 188, 0.3);\n              font-size: 12px; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"] .form-control:-moz-placeholder {\n              color: rgba(0, 114, 188, 0.3);\n              font-size: 12px; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"] .form-control:-ms-input-placeholder {\n              color: rgba(0, 114, 188, 0.3);\n              font-size: 12px; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"] .input-group .form-control {\n            box-shadow: none; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"] .form-focus-focus {\n            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"] .input-group-addon {\n            border: none;\n            border-radius: 0;\n            background-color: transparent;\n            color: rgba(0, 0, 0, 0.4);\n            padding: 3.5px 0 0 3px; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"] .input-group-addon.trailing {\n              padding: 3.5px 2px 0 0; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"] .input-group-addon.sm {\n              font-size: 0.8em; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"] input[type=number] {\n            -moz-appearance: textfield; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"] input[type=number]::-webkit-inner-spin-button, .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"] input[type=number]::-webkit-outer-spin-button {\n              -webkit-appearance: none;\n              margin: 0; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].adjust-plus-minus {\n            text-align: center; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].adjust-plus-minus a {\n              color: rgba(0, 0, 0, 0.25);\n              font-size: 1.2em;\n              margin-top: 10px;\n              /*font-size: 28px;\r\n                            font-weight: bold;\r\n                            display: inline-block;\r\n                            margin-top: 4px;\r\n                            line-height: 17px;\r\n                            padding: 0 3px 0.5px 3px;*/ }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].adjust-plus-minus a.selected {\n                color: #327fba;\n                text-shadow: 0 0 2px #00bb3f; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].adjust-plus-minus a:hover, .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].adjust-plus-minus a:focus {\n                color: #327fba;\n                outline: none;\n                text-decoration: none;\n                text-shadow: 0 0 2px #00bb3f; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].adjust-plus-minus a:last-child {\n                margin-left: 30px; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].adjusted-sales-price {\n            height: 60px; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].adjusted-sales-price .container-fluid {\n              padding-left: 0;\n              padding-right: 0; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].adjusted-sales-price .container-fluid .row .input-group-addon {\n                font-size: 0.9em;\n                padding-right: 1px; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].adjusted-sales-price .container-fluid .row:first-child {\n                border-bottom: 1px solid #abadb3; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].adjusted-sales-price .input-group.vert-align {\n              height: 60px; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].adjusted-sales-price .input-group.vert-align .form-control {\n                height: 60px; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].adjusted-sales-price.grid-label {\n              padding-top: 21px; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].grid-adjust {\n            background-color: rgba(0, 114, 188, 0.03); }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].grid-adjust input {\n              text-align: right; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].grid-input {\n            padding: 0; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].grid-label {\n            background-color: rgba(0, 114, 188, 0.2);\n            font-family: 'PT Sans', Lato;\n            font-size: 12px;\n            white-space: nowrap; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].grid-label.label-header {\n              font-style: italic;\n              font-weight: bold;\n              text-align: center; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].room-count {\n            height: 50px;\n            white-space: normal; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].room-count.grid-input {\n              padding: 0; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].room-count .container-fluid {\n              margin: 0;\n              padding: 0; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].room-count .container-fluid .row .grid-label {\n                border-bottom: 1px solid #abadb3;\n                border-right: 1px solid #abadb3;\n                height: auto;\n                padding: 1px 0;\n                text-align: center; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].room-count .container-fluid .row .grid-label:last-child {\n                  border-right: none; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].room-count .container-fluid .row .grid-input {\n                border-right: 1px solid #abadb3; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].room-count .container-fluid .row .grid-input:last-child {\n                  border-right: none; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"]:first-child {\n            border-right: 1px solid #abadb3; }\n  .comps-grid-container .grid-item .row.grid-row div[class^=\"col-\"].col-md-12 {\n            border-right: none; }\n  .comps-grid-container .grid-item .row.grid-row .flyout {\n          display: none;\n          /*border: 1px solid #abadb3;*/\n          /*background-color: rgba(0,0,0,0.2);*/\n          background-color: rgba(102, 175, 233, 0.4);\n          border-bottom-right-radius: 10px;\n          border-top-right-radius: 10px;\n          /*box-shadow: 0px 0px 7px rgba(0,0,0,0.4);*/\n          box-shadow: 1px 0 7px rgba(102, 175, 233, 0.6);\n          height: 30px;\n          padding-left: 2px;\n          padding-right: 8px;\n          position: absolute;\n          right: -77px;\n          top: 0;\n          z-index: 99 !important; }\n  .comps-grid-container .grid-item .row.grid-row .flyout .fa {\n            color: white;\n            cursor: pointer;\n            margin-top: 1px;\n            text-shadow: 2px 2px 0 #2b5c87, -1px -1px 0 #2b5c87, 1px -1px 0 #2b5c87, -1px 1px 0 #2b5c87, 1px 1px 0 #2b5c87;\n            text-decoration: none; }\n  .comps-grid-container .grid-item .row.grid-row .flyout .fa:first-child {\n              margin-right: 6px; }\n  .comps-grid-container .grid-item .row.grid-row .flyout .fa:hover, .comps-grid-container .grid-item .row.grid-row .flyout .fa:focus {\n              /*color: #fefbdd;*/\n              text-shadow: 2px 2px 0 #aa1c03, -1px -1px 0 #aa1c03, 1px -1px 0 #aa1c03, -1px 1px 0 #aa1c03, 1px 1px 0 #aa1c03;\n              text-decoration: none;\n              border: none;\n              outline: none; }\n  .comps-grid-container .grid-item .row.grid-row .flyout.room-count {\n            top: 20px; }\n  .comps-grid-container .grid-item .row.grid-row .flyout.address {\n            top: 15px; }\n  .comps-grid-container .grid-item .row.grid-row.address-row {\n          height: auto;\n          border: none; }\n  .comps-grid-container .grid-item .row.grid-row.address-row div[class^=\"col-\"] {\n            height: auto;\n            padding: 0; }\n  .comps-grid-container .grid-item.add-comp {\n      height: 1196px;\n      border-left: 1px solid #abadb3; }\n  .comps-grid-container .grid-item.add-comp h1 {\n        padding-left: 5px; }\n  .comps-grid-container .grid-item.add-comp .no-data {\n        margin-top: 108px; }\n  .comps-grid-container .grid-item.subject {\n      border-left: 1px solid #abadb3;\n      border-top-color: #327fba;\n      width: 240px; }\n  .comps-grid-container .grid-item.subject.scrolling-top-margin {\n        margin-top: 22px; }\n  .comps-grid-container .grid-item.subject h1 {\n        background-color: #327fba;\n        padding-left: 10px; }\n  .comps-grid-container .grid-item.subject .parcel-detail-link-container {\n        width: 98px; }\n  .comps-grid-container .grid-item.first {\n      border-left: 1px solid #abadb3;\n      width: 231px; }\n  .comps-grid-container .grid-item.dragging {\n      border-left: 1px solid #abadb3;\n      opacity: 0.25;\n      -webkit-transform: scale(0.8);\n      transform: scale(0.8); }\n  .comps-grid-container .grid-item.dragging-sibling {\n      border-left: 1px solid #abadb3; }\n  .comps-grid-container .grid-item.drag-over {\n      border-right: 3px dotted #327fba; }\n  .comps-grid-container .grid-item.drag-over.dragging {\n        border-right: 1px solid #abadb3; }\n  .comps-grid-container .comp-container.horizontal-scroll {\n    overflow-x: scroll; }\n  .comps-grid-container .comp-container.top-scrollbar, .comps-grid-container .comp-container.top-scrollbar .comps {\n    -webkit-transform: rotateX(180deg);\n            transform: rotateX(180deg); }\n  .comps-grid-container .comp-container .comps {\n    display: inline-block;\n    margin: 0;\n    padding: 0;\n    white-space: nowrap; }\n  .comps-grid-container .comp-container .modal .modal-dialog {\n    width: 662px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21wYXJhYmxlcy9ncmlkL0M6XFxVc2Vyc1xccmxpZmZlcnRoXFxzb3VyY2VcXHJlcG9zXFxUZXN0XFxETS5OZy5XZWJcXGRtLXRlc3QyL3NyY1xcYXBwXFxtb2R1bGVzXFxjb21wYXJhYmxlc1xcZ3JpZFxcZ3JpZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb21wYXJhYmxlcy9ncmlkL2dyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRSxrQkFBa0IsRUFBQTtFQURwQjtJQUtJLHNDQUFBO0lBQ0EseUJBZmlCO0lBZ0JqQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHVDQUErQjtJQUEvQiwrQkFBK0I7SUFBL0IsNERBQStCO0lBQy9CLFlBQVksRUFBQTtFQWhCaEI7TUFtQk0sOENBQTJDLEVBQUE7RUFuQmpEO01BdUJNLHlCQS9CYztNQWdDZCxXQUFXO01BQ1gsdUJBQXVCO01BQ3ZCLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsU0FBUztNQUNULHVCQUF1QjtNQUN2QixrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCOzs7Ozs7Ozs7O1FDTEUsRURlQztFQTFDVDtNQThDTSxjQUFjO01BQ2QsZUFBZSxFQUFBO0VBL0NyQjtRQWtEUSxVQUFVLEVBQUE7RUFsRGxCO1FBc0RRLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFdBQVcsRUFBQTtFQTVEbkI7VUErRFUsc0JBQXNCO1VBQ3RCLGFBQWE7VUFDYixtQkFBbUI7VUFDbkIsV0FBVyxFQUFBO0VBbEVyQjtVQXNFVSxjQWhGUztVQWlGVCxzQkFBc0IsRUFBQTtFQXZFaEM7VUEyRVUsc0JBQXNCO1VBRXRCLG1CQUFtQjtVQUNuQixTQUFTO1VBQ1QsY0F2RlU7VUF5RlYsa0JBQWtCO1VBQ2xCLFdBQVcsRUFBQTtFQWxGckI7UUF1RlEsY0FBYztRQUNkLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsVUFBVTtRQUNWLHNCQUFzQjtRQUN0QixXQUFXLEVBQUE7RUE1Rm5CO1VBZ0dVLDBDQUEwQztVQUMxQyxXQUFXO1VBQ1gsY0FBYztVQUNkLGVBQWU7VUFDZixjQUFjO1VBQ2Qsa0JBQWtCLEVBQUE7RUFyRzVCO1lBd0dZLDZCQUE2QixFQUFBO0VBeEd6QztZQTRHWSxxQkFBcUI7WUFDckIsMENBQTBDLEVBQUE7RUE3R3REO1FBbUhRLGtCQUFrQjtRQUNsQixpQkFBaUIsRUFBQTtFQXBIekI7VUF1SFUsaUJBQWlCO1VBQ2pCLGlCQUFpQjtVQUNqQixtQkFBbUIsRUFBQTtFQXpIN0I7VUE2SFUsZ0JBQWdCO1VBQ2hCLGlCQUFpQixFQUFBO0VBOUgzQjtRQW1JUSxjQUFjLEVBQUE7RUFuSXRCO1VBc0lVLGNBQWM7VUFDZCw2QkFBNkI7VUFDN0IsbUJBQW1CO1VBQ25CLGVBQWU7VUFDZixnQkFBZ0I7VUFDaEIsa0JBQWtCLEVBQUE7RUEzSTVCO1VBK0lVLDhCQUE4QjtVQUM5QixjQUFjO1VBQ2QsdUJBQXVCO1VBQ3ZCLGVBQWU7VUFDZixnQkFBZ0I7VUFDaEIsZ0JBQWdCO1VBQ2hCLGtCQUFrQjtVQUNsQix5QkFBeUIsRUFBQTtFQXRKbkM7WUF5SlksY0FBOEI7WUFDOUIscUJBQXFCLEVBQUE7RUExSmpDO1FBZ0tRLDZCQXpLYTtRQTBLYixrQkFBa0IsRUFBQTtFQWpLMUI7VUFvS1Usc0JBQXNCO1VBQ3RCLFlBMUtZLEVBQUE7RUFLdEI7WUF3S1ksNkJBQTZCO1lBQzdCLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsWUFoTFU7WUFpTFYsY0FBYztZQUdkLCtDQUFBLEVBQWdEO0VBL0s1RDtjQWlMYyw2QkFIcUM7Y0FJckMsZUFBZSxFQUFBO0VBbEw3QjtjQXNMYyw2QkFScUM7Y0FTckMsZUFBZSxFQUFBO0VBdkw3QjtjQTJMYyw2QkFicUM7Y0FjckMsZUFBZSxFQUFBO0VBNUw3QjtjQWdNYyw2QkFsQnFDO2NBbUJyQyxlQUFlLEVBQUE7RUFqTTdCO1lBdU1jLGdCQUFnQixFQUFBO0VBdk05QjtZQTRNWSxrRkFBeUUsRUFBQTtFQTVNckY7WUFnTlksWUFBWTtZQUNaLGdCQUFnQjtZQUNoQiw2QkFBNkI7WUFDN0IseUJBQXNCO1lBQ3RCLHNCQUFzQixFQUFBO0VBcE5sQztjQXVOYyxzQkFBc0IsRUFBQTtFQXZOcEM7Y0EyTmMsZ0JBQWdCLEVBQUE7RUEzTjlCO1lBZ09ZLDBCQUEwQixFQUFBO0VBaE90QztjQW9PYyx3QkFBd0I7Y0FDeEIsU0FBUyxFQUFBO0VBck92QjtZQTBPWSxrQkFBa0IsRUFBQTtFQTFPOUI7Y0E2T2MsMEJBQXVCO2NBQ3ZCLGdCQUFnQjtjQUNoQixnQkFBZ0I7Y0FDaEI7Ozs7O3NEQy9Fd0MsRURvRkM7RUFyUHZEO2dCQXVQZ0IsY0FqUUc7Z0JBa1FILDRCQWhRSSxFQUFBO0VBUXBCO2dCQTRQZ0IsY0F0UUc7Z0JBdVFILGFBQWE7Z0JBQ2IscUJBQXFCO2dCQUNyQiw0QkF2UUksRUFBQTtFQVFwQjtnQkFtUWdCLGlCQUFpQixFQUFBO0VBblFqQztZQXlRWSxZQTVRYSxFQUFBO0VBR3pCO2NBNFFjLGVBQWU7Y0FDZixnQkFBZ0IsRUFBQTtFQTdROUI7Z0JBa1JrQixnQkFBZ0I7Z0JBQ2hCLGtCQUFrQixFQUFBO0VBblJwQztnQkF1UmtCLGdDQWhTRyxFQUFBO0VBU3JCO2NBK1JnQixZQUFZLEVBQUE7RUEvUjVCO2dCQWtTa0IsWUFBWSxFQUFBO0VBbFM5QjtjQXdTYyxpQkFBaUIsRUFBQTtFQXhTL0I7WUE2U1kseUNBQXNDLEVBQUE7RUE3U2xEO2NBZ1RjLGlCQUFpQixFQUFBO0VBaFQvQjtZQXFUWSxVQUFVLEVBQUE7RUFyVHRCO1lBeVRZLHdDQS9UdUI7WUFnVXZCLDRCQUE0QjtZQUM1QixlQUFlO1lBQ2YsbUJBQW1CLEVBQUE7RUE1VC9CO2NBK1RjLGtCQUFrQjtjQUNsQixpQkFBaUI7Y0FDakIsa0JBQWtCLEVBQUE7RUFqVWhDO1lBc1VZLFlBMVVXO1lBMlVYLG1CQUFtQixFQUFBO0VBdlUvQjtjQTBVYyxVQUFVLEVBQUE7RUExVXhCO2NBOFVjLFNBQVM7Y0FDVCxVQUFVLEVBQUE7RUEvVXhCO2dCQW1Wa0IsZ0NBNVZHO2dCQTZWSCwrQkE3Vkc7Z0JBOFZILFlBQVk7Z0JBQ1osY0FBYztnQkFDZCxrQkFBa0IsRUFBQTtFQXZWcEM7a0JBMFZvQixrQkFBa0IsRUFBQTtFQTFWdEM7Z0JBK1ZrQiwrQkF4V0csRUFBQTtFQVNyQjtrQkFrV29CLGtCQUFrQixFQUFBO0VBbFd0QztZQTBXWSwrQkFuWFMsRUFBQTtFQVNyQjtZQThXWSxrQkFBa0IsRUFBQTtFQTlXOUI7VUFtWFUsYUFBYTtVQUNiLDZCQUFBO1VBQ0EscUNBQUE7VUFDQSwwQ0FBdUM7VUFDdkMsZ0NBQWdDO1VBQ2hDLDZCQUE2QjtVQUM3QiwyQ0FBQTtVQUNBLDhDQUEyQztVQUMzQyxZQUFZO1VBQ1osaUJBQWlCO1VBQ2pCLGtCQUFrQjtVQUNsQixrQkFBa0I7VUFDbEIsWUFBWTtVQUNaLE1BQU07VUFDTixzQkFBc0IsRUFBQTtFQWpZaEM7WUFzWVksWUFBNEI7WUFDNUIsZUFBZTtZQUNmLGVBQWU7WUFDZiw4R0FOa0I7WUFPbEIscUJBQXFCLEVBQUE7RUExWWpDO2NBNlljLGlCQUFpQixFQUFBO0VBN1kvQjtjQW1aYyxrQkFBQTtjQUNBLDhHQUp3QjtjQUt4QixxQkFBcUI7Y0FDckIsWUFBWTtjQUNaLGFBQWEsRUFBQTtFQXZaM0I7WUE0WlksU0FBUyxFQUFBO0VBNVpyQjtZQWdhWSxTQUFTLEVBQUE7RUFoYXJCO1VBcWFVLFlBQVk7VUFDWixZQUFZLEVBQUE7RUF0YXRCO1lBeWFZLFlBQVk7WUFDWixVQUFVLEVBQUE7RUExYXRCO01BaWJNLGNBbmJrQjtNQW9ibEIsOEJBM2JlLEVBQUE7RUFTckI7UUFxYlEsaUJBQWlCLEVBQUE7RUFyYnpCO1FBeWJRLGlCQUFpQixFQUFBO0VBemJ6QjtNQThiTSw4QkF2Y2U7TUF3Y2YseUJBemNhO01BMmNiLFlBQVksRUFBQTtFQWpjbEI7UUFvY1EsZ0JBQWdCLEVBQUE7RUFwY3hCO1FBd2NRLHlCQWxkVztRQW1kWCxrQkFBa0IsRUFBQTtFQXpjMUI7UUE2Y1EsV0FBVyxFQUFBO0VBN2NuQjtNQWtkTSw4QkEzZGU7TUE0ZGYsWUFBWSxFQUFBO0VBbmRsQjtNQXVkTSw4QkFoZWU7TUFpZWYsYUFBYTtNQUliLDZCQUE2QjtNQUM3QixxQkFBcUIsRUFBQTtFQTdkM0I7TUFpZU0sOEJBMWVlLEVBQUE7RUFTckI7TUFxZU0sZ0NBL2VhLEVBQUE7RUFVbkI7UUF3ZVEsK0JBamZhLEVBQUE7RUFTckI7SUFpZk0sa0JBQWtCLEVBQUE7RUFqZnhCO0lBcWZNLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQTtFQXJmaEM7SUF5Zk0scUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUJBQW1CLEVBQUE7RUE1ZnpCO0lBaWdCUSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbXBhcmFibGVzL2dyaWQvZ3JpZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmlkLWJsdWU6ICMzMjdmYmE7XHJcbiRncmlkLWJvcmRlcjogI2FiYWRiMztcclxuJGdyaWQtZ3JlZW46ICMwMGJiM2Y7XHJcbi8vJGdyaWQtbGFiZWwtYmc6IHJnYmEoODQsIDg0LCA4NCwgMC4zKTtcclxuJGdyaWQtbGFiZWwtYmc6IHJnYmEoMCwxMTQsMTg4LDAuMik7XHJcbiRncmlkLXJvdy1oZWlnaHQ6IDMwcHg7XHJcbiR0YWxsLWdyaWQtaGVpZ2h0OiA1MHB4O1xyXG4kZG91YmxlLWdyaWQtaGVpZ2h0OiA2MHB4O1xyXG4kYWRkLWRhdGEtaGVpZ2h0OiAxMTk2cHg7XHJcblxyXG4uY29tcHMtZ3JpZC1jb250YWluZXIge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuXHJcblxyXG4gIC5ncmlkLWl0ZW0ge1xyXG4gICAgLypib3JkZXItdG9wOiAxMHB4IHNvbGlkICRncmlkLWdyZWVuOyovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JpZC1ib3JkZXI7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG5cclxuICAgICYuZ3JpZC1pdGVtLWZvY3VzIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDJweCAycHggcmdiYSgyNTUsMjQyLDAsMC4zKTtcclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmlkLWdyZWVuO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiA2cHggMCA1cHggMzBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAvKi5kcmFnZ2FibGUtaWNvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKC4uL2ltYWdlcy9kcmFnZ2FibGUtaWNvbi5wbmcpIG5vLXJlcGVhdCAwIDA7XHJcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgbGVmdDogNnB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgIH0qL1xyXG4gICAgfVxyXG5cclxuICAgIC5yb3cge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG5cclxuICAgICAgLmNvbC1tZC0xMiB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLml0ZW0tcGhvdG8ge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBtYXJnaW46IDRweCAwIDAgNHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTMzcHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIG1pbi13aWR0aDogMTMyLjY2cHg7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5waG90by1pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiAkZ3JpZC1ibHVlO1xyXG4gICAgICAgICAgcGFkZGluZzogMTJweCAwIDAgMTlweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hZGQtcGhvdG8taWNvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgLy9ib3JkZXI6IDNweCBzb2xpZCAkZ3JpZC1ncmVlbjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XHJcbiAgICAgICAgICB0b3A6IDU1cHg7XHJcbiAgICAgICAgICBjb2xvcjogJGdyaWQtZ3JlZW47XHJcbiAgICAgICAgICAvL3BhZGRpbmc6IDFweCAzcHggMCA0cHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYXJjZWwtZGV0YWlsLWxpbmstY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luOiAzNHB4IDFweCAwIDFweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgd2lkdGg6IDg5cHg7XHJcblxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsIDEyNywgMTg2LCAwLjg1KTtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwgMTI3LCAxODYsIDAuOTUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgYWRkcmVzcyB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMCAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG5cclxuICAgICAgICAuYWRkcmVzcyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1LjVweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hZGRyZXNzLXN1YiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLm5vLWRhdGEge1xyXG4gICAgICAgIGhlaWdodDogMTE2OHB4O1xyXG5cclxuICAgICAgICAubm8tZGF0YS1mb3VuZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLCBNb250c2VycmF0O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWRkLXByb3BlcnR5LWRhdGEge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoNTEsIDEyMiwgMTgzLCAwLjgpO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoNTEsIDEyMiwgMTgzLCAxLjApO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmdyaWQtcm93IHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGdyaWQtYm9yZGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgZGl2W2NsYXNzXj1cImNvbC1cIl0ge1xyXG4gICAgICAgICAgcGFkZGluZzogNnB4IDAgNnB4IDJweDtcclxuICAgICAgICAgIGhlaWdodDogJGdyaWQtcm93LWhlaWdodDtcclxuXHJcbiAgICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAkZ3JpZC1yb3ctaGVpZ2h0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDRweDtcclxuXHJcbiAgICAgICAgICAgICRwbGFjZWhvbGRlci1jb2xvcjogcmdiYSgwLDExNCwxODgsMC4zKTtcclxuICAgICAgICAgICAgLyokcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMTcxLCAxNzMsIDE3OSwwLjYpOyovXHJcbiAgICAgICAgICAgICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkcGxhY2Vob2xkZXItY29sb3I7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICBjb2xvcjogJHBsYWNlaG9sZGVyLWNvbG9yO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICBjb2xvcjogJHBsYWNlaG9sZGVyLWNvbG9yO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkcGxhY2Vob2xkZXItY29sb3I7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmlucHV0LWdyb3VwIHtcclxuICAgICAgICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5mb3JtLWZvY3VzLWZvY3VzIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDhweCByZ2JhKDEwMiwxNzUsMjMzLC42KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaW5wdXQtZ3JvdXAtYWRkb24ge1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzLjVweCAwIDAgM3B4O1xyXG5cclxuICAgICAgICAgICAgJi50cmFpbGluZyB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMy41cHggMnB4IDAgMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5zbSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgICAgICAgICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG5cclxuICAgICAgICAgICAgJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuICAgICAgICAgICAgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYuYWRqdXN0LXBsdXMtbWludXMge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjI1KTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgLypmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAzcHggMC41cHggM3B4OyovXHJcbiAgICAgICAgICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdyaWQtYmx1ZTtcclxuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMnB4ICRncmlkLWdyZWVuO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdyaWQtYmx1ZTtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDJweCAkZ3JpZC1ncmVlbjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLmFkanVzdGVkLXNhbGVzLXByaWNlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAkZG91YmxlLWdyaWQtaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcblxyXG4gICAgICAgICAgICAgIC5yb3cge1xyXG5cclxuICAgICAgICAgICAgICAgIC5pbnB1dC1ncm91cC1hZGRvbiB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmlkLWJvcmRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbnB1dC1ncm91cCB7XHJcblxyXG4gICAgICAgICAgICAgICYudmVydC1hbGlnbiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuZ3JpZC1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIxcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLmdyaWQtYWRqdXN0IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDExNCwxODgsMC4wMyk7XHJcblxyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLmdyaWQtaW5wdXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYuZ3JpZC1sYWJlbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmlkLWxhYmVsLWJnO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1BUIFNhbnMnLCBMYXRvO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gICAgICAgICAgICAmLmxhYmVsLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYucm9vbS1jb3VudCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogJHRhbGwtZ3JpZC1oZWlnaHQ7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcblxyXG4gICAgICAgICAgICAmLmdyaWQtaW5wdXQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgICAgIC5ncmlkLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmlkLWJvcmRlcjtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGdyaWQtYm9yZGVyO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweCAwO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5ncmlkLWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGdyaWQtYm9yZGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGdyaWQtYm9yZGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYuY29sLW1kLTEyIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZseW91dCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgLypib3JkZXI6IDFweCBzb2xpZCAjYWJhZGIzOyovXHJcbiAgICAgICAgICAvKmJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTsqL1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDIsMTc1LDIzMywwLjQpO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgICAgIC8qYm94LXNoYWRvdzogMHB4IDBweCA3cHggcmdiYSgwLDAsMCwwLjQpOyovXHJcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMCA3cHggcmdiYSgxMDIsMTc1LDIzMywwLjYpO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogLTc3cHg7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICB6LWluZGV4OiA5OSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICRpY29uLWNvbG9yOiAjMmI1Yzg3O1xyXG5cclxuICAgICAgICAgIC5mYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEuMCk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAwICRpY29uLWNvbG9yLCAtMXB4IC0xcHggMCAkaWNvbi1jb2xvciwgMXB4IC0xcHggMCAkaWNvbi1jb2xvciwgLTFweCAxcHggMCAkaWNvbi1jb2xvciwgMXB4IDFweCAwICRpY29uLWNvbG9yO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJGljb24tY29sb3ItaG92ZXI6ICNhYTFjMDM7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyLCAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAvKmNvbG9yOiAjZmVmYmRkOyovXHJcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMCAkaWNvbi1jb2xvci1ob3ZlciwgLTFweCAtMXB4IDAgJGljb24tY29sb3ItaG92ZXIsIDFweCAtMXB4IDAgJGljb24tY29sb3ItaG92ZXIsIC0xcHggMXB4IDAgJGljb24tY29sb3ItaG92ZXIsIDFweCAxcHggMCAkaWNvbi1jb2xvci1ob3ZlcjtcclxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLnJvb20tY291bnQge1xyXG4gICAgICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5hZGRyZXNzIHtcclxuICAgICAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5hZGRyZXNzLXJvdyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgICAgICAgZGl2W2NsYXNzXj1cImNvbC1cIl0ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5hZGQtY29tcCB7XHJcbiAgICAgIGhlaWdodDogJGFkZC1kYXRhLWhlaWdodDtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkZ3JpZC1ib3JkZXI7XHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uby1kYXRhIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuc3ViamVjdCB7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGdyaWQtYm9yZGVyO1xyXG4gICAgICBib3JkZXItdG9wLWNvbG9yOiAkZ3JpZC1ibHVlO1xyXG4gICAgICAvL21hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICB3aWR0aDogMjQwcHg7XHJcblxyXG4gICAgICAmLnNjcm9sbGluZy10b3AtbWFyZ2luIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyaWQtYmx1ZTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wYXJjZWwtZGV0YWlsLWxpbmstY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogOThweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuZmlyc3Qge1xyXG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRncmlkLWJvcmRlcjtcclxuICAgICAgd2lkdGg6IDIzMXB4O1xyXG4gICAgfVxyXG5cclxuICAgICYuZHJhZ2dpbmcge1xyXG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRncmlkLWJvcmRlcjtcclxuICAgICAgb3BhY2l0eTogMC4yNTtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgIH1cclxuXHJcbiAgICAmLmRyYWdnaW5nLXNpYmxpbmcge1xyXG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRncmlkLWJvcmRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmLmRyYWctb3ZlciB7XHJcbiAgICAgIGJvcmRlci1yaWdodDogM3B4IGRvdHRlZCAkZ3JpZC1ibHVlO1xyXG5cclxuICAgICAgJi5kcmFnZ2luZyB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGdyaWQtYm9yZGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29tcC1jb250YWluZXIge1xyXG4gICAgXHJcbiAgICAmLmhvcml6b250YWwtc2Nyb2xsIHtcclxuICAgICAgLy9ib3gtc2hhZG93OiBpbnNldCAtNHB4IDAgOHB4IC00cHggcmdiYSgwLDAsMCwwLjIpLCBpbnNldCA0cHggMCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIH1cclxuXHJcbiAgICAmLnRvcC1zY3JvbGxiYXIsICYudG9wLXNjcm9sbGJhciAuY29tcHMgeyAvLyBIYWNrIHRvIG1vdmUgc2Nyb2xsYmFyIHRvIHRvcCBvZiBkaXYgLSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE4OTk3NzI0L2hvdy10by1jaGFuZ2Utc2Nyb2xsLWJhci1wb3NpdGlvbi13aXRoLWNzc1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAuY29tcHMge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxuXHJcbiAgICAubW9kYWwge1xyXG4gICAgICAubW9kYWwtZGlhbG9nIHtcclxuICAgICAgICB3aWR0aDogNjYycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNvbXBzLWdyaWQtY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4OyB9XG4gIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtIHtcbiAgICAvKmJvcmRlci10b3A6IDEwcHggc29saWQgJGdyaWQtZ3JlZW47Ki9cbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWJhZGIzO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgICB3aWR0aDogMjMwcHg7IH1cbiAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbS5ncmlkLWl0ZW0tZm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDJweCAycHggcmdiYSgyNTUsIDI0MiwgMCwgMC4zKTsgfVxuICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtIGgxIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGJiM2Y7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDZweCAwIDVweCAzMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIC8qLmRyYWdnYWJsZS1pY29uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoLi4vaW1hZ2VzL2RyYWdnYWJsZS1pY29uLnBuZykgbm8tcmVwZWF0IDAgMDtcclxuICAgICAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICBsZWZ0OiA2cHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC4zO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgfSovIH1cbiAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbSAucm93IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XG4gICAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbSAucm93IC5jb2wtbWQtMTIge1xuICAgICAgICBwYWRkaW5nOiAwOyB9XG4gICAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbSAucm93IC5pdGVtLXBob3RvIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIG1hcmdpbjogNHB4IDAgMCA0cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEzM3B4O1xuICAgICAgICBmbG9hdDogbGVmdDsgfVxuICAgICAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbSAucm93IC5pdGVtLXBob3RvIGltZyB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIG1pbi13aWR0aDogMTMyLjY2cHg7XG4gICAgICAgICAgd2lkdGg6IGF1dG87IH1cbiAgICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdyAuaXRlbS1waG90byAucGhvdG8taWNvbiB7XG4gICAgICAgICAgY29sb3I6ICMzMjdmYmE7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAwIDAgMTlweDsgfVxuICAgICAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbSAucm93IC5pdGVtLXBob3RvIC5hZGQtcGhvdG8taWNvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICAgICAgICAgIHRvcDogNTVweDtcbiAgICAgICAgICBjb2xvcjogIzAwYmIzZjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDMwcHg7IH1cbiAgICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtIC5yb3cgLnBhcmNlbC1kZXRhaWwtbGluay1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBtYXJnaW46IDM0cHggMXB4IDAgMXB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB3aWR0aDogODlweDsgfVxuICAgICAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbSAucm93IC5wYXJjZWwtZGV0YWlsLWxpbmstY29udGFpbmVyIGEge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsIDEyNywgMTg2LCAwLjg1KTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdyAucGFyY2VsLWRldGFpbC1saW5rLWNvbnRhaW5lciBhOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmOyB9XG4gICAgICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdyAucGFyY2VsLWRldGFpbC1saW5rLWNvbnRhaW5lciBhOmhvdmVyLCAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbSAucm93IC5wYXJjZWwtZGV0YWlsLWxpbmstY29udGFpbmVyIGE6Zm9jdXMge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwgMTI3LCAxODYsIDAuOTUpOyB9XG4gICAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbSAucm93IGFkZHJlc3Mge1xuICAgICAgICBtYXJnaW46IDVweCAwIDE1cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNHB4OyB9XG4gICAgICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtIC5yb3cgYWRkcmVzcyAuYWRkcmVzcyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNS41cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDsgfVxuICAgICAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbSAucm93IGFkZHJlc3MgLmFkZHJlc3Mtc3ViIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMXB4OyB9XG4gICAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbSAucm93Lm5vLWRhdGEge1xuICAgICAgICBoZWlnaHQ6IDExNjhweDsgfVxuICAgICAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbSAucm93Lm5vLWRhdGEgLm5vLWRhdGEtZm91bmQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLCBNb250c2VycmF0O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtIC5yb3cubm8tZGF0YSAuYWRkLXByb3BlcnR5LWRhdGEge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDUxLCAxMjIsIDE4MywgMC44KTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4gICAgICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdy5uby1kYXRhIC5hZGQtcHJvcGVydHktZGF0YTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogIzMzN2FiNztcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdy5ncmlkLXJvdyB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYWJhZGIzO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdy5ncmlkLXJvdyBkaXZbY2xhc3NePVwiY29sLVwiXSB7XG4gICAgICAgICAgcGFkZGluZzogNnB4IDAgNnB4IDJweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7IH1cbiAgICAgICAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbSAucm93LmdyaWQtcm93IGRpdltjbGFzc149XCJjb2wtXCJdIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCA0cHg7XG4gICAgICAgICAgICAvKiRwbGFjZWhvbGRlci1jb2xvcjogcmdiYSgxNzEsIDE3MywgMTc5LDAuNik7Ki8gfVxuICAgICAgICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdy5ncmlkLXJvdyBkaXZbY2xhc3NePVwiY29sLVwiXSAuZm9ybS1jb250cm9sOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMTE0LCAxODgsIDAuMyk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDsgfVxuICAgICAgICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdy5ncmlkLXJvdyBkaXZbY2xhc3NePVwiY29sLVwiXSAuZm9ybS1jb250cm9sOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMTE0LCAxODgsIDAuMyk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDsgfVxuICAgICAgICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdy5ncmlkLXJvdyBkaXZbY2xhc3NePVwiY29sLVwiXSAuZm9ybS1jb250cm9sOi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAxMTQsIDE4OCwgMC4zKTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4OyB9XG4gICAgICAgICAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbSAucm93LmdyaWQtcm93IGRpdltjbGFzc149XCJjb2wtXCJdIC5mb3JtLWNvbnRyb2w6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMTE0LCAxODgsIDAuMyk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDsgfVxuICAgICAgICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtIC5yb3cuZ3JpZC1yb3cgZGl2W2NsYXNzXj1cImNvbC1cIl0gLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTsgfVxuICAgICAgICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtIC5yb3cuZ3JpZC1yb3cgZGl2W2NsYXNzXj1cImNvbC1cIl0gLmZvcm0tZm9jdXMtZm9jdXMge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgOHB4IHJnYmEoMTAyLCAxNzUsIDIzMywgMC42KTsgfVxuICAgICAgICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtIC5yb3cuZ3JpZC1yb3cgZGl2W2NsYXNzXj1cImNvbC1cIl0gLmlucHV0LWdyb3VwLWFkZG9uIHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgICAgICBwYWRkaW5nOiAzLjVweCAwIDAgM3B4OyB9XG4gICAgICAgICAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbSAucm93LmdyaWQtcm93IGRpdltjbGFzc149XCJjb2wtXCJdIC5pbnB1dC1ncm91cC1hZGRvbi50cmFpbGluZyB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDMuNXB4IDJweCAwIDA7IH1cbiAgICAgICAgICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtIC5yb3cuZ3JpZC1yb3cgZGl2W2NsYXNzXj1cImNvbC1cIl0gLmlucHV0LWdyb3VwLWFkZG9uLnNtIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTsgfVxuICAgICAgICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtIC5yb3cuZ3JpZC1yb3cgZGl2W2NsYXNzXj1cImNvbC1cIl0gaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgICAgICAgICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkOyB9XG4gICAgICAgICAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbSAucm93LmdyaWQtcm93IGRpdltjbGFzc149XCJjb2wtXCJdIGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdy5ncmlkLXJvdyBkaXZbY2xhc3NePVwiY29sLVwiXSBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDsgfVxuICAgICAgICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtIC5yb3cuZ3JpZC1yb3cgZGl2W2NsYXNzXj1cImNvbC1cIl0uYWRqdXN0LXBsdXMtbWludXMge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICAgICAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbSAucm93LmdyaWQtcm93IGRpdltjbGFzc149XCJjb2wtXCJdLmFkanVzdC1wbHVzLW1pbnVzIGEge1xuICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgLypmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAzcHggMC41cHggM3B4OyovIH1cbiAgICAgICAgICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdy5ncmlkLXJvdyBkaXZbY2xhc3NePVwiY29sLVwiXS5hZGp1c3QtcGx1cy1taW51cyBhLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMyN2ZiYTtcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDJweCAjMDBiYjNmOyB9XG4gICAgICAgICAgICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtIC5yb3cuZ3JpZC1yb3cgZGl2W2NsYXNzXj1cImNvbC1cIl0uYWRqdXN0LXBsdXMtbWludXMgYTpob3ZlciwgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdy5ncmlkLXJvdyBkaXZbY2xhc3NePVwiY29sLVwiXS5hZGp1c3QtcGx1cy1taW51cyBhOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMyN2ZiYTtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDJweCAjMDBiYjNmOyB9XG4gICAgICAgICAgICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtIC5yb3cuZ3JpZC1yb3cgZGl2W2NsYXNzXj1cImNvbC1cIl0uYWRqdXN0LXBsdXMtbWludXMgYTpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDsgfVxuICAgICAgICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtIC5yb3cuZ3JpZC1yb3cgZGl2W2NsYXNzXj1cImNvbC1cIl0uYWRqdXN0ZWQtc2FsZXMtcHJpY2Uge1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4OyB9XG4gICAgICAgICAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbSAucm93LmdyaWQtcm93IGRpdltjbGFzc149XCJjb2wtXCJdLmFkanVzdGVkLXNhbGVzLXByaWNlIC5jb250YWluZXItZmx1aWQge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7IH1cbiAgICAgICAgICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdy5ncmlkLXJvdyBkaXZbY2xhc3NePVwiY29sLVwiXS5hZGp1c3RlZC1zYWxlcy1wcmljZSAuY29udGFpbmVyLWZsdWlkIC5yb3cgLmlucHV0LWdyb3VwLWFkZG9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFweDsgfVxuICAgICAgICAgICAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbSAucm93LmdyaWQtcm93IGRpdltjbGFzc149XCJjb2wtXCJdLmFkanVzdGVkLXNhbGVzLXByaWNlIC5jb250YWluZXItZmx1aWQgLnJvdzpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYmFkYjM7IH1cbiAgICAgICAgICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtIC5yb3cuZ3JpZC1yb3cgZGl2W2NsYXNzXj1cImNvbC1cIl0uYWRqdXN0ZWQtc2FsZXMtcHJpY2UgLmlucHV0LWdyb3VwLnZlcnQtYWxpZ24ge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7IH1cbiAgICAgICAgICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdy5ncmlkLXJvdyBkaXZbY2xhc3NePVwiY29sLVwiXS5hZGp1c3RlZC1zYWxlcy1wcmljZSAuaW5wdXQtZ3JvdXAudmVydC1hbGlnbiAuZm9ybS1jb250cm9sIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7IH1cbiAgICAgICAgICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtIC5yb3cuZ3JpZC1yb3cgZGl2W2NsYXNzXj1cImNvbC1cIl0uYWRqdXN0ZWQtc2FsZXMtcHJpY2UuZ3JpZC1sYWJlbCB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMXB4OyB9XG4gICAgICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdy5ncmlkLXJvdyBkaXZbY2xhc3NePVwiY29sLVwiXS5ncmlkLWFkanVzdCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExNCwgMTg4LCAwLjAzKTsgfVxuICAgICAgICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdy5ncmlkLXJvdyBkaXZbY2xhc3NePVwiY29sLVwiXS5ncmlkLWFkanVzdCBpbnB1dCB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XG4gICAgICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdy5ncmlkLXJvdyBkaXZbY2xhc3NePVwiY29sLVwiXS5ncmlkLWlucHV0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7IH1cbiAgICAgICAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbSAucm93LmdyaWQtcm93IGRpdltjbGFzc149XCJjb2wtXCJdLmdyaWQtbGFiZWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTQsIDE4OCwgMC4yKTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUFQgU2FucycsIExhdG87XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgICAgICAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbSAucm93LmdyaWQtcm93IGRpdltjbGFzc149XCJjb2wtXCJdLmdyaWQtbGFiZWwubGFiZWwtaGVhZGVyIHtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdy5ncmlkLXJvdyBkaXZbY2xhc3NePVwiY29sLVwiXS5yb29tLWNvdW50IHtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IH1cbiAgICAgICAgICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtIC5yb3cuZ3JpZC1yb3cgZGl2W2NsYXNzXj1cImNvbC1cIl0ucm9vbS1jb3VudC5ncmlkLWlucHV0IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDsgfVxuICAgICAgICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdy5ncmlkLXJvdyBkaXZbY2xhc3NePVwiY29sLVwiXS5yb29tLWNvdW50IC5jb250YWluZXItZmx1aWQge1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7IH1cbiAgICAgICAgICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdy5ncmlkLXJvdyBkaXZbY2xhc3NePVwiY29sLVwiXS5yb29tLWNvdW50IC5jb250YWluZXItZmx1aWQgLnJvdyAuZ3JpZC1sYWJlbCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYmFkYjM7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2FiYWRiMztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXB4IDA7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICAgICAgICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdy5ncmlkLXJvdyBkaXZbY2xhc3NePVwiY29sLVwiXS5yb29tLWNvdW50IC5jb250YWluZXItZmx1aWQgLnJvdyAuZ3JpZC1sYWJlbDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTsgfVxuICAgICAgICAgICAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbSAucm93LmdyaWQtcm93IGRpdltjbGFzc149XCJjb2wtXCJdLnJvb20tY291bnQgLmNvbnRhaW5lci1mbHVpZCAucm93IC5ncmlkLWlucHV0IHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYWJhZGIzOyB9XG4gICAgICAgICAgICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdy5ncmlkLXJvdyBkaXZbY2xhc3NePVwiY29sLVwiXS5yb29tLWNvdW50IC5jb250YWluZXItZmx1aWQgLnJvdyAuZ3JpZC1pbnB1dDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTsgfVxuICAgICAgICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtIC5yb3cuZ3JpZC1yb3cgZGl2W2NsYXNzXj1cImNvbC1cIl06Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2FiYWRiMzsgfVxuICAgICAgICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtIC5yb3cuZ3JpZC1yb3cgZGl2W2NsYXNzXj1cImNvbC1cIl0uY29sLW1kLTEyIHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTsgfVxuICAgICAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbSAucm93LmdyaWQtcm93IC5mbHlvdXQge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgLypib3JkZXI6IDFweCBzb2xpZCAjYWJhZGIzOyovXG4gICAgICAgICAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7Ki9cbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMiwgMTc1LCAyMzMsIDAuNCk7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgLypib3gtc2hhZG93OiAwcHggMHB4IDdweCByZ2JhKDAsMCwwLDAuNCk7Ki9cbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMCA3cHggcmdiYSgxMDIsIDE3NSwgMjMzLCAwLjYpO1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiAtNzdweDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgei1pbmRleDogOTkgIWltcG9ydGFudDsgfVxuICAgICAgICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtIC5yb3cuZ3JpZC1yb3cgLmZseW91dCAuZmEge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMCAjMmI1Yzg3LCAtMXB4IC0xcHggMCAjMmI1Yzg3LCAxcHggLTFweCAwICMyYjVjODcsIC0xcHggMXB4IDAgIzJiNWM4NywgMXB4IDFweCAwICMyYjVjODc7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbiAgICAgICAgICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtIC5yb3cuZ3JpZC1yb3cgLmZseW91dCAuZmE6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDsgfVxuICAgICAgICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdy5ncmlkLXJvdyAuZmx5b3V0IC5mYTpob3ZlciwgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdy5ncmlkLXJvdyAuZmx5b3V0IC5mYTpmb2N1cyB7XG4gICAgICAgICAgICAgIC8qY29sb3I6ICNmZWZiZGQ7Ki9cbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMCAjYWExYzAzLCAtMXB4IC0xcHggMCAjYWExYzAzLCAxcHggLTFweCAwICNhYTFjMDMsIC0xcHggMXB4IDAgI2FhMWMwMywgMXB4IDFweCAwICNhYTFjMDM7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdy5ncmlkLXJvdyAuZmx5b3V0LnJvb20tY291bnQge1xuICAgICAgICAgICAgdG9wOiAyMHB4OyB9XG4gICAgICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0gLnJvdy5ncmlkLXJvdyAuZmx5b3V0LmFkZHJlc3Mge1xuICAgICAgICAgICAgdG9wOiAxNXB4OyB9XG4gICAgICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtIC5yb3cuZ3JpZC1yb3cuYWRkcmVzcy1yb3cge1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICBib3JkZXI6IG5vbmU7IH1cbiAgICAgICAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbSAucm93LmdyaWQtcm93LmFkZHJlc3Mtcm93IGRpdltjbGFzc149XCJjb2wtXCJdIHtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7IH1cbiAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbS5hZGQtY29tcCB7XG4gICAgICBoZWlnaHQ6IDExOTZweDtcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2FiYWRiMzsgfVxuICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0uYWRkLWNvbXAgaDEge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDsgfVxuICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0uYWRkLWNvbXAgLm5vLWRhdGEge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMDhweDsgfVxuICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtLnN1YmplY3Qge1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYWJhZGIzO1xuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzMyN2ZiYTtcbiAgICAgIHdpZHRoOiAyNDBweDsgfVxuICAgICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0uc3ViamVjdC5zY3JvbGxpbmctdG9wLW1hcmdpbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIycHg7IH1cbiAgICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtLnN1YmplY3QgaDEge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI3ZmJhO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7IH1cbiAgICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtLnN1YmplY3QgLnBhcmNlbC1kZXRhaWwtbGluay1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogOThweDsgfVxuICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtLmZpcnN0IHtcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2FiYWRiMztcbiAgICAgIHdpZHRoOiAyMzFweDsgfVxuICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtLmRyYWdnaW5nIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2FiYWRiMztcbiAgICAgIG9wYWNpdHk6IDAuMjU7XG4gICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTsgfVxuICAgIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuZ3JpZC1pdGVtLmRyYWdnaW5nLXNpYmxpbmcge1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYWJhZGIzOyB9XG4gICAgLmNvbXBzLWdyaWQtY29udGFpbmVyIC5ncmlkLWl0ZW0uZHJhZy1vdmVyIHtcbiAgICAgIGJvcmRlci1yaWdodDogM3B4IGRvdHRlZCAjMzI3ZmJhOyB9XG4gICAgICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbS5kcmFnLW92ZXIuZHJhZ2dpbmcge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYWJhZGIzOyB9XG4gIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuY29tcC1jb250YWluZXIuaG9yaXpvbnRhbC1zY3JvbGwge1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDsgfVxuICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmNvbXAtY29udGFpbmVyLnRvcC1zY3JvbGxiYXIsIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuY29tcC1jb250YWluZXIudG9wLXNjcm9sbGJhciAuY29tcHMge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpOyB9XG4gIC5jb21wcy1ncmlkLWNvbnRhaW5lciAuY29tcC1jb250YWluZXIgLmNvbXBzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAuY29tcHMtZ3JpZC1jb250YWluZXIgLmNvbXAtY29udGFpbmVyIC5tb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICB3aWR0aDogNjYycHg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/comparables/grid/grid.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/comparables/grid/grid.component.ts ***!
  \************************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridComponent = /** @class */ (function () {
    function GridComponent() {
    }
    GridComponent.prototype.ngOnInit = function () {
        this.compCount = 5;
        this.addressLine1 = "123 Somewhere Ave.";
        this.city = "Layton";
        this.state = "UT";
        this.zip = "84041";
    };
    GridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/modules/comparables/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/modules/comparables/grid/grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/modules/comparables/map/map.component.html":
/*!************************************************************!*\
  !*** ./src/app/modules/comparables/map/map.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  map works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/comparables/map/map.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/comparables/map/map.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tcGFyYWJsZXMvbWFwL21hcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/comparables/map/map.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/comparables/map/map.component.ts ***!
  \**********************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapComponent = /** @class */ (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/modules/comparables/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/modules/comparables/map/map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/modules/comparables/upload/upload.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/comparables/upload/upload.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  upload works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/comparables/upload/upload.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/comparables/upload/upload.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tcGFyYWJsZXMvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/comparables/upload/upload.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/comparables/upload/upload.component.ts ***!
  \****************************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UploadComponent = /** @class */ (function () {
    function UploadComponent() {
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/modules/comparables/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.scss */ "./src/app/modules/comparables/upload/upload.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/analytics/analytics.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modules/home/analytics/analytics.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"analytics\">\r\n\r\n  <div class=\"analysis-item\">\r\n    <span class=\"number\">28</span>\r\n    <label>active export days</label>\r\n  </div>\r\n\r\n  <div class=\"analysis-item\">\r\n    <span class=\"number\">233</span>\r\n    <label>properties exported</label>\r\n  </div>\r\n\r\n  <div class=\"analysis-item\">\r\n    <span class=\"number big-num\">10,206</span>\r\n    <label>data points exported</label>\r\n  </div>\r\n\r\n  <div class=\"analysis-item\">\r\n    <span class=\"number\">~28</span>\r\n    <label>hours saved</label>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/home/analytics/analytics.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/home/analytics/analytics.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".analytics {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-top: 65px; }\n  .analytics .analysis-item {\n    border-left: 5px solid #e66a6a;\n    margin: 0 19px;\n    padding: 0 20px; }\n  .analytics .analysis-item .number {\n      color: #0C6288;\n      display: block;\n      font-family: Montserrat;\n      font-size: 55px;\n      line-height: 0.85em;\n      height: 55px;\n      text-align: center; }\n  .analytics .analysis-item .number.big-num {\n        font-size: 40px;\n        padding-top: 8px; }\n  .analytics .analysis-item label {\n      color: rgba(0, 0, 0, 0.6);\n      display: block;\n      font-size: 14px;\n      text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2FuYWx5dGljcy9DOlxcVXNlcnNcXHJsaWZmZXJ0aFxcc291cmNlXFxyZXBvc1xcVGVzdFxcRE0uTmcuV2ViXFxkbS10ZXN0Mi9zcmNcXGFwcFxcbW9kdWxlc1xcaG9tZVxcYW5hbHl0aWNzXFxhbmFseXRpY3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFHRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtFQU5sQjtJQVVJLDhCQUE0QztJQUM1QyxjQUFjO0lBQ2QsZUFBZSxFQUFBO0VBWm5CO01BZU0sY0FBYztNQUNkLGNBQWM7TUFDZCx1QkFBdUI7TUFDdkIsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixZQUFZO01BQ1osa0JBQWtCLEVBQUE7RUFyQnhCO1FBd0JRLGVBQWU7UUFDZixnQkFBZ0IsRUFBQTtFQXpCeEI7TUE4Qk0seUJBQXNCO01BQ3RCLGNBQWM7TUFDZCxlQUFlO01BQ2Ysa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvYW5hbHl0aWNzL2FuYWx5dGljcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYW5hbHl0aWNzIHtcclxuICAvL21hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAvL21hcmdpbi10b3A6IDQ1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW4tdG9wOiA2NXB4O1xyXG5cclxuICAuYW5hbHlzaXMtaXRlbSB7XHJcbiAgICAvL2ZsZXg6IDE7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJnYmEoMjMwLCAxMDYsIDEwNiwxKTtcclxuICAgIG1hcmdpbjogMCAxOXB4O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG5cclxuICAgIC5udW1iZXIge1xyXG4gICAgICBjb2xvcjogIzBDNjI4ODtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgICBmb250LXNpemU6IDU1cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAwLjg1ZW07XHJcbiAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgJi5iaWctbnVtIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/home/analytics/analytics.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/home/analytics/analytics.component.ts ***!
  \***************************************************************/
/*! exports provided: AnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function() { return AnalyticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnalyticsComponent = /** @class */ (function () {
    function AnalyticsComponent() {
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
    };
    AnalyticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-analytics',
            template: __webpack_require__(/*! ./analytics.component.html */ "./src/app/modules/home/analytics/analytics.component.html"),
            styles: [__webpack_require__(/*! ./analytics.component.scss */ "./src/app/modules/home/analytics/analytics.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/files-map/files-map.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modules/home/files-map/files-map.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card google-card\">\r\n  <div class=\"card-header\">\r\n    <h3>My activity - past 30 days</h3>\r\n    <div class=\"map-detail-options\">\r\n      <span class=\"tab-option just-map {{showAnalytics ? '' : 'active'}}\" (click)=\"toggleAnalytics(false)\">\r\n        <i class=\"far fa-map fa-xs\"></i>\r\n      </span>\r\n      <span class=\"tab-option with-analytics {{showAnalytics ? 'active' : ''}}\" (click)=\"toggleAnalytics(true)\">\r\n        <i class=\"fal fa-analytics fa-xs\"></i>\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <agm-map [latitude]=\"lat\"\r\n             [longitude]=\"lng\"\r\n             [zoom]=\"zoom\" [fitBounds]=\"true\"\r\n             class=\"google-map {{showAnalytics ? 'with-analytics' : ''}}\">\r\n      <agm-marker *ngFor=\"let m of markers; let i = index\"\r\n                  [latitude]=\"m.lat\"\r\n                  [longitude]=\"m.lng\"\r\n                  [agmFitBounds]=\"true\"\r\n                  [label]=\"m.label\">\r\n      </agm-marker>\r\n      <agm-circle [latitude]=\"lat + 0.3\" [longitude]=\"lng\"\r\n                  [radius]=\"5000\">\r\n      </agm-circle>\r\n    </agm-map>\r\n\r\n\r\n  </div>\r\n  <div class=\"card-footer\" *ngIf=\"showAnalytics\">\r\n    <div class=\"gradient\"></div>\r\n    <div class=\"detail\">[additional details or graphs here]</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/home/files-map/files-map.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/home/files-map/files-map.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card.google-card .card-header {\n  padding-left: 12px;\n  position: relative; }\n  .card.google-card .card-header h3 {\n    font-size: 15px !important;\n    margin: 4px 0 12px !important; }\n  .card.google-card .card-header .map-detail-options {\n    bottom: 0;\n    color: #3c4c5d;\n    position: absolute;\n    right: 10px; }\n  .card.google-card .card-header .map-detail-options .tab-option {\n      border-bottom: 3px solid transparent;\n      cursor: pointer;\n      display: inline-block;\n      padding: 0 10px 2px; }\n  .card.google-card .card-header .map-detail-options .tab-option i {\n        padding-bottom: 5px; }\n  .card.google-card .card-header .map-detail-options .tab-option.active {\n        border-bottom: 3px solid #4098d7;\n        cursor: default; }\n  .card.google-card .card-body .google-map {\n  height: 340px;\n  width: 100%; }\n  .card.google-card .card-body .google-map.with-analytics {\n    height: 231px; }\n  .card.google-card .card-footer {\n  background: none;\n  border-top: none;\n  margin: 0;\n  margin-top: -16px;\n  padding: 0;\n  z-index: 1000; }\n  .card.google-card .card-footer .gradient {\n    background: linear-gradient(transparent, #fff);\n    min-height: 20px; }\n  .card.google-card .card-footer .detail {\n    background-color: #fff;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n    color: #9e9e9e;\n    font-size: 14px;\n    min-height: 105px;\n    padding: 5px 15px 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2ZpbGVzLW1hcC9DOlxcVXNlcnNcXHJsaWZmZXJ0aFxcc291cmNlXFxyZXBvc1xcVGVzdFxcRE0uTmcuV2ViXFxkbS10ZXN0Mi9zcmNcXGFwcFxcbW9kdWxlc1xcaG9tZVxcZmlsZXMtbWFwXFxmaWxlcy1tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7RUFIdEI7SUFNTSwwQkFBMEI7SUFDMUIsNkJBQTZCLEVBQUE7RUFQbkM7SUFXTSxTQUFTO0lBQ1QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXLEVBQUE7RUFkakI7TUFrQlEsb0NBQW9DO01BQ3BDLGVBQWU7TUFDZixxQkFBcUI7TUFDckIsbUJBQW1CLEVBQUE7RUFyQjNCO1FBd0JVLG1CQUFtQixFQUFBO0VBeEI3QjtRQTRCVSxnQ0FBZ0M7UUFDaEMsZUFBZSxFQUFBO0VBN0J6QjtFQXNDTSxhQUFhO0VBQ2IsV0FBVyxFQUFBO0VBdkNqQjtJQTBDUSxhQUFhLEVBQUE7RUExQ3JCO0VBZ0RJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsYUFBYSxFQUFBO0VBckRqQjtJQXdETSw4Q0FBOEM7SUFDOUMsZ0JBQWdCLEVBQUE7RUF6RHRCO0lBNkRNLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2ZpbGVzLW1hcC9maWxlcy1tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNhcmQuZ29vZ2xlLWNhcmQge1xyXG4gIC5jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luOiA0cHggMCAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hcC1kZXRhaWwtb3B0aW9ucyB7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICMzYzRjNWQ7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgICAudGFiLW9wdGlvbiB7XHJcbiAgICAgICAgLy8zcHggc29saWQgIzQwOThkN1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweCAycHg7XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNDA5OGQ3O1xyXG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcmQtYm9keSB7XHJcblxyXG4gICAgLmdvb2dsZS1tYXAge1xyXG4gICAgICBoZWlnaHQ6IDM0MHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICYud2l0aC1hbmFseXRpY3Mge1xyXG4gICAgICAgIGhlaWdodDogMjMxcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXJkLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi10b3A6IC0xNnB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcblxyXG4gICAgLmdyYWRpZW50IHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCAjZmZmKTtcclxuICAgICAgbWluLWhlaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGV0YWlsIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICBjb2xvcjogIzllOWU5ZTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMDVweDtcclxuICAgICAgcGFkZGluZzogNXB4IDE1cHggMTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/home/files-map/files-map.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/home/files-map/files-map.component.ts ***!
  \***************************************************************/
/*! exports provided: FilesMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesMapComponent", function() { return FilesMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// This uses the NPM package Angular Google Maps (AGM):  npm i @agm/core
var FilesMapComponent = /** @class */ (function () {
    function FilesMapComponent() {
        this.showAnalytics = false;
        // initial location
        this.lat = 41.0744597;
        this.lng = -111.9546887;
        this.zoom = 11;
        this.markers = [
            { lat: 41.0748917, lng: -111.9632175, label: 'A' },
            { lat: 41.0467312, lng: -111.9930498, label: 'B' },
            { lat: 41.0744597, lng: -111.9546887, label: 'C' },
            { lat: 41.1026919, lng: -111.9818715, label: 'D' },
            { lat: 41.0962775, lng: -111.97747, label: 'E' },
            { lat: 41.0809294, lng: -111.9762823, label: 'F' },
            { lat: 41.0953183, lng: -111.97688, label: 'G' }
        ];
    }
    FilesMapComponent.prototype.ngOnInit = function () {
    };
    FilesMapComponent.prototype.toggleAnalytics = function (showAnalytics) {
        this.showAnalytics = showAnalytics;
    };
    FilesMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-files-map',
            template: __webpack_require__(/*! ./files-map.component.html */ "./src/app/modules/home/files-map/files-map.component.html"),
            styles: [__webpack_require__(/*! ./files-map.component.scss */ "./src/app/modules/home/files-map/files-map.component.scss"), __webpack_require__(/*! ../home.component.scss */ "./src/app/modules/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FilesMapComponent);
    return FilesMapComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/files/files.component.html":
/*!*********************************************************!*\
  !*** ./src/app/modules/home/files/files.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <h3>Appraisals</h3>\r\n\r\n    <a routerLink=\"/Subject\" class=\"btn btn-outline-primary d-none\">\r\n      <span class=\"far fa-plus\"></span>\r\n      New Appraisal\r\n    </a>\r\n\r\n    <div class=\"tab-slider-tabs\">\r\n      <span class=\"tab\" [class.active]=\"viewMode == 'tab1'\" rel=\"tab1\" (click)=\"viewMode ='tab1'\">Recent</span>\r\n      <span class=\"tab\" [class.active]=\"viewMode == 'tab2'\" rel=\"tab2\" (click)=\"viewMode ='tab2'\">Pinned</span>\r\n      <span class=\"tab\" [class.active]=\"viewMode == 'tab3'\" rel=\"tab3\" (click)=\"viewMode ='tab3'\">Search</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n\r\n    <div class=\"tab-slider-container\" [ngSwitch]=\"viewMode\">\r\n      <div id=\"tab1\" class=\"tab-slider-body\" *ngSwitchCase=\"'tab1'\">\r\n\r\n        <div class=\"file-container\">\r\n\r\n          <a *ngFor=\"let info of fileInfos\" routerLink=\"/Subject/detail/{{info.id}}\" class=\"file-item\">\r\n            <span class=\"file-info\">\r\n              <span class=\"file-type badge badge-secondary\">{{info.fileType}}</span>\r\n              <span class=\"file-name\">{{info.fileName}}</span>\r\n              <span class=\"file-address\">{{info.address.addressLine1}}, {{info.address.city}}, {{info.address.state}} {{info.address.zip}}</span>\r\n            </span>\r\n\r\n            <span class=\"file-info info-footer\">\r\n              <span class=\"last-accessed\">{{getDynamicDateLabel(info.lastModified)}}<!--6 hours ago--></span>\r\n              <span class=\"export-count\"><b>{{info.exportCount}}</b> {{getDynamicExportLabel(info.exportCount)}} to {{info.exportTargets}}</span>\r\n            </span>\r\n            <!--<span class=\"ismage\"></span>-->\r\n          </a>\r\n\r\n        </div>\r\n        <span class=\"more-files\" (click)=\"loadAllFiles()\">Load more files...</span>\r\n\r\n      </div>\r\n      <div id=\"tab2\" class=\"tab-slider-body\" *ngSwitchCase=\"'tab2'\">\r\n\r\n        <div class=\"file-container\">\r\n\r\n          <a *ngFor=\"let info of pinnedFileInfos\" routerLink=\"/Subject/detail/{{info.id}}\" class=\"file-item\">\r\n            <span class=\"file-info\">\r\n              <span class=\"file-type badge badge-secondary\">{{info.fileType}}</span>\r\n              <span class=\"file-name\">{{info.fileName}}</span>\r\n              <span class=\"file-address\">{{info.address.addressLine1}}, {{info.address.city}}, {{info.address.state}} {{info.address.zip}}</span>\r\n            </span>\r\n\r\n            <span class=\"file-info info-footer\">\r\n              <span class=\"last-accessed\">6 hours ago</span>\r\n              <span class=\"export-count\"><b>{{info.exportCount}}</b> {{getDynamicExportLabel(info.exportCount)}} to {{info.exportTargets}}</span>\r\n            </span>\r\n            <!--<span class=\"ismage\"></span>-->\r\n          </a>\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <div id=\"tab3\" class=\"tab-slider-body\" *ngSwitchCase=\"'tab3'\">\r\n        Tab 3\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/home/files/files.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/modules/home/files/files.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card .card-header h3 {\n  letter-spacing: 0.5px; }\n\n.card .card-header a.btn {\n  border: 1px solid rgba(64, 152, 215, 0.4);\n  color: #4098d7;\n  font-size: 14px;\n  position: absolute;\n  right: 7px;\n  top: 7px;\n  transition: color 0.2s, background-color 0.2s; }\n\n.card .card-header a.btn:hover {\n    background-color: #4098d7;\n    color: #fff; }\n\n.file-container {\n  min-height: 296px;\n  /*max-height: 450px;\r\n  overflow-x: hidden;\r\n  overflow-y: scroll;*/ }\n\n.file-container a.file-item {\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n    border-left: 3px solid transparent;\n    color: #334e68;\n    display: block;\n    margin: 0;\n    padding: 8px 14px 0 10px; }\n\n.file-container a.file-item .file-info {\n      display: block; }\n\n.file-container a.file-item .file-info span {\n        display: inline-block;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap; }\n\n.file-container a.file-item .file-info span.file-name, .file-container a.file-item .file-info span.file-address {\n          display: block;\n          line-height: 1.2; }\n\n.file-container a.file-item .file-info span.file-type {\n          /*border: 2px solid blue;\r\n          border-radius: 10px;*/\n          background-color: #617c94;\n          font-size: 12px;\n          float: right;\n          margin: 2px 0 0; }\n\n.file-container a.file-item .file-info span.file-name {\n          font-size: 15px;\n          font-weight: 600; }\n\n.file-container a.file-item .file-info span.file-address {\n          font-size: 13px;\n          padding-left: 2px; }\n\n.file-container a.file-item .file-info.info-footer {\n        margin-top: 3px; }\n\n.file-container a.file-item .file-info.info-footer span.last-accessed {\n          color: #9FB3C8;\n          font-size: 12px;\n          margin-left: 4px; }\n\n.file-container a.file-item .file-info.info-footer span.export-count {\n          color: #627d98;\n          font-size: 13px;\n          float: right;\n          text-align: right; }\n\n.file-container a.file-item:first-child {\n      border-top: none; }\n\n.file-container a.file-item:hover {\n      background-color: rgba(0, 0, 0, 0.03);\n      border-left: 3px solid #14919b;\n      text-decoration: none; }\n\n.file-container::-webkit-scrollbar {\n    background-color: rgba(0, 0, 0, 0.1);\n    width: 10px; }\n\n.file-container::-webkit-scrollbar-track {\n    background-color: transparent; }\n\n.file-container::-webkit-scrollbar-track-piece {\n    background-color: transparent; }\n\n.file-container::-webkit-scrollbar-thumb {\n    background-color: darkgrey;\n    border-radius: 5px; }\n\n.more-files {\n  /*color: #2680c2;\r\n    cursor: pointer;\r\n    display: block;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    padding: 17px 0 12px;\r\n    text-align: center;*/\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\n  color: #2680c2;\n  cursor: pointer;\n  display: block;\n  font-family: 'Merriweather Sans', Lato;\n  font-size: 13px;\n  font-weight: 500;\n  padding: 12px 0 8px;\n  text-align: center; }\n\n.more-files:hover {\n    color: #4098D7;\n    text-decoration: none; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2ZpbGVzL0M6XFxVc2Vyc1xccmxpZmZlcnRoXFxzb3VyY2VcXHJlcG9zXFxUZXN0XFxETS5OZy5XZWJcXGRtLXRlc3QyL3NyY1xcYXBwXFxtb2R1bGVzXFxob21lXFxmaWxlc1xcZmlsZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9maWxlcy9maWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdNLHFCQUFxQixFQUFBOztBQUgzQjtFQVFNLHlDQUF5QztFQUN6QyxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLDZDQUE2QyxFQUFBOztBQWRuRDtJQWlCUSx5QkFBeUI7SUFDekIsV0FBVyxFQUFBOztBQU9uQjtFQUNFLGlCQUFpQjtFQUNqQjs7c0JDUm9CLEVEVUM7O0FBSnZCO0lBT0ksd0NBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2QsY0FBYztJQUNkLFNBQVM7SUFDVCx3QkFBd0IsRUFBQTs7QUFaNUI7TUFlTSxjQUFjLEVBQUE7O0FBZnBCO1FBa0JRLHFCQUFxQjtRQUNyQixnQkFBZ0I7UUFDaEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQixFQUFBOztBQXJCM0I7VUF5QlUsY0FBYztVQUNkLGdCQUFnQixFQUFBOztBQTFCMUI7VUE4QlU7K0JDaEJxQjtVRGtCckIseUJBQXdDO1VBQ3hDLGVBQWU7VUFDZixZQUFZO1VBQ1osZUFBZSxFQUFBOztBQW5DekI7VUF1Q1UsZUFBZTtVQUNmLGdCQUFnQixFQUFBOztBQXhDMUI7VUE0Q1UsZUFBZTtVQUNmLGlCQUFpQixFQUFBOztBQTdDM0I7UUFxRFEsZUFBZSxFQUFBOztBQXJEdkI7VUEwRFksY0FBYztVQUNkLGVBQWU7VUFDZixnQkFBZ0IsRUFBQTs7QUE1RDVCO1VBZ0VZLGNBQWM7VUFDZCxlQUFlO1VBQ2YsWUFBWTtVQUNaLGlCQUFpQixFQUFBOztBQW5FN0I7TUEwRU0sZ0JBQWdCLEVBQUE7O0FBMUV0QjtNQThFTSxxQ0FBa0M7TUFDbEMsOEJBQThCO01BQzlCLHFCQUFxQixFQUFBOztBQWhGM0I7SUFxRkksb0NBQWlDO0lBQ2pDLFdBQVcsRUFBQTs7QUF0RmY7SUEyRkksNkJBQTZCLEVBQUE7O0FBM0ZqQztJQWdHSSw2QkFBNkIsRUFBQTs7QUFoR2pDO0lBb0dJLDBCQUEwQjtJQUMxQixrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRTs7Ozs7O3dCQzlDc0I7RURxRHRCLHlDQUFzQztFQUV0QyxjQUFjO0VBQ2QsZUFBZTtFQUNmLGNBQWM7RUFDZCxzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBakJwQjtJQXVCSSxjQUFjO0lBQ2QscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvZmlsZXMvZmlsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgLmNhcmQtaGVhZGVyIHtcclxuICAgIGgzIHtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGEuYnRuIHtcclxuICAgICAgLy9ib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2NCwgMTUyLCAyMTUsIDAuNCk7XHJcbiAgICAgIGNvbG9yOiAjNDA5OGQ3O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDdweDtcclxuICAgICAgdG9wOiA3cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMsIGJhY2tncm91bmQtY29sb3IgMC4ycztcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDk4ZDc7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4uZmlsZS1jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDI5NnB4O1xyXG4gIC8qbWF4LWhlaWdodDogNDUwcHg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDsqL1xyXG5cclxuICBhLmZpbGUtaXRlbSB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjMzM0ZTY4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA4cHggMTRweCAwIDEwcHg7XHJcblxyXG4gICAgLmZpbGUtaW5mbyB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgICAgICAgJi5maWxlLW5hbWUsXHJcbiAgICAgICAgJi5maWxlLWFkZHJlc3Mge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5maWxlLXR5cGUge1xyXG4gICAgICAgICAgLypib3JkZXI6IDJweCBzb2xpZCBibHVlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDsqL1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMDgsIDIxJSwgNDglLCAxKTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgIG1hcmdpbjogMnB4IDAgMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuZmlsZS1uYW1lIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmZpbGUtYWRkcmVzcyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICAgICAgICAgIC8vZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgLy9tYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAvL21heC13aWR0aDogNjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5pbmZvLWZvb3RlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuXHJcbiAgICAgICAgICAmLmxhc3QtYWNjZXNzZWQge1xyXG4gICAgICAgICAgICBjb2xvcjogIzlGQjNDODtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYuZXhwb3J0LWNvdW50IHtcclxuICAgICAgICAgICAgY29sb3I6ICM2MjdkOTg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjAzKTtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMTQ5MTliO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIC8vYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcclxuICAgIC8vYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1vcmUtZmlsZXMge1xyXG4gIC8qY29sb3I6ICMyNjgwYzI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nOiAxN3B4IDAgMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsqL1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMDgpO1xyXG4gIC8vYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGNvbG9yOiAjMjY4MGMyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlciBTYW5zJywgTGF0bztcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nOiAxMnB4IDAgOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcblxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIC8vY29sb3I6IGhzbGEoMjA1LCA1NSUsIDM4JSwgMSk7XHJcbiAgICBjb2xvcjogIzQwOThENztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbn1cclxuIiwiLmNhcmQgLmNhcmQtaGVhZGVyIGgzIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4OyB9XG5cbi5jYXJkIC5jYXJkLWhlYWRlciBhLmJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNjQsIDE1MiwgMjE1LCAwLjQpO1xuICBjb2xvcjogIzQwOThkNztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA3cHg7XG4gIHRvcDogN3B4O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7IH1cbiAgLmNhcmQgLmNhcmQtaGVhZGVyIGEuYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA5OGQ3O1xuICAgIGNvbG9yOiAjZmZmOyB9XG5cbi5maWxlLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDI5NnB4O1xuICAvKm1heC1oZWlnaHQ6IDQ1MHB4O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7Ki8gfVxuICAuZmlsZS1jb250YWluZXIgYS5maWxlLWl0ZW0ge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogIzMzNGU2ODtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogOHB4IDE0cHggMCAxMHB4OyB9XG4gICAgLmZpbGUtY29udGFpbmVyIGEuZmlsZS1pdGVtIC5maWxlLWluZm8ge1xuICAgICAgZGlzcGxheTogYmxvY2s7IH1cbiAgICAgIC5maWxlLWNvbnRhaW5lciBhLmZpbGUtaXRlbSAuZmlsZS1pbmZvIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgICAgIC5maWxlLWNvbnRhaW5lciBhLmZpbGUtaXRlbSAuZmlsZS1pbmZvIHNwYW4uZmlsZS1uYW1lLCAuZmlsZS1jb250YWluZXIgYS5maWxlLWl0ZW0gLmZpbGUtaW5mbyBzcGFuLmZpbGUtYWRkcmVzcyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjsgfVxuICAgICAgICAuZmlsZS1jb250YWluZXIgYS5maWxlLWl0ZW0gLmZpbGUtaW5mbyBzcGFuLmZpbGUtdHlwZSB7XG4gICAgICAgICAgLypib3JkZXI6IDJweCBzb2xpZCBibHVlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDsqL1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTdjOTQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICBtYXJnaW46IDJweCAwIDA7IH1cbiAgICAgICAgLmZpbGUtY29udGFpbmVyIGEuZmlsZS1pdGVtIC5maWxlLWluZm8gc3Bhbi5maWxlLW5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwOyB9XG4gICAgICAgIC5maWxlLWNvbnRhaW5lciBhLmZpbGUtaXRlbSAuZmlsZS1pbmZvIHNwYW4uZmlsZS1hZGRyZXNzIHtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7IH1cbiAgICAgIC5maWxlLWNvbnRhaW5lciBhLmZpbGUtaXRlbSAuZmlsZS1pbmZvLmluZm8tZm9vdGVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4OyB9XG4gICAgICAgIC5maWxlLWNvbnRhaW5lciBhLmZpbGUtaXRlbSAuZmlsZS1pbmZvLmluZm8tZm9vdGVyIHNwYW4ubGFzdC1hY2Nlc3NlZCB7XG4gICAgICAgICAgY29sb3I6ICM5RkIzQzg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7IH1cbiAgICAgICAgLmZpbGUtY29udGFpbmVyIGEuZmlsZS1pdGVtIC5maWxlLWluZm8uaW5mby1mb290ZXIgc3Bhbi5leHBvcnQtY291bnQge1xuICAgICAgICAgIGNvbG9yOiAjNjI3ZDk4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiAgICAuZmlsZS1jb250YWluZXIgYS5maWxlLWl0ZW06Zmlyc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXRvcDogbm9uZTsgfVxuICAgIC5maWxlLWNvbnRhaW5lciBhLmZpbGUtaXRlbTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMTQ5MTliO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gIC5maWxlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB3aWR0aDogMTBweDsgfVxuICAuZmlsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAuZmlsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAuZmlsZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cblxuLm1vcmUtZmlsZXMge1xuICAvKmNvbG9yOiAjMjY4MGMyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZzogMTdweCAwIDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7Ki9cbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGNvbG9yOiAjMjY4MGMyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlciBTYW5zJywgTGF0bztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiAxMnB4IDAgOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLm1vcmUtZmlsZXM6aG92ZXIge1xuICAgIGNvbG9yOiAjNDA5OEQ3O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/home/files/files.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/home/files/files.component.ts ***!
  \*******************************************************/
/*! exports provided: FilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesComponent", function() { return FilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_file_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/file-info.service */ "./src/app/core/services/file-info.service.ts");



var FilesComponent = /** @class */ (function () {
    function FilesComponent(fileInfoService) {
        this.fileInfoService = fileInfoService;
        // Tab example taken from https://www.codementor.io/temidayoajisebutu/an-easy-way-to-create-tabs-using-ngswitch-in-angular-2-io3cowd0g
        this.viewMode = 'tab1'; // default tab
    }
    FilesComponent.prototype.ngOnInit = function () {
        this.getFileInfos();
        this.getPinnedFileInfos();
    };
    FilesComponent.prototype.onSelect = function (fileInfo) {
        this.selectedFileInfo = fileInfo;
    };
    FilesComponent.prototype.getDynamicExportLabel = function (exportCount) {
        return exportCount === 1 ? 'export' : 'exports';
    };
    FilesComponent.prototype.getFileInfos = function () {
        var _this = this;
        var cutoffDate = new Date(new Date(Date.now()).setHours(new Date(Date.now()).getHours() - 261));
        this.fileInfoService.getFileInfos()
            .subscribe(function (fileInfos) {
            //this.fileInfos = fileInfos;
            _this.fileInfos = fileInfos.filter(function (info) { return info.lastModified > cutoffDate; });
        });
    };
    FilesComponent.prototype.getPinnedFileInfos = function () {
        var _this = this;
        this.fileInfoService.getFileInfos()
            .subscribe(function (fileInfos) {
            _this.pinnedFileInfos = fileInfos.filter(function (info) { return info.id === 1 || info.id === 4 || info.id === 5; });
        });
    };
    FilesComponent.prototype.loadAllFiles = function () {
        var _this = this;
        var cutoffDate = new Date(new Date(Date.now()).setHours(new Date(Date.now()).getHours() - 261));
        // this is a hack to show potential functionality
        this.fileInfoService.getFileInfos()
            .subscribe(function (fileInfos) {
            fileInfos.filter(function (info) { return info.lastModified < cutoffDate; })
                .forEach(function (info) {
                _this.fileInfos.push(info);
            });
        });
    };
    FilesComponent.prototype.getDynamicDateLabel = function (modifiedDate) {
        var magicNumber = (1000 * 60 * 60 * 24); // Days
        var now = new Date(Date.now());
        var dayDiff = Math.floor((now.valueOf() - modifiedDate.valueOf()) / magicNumber);
        var timeSpanLabel = 'days';
        if (dayDiff > 0 && dayDiff < 30) {
            if (dayDiff === 1)
                timeSpanLabel = 'day';
        }
        else if (dayDiff === 0) {
            dayDiff = Math.floor((now.valueOf() - modifiedDate.valueOf()) / (1000 * 60 * 60)); // for hours
            timeSpanLabel = (dayDiff === 1) ? 'hour' : 'hours';
        }
        else if (dayDiff > 30 && dayDiff < 365) {
            dayDiff = Math.floor(dayDiff / 30); // for months
            timeSpanLabel = (dayDiff === 1) ? 'month' : 'months';
        }
        else if (dayDiff > 365) {
            return "last modified on " + (modifiedDate.getMonth() + 1) + "-" + modifiedDate.getDate() + "-" + modifiedDate.getFullYear();
        }
        else {
            return "last modified on " + (modifiedDate.getMonth() + 1) + "-" + modifiedDate.getDate() + "-" + modifiedDate.getFullYear();
        }
        return dayDiff + " " + timeSpanLabel + " ago";
    };
    FilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-files',
            template: __webpack_require__(/*! ./files.component.html */ "./src/app/modules/home/files/files.component.html"),
            styles: [__webpack_require__(/*! ./files.component.scss */ "./src/app/modules/home/files/files.component.scss"), __webpack_require__(/*! ../home.component.scss */ "./src/app/modules/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_file_info_service__WEBPACK_IMPORTED_MODULE_2__["FileInfoService"]])
    ], FilesComponent);
    return FilesComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/home.component.html":
/*!**************************************************!*\
  !*** ./src/app/modules/home/home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"news\">\r\n  <app-news></app-news>\r\n</div>\r\n\r\n\r\n<div class=\"home-cards\">\r\n  <div class=\"my-row\">\r\n    <div class=\"my-col left-col\" style=\"flex: 2;\">\r\n\r\n      <app-new-file></app-new-file>\r\n\r\n    </div>\r\n    <div class=\"my-col right-col\" style=\"flex: 3;\">\r\n\r\n      <app-analytics></app-analytics>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"my-row\">\r\n    <div class=\"my-col left-col\">\r\n      <app-files></app-files>\r\n    </div>\r\n    <div class=\"my-col right-col\">\r\n      <app-files-map></app-files-map>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/home/home.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/home/home.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news {\n  height: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 335px; }\n\n.home-cards {\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  margin-right: 335px;\n  padding: 1% 0;\n  position: relative; }\n\n.home-cards .my-row {\n    padding: 0 1%;\n    margin: 0; }\n\n.home-cards .my-row .my-col {\n      flex: 1;\n      min-width: 450px;\n      padding: 0 0 1%; }\n\n.home-cards .my-row .my-col.left-col {\n        margin-right: 0.5%; }\n\n.home-cards .my-row .my-col.right-col {\n        margin-left: 0.5%; }\n\n:host .card {\n  border: none;\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1); }\n\n:host .card .card-header {\n    background-color: transparent;\n    font-size: 20px;\n    letter-spacing: 0.5px;\n    padding-bottom: 0;\n    padding-top: 0.50rem; }\n\n:host .card .card-header h3 {\n      font-size: 18px;\n      margin: 0;\n      padding: 0;\n      text-transform: uppercase;\n      color: rgba(0, 0, 0, 0.4);\n      font-weight: 500; }\n\n:host .card .card-header .tab-slider-tabs .tab {\n      border-bottom: 3px solid transparent;\n      color: #3c4c5d;\n      cursor: pointer;\n      display: inline-block;\n      font-family: Lato;\n      font-size: 14px;\n      font-weight: 500;\n      text-transform: uppercase;\n      padding: 9px 20px 5px; }\n\n:host .card .card-header .tab-slider-tabs .tab.active {\n        border-bottom: 3px solid #4098d7;\n        font-weight: 600;\n        cursor: default; }\n\n:host .card .card-body {\n    padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL0M6XFxVc2Vyc1xccmxpZmZlcnRoXFxzb3VyY2VcXHJlcG9zXFxUZXN0XFxETS5OZy5XZWJcXGRtLXRlc3QyL3NyY1xcYXBwXFxtb2R1bGVzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUUsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsTUFBTTtFQUNOLFlBUnVCLEVBQUE7O0FBWXpCO0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsbUJBakJ1QjtFQWtCdkIsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQVBwQjtJQVVJLGFBQWE7SUFDYixTQUFTLEVBQUE7O0FBWGI7TUFjTSxPQUFPO01BRVAsZ0JBQWdCO01BQ2hCLGVBQWUsRUFBQTs7QUFqQnJCO1FBb0JRLGtCQUFrQixFQUFBOztBQXBCMUI7UUF3QlEsaUJBQWlCLEVBQUE7O0FBTXpCO0VBQ0UsWUFBWTtFQUNaLHNDQUFtQyxFQUFBOztBQUZyQztJQU9JLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixvQkFBb0IsRUFBQTs7QUFYeEI7TUFjTSxlQUFlO01BQ2YsU0FBUztNQUNULFVBQVU7TUFDVix5QkFBeUI7TUFDekIseUJBQXNCO01BQ3RCLGdCQUFnQixFQUFBOztBQW5CdEI7TUF3QlEsb0NBQW9DO01BQ3BDLGNBQWM7TUFDZCxlQUFlO01BQ2YscUJBQXFCO01BQ3JCLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLHlCQUF5QjtNQUN6QixxQkFBcUIsRUFBQTs7QUFoQzdCO1FBbUNVLGdDQUFnQztRQUNoQyxnQkFBZ0I7UUFDaEIsZUFBZSxFQUFBOztBQXJDekI7SUE0Q0ksVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbmV3cy13aWRnZXQtd2lkdGg6IDMzNXB4O1xyXG5cclxuLm5ld3Mge1xyXG4gIC8vYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAkbmV3cy13aWRnZXQtd2lkdGg7XHJcbn1cclxuXHJcblxyXG4uaG9tZS1jYXJkcyB7XHJcbiAgLy9tYXJnaW4tbGVmdDogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogJG5ld3Mtd2lkZ2V0LXdpZHRoOyAvLyB0aGUgd2lkdGggb2YgdGhlIG5ld3Mgd2lkZ2V0XHJcbiAgcGFkZGluZzogMSUgMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5teS1yb3cge1xyXG4gICAgcGFkZGluZzogMCAxJTtcclxuICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAubXktY29sIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgLy9tYXgtd2lkdGg6IDMzJTtcclxuICAgICAgbWluLXdpZHRoOiA0NTBweDtcclxuICAgICAgcGFkZGluZzogMCAwIDElO1xyXG5cclxuICAgICAgJi5sZWZ0LWNvbCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnJpZ2h0LWNvbCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNSU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjpob3N0IC5jYXJkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDdweCByZ2JhKDAsMCwwLDAuMSk7XHJcblxyXG5cclxuICAuY2FyZC1oZWFkZXIge1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wMyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNTByZW07XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICAudGFiLXNsaWRlci10YWJzIHtcclxuICAgICAgLnRhYiB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGNvbG9yOiAjM2M0YzVkO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBwYWRkaW5nOiA5cHggMjBweCA1cHg7XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNDA5OGQ3O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/modules/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/new-file/new-file.component.html":
/*!***************************************************************!*\
  !*** ./src/app/modules/home/new-file/new-file.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <h3>Create a new Work File</h3>\r\n  </div>\r\n  <div class=\"card-body new-file {{readyToDrop == true ? 'drop' : ''}}\" (drop)=\"drop($event)\" (dragover)=\"allowDrop($event)\" (dragleave)=\"doneDropping($event)\">\r\n\r\n    <form id=\"newFileForm\" [formGroup]=\"newFileForm\">\r\n      <div class=\"form-group\">\r\n        <label for=\"fileName\">\r\n          Enter your file name/number\r\n          <span class=\"required\" *ngIf=\"(newFileForm.controls['fileName'].invalid && newFileForm.controls['fileName'].touched)\">required</span>\r\n        </label>\r\n        <input type=\"text\" placeholder=\"file name/number\" formControlName=\"fileName\" />\r\n        <a href=\"#\" onclick=\"return false;\" class=\"create-file-name\">[create one for me]</a>\r\n        <!--<small class=\"form-text text-muted\">That's ok if you don't have one, we can create one for you.</small>-->\r\n      </div>\r\n      <div class=\"form-group\">\r\n\r\n        <div class=\"custom-input-group\">\r\n          <label for=\"formType\">\r\n            Select your appraisal type\r\n            <span class=\"required\" *ngIf=\"(newFileForm.controls['formType'].invalid && newFileForm.controls['formType'].touched)\">required</span>\r\n          </label>\r\n          <!--<select formControlName=\"formType\" [value]=\"1004\">\r\n            <option id=\"1004\">1004 URAR - UAD</option>\r\n            <option id=\"1073\">1073</option>\r\n          </select>-->\r\n          <select formControlName=\"formType\">\r\n            <option *ngFor=\"let type of appraisalFormTypes\" [ngValue]=\"type.value\">{{type.text}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"custom-input-group form-vendor\">\r\n          <div class=\"dropdown show\">\r\n            <div class=\"selected-item dropdown-toggle\" data-toggle=\"dropdown\">\r\n              <img src=\"{{selectedVendorImgSrc}}\" alt=\"{{selectedVendorImgAlt}}\" #selectedVendor height=\"{{selectedVendorImgHeight}}\" />\r\n              <a href=\"#\" onclick=\"return false;\" class=\"change\">[change]</a>\r\n            </div>\r\n\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\r\n              <a class=\"dropdown-item\" (click)=\"updateVendor($event)\">\r\n                <img src=\"/assets/images/vendors/alamode.png\" alt=\"a la mode\" height=\"30\" />\r\n              </a>\r\n              <a class=\"dropdown-item\" (click)=\"updateVendor($event)\">\r\n                <img src=\"/assets/images/vendors/aci.png\" alt=\"ACI\" width=\"50\" />\r\n              </a>\r\n              <a class=\"dropdown-item\" (click)=\"updateVendor($event)\">\r\n                <img src=\"/assets/images/vendors/bradford.png\" alt=\"Bradford\" height=\"36\" />\r\n              </a>\r\n              <a class=\"dropdown-item\" (click)=\"updateVendor($event)\">\r\n                <img src=\"/assets/images/vendors/sfrep.png\" alt=\"SFREP\" height=\"22\" />\r\n              </a>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Open an MLS export file (<i>optional</i>)</label>\r\n        <input type=\"file\" style=\"background-color: #f2f6fa;\" class=\"file-upload\" formControlName=\"mlsFileUpload\" />\r\n      </div>\r\n\r\n      <!--<a routerLink=\"/Subject/\" class=\"btn btn-success btn-go\" (click)=\"validate()\">\r\n        Create new file\r\n        <span class=\"fal fa-arrow-circle-right\"></span>\r\n      </a>-->\r\n\r\n      <button type=\"submit\" class=\"btn btn-success btn-go\" (click)=\"validate()\">\r\n        Create new file\r\n        <span class=\"fal fa-arrow-circle-right\"></span>\r\n      </button>\r\n\r\n    </form>\r\n\r\n    <!--<div class=\"input-group\">\r\n      <label>This will be a </label>\r\n      <select name=\"formType\">\r\n        <option id=\"1004\">1004 URAR - UAD</option>\r\n        <option id=\"1073\">1073</option>\r\n      </select>\r\n      <label> appraisal.  I will be exporting to</label>\r\n      <div class=\"form-vendor\"><i>a la mode</i> <span class=\"change\">[change]</span></div>.\r\n      <label>The name/number of this file will be </label>\r\n      <input type=\"text\" name=\"fileName\" />\r\n    </div>-->\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/home/new-file/new-file.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/modules/home/new-file/new-file.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-header {\n  border-bottom: none; }\n\n.new-file {\n  border: 2px dashed transparent; }\n\n.new-file.card-body {\n    margin: 5px;\n    padding: 5px 15px !important; }\n\n.new-file.drop {\n    border: 2px dashed rgba(0, 0, 0, 0.6); }\n\n.new-file .form-group {\n    margin-bottom: 12px; }\n\n.new-file .form-group label {\n      display: block;\n      font-size: 12px;\n      margin: 0 0 0 2px;\n      position: relative; }\n\n.new-file .form-group label .required {\n        color: rgba(255, 0, 0, 0.6);\n        font-style: italic;\n        position: absolute;\n        right: 0; }\n\n.new-file .form-group label[for=fileName] .required {\n        right: auto;\n        left: 260px; }\n\n.new-file .form-group small {\n      font-style: italic;\n      margin-top: 0; }\n\n.new-file .form-group input[type=text],\n    .new-file .form-group input[type=file],\n    .new-file .form-group select {\n      border: 1px solid rgba(0, 0, 0, 0.125);\n      background-color: #f2f6fa;\n      font-size: 14px; }\n\n.new-file .form-group input[type=text].ng-touched.ng-invalid,\n      .new-file .form-group input[type=file].ng-touched.ng-invalid,\n      .new-file .form-group select.ng-touched.ng-invalid {\n        border-color: rgba(255, 0, 0, 0.6); }\n\n.new-file .form-group input[type=text] {\n      width: 310px;\n      padding: 3px 6px; }\n\n.new-file .form-group input[type=file] {\n      width: 310px; }\n\n.new-file .form-group select {\n      padding: 3px 6px;\n      width: 225px; }\n\n.new-file .form-group .create-file-name,\n    .new-file .form-group .change {\n      color: #4098D7;\n      font-size: 13px;\n      margin-left: 8px;\n      transition: all 0.2s ease; }\n\n.new-file .form-group .create-file-name:hover,\n      .new-file .form-group .change:hover {\n        color: #0A558C;\n        text-decoration: none; }\n\n.new-file .form-group .custom-input-group {\n      display: inline-block;\n      margin-left: 25px; }\n\n.new-file .form-group .custom-input-group:first-child {\n        margin-left: 0; }\n\n.new-file .form-group .dropdown .dropdown-toggle:after {\n      content: none; }\n\n.new-file .form-group .dropdown .selected-item .change {\n      display: block;\n      float: right;\n      margin-top: 10px; }\n\n.new-file .form-group .dropdown .dropdown-menu .dropdown-item:hover {\n      background-color: rgba(15, 96, 153, 0.08); }\n\n.new-file .btn-go {\n    color: #fff;\n    position: absolute;\n    bottom: 15px;\n    right: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL25ldy1maWxlL0M6XFxVc2Vyc1xccmxpZmZlcnRoXFxzb3VyY2VcXHJlcG9zXFxUZXN0XFxETS5OZy5XZWJcXGRtLXRlc3QyL3NyY1xcYXBwXFxtb2R1bGVzXFxob21lXFxuZXctZmlsZVxcbmV3LWZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9uZXctZmlsZS9DOlxcVXNlcnNcXHJsaWZmZXJ0aFxcc291cmNlXFxyZXBvc1xcVGVzdFxcRE0uTmcuV2ViXFxkbS10ZXN0Mi9zcmNcXGFzc2V0c1xcc3R5bGVcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLDhCQUE4QixFQUFBOztBQURoQztJQUlJLFdBQVc7SUFDWCw0QkFBNEIsRUFBQTs7QUFMaEM7SUFTSSxxQ0FBa0MsRUFBQTs7QUFUdEM7SUFhSSxtQkFBbUIsRUFBQTs7QUFidkI7TUFnQk0sY0FBYztNQUNkLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsa0JBQWtCLEVBQUE7O0FBbkJ4QjtRQXNCUSwyQkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixRQUFRLEVBQUE7O0FBekJoQjtRQThCVSxXQUFXO1FBQ1gsV0FBVyxFQUFBOztBQS9CckI7TUFxQ00sa0JBQWtCO01BQ2xCLGFBQWEsRUFBQTs7QUF0Q25COzs7TUE0Q00sc0NBQWtDO01BQ2xDLHlCQ2xEaUI7TURtRGpCLGVBQWUsRUFBQTs7QUE5Q3JCOzs7UUFrRFUsa0NBQStCLEVBQUE7O0FBbER6QztNQXdETSxZQUFZO01BQ1osZ0JBQWdCLEVBQUE7O0FBekR0QjtNQTZETSxZQUFZLEVBQUE7O0FBN0RsQjtNQWlFTSxnQkFBZ0I7TUFDaEIsWUFBWSxFQUFBOztBQWxFbEI7O01BdUVNLGNBQWM7TUFDZCxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLHlCQUF5QixFQUFBOztBQTFFL0I7O1FBNkVRLGNBQWM7UUFDZCxxQkFBcUIsRUFBQTs7QUE5RTdCO01BbUZNLHFCQUFxQjtNQUNyQixpQkFBaUIsRUFBQTs7QUFwRnZCO1FBMkZRLGNBQWMsRUFBQTs7QUEzRnRCO01BbUdVLGFBQWEsRUFBQTs7QUFuR3ZCO01BeUdVLGNBQWM7TUFDZCxZQUFZO01BQ1osZ0JBQWdCLEVBQUE7O0FBM0cxQjtNQWtIWSx5Q0FBeUMsRUFBQTs7QUFsSHJEO0lBMEhJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9uZXctZmlsZS9uZXctZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi5uZXctZmlsZSB7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkIHRyYW5zcGFyZW50O1xyXG5cclxuICAmLmNhcmQtYm9keSB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmLmRyb3Age1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHJnYmEoMCwwLDAsMC42KTtcclxuICB9XHJcblxyXG4gIC5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBtYXJnaW46IDAgMCAwIDJweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgLnJlcXVpcmVkIHtcclxuICAgICAgICBjb2xvcjpyZ2JhKDI1NSwwLDAsMC42KTtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmW2Zvcj1maWxlTmFtZV0ge1xyXG4gICAgICAgIC5yZXF1aXJlZCB7XHJcbiAgICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgICAgIGxlZnQ6IDI2MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNtYWxsIHtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3R5cGU9dGV4dF0sXHJcbiAgICBpbnB1dFt0eXBlPWZpbGVdLFxyXG4gICAgc2VsZWN0IHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJvZHktYmctY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAgICYubmctdG91Y2hlZCB7XHJcbiAgICAgICAgJi5uZy1pbnZhbGlkIHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsMCwwLDAuNik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICAgIHdpZHRoOiAzMTBweDtcclxuICAgICAgcGFkZGluZzogM3B4IDZweDtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dFt0eXBlPWZpbGVdIHtcclxuICAgICAgd2lkdGg6IDMxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdCB7XHJcbiAgICAgIHBhZGRpbmc6IDNweCA2cHg7XHJcbiAgICAgIHdpZHRoOiAyMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAuY3JlYXRlLWZpbGUtbmFtZSxcclxuICAgIC5jaGFuZ2Uge1xyXG4gICAgICBjb2xvcjogIzQwOThENztcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICMwQTU1OEM7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmN1c3RvbS1pbnB1dC1ncm91cCB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcblxyXG4gICAgICAmLmZvcm0tdmVuZG9yIHtcclxuICAgICAgICAvL21hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kcm9wZG93biB7XHJcblxyXG4gICAgICAuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VsZWN0ZWQtaXRlbSB7XHJcbiAgICAgICAgLmNoYW5nZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUsIDk2LCAxNTMsIDAuMDgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJ0bi1nbyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gIH1cclxufVxyXG4iLCJcclxuJGJvZHktYmctY29sb3I6ICNmMmY2ZmE7XHJcblxyXG4vLyBOYXYgdmFyc1xyXG4vLyRoZWFkZXItaGVpZ2h0OiA4MXB4OyAvLyBoZWlnaHQgNjEgd2l0aCAyMHB4IG1hcmdpbi1ib3R0b21cclxuJGhlYWRlci1oZWlnaHQ6IDY4cHg7ICAgLy8gaGVpZ2h0IDQ4IHdpdGggMjAgbWFyZ2luLWJvdHRvbTtcclxuJHN1YmhlYWRlci1oZWlnaHQ6IDM1cHg7XHJcblxyXG4vLyBGb290ZXIgdmFyc1xyXG4kZm9vdGVyLWhlaWdodDogMzBweDtcclxuJGZvb3Rlci1tYXJnaW46IDIwcHg7XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/home/new-file/new-file.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/home/new-file/new-file.component.ts ***!
  \*************************************************************/
/*! exports provided: NewFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFileComponent", function() { return NewFileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewFileComponent = /** @class */ (function () {
    function NewFileComponent(router) {
        this.router = router;
        this.readyToDrop = false;
        this.appraisalFormTypes = [{ text: '1004 URAR - UAD', value: '1004' }, { text: '1073', value: '1073' }];
        //this.form = this.formBuilder.group({ mlsExportFileUpload: '' });
    }
    NewFileComponent.prototype.ngOnInit = function () {
        this.selectedVendorImgSrc = '/assets/images/vendors/alamode.png';
        this.selectedVendorImgHeight = 30;
        this.selectedVendorImgAlt = 'a la mode';
        this.newFileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fileName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            formType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            mlsFileUpload: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
            //family_name: new FormControl('')
        });
        this.newFileForm.controls['formType'].setValue('1004');
    };
    NewFileComponent.prototype.validate = function () {
        if (this.newFileForm.valid === false) {
            //this.newFileForm.controls[''].markAsTouched();
            for (var item in this.newFileForm.controls) {
                //console.log(this.newFileForm.controls[item]);
                this.newFileForm.controls[item].markAsTouched();
            }
        }
        else {
            // TODO: create the new work file
            this.router.navigate(['/Comparables']);
        }
    };
    NewFileComponent.prototype.updateVendor = function (e) {
        if (e.srcElement.localName === 'img') {
            //console.log(e.srcElement.src);
            this.selectedVendorImgSrc = e.srcElement.src;
            this.selectedVendorImgHeight = e.srcElement.height;
            this.selectedVendorImgAlt = e.srcElement.alt;
        }
        else {
            //console.log(e.srcElement.children[0].src);
            this.selectedVendorImgSrc = e.srcElement.children[0].src;
            this.selectedVendorImgHeight = e.srcElement.children[0].height;
            this.selectedVendorImgAlt = e.srcElement.children[0].alt;
        }
    };
    NewFileComponent.prototype.allowDrop = function (e) {
        //console.log('get to droppin');
        this.readyToDrop = true;
        e.preventDefault();
        e.stopPropagation();
    };
    NewFileComponent.prototype.doneDropping = function (e) {
        this.readyToDrop = false;
    };
    NewFileComponent.prototype.drop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.readyToDrop = false;
        console.log(e.dataTransfer.files[0].name);
        //this.newFileForm.controls['fileName'].setValue(e.dataTransfer.files[0].name);
        //this.newFileForm.controls['mlsFileUpload'].setValue(e.dataTransfer.files[0].name);
        //this.newFileForm.controls['mlsFileUpload'].files = e.dataTransfer.files;
        //document.querySelector('.file-upload').files = e.dataTransfer.files;  // this is a hack and it throws a TS error - but it works
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('newFileForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], NewFileComponent.prototype, "newFileForm", void 0);
    NewFileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-file',
            template: __webpack_require__(/*! ./new-file.component.html */ "./src/app/modules/home/new-file/new-file.component.html"),
            styles: [__webpack_require__(/*! ./new-file.component.scss */ "./src/app/modules/home/new-file/new-file.component.scss"), __webpack_require__(/*! ../home.component.scss */ "./src/app/modules/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewFileComponent);
    return NewFileComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/news/news.component.html":
/*!*******************************************************!*\
  !*** ./src/app/modules/home/news/news.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card {{isHomeAlt ? 'top-margin' : ''}}\">\r\n  <div class=\"card-header\">\r\n    <h3>Appraisal News</h3>\r\n  </div>\r\n  <div class=\"card-body\">\r\n\r\n\r\n    <div class=\"news-container\">\r\n\r\n      <ng-container *ngIf=\"items else loading\">\r\n        <div *ngFor=\"let item of items| slice:0:articlesToShow\" class=\"news-item\">\r\n          <a href=\"{{item.link}}\" target=\"_blank\" class=\"title\">{{item.title}}</a>\r\n          <!--<div class=\"desc\" [innerHtml]=\"item.description\"></div>-->\r\n          <div class=\"news-source\">{{item.feedDisplayName}}</div>\r\n          <div class=\"publish-date\">{{getDynamicDateLabel(item.publishDate)}}</div>\r\n          <span class=\"bullet\"></span>\r\n          <span class=\"story-line\"></span>\r\n        </div>\r\n      </ng-container>\r\n\r\n    </div>\r\n\r\n    <span class=\"show-more\" (click)=\"showMoreArticles()\" *ngIf=\"this.articlesToShow < this.items?.length\">Load more articles...</span>\r\n\r\n  </div>\r\n</div>\r\n\r\n<ng-template #loading>\r\n\r\n  <ng-container *ngIf=\"!newsError else newsErrorTemplate\">\r\n    <div class=\"app-loading news-loader\">\r\n      <div class=\"logo\"></div>\r\n      <svg class=\"spinner\" viewBox=\"25 25 50 50\">\r\n        <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n      </svg>\r\n    </div>\r\n  </ng-container>\r\n\r\n</ng-template>\r\n\r\n<ng-template #newsErrorTemplate>\r\n  <div class=\"connection-error\">\r\n    <!--<span class=\"fal fa-exclamation-triangle fa-lg\"></span>-->\r\n\r\n    <span class=\"fal fa-surprise fa-3x emoji\"></span>\r\n    <div class=\"err-information\">\r\n      <div class=\"err-exclamation\">Oh no!</div>\r\n      <div class=\"err-message\">{{newsErrorMessage}}</div>\r\n    </div>\r\n  </div>\r\n\r\n</ng-template>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/home/news/news.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/modules/home/news/news.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  height: 100%;\n  margin-top: 0px;\n  margin-bottom: 30px;\n  border-radius: 0;\n  box-shadow: none !important;\n  border-left: 1px solid rgba(16, 42, 67, 0.2) !important; }\n  .card.top-margin {\n    margin-top: 15px !important; }\n  .card .card-header {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n    padding-left: 12px;\n    position: relative !important;\n    display: block;\n    width: 100%;\n    padding-bottom: 0.50rem !important; }\n  .card .card-body {\n    min-height: 100px;\n    overflow: auto; }\n  .card .card-body .news-container {\n      /*max-height: 350px;\r\n      overflow-y: scroll;*/\n      margin: 0 0 7px; }\n  .card .card-body .news-container .news-item {\n        display: block;\n        font-size: 12px;\n        margin: 0;\n        padding: 5px 20px 5px 35px;\n        position: relative;\n        transition: all 0.3s ease; }\n  .card .card-body .news-container .news-item a.title {\n          color: #0A558C;\n          display: block;\n          font-family: 'Merriweather Sans', Lato;\n          font-weight: 500;\n          transition: all 0.3s ease; }\n  .card .card-body .news-container .news-item a.title:hover {\n            color: #4098D7;\n            text-decoration: none; }\n  .card .card-body .news-container .news-item .desc {\n          font-size: 12px;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          transition: all 0.3s ease;\n          white-space: nowrap; }\n  .card .card-body .news-container .news-item .news-source,\n        .card .card-body .news-container .news-item .publish-date {\n          color: #9aa0a7;\n          display: inline-block;\n          font-size: 11px;\n          transition: all 0.3s ease; }\n  .card .card-body .news-container .news-item .news-source {\n          color: #4098D7; }\n  .card .card-body .news-container .news-item .publish-date::before {\n          content: '\\0000a0\\002022\\0000a0';\n          margin-right: 5px; }\n  .card .card-body .news-container .news-item .bullet {\n          height: 10px;\n          width: 10px;\n          border: 1px solid rgba(128, 128, 128, 0.4);\n          display: block;\n          border-radius: 10px;\n          position: absolute;\n          top: 8px;\n          left: 10.5px;\n          background-color: #fff;\n          margin-top: 3px;\n          z-index: 2; }\n  .card .card-body .news-container .news-item .story-line {\n          border-left: 1px dotted rgba(128, 128, 128, 0.3);\n          height: 100%;\n          margin: 0;\n          padding: 0;\n          position: absolute;\n          top: 0;\n          left: 15px;\n          z-index: 1; }\n  .card .card-body .news-container .news-item:hover {\n          background-color: rgba(15, 96, 153, 0.15); }\n  .card .card-body .news-container .news-loader {\n        margin-top: 30px; }\n  .card .card-body .news-container .news-loader .logo {\n          height: 25px;\n          width: 25px; }\n  .card .card-body .news-container .news-loader .spinner {\n          height: 41px;\n          width: 41px; }\n  .card .card-body .news-container .news-loader .spinner circle {\n            stroke: rgba(7, 127, 175, 0.4); }\n  .card .card-body .news-container .connection-error {\n        color: darkred;\n        margin: 20px auto;\n        max-width: 85%; }\n  .card .card-body .news-container .connection-error .emoji {\n          color: #077FAF;\n          float: left;\n          margin: 0 10px 0; }\n  .card .card-body .news-container .connection-error .err-exclamation {\n          font-size: 20px;\n          font-weight: 600;\n          text-transform: uppercase; }\n  .card .card-body .news-container .connection-error .err-message {\n          color: #657786;\n          font-size: 14px;\n          font-style: italic;\n          line-height: normal;\n          margin-left: 65px;\n          margin-top: -4px; }\n  .card .card-body .show-more {\n      border-top: 1px solid rgba(0, 0, 0, 0.1);\n      color: #2680c2;\n      cursor: pointer;\n      display: block;\n      font-family: 'Merriweather Sans', Lato;\n      font-size: 13px;\n      font-weight: 500;\n      padding: 8px 0;\n      text-align: center; }\n  .card .card-body .show-more:hover {\n        color: #4098D7; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL25ld3MvQzpcXFVzZXJzXFxybGlmZmVydGhcXHNvdXJjZVxccmVwb3NcXFRlc3RcXERNLk5nLldlYlxcZG0tdGVzdDIvc3JjXFxhcHBcXG1vZHVsZXNcXGhvbWVcXG5ld3NcXG5ld3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9uZXdzL0M6XFxVc2Vyc1xccmxpZmZlcnRoXFxzb3VyY2VcXHJlcG9zXFxUZXN0XFxETS5OZy5XZWJcXGRtLXRlc3QyL3NyY1xcYXNzZXRzXFxzdHlsZVxcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2hvbWUvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkNJa0I7RURIbEIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQix1REFBdUQsRUFBQTtFQU56RDtJQVNJLDJCQUEyQixFQUFBO0VBVC9CO0lBYUksNkNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsY0FBYztJQUVkLFdBQVc7SUFDWCxrQ0FBa0MsRUFBQTtFQW5CdEM7SUE0QkksaUJBQWlCO0lBQ2pCLGNBQWMsRUFBQTtFQTdCbEI7TUFnQ007MEJFYm9CO01GZXBCLGVBQWUsRUFBQTtFQWxDckI7UUFzQ1EsY0FBYztRQUNkLGVBQWU7UUFDZixTQUFTO1FBQ1QsMEJBQTBCO1FBQzFCLGtCQUFrQjtRQUNsQix5QkFBeUIsRUFBQTtFQTNDakM7VUFnRFUsY0FBYztVQUNkLGNBQWM7VUFDZCxzQ0FBc0M7VUFDdEMsZ0JBQWdCO1VBQ2hCLHlCQVA2QixFQUFBO0VBN0N2QztZQXVEWSxjQUFjO1lBQ2QscUJBQXFCLEVBQUE7RUF4RGpDO1VBNkRVLGVBQWU7VUFDZixnQkFBZ0I7VUFDaEIsdUJBQXVCO1VBQ3ZCLHlCQW5CNkI7VUFvQjdCLG1CQUFtQixFQUFBO0VBakU3Qjs7VUF1RVUsY0FBNEI7VUFDNUIscUJBQXFCO1VBQ3JCLGVBQWU7VUFDZix5QkE3QjZCLEVBQUE7RUE3Q3ZDO1VBOEVVLGNBQWMsRUFBQTtFQTlFeEI7VUFzRlksZ0NBQWdDO1VBQ2hDLGlCQUFpQixFQUFBO0VBdkY3QjtVQTRGVSxZQUFZO1VBQ1osV0FBVztVQUNYLDBDQUF5QztVQUN6QyxjQUFjO1VBQ2QsbUJBQW1CO1VBQ25CLGtCQUFrQjtVQUNsQixRQUFRO1VBQ1IsWUFBWTtVQUNaLHNCQUFzQjtVQUN0QixlQUFlO1VBQ2YsVUFBVSxFQUFBO0VBdEdwQjtVQTBHVSxnREFBK0M7VUFDL0MsWUFBWTtVQUNaLFNBQVM7VUFDVCxVQUFVO1VBQ1Ysa0JBQWtCO1VBQ2xCLE1BQU07VUFDTixVQUFVO1VBQ1YsVUFBVSxFQUFBO0VBakhwQjtVQXNIVSx5Q0FBeUMsRUFBQTtFQXRIbkQ7UUFrSVEsZ0JBQWdCLEVBQUE7RUFsSXhCO1VBcUlVLFlBQVk7VUFDWixXQUFXLEVBQUE7RUF0SXJCO1VBMElVLFlBQVk7VUFDWixXQUFXLEVBQUE7RUEzSXJCO1lBOElZLDhCQUE4QixFQUFBO0VBOUkxQztRQW9KUSxjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGNBQWMsRUFBQTtFQXRKdEI7VUF5SlUsY0FBYztVQUNkLFdBQVc7VUFDWCxnQkFDRixFQUFBO0VBNUpSO1VBK0pVLGVBQWU7VUFDZixnQkFBZ0I7VUFDaEIseUJBQXlCLEVBQUE7RUFqS25DO1VBcUtVLGNBQXlCO1VBQ3pCLGVBQWU7VUFDZixrQkFBa0I7VUFDbEIsbUJBQW1CO1VBQ25CLGlCQUFpQjtVQUNqQixnQkFBZ0IsRUFBQTtFQTFLMUI7TUFnTE0sd0NBQXdDO01BQ3hDLGNBQWM7TUFDZCxlQUFlO01BQ2YsY0FBYztNQUNkLHNDQUFzQztNQUN0QyxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxrQkFBa0IsRUFBQTtFQXhMeEI7UUEyTFEsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4uY2FyZCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAkZm9vdGVyLWhlaWdodDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMTYsIDQyLCA2NywgMC4yKSAhaW1wb3J0YW50O1xyXG5cclxuICAmLnRvcC1tYXJnaW4ge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtaGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjUwcmVtICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICAvL21hcmdpbjogNHB4IDAgMTJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXJkLWJvZHkge1xyXG4gICAgLy9tYXJnaW4tdG9wOiAzOHB4OyAgLy8gT25seSBuZWVkIGlmIGhlYWRlciBpcyBcImZpeGVkXCJcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgLm5ld3MtY29udGFpbmVyIHtcclxuICAgICAgLyptYXgtaGVpZ2h0OiAzNTBweDtcclxuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsOyovXHJcbiAgICAgIG1hcmdpbjogMCAwIDdweDtcclxuXHJcbiAgICAgIC5uZXdzLWl0ZW0ge1xyXG4gICAgICAgIC8vYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIC4yKTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAyMHB4IDVweCAzNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAgICAgICAkdGV4dC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAgICAgICBhLnRpdGxlIHtcclxuICAgICAgICAgIGNvbG9yOiAjMEE1NThDO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlciBTYW5zJywgTGF0bztcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAkdGV4dC10cmFuc2l0aW9uO1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzQwOThENztcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlc2Mge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogJHRleHQtdHJhbnNpdGlvbjtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmV3cy1zb3VyY2UsXHJcbiAgICAgICAgLnB1Ymxpc2gtZGF0ZSB7XHJcbiAgICAgICAgICAvL2NvbG9yOiAjOUZCM0M4O1xyXG4gICAgICAgICAgY29sb3I6IGhzbGEoMjExLCA3JSwgNjMlLCAxKTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246ICR0ZXh0LXRyYW5zaXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmV3cy1zb3VyY2Uge1xyXG4gICAgICAgICAgY29sb3I6ICM0MDk4RDc7XHJcbiAgICAgICAgICAvL2ZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIC8vZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wdWJsaXNoLWRhdGUge1xyXG5cclxuICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdcXDAwMDBhMFxcMDAyMDIyXFwwMDAwYTAnO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idWxsZXQge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIC40KTtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgICAgbGVmdDogMTAuNXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3RvcnktbGluZSB7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogMXB4IGRvdHRlZCByZ2JhKDEyOCwgMTI4LCAxMjgsIC4zKTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgLy9iYWNrZ3JvdW5kOiByZ2JhKDIzOCwgMjM4LCAyMzgsIDAuNSk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1LCA5NiwgMTUzLCAwLjE1KTtcclxuICAgICAgICAgIC8vYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCByZ2JhKDY0LCAxNTIsIDIxNSwgMC42KTtcclxuICAgICAgICAgIGEudGl0bGUsXHJcbiAgICAgICAgICAuZGVzYyxcclxuICAgICAgICAgIC5uZXdzLXNvdXJjZSxcclxuICAgICAgICAgIC5wdWJsaXNoLWRhdGUge1xyXG4gICAgICAgICAgICAvL2NvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLm5ld3MtbG9hZGVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG5cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zcGlubmVyIHtcclxuICAgICAgICAgIGhlaWdodDogNDFweDtcclxuICAgICAgICAgIHdpZHRoOiA0MXB4O1xyXG5cclxuICAgICAgICAgIGNpcmNsZSB7XHJcbiAgICAgICAgICAgIHN0cm9rZTogcmdiYSg3LCAxMjcsIDE3NSwgMC40KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb25uZWN0aW9uLWVycm9yIHtcclxuICAgICAgICBjb2xvcjogZGFya3JlZDtcclxuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICBtYXgtd2lkdGg6IDg1JTtcclxuXHJcbiAgICAgICAgLmVtb2ppIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDc3RkFGO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMTBweCAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZXJyLWV4Y2xhbWF0aW9uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmVyci1tZXNzYWdlIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2IoMTAxLCAxMTksIDEzNCk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDY1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zaG93LW1vcmUge1xyXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICBjb2xvcjogIzI2ODBjMjtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXIgU2FucycsIExhdG87XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjNDA5OEQ3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIlxyXG4kYm9keS1iZy1jb2xvcjogI2YyZjZmYTtcclxuXHJcbi8vIE5hdiB2YXJzXHJcbi8vJGhlYWRlci1oZWlnaHQ6IDgxcHg7IC8vIGhlaWdodCA2MSB3aXRoIDIwcHggbWFyZ2luLWJvdHRvbVxyXG4kaGVhZGVyLWhlaWdodDogNjhweDsgICAvLyBoZWlnaHQgNDggd2l0aCAyMCBtYXJnaW4tYm90dG9tO1xyXG4kc3ViaGVhZGVyLWhlaWdodDogMzVweDtcclxuXHJcbi8vIEZvb3RlciB2YXJzXHJcbiRmb290ZXItaGVpZ2h0OiAzMHB4O1xyXG4kZm9vdGVyLW1hcmdpbjogMjBweDtcclxuXHJcblxyXG5cclxuIiwiLmNhcmQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMTYsIDQyLCA2NywgMC4yKSAhaW1wb3J0YW50OyB9XG4gIC5jYXJkLnRvcC1tYXJnaW4ge1xuICAgIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDsgfVxuICAuY2FyZCAuY2FyZC1oZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNTByZW0gIWltcG9ydGFudDsgfVxuICAuY2FyZCAuY2FyZC1ib2R5IHtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBvdmVyZmxvdzogYXV0bzsgfVxuICAgIC5jYXJkIC5jYXJkLWJvZHkgLm5ld3MtY29udGFpbmVyIHtcbiAgICAgIC8qbWF4LWhlaWdodDogMzUwcHg7XHJcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDsqL1xuICAgICAgbWFyZ2luOiAwIDAgN3B4OyB9XG4gICAgICAuY2FyZCAuY2FyZC1ib2R5IC5uZXdzLWNvbnRhaW5lciAubmV3cy1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiA1cHggMjBweCA1cHggMzVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyB9XG4gICAgICAgIC5jYXJkIC5jYXJkLWJvZHkgLm5ld3MtY29udGFpbmVyIC5uZXdzLWl0ZW0gYS50aXRsZSB7XG4gICAgICAgICAgY29sb3I6ICMwQTU1OEM7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXIgU2FucycsIExhdG87XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyB9XG4gICAgICAgICAgLmNhcmQgLmNhcmQtYm9keSAubmV3cy1jb250YWluZXIgLm5ld3MtaXRlbSBhLnRpdGxlOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNDA5OEQ3O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gICAgICAgIC5jYXJkIC5jYXJkLWJvZHkgLm5ld3MtY29udGFpbmVyIC5uZXdzLWl0ZW0gLmRlc2Mge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgICAgICAuY2FyZCAuY2FyZC1ib2R5IC5uZXdzLWNvbnRhaW5lciAubmV3cy1pdGVtIC5uZXdzLXNvdXJjZSxcbiAgICAgICAgLmNhcmQgLmNhcmQtYm9keSAubmV3cy1jb250YWluZXIgLm5ld3MtaXRlbSAucHVibGlzaC1kYXRlIHtcbiAgICAgICAgICBjb2xvcjogIzlhYTBhNztcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IH1cbiAgICAgICAgLmNhcmQgLmNhcmQtYm9keSAubmV3cy1jb250YWluZXIgLm5ld3MtaXRlbSAubmV3cy1zb3VyY2Uge1xuICAgICAgICAgIGNvbG9yOiAjNDA5OEQ3OyB9XG4gICAgICAgIC5jYXJkIC5jYXJkLWJvZHkgLm5ld3MtY29udGFpbmVyIC5uZXdzLWl0ZW0gLnB1Ymxpc2gtZGF0ZTo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAnXFwwMDAwYTBcXDAwMjAyMlxcMDAwMGEwJztcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxuICAgICAgICAuY2FyZCAuY2FyZC1ib2R5IC5uZXdzLWNvbnRhaW5lciAubmV3cy1pdGVtIC5idWxsZXQge1xuICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNCk7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgICAgbGVmdDogMTAuNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICAgIHotaW5kZXg6IDI7IH1cbiAgICAgICAgLmNhcmQgLmNhcmQtYm9keSAubmV3cy1jb250YWluZXIgLm5ld3MtaXRlbSAuc3RvcnktbGluZSB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBkb3R0ZWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMpO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDE1cHg7XG4gICAgICAgICAgei1pbmRleDogMTsgfVxuICAgICAgICAuY2FyZCAuY2FyZC1ib2R5IC5uZXdzLWNvbnRhaW5lciAubmV3cy1pdGVtOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1LCA5NiwgMTUzLCAwLjE1KTsgfVxuICAgICAgLmNhcmQgLmNhcmQtYm9keSAubmV3cy1jb250YWluZXIgLm5ld3MtbG9hZGVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDsgfVxuICAgICAgICAuY2FyZCAuY2FyZC1ib2R5IC5uZXdzLWNvbnRhaW5lciAubmV3cy1sb2FkZXIgLmxvZ28ge1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICB3aWR0aDogMjVweDsgfVxuICAgICAgICAuY2FyZCAuY2FyZC1ib2R5IC5uZXdzLWNvbnRhaW5lciAubmV3cy1sb2FkZXIgLnNwaW5uZXIge1xuICAgICAgICAgIGhlaWdodDogNDFweDtcbiAgICAgICAgICB3aWR0aDogNDFweDsgfVxuICAgICAgICAgIC5jYXJkIC5jYXJkLWJvZHkgLm5ld3MtY29udGFpbmVyIC5uZXdzLWxvYWRlciAuc3Bpbm5lciBjaXJjbGUge1xuICAgICAgICAgICAgc3Ryb2tlOiByZ2JhKDcsIDEyNywgMTc1LCAwLjQpOyB9XG4gICAgICAuY2FyZCAuY2FyZC1ib2R5IC5uZXdzLWNvbnRhaW5lciAuY29ubmVjdGlvbi1lcnJvciB7XG4gICAgICAgIGNvbG9yOiBkYXJrcmVkO1xuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA4NSU7IH1cbiAgICAgICAgLmNhcmQgLmNhcmQtYm9keSAubmV3cy1jb250YWluZXIgLmNvbm5lY3Rpb24tZXJyb3IgLmVtb2ppIHtcbiAgICAgICAgICBjb2xvcjogIzA3N0ZBRjtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICBtYXJnaW46IDAgMTBweCAwOyB9XG4gICAgICAgIC5jYXJkIC5jYXJkLWJvZHkgLm5ld3MtY29udGFpbmVyIC5jb25uZWN0aW9uLWVycm9yIC5lcnItZXhjbGFtYXRpb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgICAgICAgLmNhcmQgLmNhcmQtYm9keSAubmV3cy1jb250YWluZXIgLmNvbm5lY3Rpb24tZXJyb3IgLmVyci1tZXNzYWdlIHtcbiAgICAgICAgICBjb2xvcjogIzY1Nzc4NjtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDY1cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTRweDsgfVxuICAgIC5jYXJkIC5jYXJkLWJvZHkgLnNob3ctbW9yZSB7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgY29sb3I6ICMyNjgwYzI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyIFNhbnMnLCBMYXRvO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICAuY2FyZCAuY2FyZC1ib2R5IC5zaG93LW1vcmU6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzQwOThENzsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/home/news/news.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/home/news/news.component.ts ***!
  \*****************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/news.service */ "./src/app/core/services/news.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var NewsComponent = /** @class */ (function () {
    function NewsComponent(newsService, locale) {
        this.newsService = newsService;
        this.locale = locale;
        this.newsError = false;
    }
    NewsComponent.prototype.ngOnInit = function () {
        this.articlesToShow = 15; // Only show the top 5 stories by default
        this.getNewsFeed();
    };
    NewsComponent.prototype.getNewsFeed = function () {
        var _this = this;
        this.newsService.getNewsFeed().subscribe(function (newsFeed) {
            _this.newsError = false;
            _this.newsErrorMessage = '';
            _this.newsFeed = newsFeed;
            // flatten the news items out into a single list of new-items and order by date
            try {
                if (newsFeed === null) {
                    _this.newsError = true;
                    _this.newsErrorMessage = 'Nothing was returned from the news feed';
                    return;
                }
                var _loop_1 = function (feed) {
                    feed.items.forEach(function (x) { return x.feedDisplayName = feed.feedDisplayName; });
                    if (_this.items === undefined) {
                        _this.items = feed.items;
                    }
                    else {
                        _this.items = _this.items.concat(feed.items);
                    }
                };
                for (var _i = 0, newsFeed_1 = newsFeed; _i < newsFeed_1.length; _i++) {
                    var feed = newsFeed_1[_i];
                    _loop_1(feed);
                }
                // sort descending
                _this.items.sort(function (a, b) { return a.publishDate > b.publishDate ? -1 : a.publishDate < b.publishDate ? 1 : 0; });
            }
            catch (err) {
                // do something
                _this.newsError = true;
                _this.newsErrorMessage = 'News feed error: ' + err;
                console.log('caught news feed error: ' + err);
            }
        }, function (err) {
            //alert('error: ' + err);
            _this.newsError = true;
            _this.newsErrorMessage = 'News feed error: ' + err;
            if (!navigator.onLine)
                _this.newsErrorMessage = 'There is no internet connection';
            if (err.name === "HttpErrorResponse") {
                switch (err.status) {
                    case 404:
                        _this.newsErrorMessage = "That info wasn't found (404)";
                        break;
                    case 401:
                        _this.newsErrorMessage = 'The news feed server is refusing our connection!';
                        break;
                    case 0:
                    default:
                        _this.newsErrorMessage = "We can't connect to the news feed server";
                        break;
                }
            }
            console.log('news feed error: ' + err);
        });
    };
    NewsComponent.prototype.getDynamicDateLabel = function (modifiedDate) {
        var magicNumber = (1000 * 60 * 60 * 24); // Days
        var now = new Date(Date.now());
        var dayDiff = Math.floor((now.valueOf() - modifiedDate.valueOf()) / magicNumber);
        var timeSpanLabel = 'days';
        if (dayDiff == 1) { // 
            //if (dayDiff === 1) timeSpanLabel = 'day';
            return "yesterday";
        }
        else if (dayDiff === 0) { // today
            dayDiff = Math.floor((now.valueOf() - modifiedDate.valueOf()) / (1000 * 60 * 60)); // for hours
            if (dayDiff > 10) { // more than 10 hours ago
                return "today";
            }
            else { // less than 10 hours ago - show hour count
                timeSpanLabel = (dayDiff === 1) ? 'hour' : 'hours';
                return dayDiff + " " + timeSpanLabel + " ago";
            }
        }
        else if (dayDiff > 1 && dayDiff < 6) {
            return dayDiff + " " + timeSpanLabel + " ago";
        }
        else {
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(modifiedDate, 'MMM dd, yyyy', this.locale);
        }
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(modifiedDate, 'MMM dd, yyyy', this.locale);
    };
    NewsComponent.prototype.showMoreArticles = function () {
        this.articlesToShow += 5;
    };
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/modules/home/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.scss */ "./src/app/modules/home/news/news.component.scss"), __webpack_require__(/*! ../home.component.scss */ "./src/app/modules/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"], String])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/modules/market-conditions/graphs/graphs.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/market-conditions/graphs/graphs.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  graphs works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/market-conditions/graphs/graphs.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/market-conditions/graphs/graphs.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFya2V0LWNvbmRpdGlvbnMvZ3JhcGhzL2dyYXBocy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/market-conditions/graphs/graphs.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/market-conditions/graphs/graphs.component.ts ***!
  \**********************************************************************/
/*! exports provided: GraphsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphsComponent", function() { return GraphsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GraphsComponent = /** @class */ (function () {
    function GraphsComponent() {
    }
    GraphsComponent.prototype.ngOnInit = function () {
    };
    GraphsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-graphs',
            template: __webpack_require__(/*! ./graphs.component.html */ "./src/app/modules/market-conditions/graphs/graphs.component.html"),
            styles: [__webpack_require__(/*! ./graphs.component.scss */ "./src/app/modules/market-conditions/graphs/graphs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GraphsComponent);
    return GraphsComponent;
}());



/***/ }),

/***/ "./src/app/modules/market-conditions/import/import.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/market-conditions/import/import.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  import works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/market-conditions/import/import.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/market-conditions/import/import.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFya2V0LWNvbmRpdGlvbnMvaW1wb3J0L2ltcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/market-conditions/import/import.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/market-conditions/import/import.component.ts ***!
  \**********************************************************************/
/*! exports provided: ImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportComponent", function() { return ImportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImportComponent = /** @class */ (function () {
    function ImportComponent() {
    }
    ImportComponent.prototype.ngOnInit = function () {
    };
    ImportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-import',
            template: __webpack_require__(/*! ./import.component.html */ "./src/app/modules/market-conditions/import/import.component.html"),
            styles: [__webpack_require__(/*! ./import.component.scss */ "./src/app/modules/market-conditions/import/import.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImportComponent);
    return ImportComponent;
}());



/***/ }),

/***/ "./src/app/modules/market-conditions/market-conditions.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/market-conditions/market-conditions.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-menu\">\r\n  <div class=\"navbar-nav container\">\r\n    <a class=\"nav-item navbar-link \" routerLink=\"./import\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n      <span class=\"far fa-file-import\"></span>\r\n      Import\r\n    </a>\r\n    <a class=\"nav-item navbar-link {{isActive()}}\" routerLink=\"./report\">\r\n      <span class=\"far fa-file-alt\"></span>\r\n      Report\r\n    </a>\r\n    <a class=\"nav-item navbar-link \" routerLink=\"./detail\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n      <span class=\"far fa-bars\"></span>\r\n      Details\r\n    </a>\r\n    <a class=\"nav-item navbar-link \" routerLink=\"./graphs\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n      <span class=\"far fa-chart-line\"></span>\r\n      Graphs\r\n    </a>\r\n  </div>\r\n</div>\n<div class=\"clear\"></div>\n\n<p>\n  market-conditions works!\n</p>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/modules/market-conditions/market-conditions.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/market-conditions/market-conditions.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFya2V0LWNvbmRpdGlvbnMvbWFya2V0LWNvbmRpdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/market-conditions/market-conditions.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/market-conditions/market-conditions.component.ts ***!
  \**************************************************************************/
/*! exports provided: MarketConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketConditionsComponent", function() { return MarketConditionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MarketConditionsComponent = /** @class */ (function () {
    function MarketConditionsComponent(router) {
        this.router = router;
    }
    MarketConditionsComponent.prototype.ngOnInit = function () {
    };
    MarketConditionsComponent.prototype.isActive = function () {
        // This seems like a hack
        // Just to get two routes to show active on the same tab
        return this.router.isActive('/market-conditions', true) || this.router.isActive('/market-conditions/report', false) ? 'active' : '';
    };
    MarketConditionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-market-conditions',
            template: __webpack_require__(/*! ./market-conditions.component.html */ "./src/app/modules/market-conditions/market-conditions.component.html"),
            styles: [__webpack_require__(/*! ./market-conditions.component.scss */ "./src/app/modules/market-conditions/market-conditions.component.scss"), __webpack_require__(/*! ../../ui/header/header.component.scss */ "./src/app/ui/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MarketConditionsComponent);
    return MarketConditionsComponent;
}());



/***/ }),

/***/ "./src/app/modules/market-conditions/mc-detail/mc-detail.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/market-conditions/mc-detail/mc-detail.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  mc-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/market-conditions/mc-detail/mc-detail.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/market-conditions/mc-detail/mc-detail.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFya2V0LWNvbmRpdGlvbnMvbWMtZGV0YWlsL21jLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/market-conditions/mc-detail/mc-detail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/market-conditions/mc-detail/mc-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: McDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McDetailComponent", function() { return McDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var McDetailComponent = /** @class */ (function () {
    function McDetailComponent() {
    }
    McDetailComponent.prototype.ngOnInit = function () {
    };
    McDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mc-detail',
            template: __webpack_require__(/*! ./mc-detail.component.html */ "./src/app/modules/market-conditions/mc-detail/mc-detail.component.html"),
            styles: [__webpack_require__(/*! ./mc-detail.component.scss */ "./src/app/modules/market-conditions/mc-detail/mc-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], McDetailComponent);
    return McDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/market-conditions/report/report.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/market-conditions/report/report.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  report works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/market-conditions/report/report.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/market-conditions/report/report.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFya2V0LWNvbmRpdGlvbnMvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/market-conditions/report/report.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/market-conditions/report/report.component.ts ***!
  \**********************************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReportComponent = /** @class */ (function () {
    function ReportComponent() {
    }
    ReportComponent.prototype.ngOnInit = function () {
    };
    ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/modules/market-conditions/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.scss */ "./src/app/modules/market-conditions/report/report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/modules/subject/subject-deeds/subject-deeds.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/subject/subject-deeds/subject-deeds.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  subject-deeds works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/subject/subject-deeds/subject-deeds.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/subject/subject-deeds/subject-deeds.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3ViamVjdC9zdWJqZWN0LWRlZWRzL3N1YmplY3QtZGVlZHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/subject/subject-deeds/subject-deeds.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/subject/subject-deeds/subject-deeds.component.ts ***!
  \**************************************************************************/
/*! exports provided: SubjectDeedsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectDeedsComponent", function() { return SubjectDeedsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SubjectDeedsComponent = /** @class */ (function () {
    function SubjectDeedsComponent() {
    }
    SubjectDeedsComponent.prototype.ngOnInit = function () {
    };
    SubjectDeedsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject-deeds',
            template: __webpack_require__(/*! ./subject-deeds.component.html */ "./src/app/modules/subject/subject-deeds/subject-deeds.component.html"),
            styles: [__webpack_require__(/*! ./subject-deeds.component.scss */ "./src/app/modules/subject/subject-deeds/subject-deeds.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SubjectDeedsComponent);
    return SubjectDeedsComponent;
}());



/***/ }),

/***/ "./src/app/modules/subject/subject-detail/subject-detail.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/subject/subject-detail/subject-detail.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"subject-container\">\r\n  <form class=\"subject-form\">\r\n\r\n    <!--<div class=\"well well-sm map-canvas-container\">\r\n    <div id=\"google-mapCanvas\" class=\"map-canvas\"></div>\r\n    <div id=\"google-streetMapCanvas\" class=\"street-map-canvas\"></div>\r\n  </div>-->\r\n\r\n    <div class=\"well subject-detail\">\r\n\r\n      <span class=\"vert-label\">\r\n        <span class=\"rotated-text\">Subject</span>\r\n      </span>\r\n      <div class=\"form-group\">\r\n        <label>Subject Address</label>\r\n        <input type=\"text\" placeholder=\"Address\" class=\"text-wide\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" placeholder=\"City\" class=\"text-medium\" />\r\n        <!--@Html.DropDownList(\"SubjectAddressState\", DropdownData.GetStates(\"UT\"), new { @class = \"\", ng_model = \"subject.State\", ng_init = \"subject.State = subject.State || 'UT'\" })-->\r\n        <input type=\"text\" placeholder=\"Zip Code\" class=\"text-small\" maxlength=\"10\" pattern=\"^\\d{5}(?:[-\\s]\\d{4})?$\" />\r\n      </div>\r\n\r\n      <div class=\"row row-top-spacer\">\r\n        <div class=\"col-md-4\">\r\n          <label>Borrower</label>\r\n          <input type=\"text\" placeholder=\"\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <label>Owner of Public Record</label>\r\n          <input type=\"text\" placeholder=\"\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <input type=\"text\" placeholder=\"\" class=\"form-control\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <label>Legal Description</label>\r\n          <input type=\"text\" placeholder=\"\" class=\"form-control\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n          <!--@Helpers.ParcelHelpers.DataSourcePopoverLabel(\"Assessor's Pracel #\", \"Apn\", subject, \"subject.Apn\")-->\r\n          <label>Assessors Parcel</label>\r\n          <input type=\"text\" placeholder=\"\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <label>Tax Year</label>\r\n          <input type=\"text\" placeholder=\"\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <label>R.E. Taxes</label>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">$</span>\r\n            <input type=\"text\" placeholder=\"\" class=\"form-control\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2\">\r\n          <label>Occupant</label>\r\n          <select class=\"form-control\">\r\n            <option value=\"owner\">Owner</option>\r\n            <option value=\"tenant\">Tenant</option>\r\n            <option value=\"vacant\">Vacant</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <label>Special Assessments</label>\r\n          <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-9 no-right-padding\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\">$</span>\r\n                  <input type=\"text\" placeholder=\"\" class=\"form-control\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3 no-right-padding\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <input type=\"checkbox\" class=\"checkbox\">\r\n                    PUD\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label>HOA</label>\r\n          <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-7 no-right-padding\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\">$</span>\r\n                  <input type=\"text\" placeholder=\"\" class=\"form-control\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-5 no-right-padding\">\r\n                <div class=\"radio\">\r\n                  <label>\r\n                    <input type=\"radio\" class=\"radio\" name=\"hoa-payment-schedule\" value=\"year\">\r\n                    per year\r\n                  </label>\r\n                </div>\r\n                <div class=\"radio\">\r\n                  <label>\r\n                    <input type=\"radio\" class=\"radio\" name=\"hoa-payment-schedule\" value=\"month\">\r\n                    per month\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <label>Property Rights Appraised</label>\r\n          <div class=\"container-fluid\">\r\n            <div class=\"row min-text-height\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"radio\">\r\n                  <label class=\"no-left-padding\">\r\n                    <input type=\"radio\" name=\"PropertyRights\" value=\"feesimple\" class=\"radio\" iradio>\r\n                    Fee Simple\r\n                  </label>\r\n                </div>\r\n                <div class=\"radio\">\r\n                  <label>\r\n                    <input type=\"radio\" name=\"PropertyRights\" value=\"leasehold\" class=\"radio\" iradio>\r\n                    Leasehold\r\n                  </label>\r\n                </div>\r\n                <div class=\"radio\">\r\n                  <label>\r\n                    <input type=\"radio\" name=\"PropertyRights\" value=\"other\" class=\"radio\" iradio>\r\n                    Other (describe)\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-8 no-right-padding\">\r\n                <input type=\"text\" class=\"form-control\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <label>Lender/Client</label>\r\n          <input type=\"text\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n          <label>Address</label>\r\n          <input type=\"text\" class=\"form-control\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row row-inline-label\">\r\n        <div class=\"col-md-12\">\r\n          <label class=\"inline-label vert-spacing\">\r\n            Is the subject property currently offered for sale or has it been offered for sale in the twelve months prior to the effective date of this appraisal?\r\n          </label>\r\n          <div class=\"radio\">\r\n            <label>\r\n              <input type=\"radio\" name=\"SubjectForSale\" value=\"yes\" class=\"radio\">\r\n              Yes\r\n            </label>\r\n          </div>\r\n          <div class=\"radio\">\r\n            <label class=\"no-left-padding\">\r\n              <input type=\"radio\" name=\"SubjectForSale\" value=\"no\" class=\"radio\">\r\n              No\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row row-bottom-spacer\">\r\n        <div class=\"col-md-12\">\r\n          <label>\r\n            Report data source(s) used, offering price(s), and date(s)\r\n          </label>\r\n          <textarea rows=\"2\" class=\"form-control\"></textarea>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"well subject-detail\">\r\n\r\n      <span class=\"vert-label\">\r\n        <span class=\"rotated-text\">Contract</span>\r\n      </span>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <label class=\"inline-label\">\r\n            I\r\n          </label>\r\n          <div class=\"radio inline-radio\">\r\n            <label class=\"no-left-padding\">\r\n              <input type=\"radio\" name=\"AnalyzePurchaseTransaction\" value=\"did\" class=\"radio\">\r\n              did\r\n            </label>\r\n          </div>\r\n          <div class=\"radio inline-radio\">\r\n            <label class=\"no-left-padding\">\r\n              <input type=\"radio\" name=\"AnalyzePurchaseTransaction\" value=\"didnot\" class=\"radio\">\r\n              did not\r\n            </label>\r\n          </div>\r\n          <label class=\"full-inline\">\r\n            analyze the contract for sale for the subject purchase transaction.  Explain the results\r\n            of the analysis of the contract for sale or why the analysis was not performed.\r\n          </label>\r\n          <textarea rows=\"2\" class=\"form-control\"></textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2\">\r\n          <label>Contract Price</label>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">$</span>\r\n            <input type=\"text\" placeholder=\"\" class=\"form-control\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <div class=\"input-group\">\r\n            <input id=\"ContractDate\" type=\"text\" placeholder=\"\" class=\"date-picker form-control\" date-format=\"MM/dd/yyyy\" />\r\n            <span class=\"input-group-addon\"><span class=\"fa fa-calendar\"></span></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-5 middle-align-label\">\r\n          <label class=\"inline-label\">\r\n            Is the property seller the owner of the public record?\r\n          </label>\r\n          <div class=\"radio\">\r\n            <label>\r\n              <input type=\"radio\" name=\"SellerOwnerOfPublicRecord\" value=\"yes\" class=\"radio\">\r\n              Yes\r\n            </label>\r\n          </div>\r\n          <div class=\"radio\">\r\n            <label class=\"no-left-padding\">\r\n              <input type=\"radio\" name=\"SellerOwnerOfPublicRecord \" value=\"no\" class=\"radio\">\r\n              No\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <label>Data Source(s)</label>\r\n          <input type=\"text\" placeholder=\"\" class=\"form-control\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row row-inline-label\">\r\n        <div class=\"col-md-12\">\r\n          <label class=\"inline-label vert-spacing\">\r\n            Is there any financial assistance (loan charges, sales concessions, gift or downpayment assistance, etc.) to be paid by any party on\r\n            behalf of the borrower?\r\n          </label>\r\n          <div class=\"radio\">\r\n            <input type=\"radio\" name=\"FinancialAssistanceToBorrower\" value=\"yes\" class=\"radio grow-container-fix\" />\r\n            <label>\r\n              Yes\r\n            </label>\r\n          </div>\r\n          <div class=\"radio\">\r\n            <input type=\"radio\" name=\"FinancialAssistanceToBorrower\" value=\"no\" class=\"radio grow-container-fix\" />\r\n            <label class=\"no-left-padding\">\r\n              No\r\n            </label>\r\n          </div>\r\n          <div class=\"\">\r\n            <label>If Yes, report the total dollar amount and describe the terms to paid.</label>\r\n            <textarea rows=\"2\" class=\"form-control\"></textarea>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"well well-sm subject-detail well-header-label\">\r\n      <span class=\"vert-label\">\r\n        <span class=\"rotated-text\">Neighborhood</span>\r\n      </span>\r\n\r\n      <div class=\"row row-header-label\">\r\n        <div class=\"col-md-12\">\r\n          <label>Note: Race and the racial composition of the neighborhood are not appraisal factors.</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <h6>Neighborhood Characteristics</h6>\r\n          <div class=\"container-fluid inline-radio-grid\">\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n          <h6>One-Unit Housing Trends</h6>\r\n          <div class=\"container-fluid inline-radio-grid\">\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <h6 class=\"with-sub-title\">One-Unit Housing</h6>\r\n          <div class=\"container-fluid one-unit\">\r\n            <div class=\"row sub-title\">\r\n              <div class=\"col-md-5\">\r\n                <label>Price<span class=\"measure\">($000)</span></label>\r\n              </div>\r\n              <div class=\"col-md-2\"></div>\r\n              <div class=\"col-md-5\">\r\n                <label>Age<span class=\"measure\">(yrs)</span></label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <input type=\"text\" class=\"form-control\" />\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <label>Low</label>\r\n              </div>\r\n              <div class=\"col-md-5\">\r\n                <input type=\"text\" class=\"form-control\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <input type=\"text\" class=\"form-control\" />\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <label>High</label>\r\n              </div>\r\n              <div class=\"col-md-5\">\r\n                <input type=\"text\" class=\"form-control\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <input type=\"text\" class=\"form-control\" />\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <label>Pred.</label>\r\n              </div>\r\n              <div class=\"col-md-5\">\r\n                <input type=\"text\" class=\"form-control\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-9\">\r\n          <div class=\"row boundary-row\">\r\n            <div class=\"col-md-12\">\r\n              <label>Neighborhood Boundaries</label>\r\n              <textarea cols=\"2\" class=\"form-control\"></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <label>Neighborhood Description</label>\r\n              <textarea cols=\"2\" class=\"form-control\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <h6 class=\"present-land\">Present Land Use %</h6>\r\n          <div class=\"container-fluid present-land\">\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <label>Market Conditions</label>\r\n          <textarea cols=\"2\" class=\"form-control\"></textarea>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"well well-sm subject-detail\">\r\n      <span class=\"vert-label\">\r\n        <span class=\"rotated-text\">Site</span>\r\n      </span>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <label>Dimensions</label>\r\n          <input type=\"text\" placeholder=\"\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <label>Area</label>\r\n          <input type=\"text\" placeholder=\"\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <label>Shape</label>\r\n          <input type=\"text\" placeholder=\"\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n          <label>View</label>\r\n          <input type=\"text\" placeholder=\"\" class=\"form-control\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n          <label>Specific Zoning Classification</label>\r\n          <input type=\"text\" placeholder=\"\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"col-md-7\">\r\n          <label>Zoning Description</label>\r\n          <input type=\"text\" placeholder=\"\" class=\"form-control\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n\r\n          <label>Property Rights Appraised</label>\r\n          <div class=\"row min-text-height\">\r\n            <div class=\"col-md-7 no-right-padding\">\r\n              <div class=\"radio\">\r\n                <label class=\"no-left-padding\">\r\n                  <input type=\"radio\" name=\"ZoningCompliance\" value=\"Legal\" class=\"radio\" />\r\n                  Legal\r\n                </label>\r\n              </div>\r\n              <div class=\"radio\">\r\n                <label>\r\n                  <input type=\"radio\" name=\"ZoningCompliance\" value=\"legalnonconforming\" class=\"radio\" />\r\n                  Legal Nonconforming (Grandfathered Use)\r\n                </label>\r\n              </div>\r\n              <div class=\"radio\">\r\n                <label>\r\n                  <input type=\"radio\" name=\"ZoningCompliance\" value=\"nozoning\" class=\"radio\" />\r\n                  No Zoning\r\n                </label>\r\n              </div>\r\n              <div class=\"radio\">\r\n                <label>\r\n                  <input type=\"radio\" name=\"ZoningCompliance\" value=\"illegal\" class=\"radio\" />\r\n                  Illegal (describe)\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-5 no-right-padding\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Describe illegal usage\" />\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row row-inline-label\">\r\n        <div class=\"col-md-12\">\r\n          <label class=\"inline-label vert-spacing\">\r\n            Is the highest and best use of subject property as improved (or as proposed per plans and specifications) the present use?\r\n          </label>\r\n          <div class=\"radio\">\r\n            <label>\r\n              <input type=\"radio\" name=\"BestUse\" value=\"yes\" class=\"radio\" />\r\n              Yes\r\n            </label>\r\n          </div>\r\n          <div class=\"radio\">\r\n            <label>\r\n              <input type=\"radio\" name=\"BestUse\" value=\"no\" class=\"radio\" />\r\n              No\r\n            </label>\r\n          </div>\r\n          <label class=\"inline-label vert-spacing\">If No, describe</label>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 pivot-radio-grid\">\r\n          <div class=\"row no-col-padding header-row\">\r\n            <div class=\"col-md-3\">\r\n              <label>Utilities</label>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <label class=\"sub-header\">Public</label>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <label class=\"sub-header\">Other (describe)</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row no-col-padding\">\r\n          </div>\r\n          <div class=\"row no-col-padding\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 pivot-radio-grid\">\r\n          <div class=\"row no-col-padding header-row\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-2\">\r\n              <label class=\"sub-header\">Public</label>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n              <label class=\"sub-header\">Other (describe)</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row no-col-padding\">\r\n          </div>\r\n          <div class=\"row no-col-padding\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 pivot-radio-grid\">\r\n          <div class=\"row no-col-padding header-row\">\r\n            <div class=\"col-md-8\">\r\n              <label>Off-site Improvements - Type</label>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <label class=\"sub-header align-center\">Public</label>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <label class=\"sub-header align-center\">Private</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row no-col-padding\">\r\n            <div class=\"col-md-8\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                  <label>Street</label>\r\n                </div>\r\n                <div class=\"col-md-9\">\r\n                  <input type=\"text\" class=\"form-control\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"radio no-top-margin align-center\">\r\n                <label class=\"no-left-padding\">\r\n                  <!--@Html.RadioButton(\"OffsiteImprovementsStreet\", \"public\", false, new { @class = \"radio\" })-->\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"radio no-top-margin align-center\">\r\n                <label class=\"no-left-padding\">\r\n                  <!--@Html.RadioButton(\"OffsiteImprovementsStreet\", \"private\", false, new { @class = \"radio\" })-->\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row no-col-padding\">\r\n            <div class=\"col-md-8\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                  <label>Alley</label>\r\n                </div>\r\n                <div class=\"col-md-9\">\r\n                  <input type=\"text\" class=\"form-control\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"radio no-top-margin align-center\">\r\n                <label class=\"no-left-padding\">\r\n                  <!--@Html.RadioButton(\"OffsiteImprovementsAlley\", \"public\", false, new { @class = \"radio\" })-->\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"radio no-top-margin align-center\">\r\n                <label class=\"no-left-padding\">\r\n                  <!--@Html.RadioButton(\"OffsiteImprovementsAlley\", \"private\", false, new { @class = \"radio\" })-->\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n          <label>FEMA Special Flood Hazard Area</label>\r\n          <div class=\"radio\">\r\n            <label class=\"no-left-padding\">\r\n              <input type=\"radio\" name=\"FemaFloodHazard\" value=\"yes\" class=\"radio\">\r\n              Yes\r\n            </label>\r\n          </div>\r\n          <div class=\"radio\">\r\n            <label>\r\n              <input type=\"radio\" name=\"FemaFloodHazard\" value=\"no\" class=\"radio\">\r\n              No\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <label>FEMA Flood Zone</label>\r\n          <input type=\"text\" placeholder=\"\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <label>FEMA Map #</label>\r\n          <input type=\"text\" placeholder=\"\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <label>FEMA Map Date</label>\r\n          <div class=\"input-group\">\r\n            <input id=\"FemaMapDate\" type=\"text\" placeholder=\"\" class=\"date-picker form-control\" />\r\n            <span class=\"input-group-addon\"><span class=\"fa fa-calendar\"></span></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row row-inline-label no-bottom-margin\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row\">\r\n\r\n            <div class=\"col-md-7 no-right-padding\">\r\n              <label class=\"inline-label vert-spacing\">\r\n                Are the utilities and off-site improvements typical for the market area?\r\n              </label>\r\n              <div class=\"radio\">\r\n                <label class=\"no-left-padding\">\r\n                  <input type=\"radio\" name=\"TypicalUtilities\" value=\"yes\" class=\"radio\" />\r\n                  Yes\r\n                </label>\r\n              </div>\r\n              <div class=\"radio\">\r\n                <label class=\"no-left-padding\">\r\n                  <input type=\"radio\" name=\"TypicalUtilities\" value=\"no\" class=\"radio\" />\r\n                  No\r\n                </label>\r\n              </div>\r\n              <label class=\"inline-label vert-spacing\">If No, describe</label>\r\n            </div>\r\n            <div class=\"col-md-5 no-right-padding\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row row-inline-label no-top-margin\">\r\n        <div class=\"col-md-12\">\r\n          <label class=\"inline-label vert-spacing\">\r\n            Are there any adverse site conditions or external factors (easements, encroachments, environmental conditions, land uses, etc.)?\r\n          </label>\r\n          <div class=\"radio\">\r\n            <label>\r\n              <input type=\"radio\" name=\"AdverseSiteConditions\" value=\"yes\" class=\"radio\" />\r\n              Yes\r\n            </label>\r\n          </div>\r\n          <div class=\"radio\">\r\n            <label>\r\n              <input type=\"radio\" name=\"AdverseSiteConditions\" value=\"no\" class=\"radio\" />\r\n              No\r\n            </label>\r\n          </div>\r\n          <label class=\"inline-label vert-spacing\">If Yes, describe</label>\r\n          <textarea class=\"form-control\" rows=\"2\" placeholder=\"Describe adverse conditions\"></textarea>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"well well-sm subject-detail\" >\r\n      <span class=\"vert-label\">\r\n        <span class=\"rotated-text\">Improvements</span>\r\n      </span>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <h6>General Description</h6>\r\n          <div class=\"container-fluid improvement-block\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <label># of Units</label>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"text\" class=\"form-control\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <label># of Stories</label>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"text\" class=\"form-control\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <label>Type</label>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <div class=\"radio stacked-radio\">\r\n                  <label class=\"no-left-padding\">\r\n                    <!--@Html.RadioButton(\"ImprovementType\", \"detached\", false, new { @class = \"radio\" })-->\r\n                    Detached\r\n                  </label>\r\n                </div>\r\n                <div class=\"radio stacked-radio\">\r\n                  <label class=\"no-left-padding\">\r\n                    <!--@Html.RadioButton(\"ImprovementType\", \"attached\", false, new { @class = \"radio\" })-->\r\n                    Attached\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <label>Design (Style)</label>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"text\" class=\"form-control\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"radio stacked-radio\">\r\n                  <label class=\"no-left-padding\">\r\n                    <!--@Html.RadioButton(\"ImprovementExisting\", \"existing\", false, new { @class = \"radio\" })-->\r\n                    Existing\r\n                  </label>\r\n                </div>\r\n                <div class=\"radio stacked-radio\">\r\n                  <label class=\"no-left-padding\">\r\n                    <!--@Html.RadioButton(\"ImprovementExisting\", \"proposed\", false, new { @class = \"radio\" })-->\r\n                    Proposed\r\n                  </label>\r\n                </div>\r\n                <div class=\"radio stacked-radio\">\r\n                  <label class=\"no-left-padding\">\r\n                    <!--@Html.RadioButton(\"ImprovementExisting\", \"underconstruction\", false, new { @class = \"radio\" })-->\r\n                    Under Construction\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <label>Year Built</label>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"text\" class=\"form-control\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <label>Effective Age (Yrs)</label>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <input type=\"text\" class=\"form-control\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <h6>Exterior Description</h6>\r\n          <div class=\"container-fluid improvement-block\">\r\n            <!--@BuildInlineLabelInput(new int[] { 5, 7 }, \"Foundation\", Html.TextBox(\"ExteriorFoundation\", \"\", new { @class = \"form-control\", @placeholder = \"materials/condition\" }))\r\n            @BuildInlineLabelInput(new int[] { 5, 7 }, \"Exterior Walls\", Html.TextBox(\"ExteriorWalls\", \"\", new { @class = \"form-control\", @placeholder = \"materials/condition\" }))\r\n            @BuildInlineLabelInput(new int[] { 5, 7 }, \"Roof Surface\", Html.TextBox(\"ExteriorRoof\", \"\", new { @class = \"form-control\", @placeholder = \"materials/condition\" }))\r\n            @BuildInlineLabelInput(new int[] { 5, 7 }, \"Gutters & Dwnspts\", Html.TextBox(\"ExteriorGutters\", \"\", new { @class = \"form-control\", @placeholder = \"materials/condition\" }))\r\n            @BuildInlineLabelInput(new int[] { 5, 7 }, \"Window Type\", Html.TextBox(\"ExteriorWindowType\", \"\", new { @class = \"form-control\", @placeholder = \"materials/condition\" }))\r\n            @BuildInlineLabelInput(new int[] { 5, 7 }, \"Storm Sash/Insulated\", Html.TextBox(\"ExteriorStormSash\", \"\", new { @class = \"form-control\", @placeholder = \"materials/condition\" }))\r\n            @BuildInlineLabelInput(new int[] { 5, 7 }, \"Screens\", Html.TextBox(\"ExteriorScreens\", \"\", new { @class = \"form-control\", @placeholder = \"materials/condition\" }))-->\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <h6>Foundation</h6>\r\n          <div class=\"container-fluid improvement-block no-right-border\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"FoundationConcreteSlab\", false, new { @class = \"checkbox\" })-->\r\n                    Concrete Slab\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"FoundationCrawlSpace\", false, new { @class = \"checkbox\" })-->\r\n                    Crawl Space\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"FoundationFullBasement\", false, new { @class = \"checkbox\" })-->\r\n                    Full Basement\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"FoundationPartialBasement\", false, new { @class = \"checkbox\" })-->\r\n                    Partial Basement\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <label>Basement Area</label>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <div class=\"input-group\">\r\n                  <!--@Html.TextBox(\"BasementAreaSf\", null, new { @class = \"form-control\" })-->\r\n                  <span class=\"input-group-addon\">sf</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <label>Basement Finish</label>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\">%</span>\r\n                  <!--@Html.TextBox(\"BasementFinish\", null, new { @class = \"form-control\" })-->\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"FoundationOutsideEntry\", false, new { @class = \"checkbox\" })-->\r\n                    Outside Entry/Exit\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"FoundationSumpPump\", false, new { @class = \"checkbox\" })-->\r\n                    Sump Pump\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <label>Evidence of</label>\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"FoundationEvidenceOfInfestation\", false, new { @class = \"checkbox\" })-->\r\n                    Infestation\r\n                  </label>\r\n                </div>\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"FoundationEvidenceOfDampness\", false, new { @class = \"checkbox\" })-->\r\n                    Dampness\r\n                  </label>\r\n                </div>\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"FoundationEvidenceOfSettlement\", false, new { @class = \"checkbox\" })-->\r\n                    Settlement\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <h6>Interior Description</h6>\r\n          <div class=\"container-fluid improvement-block\">\r\n            <!--@BuildInlineLabelInput(new int[] { 5, 7 }, \"Floors\", Html.TextBox(\"InteriorFloors\", \"\", new { @class = \"form-control\", @placeholder = \"materials/condition\" }))\r\n            @BuildInlineLabelInput(new int[] { 5, 7 }, \"Walls\", Html.TextBox(\"InteriorWalls\", \"\", new { @class = \"form-control\", @placeholder = \"materials/condition\" }))\r\n            @BuildInlineLabelInput(new int[] { 5, 7 }, \"Trim/Finish\", Html.TextBox(\"InteriorTrim\", \"\", new { @class = \"form-control\", @placeholder = \"materials/condition\" }))\r\n            @BuildInlineLabelInput(new int[] { 5, 7 }, \"Bath Floor\", Html.TextBox(\"InteriorBathFloor\", \"\", new { @class = \"form-control\", @placeholder = \"materials/condition\" }))\r\n            @BuildInlineLabelInput(new int[] { 5, 7 }, \"Bath Wainscot\", Html.TextBox(\"InteriorBathWainscot\", \"\", new { @class = \"form-control\", @placeholder = \"materials/condition\" }))\r\n            @BuildInlineLabelInput(new int[] { 5, 7 }, \"Doors\", Html.TextBox(\"InteriorDoors\", \"\", new { @class = \"form-control\", @placeholder = \"materials/condition\" }))-->\r\n            <div class=\"row\">\r\n              <label class=\"filler\">&nbsp;</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <h6>Heating/Cooling</h6>\r\n          <div class=\"container-fluid improvement-block\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <label class=\"sub-header\">Heating</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"HeatingFwa\", false, new { @class = \"checkbox\" })-->\r\n                    FWA\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"HeatingHwbb\", false, new { @class = \"checkbox\" })-->\r\n                    HWBB\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"HeatingRadiant\", false, new { @class = \"checkbox\" })-->\r\n                    Radiant\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"HeatingOther\", false, new { @class = \"checkbox\", @ng_model = \"models.HeatingOther\", @icheck = string.Empty })-->\r\n                    Other\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-9\">\r\n                <!--@Html.TextBox(\"HeatingOtherText\", null, new { @class = \"form-control\", @ng_show = \"models.HeatingOther\", @placeholder = \"Heating Type\" })-->\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2\">\r\n                <label class=\"heating-fuel\">Fuel</label>\r\n              </div>\r\n              <div class=\"col-md-10\">\r\n                <!--@Html.TextBox(\"HeatingFuel\", null, new { @class = \"form-control heating-fuel\" })-->\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <label class=\"sub-header\">Cooling</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-7\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"CoolingCentralAir\", false, new { @class = \"checkbox\" })-->\r\n                    Central Air Conditioning\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-5\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"CoolingIndividual\", false, new { @class = \"checkbox\" })-->\r\n                    Individual\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"CoolingOther\", false, new { @class = \"checkbox\", @ng_model = \"models.CoolingOther\", @icheck = string.Empty })-->\r\n                    Other\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-9\">\r\n                <!--@Html.TextBox(\"CoolingOtherText\", null, new { @class = \"form-control\", @ng_show = \"models.CoolingOther\", @placeholder = \"Cooling Type\" })-->\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <h6>Car Storage</h6>\r\n          <div class=\"container-fluid improvement-block no-right-border\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"ParkingNone\", false, new { @class = \"checkbox\", @ng_model = \"models.ParkingNone\", @icheck = string.Empty })-->\r\n                    None\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" >\r\n              <div class=\"col-md-4\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"ParkingDriveway\", false, new { @class = \"checkbox\", @ng_model = \"models.ParkingDriveway\", @icheck = string.Empty })-->\r\n                    Driveway\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <label class=\"car-count\"># of cars</label>\r\n              </div>\r\n              <div class=\"col-md-5\">\r\n                <!--@Html.TextBox(\"DrivewayCarCount\", null, new { @class = \"form-control\" })-->\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" >\r\n              <div class=\"col-md-5\">\r\n                <label>Driveway Surface</label>\r\n              </div>\r\n              <div class=\"col-md-7\">\r\n                <!--@Html.TextBox(\"DrivewaySurface\", null, new { @class = \"form-control\" })-->\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" >\r\n              <div class=\"col-md-4\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"ParkingGarage\", false, new { @class = \"checkbox\", @ng_model = \"models.ParkingGarage\", @icheck = string.Empty })-->\r\n                    Garage\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <label class=\"car-count\"># of cars</label>\r\n              </div>\r\n              <div class=\"col-md-5\">\r\n                <!--@Html.TextBox(\"GarageCarCount\", null, new { @class = \"form-control\" })-->\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" >\r\n              <div class=\"col-md-4\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"ParkingCarport\", false, new { @class = \"checkbox\", @ng_model = \"models.ParkingCarport\", @icheck = string.Empty })-->\r\n                    Carport\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <label class=\"car-count\"># of cars</label>\r\n              </div>\r\n              <div class=\"col-md-5\">\r\n                <!--@Html.TextBox(\"CarportCarCount\", null, new { @class = \"form-control\" })-->\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" >\r\n              <div class=\"col-md-4\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"ParkingAttached\", false, new { @class = \"checkbox\" })-->\r\n                    Attached\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"ParkingDetached\", false, new { @class = \"checkbox\" })-->\r\n                    Detached\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"ParkingBuiltIn\", false, new { @class = \"checkbox\" })-->\r\n                    Built-In\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <h6>Amenities</h6>\r\n          <div class=\"container-fluid improvement-block\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                \r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <h6>Attic</h6>\r\n          <div class=\"container-fluid improvement-block\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"AtticNone\", false, new { @class = \"checkbox\", @ng_model = \"models.AtticNone\", @icheck = string.Empty })-->\r\n                    None\r\n                  </label>\r\n                </div>\r\n                <div class=\"checkbox\" >\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"AtticStairs\", false, new { @class = \"checkbox\" })-->\r\n                    Stairs\r\n                  </label>\r\n                </div>\r\n                <div class=\"checkbox\" >\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"AtticDropstair\", false, new { @class = \"checkbox\" })-->\r\n                    Drop Stair\r\n                  </label>\r\n                </div>\r\n                <div class=\"checkbox\" >\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"AtticScuttle\", false, new { @class = \"checkbox\" })-->\r\n                    Scuttle\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"checkbox\" >\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"AtticFloor\", false, new { @class = \"checkbox\" })-->\r\n                    Floor\r\n                  </label>\r\n                </div>\r\n                <div class=\"checkbox\" >\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"AtticHeated\", false, new { @class = \"checkbox\" })-->\r\n                    Heated\r\n                  </label>\r\n                </div>\r\n                <div class=\"checkbox\" >\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"AtticFinished\", false, new { @class = \"checkbox\" })-->\r\n                    Finished\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <h6>Appliances</h6>\r\n          <div class=\"container-fluid improvement-block no-right-border\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"AppliancesRefridgerator\", false, new { @class = \"checkbox\" })-->\r\n                    Refridgerator\r\n                  </label>\r\n                </div>\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"AppliancesRange\", false, new { @class = \"checkbox\" })-->\r\n                    Range/Oven\r\n                  </label>\r\n                </div>\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"AppliancesDisposal\", false, new { @class = \"checkbox\" })-->\r\n                    Disposal\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"AppliancesDishwasher\", false, new { @class = \"checkbox\" })-->\r\n                    Dishwasher\r\n                  </label>\r\n                </div>\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"AppliancesFan\", false, new { @class = \"checkbox\" })-->\r\n                    Fan/Hood\r\n                  </label>\r\n                </div>\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"AppliancesMicrowave\", false, new { @class = \"checkbox\" })-->\r\n                    Microwave\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-7\">\r\n                <div class=\"checkbox\">\r\n                  <label>\r\n                    <!--@Html.CheckBox(\"AppliancesOther\", false, new { @class = \"checkbox\", @ng_model = \"models.AppliancesOther\", @icheck = string.Empty })-->\r\n                    Other (describe)\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-5\">\r\n                <!--@Html.TextBox(\"AppliancesOtherDescription\", null, new { @class = \"form-control\", @ng_show = \"models.AppliancesOther\" })-->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row above-grade-row\">\r\n        <div class=\"col-md-3\">\r\n          <label class=\"sub-header\">Finished area <b>above</b> grade contains</label>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n          <div class=\"input-group room-count\">\r\n            <!--@Html.TextBox(\"AboveGradeRoomCount\", null, new { @class = \"form-control\" })-->\r\n            <label>Rooms</label>\r\n          </div>\r\n          <div class=\"input-group room-count\">\r\n            <!--@Html.TextBox(\"AboveGradeBedrooomCount\", null, new { @class = \"form-control\" })-->\r\n            <span class=\"input-group-addon\">Bedrooms</span>\r\n          </div>\r\n          <div class=\"input-group room-count\">\r\n            <!--@Html.TextBox(\"AboveGradeBathCount\", null, new { @class = \"form-control\" })-->\r\n            <span class=\"input-group-addon\">Bath(s)</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <div class=\"input-group\">\r\n            <!--@Html.TextBox(\"AboveGradeGLA\", null, new { @class = \"form-control\", @ng_model = \"subject.AboveGradeGla\" })-->\r\n            <span class=\"input-group-addon\">\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <label>Additional features (energy efficient items, etc.)</label>\r\n          <!--@Html.TextArea(\"AdditionalFeatures\", null, new { @class = \"form-control\", @rows = \"2\" })-->\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <label>Describe the condition of the property (needed repairs, deterioration, renovations, remodeling, etc.)</label>\r\n          <!--@Html.TextArea(\"PropertyCondition\", null, new { @class = \"form-control\", @rows = \"3\" })-->\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row row-inline-label no-top-margin\">\r\n        <div class=\"col-md-12\">\r\n          <label class=\"inline-label vert-spacing\">\r\n            Are there any adverse conditions or physical deficiencies that affect the livability, soundness, or structural integrigy of the property?\r\n          </label>\r\n          <div class=\"radio\">\r\n            <label>\r\n              <input type=\"radio\" name=\"AdversePropertyConditions\" value=\"yes\" class=\"radio\" />\r\n              Yes\r\n            </label>\r\n          </div>\r\n          <div class=\"radio\">\r\n            <label>\r\n              <input type=\"radio\" name=\"AdversePropertyConditions\" value=\"no\" class=\"radio\" />\r\n              No\r\n            </label>\r\n          </div>\r\n          <label class=\"inline-label vert-spacing\">If Yes, describe</label>\r\n          <textarea class=\"form-control\" rows=\"2\" placeholder=\"Describe adverse conditions\" ></textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row row-inline-label no-top-margin\">\r\n        <div class=\"col-md-12\">\r\n          <label class=\"inline-label vert-spacing\">\r\n            Does the property generally conform to the neighborhood (functional utility, style, condition, use, construction, etc.)?\r\n          </label>\r\n          <div class=\"radio\">\r\n            <label>\r\n              <input type=\"radio\" name=\"PropertyFunctionalConform\" value=\"yes\" class=\"radio\" />\r\n              Yes\r\n            </label>\r\n          </div>\r\n          <div class=\"radio\">\r\n            <label>\r\n              <input type=\"radio\" name=\"PropertyFunctionalConform\" value=\"no\" class=\"radio\" />\r\n              No\r\n            </label>\r\n          </div>\r\n          <label class=\"inline-label vert-spacing\">If No, describe</label>\r\n          <textarea class=\"form-control\" rows=\"2\" placeholder=\"Describe adverse conditions\" ></textarea>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/subject/subject-detail/subject-detail.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/subject/subject-detail/subject-detail.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subject-container {\n  padding: 20px;\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto; }\n  .subject-container .row div[class^=\"col-\"] {\n    display: table-cell; }\n  .subject-container .row div[class^=\"col-\"] .discrepancies-button {\n      font-family: 'PT Sans', Lato;\n      font-size: 14px;\n      margin: 20px 20px 10px 0;\n      vertical-align: bottom; }\n  .subject-form {\n  font-size: 14px; }\n  .subject-form .well {\n    min-height: 200px;\n    padding: 10px 10px 10px 40px;\n    position: relative;\n    border: 1px solid #b7b7b7;\n    border-radius: 3px;\n    max-width: 950px;\n    margin-top: 20px; }\n  .subject-form .well:first-child {\n      margin-top: 0; }\n  .subject-form .well label {\n      color: #707070;\n      display: block;\n      font-weight: normal;\n      margin: 2px 0 0 4px; }\n  .subject-form .well a.popover-label {\n      display: table;\n      margin: 2px 0 0 4px; }\n  .subject-form .well input[type=\"text\"] {\n      padding-left: 4px; }\n  .subject-form .well input[type=\"text\"].text-wide {\n        max-width: 705px;\n        width: 70%; }\n  .subject-form .well input[type=\"text\"].text-medium {\n        max-width: 375px;\n        width: 40%; }\n  .subject-form .well input[type=\"text\"].text-small {\n        max-width: 143px;\n        width: 15%; }\n  .subject-form .well input[type=\"text\"].form-control {\n        color: #373a3c;\n        font-size: 17px;\n        padding: 1px 0 1px 4px;\n        height: 30px;\n        line-height: normal; }\n  .subject-form .well select {\n      font-size: 16px;\n      height: auto;\n      line-height: normal;\n      padding: 6px 2px; }\n  .subject-form .well .form-group {\n      margin-bottom: 2px; }\n  .subject-form .well .row {\n      margin-left: 0;\n      margin-right: 0; }\n  .subject-form .well .row.row-top-spacer {\n        margin-top: 20px; }\n  .subject-form .well .row.row-bottom-spacer {\n        margin-bottom: 20px; }\n  .subject-form .well .row.row-inline-label {\n        margin: 5px 0; }\n  .subject-form .well .row.no-top-margin {\n        margin-top: 0; }\n  .subject-form .well .row.no-bottom-margin {\n        margin-bottom: 0; }\n  .subject-form .well .row.boundary-row {\n        margin-top: 10px; }\n  .subject-form .well .row.min-text-height {\n        min-height: 28px; }\n  .subject-form .well .row.no-col-padding div[class^=\"col-\"] {\n        padding-left: 0;\n        padding-right: 0; }\n  .subject-form .well .row .col-lg-1, .subject-form .well .row .col-lg-10, .subject-form .well .row .col-lg-11, .subject-form .well .row .col-lg-12, .subject-form .well .row .col-lg-2, .subject-form .well .row .col-lg-3, .subject-form .well .row .col-lg-4, .subject-form .well .row .col-lg-5, .subject-form .well .row .col-lg-6, .subject-form .well .row .col-lg-7, .subject-form .well .row .col-lg-8, .subject-form .well .row .col-lg-9, .subject-form .well .row .col-md-1, .subject-form .well .row .col-md-10, .subject-form .well .row .col-md-11, .subject-form .well .row .col-md-12,\n      .subject-form .well .row .col-md-2, .subject-form .well .row .col-md-3, .subject-form .well .row .col-md-4, .subject-form .well .row .col-md-5, .subject-form .well .row .col-md-6, .subject-form .well .row .col-md-7, .subject-form .well .row .col-md-8, .subject-form .well .row .col-md-9, .subject-form .well .row .col-sm-1, .subject-form .well .row .col-sm-10, .subject-form .well .row .col-sm-11, .subject-form .well .row .col-sm-12, .subject-form .well .row .col-sm-2, .subject-form .well .row .col-sm-3, .subject-form .well .row .col-sm-4, .subject-form .well .row .col-sm-5,\n      .subject-form .well .row .col-sm-6, .subject-form .well .row .col-sm-7, .subject-form .well .row .col-sm-8, .subject-form .well .row .col-sm-9, .subject-form .well .row .col-xs-1, .subject-form .well .row .col-xs-10, .subject-form .well .row .col-xs-11, .subject-form .well .row .col-xs-12, .subject-form .well .row .col-xs-2, .subject-form .well .row .col-xs-3, .subject-form .well .row .col-xs-4, .subject-form .well .row .col-xs-5, .subject-form .well .row .col-xs-6, .subject-form .well .row .col-xs-7, .subject-form .well .row .col-xs-8, .subject-form .well .row .col-xs-9 {\n        padding-left: 0;\n        padding-right: 10px; }\n  .subject-form .well .row .col-lg-1.no-right-padding, .subject-form .well .row .col-lg-10.no-right-padding, .subject-form .well .row .col-lg-11.no-right-padding, .subject-form .well .row .col-lg-12.no-right-padding, .subject-form .well .row .col-lg-2.no-right-padding, .subject-form .well .row .col-lg-3.no-right-padding, .subject-form .well .row .col-lg-4.no-right-padding, .subject-form .well .row .col-lg-5.no-right-padding, .subject-form .well .row .col-lg-6.no-right-padding, .subject-form .well .row .col-lg-7.no-right-padding, .subject-form .well .row .col-lg-8.no-right-padding, .subject-form .well .row .col-lg-9.no-right-padding, .subject-form .well .row .col-md-1.no-right-padding, .subject-form .well .row .col-md-10.no-right-padding, .subject-form .well .row .col-md-11.no-right-padding, .subject-form .well .row .col-md-12.no-right-padding,\n        .subject-form .well .row .col-md-2.no-right-padding, .subject-form .well .row .col-md-3.no-right-padding, .subject-form .well .row .col-md-4.no-right-padding, .subject-form .well .row .col-md-5.no-right-padding, .subject-form .well .row .col-md-6.no-right-padding, .subject-form .well .row .col-md-7.no-right-padding, .subject-form .well .row .col-md-8.no-right-padding, .subject-form .well .row .col-md-9.no-right-padding, .subject-form .well .row .col-sm-1.no-right-padding, .subject-form .well .row .col-sm-10.no-right-padding, .subject-form .well .row .col-sm-11.no-right-padding, .subject-form .well .row .col-sm-12.no-right-padding, .subject-form .well .row .col-sm-2.no-right-padding, .subject-form .well .row .col-sm-3.no-right-padding, .subject-form .well .row .col-sm-4.no-right-padding, .subject-form .well .row .col-sm-5.no-right-padding,\n        .subject-form .well .row .col-sm-6.no-right-padding, .subject-form .well .row .col-sm-7.no-right-padding, .subject-form .well .row .col-sm-8.no-right-padding, .subject-form .well .row .col-sm-9.no-right-padding, .subject-form .well .row .col-xs-1.no-right-padding, .subject-form .well .row .col-xs-10.no-right-padding, .subject-form .well .row .col-xs-11.no-right-padding, .subject-form .well .row .col-xs-12.no-right-padding, .subject-form .well .row .col-xs-2.no-right-padding, .subject-form .well .row .col-xs-3.no-right-padding, .subject-form .well .row .col-xs-4.no-right-padding, .subject-form .well .row .col-xs-5.no-right-padding, .subject-form .well .row .col-xs-6.no-right-padding, .subject-form .well .row .col-xs-7.no-right-padding, .subject-form .well .row .col-xs-8.no-right-padding, .subject-form .well .row .col-xs-9.no-right-padding {\n          padding-right: 0; }\n  .subject-form .well .row .col-lg-1.middle-align-label, .subject-form .well .row .col-lg-10.middle-align-label, .subject-form .well .row .col-lg-11.middle-align-label, .subject-form .well .row .col-lg-12.middle-align-label, .subject-form .well .row .col-lg-2.middle-align-label, .subject-form .well .row .col-lg-3.middle-align-label, .subject-form .well .row .col-lg-4.middle-align-label, .subject-form .well .row .col-lg-5.middle-align-label, .subject-form .well .row .col-lg-6.middle-align-label, .subject-form .well .row .col-lg-7.middle-align-label, .subject-form .well .row .col-lg-8.middle-align-label, .subject-form .well .row .col-lg-9.middle-align-label, .subject-form .well .row .col-md-1.middle-align-label, .subject-form .well .row .col-md-10.middle-align-label, .subject-form .well .row .col-md-11.middle-align-label, .subject-form .well .row .col-md-12.middle-align-label,\n        .subject-form .well .row .col-md-2.middle-align-label, .subject-form .well .row .col-md-3.middle-align-label, .subject-form .well .row .col-md-4.middle-align-label, .subject-form .well .row .col-md-5.middle-align-label, .subject-form .well .row .col-md-6.middle-align-label, .subject-form .well .row .col-md-7.middle-align-label, .subject-form .well .row .col-md-8.middle-align-label, .subject-form .well .row .col-md-9.middle-align-label, .subject-form .well .row .col-sm-1.middle-align-label, .subject-form .well .row .col-sm-10.middle-align-label, .subject-form .well .row .col-sm-11.middle-align-label, .subject-form .well .row .col-sm-12.middle-align-label, .subject-form .well .row .col-sm-2.middle-align-label, .subject-form .well .row .col-sm-3.middle-align-label, .subject-form .well .row .col-sm-4.middle-align-label, .subject-form .well .row .col-sm-5.middle-align-label,\n        .subject-form .well .row .col-sm-6.middle-align-label, .subject-form .well .row .col-sm-7.middle-align-label, .subject-form .well .row .col-sm-8.middle-align-label, .subject-form .well .row .col-sm-9.middle-align-label, .subject-form .well .row .col-xs-1.middle-align-label, .subject-form .well .row .col-xs-10.middle-align-label, .subject-form .well .row .col-xs-11.middle-align-label, .subject-form .well .row .col-xs-12.middle-align-label, .subject-form .well .row .col-xs-2.middle-align-label, .subject-form .well .row .col-xs-3.middle-align-label, .subject-form .well .row .col-xs-4.middle-align-label, .subject-form .well .row .col-xs-5.middle-align-label, .subject-form .well .row .col-xs-6.middle-align-label, .subject-form .well .row .col-xs-7.middle-align-label, .subject-form .well .row .col-xs-8.middle-align-label, .subject-form .well .row .col-xs-9.middle-align-label {\n          padding-top: 18px; }\n  .subject-form .well .row.above-grade-row {\n        margin: 10px 0; }\n  .subject-form .well .row.above-grade-row div[class^=\"col-\"] {\n          padding-right: 0; }\n  .subject-form .well .row.above-grade-row div[class^=\"col-\"] > label.sub-header {\n            font-size: 14px;\n            margin-top: 6px; }\n  .subject-form .well .row.above-grade-row div[class^=\"col-\"] .input-group.room-count {\n            display: table-cell; }\n  .subject-form .well .row.above-grade-row div[class^=\"col-\"] .input-group.room-count input[type=\"text\"].form-control {\n              width: 80px; }\n  .subject-form .well .row.above-grade-row div[class^=\"col-\"] .input-group.room-count label {\n              display: inline-block;\n              padding: 0 15px 0 2px; }\n  .subject-form .well .row.above-grade-row div[class^=\"col-\"] .input-group .input-group-addon {\n            background-color: transparent;\n            border: none;\n            font-size: 13px;\n            padding: 6px 12px 4px 2px; }\n  .subject-form .well .row h6 {\n        color: #0076a3;\n        font-size: 13px;\n        font-weight: bold;\n        margin: 3px 0 10px;\n        text-align: center; }\n  .subject-form .well .row h6.with-sub-title {\n          margin-bottom: 0; }\n  .subject-form .well .row h6.present-land {\n          margin: 10px 0 3px; }\n  .subject-form .well .row select {\n        height: 28px;\n        line-height: 30px;\n        padding: 0 0 1px 0; }\n  .subject-form .well .inline-label {\n      display: inline-block; }\n  .subject-form .well .inline-label.vert-spacing {\n        margin-bottom: 7px;\n        margin-top: 9px; }\n  .subject-form .well .full-inline {\n      display: inline; }\n  .subject-form .well.subject-detail {\n      min-height: 200px;\n      padding-left: 40px; }\n  .subject-form .well.subject-detail .row a.popover-label {\n        display: table;\n        font-size: 13px; }\n  .subject-form .well.subject-detail .row label {\n        font-size: 13px; }\n  .subject-form .well.subject-detail .row label.lg {\n          font-size: 16px; }\n  .subject-form .well.subject-detail input[type=\"text\"] {\n        padding-left: 4px; }\n  .subject-form .well.subject-detail input[type=\"text\"].form-control {\n          font-size: 16px;\n          padding: 2px 0 2px 4px;\n          height: auto;\n          line-height: normal; }\n  .subject-form .well.subject-detail .checkbox, .subject-form .well.subject-detail .radio {\n        display: inline-block;\n        font-size: 17px;\n        margin-bottom: 0;\n        margin-top: 4px; }\n  .subject-form .well.subject-detail .checkbox label, .subject-form .well.subject-detail .radio label {\n          padding-left: 7px;\n          font-size: 14px; }\n  .subject-form .well.subject-detail .checkbox label.no-left-padding, .subject-form .well.subject-detail .radio label.no-left-padding {\n            padding-left: 0; }\n  .subject-form .well.subject-detail .checkbox.inline-radio label, .subject-form .well.subject-detail .radio.inline-radio label {\n          font-size: 13px; }\n  .subject-form .well .vert-label {\n      background: #d7d7d7;\n      display: inline-block;\n      height: 100%;\n      left: 0;\n      margin: 0;\n      padding: 0;\n      position: absolute;\n      top: 0;\n      width: 25px; }\n  .subject-form .well .vert-label .rotated-text {\n        bottom: 0;\n        font-family: Lato;\n        font-size: 14px;\n        font-weight: bold;\n        letter-spacing: 6px;\n        position: absolute;\n        text-transform: uppercase;\n        -webkit-transform: rotate(-90deg) translate(0, 2px);\n                transform: rotate(-90deg) translate(0, 2px);\n        -webkit-transform-origin: top left;\n                transform-origin: top left;\n        top: 58%;\n        white-space: nowrap; }\n  .subject-form .well .container-fluid {\n      padding-left: 0;\n      padding-right: 0; }\n  .subject-form .well .container-fluid.inline-radio-grid {\n        border-right: 1px dotted rgba(0, 0, 0, 0.2); }\n  .subject-form .well .container-fluid.inline-radio-grid .col-lg-1, .subject-form .well .container-fluid.inline-radio-grid .col-lg-10, .subject-form .well .container-fluid.inline-radio-grid .col-lg-11, .subject-form .well .container-fluid.inline-radio-grid .col-lg-12, .subject-form .well .container-fluid.inline-radio-grid .col-lg-2, .subject-form .well .container-fluid.inline-radio-grid .col-lg-3, .subject-form .well .container-fluid.inline-radio-grid .col-lg-4, .subject-form .well .container-fluid.inline-radio-grid .col-lg-5, .subject-form .well .container-fluid.inline-radio-grid .col-lg-6, .subject-form .well .container-fluid.inline-radio-grid .col-lg-7, .subject-form .well .container-fluid.inline-radio-grid .col-lg-8, .subject-form .well .container-fluid.inline-radio-grid .col-lg-9, .subject-form .well .container-fluid.inline-radio-grid .col-md-1, .subject-form .well .container-fluid.inline-radio-grid .col-md-10, .subject-form .well .container-fluid.inline-radio-grid .col-md-11, .subject-form .well .container-fluid.inline-radio-grid .col-md-12,\n        .subject-form .well .container-fluid.inline-radio-grid .col-md-2, .subject-form .well .container-fluid.inline-radio-grid .col-md-3, .subject-form .well .container-fluid.inline-radio-grid .col-md-4, .subject-form .well .container-fluid.inline-radio-grid .col-md-5, .subject-form .well .container-fluid.inline-radio-grid .col-md-6, .subject-form .well .container-fluid.inline-radio-grid .col-md-7, .subject-form .well .container-fluid.inline-radio-grid .col-md-8, .subject-form .well .container-fluid.inline-radio-grid .col-md-9, .subject-form .well .container-fluid.inline-radio-grid .col-sm-1, .subject-form .well .container-fluid.inline-radio-grid .col-sm-10, .subject-form .well .container-fluid.inline-radio-grid .col-sm-11, .subject-form .well .container-fluid.inline-radio-grid .col-sm-12, .subject-form .well .container-fluid.inline-radio-grid .col-sm-2, .subject-form .well .container-fluid.inline-radio-grid .col-sm-3, .subject-form .well .container-fluid.inline-radio-grid .col-sm-4, .subject-form .well .container-fluid.inline-radio-grid .col-sm-5,\n        .subject-form .well .container-fluid.inline-radio-grid .col-sm-6, .subject-form .well .container-fluid.inline-radio-grid .col-sm-7, .subject-form .well .container-fluid.inline-radio-grid .col-sm-8, .subject-form .well .container-fluid.inline-radio-grid .col-sm-9, .subject-form .well .container-fluid.inline-radio-grid .col-xs-1, .subject-form .well .container-fluid.inline-radio-grid .col-xs-10, .subject-form .well .container-fluid.inline-radio-grid .col-xs-11, .subject-form .well .container-fluid.inline-radio-grid .col-xs-12, .subject-form .well .container-fluid.inline-radio-grid .col-xs-2, .subject-form .well .container-fluid.inline-radio-grid .col-xs-3, .subject-form .well .container-fluid.inline-radio-grid .col-xs-4, .subject-form .well .container-fluid.inline-radio-grid .col-xs-5, .subject-form .well .container-fluid.inline-radio-grid .col-xs-6, .subject-form .well .container-fluid.inline-radio-grid .col-xs-7, .subject-form .well .container-fluid.inline-radio-grid .col-xs-8, .subject-form .well .container-fluid.inline-radio-grid .col-xs-9 {\n          padding-left: 0;\n          padding-right: 0; }\n  .subject-form .well .container-fluid.inline-radio-grid .col-lg-1 > label, .subject-form .well .container-fluid.inline-radio-grid .col-lg-10 > label, .subject-form .well .container-fluid.inline-radio-grid .col-lg-11 > label, .subject-form .well .container-fluid.inline-radio-grid .col-lg-12 > label, .subject-form .well .container-fluid.inline-radio-grid .col-lg-2 > label, .subject-form .well .container-fluid.inline-radio-grid .col-lg-3 > label, .subject-form .well .container-fluid.inline-radio-grid .col-lg-4 > label, .subject-form .well .container-fluid.inline-radio-grid .col-lg-5 > label, .subject-form .well .container-fluid.inline-radio-grid .col-lg-6 > label, .subject-form .well .container-fluid.inline-radio-grid .col-lg-7 > label, .subject-form .well .container-fluid.inline-radio-grid .col-lg-8 > label, .subject-form .well .container-fluid.inline-radio-grid .col-lg-9 > label, .subject-form .well .container-fluid.inline-radio-grid .col-md-1 > label, .subject-form .well .container-fluid.inline-radio-grid .col-md-10 > label, .subject-form .well .container-fluid.inline-radio-grid .col-md-11 > label, .subject-form .well .container-fluid.inline-radio-grid .col-md-12 > label,\n          .subject-form .well .container-fluid.inline-radio-grid .col-md-2 > label, .subject-form .well .container-fluid.inline-radio-grid .col-md-3 > label, .subject-form .well .container-fluid.inline-radio-grid .col-md-4 > label, .subject-form .well .container-fluid.inline-radio-grid .col-md-5 > label, .subject-form .well .container-fluid.inline-radio-grid .col-md-6 > label, .subject-form .well .container-fluid.inline-radio-grid .col-md-7 > label, .subject-form .well .container-fluid.inline-radio-grid .col-md-8 > label, .subject-form .well .container-fluid.inline-radio-grid .col-md-9 > label, .subject-form .well .container-fluid.inline-radio-grid .col-sm-1 > label, .subject-form .well .container-fluid.inline-radio-grid .col-sm-10 > label, .subject-form .well .container-fluid.inline-radio-grid .col-sm-11 > label, .subject-form .well .container-fluid.inline-radio-grid .col-sm-12 > label, .subject-form .well .container-fluid.inline-radio-grid .col-sm-2 > label, .subject-form .well .container-fluid.inline-radio-grid .col-sm-3 > label, .subject-form .well .container-fluid.inline-radio-grid .col-sm-4 > label, .subject-form .well .container-fluid.inline-radio-grid .col-sm-5 > label,\n          .subject-form .well .container-fluid.inline-radio-grid .col-sm-6 > label, .subject-form .well .container-fluid.inline-radio-grid .col-sm-7 > label, .subject-form .well .container-fluid.inline-radio-grid .col-sm-8 > label, .subject-form .well .container-fluid.inline-radio-grid .col-sm-9 > label, .subject-form .well .container-fluid.inline-radio-grid .col-xs-1 > label, .subject-form .well .container-fluid.inline-radio-grid .col-xs-10 > label, .subject-form .well .container-fluid.inline-radio-grid .col-xs-11 > label, .subject-form .well .container-fluid.inline-radio-grid .col-xs-12 > label, .subject-form .well .container-fluid.inline-radio-grid .col-xs-2 > label, .subject-form .well .container-fluid.inline-radio-grid .col-xs-3 > label, .subject-form .well .container-fluid.inline-radio-grid .col-xs-4 > label, .subject-form .well .container-fluid.inline-radio-grid .col-xs-5 > label, .subject-form .well .container-fluid.inline-radio-grid .col-xs-6 > label, .subject-form .well .container-fluid.inline-radio-grid .col-xs-7 > label, .subject-form .well .container-fluid.inline-radio-grid .col-xs-8 > label, .subject-form .well .container-fluid.inline-radio-grid .col-xs-9 > label {\n            font-weight: bold;\n            margin-top: 6px; }\n  .subject-form .well .container-fluid.inline-radio-grid .radio label {\n          font-size: 12px; }\n  .subject-form .well .container-fluid.inline-radio-grid label {\n          font-size: 12px; }\n  .subject-form .well .container-fluid.one-unit .row, .subject-form .well .container-fluid.present-land .row {\n        margin-bottom: 2px; }\n  .subject-form .well .container-fluid.one-unit .row > div, .subject-form .well .container-fluid.present-land .row > div {\n          /* col-md- div */\n          padding-right: 0; }\n  .subject-form .well .container-fluid.one-unit .row .col-md-2 label {\n        /* \"One-Unit houseing\" text in-between input textboxes */\n        display: block;\n        font-size: 12px;\n        margin: 6px 0 0;\n        text-align: center; }\n  .subject-form .well .container-fluid.present-land .row .col-md-7 label {\n        margin-top: 6px; }\n  .subject-form .well .container-fluid.present-land .row > div {\n        /* col-md- with input */ }\n  .subject-form .well .container-fluid.present-land .row > div .input-group .input-group-addon {\n          padding: 6px 8px; }\n  .subject-form .well .container-fluid.improvement-block {\n        border-right: 1px dotted rgba(0, 0, 0, 0.2);\n        margin-bottom: 15px;\n        min-height: 116px; }\n  .subject-form .well .container-fluid.improvement-block .sub-header {\n          font-weight: bold; }\n  .subject-form .well .container-fluid.improvement-block .row div[class^=\"col-\"] input[type=\"text\"] {\n          margin-bottom: 1px; }\n  .subject-form .well .container-fluid.improvement-block .row div[class^=\"col-\"] > label {\n          margin-top: 5px; }\n  .subject-form .well .container-fluid.improvement-block .row div[class^=\"col-\"] .input-group {\n          margin-bottom: 1px; }\n  .subject-form .well .container-fluid.improvement-block .row div[class^=\"col-\"] .input-group input[type=\"text\"] {\n            margin-bottom: 0; }\n  .subject-form .well .container-fluid.improvement-block .row div[class^=\"col-\"] .stacked-radio {\n          margin-bottom: 3px;\n          margin-top: 0; }\n  .subject-form .well .container-fluid.improvement-block .row div[class^=\"col-\"] .stacked-radio label {\n            margin-top: 0; }\n  .subject-form .well .container-fluid.improvement-block .row div[class^=\"col-\"] .heating-fuel {\n          padding-left: 13px; }\n  .subject-form .well .container-fluid.improvement-block .row div[class^=\"col-\"] .car-count {\n          margin-top: 7px;\n          text-align: right; }\n  .subject-form .well .container-fluid.improvement-block .row div[class^=\"col-\"].right-column-spacing {\n          padding-left: 20px; }\n  .subject-form .well .container-fluid.improvement-block .row .filler {\n          height: 13px; }\n  .subject-form .well .container-fluid.improvement-block.no-right-border {\n          border-right: none; }\n  .subject-form .well .container-fluid .row.sub-title > div > label {\n        font-size: 11px;\n        text-align: center;\n        margin-bottom: 1px; }\n  .subject-form .well .pivot-radio-grid .row {\n      min-height: 29px; }\n  .subject-form .well .pivot-radio-grid .row div[class^=\"col-\"] > label {\n        font-size: 12px;\n        margin-top: 4px; }\n  .subject-form .well .pivot-radio-grid .row div[class^=\"col-\"] .radio.no-top-margin {\n        margin-top: 0; }\n  .subject-form .well .pivot-radio-grid .row div[class^=\"col-\"] .radio.no-top-margin > label {\n          margin-top: 0; }\n  .subject-form .well .pivot-radio-grid .row div[class^=\"col-\"] .radio.align-center {\n        display: table;\n        margin: 0 auto; }\n  .subject-form .well .pivot-radio-grid .row div[class^=\"col-\"].side-padded {\n        padding-left: 5px;\n        padding-right: 10px; }\n  .subject-form .well .pivot-radio-grid .row.header-row {\n        min-height: initial; }\n  .subject-form .well .pivot-radio-grid .row.header-row div[class^=\"col-\"] > label {\n          font-size: 13px;\n          margin: 0; }\n  .subject-form .well .pivot-radio-grid .row.header-row div[class^=\"col-\"] > label.sub-header {\n            font-size: 12px;\n            font-weight: bold;\n            margin-top: 1px; }\n  .subject-form .well .pivot-radio-grid .row.header-row div[class^=\"col-\"] > label.sub-header.align-center {\n              text-align: center; }\n  .subject-form .well.well-header-label {\n      padding-top: 0; }\n  .subject-form .well.well-header-label .row.row-header-label {\n        /*border-bottom: 1px solid #b7b7b7;*/\n        border-bottom: 1px solid #d7d7d7;\n        margin-left: -15px;\n        margin-right: -11px;\n        padding: 2px 10px; }\n  .subject-form .well.well-header-label .row.row-header-label label {\n          color: #7d7d7d;\n          font-size: 12px;\n          font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zdWJqZWN0L3N1YmplY3QtZGV0YWlsL0M6XFxVc2Vyc1xccmxpZmZlcnRoXFxzb3VyY2VcXHJlcG9zXFxUZXN0XFxETS5OZy5XZWJcXGRtLXRlc3QyL3NyY1xcYXBwXFxtb2R1bGVzXFxzdWJqZWN0XFxzdWJqZWN0LWRldGFpbFxcc3ViamVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7RUFKaEI7SUFVTSxtQkFBbUIsRUFBQTtFQVZ6QjtNQWFRLDRCQUE0QjtNQUM1QixlQUFlO01BQ2Ysd0JBQXdCO01BQ3hCLHNCQUFzQixFQUFBO0VBTzlCO0VBQ0UsZUFBZSxFQUFBO0VBRGpCO0lBSUksaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7RUFWcEI7TUFhTSxhQUFhLEVBQUE7RUFibkI7TUFpQk0sY0FBYztNQUNkLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsbUJBQW1CLEVBQUE7RUFwQnpCO01Bd0JNLGNBQWM7TUFDZCxtQkFBbUIsRUFBQTtFQXpCekI7TUE2Qk0saUJBQWlCLEVBQUE7RUE3QnZCO1FBZ0NRLGdCQUFnQjtRQUNoQixVQUFVLEVBQUE7RUFqQ2xCO1FBcUNRLGdCQUFnQjtRQUNoQixVQUFVLEVBQUE7RUF0Q2xCO1FBMENRLGdCQUFnQjtRQUNoQixVQUFVLEVBQUE7RUEzQ2xCO1FBK0NRLGNBQXNCO1FBQ3RCLGVBQWU7UUFDZixzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLG1CQUFtQixFQUFBO0VBbkQzQjtNQXdETSxlQUFlO01BQ2YsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixnQkFBZ0IsRUFBQTtFQTNEdEI7TUErRE0sa0JBQWtCLEVBQUE7RUEvRHhCO01BbUVNLGNBQWM7TUFDZCxlQUFlLEVBQUE7RUFwRXJCO1FBdUVRLGdCQUFnQixFQUFBO0VBdkV4QjtRQTJFUSxtQkFBbUIsRUFBQTtFQTNFM0I7UUErRVEsYUFBYSxFQUFBO0VBL0VyQjtRQW1GUSxhQUFhLEVBQUE7RUFuRnJCO1FBdUZRLGdCQUFnQixFQUFBO0VBdkZ4QjtRQTJGUSxnQkFBZ0IsRUFBQTtFQTNGeEI7UUErRlEsZ0JBQWdCLEVBQUE7RUEvRnhCO1FBb0dVLGVBQWU7UUFDZixnQkFBZ0IsRUFBQTtFQXJHMUI7OztRQTRHUSxlQUFlO1FBQ2YsbUJBQW1CLEVBQUE7RUE3RzNCOzs7VUFnSFUsZ0JBQWdCLEVBQUE7RUFoSDFCOzs7VUFvSFUsaUJBQWlCLEVBQUE7RUFwSDNCO1FBeUhRLGNBQWMsRUFBQTtFQXpIdEI7VUE0SFUsZ0JBQWdCLEVBQUE7RUE1SDFCO1lBaUljLGVBQWU7WUFDZixlQUFlLEVBQUE7RUFsSTdCO1lBeUljLG1CQUFtQixFQUFBO0VBeklqQztjQTZJa0IsV0FBVyxFQUFBO0VBN0k3QjtjQWtKZ0IscUJBQXFCO2NBQ3JCLHFCQUFxQixFQUFBO0VBbkpyQztZQTBKYyw2QkFBNkI7WUFDN0IsWUFBWTtZQUNaLGVBQWU7WUFDZix5QkFBeUIsRUFBQTtFQTdKdkM7UUFvS1EsY0FBYztRQUNkLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGtCQUFrQixFQUFBO0VBeEsxQjtVQTJLVSxnQkFBZ0IsRUFBQTtFQTNLMUI7VUErS1Usa0JBQWtCLEVBQUE7RUEvSzVCO1FBb0xRLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsa0JBQWtCLEVBQUE7RUF0TDFCO01BMkxNLHFCQUFxQixFQUFBO0VBM0wzQjtRQThMUSxrQkFBa0I7UUFDbEIsZUFBZSxFQUFBO0VBL0x2QjtNQW9NTSxlQUFlLEVBQUE7RUFwTXJCO01Bd01NLGlCQUFpQjtNQUNqQixrQkFBa0IsRUFBQTtFQXpNeEI7UUE4TVUsY0FBYztRQUNkLGVBQWUsRUFBQTtFQS9NekI7UUFtTlUsZUFBZSxFQUFBO0VBbk56QjtVQXNOWSxlQUFlLEVBQUE7RUF0TjNCO1FBNE5RLGlCQUFpQixFQUFBO0VBNU56QjtVQStOVSxlQUFlO1VBQ2Ysc0JBQXNCO1VBQ3RCLFlBQVk7VUFDWixtQkFBbUIsRUFBQTtFQWxPN0I7UUF1T1EscUJBQXFCO1FBQ3JCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsZUFBZSxFQUFBO0VBMU92QjtVQTZPVSxpQkFBaUI7VUFDakIsZUFBZSxFQUFBO0VBOU96QjtZQWlQWSxlQUFlLEVBQUE7RUFqUDNCO1VBdVBZLGVBQWUsRUFBQTtFQXZQM0I7TUE4UE0sbUJBQW1CO01BQ25CLHFCQUFxQjtNQUNyQixZQUFZO01BQ1osT0FBTztNQUNQLFNBQVM7TUFDVCxVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLE1BQU07TUFDTixXQUFXLEVBQUE7RUF0UWpCO1FBeVFRLFNBQVM7UUFDVCxpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixtREFBMkM7Z0JBQTNDLDJDQUEyQztRQUMzQyxrQ0FBMEI7Z0JBQTFCLDBCQUEwQjtRQUMxQixRQUFRO1FBQ1IsbUJBQW1CLEVBQUE7RUFuUjNCO01Bd1JNLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTtFQXpSdEI7UUE0UlEsMkNBQXdDLEVBQUE7RUE1UmhEOzs7VUFtU1UsZUFBZTtVQUNmLGdCQUFnQixFQUFBO0VBcFMxQjs7O1lBdVNZLGlCQUFpQjtZQUNqQixlQUFlLEVBQUE7RUF4UzNCO1VBK1NZLGVBakJ1QixFQUFBO0VBOVJuQztVQW9UVSxlQXRCeUIsRUFBQTtFQTlSbkM7UUEwVFUsa0JBQWtCLEVBQUE7RUExVDVCO1VBNFRrQixnQkFBQTtVQUNOLGdCQUFnQixFQUFBO0VBN1Q1QjtRQXFVb0Isd0RBQUE7UUFDTixjQUFjO1FBQ2QsZUFBZTtRQUNmLGVBQWU7UUFDZixrQkFBa0IsRUFBQTtFQXpVaEM7UUFtVmMsZUFBZSxFQUFBO0VBblY3QjtRQXVWa0IsdUJBQUEsRUFBd0I7RUF2VjFDO1VBMFZnQixnQkFBZ0IsRUFBQTtFQTFWaEM7UUFrV1EsMkNBQXdDO1FBQ3hDLG1CQUFtQjtRQUNuQixpQkFBaUIsRUFBQTtFQXBXekI7VUF1V1UsaUJBQWlCLEVBQUE7RUF2VzNCO1VBNldjLGtCQUFrQixFQUFBO0VBN1doQztVQWlYYyxlQUFlLEVBQUE7RUFqWDdCO1VBcVhjLGtCQUFrQixFQUFBO0VBclhoQztZQXdYZ0IsZ0JBQWdCLEVBQUE7RUF4WGhDO1VBNlhjLGtCQUFrQjtVQUNsQixhQUFhLEVBQUE7RUE5WDNCO1lBaVlnQixhQUFhLEVBQUE7RUFqWTdCO1VBc1ljLGtCQUFrQixFQUFBO0VBdFloQztVQTBZYyxlQUFlO1VBQ2YsaUJBQWlCLEVBQUE7RUEzWS9CO1VBK1ljLGtCQUFrQixFQUFBO0VBL1loQztVQW9aWSxZQUFZLEVBQUE7RUFwWnhCO1VBeVpVLGtCQUFrQixFQUFBO0VBelo1QjtRQWlhYyxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGtCQUFrQixFQUFBO0VBbmFoQztNQThhUSxnQkFBZ0IsRUFBQTtFQTlheEI7UUFrYlksZUFQNEI7UUFRNUIsZUFBZSxFQUFBO0VBbmIzQjtRQXdiYyxhQUFhLEVBQUE7RUF4YjNCO1VBMmJnQixhQUFhLEVBQUE7RUEzYjdCO1FBZ2NjLGNBQWM7UUFDZCxjQUFjLEVBQUE7RUFqYzVCO1FBc2NZLGlCQUFpQjtRQUNqQixtQkFBbUIsRUFBQTtFQXZjL0I7UUE0Y1UsbUJBQW1CLEVBQUE7RUE1YzdCO1VBZ2RjLGVBQWU7VUFDZixTQUFTLEVBQUE7RUFqZHZCO1lBb2RnQixlQXpDd0I7WUEwQ3hCLGlCQUFpQjtZQUNqQixlQUFlLEVBQUE7RUF0ZC9CO2NBeWRrQixrQkFBa0IsRUFBQTtFQXpkcEM7TUFtZU0sY0FBYyxFQUFBO0VBbmVwQjtRQXdlVSxvQ0FBQTtRQUNBLGdDQUFnQztRQUNoQyxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGlCQUFpQixFQUFBO0VBNWUzQjtVQStlWSxjQUFjO1VBQ2QsZUFBZTtVQUNmLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zdWJqZWN0L3N1YmplY3QtZGV0YWlsL3N1YmplY3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YmplY3QtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcblxyXG4gIC5yb3cge1xyXG5cclxuICAgIGRpdltjbGFzc149XCJjb2wtXCJdIHtcclxuICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuXHJcbiAgICAgIC5kaXNjcmVwYW5jaWVzLWJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQVCBTYW5zJywgTGF0bztcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDIwcHggMTBweCAwO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4uc3ViamVjdC1mb3JtIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gIC53ZWxsIHtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiN2I3Yjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXgtd2lkdGg6IDk1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgbWFyZ2luOiAycHggMCAwIDRweDtcclxuICAgIH1cclxuXHJcbiAgICBhLnBvcG92ZXItbGFiZWwge1xyXG4gICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgbWFyZ2luOiAycHggMCAwIDRweDtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG5cclxuICAgICAgJi50ZXh0LXdpZGUge1xyXG4gICAgICAgIG1heC13aWR0aDogNzA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi50ZXh0LW1lZGl1bSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzNzVweDtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnRleHQtc21hbGwge1xyXG4gICAgICAgIG1heC13aWR0aDogMTQzcHg7XHJcbiAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoNTUsIDU4LCA2MCk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDFweCAwIDFweCA0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgcGFkZGluZzogNnB4IDJweDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIH1cclxuXHJcbiAgICAucm93IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuXHJcbiAgICAgICYucm93LXRvcC1zcGFjZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYucm93LWJvdHRvbS1zcGFjZXIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYucm93LWlubGluZS1sYWJlbCB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5uby10b3AtbWFyZ2luIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLm5vLWJvdHRvbS1tYXJnaW4ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYm91bmRhcnktcm93IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLm1pbi10ZXh0LWhlaWdodCB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5uby1jb2wtcGFkZGluZyB7XHJcbiAgICAgICAgZGl2W2NsYXNzXj1cImNvbC1cIl0ge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb2wtbGctMSwgLmNvbC1sZy0xMCwgLmNvbC1sZy0xMSwgLmNvbC1sZy0xMiwgLmNvbC1sZy0yLCAuY29sLWxnLTMsIC5jb2wtbGctNCwgLmNvbC1sZy01LCAuY29sLWxnLTYsIC5jb2wtbGctNywgLmNvbC1sZy04LCAuY29sLWxnLTksIC5jb2wtbWQtMSwgLmNvbC1tZC0xMCwgLmNvbC1tZC0xMSwgLmNvbC1tZC0xMixcclxuICAgICAgLmNvbC1tZC0yLCAuY29sLW1kLTMsIC5jb2wtbWQtNCwgLmNvbC1tZC01LCAuY29sLW1kLTYsIC5jb2wtbWQtNywgLmNvbC1tZC04LCAuY29sLW1kLTksIC5jb2wtc20tMSwgLmNvbC1zbS0xMCwgLmNvbC1zbS0xMSwgLmNvbC1zbS0xMiwgLmNvbC1zbS0yLCAuY29sLXNtLTMsIC5jb2wtc20tNCwgLmNvbC1zbS01LFxyXG4gICAgICAuY29sLXNtLTYsIC5jb2wtc20tNywgLmNvbC1zbS04LCAuY29sLXNtLTksIC5jb2wteHMtMSwgLmNvbC14cy0xMCwgLmNvbC14cy0xMSwgLmNvbC14cy0xMiwgLmNvbC14cy0yLCAuY29sLXhzLTMsIC5jb2wteHMtNCwgLmNvbC14cy01LCAuY29sLXhzLTYsIC5jb2wteHMtNywgLmNvbC14cy04LCAuY29sLXhzLTkge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgICAgICAmLm5vLXJpZ2h0LXBhZGRpbmcge1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYubWlkZGxlLWFsaWduLWxhYmVsIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hYm92ZS1ncmFkZS1yb3cge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG5cclxuICAgICAgICBkaXZbY2xhc3NePVwiY29sLVwiXSB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG5cclxuICAgICAgICAgID4gbGFiZWwge1xyXG5cclxuICAgICAgICAgICAgJi5zdWItaGVhZGVyIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmlucHV0LWdyb3VwIHtcclxuXHJcbiAgICAgICAgICAgICYucm9vbS1jb3VudCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuXHJcbiAgICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgICAgICAgICAgICAgJi5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDJweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLmlucHV0LWdyb3VwLWFkZG9uIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4IDRweCAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGg2IHtcclxuICAgICAgICBjb2xvcjogIzAwNzZhMztcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luOiAzcHggMCAxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgJi53aXRoLXN1Yi10aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5wcmVzZW50LWxhbmQge1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDAgM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZWN0IHtcclxuICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDFweCAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmlubGluZS1sYWJlbCB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICAgICYudmVydC1zcGFjaW5nIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZ1bGwtaW5saW5lIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgfVxyXG5cclxuICAgICYuc3ViamVjdC1kZXRhaWwge1xyXG4gICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG5cclxuICAgICAgLnJvdyB7XHJcblxyXG4gICAgICAgIGEucG9wb3Zlci1sYWJlbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuXHJcbiAgICAgICAgICAmLmxnIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG5cclxuICAgICAgICAmLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycHggMCAycHggNHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jaGVja2JveCwgLnJhZGlvIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAgICAgICAmLm5vLWxlZnQtcGFkZGluZyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuaW5saW5lLXJhZGlvIHtcclxuICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC52ZXJ0LWxhYmVsIHtcclxuICAgICAgYmFja2dyb3VuZDogI2Q3ZDdkNztcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG5cclxuICAgICAgLnJvdGF0ZWQtdGV4dCB7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRlKDAsIDJweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XHJcbiAgICAgICAgdG9wOiA1OCU7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcblxyXG4gICAgICAmLmlubGluZS1yYWRpby1ncmlkIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBkb3R0ZWQgcmdiYSgwLDAsMCwwLjIpO1xyXG5cclxuICAgICAgICAkcmFkaW8tZ3JpZC1mb250LXNpemU6IDEycHg7XHJcblxyXG4gICAgICAgIC5jb2wtbGctMSwgLmNvbC1sZy0xMCwgLmNvbC1sZy0xMSwgLmNvbC1sZy0xMiwgLmNvbC1sZy0yLCAuY29sLWxnLTMsIC5jb2wtbGctNCwgLmNvbC1sZy01LCAuY29sLWxnLTYsIC5jb2wtbGctNywgLmNvbC1sZy04LCAuY29sLWxnLTksIC5jb2wtbWQtMSwgLmNvbC1tZC0xMCwgLmNvbC1tZC0xMSwgLmNvbC1tZC0xMixcclxuICAgICAgICAuY29sLW1kLTIsIC5jb2wtbWQtMywgLmNvbC1tZC00LCAuY29sLW1kLTUsIC5jb2wtbWQtNiwgLmNvbC1tZC03LCAuY29sLW1kLTgsIC5jb2wtbWQtOSwgLmNvbC1zbS0xLCAuY29sLXNtLTEwLCAuY29sLXNtLTExLCAuY29sLXNtLTEyLCAuY29sLXNtLTIsIC5jb2wtc20tMywgLmNvbC1zbS00LCAuY29sLXNtLTUsXHJcbiAgICAgICAgLmNvbC1zbS02LCAuY29sLXNtLTcsIC5jb2wtc20tOCwgLmNvbC1zbS05LCAuY29sLXhzLTEsIC5jb2wteHMtMTAsIC5jb2wteHMtMTEsIC5jb2wteHMtMTIsIC5jb2wteHMtMiwgLmNvbC14cy0zLCAuY29sLXhzLTQsIC5jb2wteHMtNSwgLmNvbC14cy02LCAuY29sLXhzLTcsIC5jb2wteHMtOCwgLmNvbC14cy05IHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcblxyXG4gICAgICAgICAgPiBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmFkaW8ge1xyXG5cclxuICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAkcmFkaW8tZ3JpZC1mb250LXNpemU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6ICRyYWRpby1ncmlkLWZvbnQtc2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYub25lLXVuaXQsICYucHJlc2VudC1sYW5kIHtcclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuXHJcbiAgICAgICAgICA+IGRpdiB7IC8qIGNvbC1tZC0gZGl2ICovXHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLm9uZS11bml0IHtcclxuICAgICAgICAucm93IHtcclxuICAgICAgICAgIC5jb2wtbWQtMiB7XHJcbiAgICAgICAgICAgIGxhYmVsIHsgLyogXCJPbmUtVW5pdCBob3VzZWluZ1wiIHRleHQgaW4tYmV0d2VlbiBpbnB1dCB0ZXh0Ym94ZXMgKi9cclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA2cHggMCAwO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5wcmVzZW50LWxhbmQge1xyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgLmNvbC1tZC03IHtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgID4gZGl2IHsgLyogY29sLW1kLSB3aXRoIGlucHV0ICovXHJcbiAgICAgICAgICAgIC5pbnB1dC1ncm91cCB7XHJcbiAgICAgICAgICAgICAgLmlucHV0LWdyb3VwLWFkZG9uIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCA4cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmltcHJvdmVtZW50LWJsb2NrIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBkb3R0ZWQgcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTE2cHg7XHJcblxyXG4gICAgICAgIC5zdWItaGVhZGVyIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICBkaXZbY2xhc3NePVwiY29sLVwiXSB7XHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgID4gbGFiZWwge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmlucHV0LWdyb3VwIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcblxyXG4gICAgICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3RhY2tlZC1yYWRpbyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcblxyXG4gICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaGVhdGluZy1mdWVsIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jYXItY291bnQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5yaWdodC1jb2x1bW4tc3BhY2luZyB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmZpbGxlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYubm8tcmlnaHQtYm9yZGVyIHtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yb3cge1xyXG4gICAgICAgICYuc3ViLXRpdGxlIHtcclxuICAgICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgPiBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucGl2b3QtcmFkaW8tZ3JpZCB7XHJcbiAgICAgICRwaXZvdC1yYWRpby1sYWJlbC1mb250LXNpemU6IDEycHg7XHJcblxyXG4gICAgICAucm93IHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAyOXB4O1xyXG5cclxuICAgICAgICBkaXZbY2xhc3NePVwiY29sLVwiXSB7XHJcbiAgICAgICAgICA+IGxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAkcGl2b3QtcmFkaW8tbGFiZWwtZm9udC1zaXplO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnJhZGlvIHtcclxuICAgICAgICAgICAgJi5uby10b3AtbWFyZ2luIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG5cclxuICAgICAgICAgICAgICA+IGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmFsaWduLWNlbnRlciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLnNpZGUtcGFkZGVkIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmhlYWRlci1yb3cge1xyXG4gICAgICAgICAgbWluLWhlaWdodDogaW5pdGlhbDtcclxuXHJcbiAgICAgICAgICBkaXZbY2xhc3NePVwiY29sLVwiXSB7XHJcbiAgICAgICAgICAgID4gbGFiZWwge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICAgICAgICYuc3ViLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRwaXZvdC1yYWRpby1sYWJlbC1mb250LXNpemU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFweDtcclxuXHJcbiAgICAgICAgICAgICAgICAmLmFsaWduLWNlbnRlciB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLndlbGwtaGVhZGVyLWxhYmVsIHtcclxuICAgICAgcGFkZGluZy10b3A6IDA7XHJcblxyXG4gICAgICAucm93IHtcclxuXHJcbiAgICAgICAgJi5yb3ctaGVhZGVyLWxhYmVsIHtcclxuICAgICAgICAgIC8qYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiN2I3Yjc7Ki9cclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDdkN2Q3O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTFweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG5cclxuICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6ICM3ZDdkN2Q7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/subject/subject-detail/subject-detail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/subject/subject-detail/subject-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: SubjectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectDetailComponent", function() { return SubjectDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SubjectDetailComponent = /** @class */ (function () {
    function SubjectDetailComponent() {
    }
    SubjectDetailComponent.prototype.ngOnInit = function () {
    };
    SubjectDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject-detail',
            template: __webpack_require__(/*! ./subject-detail.component.html */ "./src/app/modules/subject/subject-detail/subject-detail.component.html"),
            styles: [__webpack_require__(/*! ./subject-detail.component.scss */ "./src/app/modules/subject/subject-detail/subject-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SubjectDetailComponent);
    return SubjectDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/subject/subject-search/subject-search.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/subject/subject-search/subject-search.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  subject-search works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/subject/subject-search/subject-search.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/subject/subject-search/subject-search.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3ViamVjdC9zdWJqZWN0LXNlYXJjaC9zdWJqZWN0LXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/subject/subject-search/subject-search.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/subject/subject-search/subject-search.component.ts ***!
  \****************************************************************************/
/*! exports provided: SubjectSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSearchComponent", function() { return SubjectSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SubjectSearchComponent = /** @class */ (function () {
    function SubjectSearchComponent() {
    }
    SubjectSearchComponent.prototype.ngOnInit = function () {
    };
    SubjectSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject-search',
            template: __webpack_require__(/*! ./subject-search.component.html */ "./src/app/modules/subject/subject-search/subject-search.component.html"),
            styles: [__webpack_require__(/*! ./subject-search.component.scss */ "./src/app/modules/subject/subject-search/subject-search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SubjectSearchComponent);
    return SubjectSearchComponent;
}());



/***/ }),

/***/ "./src/app/modules/subject/subject.component.html":
/*!********************************************************!*\
  !*** ./src/app/modules/subject/subject.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sub-menu\">\r\n  \r\n  <div class=\"navbar-nav container\">\r\n    <a class=\"nav-item navbar-link \" routerLink=\"./search\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n      <span class=\"fas fa-search\"></span>\r\n      Property Search\r\n    </a>\r\n    <a class=\"nav-item navbar-link {{isActive()}}\" routerLink=\"./detail\" >\r\n      <span class=\"far fa-bars\"></span>\r\n      Property Detail\r\n    </a>\r\n    <a class=\"nav-item navbar-link \" routerLink=\"./deeds\" routerLinkActive=\"active\">\r\n      <span class=\"far fa-file-alt\"></span>\r\n      Deeds\r\n    </a>\r\n  </div>\r\n</div>\r\n<div class=\"clear\"></div>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/modules/subject/subject.component.scss":
/*!********************************************************!*\
  !*** ./src/app/modules/subject/subject.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3ViamVjdC9zdWJqZWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/subject/subject.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/subject/subject.component.ts ***!
  \******************************************************/
/*! exports provided: SubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectComponent", function() { return SubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SubjectComponent = /** @class */ (function () {
    function SubjectComponent(router) {
        this.router = router;
    }
    SubjectComponent.prototype.ngOnInit = function () {
    };
    SubjectComponent.prototype.isActive = function () {
        // This seems like a hack
        // Just to get two routes to show active on the same tab
        return this.router.isActive('/Subject', true) || this.router.isActive('/Subject/detail', false) ? 'active' : '';
    };
    SubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject',
            template: __webpack_require__(/*! ./subject.component.html */ "./src/app/modules/subject/subject.component.html"),
            styles: [__webpack_require__(/*! ./subject.component.scss */ "./src/app/modules/subject/subject.component.scss"), __webpack_require__(/*! ../../ui/header/header.component.scss */ "./src/app/ui/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SubjectComponent);
    return SubjectComponent;
}());



/***/ }),

/***/ "./src/app/modules/summary/summary.component.html":
/*!********************************************************!*\
  !*** ./src/app/modules/summary/summary.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  summary works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/summary/summary.component.scss":
/*!********************************************************!*\
  !*** ./src/app/modules/summary/summary.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/summary/summary.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/summary/summary.component.ts ***!
  \******************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SummaryComponent = /** @class */ (function () {
    function SummaryComponent() {
    }
    SummaryComponent.prototype.ngOnInit = function () {
    };
    SummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/modules/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.scss */ "./src/app/modules/summary/summary.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/app/ui/footer/footer.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <span class=\"copy\">\r\n    &copy; 2019 <span class=\"data\">data</span><span class=\"master\">master</span>.io\r\n  </span>\r\n  <div class=\"bottom-nav left-nav\">\r\n    <a href=\"https://www.datamaster.io/privacy-policy\" target=\"_blank\">Privacy Policy</a>\r\n    <a href=\"https://www.datamaster.io/patent-information\" target=\"_blank\">Patent Information</a>\r\n  </div>\r\n  <div class=\"bottom-nav float-right right-nav\">\r\n    <a href=\"https://www.datamaster.io/contact\" target=\"_blank\">Contact Us</a>\r\n    <a href=\"https://www.datamaster.io/about-us\" target=\"_blank\">About</a>\r\n    <a href=\"#\" class=\"social-media first\"><span class=\"fab fa-facebook-f fa-lg\"></span></a>\r\n    <a href=\"#\" class=\"social-media\"><span class=\"fab fa-twitter fa-lg\"></span></a>\r\n    <a href=\"#\" class=\"social-media\"><span class=\"fab fa-youtube fa-lg\"></span></a>\r\n    <a href=\"#\" class=\"social-media\"><span class=\"fab fa-linkedin-in fa-lg\"></span></a>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  background-color: rgba(216, 218, 219, 0.1);\n  border-top: 1px solid rgba(0, 0, 0, 0.05);\n  color: #818182;\n  font-size: 13px;\n  max-height: 30px;\n  padding: 6px 2rem 4px;\n  text-transform: lowercase; }\n  footer .copy .data {\n    color: #186faf; }\n  footer .copy .master {\n    color: #555559; }\n  footer .bottom-nav {\n    display: inline-block; }\n  footer .bottom-nav a {\n      color: rgba(64, 152, 215, 0.8);\n      margin-left: 30px;\n      transition: all 0.5s ease; }\n  footer .bottom-nav a.social-media {\n        color: rgba(64, 152, 215, 0.35);\n        margin-left: 15px; }\n  footer .bottom-nav a.social-media.first {\n          margin-left: 25px; }\n  footer .bottom-nav a:hover {\n        text-decoration: none;\n        color: #0A558C; }\n  footer .bottom-nav .spacer {\n      display: inline-flex;\n      margin: 0 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvZm9vdGVyL0M6XFxVc2Vyc1xccmxpZmZlcnRoXFxzb3VyY2VcXHJlcG9zXFxUZXN0XFxETS5OZy5XZWJcXGRtLXRlc3QyL3NyY1xcYXBwXFx1aVxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL2Zvb3Rlci9DOlxcVXNlcnNcXHJsaWZmZXJ0aFxcc291cmNlXFxyZXBvc1xcVGVzdFxcRE0uTmcuV2ViXFxkbS10ZXN0Mi9zcmNcXGFzc2V0c1xcc3R5bGVcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDBDQUEwQztFQUMxQyx5Q0FBeUM7RUFDekMsY0FBYztFQUNkLGVBQWU7RUFFZixnQkNDa0I7RURBbEIscUJBQXFCO0VBQ3JCLHlCQUF5QixFQUFBO0VBUjNCO0lBWU0sY0FBYyxFQUFBO0VBWnBCO0lBZ0JNLGNBQWMsRUFBQTtFQWhCcEI7SUFxQkkscUJBQXFCLEVBQUE7RUFyQnpCO01BMEJNLDhCQUE4QjtNQUM5QixpQkFBaUI7TUFDakIseUJBQXlCLEVBQUE7RUE1Qi9CO1FBK0JRLCtCQUE4QjtRQUM5QixpQkFBaUIsRUFBQTtFQWhDekI7VUFtQ1UsaUJBQWlCLEVBQUE7RUFuQzNCO1FBd0NRLHFCQUFxQjtRQUVyQixjQUFjLEVBQUE7RUExQ3RCO01BZ0RNLG9CQUFvQjtNQUNwQixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91aS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTYsIDIxOCwgMjE5LCAwLjEpO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIGNvbG9yOiAjODE4MTgyO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICAvL21hcmdpbi10b3A6ICRmb290ZXItbWFyZ2luO1xyXG4gIG1heC1oZWlnaHQ6ICRmb290ZXItaGVpZ2h0O1xyXG4gIHBhZGRpbmc6IDZweCAycmVtIDRweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG5cclxuICAuY29weSB7XHJcbiAgICAuZGF0YSB7XHJcbiAgICAgIGNvbG9yOiAjMTg2ZmFmO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXN0ZXIge1xyXG4gICAgICBjb2xvcjogIzU1NTU1OTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ib3R0b20tbmF2IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICBhIHtcclxuICAgICAgLy9jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xyXG4gICAgICAvL2NvbG9yOiAjMTE4N0JCO1xyXG4gICAgICBjb2xvcjogcmdiYSg2NCwgMTUyLCAyMTUsIDAuOCk7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG5cclxuICAgICAgJi5zb2NpYWwtbWVkaWEge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDY0LCAxNTIsIDIxNSwgLjM1KTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuXHJcbiAgICAgICAgJi5maXJzdCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAvL2NvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgICAgICAgY29sb3I6ICMwQTU1OEM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgJiAuc3BhY2VyIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIlxyXG4kYm9keS1iZy1jb2xvcjogI2YyZjZmYTtcclxuXHJcbi8vIE5hdiB2YXJzXHJcbi8vJGhlYWRlci1oZWlnaHQ6IDgxcHg7IC8vIGhlaWdodCA2MSB3aXRoIDIwcHggbWFyZ2luLWJvdHRvbVxyXG4kaGVhZGVyLWhlaWdodDogNjhweDsgICAvLyBoZWlnaHQgNDggd2l0aCAyMCBtYXJnaW4tYm90dG9tO1xyXG4kc3ViaGVhZGVyLWhlaWdodDogMzVweDtcclxuXHJcbi8vIEZvb3RlciB2YXJzXHJcbiRmb290ZXItaGVpZ2h0OiAzMHB4O1xyXG4kZm9vdGVyLW1hcmdpbjogMjBweDtcclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/ui/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/ui/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/ui/header/header.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header fixed-top flex-md-nowrap p-0\">\r\n\r\n  <nav class=\"navbar\">\r\n\r\n    <a class=\"navbar-brand logo\" routerLink=\"/home-sb\">\r\n      <img src=\"{{logoSrc}}\" height=\"{{logoSize}}\" />\r\n      <!-- <img src=\"~/images/logo-web.png\" height=\"50\" /> -->\r\n    </a>\r\n\r\n\r\n    <div class=\"navbar-nav container\" *ngIf=\"navVisible\">\r\n      <a class=\"nav-item navbar-link \" routerLink=\"/Subject\" routerLinkActive=\"active\" #subjectactive=\"routerLinkActive\">\r\n        Subject\r\n      </a>\r\n      <a class=\"nav-item navbar-link \" routerLink=\"/Comparables\" routerLinkActive=\"active\">\r\n        Comparables\r\n      </a>\r\n      <a class=\"nav-item navbar-link \" routerLink=\"/market-conditions\" routerLinkActive=\"active\" #mcactive=\"routerLinkActive\">\r\n        Market Conditions\r\n      </a>\r\n      <a class=\"nav-item navbar-link \" routerLink=\"/Summary\" routerLinkActive=\"active\" #summaryactive=\"routerLinkActive\">\r\n        Report Summary\r\n      </a>\r\n    </div>\r\n\r\n\r\n  </nav>\r\n\r\n  <div class=\"nav-right\">\r\n    <a class=\"action-item\" href=\"#\" onclick=\"return false\" title=\"Notifications\">\r\n      <!--<span class=\"fal fa-bell fa-lg has-badge\" data-count=\"3\"></span>-->\r\n      <span class=\"badge\">3</span>\r\n      <span class=\"fal fa-bell\"></span>\r\n    </a>\r\n\r\n    <a class=\"action-item\" href=\"#\" onclick=\"return false\" title=\"Help\">\r\n      <span class=\"fal fa-question-circle\"></span>\r\n    </a>\r\n\r\n    <a class=\"action-item sign-out\" href=\"#\" onclick=\"return false\" title=\"Log out\">\r\n      <span class=\"fal fa-sign-out\"></span>\r\n    </a>\r\n  </div>\r\n\r\n</header>\r\n\r\n"

/***/ }),

/***/ "./src/app/ui/header/header.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header,\n.sub-menu {\n  padding: 0;\n  background-color: #fff;\n  border-bottom: 1px solid rgba(16, 42, 67, 0.2);\n  font-family: 'Open Sans', Roboto;\n  font-size: 16px; }\n  header .navbar,\n  .sub-menu .navbar {\n    padding: 0; }\n  header .navbar-brand,\n  .sub-menu .navbar-brand {\n    background-color: rgba(16, 42, 67, 0.8);\n    margin: 0;\n    padding: 8px 18px 8px 14px;\n    border-bottom: 1px solid rgba(16, 42, 67, 0.4);\n    margin-bottom: -1px; }\n  header a,\n  .sub-menu a {\n    color: #7c96b1;\n    text-decoration: none; }\n  header a:hover,\n    .sub-menu a:hover {\n      text-decoration: none; }\n  header .navbar-nav,\n  .sub-menu .navbar-nav {\n    flex-direction: row;\n    justify-content: normal;\n    padding-top: 3px; }\n  header .navbar-nav a.nav-item,\n    .sub-menu .navbar-nav a.nav-item {\n      border-bottom: 2px solid transparent;\n      font-size: 14px;\n      font-weight: 500;\n      letter-spacing: 0.5px;\n      text-align: center;\n      padding: 11px 30px 11px; }\n  header .navbar-nav a.nav-item:hover,\n      .sub-menu .navbar-nav a.nav-item:hover {\n        border-bottom: 2px solid rgba(78, 161, 198, 0.4);\n        color: #70879e; }\n  header .navbar-nav a.nav-item.active,\n      .sub-menu .navbar-nav a.nav-item.active {\n        border-bottom: 2px solid #e66a6a;\n        color: #0C6288;\n        cursor: default;\n        font-weight: 600; }\n  header .nav-right,\n  .sub-menu .nav-right {\n    position: absolute;\n    right: 30px;\n    top: 13px; }\n  header .nav-right .action-item,\n    .sub-menu .nav-right .action-item {\n      color: #2680c2;\n      margin: 0 13px;\n      position: relative; }\n  header .nav-right .action-item .badge,\n      .sub-menu .nav-right .action-item .badge {\n        top: -4px;\n        left: 8px;\n        /* height: 18px; \r\n        line-height: 14px;*/\n        /*background-color: rgba(98, 176, 232, 0.3);*/\n        background-color: #d0e7f8;\n        border: 1px solid #62b0e8;\n        border-radius: 20px;\n        color: #e66a6a;\n        z-index: 1;\n        position: absolute;\n        min-width: 14px;\n        font-size: 10px;\n        text-align: center;\n        padding: 1px 4px; }\n  header .nav-right .action-item:hover,\n      .sub-menu .nav-right .action-item:hover {\n        color: #62B0E8; }\n  header .nav-right .action-item.sign-out:hover,\n      .sub-menu .nav-right .action-item.sign-out:hover {\n        color: #e66a6a; }\n  header .nav-right .action-item .has-badge,\n      .sub-menu .nav-right .action-item .has-badge {\n        position: relative; }\n  header .nav-right .action-item .has-badge[data-count]:after,\n        .sub-menu .nav-right .action-item .has-badge[data-count]:after {\n          position: absolute;\n          right: -5px;\n          top: -37%;\n          content: attr(data-count);\n          font-size: 9px;\n          padding: 5px;\n          border-radius: 20px;\n          line-height: .75em;\n          color: white;\n          background: rgba(255, 0, 0, 0.85);\n          text-align: center;\n          min-width: 2em;\n          font-weight: bold;\n          font-family: 'Open Sans'; }\n  .sub-menu {\n  position: fixed;\n  width: 100%;\n  z-index: 999; }\n  .sub-menu .navbar-nav {\n    padding-top: 0; }\n  .sub-menu .navbar-nav a.nav-item {\n      border-bottom: 2px solid transparent;\n      font-size: 13px;\n      font-weight: 500;\n      padding: 8px 30px 6px; }\n  .sub-menu .navbar-nav a.nav-item span[class*=\"fa-\"] {\n        margin-right: 4px; }\n  .sub-menu .navbar-nav a.nav-item:hover {\n        background-color: rgba(15, 96, 153, 0.05);\n        border-bottom: none; }\n  .sub-menu .navbar-nav a.nav-item.active {\n        background-color: rgba(15, 96, 153, 0.05);\n        border-bottom: 2px solid #077FAF;\n        color: #a61b1b;\n        font-weight: 600; }\n  .clear {\n  height: 0;\n  margin: 0;\n  padding: 0;\n  margin-top: 36px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvaGVhZGVyL0M6XFxVc2Vyc1xccmxpZmZlcnRoXFxzb3VyY2VcXHJlcG9zXFxUZXN0XFxETS5OZy5XZWJcXGRtLXRlc3QyL3NyY1xcYXBwXFx1aVxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL2hlYWRlci9DOlxcVXNlcnNcXHJsaWZmZXJ0aFxcc291cmNlXFxyZXBvc1xcVGVzdFxcRE0uTmcuV2ViXFxkbS10ZXN0Mi9zcmNcXGFzc2V0c1xcc3R5bGVcXF90aGVtZS5zY3NzIiwic3JjL2FwcC91aS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUVFLFVBQVU7RUFDVixzQkNzQ3FCO0VEbkNyQiw4Q0FBOEM7RUFDOUMsZ0NBQWdDO0VBQ2hDLGVBQWUsRUFBQTtFQVJqQjs7SUFXSSxVQUFVLEVBQUE7RUFYZDs7SUFnQkksdUNBQXVDO0lBQ3ZDLFNBQVM7SUFDVCwwQkFBMEI7SUFDMUIsOENBQThDO0lBQzlDLG1CQUFtQixFQUFBO0VBcEJ2Qjs7SUF5QkksY0NtQnFDO0lEbEJyQyxxQkFBcUIsRUFBQTtFQTFCekI7O01BNkJNLHFCQUFxQixFQUFBO0VBN0IzQjs7SUFrQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0IsRUFBQTtFQXBDcEI7O01BdUNNLG9DQ1kwQztNRFgxQyxlQUFlO01BQ2YsZ0JDU3NCO01EUnRCLHFCQUFxQjtNQUNyQixrQkFBa0I7TUFFbEIsdUJBQXVCLEVBQUE7RUE3QzdCOztRQWlEUSxnRENHMEQ7UUREMUQsY0NFNEMsRUFBQTtFRHJEcEQ7O1FBdURRLGdDQ0QyQztRREczQyxjQ0Y4QjtRREk5QixlQUFlO1FBQ2YsZ0JDSjJCLEVBQUE7RUR4RG5DOztJQW1FSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVMsRUFBQTtFQXJFYjs7TUF3RU0sY0FBYztNQUNkLGNBQWM7TUFDZCxrQkFBa0IsRUFBQTtFQTFFeEI7O1FBNkVRLFNBQVM7UUFDVCxTQUFTO1FBQ1Q7MkJFcEJtQjtRRnNCbkIsNkNBQUE7UUFDQSx5QkFBeUI7UUFDekIseUJBQXVDO1FBQ3ZDLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixnQkFBZ0IsRUFBQTtFQTNGeEI7O1FBK0ZRLGNBQWMsRUFBQTtFQS9GdEI7O1FBb0dVLGNBQWMsRUFBQTtFQXBHeEI7O1FBMEdRLGtCQUFrQixFQUFBO0VBMUcxQjs7VUE2R1Usa0JBQWtCO1VBQ2xCLFdBQVc7VUFDWCxTQUFTO1VBQ1QseUJBQXlCO1VBQ3pCLGNBQWM7VUFDZCxZQUFZO1VBQ1osbUJBQW1CO1VBQ25CLGtCQUFrQjtVQUNsQixZQUFZO1VBQ1osaUNBQWlDO1VBQ2pDLGtCQUFrQjtVQUNsQixjQUFjO1VBQ2QsaUJBQWlCO1VBQ2pCLHdCQUF3QixFQUFBO0VBT2xDO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFIZDtJQU1JLGNBQWMsRUFBQTtFQU5sQjtNQVdNLG9DQUFvQztNQUNwQyxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLHFCQUFxQixFQUFBO0VBZDNCO1FBaUJRLGlCQUFpQixFQUFBO0VBakJ6QjtRQXFCUSx5Q0M3Rm1EO1FEOEZuRCxtQkFBbUIsRUFBQTtFQXRCM0I7UUEwQlEseUNDakdvRDtRRG1HcEQsZ0NDakdtRDtRRGtHbkQsY0NuR3NDO1FEb0d0QyxnQkFBZ0IsRUFBQTtFQUt4QjtFQUNFLFNBQVM7RUFDVCxTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdWkvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ3RoZW1lJztcclxuXHJcbmhlYWRlcixcclxuLnN1Yi1tZW51IHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXItYmdjb2xvcjtcclxuICAvL2JvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgLy9ib3JkZXItYm90dG9tOiAxcHggc29saWQgIzEwMmE0MztcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNiwgNDIsIDY3LCAwLjIpO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgUm9ib3RvO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICAvL3BhZGRpbmc6IDA7XHJcbiAgLm5hdmJhciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1icmFuZCB7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICMxMDJhNDM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2LCA0MiwgNjcsIDAuOCk7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA4cHggMThweCA4cHggMTRweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE2LCA0MiwgNjcsIDAuNCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICAvL2NvbG9yOiBoc2xhKDY3LCAzNCUsIDk5JSwgMC41KTtcclxuICAgIGNvbG9yOiAkbmF2LWxpbmstY29sb3I7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5uYXZiYXItbmF2IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IG5vcm1hbDtcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcblxyXG4gICAgYS5uYXYtaXRlbSB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206ICRuYXYtaXRlbS1ib3JkZXItYm90dG9tO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAkbmF2LWl0ZW0tZm9udC13ZWlnaHQ7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAvL3BhZGRpbmc6IDE0cHggMTZweCA5cHg7XHJcbiAgICAgIHBhZGRpbmc6IDExcHggMzBweCAxMXB4O1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgLy9ib3JkZXItYm90dG9tOiAycHggc29saWQgI2MzZDUwMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAkbmF2LWl0ZW0taG92ZXItYm9yZGVyLWJvdHRvbTtcclxuICAgICAgICAvL2JvcmRlci1ib3R0b206IDNweCBzb2xpZCBoc2xhKDY3LCAzNCUsIDk0JSwgMC41KTsgIC8vIE1vcmUgb2YgYSBncmF5IGNvbG9yXHJcbiAgICAgICAgY29sb3I6ICRuYXYtaXRlbS1ob3Zlci1mb250LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogJG5hdi1pdGVtLWFjdGl2ZS1ib3JkZXItYm90dG9tO1xyXG4gICAgICAgIC8vYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcclxuICAgICAgICBjb2xvcjogJG5hdi1pdGVtLWFjdGl2ZS1mb250LWNvbG9yO1xyXG4gICAgICAgIC8vY29sb3I6IGhzbGEoNjcsIDM0JSwgOTIlLCAxKTtcclxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRuYXYtaXRlbS1hY3RpdmUtZm9udC13ZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gIC5uYXYtcmlnaHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbiAgICB0b3A6IDEzcHg7XHJcblxyXG4gICAgLmFjdGlvbi1pdGVtIHtcclxuICAgICAgY29sb3I6ICMyNjgwYzI7XHJcbiAgICAgIG1hcmdpbjogMCAxM3B4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAuYmFkZ2Uge1xyXG4gICAgICAgIHRvcDogLTRweDtcclxuICAgICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgICAgLyogaGVpZ2h0OiAxOHB4OyBcclxuICAgICAgICBsaW5lLWhlaWdodDogMTRweDsqL1xyXG4gICAgICAgIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5OCwgMTc2LCAyMzIsIDAuMyk7Ki9cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBlN2Y4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOTgsIDE3NiwgMjMyLCAxKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZTY2YTZhO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTRweDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDFweCA0cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjNjJCMEU4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLnNpZ24tb3V0IHtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAjZTY2YTZhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIC5oYXMtYmFkZ2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgJltkYXRhLWNvdW50XTphZnRlciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogLTVweDtcclxuICAgICAgICAgIHRvcDogLTM3JTtcclxuICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1jb3VudCk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogLjc1ZW07XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC44NSk7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnN1Yi1tZW51IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogOTk5O1xyXG5cclxuICAubmF2YmFyLW5hdiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIC8vbWFyZ2luLWxlZnQ6IDExM3B4OyAgLy8gdW5jb21tZW50IGlmIHlvdSByZW1vdmUgLmNvbnRhaW5lciBjbGFzcyBmcm9tIC5uYXZiYXItbmF2IGVsZW1lbnRcclxuXHJcbiAgICBhLm5hdi1pdGVtIHtcclxuICAgICAgLy9ib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgcGFkZGluZzogOHB4IDMwcHggNnB4O1xyXG5cclxuICAgICAgc3BhbltjbGFzcyo9XCJmYS1cIl0ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2LXN1Ym1lbnUtaXRlbS1ob3Zlci1iZy1jb2xvcjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdi1zdWJtZW51LWl0ZW0tYWN0aXZlLWJnLWNvbG9yO1xyXG4gICAgICAgIC8vYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAkbmF2LXN1Ym1lbnUtaXRlbS1hY3RpdmUtYm9yZGVyLWJvdHRvbTtcclxuICAgICAgICBjb2xvcjogJG5hdi1zdWJtZW51LWl0ZW0tYWN0aXZlLWZvbnQtY29sb3I7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uY2xlYXIge1xyXG4gIGhlaWdodDogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW4tdG9wOiAzNnB4O1xyXG59XHJcbiIsIiR0aGVtZTogbGlnaHQ7IC8vIGRhcmsgb3IgbGlnaHRcclxuXHJcbi8vIE5hdiB2YXJzXHJcbiRoZWFkZXItYmdjb2xvcjogIzEwMmE0MztcclxuJG5hdi1ib3JkZXItdG9wOiBub25lO1xyXG4kbmF2LWxpbmstY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC40NSk7XHJcbiRuYXYtbGluay1jb2xvci1ob3ZlcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG4kbmF2YmFyLWJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsMC42KTtcclxuJG5hYnZhci1zdWJtZW51LXRvcC1ib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcblxyXG4vLyBuYXYtaXRlbSB2YXJzXHJcbiRuYXYtaXRlbS1mb250LXdlaWdodDogNTAwO1xyXG4kbmF2LWl0ZW0tYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4kbmF2LWl0ZW0taG92ZXItYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTsgIC8vIG9sZCBob3ZlciBjb2xvciBoc2xhKDIxLCA5MiUsIDUxJSwgMC41KSA9PiAjZjE1YjI4XHJcbiRuYXYtaXRlbS1ob3Zlci1mb250LWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNyk7XHJcbiRuYXYtaXRlbS1hY3RpdmUtYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7IC8vIzYyQjBFODsgLy8gT2xkIGNvbG9yICNmMTViMjggKHJlZC1pc2gpOyBOb3Qgc3VyZSBpZiBJIGxpa2UgdGhpcyBiZXR0ZXIgb3IgdGhlIHdoaXRlIG9wdGlvbiAobmV4dCBsaW5lKVxyXG4kbmF2LWl0ZW0tYWN0aXZlLWZvbnQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcclxuJG5hdi1pdGVtLWFjdGl2ZS1mb250LXdlaWdodDogNjAwO1xyXG4kbmF2LXN1Ym1lbnUtaXRlbS1ob3Zlci1iZy1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcclxuJG5hdi1zdWJtZW51LWl0ZW0tYWN0aXZlLWJnLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xyXG4kbmF2LXN1Ym1lbnUtaXRlbS1hY3RpdmUtZm9udC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xyXG4kbmF2LXN1Ym1lbnUtaXRlbS1hY3RpdmUtYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7IC8vIzYyQjBFODtcclxuICBcclxuLy8gbmF2IHVzZXIgKHJpZ2h0IHNpZGUpIHZhcnNcclxuJG5hdi11c2VyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiRuYXYtdXNlci1pY29uLWZvbnQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxuJG5hdi11c2VyLWZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRuYXYtdXNlci1sb2dpbi1mb250LWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNyk7XHJcbiRuYXYtdXNlci1sb2dvdXQtZm9udC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcpO1xyXG5cclxuLy8gbmF2IHVzZXIgKHJpZ2h0IHNpZGUpIGdyYXZhdGFyIHZhcnNcclxuJG5hdi11c2VyLWdyYXZhdGFyLWJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxuJG5hdi11c2VyLWdyYXZhdGFyLWJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xyXG5cclxuLy8gbmF2IHVzZXIgKHJpZ2h0IHNpZGUpIGFsdC1pY29uXHJcbiRuYXYtdXNlci1hbHQtaWNvbi1iZy1jb2xvcjogcmdiYSgxNjUsIDE2NSwgMTY1LCAxKTtcclxuJG5hdi11c2VyLWFsdC1pY29uLWJvcmRlcjogMnB4IHNvbGlkICMwYzFkMDc7XHJcbiRuYXYtdXNlci1hbHQtaWNvbi1ib3gtc2hhZG93OiAwIDAgNHB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4kbmF2LXVzZXItYWx0LWljb24tZm9udC1jb2xvcjogIzBjMWQwNztcclxuJG5hdi11c2VyLWFsdC1pY29uLW1hcmdpbjogMnB4IDAgMCAwO1xyXG5cclxuXHJcbkBpZiAkdGhlbWUgPT0gbGlnaHQge1xyXG4gIC8vIE5hdiB2YXJzXHJcbiAgJGhlYWRlci1iZ2NvbG9yOiAjZmZmO1xyXG4gICRuYXYtYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwNzdGQUY7XHJcbiAgLy8kbmF2LWJvcmRlci10b3A6IDNweCBzb2xpZCAjZDY0NTQ1O1xyXG4gICRuYXYtbGluay1jb2xvcjogaHNsYSgyMTAsIDI1JSwgNTklLCAxKTsgLy8gb2xkIGNvbG9yICM2MzZmN2I7XHJcbiAgJG5hdi1saW5rLWNvbG9yLWhvdmVyOiAjMjEyNTI5O1xyXG4gICRuYXZiYXItYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICRuYWJ2YXItc3VibWVudS10b3AtYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuICAvLyBuYXYtaXRlbSB2YXJzXHJcbiAgJG5hdi1pdGVtLWZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgJG5hdi1pdGVtLWJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAkbmF2LWl0ZW0taG92ZXItYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoNzgsIDE2MSwgMTk4LCAwLjQpO1xyXG4gICRuYXYtaXRlbS1ob3Zlci1mb250LWNvbG9yOiBoc2xhKDIxMCwgMTklLCA1MyUsIDEpOyAgLy8gb2xkIGNvbG9yICMwYzZiNTg7XHJcbiAgJG5hdi1pdGVtLWFjdGl2ZS1ib3JkZXItYm90dG9tOiAycHggc29saWQgI2U2NmE2YTtcclxuICAkbmF2LWl0ZW0tYWN0aXZlLWZvbnQtY29sb3I6ICMwQzYyODg7XHJcbiAgJG5hdi1pdGVtLWFjdGl2ZS1mb250LXdlaWdodDogNjAwO1xyXG4gICRuYXYtc3VibWVudS1pdGVtLWhvdmVyLWJnLWNvbG9yOiByZ2JhKDE1LCA5NiwgMTUzLCAwLjA1KTtcclxuICAkbmF2LXN1Ym1lbnUtaXRlbS1hY3RpdmUtYmctY29sb3I6IHJnYmEoMTUsIDk2LCAxNTMsIDAuMDUpO1xyXG4gICRuYXYtc3VibWVudS1pdGVtLWFjdGl2ZS1mb250LWNvbG9yOiAjYTYxYjFiO1xyXG4gICRuYXYtc3VibWVudS1pdGVtLWFjdGl2ZS1ib3JkZXItYm90dG9tOiAycHggc29saWQgIzA3N0ZBRjtcclxuXHJcbiAgLy8gbmF2IHVzZXIgKHJpZ2h0IHNpZGUpIHZhcnNcclxuICAvLyRuYXYtdXNlci1jb2xvcjogIzI2ODBjMjtcclxuICAkbmF2LXVzZXItY29sb3I6ICMwQzYyODg7XHJcbiAgJG5hdi11c2VyLWljb24tZm9udC1jb2xvcjogIzI2ODBjMjtcclxuICAkbmF2LXVzZXItZm9udC13ZWlnaHQ6IDUwMDtcclxuICAkbmF2LXVzZXItbG9naW4tZm9udC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcpO1xyXG4gICRuYXYtdXNlci1sb2dvdXQtZm9udC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xyXG5cclxuICAvLyBuYXYgdXNlciAocmlnaHQgc2lkZSkgZ3JhdmF0YXIgdmFyc1xyXG4gICRuYXYtdXNlci1ncmF2YXRhci1ib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgJG5hdi11c2VyLWdyYXZhdGFyLWJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLDAsMCwwLjcpO1xyXG5cclxuICAvLyBuYXYgdXNlciAocmlnaHQgc2lkZSkgYWx0LWljb25cclxuICAkbmF2LXVzZXItYWx0LWljb24tYmctY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcclxuICAkbmF2LXVzZXItYWx0LWljb24tYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAkbmF2LXVzZXItYWx0LWljb24tYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsMCwwLDAuOSk7XHJcbiAgJG5hdi11c2VyLWFsdC1pY29uLWZvbnQtY29sb3I6IHJnYmEoMzMsIDM3LCA0MSwxKTtcclxuXHJcbn1cclxuIiwiaGVhZGVyLFxuLnN1Yi1tZW51IHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTYsIDQyLCA2NywgMC4yKTtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMTZweDsgfVxuICBoZWFkZXIgLm5hdmJhcixcbiAgLnN1Yi1tZW51IC5uYXZiYXIge1xuICAgIHBhZGRpbmc6IDA7IH1cbiAgaGVhZGVyIC5uYXZiYXItYnJhbmQsXG4gIC5zdWItbWVudSAubmF2YmFyLWJyYW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2LCA0MiwgNjcsIDAuOCk7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDhweCAxOHB4IDhweCAxNHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE2LCA0MiwgNjcsIDAuNCk7XG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDsgfVxuICBoZWFkZXIgYSxcbiAgLnN1Yi1tZW51IGEge1xuICAgIGNvbG9yOiAjN2M5NmIxO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAgIGhlYWRlciBhOmhvdmVyLFxuICAgIC5zdWItbWVudSBhOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICBoZWFkZXIgLm5hdmJhci1uYXYsXG4gIC5zdWItbWVudSAubmF2YmFyLW5hdiB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IG5vcm1hbDtcbiAgICBwYWRkaW5nLXRvcDogM3B4OyB9XG4gICAgaGVhZGVyIC5uYXZiYXItbmF2IGEubmF2LWl0ZW0sXG4gICAgLnN1Yi1tZW51IC5uYXZiYXItbmF2IGEubmF2LWl0ZW0ge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDExcHggMzBweCAxMXB4OyB9XG4gICAgICBoZWFkZXIgLm5hdmJhci1uYXYgYS5uYXYtaXRlbTpob3ZlcixcbiAgICAgIC5zdWItbWVudSAubmF2YmFyLW5hdiBhLm5hdi1pdGVtOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoNzgsIDE2MSwgMTk4LCAwLjQpO1xuICAgICAgICBjb2xvcjogIzcwODc5ZTsgfVxuICAgICAgaGVhZGVyIC5uYXZiYXItbmF2IGEubmF2LWl0ZW0uYWN0aXZlLFxuICAgICAgLnN1Yi1tZW51IC5uYXZiYXItbmF2IGEubmF2LWl0ZW0uYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlNjZhNmE7XG4gICAgICAgIGNvbG9yOiAjMEM2Mjg4O1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cbiAgaGVhZGVyIC5uYXYtcmlnaHQsXG4gIC5zdWItbWVudSAubmF2LXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDMwcHg7XG4gICAgdG9wOiAxM3B4OyB9XG4gICAgaGVhZGVyIC5uYXYtcmlnaHQgLmFjdGlvbi1pdGVtLFxuICAgIC5zdWItbWVudSAubmF2LXJpZ2h0IC5hY3Rpb24taXRlbSB7XG4gICAgICBjb2xvcjogIzI2ODBjMjtcbiAgICAgIG1hcmdpbjogMCAxM3B4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICBoZWFkZXIgLm5hdi1yaWdodCAuYWN0aW9uLWl0ZW0gLmJhZGdlLFxuICAgICAgLnN1Yi1tZW51IC5uYXYtcmlnaHQgLmFjdGlvbi1pdGVtIC5iYWRnZSB7XG4gICAgICAgIHRvcDogLTRweDtcbiAgICAgICAgbGVmdDogOHB4O1xuICAgICAgICAvKiBoZWlnaHQ6IDE4cHg7IFxyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4OyovXG4gICAgICAgIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5OCwgMTc2LCAyMzIsIDAuMyk7Ki9cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QwZTdmODtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzYyYjBlODtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgY29sb3I6ICNlNjZhNmE7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbWluLXdpZHRoOiAxNHB4O1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMXB4IDRweDsgfVxuICAgICAgaGVhZGVyIC5uYXYtcmlnaHQgLmFjdGlvbi1pdGVtOmhvdmVyLFxuICAgICAgLnN1Yi1tZW51IC5uYXYtcmlnaHQgLmFjdGlvbi1pdGVtOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICM2MkIwRTg7IH1cbiAgICAgIGhlYWRlciAubmF2LXJpZ2h0IC5hY3Rpb24taXRlbS5zaWduLW91dDpob3ZlcixcbiAgICAgIC5zdWItbWVudSAubmF2LXJpZ2h0IC5hY3Rpb24taXRlbS5zaWduLW91dDpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZTY2YTZhOyB9XG4gICAgICBoZWFkZXIgLm5hdi1yaWdodCAuYWN0aW9uLWl0ZW0gLmhhcy1iYWRnZSxcbiAgICAgIC5zdWItbWVudSAubmF2LXJpZ2h0IC5hY3Rpb24taXRlbSAuaGFzLWJhZGdlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAgIGhlYWRlciAubmF2LXJpZ2h0IC5hY3Rpb24taXRlbSAuaGFzLWJhZGdlW2RhdGEtY291bnRdOmFmdGVyLFxuICAgICAgICAuc3ViLW1lbnUgLm5hdi1yaWdodCAuYWN0aW9uLWl0ZW0gLmhhcy1iYWRnZVtkYXRhLWNvdW50XTphZnRlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiAtNXB4O1xuICAgICAgICAgIHRvcDogLTM3JTtcbiAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtY291bnQpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAuNzVlbTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuODUpO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtaW4td2lkdGg6IDJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7IH1cblxuLnN1Yi1tZW51IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk5OyB9XG4gIC5zdWItbWVudSAubmF2YmFyLW5hdiB7XG4gICAgcGFkZGluZy10b3A6IDA7IH1cbiAgICAuc3ViLW1lbnUgLm5hdmJhci1uYXYgYS5uYXYtaXRlbSB7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgcGFkZGluZzogOHB4IDMwcHggNnB4OyB9XG4gICAgICAuc3ViLW1lbnUgLm5hdmJhci1uYXYgYS5uYXYtaXRlbSBzcGFuW2NsYXNzKj1cImZhLVwiXSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XG4gICAgICAuc3ViLW1lbnUgLm5hdmJhci1uYXYgYS5uYXYtaXRlbTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUsIDk2LCAxNTMsIDAuMDUpO1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lOyB9XG4gICAgICAuc3ViLW1lbnUgLm5hdmJhci1uYXYgYS5uYXYtaXRlbS5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1LCA5NiwgMTUzLCAwLjA1KTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNzdGQUY7XG4gICAgICAgIGNvbG9yOiAjYTYxYjFiO1xuICAgICAgICBmb250LXdlaWdodDogNjAwOyB9XG5cbi5jbGVhciB7XG4gIGhlaWdodDogMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiAzNnB4OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/ui/header/header.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/header/header.component.ts ***!
  \***********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_sidebar_logo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/sidebar-logo.service */ "./src/app/core/services/sidebar-logo.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services_header_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/header-nav.service */ "./src/app/core/services/header-nav.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


//import { HeaderServiceService } from './core/services/header-service.service';
//import { SidebarLogoService } from '../../../core/services/sidebar-logo.service';




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sidebarLogoService, headerNavService, router, activatedRoute) {
        this.sidebarLogoService = sidebarLogoService;
        this.headerNavService = headerNavService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        //logoSrc = '/assets/images/dm-icon.svg';
        this.logoSrc = '/assets/images/web-logo-white.png';
        this.logoSrcExpanded = '/assets/images/web-logo-white.png';
        this.logoSrcCollapsed = '/assets/images/dm-icon-white.png';
        this.logoSize = '30';
        this.navVisible = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navBgColor = getComputedStyle(document.querySelector('nav.navbar')).backgroundColor;
        if (navBgColor === 'rgb(16, 42, 67)') { // if theme is dark (rgb(16, 42, 67) is the dark bg color on the navbar)
            this.logoSrc = '/assets/images/dm-icon-white.png';
        }
        this.sidebarLogoService.isSbExpanded.subscribe(function (val) {
            _this.logoSrc = val == true ? _this.logoSrcExpanded : _this.logoSrcCollapsed;
        });
        this.headerNavService.isNavVisible.subscribe(function (val) {
            _this.navVisible = val;
        });
        this.sidebarLogoService.sidebarWidth
            .subscribe(function (val) {
            //console.log(val);
            document.querySelector('.logo').style.width = val + 'px';
            //(document.querySelector('.logo') as HTMLElement).style.minWidth = val + 'px';
        });
        // This is used to get the parent route to determine whether or not the top nav header menu should be shown
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]; }))
            .subscribe(function (value) {
            //https://stackoverflow.com/questions/48058681/how-to-get-active-child-route-in-parent-component-angular-2
            //console.log(value['url']);
            //console.log(this.activatedRoute.firstChild.routeConfig.path);
            _this.headerNavService.setShowNav(_this.activatedRoute.firstChild.routeConfig.path);
        });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/ui/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/ui/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_sidebar_logo_service__WEBPACK_IMPORTED_MODULE_2__["SidebarLogoService"],
            _core_services_header_nav_service__WEBPACK_IMPORTED_MODULE_4__["HeaderNavService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/ui/sidebar/sidebar.component.html":
/*!***************************************************!*\
  !*** ./src/app/ui/sidebar/sidebar.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"side-navbar {{sidebarExpanded ? 'expanded' : ''}}\" #sideNavBar>\r\n\r\n  <div class=\"user-info\">\r\n    <div class=\"user-icon\">\r\n      <img src=\"{{userInfo.iconPath}}\" *ngIf=\"hasUserIcon\" />\r\n      <span class=\"fal fa-user-circle {{sidebarExpanded ? 'fa-3x' : 'fa-2x' }} icon\" *ngIf=\"hasUserIcon == false\"></span>\r\n    </div>\r\n    <div class=\"name\">{{userInfo.firstName}} {{userInfo.lastName}}</div>\r\n    <!--<span class=\"company\">{{userInfo.companyName}}</span>-->\r\n    <span class=\"title\">{{userInfo.title}}</span>\r\n  </div>\r\n  \r\n  <a class=\"sb-item\" routerLink=\"/Home\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n    <span class=\"far fa-home fa-lg sb-icon\"></span>\r\n    <label class=\"label\" *ngIf=\"sidebarExpanded\">Dashboard</label>\r\n  </a>\r\n\r\n  <a class=\"sb-item\" routerLink=\"/Help\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n    <span class=\"fal fa-question fa-lg sb-icon\"></span>\r\n    <label class=\"label\" *ngIf=\"sidebarExpanded\">Help</label>\r\n  </a>\r\n\r\n  <a class=\"sb-item\" routerLink=\"/Info\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n    <span class=\"fal fa-info fa-lg sb-icon\"></span>\r\n    <label class=\"label\" *ngIf=\"sidebarExpanded\">About</label>\r\n  </a>\r\n\r\n  <a class=\"sb-item\" routerLink=\"/Tutorial\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n    <span class=\"fal fa-life-ring fa-lg sb-icon\"></span>\r\n    <label class=\"label\" *ngIf=\"sidebarExpanded\">Tutorials</label>\r\n  </a>\r\n\r\n  <a class=\"sb-item\" routerLink=\"/Settings\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n    <span class=\"fal fa-cog fa-lg sb-icon\"></span>\r\n    <label class=\"label\" *ngIf=\"sidebarExpanded\">Settings</label>\r\n  </a>\r\n\r\n\r\n\r\n  <div class=\"toggle-sidebar\" (click)=\"toggleMenu()\">\r\n    <span class=\"fas {{sidebarExpanded ? 'fa-chevron-circle-left' : 'fa-chevron-circle-right' }} fa-lg\" title=\"{{sidebarExpanded ? 'Collapse sidebar' : 'Expand sidebar'}}\"></span>\r\n  </div>\r\n\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/ui/sidebar/sidebar.component.scss":
/*!***************************************************!*\
  !*** ./src/app/ui/sidebar/sidebar.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  width: inherit; }\n  nav .user-info {\n    margin: 20px auto 10px; }\n  nav .user-info .user-icon {\n      display: block; }\n  nav .user-info .user-icon img {\n        background-color: rgba(255, 255, 255, 0.5);\n        border: 1px solid rgba(255, 255, 255, 0);\n        border-radius: 55px;\n        display: block;\n        height: 40px;\n        margin: 0 auto;\n        width: 40px; }\n  nav .user-info .user-icon .icon {\n        color: rgba(255, 255, 255, 0.5);\n        cursor: pointer;\n        display: block;\n        text-align: center; }\n  nav .user-info .user-icon .icon:hover {\n          -webkit-transform: rotate(8deg);\n                  transform: rotate(8deg);\n          transition: all .2s ease;\n          /*color: #30a8d8;*/ }\n  nav .user-info .name,\n    nav .user-info .title,\n    nav .user-info .company {\n      display: none; }\n  nav.expanded .user-info .user-icon img {\n    border: 2px solid rgba(255, 255, 255, 0);\n    height: 110px;\n    width: 110px; }\n  nav.expanded .user-info .name {\n    color: rgba(255, 255, 255, 0.5);\n    display: block;\n    font-size: 16px;\n    letter-spacing: 0.5px;\n    text-align: center;\n    text-transform: uppercase; }\n  nav.expanded .user-info .title {\n    color: rgba(255, 255, 255, 0.4);\n    display: block;\n    font-size: 13px;\n    font-style: italic;\n    margin-top: -5px;\n    text-align: center; }\n  nav.expanded .user-info .company {\n    color: rgba(255, 255, 255, 0.4);\n    display: block;\n    font-size: 13px;\n    font-style: italic;\n    margin-top: -4px;\n    text-align: center; }\n  nav .sb-item {\n    border-left: 4px solid transparent;\n    color: rgba(255, 255, 255, 0.53);\n    cursor: pointer;\n    display: block;\n    margin: 0;\n    padding: 15px 10px 14px 0;\n    white-space: nowrap; }\n  nav .sb-item .sb-icon {\n      padding-left: 4px;\n      text-align: center;\n      width: 48px; }\n  nav .sb-item label {\n      margin-bottom: 0;\n      padding-right: 25px;\n      text-transform: uppercase; }\n  nav .sb-item.expand-contract {\n      position: absolute;\n      right: 25px;\n      top: calc(100vh - 50%); }\n  nav .sb-item.active, nav .sb-item:hover {\n      background-color: rgba(255, 255, 255, 0.06);\n      border-left: 4px solid #30a8d8;\n      text-decoration: none;\n      color: #30a8d8; }\n  nav .sb-item.active .sb-icon, nav .sb-item:hover .sb-icon {\n        color: #30a8d8; }\n  nav .sb-item.active label, nav .sb-item:hover label {\n        color: rgba(255, 255, 255, 0.9);\n        cursor: pointer; }\n  nav .sb-item.active .sb-icon {\n      cursor: default; }\n  nav .sb-item.active .sb-icon label {\n        cursor: default; }\n  .toggle-sidebar {\n  color: rgba(255, 255, 255, 0.75);\n  cursor: pointer;\n  position: absolute;\n  right: 20px;\n  top: 70vh; }\n  /*.sidebar {\r\n  //background-color: #102a43;\r\n  background-color: rgba(16, 42, 67, 0.85);\r\n  position: relative;\r\n  //height: 100%;\r\n  height: calc(100% - (30px + 20px + 29px));\r\n  left: 0;\r\n  top: 49px;\r\n  width: 64px;\r\n\r\n\r\n  .sb-item {\r\n    $border-left-size: 4px;\r\n\r\n    border-left: $border-left-size solid transparent;\r\n    color: rgba(255, 255, 255, 0.85);\r\n    display: block;\r\n    margin: 0;\r\n    padding: 10px 6px 10px 0;\r\n    text-align: center;\r\n\r\n    .sb-icon {\r\n      //font-size: 27px;\r\n    }\r\n\r\n    &.expand-contract {\r\n      position: absolute;\r\n      right: 25px;\r\n      top: calc(100vh - 50%);\r\n    }\r\n\r\n    &.active {\r\n      background-color: rgba(255,255,255,0.06);\r\n      border-left: $border-left-size solid #30a8d8;\r\n      color: #30a8d8;\r\n    }\r\n\r\n    &:first-child {\r\n      //margin-top: 20px;\r\n    }\r\n  }\r\n}*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvc2lkZWJhci9DOlxcVXNlcnNcXHJsaWZmZXJ0aFxcc291cmNlXFxyZXBvc1xcVGVzdFxcRE0uTmcuV2ViXFxkbS10ZXN0Mi9zcmNcXGFwcFxcdWlcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVFLGNBQWMsRUFBQTtFQUZoQjtJQUtJLHNCQUFzQixFQUFBO0VBTDFCO01BUU0sY0FBYyxFQUFBO0VBUnBCO1FBV1EsMENBQXVDO1FBQ3ZDLHdDQUFxQztRQUNyQyxtQkFBbUI7UUFDbkIsY0FBYztRQUNkLFlBQVk7UUFDWixjQUFjO1FBQ2QsV0FBVyxFQUFBO0VBakJuQjtRQXFCUSwrQkFBNEI7UUFDNUIsZUFBZTtRQUNmLGNBQWM7UUFDZCxrQkFBa0IsRUFBQTtFQXhCMUI7VUEyQlUsK0JBQXVCO2tCQUF2Qix1QkFBdUI7VUFDdkIsd0JBQXdCO1VBQ3hCLGtCQUFBLEVBQW1CO0VBN0I3Qjs7O01Bc0NNLGFBQWEsRUFBQTtFQXRDbkI7SUErQ1Usd0NBQXFDO0lBQ3JDLGFBQWE7SUFDYixZQUFZLEVBQUE7RUFqRHRCO0lBc0RRLCtCQUErQjtJQUMvQixjQUFjO0lBQ2QsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIseUJBQXlCLEVBQUE7RUEzRGpDO0lBK0RRLCtCQUE0QjtJQUM1QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7RUFwRTFCO0lBd0VRLCtCQUE0QjtJQUM1QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7RUE3RTFCO0lBcUZJLGtDQUFnRDtJQUNoRCxnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLGNBQWM7SUFDZCxTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLG1CQUFtQixFQUFBO0VBM0Z2QjtNQStGTSxpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLFdBQVcsRUFBQTtFQWpHakI7TUFxR00sZ0JBQWdCO01BQ2hCLG1CQUFtQjtNQUNuQix5QkFBeUIsRUFBQTtFQXZHL0I7TUE2R00sa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxzQkFBc0IsRUFBQTtFQS9HNUI7TUFtSE0sMkNBQXdDO01BQ3hDLDhCQUE0QztNQUM1QyxxQkFBcUI7TUFDckIsY0FBYyxFQUFBO0VBdEhwQjtRQXlIUSxjQUFjLEVBQUE7RUF6SHRCO1FBNkhRLCtCQUErQjtRQUMvQixlQUFlLEVBQUE7RUE5SHZCO01Bb0lRLGVBQWUsRUFBQTtFQXBJdkI7UUF1SVUsZUFBZSxFQUFBO0VBT3pCO0VBQ0UsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUVYLFNBQVMsRUFBQTtFQUdYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQ2xCRSIsImZpbGUiOiJzcmMvYXBwL3VpL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG5uYXYge1xyXG4gIC8vcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG5cclxuICAudXNlci1pbmZvIHtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDEwcHg7XHJcblxyXG4gICAgLnVzZXItaWNvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1NXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmljb24geyAvLyBUaGlzIGlzIHRoZSBmb250LWF3ZXNvbWUgdXNlciBpY29uXHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDhkZWcpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG4gICAgICAgICAgLypjb2xvcjogIzMwYThkODsqL1xyXG4gICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNywyMjAsNjYsMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubmFtZSxcclxuICAgIC50aXRsZSxcclxuICAgIC5jb21wYW55IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZXhwYW5kZWQge1xyXG4gICAgLnVzZXItaW5mbyB7XHJcblxyXG4gICAgICAudXNlci1pY29uIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwKTtcclxuICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAubmFtZSB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbXBhbnkge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNiLWl0ZW0ge1xyXG4gICAgJGJvcmRlci1sZWZ0LXNpemU6IDRweDtcclxuXHJcbiAgICBib3JkZXItbGVmdDogJGJvcmRlci1sZWZ0LXNpemUgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUzKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4IDE0cHggMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gICAgLnNiLWljb24ge1xyXG4gICAgICAvL3BhZGRpbmc6IDAgOXB4IDAgMTVweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAvL2Rpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICYuZXhwYW5kLWNvbnRyYWN0IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMjVweDtcclxuICAgICAgdG9wOiBjYWxjKDEwMHZoIC0gNTAlKTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFjdGl2ZSwgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAkYm9yZGVyLWxlZnQtc2l6ZSBzb2xpZCAjMzBhOGQ4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjMzBhOGQ4O1xyXG5cclxuICAgICAgLnNiLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjMzBhOGQ4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsYWJlbCB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIC5zYi1pY29uIHtcclxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50b2dnbGUtc2lkZWJhciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMjBweDtcclxuICAvL2JvdHRvbTogMzB2aDtcclxuICB0b3A6IDcwdmg7XHJcbn1cclxuXHJcbi8qLnNpZGViYXIge1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogIzEwMmE0MztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2LCA0MiwgNjcsIDAuODUpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvL2hlaWdodDogMTAwJTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtICgjeyRmb290ZXItaGVpZ2h0fSArICN7JGZvb3Rlci1tYXJnaW59ICsgMjlweCkpO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiA0OXB4O1xyXG4gIHdpZHRoOiA2NHB4O1xyXG5cclxuXHJcbiAgLnNiLWl0ZW0ge1xyXG4gICAgJGJvcmRlci1sZWZ0LXNpemU6IDRweDtcclxuXHJcbiAgICBib3JkZXItbGVmdDogJGJvcmRlci1sZWZ0LXNpemUgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTBweCA2cHggMTBweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC5zYi1pY29uIHtcclxuICAgICAgLy9mb250LXNpemU6IDI3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5leHBhbmQtY29udHJhY3Qge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgICB0b3A6IGNhbGMoMTAwdmggLSA1MCUpO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTtcclxuICAgICAgYm9yZGVyLWxlZnQ6ICRib3JkZXItbGVmdC1zaXplIHNvbGlkICMzMGE4ZDg7XHJcbiAgICAgIGNvbG9yOiAjMzBhOGQ4O1xyXG4gICAgfVxyXG5cclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAvL21hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59Ki9cclxuIiwibmF2IHtcbiAgd2lkdGg6IGluaGVyaXQ7IH1cbiAgbmF2IC51c2VyLWluZm8ge1xuICAgIG1hcmdpbjogMjBweCBhdXRvIDEwcHg7IH1cbiAgICBuYXYgLnVzZXItaW5mbyAudXNlci1pY29uIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgICBuYXYgLnVzZXItaW5mbyAudXNlci1pY29uIGltZyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHdpZHRoOiA0MHB4OyB9XG4gICAgICBuYXYgLnVzZXItaW5mbyAudXNlci1pY29uIC5pY29uIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICAgIG5hdiAudXNlci1pbmZvIC51c2VyLWljb24gLmljb246aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDhkZWcpO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbiAgICAgICAgICAvKmNvbG9yOiAjMzBhOGQ4OyovIH1cbiAgICBuYXYgLnVzZXItaW5mbyAubmFtZSxcbiAgICBuYXYgLnVzZXItaW5mbyAudGl0bGUsXG4gICAgbmF2IC51c2VyLWluZm8gLmNvbXBhbnkge1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuICBuYXYuZXhwYW5kZWQgLnVzZXItaW5mbyAudXNlci1pY29uIGltZyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICAgIHdpZHRoOiAxMTBweDsgfVxuICBuYXYuZXhwYW5kZWQgLnVzZXItaW5mbyAubmFtZSB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4gIG5hdi5leHBhbmRlZCAudXNlci1pbmZvIC50aXRsZSB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIG5hdi5leHBhbmRlZCAudXNlci1pbmZvIC5jb21wYW55IHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbWFyZ2luLXRvcDogLTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgbmF2IC5zYi1pdGVtIHtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTMpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTVweCAxMHB4IDE0cHggMDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgbmF2IC5zYi1pdGVtIC5zYi1pY29uIHtcbiAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDQ4cHg7IH1cbiAgICBuYXYgLnNiLWl0ZW0gbGFiZWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4gICAgbmF2IC5zYi1pdGVtLmV4cGFuZC1jb250cmFjdCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMjVweDtcbiAgICAgIHRvcDogY2FsYygxMDB2aCAtIDUwJSk7IH1cbiAgICBuYXYgLnNiLWl0ZW0uYWN0aXZlLCBuYXYgLnNiLWl0ZW06aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcbiAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzMwYThkODtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiAjMzBhOGQ4OyB9XG4gICAgICBuYXYgLnNiLWl0ZW0uYWN0aXZlIC5zYi1pY29uLCBuYXYgLnNiLWl0ZW06aG92ZXIgLnNiLWljb24ge1xuICAgICAgICBjb2xvcjogIzMwYThkODsgfVxuICAgICAgbmF2IC5zYi1pdGVtLmFjdGl2ZSBsYWJlbCwgbmF2IC5zYi1pdGVtOmhvdmVyIGxhYmVsIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgbmF2IC5zYi1pdGVtLmFjdGl2ZSAuc2ItaWNvbiB7XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cbiAgICAgIG5hdiAuc2ItaXRlbS5hY3RpdmUgLnNiLWljb24gbGFiZWwge1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cblxuLnRvZ2dsZS1zaWRlYmFyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiA3MHZoOyB9XG5cbi8qLnNpZGViYXIge1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogIzEwMmE0MztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2LCA0MiwgNjcsIDAuODUpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvL2hlaWdodDogMTAwJTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtICgzMHB4ICsgMjBweCArIDI5cHgpKTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogNDlweDtcclxuICB3aWR0aDogNjRweDtcclxuXHJcblxyXG4gIC5zYi1pdGVtIHtcclxuICAgICRib3JkZXItbGVmdC1zaXplOiA0cHg7XHJcblxyXG4gICAgYm9yZGVyLWxlZnQ6ICRib3JkZXItbGVmdC1zaXplIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDEwcHggNnB4IDEwcHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAuc2ItaWNvbiB7XHJcbiAgICAgIC8vZm9udC1zaXplOiAyN3B4O1xyXG4gICAgfVxyXG5cclxuICAgICYuZXhwYW5kLWNvbnRyYWN0IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMjVweDtcclxuICAgICAgdG9wOiBjYWxjKDEwMHZoIC0gNTAlKTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAkYm9yZGVyLWxlZnQtc2l6ZSBzb2xpZCAjMzBhOGQ4O1xyXG4gICAgICBjb2xvcjogIzMwYThkODtcclxuICAgIH1cclxuXHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgLy9tYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufSovXG4iXX0= */"

/***/ }),

/***/ "./src/app/ui/sidebar/sidebar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/ui/sidebar/sidebar.component.ts ***!
  \*************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_services_sidebar_logo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/sidebar-logo.service */ "./src/app/core/services/sidebar-logo.service.ts");
/* harmony import */ var _core_services_user_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/user-info.service */ "./src/app/core/services/user-info.service.ts");





var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(sidebarLogoService, userInfoService) {
        this.sidebarLogoService = sidebarLogoService;
        this.userInfoService = userInfoService;
        this.sidebarExpanded = true;
        this.oldNavbarWidth = 0;
        this.hasUserIcon = false;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.getUserInfo();
    };
    SidebarComponent.prototype.ngAfterViewChecked = function () {
        //this.sidebarLogoService.setSidebarWidth(this.sideNavbar);
    };
    SidebarComponent.prototype.ngDoCheck = function () {
        if (this.oldNavbarWidth !== this.sideNavbar.nativeElement.offsetWidth) {
            this.sidebarLogoService.setSidebarWidth(this.sideNavbar.nativeElement.offsetWidth);
            this.oldNavbarWidth = this.sideNavbar.nativeElement.offsetWidth;
        }
    };
    SidebarComponent.prototype.toggleMenu = function () {
        this.sidebarExpanded = this.sidebarExpanded == true ? false : true;
        this.sidebarLogoService.setSidebarExpanded(this.sidebarExpanded);
    };
    SidebarComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.userInfoService.getUserInfo().subscribe(function (userInfo) {
            _this.userInfo = userInfo;
            if (userInfo.iconPath !== undefined && userInfo.iconPath.length > 0) {
                _this.hasUserIcon = _this.imageExists(userInfo.iconPath);
                // If the userInfo.iconPath is not empty, but the image doesn't exist (i.e., hasUserIcon === false)
                if (_this.hasUserIcon === false) {
                    _this.checkForGravatar(userInfo.email);
                }
            }
            else {
                _this.checkForGravatar(userInfo.email);
            }
            //this.hasUserIcon = true;
        });
    };
    SidebarComponent.prototype.checkForGravatar = function (email) {
        //email = "ryanlifferth@gmail.com";
        if (email.length > 0) {
            var gravatarUrl = 'http://www.gravatar.com/avatar/' + ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__["Md5"].hashStr(email.toLowerCase().trim()) + '?size=110&d=404';
            if (this.imageExists(gravatarUrl)) {
                this.hasUserIcon = true;
                this.userInfo.iconPath = gravatarUrl;
            }
            ;
        }
    };
    SidebarComponent.prototype.imageExists = function (imageUrl) {
        var http = new XMLHttpRequest();
        http.open('HEAD', imageUrl, false);
        http.send();
        var exists = http.status != 404;
        this.hasUserIcon = exists;
        return exists;
    };
    SidebarComponent.prototype.imageExists2 = function (imageUrl) {
        var pageThis = this;
        return this.imageExistsWithCallback(imageUrl, function (exists) {
            pageThis.hasUserIcon = exists;
            return exists;
        });
    };
    SidebarComponent.prototype.imageExistsWithCallback = function (imageUrl, callback) {
        var img = new Image();
        img.onload = function () { return true; };
        img.onerror = function () { return false; };
        img.src = imageUrl;
        return false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sideNavBar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SidebarComponent.prototype, "sideNavbar", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/ui/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/ui/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_sidebar_logo_service__WEBPACK_IMPORTED_MODULE_3__["SidebarLogoService"], _core_services_user_info_service__WEBPACK_IMPORTED_MODULE_4__["UserInfoService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    newsFeedUrl: 'https://localhost:44326/api/rssfeed'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rlifferth\source\repos\Test\DM.Ng.Web\dm-test2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map