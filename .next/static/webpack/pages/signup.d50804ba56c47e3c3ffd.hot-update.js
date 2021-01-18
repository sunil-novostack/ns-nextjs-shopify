webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _lib_bds_firebase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lib/bds/firebase */ "./lib/bds/firebase.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_15__);










var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-nextjs-shopify\\pages\\signup.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var Signup = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Signup, _Component);

  var _super = _createSuper(Signup);

  function Signup(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Signup);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleUserFirstNameChange", function (value) {
      _this.setState({
        userFirestName: value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleUserLastNameChange", function (value) {
      _this.setState({
        userLastName: value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleUsernameChange", function (value) {
      _this.setState({
        userName: value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleUserpassChange", function (value) {
      _this.setState({
        userPass: value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSignupSubmit", /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(event) {
        var signupForm;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(js_cookie__WEBPACK_IMPORTED_MODULE_15___default.a.get('shopOrigin'));
                signupForm = {
                  first_name: _this.state.userFirestName,
                  last_name: _this.state.userLastName,
                  email: _this.state.userName,
                  url: js_cookie__WEBPACK_IMPORTED_MODULE_15___default.a.get('shopOrigin')
                };
                _lib_bds_firebase__WEBPACK_IMPORTED_MODULE_14__["default"].auth.createUserWithEmailAndPassword(_this.state.userName, _this.state.userPass).then( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          signupForm.uid = _lib_bds_firebase__WEBPACK_IMPORTED_MODULE_14__["default"].auth.currentUser.uid;
                          js_cookie__WEBPACK_IMPORTED_MODULE_15___default.a.set('nsns', signupForm.uid);
                          next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/');
                          /*
                          const collectionRef = await FirebaseConnect.firestore().collection('users')        
                          collectionRef.set(signupForm);
                          */

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                })), function (error) {
                  console.log(error);
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.state = {
      isuserLoggedin: false,
      userFirestName: '',
      userLastName: '',
      userName: '',
      userPass: ''
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Signup, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Page"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Layout"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Card"], {
            sectioned: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Form"], {
              name: "signup-form",
              onSubmit: this.handleSignupSubmit,
              method: "post",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["FormLayout"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
                  source: react_icons_io__WEBPACK_IMPORTED_MODULE_13__["IoIosContact"],
                  backdrop: false
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["DisplayText"], {
                  size: "medium",
                  children: "Sign Up"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["FormLayout"].Group, {
                  condensed: true,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
                    name: "userFirestName",
                    type: "text",
                    placeholder: "First Name *",
                    value: this.state.userFirestName,
                    onChange: this.handleUserFirstNameChange
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 37
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
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
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
                  name: "userName",
                  type: "email",
                  placeholder: "Email Address *",
                  value: this.state.userName,
                  onChange: this.handleUsernameChange
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
                  name: "userPass",
                  type: "password",
                  placeholder: "Password *",
                  value: this.state.userPass,
                  onChange: this.handleUserpassChange
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Button"], {
                  name: "signup",
                  size: "medium",
                  primary: true,
                  submit: "true",
                  children: "SIGN UP"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["Link"], {
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
  }]);

  return Signup;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIlNpZ251cCIsInByb3BzIiwidmFsdWUiLCJzZXRTdGF0ZSIsInVzZXJGaXJlc3ROYW1lIiwidXNlckxhc3ROYW1lIiwidXNlck5hbWUiLCJ1c2VyUGFzcyIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsIkNvb2tpZXMiLCJnZXQiLCJzaWdudXBGb3JtIiwiZmlyc3RfbmFtZSIsInN0YXRlIiwibGFzdF9uYW1lIiwiZW1haWwiLCJ1cmwiLCJGYkNvbiIsImF1dGgiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwidWlkIiwiY3VycmVudFVzZXIiLCJzZXQiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJpc3VzZXJMb2dnZWRpbiIsImhhbmRsZVNpZ251cFN1Ym1pdCIsIklvSW9zQ29udGFjdCIsImhhbmRsZVVzZXJGaXJzdE5hbWVDaGFuZ2UiLCJoYW5kbGVVc2VyTGFzdE5hbWVDaGFuZ2UiLCJoYW5kbGVVc2VybmFtZUNoYW5nZSIsImhhbmRsZVVzZXJwYXNzQ2hhbmdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsTTs7Ozs7QUFDakIsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxvT0FXUyxVQUFDQyxLQUFELEVBQVU7QUFBQyxZQUFLQyxRQUFMLENBQWM7QUFBQ0Msc0JBQWMsRUFBQ0Y7QUFBaEIsT0FBZDtBQUFzQyxLQVgxRDs7QUFBQSxtT0FZUSxVQUFDQSxLQUFELEVBQVc7QUFBQyxZQUFLQyxRQUFMLENBQWM7QUFBQ0Usb0JBQVksRUFBQ0g7QUFBZCxPQUFkO0FBQW9DLEtBWnhEOztBQUFBLCtOQWFJLFVBQUNBLEtBQUQsRUFBVztBQUFD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b3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtLCBGb3JtTGF5b3V0LCBQYWdlLCBMYXlvdXQsIENhcmQsIFRleHRGaWVsZCwgQnV0dG9uLCBJY29uLCBEaXNwbGF5VGV4dCwgTGluayB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQge0lvSW9zQ29udGFjdCB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5pbXBvcnQgRmJDb24gZnJvbSBcIi4uL2xpYi9iZHMvZmlyZWJhc2VcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ251cCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKSAgXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXN1c2VyTG9nZ2VkaW46ZmFsc2UsXHJcbiAgICAgICAgICAgIHVzZXJGaXJlc3ROYW1lOicnLFxyXG4gICAgICAgICAgICB1c2VyTGFzdE5hbWU6JycsXHJcbiAgICAgICAgICAgIHVzZXJOYW1lOicnLFxyXG4gICAgICAgICAgICB1c2VyUGFzczonJyxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhhbmRsZVVzZXJGaXJzdE5hbWVDaGFuZ2UgPSAodmFsdWUpID0+e3RoaXMuc2V0U3RhdGUoe3VzZXJGaXJlc3ROYW1lOnZhbHVlfSl9XHJcbiAgICBoYW5kbGVVc2VyTGFzdE5hbWVDaGFuZ2UgPSAodmFsdWUpID0+IHt0aGlzLnNldFN0YXRlKHt1c2VyTGFzdE5hbWU6dmFsdWV9KX1cclxuICAgIGhhbmRsZVVzZXJuYW1lQ2hhbmdlID0gKHZhbHVlKSA9PiB7dGhpcy5zZXRTdGF0ZSh7dXNlck5hbWU6dmFsdWV9KX1cclxuICAgIGhhbmRsZVVzZXJwYXNzQ2hhbmdlID0gKHZhbHVlKSA9PiB7dGhpcy5zZXRTdGF0ZSh7dXNlclBhc3M6dmFsdWV9KX1cclxuXHJcblxyXG4gICAgaGFuZGxlU2lnbnVwU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coQ29va2llcy5nZXQoJ3Nob3BPcmlnaW4nKSlcclxuICAgICAgICBjb25zdCBzaWdudXBGb3JtID0ge1xyXG4gICAgICAgICAgICBmaXJzdF9uYW1lIDogdGhpcy5zdGF0ZS51c2VyRmlyZXN0TmFtZSxcclxuICAgICAgICAgICAgbGFzdF9uYW1lIDogdGhpcy5zdGF0ZS51c2VyTGFzdE5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsIDogdGhpcy5zdGF0ZS51c2VyTmFtZSxcclxuICAgICAgICAgICAgdXJsOkNvb2tpZXMuZ2V0KCdzaG9wT3JpZ2luJylcclxuICAgICAgICB9XHJcbiAgICAgICAgRmJDb24uYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQodGhpcy5zdGF0ZS51c2VyTmFtZSx0aGlzLnN0YXRlLnVzZXJQYXNzKS50aGVuKCBhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzaWdudXBGb3JtLnVpZCA9IEZiQ29uLmF1dGguY3VycmVudFVzZXIudWlkO1xyXG4gICAgICAgICAgICBDb29raWVzLnNldCgnbnNucycsc2lnbnVwRm9ybS51aWQpO1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3Rpb25SZWYgPSBhd2FpdCBGaXJlYmFzZUNvbm5lY3QuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigndXNlcnMnKSAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbGxlY3Rpb25SZWYuc2V0KHNpZ251cEZvcm0pO1xyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgIH0sZnVuY3Rpb24oZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFBhZ2U+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gbmFtZT1cInNpZ251cC1mb3JtXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU2lnbnVwU3VibWl0fSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBzb3VyY2U9e0lvSW9zQ29udGFjdH0gYmFja2Ryb3A9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNwbGF5VGV4dCBzaXplPVwibWVkaXVtXCI+U2lnbiBVcDwvRGlzcGxheVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQuR3JvdXAgY29uZGVuc2VkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlckZpcmVzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lICpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlckZpcmVzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VyRmlyc3ROYW1lQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlckxhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS51c2VyTGFzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VyTGFzdE5hbWVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0Lkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzICpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS51c2VyTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcm5hbWVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyUGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQgKlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJQYXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VycGFzc0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbmFtZT1cInNpZ251cFwiIHNpemU9XCJtZWRpdW1cIiBwcmltYXJ5PXt0cnVlfSBzdWJtaXQ9XCJ0cnVlXCI+U0lHTiBVUDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHVybD1cIi9zaWduaW5cIiA+aGF2ZSBhbiBhY2NvdW50PyBTaWduIEluPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+ICAgIFxyXG4gICAgICAgICAgICA8L1BhZ2U+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICBcclxufSJdLCJzb3VyY2VSb290IjoiIn0=