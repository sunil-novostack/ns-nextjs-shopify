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
                }).then(function () {
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
                console.log(_this.state.fetchedProduct);
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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"].AnnotatedSection, {
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
                lineNumber: 107,
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
                  lineNumber: 129,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 29
              }, this), this.state.foundProduct ? '' : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Loading, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 35
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
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
                    lineNumber: 155,
                    columnNumber: 29
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "product-price",
                    children: ["Price : ", this.state.fetchedProduct.product_price]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 165,
                    columnNumber: 29
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 21
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"], {
            sectioned: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"].Section, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Please Pass Right Url to Fetch Product data..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmF3bFVybC5qcyJdLCJuYW1lcyI6WyJDcmF3bFVybCIsInByb3BzIiwidmFsdWUiLCJzZXRTdGF0ZSIsInNlYXJjaFVybCIsInNlbGVjdGVkRWNvbSIsIl9ldmVudCIsImlzTG9hZGluZyIsImF4aW9zIiwidXJsIiwibWV0aG9kIiwicGFyYW1zIiwic3RhdGUiLCJlY29tIiwicHJvZHVjdF9pZCIsImRiX2VudHJ5IiwidGhlbiIsImZvdW5kUHJvZHVjdCIsImZldGNoZWRQcm9kdWN0IiwicmVzcG9uc2UiLCJkYXRhIiwicHJvZHVjdERldGFpbCIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXJzIiwiQ29va2llcyIsImdldCIsInRpdGxlIiwicHJvZHVjdF90aXRsZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJwcm9kdWN0X3ByaWNlIiwiaW1hZ2VzIiwiaGFuZGxlRmVjdGhQcm9kdWN0U3VibWl0IiwibGFiZWwiLCJoYW5kbGVDaGFuZ2VFY29tIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwiY29udGVudCIsIm9uQWN0aW9uIiwiaGFuZGxlQWRkUHJvZHVjdCIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBV0E7O0FBQ0E7QUFDQTs7SUFFcUJBLFE7Ozs7O0FBQ2pCLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsNk5BV0UsVUFBQ0MsS0FBRCxFQUFVO0FBQUMsWUFBS0MsUUFBTCxDQUFjO0FBQUNDLGlCQUFTLEVBQUNGO0FBQVgsT0FBZDtBQUFpQyxLQVg5Qzs7QUFBQSwyTkFZQSxVQUFDQSxLQUFELEVBQVc7QUFBQyxZQUFLQyxRQUFMLENBQWM7QUFBQ0Usb0JBQVksRUFBQ0g7QUFBZCxPQUFkO0FBQW9DLEtBWmhE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USxPQUFSO0FBQUEscUNBQ1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF4RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURSO0FBb0ZIOzs7O0VBdEtpQ1csZ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLmU0MmM1MzA0Y2I1OGIyYjNjOThkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFxyXG4gICAgTGF5b3V0LFxyXG4gICAgQ2FyZCxcclxuICAgIEZvcm0sXHJcbiAgICBGb3JtTGF5b3V0LFxyXG4gICAgVGV4dEZpZWxkLFxyXG4gICAgQnV0dG9uLFxyXG4gICAgQ2hvaWNlTGlzdCxcclxuICAgIE1lZGlhQ2FyZCxcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuLy9pbXBvcnQgZmlyZWJhc2UgIGZyb20gJy4uL2xpYi9kYi9GaXJlYmFzZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmF3bFVybCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzZWFyY2hVcmw6JycsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkRWNvbTpbJ0ViYXknXSxcclxuICAgICAgICAgICAgZmV0Y2hlZFByb2R1Y3Q6bnVsbCxcclxuICAgICAgICAgICAgZm91bmRQcm9kdWN0OmZhbHNlLFxyXG4gICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlYXJjaENoYW5nZSA9ICh2YWx1ZSkgPT57dGhpcy5zZXRTdGF0ZSh7c2VhcmNoVXJsOnZhbHVlfSl9XHJcbiAgICBoYW5kbGVDaGFuZ2VFY29tID0gKHZhbHVlKSA9PiB7dGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRFY29tOnZhbHVlfSl9XHJcbiAgICBoYW5kbGVGZWN0aFByb2R1Y3RTdWJtaXQgPSBhc3luYyAoX2V2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZzp0cnVlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgIHVybCA6ICcvYXBpL3NjcmFwLXByb2R1Y3QtZGV0YWlsPycsXHJcbiAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICAgICAgcGFyYW1zOntcclxuICAgICAgICAgICAgICAgIHVybDp0aGlzLnN0YXRlLnNlYXJjaFVybCxcclxuICAgICAgICAgICAgICAgIGVjb206dGhpcy5zdGF0ZS5zZWxlY3RlZEVjb21bMF0sXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2lkOjAsXHJcbiAgICAgICAgICAgICAgICBkYl9lbnRyeTowLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbigoKSA9PntcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBmb3VuZFByb2R1Y3Q6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGZldGNoZWRQcm9kdWN0IDogcmVzcG9uc2UuZGF0YS5wcm9kdWN0RGV0YWlsLFxyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAvKlxyXG4gICAgICAgIGNvbnN0IHByb2R1Y3REZXRhaWxzID0gYXdhaXQgcmVzcG9uc2UuZGF0YS5wcm9kdWN0RGV0YWlsXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGZvdW5kUHJvZHVjdDp0cnVlLFxyXG4gICAgICAgICAgICBmZXRjaGVkUHJvZHVjdCA6IHByb2R1Y3REZXRhaWxzXHJcbiAgICAgICAgfSlcclxuICAgICAgICAqL1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vaW5zZXJ0aW5nIHByb2R1Y3QgaW50byBmaXJlYmFzZSBmaXJlc3RvcmVcclxuICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdzdW5pbC1ub3Zvc3RhY2subXlzaG9waWZ5LmNvbScpLmRvYygpLnNldChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6J1RoaXMgaXMgcHJvZHVjdCB0aXRsZScsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjonVGhpcyB3aWxsIGJlIGRlZmF1bHQgcHJvZHVjdCBkZXNjcmlwdGlvbiBpZiBhbnknLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6J2h0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNTMyLzUwNjIvMTYyNy9wcm9kdWN0cy9jaXR5LXdvbWFuLWZhc2hpb25fOTI1eF8yeF9lZTg3Mzc5OC02ZjYzLTRkNzUtOTMyZC0yOTdhMTgyZDkwNDdfMzUweDM1MC5qcGc/JyxcclxuICAgICAgICAgICAgICAgIHByaWNlOicxMjUuMDAnLFxyXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkgXHJcbiAgICAgICAgKi9cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGhhbmRsZUFkZFByb2R1Y3QgPSBhc3luYyAoX2V2ZW50KSA9PntcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0KVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgICAgICAgICAnc2hvcG5hbWUnOkNvb2tpZXMuZ2V0KCdzaG9wT3JpZ2luJylcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB1cmw6Jy9hcGkvcHJvZHVjdHMnLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidwb3N0JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlIDogdGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC5wcm9kdWN0X3RpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOnRoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QucHJvZHVjdF9wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZXM6dGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC5pbWFnZXNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPEZvcm0gbmFtZT1cInByb2R1Y3QtZmV0Y2gtZm9ybVwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZUZlY3RoUHJvZHVjdFN1Ym1pdH0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkV4dHJhY3QgUHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2l0aCB0aGUgaGVscCBvZiBzY3JhcCB1cmwgeW91IGNhbiBnZXQgcHJvZHVjdCBmcm9tIGhlcmUgdG8geW91ciBzaG9wXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENob2ljZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRUNPTVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaG9pY2VzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnRWJheScsIHZhbHVlOiAnRWJheSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ1NhbXMgQ2x1YicsIHZhbHVlOiAnU2Ftc0NsdWInfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdCb3Njb3ZzJywgdmFsdWU6ICdCb3Njb3ZzJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnSG9tZSBEZXBvdCcsIHZhbHVlOiAnSG9tZURlcG90J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnQmVkIEJhdGgnLCB2YWx1ZTogJ0JlZEJhdGhhbmRCZXlvbmQnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdXYWxNYXJ0JywgdmFsdWU6ICdXYWxtYXJ0J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnQ29zdENvJywgdmFsdWU6ICdDb3N0Q28nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlY29tXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZEVjb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VFY29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3RlIFVSTCBIZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoVXJsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0ZWRSaWdodD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cIlwiIHByaW1hcnk9e3RydWV9IG5hbWU9XCJmZXRjaHByb2R1Y3RcIiBzdWJtaXQ9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHRyYWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mb3VuZFByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8TG9hZGluZyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mb3VuZFByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dCBzZWN0aW9uZWQ9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZWRpYUNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LnByb2R1Y3RfdGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5QWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ0FkZCBQcm9kdWN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4geyB0aGlzLmhhbmRsZUFkZFByb2R1Y3QoKSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0UG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LmltYWdlc1swXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5QcmljZSA6IHt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LnByb2R1Y3RfcHJpY2V9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZWRpYUNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QbGVhc2UgUGFzcyBSaWdodCBVcmwgdG8gRmV0Y2ggUHJvZHVjdCBkYXRhLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0PiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgICBcclxuICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==