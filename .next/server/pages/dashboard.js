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

    _defineProperty(this, "handleFecthProductSubmit", async _event => {
      this.setState({
        isLoading: true
      });
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
        response.data.productDetail != null ? this.setState({
          foundProduct: true,
          fetchedProduct: response.data.productDetail,
          isLoading: false
        }) : this.setState({
          foundProduct: false,
          isLoading: false,
          msg: 'No Product data found on given product page link'
        });
      });
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
      msg: 'Please copy past product page into url field and press extract button'
    };
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
              lineNumber: 113,
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
                lineNumber: 135,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, this), this.state.foundProduct ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
          sectioned: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
              sectioned: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
                name: "title",
                label: "Product Title",
                value: this.state.fetchedProduct.title,
                onChange: this.handleTitleChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
                  secondary: true,
                  children: this.state.fetchedProduct.images[0] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
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
                    lineNumber: 153,
                    columnNumber: 45
                  }, this) : ''
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
                    width: "100%",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                        children: "Name"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 170,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                        children: "Size"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 171,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                        children: "Color"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 172,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                        children: "Price"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 173,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                        children: "Margin"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 174,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                        children: "final Price"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 175,
                        columnNumber: 49
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                        children: "Qty"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 176,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 169,
                      columnNumber: 45
                    }, this), this.state.fetchedProduct.variants ? this.state.fetchedProduct.variants.map((variant, index) => {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          children: variant.name
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 183,
                          columnNumber: 61
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          children: "None"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 184,
                          columnNumber: 61
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          children: "None"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 185,
                          columnNumber: 61
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          children: variant.price
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 186,
                          columnNumber: 61
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
                            name: "variant_price_margin"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 187,
                            columnNumber: 65
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 187,
                          columnNumber: 61
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
                            name: "variant_final_price"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 188,
                            columnNumber: 65
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 188,
                          columnNumber: 61
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                          children: "None"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 189,
                          columnNumber: 61
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 182,
                        columnNumber: 57
                      }, this);
                    }) : '']
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 168,
                    columnNumber: 40
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["MediaCard"], {
              title: this.state.fetchedProduct.title,
              primaryAction: {
                content: 'Add To List',
                onAction: () => {
                  this.handleAddProduct();
                },
                loading: this.state.isLoading ? true : false,
                primary: true
              },
              secondaryAction: {
                content: 'Edit Before [Add To List]',
                onAction: () => {
                  this.handleEditProduct();
                },
                loading: this.state.isLoading ? true : false
              },
              description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "variations",
                children: [console.log(this.state.fetchedProduct.variants), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "variation-list",
                  children: this.state.fetchedProduct.variants ? this.state.fetchedProduct.variants.map((variant, index) => {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "v-item",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "image-holder",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                          viewBox: "0 0 20 20",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                            d: "M2.5 1A1.5 1.5 0 0 0 1 2.5v15A1.5 1.5 0 0 0 2.5 19h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 17.5 1h-15zm5 3.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM16.499 17H3.497c-.41 0-.64-.46-.4-.79l3.553-4.051c.19-.21.52-.21.72-.01L9 14l3.06-4.781a.5.5 0 0 1 .84.02l4.039 7.011c.18.34-.06.75-.44.75z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 229,
                            columnNumber: 65
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 228,
                          columnNumber: 61
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 227,
                        columnNumber: 57
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "variation-props",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: variant.name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 233,
                            columnNumber: 64
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 233,
                          columnNumber: 61
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: variant.price
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 234,
                            columnNumber: 64
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 234,
                          columnNumber: 61
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 232,
                        columnNumber: 57
                      }, this)]
                    }, index, true, {
                      fileName: _jsxFileName,
                      lineNumber: 226,
                      columnNumber: 53
                    }, this);
                  }) : 'No variation'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 37
              }, this),
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
                  lineNumber: 249,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "product-price",
                  children: ["Price : ", this.state.fetchedProduct.price]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 259,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 21
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Banner"], {
          icon: react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoIosInformationCircle"],
          title: "Product fetch",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: this.state.msg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DcmF3bFVybC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZXR0aW5nRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZGIvRmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGFzaGJvYXJkLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDcmF3bFVybCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJ2YWx1ZSIsInNldFN0YXRlIiwic2VhcmNoVXJsIiwic2VsZWN0ZWRFY29tIiwiZmV0Y2hlZFByb2R1Y3QiLCJzdGF0ZSIsInRpdGxlIiwiX2V2ZW50IiwiaXNMb2FkaW5nIiwicmVzcG9uc2UiLCJheGlvcyIsInVybCIsIm1ldGhvZCIsInBhcmFtcyIsImVjb20iLCJwcm9kdWN0X2lkIiwiZGJfZW50cnkiLCJ0aGVuIiwiZGF0YSIsInByb2R1Y3REZXRhaWwiLCJmb3VuZFByb2R1Y3QiLCJtc2ciLCJoZWFkZXJzIiwiQ29va2llcyIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInJlbmRlciIsImhhbmRsZUZlY3RoUHJvZHVjdFN1Ym1pdCIsImxhYmVsIiwiaGFuZGxlQ2hhbmdlRWNvbSIsImhhbmRsZVNlYXJjaENoYW5nZSIsImhhbmRsZVRpdGxlQ2hhbmdlIiwiaW1hZ2VzIiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJ2YXJpYW50cyIsIm1hcCIsInZhcmlhbnQiLCJpbmRleCIsIm5hbWUiLCJwcmljZSIsImNvbnRlbnQiLCJvbkFjdGlvbiIsImhhbmRsZUFkZFByb2R1Y3QiLCJsb2FkaW5nIiwicHJpbWFyeSIsImhhbmRsZUVkaXRQcm9kdWN0IiwiSW9Jb3NJbmZvcm1hdGlvbkNpcmNsZSIsIk5hdmlnYXRpb25CYXIiLCJkYXNoYm9hcmQiLCJpbXBvcnRQcm9kdWN0cyIsInN0b3JlUHJvZHVjdHMiLCJzZXR0aW5ncyIsInNldHRpbmdHZW5lcmFsIiwic2V0dGluZ1ByaWNpbmdSdWxlIiwiaWNvbiIsIkZhSXRjaElvIiwic2VsZWN0ZWQiLCJGYUNhcnRBcnJvd0Rvd24iLCJGYVNob3BwaW5nQ2FydCIsIklvTWRTZXR0aW5ncyIsInN1Yk5hdmlnYXRpb25JdGVtcyIsIklvTWRMb2dPdXQiLCJvbkNsaWNrIiwiZmlyZWJhc2UiLCJhdXRoIiwic2lnbk91dCIsIlJvdXRlciIsInB1c2giLCJTZXR0aW5nRm9ybSIsIlJlYWN0IiwiY29ubmVjdGVkIiwiYWNjb3VudENvbm5lY3Rpb25NYXJrdXAiLCJ0b2dnbGVDb25uZWN0aW9uIiwiYmluZCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiaW5pdGlhbGl6ZUFwcCIsImVyciIsImZpbGViYXNlIiwiRGFzaGJvYXJkIiwiY29tcG9uZW50RGlkTW91bnQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7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QUFTLE1BQXBEO0FBQUEsK0JBQ0UscUVBQUMscURBQUQ7QUFBTSxtQkFBUyxNQUFmO0FBQUEsaUNBQ0UscUVBQUMsdURBQUQ7QUFBQSxvQ0FDSSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUkscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQWNEOztBQTVCNkMsQzs7Ozs7Ozs7Ozs7QUNmaEQsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9kYXNoYm9hcmQuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QseyBDb21wb25lbnQsIGNyZWF0ZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgXHJcbiAgICBMYXlvdXQsXHJcbiAgICBDYXJkLFxyXG4gICAgRm9ybSxcclxuICAgIEZvcm1MYXlvdXQsXHJcbiAgICBUZXh0RmllbGQsXHJcbiAgICBCdXR0b24sXHJcbiAgICBDaG9pY2VMaXN0LFxyXG4gICAgTWVkaWFDYXJkLFxyXG4gICAgQmFubmVyLFxyXG4gICAgRGF0YVRhYmxlLFxyXG4gICAgQ2hlY2tib3gsXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB7SW9Jb3NJbmZvcm1hdGlvbkNpcmNsZX0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmF3bFVybCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzZWFyY2hVcmw6JycsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkRWNvbTpbJ0ViYXknXSxcclxuICAgICAgICAgICAgZmV0Y2hlZFByb2R1Y3Q6bnVsbCxcclxuICAgICAgICAgICAgZm91bmRQcm9kdWN0OmZhbHNlLFxyXG4gICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2UsICAgICBcclxuICAgICAgICAgICAgbXNnOidQbGVhc2UgY29weSBwYXN0IHByb2R1Y3QgcGFnZSBpbnRvIHVybCBmaWVsZCBhbmQgcHJlc3MgZXh0cmFjdCBidXR0b24nLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWFyY2hDaGFuZ2UgPSAodmFsdWUpID0+e3RoaXMuc2V0U3RhdGUoe3NlYXJjaFVybDp2YWx1ZX0pfVxyXG4gICAgaGFuZGxlQ2hhbmdlRWNvbSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkRWNvbTp2YWx1ZX0pXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoVXJsOicnfSlcclxuICAgIH1cclxuICAgIGhhbmRsZVRpdGxlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGZldGNoZWRQcm9kdWN0OntcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTp2YWx1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVGZWN0aFByb2R1Y3RTdWJtaXQgPSBhc3luYyAoX2V2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZzp0cnVlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgIHVybCA6ICcvYXBpL3NjcmFwLXByb2R1Y3QtZGV0YWlsPycsXHJcbiAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICAgICAgcGFyYW1zOntcclxuICAgICAgICAgICAgICAgIHVybDp0aGlzLnN0YXRlLnNlYXJjaFVybCxcclxuICAgICAgICAgICAgICAgIGVjb206dGhpcy5zdGF0ZS5zZWxlY3RlZEVjb21bMF0sXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2lkOjAsXHJcbiAgICAgICAgICAgICAgICBkYl9lbnRyeTowLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICByZXNwb25zZS5kYXRhLnByb2R1Y3REZXRhaWwhPW51bGxcclxuICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmRQcm9kdWN0OnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hlZFByb2R1Y3QgOiByZXNwb25zZS5kYXRhLnByb2R1Y3REZXRhaWwsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kUHJvZHVjdDpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbXNnOidObyBQcm9kdWN0IGRhdGEgZm91bmQgb24gZ2l2ZW4gcHJvZHVjdCBwYWdlIGxpbmsnLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KSAgICAgICAgXHJcbiAgICB9XHJcbiAgICBoYW5kbGVBZGRQcm9kdWN0ID0gYXN5bmMgKF9ldmVudCkgPT57XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0xvYWRpbmc6dHJ1ZSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgICAgICAgICAnc2hvcG5hbWUnOkNvb2tpZXMuZ2V0KCdzaG9wT3JpZ2luJylcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB1cmw6Jy9hcGkvcHJvZHVjdHMnLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidwb3N0JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6dGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdFxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzpmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlRWRpdFByb2R1Y3QgPSBhc3luYyAoX2V2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3BvcHVwJylcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEZvcm0gbmFtZT1cInByb2R1Y3QtZmV0Y2gtZm9ybVwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZUZlY3RoUHJvZHVjdFN1Ym1pdH0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkV4dHJhY3QgUHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2l0aCB0aGUgaGVscCBvZiBzY3JhcCB1cmwgeW91IGNhbiBnZXQgcHJvZHVjdCBmcm9tIGhlcmUgdG8geW91ciBzaG9wXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hvaWNlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFQ09NXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNob2ljZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdFYmF5JywgdmFsdWU6ICdFYmF5J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnU2FtcyBDbHViJywgdmFsdWU6ICdTYW1zQ2x1Yid9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0Jvc2NvdnMnLCB2YWx1ZTogJ0Jvc2NvdnMnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdIb21lIERlcG90JywgdmFsdWU6ICdIb21lRGVwb3QnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdCZWQgQmF0aCcsIHZhbHVlOiAnQmVkQmF0aGFuZEJleW9uZCd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ1dhbE1hcnQnLCB2YWx1ZTogJ1dhbG1hcnQnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdDb3N0Q28nLCB2YWx1ZTogJ0Nvc3RDbyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVjb21cIiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnNlbGVjdGVkRWNvbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUVjb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzdGUgVVJMIEhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hVcmxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3RlZFJpZ2h0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmlzTG9hZGluZyA/IHRydWUgOiBmYWxzZSB9IHByaW1hcnk9e3RydWV9IG5hbWU9XCJmZXRjaHByb2R1Y3RcIiBzdWJtaXQ9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHRyYWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5mb3VuZFByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dCBzZWN0aW9uZWQ9e3RydWV9PiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBuYW1lPVwidGl0bGVcIiBsYWJlbD1cIlByb2R1Y3QgVGl0bGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC50aXRsZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGl0bGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uIHNlY29uZGFyeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LmltYWdlc1swXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0UG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LmltYWdlc1swXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIHdpZHRoPVwiMTAwJVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U2l6ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Db2xvcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NYXJnaW48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+ZmluYWwgUHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LnZhcmlhbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LnZhcmlhbnRzLm1hcCgodmFyaWFudCxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt2YXJpYW50Lm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk5vbmU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Tm9uZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57dmFyaWFudC5wcmljZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PFRleHRGaWVsZCBuYW1lPVwidmFyaWFudF9wcmljZV9tYXJnaW5cIi8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxUZXh0RmllbGQgbmFtZT1cInZhcmlhbnRfZmluYWxfcHJpY2VcIi8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk5vbmU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZWRpYUNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUFjdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdBZGQgVG8gTGlzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHsgdGhpcy5oYW5kbGVBZGRQcm9kdWN0KCkgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOnRoaXMuc3RhdGUuaXNMb2FkaW5nID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlBY3Rpb249e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OidFZGl0IEJlZm9yZSBbQWRkIFRvIExpc3RdJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4geyB0aGlzLmhhbmRsZUVkaXRQcm9kdWN0KCkgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOnRoaXMuc3RhdGUuaXNMb2FkaW5nID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249eyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LnZhcmlhbnRzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9uLWxpc3RcIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LnZhcmlhbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC52YXJpYW50cy5tYXAoICh2YXJpYW50LGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInYtaXRlbVwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yLjUgMUExLjUgMS41IDAgMCAwIDEgMi41djE1QTEuNSAxLjUgMCAwIDAgMi41IDE5aDE1YTEuNSAxLjUgMCAwIDAgMS41LTEuNXYtMTVBMS41IDEuNSAwIDAgMCAxNy41IDFoLTE1em01IDMuNWMxLjEgMCAyIC45IDIgMnMtLjkgMi0yIDItMi0uOS0yLTIgLjktMiAyLTJ6TTE2LjQ5OSAxN0gzLjQ5N2MtLjQxIDAtLjY0LS40Ni0uNC0uNzlsMy41NTMtNC4wNTFjLjE5LS4yMS41Mi0uMjEuNzItLjAxTDkgMTRsMy4wNi00Ljc4MWEuNS41IDAgMCAxIC44NC4wMmw0LjAzOSA3LjAxMWMuMTguMzQtLjA2Ljc1LS40NC43NXpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9uLXByb3BzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuPnt2YXJpYW50Lm5hbWV9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4+e3ZhcmlhbnQucHJpY2V9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdObyB2YXJpYXRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0UG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LmltYWdlc1swXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5QcmljZSA6IHt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LnByaWNlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVkaWFDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFubmVyIGljb249e0lvSW9zSW5mb3JtYXRpb25DaXJjbGV9IHRpdGxlPVwiUHJvZHVjdCBmZXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUubXNnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CYW5uZXI+IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgXHJcbn0iLCJpbXBvcnQgUmVhY3QseyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFxyXG4gICAgTmF2aWdhdGlvblxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGZpcmViYXNlICBmcm9tICcuLi9saWIvZGIvRmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBGYUl0Y2hJbyxGYVNob3BwaW5nQ2FydCxGYUNhcnRBcnJvd0Rvd24gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IElvTWRTZXR0aW5ncyxJb01kTG9nT3V0IH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbkJhciBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZGFzaGJvYXJkOiBwcm9wcy5kYXNoYm9hcmQgPyBwcm9wcy5kYXNoYm9hcmQgOiBmYWxzZSxcclxuICAgICAgICAgICAgaW1wb3J0UHJvZHVjdHM6IHByb3BzLmltcG9ydFByb2R1Y3RzID8gcHJvcHMuaW1wb3J0UHJvZHVjdHMgOiBmYWxzZSxcclxuICAgICAgICAgICAgc3RvcmVQcm9kdWN0czogcHJvcHMuc3RvcmVQcm9kdWN0cyA/IHByb3BzLnN0b3JlUHJvZHVjdHMgOiBmYWxzZSxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHByb3BzLnNldHRpbmdzID8gcHJvcHMuc2V0dGluZ3MgOiBmYWxzZSxcclxuICAgICAgICAgICAgc2V0dGluZ0dlbmVyYWw6IHByb3BzLnNldHRpbmdHZW5lcmFsID8gcHJvcHMuc2V0dGluZ0dlbmVyYWwgOiBmYWxzZSxcclxuICAgICAgICAgICAgc2V0dGluZ1ByaWNpbmdSdWxlOiBwcm9wcy5zZXR0aW5nUHJpY2luZ1J1bGUgPyBwcm9wcy5zZXR0aW5nUHJpY2luZ1J1bGUgOiBmYWxzZSxcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPE5hdmlnYXRpb24gbG9jYXRpb249XCIvXCI+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uLlNlY3Rpb25cclxuICAgICAgICAgICAgICAgIGl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0Rhc2hib2FyZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IEZhSXRjaElvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6Jy9kYXNoYm9hcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDp0aGlzLnN0YXRlLmRhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1Byb2R1Y3QgTGlzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IEZhQ2FydEFycm93RG93bixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOicvaW1wb3J0LXByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6dGhpcy5zdGF0ZS5pbXBvcnRQcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1N0b3JlIFByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogRmFTaG9wcGluZ0NhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDonL3N0b3JlLXByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6dGhpcy5zdGF0ZS5zdG9yZVByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU2V0dGluZ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBJb01kU2V0dGluZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDonL3NldHRpbmdzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuc3RhdGUuc2V0dGluZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yk5hdmlnYXRpb25JdGVtczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6J0dlbmVyYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDonL3NldHRpbmdzL2dlbmVyYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOnRoaXMuc3RhdGUuc2V0dGluZ0dlbmVyYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6J1ByaWNlIFJ1bGVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6Jy9zZXR0aW5ncy9wcmljZS1ydWxlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6dGhpcy5zdGF0ZS5zZXR0aW5nUHJpY2luZ1J1bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1NpZ25vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBJb01kTG9nT3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9Db29raWVzLnNldCgnbnNucycsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvc2lnbmluJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTaWduIE91dCBFcnJvcicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTmF2aWdhdGlvbj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBcclxuICAgIExheW91dCxcclxuICAgIEFjY291bnRDb25uZWN0aW9uLFxyXG4gICAgTGluayxcclxuICAgIEZvcm0sXHJcbiAgICBGb3JtTGF5b3V0LFxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY29ubmVjdGVkOkNvb2tpZXMuZ2V0KCdzaG9wT3JpZ2luJykgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29ubmVjdGVkIFN0b3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQ29ubmVjdCB0byB5b3VyIHNob3BpZnkgYWMgd2l0aCBjdXN0b20gRGFzaGJvYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5hY2NvdW50Q29ubmVjdGlvbk1hcmt1cCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlQ29ubmVjdGlvbigpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoICh7Y29ubmVjdGVkfSkgPT4gKHtjb25uZWN0ZWQ6IWNvbm5lY3RlZH0pICk7XHJcbiAgICB9XHJcblxyXG4gICAgYWNjb3VudENvbm5lY3Rpb25NYXJrdXAoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jb25uZWN0ZWRcclxuICAgICAgICA/KFxyXG4gICAgICAgICAgICA8QWNjb3VudENvbm5lY3Rpb25cclxuICAgICAgICAgICAgICAgIGF2YXRhclVybD1cIk5vdyBDb25uZWN0ZWRcIiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFjdGlvbj17e2NvbnRlbnQ6ICdDb25uZWN0ZWQnfX1cclxuICAgICAgICAgICAgICAgIGRldGFpbHM9e0Nvb2tpZXMuZ2V0KCdzaG9wT3JpZ2luJyl9XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0ZWQ9e3RoaXMuc3RhdGUuY29ubmVjdGVkfVxyXG4gICAgICAgICAgICAgICAgdGVybXNPZlNlcnZpY2U9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxwPllvdSBhcmUgbm93IENvbm5lY3RlZCB3aXRoIHlvdXIgc3RvcmUgRmluZCBvdXQgd2hhdCBwcm9kdWN0cyBsaXN0ZWQgb3IgY2hlY2sgb3V0IHdpdGggZXhwb3J0IHBvcmR1Y3QgdG8gc3RvcmU8L3A+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKVxyXG4gICAgICAgIDooXHJcbiAgICAgICAgICAgIDxBY2NvdW50Q29ubmVjdGlvblxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJDb25uY3QgVG8gU2hvcFwiXHJcbiAgICAgICAgICAgICAgICBhY3Rpb249e3tjb250ZW50OiAnQ29ubmVjdCcsb25BY3Rpb246IHRoaXMudG9nZ2xlQ29ubmVjdGlvbi5iaW5kKHRoaXMpfX1cclxuICAgICAgICAgICAgICAgIGRldGFpbHM9XCJObyBBY2NvdW50IENvbm5lY3RlZFwiXHJcbiAgICAgICAgICAgICAgICBjb25uZWN0ZWQ9e3RoaXMuc3RhdGUuY29ubmVjdGVkfVxyXG4gICAgICAgICAgICAgICAgdGVybXNPZlNlcnZpY2U9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxwPkJ5IENsaWNraW5nIENvbm5lY3QsIFlvdSBhcmUgYWdyZWUgdG8gYWNjZXB0IG91ciB0ZXJtcyBhbmQgY29uZGl0aW9uJ3MgPExpbmsgdXJsPScjJz5UZXJtcyBBbmQgQ29uZGl0aW9uczwvTGluaz4gSXRzIENvbXBsZXRseSBGcmVlIHRvIFVzZTwvcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCJcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuLypcclxudmFyIGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUJiVUEyeGdjSmlaV29yU3pXb1Z6SWdsTzlSa2lzb1FGOFwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJyZWFjdC11Y2xhYi5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vcmVhY3QtdWNsYWItZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwicmVhY3QtdWNsYWJcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwicmVhY3QtdWNsYWIuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjY4MTEyNjgzMDcwNVwiLFxyXG4gICAgYXBwSWQ6IFwiMTo2ODExMjY4MzA3MDU6d2ViOmY2ZWU3NmYxYjAwNTU3NTFlZTMxZDBcIlxyXG4gIH07XHJcbiovXHJcbnZhciBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lEVFpxZ2p6UzNTbVZKT0dSMW4wMk1lTEVEdUg2alpfOFFcIixcclxuICAgIGF1dGhEb21haW46IFwic2hvcGlmeS1hcHAtdGVzdGluZy0zMDE4MTkuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwic2hvcGlmeS1hcHAtdGVzdGluZy0zMDE4MTlcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwic2hvcGlmeS1hcHAtdGVzdGluZy0zMDE4MTkuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjQ0NTE5NDg2ODk3XCIsXHJcbiAgICBhcHBJZDogXCIxOjQ0NTE5NDg2ODk3OndlYjo4NDE3MjI2MDBjZjUxYzIyZGQzOTkwXCJcclxuICB9O1xyXG4gIC8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuICB0cnkge1xyXG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbiAgfSBjYXRjaChlcnIpe1xyXG4gICAgY29uc29sZS5sb2coZXJyKVxyXG4gIH1cclxuICBjb25zdCBmaWxlYmFzZSA9IGZpcmViYXNlOyBcclxuICBleHBvcnQgZGVmYXVsdCBmaWxlYmFzZTtcclxuICAvL2ZpbGViYXNlLmRhdGFiYXNlKCkucmVmKCk7XHJcbiAgIiwiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBQYWdlLFxyXG4gIEZyYW1lLFxyXG4gIExheW91dCxcclxuICBDYXJkLFxyXG4gIEhlYWRpbmcsXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgZmlyZWJhc2UgIGZyb20gJy4uL2xpYi9kYi9GaXJlYmFzZSc7XHJcbmltcG9ydCBTZXR0aW5nRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1NldHRpbmdGb3JtJztcclxuaW1wb3J0IENyb3dsVXJsIGZyb20gJy4uL2NvbXBvbmVudHMvQ3Jhd2xVcmwnO1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXInO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudHtcclxuICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCggYXN5bmMgKHVzZXIpPT57XHJcbiAgICAgIGlmKCF1c2VyKXtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL3NpZ25pbicpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvKlxyXG4gICAgaWYoQ29va2llcy5nZXQoJ25zbnMnKSA9PSBmYWxzZSl7XHJcbiAgICAgIFJvdXRlci5wdXNoKCcvc2lnbmluJylcclxuICAgIH1cclxuICAgICovXHJcbiAgfVxyXG4gIHJlbmRlcigpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZyYW1lXHJcbiAgICAgICAgICBuYXZpZ2F0aW9uPXs8TmF2aWdhdGlvbkJhciBkYXNoYm9hcmQ9e3RydWV9IC8+fVxyXG4gICAgICA+XHJcbiAgICAgICAgICAgICAgPFBhZ2UgdGl0bGU9ezxIZWFkaW5nPkRhc2hib2FyZDwvSGVhZGluZz59IGZ1bGxXaWR0aD5cclxuICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nRm9ybSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENyb3dsVXJsLz5cclxuICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICA8L0ZyYW1lPlxyXG4gICAgKTtcclxuICB9ICBcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L3BvbGFyaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9