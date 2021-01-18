webpackHotUpdate_N_E("pages/signup",{

/***/ "./lib/bds/firebase.js":
/*!*****************************!*\
  !*** ./lib/bds/firebase.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");


var config = {
  apiKey: "AIzaSyBbUA2xgcJiZWorSzWoVzIglO9RkisoQF8",
  authDomain: "react-uclab.firebaseapp.com",
  databaseURL: "https://react-uclab-default-rtdb.firebaseio.com",
  projectId: "react-uclab",
  storageBucket: "react-uclab.appspot.com",
  messagingSenderId: "681126830705",
  appId: "1:681126830705:web:f6ee76f1b0055751ee31d0"
}; // Initialize Firebase

var FirebaseConnect = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(config);
var FbAuth = FirebaseConnect.auth();
/* harmony default export */ __webpack_exports__["default"] = (FbAuth); //filebase.database().ref();

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2Jkcy9maXJlYmFzZS5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIkZpcmViYXNlQ29ubmVjdCIsImZpcmViYXNlIiwiaW5pdGlhbGl6ZUFwcCIsIkZiQXV0aCIsImF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLFFBQU0sRUFBRSx5Q0FESztBQUViQyxZQUFVLEVBQUUsNkJBRkM7QUFHYkMsYUFBVyxFQUFFLGlEQUhBO0FBSWJDLFdBQVMsRUFBRSxhQUpFO0FBS2JDLGVBQWEsRUFBRSx5QkFMRjtBQU1iQyxtQkFBaUIsRUFBRSxjQU5OO0FBT2JDLE9BQUssRUFBRTtBQVBNLENBQWYsQyxDQVNFOztBQUNBLElBQU1DLGVBQWUsR0FBR0Msb0RBQVEsQ0FBQ0MsYUFBVCxDQUF1QlYsTUFBdkIsQ0FBeEI7QUFDQSxJQUFNVyxNQUFNLEdBQUdILGVBQWUsQ0FBQ0ksSUFBaEIsRUFBZjtBQUNlRCxxRUFBZixFLENBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmNkNTljODc0ZWVhNjIyYjI5NzcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcclxuY29uc3QgY29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lCYlVBMnhnY0ppWldvclN6V29WeklnbE85Umtpc29RRjhcIixcclxuICBhdXRoRG9tYWluOiBcInJlYWN0LXVjbGFiLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vcmVhY3QtdWNsYWItZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgcHJvamVjdElkOiBcInJlYWN0LXVjbGFiXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJyZWFjdC11Y2xhYi5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjY4MTEyNjgzMDcwNVwiLFxyXG4gIGFwcElkOiBcIjE6NjgxMTI2ODMwNzA1OndlYjpmNmVlNzZmMWIwMDU1NzUxZWUzMWQwXCJcclxufTtcclxuICAvLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbiAgY29uc3QgRmlyZWJhc2VDb25uZWN0ID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xyXG4gIGNvbnN0IEZiQXV0aCA9IEZpcmViYXNlQ29ubmVjdC5hdXRoKClcclxuICBleHBvcnQgZGVmYXVsdCBGYkF1dGg7XHJcbiAgLy9maWxlYmFzZS5kYXRhYmFzZSgpLnJlZigpOyJdLCJzb3VyY2VSb290IjoiIn0=