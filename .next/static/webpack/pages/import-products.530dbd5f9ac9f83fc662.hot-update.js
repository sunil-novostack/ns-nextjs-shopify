webpackHotUpdate_N_E("pages/import-products",{

/***/ "./pages/import-products.js":
/*!**********************************!*\
  !*** ./pages/import-products.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Importproducts; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_db_Firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/db/Firebase */ "./lib/db/Firebase.js");
/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavigationBar */ "./components/NavigationBar.js");




var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-nextjs-shopify\\pages\\import-products.js",
    _s = $RefreshSig$();






function Importproducts() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      items = _useState[0],
      setItems = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    _lib_db_Firebase__WEBPACK_IMPORTED_MODULE_6__["default"].auth().onAuthStateChanged( /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(user) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!user) {
                  next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/signin');
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
    var firedb = _lib_db_Firebase__WEBPACK_IMPORTED_MODULE_6__["default"].firestore();
    var products = [];
    firedb.collection('sunil-novostack.myshopify.com').get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        products.push(doc.data());
      });
      setItems(products);
    });
  }, [items]);
  /*
  constructor(props) {
      super(props)
  
      this.state = {
           items:[]
      }
  }
  
  componentDidMount(){
      
      firebase.auth().onAuthStateChanged( async (user)=>{
          if(!user){
              Router.push('/signin')
          }
      })
      const firedb = firebase.firestore()
      let products = [];
      firedb.collection('sunil-novostack.myshopify.com')
      .get()
      .then((querySnapshot) => {            
          querySnapshot.forEach((doc) => {                
             products.push(doc.data())
          })
          this.setState({items:products})
      })
  }
  */

  /* render(){ */

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Frame"], {
    navigation: _components_NavigationBar__WEBPACK_IMPORTED_MODULE_7__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Page"], {
      title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Heading"], {
        children: "Imported Products"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 26
      }, this),
      fullWidth: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Card"], {
        sectioned: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "product-list-items",
          children: items.map(function (product, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "product-item",
              id: "item-" + index,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "image-holder",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: product.image
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 45
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 41
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "item-bottom",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  className: "item-title",
                  children: product.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 45
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  className: "item-price",
                  children: ["US $ ", product.price]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 45
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                  name: "importtostore",
                  submit: "false",
                  primary: true,
                  size: "slim",
                  onClick: function onClick() {
                    return AddNewProduct;
                  },
                  children: "Import To Store"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 45
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 41
              }, _this)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 37
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 13
  }, this);
  /*} */
}

_s(Importproducts, "WQxLG0jSi8z/ovcvg+2h1VT9zGY=");

_c = Importproducts;

var _c;

