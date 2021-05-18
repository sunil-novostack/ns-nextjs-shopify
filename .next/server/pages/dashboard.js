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

    _defineProperty(this, "handleFecthSuggestProductTitle", async _event => {
      this.setState({
        isLoadingSPT: true
      });
      const response = await axios__WEBPACK_IMPORTED_MODULE_3___default()({
        url: '/api/deepai?',
        method: 'POST',
        data: {
          text: this.state.fetchedProduct.title
        }
      }).then(response => {
        this.setState({
          isLoadingSPT: false,
          fetchSuggestProductTitle: response.data.data
        });
        console.log(response);
      });
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
          console.log(response);

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
      isLoadingSPT: false,
      fetchSuggestProductTitle: null,
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
              lineNumber: 212,
              columnNumber: 33
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
                lineNumber: 233,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 25
        }, this), this.state.foundProduct ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
          sectioned: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
              sectioned: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
                name: "title",
                label: "Product Title",
                value: this.state.fetchedProduct.title,
                onChange: this.handleTitleChange,
                connectedRight: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                  loading: this.state.isLoadingSPT ? true : false,
                  primary: true,
                  name: "getsuggestproducttitle",
                  onClick: this.handleFecthSuggestProductTitle,
                  children: "Suggest"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 247,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 37
              }, this), this.state.fetchSuggestProductTitle ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "suggest-product-title",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  class: "auto-complete-box",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                    children: this.state.fetchSuggestProductTitle.output
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 261,
                    columnNumber: 49
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 260,
                  columnNumber: 45
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 41
              }, this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
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
                    src: this.state.fetchedProduct.images[0]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 272,
                    columnNumber: 49
                  }, this) : ''
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 269,
                  columnNumber: 41
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
                          lineNumber: 290,
                          columnNumber: 57
                        }, this), this.state.fetchedProduct.options ? this.state.fetchedProduct.options.map((option, index) => {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                            align: "left",
                            children: option.name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 295,
                            columnNumber: 69
                          }, this);
                        }) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          children: "Price"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 301,
                          columnNumber: 57
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          children: "Margin"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 302,
                          columnNumber: 57
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                          children: "Final Price"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 303,
                          columnNumber: 57
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          children: "Unites"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 304,
                          columnNumber: 57
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 289,
                        columnNumber: 53
                      }, this), this.state.fetchedProduct.items ? this.state.fetchedProduct.items.map((item, index) => {
                        if (this.state.priceRules.pricehikeconditional == '*') {
                          item.finalPrice = Number(this.state.priceRules.productPriceHike) * parseFloat(item.price);
                        } else if (this.state.priceRules.pricehikeconditional == '+') {
                          item.finalPrice = Number(this.state.priceRules.productPriceHike) + parseFloat(item.price);
                        }

                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: item.sku
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 318,
                            columnNumber: 69
                          }, this), item.options ? item.options.map((option, i) => {
                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                              children: option
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 323,
                              columnNumber: 81
                            }, this);
                          }) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: ["$ ", item.price]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 329,
                            columnNumber: 69
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: [this.state.priceRules.pricehikeconditional, " ", this.state.priceRules.productPriceHike]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 330,
                            columnNumber: 69
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
                              name: "finalPrice",
                              type: "text",
                              value: item.finalPrice,
                              onChange: this.handleFinalPrice
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 333,
                              columnNumber: 73
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 332,
                            columnNumber: 69
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            children: [" ", item.max_quantity, " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 340,
                            columnNumber: 69
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 317,
                          columnNumber: 65
                        }, this);
                      }) : 'No Variant available']
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 288,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 287,
                    columnNumber: 45
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 286,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 244,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 25
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Banner"], {
              icon: react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoIosInformationCircle"],
              title: "Product fetch",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: this.state.msg
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 359,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 358,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 357,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 205,
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-nextjs-shopify\\pages\\dashboard.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class Dashboard extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleGetThemes", () => {
      const response = axios__WEBPACK_IMPORTED_MODULE_8___default()({
        headers: {
          'shopname': js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get('shopOrigin')
        },
        url: '/api/theme',
        method: 'GET'
      }).then(response => {
        console.log(response);
      });
    });
  }

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
        lineNumber: 45,
        columnNumber: 23
      }, this),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Page"], {
        title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
          children: "Dashboard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 28
        }, this),
        fullWidth: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: () => {
            this.handleGetThemes();
          },
          children: "Check theme"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          sectioned: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
            sectioned: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SettingForm__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 23
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CrawlUrl__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 23
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 15
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DcmF3bFVybC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZXR0aW5nRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZGIvRmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGFzaGJvYXJkLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDcmF3bFVybCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJ2YWx1ZSIsInNldFN0YXRlIiwic2VhcmNoVXJsIiwic2VsZWN0ZWRFY29tIiwiZmV0Y2hlZFByb2R1Y3QiLCJzdGF0ZSIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsIl9ldmVudCIsImlzTG9hZGluZ1NQVCIsInJlc3BvbnNlIiwiYXhpb3MiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwidGV4dCIsInRoZW4iLCJmZXRjaFN1Z2dlc3RQcm9kdWN0VGl0bGUiLCJpc0xvYWRpbmciLCJwYXJhbXMiLCJlY29tIiwicHJvZHVjdF9pZCIsImRiX2VudHJ5IiwiZm91bmRQcm9kdWN0IiwicHJvZHVjdCIsIm1zZyIsImVycm9yIiwiaGVhZGVycyIsIkNvb2tpZXMiLCJnZXQiLCJwcmljZVJ1bGVzIiwicHJpY2VoaWtlY29uZGl0aW9uYWwiLCJwcm9kdWN0UHJpY2VIaWtlIiwiZmluYWxQcmljZSIsInByb2R1Y3RUaXRsZSIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0dGluZ3MiLCJyZW5kZXIiLCJoYW5kbGVGZWN0aFByb2R1Y3RTdWJtaXQiLCJsYWJlbCIsImhhbmRsZUNoYW5nZUVjb20iLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJoYW5kbGVUaXRsZUNoYW5nZSIsImhhbmRsZUZlY3RoU3VnZ2VzdFByb2R1Y3RUaXRsZSIsIm91dHB1dCIsIml0ZW1zIiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJpbWFnZXMiLCJvcHRpb25zIiwibWFwIiwib3B0aW9uIiwiaW5kZXgiLCJuYW1lIiwiaXRlbSIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJwcmljZSIsInNrdSIsImkiLCJoYW5kbGVGaW5hbFByaWNlIiwibWF4X3F1YW50aXR5IiwiSW9Jb3NJbmZvcm1hdGlvbkNpcmNsZSIsIk5hdmlnYXRpb25CYXIiLCJkYXNoYm9hcmQiLCJpbXBvcnRQcm9kdWN0cyIsInN0b3JlUHJvZHVjdHMiLCJzZXR0aW5nR2VuZXJhbCIsInNldHRpbmdQcmljaW5nUnVsZSIsImljb24iLCJGYUl0Y2hJbyIsInNlbGVjdGVkIiwiRmFDYXJ0QXJyb3dEb3duIiwiRmFTaG9wcGluZ0NhcnQiLCJJb01kU2V0dGluZ3MiLCJzdWJOYXZpZ2F0aW9uSXRlbXMiLCJJb01kTG9nT3V0Iiwib25DbGljayIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25PdXQiLCJSb3V0ZXIiLCJwdXNoIiwiU2V0dGluZ0Zvcm0iLCJSZWFjdCIsImNvbm5lY3RlZCIsImFjY291bnRDb25uZWN0aW9uTWFya3VwIiwidG9nZ2xlQ29ubmVjdGlvbiIsImNvbnRlbnQiLCJvbkFjdGlvbiIsImJpbmQiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImluaXRpYWxpemVBcHAiLCJlcnIiLCJmaWxlYmFzZSIsIkRhc2hib2FyZCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJoYW5kbGVHZXRUaGVtZXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBRWUsTUFBTUEsUUFBTixTQUF1QkMsK0NBQXZCLENBQWdDO0FBQzNDQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNmLFVBQU1BLEtBQU47O0FBRGUsZ0RBZ0RHQyxLQUFELElBQVU7QUFBQyxXQUFLQyxRQUFMLENBQWM7QUFBQ0MsaUJBQVMs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QUFTLE1BQWY7QUFBQSxpQ0FDRSxxRUFBQyx1REFBRDtBQUFRLHFCQUFTLEVBQUUsSUFBbkI7QUFBQSxvQ0FDSSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUkscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQXFCRDs7QUE5QzZDLEM7Ozs7Ozs7Ozs7O0FDakJoRCw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9kYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2Rhc2hib2FyZC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCx7IENvbXBvbmVudCwgY3JlYXRlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBcclxuICAgIExheW91dCxcclxuICAgIENhcmQsXHJcbiAgICBGb3JtLFxyXG4gICAgRm9ybUxheW91dCxcclxuICAgIFRleHRGaWVsZCxcclxuICAgIEJ1dHRvbixcclxuICAgIENob2ljZUxpc3QsXHJcbiAgICBNZWRpYUNhcmQsXHJcbiAgICBCYW5uZXIsXHJcbiAgICBEYXRhVGFibGUsXHJcbiAgICBDaGVja2JveCxcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHtJb0lvc0luZm9ybWF0aW9uQ2lyY2xlfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyYXdsVXJsIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcykgIFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNlYXJjaFVybDonJyxcclxuICAgICAgICAgICAgc2VsZWN0ZWRFY29tOlsnRWJheSddLFxyXG4gICAgICAgICAgICBmZXRjaGVkUHJvZHVjdDpudWxsLFxyXG4gICAgICAgICAgICBmb3VuZFByb2R1Y3Q6ZmFsc2UsXHJcbiAgICAgICAgICAgIGlzTG9hZGluZzpmYWxzZSxcclxuICAgICAgICAgICAgaXNMb2FkaW5nU1BUOmZhbHNlLCAgXHJcbiAgICAgICAgICAgIGZldGNoU3VnZ2VzdFByb2R1Y3RUaXRsZTpudWxsLCAgIFxyXG4gICAgICAgICAgICBtc2c6J1BsZWFzZSBjb3B5IHBhc3QgcHJvZHVjdCBwYWdlIGludG8gdXJsIGZpZWxkIGFuZCBwcmVzcyBleHRyYWN0IGJ1dHRvbicsXHJcbiAgICAgICAgICAgIHByaWNlUnVsZXMgOiB7XHJcbiAgICAgICAgICAgICAgICBwcmljZWhpa2Vjb25kaXRpb25hbDonKicsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0UHJpY2VIaWtlOicyJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmluYWxQcmljZTowLFxyXG4gICAgICAgICAgICBwcm9kdWN0VGl0bGU6JycsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF4aW9zKHtcclxuICAgICAgICAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgICAgICAgICAnc2hvcG5hbWUnOkNvb2tpZXMuZ2V0KCdzaG9wT3JpZ2luJylcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB1cmw6Jy9hcGkvc2V0dGluZ3MnLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnLCAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5zZXR0aW5nc1xyXG4gICAgICAgICAgICAgICAgPyBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VSdWxlczpyZXNwb25zZS5kYXRhLnNldHRpbmdzLnByaWNlUnVsZXNcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZVJ1bGVzIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VoaWtlY29uZGl0aW9uYWw6JyonLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFByaWNlSGlrZTonMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWFyY2hDaGFuZ2UgPSAodmFsdWUpID0+e3RoaXMuc2V0U3RhdGUoe3NlYXJjaFVybDp2YWx1ZX0pfVxyXG4gICAgaGFuZGxlQ2hhbmdlRWNvbSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkRWNvbTp2YWx1ZX0pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoVXJsOicnfSlcclxuICAgIH1cclxuICAgIGhhbmRsZVRpdGxlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGZldGNoZWRQcm9kdWN0OntcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTp2YWx1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVGaW5hbFByaWNlID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpXHJcbiAgICB9XHJcbiAgICBoYW5kbGVGZWN0aFN1Z2dlc3RQcm9kdWN0VGl0bGUgPSBhc3luYyAoX2V2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZ1NQVDp0cnVlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgIHVybCA6ICcvYXBpL2RlZXBhaT8nLFxyXG4gICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgIHRleHQ6dGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC50aXRsZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmdTUFQ6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmZXRjaFN1Z2dlc3RQcm9kdWN0VGl0bGU6cmVzcG9uc2UuZGF0YS5kYXRhXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgaGFuZGxlRmVjdGhQcm9kdWN0U3VibWl0ID0gYXN5bmMgKF9ldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0xvYWRpbmc6dHJ1ZSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgICAgICB1cmwgOiAnL2FwaS9zY3JhcC1wcm9kdWN0LWRldGFpbD8nLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOntcclxuICAgICAgICAgICAgICAgICAgICB1cmw6dGhpcy5zdGF0ZS5zZWFyY2hVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgZWNvbTp0aGlzLnN0YXRlLnNlbGVjdGVkRWNvbVswXSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2lkOjAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGJfZW50cnk6MCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhIT1udWxsKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRQcm9kdWN0OnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoZWRQcm9kdWN0IDogcmVzcG9uc2UuZGF0YS5wcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFByb2R1Y3Q6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXNnOidObyBQcm9kdWN0IGRhdGEgZm91bmQgb24gZ2l2ZW4gcHJvZHVjdCBwYWdlIGxpbmsnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5wcm9kdWN0KX1cclxuICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLnByb2R1Y3REZXRhaWwhPW51bGwpeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEucHJvZHVjdERldGFpbC52YXJpYW50cyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5wcm9kdWN0RGV0YWlsLnZhcmlhbnRzLm1hcCgodmFyaWFudCxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZhcmlhbnQucHJpY2U9PW51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50LnByaWNlID0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQucHJpY2UgPSB2YXJpYW50LnByaWNlLnRvU3RyaW5nKCkucmVwbGFjZSgnJCcsJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQuZmluYWxQcmljZSA9IChOdW1iZXIoIHRoaXMuc3RhdGUucHJpY2VSdWxlcy5wcm9kdWN0UHJpY2VIaWtlICkgKiBwYXJzZUZsb2F0KCB2YXJpYW50LnByaWNlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighdmFyaWFudC5xdHkpe3ZhcmlhbnQucXR5PTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaCh2YXJpYW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLnByb2R1Y3REZXRhaWwudmFyaWFudHMgPSBpdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLnByb2R1Y3REZXRhaWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRQcm9kdWN0OnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaGVkUHJvZHVjdCA6IHJlc3BvbnNlLmRhdGEucHJvZHVjdERldGFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRQcm9kdWN0OmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZzonTm8gUHJvZHVjdCBkYXRhIGZvdW5kIG9uIGdpdmVuIHByb2R1Y3QgcGFnZSBsaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlQWRkUHJvZHVjdCA9IGFzeW5jIChfZXZlbnQpID0+e1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdClcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNMb2FkaW5nOnRydWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3Nob3BuYW1lJzpDb29raWVzLmdldCgnc2hvcE9yaWdpbicpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdXJsOicvYXBpL3Byb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDoncG9zdCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOnRoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3RcclxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZUVkaXRQcm9kdWN0ID0gYXN5bmMgKF9ldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwb3B1cCcpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKCAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEZvcm0gbmFtZT1cInByb2R1Y3QtZmV0Y2gtZm9ybVwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZUZlY3RoUHJvZHVjdFN1Ym1pdH0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRXh0cmFjdCBQcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2l0aCB0aGUgaGVscCBvZiBzY3JhcCB1cmwgeW91IGNhbiBnZXQgcHJvZHVjdCBmcm9tIGhlcmUgdG8geW91ciBzaG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hvaWNlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNob2ljZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnRWJheScsIHZhbHVlOiAnRWJheSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdTYW1zIENsdWInLCB2YWx1ZTogJ1NhbXNDbHViJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0Jvc2NvdnMnLCB2YWx1ZTogJ0Jvc2NvdnMnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnSG9tZSBEZXBvdCcsIHZhbHVlOiAnSG9tZURlcG90J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0JlZCBCYXRoJywgdmFsdWU6ICdCZWRCYXRoYW5kQmV5b25kJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ1dhbE1hcnQnLCB2YWx1ZTogJ1dhbG1hcnQnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnQ29zdENvJywgdmFsdWU6ICdDb3N0Q28nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVjb21cIiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZEVjb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlRWNvbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXN0ZSBVUkwgSGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hVcmxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0ZWRSaWdodD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e3RoaXMuc3RhdGUuaXNMb2FkaW5nID8gdHJ1ZSA6IGZhbHNlIH0gcHJpbWFyeT17dHJ1ZX0gbmFtZT1cImZldGNocHJvZHVjdFwiIHN1Ym1pdD1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHRyYWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZvdW5kUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgID8gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IHNlY3Rpb25lZD17dHJ1ZX0+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIG5hbWU9XCJ0aXRsZVwiIGxhYmVsPVwiUHJvZHVjdCBUaXRsZVwiIHZhbHVlPXt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LnRpdGxlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaXRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGVkUmlnaHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmlzTG9hZGluZ1NQVCA/IHRydWUgOiBmYWxzZSB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e3RydWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnZXRzdWdnZXN0cHJvZHVjdHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUZlY3RoU3VnZ2VzdFByb2R1Y3RUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWdnZXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mZXRjaFN1Z2dlc3RQcm9kdWN0VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWdnZXN0LXByb2R1Y3QtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0by1jb21wbGV0ZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhPnt0aGlzLnN0YXRlLmZldGNoU3VnZ2VzdFByb2R1Y3RUaXRsZS5vdXRwdXR9PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uIHNlY29uZGFyeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC5pdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC5pbWFnZXNbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ZhcmlhbnQtdGFibGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgd2lkdGg9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlNLVTwvdGg+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0Lm9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0Lm9wdGlvbnMubWFwKChvcHRpb24saW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggYWxpZ249XCJsZWZ0XCI+e29wdGlvbi5uYW1lfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1hcmdpbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZpbmFsIFByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VW5pdGVzPC90ZD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0Lml0ZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuaXRlbXMubWFwKChpdGVtLGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLnByaWNlUnVsZXMucHJpY2VoaWtlY29uZGl0aW9uYWw9PScqJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmZpbmFsUHJpY2UgPSAoTnVtYmVyKCB0aGlzLnN0YXRlLnByaWNlUnVsZXMucHJvZHVjdFByaWNlSGlrZSApICogcGFyc2VGbG9hdCggaXRlbS5wcmljZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdGUucHJpY2VSdWxlcy5wcmljZWhpa2Vjb25kaXRpb25hbD09JysnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZmluYWxQcmljZSA9IChOdW1iZXIoIHRoaXMuc3RhdGUucHJpY2VSdWxlcy5wcm9kdWN0UHJpY2VIaWtlICkgKyBwYXJzZUZsb2F0KCBpdGVtLnByaWNlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uc2t1fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ub3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5vcHRpb25zLm1hcCgob3B0aW9uLGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e29wdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4kIHtpdGVtLnByaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLnByaWNlUnVsZXMucHJpY2VoaWtlY29uZGl0aW9uYWx9IHt0aGlzLnN0YXRlLnByaWNlUnVsZXMucHJvZHVjdFByaWNlSGlrZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpbmFsUHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0uZmluYWxQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZpbmFsUHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+IHtpdGVtLm1heF9xdWFudGl0eX0gPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTm8gVmFyaWFudCBhdmFpbGFibGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFubmVyIGljb249e0lvSW9zSW5mb3JtYXRpb25DaXJjbGV9IHRpdGxlPVwiUHJvZHVjdCBmZXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5tc2d9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFubmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgXHJcbn0iLCJpbXBvcnQgUmVhY3QseyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFxyXG4gICAgTmF2aWdhdGlvblxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGZpcmViYXNlICBmcm9tICcuLi9saWIvZGIvRmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBGYUl0Y2hJbyxGYVNob3BwaW5nQ2FydCxGYUNhcnRBcnJvd0Rvd24gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IElvTWRTZXR0aW5ncyxJb01kTG9nT3V0IH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbkJhciBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZGFzaGJvYXJkOiBwcm9wcy5kYXNoYm9hcmQgPyBwcm9wcy5kYXNoYm9hcmQgOiBmYWxzZSxcclxuICAgICAgICAgICAgaW1wb3J0UHJvZHVjdHM6IHByb3BzLmltcG9ydFByb2R1Y3RzID8gcHJvcHMuaW1wb3J0UHJvZHVjdHMgOiBmYWxzZSxcclxuICAgICAgICAgICAgc3RvcmVQcm9kdWN0czogcHJvcHMuc3RvcmVQcm9kdWN0cyA/IHByb3BzLnN0b3JlUHJvZHVjdHMgOiBmYWxzZSxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHByb3BzLnNldHRpbmdzID8gcHJvcHMuc2V0dGluZ3MgOiBmYWxzZSxcclxuICAgICAgICAgICAgc2V0dGluZ0dlbmVyYWw6IHByb3BzLnNldHRpbmdHZW5lcmFsID8gcHJvcHMuc2V0dGluZ0dlbmVyYWwgOiBmYWxzZSxcclxuICAgICAgICAgICAgc2V0dGluZ1ByaWNpbmdSdWxlOiBwcm9wcy5zZXR0aW5nUHJpY2luZ1J1bGUgPyBwcm9wcy5zZXR0aW5nUHJpY2luZ1J1bGUgOiBmYWxzZSxcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPE5hdmlnYXRpb24gbG9jYXRpb249XCIvXCI+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uLlNlY3Rpb25cclxuICAgICAgICAgICAgICAgIGl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0Rhc2hib2FyZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IEZhSXRjaElvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6Jy9kYXNoYm9hcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDp0aGlzLnN0YXRlLmRhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1Byb2R1Y3QgTGlzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IEZhQ2FydEFycm93RG93bixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOicvaW1wb3J0LXByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6dGhpcy5zdGF0ZS5pbXBvcnRQcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1N0b3JlIFByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogRmFTaG9wcGluZ0NhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDonL3N0b3JlLXByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6dGhpcy5zdGF0ZS5zdG9yZVByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU2V0dGluZ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBJb01kU2V0dGluZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDonL3NldHRpbmdzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuc3RhdGUuc2V0dGluZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yk5hdmlnYXRpb25JdGVtczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6J0dlbmVyYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDonL3NldHRpbmdzL2dlbmVyYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOnRoaXMuc3RhdGUuc2V0dGluZ0dlbmVyYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6J1ByaWNlIFJ1bGVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6Jy9zZXR0aW5ncy9wcmljZS1ydWxlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6dGhpcy5zdGF0ZS5zZXR0aW5nUHJpY2luZ1J1bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1NpZ25vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBJb01kTG9nT3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9Db29raWVzLnNldCgnbnNucycsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvc2lnbmluJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTaWduIE91dCBFcnJvcicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTmF2aWdhdGlvbj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBcclxuICAgIExheW91dCxcclxuICAgIEFjY291bnRDb25uZWN0aW9uLFxyXG4gICAgTGluayxcclxuICAgIEZvcm0sXHJcbiAgICBGb3JtTGF5b3V0LFxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY29ubmVjdGVkOkNvb2tpZXMuZ2V0KCdzaG9wT3JpZ2luJykgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29ubmVjdGVkIFN0b3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQ29ubmVjdCB0byB5b3VyIHNob3BpZnkgYWMgd2l0aCBjdXN0b20gRGFzaGJvYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5hY2NvdW50Q29ubmVjdGlvbk1hcmt1cCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlQ29ubmVjdGlvbigpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoICh7Y29ubmVjdGVkfSkgPT4gKHtjb25uZWN0ZWQ6IWNvbm5lY3RlZH0pICk7XHJcbiAgICB9XHJcblxyXG4gICAgYWNjb3VudENvbm5lY3Rpb25NYXJrdXAoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jb25uZWN0ZWRcclxuICAgICAgICA/KFxyXG4gICAgICAgICAgICA8QWNjb3VudENvbm5lY3Rpb25cclxuICAgICAgICAgICAgICAgIGF2YXRhclVybD1cIk5vdyBDb25uZWN0ZWRcIiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFjdGlvbj17e2NvbnRlbnQ6ICdDb25uZWN0ZWQnfX1cclxuICAgICAgICAgICAgICAgIGRldGFpbHM9e0Nvb2tpZXMuZ2V0KCdzaG9wT3JpZ2luJyl9XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0ZWQ9e3RoaXMuc3RhdGUuY29ubmVjdGVkfVxyXG4gICAgICAgICAgICAgICAgdGVybXNPZlNlcnZpY2U9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxwPllvdSBhcmUgbm93IENvbm5lY3RlZCB3aXRoIHlvdXIgc3RvcmUgRmluZCBvdXQgd2hhdCBwcm9kdWN0cyBsaXN0ZWQgb3IgY2hlY2sgb3V0IHdpdGggZXhwb3J0IHBvcmR1Y3QgdG8gc3RvcmU8L3A+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKVxyXG4gICAgICAgIDooXHJcbiAgICAgICAgICAgIDxBY2NvdW50Q29ubmVjdGlvblxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJDb25uY3QgVG8gU2hvcFwiXHJcbiAgICAgICAgICAgICAgICBhY3Rpb249e3tjb250ZW50OiAnQ29ubmVjdCcsb25BY3Rpb246IHRoaXMudG9nZ2xlQ29ubmVjdGlvbi5iaW5kKHRoaXMpfX1cclxuICAgICAgICAgICAgICAgIGRldGFpbHM9XCJObyBBY2NvdW50IENvbm5lY3RlZFwiXHJcbiAgICAgICAgICAgICAgICBjb25uZWN0ZWQ9e3RoaXMuc3RhdGUuY29ubmVjdGVkfVxyXG4gICAgICAgICAgICAgICAgdGVybXNPZlNlcnZpY2U9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxwPkJ5IENsaWNraW5nIENvbm5lY3QsIFlvdSBhcmUgYWdyZWUgdG8gYWNjZXB0IG91ciB0ZXJtcyBhbmQgY29uZGl0aW9uJ3MgPExpbmsgdXJsPScjJz5UZXJtcyBBbmQgQ29uZGl0aW9uczwvTGluaz4gSXRzIENvbXBsZXRseSBGcmVlIHRvIFVzZTwvcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCJcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuLypcclxudmFyIGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUJiVUEyeGdjSmlaV29yU3pXb1Z6SWdsTzlSa2lzb1FGOFwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJyZWFjdC11Y2xhYi5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vcmVhY3QtdWNsYWItZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwicmVhY3QtdWNsYWJcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwicmVhY3QtdWNsYWIuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjY4MTEyNjgzMDcwNVwiLFxyXG4gICAgYXBwSWQ6IFwiMTo2ODExMjY4MzA3MDU6d2ViOmY2ZWU3NmYxYjAwNTU3NTFlZTMxZDBcIlxyXG4gIH07XHJcbiovXHJcbnZhciBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lEVFpxZ2p6UzNTbVZKT0dSMW4wMk1lTEVEdUg2alpfOFFcIixcclxuICAgIGF1dGhEb21haW46IFwic2hvcGlmeS1hcHAtdGVzdGluZy0zMDE4MTkuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwic2hvcGlmeS1hcHAtdGVzdGluZy0zMDE4MTlcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwic2hvcGlmeS1hcHAtdGVzdGluZy0zMDE4MTkuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjQ0NTE5NDg2ODk3XCIsXHJcbiAgICBhcHBJZDogXCIxOjQ0NTE5NDg2ODk3OndlYjo4NDE3MjI2MDBjZjUxYzIyZGQzOTkwXCJcclxuICB9O1xyXG4gIC8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuICB0cnkge1xyXG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbiAgfSBjYXRjaChlcnIpe1xyXG4gICAgY29uc29sZS5sb2coZXJyKVxyXG4gIH1cclxuICBjb25zdCBmaWxlYmFzZSA9IGZpcmViYXNlOyBcclxuICBleHBvcnQgZGVmYXVsdCBmaWxlYmFzZTtcclxuICAvL2ZpbGViYXNlLmRhdGFiYXNlKCkucmVmKCk7XHJcbiAgIiwiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBQYWdlLFxyXG4gIEZyYW1lLFxyXG4gIExheW91dCxcclxuICBDYXJkLFxyXG4gIEhlYWRpbmcsXHJcbiAgQnV0dG9uLFxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGZpcmViYXNlICBmcm9tICcuLi9saWIvZGIvRmlyZWJhc2UnO1xyXG5pbXBvcnQgU2V0dGluZ0Zvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9TZXR0aW5nRm9ybSc7XHJcbmltcG9ydCBDcm93bFVybCBmcm9tICcuLi9jb21wb25lbnRzL0NyYXdsVXJsJztcclxuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyJztcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudHtcclxuICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCggYXN5bmMgKHVzZXIpPT57XHJcbiAgICAgIGlmKCF1c2VyKXtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL3NpZ25pbicpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvKlxyXG4gICAgaWYoQ29va2llcy5nZXQoJ25zbnMnKSA9PSBmYWxzZSl7XHJcbiAgICAgIFJvdXRlci5wdXNoKCcvc2lnbmluJylcclxuICAgIH1cclxuICAgICovXHJcbiAgfVxyXG4gIGhhbmRsZUdldFRoZW1lcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXhpb3Moe1xyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgJ3Nob3BuYW1lJzpDb29raWVzLmdldCgnc2hvcE9yaWdpbicpXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cmw6Jy9hcGkvdGhlbWUnLFxyXG4gICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKT0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICB9KVxyXG4gIH1cclxuICByZW5kZXIoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGcmFtZVxyXG4gICAgICAgICAgbmF2aWdhdGlvbj17PE5hdmlnYXRpb25CYXIgZGFzaGJvYXJkPXt0cnVlfSAvPn1cclxuICAgICAgPlxyXG4gICAgICAgICAgICAgIDxQYWdlIHRpdGxlPXs8SGVhZGluZz5EYXNoYm9hcmQ8L0hlYWRpbmc+fSBmdWxsV2lkdGg+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVHZXRUaGVtZXMoKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENoZWNrIHRoZW1lXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxMYXlvdXQgc2VjdGlvbmVkPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nRm9ybSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENyb3dsVXJsLz5cclxuICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICA8L0ZyYW1lPlxyXG4gICAgKTtcclxuICB9ICBcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L3BvbGFyaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9