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

        if (Array.isArray(response.data) && response.data.length > 0) {
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
        } else if (!Array.isArray(response.data)) {
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
        } else {
          res.status(200).json({
            success: true,
            productDetail: null
          });
        }
      } catch (error) {
        //console.log(error)
        res.status(400).json({
          success: false,
          error: error
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3NjcmFwLXByb2R1Y3QtZGV0YWlsL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hlZXJpb1wiIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm1ldGhvZCIsInF1ZXJ5IiwicmVzcG9uc2UiLCJheGlvcyIsImhlYWRlcnMiLCJ1cmwiLCJiYXNlVVJMIiwicGFyYW1zIiwiZWNvbSIsInByb2R1Y3RfaWQiLCJkYl9lbnRyeSIsIkFycmF5IiwiaXNBcnJheSIsImRhdGEiLCJsZW5ndGgiLCJ2YXJpYW50cyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJ2YXJpYW50IiwicHVzaCIsIm5hbWUiLCJtb2RpZmllcnMiLCJwcmljZSIsInByb2R1Y3RfcHJpY2UiLCJwcm9kT2JqIiwidGl0bGUiLCJwcm9kdWN0X3RpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJzb3VyY2VVcmwiLCJwcm9kdWN0X3VybCIsInNvdXJjZSIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwicHJvZHVjdERldGFpbCIsImVycm9yIiwicHJvZHVjdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsZUFBTyxFQUFDO0FBQVQsT0FBckI7QUFDQTtBQXZFUjtBQXlFSCxDQTNFRCxFOzs7Ozs7Ozs7OztBQ0hBLGtDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InBhZ2VzL2FwaS9zY3JhcC1wcm9kdWN0LWRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL3NjcmFwLXByb2R1Y3QtZGV0YWlsL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGNoZWVyaW8gZnJvbSAnY2hlZXJpbyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLHJlcykgPT4ge1xyXG4gICAgY29uc3Qge21ldGhvZCxxdWVyeX0gPSByZXE7XHJcbiAgICBzd2l0Y2gobWV0aG9kKXtcclxuICAgICAgICBjYXNlICdHRVQnOlxyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ4LWFwaS1rZXlcIjogXCIwYzYzZTg5My00YmMwLTQ0Y2FcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgdXJsOiBcIi9kZXRhaWxcIixcclxuICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgICAgICAgICAgICAgICBiYXNlVVJMOidodHRwczovL2Vjb21hcHAuaW8vZGF0YScsXHJcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogcXVlcnkudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIGVjb206IHF1ZXJ5LmVjb20sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pZDogMCxcclxuICAgICAgICAgICAgICAgICAgICBkYl9lbnRyeTogMCxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkocmVzcG9uc2UuZGF0YSkgJiYgcmVzcG9uc2UuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFyaWFudHMgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLm1hcCggYXN5bmMgKHZhcmlhbnQpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lIDogdmFyaWFudC5tb2RpZmllcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHZhcmlhbnQucHJvZHVjdF9wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2RPYmogPSBhd2FpdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGFbMF0ucHJvZHVjdF90aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlc3BvbnNlLmRhdGFbMF0uZGVzY3JpcHRpb24gPyByZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9uIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOnJlc3BvbnNlLmRhdGFbMF0ucHJvZHVjdF9wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzOnJlc3BvbnNlLmRhdGFbMF0uaW1hZ2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VVcmw6cmVzcG9uc2UuZGF0YVswXS5wcm9kdWN0X3VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOnF1ZXJ5LmVjb20sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzOnZhcmlhbnRzLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3VjY2Vzczp0cnVlLHByb2R1Y3REZXRhaWw6cHJvZE9ian0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZighQXJyYXkuaXNBcnJheShyZXNwb25zZS5kYXRhKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZE9iaiA9IGF3YWl0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLmRhdGEucHJvZHVjdF90aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb24gPyByZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9uIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOnJlc3BvbnNlLmRhdGEucHJvZHVjdF9wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzOnJlc3BvbnNlLmRhdGEuaW1hZ2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VVcmw6cmVzcG9uc2UuZGF0YS5wcm9kdWN0X3VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOnF1ZXJ5LmVjb20sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3VjY2Vzczp0cnVlLHByb2R1Y3REZXRhaWw6cHJvZE9ian0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3VjY2Vzczp0cnVlLHByb2R1Y3REZXRhaWw6bnVsbH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7c3VjY2VzczpmYWxzZSxlcnJvcjplcnJvcn0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnUE9TVCc6XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSB7fVxyXG5cclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHtzdWNjZXNzOnRydWUsZGF0YTpwcm9kdWN0fSlcclxuXHJcbiAgICAgICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7c3VjY2VzczpmYWxzZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe3N1Y2Nlc3M6ZmFsc2V9KVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoZWVyaW9cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==