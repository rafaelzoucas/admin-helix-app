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
/* harmony import */ var _Modals_NewDelivery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Modals/NewDelivery */ "./src/components/Modals/NewDelivery/index.tsx");
/* harmony import */ var _Modals_NewPayment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Modals/NewPayment */ "./src/components/Modals/NewPayment/index.tsx");



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

  var newDelivery = function newDelivery() {
    setIsModalNewDeliveryVisible(true);
  };

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
          lineNumber: 53,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: '{props.title}'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
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
            lineNumber: 65,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: showHideSearchInput,
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.searchBtn,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
              icon: "search",
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.faIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: openNotifications,
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.notificationButton,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.badgeNewNotification,
            children: "99+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
            icon: "bell",
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.faIcon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: newOptions,
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.newDelivery,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, this), isNewOptionsVisible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.newOptionsContainer,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            onClick: newPayment,
            children: "Novo pagamento"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            onClick: newDe,
            children: "Nova entrega"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 25
        }, this) : null, isNewPaymentVisible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Modals_NewPayment__WEBPACK_IMPORTED_MODULE_9__["default"], {
          onClose: function onClose() {
            setIsNewPaymentVisible(false);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 25
        }, this) : null, isModalNewDeliveryVisible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Modals_NewDelivery__WEBPACK_IMPORTED_MODULE_8__["default"], {
          onClose: function onClose() {
            setIsModalNewDeliveryVisible(false);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 25
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, this), isNotificationsVisible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Modals_Notifications__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClose: function onClose() {
        return setIsNotificationsVisible(false);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJsaWJyYXJ5IiwiYWRkIiwiZmFzIiwiSGVhZGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzTm90aWZpY2F0aW9uc1Zpc2libGUiLCJzZXRJc05vdGlmaWNhdGlvbnNWaXNpYmxlIiwiaXNTZWFyY2hJbnB1dFZpc2libGUiLCJzZXRJc1NlYXJjaElucHV0VmlzaWJsZSIsImlzTW9kYWxOZXdEZWxpdmVyeVZpc2libGUiLCJzZXRJc01vZGFsTmV3RGVsaXZlcnlWaXNpYmxlIiwiaXNOZXdPcHRpb25zVmlzaWJsZSIsInNldElzTmV3T3B0aW9uc1Zpc2libGUiLCJpc05ld1BheW1lbnRWaXNpYmxlIiwic2V0SXNOZXdQYXltZW50VmlzaWJsZSIsIm9wZW5Ob3RpZmljYXRpb25zIiwic2hvd0hpZGVTZWFyY2hJbnB1dCIsIm5ld0RlbGl2ZXJ5IiwibmV3UGF5bWVudCIsIm5ld09wdGlvbnMiLCJzdHlsZXMiLCJoZWFkZXJDb250YWluZXIiLCJsb2dvIiwiYnV0dG9uc0hlYWRlciIsInNlYXJjaENvbnRhaW5lciIsInNob3dTZWFyY2hJbnB1dCIsImhpZGVTZWFyY2hJbnB1dCIsInNlYXJjaEJ0biIsImZhSWNvbiIsIm5vdGlmaWNhdGlvbkJ1dHRvbiIsImJhZGdlTmV3Tm90aWZpY2F0aW9uIiwibmV3T3B0aW9uc0NvbnRhaW5lciIsIm5ld0RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQUEseUVBQU8sQ0FBQ0MsR0FBUixDQUFZQyxxRUFBWjtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQyxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUFBLGtCQUMwQkMsc0RBQVEsQ0FBQyxLQUFELENBRGxDO0FBQUEsTUFDM0JDLHNCQUQyQjtBQUFBLE1BQ0hDLHlCQURHOztBQUFBLG1CQUVzQkYsc0RBQVEsQ0FBQyxLQUFELENBRjlCO0FBQUEsTUFFM0JHLG9CQUYyQjtBQUFBLE1BRUxDLHVCQUZLOztBQUFBLG1CQUdnQ0osc0RBQVEsQ0FBQyxLQUFELENBSHhDO0FBQUEsTUFHM0JLLHlCQUgyQjtBQUFBLE1BR0FDLDRCQUhBOztBQUFBLG1CQUlvQk4sc0RBQVEsQ0FBQyxLQUFELENBSjVCO0FBQUEsTUFJM0JPLG1CQUoyQjtBQUFBLE1BSU5DLHNCQUpNOztBQUFBLG1CQUtvQlIsc0RBQVEsQ0FBQyxLQUFELENBTDVCO0FBQUEsTUFLM0JTLG1CQUwyQjtBQUFBLE1BS05DLHNCQUxNOztBQVFsQyxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDNUJULDZCQUF5QixDQUFDLElBQUQsQ0FBekI7QUFDSCxHQUZEOztBQUlBLE1BQU1VLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUM5QixRQUFHVCxvQkFBSCxFQUF5QjtBQUNyQkMsNkJBQXVCLENBQUMsS0FBRCxDQUF2QjtBQUNILEtBRkQsTUFFTztBQUNIQSw2QkFBdUIsQ0FBQyxJQUFELENBQXZCO0FBQ0g7QUFDSixHQU5EOztBQVFBLE1BQU1TLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEJQLGdDQUE0QixDQUFDLElBQUQsQ0FBNUI7QUFDSCxHQUZEOztBQUlBLE1BQU1RLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckJKLDBCQUFzQixDQUFDLElBQUQsQ0FBdEI7QUFDSCxHQUZEOztBQUlBLE1BQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckJQLDBCQUFzQixDQUFDLElBQUQsQ0FBdEI7QUFDSCxHQUZEOztBQUlBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVRLDBEQUFNLENBQUNDLGVBQXZCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFRCwwREFBTSxDQUFDRSxJQUF2QjtBQUFBLCtCQUNJLHFFQUFDLGlEQUFEO0FBQ0ksZUFBSyxFQUFFLE1BRFg7QUFFSSxnQkFBTSxFQUFFLEVBRlo7QUFHSSxhQUFHLEVBQUMsMkJBSFI7QUFJSSxhQUFHLEVBQUM7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBVUk7QUFBQSxrQkFBSztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWSixlQVlJO0FBQUssaUJBQVMsRUFBRUYsMERBQU0sQ0FBQ0csYUFBdkI7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUVILDBEQUFNLENBQUNJLGVBQXZCO0FBQUEsa0NBQ0k7QUFDSSxnQkFBSSxFQUFDLE1BRFQ7QUFFSSx1QkFBVyxFQUFDLFdBRmhCO0FBR0kscUJBQVMsWUFBS2pCLG9CQUFvQixhQUMzQmEsMERBQU0sQ0FBQ0ssZUFEb0IsY0FHM0JMLDBEQUFNLENBQUNNLGVBSG9CLENBQXpCO0FBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQVVJO0FBQVEsbUJBQU8sRUFBRVYsbUJBQWpCO0FBQXNDLHFCQUFTLEVBQUVJLDBEQUFNLENBQUNPLFNBQXhEO0FBQUEsbUNBQ0kscUVBQUMsOEVBQUQ7QUFBaUIsa0JBQUksRUFBQyxRQUF0QjtBQUErQix1QkFBUyxFQUFFUCwwREFBTSxDQUFDUTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFnQkk7QUFBUSxpQkFBTyxFQUFFYixpQkFBakI7QUFBb0MsbUJBQVMsRUFBRUssMERBQU0sQ0FBQ1Msa0JBQXREO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFFVCwwREFBTSxDQUFDVSxvQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFTSSxxRUFBQyw4RUFBRDtBQUFpQixnQkFBSSxFQUFDLE1BQXRCO0FBQThCLHFCQUFTLEVBQUVWLDBEQUFNLENBQUNRO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCSixlQTRCSTtBQUNJLGlCQUFPLEVBQUVULFVBRGI7QUFFSSxtQkFBUyxFQUFFQywwREFBTSxDQUFDSCxXQUZ0QjtBQUFBLGlDQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE1QkosRUFtQ0tOLG1CQUFtQixnQkFDaEI7QUFDSSxtQkFBUyxFQUFFUywwREFBTSxDQUFDVyxtQkFEdEI7QUFBQSxrQ0FHSTtBQUNJLG1CQUFPLEVBQUViLFVBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEosZUFNSTtBQUFHLG1CQUFPLEVBQUVjLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURnQixHQVNoQixJQTVDUixFQThDS25CLG1CQUFtQixnQkFDaEIscUVBQUMsMERBQUQ7QUFDSSxpQkFBTyxFQUFFLG1CQUFNO0FBQ1hDLGtDQUFzQixDQUFDLEtBQUQsQ0FBdEI7QUFDSDtBQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRGdCLEdBTWhCLElBcERSLEVBc0RLTCx5QkFBeUIsZ0JBQ3RCLHFFQUFDLDJEQUFEO0FBQ0ksaUJBQU8sRUFBRSxtQkFBTTtBQUNYQyx3Q0FBNEIsQ0FBQyxLQUFELENBQTVCO0FBQ0g7QUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURzQixHQU10QixJQTVEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQTZFS0wsc0JBQXNCLGdCQUFHLHFFQUFDLDZEQUFEO0FBQWUsYUFBTyxFQUFFO0FBQUEsZUFBTUMseUJBQXlCLENBQUMsS0FBRCxDQUEvQjtBQUFBO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBSCxHQUF3RSxJQTdFbkc7QUFBQSxrQkFESjtBQWlGSDs7R0FqSHVCSixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjE4MGE3YWEzZjc1MDA0NWRjYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuXHJcbmxpYnJhcnkuYWRkKGZhcylcclxuXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tICcuLi9Nb2RhbHMvTm90aWZpY2F0aW9ucydcclxuaW1wb3J0IE5ld0RlbGl2ZXJ5IGZyb20gJy4uL01vZGFscy9OZXdEZWxpdmVyeSdcclxuaW1wb3J0IE5ld1BheW1lbnQgZnJvbSAnLi4vTW9kYWxzL05ld1BheW1lbnQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcclxuICAgIGNvbnN0IFtpc05vdGlmaWNhdGlvbnNWaXNpYmxlLCBzZXRJc05vdGlmaWNhdGlvbnNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lzU2VhcmNoSW5wdXRWaXNpYmxlLCBzZXRJc1NlYXJjaElucHV0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpc01vZGFsTmV3RGVsaXZlcnlWaXNpYmxlLCBzZXRJc01vZGFsTmV3RGVsaXZlcnlWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lzTmV3T3B0aW9uc1Zpc2libGUsIHNldElzTmV3T3B0aW9uc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaXNOZXdQYXltZW50VmlzaWJsZSwgc2V0SXNOZXdQYXltZW50VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblxyXG4gICAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNOb3RpZmljYXRpb25zVmlzaWJsZSh0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dIaWRlU2VhcmNoSW5wdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoaXNTZWFyY2hJbnB1dFZpc2libGUpIHtcclxuICAgICAgICAgICAgc2V0SXNTZWFyY2hJbnB1dFZpc2libGUoZmFsc2UpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNTZWFyY2hJbnB1dFZpc2libGUodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3RGVsaXZlcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNNb2RhbE5ld0RlbGl2ZXJ5VmlzaWJsZSh0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld1BheW1lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNOZXdQYXltZW50VmlzaWJsZSh0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld09wdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNOZXdPcHRpb25zVmlzaWJsZSh0cnVlKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMTUuNzF9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI1fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9sb2dvL29yYW5nZS1sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aDM+eyd7cHJvcHMudGl0bGV9J308L2gzPiBcclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnNIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGVzcXVpc2FyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzU2VhcmNoSW5wdXRWaXNpYmxlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3N0eWxlcy5zaG93U2VhcmNoSW5wdXR9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtzdHlsZXMuaGlkZVNlYXJjaElucHV0fWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0hpZGVTZWFyY2hJbnB1dH0gY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQnRufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInNlYXJjaFwiIGNsYXNzTmFtZT17c3R5bGVzLmZhSWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b3Blbk5vdGlmaWNhdGlvbnN9IGNsYXNzTmFtZT17c3R5bGVzLm5vdGlmaWNhdGlvbkJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFkZ2VOZXdOb3RpZmljYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOTkrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmV3SXNzdWVOb3RpZmljYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiZXhjbGFtYXRpb24tY2lyY2xlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiYmVsbFwiICBjbGFzc05hbWU9e3N0eWxlcy5mYUljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e25ld09wdGlvbnN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZXdEZWxpdmVyeX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPis8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtpc05ld09wdGlvbnNWaXNpYmxlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmV3T3B0aW9uc0NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtuZXdQYXltZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPk5vdm8gcGFnYW1lbnRvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17bmV3RGV9Pk5vdmEgZW50cmVnYTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtpc05ld1BheW1lbnRWaXNpYmxlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmV3UGF5bWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc05ld1BheW1lbnRWaXNpYmxlKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtpc01vZGFsTmV3RGVsaXZlcnlWaXNpYmxlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmV3RGVsaXZlcnkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNNb2RhbE5ld0RlbGl2ZXJ5VmlzaWJsZShmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2lzTm90aWZpY2F0aW9uc1Zpc2libGUgPyA8Tm90aWZpY2F0aW9ucyBvbkNsb3NlPXsoKSA9PiBzZXRJc05vdGlmaWNhdGlvbnNWaXNpYmxlKGZhbHNlKX0gLz4gOiBudWxsfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==