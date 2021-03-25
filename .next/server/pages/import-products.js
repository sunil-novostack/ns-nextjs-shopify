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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/import-products.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./pages/import-products.js":
/*!**********************************!*\
  !*** ./pages/import-products.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Importproducts; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_db_Firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/db/Firebase */ "./lib/db/Firebase.js");
/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavigationBar */ "./components/NavigationBar.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-nextjs-shopify\\pages\\import-products.js";











const ADD_NEW_PRODUCT = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default.a`
    mutation addNewProduct($input: ProductInput!, $media: [CreateMediaInput!]!) {
        productCreate(input: $input, media:$media) {
            product {
                id
            }
        }
    }
`;
function Importproducts() {
  const {
    0: items,
    1: setItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [AddNewProduct] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__["useMutation"])(ADD_NEW_PRODUCT);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: axiosCalled,
    1: setAxiosCalled
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    _lib_db_Firebase__WEBPACK_IMPORTED_MODULE_4__["default"].auth().onAuthStateChanged(async user => {
      if (!user) {
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/signin');
      }
    });

    if (!axiosCalled) {
      const response = axios__WEBPACK_IMPORTED_MODULE_6___default()({
        headers: {
          'shopname': js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get('shopOrigin')
        },
        url: '/api/products',
        method: 'get',
        params: {
          page: 1,
          limit: 20
        }
      }).then(response => {
        console.log(response);
        setItems(response.data.products);
        setLoading(false);
        setAxiosCalled(true);
      });
    }
    /*
    const firedb = firebase.firestore()
    let products = [];
    
    firedb.collection('sunil-novostack.myshopify.com')
    .get()
    .then((querySnapshot) => {            
        querySnapshot.forEach((doc) => {                
           products.push(doc.data())
        })
        setItems(products)
        setLoading(false);
    })
    */

  }, [items, loading]);

  const HandleClickImportProduct = async _id => {
    const product = await items.filter(item => item._id == _id);
    const response = await AddNewProduct({
      variables: {
        input: {
          title: product.title,
          descriptionHtml: product.description
        },
        media: [{
          originalSource: product.images[0],
          alt: "Sample image testing",
          mediaContentType: "IMAGE"
        }]
      }
    });
    console.log(response);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Frame"], {
    navigation: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      importProducts: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 29
    }, this),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Page"], {
      title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
        children: "Imported Products"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 26
      }, this),
      fullWidth: true,
      id: "import-product",
      children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Please Wait While product fetching from server..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 21
      }, this) : items.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["ResourceList"], {
          items: items,
          renderItem: item => {
            const media = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "import-item-image-holder",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: item.images[0]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 33
            }, this);

            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["ResourceList"].Item, {
              id: item._id,
              media: media,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "item-seller-source",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["DisplayText"], {
                  size: "small",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextStyle"], {
                    variation: "subdued",
                    children: "Seller"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 63
                  }, this), " ABC Company", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "text-v-line"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 124
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["DisplayText"], {
                  size: "small",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextStyle"], {
                    variation: "subdued",
                    children: "Shop"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 63
                  }, this), " ", item.source, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "text-v-line"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 125
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["DisplayText"], {
                  size: "medium",
                  children: [" ", item.price, " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "item-operation",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                    url: item.sourceUrl,
                    external: true,
                    children: "Original Product Link"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                    size: "slim",
                    primary: true,
                    onClick: () => HandleClickImportProduct(item._id),
                    children: "Import"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "item-title",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextStyle"], {
                  variation: "subdued",
                  children: "Product Title"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["DisplayText"], {
                  size: "small",
                  children: item.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "variations",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextStyle"], {
                  variation: "subdued",
                  children: ["Variation ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "variation-count",
                    children: "(2)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
                    columnNumber: 78
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "variation-list",
                  children: item.variants !== undefined ? item.variants.map((variant, index) => {
                    /*#__PURE__*/
                    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "v-item",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "image-holder",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          src: item.images[1]
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 152,
                          columnNumber: 57
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 151,
                        columnNumber: 53
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "variation-props",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: variant.name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 155,
                            columnNumber: 60
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "text-v-line"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 155,
                            columnNumber: 87
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: "24"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 155,
                            columnNumber: 124
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 155,
                          columnNumber: 57
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: variant.price
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 156,
                            columnNumber: 60
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 156,
                          columnNumber: 57
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 154,
                        columnNumber: 53
                      }, this)]
                    }, index, true, {
                      fileName: _jsxFileName,
                      lineNumber: 150,
                      columnNumber: 49
                    }, this);
                  }) : ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "description",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextStyle"], {
                  variation: "subdued",
                  children: "Description"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextContainer"], {
                  children: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "tags",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
                  children: "Movie"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
                  children: "Series"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 53
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
                  children: "Collectibles"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 70
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 33
            }, this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "No Product Listed Yet..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 13
  }, this);
}

