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
___CSS_LOADER_EXPORT___.push([module.i, ".styles_modalContainer__1yR5X {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 1000;\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW {\n  width: 80vw;\n  max-width: 425px;\n  background-color: #fff;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW .styles_title__1C2I6 {\n  padding: 2rem;\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW .styles_options__5IpLh {\n  padding: 0 1rem 1rem;\n  display: flex;\n  flex-direction: row;\n  grid-gap: 0.5rem;\n  gap: 0.5rem;\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW .styles_options__5IpLh div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 1rem;\n  background: var(--gray-200);\n  border-radius: 12px;\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW .styles_options__5IpLh .styles_selected__2rRP- {\n  fontweight: bold;\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW .styles_actionBtns__2ek8Q {\n  display: flex;\n  flex-direction: column;\n  background: var(--gray-100);\n  border-radius: 0 0 10px 10px;\n  width: 100%;\n  padding: 1.5rem;\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW .styles_actionBtns__2ek8Q button {\n  padding: 1rem;\n  background: none;\n  border-radius: 5px;\n  color: var(--orange-700);\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW .styles_actionBtns__2ek8Q :first-child {\n  margin-bottom: 0.5rem;\n}\n.styles_modalContainer__1yR5X .styles_cancelContainer__3R_KW .styles_actionBtns__2ek8Q :last-child {\n  background: var(--orange-100);\n}", "",{"version":3,"sources":["webpack://styles.module.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,kBAAA;EACA,aAAA;EACA,WAAA;EAEA,MAAA;EACA,OAAA;EAEA,oCAAA;EAEA,aAAA;AAJJ;AAMI;EACI,WAAA;EACA,gBAAA;EAEA,sBAAA;EAEA,mBAAA;EAEA,aAAA;EACA,sBAAA;AAPR;AASQ;EACI,aAAA;AAPZ;AAUQ;EACI,oBAAA;EACA,aAAA;EACA,mBAAA;EAEA,gBAAA;EAAA,WAAA;AATZ;AAWY;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,WAAA;EACA,aAAA;EAEA,2BAAA;EAEA,mBAAA;AAZhB;AAeY;EACI,gBAAA;AAbhB;AAiBQ;EACI,aAAA;EACA,sBAAA;EAEA,2BAAA;EAEA,4BAAA;EAEA,WAAA;EAEA,eAAA;AAnBZ;AAqBY;EACI,aAAA;EAEA,gBAAA;EAEA,kBAAA;EAEA,wBAAA;AAtBhB;AAyBY;EACI,qBAAA;AAvBhB;AA0BY;EACI,6BAAA;AAxBhB","sourcesContent":[".modalContainer {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    \r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    position: absolute;\r\n    height: 100vh;\r\n    width: 100%;\r\n\r\n    top: 0;\r\n    left: 0;\r\n\r\n    background-color: rgba($color: #000000, $alpha: 0.40);\r\n\r\n    z-index: 1000;\r\n\r\n    .cancelContainer {\r\n        width: 80vw;\r\n        max-width: 425px;\r\n\r\n        background-color: #fff;\r\n\r\n        border-radius: 10px;\r\n\r\n        display: flex;\r\n        flex-direction: column;\r\n\r\n        .title {\r\n            padding: 2rem;\r\n        }\r\n\r\n        .options {\r\n            padding: 0 1rem 1rem;\r\n            display: flex;\r\n            flex-direction: row;\r\n\r\n            gap: 0.5rem;\r\n\r\n            div {\r\n                display: flex;\r\n                justify-content: center;\r\n                align-items: center;\r\n\r\n                width: 100%;\r\n                padding: 1rem;\r\n\r\n                background: var(--gray-200);\r\n\r\n                border-radius: 12px;\r\n            }\r\n\r\n            .selected {\r\n                fontweight: bold;\r\n            }\r\n        }\r\n\r\n        .actionBtns {\r\n            display: flex;\r\n            flex-direction: column;\r\n\r\n            background: var(--gray-100);\r\n\r\n            border-radius: 0 0 10px 10px;\r\n\r\n            width: 100%;\r\n\r\n            padding: 1.5rem;\r\n\r\n            button {\r\n                padding: 1rem;\r\n\r\n                background: none;\r\n\r\n                border-radius: 5px;\r\n\r\n                color: var(--orange-700);\r\n            }\r\n\r\n            :first-child {\r\n                margin-bottom: 0.5rem;\r\n            }\r\n\r\n            :last-child {\r\n                background: var(--orange-100);\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxzL0NhbmNlbERlbGl2ZXJ5L3N0eWxlcy5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDBIQUErRDtBQUN6RztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsa0NBQWtDLGNBQWMsZUFBZSwyQkFBMkIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLGtCQUFrQixnQkFBZ0IsV0FBVyxZQUFZLHlDQUF5QyxrQkFBa0IsR0FBRyxnRUFBZ0UsZ0JBQWdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLGtCQUFrQiwyQkFBMkIsR0FBRyxxRkFBcUYsa0JBQWtCLEdBQUcsdUZBQXVGLHlCQUF5QixrQkFBa0Isd0JBQXdCLHFCQUFxQixnQkFBZ0IsR0FBRywyRkFBMkYsa0JBQWtCLDRCQUE0Qix3QkFBd0IsZ0JBQWdCLGtCQUFrQixnQ0FBZ0Msd0JBQXdCLEdBQUcsK0dBQStHLHFCQUFxQixHQUFHLDBGQUEwRixrQkFBa0IsMkJBQTJCLGdDQUFnQyxpQ0FBaUMsZ0JBQWdCLG9CQUFvQixHQUFHLGlHQUFpRyxrQkFBa0IscUJBQXFCLHVCQUF1Qiw2QkFBNkIsR0FBRyx1R0FBdUcsMEJBQTBCLEdBQUcsc0dBQXNHLGtDQUFrQyxHQUFHLE9BQU8sbUZBQW1GLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLDRDQUE0QyxrQkFBa0IsbUJBQW1CLCtCQUErQiw4QkFBOEIsNEJBQTRCLGdDQUFnQywrQkFBK0Isc0JBQXNCLG9CQUFvQixtQkFBbUIsZ0JBQWdCLGtFQUFrRSwwQkFBMEIsOEJBQThCLHdCQUF3Qiw2QkFBNkIsdUNBQXVDLG9DQUFvQyw4QkFBOEIsbUNBQW1DLHdCQUF3Qiw4QkFBOEIsYUFBYSwwQkFBMEIscUNBQXFDLDhCQUE4QixvQ0FBb0MsZ0NBQWdDLHlCQUF5QixrQ0FBa0MsNENBQTRDLHdDQUF3QyxvQ0FBb0Msa0NBQWtDLG9EQUFvRCw0Q0FBNEMsaUJBQWlCLCtCQUErQixxQ0FBcUMsaUJBQWlCLGFBQWEsNkJBQTZCLDhCQUE4Qix1Q0FBdUMsZ0RBQWdELGlEQUFpRCxnQ0FBZ0Msb0NBQW9DLDRCQUE0QixrQ0FBa0MseUNBQXlDLDJDQUEyQyxpREFBaUQsaUJBQWlCLGtDQUFrQywwQ0FBMEMsaUJBQWlCLGlDQUFpQyxrREFBa0QsaUJBQWlCLGFBQWEsU0FBUyxLQUFLLG1CQUFtQjtBQUM1K0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGVsaXZlcmllcy44MjdiNWM4ZjA3NmQwY2JiNWNiZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0eWxlc19tb2RhbENvbnRhaW5lcl9fMXlSNVgge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHotaW5kZXg6IDEwMDA7XFxufVxcbi5zdHlsZXNfbW9kYWxDb250YWluZXJfXzF5UjVYIC5zdHlsZXNfY2FuY2VsQ29udGFpbmVyX18zUl9LVyB7XFxuICB3aWR0aDogODB2dztcXG4gIG1heC13aWR0aDogNDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uc3R5bGVzX21vZGFsQ29udGFpbmVyX18xeVI1WCAuc3R5bGVzX2NhbmNlbENvbnRhaW5lcl9fM1JfS1cgLnN0eWxlc190aXRsZV9fMUMySTYge1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuLnN0eWxlc19tb2RhbENvbnRhaW5lcl9fMXlSNVggLnN0eWxlc19jYW5jZWxDb250YWluZXJfXzNSX0tXIC5zdHlsZXNfb3B0aW9uc19fNUlwTGgge1xcbiAgcGFkZGluZzogMCAxcmVtIDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdyaWQtZ2FwOiAwLjVyZW07XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuLnN0eWxlc19tb2RhbENvbnRhaW5lcl9fMXlSNVggLnN0eWxlc19jYW5jZWxDb250YWluZXJfXzNSX0tXIC5zdHlsZXNfb3B0aW9uc19fNUlwTGggZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTIwMCk7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG4uc3R5bGVzX21vZGFsQ29udGFpbmVyX18xeVI1WCAuc3R5bGVzX2NhbmNlbENvbnRhaW5lcl9fM1JfS1cgLnN0eWxlc19vcHRpb25zX181SXBMaCAuc3R5bGVzX3NlbGVjdGVkX18yclJQLSB7XFxuICBmb250d2VpZ2h0OiBib2xkO1xcbn1cXG4uc3R5bGVzX21vZGFsQ29udGFpbmVyX18xeVI1WCAuc3R5bGVzX2NhbmNlbENvbnRhaW5lcl9fM1JfS1cgLnN0eWxlc19hY3Rpb25CdG5zX18yZWs4USB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMTAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuLnN0eWxlc19tb2RhbENvbnRhaW5lcl9fMXlSNVggLnN0eWxlc19jYW5jZWxDb250YWluZXJfXzNSX0tXIC5zdHlsZXNfYWN0aW9uQnRuc19fMmVrOFEgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IHZhcigtLW9yYW5nZS03MDApO1xcbn1cXG4uc3R5bGVzX21vZGFsQ29udGFpbmVyX18xeVI1WCAuc3R5bGVzX2NhbmNlbENvbnRhaW5lcl9fM1JfS1cgLnN0eWxlc19hY3Rpb25CdG5zX18yZWs4USA6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG4uc3R5bGVzX21vZGFsQ29udGFpbmVyX18xeVI1WCAuc3R5bGVzX2NhbmNlbENvbnRhaW5lcl9fM1JfS1cgLnN0eWxlc19hY3Rpb25CdG5zX18yZWs4USA6bGFzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UtMTAwKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFFQSxNQUFBO0VBQ0EsT0FBQTtFQUVBLG9DQUFBO0VBRUEsYUFBQTtBQUpKO0FBTUk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSxzQkFBQTtFQUVBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0FBUFI7QUFTUTtFQUNJLGFBQUE7QUFQWjtBQVVRO0VBQ0ksb0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxnQkFBQTtFQUFBLFdBQUE7QUFUWjtBQVdZO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUVBLDJCQUFBO0VBRUEsbUJBQUE7QUFaaEI7QUFlWTtFQUNJLGdCQUFBO0FBYmhCO0FBaUJRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBRUEsMkJBQUE7RUFFQSw0QkFBQTtFQUVBLFdBQUE7RUFFQSxlQUFBO0FBbkJaO0FBcUJZO0VBQ0ksYUFBQTtFQUVBLGdCQUFBO0VBRUEsa0JBQUE7RUFFQSx3QkFBQTtBQXRCaEI7QUF5Qlk7RUFDSSxxQkFBQTtBQXZCaEI7QUEwQlk7RUFDSSw2QkFBQTtBQXhCaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1vZGFsQ29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC40MCk7XFxyXFxuXFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuXFxyXFxuICAgIC5jYW5jZWxDb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDgwdnc7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDQyNXB4O1xcclxcblxcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG5cXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgICAgIC50aXRsZSB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5vcHRpb25zIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFxyXFxuICAgICAgICAgICAgZ2FwOiAwLjVyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgZGl2IHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTIwMCk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5zZWxlY3RlZCB7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnR3ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmFjdGlvbkJ0bnMge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTEwMCk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tb3JhbmdlLTcwMCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIDpmaXJzdC1jaGlsZCB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgOmxhc3QtY2hpbGQge1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UtMTAwKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibW9kYWxDb250YWluZXJcIjogXCJzdHlsZXNfbW9kYWxDb250YWluZXJfXzF5UjVYXCIsXG5cdFwiY2FuY2VsQ29udGFpbmVyXCI6IFwic3R5bGVzX2NhbmNlbENvbnRhaW5lcl9fM1JfS1dcIixcblx0XCJ0aXRsZVwiOiBcInN0eWxlc190aXRsZV9fMUMySTZcIixcblx0XCJvcHRpb25zXCI6IFwic3R5bGVzX29wdGlvbnNfXzVJcExoXCIsXG5cdFwic2VsZWN0ZWRcIjogXCJzdHlsZXNfc2VsZWN0ZWRfXzJyUlAtXCIsXG5cdFwiYWN0aW9uQnRuc1wiOiBcInN0eWxlc19hY3Rpb25CdG5zX18yZWs4UVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=