webpackHotUpdate_N_E("pages/costumers",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/pages/pages.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/pages/pages.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".pages_container__1VAjT {\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  right: 0;\n  padding: 0.5rem 2rem;\n  width: calc(100vw - 4rem);\n}\n.pages_container__1VAjT .pages_list__dUZWX {\n  display: flex;\n  flex-direction: column;\n  width: 75%;\n}\n.pages_container__1VAjT .pages_list__dUZWX .pages_filter__23tdn {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.pages_container__1VAjT .pages_list__dUZWX .pages_filter__23tdn .pages_groupBtn__22z3I {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  width: 475px;\n  height: 3rem;\n  background-color: #FFF;\n  border-radius: 10px;\n  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.03);\n}\n.pages_container__1VAjT .pages_list__dUZWX .pages_filter__23tdn .pages_groupBtn__22z3I button {\n  font-size: 0.75rem;\n  font-weight: 500;\n  border-radius: 0;\n  color: var(--gray-300);\n  padding: 1rem;\n}\n.pages_container__1VAjT .pages_list__dUZWX .pages_filter__23tdn .pages_groupBtn__22z3I button:hover {\n  background-color: var(--orange-100);\n  color: var(--orange-700);\n  transition: all 0.2s;\n}\n.pages_container__1VAjT .pages_list__dUZWX .pages_filter__23tdn .pages_groupBtn__22z3I button:first-child {\n  border-radius: 10px 0 0 10px;\n}\n.pages_container__1VAjT .pages_list__dUZWX .pages_filter__23tdn .pages_groupBtn__22z3I button:last-child {\n  border-radius: 0 10px 10px 0;\n}\n.pages_container__1VAjT .pages_list__dUZWX .pages_filter__23tdn .pages_groupBtn__22z3I .pages_active__2FZsa {\n  background-color: var(--orange-100);\n  color: var(--orange-700);\n}\n.pages_container__1VAjT .pages_pendencies__3ylJZ {\n  margin-left: 2rem;\n  width: calc();\n}", "",{"version":3,"sources":["webpack://pages.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,mBAAA;EAEA,kBAAA;EACA,QAAA;EAEA,oBAAA;EAEA,yBAAA;AAFJ;AAII;EACI,aAAA;EACA,sBAAA;EACA,UAAA;AAFR;AAIQ;EACI,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,8BAAA;AAFZ;AAIY;EACI,aAAA;EACA,mBAAA;EAEA,mBAAA;EACA,6BAAA;EAEA,YAAA;EACA,YAAA;EAEA,sBAAA;EACA,mBAAA;EAEA,4CAAA;AANhB;AAQgB;EACI,kBAAA;EACA,gBAAA;EACA,gBAAA;EAEA,sBAAA;EAEA,aAAA;AARpB;AAUoB;EACI,mCAAA;EACA,wBAAA;EAEA,oBAAA;AATxB;AAYoB;EACI,4BAAA;AAVxB;AAaoB;EACI,4BAAA;AAXxB;AAegB;EACI,mCAAA;EACA,wBAAA;AAbpB;AAmBI;EACI,iBAAA;EAEA,aAAA;AAlBR","sourcesContent":[".container {\r\n    display: flex;\r\n    flex-direction: row;\r\n\r\n    position: absolute;\r\n    right: 0;\r\n\r\n    padding: 0.5rem 2rem;\r\n\r\n    width: calc(100vw - 4rem);\r\n\r\n    .list {\r\n        display: flex;\r\n        flex-direction: column;\r\n        width: 75%;\r\n    \r\n        .filter {\r\n            display: flex;\r\n            flex-direction: row;\r\n            align-items: center;\r\n            justify-content: space-between;\r\n    \r\n            .groupBtn {\r\n                display: flex;\r\n                flex-direction: row;\r\n                \r\n                align-items: center;\r\n                justify-content: space-around;\r\n                \r\n                width: 475px;\r\n                height: 3rem;\r\n                \r\n                background-color: #FFF;\r\n                border-radius: 10px;\r\n                \r\n                box-shadow: 3px 3px 15px rgba($color: #000000, $alpha: 0.03);\r\n                \r\n                button {\r\n                    font-size: 0.75rem;\r\n                    font-weight: 500;\r\n                    border-radius: 0;\r\n                    \r\n                    color: var(--gray-300);\r\n                    \r\n                    padding: 1rem;\r\n                    \r\n                    &:hover {\r\n                        background-color: var(--orange-100);\r\n                        color: var(--orange-700);\r\n                        \r\n                        transition: all 0.2s;\r\n                    }\r\n                    \r\n                    &:first-child {\r\n                        border-radius: 10px 0 0 10px;\r\n                    }\r\n                    \r\n                    &:last-child {\r\n                        border-radius: 0 10px 10px 0;\r\n                    }\r\n                }\r\n                \r\n                .active {\r\n                    background-color: var(--orange-100);\r\n                    color: var(--orange-700);\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .pendencies {\r\n        margin-left: 2rem;\r\n\r\n        width: calc();\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "pages_container__1VAjT",
	"list": "pages_list__dUZWX",
	"filter": "pages_filter__23tdn",
	"groupBtn": "pages_groupBtn__22z3I",
	"active": "pages_active__2FZsa",
	"pendencies": "pages_pendencies__3ylJZ"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BhZ2VzLm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsb0hBQXlEO0FBQ25HO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyw0QkFBNEIsa0JBQWtCLHdCQUF3Qix1QkFBdUIsYUFBYSx5QkFBeUIsOEJBQThCLEdBQUcsOENBQThDLGtCQUFrQiwyQkFBMkIsZUFBZSxHQUFHLG1FQUFtRSxrQkFBa0Isd0JBQXdCLHdCQUF3QixtQ0FBbUMsR0FBRywwRkFBMEYsa0JBQWtCLHdCQUF3Qix3QkFBd0Isa0NBQWtDLGlCQUFpQixpQkFBaUIsMkJBQTJCLHdCQUF3QixpREFBaUQsR0FBRyxpR0FBaUcsdUJBQXVCLHFCQUFxQixxQkFBcUIsMkJBQTJCLGtCQUFrQixHQUFHLHVHQUF1Ryx3Q0FBd0MsNkJBQTZCLHlCQUF5QixHQUFHLDZHQUE2RyxpQ0FBaUMsR0FBRyw0R0FBNEcsaUNBQWlDLEdBQUcsK0dBQStHLHdDQUF3Qyw2QkFBNkIsR0FBRyxvREFBb0Qsc0JBQXNCLGtCQUFrQixHQUFHLE9BQU8sa0ZBQWtGLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLHNDQUFzQyxzQkFBc0IsNEJBQTRCLCtCQUErQixpQkFBaUIsaUNBQWlDLHNDQUFzQyxtQkFBbUIsMEJBQTBCLG1DQUFtQyx1QkFBdUIsNkJBQTZCLDhCQUE4QixvQ0FBb0Msb0NBQW9DLCtDQUErQyxtQ0FBbUMsa0NBQWtDLHdDQUF3Qyw0REFBNEQsa0RBQWtELHFEQUFxRCxpQ0FBaUMsK0RBQStELHdDQUF3QyxxR0FBcUcsZ0RBQWdELDJDQUEyQyx5Q0FBeUMseUNBQXlDLHVFQUF1RSw4REFBOEQseURBQXlELGdFQUFnRSxxREFBcUQsNkVBQTZFLHlCQUF5QiwrREFBK0QseURBQXlELHlCQUF5Qiw4REFBOEQseURBQXlELHlCQUF5QixxQkFBcUIsaURBQWlELDREQUE0RCxpREFBaUQscUJBQXFCLGlCQUFpQixhQUFhLFNBQVMseUJBQXlCLDhCQUE4Qiw4QkFBOEIsU0FBUyxLQUFLLG1CQUFtQjtBQUM3K0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29zdHVtZXJzLjYzMjc0ZDkyNDBkMDhjZDA2Y2ZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucGFnZXNfY29udGFpbmVyX18xVkFqVCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XFxuICB3aWR0aDogY2FsYygxMDB2dyAtIDRyZW0pO1xcbn1cXG4ucGFnZXNfY29udGFpbmVyX18xVkFqVCAucGFnZXNfbGlzdF9fZFVaV1gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNzUlO1xcbn1cXG4ucGFnZXNfY29udGFpbmVyX18xVkFqVCAucGFnZXNfbGlzdF9fZFVaV1ggLnBhZ2VzX2ZpbHRlcl9fMjN0ZG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ucGFnZXNfY29udGFpbmVyX18xVkFqVCAucGFnZXNfbGlzdF9fZFVaV1ggLnBhZ2VzX2ZpbHRlcl9fMjN0ZG4gLnBhZ2VzX2dyb3VwQnRuX18yMnozSSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiA0NzVweDtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XFxufVxcbi5wYWdlc19jb250YWluZXJfXzFWQWpUIC5wYWdlc19saXN0X19kVVpXWCAucGFnZXNfZmlsdGVyX18yM3RkbiAucGFnZXNfZ3JvdXBCdG5fXzIyejNJIGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTMwMCk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4ucGFnZXNfY29udGFpbmVyX18xVkFqVCAucGFnZXNfbGlzdF9fZFVaV1ggLnBhZ2VzX2ZpbHRlcl9fMjN0ZG4gLnBhZ2VzX2dyb3VwQnRuX18yMnozSSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLTEwMCk7XFxuICBjb2xvcjogdmFyKC0tb3JhbmdlLTcwMCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuLnBhZ2VzX2NvbnRhaW5lcl9fMVZBalQgLnBhZ2VzX2xpc3RfX2RVWldYIC5wYWdlc19maWx0ZXJfXzIzdGRuIC5wYWdlc19ncm91cEJ0bl9fMjJ6M0kgYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XFxufVxcbi5wYWdlc19jb250YWluZXJfXzFWQWpUIC5wYWdlc19saXN0X19kVVpXWCAucGFnZXNfZmlsdGVyX18yM3RkbiAucGFnZXNfZ3JvdXBCdG5fXzIyejNJIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XFxufVxcbi5wYWdlc19jb250YWluZXJfXzFWQWpUIC5wYWdlc19saXN0X19kVVpXWCAucGFnZXNfZmlsdGVyX18yM3RkbiAucGFnZXNfZ3JvdXBCdG5fXzIyejNJIC5wYWdlc19hY3RpdmVfXzJGWnNhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZS0xMDApO1xcbiAgY29sb3I6IHZhcigtLW9yYW5nZS03MDApO1xcbn1cXG4ucGFnZXNfY29udGFpbmVyX18xVkFqVCAucGFnZXNfcGVuZGVuY2llc19fM3lsSloge1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICB3aWR0aDogY2FsYygpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vcGFnZXMubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFFQSxvQkFBQTtFQUVBLHlCQUFBO0FBRko7QUFJSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFGUjtBQUlRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUZaO0FBSVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxtQkFBQTtFQUNBLDZCQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFFQSxzQkFBQTtFQUNBLG1CQUFBO0VBRUEsNENBQUE7QUFOaEI7QUFRZ0I7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxzQkFBQTtFQUVBLGFBQUE7QUFScEI7QUFVb0I7RUFDSSxtQ0FBQTtFQUNBLHdCQUFBO0VBRUEsb0JBQUE7QUFUeEI7QUFZb0I7RUFDSSw0QkFBQTtBQVZ4QjtBQWFvQjtFQUNJLDRCQUFBO0FBWHhCO0FBZWdCO0VBQ0ksbUNBQUE7RUFDQSx3QkFBQTtBQWJwQjtBQW1CSTtFQUNJLGlCQUFBO0VBRUEsYUFBQTtBQWxCUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XFxyXFxuXFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNHJlbSk7XFxyXFxuXFxyXFxuICAgIC5saXN0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgXFxyXFxuICAgICAgICAuZmlsdGVyIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgIC5ncm91cEJ0biB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA0NzVweDtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTVweCByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjAzKTtcXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWdyYXktMzAwKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLTEwMCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLW9yYW5nZS03MDApO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAxMHB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgIC5hY3RpdmUge1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLTEwMCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tb3JhbmdlLTcwMCk7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnBlbmRlbmNpZXMge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuXFxyXFxuICAgICAgICB3aWR0aDogY2FsYygpO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInBhZ2VzX2NvbnRhaW5lcl9fMVZBalRcIixcblx0XCJsaXN0XCI6IFwicGFnZXNfbGlzdF9fZFVaV1hcIixcblx0XCJmaWx0ZXJcIjogXCJwYWdlc19maWx0ZXJfXzIzdGRuXCIsXG5cdFwiZ3JvdXBCdG5cIjogXCJwYWdlc19ncm91cEJ0bl9fMjJ6M0lcIixcblx0XCJhY3RpdmVcIjogXCJwYWdlc19hY3RpdmVfXzJGWnNhXCIsXG5cdFwicGVuZGVuY2llc1wiOiBcInBhZ2VzX3BlbmRlbmNpZXNfXzN5bEpaXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==