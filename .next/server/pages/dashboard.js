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

var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-nextjs-shopify\\components\\CrawlUrl.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //import firebase  from '../lib/db/Firebase';



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
        this.setState({
          foundProduct: true,
          fetchedProduct: response.data.productDetail,
          isLoading: false
        });
      }); //console.log(response)

      /*
      const productDetails = await response.data.productDetail
      this.setState({
          foundProduct:true,
          fetchedProduct : productDetails
      })
      */

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
          data: {
            sourceUrl: this.state.searchUrl,
            source: this.state.selectedEcom[0],
            title: this.state.fetchedProduct.product_title,
            description: this.state.fetchedProduct.description,
            price: this.state.fetchedProduct.product_price,
            images: this.state.fetchedProduct.images
          }
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

    this.state = {
      searchUrl: '',
      selectedEcom: ['Ebay'],
      fetchedProduct: null,
      foundProduct: false,
      isLoading: false
    };
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      name: "product-fetch-form",
      onSubmit: this.handleFecthProductSubmit,
      method: "post",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["FormLayout"], {
        children: [this.state.isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Loading"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 27
        }, this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].AnnotatedSection, {
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
              lineNumber: 125,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
              label: "Paste URL Here",
              name: "searchUrl",
              type: "text",
              value: this.state.searchUrl,
              onChange: this.handleSearchChange,
              connectedRight: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                icon: "",
                primary: true,
                name: "fetchproduct",
                submit: "true",
                children: "Extract"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }, this), this.state.foundProduct ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
          sectioned: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["MediaCard"], {
              title: this.state.fetchedProduct.product_title,
              primaryAction: {
                content: 'Add Product',
                onAction: () => {
                  this.handleAddProduct();
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
                  lineNumber: 169,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "product-price",
                  children: ["Price : ", this.state.fetchedProduct.product_price]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 21
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
          sectioned: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Please Pass Right Url to Fetch Product data..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
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







const NarvigationBar = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Navigation"], {
  location: "/",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Navigation"].Section, {
    items: [{
      label: 'Dashboard',
      icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaItchIo"],
      url: '/dashboard'
    }, {
      label: 'Import Products',
      icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaCartArrowDown"],
      url: '/import-products'
    }, {
      label: 'Store Products',
      icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaShoppingCart"],
      url: '/store-products'
    }, {
      label: 'Setting',
      icon: react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoMdSettings"]
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
    lineNumber: 12,
    columnNumber: 13
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 11,
  columnNumber: 13
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (NarvigationBar);

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
      navigation: _components_NavigationBar__WEBPACK_IMPORTED_MODULE_7__["default"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DcmF3bFVybC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZXR0aW5nRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZGIvRmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGFzaGJvYXJkLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDcmF3bFVybCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJ2YWx1ZSIsInNldFN0YXRlIiwic2VhcmNoVXJsIiwic2VsZWN0ZWRFY29tIiwiX2V2ZW50IiwiaXNMb2FkaW5nIiwicmVzcG9uc2UiLCJheGlvcyIsInVybCIsIm1ldGhvZCIsInBhcmFtcyIsInN0YXRlIiwiZWNvbSIsInByb2R1Y3RfaWQiLCJkYl9lbnRyeSIsInRoZW4iLCJmb3VuZFByb2R1Y3QiLCJmZXRjaGVkUHJvZHVjdCIsImRhdGEiLCJwcm9kdWN0RGV0YWlsIiwiaGVhZGVycyIsIkNvb2tpZXMiLCJnZXQiLCJzb3VyY2VVcmwiLCJzb3VyY2UiLCJ0aXRsZSIsInByb2R1Y3RfdGl0bGUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwicHJvZHVjdF9wcmljZSIsImltYWdlcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInJlbmRlciIsImhhbmRsZUZlY3RoUHJvZHVjdFN1Ym1pdCIsImxhYmVsIiwiaGFuZGxlQ2hhbmdlRWNvbSIsImhhbmRsZVNlYXJjaENoYW5nZSIsImNvbnRlbnQiLCJvbkFjdGlvbiIsImhhbmRsZUFkZFByb2R1Y3QiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsIk5hcnZpZ2F0aW9uQmFyIiwiaWNvbiIsIkZhSXRjaElvIiwiRmFDYXJ0QXJyb3dEb3duIiwiRmFTaG9wcGluZ0NhcnQiLCJJb01kU2V0dGluZ3MiLCJJb01kTG9nT3V0Iiwib25DbGljayIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25PdXQiLCJSb3V0ZXIiLCJwdXNoIiwiU2V0dGluZ0Zvcm0iLCJSZWFjdCIsImNvbm5lY3RlZCIsImFjY291bnRDb25uZWN0aW9uTWFya3VwIiwidG9nZ2xlQ29ubmVjdGlvbiIsImJpbmQiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImluaXRpYWxpemVBcHAiLCJlcnIiLCJmaWxlYmFzZSIsIkRhc2hib2FyZCIsImNvbXBvbmVudERpZE1vdW50Iiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMx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QUNBO0FBR2UsTUFBTUMsU0FBTixTQUF3QjVFLCtDQUF4QixDQUFpQztBQUM5QzZFLG1CQUFpQixHQUFFO0FBQ2pCdEIsNERBQVEsQ0FBQ0MsSUFBVCxHQUFnQnNCLGtCQUFoQixDQUFvQyxNQUFPQyxJQUFQLElBQWM7QUFDaEQsVUFBRyxDQUFDQSxJQUFKLEVBQVM7QUFDUHJCLDBEQUFNLENBQUNDLElBQVAsQ0FBWSxTQUFaO0FBQ0Q7QUFDRixLQUpEO0FBS0E7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNHOztBQUNEdEIsUUFBTSxHQUFFO0FBQ04sd0JBQ0UscUVBQUMsc0RBQUQ7QUFDSSxnQkFBVSxFQUFFVSxpRUFEaEI7QUFBQSw2QkFHUSxxRUFBQyxxREFBRDtBQUFNLGFBQUssZUFBRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBYjtBQUEyQyxpQkFBUyxNQUFwRDtBQUFBLCtCQUNFLHFFQUFDLHFEQUFEO0FBQU0sbUJBQVMsTUFBZjtBQUFBLGlDQUNFLHFFQUFDLHVEQUFEO0FBQUEsb0NBQ0kscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFjRDs7QUE1QjZDLEM7Ozs7Ozs7Ozs7O0FDZmhELDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2Rhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvZGFzaGJvYXJkLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBcclxuICAgIExheW91dCxcclxuICAgIENhcmQsXHJcbiAgICBGb3JtLFxyXG4gICAgRm9ybUxheW91dCxcclxuICAgIFRleHRGaWVsZCxcclxuICAgIEJ1dHRvbixcclxuICAgIENob2ljZUxpc3QsXHJcbiAgICBNZWRpYUNhcmQsXHJcbiAgICBMb2FkaW5nLFxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG4vL2ltcG9ydCBmaXJlYmFzZSAgZnJvbSAnLi4vbGliL2RiL0ZpcmViYXNlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyYXdsVXJsIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcykgIFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNlYXJjaFVybDonJyxcclxuICAgICAgICAgICAgc2VsZWN0ZWRFY29tOlsnRWJheSddLFxyXG4gICAgICAgICAgICBmZXRjaGVkUHJvZHVjdDpudWxsLFxyXG4gICAgICAgICAgICBmb3VuZFByb2R1Y3Q6ZmFsc2UsXHJcbiAgICAgICAgICAgIGlzTG9hZGluZzpmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKHZhbHVlKSA9Pnt0aGlzLnNldFN0YXRlKHtzZWFyY2hVcmw6dmFsdWV9KX1cclxuICAgIGhhbmRsZUNoYW5nZUVjb20gPSAodmFsdWUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZEVjb206dmFsdWV9KVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaFVybDonJ30pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVGZWN0aFByb2R1Y3RTdWJtaXQgPSBhc3luYyAoX2V2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZzp0cnVlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgIHVybCA6ICcvYXBpL3NjcmFwLXByb2R1Y3QtZGV0YWlsPycsXHJcbiAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICAgICAgcGFyYW1zOntcclxuICAgICAgICAgICAgICAgIHVybDp0aGlzLnN0YXRlLnNlYXJjaFVybCxcclxuICAgICAgICAgICAgICAgIGVjb206dGhpcy5zdGF0ZS5zZWxlY3RlZEVjb21bMF0sXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2lkOjAsXHJcbiAgICAgICAgICAgICAgICBkYl9lbnRyeTowLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGZvdW5kUHJvZHVjdDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgZmV0Y2hlZFByb2R1Y3QgOiByZXNwb25zZS5kYXRhLnByb2R1Y3REZXRhaWwsXHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgY29uc3QgcHJvZHVjdERldGFpbHMgPSBhd2FpdCByZXNwb25zZS5kYXRhLnByb2R1Y3REZXRhaWxcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZm91bmRQcm9kdWN0OnRydWUsXHJcbiAgICAgICAgICAgIGZldGNoZWRQcm9kdWN0IDogcHJvZHVjdERldGFpbHNcclxuICAgICAgICB9KVxyXG4gICAgICAgICovXHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9pbnNlcnRpbmcgcHJvZHVjdCBpbnRvIGZpcmViYXNlIGZpcmVzdG9yZVxyXG4gICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ3N1bmlsLW5vdm9zdGFjay5teXNob3BpZnkuY29tJykuZG9jKCkuc2V0KFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTonVGhpcyBpcyBwcm9kdWN0IHRpdGxlJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOidUaGlzIHdpbGwgYmUgZGVmYXVsdCBwcm9kdWN0IGRlc2NyaXB0aW9uIGlmIGFueScsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTonaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzA1MzIvNTA2Mi8xNjI3L3Byb2R1Y3RzL2NpdHktd29tYW4tZmFzaGlvbl85MjV4XzJ4X2VlODczNzk4LTZmNjMtNGQ3NS05MzJkLTI5N2ExODJkOTA0N18zNTB4MzUwLmpwZz8nLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6JzEyNS4wMCcsXHJcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKSBcclxuICAgICAgICAqL1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgaGFuZGxlQWRkUHJvZHVjdCA9IGFzeW5jIChfZXZlbnQpID0+e1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdClcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNMb2FkaW5nOnRydWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3Nob3BuYW1lJzpDb29raWVzLmdldCgnc2hvcE9yaWdpbicpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdXJsOicvYXBpL3Byb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDoncG9zdCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VVcmw6dGhpcy5zdGF0ZS5zZWFyY2hVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiB0aGlzLnN0YXRlLnNlbGVjdGVkRWNvbVswXSxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSA6IHRoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QucHJvZHVjdF90aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTp0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LnByb2R1Y3RfcHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzOnRoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuaW1hZ2VzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPEZvcm0gbmFtZT1cInByb2R1Y3QtZmV0Y2gtZm9ybVwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZUZlY3RoUHJvZHVjdFN1Ym1pdH0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzTG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDxMb2FkaW5nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRXh0cmFjdCBQcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXaXRoIHRoZSBoZWxwIG9mIHNjcmFwIHVybCB5b3UgY2FuIGdldCBwcm9kdWN0IGZyb20gaGVyZSB0byB5b3VyIHNob3BcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hvaWNlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFQ09NXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNob2ljZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdFYmF5JywgdmFsdWU6ICdFYmF5J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnU2FtcyBDbHViJywgdmFsdWU6ICdTYW1zQ2x1Yid9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ0Jvc2NvdnMnLCB2YWx1ZTogJ0Jvc2NvdnMnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdIb21lIERlcG90JywgdmFsdWU6ICdIb21lRGVwb3QnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdCZWQgQmF0aCcsIHZhbHVlOiAnQmVkQmF0aGFuZEJleW9uZCd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogJ1dhbE1hcnQnLCB2YWx1ZTogJ1dhbG1hcnQnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6ICdDb3N0Q28nLCB2YWx1ZTogJ0Nvc3RDbyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVjb21cIiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnNlbGVjdGVkRWNvbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUVjb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzdGUgVVJMIEhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hVcmxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3RlZFJpZ2h0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwiXCIgcHJpbWFyeT17dHJ1ZX0gbmFtZT1cImZldGNocHJvZHVjdFwiIHN1Ym1pdD1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4dHJhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZvdW5kUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IHNlY3Rpb25lZD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QucHJvZHVjdF90aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlBY3Rpb249e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnQWRkIFByb2R1Y3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB7IHRoaXMuaGFuZGxlQWRkUHJvZHVjdCgpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuaW1hZ2VzWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlByaWNlIDoge3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QucHJvZHVjdF9wcmljZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lZGlhQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0IHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBsZWFzZSBQYXNzIFJpZ2h0IFVybCB0byBGZXRjaCBQcm9kdWN0IGRhdGEuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgXHJcbn0iLCJpbXBvcnQgUmVhY3QseyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFxyXG4gICAgTmF2aWdhdGlvblxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGZpcmViYXNlICBmcm9tICcuLi9saWIvZGIvRmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBGYUl0Y2hJbyxGYVNob3BwaW5nQ2FydCxGYUNhcnRBcnJvd0Rvd24gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IElvTWRTZXR0aW5ncyxJb01kTG9nT3V0IH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcblxyXG5jb25zdCAgTmFydmlnYXRpb25CYXIgPSAoXHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uIGxvY2F0aW9uPVwiL1wiPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbi5TZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBpdGVtcz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEYXNoYm9hcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBGYUl0Y2hJbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOicvZGFzaGJvYXJkJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdJbXBvcnQgUHJvZHVjdHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBGYUNhcnRBcnJvd0Rvd24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDonL2ltcG9ydC1wcm9kdWN0cydcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTdG9yZSBQcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IEZhU2hvcHBpbmdDYXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6Jy9zdG9yZS1wcm9kdWN0cydcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTZXR0aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogSW9NZFNldHRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1NpZ25vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBJb01kTG9nT3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9Db29raWVzLnNldCgnbnNucycsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvc2lnbmluJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTaWduIE91dCBFcnJvcicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTmF2aWdhdGlvbj5cclxuICAgICAgICApO1xyXG5leHBvcnQgZGVmYXVsdCBOYXJ2aWdhdGlvbkJhcjtcclxuIiwiaW1wb3J0IFJlYWN0LHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBcclxuICAgIExheW91dCxcclxuICAgIEFjY291bnRDb25uZWN0aW9uLFxyXG4gICAgTGluayxcclxuICAgIEZvcm0sXHJcbiAgICBGb3JtTGF5b3V0LFxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY29ubmVjdGVkOkNvb2tpZXMuZ2V0KCdzaG9wT3JpZ2luJykgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29ubmVjdGVkIFN0b3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQ29ubmVjdCB0byB5b3VyIHNob3BpZnkgYWMgd2l0aCBjdXN0b20gRGFzaGJvYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5hY2NvdW50Q29ubmVjdGlvbk1hcmt1cCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlQ29ubmVjdGlvbigpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoICh7Y29ubmVjdGVkfSkgPT4gKHtjb25uZWN0ZWQ6IWNvbm5lY3RlZH0pICk7XHJcbiAgICB9XHJcblxyXG4gICAgYWNjb3VudENvbm5lY3Rpb25NYXJrdXAoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5jb25uZWN0ZWRcclxuICAgICAgICA/KFxyXG4gICAgICAgICAgICA8QWNjb3VudENvbm5lY3Rpb25cclxuICAgICAgICAgICAgICAgIGF2YXRhclVybD1cIk5vdyBDb25uZWN0ZWRcIiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFjdGlvbj17e2NvbnRlbnQ6ICdDb25uZWN0ZWQnfX1cclxuICAgICAgICAgICAgICAgIGRldGFpbHM9e0Nvb2tpZXMuZ2V0KCdzaG9wT3JpZ2luJyl9XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0ZWQ9e3RoaXMuc3RhdGUuY29ubmVjdGVkfVxyXG4gICAgICAgICAgICAgICAgdGVybXNPZlNlcnZpY2U9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxwPllvdSBhcmUgbm93IENvbm5lY3RlZCB3aXRoIHlvdXIgc3RvcmUgRmluZCBvdXQgd2hhdCBwcm9kdWN0cyBsaXN0ZWQgb3IgY2hlY2sgb3V0IHdpdGggZXhwb3J0IHBvcmR1Y3QgdG8gc3RvcmU8L3A+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKVxyXG4gICAgICAgIDooXHJcbiAgICAgICAgICAgIDxBY2NvdW50Q29ubmVjdGlvblxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJDb25uY3QgVG8gU2hvcFwiXHJcbiAgICAgICAgICAgICAgICBhY3Rpb249e3tjb250ZW50OiAnQ29ubmVjdCcsb25BY3Rpb246IHRoaXMudG9nZ2xlQ29ubmVjdGlvbi5iaW5kKHRoaXMpfX1cclxuICAgICAgICAgICAgICAgIGRldGFpbHM9XCJObyBBY2NvdW50IENvbm5lY3RlZFwiXHJcbiAgICAgICAgICAgICAgICBjb25uZWN0ZWQ9e3RoaXMuc3RhdGUuY29ubmVjdGVkfVxyXG4gICAgICAgICAgICAgICAgdGVybXNPZlNlcnZpY2U9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxwPkJ5IENsaWNraW5nIENvbm5lY3QsIFlvdSBhcmUgYWdyZWUgdG8gYWNjZXB0IG91ciB0ZXJtcyBhbmQgY29uZGl0aW9uJ3MgPExpbmsgdXJsPScjJz5UZXJtcyBBbmQgQ29uZGl0aW9uczwvTGluaz4gSXRzIENvbXBsZXRseSBGcmVlIHRvIFVzZTwvcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCJcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuLypcclxudmFyIGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUJiVUEyeGdjSmlaV29yU3pXb1Z6SWdsTzlSa2lzb1FGOFwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJyZWFjdC11Y2xhYi5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vcmVhY3QtdWNsYWItZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwicmVhY3QtdWNsYWJcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwicmVhY3QtdWNsYWIuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjY4MTEyNjgzMDcwNVwiLFxyXG4gICAgYXBwSWQ6IFwiMTo2ODExMjY4MzA3MDU6d2ViOmY2ZWU3NmYxYjAwNTU3NTFlZTMxZDBcIlxyXG4gIH07XHJcbiovXHJcbnZhciBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lEVFpxZ2p6UzNTbVZKT0dSMW4wMk1lTEVEdUg2alpfOFFcIixcclxuICAgIGF1dGhEb21haW46IFwic2hvcGlmeS1hcHAtdGVzdGluZy0zMDE4MTkuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwic2hvcGlmeS1hcHAtdGVzdGluZy0zMDE4MTlcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwic2hvcGlmeS1hcHAtdGVzdGluZy0zMDE4MTkuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjQ0NTE5NDg2ODk3XCIsXHJcbiAgICBhcHBJZDogXCIxOjQ0NTE5NDg2ODk3OndlYjo4NDE3MjI2MDBjZjUxYzIyZGQzOTkwXCJcclxuICB9O1xyXG4gIC8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuICB0cnkge1xyXG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbiAgfSBjYXRjaChlcnIpe1xyXG4gICAgY29uc29sZS5sb2coZXJyKVxyXG4gIH1cclxuICBjb25zdCBmaWxlYmFzZSA9IGZpcmViYXNlOyBcclxuICBleHBvcnQgZGVmYXVsdCBmaWxlYmFzZTtcclxuICAvL2ZpbGViYXNlLmRhdGFiYXNlKCkucmVmKCk7XHJcbiAgIiwiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBQYWdlLFxyXG4gIEZyYW1lLFxyXG4gIExheW91dCxcclxuICBDYXJkLFxyXG4gIEhlYWRpbmcsXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgZmlyZWJhc2UgIGZyb20gJy4uL2xpYi9kYi9GaXJlYmFzZSc7XHJcbmltcG9ydCBTZXR0aW5nRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1NldHRpbmdGb3JtJztcclxuaW1wb3J0IENyb3dsVXJsIGZyb20gJy4uL2NvbXBvbmVudHMvQ3Jhd2xVcmwnO1xyXG5pbXBvcnQgTmFydmlnYXRpb25CYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoIGFzeW5jICh1c2VyKT0+e1xyXG4gICAgICBpZighdXNlcil7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9zaWduaW4nKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLypcclxuICAgIGlmKENvb2tpZXMuZ2V0KCduc25zJykgPT0gZmFsc2Upe1xyXG4gICAgICBSb3V0ZXIucHVzaCgnL3NpZ25pbicpXHJcbiAgICB9XHJcbiAgICAqL1xyXG4gIH1cclxuICByZW5kZXIoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGcmFtZVxyXG4gICAgICAgICAgbmF2aWdhdGlvbj17TmFydmlnYXRpb25CYXJ9XHJcbiAgICAgID5cclxuICAgICAgICAgICAgICA8UGFnZSB0aXRsZT17PEhlYWRpbmc+RGFzaGJvYXJkPC9IZWFkaW5nPn0gZnVsbFdpZHRoPlxyXG4gICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdGb3JtIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q3Jvd2xVcmwvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1BhZ2U+XHJcbiAgICAgIDwvRnJhbWU+XHJcbiAgICApO1xyXG4gIH0gIFxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvaW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=