module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/dashboard.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CrawlUrl.js":
/*!********************************!*\
  !*** ./components/CrawlUrl.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CrawlUrl; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-nextjs-shopify\\components\\CrawlUrl.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class CrawlUrl extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSearchChange", value => {
      this.setState({
        searchUrl: value
      });
    });

    _defineProperty(this, "handleChangeEcom", value => {
      this.setState({
        selectedEcom: value
      });
      this.setState({
        searchUrl: ''
      });
    });

    _defineProperty(this, "handleTitleChange", value => {
      this.setState({
        fetchedProduct: _objectSpread(_objectSpread({}, this.state.fetchedProduct), {}, {
          title: value
        })
      });
    });

    _defineProperty(this, "handleFinalPrice", value => {
      console.log(value);
    });

    _defineProperty(this, "handleFecthProductSubmit", async _event => {
      this.setState({
        isLoading: true
      });

      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_3___default()({
          url: '/api/scrap-product-detail?',
          method: 'GET',
          params: {
            url: this.state.searchUrl,
            ecom: this.state.selectedEcom[0],
            product_id: 0,
            db_entry: 0
          }
        }).then(response => {
          //console.log(response)
          if (response.data != null) {
            this.setState({
              foundProduct: true,
              fetchedProduct: response.data.product,
              isLoading: false
            });
          } else {
            this.setState({
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
      } catch (error) {
        console.log(error);
        this.setState({
          isLoading: false
        });
      }
    });

    _defineProperty(this, "handleAddProduct", async _event => {
      //console.log(this.state.fetchedProduct)
      this.setState({
        isLoading: true
      });

      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_3___default()({
          headers: {
            'shopname': js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('shopOrigin')
          },
          url: '/api/products',
          method: 'post',
          data: this.state.fetchedProduct
        }).then(response => {
          console.log(response);
          this.setState({
            isLoading: false
          });
        }); //console.log(response)
      } catch (error) {
        console.log(error);
      }
    });

    _defineProperty(this, "handleEditProduct", async _event => {
      console.log('popup');
    });

    this.state = {
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
  }

  componentDidMount() {
    try {
      const response = axios__WEBPACK_IMPORTED_MODULE_3___default()({
        headers: {
          'shopname': js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('shopOrigin')
        },
        url: '/api/settings',
        method: 'GET'
      }).then(response => {
        response.data.settings ? this.setState({
          priceRules: response.data.settings.priceRules
        }) : this.setState({
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

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      name: "product-fetch-form",
      onSubmit: this.handleFecthProductSubmit,
      method: "post",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["FormLayout"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].AnnotatedSection, {
          title: "Extract Product",
          description: "With the help of scrap url you can get product from here to your shop",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
            sectioned: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["ChoiceList"], {
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
              lineNumber: 191,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
              label: "Paste URL Here",
              name: "searchUrl",
              type: "text",
              value: this.state.searchUrl,
              onChange: this.handleSearchChange,
              connectedRight: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                loading: this.state.isLoading ? true : false,
                primary: true,
                name: "fetchproduct",
                submit: "true",
                children: "Extract"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 21
        }, this), this.state.foundProduct ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
          sectioned: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
              sectioned: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
                name: "title",
                label: "Product Title",
                value: this.state.fetchedProduct.items[0].product_name,
                onChange: this.handleTitleChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
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
                    lineNumber: 229,
                    columnNumber: 45
                  }, this) : ''
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "variant-table",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
                      width: "100%",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          children: "SKU"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 247,
                          columnNumber: 53
                        }, this), this.state.fetchedProduct.has_variations ? this.state.fetchedProduct.items[0].modifiers.map((variant, index) => {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            align: "left",
                            children: variant.name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 253,
                            columnNumber: 65
                          }, this);
                        }) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          children: "Price"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 259,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          children: "Margin"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 260,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          children: "Final Price"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 261,
                          columnNumber: 53
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          children: "Unites"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 262,
                          columnNumber: 53
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 246,
                        columnNumber: 49
                      }, this), this.state.fetchedProduct.items ? this.state.fetchedProduct.items.map((variant, index) => {
                        if (this.state.priceRules.pricehikeconditional == '*') {
                          variant.finalPrice = Number(this.state.priceRules.productPriceHike) * parseFloat(variant.price);
                        } else if (this.state.priceRules.pricehikeconditional == '+') {
                          variant.finalPrice = Number(this.state.priceRules.productPriceHike) + parseFloat(variant.price);
                        }

                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: variant.sku
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 276,
                            columnNumber: 65
                          }, this), this.state.fetchedProduct.has_variations ? variant.modifiers.map((modifier, i) => {
                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                              children: modifier.value
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 281,
                              columnNumber: 77
                            }, this);
                          }) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: ["$ ", variant.price]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 287,
                            columnNumber: 65
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: [this.state.priceRules.pricehikeconditional, " ", this.state.priceRules.productPriceHike]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 288,
                            columnNumber: 65
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
                              name: "finalPrice",
                              type: "text",
                              value: variant.finalPrice,
                              onChange: this.handleFinalPrice
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 291,
                              columnNumber: 69
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 290,
                            columnNumber: 65
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: " 0 "
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 298,
                            columnNumber: 65
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 275,
                          columnNumber: 61
                        }, this);
                      }) : 'No Variant available']
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 245,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 21
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Banner"], {
              icon: react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoIosInformationCircle"],
              title: "Product fetch",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: this.state.msg
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 318,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 317,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 17
    }, this);
  }

}

/***/ }),

