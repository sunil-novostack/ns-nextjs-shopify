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
/* harmony import */ var _lib_db_Firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/db/Firebase */ "./lib/db/Firebase.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-nextjs-shopify\\components\\CrawlUrl.js";

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
    });

    _defineProperty(this, "handleFecthProductSubmit", async _event => {
      /*
      const response = await axios({
          url : '/detail',
          method:'post',
          baseURL:'http://204.44.125.73:8000/data',
          params:{
              url:searchUrl,
              ecom:selectedEcom[0]
          }
      });
      
      console.log(response)
      */
      const productDetails = await {
        title: 'This is product title',
        description: 'This will be default product description if any',
        image: 'https://cdn.shopify.com/s/files/1/0532/5062/1627/products/city-woman-fashion_925x_2x_ee873798-6f63-4d75-932d-297a182d9047_350x350.jpg?',
        price: '125.00'
      };
      this.setState({
        foundProduct: true,
        fetchedProduct: productDetails
      });

      if (this.state.foundProduct) {
        this.addProduct();
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

    });

    _defineProperty(this, "addProduct", async () => {
      try {
        const token = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('shopAccessToken');
        const response = await axios__WEBPACK_IMPORTED_MODULE_4___default()({
          headers: {
            "Access-Control-Allow-Origin": "*"
          },
          url: '/products',
          method: 'post',
          baseURL: 'https://4f677f5d50f9.ngrok.io/api',
          params: this.state.fetchedProduct
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    });

    this.state = {
      searchUrl: '',
      selectedEcom: ['ebay'],
      fetchedProduct: null,
      foundProduct: false
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
              lineNumber: 99,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
              label: "Paste URL Here",
              name: "searchUrl",
              type: "text",
              value: this.state.searchUrl,
              onChange: this.handleSearchChange
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              icon: "",
              primary: true,
              name: "fetchproduct",
              submit: "true",
              children: "Extract"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, this), this.state.foundProduct ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
          sectioned: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["MediaCard"], {
              title: this.state.fetchedProduct.title,
              primaryAction: {
                content: 'Import It',
                onAction: () => {}
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
                  lineNumber: 138,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "product-price",
                  children: ["Price : $ ", this.state.fetchedProduct.price]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 21
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
          sectioned: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Please Pass Right Url to Fetch Product data..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DcmF3bFVybC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZXR0aW5nRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZGIvRmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGFzaGJvYXJkLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDcmF3bFVybCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJ2YWx1ZSIsInNldFN0YXRlIiwic2VhcmNoVXJsIiwic2VsZWN0ZWRFY29tIiwiX2V2ZW50IiwicHJvZHVjdERldGFpbHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJwcmljZSIsImZvdW5kUHJvZHVjdCIsImZldGNoZWRQcm9kdWN0Iiwic3RhdGUiLCJhZGRQcm9kdWN0IiwidG9rZW4iLCJDb29raWVzIiwiZ2V0IiwicmVzcG9uc2UiLCJheGlvcyIsImhlYWRlcnMiLCJ1cmwiLCJtZXRob2QiLCJiYXNlVVJMIiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicmVuZGVyIiwiaGFuZGxlRmVjdGhQcm9kdWN0U3VibWl0IiwibGFiZWwiLCJoYW5kbGVDaGFuZ2VFY29tIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwiY29udGVudCIsIm9uQWN0aW9uIiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJOYXJ2aWdhdGlvbkJhciIsImljb24iLCJGYUl0Y2hJbyIsIkZhQ2FydEFycm93RG93biIsIkZhU2hvcHBpbmdDYXJ0IiwiSW9NZFNldHRpbmdzIiwiSW9NZExvZ091dCIsIm9uQ2xpY2siLCJmaXJlYmFzZSIsImF1dGgiLCJzaWduT3V0IiwidGhlbiIsIlJvdXRlciIsInB1c2giLCJTZXR0aW5nRm9ybSIsIlJlYWN0IiwiY29ubmVjdGVkIiwiYWNjb3VudENvbm5lY3Rpb25NYXJrdXAiLCJ0b2dnbGVDb25uZWN0aW9uIiwiYmluZCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiaW5pdGlhbGl6ZUFwcCIsImVyciIsImZpbGViYXNlIiwiRGFzaGJvYXJkIiwiY29tcG9uZW50RGlkTW91bnQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNB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O0FBQ2pCdkIsNERBQVEsQ0FBQ0MsSUFBVCxHQUFnQnVCLGtCQUFoQixDQUFvQyxNQUFPQyxJQUFQLElBQWM7QUFDaEQsVUFBRyxDQUFDQSxJQUFKLEVBQVM7QUFDUHJCLDBEQUFNLENBQUNDLElBQVAsQ0FBWSxTQUFaO0FBQ0Q7QUFDRixLQUpEO0FBS0E7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNHOztBQUNEdEIsUUFBTSxHQUFFO0FBQ04sd0JBQ0UscUVBQUMsc0RBQUQ7QUFDSSxnQkFBVSxFQUFFUyxpRUFEaEI7QUFBQSw2QkFHUSxxRUFBQyxxREFBRDtBQUFNLGFBQUssZUFBRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBYjtBQUEyQyxpQkFBUyxNQUFwRDtBQUFBLCtCQUNFLHFFQUFDLHFEQUFEO0FBQU0sbUJBQVMsTUFBZjtBQUFBLGlDQUNFLHFFQUFDLHVEQUFEO0FBQUEsb0NBQ0kscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFjRDs7QUE1QjZDLEM7Ozs7Ozs7Ozs7O0FDZmhELDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2Rhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvZGFzaGJvYXJkLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBcclxuICAgIExheW91dCxcclxuICAgIENhcmQsXHJcbiAgICBGb3JtLFxyXG4gICAgRm9ybUxheW91dCxcclxuICAgIFRleHRGaWVsZCxcclxuICAgIEJ1dHRvbixcclxuICAgIENob2ljZUxpc3QsXHJcbiAgICBNZWRpYUNhcmQsXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBmaXJlYmFzZSAgZnJvbSAnLi4vbGliL2RiL0ZpcmViYXNlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyYXdsVXJsIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcykgIFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNlYXJjaFVybDonJyxcclxuICAgICAgICAgICAgc2VsZWN0ZWRFY29tOlsnZWJheSddLFxyXG4gICAgICAgICAgICBmZXRjaGVkUHJvZHVjdDpudWxsLFxyXG4gICAgICAgICAgICBmb3VuZFByb2R1Y3Q6ZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlYXJjaENoYW5nZSA9ICh2YWx1ZSkgPT57dGhpcy5zZXRTdGF0ZSh7c2VhcmNoVXJsOnZhbHVlfSl9XHJcbiAgICBoYW5kbGVDaGFuZ2VFY29tID0gKHZhbHVlKSA9PiB7dGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRFY29tOnZhbHVlfSl9XHJcbiAgICBoYW5kbGVGZWN0aFByb2R1Y3RTdWJtaXQgPSBhc3luYyAoX2V2ZW50KSA9PiB7XHJcbiAgICAgICAgLypcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgdXJsIDogJy9kZXRhaWwnLFxyXG4gICAgICAgICAgICBtZXRob2Q6J3Bvc3QnLFxyXG4gICAgICAgICAgICBiYXNlVVJMOidodHRwOi8vMjA0LjQ0LjEyNS43Mzo4MDAwL2RhdGEnLFxyXG4gICAgICAgICAgICBwYXJhbXM6e1xyXG4gICAgICAgICAgICAgICAgdXJsOnNlYXJjaFVybCxcclxuICAgICAgICAgICAgICAgIGVjb206c2VsZWN0ZWRFY29tWzBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3REZXRhaWxzID0gYXdhaXQge1xyXG4gICAgICAgICAgICB0aXRsZTonVGhpcyBpcyBwcm9kdWN0IHRpdGxlJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246J1RoaXMgd2lsbCBiZSBkZWZhdWx0IHByb2R1Y3QgZGVzY3JpcHRpb24gaWYgYW55JyxcclxuICAgICAgICAgICAgaW1hZ2U6J2h0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNTMyLzUwNjIvMTYyNy9wcm9kdWN0cy9jaXR5LXdvbWFuLWZhc2hpb25fOTI1eF8yeF9lZTg3Mzc5OC02ZjYzLTRkNzUtOTMyZC0yOTdhMTgyZDkwNDdfMzUweDM1MC5qcGc/JyxcclxuICAgICAgICAgICAgcHJpY2U6JzEyNS4wMCcsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZm91bmRQcm9kdWN0OnRydWUsXHJcbiAgICAgICAgICAgIGZldGNoZWRQcm9kdWN0IDogcHJvZHVjdERldGFpbHNcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZih0aGlzLnN0YXRlLmZvdW5kUHJvZHVjdCl7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkUHJvZHVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKlxyXG4gICAgICAgIC8vaW5zZXJ0aW5nIHByb2R1Y3QgaW50byBmaXJlYmFzZSBmaXJlc3RvcmVcclxuICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdzdW5pbC1ub3Zvc3RhY2subXlzaG9waWZ5LmNvbScpLmRvYygpLnNldChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6J1RoaXMgaXMgcHJvZHVjdCB0aXRsZScsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjonVGhpcyB3aWxsIGJlIGRlZmF1bHQgcHJvZHVjdCBkZXNjcmlwdGlvbiBpZiBhbnknLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6J2h0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNTMyLzUwNjIvMTYyNy9wcm9kdWN0cy9jaXR5LXdvbWFuLWZhc2hpb25fOTI1eF8yeF9lZTg3Mzc5OC02ZjYzLTRkNzUtOTMyZC0yOTdhMTgyZDkwNDdfMzUweDM1MC5qcGc/JyxcclxuICAgICAgICAgICAgICAgIHByaWNlOicxMjUuMDAnLFxyXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBmaXJlYmFzZS5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkgXHJcbiAgICAgICAgKi8gICAgICAgXHJcbiAgICB9XHJcbiAgICBhZGRQcm9kdWN0ID0gYXN5bmMgKCkgPT57XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCdzaG9wQWNjZXNzVG9rZW4nKVxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgIHVybDonL3Byb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDoncG9zdCcsXHJcbiAgICAgICAgICAgICAgICBiYXNlVVJMOidodHRwczovLzRmNjc3ZjVkNTBmOS5uZ3Jvay5pby9hcGknLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOnRoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3RcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxGb3JtIG5hbWU9XCJwcm9kdWN0LWZldGNoLWZvcm1cIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVGZWN0aFByb2R1Y3RTdWJtaXR9IG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFeHRyYWN0IFByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldpdGggdGhlIGhlbHAgb2Ygc2NyYXAgdXJsIHlvdSBjYW4gZ2V0IHByb2R1Y3QgZnJvbSBoZXJlIHRvIHlvdXIgc2hvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENob2ljZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFQ09NXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hvaWNlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnRWJheScsIHZhbHVlOiAnZWJheSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnU2FtcycsIHZhbHVlOiAnc2Ftcyd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnQm9zY292cycsIHZhbHVlOiAnYm9zY292cyd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnSG9tZScsIHZhbHVlOiAnaG9tZSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnQmVkQmF0aCcsIHZhbHVlOiAnYmVkYmF0aCd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiAnV2FsTWFydCcsIHZhbHVlOiAnd2FsbWFydCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlY29tXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnNlbGVjdGVkRWNvbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlRWNvbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXN0ZSBVUkwgSGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoVXJsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwiXCIgcHJpbWFyeT17dHJ1ZX0gbmFtZT1cImZldGNocHJvZHVjdFwiIHN1Ym1pdD1cInRydWVcIj5FeHRyYWN0PC9CdXR0b24+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZm91bmRQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQgc2VjdGlvbmVkPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWFDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5zdGF0ZS5mZXRjaGVkUHJvZHVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlBY3Rpb249e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnSW1wb3J0IEl0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMuc3RhdGUuZmV0Y2hlZFByb2R1Y3QuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+UHJpY2UgOiAkIHt0aGlzLnN0YXRlLmZldGNoZWRQcm9kdWN0LnByaWNlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVkaWFDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGxlYXNlIFBhc3MgUmlnaHQgVXJsIHRvIEZldGNoIFByb2R1Y3QgZGF0YS4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICBcclxufSIsImltcG9ydCBSZWFjdCx7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgXHJcbiAgICBOYXZpZ2F0aW9uXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgZmlyZWJhc2UgIGZyb20gJy4uL2xpYi9kYi9GaXJlYmFzZSc7XHJcbmltcG9ydCB7IEZhSXRjaElvLEZhU2hvcHBpbmdDYXJ0LEZhQ2FydEFycm93RG93biB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgSW9NZFNldHRpbmdzLElvTWRMb2dPdXQgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuXHJcbmNvbnN0ICBOYXJ2aWdhdGlvbkJhciA9IChcclxuICAgICAgICAgICAgPE5hdmlnYXRpb24gbG9jYXRpb249XCIvXCI+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uLlNlY3Rpb25cclxuICAgICAgICAgICAgICAgIGl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0Rhc2hib2FyZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IEZhSXRjaElvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6Jy9kYXNoYm9hcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0ltcG9ydCBQcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IEZhQ2FydEFycm93RG93bixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOicvaW1wb3J0LXByb2R1Y3RzJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1N0b3JlIFByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogRmFTaG9wcGluZ0NhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDonL3N0b3JlLXByb2R1Y3RzJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1NldHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBJb01kU2V0dGluZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU2lnbm91dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IElvTWRMb2dPdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KCkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0Nvb2tpZXMuc2V0KCduc25zJyxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9zaWduaW4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NpZ24gT3V0IEVycm9yJywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9OYXZpZ2F0aW9uPlxyXG4gICAgICAgICk7XHJcbmV4cG9ydCBkZWZhdWx0IE5hcnZpZ2F0aW9uQmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QseyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFxyXG4gICAgTGF5b3V0LFxyXG4gICAgQWNjb3VudENvbm5lY3Rpb24sXHJcbiAgICBMaW5rLFxyXG4gICAgRm9ybSxcclxuICAgIEZvcm1MYXlvdXQsXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjb25uZWN0ZWQ6Q29va2llcy5nZXQoJ3Nob3BPcmlnaW4nKSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDb25uZWN0ZWQgU3RvcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJDb25uZWN0IHRvIHlvdXIgc2hvcGlmeSBhYyB3aXRoIGN1c3RvbSBEYXNoYm9hcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmFjY291bnRDb25uZWN0aW9uTWFya3VwKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0b2dnbGVDb25uZWN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSggKHtjb25uZWN0ZWR9KSA9PiAoe2Nvbm5lY3RlZDohY29ubmVjdGVkfSkgKTtcclxuICAgIH1cclxuXHJcbiAgICBhY2NvdW50Q29ubmVjdGlvbk1hcmt1cCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmNvbm5lY3RlZFxyXG4gICAgICAgID8oXHJcbiAgICAgICAgICAgIDxBY2NvdW50Q29ubmVjdGlvblxyXG4gICAgICAgICAgICAgICAgYXZhdGFyVXJsPVwiTm93IENvbm5lY3RlZFwiICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uPXt7Y29udGVudDogJ0Nvbm5lY3RlZCd9fVxyXG4gICAgICAgICAgICAgICAgZGV0YWlscz17Q29va2llcy5nZXQoJ3Nob3BPcmlnaW4nKX1cclxuICAgICAgICAgICAgICAgIGNvbm5lY3RlZD17dGhpcy5zdGF0ZS5jb25uZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICB0ZXJtc09mU2VydmljZT17XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+WW91IGFyZSBub3cgQ29ubmVjdGVkIHdpdGggeW91ciBzdG9yZSBGaW5kIG91dCB3aGF0IHByb2R1Y3RzIGxpc3RlZCBvciBjaGVjayBvdXQgd2l0aCBleHBvcnQgcG9yZHVjdCB0byBzdG9yZTwvcD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApXHJcbiAgICAgICAgOihcclxuICAgICAgICAgICAgPEFjY291bnRDb25uZWN0aW9uXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkNvbm5jdCBUbyBTaG9wXCJcclxuICAgICAgICAgICAgICAgIGFjdGlvbj17e2NvbnRlbnQ6ICdDb25uZWN0JyxvbkFjdGlvbjogdGhpcy50b2dnbGVDb25uZWN0aW9uLmJpbmQodGhpcyl9fVxyXG4gICAgICAgICAgICAgICAgZGV0YWlscz1cIk5vIEFjY291bnQgQ29ubmVjdGVkXCJcclxuICAgICAgICAgICAgICAgIGNvbm5lY3RlZD17dGhpcy5zdGF0ZS5jb25uZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICB0ZXJtc09mU2VydmljZT17XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+QnkgQ2xpY2tpbmcgQ29ubmVjdCwgWW91IGFyZSBhZ3JlZSB0byBhY2NlcHQgb3VyIHRlcm1zIGFuZCBjb25kaXRpb24ncyA8TGluayB1cmw9JyMnPlRlcm1zIEFuZCBDb25kaXRpb25zPC9MaW5rPiBJdHMgQ29tcGxldGx5IEZyZWUgdG8gVXNlPC9wPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsIlxyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG4vKlxyXG52YXIgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5QmJVQTJ4Z2NKaVpXb3JTeldvVnpJZ2xPOVJraXNvUUY4XCIsXHJcbiAgICBhdXRoRG9tYWluOiBcInJlYWN0LXVjbGFiLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9yZWFjdC11Y2xhYi1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJyZWFjdC11Y2xhYlwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJyZWFjdC11Y2xhYi5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNjgxMTI2ODMwNzA1XCIsXHJcbiAgICBhcHBJZDogXCIxOjY4MTEyNjgzMDcwNTp3ZWI6ZjZlZTc2ZjFiMDA1NTc1MWVlMzFkMFwiXHJcbiAgfTtcclxuKi9cclxudmFyIGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeURUWnFnanpTM1NtVkpPR1IxbjAyTWVMRUR1SDZqWl84UVwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJzaG9waWZ5LWFwcC10ZXN0aW5nLTMwMTgxOS5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJzaG9waWZ5LWFwcC10ZXN0aW5nLTMwMTgxOVwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJzaG9waWZ5LWFwcC10ZXN0aW5nLTMwMTgxOS5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNDQ1MTk0ODY4OTdcIixcclxuICAgIGFwcElkOiBcIjE6NDQ1MTk0ODY4OTc6d2ViOjg0MTcyMjYwMGNmNTFjMjJkZDM5OTBcIlxyXG4gIH07XHJcbiAgLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG4gIHRyeSB7XHJcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuICB9IGNhdGNoKGVycil7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgfVxyXG4gIGNvbnN0IGZpbGViYXNlID0gZmlyZWJhc2U7IFxyXG4gIGV4cG9ydCBkZWZhdWx0IGZpbGViYXNlO1xyXG4gIC8vZmlsZWJhc2UuZGF0YWJhc2UoKS5yZWYoKTtcclxuICAiLCJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIFBhZ2UsXHJcbiAgRnJhbWUsXHJcbiAgTGF5b3V0LFxyXG4gIENhcmQsXHJcbiAgSGVhZGluZyxcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBmaXJlYmFzZSAgZnJvbSAnLi4vbGliL2RiL0ZpcmViYXNlJztcclxuaW1wb3J0IFNldHRpbmdGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvU2V0dGluZ0Zvcm0nO1xyXG5pbXBvcnQgQ3Jvd2xVcmwgZnJvbSAnLi4vY29tcG9uZW50cy9DcmF3bFVybCc7XHJcbmltcG9ydCBOYXJ2aWdhdGlvbkJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXInO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudHtcclxuICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCggYXN5bmMgKHVzZXIpPT57XHJcbiAgICAgIGlmKCF1c2VyKXtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL3NpZ25pbicpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvKlxyXG4gICAgaWYoQ29va2llcy5nZXQoJ25zbnMnKSA9PSBmYWxzZSl7XHJcbiAgICAgIFJvdXRlci5wdXNoKCcvc2lnbmluJylcclxuICAgIH1cclxuICAgICovXHJcbiAgfVxyXG4gIHJlbmRlcigpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZyYW1lXHJcbiAgICAgICAgICBuYXZpZ2F0aW9uPXtOYXJ2aWdhdGlvbkJhcn1cclxuICAgICAgPlxyXG4gICAgICAgICAgICAgIDxQYWdlIHRpdGxlPXs8SGVhZGluZz5EYXNoYm9hcmQ8L0hlYWRpbmc+fSBmdWxsV2lkdGg+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ0Zvcm0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDcm93bFVybC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgPC9GcmFtZT5cclxuICAgICk7XHJcbiAgfSAgXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2hvcGlmeS9wb2xhcmlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==