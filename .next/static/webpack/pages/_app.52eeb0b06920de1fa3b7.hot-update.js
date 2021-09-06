webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Header/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Modals_Notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Modals/Notifications */ "./src/components/Modals/Notifications/index.tsx");
/* harmony import */ var _Modals_NewPayment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Modals/NewPayment */ "./src/components/Modals/NewPayment/index.tsx");



var _jsxFileName = "C:\\Users\\Rafael\\Documents\\Dev\\Projects\\helix-app\\admin-helix-app\\src\\components\\Header\\index.tsx",
    _s = $RefreshSig$();






_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["fas"]);




function Header(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isNotificationsVisible = _useState[0],
      setIsNotificationsVisible = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isSearchInputVisible = _useState2[0],
      setIsSearchInputVisible = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isModalNewDeliveryVisible = _useState3[0],
      setIsModalNewDeliveryVisible = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isNewOptionsVisible = _useState4[0],
      setIsNewOptionsVisible = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isNewPaymentVisible = _useState5[0],
      setIsNewPaymentVisible = _useState5[1];

  var openNotifications = function openNotifications() {
    setIsNotificationsVisible(true);
  };

  var showHideSearchInput = function showHideSearchInput() {
    if (isSearchInputVisible) {
      setIsSearchInputVisible(false);
    } else {
      setIsSearchInputVisible(true);
    }
  };

  var newDelivery;

  var newPayment = function newPayment() {
    setIsNewPaymentVisible(true);
  };

  var newOptions = function newOptions() {
    setIsNewOptionsVisible(true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.headerContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.logo,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
          width: 115.71,
          height: 25,
          src: "/img/logo/orange-logo.png",
          alt: "Logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: '{props.title}'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.buttonsHeader,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.searchContainer,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Pesquisar",
            className: "".concat(isSearchInputVisible ? "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.showSearchInput) : "".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.hideSearchInput))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: showHideSearchInput,
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.searchBtn,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
              icon: "search",
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.faIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: openNotifications,
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.notificationButton,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.badgeNewNotification,
            children: "99+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
            icon: "bell",
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.faIcon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: newOptions,
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.newDelivery,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, this), isNewOptionsVisible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.newOptionsContainer,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            onClick: newPayment,
            children: "Novo pagamento"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Nova entrega"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 25
        }, this) : null, isNewPaymentVisible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Modals_NewPayment__WEBPACK_IMPORTED_MODULE_8__["default"], {
          onClose: function onClose() {
            setIsNewPaymentVisible(false);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 25
        }, this) : null, isNewPaymentVisible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Modals_NewPayment__WEBPACK_IMPORTED_MODULE_8__["default"], {
          onClose: function onClose() {
            setIsNewPaymentVisible(false);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 25
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this), isNotificationsVisible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Modals_Notifications__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClose: function onClose() {
        return setIsNotificationsVisible(false);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 39
    }, this) : null]
  }, void 0, true);
}