/***/ "./components/NavigationBar.js":
/*!*************************************!*\
  !*** ./components/NavigationBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavigationBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_db_Firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/db/Firebase */ "./lib/db/Firebase.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-nextjs-shopify\\components\\NavigationBar.js";






class NavigationBar extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      dashboard: props.dashboard ? props.dashboard : false,
      importProducts: props.importProducts ? props.importProducts : false,
      storeProducts: props.storeProducts ? props.storeProducts : false,
      settings: props.settings ? props.settings : false,
      settingGeneral: props.settingGeneral ? props.settingGeneral : false,
      settingPricingRule: props.settingPricingRule ? props.settingPricingRule : false
    };
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Navigation"], {
      location: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Navigation"].Section, {
        items: [{
          label: 'Dashboard',
          icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaItchIo"],
          url: '/dashboard',
          selected: this.state.dashboard
        }, {
          label: 'Product List',
          icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaCartArrowDown"],
          url: '/import-products',
          selected: this.state.importProducts
        }, {
          label: 'Store Products',
          icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaShoppingCart"],
          url: '/store-products',
          selected: this.state.storeProducts
        }, {
          label: 'Settings',
          icon: react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoMdSettings"],
          url: '/settings',
          selected: this.state.settings,
          subNavigationItems: [{
            label: 'General',
            url: '/settings/general',
            selected: this.state.settingGeneral
          }, {
            label: 'Price Rules',
            url: '/settings/price-rules',
            selected: this.state.settingPricingRule
          }]
        }, {
          label: 'Signout',
          icon: react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoMdLogOut"],
          onClick: function () {
            _lib_db_Firebase__WEBPACK_IMPORTED_MODULE_4__["default"].auth().signOut().then(function () {
              //Cookies.set('nsns',false);
              next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/signin');
            }, function (error) {
              console.error('Sign Out Error', error);
            });
          }
        }]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./components/SettingForm.js":
/*!***********************************!*\
  !*** ./components/SettingForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-nextjs-shopify\\components\\SettingForm.js";



class SettingForm extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('shopOrigin') ? true : false
    };
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      method: "post",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["FormLayout"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].AnnotatedSection, {
          title: "Connected Store",
          description: "Connect to your shopify ac with custom Dashboard",
          children: this.accountConnectionMarkup()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }, this);
  }

  toggleConnection() {
    this.setState(({
      connected
    }) => ({
      connected: !connected
    }));
  }

  accountConnectionMarkup() {
    return this.state.connected ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["AccountConnection"], {
      avatarUrl: "Now Connected",
      action: {
        content: 'Connected'
      },
      details: js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('shopOrigin'),
      connected: this.state.connected,
      termsOfService: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "You are now Connected with your store Find out what products listed or check out with export porduct to store"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["AccountConnection"], {
      title: "Connct To Shop",
      action: {
        content: 'Connect',
        onAction: this.toggleConnection.bind(this)
      },
      details: "No Account Connected",
      connected: this.state.connected,
      termsOfService: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["By Clicking Connect, You are agree to accept our terms and condition's ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          url: "#",
          children: "Terms And Conditions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 95
        }, this), " Its Completly Free to Use"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./lib/db/Firebase.js":
/*!****************************!*\
  !*** ./lib/db/Firebase.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);

/*
var firebaseConfig = {
    apiKey: "AIzaSyBbUA2xgcJiZWorSzWoVzIglO9RkisoQF8",
    authDomain: "react-uclab.firebaseapp.com",
    databaseURL: "https://react-uclab-default-rtdb.firebaseio.com",
    projectId: "react-uclab",
    storageBucket: "react-uclab.appspot.com",
    messagingSenderId: "681126830705",
    appId: "1:681126830705:web:f6ee76f1b0055751ee31d0"
  };
*/

