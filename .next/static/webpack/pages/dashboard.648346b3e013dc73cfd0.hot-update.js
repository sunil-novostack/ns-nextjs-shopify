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
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");










var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-nextjs-shopify\\components\\CrawlUrl.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

      _this.setState({
        searchUrl: ''
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleTitleChange", function (value) {
      _this.setState({
        fetchedProduct: _objectSpread(_objectSpread({}, _this.state.fetchedProduct), {}, {
          title: value
        })
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleFinalPrice", function (value) {});

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

                _context.prev = 1;
                _context.next = 4;
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
                  //console.log(response)
                  if (response.data != null) {
                    _this.setState({
                      foundProduct: true,
                      fetchedProduct: response.data,
                      isLoading: false
                    });
                  } else {
                    _this.setState({
                      foundProduct: false,
                      isLoading: false,
                      msg: 'No Product data found on given product page link'
                    });
                  }
                  /*
                  if(response.data.productDetail!=null){            
                      if(response.data.productDetail.variants){
                          const items = [];
                          Promise.all(
                              response.data.productDetail.variants.map((variant,index) => {
                                  if(variant.price==null){
                                      variant.price = 0
                                  }else{
                                  variant.price = variant.price.toString().replace('$','')
                                  }
                                  variant.finalPrice = (Number( this.state.priceRules.productPriceHike ) * parseFloat( variant.price))
                                  if(!variant.qty){variant.qty=0}
                                  items.push(variant)
                              })
                          );                    
                          response.data.productDetail.variants = items
                          console.log(response.data.productDetail)
                          this.setState({
                              foundProduct:true,
                              fetchedProduct : response.data.productDetail,
                              isLoading:false,
                          })
                      }
                  }else{
                      this.setState({
                          foundProduct:false,
                          isLoading:false,
                          msg:'No Product data found on given product page link',
                      })
                  }
                  */

                });

              case 4:
                response = _context.sent;
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

                _this.setState({
                  isLoading: false
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 7]]);
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
                  data: _this.state.fetchedProduct
                }).then(function (response) {
                  console.log(response);

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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleEditProduct", /*#__PURE__*/function () {
      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(_event) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('popup');

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());

    _this.state = {
      searchUrl: '',
      selectedEcom: ['Ebay'],
      fetchedProduct: null,
      foundProduct: false,
      isLoading: false,
      msg: 'Please copy past product page into url field and press extract button',
      priceRules: {
        pricehikeconditional: '*',
        productPriceHike: '2'
      },
      finalPrice: 0
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(CrawlUrl, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      try {
        var response = axios__WEBPACK_IMPORTED_MODULE_12___default()({
          headers: {
            'shopname': js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get('shopOrigin')
          },
          url: '/api/settings',
          method: 'GET'
        }).then(function (response) {
          response.data.settings ? _this2.setState({
            priceRules: response.data.settings.priceRules
          }) : _this2.setState({
            priceRules: {
              pricehikeconditional: '*',
              productPriceHike: '2'
            }
          });
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

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
                lineNumber: 189,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
                label: "Paste URL Here",
                name: "searchUrl",
                type: "text",
                value: this.state.searchUrl,
                onChange: this.handleSearchChange,
                connectedRight: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Button"], {
                  loading: this.state.isLoading ? true : false,
                  primary: true,
                  name: "fetchproduct",
                  submit: "true",
                  children: "Extract"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 21
          }, this), this.state.foundProduct ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"], {
            sectioned: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"].Section, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Card"], {
                sectioned: true,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
                  name: "title",
                  label: "Product Title",
                  value: this.state.fetchedProduct.title,
                  onChange: this.handleTitleChange
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"].Section, {
                    secondary: true,
                    children: [console.log(this.state.fetchedProduct.items), this.state.fetchedProduct.items ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      alt: "",
                      width: "100%",
                      height: "100%",
                      style: {
                        objectFit: 'cover',
                        objectPosition: 'center'
                      },
                      src: this.state.fetchedProduct.items[0].images[0]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 228,
                      columnNumber: 45
                    }, this) : '']
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 224,
                    columnNumber: 37
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"].Section, {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "variant-table",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
                        width: "100%",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            children: "SKU"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 246,
                            columnNumber: 53
                          }, this), this.state.fetchedProduct.has_variations ? this.state.fetchedProduct.items[0].modifiers.map(function (variant, index) {
                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                              align: "left",
                              children: variant.name
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 252,
                              columnNumber: 65
                            }, _this3);
                          }) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            children: "Price"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 258,
                            columnNumber: 53
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            children: "Margin"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 259,
                            columnNumber: 53
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            children: "Final Price"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 260,
                            columnNumber: 53
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: "Unites"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 261,
                            columnNumber: 53
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 245,
                          columnNumber: 49
                        }, this), this.state.fetchedProduct.items ? this.state.fetchedProduct.items.map(function (variant, index) {
                          if (_this3.state.priceRules.pricehikeconditional == '*') {
                            variant.finalPrice = Number(_this3.state.priceRules.productPriceHike) * parseFloat(variant.price);
                          } else if (_this3.state.priceRules.pricehikeconditional == '+') {
                            variant.finalPrice = Number(_this3.state.priceRules.productPriceHike) + parseFloat(variant.price);
                          }

                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                              children: variant.sku
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 275,
                              columnNumber: 65
                            }, _this3), variant.modifiers.map(function (modifier, i) {
                              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                children: modifier.value
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 279,
                                columnNumber: 77
                              }, _this3);
                            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                              children: ["$ ", variant.price]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 283,
                              columnNumber: 65
                            }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                              children: [_this3.state.priceRules.pricehikeconditional, " $ ", _this3.state.priceRules.productPriceHike]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 284,
                              columnNumber: 65
                            }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
                                name: "finalPrice",
                                type: "text",
                                value: variant.finalPrice
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 286,
                                columnNumber: 69
                              }, _this3)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 285,
                              columnNumber: 65
                            }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                              children: " 0 "
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 292,
                              columnNumber: 65
                            }, _this3)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 274,
                            columnNumber: 61
                          }, _this3);
                        }) : 'No Variant available']
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 244,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 243,
                      columnNumber: 41
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 242,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 223,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 21
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"].Section, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Banner"], {
                icon: react_icons_io__WEBPACK_IMPORTED_MODULE_14__["IoIosInformationCircle"],
                title: "Product fetch",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: this.state.msg
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 312,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 311,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 310,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmF3bFVybC5qcyJdLCJuYW1lcyI6WyJDcmF3bFVybCIsInByb3BzIiwidmFsdWUiLCJzZXRTdGF0ZSIsInNlYXJjaFVybCIsInNlbGVjdGVkRWNvbSIsImZldGNoZWRQcm9kdWN0Iiwic3RhdGUiLCJ0aXRsZSIsIl9ldmVudCIsImlzTG9hZGluZyIsImF4aW9zIiwidXJsIiwibWV0aG9kIiwicGFyYW1zIiwiZWNvbSIsInByb2R1Y3RfaWQiLCJkYl9lbnRyeSIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJmb3VuZFByb2R1Y3QiLCJtc2ciLCJjb25zb2xlIiwibG9nIiwiaGVhZGVycyIsIkNvb2tpZXMiLCJnZXQiLCJwcmljZVJ1bGVzIiwicHJpY2VoaWtlY29uZGl0aW9uYWwiLCJwcm9kdWN0UHJpY2VIaWtlIiwiZmluYWxQcmljZSIsInNldHRpbmdzIiwiZXJyb3IiLCJoYW5kbGVGZWN0aFByb2R1Y3RTdWJtaXQiLCJsYWJlbCIsImhhbmRsZUNoYW5nZUVjb20iLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJoYW5kbGVUaXRsZUNoYW5nZSIsIml0ZW1zIiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJpbWFnZXMiLCJoYXNfdmFyaWF0aW9ucyIsIm1vZGlmaWVycyIsIm1hcCIsInZhcmlhbnQiLCJpbmRleCIsIm5hbWUiLCJOdW1iZXIiLCJwYXJzZUZsb2F0IiwicHJpY2UiLCJza3UiLCJtb2RpZmllciIsImkiLCJJb0lvc0luZm9ybWF0aW9uQ2lyY2xlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWFBO0FBQ0E7QUFDQTs7SUFFcUJBLFE7Ozs7O0FBQ2pCLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsNk5BOENFLFVBQUNDLEtB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QTVDO0FBQUEsdUNBQ0k7QUFBQSw0QkFBSSxLQUFLaEQsS0FBTCxDQUFXZTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBOUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGUjtBQTZJSDs7OztFQTlTaUNrQyxnRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuNjQ4MzQ2YjNlMDEzZGM3M2NmZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7IENvbXBvbmVudCwgY3JlYXRlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBcclxuICAgIExheW91dCxcclxuICAgIENhcmQsXHJcbiAgICBGb3JtLFxyXG4gICAgRm9ybUxheW91dCxcclxuICAgIFRleHRGaWVsZCxcclxuICAgIEJ1dHRvbixcclxuICAgIENob2ljZUxpc3QsXHJcbiAgICBNZWRpYUNhcmQsXHJcbiAgICBCYW5uZXIsXHJcbiAgICBEYXRhVGFibGUsXHJcbiAgICBDaGVja2JveCxcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHtJb0lvc0luZm9ybWF0aW9uQ2lyY2xlfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyYXdsVXJsIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcykgIFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNlYXJjaFVybDonJyxcclxuICAgICAgICAgICAgc2VsZWN0ZWRFY29tOlsnRWJheSddLFxyXG4gICAgICAgICAgICBmZXRjaGVkUHJvZHVjdDpudWxsLFxyXG4gICAgICAgICAgICBmb3VuZFByb2R1Y3Q6ZmFsc2UsXHJcbiAgICAgICAgICAgIGlzTG9hZGluZzpmYWxzZSwgICAgIFxyXG4gICAgICAgICAgICBtc2c6J1BsZWFzZSBjb3B5IHBhc3QgcHJvZHVjdCBwYWdlIGludG8gdXJsIGZpZWxkIGFuZCBwcmVzcyBleHRyYWN0IGJ1dHRvbicsXHJcbiAgICAgICAgICAgIHByaWNlUnVsZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBwcmljZWhpa2Vjb25kaXRpb25hbDonKicsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0UHJpY2VIaWtlOicyJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmluYWxQcmljZTowLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICAgICAgICdzaG9wbmFtZSc6Q29va2llcy5nZXQoJ3Nob3BPcmlnaW4nKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVybDonL2FwaS9zZXR0aW5ncycsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCcsICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLnNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICA/IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZVJ1bGVzOnJlc3BvbnNlLmRhdGEuc2V0dGluZ3MucHJpY2VSdWxlc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlUnVsZXMgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZWhpa2Vjb25kaXRpb25hbDonKicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UHJpY2VIaWtlOicyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlYXJjaENoYW5nZSA9ICh2YWx1ZSkgPT57dGhpcy5zZXRTdGF0ZSh7c2VhcmNoVXJsOnZhbHVlfSl9XHJcbiAgICBoYW5kbGVDaGFuZ2VFY29tID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRFY29tOnZhbHVlfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2hVcmw6Jyd9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlVGl0bGVDaGFuZ2UgPSAodmFsdWUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZmV0Y2hlZFByb2R1Y3Q6e1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdCxcclxuICAgICAgICAgICAgICAgIHRpdGxlOnZhbHVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGhhbmRsZUZpbmFsUHJpY2UgPSAodmFsdWUpID0+IHtcclxuXHJcbiAgICB9XHJcbiAgICBoYW5kbGVGZWN0aFByb2R1Y3RTdWJtaXQgPSBhc3luYyAoX2V2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZzp0cnVlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIHVybCA6ICcvYXBpL3NjcmFwLXByb2R1Y3QtZGV0YWlsPycsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6e1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDp0aGlzLnN0YXRlLnNlYXJjaFVybCxcclxuICAgICAgICAgICAgICAgICAgICBlY29tOnRoaXMuc3RhdGUuc2VsZWN0ZWRFY29tWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfaWQ6MCxcclxuICAgICAgICAgICAgICAgICAgICBkYl9lbnRyeTowLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSE9bnVsbCl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kUHJvZHVjdDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaGVkUHJvZHVjdCA6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kUHJvZHVjdDpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2c6J05vIFByb2R1Y3QgZGF0YSBmb3VuZCBvbiBnaXZlbiBwcm9kdWN0IHBhZ2UgbGluaycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLnByb2R1Y3REZXRhaWwhPW51bGwpeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEucHJvZHVjdERldGFpbC52YXJpYW50cyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5wcm9kdWN0RGV0YWlsLnZhcmlhbnRzLm1hcCgodmFyaWFudCxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZhcmlhbnQucHJpY2U9PW51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50LnByaWNlID0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQucHJpY2UgPSB2YXJpYW50LnByaWNlLnRvU3RyaW5nKCkucmVwbGFjZSgnJCcsJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQuZmluYWxQcmljZSA9IChOdW1iZXIoIHRoaXMuc3RhdGUucHJpY2VSdWxlcy5wcm9kdWN0UHJpY2VIaWtlICkgKiBwYXJzZUZsb2F0KCB2YXJpYW50LnByaWNlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighdmFyaWFudC5xdHkpe3ZhcmlhbnQucXR5PTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaCh2YXJpYW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLnByb2R1Y3REZXRhaWwudmFyaWFudHMgPSBpdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnByb2R1Y3REZXRhaWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRQcm9kdWN0OnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaGVkUHJvZHVjdCA6IHJlc3BvbnNlLmRhdGEucHJvZHVjdERldGFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRQcm9kdWN0OmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZzonTm8gUHJvZHVjdCBkYXRhIGZvdW5kIG9uIGdpdmVuIHByb2R1Y3QgcGFnZSBsaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlQWRkUHJvZHVjdCA9IGFzeW5jIChfZXZlbnQpID0+e1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdClcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNMb2FkaW5nOnRydWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3Nob3BuYW1lJzpDb29raWVzLmdldCgnc2hvcE9yaWdpbicpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdXJsOicvYXBpL3Byb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDoncG9zdCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOnRoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3RcclxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZUVkaXRQcm9kdWN0ID0gYXN5bmMgKF9ldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwb3B1cCcpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxGb3JtIG5hbWU9XCJwcm9kdWN0LWZldGNoLWZvcm1cIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVGZWN0aFByb2R1Y3RTdWJtaXR9IG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFeHRyYWN0IFByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldpdGggdGhlIGhlbHAgb2Ygc2NyYXAgdXJsIHlvdSBjYW4gZ2V0IHByb2R1Y3QgZnJvbSBoZXJlIHRvIHlvdXIgc2hvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENob2ljZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNob2ljZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdFYmF5JywgdmFsdWU6ICdFYmF5J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnU2FtcyBDbHViJywgdmFsdWU6ICdTYW1zQ2x1Yid9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0Jvc2NvdnMnLCB2YWx1ZTogJ0Jvc2NvdnMnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdIb21lIERlcG90JywgdmFsdWU6ICdIb21lRGVwb3QnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdCZWQgQmF0aCcsIHZhbHVlOiAnQmVkQmF0aGFuZEJleW9uZCd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ1dhbE1hcnQnLCB2YWx1ZTogJ1dhbG1hcnQnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdDb3N0Q28nLCB2YWx1ZTogJ0Nvc3RDbyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVjb21cIiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnNlbGVjdGVkRWNvbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUVjb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzdGUgVVJMIEhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hVcmxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3RlZFJpZ2h0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmlzTG9hZGluZyA/IHRydWUgOiBmYWxzZSB9IHByaW1hcnk9e3RydWV9IG5hbWU9XCJmZXRjaHByb2R1Y3RcIiBzdWJtaXQ9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHRyYWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mb3VuZFByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICA/ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IHNlY3Rpb25lZD17dHJ1ZX0+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIG5hbWU9XCJ0aXRsZVwiIGxhYmVsPVwiUHJvZHVjdCBUaXRsZVwiIHZhbHVlPXt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LnRpdGxlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaXRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24gc2Vjb25kYXJ5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHRoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuaXRlbXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuaXRlbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFBvc2l0aW9uOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC5pdGVtc1swXS5pbWFnZXNbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndmFyaWFudC10YWJsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIHdpZHRoPVwiMTAwJVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U0tVPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuaGFzX3ZhcmlhdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC5pdGVtc1swXS5tb2RpZmllcnMubWFwKCh2YXJpYW50LGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBhbGlnbj1cImxlZnRcIj57dmFyaWFudC5uYW1lfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWFyZ2luPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GaW5hbCBQcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VW5pdGVzPC90ZD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0Lml0ZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0Lml0ZW1zLm1hcCgodmFyaWFudCxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUucHJpY2VSdWxlcy5wcmljZWhpa2Vjb25kaXRpb25hbD09JyonKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudC5maW5hbFByaWNlID0gKE51bWJlciggdGhpcy5zdGF0ZS5wcmljZVJ1bGVzLnByb2R1Y3RQcmljZUhpa2UgKSAqIHBhcnNlRmxvYXQoIHZhcmlhbnQucHJpY2UpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdGUucHJpY2VSdWxlcy5wcmljZWhpa2Vjb25kaXRpb25hbD09JysnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudC5maW5hbFByaWNlID0gKE51bWJlciggdGhpcy5zdGF0ZS5wcmljZVJ1bGVzLnByb2R1Y3RQcmljZUhpa2UgKSArIHBhcnNlRmxvYXQoIHZhcmlhbnQucHJpY2UpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt2YXJpYW50LnNrdX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQubW9kaWZpZXJzLm1hcCgobW9kaWZpZXIsaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e21vZGlmaWVyLnZhbHVlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiQge3ZhcmlhbnQucHJpY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5wcmljZVJ1bGVzLnByaWNlaGlrZWNvbmRpdGlvbmFsfSAkIHt0aGlzLnN0YXRlLnByaWNlUnVsZXMucHJvZHVjdFByaWNlSGlrZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpbmFsUHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YXJpYW50LmZpbmFsUHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IDAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ05vIFZhcmlhbnQgYXZhaWxhYmxlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXIgaWNvbj17SW9Jb3NJbmZvcm1hdGlvbkNpcmNsZX0gdGl0bGU9XCJQcm9kdWN0IGZldGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLm1zZ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CYW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dD4gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290IjoiIn0=