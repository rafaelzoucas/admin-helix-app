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
___CSS_LOADER_EXPORT___.push([module.i, ".styles_modalContainer__TdsOn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 5000;\n}\n.styles_modalContainer__TdsOn .styles_cancelContainer__1d4ua {\n  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);\n  width: 80vw;\n  max-width: 400px;\n  background-color: #fff;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n}\n.styles_modalContainer__TdsOn .styles_cancelContainer__1d4ua .styles_title__3nxth {\n  padding: 2rem;\n}\n.styles_modalContainer__TdsOn .styles_cancelContainer__1d4ua .styles_form__1vggk {\n  display: flex;\n  flex-direction: column;\n  padding: 0 2rem 2rem;\n}\n.styles_modalContainer__TdsOn .styles_cancelContainer__1d4ua .styles_form__1vggk span {\n  margin-bottom: 0.25rem;\n  margin-top: 0.5rem;\n  grid-gap: 1rem;\n  gap: 1rem;\n}\n.styles_modalContainer__TdsOn .styles_cancelContainer__1d4ua .styles_actionBtns__1Ko9o {\n  display: flex;\n  flex-direction: row;\n  background: var(--background);\n  border-radius: 0 0 10px 10px;\n  width: 100%;\n  padding: 1.5rem;\n}\n.styles_modalContainer__TdsOn .styles_cancelContainer__1d4ua .styles_actionBtns__1Ko9o button {\n  font-weight: 500;\n  height: 4rem;\n  padding: 1rem;\n  background: none;\n  border-radius: 5px;\n  color: var(--orange-700);\n}\n.styles_modalContainer__TdsOn .styles_cancelContainer__1d4ua .styles_actionBtns__1Ko9o :first-child {\n  width: 50%;\n  margin-bottom: 0.5rem;\n}\n.styles_modalContainer__TdsOn .styles_cancelContainer__1d4ua .styles_actionBtns__1Ko9o :last-child {\n  width: 100%;\n  background: var(--orange-100);\n}", "",{"version":3,"sources":["webpack://styles.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EAEA,kBAAA;EACA,aAAA;EACA,WAAA;EAEA,MAAA;EACA,OAAA;EAEA,oCAAA;EAGA,aAAA;AAJJ;AAMI;EACI,2CAAA;EACA,WAAA;EACA,gBAAA;EAEA,sBAAA;EAEA,mBAAA;EAEA,aAAA;EACA,sBAAA;AAPR;AASQ;EACI,aAAA;AAPZ;AAUQ;EACI,aAAA;EACA,sBAAA;EAEA,oBAAA;AATZ;AAWY;EACI,sBAAA;EACA,kBAAA;EACA,cAAA;EAAA,SAAA;AAThB;AAaQ;EACI,aAAA;EACA,mBAAA;EAEA,6BAAA;EAEA,4BAAA;EAEA,WAAA;EAEA,eAAA;AAfZ;AAiBY;EACI,gBAAA;EAEA,YAAA;EAEA,aAAA;EAEA,gBAAA;EAEA,kBAAA;EAEA,wBAAA;AApBhB;AAuBY;EACI,UAAA;EACA,qBAAA;AArBhB;AAwBY;EACI,WAAA;EACA,6BAAA;AAtBhB","sourcesContent":[".modalContainer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    position: absolute;\r\n    height: 100vh;\r\n    width: 100%;\r\n\r\n    top: 0;\r\n    left: 0;\r\n\r\n    background-color: rgba($color: #000000, $alpha: 0.40);\r\n\r\n    \r\n    z-index: 5000;\r\n    \r\n    .cancelContainer {\r\n        box-shadow: 5px 5px 15px rgba($color: #000000, $alpha: 0.2);\r\n        width: 80vw;\r\n        max-width: 400px;\r\n\r\n        background-color: #fff;\r\n\r\n        border-radius: 10px;\r\n\r\n        display: flex;\r\n        flex-direction: column;\r\n\r\n        .title {\r\n            padding: 2rem;\r\n        }\r\n\r\n        .form {\r\n            display: flex;\r\n            flex-direction: column;\r\n\r\n            padding: 0 2rem 2rem;\r\n\r\n            span {\r\n                margin-bottom: 0.25rem;\r\n                margin-top: 0.5rem;\r\n                gap: 1rem;\r\n            }\r\n        }\r\n\r\n        .actionBtns {\r\n            display: flex;\r\n            flex-direction: row;\r\n\r\n            background: var(--background);\r\n\r\n            border-radius: 0 0 10px 10px;\r\n\r\n            width: 100%;\r\n\r\n            padding: 1.5rem;\r\n\r\n            button {\r\n                font-weight: 500;\r\n                \r\n                height: 4rem;\r\n\r\n                padding: 1rem;\r\n                \r\n                background: none;\r\n                \r\n                border-radius: 5px;\r\n                \r\n                color: var(--orange-700);\r\n            }\r\n            \r\n            :first-child {\r\n                width: 50%;\r\n                margin-bottom: 0.5rem;\r\n            }\r\n            \r\n            :last-child {\r\n                width: 100%;\r\n                background: var(--orange-100);\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxzL05ld1BheW1lbnQvc3R5bGVzLm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMEhBQStEO0FBQ3pHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyxrQ0FBa0Msa0JBQWtCLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLGtCQUFrQixnQkFBZ0IsV0FBVyxZQUFZLHlDQUF5QyxrQkFBa0IsR0FBRyxnRUFBZ0UsZ0RBQWdELGdCQUFnQixxQkFBcUIsMkJBQTJCLHdCQUF3QixrQkFBa0IsMkJBQTJCLEdBQUcscUZBQXFGLGtCQUFrQixHQUFHLG9GQUFvRixrQkFBa0IsMkJBQTJCLHlCQUF5QixHQUFHLHlGQUF5RiwyQkFBMkIsdUJBQXVCLG1CQUFtQixjQUFjLEdBQUcsMEZBQTBGLGtCQUFrQix3QkFBd0Isa0NBQWtDLGlDQUFpQyxnQkFBZ0Isb0JBQW9CLEdBQUcsaUdBQWlHLHFCQUFxQixpQkFBaUIsa0JBQWtCLHFCQUFxQix1QkFBdUIsNkJBQTZCLEdBQUcsdUdBQXVHLGVBQWUsMEJBQTBCLEdBQUcsc0dBQXNHLGdCQUFnQixrQ0FBa0MsR0FBRyxPQUFPLG1GQUFtRixVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyw0Q0FBNEMsc0JBQXNCLDRCQUE0QixnQ0FBZ0MsK0JBQStCLHNCQUFzQixvQkFBb0IsbUJBQW1CLGdCQUFnQixrRUFBa0Usa0NBQWtDLGtDQUFrQyx3RUFBd0Usd0JBQXdCLDZCQUE2Qix1Q0FBdUMsb0NBQW9DLDhCQUE4QixtQ0FBbUMsd0JBQXdCLDhCQUE4QixhQUFhLHVCQUF1Qiw4QkFBOEIsdUNBQXVDLHlDQUF5QywwQkFBMEIsMkNBQTJDLHVDQUF1Qyw4QkFBOEIsaUJBQWlCLGFBQWEsNkJBQTZCLDhCQUE4QixvQ0FBb0Msa0RBQWtELGlEQUFpRCxnQ0FBZ0Msb0NBQW9DLDRCQUE0QixxQ0FBcUMscURBQXFELHNDQUFzQyx5REFBeUQsMkRBQTJELGlFQUFpRSxpQkFBaUIsOENBQThDLCtCQUErQiwwQ0FBMEMsaUJBQWlCLDZDQUE2QyxnQ0FBZ0Msa0RBQWtELGlCQUFpQixhQUFhLFNBQVMsS0FBSyxtQkFBbUI7QUFDcnNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmVlYjU3YWNlNjc0ZDE1YzNjYWRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3R5bGVzX21vZGFsQ29udGFpbmVyX19UZHNPbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHotaW5kZXg6IDUwMDA7XFxufVxcbi5zdHlsZXNfbW9kYWxDb250YWluZXJfX1Rkc09uIC5zdHlsZXNfY2FuY2VsQ29udGFpbmVyX18xZDR1YSB7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgd2lkdGg6IDgwdnc7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnN0eWxlc19tb2RhbENvbnRhaW5lcl9fVGRzT24gLnN0eWxlc19jYW5jZWxDb250YWluZXJfXzFkNHVhIC5zdHlsZXNfdGl0bGVfXzNueHRoIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcbi5zdHlsZXNfbW9kYWxDb250YWluZXJfX1Rkc09uIC5zdHlsZXNfY2FuY2VsQ29udGFpbmVyX18xZDR1YSAuc3R5bGVzX2Zvcm1fXzF2Z2drIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMCAycmVtIDJyZW07XFxufVxcbi5zdHlsZXNfbW9kYWxDb250YWluZXJfX1Rkc09uIC5zdHlsZXNfY2FuY2VsQ29udGFpbmVyX18xZDR1YSAuc3R5bGVzX2Zvcm1fXzF2Z2drIHNwYW4ge1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG4uc3R5bGVzX21vZGFsQ29udGFpbmVyX19UZHNPbiAuc3R5bGVzX2NhbmNlbENvbnRhaW5lcl9fMWQ0dWEgLnN0eWxlc19hY3Rpb25CdG5zX18xS285byB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMS41cmVtO1xcbn1cXG4uc3R5bGVzX21vZGFsQ29udGFpbmVyX19UZHNPbiAuc3R5bGVzX2NhbmNlbENvbnRhaW5lcl9fMWQ0dWEgLnN0eWxlc19hY3Rpb25CdG5zX18xS285byBidXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IHZhcigtLW9yYW5nZS03MDApO1xcbn1cXG4uc3R5bGVzX21vZGFsQ29udGFpbmVyX19UZHNPbiAuc3R5bGVzX2NhbmNlbENvbnRhaW5lcl9fMWQ0dWEgLnN0eWxlc19hY3Rpb25CdG5zX18xS285byA6Zmlyc3QtY2hpbGQge1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuLnN0eWxlc19tb2RhbENvbnRhaW5lcl9fVGRzT24gLnN0eWxlc19jYW5jZWxDb250YWluZXJfXzFkNHVhIC5zdHlsZXNfYWN0aW9uQnRuc19fMUtvOW8gOmxhc3QtY2hpbGQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UtMTAwKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUVBLE1BQUE7RUFDQSxPQUFBO0VBRUEsb0NBQUE7RUFHQSxhQUFBO0FBSko7QUFNSTtFQUNJLDJDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBRUEsc0JBQUE7RUFFQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtBQVBSO0FBU1E7RUFDSSxhQUFBO0FBUFo7QUFVUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUVBLG9CQUFBO0FBVFo7QUFXWTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQVRoQjtBQWFRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBRUEsNkJBQUE7RUFFQSw0QkFBQTtFQUVBLFdBQUE7RUFFQSxlQUFBO0FBZlo7QUFpQlk7RUFDSSxnQkFBQTtFQUVBLFlBQUE7RUFFQSxhQUFBO0VBRUEsZ0JBQUE7RUFFQSxrQkFBQTtFQUVBLHdCQUFBO0FBcEJoQjtBQXVCWTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtBQXJCaEI7QUF3Qlk7RUFDSSxXQUFBO0VBQ0EsNkJBQUE7QUF0QmhCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tb2RhbENvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuNDApO1xcclxcblxcclxcbiAgICBcXHJcXG4gICAgei1pbmRleDogNTAwMDtcXHJcXG4gICAgXFxyXFxuICAgIC5jYW5jZWxDb250YWluZXIge1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuMik7XFxyXFxuICAgICAgICB3aWR0aDogODB2dztcXHJcXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XFxyXFxuXFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcblxcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgICAgICAgLnRpdGxlIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmZvcm0ge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDJyZW0gMnJlbTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgICAgICAgICAgICAgICBnYXA6IDFyZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmFjdGlvbkJ0bnMge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xcclxcblxcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0cmVtO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UtNzAwKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA6bGFzdC1jaGlsZCB7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UtMTAwKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibW9kYWxDb250YWluZXJcIjogXCJzdHlsZXNfbW9kYWxDb250YWluZXJfX1Rkc09uXCIsXG5cdFwiY2FuY2VsQ29udGFpbmVyXCI6IFwic3R5bGVzX2NhbmNlbENvbnRhaW5lcl9fMWQ0dWFcIixcblx0XCJ0aXRsZVwiOiBcInN0eWxlc190aXRsZV9fM254dGhcIixcblx0XCJmb3JtXCI6IFwic3R5bGVzX2Zvcm1fXzF2Z2drXCIsXG5cdFwiYWN0aW9uQnRuc1wiOiBcInN0eWxlc19hY3Rpb25CdG5zX18xS285b1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=