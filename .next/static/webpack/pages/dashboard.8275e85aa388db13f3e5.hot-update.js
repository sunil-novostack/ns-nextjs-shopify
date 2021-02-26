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
        var response, productDetails;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Ajax.getJSON(_this.state.searchUrl).then(function (response) {
                  console.log(response);
                }, function (err) {//handle your error here
                });
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_13___default()({
                  url: '/api/scrap-product-detail?',
                  method: 'GET',
                  params: {
                    url: _this.state.searchUrl,
                    ecom: _this.state.selectedEcom[0],
                    product_id: 0,
                    db_entry: 0
                  }
                });

              case 3:
                response = _context.sent;
                console.log(response);
                _context.next = 7;
                return response.data.productDetail[0];

              case 7:
                productDetails = _context.sent;

                /*
                const productDetails = await {
                    title:'This is product title',
                    description:'This will be default product description if any',
                    image:'https://cdn.shopify.com/s/files/1/0532/5062/1627/products/city-woman-fashion_925x_2x_ee873798-6f63-4d75-932d-297a182d9047_350x350.jpg?',
                    price:'125.00',
                }
                */
                _this.setState({
                  foundProduct: true,
                  fetchedProduct: productDetails
                });

                if (_this.state.foundProduct) {//this.addProduct();
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


              case 10:
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
      selectedEcom: ['Ebay'],
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
                lineNumber: 111,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
                label: "Paste URL Here",
                name: "searchUrl",
                type: "text",
                value: this.state.searchUrl,
                onChange: this.handleSearchChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Button"], {
                icon: "",
                primary: true,
                name: "fetchproduct",
                submit: "true",
                children: "Extract"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 21
          }, this), this.state.foundProduct ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"], {
            sectioned: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"].Section, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["MediaCard"], {
                title: this.state.fetchedProduct.product_title,
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
                    src: this.state.fetchedProduct.images[0]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 29
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "product-price",
                    children: ["Price : ", this.state.fetchedProduct.product_price]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 161,
                    columnNumber: 29
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 21
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"], {
            sectioned: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"].Section, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Please Pass Right Url to Fetch Product data..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmF3bFVybC5qcyJdLCJuYW1lcyI6WyJDcmF3bFVybCIsInByb3BzIiwidmFsdWUiLCJzZXRTdGF0ZSIsInNlYXJjaFVybCIsInNlbGVjdGVkRWNvbSIsIl9ldmVudCIsIkFqYXgiLCJnZXRKU09OIiwic3RhdGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiYXhpb3MiLCJ1cmwiLCJtZXRob2QiLCJwYXJhbXMiLCJlY29tIiwicHJvZHVjdF9pZCIsImRiX2VudHJ5IiwiZGF0YSIsInByb2R1Y3REZXRhaWwiLCJwcm9kdWN0RGV0YWlscyIsImZvdW5kUHJvZHVjdCIsImZldGNoZWRQcm9kdWN0IiwidG9rZW4iLCJDb29raWVzIiwiZ2V0IiwiaGVhZGVycyIsImJhc2VVUkwiLCJoYW5kbGVGZWN0aFByb2R1Y3RTdWJtaXQiLCJsYWJlbCIsImhhbmRsZUNoYW5nZUVjb20iLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJwcm9kdWN0X3RpdGxlIiwiY29udGVudCIsIm9uQWN0aW9uIiwiZGVzY3JpcHRpb24iLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImltYWdlcyIsInByb2R1Y3RfcHJpY2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7O0lBRXFCQSxROzs7OztBQUNqQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLDZOQVVFLFVBQUNDLEtBQUQsRUFBVTtBQUFDLFlBQUtDLFFBQUwsQ0FBYztBQUFDQyxpQkFBUyxFQUFDRjtBQUFYLE9BQWQ7QUFBaUMsS0FWOUM7O0FBQUEsMk5BV0EsVUFBQ0EsS0FBRCxFQUFXO0FBQUMsWUFBS0MsUUFBTCxDQUFjO0FBQUNFLG9CQUFZLEVBQUNIO0FBQWQs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QVI7QUFBQSxxQ0FDUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWhFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFI7QUE0RUg7Ozs7RUFsS2lDQyxnRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuODI3NWU4NWFhMzg4ZGIxM2YzZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgXHJcbiAgICBMYXlvdXQsXHJcbiAgICBDYXJkLFxyXG4gICAgRm9ybSxcclxuICAgIEZvcm1MYXlvdXQsXHJcbiAgICBUZXh0RmllbGQsXHJcbiAgICBCdXR0b24sXHJcbiAgICBDaG9pY2VMaXN0LFxyXG4gICAgTWVkaWFDYXJkLFxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgZmlyZWJhc2UgIGZyb20gJy4uL2xpYi9kYi9GaXJlYmFzZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmF3bFVybCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzZWFyY2hVcmw6JycsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkRWNvbTpbJ0ViYXknXSxcclxuICAgICAgICAgICAgZmV0Y2hlZFByb2R1Y3Q6bnVsbCxcclxuICAgICAgICAgICAgZm91bmRQcm9kdWN0OmZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWFyY2hDaGFuZ2UgPSAodmFsdWUpID0+e3RoaXMuc2V0U3RhdGUoe3NlYXJjaFVybDp2YWx1ZX0pfVxyXG4gICAgaGFuZGxlQ2hhbmdlRWNvbSA9ICh2YWx1ZSkgPT4ge3RoaXMuc2V0U3RhdGUoe3NlbGVjdGVkRWNvbTp2YWx1ZX0pfVxyXG4gICAgaGFuZGxlRmVjdGhQcm9kdWN0U3VibWl0ID0gYXN5bmMgKF9ldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgQWpheC5nZXRKU09OKHRoaXMuc3RhdGUuc2VhcmNoVXJsKS50aGVuKFxyXG4gICAgICAgICAgICByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgfSwgZXJyID0+IHtcclxuICAgICAgICAgICAgLy9oYW5kbGUgeW91ciBlcnJvciBoZXJlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICB1cmwgOiAnL2FwaS9zY3JhcC1wcm9kdWN0LWRldGFpbD8nLFxyXG4gICAgICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgICAgIHBhcmFtczp7XHJcbiAgICAgICAgICAgICAgICB1cmw6dGhpcy5zdGF0ZS5zZWFyY2hVcmwsXHJcbiAgICAgICAgICAgICAgICBlY29tOnRoaXMuc3RhdGUuc2VsZWN0ZWRFY29tWzBdLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9pZDowLFxyXG4gICAgICAgICAgICAgICAgZGJfZW50cnk6MCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgY29uc3QgcHJvZHVjdERldGFpbHMgPSBhd2FpdCByZXNwb25zZS5kYXRhLnByb2R1Y3REZXRhaWxbMF1cclxuICAgICAgICAvKlxyXG4gICAgICAgIGNvbnN0IHByb2R1Y3REZXRhaWxzID0gYXdhaXQge1xyXG4gICAgICAgICAgICB0aXRsZTonVGhpcyBpcyBwcm9kdWN0IHRpdGxlJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J1RoaXMgd2lsbCBiZSBkZWZhdWx0IHByb2R1Y3QgZGVzY3JpcHRpb24gaWYgYW55JyxcclxuICAgICAgICAgICAgaW1hZ2U6J2h0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNTMyLzUwNjIvMTYyNy9wcm9kdWN0cy9jaXR5LXdvbWFuLWZhc2hpb25fOTI1eF8yeF9lZTg3Mzc5OC02ZjYzLTRkNzUtOTMyZC0yOTdhMTgyZDkwNDdfMzUweDM1MC5qcGc/JyxcclxuICAgICAgICAgICAgcHJpY2U6JzEyNS4wMCcsXHJcbiAgICAgICAgfVxyXG4gICAgICAgICovXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGZvdW5kUHJvZHVjdDp0cnVlLFxyXG4gICAgICAgICAgICBmZXRjaGVkUHJvZHVjdCA6IHByb2R1Y3REZXRhaWxzXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5mb3VuZFByb2R1Y3Qpe1xyXG4gICAgICAgICAgICAvL3RoaXMuYWRkUHJvZHVjdCgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLypcclxuICAgICAgICBcclxuICAgICAgICAvL2luc2VydGluZyBwcm9kdWN0IGludG8gZmlyZWJhc2UgZmlyZXN0b3JlXHJcbiAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbignc3VuaWwtbm92b3N0YWNrLm15c2hvcGlmeS5jb20nKS5kb2MoKS5zZXQoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOidUaGlzIGlzIHByb2R1Y3QgdGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246J1RoaXMgd2lsbCBiZSBkZWZhdWx0IHByb2R1Y3QgZGVzY3JpcHRpb24gaWYgYW55JyxcclxuICAgICAgICAgICAgICAgIGltYWdlOidodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDUzMi81MDYyLzE2MjcvcHJvZHVjdHMvY2l0eS13b21hbi1mYXNoaW9uXzkyNXhfMnhfZWU4NzM3OTgtNmY2My00ZDc1LTkzMmQtMjk3YTE4MmQ5MDQ3XzM1MHgzNTAuanBnPycsXHJcbiAgICAgICAgICAgICAgICBwcmljZTonMTI1LjAwJyxcclxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogZmlyZWJhc2UuZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApIFxyXG4gICAgICAgICovXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBhZGRQcm9kdWN0ID0gYXN5bmMgKCkgPT57XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCdzaG9wQWNjZXNzVG9rZW4nKVxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgIHVybDonL3Byb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDoncG9zdCcsXHJcbiAgICAgICAgICAgICAgICBiYXNlVVJMOidodHRwczovLzRmNjc3ZjVkNTBmOS5uZ3Jvay5pby9hcGknLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOnRoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3RcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxGb3JtIG5hbWU9XCJwcm9kdWN0LWZldGNoLWZvcm1cIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVGZWN0aFByb2R1Y3RTdWJtaXR9IG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFeHRyYWN0IFByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldpdGggdGhlIGhlbHAgb2Ygc2NyYXAgdXJsIHlvdSBjYW4gZ2V0IHByb2R1Y3QgZnJvbSBoZXJlIHRvIHlvdXIgc2hvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENob2ljZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFQ09NXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hvaWNlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnRWJheScsIHZhbHVlOiAnRWJheSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnU2FtcyBDbHViJywgdmFsdWU6ICdTYW1zQ2x1Yid9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnQm9zY292cycsIHZhbHVlOiAnQm9zY292cyd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnSG9tZSBEZXBvdCcsIHZhbHVlOiAnSG9tZURlcG90J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdCZWQgQmF0aCcsIHZhbHVlOiAnQmVkQmF0aGFuZEJleW9uZCd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnV2FsTWFydCcsIHZhbHVlOiAnV2FsbWFydCd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnQ29zdENvJywgdmFsdWU6ICdDb3N0Q28nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZWNvbVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZEVjb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUVjb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzdGUgVVJMIEhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlYXJjaFVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2hDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cIlwiIHByaW1hcnk9e3RydWV9IG5hbWU9XCJmZXRjaHByb2R1Y3RcIiBzdWJtaXQ9XCJ0cnVlXCI+RXh0cmFjdDwvQnV0dG9uPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZvdW5kUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IHNlY3Rpb25lZD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QucHJvZHVjdF90aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlBY3Rpb249e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnSW1wb3J0IEl0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuaW1hZ2VzWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlByaWNlIDoge3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QucHJvZHVjdF9wcmljZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lZGlhQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBsZWFzZSBQYXNzIFJpZ2h0IFVybCB0byBGZXRjaCBQcm9kdWN0IGRhdGEuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9