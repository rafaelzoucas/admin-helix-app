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
___CSS_LOADER_EXPORT___.push([module.i, ".pages_container__1VAjT {\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  right: 0;\n  padding: 0.5rem 2rem;\n  width: calc(100vw - 4rem);\n}\n.pages_container__1VAjT .pages_list__dUZWX {\n  display: flex;\n  flex-direction: column;\n}\n.pages_container__1VAjT .pages_list__dUZWX .pages_filter__23tdn {\n  display: flex;\n  flex-direction: row;\n}\n.pages_container__1VAjT .pages_list__dUZWX .pages_filter__23tdn .pages_groupBtn__22z3I {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  width: 475px;\n  height: 3rem;\n  background-color: #FFF;\n  border-radius: 10px;\n  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.03);\n}\n.pages_container__1VAjT .pages_list__dUZWX .pages_filter__23tdn .pages_groupBtn__22z3I button {\n  font-size: 0.75rem;\n  font-weight: 500;\n  border-radius: 0;\n  color: var(--gray-300);\n  padding: 1rem;\n}\n.pages_container__1VAjT .pages_list__dUZWX .pages_filter__23tdn .pages_groupBtn__22z3I button:hover {\n  background-color: var(--orange-100);\n  color: var(--orange-700);\n  transition: all 0.2s;\n}\n.pages_container__1VAjT .pages_list__dUZWX .pages_filter__23tdn .pages_groupBtn__22z3I button:first-child {\n  border-radius: 10px 0 0 10px;\n}\n.pages_container__1VAjT .pages_list__dUZWX .pages_filter__23tdn .pages_groupBtn__22z3I button:last-child {\n  border-radius: 0 10px 10px 0;\n}\n.pages_container__1VAjT .pages_list__dUZWX .pages_filter__23tdn .pages_groupBtn__22z3I .pages_active__2FZsa {\n  background-color: var(--orange-100);\n  color: var(--orange-700);\n}", "",{"version":3,"sources":["webpack://pages.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,mBAAA;EAEA,kBAAA;EACA,QAAA;EAEA,oBAAA;EAEA,yBAAA;AAFJ;AAII;EACI,aAAA;EACA,sBAAA;AAFR;AAIQ;EACI,aAAA;EACA,mBAAA;AAFZ;AAIY;EACI,aAAA;EACA,mBAAA;EAEA,mBAAA;EACA,6BAAA;EAEA,YAAA;EACA,YAAA;EAEA,sBAAA;EACA,mBAAA;EAEA,4CAAA;AANhB;AAQgB;EACI,kBAAA;EACA,gBAAA;EACA,gBAAA;EAEA,sBAAA;EAEA,aAAA;AARpB;AAUoB;EACI,mCAAA;EACA,wBAAA;EAEA,oBAAA;AATxB;AAYoB;EACI,4BAAA;AAVxB;AAaoB;EACI,4BAAA;AAXxB;AAegB;EACI,mCAAA;EACA,wBAAA;AAbpB","sourcesContent":[".container {\r\n    display: flex;\r\n    flex-direction: row;\r\n\r\n    position: absolute;\r\n    right: 0;\r\n\r\n    padding: 0.5rem 2rem;\r\n\r\n    width: calc(100vw - 4rem);\r\n\r\n    .list {\r\n        display: flex;\r\n        flex-direction: column;\r\n    \r\n        .filter {\r\n            display: flex;\r\n            flex-direction: row;\r\n    \r\n            .groupBtn {\r\n                display: flex;\r\n                flex-direction: row;\r\n                \r\n                align-items: center;\r\n                justify-content: space-around;\r\n                \r\n                width: 475px;\r\n                height: 3rem;\r\n                \r\n                background-color: #FFF;\r\n                border-radius: 10px;\r\n                \r\n                box-shadow: 3px 3px 15px rgba($color: #000000, $alpha: 0.03);\r\n                \r\n                button {\r\n                    font-size: 0.75rem;\r\n                    font-weight: 500;\r\n                    border-radius: 0;\r\n                    \r\n                    color: var(--gray-300);\r\n                    \r\n                    padding: 1rem;\r\n                    \r\n                    &:hover {\r\n                        background-color: var(--orange-100);\r\n                        color: var(--orange-700);\r\n                        \r\n                        transition: all 0.2s;\r\n                    }\r\n                    \r\n                    &:first-child {\r\n                        border-radius: 10px 0 0 10px;\r\n                    }\r\n                    \r\n                    &:last-child {\r\n                        border-radius: 0 10px 10px 0;\r\n                    }\r\n                }\r\n                \r\n                .active {\r\n                    background-color: var(--orange-100);\r\n                    color: var(--orange-700);\r\n                }\r\n            }\r\n\r\n            p {\r\n                \r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "pages_container__1VAjT",
	"list": "pages_list__dUZWX",
	"filter": "pages_filter__23tdn",
	"groupBtn": "pages_groupBtn__22z3I",
	"active": "pages_active__2FZsa"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BhZ2VzLm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsb0hBQXlEO0FBQ25HO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyw0QkFBNEIsa0JBQWtCLHdCQUF3Qix1QkFBdUIsYUFBYSx5QkFBeUIsOEJBQThCLEdBQUcsOENBQThDLGtCQUFrQiwyQkFBMkIsR0FBRyxtRUFBbUUsa0JBQWtCLHdCQUF3QixHQUFHLDBGQUEwRixrQkFBa0Isd0JBQXdCLHdCQUF3QixrQ0FBa0MsaUJBQWlCLGlCQUFpQiwyQkFBMkIsd0JBQXdCLGlEQUFpRCxHQUFHLGlHQUFpRyx1QkFBdUIscUJBQXFCLHFCQUFxQiwyQkFBMkIsa0JBQWtCLEdBQUcsdUdBQXVHLHdDQUF3Qyw2QkFBNkIseUJBQXlCLEdBQUcsNkdBQTZHLGlDQUFpQyxHQUFHLDRHQUE0RyxpQ0FBaUMsR0FBRywrR0FBK0csd0NBQXdDLDZCQUE2QixHQUFHLE9BQU8sa0ZBQWtGLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxzQ0FBc0Msc0JBQXNCLDRCQUE0QiwrQkFBK0IsaUJBQWlCLGlDQUFpQyxzQ0FBc0MsbUJBQW1CLDBCQUEwQixtQ0FBbUMsNkJBQTZCLDhCQUE4QixvQ0FBb0MsbUNBQW1DLGtDQUFrQyx3Q0FBd0MsNERBQTRELGtEQUFrRCxxREFBcUQsaUNBQWlDLCtEQUErRCx3Q0FBd0MscUdBQXFHLGdEQUFnRCwyQ0FBMkMseUNBQXlDLHlDQUF5Qyx1RUFBdUUsOERBQThELHlEQUF5RCxnRUFBZ0UscURBQXFELDZFQUE2RSx5QkFBeUIsK0RBQStELHlEQUF5RCx5QkFBeUIsOERBQThELHlEQUF5RCx5QkFBeUIscUJBQXFCLGlEQUFpRCw0REFBNEQsaURBQWlELHFCQUFxQixpQkFBaUIsdUJBQXVCLHFDQUFxQyxhQUFhLFNBQVMsS0FBSyxtQkFBbUI7QUFDdm5JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb3N0dW1lcnMuYzVjMTMzMzRmNWJkODhmNzc0MjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wYWdlc19jb250YWluZXJfXzFWQWpUIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNHJlbSk7XFxufVxcbi5wYWdlc19jb250YWluZXJfXzFWQWpUIC5wYWdlc19saXN0X19kVVpXWCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnBhZ2VzX2NvbnRhaW5lcl9fMVZBalQgLnBhZ2VzX2xpc3RfX2RVWldYIC5wYWdlc19maWx0ZXJfXzIzdGRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4ucGFnZXNfY29udGFpbmVyX18xVkFqVCAucGFnZXNfbGlzdF9fZFVaV1ggLnBhZ2VzX2ZpbHRlcl9fMjN0ZG4gLnBhZ2VzX2dyb3VwQnRuX18yMnozSSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiA0NzVweDtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XFxufVxcbi5wYWdlc19jb250YWluZXJfXzFWQWpUIC5wYWdlc19saXN0X19kVVpXWCAucGFnZXNfZmlsdGVyX18yM3RkbiAucGFnZXNfZ3JvdXBCdG5fXzIyejNJIGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5LTMwMCk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4ucGFnZXNfY29udGFpbmVyX18xVkFqVCAucGFnZXNfbGlzdF9fZFVaV1ggLnBhZ2VzX2ZpbHRlcl9fMjN0ZG4gLnBhZ2VzX2dyb3VwQnRuX18yMnozSSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLTEwMCk7XFxuICBjb2xvcjogdmFyKC0tb3JhbmdlLTcwMCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuLnBhZ2VzX2NvbnRhaW5lcl9fMVZBalQgLnBhZ2VzX2xpc3RfX2RVWldYIC5wYWdlc19maWx0ZXJfXzIzdGRuIC5wYWdlc19ncm91cEJ0bl9fMjJ6M0kgYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XFxufVxcbi5wYWdlc19jb250YWluZXJfXzFWQWpUIC5wYWdlc19saXN0X19kVVpXWCAucGFnZXNfZmlsdGVyX18yM3RkbiAucGFnZXNfZ3JvdXBCdG5fXzIyejNJIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XFxufVxcbi5wYWdlc19jb250YWluZXJfXzFWQWpUIC5wYWdlc19saXN0X19kVVpXWCAucGFnZXNfZmlsdGVyX18yM3RkbiAucGFnZXNfZ3JvdXBCdG5fXzIyejNJIC5wYWdlc19hY3RpdmVfXzJGWnNhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZS0xMDApO1xcbiAgY29sb3I6IHZhcigtLW9yYW5nZS03MDApO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vcGFnZXMubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFFQSxvQkFBQTtFQUVBLHlCQUFBO0FBRko7QUFJSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUZSO0FBSVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFGWjtBQUlZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBRUEsbUJBQUE7RUFDQSw2QkFBQTtFQUVBLFlBQUE7RUFDQSxZQUFBO0VBRUEsc0JBQUE7RUFDQSxtQkFBQTtFQUVBLDRDQUFBO0FBTmhCO0FBUWdCO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsc0JBQUE7RUFFQSxhQUFBO0FBUnBCO0FBVW9CO0VBQ0ksbUNBQUE7RUFDQSx3QkFBQTtFQUVBLG9CQUFBO0FBVHhCO0FBWW9CO0VBQ0ksNEJBQUE7QUFWeEI7QUFhb0I7RUFDSSw0QkFBQTtBQVh4QjtBQWVnQjtFQUNJLG1DQUFBO0VBQ0Esd0JBQUE7QUFicEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcclxcblxcclxcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDRyZW0pO1xcclxcblxcclxcbiAgICAubGlzdCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgXFxyXFxuICAgICAgICAuZmlsdGVyIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgIC5ncm91cEJ0biB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA0NzVweDtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTVweCByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjAzKTtcXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWdyYXktMzAwKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLTEwMCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLW9yYW5nZS03MDApO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAxMHB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgIC5hY3RpdmUge1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLTEwMCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tb3JhbmdlLTcwMCk7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgcCB7XFxyXFxuICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJwYWdlc19jb250YWluZXJfXzFWQWpUXCIsXG5cdFwibGlzdFwiOiBcInBhZ2VzX2xpc3RfX2RVWldYXCIsXG5cdFwiZmlsdGVyXCI6IFwicGFnZXNfZmlsdGVyX18yM3RkblwiLFxuXHRcImdyb3VwQnRuXCI6IFwicGFnZXNfZ3JvdXBCdG5fXzIyejNJXCIsXG5cdFwiYWN0aXZlXCI6IFwicGFnZXNfYWN0aXZlX18yRlpzYVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=