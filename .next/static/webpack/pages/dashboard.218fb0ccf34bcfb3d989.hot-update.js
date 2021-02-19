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
/* harmony import */ var _lib_db_Firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/db/Firebase */ "./lib/db/Firebase.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_14__);










var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-nextjs-shopify\\components\\CrawlUrl.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







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
        var productDetails;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return {
                  title: 'This is product title',
                  description: 'This will be default product description if any',
                  image: 'https://cdn.shopify.com/s/files/1/0532/5062/1627/products/city-woman-fashion_925x_2x_ee873798-6f63-4d75-932d-297a182d9047_350x350.jpg?',
                  price: '125.00'
                };

              case 2:
                productDetails = _context.sent;

                _this.setState({
                  foundProduct: true,
                  fetchedProduct: productDetails
                });

                if (_this.state.foundProduct) {
                  _this.addProduct();
                }
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


              case 5:
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "addProduct", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var token, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              token = js_cookie__WEBPACK_IMPORTED_MODULE_14___default.a.get('shopAccessToken');
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_13___default()({
                headers: {
                  "Authorization": "Bearer ".concat(token),
                  "Access-Control-Allow-Origin": "*"
                },
                url: '/products',
                method: 'post',
                baseURL: 'https://4f677f5d50f9.ngrok.io/api',
                params: _this.state.fetchedProduct
              });

            case 4:
              response = _context2.sent;
              console.log(response);
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    })));

    _this.state = {
      searchUrl: '',
      selectedEcom: ['ebay'],
      fetchedProduct: null,
      foundProduct: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(CrawlUrl, [{
    key: "render",
    value: function render() {
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
                  value: 'ebay'
                }, {
                  label: 'Sams',
                  value: 'sams'
                }, {
                  label: 'Boscovs',
                  value: 'boscovs'
                }, {
                  label: 'Home',
                  value: 'home'
                }, {
                  label: 'BedBath',
                  value: 'bedbath'
                }, {
                  label: 'WalMart',
                  value: 'walmart'
                }],
                name: "ecom",
                selected: this.state.selectedEcom,
                onChange: this.handleChangeEcom
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
                label: "Paste URL Here",
                name: "searchUrl",
                type: "text",
                value: this.state.searchUrl,
                onChange: this.handleSearchChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Button"], {
                icon: "",
                primary: true,
                name: "fetchproduct",
                submit: "true",
                children: "Extract"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 21
          }, this), this.state.foundProduct ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"], {
            sectioned: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"].Section, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["MediaCard"], {
                title: this.state.fetchedProduct.title,
                primaryAction: {
                  content: 'Import It',
                  onAction: function onAction() {}
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
                    src: this.state.fetchedProduct.image
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 139,
                    columnNumber: 29
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "product-price",
                    children: ["Price : $ ", this.state.fetchedProduct.price]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 29
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 21
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"], {
            sectioned: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"].Section, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Please Pass Right Url to Fetch Product data..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmF3bFVybC5qcyJdLCJuYW1lcyI6WyJDcmF3bFVybCIsInByb3BzIiwidmFsdWUiLCJzZXRTdGF0ZSIsInNlYXJjaFVybCIsInNlbGVjdGVkRWNvbSIsIl9ldmVudCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInByaWNlIiwicHJvZHVjdERldGFpbHMiLCJmb3VuZFByb2R1Y3QiLCJmZXRjaGVkUHJvZHVjdCIsInN0YXRlIiwiYWRkUHJvZHVjdCIsInRva2VuIiwiQ29va2llcyIsImdldCIsImF4aW9zIiwiaGVhZGVycyIsInVybCIsIm1ldGhvZCIsImJhc2VVUkwiLCJwYXJhbXMiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVGZWN0aFByb2R1Y3RTdWJtaXQiLCJsYWJlbCIsImhhbmRsZUNoYW5nZUVjb20iLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJjb250ZW50Iiwib25BY3Rpb24iLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVVBO0FBQ0E7QUFDQTs7SUFFcUJBLFE7Ozs7O0FBQ2pCLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsNk5BVUUsVUFBQ0MsS0FBRCxFQUFVO0FBQUMsWUFBS0MsUUFBTCxDQUFjO0FBQUNDLGlCQUFTLEVBQUNGO0FBQVgsT0FBZDtBQUFpQyxLQVY5Qzs7QUFBQSwyTkFXQSxVQUFDQSxLQUFELEVBQVc7QUFBQyxZQUFLQyxRQUFMLENBQWM7QUFBQ0Usb0JBQVksRUFBQ0g7QUFBZCxPQUFkO0FBQW9DLEtBWGhEOztBQUFBO0FBQUEsa01BWVEsaUJBQU9JLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFjTTtBQUN6QkMsdUJBQUssRUFBQyx1QkFEbUI7QUFFekJDLDZCQUFXLEVBQUMsaURBRmE7QUFHekJDLHVCQUFLLEVBQUMsd0lBSG1CO0FBSXpCQyx1QkFBSyxFQUFDO0FBSm1CLGlCQWROOztBQUFBO0FBY2pCQyw4QkFkaUI7O0FBcUJ2QixzQkFBS1IsUUFBTCxDQUFjO0FBQ1ZTLDhCQUFZLEVBQUMsSUFESDtBQUVWQyxnQ0FBYyxFQUFHRjtBQUZQLGlCQUFkOztBQUtBLG9CQUFHLE1BQUtHLEtBQUwsQ0FBV0YsWUFBZCxFQUEyQjtBQUN2Qix3QkFBS0csVUFBTDtBQUNIO0FBQ0Q7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUF4QytCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BWlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsbVpBc0ROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUNDLG1CQUZELEdBRVNDLGlEQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixDQUZUO0FBQUE7QUFBQSxxQkFHa0JDLDZDQUFLLENBQUM7QUFDekJDLHVCQUFPLEVBQUU7QUFDTCxvREFBNEJKLEtBQTVCLENBREs7QUFFTCxpREFBK0I7QUFGMUIsaUJBRGdCO0FBS3pCSyxtQkFBRyxFQUFDLFdBTHFCO0FBTXpCQyxzQkFBTSxFQUFDLE1BTmtCO0FBT3pCQyx1QkFBTyxFQUFDLG1DQVBpQjtBQVF6QkMsc0JBQU0sRUFBQyxNQUFLVixLQUFMLENBQVdEO0FBUk8sZUFBRCxDQUh2Qjs7QUFBQTtBQUdDWSxzQkFIRDtBQWFMQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFiSztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWVMQyxxQkFBTyxDQUFDQyxHQUFSOztBQWZLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBdERNOztBQUVmLFVBQUtiLEtBQUwsR0FBYTtBQUNUVixlQUFTLEVBQUMsRUFERDtBQUVUQyxrQkFBWSxFQUFDLENBQUMsTUFBRCxDQUZKO0FBR1RRLG9CQUFjLEVBQUMsSUFITjtBQUlURCxrQkFBWSxFQUFDO0FBSkosS0FBYjtBQUZlO0FBUWxCOzs7OzZCQWlFTztBQUNKLDBCQUNRLHFFQUFDLHNEQUFEO0FBQU0sWUFBSSxFQUFDLG9CQUFYO0FBQWdDLGdCQUFRLEVBQUUsS0FBS2dCLHdCQUEvQztBQUF5RSxjQUFNLEVBQUMsTUFBaEY7QUFBQSwrQkFDSSxxRUFBQyw0REFBRDtBQUFBLGtDQUNBLHFFQUFDLHdEQUFELENBQVEsZ0JBQVI7QUFDSSxpQkFBSyxFQUFDLGlCQURWO0FBRUksdUJBQVcsRUFBQyx1RUFGaEI7QUFBQSxtQ0FJSSxxRUFBQyxzREFBRDtBQUFNLHVCQUFTLE1BQWY7QUFBQSxzQ0FFWSxxRUFBQyw0REFBRDtBQUNBLHFCQUFLLEVBQUMsTUFETjtBQUVBLHVCQUFPLEVBQUUsQ0FDTDtBQUFDQyx1QkFBSyxFQUFFLE1BQVI7QUFBZ0IzQix1QkFBSyxFQUFFO0FBQXZCLGlCQURLLEVBRUw7QUFBQzJCLHVCQUFLLEVBQUUsTUFBUjtBQUFnQjNCLHVCQUFLLEVBQUU7QUFBdkIsaUJBRkssRUFHTDtBQUFDMkIsdUJBQUssRUFBRSxTQUFSO0FBQW1CM0IsdUJBQUssRUFBRTtBQUExQixpQkFISyxFQUlMO0FBQUMyQix1QkFBSyxFQUFFLE1BQVI7QUFBZ0IzQix1QkFBSyxFQUFFO0FBQXZCLGlCQUpLLEVBS0w7QUFBQzJCLHVCQUFLLEVBQUUsU0FBUjtBQUFtQjNCLHVCQUFLLEVBQUU7QUFBMUIsaUJBTEssRUFNTDtBQUFDMkIsdUJBQUssRUFBRSxTQUFSO0FBQW1CM0IsdUJBQUssRUFBRTtBQUExQixpQkFOSyxDQUZUO0FBVUEsb0JBQUksRUFBQyxNQVZMO0FBV0Esd0JBQVEsRUFBRSxLQUFLWSxLQUFMLENBQVdULFlBWHJCO0FBWUEsd0JBQVEsRUFBRSxLQUFLeUI7QUFaZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZaLGVBZ0JZLHFFQUFDLDJEQUFEO0FBQ0kscUJBQUssRUFBQyxnQkFEVjtBQUVJLG9CQUFJLEVBQUMsV0FGVDtBQUdJLG9CQUFJLEVBQUMsTUFIVDtBQUlJLHFCQUFLLEVBQUUsS0FBS2hCLEtBQUwsQ0FBV1YsU0FKdEI7QUFLSSx3QkFBUSxFQUFFLEtBQUsyQjtBQUxuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWhCWixlQXVCWSxxRUFBQyx3REFBRDtBQUFRLG9CQUFJLEVBQUMsRUFBYjtBQUFnQix1QkFBTyxFQUFFLElBQXpCO0FBQStCLG9CQUFJLEVBQUMsY0FBcEM7QUFBbUQsc0JBQU0sRUFBQyxNQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkF2Qlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQSxFQStCQyxLQUFLakIsS0FBTCxDQUFXRixZQUFYLGdCQUdELHFFQUFDLHdEQUFEO0FBQVEscUJBQVMsRUFBRSxJQUFuQjtBQUFBLG1DQUNJLHFFQUFDLHdEQUFELENBQVEsT0FBUjtBQUFBLHFDQUNBLHFFQUFDLDJEQUFEO0FBQ0kscUJBQUssRUFBRSxLQUFLRSxLQUFMLENBQVdELGNBQVgsQ0FBMEJOLEtBRHJDO0FBRUksNkJBQWEsRUFBRTtBQUNYeUIseUJBQU8sRUFBRSxXQURFO0FBRVhDLDBCQUFRLEVBQUUsb0JBQU0sQ0FBRTtBQUZQLGlCQUZuQjtBQU1JLDJCQUFXLEVBQUUsS0FBS25CLEtBQUwsQ0FBV0QsY0FBWCxDQUEwQkwsV0FOM0M7QUFPSSxvQkFBSSxFQUFDLE9BUFQ7QUFBQSx1Q0FTSTtBQUFLLDJCQUFTLEVBQUMsY0FBZjtBQUFBLDBDQUNBO0FBQ0ksdUJBQUcsRUFBQyxFQURSO0FBRUkseUJBQUssRUFBQyxNQUZWO0FBR0ksMEJBQU0sRUFBQyxNQUhYO0FBSUkseUJBQUssRUFBRTtBQUNQMEIsK0JBQVMsRUFBRSxPQURKO0FBRVBDLG9DQUFjLEVBQUU7QUFGVCxxQkFKWDtBQVFJLHVCQUFHLEVBQUUsS0FBS3JCLEtBQUwsQ0FBV0QsY0FBWCxDQUEwQko7QUFSbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFEQSxlQVdBO0FBQUssNkJBQVMsRUFBQyxlQUFmO0FBQUEsNkNBQTBDLEtBQUtLLEtBQUwsQ0FBV0QsY0FBWCxDQUEwQkgsS0FBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQVhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIQyxnQkFnQ0QscUVBQUMsd0RBQUQ7QUFBUSxxQkFBUyxNQUFqQjtBQUFBLG1DQUNJLHFFQUFDLHdEQUFELENBQVEsT0FBUjtBQUFBLHFDQUNRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBL0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEUjtBQTJFSDs7OztFQXRKaUMwQixnRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuMjE4ZmIwY2NmMzRiY2ZiM2Q5ODkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgXHJcbiAgICBMYXlvdXQsXHJcbiAgICBDYXJkLFxyXG4gICAgRm9ybSxcclxuICAgIEZvcm1MYXlvdXQsXHJcbiAgICBUZXh0RmllbGQsXHJcbiAgICBCdXR0b24sXHJcbiAgICBDaG9pY2VMaXN0LFxyXG4gICAgTWVkaWFDYXJkLFxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgZmlyZWJhc2UgIGZyb20gJy4uL2xpYi9kYi9GaXJlYmFzZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmF3bFVybCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzZWFyY2hVcmw6JycsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkRWNvbTpbJ2ViYXknXSxcclxuICAgICAgICAgICAgZmV0Y2hlZFByb2R1Y3Q6bnVsbCxcclxuICAgICAgICAgICAgZm91bmRQcm9kdWN0OmZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWFyY2hDaGFuZ2UgPSAodmFsdWUpID0+e3RoaXMuc2V0U3RhdGUoe3NlYXJjaFVybDp2YWx1ZX0pfVxyXG4gICAgaGFuZGxlQ2hhbmdlRWNvbSA9ICh2YWx1ZSkgPT4ge3RoaXMuc2V0U3RhdGUoe3NlbGVjdGVkRWNvbTp2YWx1ZX0pfVxyXG4gICAgaGFuZGxlRmVjdGhQcm9kdWN0U3VibWl0ID0gYXN5bmMgKF9ldmVudCkgPT4ge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgIHVybCA6ICcvZGV0YWlsJyxcclxuICAgICAgICAgICAgbWV0aG9kOidwb3N0JyxcclxuICAgICAgICAgICAgYmFzZVVSTDonaHR0cDovLzIwNC40NC4xMjUuNzM6ODAwMC9kYXRhJyxcclxuICAgICAgICAgICAgcGFyYW1zOntcclxuICAgICAgICAgICAgICAgIHVybDpzZWFyY2hVcmwsXHJcbiAgICAgICAgICAgICAgICBlY29tOnNlbGVjdGVkRWNvbVswXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBwcm9kdWN0RGV0YWlscyA9IGF3YWl0IHtcclxuICAgICAgICAgICAgdGl0bGU6J1RoaXMgaXMgcHJvZHVjdCB0aXRsZScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOidUaGlzIHdpbGwgYmUgZGVmYXVsdCBwcm9kdWN0IGRlc2NyaXB0aW9uIGlmIGFueScsXHJcbiAgICAgICAgICAgIGltYWdlOidodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDUzMi81MDYyLzE2MjcvcHJvZHVjdHMvY2l0eS13b21hbi1mYXNoaW9uXzkyNXhfMnhfZWU4NzM3OTgtNmY2My00ZDc1LTkzMmQtMjk3YTE4MmQ5MDQ3XzM1MHgzNTAuanBnPycsXHJcbiAgICAgICAgICAgIHByaWNlOicxMjUuMDAnLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGZvdW5kUHJvZHVjdDp0cnVlLFxyXG4gICAgICAgICAgICBmZXRjaGVkUHJvZHVjdCA6IHByb2R1Y3REZXRhaWxzXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5mb3VuZFByb2R1Y3Qpe1xyXG4gICAgICAgICAgICB0aGlzLmFkZFByb2R1Y3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLypcclxuICAgICAgICAvL2luc2VydGluZyBwcm9kdWN0IGludG8gZmlyZWJhc2UgZmlyZXN0b3JlXHJcbiAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignc3VuaWwtbm92b3N0YWNrLm15c2hvcGlmeS5jb20nKS5kb2MoKS5zZXQoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOidUaGlzIGlzIHByb2R1Y3QgdGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246J1RoaXMgd2lsbCBiZSBkZWZhdWx0IHByb2R1Y3QgZGVzY3JpcHRpb24gaWYgYW55JyxcclxuICAgICAgICAgICAgICAgIGltYWdlOidodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDUzMi81MDYyLzE2MjcvcHJvZHVjdHMvY2l0eS13b21hbi1mYXNoaW9uXzkyNXhfMnhfZWU4NzM3OTgtNmY2My00ZDc1LTkzMmQtMjk3YTE4MmQ5MDQ3XzM1MHgzNTAuanBnPycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTonMTI1LjAwJyxcclxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApIFxyXG4gICAgICAgICovICAgICAgIFxyXG4gICAgfVxyXG4gICAgYWRkUHJvZHVjdCA9IGFzeW5jICgpID0+e1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldCgnc2hvcEFjY2Vzc1Rva2VuJylcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCIgOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIlxyXG4gICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICB1cmw6Jy9wcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgYmFzZVVSTDonaHR0cHM6Ly80ZjY3N2Y1ZDUwZjkubmdyb2suaW8vYXBpJyxcclxuICAgICAgICAgICAgICAgIHBhcmFtczp0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBuYW1lPVwicHJvZHVjdC1mZXRjaC1mb3JtXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlRmVjdGhQcm9kdWN0U3VibWl0fSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRXh0cmFjdCBQcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXaXRoIHRoZSBoZWxwIG9mIHNjcmFwIHVybCB5b3UgY2FuIGdldCBwcm9kdWN0IGZyb20gaGVyZSB0byB5b3VyIHNob3BcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaG9pY2VMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRUNPTVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNob2ljZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0ViYXknLCB2YWx1ZTogJ2ViYXknfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ1NhbXMnLCB2YWx1ZTogJ3NhbXMnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0Jvc2NvdnMnLCB2YWx1ZTogJ2Jvc2NvdnMnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0hvbWUnLCB2YWx1ZTogJ2hvbWUnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0JlZEJhdGgnLCB2YWx1ZTogJ2JlZGJhdGgnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ1dhbE1hcnQnLCB2YWx1ZTogJ3dhbG1hcnQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZWNvbVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZEVjb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUVjb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzdGUgVVJMIEhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlYXJjaFVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2hDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cIlwiIHByaW1hcnk9e3RydWV9IG5hbWU9XCJmZXRjaHByb2R1Y3RcIiBzdWJtaXQ9XCJ0cnVlXCI+RXh0cmFjdDwvQnV0dG9uPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZvdW5kUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IHNlY3Rpb25lZD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5QWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ0ltcG9ydCBJdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0UG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlByaWNlIDogJCB7dGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC5wcmljZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lZGlhQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBsZWFzZSBQYXNzIFJpZ2h0IFVybCB0byBGZXRjaCBQcm9kdWN0IGRhdGEuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9