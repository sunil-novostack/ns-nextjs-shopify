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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/NavigationBar */ "./components/NavigationBar.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_14__);










var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-nextjs-shopify\\pages\\settings\\price-rules.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Pricerules = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Pricerules, _Component);

  var _super = _createSuper(Pricerules);

  function Pricerules(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Pricerules);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleProductPriceHike", /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(value) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({
                  priceRules: _objectSpread(_objectSpread({}, _this.state.priceRules), {}, {
                    productPriceHike: value
                  })
                }, function () {
                  _this.setState({
                    settings: _objectSpread(_objectSpread({}, _this.state.settings), {}, {
                      priceRules: _this.state.priceRules
                    })
                  }, function () {
                    try {
                      var response = axios__WEBPACK_IMPORTED_MODULE_13___default()({
                        headers: {
                          'shopname': js_cookie__WEBPACK_IMPORTED_MODULE_14___default.a.get('shopOrigin')
                        },
                        url: '/api/settings',
                        method: 'post',
                        data: _this.state.settings
                      }).then(function (response) {
                        console.log(response);
                      }); //console.log(response)
                    } catch (error) {
                      console.log(error);
                    }
                  });
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handlePricehikeconditional", /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(value) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.setState({
                  priceRules: _objectSpread(_objectSpread({}, _this.state.priceRules), {}, {
                    pricehikeconditional: value
                  })
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    _this.state = {
      options: [{
        label: 'MULTIPLIER',
        value: '*'
      }, {
        label: 'FIXED',
        value: '+'
      }],
      settings: {},
      priceRules: {
        pricehikeconditional: '*',
        productPriceHike: '2'
      }
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Pricerules, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      try {
        var response = axios__WEBPACK_IMPORTED_MODULE_13___default()({
          headers: {
            'shopname': js_cookie__WEBPACK_IMPORTED_MODULE_14___default.a.get('shopOrigin')
          },
          url: '/api/settings',
          method: 'GET'
        }).then(function (response) {
          console.log(response);
          response.data.settings ? _this2.setState({
            settings: response.data.settings
          }) : _this2.setState({
            settings: {}
          });
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Frame"], {
        navigation: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
          settings: true,
          settingPricingRule: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 17
        }, this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Page"], {
          title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Heading"], {
            children: "Setting / Price Rules"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 26
          }, this),
          fullWidth: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Card"], {
            sectioned: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Form"], {
              name: "price-rules",
              method: "post",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["FormLayout"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Stack"], {
                  alignment: "center",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Stack"].Item, {
                    fill: true,
                    children: "Product Price Margin"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 29
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Stack"].Item, {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
                      connectedLeft: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Button"], {
                        disabled: true,
                        children: ["COST (USD)", this.state.priceRules.pricehikeconditional == '*' ? ' x ' : ' + ']
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 119,
                        columnNumber: 45
                      }, this),
                      name: "productPriceHike",
                      type: "text",
                      value: this.state.priceRules.productPriceHike,
                      onChange: this.handleProductPriceHike,
                      connectedRight: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Select"], {
                        name: "pricehikeconditional",
                        options: this.state.options,
                        onChange: this.handlePricehikeconditional,
                        value: this.state.priceRules.pricehikeconditional
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 136,
                        columnNumber: 41
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 117,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 116,
                    columnNumber: 29
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 25
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this);
    }
  }]);

  return Pricerules;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MvcHJpY2UtcnVsZXMuanMiXSwibmFtZXMiOlsiUHJpY2VydWxlcyIsInByb3BzIiwidmFsdWUiLCJzZXRTdGF0ZSIsInByaWNlUnVsZXMiLCJzdGF0ZSIsInByb2R1Y3RQcmljZUhpa2UiLCJzZXR0aW5ncyIsInJlc3BvbnNlIiwiYXhpb3MiLCJoZWFkZXJzIiwiQ29va2llcyIsImdldCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicHJpY2VoaWtlY29uZGl0aW9uYWwiLCJvcHRpb25zIiwibGFiZWwiLCJoYW5kbGVQcm9kdWN0UHJpY2VIaWtlIiwiaGFuZGxlUHJpY2VoaWtlY29uZGl0aW9uYWwiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBWUE7QUFDQTtBQUNBOztJQUVxQkEsVTs7Ozs7QUFDakIsc0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDZCw4QkFBTUEsS0FBTjs7QUFEYztBQUFBLGtNQXdDTyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3JCLHNCQUFLQyxRQUFMLENBQWM7QUFDTkMsNEJBQVUsa0NBQ0gsTUFBS0MsS0FBTCxDQUFXRCxVQURSO0FBRU5FLG9DQUFnQixFQUFFSjtBQUZaO0FBREosaUJBQWQsRUFLRyxZQUFNO0FBQ0wsd0JBQUtDLFFBQUwsQ0FBYztBQUNWSSw0QkFBUSxrQ0FDRCxNQUFLRixLQUFMLENBQVdFLFFBRFY7QUFFSkgsZ0NBQVUsRUFBQyxNQUFLQyxLQUFMLENBQVdEO0FBRmxCO0FBREUsbUJBQWQsRUFLRyxZQUFNO0FBQ0wsd0JBQUc7QUFDQywwQkFBTUksUUFBUSxHQUFHQyw2Q0FBSyxDQUFDO0FBQ25CQywrQkFBTyxFQUFDO0FBQ0osc0NBQVdDLGlEQUFPLENB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MDdjZDJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIFBhZ2UsXHJcbiAgRnJhbWUsXHJcbiAgQ2FyZCxcclxuICBTZWxlY3QsXHJcbiAgVGV4dEZpZWxkLFxyXG4gIEZvcm0sXHJcbiAgU3RhY2ssXHJcbiAgRm9ybUxheW91dCxcclxuICBCdXR0b24sXHJcbiAgSGVhZGluZyxcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaWNlcnVsZXMgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnM6W1xyXG4gICAgICAgICAgICAgICAge2xhYmVsOidNVUxUSVBMSUVSJyx2YWx1ZTonKid9LFxyXG4gICAgICAgICAgICAgICAge2xhYmVsOidGSVhFRCcsdmFsdWU6JysnfVxyXG4gICAgICAgICAgICBdLCAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXR0aW5nczp7fSxcclxuICAgICAgICAgICAgcHJpY2VSdWxlcyA6IHtcclxuICAgICAgICAgICAgICAgIHByaWNlaGlrZWNvbmRpdGlvbmFsOicqJyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RQcmljZUhpa2U6JzInLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBheGlvcyh7XHJcbiAgICAgICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3Nob3BuYW1lJzpDb29raWVzLmdldCgnc2hvcE9yaWdpbicpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdXJsOicvYXBpL3NldHRpbmdzJyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJywgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5zZXR0aW5nc1xyXG4gICAgICAgICAgICAgICAgPyBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6cmVzcG9uc2UuZGF0YS5zZXR0aW5nc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOnt9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUHJvZHVjdFByaWNlSGlrZSA9IGFzeW5jICh2YWx1ZSkgPT57XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBwcmljZVJ1bGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5wcmljZVJ1bGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RQcmljZUhpa2U6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOntcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnNldHRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlUnVsZXM6dGhpcy5zdGF0ZS5wcmljZVJ1bGVzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF4aW9zKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2hvcG5hbWUnOkNvb2tpZXMuZ2V0KCdzaG9wT3JpZ2luJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOicvYXBpL3NldHRpbmdzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOidwb3N0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp0aGlzLnN0YXRlLnNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVQcmljZWhpa2Vjb25kaXRpb25hbCA9IGFzeW5jICh2YWx1ZSkgPT57XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHByaWNlUnVsZXM6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucHJpY2VSdWxlcyxcclxuICAgICAgICAgICAgICAgIHByaWNlaGlrZWNvbmRpdGlvbmFsOiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkgICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGcmFtZVxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uPXtcclxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uQmFyIHNldHRpbmdzPXt0cnVlfSBzZXR0aW5nUHJpY2luZ1J1bGU9e3RydWV9Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPFBhZ2UgdGl0bGU9ezxIZWFkaW5nPlNldHRpbmcgLyBQcmljZSBSdWxlczwvSGVhZGluZz59IGZ1bGxXaWR0aD5cclxuICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gbmFtZT1cInByaWNlLXJ1bGVzXCIgbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgYWxpZ25tZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbSBmaWxsPlByb2R1Y3QgUHJpY2UgTWFyZ2luPC9TdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0ZWRMZWZ0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ09TVCAoVVNEKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucHJpY2VSdWxlcy5wcmljZWhpa2Vjb25kaXRpb25hbD09JyonXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyB4ICdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICsgJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0UHJpY2VIaWtlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcmljZVJ1bGVzLnByb2R1Y3RQcmljZUhpa2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVByb2R1Y3RQcmljZUhpa2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3RlZFJpZ2h0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJpY2VoaWtlY29uZGl0aW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUub3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVQcmljZWhpa2Vjb25kaXRpb25hbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcmljZVJ1bGVzLnByaWNlaGlrZWNvbmRpdGlvbmFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0PiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgICA8L0ZyYW1lPlxyXG4gICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9ICBcclxufSJdLCJzb3VyY2VSb290IjoiIn0=