_s(Header, "hS95xOQcKLnb4YDyjrllezq24lc=");

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJsaWJyYXJ5IiwiYWRkIiwiZmFzIiwiSGVhZGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzTm90aWZpY2F0aW9uc1Zpc2libGUiLCJzZXRJc05vdGlmaWNhdGlvbnNWaXNpYmxlIiwiaXNTZWFyY2hJbnB1dFZpc2libGUiLCJzZXRJc1NlYXJjaElucHV0VmlzaWJsZSIsImlzTW9kYWxOZXdEZWxpdmVyeVZpc2libGUiLCJzZXRJc01vZGFsTmV3RGVsaXZlcnlWaXNpYmxlIiwiaXNOZXdPcHRpb25zVmlzaWJsZSIsInNldElzTmV3T3B0aW9uc1Zpc2libGUiLCJpc05ld1BheW1lbnRWaXNpYmxlIiwic2V0SXNOZXdQYXltZW50VmlzaWJsZSIsIm9wZW5Ob3RpZmljYXRpb25zIiwic2hvd0hpZGVTZWFyY2hJbnB1dCIsIm5ld0RlbGl2ZXJ5IiwibmV3UGF5bWVudCIsIm5ld09wdGlvbnMiLCJzdHlsZXMiLCJoZWFkZXJDb250YWluZXIiLCJsb2dvIiwiYnV0dG9uc0hlYWRlciIsInNlYXJjaENvbnRhaW5lciIsInNob3dTZWFyY2hJbnB1dCIsImhpZGVTZWFyY2hJbnB1dCIsInNlYXJjaEJ0biIsImZhSWNvbiIsIm5vdGlmaWNhdGlvbkJ1dHRvbiIsImJhZGdlTmV3Tm90aWZpY2F0aW9uIiwibmV3T3B0aW9uc0NvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQUEseUVBQU8sQ0FBQ0MsR0FBUixDQUFZQyxxRUFBWjtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0MsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBQTs7QUFBQSxrQkFDMEJDLHNEQUFRLENBQUMsS0FBRCxDQURsQztBQUFBLE1BQzNCQyxzQkFEMkI7QUFBQSxNQUNIQyx5QkFERzs7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SSxtQkFBUyxFQUFFQywwREFBTSxDQUFDSCxXQUZ0QjtBQUFBLGlDQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE1QkosRUFtQ0tOLG1CQUFtQixnQkFDaEI7QUFDSSxtQkFBUyxFQUFFUywwREFBTSxDQUFDVyxtQkFEdEI7QUFBQSxrQ0FHSTtBQUNJLG1CQUFPLEVBQUViLFVBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRGdCLEdBU2hCLElBNUNSLEVBOENLTCxtQkFBbUIsZ0JBQ2hCLHFFQUFDLDBEQUFEO0FBQ0ksaUJBQU8sRUFBRSxtQkFBTTtBQUNYQyxrQ0FBc0IsQ0FBQyxLQUFELENBQXRCO0FBQ0g7QUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURnQixHQU1oQixJQXBEUixFQXNES0QsbUJBQW1CLGdCQUNoQixxRUFBQywwREFBRDtBQUNJLGlCQUFPLEVBQUUsbUJBQU07QUFDWEMsa0NBQXNCLENBQUMsS0FBRCxDQUF0QjtBQUNIO0FBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEZ0IsR0FNaEIsSUE1RFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUE2RUtULHNCQUFzQixnQkFBRyxxRUFBQyw2REFBRDtBQUFlLGFBQU8sRUFBRTtBQUFBLGVBQU1DLHlCQUF5QixDQUFDLEtBQUQsQ0FBL0I7QUFBQTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUgsR0FBd0UsSUE3RW5HO0FBQUEsa0JBREo7QUFpRkg7O0dBL0d1QkosTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjUyZWViMGIwNjkyMGRlMWZhM2I3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcblxyXG5saWJyYXJ5LmFkZChmYXMpXHJcblxyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSAnLi4vTW9kYWxzL05vdGlmaWNhdGlvbnMnXHJcbmltcG9ydCBOZXdEZWxpdmVyeSBmcm9tICcuLi9Nb2RhbHMvTmV3RGVsaXZlcnknXHJcbmltcG9ydCBOZXdQYXltZW50IGZyb20gJy4uL01vZGFscy9OZXdQYXltZW50J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCBbaXNOb3RpZmljYXRpb25zVmlzaWJsZSwgc2V0SXNOb3RpZmljYXRpb25zVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpc1NlYXJjaElucHV0VmlzaWJsZSwgc2V0SXNTZWFyY2hJbnB1dFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaXNNb2RhbE5ld0RlbGl2ZXJ5VmlzaWJsZSwgc2V0SXNNb2RhbE5ld0RlbGl2ZXJ5VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpc05ld09wdGlvbnNWaXNpYmxlLCBzZXRJc05ld09wdGlvbnNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lzTmV3UGF5bWVudFZpc2libGUsIHNldElzTmV3UGF5bWVudFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cclxuICAgIGNvbnN0IG9wZW5Ob3RpZmljYXRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzTm90aWZpY2F0aW9uc1Zpc2libGUodHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93SGlkZVNlYXJjaElucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKGlzU2VhcmNoSW5wdXRWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgIHNldElzU2VhcmNoSW5wdXRWaXNpYmxlKGZhbHNlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzU2VhcmNoSW5wdXRWaXNpYmxlKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld0RlbGl2ZXJ5XHJcblxyXG4gICAgY29uc3QgbmV3UGF5bWVudCA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc05ld1BheW1lbnRWaXNpYmxlKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3T3B0aW9ucyA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc05ld09wdGlvbnNWaXNpYmxlKHRydWUpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezExNS43MX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2xvZ28vb3JhbmdlLWxvZ28ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxoMz57J3twcm9wcy50aXRsZX0nfTwvaDM+IFxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc0hlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQZXNxdWlzYXJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNTZWFyY2hJbnB1dFZpc2libGUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7c3R5bGVzLnNob3dTZWFyY2hJbnB1dH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3N0eWxlcy5oaWRlU2VhcmNoSW5wdXR9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93SGlkZVNlYXJjaElucHV0fSBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hCdG59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwic2VhcmNoXCIgY2xhc3NOYW1lPXtzdHlsZXMuZmFJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvcGVuTm90aWZpY2F0aW9uc30gY2xhc3NOYW1lPXtzdHlsZXMubm90aWZpY2F0aW9uQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWRnZU5ld05vdGlmaWNhdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA5OStcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXdJc3N1ZU5vdGlmaWNhdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJleGNsYW1hdGlvbi1jaXJjbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJiZWxsXCIgIGNsYXNzTmFtZT17c3R5bGVzLmZhSWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bmV3T3B0aW9uc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5ld0RlbGl2ZXJ5fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Kzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2lzTmV3T3B0aW9uc1Zpc2libGUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZXdPcHRpb25zQ29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e25ld1BheW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+Tm92byBwYWdhbWVudG88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ob3ZhIGVudHJlZ2E8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7aXNOZXdQYXltZW50VmlzaWJsZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5ld1BheW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNOZXdQYXltZW50VmlzaWJsZShmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7aXNOZXdQYXltZW50VmlzaWJsZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5ld1BheW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNOZXdQYXltZW50VmlzaWJsZShmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2lzTm90aWZpY2F0aW9uc1Zpc2libGUgPyA8Tm90aWZpY2F0aW9ucyBvbkNsb3NlPXsoKSA9PiBzZXRJc05vdGlmaWNhdGlvbnNWaXNpYmxlKGZhbHNlKX0gLz4gOiBudWxsfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==