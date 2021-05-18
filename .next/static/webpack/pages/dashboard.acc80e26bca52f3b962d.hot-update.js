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
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_db_Firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/db/Firebase */ "./lib/db/Firebase.js");
/* harmony import */ var _components_SettingForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SettingForm */ "./components/SettingForm.js");
/* harmony import */ var _components_CrawlUrl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/CrawlUrl */ "./components/CrawlUrl.js");
/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/NavigationBar */ "./components/NavigationBar.js");








var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-nextjs-shopify\\pages\\dashboard.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var Dashboard = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Dashboard, _Component);

  var _super = _createSuper(Dashboard);

  function Dashboard() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Dashboard);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Dashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _lib_db_Firebase__WEBPACK_IMPORTED_MODULE_11__["default"].auth().onAuthStateChanged( /*#__PURE__*/function () {
        var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(user) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!user) {
                    next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/signin');
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Frame"], {
        navigation: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_14__["default"], {
          dashboard: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 23
        }, this),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Page"], {
          title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Heading"], {
            children: "Dashboard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 28
          }, this),
          fullWidth: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
            onClick: function onClick() {
              console.log('this is button press');
            },
            children: "Check theme"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
            sectioned: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"], {
              sectioned: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SettingForm__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 23
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CrawlUrl__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
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
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbIkRhc2hib2FyZCIsImZpcmViYXNlIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJSb3V0ZXIiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBR3FCQSxTOzs7Ozs7Ozs7Ozs7O3dDQUNBO0FBQ2pCQywrREFBUSxDQUFDQyxJQUFULEdBQWdCQyxrQkFBaEI7QUFBQSxvTUFBb0MsaUJBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNsQyxzQkFBRyxDQUFDQSxJQUFKLEVBQVM7QUFDUEMsdUVBQU0sQ0FBQ0MsSUFBUCxDQUFZLFNBQVo7QUFDRDs7QUFIaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBcEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0c7Ozs2QkFDTztBQUNOLDBCQUNFLHFFQUFDLHNEQUFEO0FBQ0ksa0JBQVUsZUFBRSxxRUFBQyxrRUFBRDtBQUFlLG1CQUFTLEVBQUU7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEaEI7QUFBQSwrQkFHUSxxRUFBQyxxREFBRDtBQUFNLGVBQUssZUFBRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBYjtBQUEyQyxtQkFBUyxNQUFwRDtBQUFBLGtDQUNBLHFFQUFDLE1BQUQ7QUFDRSxtQkFBTyxFQUFFLG1CQUFJO0FBQ1hDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNELGFBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREEsZUFRRSxxRUFBQyxxREFBRDtBQUFNLHFCQUFTLE1BQWY7QUFBQSxtQ0FDRSxxRUFBQyx1REFBRDtBQUFRLHVCQUFTLEVBQUUsSUFBbkI7QUFBQSxzQ0FDSSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBRUkscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQXFCRDs7OztFQW5Db0NDLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC5hY2M4MGUyNmJjYTUyZjNiOTYyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBQYWdlLFxyXG4gIEZyYW1lLFxyXG4gIExheW91dCxcclxuICBDYXJkLFxyXG4gIEhlYWRpbmcsXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgZmlyZWJhc2UgIGZyb20gJy4uL2xpYi9kYi9GaXJlYmFzZSc7XHJcbmltcG9ydCBTZXR0aW5nRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1NldHRpbmdGb3JtJztcclxuaW1wb3J0IENyb3dsVXJsIGZyb20gJy4uL2NvbXBvbmVudHMvQ3Jhd2xVcmwnO1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXInO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudHtcclxuICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCggYXN5bmMgKHVzZXIpPT57XHJcbiAgICAgIGlmKCF1c2VyKXtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL3NpZ25pbicpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvKlxyXG4gICAgaWYoQ29va2llcy5nZXQoJ25zbnMnKSA9PSBmYWxzZSl7XHJcbiAgICAgIFJvdXRlci5wdXNoKCcvc2lnbmluJylcclxuICAgIH1cclxuICAgICovXHJcbiAgfVxyXG4gIHJlbmRlcigpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZyYW1lXHJcbiAgICAgICAgICBuYXZpZ2F0aW9uPXs8TmF2aWdhdGlvbkJhciBkYXNoYm9hcmQ9e3RydWV9IC8+fVxyXG4gICAgICA+XHJcbiAgICAgICAgICAgICAgPFBhZ2UgdGl0bGU9ezxIZWFkaW5nPkRhc2hib2FyZDwvSGVhZGluZz59IGZ1bGxXaWR0aD5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyBidXR0b24gcHJlc3MnKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ2hlY2sgdGhlbWVcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgICAgPExheW91dCBzZWN0aW9uZWQ9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdGb3JtIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q3Jvd2xVcmwvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1BhZ2U+XHJcbiAgICAgIDwvRnJhbWU+XHJcbiAgICApO1xyXG4gIH0gIFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==