var firebaseConfig = {
  apiKey: "AIzaSyDTZqgjzS3SmVJOGR1n02MeLEDuH6jZ_8Q",
  authDomain: "shopify-app-testing-301819.firebaseapp.com",
  projectId: "shopify-app-testing-301819",
  storageBucket: "shopify-app-testing-301819.appspot.com",
  messagingSenderId: "44519486897",
  appId: "1:44519486897:web:841722600cf51c22dd3990"
}; // Initialize Firebase

try {
  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
} catch (err) {
  console.log(err);
}

const filebase = firebase__WEBPACK_IMPORTED_MODULE_0___default.a;
/* harmony default export */ __webpack_exports__["default"] = (filebase); //filebase.database().ref();

/***/ }),

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_db_Firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/db/Firebase */ "./lib/db/Firebase.js");
/* harmony import */ var _components_SettingForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SettingForm */ "./components/SettingForm.js");
/* harmony import */ var _components_CrawlUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CrawlUrl */ "./components/CrawlUrl.js");
/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavigationBar */ "./components/NavigationBar.js");

var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-nextjs-shopify\\pages\\dashboard.js";







class Dashboard extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  componentDidMount() {
    _lib_db_Firebase__WEBPACK_IMPORTED_MODULE_4__["default"].auth().onAuthStateChanged(async user => {
      if (!user) {
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/signin');
      }
    });
    /*
    if(Cookies.get('nsns') == false){
      Router.push('/signin')
    }
    */
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Frame"], {
      navigation: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        dashboard: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 23
      }, this),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Page"], {
        title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
          children: "Dashboard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 28
        }, this),
        fullWidth: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          sectioned: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
            sectioned: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SettingForm__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 23
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CrawlUrl__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 23
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this);
  }

}

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DcmF3bFVybC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZXR0aW5nRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZGIvRmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGFzaGJvYXJkLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDcmF3bFVybCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJ2YWx1ZSIsInNldFN0YXRlIiwic2VhcmNoVXJsIiwic2VsZWN0ZWRFY29tIiwiZmV0Y2hlZFByb2R1Y3QiLCJzdGF0ZSIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsIl9ldmVudCIsImlzTG9hZGluZyIsInJlc3BvbnNlIiwiYXhpb3MiLCJ1cmwiLCJtZXRob2QiLCJwYXJhbXMiLCJlY29tIiwicHJvZHVjdF9pZCIsImRiX2VudHJ5IiwidGhlbiIsImRhdGEiLCJmb3VuZFByb2R1Y3QiLCJwcm9kdWN0IiwibXNnIiwiZXJyb3IiLCJoZWFkZXJzIiwiQ29va2llcyIsImdldCIsInByaWNlUnVsZXMiLCJwcmljZWhpa2Vjb25kaXRpb25hbCIsInByb2R1Y3RQcmljZUhpa2UiLCJmaW5hbFByaWNlIiwicHJvZHVjdFRpdGxlIiwiY29tcG9uZW50RGlkTW91bnQiLCJzZXR0aW5ncyIsInJlbmRlciIsImhhbmRsZUZlY3RoUHJvZHVjdFN1Ym1pdCIsImxhYmVsIiwiaGFuZGxlQ2hhbmdlRWNvbSIsImhhbmRsZVNlYXJjaENoYW5nZSIsIml0ZW1zIiwicHJvZHVjdF9uYW1lIiwiaGFuZGxlVGl0bGVDaGFuZ2UiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImltYWdlcyIsImhhc192YXJpYXRpb25zIiwibW9kaWZpZXJzIiwibWFwIiwidmFyaWFudCIsImluZGV4IiwibmFtZSIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJwcmljZSIsInNrdSIsIm1vZGlmaWVyIiwiaSIsImhhbmRsZUZpbmFsUHJpY2UiLCJJb0lvc0luZm9ybWF0aW9uQ2lyY2xlIiwiTmF2aWdhdGlvbkJhciIsImRhc2hib2FyZCIsImltcG9ydFByb2R1Y3RzIiwic3RvcmVQcm9kdWN0cyIsInNldHRpbmdHZW5lcmFsIiwic2V0dGluZ1ByaWNpbmdSdWxlIiwiaWNvbiIsIkZhSXRjaElvIiwic2VsZWN0ZWQiLCJGYUNhcnRBcnJvd0Rvd24iLCJGYVNob3BwaW5nQ2FydCIsIklvTWRTZXR0aW5ncyIsInN1Yk5hdmlnYXRpb25JdGVtcyIsIklvTWRMb2dPdXQiLCJvbkNsaWNrIiwiZmlyZWJhc2UiLCJhdXRoIiwic2lnbk91dCIsIlJvdXRlciIsInB1c2giLCJTZXR0aW5nRm9ybSIsIlJlYWN0IiwiY29ubmVjdGVkIiwiYWNjb3VudENvbm5lY3Rpb25NYXJrdXAiLCJ0b2dnbGVDb25uZWN0aW9uIiwiY29udGVudCIsIm9uQWN0aW9uIiwiYmluZCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiaW5pdGlhbGl6ZUFwcCIsImVyciIsImZpbGViYXNlIiwiRGFzaGJvYXJkIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFFZSxNQUFNQSxRQUFOLFNBQXVCQywrQ0FBdkIsQ0FBZ0M7QUFDM0NDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2YsVUFBTUEsS0FBTjs7QUFEZSxnREErQ0dDLEtBQUQsSUFBVTtBQUFDLFdBQUtDLFFBQUwsQ0FBYztBQUFDQyxpQkFBUyxFQUFDRjtBQUFYLE9BQWQ7QUFBaUMsS0EvQzlDOztBQUFBLDhDQWdEQ0EsS0FBRCxJQUFXO0FBQzFCLFdBQUtDLFFBQUwsQ0FBYztBQUFDRSxvQkFB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LCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2Rhc2hib2FyZC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCx7IENvbXBvbmVudCwgY3JlYXRlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBcclxuICAgIExheW91dCxcclxuICAgIENhcmQsXHJcbiAgICBGb3JtLFxyXG4gICAgRm9ybUxheW91dCxcclxuICAgIFRleHRGaWVsZCxcclxuICAgIEJ1dHRvbixcclxuICAgIENob2ljZUxpc3QsXHJcbiAgICBNZWRpYUNhcmQsXHJcbiAgICBCYW5uZXIsXHJcbiAgICBEYXRhVGFibGUsXHJcbiAgICBDaGVja2JveCxcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHtJb0lvc0luZm9ybWF0aW9uQ2lyY2xlfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyYXdsVXJsIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcykgIFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNlYXJjaFVybDonJyxcclxuICAgICAgICAgICAgc2VsZWN0ZWRFY29tOlsnRWJheSddLFxyXG4gICAgICAgICAgICBmZXRjaGVkUHJvZHVjdDpudWxsLFxyXG4gICAgICAgICAgICBmb3VuZFByb2R1Y3Q6ZmFsc2UsXHJcbiAgICAgICAgICAgIGlzTG9hZGluZzpmYWxzZSwgICAgIFxyXG4gICAgICAgICAgICBtc2c6J1BsZWFzZSBjb3B5IHBhc3QgcHJvZHVjdCBwYWdlIGludG8gdXJsIGZpZWxkIGFuZCBwcmVzcyBleHRyYWN0IGJ1dHRvbicsXHJcbiAgICAgICAgICAgIHByaWNlUnVsZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBwcmljZWhpa2Vjb25kaXRpb25hbDonKicsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0UHJpY2VIaWtlOicyJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmluYWxQcmljZTowLFxyXG4gICAgICAgICAgICBwcm9kdWN0VGl0bGU6JycsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBheGlvcyh7XHJcbiAgICAgICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3Nob3BuYW1lJzpDb29raWVzLmdldCgnc2hvcE9yaWdpbicpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdXJsOicvYXBpL3NldHRpbmdzJyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJywgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuc2V0dGluZ3NcclxuICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlUnVsZXM6cmVzcG9uc2UuZGF0YS5zZXR0aW5ncy5wcmljZVJ1bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VSdWxlcyA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlaGlrZWNvbmRpdGlvbmFsOicqJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RQcmljZUhpa2U6JzInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKHZhbHVlKSA9Pnt0aGlzLnNldFN0YXRlKHtzZWFyY2hVcmw6dmFsdWV9KX1cclxuICAgIGhhbmRsZUNoYW5nZUVjb20gPSAodmFsdWUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZEVjb206dmFsdWV9KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaFVybDonJ30pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVUaXRsZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBmZXRjaGVkUHJvZHVjdDp7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6dmFsdWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlRmluYWxQcmljZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gICAgfVxyXG4gICAgaGFuZGxlRmVjdGhQcm9kdWN0U3VibWl0ID0gYXN5bmMgKF9ldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0xvYWRpbmc6dHJ1ZSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgICAgICB1cmwgOiAnL2FwaS9zY3JhcC1wcm9kdWN0LWRldGFpbD8nLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOntcclxuICAgICAgICAgICAgICAgICAgICB1cmw6dGhpcy5zdGF0ZS5zZWFyY2hVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgZWNvbTp0aGlzLnN0YXRlLnNlbGVjdGVkRWNvbVswXSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2lkOjAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGJfZW50cnk6MCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEhPW51bGwpeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFByb2R1Y3Q6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hlZFByb2R1Y3QgOiByZXNwb25zZS5kYXRhLnByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kUHJvZHVjdDpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2c6J05vIFByb2R1Y3QgZGF0YSBmb3VuZCBvbiBnaXZlbiBwcm9kdWN0IHBhZ2UgbGluaycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnByb2R1Y3QpfVxyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEucHJvZHVjdERldGFpbCE9bnVsbCl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5wcm9kdWN0RGV0YWlsLnZhcmlhbnRzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLnByb2R1Y3REZXRhaWwudmFyaWFudHMubWFwKCh2YXJpYW50LGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodmFyaWFudC5wcmljZT09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQucHJpY2UgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudC5wcmljZSA9IHZhcmlhbnQucHJpY2UudG9TdHJpbmcoKS5yZXBsYWNlKCckJywnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudC5maW5hbFByaWNlID0gKE51bWJlciggdGhpcy5zdGF0ZS5wcmljZVJ1bGVzLnByb2R1Y3RQcmljZUhpa2UgKSAqIHBhcnNlRmxvYXQoIHZhcmlhbnQucHJpY2UpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF2YXJpYW50LnF0eSl7dmFyaWFudC5xdHk9MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHZhcmlhbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEucHJvZHVjdERldGFpbC52YXJpYW50cyA9IGl0ZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEucHJvZHVjdERldGFpbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFByb2R1Y3Q6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoZWRQcm9kdWN0IDogcmVzcG9uc2UuZGF0YS5wcm9kdWN0RGV0YWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFByb2R1Y3Q6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXNnOidObyBQcm9kdWN0IGRhdGEgZm91bmQgb24gZ2l2ZW4gcHJvZHVjdCBwYWdlIGxpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzpmYWxzZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVBZGRQcm9kdWN0ID0gYXN5bmMgKF9ldmVudCkgPT57XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0xvYWRpbmc6dHJ1ZSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgICAgICAgICAnc2hvcG5hbWUnOkNvb2tpZXMuZ2V0KCdzaG9wT3JpZ2luJylcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB1cmw6Jy9hcGkvcHJvZHVjdHMnLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidwb3N0JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6dGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdFxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzpmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlRWRpdFByb2R1Y3QgPSBhc3luYyAoX2V2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3BvcHVwJylcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEZvcm0gbmFtZT1cInByb2R1Y3QtZmV0Y2gtZm9ybVwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZUZlY3RoUHJvZHVjdFN1Ym1pdH0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkV4dHJhY3QgUHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2l0aCB0aGUgaGVscCBvZiBzY3JhcCB1cmwgeW91IGNhbiBnZXQgcHJvZHVjdCBmcm9tIGhlcmUgdG8geW91ciBzaG9wXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hvaWNlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hvaWNlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0ViYXknLCB2YWx1ZTogJ0ViYXknfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdTYW1zIENsdWInLCB2YWx1ZTogJ1NhbXNDbHViJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnQm9zY292cycsIHZhbHVlOiAnQm9zY292cyd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0hvbWUgRGVwb3QnLCB2YWx1ZTogJ0hvbWVEZXBvdCd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0JlZCBCYXRoJywgdmFsdWU6ICdCZWRCYXRoYW5kQmV5b25kJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnV2FsTWFydCcsIHZhbHVlOiAnV2FsbWFydCd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0Nvc3RDbycsIHZhbHVlOiAnQ29zdENvJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZWNvbVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRFY29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlRWNvbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXN0ZSBVUkwgSGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlYXJjaFVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2hDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGVkUmlnaHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e3RoaXMuc3RhdGUuaXNMb2FkaW5nID8gdHJ1ZSA6IGZhbHNlIH0gcHJpbWFyeT17dHJ1ZX0gbmFtZT1cImZldGNocHJvZHVjdFwiIHN1Ym1pdD1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4dHJhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZvdW5kUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgID8gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQgc2VjdGlvbmVkPXt0cnVlfT4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbmFtZT1cInRpdGxlXCIgbGFiZWw9XCJQcm9kdWN0IFRpdGxlXCIgdmFsdWU9e3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuaXRlbXNbMF0ucHJvZHVjdF9uYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaXRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24gc2Vjb25kYXJ5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuaXRlbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFBvc2l0aW9uOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC5pdGVtc1swXS5pbWFnZXNbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndmFyaWFudC10YWJsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIHdpZHRoPVwiMTAwJVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U0tVPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuaGFzX3ZhcmlhdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC5pdGVtc1swXS5tb2RpZmllcnMubWFwKCh2YXJpYW50LGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBhbGlnbj1cImxlZnRcIj57dmFyaWFudC5uYW1lfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWFyZ2luPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GaW5hbCBQcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VW5pdGVzPC90ZD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0Lml0ZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0Lml0ZW1zLm1hcCgodmFyaWFudCxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUucHJpY2VSdWxlcy5wcmljZWhpa2Vjb25kaXRpb25hbD09JyonKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudC5maW5hbFByaWNlID0gKE51bWJlciggdGhpcy5zdGF0ZS5wcmljZVJ1bGVzLnByb2R1Y3RQcmljZUhpa2UgKSAqIHBhcnNlRmxvYXQoIHZhcmlhbnQucHJpY2UpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdGUucHJpY2VSdWxlcy5wcmljZWhpa2Vjb25kaXRpb25hbD09JysnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudC5maW5hbFByaWNlID0gKE51bWJlciggdGhpcy5zdGF0ZS5wcmljZVJ1bGVzLnByb2R1Y3RQcmljZUhpa2UgKSArIHBhcnNlRmxvYXQoIHZhcmlhbnQucHJpY2UpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt2YXJpYW50LnNrdX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuaGFzX3ZhcmlhdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50Lm1vZGlmaWVycy5tYXAoKG1vZGlmaWVyLGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnttb2RpZmllci52YWx1ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JCB7dmFyaWFudC5wcmljZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLnByaWNlUnVsZXMucHJpY2VoaWtlY29uZGl0aW9uYWx9IHt0aGlzLnN0YXRlLnByaWNlUnVsZXMucHJvZHVjdFByaWNlSGlrZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmluYWxQcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhcmlhbnQuZmluYWxQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmluYWxQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4gMCA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTm8gVmFyaWFudCBhdmFpbGFibGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbm5lciBpY29uPXtJb0lvc0luZm9ybWF0aW9uQ2lyY2xlfSB0aXRsZT1cIlByb2R1Y3QgZmV0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUubXNnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Jhbm5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PiBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0PiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgICBcclxuICAgIFxyXG59IiwiaW1wb3J0IFJlYWN0LHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBcclxuICAgIE5hdmlnYXRpb25cclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBmaXJlYmFzZSAgZnJvbSAnLi4vbGliL2RiL0ZpcmViYXNlJztcclxuaW1wb3J0IHsgRmFJdGNoSW8sRmFTaG9wcGluZ0NhcnQsRmFDYXJ0QXJyb3dEb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBJb01kU2V0dGluZ3MsSW9NZExvZ091dCB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb25CYXIgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRhc2hib2FyZDogcHJvcHMuZGFzaGJvYXJkID8gcHJvcHMuZGFzaGJvYXJkIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGltcG9ydFByb2R1Y3RzOiBwcm9wcy5pbXBvcnRQcm9kdWN0cyA/IHByb3BzLmltcG9ydFByb2R1Y3RzIDogZmFsc2UsXHJcbiAgICAgICAgICAgIHN0b3JlUHJvZHVjdHM6IHByb3BzLnN0b3JlUHJvZHVjdHMgPyBwcm9wcy5zdG9yZVByb2R1Y3RzIDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiBwcm9wcy5zZXR0aW5ncyA/IHByb3BzLnNldHRpbmdzIDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNldHRpbmdHZW5lcmFsOiBwcm9wcy5zZXR0aW5nR2VuZXJhbCA/IHByb3BzLnNldHRpbmdHZW5lcmFsIDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNldHRpbmdQcmljaW5nUnVsZTogcHJvcHMuc2V0dGluZ1ByaWNpbmdSdWxlID8gcHJvcHMuc2V0dGluZ1ByaWNpbmdSdWxlIDogZmFsc2UsXHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uIGxvY2F0aW9uPVwiL1wiPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbi5TZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBpdGVtcz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEYXNoYm9hcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBGYUl0Y2hJbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOicvZGFzaGJvYXJkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6dGhpcy5zdGF0ZS5kYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdQcm9kdWN0IExpc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBGYUNhcnRBcnJvd0Rvd24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDonL2ltcG9ydC1wcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOnRoaXMuc3RhdGUuaW1wb3J0UHJvZHVjdHNcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTdG9yZSBQcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IEZhU2hvcHBpbmdDYXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6Jy9zdG9yZS1wcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOnRoaXMuc3RhdGUuc3RvcmVQcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1NldHRpbmdzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogSW9NZFNldHRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6Jy9zZXR0aW5ncycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0aGlzLnN0YXRlLnNldHRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJOYXZpZ2F0aW9uSXRlbXM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOidHZW5lcmFsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6Jy9zZXR0aW5ncy9nZW5lcmFsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDp0aGlzLnN0YXRlLnNldHRpbmdHZW5lcmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOidQcmljZSBSdWxlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOicvc2V0dGluZ3MvcHJpY2UtcnVsZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOnRoaXMuc3RhdGUuc2V0dGluZ1ByaWNpbmdSdWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTaWdub3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogSW9NZExvZ091dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQ29va2llcy5zZXQoJ25zbnMnLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL3NpZ25pbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU2lnbiBPdXQgRXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L05hdmlnYXRpb24+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCx7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgXHJcbiAgICBMYXlvdXQsXHJcbiAgICBBY2NvdW50Q29ubmVjdGlvbixcclxuICAgIExpbmssXHJcbiAgICBGb3JtLFxyXG4gICAgRm9ybUxheW91dCxcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ0Zvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNvbm5lY3RlZDpDb29raWVzLmdldCgnc2hvcE9yaWdpbicpID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNvbm5lY3RlZCBTdG9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkNvbm5lY3QgdG8geW91ciBzaG9waWZ5IGFjIHdpdGggY3VzdG9tIERhc2hib2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuYWNjb3VudENvbm5lY3Rpb25NYXJrdXAoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHRvZ2dsZUNvbm5lY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCAoe2Nvbm5lY3RlZH0pID0+ICh7Y29ubmVjdGVkOiFjb25uZWN0ZWR9KSApO1xyXG4gICAgfVxyXG5cclxuICAgIGFjY291bnRDb25uZWN0aW9uTWFya3VwKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuY29ubmVjdGVkXHJcbiAgICAgICAgPyhcclxuICAgICAgICAgICAgPEFjY291bnRDb25uZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBhdmF0YXJVcmw9XCJOb3cgQ29ubmVjdGVkXCIgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBhY3Rpb249e3tjb250ZW50OiAnQ29ubmVjdGVkJ319XHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzPXtDb29raWVzLmdldCgnc2hvcE9yaWdpbicpfVxyXG4gICAgICAgICAgICAgICAgY29ubmVjdGVkPXt0aGlzLnN0YXRlLmNvbm5lY3RlZH1cclxuICAgICAgICAgICAgICAgIHRlcm1zT2ZTZXJ2aWNlPXtcclxuICAgICAgICAgICAgICAgICAgICA8cD5Zb3UgYXJlIG5vdyBDb25uZWN0ZWQgd2l0aCB5b3VyIHN0b3JlIEZpbmQgb3V0IHdoYXQgcHJvZHVjdHMgbGlzdGVkIG9yIGNoZWNrIG91dCB3aXRoIGV4cG9ydCBwb3JkdWN0IHRvIHN0b3JlPC9wPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIClcclxuICAgICAgICA6KFxyXG4gICAgICAgICAgICA8QWNjb3VudENvbm5lY3Rpb25cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29ubmN0IFRvIFNob3BcIlxyXG4gICAgICAgICAgICAgICAgYWN0aW9uPXt7Y29udGVudDogJ0Nvbm5lY3QnLG9uQWN0aW9uOiB0aGlzLnRvZ2dsZUNvbm5lY3Rpb24uYmluZCh0aGlzKX19XHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzPVwiTm8gQWNjb3VudCBDb25uZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgY29ubmVjdGVkPXt0aGlzLnN0YXRlLmNvbm5lY3RlZH1cclxuICAgICAgICAgICAgICAgIHRlcm1zT2ZTZXJ2aWNlPXtcclxuICAgICAgICAgICAgICAgICAgICA8cD5CeSBDbGlja2luZyBDb25uZWN0LCBZb3UgYXJlIGFncmVlIHRvIGFjY2VwdCBvdXIgdGVybXMgYW5kIGNvbmRpdGlvbidzIDxMaW5rIHVybD0nIyc+VGVybXMgQW5kIENvbmRpdGlvbnM8L0xpbms+IEl0cyBDb21wbGV0bHkgRnJlZSB0byBVc2U8L3A+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiXHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcbi8qXHJcbnZhciBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lCYlVBMnhnY0ppWldvclN6V29WeklnbE85Umtpc29RRjhcIixcclxuICAgIGF1dGhEb21haW46IFwicmVhY3QtdWNsYWIuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL3JlYWN0LXVjbGFiLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcInJlYWN0LXVjbGFiXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcInJlYWN0LXVjbGFiLmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI2ODExMjY4MzA3MDVcIixcclxuICAgIGFwcElkOiBcIjE6NjgxMTI2ODMwNzA1OndlYjpmNmVlNzZmMWIwMDU1NzUxZWUzMWQwXCJcclxuICB9O1xyXG4qL1xyXG52YXIgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5RFRacWdqelMzU21WSk9HUjFuMDJNZUxFRHVINmpaXzhRXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcInNob3BpZnktYXBwLXRlc3RpbmctMzAxODE5LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcInNob3BpZnktYXBwLXRlc3RpbmctMzAxODE5XCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcInNob3BpZnktYXBwLXRlc3RpbmctMzAxODE5LmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI0NDUxOTQ4Njg5N1wiLFxyXG4gICAgYXBwSWQ6IFwiMTo0NDUxOTQ4Njg5Nzp3ZWI6ODQxNzIyNjAwY2Y1MWMyMmRkMzk5MFwiXHJcbiAgfTtcclxuICAvLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbiAgdHJ5IHtcclxuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG4gIH0gY2F0Y2goZXJyKXtcclxuICAgIGNvbnNvbGUubG9nKGVycilcclxuICB9XHJcbiAgY29uc3QgZmlsZWJhc2UgPSBmaXJlYmFzZTsgXHJcbiAgZXhwb3J0IGRlZmF1bHQgZmlsZWJhc2U7XHJcbiAgLy9maWxlYmFzZS5kYXRhYmFzZSgpLnJlZigpO1xyXG4gICIsImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgUGFnZSxcclxuICBGcmFtZSxcclxuICBMYXlvdXQsXHJcbiAgQ2FyZCxcclxuICBIZWFkaW5nLFxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGZpcmViYXNlICBmcm9tICcuLi9saWIvZGIvRmlyZWJhc2UnO1xyXG5pbXBvcnQgU2V0dGluZ0Zvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9TZXR0aW5nRm9ybSc7XHJcbmltcG9ydCBDcm93bFVybCBmcm9tICcuLi9jb21wb25lbnRzL0NyYXdsVXJsJztcclxuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoIGFzeW5jICh1c2VyKT0+e1xyXG4gICAgICBpZighdXNlcil7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9zaWduaW4nKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLypcclxuICAgIGlmKENvb2tpZXMuZ2V0KCduc25zJykgPT0gZmFsc2Upe1xyXG4gICAgICBSb3V0ZXIucHVzaCgnL3NpZ25pbicpXHJcbiAgICB9XHJcbiAgICAqL1xyXG4gIH1cclxuICByZW5kZXIoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGcmFtZVxyXG4gICAgICAgICAgbmF2aWdhdGlvbj17PE5hdmlnYXRpb25CYXIgZGFzaGJvYXJkPXt0cnVlfSAvPn1cclxuICAgICAgPlxyXG4gICAgICAgICAgICAgIDxQYWdlIHRpdGxlPXs8SGVhZGluZz5EYXNoYm9hcmQ8L0hlYWRpbmc+fSBmdWxsV2lkdGg+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxMYXlvdXQgc2VjdGlvbmVkPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nRm9ybSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENyb3dsVXJsLz5cclxuICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICA8L0ZyYW1lPlxyXG4gICAgKTtcclxuICB9ICBcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L3BvbGFyaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9