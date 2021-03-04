module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/scrap-product-detail/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/scrap-product-detail/index.js":
/*!*************************************************!*\
  !*** ./pages/api/scrap-product-detail/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cheerio */ "cheerio");
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    method,
    query
  } = req;

  switch (method) {
    case 'GET':
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
          headers: {
            "x-api-key": "0c63e893-4bc0-44ca"
          },
          url: "/detail",
          method: "get",
          baseURL: 'https://ecomapp.io/data',
          params: {
            url: query.url,
            ecom: query.ecom,
            product_id: 0,
            db_entry: 0
          }
        });

        if (Array.isArray(response.data)) {
          const variants = [];
          Promise.all(response.data.map(async variant => {
            variants.push({
              name: variant.modifiers,
              price: variant.product_price
            });
          }));
          const prodObj = await {
            title: response.data[0].product_title,
            description: response.data[0].description ? response.data.description : '',
            price: response.data[0].product_price,
            images: response.data[0].images,
            sourceUrl: response.data[0].product_url,
            source: query.ecom,
            variants: variants
          };
          res.status(200).json({
            success: true,
            productDetail: prodObj
          });
        } else {
          const prodObj = await {
            title: response.data.product_title,
            description: response.data.description ? response.data.description : '',
            price: response.data.product_price,
            images: response.data.images,
            sourceUrl: response.data.product_url,
            source: query.ecom,
            variants: false
          };
          res.status(200).json({
            success: true,
            productDetail: prodObj
          });
        }
      } catch (error) {
        console.log(error);
        res.status(400).json({
          success: false
        });
      }

      break;

    case 'POST':
      try {
        const product = {};
        res.status(201).json({
          success: true,
          data: product
        });
      } catch (error) {
        res.status(400).json({
          success: false
        });
      }

      break;

    default:
      res.status(400).json({
        success: false
      });
      break;
  }
});

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3NjcmFwLXByb2R1Y3QtZGV0YWlsL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hlZXJpb1wiIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm1ldGhvZCIsInF1ZXJ5IiwicmVzcG9uc2UiLCJheGlvcyIsImhlYWRlcnMiLCJ1cmwiLCJiYXNlVVJMIiwicGFyYW1zIiwiZWNvbSIsInByb2R1Y3RfaWQiLCJkYl9lbnRyeSIsIkFycmF5IiwiaXNBcnJheSIsImRhdGEiLCJ2YXJpYW50cyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJ2YXJpYW50IiwicHVzaCIsIm5hbWUiLCJtb2RpZmllcnMiLCJwcmljZSIsInByb2R1Y3RfcHJpY2UiLCJwcm9kT2JqIiwidGl0bGUiLCJwcm9kdWN0X3RpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJzb3VyY2VVcmwiLCJwcm9kdWN0X3VybCIsInNvdXJjZSIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwicHJvZHVjdERldGFpbCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3QiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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M0IsUUFBUSxDQUFDVyxJQUFULENBQWNpQixXQUxOO0FBTWxCQyxrQkFBTSxFQUFDOUIsS0FBSyxDQUFDTyxJQU5LO0FBT2xCTSxvQkFBUSxFQUFDO0FBUFMsV0FBdEI7QUFTQWYsYUFBRyxDQUFDaUMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNDLG1CQUFPLEVBQUMsSUFBVDtBQUFjQyx5QkFBYSxFQUFDWDtBQUE1QixXQUFyQjtBQUNIO0FBRUosT0FsREQsQ0FrREMsT0FBTVksS0FBTixFQUFZO0FBQ1RDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0FyQyxXQUFHLENBQUNpQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsaUJBQU8sRUFBQztBQUFULFNBQXJCO0FBQ0g7O0FBQ0Q7O0FBQ0osU0FBSyxNQUFMO0FBQ0ksVUFBRztBQUNDLGNBQU1LLE9BQU8sR0FBRyxFQUFoQjtBQUVBeEMsV0FBRyxDQUFDaUMsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNDLGlCQUFPLEVBQUMsSUFBVDtBQUFjckIsY0FBSSxFQUFDMEI7QUFBbkIsU0FBckI7QUFFSCxPQUxELENBS0MsT0FBTUgsS0FBTixFQUFZO0FBQ1RyQyxXQUFHLENBQUNpQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsaUJBQU8sRUFBQztBQUFULFNBQXJCO0FBQ0g7O0FBQ0Q7O0FBQ0o7QUFDSW5DLFNBQUcsQ0FBQ2lDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDQyxlQUFPLEVBQUM7QUFBVCxPQUFyQjtBQUNBO0FBckVSO0FBdUVILENBekVELEU7Ozs7Ozs7Ozs7O0FDSEEsa0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL3NjcmFwLXByb2R1Y3QtZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvc2NyYXAtcHJvZHVjdC1kZXRhaWwvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgY2hlZXJpbyBmcm9tICdjaGVlcmlvJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEscmVzKSA9PiB7XHJcbiAgICBjb25zdCB7bWV0aG9kLHF1ZXJ5fSA9IHJlcTtcclxuICAgIHN3aXRjaChtZXRob2Qpe1xyXG4gICAgICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIngtYXBpLWtleVwiOiBcIjBjNjNlODkzLTRiYzAtNDRjYVwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB1cmw6IFwiL2RldGFpbFwiLFxyXG4gICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJhc2VVUkw6J2h0dHBzOi8vZWNvbWFwcC5pby9kYXRhJyxcclxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBxdWVyeS51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgZWNvbTogcXVlcnkuZWNvbSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2lkOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRiX2VudHJ5OiAwLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KHJlc3BvbnNlLmRhdGEpKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFyaWFudHMgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLm1hcCggYXN5bmMgKHZhcmlhbnQpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lIDogdmFyaWFudC5tb2RpZmllcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHZhcmlhbnQucHJvZHVjdF9wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2RPYmogPSBhd2FpdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGFbMF0ucHJvZHVjdF90aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlc3BvbnNlLmRhdGFbMF0uZGVzY3JpcHRpb24gPyByZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9uIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOnJlc3BvbnNlLmRhdGFbMF0ucHJvZHVjdF9wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzOnJlc3BvbnNlLmRhdGFbMF0uaW1hZ2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VVcmw6cmVzcG9uc2UuZGF0YVswXS5wcm9kdWN0X3VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOnF1ZXJ5LmVjb20sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzOnZhcmlhbnRzLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3VjY2Vzczp0cnVlLHByb2R1Y3REZXRhaWw6cHJvZE9ian0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kT2JqID0gYXdhaXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5wcm9kdWN0X3RpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbiA/IHJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb24gOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6cmVzcG9uc2UuZGF0YS5wcm9kdWN0X3ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXM6cmVzcG9uc2UuZGF0YS5pbWFnZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVVybDpyZXNwb25zZS5kYXRhLnByb2R1Y3RfdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6cXVlcnkuZWNvbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtzdWNjZXNzOnRydWUscHJvZHVjdERldGFpbDpwcm9kT2JqfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7c3VjY2VzczpmYWxzZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnUE9TVCc6XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSB7fVxyXG5cclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHtzdWNjZXNzOnRydWUsZGF0YTpwcm9kdWN0fSlcclxuXHJcbiAgICAgICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7c3VjY2VzczpmYWxzZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe3N1Y2Nlc3M6ZmFsc2V9KVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoZWVyaW9cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==