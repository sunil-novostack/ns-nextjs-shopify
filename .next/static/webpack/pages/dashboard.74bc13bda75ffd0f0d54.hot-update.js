webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_db_Firebase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/db/Firebase */ "./lib/db/Firebase.js");
/* harmony import */ var _components_SettingForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/SettingForm */ "./components/SettingForm.js");
/* harmony import */ var _components_CrawlUrl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/CrawlUrl */ "./components/CrawlUrl.js");
/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/NavigationBar */ "./components/NavigationBar.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);










var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-nextjs-shopify\\pages\\dashboard.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var Dashboard = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Dashboard, _Component);

  var _super = _createSuper(Dashboard);

  function Dashboard() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Dashboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleGetThemes", function () {});

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Dashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _lib_db_Firebase__WEBPACK_IMPORTED_MODULE_13__["default"].auth().onAuthStateChanged( /*#__PURE__*/function () {
        var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(user) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!user) {
                    next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push('/signin');
                  }

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      /*
      if(Cookies.get('nsns') == false){
        Router.push('/signin')
      }
      */
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Frame"], {
        navigation: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_16__["default"], {
          dashboard: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 23
        }, this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Page"], {
          title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Heading"], {
            children: "Dashboard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 28
          }, this),
          fullWidth: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Button"], {
            onClick: function onClick() {
              _this2.handleGetThemes();
            },
            children: "Check theme"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Card"], {
            sectioned: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_11__["Layout"], {
              sectioned: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SettingForm__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 23
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CrawlUrl__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }, this);
    }
  }]);

  return Dashboard;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbIkRhc2hib2FyZCIsImZpcmViYXNlIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJSb3V0ZXIiLCJwdXNoIiwiaGFuZGxlR2V0VGhlbWVzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7OzswTkFhRCxZQUFNLENBRXZCLEM7Ozs7Ozs7d0NBZGtCO0FBQ2pCQywrREFBUSxDQUFDQyxJQUFULEdBQWdCQyxrQkFBaEI7QUFBQSxvTUFBb0MsaUJBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNsQyxzQkFBRyxDQUFDQSxJQUFKLEVBQVM7QUFDUEMsdUVBQU0sQ0FBQ0MsSUFBUCxDQUFZLFNBQVo7QUFDRDs7QUFIaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBcEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0c7Ozs2QkFJTztBQUFBOztBQUNOLDBCQUNFLHFFQUFDLHVEQUFEO0FBQ0ksa0JBQVUsZUFBRSxxRUFBQyxrRUFBRDtBQUFlLG1CQUFTLEVBQUU7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEaEI7QUFBQSwrQkFHUSxxRUFBQyxzREFBRDtBQUFNLGVBQUssZUFBRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBYjtBQUEyQyxtQkFBUyxNQUFwRDtBQUFBLGtDQUNBLHFFQUFDLHdEQUFEO0FBQ0UsbUJBQU8sRUFBRSxtQkFBSTtBQUNYLG9CQUFJLENBQUNDLGVBQUw7QUFDRCxhQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLGVBUUUscUVBQUMsc0RBQUQ7QUFBTSxxQkFBUyxNQUFmO0FBQUEsbUNBQ0UscUVBQUMsd0RBQUQ7QUFBUSx1QkFBUyxFQUFFLElBQW5CO0FBQUEsc0NBQ0kscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUVJLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFxQkQ7Ozs7RUF0Q29DQyxnRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuNzRiYzEzYmRhNzVmZmQwZjBkNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgUGFnZSxcclxuICBGcmFtZSxcclxuICBMYXlvdXQsXHJcbiAgQ2FyZCxcclxuICBIZWFkaW5nLFxyXG4gIEJ1dHRvbixcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBmaXJlYmFzZSAgZnJvbSAnLi4vbGliL2RiL0ZpcmViYXNlJztcclxuaW1wb3J0IFNldHRpbmdGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvU2V0dGluZ0Zvcm0nO1xyXG5pbXBvcnQgQ3Jvd2xVcmwgZnJvbSAnLi4vY29tcG9uZW50cy9DcmF3bFVybCc7XHJcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoIGFzeW5jICh1c2VyKT0+e1xyXG4gICAgICBpZighdXNlcil7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9zaWduaW4nKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLypcclxuICAgIGlmKENvb2tpZXMuZ2V0KCduc25zJykgPT0gZmFsc2Upe1xyXG4gICAgICBSb3V0ZXIucHVzaCgnL3NpZ25pbicpXHJcbiAgICB9XHJcbiAgICAqL1xyXG4gIH1cclxuICBoYW5kbGVHZXRUaGVtZXMgPSAoKSA9PiB7XHJcbiAgICBcclxuICB9XHJcbiAgcmVuZGVyKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RnJhbWVcclxuICAgICAgICAgIG5hdmlnYXRpb249ezxOYXZpZ2F0aW9uQmFyIGRhc2hib2FyZD17dHJ1ZX0gLz59XHJcbiAgICAgID5cclxuICAgICAgICAgICAgICA8UGFnZSB0aXRsZT17PEhlYWRpbmc+RGFzaGJvYXJkPC9IZWFkaW5nPn0gZnVsbFdpZHRoPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlR2V0VGhlbWVzKCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDaGVjayB0aGVtZVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgICA8TGF5b3V0IHNlY3Rpb25lZD17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ0Zvcm0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDcm93bFVybC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgPC9GcmFtZT5cclxuICAgICk7XHJcbiAgfSAgXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9