/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

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

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLmpzIiwid2VicGFjazovLy8uL2xpYi9kYi9GaXJlYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbXBvcnQtcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9pb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIk5hdmlnYXRpb25CYXIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJkYXNoYm9hcmQiLCJpbXBvcnRQcm9kdWN0cyIsInN0b3JlUHJvZHVjdHMiLCJzZXR0aW5ncyIsInNldHRpbmdHZW5lcmFsIiwic2V0dGluZ1ByaWNpbmdSdWxlIiwicmVuZGVyIiwibGFiZWwiLCJpY29uIiwiRmFJdGNoSW8iLCJ1cmwiLCJzZWxlY3RlZCIsIkZhQ2FydEFycm93RG93biIsIkZhU2hvcHBpbmdDYXJ0IiwiSW9NZFNldHRpbmdzIiwic3ViTmF2aWdhdGlvbkl0ZW1zIiwiSW9NZExvZ091dCIsIm9uQ2xpY2siLCJmaXJlYmFzZSIsImF1dGgiLCJzaWduT3V0IiwidGhlbiIsIlJvdXRlciIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImluaXRpYWxpemVBcHAiLCJlcnIiLCJsb2ciLCJmaWxlYmFzZSIsIkFERF9ORVdfUFJPRFVDVCIsImdxbCIsIkltcG9ydHByb2R1Y3RzIiwiaXRlbXMiLCJzZXRJdGVtcyIsInVzZVN0YXRlIiwiQWRkTmV3UHJvZHVjdCIsInVzZU11dGF0aW9uIiwibG9hZGluZyIsInNldExvYWRpbmciLCJheGlvc0NhbGxlZCIsInNldEF4aW9zQ2FsbGVkIiwidXNlRWZmZWN0Iiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsInJlc3BvbnNlIiwiYXhpb3MiLCJoZWFkZXJzIiwiQ29va2llcyIsImdldCIsIm1ldGhvZCIsInBhcmFtcyIsInBhZ2UiLCJsaW1pdCIsImRhdGEiLCJwcm9kdWN0cyIsIkhhbmRsZUNsaWNrSW1wb3J0UHJvZHVjdCIsIl9pZCIsInByb2R1Y3QiLCJmaWx0ZXIiLCJpdGVtIiwidmFyaWFibGVzIiwiaW5wdXQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uSHRtbCIsImRlc2NyaXB0aW9uIiwibWVkaWEiLCJvcmlnaW5hbFNvdXJjZSIsImltYWdlcyIsImFsdCIsIm1lZGlhQ29udGVudFR5cGUiLCJsZW5ndGgiLCJzb3VyY2UiLCJwcmljZSIsInNvdXJjZVVybCIsInZhcmlhbnRzIiwidW5kZWZpbmVkIiwibWFwIiwidmFyaWFudCIsImluZGV4IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFD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QUFDLE1BQWY7QUFBQSx3Q0FDSSxxRUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixlQUNvQixxRUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFEcEIsZUFDcUMscUVBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRHJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkE1Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKO0FBa0RDO0FBMURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkgsZ0JBa0VHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBekVSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtRlAsQzs7Ozs7Ozs7Ozs7QUMxTEQsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW1wb3J0LXByb2R1Y3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbXBvcnQtcHJvZHVjdHMuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QseyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFxyXG4gICAgTmF2aWdhdGlvblxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGZpcmViYXNlICBmcm9tICcuLi9saWIvZGIvRmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBGYUl0Y2hJbyxGYVNob3BwaW5nQ2FydCxGYUNhcnRBcnJvd0Rvd24gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IElvTWRTZXR0aW5ncyxJb01kTG9nT3V0IH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbkJhciBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZGFzaGJvYXJkOiBwcm9wcy5kYXNoYm9hcmQgPyBwcm9wcy5kYXNoYm9hcmQgOiBmYWxzZSxcclxuICAgICAgICAgICAgaW1wb3J0UHJvZHVjdHM6IHByb3BzLmltcG9ydFByb2R1Y3RzID8gcHJvcHMuaW1wb3J0UHJvZHVjdHMgOiBmYWxzZSxcclxuICAgICAgICAgICAgc3RvcmVQcm9kdWN0czogcHJvcHMuc3RvcmVQcm9kdWN0cyA/IHByb3BzLnN0b3JlUHJvZHVjdHMgOiBmYWxzZSxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHByb3BzLnNldHRpbmdzID8gcHJvcHMuc2V0dGluZ3MgOiBmYWxzZSxcclxuICAgICAgICAgICAgc2V0dGluZ0dlbmVyYWw6IHByb3BzLnNldHRpbmdHZW5lcmFsID8gcHJvcHMuc2V0dGluZ0dlbmVyYWwgOiBmYWxzZSxcclxuICAgICAgICAgICAgc2V0dGluZ1ByaWNpbmdSdWxlOiBwcm9wcy5zZXR0aW5nUHJpY2luZ1J1bGUgPyBwcm9wcy5zZXR0aW5nUHJpY2luZ1J1bGUgOiBmYWxzZSxcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPE5hdmlnYXRpb24gbG9jYXRpb249XCIvXCI+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uLlNlY3Rpb25cclxuICAgICAgICAgICAgICAgIGl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0Rhc2hib2FyZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IEZhSXRjaElvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6Jy9kYXNoYm9hcmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDp0aGlzLnN0YXRlLmRhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1Byb2R1Y3QgTGlzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IEZhQ2FydEFycm93RG93bixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOicvaW1wb3J0LXByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6dGhpcy5zdGF0ZS5pbXBvcnRQcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1N0b3JlIFByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogRmFTaG9wcGluZ0NhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDonL3N0b3JlLXByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6dGhpcy5zdGF0ZS5zdG9yZVByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU2V0dGluZ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBJb01kU2V0dGluZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDonL3NldHRpbmdzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuc3RhdGUuc2V0dGluZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yk5hdmlnYXRpb25JdGVtczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6J0dlbmVyYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDonL3NldHRpbmdzL2dlbmVyYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOnRoaXMuc3RhdGUuc2V0dGluZ0dlbmVyYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6J1ByaWNlIFJ1bGVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6Jy9zZXR0aW5ncy9wcmljZS1ydWxlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6dGhpcy5zdGF0ZS5zZXR0aW5nUHJpY2luZ1J1bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1NpZ25vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBJb01kTG9nT3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9Db29raWVzLnNldCgnbnNucycsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvc2lnbmluJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTaWduIE91dCBFcnJvcicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTmF2aWdhdGlvbj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcbi8qXHJcbnZhciBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lCYlVBMnhnY0ppWldvclN6V29WeklnbE85Umtpc29RRjhcIixcclxuICAgIGF1dGhEb21haW46IFwicmVhY3QtdWNsYWIuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL3JlYWN0LXVjbGFiLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcInJlYWN0LXVjbGFiXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcInJlYWN0LXVjbGFiLmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI2ODExMjY4MzA3MDVcIixcclxuICAgIGFwcElkOiBcIjE6NjgxMTI2ODMwNzA1OndlYjpmNmVlNzZmMWIwMDU1NzUxZWUzMWQwXCJcclxuICB9O1xyXG4qL1xyXG52YXIgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5RFRacWdqelMzU21WSk9HUjFuMDJNZUxFRHVINmpaXzhRXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcInNob3BpZnktYXBwLXRlc3RpbmctMzAxODE5LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcInNob3BpZnktYXBwLXRlc3RpbmctMzAxODE5XCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcInNob3BpZnktYXBwLXRlc3RpbmctMzAxODE5LmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI0NDUxOTQ4Njg5N1wiLFxyXG4gICAgYXBwSWQ6IFwiMTo0NDUxOTQ4Njg5Nzp3ZWI6ODQxNzIyNjAwY2Y1MWMyMmRkMzk5MFwiXHJcbiAgfTtcclxuICAvLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbiAgdHJ5IHtcclxuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG4gIH0gY2F0Y2goZXJyKXtcclxuICAgIGNvbnNvbGUubG9nKGVycilcclxuICB9XHJcbiAgY29uc3QgZmlsZWJhc2UgPSBmaXJlYmFzZTsgXHJcbiAgZXhwb3J0IGRlZmF1bHQgZmlsZWJhc2U7XHJcbiAgLy9maWxlYmFzZS5kYXRhYmFzZSgpLnJlZigpO1xyXG4gICIsImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgUGFnZSxcclxuICBIZWFkaW5nLFxyXG4gIEZyYW1lLFxyXG4gIENhcmQsXHJcbiAgQnV0dG9uLFxyXG4gIFJlc291cmNlTGlzdCxcclxuICBUZXh0U3R5bGUsXHJcbiAgRGlzcGxheVRleHQsXHJcbiAgVGV4dENvbnRhaW5lcixcclxuICBUYWcsXHJcbiAgTGluayxcclxuICBUaHVtYm5haWwsXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgZmlyZWJhc2UgIGZyb20gJy4uL2xpYi9kYi9GaXJlYmFzZSc7XHJcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhcic7XHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcblxyXG5pbXBvcnQgeyBGYVVzZXJBbHRTbGFzaCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgSW9NZFRoZXJtb21ldGVyIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5cclxuY29uc3QgQUREX05FV19QUk9EVUNUID0gZ3FsYFxyXG4gICAgbXV0YXRpb24gYWRkTmV3UHJvZHVjdCgkaW5wdXQ6IFByb2R1Y3RJbnB1dCEsICRtZWRpYTogW0NyZWF0ZU1lZGlhSW5wdXQhXSEpIHtcclxuICAgICAgICBwcm9kdWN0Q3JlYXRlKGlucHV0OiAkaW5wdXQsIG1lZGlhOiRtZWRpYSkge1xyXG4gICAgICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbXBvcnRwcm9kdWN0cyAoKXtcclxuICAgIGNvbnN0IFtpdGVtcyxzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtBZGROZXdQcm9kdWN0XSA9IHVzZU11dGF0aW9uKEFERF9ORVdfUFJPRFVDVCk7XHJcbiAgICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbYXhpb3NDYWxsZWQsc2V0QXhpb3NDYWxsZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKCBhc3luYyAodXNlcik9PntcclxuICAgICAgICAgICAgaWYoIXVzZXIpe1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9zaWduaW4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZighYXhpb3NDYWxsZWQpe1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICAgICAgICdzaG9wbmFtZSc6Q29va2llcy5nZXQoJ3Nob3BPcmlnaW4nKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVybDonL2FwaS9wcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J2dldCcsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6MSxcclxuICAgICAgICAgICAgICAgICAgICBsaW1pdDoyMCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICBzZXRJdGVtcyhyZXNwb25zZS5kYXRhLnByb2R1Y3RzKVxyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRBeGlvc0NhbGxlZCh0cnVlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKlxyXG4gICAgICAgIGNvbnN0IGZpcmVkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RzID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgZmlyZWRiLmNvbGxlY3Rpb24oJ3N1bmlsLW5vdm9zdGFjay5teXNob3BpZnkuY29tJylcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigocXVlcnlTbmFwc2hvdCkgPT4geyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4geyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgcHJvZHVjdHMucHVzaChkb2MuZGF0YSgpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzZXRJdGVtcyhwcm9kdWN0cylcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAqL1xyXG4gICAgfSxbaXRlbXMsbG9hZGluZ10pIFxyXG4gICAgY29uc3QgSGFuZGxlQ2xpY2tJbXBvcnRQcm9kdWN0ID0gYXN5bmMgKF9pZCkgPT57XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBpdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLl9pZCA9PSBfaWQpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQWRkTmV3UHJvZHVjdCh7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczp7XHJcbiAgICAgICAgICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlIDogcHJvZHVjdC50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkh0bWw6cHJvZHVjdC5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1lZGlhOltcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsU291cmNlOnByb2R1Y3QuaW1hZ2VzWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ6XCJTYW1wbGUgaW1hZ2UgdGVzdGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYUNvbnRlbnRUeXBlOlwiSU1BR0VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPEZyYW1lXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uPXs8TmF2aWdhdGlvbkJhciBpbXBvcnRQcm9kdWN0cz17dHJ1ZX0gLz59XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPFBhZ2UgdGl0bGU9ezxIZWFkaW5nPkltcG9ydGVkIFByb2R1Y3RzPC9IZWFkaW5nPn0gZnVsbFdpZHRoIGlkPVwiaW1wb3J0LXByb2R1Y3RcIj5cclxuICAgICAgICAgICAge2xvYWRpbmdcclxuICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlBsZWFzZSBXYWl0IFdoaWxlIHByb2R1Y3QgZmV0Y2hpbmcgZnJvbSBzZXJ2ZXIuLi48L3A+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIChpdGVtcy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lZGlhID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1wb3J0LWl0ZW0taW1hZ2UtaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlc1swXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLl9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE9e21lZGlhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tc2VsbGVyLXNvdXJjZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+PFRleHRTdHlsZSB2YXJpYXRpb249XCJzdWJkdWVkXCI+U2VsbGVyPC9UZXh0U3R5bGU+IEFCQyBDb21wYW55PHNwYW4gY2xhc3NOYW1lPVwidGV4dC12LWxpbmVcIj48L3NwYW4+PC9EaXNwbGF5VGV4dD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPjxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3ViZHVlZFwiPlNob3A8L1RleHRTdHlsZT4ge2l0ZW0uc291cmNlfSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXYtbGluZVwiPjwvc3Bhbj48L0Rpc3BsYXlUZXh0PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzcGxheVRleHQgc2l6ZT1cIm1lZGl1bVwiPiB7aXRlbS5wcmljZX0gPC9EaXNwbGF5VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXRlbS1vcGVyYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHVybD17aXRlbS5zb3VyY2VVcmx9IGV4dGVybmFsPk9yaWdpbmFsIFByb2R1Y3QgTGluazwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNsaW1cIiBwcmltYXJ5IG9uQ2xpY2s9eyAoKSA9PiBIYW5kbGVDbGlja0ltcG9ydFByb2R1Y3QoaXRlbS5faWQpfT5JbXBvcnQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN1YmR1ZWRcIj5Qcm9kdWN0IFRpdGxlPC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNwbGF5VGV4dCBzaXplPVwic21hbGxcIj57aXRlbS50aXRsZX08L0Rpc3BsYXlUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN1YmR1ZWRcIj5WYXJpYXRpb24gPHNwYW4gY2xhc3NOYW1lPVwidmFyaWF0aW9uLWNvdW50XCI+KDIpPC9zcGFuPjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbi1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS52YXJpYW50cyE9PXVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhcmlhbnRzLm1hcCgodmFyaWFudCxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2LWl0ZW1cIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2VzWzFdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbi1wcm9wc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuPnt2YXJpYW50Lm5hbWV9PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInRleHQtdi1saW5lXCI+PC9zcGFuPjxzcGFuPjI0PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Bhbj57dmFyaWFudC5wcmljZX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN1YmR1ZWRcIj5EZXNjcmlwdGlvbjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhZz5Nb3ZpZTwvVGFnPjxUYWc+U2VyaWVzPC9UYWc+PFRhZz5Db2xsZWN0aWJsZXM8L1RhZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jlc291cmNlTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jlc291cmNlTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Tm8gUHJvZHVjdCBMaXN0ZWQgWWV0Li4uPC9wPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgICAgICAgPC9GcmFtZT5cclxuICAgICAgICApO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2hvcGlmeS9wb2xhcmlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==