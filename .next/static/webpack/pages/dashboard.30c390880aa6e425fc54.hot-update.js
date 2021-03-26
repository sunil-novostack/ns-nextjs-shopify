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
        productTitle: value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleFinalPrice", function (value) {
      console.log(value);
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
      finalPrice: 0,
      productTitle: ''
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
                lineNumber: 188,
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
                  lineNumber: 209,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
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
                  lineNumber: 221,
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
                      lineNumber: 226,
                      columnNumber: 45
                    }, this) : ''
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 223,
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
                            lineNumber: 244,
                            columnNumber: 53
                          }, this), this.state.fetchedProduct.has_variations ? this.state.fetchedProduct.items[0].modifiers.map(function (variant, index) {
                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                              align: "left",
                              children: variant.name
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 250,
                              columnNumber: 65
                            }, _this3);
                          }) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            children: "Price"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 256,
                            columnNumber: 53
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            children: "Margin"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 257,
                            columnNumber: 53
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            children: "Final Price"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 258,
                            columnNumber: 53
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: "Unites"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 259,
                            columnNumber: 53
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 243,
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
                              lineNumber: 273,
                              columnNumber: 65
                            }, _this3), _this3.state.fetchedProduct.has_variations ? variant.modifiers.map(function (modifier, i) {
                              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                                children: modifier.value
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 278,
                                columnNumber: 77
                              }, _this3);
                            }) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                              children: ["$ ", variant.price]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 284,
                              columnNumber: 65
                            }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                              children: [_this3.state.priceRules.pricehikeconditional, " ", _this3.state.priceRules.productPriceHike]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 285,
                              columnNumber: 65
                            }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
                                name: "finalPrice",
                                type: "text",
                                value: variant.finalPrice,
                                onChange: _this3.handleFinalPrice
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 288,
                                columnNumber: 69
                              }, _this3)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 287,
                              columnNumber: 65
                            }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                              children: " 0 "
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 295,
                              columnNumber: 65
                            }, _this3)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 272,
                            columnNumber: 61
                          }, _this3);
                        }) : 'No Variant available']
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 242,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 241,
                      columnNumber: 41
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 240,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
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
                  lineNumber: 315,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 314,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmF3bFVybC5qcyJdLCJuYW1lcyI6WyJDcmF3bFVybCIsInByb3BzIiwidmFsdWUiLCJzZXRTdGF0ZSIsInNlYXJjaFVybCIsInNlbGVjdGVkRWNvbSIsInByb2R1Y3RUaXRsZSIsImNvbnNvbGUiLCJsb2ciLCJfZXZlbnQiLCJpc0xvYWRpbmciLCJheGlvcyIsInVybCIsIm1ldGhvZCIsInBhcmFtcyIsInN0YXRlIiwiZWNvbSIsInByb2R1Y3RfaWQiLCJkYl9lbnRyeSIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJmb3VuZFByb2R1Y3QiLCJmZXRjaGVkUHJvZHVjdCIsInByb2R1Y3QiLCJtc2ciLCJoZWFkZXJzIiwiQ29va2llcyIsImdldCIsInByaWNlUnVsZXMiLCJwcmljZWhpa2Vjb25kaXRpb25hbCIsInByb2R1Y3RQcmljZUhpa2UiLCJmaW5hbFByaWNlIiwic2V0dGluZ3MiLCJlcnJvciIsImhhbmRsZUZlY3RoUHJvZHVjdFN1Ym1pdCIsImxhYmVsIiwiaGFuZGxlQ2hhbmdlRWNvbSIsImhhbmRsZVNlYXJjaENoYW5nZSIsIml0ZW1zIiwicHJvZHVjdF9uYW1lIiwiaGFuZGxlVGl0bGVDaGFuZ2UiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImltYWdlcyIsImhhc192YXJpYXRpb25zIiwibW9kaWZpZXJzIiwibWFwIiwidmFyaWFudCIsImluZGV4IiwibmFtZSIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJwcmljZSIsInNrdSIsIm1vZGlmaWVyIiwiaSIsImhhbmRsZUZpbmFsUHJpY2UiLCJJb0lvc0luZm9ybWF0aW9uQ2lyY2xlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBYUE7QUFDQTtBQUNBOztJQUVxQkEsUTs7Ozs7QUFDakIsb0JBQVlDLEtBQVosRUFBbUI7QUFB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QUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZDLGdCQWdHRyxxRUFBQyx3REFBRDtBQUFBLG1DQUNJLHFFQUFDLHdEQUFELENBQVEsT0FBUjtBQUFBLHFDQUNJLHFFQUFDLHdEQUFEO0FBQVEsb0JBQUksRUFBRUMsc0VBQWQ7QUFBc0MscUJBQUssRUFBQyxlQUE1QztBQUFBLHVDQUNJO0FBQUEsNEJBQUksS0FBSzNDLEtBQUwsQ0FBV1U7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWxJSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRlI7QUFpSkg7Ozs7RUFqVGlDa0MsZ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjMwYzM5MDg4MGFhNmU0MjVmYzU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyBDb21wb25lbnQsIGNyZWF0ZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgXHJcbiAgICBMYXlvdXQsXHJcbiAgICBDYXJkLFxyXG4gICAgRm9ybSxcclxuICAgIEZvcm1MYXlvdXQsXHJcbiAgICBUZXh0RmllbGQsXHJcbiAgICBCdXR0b24sXHJcbiAgICBDaG9pY2VMaXN0LFxyXG4gICAgTWVkaWFDYXJkLFxyXG4gICAgQmFubmVyLFxyXG4gICAgRGF0YVRhYmxlLFxyXG4gICAgQ2hlY2tib3gsXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB7SW9Jb3NJbmZvcm1hdGlvbkNpcmNsZX0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmF3bFVybCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzZWFyY2hVcmw6JycsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkRWNvbTpbJ0ViYXknXSxcclxuICAgICAgICAgICAgZmV0Y2hlZFByb2R1Y3Q6bnVsbCxcclxuICAgICAgICAgICAgZm91bmRQcm9kdWN0OmZhbHNlLFxyXG4gICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2UsICAgICBcclxuICAgICAgICAgICAgbXNnOidQbGVhc2UgY29weSBwYXN0IHByb2R1Y3QgcGFnZSBpbnRvIHVybCBmaWVsZCBhbmQgcHJlc3MgZXh0cmFjdCBidXR0b24nLFxyXG4gICAgICAgICAgICBwcmljZVJ1bGVzIDoge1xyXG4gICAgICAgICAgICAgICAgcHJpY2VoaWtlY29uZGl0aW9uYWw6JyonLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdFByaWNlSGlrZTonMicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbmFsUHJpY2U6MCxcclxuICAgICAgICAgICAgcHJvZHVjdFRpdGxlOicnLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICAgICAgICdzaG9wbmFtZSc6Q29va2llcy5nZXQoJ3Nob3BPcmlnaW4nKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVybDonL2FwaS9zZXR0aW5ncycsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCcsICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLnNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICA/IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZVJ1bGVzOnJlc3BvbnNlLmRhdGEuc2V0dGluZ3MucHJpY2VSdWxlc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlUnVsZXMgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZWhpa2Vjb25kaXRpb25hbDonKicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UHJpY2VIaWtlOicyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlYXJjaENoYW5nZSA9ICh2YWx1ZSkgPT57dGhpcy5zZXRTdGF0ZSh7c2VhcmNoVXJsOnZhbHVlfSl9XHJcbiAgICBoYW5kbGVDaGFuZ2VFY29tID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRFY29tOnZhbHVlfSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2hVcmw6Jyd9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlVGl0bGVDaGFuZ2UgPSAodmFsdWUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcHJvZHVjdFRpdGxlOnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGhhbmRsZUZpbmFsUHJpY2UgPSAodmFsdWUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgIH1cclxuICAgIGhhbmRsZUZlY3RoUHJvZHVjdFN1Ym1pdCA9IGFzeW5jIChfZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNMb2FkaW5nOnRydWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgdXJsIDogJy9hcGkvc2NyYXAtcHJvZHVjdC1kZXRhaWw/JyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICAgICAgICAgIHBhcmFtczp7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOnRoaXMuc3RhdGUuc2VhcmNoVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIGVjb206dGhpcy5zdGF0ZS5zZWxlY3RlZEVjb21bMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pZDowLFxyXG4gICAgICAgICAgICAgICAgICAgIGRiX2VudHJ5OjAsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhIT1udWxsKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRQcm9kdWN0OnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoZWRQcm9kdWN0IDogcmVzcG9uc2UuZGF0YS5wcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFByb2R1Y3Q6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXNnOidObyBQcm9kdWN0IGRhdGEgZm91bmQgb24gZ2l2ZW4gcHJvZHVjdCBwYWdlIGxpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5wcm9kdWN0KX1cclxuICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLnByb2R1Y3REZXRhaWwhPW51bGwpeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEucHJvZHVjdERldGFpbC52YXJpYW50cyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5wcm9kdWN0RGV0YWlsLnZhcmlhbnRzLm1hcCgodmFyaWFudCxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZhcmlhbnQucHJpY2U9PW51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50LnByaWNlID0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQucHJpY2UgPSB2YXJpYW50LnByaWNlLnRvU3RyaW5nKCkucmVwbGFjZSgnJCcsJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQuZmluYWxQcmljZSA9IChOdW1iZXIoIHRoaXMuc3RhdGUucHJpY2VSdWxlcy5wcm9kdWN0UHJpY2VIaWtlICkgKiBwYXJzZUZsb2F0KCB2YXJpYW50LnByaWNlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighdmFyaWFudC5xdHkpe3ZhcmlhbnQucXR5PTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaCh2YXJpYW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLnByb2R1Y3REZXRhaWwudmFyaWFudHMgPSBpdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnByb2R1Y3REZXRhaWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRQcm9kdWN0OnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaGVkUHJvZHVjdCA6IHJlc3BvbnNlLmRhdGEucHJvZHVjdERldGFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRQcm9kdWN0OmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZzonTm8gUHJvZHVjdCBkYXRhIGZvdW5kIG9uIGdpdmVuIHByb2R1Y3QgcGFnZSBsaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlQWRkUHJvZHVjdCA9IGFzeW5jIChfZXZlbnQpID0+e1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdClcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNMb2FkaW5nOnRydWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3Nob3BuYW1lJzpDb29raWVzLmdldCgnc2hvcE9yaWdpbicpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdXJsOicvYXBpL3Byb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDoncG9zdCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOnRoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3RcclxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZUVkaXRQcm9kdWN0ID0gYXN5bmMgKF9ldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwb3B1cCcpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxGb3JtIG5hbWU9XCJwcm9kdWN0LWZldGNoLWZvcm1cIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVGZWN0aFByb2R1Y3RTdWJtaXR9IG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFeHRyYWN0IFByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldpdGggdGhlIGhlbHAgb2Ygc2NyYXAgdXJsIHlvdSBjYW4gZ2V0IHByb2R1Y3QgZnJvbSBoZXJlIHRvIHlvdXIgc2hvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENob2ljZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNob2ljZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdFYmF5JywgdmFsdWU6ICdFYmF5J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnU2FtcyBDbHViJywgdmFsdWU6ICdTYW1zQ2x1Yid9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0Jvc2NvdnMnLCB2YWx1ZTogJ0Jvc2NvdnMnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdIb21lIERlcG90JywgdmFsdWU6ICdIb21lRGVwb3QnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdCZWQgQmF0aCcsIHZhbHVlOiAnQmVkQmF0aGFuZEJleW9uZCd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ1dhbE1hcnQnLCB2YWx1ZTogJ1dhbG1hcnQnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdDb3N0Q28nLCB2YWx1ZTogJ0Nvc3RDbyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVjb21cIiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnNlbGVjdGVkRWNvbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUVjb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzdGUgVVJMIEhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hVcmxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3RlZFJpZ2h0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmlzTG9hZGluZyA/IHRydWUgOiBmYWxzZSB9IHByaW1hcnk9e3RydWV9IG5hbWU9XCJmZXRjaHByb2R1Y3RcIiBzdWJtaXQ9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHRyYWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mb3VuZFByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICA/ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IHNlY3Rpb25lZD17dHJ1ZX0+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIG5hbWU9XCJ0aXRsZVwiIGxhYmVsPVwiUHJvZHVjdCBUaXRsZVwiIHZhbHVlPXt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0Lml0ZW1zWzBdLnByb2R1Y3RfbmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGl0bGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uIHNlY29uZGFyeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0Lml0ZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuaXRlbXNbMF0uaW1hZ2VzWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ZhcmlhbnQtdGFibGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSB3aWR0aD1cIjEwMCVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNLVTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0Lmhhc192YXJpYXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuaXRlbXNbMF0ubW9kaWZpZXJzLm1hcCgodmFyaWFudCxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggYWxpZ249XCJsZWZ0XCI+e3ZhcmlhbnQubmFtZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1hcmdpbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RmluYWwgUHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlVuaXRlczwvdGQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC5pdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC5pdGVtcy5tYXAoKHZhcmlhbnQsaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLnByaWNlUnVsZXMucHJpY2VoaWtlY29uZGl0aW9uYWw9PScqJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQuZmluYWxQcmljZSA9IChOdW1iZXIoIHRoaXMuc3RhdGUucHJpY2VSdWxlcy5wcm9kdWN0UHJpY2VIaWtlICkgKiBwYXJzZUZsb2F0KCB2YXJpYW50LnByaWNlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnN0YXRlLnByaWNlUnVsZXMucHJpY2VoaWtlY29uZGl0aW9uYWw9PScrJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQuZmluYWxQcmljZSA9IChOdW1iZXIoIHRoaXMuc3RhdGUucHJpY2VSdWxlcy5wcm9kdWN0UHJpY2VIaWtlICkgKyBwYXJzZUZsb2F0KCB2YXJpYW50LnByaWNlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dmFyaWFudC5za3V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0Lmhhc192YXJpYXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudC5tb2RpZmllcnMubWFwKChtb2RpZmllcixpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57bW9kaWZpZXIudmFsdWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiQge3ZhcmlhbnQucHJpY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5wcmljZVJ1bGVzLnByaWNlaGlrZWNvbmRpdGlvbmFsfSB7dGhpcy5zdGF0ZS5wcmljZVJ1bGVzLnByb2R1Y3RQcmljZUhpa2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpbmFsUHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YXJpYW50LmZpbmFsUHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZpbmFsUHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IDAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ05vIFZhcmlhbnQgYXZhaWxhYmxlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXIgaWNvbj17SW9Jb3NJbmZvcm1hdGlvbkNpcmNsZX0gdGl0bGU9XCJQcm9kdWN0IGZldGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLm1zZ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CYW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dD4gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290IjoiIn0=