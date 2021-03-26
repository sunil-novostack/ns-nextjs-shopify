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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleFinalPrice", function (event, id, _event) {
      console.log(_event);
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
                      fetchedProduct: response.data.product,
                      isLoading: false
                    });
                  } else {
                    _this.setState({
                      foundProduct: false,
                      isLoading: false,
                      msg: 'No Product data found on given product page link'
                    });
                  }

                  {
                    console.log(response.data.product);
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
                lineNumber: 190,
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
                  lineNumber: 211,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 21
          }, this), this.state.foundProduct ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"], {
            sectioned: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"].Section, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Card"], {
                sectioned: true,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
                  name: "title",
                  label: "Product Title",
                  value: this.state.fetchedProduct.items[0].product_name,
                  onChange: this.handleTitleChange
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 223,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"].Section, {
                    secondary: true,
                    children: this.state.fetchedProduct.items ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
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
                    }, this) : ''
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 225,
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
                            }, _this3), _this3.state.fetchedProduct.has_variations ? variant.modifiers.map(function (modifier, i) {
                              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                children: modifier.value
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 280,
                                columnNumber: 77
                              }, _this3);
                            }) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                              children: ["$ ", variant.price]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 286,
                              columnNumber: 65
                            }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                              children: [_this3.state.priceRules.pricehikeconditional, " ", _this3.state.priceRules.productPriceHike]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 287,
                              columnNumber: 65
                            }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
                                name: "finalPrice",
                                type: "text",
                                value: variant.finalPrice,
                                onChange: _this3.handleFinalPrice
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 290,
                                columnNumber: 69
                              }, _this3)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 289,
                              columnNumber: 65
                            }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                              children: " 0 "
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 297,
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
                  lineNumber: 224,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
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
                  lineNumber: 317,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 316,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 315,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmF3bFVybC5qcyJdLCJuYW1lcyI6WyJDcmF3bFVybCIsInByb3BzIiwidmFsdWUiLCJzZXRTdGF0ZSIsInNlYXJjaFVybCIsInNlbGVjdGVkRWNvbSIsImZldGNoZWRQcm9kdWN0Iiwic3RhdGUiLCJ0aXRsZSIsImV2ZW50IiwiaWQiLCJfZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiaXNMb2FkaW5nIiwiYXhpb3MiLCJ1cmwiLCJtZXRob2QiLCJwYXJhbXMiLCJlY29tIiwicHJvZHVjdF9pZCIsImRiX2VudHJ5IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImZvdW5kUHJvZHVjdCIsInByb2R1Y3QiLCJtc2ciLCJoZWFkZXJzIiwiQ29va2llcyIsImdldCIsInByaWNlUnVsZXMiLCJwcmljZWhpa2Vjb25kaXRpb25hbCIsInByb2R1Y3RQcmljZUhpa2UiLCJmaW5hbFByaWNlIiwic2V0dGluZ3MiLCJlcnJvciIsImhhbmRsZUZlY3RoUHJvZHVjdFN1Ym1pdCIsImxhYmVsIiwiaGFuZGxlQ2hhbmdlRWNvbSIsImhhbmRsZVNlYXJjaENoYW5nZSIsIml0ZW1zIiwicHJvZHVjdF9uYW1lIiwiaGFuZGxlVGl0bGVDaGFuZ2UiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImltYWdlcyIsImhhc192YXJpYXRpb25zIiwibW9kaWZpZXJzIiwibWFwIiwidmFyaWFudCIsImluZGV4IiwibmFtZSIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJwcmljZSIsInNrdSIsIm1vZGlmaWVyIiwiaSIsImhhbmRsZUZpbmFsUHJpY2UiLCJJb0lvc0luZm9ybWF0aW9uQ2lyY2xlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWFBO0FBQ0E7QUFDQTs7SUFFcUJBLFE7Ozs7O0FBQ2pCLG9CQUFZQyxLQUFa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QUE7QUFBQSwwQkFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZDLGdCQWdHRyxxRUFBQyx3REFBRDtBQUFBLG1DQUNJLHFFQUFDLHdEQUFELENBQVEsT0FBUjtBQUFBLHFDQUNJLHFFQUFDLHdEQUFEO0FBQVEsb0JBQUksRUFBRUMsc0VBQWQ7QUFBc0MscUJBQUssRUFBQyxlQUE1QztBQUFBLHVDQUNJO0FBQUEsNEJBQUksS0FBS3JELEtBQUwsQ0FBV29CO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFsSUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZSO0FBaUpIOzs7O0VBblRpQ2tDLGdEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC43Y2E5MzBlMDNmZjUzYzMyNWE1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHsgQ29tcG9uZW50LCBjcmVhdGVSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFxyXG4gICAgTGF5b3V0LFxyXG4gICAgQ2FyZCxcclxuICAgIEZvcm0sXHJcbiAgICBGb3JtTGF5b3V0LFxyXG4gICAgVGV4dEZpZWxkLFxyXG4gICAgQnV0dG9uLFxyXG4gICAgQ2hvaWNlTGlzdCxcclxuICAgIE1lZGlhQ2FyZCxcclxuICAgIEJhbm5lcixcclxuICAgIERhdGFUYWJsZSxcclxuICAgIENoZWNrYm94LFxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQge0lvSW9zSW5mb3JtYXRpb25DaXJjbGV9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Jhd2xVcmwgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKSAgXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VhcmNoVXJsOicnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEVjb206WydFYmF5J10sXHJcbiAgICAgICAgICAgIGZldGNoZWRQcm9kdWN0Om51bGwsXHJcbiAgICAgICAgICAgIGZvdW5kUHJvZHVjdDpmYWxzZSxcclxuICAgICAgICAgICAgaXNMb2FkaW5nOmZhbHNlLCAgICAgXHJcbiAgICAgICAgICAgIG1zZzonUGxlYXNlIGNvcHkgcGFzdCBwcm9kdWN0IHBhZ2UgaW50byB1cmwgZmllbGQgYW5kIHByZXNzIGV4dHJhY3QgYnV0dG9uJyxcclxuICAgICAgICAgICAgcHJpY2VSdWxlcyA6IHtcclxuICAgICAgICAgICAgICAgIHByaWNlaGlrZWNvbmRpdGlvbmFsOicqJyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RQcmljZUhpa2U6JzInLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaW5hbFByaWNlOjAsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBheGlvcyh7XHJcbiAgICAgICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3Nob3BuYW1lJzpDb29raWVzLmdldCgnc2hvcE9yaWdpbicpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdXJsOicvYXBpL3NldHRpbmdzJyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJywgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuc2V0dGluZ3NcclxuICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlUnVsZXM6cmVzcG9uc2UuZGF0YS5zZXR0aW5ncy5wcmljZVJ1bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VSdWxlcyA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlaGlrZWNvbmRpdGlvbmFsOicqJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RQcmljZUhpa2U6JzInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKHZhbHVlKSA9Pnt0aGlzLnNldFN0YXRlKHtzZWFyY2hVcmw6dmFsdWV9KX1cclxuICAgIGhhbmRsZUNoYW5nZUVjb20gPSAodmFsdWUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZEVjb206dmFsdWV9KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaFVybDonJ30pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVUaXRsZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBmZXRjaGVkUHJvZHVjdDp7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6dmFsdWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlRmluYWxQcmljZSA9IChldmVudCxpZCxfZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhfZXZlbnQpXHJcbiAgICB9XHJcbiAgICBoYW5kbGVGZWN0aFByb2R1Y3RTdWJtaXQgPSBhc3luYyAoX2V2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZzp0cnVlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIHVybCA6ICcvYXBpL3NjcmFwLXByb2R1Y3QtZGV0YWlsPycsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6e1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDp0aGlzLnN0YXRlLnNlYXJjaFVybCxcclxuICAgICAgICAgICAgICAgICAgICBlY29tOnRoaXMuc3RhdGUuc2VsZWN0ZWRFY29tWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfaWQ6MCxcclxuICAgICAgICAgICAgICAgICAgICBkYl9lbnRyeTowLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSE9bnVsbCl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kUHJvZHVjdDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaGVkUHJvZHVjdCA6IHJlc3BvbnNlLmRhdGEucHJvZHVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRQcm9kdWN0OmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZzonTm8gUHJvZHVjdCBkYXRhIGZvdW5kIG9uIGdpdmVuIHByb2R1Y3QgcGFnZSBsaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEucHJvZHVjdCl9XHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5wcm9kdWN0RGV0YWlsIT1udWxsKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLnByb2R1Y3REZXRhaWwudmFyaWFudHMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEucHJvZHVjdERldGFpbC52YXJpYW50cy5tYXAoKHZhcmlhbnQsaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih2YXJpYW50LnByaWNlPT1udWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudC5wcmljZSA9IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50LnByaWNlID0gdmFyaWFudC5wcmljZS50b1N0cmluZygpLnJlcGxhY2UoJyQnLCcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50LmZpbmFsUHJpY2UgPSAoTnVtYmVyKCB0aGlzLnN0YXRlLnByaWNlUnVsZXMucHJvZHVjdFByaWNlSGlrZSApICogcGFyc2VGbG9hdCggdmFyaWFudC5wcmljZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXZhcmlhbnQucXR5KXt2YXJpYW50LnF0eT0wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2godmFyaWFudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5wcm9kdWN0RGV0YWlsLnZhcmlhbnRzID0gaXRlbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5wcm9kdWN0RGV0YWlsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kUHJvZHVjdDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hlZFByb2R1Y3QgOiByZXNwb25zZS5kYXRhLnByb2R1Y3REZXRhaWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kUHJvZHVjdDpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2c6J05vIFByb2R1Y3QgZGF0YSBmb3VuZCBvbiBnaXZlbiBwcm9kdWN0IHBhZ2UgbGluaycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZUFkZFByb2R1Y3QgPSBhc3luYyAoX2V2ZW50KSA9PntcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZzp0cnVlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICAgICAgICdzaG9wbmFtZSc6Q29va2llcy5nZXQoJ3Nob3BPcmlnaW4nKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVybDonL2FwaS9wcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTp0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVFZGl0UHJvZHVjdCA9IGFzeW5jIChfZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygncG9wdXAnKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBuYW1lPVwicHJvZHVjdC1mZXRjaC1mb3JtXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlRmVjdGhQcm9kdWN0U3VibWl0fSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRXh0cmFjdCBQcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXaXRoIHRoZSBoZWxwIG9mIHNjcmFwIHVybCB5b3UgY2FuIGdldCBwcm9kdWN0IGZyb20gaGVyZSB0byB5b3VyIHNob3BcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaG9pY2VMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaG9pY2VzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnRWJheScsIHZhbHVlOiAnRWJheSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ1NhbXMgQ2x1YicsIHZhbHVlOiAnU2Ftc0NsdWInfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdCb3Njb3ZzJywgdmFsdWU6ICdCb3Njb3ZzJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnSG9tZSBEZXBvdCcsIHZhbHVlOiAnSG9tZURlcG90J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnQmVkIEJhdGgnLCB2YWx1ZTogJ0JlZEJhdGhhbmRCZXlvbmQnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdXYWxNYXJ0JywgdmFsdWU6ICdXYWxtYXJ0J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnQ29zdENvJywgdmFsdWU6ICdDb3N0Q28nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlY29tXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZEVjb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VFY29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3RlIFVSTCBIZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoVXJsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0ZWRSaWdodD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17dGhpcy5zdGF0ZS5pc0xvYWRpbmcgPyB0cnVlIDogZmFsc2UgfSBwcmltYXJ5PXt0cnVlfSBuYW1lPVwiZmV0Y2hwcm9kdWN0XCIgc3VibWl0PVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXh0cmFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZm91bmRQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgPyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dCBzZWN0aW9uZWQ9e3RydWV9PiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBuYW1lPVwidGl0bGVcIiBsYWJlbD1cIlByb2R1Y3QgVGl0bGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC5pdGVtc1swXS5wcm9kdWN0X25hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpdGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbiBzZWNvbmRhcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC5pdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0UG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0Lml0ZW1zWzBdLmltYWdlc1swXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2YXJpYW50LXRhYmxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgd2lkdGg9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TS1U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC5oYXNfdmFyaWF0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0Lml0ZW1zWzBdLm1vZGlmaWVycy5tYXAoKHZhcmlhbnQsaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGFsaWduPVwibGVmdFwiPnt2YXJpYW50Lm5hbWV9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYXJnaW48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZpbmFsIFByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Vbml0ZXM8L3RkPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuaXRlbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuaXRlbXMubWFwKCh2YXJpYW50LGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5wcmljZVJ1bGVzLnByaWNlaGlrZWNvbmRpdGlvbmFsPT0nKicpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50LmZpbmFsUHJpY2UgPSAoTnVtYmVyKCB0aGlzLnN0YXRlLnByaWNlUnVsZXMucHJvZHVjdFByaWNlSGlrZSApICogcGFyc2VGbG9hdCggdmFyaWFudC5wcmljZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5zdGF0ZS5wcmljZVJ1bGVzLnByaWNlaGlrZWNvbmRpdGlvbmFsPT0nKycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50LmZpbmFsUHJpY2UgPSAoTnVtYmVyKCB0aGlzLnN0YXRlLnByaWNlUnVsZXMucHJvZHVjdFByaWNlSGlrZSApICsgcGFyc2VGbG9hdCggdmFyaWFudC5wcmljZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3ZhcmlhbnQuc2t1fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC5oYXNfdmFyaWF0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQubW9kaWZpZXJzLm1hcCgobW9kaWZpZXIsaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e21vZGlmaWVyLnZhbHVlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4kIHt2YXJpYW50LnByaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUucHJpY2VSdWxlcy5wcmljZWhpa2Vjb25kaXRpb25hbH0ge3RoaXMuc3RhdGUucHJpY2VSdWxlcy5wcm9kdWN0UHJpY2VIaWtlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaW5hbFByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFyaWFudC5maW5hbFByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaW5hbFByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiAwIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdObyBWYXJpYW50IGF2YWlsYWJsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFubmVyIGljb249e0lvSW9zSW5mb3JtYXRpb25DaXJjbGV9IHRpdGxlPVwiUHJvZHVjdCBmZXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5tc2d9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFubmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9