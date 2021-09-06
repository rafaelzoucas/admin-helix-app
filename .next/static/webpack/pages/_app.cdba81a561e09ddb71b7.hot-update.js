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
    setIsNewOptionsVisible(false);
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
          lineNumber: 54,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: '{props.title}'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
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
            lineNumber: 66,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: showHideSearchInput,
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.searchBtn,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
              icon: "search",
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.faIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: openNotifications,
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.notificationButton,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.badgeNewNotification,
            children: "99+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
            icon: "bell",
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.faIcon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: newOptions,
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.newDelivery,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "+"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, this), isNewOptionsVisible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.newOptionsContainer,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            onClick: newPayment,
            children: "Novo pagamento"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            onClick: newDelivery,
            children: "Nova entrega"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 25
        }, this) : null, isNewPaymentVisible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Modals_NewPayment__WEBPACK_IMPORTED_MODULE_9__["default"], {
          onClose: function onClose() {
            setIsNewPaymentVisible(false);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 25
        }, this) : null, isModalNewDeliveryVisible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Modals_NewDelivery__WEBPACK_IMPORTED_MODULE_8__["default"], {
          onClose: function onClose() {
            setIsModalNewDeliveryVisible(false);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 25
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, this), isNotificationsVisible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Modals_Notifications__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClose: function onClose() {
        return setIsNotificationsVisible(false);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJsaWJyYXJ5IiwiYWRkIiwiZmFzIiwiSGVhZGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzTm90aWZpY2F0aW9uc1Zpc2libGUiLCJzZXRJc05vdGlmaWNhdGlvbnNWaXNpYmxlIiwiaXNTZWFyY2hJbnB1dFZpc2libGUiLCJzZXRJc1NlYXJjaElucHV0VmlzaWJsZSIsImlzTW9kYWxOZXdEZWxpdmVyeVZpc2libGUiLCJzZXRJc01vZGFsTmV3RGVsaXZlcnlWaXNpYmxlIiwiaXNOZXdPcHRpb25zVmlzaWJsZSIsInNldElzTmV3T3B0aW9uc1Zpc2libGUiLCJpc05ld1BheW1lbnRWaXNpYmxlIiwic2V0SXNOZXdQYXltZW50VmlzaWJsZSIsIm9wZW5Ob3RpZmljYXRpb25zIiwic2hvd0hpZGVTZWFyY2hJbnB1dCIsIm5ld0RlbGl2ZXJ5IiwibmV3UGF5bWVudCIsIm5ld09wdGlvbnMiLCJzdHlsZXMiLCJoZWFkZXJDb250YWluZXIiLCJsb2dvIiwiYnV0dG9uc0hlYWRlciIsInNlYXJjaENvbnRhaW5lciIsInNob3dTZWFyY2hJbnB1dCIsImhpZGVTZWFyY2hJbnB1dCIsInNlYXJjaEJ0biIsImZhSWNvbiIsIm5vdGlmaWNhdGlvbkJ1dHRvbiIsImJhZGdlTmV3Tm90aWZpY2F0aW9uIiwibmV3T3B0aW9uc0NvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUFBLHlFQUFPLENBQUNDLEdBQVIsQ0FBWUMscUVBQVo7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0MsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBQTs7QUFBQSxrQkFDMEJDLHNEQUFRLENBQUMsS0FBRCxDQURsQztBQUFBLE1BQzNCQyxzQkFEMkI7QUFBQSxNQUNIQyx5QkFERzs7QUFBQSxtQkFFc0JGLHNEQUFRLENBQUMsS0FBRCxDQUY5QjtBQUFBLE1BRTNCRyxvQkFGMkI7QUFBQSxNQUVMQyx1QkFGSzs7QUFBQSxtQkFHZ0NKLHNEQUFRLENBQUMsS0FBRCxDQUh4QztBQUFBLE1BRzNCSyx5QkFIMkI7QUFBQSxNQUdBQyw0QkFIQTs7QUFBQSxtQkFJb0JOLHNEQUFRLENBQUMsS0FBRCxDQUo1QjtBQUFBLE1BSTNCTyxtQkFKMkI7QUFBQSxNQUlOQyxzQkFKTTs7QUFBQSxtQkFLb0JSLHNEQUFRLENBQUMsS0FBRCxDQUw1QjtBQUFBLE1BSzNCUyxtQkFMMkI7QUFBQSxNQUtOQyxzQkFMTTs7QUFRbEMsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzVCVCw2QkFBeUIsQ0FBQyxJQUFELENBQXpCO0FBQ0gsR0FGRDs7QUFJQSxNQUFNVSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDOUIsUUFBR1Qsb0JBQUgsRUFBeUI7QUFDckJDLDZCQUF1QixDQUFDLEtBQUQsQ0FBdkI7QUFDSCxLQUZELE1BRU87QUFDSEEsNkJBQXVCLENBQUMsSUFBRCxDQUF2QjtBQUNIO0FBQ0osR0FORDs7QUFRQSxNQUFNUyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCUCxnQ0FBNEIsQ0FBQyxJQUFELENBQTVCO0FBQ0FFLDBCQUFzQixDQUFDLEtBQUQsQ0FBdEI7QUFDSCxHQUhEOztBQUtBLE1BQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckJKLDBCQUFzQixDQUFDLElBQUQsQ0FBdEI7QUFDSCxHQUZEOztBQUlBLE1BQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckJQLDBCQUFzQixDQUFDLElBQUQsQ0FBdEI7QUFDSCxHQUZEOztBQUlBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVRLDBEQUFNLENBQUNDLGVBQXZCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFRCwwREFBTSxDQUFDRSxJQUF2QjtBQUFBLCtCQUNJLHFFQUFDLGlEQUFEO0FBQ0ksZUFBSyxFQUFFLE1BRFg7QUFFSSxnQkFBTSxFQUFFLEVBRlo7QUFHSSxhQUFHLEVBQUMsMkJBSFI7QUFJSSxhQUFHLEVBQUM7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBVUk7QUFBQSxrQkFBSztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWSixlQVlJO0FBQUssaUJBQVMsRUFBRUYsMERBQU0sQ0FBQ0csYUFBdkI7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUVILDBEQUFNLENBQUNJLGVBQXZCO0FBQUEsa0NBQ0k7QUFDSSxnQkFBSSxFQUFDLE1BRFQ7QUFFSSx1QkFBVyxFQUFDLFdBRmhCO0FBR0kscUJBQVMsWUFBS2pCLG9CQUFvQixhQUMzQmEsMERBQU0sQ0FBQ0ssZUFEb0IsY0FHM0JMLDBEQUFNLENBQUNNLGVBSG9CLENBQXpCO0FBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQVVJO0FBQVEsbUJBQU8sRUFBRVYsbUJBQWpCO0FBQXNDLHFCQUFTLEVBQUVJLDBEQUFNLENBQUNPLFNBQXhEO0FBQUEsbUNBQ0kscUVBQUMsOEVBQUQ7QUFBaUIsa0JBQUksRUFBQyxRQUF0QjtBQUErQix1QkFBUyxFQUFFUCwwREFBTSxDQUFDUTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFnQkk7QUFBUSxpQkFBTyxFQUFFYixpQkFBakI7QUFBb0MsbUJBQVMsRUFBRUssMERBQU0sQ0FBQ1Msa0JBQXREO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFFVCwwREFBTSxDQUFDVSxvQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFTSSxxRUFBQyw4RUFBRDtBQUFpQixnQkFBSSxFQUFDLE1BQXRCO0FBQThCLHFCQUFTLEVBQUVWLDBEQUFNLENBQUNRO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCSixlQTRCSTtBQUNJLGlCQUFPLEVBQUVULFVBRGI7QUFFSSxtQkFBUyxFQUFFQywwREFBTSxDQUFDSCxXQUZ0QjtBQUFBLGlDQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE1QkosRUFtQ0tOLG1CQUFtQixnQkFDaEI7QUFDSSxtQkFBUyxFQUFFUywwREFBTSxDQUFDVyxtQkFEdEI7QUFBQSxrQ0FHSTtBQUFHLG1CQUFPLEVBQUViLFVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEosZUFJSTtBQUFHLG1CQUFPLEVBQUVELFdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURnQixHQU9oQixJQTFDUixFQTRDS0osbUJBQW1CLGdCQUNoQixxRUFBQywwREFBRDtBQUNJLGlCQUFPLEVBQUUsbUJBQU07QUFDWEMsa0NBQXNCLENBQUMsS0FBRCxDQUF0QjtBQUNIO0FBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEZ0IsR0FNaEIsSUFsRFIsRUFvREtMLHlCQUF5QixnQkFDdEIscUVBQUMsMkRBQUQ7QUFDSSxpQkFBTyxFQUFFLG1CQUFNO0FBQ1hDLHdDQUE0QixDQUFDLEtBQUQsQ0FBNUI7QUFDSDtBQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRHNCLEdBTXRCLElBMURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBMkVLTCxzQkFBc0IsZ0JBQUcscUVBQUMsNkRBQUQ7QUFBZSxhQUFPLEVBQUU7QUFBQSxlQUFNQyx5QkFBeUIsQ0FBQyxLQUFELENBQS9CO0FBQUE7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFILEdBQXdFLElBM0VuRztBQUFBLGtCQURKO0FBK0VIOztHQWhIdUJKLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jZGJhODFhNTYxZTA5ZGRiNzFiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmltcG9ydCB7IGxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHsgZmFzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5cclxubGlicmFyeS5hZGQoZmFzKVxyXG5cclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4uL01vZGFscy9Ob3RpZmljYXRpb25zJ1xyXG5pbXBvcnQgTmV3RGVsaXZlcnkgZnJvbSAnLi4vTW9kYWxzL05ld0RlbGl2ZXJ5J1xyXG5pbXBvcnQgTmV3UGF5bWVudCBmcm9tICcuLi9Nb2RhbHMvTmV3UGF5bWVudCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xyXG4gICAgY29uc3QgW2lzTm90aWZpY2F0aW9uc1Zpc2libGUsIHNldElzTm90aWZpY2F0aW9uc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaXNTZWFyY2hJbnB1dFZpc2libGUsIHNldElzU2VhcmNoSW5wdXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lzTW9kYWxOZXdEZWxpdmVyeVZpc2libGUsIHNldElzTW9kYWxOZXdEZWxpdmVyeVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaXNOZXdPcHRpb25zVmlzaWJsZSwgc2V0SXNOZXdPcHRpb25zVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpc05ld1BheW1lbnRWaXNpYmxlLCBzZXRJc05ld1BheW1lbnRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuXHJcbiAgICBjb25zdCBvcGVuTm90aWZpY2F0aW9ucyA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc05vdGlmaWNhdGlvbnNWaXNpYmxlKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0hpZGVTZWFyY2hJbnB1dCA9ICgpID0+IHtcclxuICAgICAgICBpZihpc1NlYXJjaElucHV0VmlzaWJsZSkge1xyXG4gICAgICAgICAgICBzZXRJc1NlYXJjaElucHV0VmlzaWJsZShmYWxzZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc1NlYXJjaElucHV0VmlzaWJsZSh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdEZWxpdmVyeSA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc01vZGFsTmV3RGVsaXZlcnlWaXNpYmxlKHRydWUpXHJcbiAgICAgICAgc2V0SXNOZXdPcHRpb25zVmlzaWJsZShmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdQYXltZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzTmV3UGF5bWVudFZpc2libGUodHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdPcHRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzTmV3T3B0aW9uc1Zpc2libGUodHJ1ZSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTE1LjcxfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvbG9nby9vcmFuZ2UtbG9nby5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgzPnsne3Byb3BzLnRpdGxlfSd9PC9oMz4gXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zSGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBlc3F1aXNhclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc1NlYXJjaElucHV0VmlzaWJsZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtzdHlsZXMuc2hvd1NlYXJjaElucHV0fWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7c3R5bGVzLmhpZGVTZWFyY2hJbnB1dH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dIaWRlU2VhcmNoSW5wdXR9IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEJ0bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzZWFyY2hcIiBjbGFzc05hbWU9e3N0eWxlcy5mYUljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29wZW5Ob3RpZmljYXRpb25zfSBjbGFzc05hbWU9e3N0eWxlcy5ub3RpZmljYXRpb25CdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhZGdlTmV3Tm90aWZpY2F0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDk5K1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5ld0lzc3VlTm90aWZpY2F0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImV4Y2xhbWF0aW9uLWNpcmNsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImJlbGxcIiAgY2xhc3NOYW1lPXtzdHlsZXMuZmFJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtuZXdPcHRpb25zfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmV3RGVsaXZlcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4rPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7aXNOZXdPcHRpb25zVmlzaWJsZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5ld09wdGlvbnNDb250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9e25ld1BheW1lbnR9Pk5vdm8gcGFnYW1lbnRvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17bmV3RGVsaXZlcnl9Pk5vdmEgZW50cmVnYTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtpc05ld1BheW1lbnRWaXNpYmxlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmV3UGF5bWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc05ld1BheW1lbnRWaXNpYmxlKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtpc01vZGFsTmV3RGVsaXZlcnlWaXNpYmxlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmV3RGVsaXZlcnkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNNb2RhbE5ld0RlbGl2ZXJ5VmlzaWJsZShmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2lzTm90aWZpY2F0aW9uc1Zpc2libGUgPyA8Tm90aWZpY2F0aW9ucyBvbkNsb3NlPXsoKSA9PiBzZXRJc05vdGlmaWNhdGlvbnNWaXNpYmxlKGZhbHNlKX0gLz4gOiBudWxsfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==