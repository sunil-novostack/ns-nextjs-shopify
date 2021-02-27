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
        var response, productDetails;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_12___default()({
                  url: '/api/scrap-product-detail?',
                  method: 'GET',
                  params: {
                    url: _this.state.searchUrl,
                    ecom: _this.state.selectedEcom[0],
                    product_id: 0,
                    db_entry: 0
                  }
                });

              case 2:
                response = _context.sent;
                console.log(response);
                _context.next = 6;
                return response.data.productDetail;

              case 6:
                productDetails = _context.sent;

                _this.setState({
                  foundProduct: true,
                  fetchedProduct: productDetails
                });
                /*
                
                //inserting product into firebase firestore
                firebase.firestore().collection('sunil-novostack.myshopify.com').doc().set(
                    {
                        title:'This is product title',
                        description:'This will be default product description if any',
                        image:'https://cdn.shopify.com/s/files/1/0532/5062/1627/products/city-woman-fashion_925x_2x_ee873798-6f63-4d75-932d-297a182d9047_350x350.jpg?',
                        price:'125.00',
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    }
                ) 
                */


              case 8:
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
                console.log(response);
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](1);
                console.log(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 8]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    _this.state = {
      searchUrl: '',
      selectedEcom: ['Ebay'],
      fetchedProduct: null,
      foundProduct: false
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
                lineNumber: 97,
                columnNumber: 37
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
                  lineNumber: 119,
                  columnNumber: 45
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
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
                    lineNumber: 142,
                    columnNumber: 29
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "product-price",
                    children: ["Price : ", this.state.fetchedProduct.product_price]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 152,
                    columnNumber: 29
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 21
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"], {
            sectioned: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"].Section, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Please Pass Right Url to Fetch Product data..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmF3bFVybC5qcyJdLCJuYW1lcyI6WyJDcmF3bFVybCIsInByb3BzIiwidmFsdWUiLCJzZXRTdGF0ZSIsInNlYXJjaFVybCIsInNlbGVjdGVkRWNvbSIsIl9ldmVudCIsImF4aW9zIiwidXJsIiwibWV0aG9kIiwicGFyYW1zIiwic3RhdGUiLCJlY29tIiwicHJvZHVjdF9pZCIsImRiX2VudHJ5IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInByb2R1Y3REZXRhaWwiLCJwcm9kdWN0RGV0YWlscyIsImZvdW5kUHJvZHVjdCIsImZldGNoZWRQcm9kdWN0IiwiaGVhZGVycyIsIkNvb2tpZXMiLCJnZXQiLCJ0aXRsZSIsInByb2R1Y3RfdGl0bGUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwicHJvZHVjdF9wcmljZSIsImltYWdlcyIsImhhbmRsZUZlY3RoUHJvZHVjdFN1Ym1pdCIsImxhYmVsIiwiaGFuZGxlQ2hhbmdlRWNvbSIsImhhbmRsZVNlYXJjaENoYW5nZSIsImNvbnRlbnQiLCJvbkFjdGlvbiIsImhhbmRsZUFkZFByb2R1Y3QiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQVdBOztBQUNBO0FBQ0E7O0lBRXFCQSxROzs7OztBQUNqQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLDZOQVVFLFVBQUNDLEtBQUQsRUFBVTtBQUFDLFlBQUtDLFFBQUwsQ0FBYztBQUFDQyxpQkFBUyxFQUFDRjtBQUFYLE9BQWQ7QUFBaUMsS0FWOUM7O0FBQUEsMk5BV0EsVUFBQ0EsS0FBRCxFQUFXO0FBQUMsWUFBS0MsUUFBTCxDQUFjO0FBQUNFLG9CQUFZLEVBQUNIO0FBQWQsT0FBZDtBQUFvQyxLQVhoRDs7QUFBQTtBQUFBLGtNQVlRLGlCQUFPSSxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSUFDLDZDQUFLLENBQUM7QUFDekJDLHFCQUFHLEVBQUcsNEJBRG1CO0FBRXpCQyx3QkFBTSxFQUFDLEtBRmtCO0FBR3pCQyx3QkFBTSxFQUFDO0FBQ0hGLHVCQUFHLEVBQUMsTUFBS0csS0FBTCxDQUFXUCxTQURaO0FBRUhRLHdCQUFJLEVBQUMsTUFBS0QsS0FBTCxDQUFXTixZQUFYLENBQXdCLENBQXhCLENBRkY7QUFHSFEsOEJBQVUsRUFBQyxDQUhSO0FBSUhDLDRCQUFRLEVBQUM7QUFKTjtBQUhrQixpQkFBRCxDQUpMOztBQUFBO0FBSWpCQyx3QkFKaUI7QUFldkJDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQWZ1QjtBQUFBLHVCQWdCTUEsUUFBUSxDQUFDRyxJQUFULENBQWNDLGFBaEJwQjs7QUFBQTtBQWdCakJDLDhCQWhCaUI7O0FBaUJ2QixzQkFBS2pCLFFBQUwsQ0FBYztBQUNWa0IsOEJBQVksRUFBQyxJQURIO0FBRVZDLGdDQUFjLEVBQUdGO0FBRlAsaUJBQWQ7QUFJQTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBakMrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVpSOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbU1BZ0RBLGtCQUFPZCxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNmVSx1QkFBTyxDQUFDQyxHQUFSLENBQVksTUFBS04sS0FBTCxDQUFXVyxjQUF2QjtBQURlO0FBQUE7QUFBQSx1QkFHWWYsNkNBQUssQ0FBQztBQUN6QmdCLHlCQUFPLEVBQUM7QUFDSixnQ0FBV0MsaURBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFEUCxtQkFEaUI7QUFJekJqQixxQkFBRyxFQUFDLGVBSnFCO0FBS3pCQyx3QkFBTSxFQUFDLE1BTGtCO0FBTXpCUyxzQkFBSSxFQUFDO0FBQ0RRLHlCQUFLLEVBQUcsTUFBS2YsS0FBTCxDQUFXVyxjQUFYLENBQTBCSyxhQURqQztBQUVEQywrQkFBVyxFQUFFLE1BQUtqQixLQUFMLENBQVdXLGNBQVgsQ0FBMEJNLFdBRnRDO0FBR0RDLHlCQUFLLEVBQUMsTUFBS2xCLEtBQUwsQ0FBV1csY0FBWCxDQUEwQlEsYUFIL0I7QUFJREMsMEJBQU0sRUFBQyxNQUFLcEIsS0FBTCxDQUFXVyxjQUFYLENBQTBCUztBQUpoQztBQU5vQixpQkFBRCxDQUhqQjs7QUFBQTtBQUdMaEIsd0JBSEs7QUFnQlhDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQWhCVztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWtCWEMsdUJBQU8sQ0FBQ0MsR0FBUjs7QUFsQlc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FoREE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRWYsVUFBS04sS0FBTCxHQUFhO0FBQ1RQLGVBQVMsRUFBQyxFQUREO0FBRVRDLGtCQUFZLEVBQUMsQ0FBQyxNQUFELENBRko7QUFHVGlCLG9CQUFjLEVBQUMsSUFITjtBQUlURCxrQkFBWSxFQUFDO0FBSkosS0FBYjtBQUZlO0FBUWxCOzs7OzZCQThETztBQUFBOztBQUNKLDBCQUNRLHFFQUFDLHNEQUFEO0FBQU0sWUFBSSxFQUFDLG9CQUFYO0FBQWdDLGdCQUFRLEVBQUUsS0FBS1csd0JBQS9DO0FBQXlFLGNBQU0sRUFBQyxNQUFoRjtBQUFBLCtCQUNJLHFFQUFDLDREQUFEO0FBQUEsa0NBQ0EscUVBQUMsd0RBQUQsQ0FBUSxnQkFBUjtBQUNJLGlCQUFLLEVBQUMsaUJBRFY7QUFFSSx1QkFBVyxFQUFDLHVFQUZoQjtBQUFBLG1DQUlJLHFFQUFDLHNEQUFEO0FBQU0sdUJBQVMsTUFBZjtBQUFBLHNDQUVZLHFFQUFDLDREQUFEO0FBQ0EscUJBQUssRUFBQyxNQUROO0FBRUEsdUJBQU8sRUFBRSxDQUNMO0FBQUNDLHVCQUFLLEVBQUUsTUFBUjtBQUFnQi9CLHVCQUFLLEVBQUU7QUFBdkIsaUJBREssRUFFTDtBQUFDK0IsdUJBQUssRUFBRSxXQUFSO0FBQXFCL0IsdUJBQUssRUFBRTtBQUE1QixpQkFGSyxFQUdMO0FBQUMrQix1QkFBSyxFQUFFLFNBQVI7QUFBbUIvQix1QkFBSyxFQUFFO0FBQTFCLGlCQUhLLEVBSUw7QUFBQytCLHVCQUFLLEVBQUUsWUFBUjtBQUFzQi9CLHVCQUFLLEVBQUU7QUFBN0IsaUJBSkssRUFLTDtBQUFDK0IsdUJBQUssRUFBRSxVQUFSO0FBQW9CL0IsdUJBQUssRUFBRTtBQUEzQixpQkFMSyxFQU1MO0FBQUMrQix1QkFBSyxFQUFFLFNBQVI7QUFBbUIvQix1QkFBSyxFQUFFO0FBQTFCLGlCQU5LLEVBT0w7QUFBQytCLHVCQUFLLEVBQUUsUUFBUjtBQUFrQi9CLHVCQUFLLEVBQUU7QUFBekIsaUJBUEssQ0FGVDtBQVdBLG9CQUFJLEVBQUMsTUFYTDtBQVlBLHdCQUFRLEVBQUUsS0FBS1MsS0FBTCxDQUFXTixZQVpyQjtBQWFBLHdCQUFRLEVBQUUsS0FBSzZCO0FBYmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGWixlQWlCWSxxRUFBQywyREFBRDtBQUNJLHFCQUFLLEVBQUMsZ0JBRFY7QUFFSSxvQkFBSSxFQUFDLFdBRlQ7QUFHSSxvQkFBSSxFQUFDLE1BSFQ7QUFJSSxxQkFBSyxFQUFFLEtBQUt2QixLQUFMLENBQVdQLFNBSnRCO0FBS0ksd0JBQVEsRUFBRSxLQUFLK0Isa0JBTG5CO0FBTUksOEJBQWMsZUFDVixxRUFBQyx3REFBRDtBQUFRLHNCQUFJLEVBQUMsRUFBYjtBQUFnQix5QkFBTyxFQUFFLElBQXpCO0FBQStCLHNCQUFJLEVBQUMsY0FBcEM7QUFBbUQsd0JBQU0sRUFBQyxNQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBSO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBakJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREEsRUFxQ0MsS0FBS3hCLEtBQUwsQ0FBV1UsWUFBWCxnQkFHRCxxRUFBQyx3REFBRDtBQUFRLHFCQUFTLEVBQUUsSUFBbkI7QUFBQSxtQ0FDSSxxRUFBQyx3REFBRCxDQUFRLE9BQVI7QUFBQSxxQ0FDQSxxRUFBQywyREFBRDtBQUNJLHFCQUFLLEVBQUUsS0FBS1YsS0FBTCxDQUFXVyxjQUFYLENBQTBCSyxhQURyQztBQUVJLDZCQUFhLEVBQUU7QUFDWFMseUJBQU8sRUFBRSxhQURFO0FBRVhDLDBCQUFRLEVBQUUsb0JBQU07QUFBRSwwQkFBSSxDQUFDQyxnQkFBTDtBQUF5QjtBQUZoQyxpQkFGbkI7QUFNSSwyQkFBVyxFQUFFLEtBQUszQixLQUFMLENBQVdXLGNBQVgsQ0FBMEJNLFdBTjNDO0FBT0ksb0JBQUksRUFBQyxPQVBUO0FBQUEsdUNBU0k7QUFBSywyQkFBUyxFQUFDLGNBQWY7QUFBQSwwQ0FDQTtBQUNJLHVCQUFHLEVBQUMsRUFEUjtBQUVJLHlCQUFLLEVBQUMsTUFGVjtBQUdJLDBCQUFNLEVBQUMsTUFIWDtBQUlJLHlCQUFLLEVBQUU7QUFDUFcsK0JBQVMsRUFBRSxPQURKO0FBRVBDLG9DQUFjLEVBQUU7QUFGVCxxQkFKWDtBQVFJLHVCQUFHLEVBQUUsS0FBSzdCLEtBQUwsQ0FBV1csY0FBWCxDQUEwQlMsTUFBMUIsQ0FBaUMsQ0FBakM7QUFSVDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURBLGVBV0E7QUFBSyw2QkFBUyxFQUFDLGVBQWY7QUFBQSwyQ0FBd0MsS0FBS3BCLEtBQUwsQ0FBV1csY0FBWCxDQUEwQlEsYUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQVhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIQyxnQkFnQ0QscUVBQUMsd0RBQUQ7QUFBUSxxQkFBUyxNQUFqQjtBQUFBLG1DQUNJLHFFQUFDLHdEQUFELENBQVEsT0FBUjtBQUFBLHFDQUNRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBckVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEUjtBQWlGSDs7OztFQXpKaUNXLGdEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC5jMmI2NDBlMGVlYmI4YTNkOWE0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBcclxuICAgIExheW91dCxcclxuICAgIENhcmQsXHJcbiAgICBGb3JtLFxyXG4gICAgRm9ybUxheW91dCxcclxuICAgIFRleHRGaWVsZCxcclxuICAgIEJ1dHRvbixcclxuICAgIENob2ljZUxpc3QsXHJcbiAgICBNZWRpYUNhcmQsXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbi8vaW1wb3J0IGZpcmViYXNlICBmcm9tICcuLi9saWIvZGIvRmlyZWJhc2UnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Jhd2xVcmwgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKSAgXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VhcmNoVXJsOicnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEVjb206WydFYmF5J10sXHJcbiAgICAgICAgICAgIGZldGNoZWRQcm9kdWN0Om51bGwsXHJcbiAgICAgICAgICAgIGZvdW5kUHJvZHVjdDpmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKHZhbHVlKSA9Pnt0aGlzLnNldFN0YXRlKHtzZWFyY2hVcmw6dmFsdWV9KX1cclxuICAgIGhhbmRsZUNoYW5nZUVjb20gPSAodmFsdWUpID0+IHt0aGlzLnNldFN0YXRlKHtzZWxlY3RlZEVjb206dmFsdWV9KX1cclxuICAgIGhhbmRsZUZlY3RoUHJvZHVjdFN1Ym1pdCA9IGFzeW5jIChfZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICB1cmwgOiAnL2FwaS9zY3JhcC1wcm9kdWN0LWRldGFpbD8nLFxyXG4gICAgICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgICAgIHBhcmFtczp7XHJcbiAgICAgICAgICAgICAgICB1cmw6dGhpcy5zdGF0ZS5zZWFyY2hVcmwsXHJcbiAgICAgICAgICAgICAgICBlY29tOnRoaXMuc3RhdGUuc2VsZWN0ZWRFY29tWzBdLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9pZDowLFxyXG4gICAgICAgICAgICAgICAgZGJfZW50cnk6MCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgY29uc3QgcHJvZHVjdERldGFpbHMgPSBhd2FpdCByZXNwb25zZS5kYXRhLnByb2R1Y3REZXRhaWxcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZm91bmRQcm9kdWN0OnRydWUsXHJcbiAgICAgICAgICAgIGZldGNoZWRQcm9kdWN0IDogcHJvZHVjdERldGFpbHNcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9pbnNlcnRpbmcgcHJvZHVjdCBpbnRvIGZpcmViYXNlIGZpcmVzdG9yZVxyXG4gICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ3N1bmlsLW5vdm9zdGFjay5teXNob3BpZnkuY29tJykuZG9jKCkuc2V0KFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTonVGhpcyBpcyBwcm9kdWN0IHRpdGxlJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOidUaGlzIHdpbGwgYmUgZGVmYXVsdCBwcm9kdWN0IGRlc2NyaXB0aW9uIGlmIGFueScsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTonaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzA1MzIvNTA2Mi8xNjI3L3Byb2R1Y3RzL2NpdHktd29tYW4tZmFzaGlvbl85MjV4XzJ4X2VlODczNzk4LTZmNjMtNGQ3NS05MzJkLTI5N2ExODJkOTA0N18zNTB4MzUwLmpwZz8nLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6JzEyNS4wMCcsXHJcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKSBcclxuICAgICAgICAqL1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgaGFuZGxlQWRkUHJvZHVjdCA9IGFzeW5jIChfZXZlbnQpID0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QpXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICAgICAgICdzaG9wbmFtZSc6Q29va2llcy5nZXQoJ3Nob3BPcmlnaW4nKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVybDonL2FwaS9wcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiB0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LnByb2R1Y3RfdGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6dGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC5wcm9kdWN0X3ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlczp0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LmltYWdlc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPEZvcm0gbmFtZT1cInByb2R1Y3QtZmV0Y2gtZm9ybVwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZUZlY3RoUHJvZHVjdFN1Ym1pdH0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkV4dHJhY3QgUHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2l0aCB0aGUgaGVscCBvZiBzY3JhcCB1cmwgeW91IGNhbiBnZXQgcHJvZHVjdCBmcm9tIGhlcmUgdG8geW91ciBzaG9wXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hvaWNlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkVDT01cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaG9pY2VzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdFYmF5JywgdmFsdWU6ICdFYmF5J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdTYW1zIENsdWInLCB2YWx1ZTogJ1NhbXNDbHViJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdCb3Njb3ZzJywgdmFsdWU6ICdCb3Njb3ZzJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdIb21lIERlcG90JywgdmFsdWU6ICdIb21lRGVwb3QnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0JlZCBCYXRoJywgdmFsdWU6ICdCZWRCYXRoYW5kQmV5b25kJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdXYWxNYXJ0JywgdmFsdWU6ICdXYWxtYXJ0J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdDb3N0Q28nLCB2YWx1ZTogJ0Nvc3RDbyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlY29tXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnNlbGVjdGVkRWNvbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlRWNvbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXN0ZSBVUkwgSGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoVXJsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3RlZFJpZ2h0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJcIiBwcmltYXJ5PXt0cnVlfSBuYW1lPVwiZmV0Y2hwcm9kdWN0XCIgc3VibWl0PVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHRyYWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZvdW5kUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IHNlY3Rpb25lZD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QucHJvZHVjdF90aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlBY3Rpb249e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnQWRkIFByb2R1Y3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB7IHRoaXMuaGFuZGxlQWRkUHJvZHVjdCgpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuaW1hZ2VzWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlByaWNlIDoge3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QucHJvZHVjdF9wcmljZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lZGlhQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBsZWFzZSBQYXNzIFJpZ2h0IFVybCB0byBGZXRjaCBQcm9kdWN0IGRhdGEuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9