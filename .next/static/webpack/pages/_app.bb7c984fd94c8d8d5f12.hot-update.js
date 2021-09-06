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
          lineNumber: 44,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: '{props.title}'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
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
            lineNumber: 56,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: showHideSearchInput,
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.searchBtn,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
              icon: "search",
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.faIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: openNotifications,
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.notificationButton,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.badgeNewNotification,
            children: "99+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
            icon: "bell",
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.faIcon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: newOptions,
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.newDelivery,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, this), isNewOptionsVisible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.newOptionsContainer,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Novo pagamento"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            onClick: on,
            children: "Nova entrega"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 25
        }, this) : null, isModalNewDeliveryVisible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Modals_NewPayment__WEBPACK_IMPORTED_MODULE_8__["default"], {
          onClose: function onClose() {
            setIsModalNewDeliveryVisible(false);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 25
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this), isNotificationsVisible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Modals_Notifications__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClose: function onClose() {
        return setIsNotificationsVisible(false);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 39
    }, this) : null]
  }, void 0, true);
}

_s(Header, "HHwsTBGRxosSVLZW3laKDRpzI28=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJsaWJyYXJ5IiwiYWRkIiwiZmFzIiwiSGVhZGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzTm90aWZpY2F0aW9uc1Zpc2libGUiLCJzZXRJc05vdGlmaWNhdGlvbnNWaXNpYmxlIiwiaXNTZWFyY2hJbnB1dFZpc2libGUiLCJzZXRJc1NlYXJjaElucHV0VmlzaWJsZSIsImlzTW9kYWxOZXdEZWxpdmVyeVZpc2libGUiLCJzZXRJc01vZGFsTmV3RGVsaXZlcnlWaXNpYmxlIiwiaXNOZXdPcHRpb25zVmlzaWJsZSIsInNldElzTmV3T3B0aW9uc1Zpc2libGUiLCJvcGVuTm90aWZpY2F0aW9ucyIsInNob3dIaWRlU2VhcmNoSW5wdXQiLCJuZXdPcHRpb25zIiwic3R5bGVzIiwiaGVhZGVyQ29udGFpbmVyIiwibG9nbyIsImJ1dHRvbnNIZWFkZXIiLCJzZWFyY2hDb250YWluZXIiLCJzaG93U2VhcmNoSW5wdXQiLCJoaWRlU2VhcmNoSW5wdXQiLCJzZWFyY2hCdG4iLCJmYUljb24iLCJub3RpZmljYXRpb25CdXR0b24iLCJiYWRnZU5ld05vdGlmaWNhdGlvbiIsIm5ld0RlbGl2ZXJ5IiwibmV3T3B0aW9uc0NvbnRhaW5lciIsIm9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBQSx5RUFBTyxDQUFDQyxHQUFSLENBQVlDLHFFQUFaO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQyxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUFBLGtCQUMwQkMsc0RBQVEsQ0FBQyxLQUFELENBRGxDO0FBQUEsTUFDM0JDLHNCQUQyQjtBQUFBLE1BQ0hDLHlCQURHOztBQUFBLG1CQUVzQkYsc0RBQVEsQ0FBQyxLQUFELENBRjlCO0FBQUEsTUFFM0JHLG9CQUYyQjtB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QU8sRUFBRUMsRUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRGdCLEdBV2hCLElBOUNSLEVBZ0RLcEIseUJBQXlCLGdCQUN0QixxRUFBQywwREFBRDtBQUNJLGlCQUFPLEVBQUUsbUJBQU07QUFDZkMsd0NBQTRCLENBQUMsS0FBRCxDQUE1QjtBQUNDO0FBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEc0IsR0FNdEIsSUF0RFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUF1RUtMLHNCQUFzQixnQkFBRyxxRUFBQyw2REFBRDtBQUFlLGFBQU8sRUFBRTtBQUFBLGVBQU1DLHlCQUF5QixDQUFDLEtBQUQsQ0FBL0I7QUFBQTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUgsR0FBd0UsSUF2RW5HO0FBQUEsa0JBREo7QUEyRUg7O0dBbEd1QkosTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmJiN2M5ODRmZDk0YzhkOGQ1ZjEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcblxyXG5saWJyYXJ5LmFkZChmYXMpXHJcblxyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSAnLi4vTW9kYWxzL05vdGlmaWNhdGlvbnMnXHJcbmltcG9ydCBOZXdEZWxpdmVyeSBmcm9tICcuLi9Nb2RhbHMvTmV3RGVsaXZlcnknXHJcbmltcG9ydCBOZXdQYXltZW50IGZyb20gJy4uL01vZGFscy9OZXdQYXltZW50J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCBbaXNOb3RpZmljYXRpb25zVmlzaWJsZSwgc2V0SXNOb3RpZmljYXRpb25zVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpc1NlYXJjaElucHV0VmlzaWJsZSwgc2V0SXNTZWFyY2hJbnB1dFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaXNNb2RhbE5ld0RlbGl2ZXJ5VmlzaWJsZSwgc2V0SXNNb2RhbE5ld0RlbGl2ZXJ5VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpc05ld09wdGlvbnNWaXNpYmxlLCBzZXRJc05ld09wdGlvbnNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuXHJcbiAgICBjb25zdCBvcGVuTm90aWZpY2F0aW9ucyA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc05vdGlmaWNhdGlvbnNWaXNpYmxlKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0hpZGVTZWFyY2hJbnB1dCA9ICgpID0+IHtcclxuICAgICAgICBpZihpc1NlYXJjaElucHV0VmlzaWJsZSkge1xyXG4gICAgICAgICAgICBzZXRJc1NlYXJjaElucHV0VmlzaWJsZShmYWxzZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc1NlYXJjaElucHV0VmlzaWJsZSh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdPcHRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzTmV3T3B0aW9uc1Zpc2libGUodHJ1ZSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTE1LjcxfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvbG9nby9vcmFuZ2UtbG9nby5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgzPnsne3Byb3BzLnRpdGxlfSd9PC9oMz4gXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zSGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBlc3F1aXNhclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc1NlYXJjaElucHV0VmlzaWJsZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtzdHlsZXMuc2hvd1NlYXJjaElucHV0fWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7c3R5bGVzLmhpZGVTZWFyY2hJbnB1dH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dIaWRlU2VhcmNoSW5wdXR9IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEJ0bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzZWFyY2hcIiBjbGFzc05hbWU9e3N0eWxlcy5mYUljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29wZW5Ob3RpZmljYXRpb25zfSBjbGFzc05hbWU9e3N0eWxlcy5ub3RpZmljYXRpb25CdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhZGdlTmV3Tm90aWZpY2F0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDk5K1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5ld0lzc3VlTm90aWZpY2F0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImV4Y2xhbWF0aW9uLWNpcmNsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImJlbGxcIiAgY2xhc3NOYW1lPXtzdHlsZXMuZmFJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtuZXdPcHRpb25zfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmV3RGVsaXZlcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4rPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7aXNOZXdPcHRpb25zVmlzaWJsZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5ld09wdGlvbnNDb250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5vdm8gcGFnYW1lbnRvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3ZhIGVudHJlZ2FcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtpc01vZGFsTmV3RGVsaXZlcnlWaXNpYmxlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmV3UGF5bWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzTW9kYWxOZXdEZWxpdmVyeVZpc2libGUoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtpc05vdGlmaWNhdGlvbnNWaXNpYmxlID8gPE5vdGlmaWNhdGlvbnMgb25DbG9zZT17KCkgPT4gc2V0SXNOb3RpZmljYXRpb25zVmlzaWJsZShmYWxzZSl9IC8+IDogbnVsbH1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=