$RefreshReg$(_c, "Importproducts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1wb3J0LXByb2R1Y3RzLmpzIl0sIm5hbWVzIjpbIkltcG9ydHByb2R1Y3RzIiwidXNlU3RhdGUiLCJpdGVtcyIsInNldEl0ZW1zIiwidXNlRWZmZWN0IiwiZmlyZWJhc2UiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsIlJvdXRlciIsInB1c2giLCJmaXJlZGIiLCJmaXJlc3RvcmUiLCJwcm9kdWN0cyIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJkb2MiLCJkYXRhIiwiTmFydmlnYXRpb25CYXIiLCJtYXAiLCJwcm9kdWN0IiwiaW5kZXgiLCJpbWFnZSIsInRpdGxlIiwicHJpY2UiLCJBZGROZXdQcm9kdWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUllLFNBQVNBLGNBQVQsR0FBMEI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDWkMsc0RBQVEsQ0FBQyxFQUFELENBREk7QUFBQSxNQUM5QkMsS0FEOEI7QUFBQSxNQUN4QkMsUUFEd0I7O0FBRXJDQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsNERBQVEsQ0FBQ0MsSUFBVCxHQUFnQkMsa0JBQWhCO0FBQUEsa01BQW9DLGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEMsb0JBQUcsQ0FBQ0EsSUFBSixFQUFTO0FBQ0xDLG9FQUFNLENBQUNDLElBQVAsQ0FBWSxTQUFaO0FBQ0g7O0FBSCtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXBDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0EsUUFBTUMsTUFBTSxHQUFHTix3REFBUSxDQUFDTyxTQUFULEVBQWY7QUFDQSxRQUFJQyxRQUFRLEdBQUcsRUFBZjtBQUNBRixVQUFNLENBQUNHLFVBQVAsQ0FBa0IsK0JBQWxCLEVBQ0NDLEdBREQsR0FFQ0MsSUFGRCxDQUVNLFVBQUNDLGFBQUQsRUFBbUI7QUFDckJBLG1CQUFhLENBQUNDLE9BQWQsQ0FBc0IsVUFBQ0MsR0FBRCxFQUFTO0FBQzVCTixnQkFBUSxDQUFDSCxJQUFULENBQWNTLEdBQUcsQ0FBQ0MsSUFBSixFQUFkO0FBQ0YsT0FGRDtBQUdBakIsY0FBUSxDQUFDVSxRQUFELENBQVI7QUFDSCxLQVBEO0FBUUgsR0FoQlEsRUFnQlAsQ0FBQ1gsS0FBRCxDQWhCTyxDQUFUO0FBaUJBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVHOztBQUNLLHNCQUNJLHFFQUFDLHNEQUFEO0FBQ0ksY0FBVSxFQUFFbUIsaUVBRGhCO0FBQUEsMkJBR0EscUVBQUMscURBQUQ7QUFBTSxXQUFLLGVBQUUscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBYjtBQUFtRCxlQUFTLE1BQTVEO0FBQUEsNkJBQ0kscUVBQUMscURBQUQ7QUFBTSxpQkFBUyxNQUFmO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLG9CQUFmO0FBQUEsb0JBRVFuQixLQUFLLENBQUNvQixHQUFOLENBQVcsVUFBQ0MsT0FBRCxFQUFTQyxLQUFULEVBQWlCO0FBQ3hCLGdDQUNJO0FBQUssdUJBQVMsRUFBQyxjQUFmO0FBQThCLGdCQUFFLEVBQUUsVUFBUUEsS0FBMUM7QUFBQSxzQ0FDSTtBQUFLLHlCQUFTLEVBQUMsY0FBZjtBQUFBLHVDQUNJO0FBQUsscUJBQUcsRUFBRUQsT0FBTyxDQUFDRTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUlJO0FBQUsseUJBQVMsRUFBQyxhQUFmO0FBQUEsd0NBQ0k7QUFBSSwyQkFBUyxFQUFDLFlBQWQ7QUFBQSw0QkFBNEJGLE9BQU8sQ0FBQ0c7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUVJO0FBQUksMkJBQVMsRUFBQyxZQUFkO0FBQUEsc0NBQWlDSCxPQUFPLENBQUNJLEtBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSixlQUdJLHFFQUFDLHVEQUFEO0FBQVEsc0JBQUksRUFBQyxlQUFiO0FBQTZCLHdCQUFNLEVBQUMsT0FBcEM7QUFBNEMseUJBQU8sRUFBRSxJQUFyRDtBQUEyRCxzQkFBSSxFQUFDLE1BQWhFO0FBQXVFLHlCQUFPLEVBQUU7QUFBQSwyQkFBTUMsYUFBTjtBQUFBLG1CQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSko7QUFBQSxlQUFzREosS0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESjtBQVlILFdBYkQ7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE4Qko7QUFDSDs7R0FoRnVCeEIsYzs7S0FBQUEsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbXBvcnQtcHJvZHVjdHMuNTMwZGJkNWY5YWM5ZjgzZmM2NjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgUGFnZSxcclxuICBIZWFkaW5nLFxyXG4gIEZyYW1lLFxyXG4gIExheW91dCxcclxuICBDYXJkLFxyXG4gIERhdGFUYWJsZSxcclxuICBUaHVtYm5haWwsXHJcbiAgUmVzb3VyY2VMaXN0LFxyXG4gIFRleHRTdHlsZSxcclxuICBCdXR0b24sXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgZmlyZWJhc2UgIGZyb20gJy4uL2xpYi9kYi9GaXJlYmFzZSc7XHJcbmltcG9ydCBOYXJ2aWdhdGlvbkJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXInO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbXBvcnRwcm9kdWN0cyAoKXtcclxuICAgIGNvbnN0IFtpdGVtcyxzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCggYXN5bmMgKHVzZXIpPT57XHJcbiAgICAgICAgICAgIGlmKCF1c2VyKXtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvc2lnbmluJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgZmlyZWRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKClcclxuICAgICAgICBsZXQgcHJvZHVjdHMgPSBbXTtcclxuICAgICAgICBmaXJlZGIuY29sbGVjdGlvbignc3VuaWwtbm92b3N0YWNrLm15c2hvcGlmeS5jb20nKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBwcm9kdWN0cy5wdXNoKGRvYy5kYXRhKCkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNldEl0ZW1zKHByb2R1Y3RzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFtpdGVtc10pXHJcbiAgICAvKlxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICBpdGVtczpbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBcclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKCBhc3luYyAodXNlcik9PntcclxuICAgICAgICAgICAgaWYoIXVzZXIpe1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9zaWduaW4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBmaXJlZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKVxyXG4gICAgICAgIGxldCBwcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgIGZpcmVkYi5jb2xsZWN0aW9uKCdzdW5pbC1ub3Zvc3RhY2subXlzaG9waWZ5LmNvbScpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIHByb2R1Y3RzLnB1c2goZG9jLmRhdGEoKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXRlbXM6cHJvZHVjdHN9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAqL1xyXG5cclxuICAgLyogcmVuZGVyKCl7ICovICAgICAgIFxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPEZyYW1lXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uPXtOYXJ2aWdhdGlvbkJhcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGFnZSB0aXRsZT17PEhlYWRpbmc+SW1wb3J0ZWQgUHJvZHVjdHM8L0hlYWRpbmc+fSBmdWxsV2lkdGg+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3QtaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMubWFwKCAocHJvZHVjdCxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1pdGVtXCIgaWQ9e1wiaXRlbS1cIitpbmRleH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlfSAvPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaXRlbS10aXRsZVwiPntwcm9kdWN0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIml0ZW0tcHJpY2VcIj5VUyAkIHtwcm9kdWN0LnByaWNlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBuYW1lPVwiaW1wb3J0dG9zdG9yZVwiIHN1Ym1pdD1cImZhbHNlXCIgcHJpbWFyeT17dHJ1ZX0gc2l6ZT1cInNsaW1cIiBvbkNsaWNrPXsoKSA9PiBBZGROZXdQcm9kdWN0fT5JbXBvcnQgVG8gU3RvcmU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgICAgICA8L0ZyYW1lPlxyXG4gICAgICAgICk7XHJcbiAgICAvKn0gKi9cclxufSJdLCJzb3VyY2VSb290IjoiIn0=