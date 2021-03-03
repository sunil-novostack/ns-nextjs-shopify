webpackHotUpdate_N_E("pages/settings/price-rules",{

/***/ "./pages/settings/price-rules.js":
/*!***************************************!*\
  !*** ./pages/settings/price-rules.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pricerules; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/NavigationBar */ "./components/NavigationBar.js");








var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-nextjs-shopify\\pages\\settings\\price-rules.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Pricerules = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Pricerules, _Component);

  var _super = _createSuper(Pricerules);

  function Pricerules(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Pricerules);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleProductPriceHike", function (value) {
      _this.setState({
        productPriceHike: value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handlePricehikeconditional", function (value) {
      _this.setState({
        pricehikeconditional: value
      });
    });

    _this.state = {
      options: [{
        label: 'MULTIPLIER',
        value: '*'
      }, {
        label: 'FIXED',
        value: '+'
      }],
      pricehikeconditional: '*',
      productPriceHike: ''
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Pricerules, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Frame"], {
        navigation: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
          settings: true,
          settingPricingRule: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }, this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Page"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
            sectioned: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Form"], {
              name: "price-rules",
              method: "post",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
                  alignment: "center",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"].Item, {
                    fill: true,
                    children: "Product Price"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                    columnNumber: 29
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"].Item, {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
                      connectedLeft: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        children: ["COST (USD) ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: this.state.pricehikeconditional
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 49,
                          columnNumber: 56
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 48,
                        columnNumber: 41
                      }, this),
                      name: "productPriceHike",
                      type: "text",
                      value: this.state.productPriceHike,
                      onChange: this.handleProductPriceHike,
                      connectedRight: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Select"], {
                        name: "pricehikeconditional",
                        options: this.state.options,
                        onChange: this.handlePricehikeconditional,
                        value: this.state.pricehikeconditional
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 57,
                        columnNumber: 41
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 46,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 29
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 25
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this);
    }
  }]);

  return Pricerules;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MvcHJpY2UtcnVsZXMuanMiXSwibmFtZXMiOlsiUHJpY2VydWxlcyIsInByb3BzIiwidmFsdWUiLCJzZXRTdGF0ZSIsInByb2R1Y3RQcmljZUhpa2UiLCJwcmljZWhpa2Vjb25kaXRpb25hbCIsInN0YXRlIiwib3B0aW9ucyIsImxhYmVsIiwiaGFuZGxlUHJvZHVjdFByaWNlSGlrZSIsImhhbmRsZVByaWNlaGlrZWNvbmRpdGlvbmFsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBVUE7O0lBR3FCQSxVOzs7OztBQUNqQixzQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhCQUFNQSxLQUFOOztBQURjLGlPQVlPLFVBQUNDLEtBQUQsRUFBVTtBQUFDLFlBQUtDLFFBQUwsQ0FBYztBQUFDQyx3QkFBZ0IsRUFBQ0Y7QUFBbEIsT0FBZDtBQUF3QyxLQVoxRDs7QUFBQSxxT0FhVyxVQUFDQSxLQUFELEVBQVU7QUFBQyxZQUFLQyxRQUFMLENBQWM7QUFBQ0UsNEJBQW9CLEVBQUNIO0FBQXRCLE9BQWQ7QUFBNEMsS0FibEU7O0FBRWQsVUFBS0ksS0FBTCxHQUFhO0FBQ1RDLGFBQU8sRUFBQyxDQUNKO0FBQUNDLGFBQUssRUFBQyxZQUFQO0FBQW9CTixhQUFLLEVBQUM7QUFBMUIsT0FESSxFQUVKO0FBQUNNLGFBQUssRUFBQyxPQUFQO0FBQWVOLGFBQUssRUFBQztBQUFyQixPQUZJLENBREM7QUFLVEcsMEJBQW9CLEVBQUMsR0FMWjtBQU1URCxzQkFBZ0IsRUFBQztBQU5SLEtBQWI7QUFGYztBQVVqQjs7Ozs2QkFLTztBQUVKLDBCQUNBLHFFQUFDLHNEQUFEO0FBQ0ksa0JBQVUsZUFDTixxRUFBQyxrRUFBRDtBQUFlLGtCQUFRLEVBQUUsSUFBekI7QUFBK0IsNEJBQWtCLEVBQUU7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGUjtBQUFBLCtCQUtJLHFFQUFDLHFEQUFEO0FBQUEsaUNBQ0EscUVBQUMscURBQUQ7QUFBTSxxQkFBUyxNQUFmO0FBQUEsbUNBQ0kscUVBQUMscURBQUQ7QUFBTSxrQkFBSSxFQUFDLGFBQVg7QUFBeUIsb0JBQU0sRUFBQyxNQUFoQztBQUFBLHFDQUNJLHFFQUFDLDJEQUFEO0FBQUEsdUNBQ0kscUVBQUMsc0RBQUQ7QUFBTywyQkFBUyxFQUFDLFFBQWpCO0FBQUEsMENBQ0kscUVBQUMsc0RBQUQsQ0FBTyxJQUFQO0FBQVksd0JBQUksTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosZUFFSSxxRUFBQyxzREFBRCxDQUFPLElBQVA7QUFBQSwyQ0FDSSxxRUFBQywwREFBRDtBQUNJLG1DQUFhLGVBQ1Q7QUFBQSwrREFDZTtBQUFBLG9DQUFPLEtBQUtFLEtBQUwsQ0FBV0Q7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBRlI7QUFNSSwwQkFBSSxFQUFDLGtCQU5UO0FBT0ksMEJBQUksRUFBQyxNQVBUO0FBUUksMkJBQUssRUFBRSxLQUFLQyxLQUFMLENBQVdGLGdCQVJ0QjtBQVNJLDhCQUFRLEVBQUUsS0FBS0ssc0JBVG5CO0FBVUksb0NBQWMsZUFDVixxRUFBQyx1REFBRDtBQUNJLDRCQUFJLEVBQUMsc0JBRFQ7QUFFSSwrQkFBTyxFQUFFLEtBQUtILEtBQUwsQ0FBV0MsT0FGeEI7QUFHSSxnQ0FBUSxFQUFFLEtBQUtHLDBCQUhuQjtBQUlJLDZCQUFLLEVBQUUsS0FBS0osS0FBTCxDQUFXRDtBQUp0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQTtBQXlDSDs7OztFQTNEbUNNLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NldHRpbmdzL3ByaWNlLXJ1bGVzLmZmYTY2ODFkODM4MmYwZDZjN2UwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIFBhZ2UsXHJcbiAgRnJhbWUsXHJcbiAgQ2FyZCxcclxuICBTZWxlY3QsXHJcbiAgVGV4dEZpZWxkLFxyXG4gIEZvcm0sXHJcbiAgU3RhY2ssXHJcbiAgRm9ybUxheW91dCxcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmljZXJ1bGVzIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBvcHRpb25zOltcclxuICAgICAgICAgICAgICAgIHtsYWJlbDonTVVMVElQTElFUicsdmFsdWU6JyonfSxcclxuICAgICAgICAgICAgICAgIHtsYWJlbDonRklYRUQnLHZhbHVlOicrJ31cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcHJpY2VoaWtlY29uZGl0aW9uYWw6JyonLFxyXG4gICAgICAgICAgICBwcm9kdWN0UHJpY2VIaWtlOicnLFxyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVByb2R1Y3RQcmljZUhpa2UgPSAodmFsdWUpID0+e3RoaXMuc2V0U3RhdGUoe3Byb2R1Y3RQcmljZUhpa2U6dmFsdWV9KX1cclxuICAgIGhhbmRsZVByaWNlaGlrZWNvbmRpdGlvbmFsID0gKHZhbHVlKSA9Pnt0aGlzLnNldFN0YXRlKHtwcmljZWhpa2Vjb25kaXRpb25hbDp2YWx1ZX0pfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhbWVcclxuICAgICAgICAgICAgbmF2aWdhdGlvbj17XHJcbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbkJhciBzZXR0aW5ncz17dHJ1ZX0gc2V0dGluZ1ByaWNpbmdSdWxlPXt0cnVlfS8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxQYWdlPlxyXG4gICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBuYW1lPVwicHJpY2UtcnVsZXNcIiBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBhbGlnbm1lbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtIGZpbGw+UHJvZHVjdCBQcmljZTwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGVkTGVmdD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ09TVCAoVVNEKSA8c3Bhbj57dGhpcy5zdGF0ZS5wcmljZWhpa2Vjb25kaXRpb25hbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0UHJpY2VIaWtlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9kdWN0UHJpY2VIaWtlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVQcm9kdWN0UHJpY2VIaWtlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0ZWRSaWdodD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByaWNlaGlrZWNvbmRpdGlvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLm9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUHJpY2VoaWtlY29uZGl0aW9uYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJpY2VoaWtlY29uZGl0aW9uYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgIDwvRnJhbWU+XHJcbiAgICAgICAgXHJcbiAgICAgICAgKTtcclxuICAgIH0gIFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==