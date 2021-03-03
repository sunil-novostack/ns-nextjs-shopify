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
      var _this2 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Frame"], {
        navigation: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
          settings: true,
          settingPricingRule: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Page"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
            sectioned: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Form"], {
                name: "price-rules",
                method: "post",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
                  label: function label() {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      children: ["COST (USD) ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: _this2.state.pricehikeconditional
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 47,
                        columnNumber: 52
                      }, _this2)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 46,
                      columnNumber: 37
                    }, _this2);
                  },
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
                    lineNumber: 56,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 25
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MvcHJpY2UtcnVsZXMuanMiXSwibmFtZXMiOlsiUHJpY2VydWxlcyIsInByb3BzIiwidmFsdWUiLCJzZXRTdGF0ZSIsInByb2R1Y3RQcmljZUhpa2UiLCJwcmljZWhpa2Vjb25kaXRpb25hbCIsInN0YXRlIiwib3B0aW9ucyIsImxhYmVsIiwiaGFuZGxlUHJvZHVjdFByaWNlSGlrZSIsImhhbmRsZVByaWNlaGlrZWNvbmRpdGlvbmFsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7O0lBR3FCQSxVOzs7OztBQUNqQixzQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhCQUFNQSxLQUFOOztBQURjLGlPQVlPLFVBQUNDLEtBQUQsRUFBVTtBQUFDLFlBQUtDLFFBQUwsQ0FBYztBQUFDQyx3QkFBZ0IsRUFBQ0Y7QUFBbEIsT0FBZDtBQUF3QyxLQVoxRDs7QUFBQSxxT0FhVyxVQUFDQSxLQUFELEVBQVU7QUFBQyxZQUFLQyxRQUFMLENBQWM7QUFBQ0UsNEJBQW9CLEVBQUNIO0FBQXRCLE9BQWQ7QUFBNEMsS0FibEU7O0FBRWQsVUFBS0ksS0FBTCxHQUFhO0FBQ1RDLGFBQU8sRUFBQyxDQUNKO0FBQUNDLGFBQUssRUFBQyxZQUFQO0FBQW9CTixhQUFLLEVBQUM7QUFBMUIsT0FESSxFQUVKO0FBQUNNLGFBQUssRUFBQyxPQUFQO0FBQWVOLGFBQUssRUFBQztBQUFyQixPQUZJLENBREM7QUFLVEcsMEJBQW9CLEVBQUMsR0FMWjtBQU1URCxzQkFBZ0IsRUFBQztBQU5SLEtBQWI7QUFGYztBQVVqQjs7Ozs2QkFLTztBQUFBOztBQUVKLDBCQUNBLHFFQUFDLHNEQUFEO0FBQ0ksa0JBQVUsZUFDTixxRUFBQyxrRUFBRDtBQUFlLGtCQUFRLEVBQUUsSUFBekI7QUFBK0IsNEJBQWtCLEVBQUU7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGUjtBQUFBLCtCQUtJLHFFQUFDLHFEQUFEO0FBQUEsaUNBQ0EscUVBQUMscURBQUQ7QUFBTSxxQkFBUyxNQUFmO0FBQUEsbUNBQ0kscUVBQUMsdURBQUQ7QUFBQSxxQ0FDSSxxRUFBQyxxREFBRDtBQUFNLG9CQUFJLEVBQUMsYUFBWDtBQUF5QixzQkFBTSxFQUFDLE1BQWhDO0FBQUEsdUNBRUkscUVBQUMsMERBQUQ7QUFDSSx1QkFBSyxFQUFFLGlCQUFNO0FBQ1Qsd0NBQ0k7QUFBQSw2REFDZTtBQUFBLGtDQUFPLE1BQUksQ0FBQ0UsS0FBTCxDQUFXRDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFESjtBQUtILG1CQVBMO0FBUUksc0JBQUksRUFBQyxrQkFSVDtBQVNJLHNCQUFJLEVBQUMsTUFUVDtBQVVJLHVCQUFLLEVBQUUsS0FBS0MsS0FBTCxDQUFXRixnQkFWdEI7QUFXSSwwQkFBUSxFQUFFLEtBQUtLLHNCQVhuQjtBQVlJLGdDQUFjLGVBQ1YscUVBQUMsdURBQUQ7QUFDSSx3QkFBSSxFQUFDLHNCQURUO0FBRUksMkJBQU8sRUFBRSxLQUFLSCxLQUFMLENBQVdDLE9BRnhCO0FBR0ksNEJBQVEsRUFBRSxLQUFLRywwQkFIbkI7QUFJSSx5QkFBSyxFQUFFLEtBQUtKLEtBQUwsQ0FBV0Q7QUFKdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBO0FBdUNIOzs7O0VBekRtQ00sK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2V0dGluZ3MvcHJpY2UtcnVsZXMuZDlkOWRiMDkwZDA5M2M3MGYzNmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgUGFnZSxcclxuICBGcmFtZSxcclxuICBMYXlvdXQsXHJcbiAgQ2FyZCxcclxuICBTZWxlY3QsXHJcbiAgVGV4dEZpZWxkLFxyXG4gIEZvcm0sXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhcic7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpY2VydWxlcyBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgb3B0aW9uczpbXHJcbiAgICAgICAgICAgICAgICB7bGFiZWw6J01VTFRJUExJRVInLHZhbHVlOicqJ30sXHJcbiAgICAgICAgICAgICAgICB7bGFiZWw6J0ZJWEVEJyx2YWx1ZTonKyd9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHByaWNlaGlrZWNvbmRpdGlvbmFsOicqJyxcclxuICAgICAgICAgICAgcHJvZHVjdFByaWNlSGlrZTonJyxcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQcm9kdWN0UHJpY2VIaWtlID0gKHZhbHVlKSA9Pnt0aGlzLnNldFN0YXRlKHtwcm9kdWN0UHJpY2VIaWtlOnZhbHVlfSl9XHJcbiAgICBoYW5kbGVQcmljZWhpa2Vjb25kaXRpb25hbCA9ICh2YWx1ZSkgPT57dGhpcy5zZXRTdGF0ZSh7cHJpY2VoaWtlY29uZGl0aW9uYWw6dmFsdWV9KX1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYW1lXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb249e1xyXG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb25CYXIgc2V0dGluZ3M9e3RydWV9IHNldHRpbmdQcmljaW5nUnVsZT17dHJ1ZX0vPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGFnZT5cclxuICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBuYW1lPVwicHJpY2UtcnVsZXNcIiBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ09TVCAoVVNEKSA8c3Bhbj57dGhpcy5zdGF0ZS5wcmljZWhpa2Vjb25kaXRpb25hbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0UHJpY2VIaWtlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnByb2R1Y3RQcmljZUhpa2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVQcm9kdWN0UHJpY2VIaWtlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGVkUmlnaHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByaWNlaGlrZWNvbmRpdGlvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5vcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVQcmljZWhpa2Vjb25kaXRpb25hbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJpY2VoaWtlY29uZGl0aW9uYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L1BhZ2U+XHJcbiAgICAgICAgPC9GcmFtZT5cclxuICAgICAgICBcclxuICAgICAgICApO1xyXG4gICAgfSAgXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9