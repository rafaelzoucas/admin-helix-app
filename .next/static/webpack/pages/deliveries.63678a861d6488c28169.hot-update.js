webpackHotUpdate_N_E("pages/deliveries",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Modals/CancelDelivery/styles.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Modals/CancelDelivery/styles.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".styles_modalContainer__1yR5X {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 1000;\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW {\n  width: 80vw;\n  max-width: 300px;\n  background-color: #fff;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW .styles_title__1C2I6 {\n  padding: 2rem;\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW .styles_options__5IpLh {\n  display: flex;\n  flex-direction: row;\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW .styles_options__5IpLh div {\n  width: 100%;\n  padding: 1rem;\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW .styles_actionBtns__2ek8Q {\n  display: flex;\n  flex-direction: column;\n  background: var(--gray-100);\n  border-radius: 0 0 10px 10px;\n  width: 100%;\n  padding: 1.5rem;\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW .styles_actionBtns__2ek8Q button {\n  padding: 1rem;\n  background: none;\n  border-radius: 5px;\n  color: var(--orange-700);\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW .styles_actionBtns__2ek8Q :first-child {\n  margin-bottom: 0.5rem;\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW .styles_actionBtns__2ek8Q :last-child {\n  background: var(--orange-100);\n}", "",{"version":3,"sources":["webpack://styles.module.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,kBAAA;EACA,aAAA;EACA,WAAA;EAEA,MAAA;EACA,OAAA;EAEA,oCAAA;EAEA,aAAA;AAJJ;AAMI;EACI,WAAA;EACA,gBAAA;EAEA,sBAAA;EAEA,mBAAA;EAEA,aAAA;EACA,sBAAA;AAPR;AASQ;EACI,aAAA;AAPZ;AAUQ;EAEI,aAAA;EACA,mBAAA;AATZ;AAWY;EACI,WAAA;EACA,aAAA;AAThB;AAkBQ;EACI,aAAA;EACA,sBAAA;EAEA,2BAAA;EAEA,4BAAA;EAEA,WAAA;EAEA,eAAA;AApBZ;AAsBY;EACI,aAAA;EAEA,gBAAA;EAEA,kBAAA;EAEA,wBAAA;AAvBhB;AA0BY;EACI,qBAAA;AAxBhB;AA2BY;EACI,6BAAA;AAzBhB","sourcesContent":[".modalContainer {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    \r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    position: absolute;\r\n    height: 100vh;\r\n    width: 100%;\r\n\r\n    top: 0;\r\n    left: 0;\r\n\r\n    background-color: rgba($color: #000000, $alpha: 0.40);\r\n\r\n    z-index: 1000;\r\n\r\n    .cancelContainer {\r\n        width: 80vw;\r\n        max-width: 300px;\r\n\r\n        background-color: #fff;\r\n\r\n        border-radius: 10px;\r\n\r\n        display: flex;\r\n        flex-direction: column;\r\n\r\n        .title {\r\n            padding: 2rem;\r\n        }\r\n\r\n        .options {\r\n            // padding: 0 1rem 1rem;\r\n            display: flex;\r\n            flex-direction: row;\r\n\r\n            div {\r\n                width: 100%;\r\n                padding: 1rem;\r\n\r\n            }\r\n\r\n            .selected {\r\n\r\n            }\r\n        }\r\n\r\n        .actionBtns {\r\n            display: flex;\r\n            flex-direction: column;\r\n\r\n            background: var(--gray-100);\r\n\r\n            border-radius: 0 0 10px 10px;\r\n\r\n            width: 100%;\r\n\r\n            padding: 1.5rem;\r\n\r\n            button {\r\n                padding: 1rem;\r\n\r\n                background: none;\r\n\r\n                border-radius: 5px;\r\n\r\n                color: var(--orange-700);\r\n            }\r\n\r\n            :first-child {\r\n                margin-bottom: 0.5rem;\r\n            }\r\n\r\n            :last-child {\r\n                background: var(--orange-100);\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"modalContainer": "styles_modalContainer__1yR5X",
	"cancelContainer": "styles_cancelContainer__3R_KW",
	"title": "styles_title__1C2I6",
	"options": "styles_options__5IpLh",
	"actionBtns": "styles_actionBtns__2ek8Q"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxzL0NhbmNlbERlbGl2ZXJ5L3N0eWxlcy5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDBIQUErRDtBQUN6RztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsa0NBQWtDLGNBQWMsZUFBZSwyQkFBMkIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLGtCQUFrQixnQkFBZ0IsV0FBVyxZQUFZLHlDQUF5QyxrQkFBa0IsR0FBRyxnRUFBZ0UsZ0JBQWdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLGtCQUFrQiwyQkFBMkIsR0FBRyxxRkFBcUYsa0JBQWtCLEdBQUcsdUZBQXVGLGtCQUFrQix3QkFBd0IsR0FBRywyRkFBMkYsZ0JBQWdCLGtCQUFrQixHQUFHLDBGQUEwRixrQkFBa0IsMkJBQTJCLGdDQUFnQyxpQ0FBaUMsZ0JBQWdCLG9CQUFvQixHQUFHLGlHQUFpRyxrQkFBa0IscUJBQXFCLHVCQUF1Qiw2QkFBNkIsR0FBRyx1R0FBdUcsMEJBQTBCLEdBQUcsc0dBQXNHLGtDQUFrQyxHQUFHLE9BQU8sbUZBQW1GLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsNENBQTRDLGtCQUFrQixtQkFBbUIsK0JBQStCLDhCQUE4Qiw0QkFBNEIsZ0NBQWdDLCtCQUErQixzQkFBc0Isb0JBQW9CLG1CQUFtQixnQkFBZ0Isa0VBQWtFLDBCQUEwQiw4QkFBOEIsd0JBQXdCLDZCQUE2Qix1Q0FBdUMsb0NBQW9DLDhCQUE4QixtQ0FBbUMsd0JBQXdCLDhCQUE4QixhQUFhLDBCQUEwQix3Q0FBd0MsOEJBQThCLG9DQUFvQyx5QkFBeUIsZ0NBQWdDLGtDQUFrQyxxQkFBcUIsK0JBQStCLHFCQUFxQixhQUFhLDZCQUE2Qiw4QkFBOEIsdUNBQXVDLGdEQUFnRCxpREFBaUQsZ0NBQWdDLG9DQUFvQyw0QkFBNEIsa0NBQWtDLHlDQUF5QywyQ0FBMkMsaURBQWlELGlCQUFpQixrQ0FBa0MsMENBQTBDLGlCQUFpQixpQ0FBaUMsa0RBQWtELGlCQUFpQixhQUFhLFNBQVMsS0FBSyxtQkFBbUI7QUFDenlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZWxpdmVyaWVzLjYzNjc4YTg2MWQ2NDg4YzI4MTY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3R5bGVzX21vZGFsQ29udGFpbmVyX18xeVI1WCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgei1pbmRleDogMTAwMDtcXG59XFxuLnN0eWxlc19tb2RhbENvbnRhaW5lcl9fMXlSNVggLnN0eWxlc19jYW5jZWxDb250YWluZXJfXzNSX0tXIHtcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5zdHlsZXNfbW9kYWxDb250YWluZXJfXzF5UjVYIC5zdHlsZXNfY2FuY2VsQ29udGFpbmVyX18zUl9LVyAuc3R5bGVzX3RpdGxlX18xQzJJNiB7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG4uc3R5bGVzX21vZGFsQ29udGFpbmVyX18xeVI1WCAuc3R5bGVzX2NhbmNlbENvbnRhaW5lcl9fM1JfS1cgLnN0eWxlc19vcHRpb25zX181SXBMaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLnN0eWxlc19tb2RhbENvbnRhaW5lcl9fMXlSNVggLnN0eWxlc19jYW5jZWxDb250YWluZXJfXzNSX0tXIC5zdHlsZXNfb3B0aW9uc19fNUlwTGggZGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuLnN0eWxlc19tb2RhbENvbnRhaW5lcl9fMXlSNVggLnN0eWxlc19jYW5jZWxDb250YWluZXJfXzNSX0tXIC5zdHlsZXNfYWN0aW9uQnRuc19fMmVrOFEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTEwMCk7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxufVxcbi5zdHlsZXNfbW9kYWxDb250YWluZXJfXzF5UjVYIC5zdHlsZXNfY2FuY2VsQ29udGFpbmVyX18zUl9LVyAuc3R5bGVzX2FjdGlvbkJ0bnNfXzJlazhRIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UtNzAwKTtcXG59XFxuLnN0eWxlc19tb2RhbENvbnRhaW5lcl9fMXlSNVggLnN0eWxlc19jYW5jZWxDb250YWluZXJfXzNSX0tXIC5zdHlsZXNfYWN0aW9uQnRuc19fMmVrOFEgOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuLnN0eWxlc19tb2RhbENvbnRhaW5lcl9fMXlSNVggLnN0eWxlc19jYW5jZWxDb250YWluZXJfXzNSX0tXIC5zdHlsZXNfYWN0aW9uQnRuc19fMmVrOFEgOmxhc3QtY2hpbGQge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlLTEwMCk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBRUEsTUFBQTtFQUNBLE9BQUE7RUFFQSxvQ0FBQTtFQUVBLGFBQUE7QUFKSjtBQU1JO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBRUEsc0JBQUE7RUFFQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtBQVBSO0FBU1E7RUFDSSxhQUFBO0FBUFo7QUFVUTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtBQVRaO0FBV1k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQVRoQjtBQWtCUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUVBLDJCQUFBO0VBRUEsNEJBQUE7RUFFQSxXQUFBO0VBRUEsZUFBQTtBQXBCWjtBQXNCWTtFQUNJLGFBQUE7RUFFQSxnQkFBQTtFQUVBLGtCQUFBO0VBRUEsd0JBQUE7QUF2QmhCO0FBMEJZO0VBQ0kscUJBQUE7QUF4QmhCO0FBMkJZO0VBQ0ksNkJBQUE7QUF6QmhCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tb2RhbENvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuNDApO1xcclxcblxcclxcbiAgICB6LWluZGV4OiAxMDAwO1xcclxcblxcclxcbiAgICAuY2FuY2VsQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiA4MHZ3O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG5cXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAgICAgICAudGl0bGUge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAub3B0aW9ucyB7XFxyXFxuICAgICAgICAgICAgLy8gcGFkZGluZzogMCAxcmVtIDFyZW07XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcclxcbiAgICAgICAgICAgIGRpdiB7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcblxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuc2VsZWN0ZWQge1xcclxcblxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5hY3Rpb25CdG5zIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS0xMDApO1xcclxcblxcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMS41cmVtO1xcclxcblxcclxcbiAgICAgICAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLW9yYW5nZS03MDApO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICA6Zmlyc3QtY2hpbGQge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIDpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlLTEwMCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm1vZGFsQ29udGFpbmVyXCI6IFwic3R5bGVzX21vZGFsQ29udGFpbmVyX18xeVI1WFwiLFxuXHRcImNhbmNlbENvbnRhaW5lclwiOiBcInN0eWxlc19jYW5jZWxDb250YWluZXJfXzNSX0tXXCIsXG5cdFwidGl0bGVcIjogXCJzdHlsZXNfdGl0bGVfXzFDMkk2XCIsXG5cdFwib3B0aW9uc1wiOiBcInN0eWxlc19vcHRpb25zX181SXBMaFwiLFxuXHRcImFjdGlvbkJ0bnNcIjogXCJzdHlsZXNfYWN0aW9uQnRuc19fMmVrOFFcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9