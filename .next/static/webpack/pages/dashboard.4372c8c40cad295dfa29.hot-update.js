webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./components/CrawlUrl.js":
/*!********************************!*\
  !*** ./components/CrawlUrl.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CrawlUrl; });
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_13__);










var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-nextjs-shopify\\components\\CrawlUrl.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


 //import firebase  from '../lib/db/Firebase';




var CrawlUrl = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CrawlUrl, _Component);

  var _super = _createSuper(CrawlUrl);

  function CrawlUrl(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CrawlUrl);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSearchChange", function (value) {
      _this.setState({
        searchUrl: value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChangeEcom", function (value) {
      _this.setState({
        selectedEcom: value
      });

      _this.setState({
        searchUrl: ''
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleFecthProductSubmit", /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_event) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({
                  isLoading: true
                });

                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_12___default()({
                  url: '/api/scrap-product-detail?',
                  method: 'GET',
                  params: {
                    url: _this.state.searchUrl,
                    ecom: _this.state.selectedEcom[0],
                    product_id: 0,
                    db_entry: 0
                  }
                }).then(function (response) {
                  _this.setState({
                    foundProduct: true,
                    fetchedProduct: response.data.productDetail,
                    isLoading: false
                  });
                });

              case 3:
                response = _context.sent;

              case 4:
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleAddProduct", /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_event) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                //console.log(this.state.fetchedProduct)
                _this.setState({
                  isLoading: true
                });

                _context2.prev = 1;
                _context2.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_12___default()({
                  headers: {
                    'shopname': js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get('shopOrigin')
                  },
                  url: '/api/products',
                  method: 'post',
                  data: {
                    title: _this.state.fetchedProduct.product_title,
                    description: _this.state.fetchedProduct.description,
                    price: _this.state.fetchedProduct.product_price,
                    images: _this.state.fetchedProduct.images
                  }
                }).then(function (response) {
                  _this.setState({
                    isLoading: false
                  });
                });

              case 4:
                response = _context2.sent;
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](1);
                console.log(_context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 7]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    _this.state = {
      searchUrl: '',
      selectedEcom: ['Ebay'],
      fetchedProduct: null,
      foundProduct: false,
      isLoading: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(CrawlUrl, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Form"], {
        name: "product-fetch-form",
        onSubmit: this.handleFecthProductSubmit,
        method: "post",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["FormLayout"], {
          children: [this.state.isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Loading"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 27
          }, this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"].AnnotatedSection, {
            title: "Extract Product",
            description: "With the help of scrap url you can get product from here to your shop",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Card"], {
              sectioned: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["ChoiceList"], {
                title: "ECOM",
                choices: [{
                  label: 'Ebay',
                  value: 'Ebay'
                }, {
                  label: 'Sams Club',
                  value: 'SamsClub'
                }, {
                  label: 'Boscovs',
                  value: 'Boscovs'
                }, {
                  label: 'Home Depot',
                  value: 'HomeDepot'
                }, {
                  label: 'Bed Bath',
                  value: 'BedBathandBeyond'
                }, {
                  label: 'WalMart',
                  value: 'Walmart'
                }, {
                  label: 'CostCo',
                  value: 'CostCo'
                }],
                name: "ecom",
                selected: this.state.selectedEcom,
                onChange: this.handleChangeEcom
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
                label: "Paste URL Here",
                name: "searchUrl",
                type: "text",
                value: this.state.searchUrl,
                onChange: this.handleSearchChange,
                connectedRight: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Button"], {
                  icon: "",
                  primary: true,
                  name: "fetchproduct",
                  submit: "true",
                  children: "Extract"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 21
          }, this), this.state.foundProduct ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"], {
            sectioned: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"].Section, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["MediaCard"], {
                title: this.state.fetchedProduct.product_title,
                primaryAction: {
                  content: 'Add Product',
                  onAction: function onAction() {
                    _this2.handleAddProduct();
                  }
                },
                description: this.state.fetchedProduct.description,
                size: "small",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "image-holder",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    alt: "",
                    width: "100%",
                    height: "100%",
                    style: {
                      objectFit: 'cover',
                      objectPosition: 'center'
                    },
                    src: this.state.fetchedProduct.images[0]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 29
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "product-price",
                    children: ["Price : ", this.state.fetchedProduct.product_price]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 176,
                    columnNumber: 29
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 21
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"], {
            sectioned: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"].Section, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Please Pass Right Url to Fetch Product data..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }, this);
    }
  }]);

  return CrawlUrl;
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmF3bFVybC5qcyJdLCJuYW1lcyI6WyJDcmF3bFVybCIsInByb3BzIiwidmFsdWUiLCJzZXRTdGF0ZSIsInNlYXJjaFVybCIsInNlbGVjdGVkRWNvbSIsIl9ldmVudCIsImlzTG9hZGluZyIsImF4aW9zIiwidXJsIiwibWV0aG9kIiwicGFyYW1zIiwic3RhdGUiLCJlY29tIiwicHJvZHVjdF9pZCIsImRiX2VudHJ5IiwidGhlbiIsInJlc3BvbnNlIiwiZm91bmRQcm9kdWN0IiwiZmV0Y2hlZFByb2R1Y3QiLCJkYXRhIiwicHJvZHVjdERldGFpbCIsImhlYWRlcnMiLCJDb29raWVzIiwiZ2V0IiwidGl0bGUiLCJwcm9kdWN0X3RpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsInByb2R1Y3RfcHJpY2UiLCJpbWFnZXMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRmVjdGhQcm9kdWN0U3VibWl0IiwibGFiZWwiLCJoYW5kbGVDaGFuZ2VFY29tIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwiY29udGVudCIsIm9uQWN0aW9uIiwiaGFuZGxlQWRkUHJvZHVjdCIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBWUE7O0FBQ0E7QUFDQTs7SUFFcUJBLFE7Ozs7O0FBQ2pCLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsNk5BV0UsVUFBQ0MsS0FBRCxFQUFVO0FBQUMsWUFBS0MsUUFBTCxDQUFjO0FBQUNDLGlCQUFTLEVBQUNGO0FBQVgsT0FBZDtBQUFpQyxLQVg5Qzs7QUFBQSwyTkFZQSxVQUFDQSxLQUFELEVBQVc7QUFDMUIsWUFBS0MsUUFBTCxDQUFjO0FBQUNFLG9CQUFZLEVBQUNIO0FBQWQsT0FBZDs7QUFDQSxZQUFL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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhDLGdCQWdDRCxxRUFBQyx3REFBRDtBQUFRLHFCQUFTLE1BQWpCO0FBQUEsbUNBQ0kscUVBQUMsd0RBQUQsQ0FBUSxPQUFSO0FBQUEscUNBQ1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF4RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURSO0FBb0ZIOzs7O0VBaExpQ2EsZ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjQzNzJjOGM0MGNhZDI5NWRmYTI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFxyXG4gICAgTGF5b3V0LFxyXG4gICAgQ2FyZCxcclxuICAgIEZvcm0sXHJcbiAgICBGb3JtTGF5b3V0LFxyXG4gICAgVGV4dEZpZWxkLFxyXG4gICAgQnV0dG9uLFxyXG4gICAgQ2hvaWNlTGlzdCxcclxuICAgIE1lZGlhQ2FyZCxcclxuICAgIExvYWRpbmcsXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbi8vaW1wb3J0IGZpcmViYXNlICBmcm9tICcuLi9saWIvZGIvRmlyZWJhc2UnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Jhd2xVcmwgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKSAgXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VhcmNoVXJsOicnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEVjb206WydFYmF5J10sXHJcbiAgICAgICAgICAgIGZldGNoZWRQcm9kdWN0Om51bGwsXHJcbiAgICAgICAgICAgIGZvdW5kUHJvZHVjdDpmYWxzZSxcclxuICAgICAgICAgICAgaXNMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWFyY2hDaGFuZ2UgPSAodmFsdWUpID0+e3RoaXMuc2V0U3RhdGUoe3NlYXJjaFVybDp2YWx1ZX0pfVxyXG4gICAgaGFuZGxlQ2hhbmdlRWNvbSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkRWNvbTp2YWx1ZX0pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoVXJsOicnfSlcclxuICAgIH1cclxuICAgIGhhbmRsZUZlY3RoUHJvZHVjdFN1Ym1pdCA9IGFzeW5jIChfZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNMb2FkaW5nOnRydWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgdXJsIDogJy9hcGkvc2NyYXAtcHJvZHVjdC1kZXRhaWw/JyxcclxuICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICBwYXJhbXM6e1xyXG4gICAgICAgICAgICAgICAgdXJsOnRoaXMuc3RhdGUuc2VhcmNoVXJsLFxyXG4gICAgICAgICAgICAgICAgZWNvbTp0aGlzLnN0YXRlLnNlbGVjdGVkRWNvbVswXSxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RfaWQ6MCxcclxuICAgICAgICAgICAgICAgIGRiX2VudHJ5OjAsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZm91bmRQcm9kdWN0OnRydWUsXHJcbiAgICAgICAgICAgICAgICBmZXRjaGVkUHJvZHVjdCA6IHJlc3BvbnNlLmRhdGEucHJvZHVjdERldGFpbCxcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzpmYWxzZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgLypcclxuICAgICAgICBjb25zdCBwcm9kdWN0RGV0YWlscyA9IGF3YWl0IHJlc3BvbnNlLmRhdGEucHJvZHVjdERldGFpbFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBmb3VuZFByb2R1Y3Q6dHJ1ZSxcclxuICAgICAgICAgICAgZmV0Y2hlZFByb2R1Y3QgOiBwcm9kdWN0RGV0YWlsc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgKi9cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICBcclxuICAgICAgICAvL2luc2VydGluZyBwcm9kdWN0IGludG8gZmlyZWJhc2UgZmlyZXN0b3JlXHJcbiAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignc3VuaWwtbm92b3N0YWNrLm15c2hvcGlmeS5jb20nKS5kb2MoKS5zZXQoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOidUaGlzIGlzIHByb2R1Y3QgdGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246J1RoaXMgd2lsbCBiZSBkZWZhdWx0IHByb2R1Y3QgZGVzY3JpcHRpb24gaWYgYW55JyxcclxuICAgICAgICAgICAgICAgIGltYWdlOidodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDUzMi81MDYyLzE2MjcvcHJvZHVjdHMvY2l0eS13b21hbi1mYXNoaW9uXzkyNXhfMnhfZWU4NzM3OTgtNmY2My00ZDc1LTkzMmQtMjk3YTE4MmQ5MDQ3XzM1MHgzNTAuanBnPycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTonMTI1LjAwJyxcclxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBoYW5kbGVBZGRQcm9kdWN0ID0gYXN5bmMgKF9ldmVudCkgPT57XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0xvYWRpbmc6dHJ1ZSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgICAgICAgICAnc2hvcG5hbWUnOkNvb2tpZXMuZ2V0KCdzaG9wT3JpZ2luJylcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB1cmw6Jy9hcGkvcHJvZHVjdHMnLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidwb3N0JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlIDogdGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC5wcm9kdWN0X3RpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOnRoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QucHJvZHVjdF9wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZXM6dGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC5pbWFnZXNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPEZvcm0gbmFtZT1cInByb2R1Y3QtZmV0Y2gtZm9ybVwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZUZlY3RoUHJvZHVjdFN1Ym1pdH0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzTG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDxMb2FkaW5nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRXh0cmFjdCBQcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXaXRoIHRoZSBoZWxwIG9mIHNjcmFwIHVybCB5b3UgY2FuIGdldCBwcm9kdWN0IGZyb20gaGVyZSB0byB5b3VyIHNob3BcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hvaWNlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFQ09NXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNob2ljZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdFYmF5JywgdmFsdWU6ICdFYmF5J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnU2FtcyBDbHViJywgdmFsdWU6ICdTYW1zQ2x1Yid9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0Jvc2NvdnMnLCB2YWx1ZTogJ0Jvc2NvdnMnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdIb21lIERlcG90JywgdmFsdWU6ICdIb21lRGVwb3QnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdCZWQgQmF0aCcsIHZhbHVlOiAnQmVkQmF0aGFuZEJleW9uZCd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ1dhbE1hcnQnLCB2YWx1ZTogJ1dhbG1hcnQnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdDb3N0Q28nLCB2YWx1ZTogJ0Nvc3RDbyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVjb21cIiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnNlbGVjdGVkRWNvbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUVjb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzdGUgVVJMIEhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hVcmxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3RlZFJpZ2h0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwiXCIgcHJpbWFyeT17dHJ1ZX0gbmFtZT1cImZldGNocHJvZHVjdFwiIHN1Ym1pdD1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4dHJhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZvdW5kUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IHNlY3Rpb25lZD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QucHJvZHVjdF90aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlBY3Rpb249e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnQWRkIFByb2R1Y3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB7IHRoaXMuaGFuZGxlQWRkUHJvZHVjdCgpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuaW1hZ2VzWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlByaWNlIDoge3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QucHJvZHVjdF9wcmljZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lZGlhQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBsZWFzZSBQYXNzIFJpZ2h0IFVybCB0byBGZXRjaCBQcm9kdWN0IGRhdGEuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9