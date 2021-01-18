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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/signup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/bds/firebase.js":
/*!*****************************!*\
  !*** ./lib/bds/firebase.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);


const config = {
  apiKey: "AIzaSyBbUA2xgcJiZWorSzWoVzIglO9RkisoQF8",
  authDomain: "react-uclab.firebaseapp.com",
  databaseURL: "https://react-uclab-default-rtdb.firebaseio.com",
  projectId: "react-uclab",
  storageBucket: "react-uclab.appspot.com",
  messagingSenderId: "681126830705",
  appId: "1:681126830705:web:f6ee76f1b0055751ee31d0"
};

class Firebase {
  constructor() {
    firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
    this.auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Firebase);

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_bds_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/bds/firebase */ "./lib/bds/firebase.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-nextjs-shopify\\pages\\signup.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Signup extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleUserFirstNameChange", value => {
      this.setState({
        userFirestName: value
      });
    });

    _defineProperty(this, "handleUserLastNameChange", value => {
      this.setState({
        userLastName: value
      });
    });

    _defineProperty(this, "handleUsernameChange", value => {
      this.setState({
        userName: value
      });
    });

    _defineProperty(this, "handleUserpassChange", value => {
      this.setState({
        userPass: value
      });
    });

    _defineProperty(this, "handleSignupSubmit", async event => {
      console.log(js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get('shopOrigin'));
      const signupForm = {
        first_name: this.state.userFirestName,
        last_name: this.state.userLastName,
        email: this.state.userName,
        url: js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get('shopOrigin')
      };
      _lib_bds_firebase__WEBPACK_IMPORTED_MODULE_5__["default"].auth.createUserWithEmailAndPassword(this.state.userName, this.state.userPass).then(async function () {
        signupForm.uid = _lib_bds_firebase__WEBPACK_IMPORTED_MODULE_5__["default"].auth.currentUser.uid;
        js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.set('nsns', signupForm.uid);
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
        /*
        const collectionRef = await FirebaseConnect.firestore().collection('users')        
        collectionRef.set(signupForm);
        */
      }, function (error) {
        console.log(error);
      });
    });

    this.state = {
      isuserLoggedin: false,
      userFirestName: '',
      userLastName: '',
      userName: '',
      userPass: ''
    };
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Page"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Card"], {
          sectioned: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Form"], {
            name: "signup-form",
            onSubmit: this.handleSignupSubmit,
            method: "post",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["FormLayout"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
                source: react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosContact"],
                backdrop: false
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["DisplayText"], {
                size: "medium",
                children: "Sign Up"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["FormLayout"].Group, {
                condensed: true,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
                  name: "userFirestName",
                  type: "text",
                  placeholder: "First Name *",
                  value: this.state.userFirestName,
                  onChange: this.handleUserFirstNameChange
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
                  name: "userLastName",
                  type: "text",
                  placeholder: "Last Name ",
                  value: this.state.userLastName,
                  onChange: this.handleUserLastNameChange
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
                name: "userName",
                type: "email",
                placeholder: "Email Address *",
                value: this.state.userName,
                onChange: this.handleUsernameChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
                name: "userPass",
                type: "password",
                placeholder: "Password *",
                value: this.state.userPass,
                onChange: this.handleUserpassChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                name: "signup",
                size: "medium",
                primary: true,
                submit: "true",
                children: "SIGN UP"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Link"], {
                url: "/signin",
                children: "have an account? Sign In"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
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

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2Jkcy9maXJlYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWdudXAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNob3BpZnkvcG9sYXJpc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJjb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIkZpcmViYXNlIiwiY29uc3RydWN0b3IiLCJhcHAiLCJpbml0aWFsaXplQXBwIiwiYXV0aCIsIlNpZ251cCIsIkNvbXBvbmVudCIsInByb3BzIiwidmFsdWUiLCJzZXRTdGF0ZSIsInVzZXJGaXJlc3ROYW1lIiwidXNlckxhc3ROYW1lIiwidXNlck5hbWUiLCJ1c2VyUGFzcyIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsIkNvb2tpZXMiLCJnZXQiLCJzaWdudXBGb3JtIiwiZmlyc3RfbmFtZSIsInN0YXRlIiwibGFzdF9uYW1lIiwiZW1haWwiLCJ1cmwiLCJGYkNvbiIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJ1aWQiLCJjdXJyZW50VXNlciIsInNldCIsIlJvdXRlciIsInB1c2giLCJlcnJvciIsImlzdXNlckxvZ2dlZGluIiwicmVuZGVyIiwiaGFuZGxlU2lnbnVwU3VibWl0IiwiSW9Jb3NDb250YWN0IiwiaGFuZGxlVXNlckZpcnN0TmFtZUNoYW5nZSIsImhhbmRsZVVzZXJMYXN0TmFtZUNoYW5nZSIsImhhbmRsZVVzZXJuYW1lQ2hhbmdlIiwiaGFuZGxlVXNlcnBhc3NDaGFuZ2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNQSxNQUFNLEdBQUc7QUFDYkMsUUFBTSxFQUFFLHlDQURLO0FBRWJDLFlBQVUsRUFBRSw2QkFGQztBQUdiQyxhQUFXLEVBQUUsaURBSEE7QUFJYkMsV0FBUyxFQUFFLGFBSkU7QUFLYkMsZUFBYSxFQUFFLHlCQUxGO0FBTWJDLG1CQUFpQixFQUFFLGNBTk47QUFPYkMs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QyxRQUEzQjtBQUFvQyx1QkFBTyxFQUFFLElBQTdDO0FBQW1ELHNCQUFNLEVBQUMsTUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBbENKLGVBbUNJLHFFQUFDLHFEQUFEO0FBQU0sbUJBQUcsRUFBQyxTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQW5DSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUErQ0g7O0FBdEZ5QyxDOzs7Ozs7Ozs7OztBQ1A5Qyw2Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9zaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3NpZ251cC5qc1wiKTtcbiIsImltcG9ydCBhcHAgZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcclxuIFxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUJiVUEyeGdjSmlaV29yU3pXb1Z6SWdsTzlSa2lzb1FGOFwiLFxyXG4gIGF1dGhEb21haW46IFwicmVhY3QtdWNsYWIuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9yZWFjdC11Y2xhYi1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwicmVhY3QtdWNsYWJcIixcclxuICBzdG9yYWdlQnVja2V0OiBcInJlYWN0LXVjbGFiLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNjgxMTI2ODMwNzA1XCIsXHJcbiAgYXBwSWQ6IFwiMTo2ODExMjY4MzA3MDU6d2ViOmY2ZWU3NmYxYjAwNTU3NTFlZTMxZDBcIlxyXG59OyBcclxuY2xhc3MgRmlyZWJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgYXBwLmluaXRpYWxpemVBcHAoY29uZmlnKTsgXHJcbiAgICB0aGlzLmF1dGggPSBhcHAuYXV0aCgpO1xyXG4gIH1cclxufSBcclxuZXhwb3J0IGRlZmF1bHQgRmlyZWJhc2U7XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm0sIEZvcm1MYXlvdXQsIFBhZ2UsIExheW91dCwgQ2FyZCwgVGV4dEZpZWxkLCBCdXR0b24sIEljb24sIERpc3BsYXlUZXh0LCBMaW5rIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCB7SW9Jb3NDb250YWN0IH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcbmltcG9ydCBGYkNvbiBmcm9tIFwiLi4vbGliL2Jkcy9maXJlYmFzZVwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbnVwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc3VzZXJMb2dnZWRpbjpmYWxzZSxcclxuICAgICAgICAgICAgdXNlckZpcmVzdE5hbWU6JycsXHJcbiAgICAgICAgICAgIHVzZXJMYXN0TmFtZTonJyxcclxuICAgICAgICAgICAgdXNlck5hbWU6JycsXHJcbiAgICAgICAgICAgIHVzZXJQYXNzOicnLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaGFuZGxlVXNlckZpcnN0TmFtZUNoYW5nZSA9ICh2YWx1ZSkgPT57dGhpcy5zZXRTdGF0ZSh7dXNlckZpcmVzdE5hbWU6dmFsdWV9KX1cclxuICAgIGhhbmRsZVVzZXJMYXN0TmFtZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge3RoaXMuc2V0U3RhdGUoe3VzZXJMYXN0TmFtZTp2YWx1ZX0pfVxyXG4gICAgaGFuZGxlVXNlcm5hbWVDaGFuZ2UgPSAodmFsdWUpID0+IHt0aGlzLnNldFN0YXRlKHt1c2VyTmFtZTp2YWx1ZX0pfVxyXG4gICAgaGFuZGxlVXNlcnBhc3NDaGFuZ2UgPSAodmFsdWUpID0+IHt0aGlzLnNldFN0YXRlKHt1c2VyUGFzczp2YWx1ZX0pfVxyXG5cclxuXHJcbiAgICBoYW5kbGVTaWdudXBTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhDb29raWVzLmdldCgnc2hvcE9yaWdpbicpKVxyXG4gICAgICAgIGNvbnN0IHNpZ251cEZvcm0gPSB7XHJcbiAgICAgICAgICAgIGZpcnN0X25hbWUgOiB0aGlzLnN0YXRlLnVzZXJGaXJlc3ROYW1lLFxyXG4gICAgICAgICAgICBsYXN0X25hbWUgOiB0aGlzLnN0YXRlLnVzZXJMYXN0TmFtZSxcclxuICAgICAgICAgICAgZW1haWwgOiB0aGlzLnN0YXRlLnVzZXJOYW1lLFxyXG4gICAgICAgICAgICB1cmw6Q29va2llcy5nZXQoJ3Nob3BPcmlnaW4nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBGYkNvbi5hdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCh0aGlzLnN0YXRlLnVzZXJOYW1lLHRoaXMuc3RhdGUudXNlclBhc3MpLnRoZW4oIGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHNpZ251cEZvcm0udWlkID0gRmJDb24uYXV0aC5jdXJyZW50VXNlci51aWQ7XHJcbiAgICAgICAgICAgIENvb2tpZXMuc2V0KCduc25zJyxzaWdudXBGb3JtLnVpZCk7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgY29uc3QgY29sbGVjdGlvblJlZiA9IGF3YWl0IEZpcmViYXNlQ29ubmVjdC5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCd1c2VycycpICAgICAgICBcclxuICAgICAgICAgICAgY29sbGVjdGlvblJlZi5zZXQoc2lnbnVwRm9ybSk7XHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgfSxmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UGFnZT5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBuYW1lPVwic2lnbnVwLWZvcm1cIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTaWdudXBTdWJtaXR9IG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHNvdXJjZT17SW9Jb3NDb250YWN0fSBiYWNrZHJvcD17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJtZWRpdW1cIj5TaWduIFVwPC9EaXNwbGF5VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dC5Hcm91cCBjb25kZW5zZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyRmlyZXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWUgKlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS51c2VyRmlyZXN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJGaXJzdE5hbWVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyTGFzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWUgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJMYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJMYXN0TmFtZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQuR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlck5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3MgKlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VybmFtZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJQYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZCAqXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlclBhc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJwYXNzQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBuYW1lPVwic2lnbnVwXCIgc2l6ZT1cIm1lZGl1bVwiIHByaW1hcnk9e3RydWV9IHN1Ym1pdD1cInRydWVcIj5TSUdOIFVQPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdXJsPVwiL3NpZ25pblwiID5oYXZlIGFuIGFjY291bnQ/IFNpZ24gSW48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD4gICAgXHJcbiAgICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvaW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=