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
___CSS_LOADER_EXPORT___.push([module.i, ".styles_modalContainer__1yR5X {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 1000;\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW {\n  width: 80vw;\n  max-width: 425px;\n  background-color: #fff;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW .styles_title__1C2I6 {\n  padding: 2rem;\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW .styles_options__5IpLh {\n  padding: 0 1rem 1rem;\n  display: flex;\n  flex-direction: row;\n  grid-gap: 0.5rem;\n  gap: 0.5rem;\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW .styles_options__5IpLh div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 1rem;\n  background: var(--gray-200);\n  border-radius: 12px;\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW .styles_options__5IpLh .styles_selected__2rRP- {\n  font-weight: bold;\n  border: 1px solid var(--);\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW .styles_actionBtns__2ek8Q {\n  display: flex;\n  flex-direction: column;\n  background: var(--gray-100);\n  border-radius: 0 0 10px 10px;\n  width: 100%;\n  padding: 1.5rem;\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW .styles_actionBtns__2ek8Q button {\n  padding: 1rem;\n  background: none;\n  border-radius: 5px;\n  color: var(--orange-700);\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW .styles_actionBtns__2ek8Q :first-child {\n  margin-bottom: 0.5rem;\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW .styles_actionBtns__2ek8Q :last-child {\n  background: var(--orange-100);\n}", "",{"version":3,"sources":["webpack://styles.module.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,kBAAA;EACA,aAAA;EACA,WAAA;EAEA,MAAA;EACA,OAAA;EAEA,oCAAA;EAEA,aAAA;AAJJ;AAMI;EACI,WAAA;EACA,gBAAA;EAEA,sBAAA;EAEA,mBAAA;EAEA,aAAA;EACA,sBAAA;AAPR;AASQ;EACI,aAAA;AAPZ;AAUQ;EACI,oBAAA;EACA,aAAA;EACA,mBAAA;EAEA,gBAAA;EAAA,WAAA;AATZ;AAWY;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,WAAA;EACA,aAAA;EAEA,2BAAA;EAEA,mBAAA;AAZhB;AAeY;EACI,iBAAA;EACA,yBAAA;AAbhB;AAiBQ;EACI,aAAA;EACA,sBAAA;EAEA,2BAAA;EAEA,4BAAA;EAEA,WAAA;EAEA,eAAA;AAnBZ;AAqBY;EACI,aAAA;EAEA,gBAAA;EAEA,kBAAA;EAEA,wBAAA;AAtBhB;AAyBY;EACI,qBAAA;AAvBhB;AA0BY;EACI,6BAAA;AAxBhB","sourcesContent":[".modalContainer {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    \r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    position: absolute;\r\n    height: 100vh;\r\n    width: 100%;\r\n\r\n    top: 0;\r\n    left: 0;\r\n\r\n    background-color: rgba($color: #000000, $alpha: 0.40);\r\n\r\n    z-index: 1000;\r\n\r\n    .cancelContainer {\r\n        width: 80vw;\r\n        max-width: 425px;\r\n\r\n        background-color: #fff;\r\n\r\n        border-radius: 10px;\r\n\r\n        display: flex;\r\n        flex-direction: column;\r\n\r\n        .title {\r\n            padding: 2rem;\r\n        }\r\n\r\n        .options {\r\n            padding: 0 1rem 1rem;\r\n            display: flex;\r\n            flex-direction: row;\r\n\r\n            gap: 0.5rem;\r\n\r\n            div {\r\n                display: flex;\r\n                justify-content: center;\r\n                align-items: center;\r\n\r\n                width: 100%;\r\n                padding: 1rem;\r\n\r\n                background: var(--gray-200);\r\n\r\n                border-radius: 12px;\r\n            }\r\n\r\n            .selected {\r\n                font-weight: bold;\r\n                border: 1px solid var(--);\r\n            }\r\n        }\r\n\r\n        .actionBtns {\r\n            display: flex;\r\n            flex-direction: column;\r\n\r\n            background: var(--gray-100);\r\n\r\n            border-radius: 0 0 10px 10px;\r\n\r\n            width: 100%;\r\n\r\n            padding: 1.5rem;\r\n\r\n            button {\r\n                padding: 1rem;\r\n\r\n                background: none;\r\n\r\n                border-radius: 5px;\r\n\r\n                color: var(--orange-700);\r\n            }\r\n\r\n            :first-child {\r\n                margin-bottom: 0.5rem;\r\n            }\r\n\r\n            :last-child {\r\n                background: var(--orange-100);\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"modalContainer": "styles_modalContainer__1yR5X",
	"cancelContainer": "styles_cancelContainer__3R_KW",
	"title": "styles_title__1C2I6",
	"options": "styles_options__5IpLh",
	"selected": "styles_selected__2rRP-",
	"actionBtns": "styles_actionBtns__2ek8Q"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxzL0NhbmNlbERlbGl2ZXJ5L3N0eWxlcy5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDBIQUErRDtBQUN6RztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsa0NBQWtDLGNBQWMsZUFBZSwyQkFBMkIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLGtCQUFrQixnQkFBZ0IsV0FBVyxZQUFZLHlDQUF5QyxrQkFBa0IsR0FBRyxnRUFBZ0UsZ0JBQWdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLGtCQUFrQiwyQkFBMkIsR0FBRyxxRkFBcUYsa0JBQWtCLEdBQUcsdUZBQXVGLHlCQUF5QixrQkFBa0Isd0JBQXdCLHFCQUFxQixnQkFBZ0IsR0FBRywyRkFBMkYsa0JBQWtCLDRCQUE0Qix3QkFBd0IsZ0JBQWdCLGtCQUFrQixnQ0FBZ0Msd0JBQXdCLEdBQUcsK0dBQStHLHNCQUFzQiw4QkFBOEIsR0FBRywwRkFBMEYsa0JBQWtCLDJCQUEyQixnQ0FBZ0MsaUNBQWlDLGdCQUFnQixvQkFBb0IsR0FBRyxpR0FBaUcsa0JBQWtCLHFCQUFxQix1QkFBdUIsNkJBQTZCLEdBQUcsdUdBQXVHLDBCQUEwQixHQUFHLHNHQUFzRyxrQ0FBa0MsR0FBRyxPQUFPLG1GQUFtRixVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLDRDQUE0QyxrQkFBa0IsbUJBQW1CLCtCQUErQiw4QkFBOEIsNEJBQTRCLGdDQUFnQywrQkFBK0Isc0JBQXNCLG9CQUFvQixtQkFBbUIsZ0JBQWdCLGtFQUFrRSwwQkFBMEIsOEJBQThCLHdCQUF3Qiw2QkFBNkIsdUNBQXVDLG9DQUFvQyw4QkFBOEIsbUNBQW1DLHdCQUF3Qiw4QkFBOEIsYUFBYSwwQkFBMEIscUNBQXFDLDhCQUE4QixvQ0FBb0MsZ0NBQWdDLHlCQUF5QixrQ0FBa0MsNENBQTRDLHdDQUF3QyxvQ0FBb0Msa0NBQWtDLG9EQUFvRCw0Q0FBNEMsaUJBQWlCLCtCQUErQixzQ0FBc0MsOENBQThDLGlCQUFpQixhQUFhLDZCQUE2Qiw4QkFBOEIsdUNBQXVDLGdEQUFnRCxpREFBaUQsZ0NBQWdDLG9DQUFvQyw0QkFBNEIsa0NBQWtDLHlDQUF5QywyQ0FBMkMsaURBQWlELGlCQUFpQixrQ0FBa0MsMENBQTBDLGlCQUFpQixpQ0FBaUMsa0RBQWtELGlCQUFpQixhQUFhLFNBQVMsS0FBSyxtQkFBbUI7QUFDcmtKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RlbGl2ZXJpZXMuYTk5MmY4OTljMDZjZjg3ZjI5YjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zdHlsZXNfbW9kYWxDb250YWluZXJfXzF5UjVYIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICB6LWluZGV4OiAxMDAwO1xcbn1cXG4uc3R5bGVzX21vZGFsQ29udGFpbmVyX18xeVI1WCAuc3R5bGVzX2NhbmNlbENvbnRhaW5lcl9fM1JfS1cge1xcbiAgd2lkdGg6IDgwdnc7XFxuICBtYXgtd2lkdGg6IDQyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnN0eWxlc19tb2RhbENvbnRhaW5lcl9fMXlSNVggLnN0eWxlc19jYW5jZWxDb250YWluZXJfXzNSX0tXIC5zdHlsZXNfdGl0bGVfXzFDMkk2IHtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcbi5zdHlsZXNfbW9kYWxDb250YWluZXJfXzF5UjVYIC5zdHlsZXNfY2FuY2VsQ29udGFpbmVyX18zUl9LVyAuc3R5bGVzX29wdGlvbnNfXzVJcExoIHtcXG4gIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBncmlkLWdhcDogMC41cmVtO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcbi5zdHlsZXNfbW9kYWxDb250YWluZXJfXzF5UjVYIC5zdHlsZXNfY2FuY2VsQ29udGFpbmVyX18zUl9LVyAuc3R5bGVzX29wdGlvbnNfXzVJcExoIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS0yMDApO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuLnN0eWxlc19tb2RhbENvbnRhaW5lcl9fMXlSNVggLnN0eWxlc19jYW5jZWxDb250YWluZXJfXzNSX0tXIC5zdHlsZXNfb3B0aW9uc19fNUlwTGggLnN0eWxlc19zZWxlY3RlZF9fMnJSUC0ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS0pO1xcbn1cXG4uc3R5bGVzX21vZGFsQ29udGFpbmVyX18xeVI1WCAuc3R5bGVzX2NhbmNlbENvbnRhaW5lcl9fM1JfS1cgLnN0eWxlc19hY3Rpb25CdG5zX18yZWs4USB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMTAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuLnN0eWxlc19tb2RhbENvbnRhaW5lcl9fMXlSNVggLnN0eWxlc19jYW5jZWxDb250YWluZXJfXzNSX0tXIC5zdHlsZXNfYWN0aW9uQnRuc19fMmVrOFEgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IHZhcigtLW9yYW5nZS03MDApO1xcbn1cXG4uc3R5bGVzX21vZGFsQ29udGFpbmVyX18xeVI1WCAuc3R5bGVzX2NhbmNlbENvbnRhaW5lcl9fM1JfS1cgLnN0eWxlc19hY3Rpb25CdG5zX18yZWs4USA6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG4uc3R5bGVzX21vZGFsQ29udGFpbmVyX18xeVI1WCAuc3R5bGVzX2NhbmNlbENvbnRhaW5lcl9fM1JfS1cgLnN0eWxlc19hY3Rpb25CdG5zX18yZWs4USA6bGFzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UtMTAwKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFFQSxNQUFBO0VBQ0EsT0FBQTtFQUVBLG9DQUFBO0VBRUEsYUFBQTtBQUpKO0FBTUk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSxzQkFBQTtFQUVBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0FBUFI7QUFTUTtFQUNJLGFBQUE7QUFQWjtBQVVRO0VBQ0ksb0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxnQkFBQTtFQUFBLFdBQUE7QUFUWjtBQVdZO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUVBLDJCQUFBO0VBRUEsbUJBQUE7QUFaaEI7QUFlWTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7QUFiaEI7QUFpQlE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSwyQkFBQTtFQUVBLDRCQUFBO0VBRUEsV0FBQTtFQUVBLGVBQUE7QUFuQlo7QUFxQlk7RUFDSSxhQUFBO0VBRUEsZ0JBQUE7RUFFQSxrQkFBQTtFQUVBLHdCQUFBO0FBdEJoQjtBQXlCWTtFQUNJLHFCQUFBO0FBdkJoQjtBQTBCWTtFQUNJLDZCQUFBO0FBeEJoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubW9kYWxDb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIFxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjQwKTtcXHJcXG5cXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG5cXHJcXG4gICAgLmNhbmNlbENvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogODB2dztcXHJcXG4gICAgICAgIG1heC13aWR0aDogNDI1cHg7XFxyXFxuXFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcblxcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgICAgICAgLnRpdGxlIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLm9wdGlvbnMge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHJcXG4gICAgICAgICAgICBnYXA6IDAuNXJlbTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBkaXYge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMjAwKTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLnNlbGVjdGVkIHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLSk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmFjdGlvbkJ0bnMge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTEwMCk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tb3JhbmdlLTcwMCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIDpmaXJzdC1jaGlsZCB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgOmxhc3QtY2hpbGQge1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UtMTAwKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibW9kYWxDb250YWluZXJcIjogXCJzdHlsZXNfbW9kYWxDb250YWluZXJfXzF5UjVYXCIsXG5cdFwiY2FuY2VsQ29udGFpbmVyXCI6IFwic3R5bGVzX2NhbmNlbENvbnRhaW5lcl9fM1JfS1dcIixcblx0XCJ0aXRsZVwiOiBcInN0eWxlc190aXRsZV9fMUMySTZcIixcblx0XCJvcHRpb25zXCI6IFwic3R5bGVzX29wdGlvbnNfXzVJcExoXCIsXG5cdFwic2VsZWN0ZWRcIjogXCJzdHlsZXNfc2VsZWN0ZWRfXzJyUlAtXCIsXG5cdFwiYWN0aW9uQnRuc1wiOiBcInN0eWxlc19hY3Rpb25CdG5zX18yZWs4UVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=