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
        /*
        const response = await axios({
          headers: {
            "x-api-key": "0c63e893-4bc0-44ca",
          },
          url: "/detail",
          method: "get",
          baseURL:'https://ecomapp.io/data',
          params: {
            url: query.url,
            ecom: query.ecom,
            product_id: 0,
            db_entry: 0,
          },
        });
        */
        //const {response} = await axios.get(query.url)
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
          headers: {
            'Content-Type': 'text/html'
          },
          url: 'https://crasyfox.com/product-category/funko/',
          method: "get"
        });
        console.log(response);
        const $ = cheerio__WEBPACK_IMPORTED_MODULE_1___default.a.load(response);
        let images = [];
        $('.slider-frame .slider-list li').each((i, li) => {
          let img = $(li).find('img').attr('src');
          let image = img.match(/.*?[?!.]/g);
          images.push(image[0]);
        });
        const products = {
          product_title: $('h1.prod-ProductTitle').text(),
          description: $('div.about-product-standard').html(),
          product_price: $('.prod-PriceHero span.price-characteristic').text(),
          currency: {
            currency_type: $('.prod-PriceHero span.price-currency').attr('content'),
            currency_sign: $('.prod-PriceHero span.price-currency').text()
          },
          images: images
        };
        res.status(200).json({
          success: true,
          productDetail: {}
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3NjcmFwLXByb2R1Y3QtZGV0YWlsL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hlZXJpb1wiIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm1ldGhvZCIsInF1ZXJ5IiwicmVzcG9uc2UiLCJheGlvcyIsImhlYWRlcnMiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiJCIsImNoZWVyaW8iLCJsb2FkIiwiaW1hZ2VzIiwiZWFjaCIsImkiLCJsaSIsImltZyIsImZpbmQiLCJhdHRyIiwiaW1hZ2UiLCJtYXRjaCIsInB1c2giLCJwcm9kdWN0cyIsInByb2R1Y3RfdGl0bGUiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJodG1sIiwicHJvZHVjdF9wcmljZSIsImN1cnJlbmN5IiwiY3VycmVuY3lfdHlwZSIsImN1cnJlbmN5X3NpZ24iLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsInByb2R1Y3REZXRhaWwiLCJlcnJvciIsInByb2R1Y3QiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNB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LENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsaUJBQU8sRUFBQztBQUFULFNBQXJCO0FBQ0g7O0FBQ0Q7O0FBQ0o7QUFDSWpDLFNBQUcsQ0FBQytCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDQyxlQUFPLEVBQUM7QUFBVCxPQUFyQjtBQUNBO0FBbEVSO0FBb0VILENBdEVELEU7Ozs7Ozs7Ozs7O0FDSEEsa0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL3NjcmFwLXByb2R1Y3QtZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvc2NyYXAtcHJvZHVjdC1kZXRhaWwvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgY2hlZXJpbyBmcm9tICdjaGVlcmlvJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEscmVzKSA9PiB7XHJcbiAgICBjb25zdCB7bWV0aG9kLHF1ZXJ5fSA9IHJlcTtcclxuICAgIHN3aXRjaChtZXRob2Qpe1xyXG4gICAgICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwieC1hcGkta2V5XCI6IFwiMGM2M2U4OTMtNGJjMC00NGNhXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIHVybDogXCIvZGV0YWlsXCIsXHJcbiAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgICAgICAgICAgICAgICAgYmFzZVVSTDonaHR0cHM6Ly9lY29tYXBwLmlvL2RhdGEnLFxyXG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHF1ZXJ5LnVybCxcclxuICAgICAgICAgICAgICAgICAgICBlY29tOiBxdWVyeS5lY29tLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGJfZW50cnk6IDAsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy9jb25zdCB7cmVzcG9uc2V9ID0gYXdhaXQgYXhpb3MuZ2V0KHF1ZXJ5LnVybClcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J3RleHQvaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2NyYXN5Zm94LmNvbS9wcm9kdWN0LWNhdGVnb3J5L2Z1bmtvLycsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCAkID0gY2hlZXJpby5sb2FkKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgbGV0IGltYWdlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlci1mcmFtZSAuc2xpZGVyLWxpc3QgbGknKS5lYWNoKChpLGxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltZyA9ICQobGkpLmZpbmQoJ2ltZycpLmF0dHIoJ3NyYycpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlID0gaW1nLm1hdGNoKC8uKj9bPyEuXS9nKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZXMucHVzaChpbWFnZVswXSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0cyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3RpdGxlIDogJCgnaDEucHJvZC1Qcm9kdWN0VGl0bGUnKS50ZXh0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246JCgnZGl2LmFib3V0LXByb2R1Y3Qtc3RhbmRhcmQnKS5odG1sKCksXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9wcmljZTokKCcucHJvZC1QcmljZUhlcm8gc3Bhbi5wcmljZS1jaGFyYWN0ZXJpc3RpYycpLnRleHQoKSxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5X3R5cGU6JCgnLnByb2QtUHJpY2VIZXJvIHNwYW4ucHJpY2UtY3VycmVuY3knKS5hdHRyKCdjb250ZW50JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5X3NpZ246JCgnLnByb2QtUHJpY2VIZXJvIHNwYW4ucHJpY2UtY3VycmVuY3knKS50ZXh0KClcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlczppbWFnZXNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3N1Y2Nlc3M6dHJ1ZSxwcm9kdWN0RGV0YWlsOnt9fSlcclxuICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe3N1Y2Nlc3M6ZmFsc2V9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1BPU1QnOlxyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0ge31cclxuXHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7c3VjY2Vzczp0cnVlLGRhdGE6cHJvZHVjdH0pXHJcblxyXG4gICAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe3N1Y2Nlc3M6ZmFsc2V9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtzdWNjZXNzOmZhbHNlfSlcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGVlcmlvXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=