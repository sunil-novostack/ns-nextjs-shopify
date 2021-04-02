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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DcmF3bFVybC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZXR0aW5nRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZGIvRmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGFzaGJvYXJkLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDcmF3bFVybCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJ2YWx1ZSIsInNldFN0YXRlIiwic2VhcmNoVXJsIiwic2VsZWN0ZWRFY29tIiwiZmV0Y2hlZFByb2R1Y3QiLCJzdGF0ZSIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsIl9ldmVudCIsImlzTG9hZGluZ1NQVCIsInJlc3BvbnNlIiwiYXhpb3MiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwidGV4dCIsInRoZW4iLCJmZXRjaFN1Z2dlc3RQcm9kdWN0VGl0bGUiLCJpc0xvYWRpbmciLCJwYXJhbXMiLCJlY29tIiwicHJvZHVjdF9pZCIsImRiX2VudHJ5IiwiZm91bmRQcm9kdWN0IiwicHJvZHVjdCIsIm1zZyIsImVycm9yIiwiaGVhZGVycyIsIkNvb2tpZXMiLCJnZXQiLCJwcmljZVJ1bGVzIiwicHJpY2VoaWtlY29uZGl0aW9uYWwiLCJwcm9kdWN0UHJpY2VIaWtlIiwiZmluYWxQcmljZSIsInByb2R1Y3RUaXRsZSIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0dGluZ3MiLCJyZW5kZXIiLCJoYW5kbGVGZWN0aFByb2R1Y3RTdWJtaXQiLCJsYWJlbCIsImhhbmRsZUNoYW5nZUVjb20iLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJoYW5kbGVUaXRsZUNoYW5nZSIsImhhbmRsZUZlY3RoU3VnZ2VzdFByb2R1Y3RUaXRsZSIsIm91dHB1dCIsIml0ZW1zIiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJpbWFnZXMiLCJvcHRpb25zIiwibWFwIiwib3B0aW9uIiwiaW5kZXgiLCJuYW1lIiwiaXRlbSIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJwcmljZSIsInNrdSIsImkiLCJoYW5kbGVGaW5hbFByaWNlIiwibWF4X3F1YW50aXR5IiwiSW9Jb3NJbmZvcm1hdGlvbkNpcmNsZSIsIk5hdmlnYXRpb25CYXIiLCJkYXNoYm9hcmQiLCJpbXBvcnRQcm9kdWN0cyIsInN0b3JlUHJvZHVjdHMiLCJzZXR0aW5nR2VuZXJhbCIsInNldHRpbmdQcmljaW5nUnVsZSIsImljb24iLCJGYUl0Y2hJbyIsInNlbGVjdGVkIiwiRmFDYXJ0QXJyb3dEb3duIiwiRmFTaG9wcGluZ0NhcnQiLCJJb01kU2V0dGluZ3MiLCJzdWJOYXZpZ2F0aW9uSXRlbXMiLCJJb01kTG9nT3V0Iiwib25DbGljayIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25PdXQiLCJSb3V0ZXIiLCJwdXNoIiwiU2V0dGluZ0Zvcm0iLCJSZWFjdCIsImNvbm5lY3RlZCIsImFjY291bnRDb25uZWN0aW9uTWFya3VwIiwidG9nZ2xlQ29ubmVjdGlvbiIsImNvbnRlbnQiLCJvbkFjdGlvbiIsImJpbmQiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImluaXRpYWxpemVBcHAiLCJlcnIiLCJmaWxlYmFzZSIsIkRhc2hib2FyZCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBRWUsTUFBTUEsUUFBTixTQUF1QkMsK0NBQXZCLENBQWdDO0FBQzNDQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNmLFVBQU1BLEtBQU47O0FBRGUsZ0RBZ0RHQyxLQUFELElBQVU7QUFBQyxXQUFLQyxRQUFMLENBQWM7QUFBQ0MsaUJBQVMsRUFBQ0Y7QUFBWCxPQUFkO0FBQWlDLEtBaEQ5Qzs7QUFBQSw4Q0FpRENBLEtBQUQsSUFBVztBQUMxQixXQUFLQyxRQUFMLENBQWM7QUFBQ0Usb0JBQVksRUFBQ0g7QUFBZCxPQUFkO0FBQ0EsV0FBS0MsUUFBTCxDQUFjO0FBQUNDLGlCQUFTLEVBQUM7QUFBWCxPQUFkO0FBQ0gsS0FwRGtCOztBQUFBLCtDQXFERUYsS0FBRCxJQUFXO0FBQzNCLFdBQUtDLFFBQUwsQ0FBYztBQUNWRyxzQkFBYyxrQ0FDUCxLQUFLQyxLQUFMLENBQVdELGNBREo7QUFFVkUsZUFBSyxFQUFDTjtBQUZJO0FBREosT0FBZDtBQU1ILEtBNURrQjs7QUFBQSw4Q0E2RENBLEtBQUQsSUFBVztBQUMxQk8sYUFBTyxDQUFDQyxHQUFSLENBQVlSLEtBQVo7QUFDSCxLQS9Ea0I7O0FBQUEsNERBZ0VjLE1BQU9TLE1BQVAsSUFBa0I7QUFDL0MsV0FBS1IsUUFBTCxDQUFjO0FBQ1ZTLG9CQUFZLEVBQUM7QUFESCxPQUFkO0FBSUEsWUFBTUMsUUFBUSxHQUFHLE1BQU1DLDRDQUFLLENBQUM7QUFDekJDLFdBQUcsRUFBRyxjQURtQjtBQUV6QkMsY0FBTSxFQUFDLE1BRmtCO0FBR3pCQyxZQUFJLEVBQUM7QUFDREMsY0FBSSxFQUFDLEtBQUtYLEtBQUwsQ0FBV0QsY0FBWCxDQUEwQkU7QUFEOUI7QUFIb0IsT0FBRCxDQUFMLENBTXBCVyxJQU5vQixDQU1kTixRQUFELElBQWE7QUFDakIsYUFBS1YsUUFBTCxDQUFjO0FBQ1ZTLHNCQUFZLEVBQUMsS0FESDtBQUVWUSxrQ0FBd0IsRUFBQ1AsUUFBUSxDQUFDSSxJQUFULENBQWNBO0FBRjdCLFNBQWQ7QUFLQVIsZUFBTyxDQUFDQyxHQUFSLENBQVlHLFFBQVo7QUFDSCxPQWJzQixDQUF2QjtBQWVILEtBcEZrQjs7QUFBQSxzREFxRlEsTUFBT0YsTUFBUCxJQUFrQjtBQUN6QyxXQUFLUixRQUFMLENBQWM7QUFDVmtCLGlCQUFTLEVBQUM7QUFEQSxPQUFkOztBQUdBLFVBQUc7QUFDQyxjQUFNUixRQUFRLEdBQUcsTUFBTUMsNENBQUssQ0FBQztBQUN6QkMsYUFBRyxFQUFHLDRCQURtQjtBQUV6QkMsZ0JBQU0sRUFBQyxLQUZrQjtBQUd6Qk0sZ0JBQU0sRUFBQztBQUNIUCxlQUFHLEVBQUMsS0FBS1IsS0FBTCxDQUFXSCxTQURaO0FBRUhtQixnQkFBSSxFQUFDLEtBQUtoQixLQUFMLENBQVdGLFlBQVgsQ0FBd0IsQ0FBeEIsQ0FGRjtBQUdIbUIsc0JBQVUsRUFBQyxDQUhSO0FBSUhDLG9CQUFRLEVBQUM7QUFKTjtBQUhrQixTQUFELENBQUwsQ0FTcEJOLElBVG9CLENBU2ROLFFBQUQsSUFBYTtBQUNqQkosaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRyxRQUFaOztBQUNBLGNBQUdBLFFBQVEsQ0FBQ0ksSUFBVCxJQUFlLElBQWxCLEVBQXVCO0FBQ25CLGlCQUFLZCxRQUFMLENBQWM7QUFDVnVCLDBCQUFZLEVBQUMsSUFESDtBQUVWcEIsNEJBQWMsRUFBR08sUUFBUSxDQUFDSSxJQUFULENBQWNVLE9BRnJCO0FBR1ZOLHVCQUFTLEVBQUM7QUFIQSxhQUFkO0FBS0gsV0FORCxNQU1LO0FBQ0QsaUJBQUtsQixRQUFMLENBQWM7QUFDVnVCLDBCQUFZLEVBQUMsS0FESDtBQUVWTCx1QkFBUyxFQUFDLEtBRkE7QUFHVk8saUJBQUcsRUFBQztBQUhNLGFBQWQ7QUFLSDs7QUFDRDtBQUFDbkIsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRyxRQUFRLENBQUNJLElBQVQsQ0FBY1UsT0FBMUI7QUFBbUM7QUFDcEM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYSxTQXpEc0IsQ0FBdkI7QUEwREgsT0EzREQsQ0EyREMsT0FBTUUsS0FBTixFQUFZO0FBQ1RwQixlQUFPLENBQUNDLEdBQVIsQ0FBWW1CLEtBQVo7QUFDQSxhQUFLMUIsUUFBTCxDQUFjO0FBQ1ZrQixtQkFBUyxFQUFDO0FBREEsU0FBZDtBQUdIO0FBQ0osS0ExSmtCOztBQUFBLDhDQTJKQSxNQUFPVixNQUFQLElBQWlCO0FBQ2hDO0FBQ0EsV0FBS1IsUUFBTCxDQUFjO0FBQ1ZrQixpQkFBUyxFQUFDO0FBREEsT0FBZDs7QUFHQSxVQUFHO0FBQ0MsY0FBTVIsUUFBUSxHQUFHLE1BQU1DLDRDQUFLLENBQUM7QUFDekJnQixpQkFBTyxFQUFDO0FBQ0osd0JBQVdDLGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBRFAsV0FEaUI7QUFJekJqQixhQUFHLEVBQUMsZUFKcUI7QUFLekJDLGdCQUFNLEVBQUMsTUFMa0I7QUFNekJDLGNBQUksRUFBQyxLQUFLVixLQUFMLENBQVdEO0FBTlMsU0FBRCxDQUFMLENBT3BCYSxJQVBvQixDQU9kTixRQUFELElBQWE7QUFDakJKLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUcsUUFBWjtBQUNBLGVBQUtWLFFBQUwsQ0FBYztBQUNWa0IscUJBQVMsRUFBQztBQURBLFdBQWQ7QUFHSCxTQVpzQixDQUF2QixDQURELENBY0M7QUFDSCxPQWZELENBZUMsT0FBTVEsS0FBTixFQUFZO0FBQ1RwQixlQUFPLENBQUNDLEdBQVIsQ0FBWW1CLEtBQVo7QUFDSDtBQUNKLEtBbExrQjs7QUFBQSwrQ0FtTEMsTUFBT2xCLE1BQVAsSUFBa0I7QUFDbENGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDSCxLQXJMa0I7O0FBRWYsU0FBS0gsS0FBTCxHQUFhO0FBQ1RILGVBQVMsRUFBQyxFQUREO0FBRVRDLGtCQUFZLEVBQUMsQ0FBQyxNQUFELENBRko7QUFHVEMsb0JBQWMsRUFBQyxJQUhOO0FBSVRvQixrQkFBWSxFQUFDLEtBSko7QUFLVEwsZUFBUyxFQUFDLEtBTEQ7QUFNVFQsa0JBQVksRUFBQyxLQU5KO0FBT1RRLDhCQUF3QixFQUFDLElBUGhCO0FBUVRRLFNBQUcsRUFBQyx1RUFSSztBQVNUSyxnQkFBVSxFQUFHO0FBQ1RDLDRCQUFvQixFQUFDLEdBRFo7QUFFVEMsd0JBQWdCLEVBQUM7QUFGUixPQVRKO0FBYVRDLGdCQUFVLEVBQUMsQ0FiRjtBQWNUQyxrQkFBWSxFQUFDO0FBZEosS0FBYjtBQWdCSDs7QUFFREMsbUJBQWlCLEdBQUU7QUFDZixRQUFHO0FBQ0MsWUFBTXpCLFFBQVEsR0FBR0MsNENBQUssQ0FBQztBQUNsQmdCLGVBQU8sRUFBQztBQUNMLHNCQUFXQyxnREFBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUROLFNBRFU7QUFJbkJqQixXQUFHLEVBQUMsZUFKZTtBQUtuQkMsY0FBTSxFQUFDO0FBTFksT0FBRCxDQUFMLENBT2RHLElBUGMsQ0FPUk4sUUFBRCxJQUFhO0FBQ2pCQSxnQkFBUSxDQUFDSSxJQUFULENBQWNzQixRQUFkLEdBRUksS0FBS3BDLFFBQUwsQ0FBYztBQUNWOEIsb0JBQVUsRUFBQ3BCLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjc0IsUUFBZCxDQUF1Qk47QUFEeEIsU0FBZCxDQUZKLEdBTUksS0FBSzlCLFFBQUwsQ0FBYztBQUNWOEIsb0JBQVUsRUFBRztBQUNUQyxnQ0FBb0IsRUFBQyxHQURaO0FBRVRDLDRCQUFnQixFQUFDO0FBRlI7QUFESCxTQUFkLENBTko7QUFZSCxPQXBCZ0IsQ0FBakI7QUFxQkgsS0F0QkQsQ0FzQkMsT0FBTU4sS0FBTixFQUFZO0FBQ1RwQixhQUFPLENBQUNDLEdBQVIsQ0FBWW1CLEtBQVo7QUFDSDtBQUNKOztBQXlJRFcsUUFBTSxHQUFFO0FBQ0osd0JBQ1EscUVBQUMscURBQUQ7QUFBTSxVQUFJLEVBQUMsb0JBQVg7QUFBZ0MsY0FBUSxFQUFFLEtBQUtDLHdCQUEvQztBQUF5RSxZQUFNLEVBQUMsTUFBaEY7QUFBQSw2QkFDSSxxRUFBQywyREFBRDtBQUFBLGdDQUNJLHFFQUFDLHVEQUFELENBQVEsZ0JBQVI7QUFDSSxlQUFLLEVBQUMsaUJBRFY7QUFFSSxxQkFBVyxFQUFDLHVFQUZoQjtBQUFBLGlDQUlJLHFFQUFDLHFEQUFEO0FBQU0scUJBQVMsTUFBZjtBQUFBLG9DQUNJLHFFQUFDLDJEQUFEO0FBQ0EscUJBQU8sRUFBRSxDQUNMO0FBQUNDLHFCQUFLLEVBQUUsTUFBUjtBQUFnQnhDLHFCQUFLLEVBQUU7QUFBdkIsZUFESyxFQUVMO0FBQUN3QyxxQkFBSyxFQUFFLFdBQVI7QUFBcUJ4QyxxQkFBSyxFQUFFO0FBQTVCLGVBRkssRUFHTDtBQUFDd0MscUJBQUssRUFBRSxTQUFSO0FBQW1CeEMscUJBQUssRUFBRTtBQUExQixlQUhLLEVBSUw7QUFBQ3dDLHFCQUFLLEVBQUUsWUFBUjtBQUFzQnhDLHFCQUFLLEVBQUU7QUFBN0IsZUFKSyxFQUtMO0FBQUN3QyxxQkFBSyxFQUFFLFVBQVI7QUFBb0J4QyxxQkFBSyxFQUFFO0FBQTNCLGVBTEssRUFNTDtBQUFDd0MscUJBQUssRUFBRSxTQUFSO0FBQW1CeEMscUJBQUssRUFBRTtBQUExQixlQU5LLEVBT0w7QUFBQ3dDLHFCQUFLLEVBQUUsUUFBUjtBQUFrQnhDLHFCQUFLLEVBQUU7QUFBekIsZUFQSyxDQURUO0FBVUEsa0JBQUksRUFBQyxNQVZMO0FBV0Esc0JBQVEsRUFBRSxLQUFLSyxLQUFMLENBQVdGLFlBWHJCO0FBWUEsc0JBQVEsRUFBRSxLQUFLc0M7QUFaZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBZUkscUVBQUMsMERBQUQ7QUFDSSxtQkFBSyxFQUFDLGdCQURWO0FBRUksa0JBQUksRUFBQyxXQUZUO0FBR0ksa0JBQUksRUFBQyxNQUhUO0FBSUksbUJBQUssRUFBRSxLQUFLcEMsS0FBTCxDQUFXSCxTQUp0QjtBQUtJLHNCQUFRLEVBQUUsS0FBS3dDLGtCQUxuQjtBQU1JLDRCQUFjLGVBQ1YscUVBQUMsdURBQUQ7QUFBUSx1QkFBTyxFQUFFLEtBQUtyQyxLQUFMLENBQVdjLFNBQVgsR0FBdUIsSUFBdkIsR0FBOEIsS0FBL0M7QUFBdUQsdUJBQU8sRUFBRSxJQUFoRTtBQUFzRSxvQkFBSSxFQUFDLGNBQTNFO0FBQTBGLHNCQUFNLEVBQUMsTUFBakc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFrQ0MsS0FBS2QsS0FBTCxDQUFXbUIsWUFBWCxnQkFFRyxxRUFBQyx1REFBRDtBQUFRLG1CQUFTLEVBQUUsSUFBbkI7QUFBQSxpQ0FDSSxxRUFBQyx1REFBRCxDQUFRLE9BQVI7QUFBQSxtQ0FDSSxxRUFBQyxxREFBRDtBQUFNLHVCQUFTLE1BQWY7QUFBQSxzQ0FDSSxxRUFBQywwREFBRDtBQUFXLG9CQUFJLEVBQUMsT0FBaEI7QUFBd0IscUJBQUssRUFBQyxlQUE5QjtBQUE4QyxxQkFBSyxFQUFFLEtBQUtuQixLQUFMLENBQVdELGNBQVgsQ0FBMEJFLEtBQS9FO0FBQXNGLHdCQUFRLEVBQUUsS0FBS3FDLGlCQUFyRztBQUNBLDhCQUFjLGVBQ1YscUVBQUMsdURBQUQ7QUFDSSx5QkFBTyxFQUFFLEtBQUt0QyxLQUFMLENBQVdLLFlBQVgsR0FBMEIsSUFBMUIsR0FBaUMsS0FEOUM7QUFFSSx5QkFBTyxFQUFFLElBRmI7QUFHSSxzQkFBSSxFQUFDLHdCQUhUO0FBSUkseUJBQU8sRUFBRSxLQUFLa0MsOEJBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixFQWFLLEtBQUt2QyxLQUFMLENBQVdhLHdCQUFYLGdCQUVHO0FBQUsseUJBQVMsRUFBQyx1QkFBZjtBQUFBLHVDQUNJO0FBQUssdUJBQUssRUFBQyxtQkFBWDtBQUFBLHlDQUNJO0FBQUEsOEJBQVcsS0FBS2IsS0FBTCxDQUFXYSx3QkFBWCxDQUFvQzJCO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSCxHQVFHLEVBckJSLGVBd0JJLHFFQUFDLHVEQUFEO0FBQUEsd0NBQ0kscUVBQUMsdURBQUQsQ0FBUSxPQUFSO0FBQWdCLDJCQUFTLE1BQXpCO0FBQUEsNEJBQ0ssS0FBS3hDLEtBQUwsQ0FBV0QsY0FBWCxDQUEwQjBDLEtBQTFCLGdCQUVHO0FBQ0EsdUJBQUcsRUFBQyxFQURKO0FBRUEseUJBQUssRUFBQyxNQUZOO0FBR0EsMEJBQU0sRUFBQyxNQUhQO0FBSUEseUJBQUssRUFBRTtBQUNQQywrQkFBUyxFQUFFLE9BREo7QUFFUEMsb0NBQWMsRUFBRTtBQUZULHFCQUpQO0FBUUEsdUJBQUcsRUFBRSxLQUFLM0MsS0FBTCxDQUFXRCxjQUFYLENBQTBCNkMsTUFBMUIsQ0FBaUMsQ0FBakM7QUFSTDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZILEdBYUc7QUFkUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLGVBa0JJLHFFQUFDLHVEQUFELENBQVEsT0FBUjtBQUFBLHlDQUNJO0FBQUssNkJBQVMsRUFBQyxlQUFmO0FBQUEsMkNBQ0k7QUFBTywyQkFBSyxFQUFDLE1BQWI7QUFBQSw4Q0FDSTtBQUFBLGdEQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURKLEVBRUssS0FBSzVDLEtBQUwsQ0FBV0QsY0FBWCxDQUEwQjhDLE9BQTFCLEdBRUcsS0FBSzdDLEtBQUwsQ0FBV0QsY0FBWCxDQUEwQjhDLE9BQTFCLENBQWtDQyxHQUFsQyxDQUFzQyxDQUFDQyxNQUFELEVBQVFDLEtBQVIsS0FBa0I7QUFDcEQsOENBQ0k7QUFBSSxpQ0FBSyxFQUFDLE1BQVY7QUFBQSxzQ0FBa0JELE1BQU0sQ0FBQ0U7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FESjtBQUdILHlCQUpELENBRkgsR0FRRyxFQVZSLGVBWUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBWkosZUFhSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FiSixlQWNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQWRKLGVBZUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURKLEVBbUJLLEtBQUtqRCxLQUFMLENBQVdELGNBQVgsQ0FBMEIwQyxLQUExQixHQUVHLEtBQUt6QyxLQUFMLENBQVdELGNBQVgsQ0FBMEIwQyxLQUExQixDQUFnQ0ssR0FBaEMsQ0FBb0MsQ0FBQ0ksSUFBRCxFQUFNRixLQUFOLEtBQWdCO0FBRWhELDRCQUFHLEtBQUtoRCxLQUFMLENBQVcwQixVQUFYLENBQXNCQyxvQkFBdEIsSUFBNEMsR0FBL0MsRUFBbUQ7QUFDL0N1Qiw4QkFBSSxDQUFDckIsVUFBTCxHQUFtQnNCLE1BQU0sQ0FBRSxLQUFLbkQsS0FBTCxDQUFXMEIsVUFBWCxDQUFzQkUsZ0JBQXhCLENBQU4sR0FBbUR3QixVQUFVLENBQUVGLElBQUksQ0FBQ0csS0FBUCxDQUFoRjtBQUNILHlCQUZELE1BRU0sSUFBRyxLQUFLckQsS0FBTCxDQUFXMEIsVUFBWCxDQUFzQkMsb0JBQXRCLElBQTRDLEdBQS9DLEVBQW1EO0FBQ3JEdUIsOEJBQUksQ0FBQ3JCLFVBQUwsR0FBbUJzQixNQUFNLENBQUUsS0FBS25ELEtBQUwsQ0FBVzBCLFVBQVgsQ0FBc0JFLGdCQUF4QixDQUFOLEdBQW1Ed0IsVUFBVSxDQUFFRixJQUFJLENBQUNHLEtBQVAsQ0FBaEY7QUFDSDs7QUFDRCw0Q0FDSTtBQUFBLGtEQUNJO0FBQUEsc0NBQUtILElBQUksQ0FBQ0k7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURKLEVBRUtKLElBQUksQ0FBQ0wsT0FBTCxHQUVHSyxJQUFJLENBQUNMLE9BQUwsQ0FBYUMsR0FBYixDQUFpQixDQUFDQyxNQUFELEVBQVFRLENBQVIsS0FBYztBQUMzQixnREFDSTtBQUFBLHdDQUFLUjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBREo7QUFHSCwyQkFKRCxDQUZILEdBUUcsRUFWUixlQVlJO0FBQUEsNkNBQU9HLElBQUksQ0FBQ0csS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBWkosZUFhSTtBQUFBLHVDQUFLLEtBQUtyRCxLQUFMLENBQVcwQixVQUFYLENBQXNCQyxvQkFBM0IsT0FBa0QsS0FBSzNCLEtBQUwsQ0FBVzBCLFVBQVgsQ0FBc0JFLGdCQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBYkosZUFlSTtBQUFBLG1EQUNJLHFFQUFDLDBEQUFEO0FBQ0ksa0NBQUksRUFBQyxZQURUO0FBRUksa0NBQUksRUFBQyxNQUZUO0FBR0ksbUNBQUssRUFBRXNCLElBQUksQ0FBQ3JCLFVBSGhCO0FBSUksc0NBQVEsRUFBRSxLQUFLMkI7QUFKbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBZkosZUF1Qkk7QUFBQSw0Q0FBTU4sSUFBSSxDQUFDTyxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0F2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURKO0FBMkJILHVCQWxDRCxDQUZILEdBc0NHLHNCQXpEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSCxnQkFvSEcscUVBQUMsdURBQUQ7QUFBQSxpQ0FDSSxxRUFBQyx1REFBRCxDQUFRLE9BQVI7QUFBQSxtQ0FDSSxxRUFBQyx1REFBRDtBQUFRLGtCQUFJLEVBQUVDLHFFQUFkO0FBQXNDLG1CQUFLLEVBQUMsZUFBNUM7QUFBQSxxQ0FDSTtBQUFBLDBCQUFJLEtBQUsxRCxLQUFMLENBQVdxQjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdEpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEUjtBQW9LSDs7QUE3VjBDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEIvQztBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxNQUFNc0MsYUFBTixTQUE0Qm5FLCtDQUE1QixDQUFxQztBQUNoREMsYUFBVyxDQUFDQyxLQUFELEVBQU87QUFDZCxVQUFNQSxLQUFOO0FBQ0EsU0FBS00sS0FBTCxHQUFhO0FBQ1Q0RCxlQUFTLEVBQUVsRSxLQUFLLENBQUNrRSxTQUFOLEdBQWtCbEUsS0FBSyxDQUFDa0UsU0FBeEIsR0FBb0MsS0FEdEM7QUFFVEMsb0JBQWMsRUFBRW5FLEtBQUssQ0FBQ21FLGNBQU4sR0FBdUJuRSxLQUFLLENBQUNtRSxjQUE3QixHQUE4QyxLQUZyRDtBQUdUQyxtQkFBYSxFQUFFcEUsS0FBSyxDQUFDb0UsYUFBTixHQUFzQnBFLEtBQUssQ0FBQ29FLGFBQTVCLEdBQTRDLEtBSGxEO0FBSVQ5QixjQUFRLEVBQUV0QyxLQUFLLENBQUNzQyxRQUFOLEdBQWlCdEMsS0FBSyxDQUFDc0MsUUFBdkIsR0FBa0MsS0FKbkM7QUFLVCtCLG9CQUFjLEVBQUVyRSxLQUFLLENBQUNxRSxjQUFOLEdBQXVCckUsS0FBSyxDQUFDcUUsY0FBN0IsR0FBOEMsS0FMckQ7QUFNVEMsd0JBQWtCLEVBQUV0RSxLQUFLLENBQUNzRSxrQkFBTixHQUEyQnRFLEtBQUssQ0FBQ3NFLGtCQUFqQyxHQUFzRDtBQU5qRSxLQUFiO0FBUUg7O0FBQ0QvQixRQUFNLEdBQUU7QUFDSix3QkFDSSxxRUFBQywyREFBRDtBQUFZLGNBQVEsRUFBQyxHQUFyQjtBQUFBLDZCQUNBLHFFQUFDLDJEQUFELENBQVksT0FBWjtBQUNJLGFBQUssRUFBRSxDQUNIO0FBQ0lFLGVBQUssRUFBRSxXQURYO0FBRUk4QixjQUFJLEVBQUVDLHVEQUZWO0FBR0kxRCxhQUFHLEVBQUMsWUFIUjtBQUlJMkQsa0JBQVEsRUFBQyxLQUFLbkUsS0FBTCxDQUFXNEQ7QUFKeEIsU0FERyxFQU9IO0FBQ0l6QixlQUFLLEVBQUUsY0FEWDtBQUVJOEIsY0FBSSxFQUFFRyw4REFGVjtBQUdJNUQsYUFBRyxFQUFDLGtCQUhSO0FBSUkyRCxrQkFBUSxFQUFDLEtBQUtuRSxLQUFMLENBQVc2RDtBQUp4QixTQVBHLEVBYUg7QUFDSTFCLGVBQUssRUFBRSxnQkFEWDtBQUVJOEIsY0FBSSxFQUFFSSw2REFGVjtBQUdJN0QsYUFBRyxFQUFDLGlCQUhSO0FBSUkyRCxrQkFBUSxFQUFDLEtBQUtuRSxLQUFMLENBQVc4RDtBQUp4QixTQWJHLEVBbUJIO0FBQ0kzQixlQUFLLEVBQUUsVUFEWDtBQUVJOEIsY0FBSSxFQUFFSywyREFGVjtBQUdJOUQsYUFBRyxFQUFDLFdBSFI7QUFJSTJELGtCQUFRLEVBQUUsS0FBS25FLEtBQUwsQ0FBV2dDLFFBSnpCO0FBS0l1Qyw0QkFBa0IsRUFBQyxDQUNmO0FBQ0lwQyxpQkFBSyxFQUFDLFNBRFY7QUFFSTNCLGVBQUcsRUFBQyxtQkFGUjtBQUdJMkQsb0JBQVEsRUFBQyxLQUFLbkUsS0FBTCxDQUFXK0Q7QUFIeEIsV0FEZSxFQU1mO0FBQ0k1QixpQkFBSyxFQUFDLGFBRFY7QUFFSTNCLGVBQUcsRUFBQyx1QkFGUjtBQUdJMkQsb0JBQVEsRUFBQyxLQUFLbkUsS0FBTCxDQUFXZ0U7QUFIeEIsV0FOZTtBQUx2QixTQW5CRyxFQXFDSDtBQUNJN0IsZUFBSyxFQUFFLFNBRFg7QUFFSThCLGNBQUksRUFBRU8seURBRlY7QUFHSUMsaUJBQU8sRUFBQyxZQUFVO0FBQ2RDLG9FQUFRLENBQUNDLElBQVQsR0FBZ0JDLE9BQWhCLEdBQTBCaEUsSUFBMUIsQ0FBK0IsWUFBVztBQUN0QztBQUNBaUUsZ0VBQU0sQ0FBQ0MsSUFBUCxDQUFZLFNBQVo7QUFDSCxhQUhELEVBR0csVUFBU3hELEtBQVQsRUFBZ0I7QUFDbkJwQixxQkFBTyxDQUFDb0IsS0FBUixDQUFjLGdCQUFkLEVBQWdDQSxLQUFoQztBQUNDLGFBTEQ7QUFNSDtBQVZMLFNBckNHO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQXdESDs7QUFyRStDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZwRDtBQUNBO0FBT0E7QUFDZSxNQUFNeUQsV0FBTixTQUEwQkMsNENBQUssQ0FBQ3hGLFNBQWhDLENBQXlDO0FBQ3BEQyxhQUFXLENBQUNDLEtBQUQsRUFBTztBQUNkLFVBQU1BLEtBQU47QUFDQSxTQUFLTSxLQUFMLEdBQWE7QUFDVGlGLGVBQVMsRUFBQ3pELGdEQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLElBQTRCLElBQTVCLEdBQW1DO0FBRHBDLEtBQWI7QUFHSDs7QUFDRFEsUUFBTSxHQUFFO0FBQ0osd0JBQ1EscUVBQUMscURBQUQ7QUFBTSxZQUFNLEVBQUMsTUFBYjtBQUFBLDZCQUNJLHFFQUFDLDJEQUFEO0FBQUEsK0JBQ0kscUVBQUMsdURBQUQsQ0FBUSxnQkFBUjtBQUNJLGVBQUssRUFBQyxpQkFEVjtBQUVJLHFCQUFXLEVBQUMsa0RBRmhCO0FBQUEsb0JBSUMsS0FBS2lELHVCQUFMO0FBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFI7QUFZSDs7QUFDREMsa0JBQWdCLEdBQUU7QUFDZCxTQUFLdkYsUUFBTCxDQUFlLENBQUM7QUFBQ3FGO0FBQUQsS0FBRCxNQUFrQjtBQUFDQSxlQUFTLEVBQUMsQ0FBQ0E7QUFBWixLQUFsQixDQUFmO0FBQ0g7O0FBRURDLHlCQUF1QixHQUFFO0FBQ3JCLFdBQU8sS0FBS2xGLEtBQUwsQ0FBV2lGLFNBQVgsZ0JBRUgscUVBQUMsa0VBQUQ7QUFDSSxlQUFTLEVBQUMsZUFEZDtBQUVJLFlBQU0sRUFBRTtBQUFDRyxlQUFPLEVBQUU7QUFBVixPQUZaO0FBR0ksYUFBTyxFQUFFNUQsZ0RBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosQ0FIYjtBQUlJLGVBQVMsRUFBRSxLQUFLekIsS0FBTCxDQUFXaUYsU0FKMUI7QUFLSSxvQkFBYyxlQUNWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZHLGdCQWFILHFFQUFDLGtFQUFEO0FBQ0ksV0FBSyxFQUFDLGdCQURWO0FBRUksWUFBTSxFQUFFO0FBQUNHLGVBQU8sRUFBRSxTQUFWO0FBQW9CQyxnQkFBUSxFQUFFLEtBQUtGLGdCQUFMLENBQXNCRyxJQUF0QixDQUEyQixJQUEzQjtBQUE5QixPQUZaO0FBR0ksYUFBTyxFQUFDLHNCQUhaO0FBSUksZUFBUyxFQUFFLEtBQUt0RixLQUFMLENBQVdpRixTQUoxQjtBQUtJLG9CQUFjLGVBQ1Y7QUFBQSwyR0FBMEUscUVBQUMscURBQUQ7QUFBTSxhQUFHLEVBQUMsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJKO0FBdUJIOztBQWpEbUQsQzs7Ozs7Ozs7Ozs7O0FDUnhEO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFJTSxjQUFjLEdBQUc7QUFDakJDLFFBQU0sRUFBRSx5Q0FEUztBQUVqQkMsWUFBVSxFQUFFLDRDQUZLO0FBR2pCQyxXQUFTLEVBQUUsNEJBSE07QUFJakJDLGVBQWEsRUFBRSx3Q0FKRTtBQUtqQkMsbUJBQWlCLEVBQUUsYUFMRjtBQU1qQkMsT0FBSyxFQUFFO0FBTlUsQ0FBckIsQyxDQVFFOztBQUNBLElBQUk7QUFDRm5CLGlEQUFRLENBQUNvQixhQUFULENBQXVCUCxjQUF2QjtBQUNELENBRkQsQ0FFRSxPQUFNUSxHQUFOLEVBQVU7QUFDVjdGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZNEYsR0FBWjtBQUNEOztBQUNELE1BQU1DLFFBQVEsR0FBR3RCLCtDQUFqQjtBQUNlc0IsdUVBQWYsRSxDQUNBLDRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JGO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsTUFBTUMsU0FBTixTQUF3QnpHLCtDQUF4QixDQUFpQztBQUM5Q3VDLG1CQUFpQixHQUFFO0FBQ2pCMkMsNERBQVEsQ0FBQ0MsSUFBVCxHQUFnQnVCLGtCQUFoQixDQUFvQyxNQUFPQyxJQUFQLElBQWM7QUFDaEQsVUFBRyxDQUFDQSxJQUFKLEVBQVM7QUFDUHRCLDBEQUFNLENBQUNDLElBQVAsQ0FBWSxTQUFaO0FBQ0Q7QUFDRixLQUpEO0FBS0E7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNHOztBQUNEN0MsUUFBTSxHQUFFO0FBQ04sd0JBQ0UscUVBQUMsc0RBQUQ7QUFDSSxnQkFBVSxlQUFFLHFFQUFDLGlFQUFEO0FBQWUsaUJBQVMsRUFBRTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRGhCO0FBQUEsNkJBR1EscUVBQUMscURBQUQ7QUFBTSxhQUFLLGVBQUUscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQWI7QUFBMkMsaUJBQVMsTUFBcEQ7QUFBQSwrQkFDRSxxRUFBQyxxREFBRDtBQUFNLG1CQUFTLE1BQWY7QUFBQSxpQ0FDRSxxRUFBQyx1REFBRDtBQUFRLHFCQUFTLEVBQUUsSUFBbkI7QUFBQSxvQ0FDSSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUkscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQWNEOztBQTVCNkMsQzs7Ozs7Ozs7Ozs7QUNmaEQsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9kYXNoYm9hcmQuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QseyBDb21wb25lbnQsIGNyZWF0ZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgXHJcbiAgICBMYXlvdXQsXHJcbiAgICBDYXJkLFxyXG4gICAgRm9ybSxcclxuICAgIEZvcm1MYXlvdXQsXHJcbiAgICBUZXh0RmllbGQsXHJcbiAgICBCdXR0b24sXHJcbiAgICBDaG9pY2VMaXN0LFxyXG4gICAgTWVkaWFDYXJkLFxyXG4gICAgQmFubmVyLFxyXG4gICAgRGF0YVRhYmxlLFxyXG4gICAgQ2hlY2tib3gsXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB7SW9Jb3NJbmZvcm1hdGlvbkNpcmNsZX0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmF3bFVybCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzZWFyY2hVcmw6JycsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkRWNvbTpbJ0ViYXknXSxcclxuICAgICAgICAgICAgZmV0Y2hlZFByb2R1Y3Q6bnVsbCxcclxuICAgICAgICAgICAgZm91bmRQcm9kdWN0OmZhbHNlLFxyXG4gICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIGlzTG9hZGluZ1NQVDpmYWxzZSwgIFxyXG4gICAgICAgICAgICBmZXRjaFN1Z2dlc3RQcm9kdWN0VGl0bGU6bnVsbCwgICBcclxuICAgICAgICAgICAgbXNnOidQbGVhc2UgY29weSBwYXN0IHByb2R1Y3QgcGFnZSBpbnRvIHVybCBmaWVsZCBhbmQgcHJlc3MgZXh0cmFjdCBidXR0b24nLFxyXG4gICAgICAgICAgICBwcmljZVJ1bGVzIDoge1xyXG4gICAgICAgICAgICAgICAgcHJpY2VoaWtlY29uZGl0aW9uYWw6JyonLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdFByaWNlSGlrZTonMicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZpbmFsUHJpY2U6MCxcclxuICAgICAgICAgICAgcHJvZHVjdFRpdGxlOicnLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBheGlvcyh7XHJcbiAgICAgICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3Nob3BuYW1lJzpDb29raWVzLmdldCgnc2hvcE9yaWdpbicpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdXJsOicvYXBpL3NldHRpbmdzJyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJywgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuc2V0dGluZ3NcclxuICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlUnVsZXM6cmVzcG9uc2UuZGF0YS5zZXR0aW5ncy5wcmljZVJ1bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VSdWxlcyA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlaGlrZWNvbmRpdGlvbmFsOicqJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RQcmljZUhpa2U6JzInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKHZhbHVlKSA9Pnt0aGlzLnNldFN0YXRlKHtzZWFyY2hVcmw6dmFsdWV9KX1cclxuICAgIGhhbmRsZUNoYW5nZUVjb20gPSAodmFsdWUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZEVjb206dmFsdWV9KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaFVybDonJ30pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVUaXRsZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBmZXRjaGVkUHJvZHVjdDp7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6dmFsdWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlRmluYWxQcmljZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gICAgfVxyXG4gICAgaGFuZGxlRmVjdGhTdWdnZXN0UHJvZHVjdFRpdGxlID0gYXN5bmMgKF9ldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0xvYWRpbmdTUFQ6dHJ1ZSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICB1cmwgOiAnL2FwaS9kZWVwYWk/JyxcclxuICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OnRoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QudGl0bGUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nU1BUOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZmV0Y2hTdWdnZXN0UHJvZHVjdFRpdGxlOnJlc3BvbnNlLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGhhbmRsZUZlY3RoUHJvZHVjdFN1Ym1pdCA9IGFzeW5jIChfZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNMb2FkaW5nOnRydWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgdXJsIDogJy9hcGkvc2NyYXAtcHJvZHVjdC1kZXRhaWw/JyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICAgICAgICAgIHBhcmFtczp7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOnRoaXMuc3RhdGUuc2VhcmNoVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIGVjb206dGhpcy5zdGF0ZS5zZWxlY3RlZEVjb21bMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pZDowLFxyXG4gICAgICAgICAgICAgICAgICAgIGRiX2VudHJ5OjAsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSE9bnVsbCl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kUHJvZHVjdDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaGVkUHJvZHVjdCA6IHJlc3BvbnNlLmRhdGEucHJvZHVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRQcm9kdWN0OmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZzonTm8gUHJvZHVjdCBkYXRhIGZvdW5kIG9uIGdpdmVuIHByb2R1Y3QgcGFnZSBsaW5rJyxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEucHJvZHVjdCl9XHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5wcm9kdWN0RGV0YWlsIT1udWxsKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLnByb2R1Y3REZXRhaWwudmFyaWFudHMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEucHJvZHVjdERldGFpbC52YXJpYW50cy5tYXAoKHZhcmlhbnQsaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih2YXJpYW50LnByaWNlPT1udWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudC5wcmljZSA9IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50LnByaWNlID0gdmFyaWFudC5wcmljZS50b1N0cmluZygpLnJlcGxhY2UoJyQnLCcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50LmZpbmFsUHJpY2UgPSAoTnVtYmVyKCB0aGlzLnN0YXRlLnByaWNlUnVsZXMucHJvZHVjdFByaWNlSGlrZSApICogcGFyc2VGbG9hdCggdmFyaWFudC5wcmljZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXZhcmlhbnQucXR5KXt2YXJpYW50LnF0eT0wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2godmFyaWFudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5wcm9kdWN0RGV0YWlsLnZhcmlhbnRzID0gaXRlbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5wcm9kdWN0RGV0YWlsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kUHJvZHVjdDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hlZFByb2R1Y3QgOiByZXNwb25zZS5kYXRhLnByb2R1Y3REZXRhaWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kUHJvZHVjdDpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2c6J05vIFByb2R1Y3QgZGF0YSBmb3VuZCBvbiBnaXZlbiBwcm9kdWN0IHBhZ2UgbGluaycsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZUFkZFByb2R1Y3QgPSBhc3luYyAoX2V2ZW50KSA9PntcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZzp0cnVlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICAgICAgICdzaG9wbmFtZSc6Q29va2llcy5nZXQoJ3Nob3BPcmlnaW4nKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVybDonL2FwaS9wcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTp0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVFZGl0UHJvZHVjdCA9IGFzeW5jIChfZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygncG9wdXAnKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiggICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxGb3JtIG5hbWU9XCJwcm9kdWN0LWZldGNoLWZvcm1cIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVGZWN0aFByb2R1Y3RTdWJtaXR9IG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkV4dHJhY3QgUHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldpdGggdGhlIGhlbHAgb2Ygc2NyYXAgdXJsIHlvdSBjYW4gZ2V0IHByb2R1Y3QgZnJvbSBoZXJlIHRvIHlvdXIgc2hvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENob2ljZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaG9pY2VzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0ViYXknLCB2YWx1ZTogJ0ViYXknfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnU2FtcyBDbHViJywgdmFsdWU6ICdTYW1zQ2x1Yid9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdCb3Njb3ZzJywgdmFsdWU6ICdCb3Njb3ZzJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0hvbWUgRGVwb3QnLCB2YWx1ZTogJ0hvbWVEZXBvdCd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdCZWQgQmF0aCcsIHZhbHVlOiAnQmVkQmF0aGFuZEJleW9uZCd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdXYWxNYXJ0JywgdmFsdWU6ICdXYWxtYXJ0J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0Nvc3RDbycsIHZhbHVlOiAnQ29zdENvJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlY29tXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRFY29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUVjb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzdGUgVVJMIEhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoVXJsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGVkUmlnaHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmlzTG9hZGluZyA/IHRydWUgOiBmYWxzZSB9IHByaW1hcnk9e3RydWV9IG5hbWU9XCJmZXRjaHByb2R1Y3RcIiBzdWJtaXQ9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXh0cmFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mb3VuZFByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICA/ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dCBzZWN0aW9uZWQ9e3RydWV9PiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBuYW1lPVwidGl0bGVcIiBsYWJlbD1cIlByb2R1Y3QgVGl0bGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC50aXRsZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGl0bGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3RlZFJpZ2h0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS5pc0xvYWRpbmdTUFQgPyB0cnVlIDogZmFsc2UgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXt0cnVlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ2V0c3VnZ2VzdHByb2R1Y3R0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVGZWN0aFN1Z2dlc3RQcm9kdWN0VGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VnZ2VzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZmV0Y2hTdWdnZXN0UHJvZHVjdFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VnZ2VzdC1wcm9kdWN0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dG8tY29tcGxldGUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYT57dGhpcy5zdGF0ZS5mZXRjaFN1Z2dlc3RQcm9kdWN0VGl0bGUub3V0cHV0fTwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbiBzZWNvbmRhcnk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuaXRlbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0UG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuaW1hZ2VzWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2YXJpYW50LXRhYmxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIHdpZHRoPVwiMTAwJVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TS1U8L3RoPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC5vcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC5vcHRpb25zLm1hcCgob3B0aW9uLGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGFsaWduPVwibGVmdFwiPntvcHRpb24ubmFtZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYXJnaW48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GaW5hbCBQcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlVuaXRlczwvdGQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC5pdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0Lml0ZW1zLm1hcCgoaXRlbSxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5wcmljZVJ1bGVzLnByaWNlaGlrZWNvbmRpdGlvbmFsPT0nKicpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5maW5hbFByaWNlID0gKE51bWJlciggdGhpcy5zdGF0ZS5wcmljZVJ1bGVzLnByb2R1Y3RQcmljZUhpa2UgKSAqIHBhcnNlRmxvYXQoIGl0ZW0ucHJpY2UpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnN0YXRlLnByaWNlUnVsZXMucHJpY2VoaWtlY29uZGl0aW9uYWw9PScrJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmZpbmFsUHJpY2UgPSAoTnVtYmVyKCB0aGlzLnN0YXRlLnByaWNlUnVsZXMucHJvZHVjdFByaWNlSGlrZSApICsgcGFyc2VGbG9hdCggaXRlbS5wcmljZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLnNrdX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ub3B0aW9ucy5tYXAoKG9wdGlvbixpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntvcHRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JCB7aXRlbS5wcmljZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5wcmljZVJ1bGVzLnByaWNlaGlrZWNvbmRpdGlvbmFsfSB7dGhpcy5zdGF0ZS5wcmljZVJ1bGVzLnByb2R1Y3RQcmljZUhpa2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaW5hbFByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLmZpbmFsUHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaW5hbFByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiB7aXRlbS5tYXhfcXVhbnRpdHl9IDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ05vIFZhcmlhbnQgYXZhaWxhYmxlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dD4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhbm5lciBpY29uPXtJb0lvc0luZm9ybWF0aW9uQ2lyY2xlfSB0aXRsZT1cIlByb2R1Y3QgZmV0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUubXNnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Jhbm5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PiBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0PiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgICBcclxuICAgIFxyXG59IiwiaW1wb3J0IFJlYWN0LHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBcclxuICAgIE5hdmlnYXRpb25cclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBmaXJlYmFzZSAgZnJvbSAnLi4vbGliL2RiL0ZpcmViYXNlJztcclxuaW1wb3J0IHsgRmFJdGNoSW8sRmFTaG9wcGluZ0NhcnQsRmFDYXJ0QXJyb3dEb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBJb01kU2V0dGluZ3MsSW9NZExvZ091dCB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb25CYXIgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRhc2hib2FyZDogcHJvcHMuZGFzaGJvYXJkID8gcHJvcHMuZGFzaGJvYXJkIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGltcG9ydFByb2R1Y3RzOiBwcm9wcy5pbXBvcnRQcm9kdWN0cyA/IHByb3BzLmltcG9ydFByb2R1Y3RzIDogZmFsc2UsXHJcbiAgICAgICAgICAgIHN0b3JlUHJvZHVjdHM6IHByb3BzLnN0b3JlUHJvZHVjdHMgPyBwcm9wcy5zdG9yZVByb2R1Y3RzIDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiBwcm9wcy5zZXR0aW5ncyA/IHByb3BzLnNldHRpbmdzIDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNldHRpbmdHZW5lcmFsOiBwcm9wcy5zZXR0aW5nR2VuZXJhbCA/IHByb3BzLnNldHRpbmdHZW5lcmFsIDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNldHRpbmdQcmljaW5nUnVsZTogcHJvcHMuc2V0dGluZ1ByaWNpbmdSdWxlID8gcHJvcHMuc2V0dGluZ1ByaWNpbmdSdWxlIDogZmFsc2UsXHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uIGxvY2F0aW9uPVwiL1wiPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbi5TZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBpdGVtcz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEYXNoYm9hcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBGYUl0Y2hJbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOicvZGFzaGJvYXJkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6dGhpcy5zdGF0ZS5kYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdQcm9kdWN0IExpc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBGYUNhcnRBcnJvd0Rvd24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDonL2ltcG9ydC1wcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOnRoaXMuc3RhdGUuaW1wb3J0UHJvZHVjdHNcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTdG9yZSBQcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IEZhU2hvcHBpbmdDYXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6Jy9zdG9yZS1wcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOnRoaXMuc3RhdGUuc3RvcmVQcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1NldHRpbmdzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogSW9NZFNldHRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6Jy9zZXR0aW5ncycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0aGlzLnN0YXRlLnNldHRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJOYXZpZ2F0aW9uSXRlbXM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOidHZW5lcmFsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6Jy9zZXR0aW5ncy9nZW5lcmFsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDp0aGlzLnN0YXRlLnNldHRpbmdHZW5lcmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOidQcmljZSBSdWxlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOicvc2V0dGluZ3MvcHJpY2UtcnVsZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOnRoaXMuc3RhdGUuc2V0dGluZ1ByaWNpbmdSdWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTaWdub3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogSW9NZExvZ091dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQ29va2llcy5zZXQoJ25zbnMnLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL3NpZ25pbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU2lnbiBPdXQgRXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L05hdmlnYXRpb24+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCx7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgXHJcbiAgICBMYXlvdXQsXHJcbiAgICBBY2NvdW50Q29ubmVjdGlvbixcclxuICAgIExpbmssXHJcbiAgICBGb3JtLFxyXG4gICAgRm9ybUxheW91dCxcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ0Zvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNvbm5lY3RlZDpDb29raWVzLmdldCgnc2hvcE9yaWdpbicpID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNvbm5lY3RlZCBTdG9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkNvbm5lY3QgdG8geW91ciBzaG9waWZ5IGFjIHdpdGggY3VzdG9tIERhc2hib2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuYWNjb3VudENvbm5lY3Rpb25NYXJrdXAoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHRvZ2dsZUNvbm5lY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCAoe2Nvbm5lY3RlZH0pID0+ICh7Y29ubmVjdGVkOiFjb25uZWN0ZWR9KSApO1xyXG4gICAgfVxyXG5cclxuICAgIGFjY291bnRDb25uZWN0aW9uTWFya3VwKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuY29ubmVjdGVkXHJcbiAgICAgICAgPyhcclxuICAgICAgICAgICAgPEFjY291bnRDb25uZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBhdmF0YXJVcmw9XCJOb3cgQ29ubmVjdGVkXCIgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBhY3Rpb249e3tjb250ZW50OiAnQ29ubmVjdGVkJ319XHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzPXtDb29raWVzLmdldCgnc2hvcE9yaWdpbicpfVxyXG4gICAgICAgICAgICAgICAgY29ubmVjdGVkPXt0aGlzLnN0YXRlLmNvbm5lY3RlZH1cclxuICAgICAgICAgICAgICAgIHRlcm1zT2ZTZXJ2aWNlPXtcclxuICAgICAgICAgICAgICAgICAgICA8cD5Zb3UgYXJlIG5vdyBDb25uZWN0ZWQgd2l0aCB5b3VyIHN0b3JlIEZpbmQgb3V0IHdoYXQgcHJvZHVjdHMgbGlzdGVkIG9yIGNoZWNrIG91dCB3aXRoIGV4cG9ydCBwb3JkdWN0IHRvIHN0b3JlPC9wPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIClcclxuICAgICAgICA6KFxyXG4gICAgICAgICAgICA8QWNjb3VudENvbm5lY3Rpb25cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29ubmN0IFRvIFNob3BcIlxyXG4gICAgICAgICAgICAgICAgYWN0aW9uPXt7Y29udGVudDogJ0Nvbm5lY3QnLG9uQWN0aW9uOiB0aGlzLnRvZ2dsZUNvbm5lY3Rpb24uYmluZCh0aGlzKX19XHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzPVwiTm8gQWNjb3VudCBDb25uZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgY29ubmVjdGVkPXt0aGlzLnN0YXRlLmNvbm5lY3RlZH1cclxuICAgICAgICAgICAgICAgIHRlcm1zT2ZTZXJ2aWNlPXtcclxuICAgICAgICAgICAgICAgICAgICA8cD5CeSBDbGlja2luZyBDb25uZWN0LCBZb3UgYXJlIGFncmVlIHRvIGFjY2VwdCBvdXIgdGVybXMgYW5kIGNvbmRpdGlvbidzIDxMaW5rIHVybD0nIyc+VGVybXMgQW5kIENvbmRpdGlvbnM8L0xpbms+IEl0cyBDb21wbGV0bHkgRnJlZSB0byBVc2U8L3A+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiXHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcbi8qXHJcbnZhciBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lCYlVBMnhnY0ppWldvclN6V29WeklnbE85Umtpc29RRjhcIixcclxuICAgIGF1dGhEb21haW46IFwicmVhY3QtdWNsYWIuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL3JlYWN0LXVjbGFiLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcInJlYWN0LXVjbGFiXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcInJlYWN0LXVjbGFiLmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI2ODExMjY4MzA3MDVcIixcclxuICAgIGFwcElkOiBcIjE6NjgxMTI2ODMwNzA1OndlYjpmNmVlNzZmMWIwMDU1NzUxZWUzMWQwXCJcclxuICB9O1xyXG4qL1xyXG52YXIgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5RFRacWdqelMzU21WSk9HUjFuMDJNZUxFRHVINmpaXzhRXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcInNob3BpZnktYXBwLXRlc3RpbmctMzAxODE5LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcInNob3BpZnktYXBwLXRlc3RpbmctMzAxODE5XCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcInNob3BpZnktYXBwLXRlc3RpbmctMzAxODE5LmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI0NDUxOTQ4Njg5N1wiLFxyXG4gICAgYXBwSWQ6IFwiMTo0NDUxOTQ4Njg5Nzp3ZWI6ODQxNzIyNjAwY2Y1MWMyMmRkMzk5MFwiXHJcbiAgfTtcclxuICAvLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbiAgdHJ5IHtcclxuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG4gIH0gY2F0Y2goZXJyKXtcclxuICAgIGNvbnNvbGUubG9nKGVycilcclxuICB9XHJcbiAgY29uc3QgZmlsZWJhc2UgPSBmaXJlYmFzZTsgXHJcbiAgZXhwb3J0IGRlZmF1bHQgZmlsZWJhc2U7XHJcbiAgLy9maWxlYmFzZS5kYXRhYmFzZSgpLnJlZigpO1xyXG4gICIsImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgUGFnZSxcclxuICBGcmFtZSxcclxuICBMYXlvdXQsXHJcbiAgQ2FyZCxcclxuICBIZWFkaW5nLFxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGZpcmViYXNlICBmcm9tICcuLi9saWIvZGIvRmlyZWJhc2UnO1xyXG5pbXBvcnQgU2V0dGluZ0Zvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9TZXR0aW5nRm9ybSc7XHJcbmltcG9ydCBDcm93bFVybCBmcm9tICcuLi9jb21wb25lbnRzL0NyYXdsVXJsJztcclxuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoIGFzeW5jICh1c2VyKT0+e1xyXG4gICAgICBpZighdXNlcil7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9zaWduaW4nKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLypcclxuICAgIGlmKENvb2tpZXMuZ2V0KCduc25zJykgPT0gZmFsc2Upe1xyXG4gICAgICBSb3V0ZXIucHVzaCgnL3NpZ25pbicpXHJcbiAgICB9XHJcbiAgICAqL1xyXG4gIH1cclxuICByZW5kZXIoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGcmFtZVxyXG4gICAgICAgICAgbmF2aWdhdGlvbj17PE5hdmlnYXRpb25CYXIgZGFzaGJvYXJkPXt0cnVlfSAvPn1cclxuICAgICAgPlxyXG4gICAgICAgICAgICAgIDxQYWdlIHRpdGxlPXs8SGVhZGluZz5EYXNoYm9hcmQ8L0hlYWRpbmc+fSBmdWxsV2lkdGg+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxMYXlvdXQgc2VjdGlvbmVkPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nRm9ybSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENyb3dsVXJsLz5cclxuICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICA8L0ZyYW1lPlxyXG4gICAgKTtcclxuICB9ICBcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L3BvbGFyaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9