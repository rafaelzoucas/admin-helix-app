webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Modals/NewPayment/styles.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Modals/NewPayment/styles.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".styles_modalContainer__TdsOn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 5000;\n}\n.styles_modalContainer__TdsOn .styles_cancelContainer__1d4ua {\n  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);\n  width: 80vw;\n  max-width: 400px;\n  background-color: #fff;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n}\n.styles_modalContainer__TdsOn .styles_cancelContainer__1d4ua .styles_title__3nxth {\n  padding: 2rem;\n}\n.styles_modalContainer__TdsOn .styles_cancelContainer__1d4ua .styles_form__1vggk {\n  display: flex;\n  flex-direction: column;\n  padding: 0 2rem 2rem;\n}\n.styles_modalContainer__TdsOn .styles_cancelContainer__1d4ua .styles_form__1vggk span {\n  margin-bottom: 0.25rem;\n  margin-top: 0.5rem;\n  grid-gap: 1rem;\n  gap: 1rem;\n}\n.styles_modalContainer__TdsOn .styles_cancelContainer__1d4ua .styles_actionBtns__1Ko9o {\n  display: flex;\n  flex-direction: column;\n  background: var(--background);\n  border-radius: 0 0 10px 10px;\n  width: 100%;\n  padding: 1.5rem;\n}\n.styles_modalContainer__TdsOn .styles_cancelContainer__1d4ua .styles_actionBtns__1Ko9o button {\n  width: 100%;\n  padding: 1rem;\n  background: none;\n  border-radius: 5px;\n  color: var(--orange-700);\n}\n.styles_modalContainer__TdsOn .styles_cancelContainer__1d4ua .styles_actionBtns__1Ko9o :first-child {\n  margin-bottom: 0.5rem;\n}\n.styles_modalContainer__TdsOn .styles_cancelContainer__1d4ua .styles_actionBtns__1Ko9o :last-child {\n  background: var(--orange-100);\n}", "",{"version":3,"sources":["webpack://styles.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,kBAAA;EACA,aAAA;EACA,WAAA;EAEA,MAAA;EACA,OAAA;EAKA,aAAA;AALJ;AAOI;EACI,2CAAA;EACA,WAAA;EACA,gBAAA;EAEA,sBAAA;EAEA,mBAAA;EAEA,aAAA;EACA,sBAAA;AARR;AAUQ;EACI,aAAA;AARZ;AAWQ;EACI,aAAA;EACA,sBAAA;EAEA,oBAAA;AAVZ;AAYY;EACI,sBAAA;EACA,kBAAA;EACA,cAAA;EAAA,SAAA;AAVhB;AAcQ;EACI,aAAA;EACA,sBAAA;EAEA,6BAAA;EAEA,4BAAA;EAEA,WAAA;EAEA,eAAA;AAhBZ;AAkBY;EACI,WAAA;EAEA,aAAA;EAEA,gBAAA;EAEA,kBAAA;EAEA,wBAAA;AApBhB;AAuBY;EACI,qBAAA;AArBhB;AAwBY;EACI,6BAAA;AAtBhB","sourcesContent":[".modalContainer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    position: absolute;\r\n    height: 100vh;\r\n    width: 100%;\r\n\r\n    top: 0;\r\n    left: 0;\r\n\r\n    // background-color: rgba($color: #000000, $alpha: 0.40);\r\n\r\n    \r\n    z-index: 5000;\r\n    \r\n    .cancelContainer {\r\n        box-shadow: 5px 5px 15px rgba($color: #000000, $alpha: 0.2);\r\n        width: 80vw;\r\n        max-width: 400px;\r\n\r\n        background-color: #fff;\r\n\r\n        border-radius: 10px;\r\n\r\n        display: flex;\r\n        flex-direction: column;\r\n\r\n        .title {\r\n            padding: 2rem;\r\n        }\r\n\r\n        .form {\r\n            display: flex;\r\n            flex-direction: column;\r\n\r\n            padding: 0 2rem 2rem;\r\n\r\n            span {\r\n                margin-bottom: 0.25rem;\r\n                margin-top: 0.5rem;\r\n                gap: 1rem;\r\n            }\r\n        }\r\n\r\n        .actionBtns {\r\n            display: flex;\r\n            flex-direction: column;\r\n\r\n            background: var(--background);\r\n\r\n            border-radius: 0 0 10px 10px;\r\n\r\n            width: 100%;\r\n\r\n            padding: 1.5rem;\r\n\r\n            button {\r\n                width: 100%;\r\n                \r\n                padding: 1rem;\r\n\r\n                background: none;\r\n\r\n                border-radius: 5px;\r\n\r\n                color: var(--orange-700);\r\n            }\r\n\r\n            :first-child {\r\n                margin-bottom: 0.5rem;\r\n            }\r\n\r\n            :last-child {\r\n                background: var(--orange-100);\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"modalContainer": "styles_modalContainer__TdsOn",
	"cancelContainer": "styles_cancelContainer__1d4ua",
	"title": "styles_title__3nxth",
	"form": "styles_form__1vggk",
	"actionBtns": "styles_actionBtns__1Ko9o"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxzL05ld1BheW1lbnQvc3R5bGVzLm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMEhBQStEO0FBQ3pHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyxrQ0FBa0Msa0JBQWtCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLGtCQUFrQixnQkFBZ0IsV0FBVyxZQUFZLGtCQUFrQixHQUFHLGdFQUFnRSxnREFBZ0QsZ0JBQWdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLGtCQUFrQiwyQkFBMkIsR0FBRyxxRkFBcUYsa0JBQWtCLEdBQUcsb0ZBQW9GLGtCQUFrQiwyQkFBMkIseUJBQXlCLEdBQUcseUZBQXlGLDJCQUEyQix1QkFBdUIsbUJBQW1CLGNBQWMsR0FBRywwRkFBMEYsa0JBQWtCLDJCQUEyQixrQ0FBa0MsaUNBQWlDLGdCQUFnQixvQkFBb0IsR0FBRyxpR0FBaUcsZ0JBQWdCLGtCQUFrQixxQkFBcUIsdUJBQXVCLDZCQUE2QixHQUFHLHVHQUF1RywwQkFBMEIsR0FBRyxzR0FBc0csa0NBQWtDLEdBQUcsT0FBTyxtRkFBbUYsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLDRDQUE0QyxzQkFBc0IsNEJBQTRCLGdDQUFnQywrQkFBK0Isc0JBQXNCLG9CQUFvQixtQkFBbUIsZ0JBQWdCLHFFQUFxRSxrQ0FBa0Msa0NBQWtDLHdFQUF3RSx3QkFBd0IsNkJBQTZCLHVDQUF1QyxvQ0FBb0MsOEJBQThCLG1DQUFtQyx3QkFBd0IsOEJBQThCLGFBQWEsdUJBQXVCLDhCQUE4Qix1Q0FBdUMseUNBQXlDLDBCQUEwQiwyQ0FBMkMsdUNBQXVDLDhCQUE4QixpQkFBaUIsYUFBYSw2QkFBNkIsOEJBQThCLHVDQUF1QyxrREFBa0QsaURBQWlELGdDQUFnQyxvQ0FBb0MsNEJBQTRCLGdDQUFnQyxzREFBc0QseUNBQXlDLDJDQUEyQyxpREFBaUQsaUJBQWlCLGtDQUFrQywwQ0FBMEMsaUJBQWlCLGlDQUFpQyxrREFBa0QsaUJBQWlCLGFBQWEsU0FBUyxLQUFLLG1CQUFtQjtBQUN0NUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZGZlMDYyYzc1MDUzMjAzNGI0YmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zdHlsZXNfbW9kYWxDb250YWluZXJfX1Rkc09uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogNTAwMDtcXG59XFxuLnN0eWxlc19tb2RhbENvbnRhaW5lcl9fVGRzT24gLnN0eWxlc19jYW5jZWxDb250YWluZXJfXzFkNHVhIHtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB3aWR0aDogODB2dztcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uc3R5bGVzX21vZGFsQ29udGFpbmVyX19UZHNPbiAuc3R5bGVzX2NhbmNlbENvbnRhaW5lcl9fMWQ0dWEgLnN0eWxlc190aXRsZV9fM254dGgge1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuLnN0eWxlc19tb2RhbENvbnRhaW5lcl9fVGRzT24gLnN0eWxlc19jYW5jZWxDb250YWluZXJfXzFkNHVhIC5zdHlsZXNfZm9ybV9fMXZnZ2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwIDJyZW0gMnJlbTtcXG59XFxuLnN0eWxlc19tb2RhbENvbnRhaW5lcl9fVGRzT24gLnN0eWxlc19jYW5jZWxDb250YWluZXJfXzFkNHVhIC5zdHlsZXNfZm9ybV9fMXZnZ2sgc3BhbiB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgZ3JpZC1nYXA6IDFyZW07XFxuICBnYXA6IDFyZW07XFxufVxcbi5zdHlsZXNfbW9kYWxDb250YWluZXJfX1Rkc09uIC5zdHlsZXNfY2FuY2VsQ29udGFpbmVyX18xZDR1YSAuc3R5bGVzX2FjdGlvbkJ0bnNfXzFLbzlvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxufVxcbi5zdHlsZXNfbW9kYWxDb250YWluZXJfX1Rkc09uIC5zdHlsZXNfY2FuY2VsQ29udGFpbmVyX18xZDR1YSAuc3R5bGVzX2FjdGlvbkJ0bnNfXzFLbzlvIGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IHZhcigtLW9yYW5nZS03MDApO1xcbn1cXG4uc3R5bGVzX21vZGFsQ29udGFpbmVyX19UZHNPbiAuc3R5bGVzX2NhbmNlbENvbnRhaW5lcl9fMWQ0dWEgLnN0eWxlc19hY3Rpb25CdG5zX18xS285byA6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG4uc3R5bGVzX21vZGFsQ29udGFpbmVyX19UZHNPbiAuc3R5bGVzX2NhbmNlbENvbnRhaW5lcl9fMWQ0dWEgLnN0eWxlc19hY3Rpb25CdG5zX18xS285byA6bGFzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UtMTAwKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUVBLE1BQUE7RUFDQSxPQUFBO0VBS0EsYUFBQTtBQUxKO0FBT0k7RUFDSSwyQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUVBLHNCQUFBO0VBRUEsbUJBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7QUFSUjtBQVVRO0VBQ0ksYUFBQTtBQVJaO0FBV1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxvQkFBQTtBQVZaO0FBWVk7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUFWaEI7QUFjUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUVBLDZCQUFBO0VBRUEsNEJBQUE7RUFFQSxXQUFBO0VBRUEsZUFBQTtBQWhCWjtBQWtCWTtFQUNJLFdBQUE7RUFFQSxhQUFBO0VBRUEsZ0JBQUE7RUFFQSxrQkFBQTtFQUVBLHdCQUFBO0FBcEJoQjtBQXVCWTtFQUNJLHFCQUFBO0FBckJoQjtBQXdCWTtFQUNJLDZCQUFBO0FBdEJoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubW9kYWxDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcblxcclxcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjQwKTtcXHJcXG5cXHJcXG4gICAgXFxyXFxuICAgIHotaW5kZXg6IDUwMDA7XFxyXFxuICAgIFxcclxcbiAgICAuY2FuY2VsQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjIpO1xcclxcbiAgICAgICAgd2lkdGg6IDgwdnc7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcblxcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG5cXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgICAgIC50aXRsZSB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5mb3JtIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMCAycmVtIDJyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgZ2FwOiAxcmVtO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5hY3Rpb25CdG5zIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UtNzAwKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICA6bGFzdC1jaGlsZCB7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW9yYW5nZS0xMDApO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJtb2RhbENvbnRhaW5lclwiOiBcInN0eWxlc19tb2RhbENvbnRhaW5lcl9fVGRzT25cIixcblx0XCJjYW5jZWxDb250YWluZXJcIjogXCJzdHlsZXNfY2FuY2VsQ29udGFpbmVyX18xZDR1YVwiLFxuXHRcInRpdGxlXCI6IFwic3R5bGVzX3RpdGxlX18zbnh0aFwiLFxuXHRcImZvcm1cIjogXCJzdHlsZXNfZm9ybV9fMXZnZ2tcIixcblx0XCJhY3Rpb25CdG5zXCI6IFwic3R5bGVzX2FjdGlvbkJ0bnNfXzFLbzlvXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==