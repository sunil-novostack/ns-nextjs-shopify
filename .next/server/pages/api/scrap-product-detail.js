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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3NjcmFwLXByb2R1Y3QtZGV0YWlsL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hlZXJpb1wiIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm1ldGhvZCIsInF1ZXJ5IiwicmVzcG9uc2UiLCJheGlvcyIsImhlYWRlcnMiLCJ1cmwiLCJiYXNlVVJMIiwicGFyYW1zIiwiZWNvbSIsInByb2R1Y3RfaWQiLCJkYl9lbnRyeSIsIkFycmF5IiwiaXNBcnJheSIsImRhdGEiLCJsZW5ndGgiLCJ2YXJpYW50cyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJ2YXJpYW50IiwicHVzaCIsIm5hbWUiLCJtb2RpZmllcnMiLCJwcmljZSIsInByb2R1Y3RfcHJpY2UiLCJwcm9kT2JqIiwidGl0bGUiLCJwcm9kdWN0X3RpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJzb3VyY2VVcmwiLCJwcm9kdWN0X3VybCIsInNvdXJjZSIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwicHJvZHVjdERldGFpbCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3QiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtR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QUNrQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsZUFBTyxFQUFDO0FBQVQsT0FBckI7QUFDQTtBQXhFUjtBQTBFSCxDQTVFRCxFOzs7Ozs7Ozs7OztBQ0hBLGtDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InBhZ2VzL2FwaS9zY3JhcC1wcm9kdWN0LWRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL3NjcmFwLXByb2R1Y3QtZGV0YWlsL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGNoZWVyaW8gZnJvbSAnY2hlZXJpbyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLHJlcykgPT4ge1xyXG4gICAgY29uc3Qge21ldGhvZCxxdWVyeX0gPSByZXE7XHJcbiAgICBzd2l0Y2gobWV0aG9kKXtcclxuICAgICAgICBjYXNlICdHRVQnOlxyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ4LWFwaS1rZXlcIjogXCIwYzYzZTg5My00YmMwLTQ0Y2FcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgdXJsOiBcIi9kZXRhaWxcIixcclxuICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgICAgICAgICAgICAgICBiYXNlVVJMOidodHRwczovL2Vjb21hcHAuaW8vZGF0YScsXHJcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogcXVlcnkudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIGVjb206IHF1ZXJ5LmVjb20sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pZDogMCxcclxuICAgICAgICAgICAgICAgICAgICBkYl9lbnRyeTogMCxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkocmVzcG9uc2UuZGF0YSkgJiYgcmVzcG9uc2UuZGF0YS5sZW5ndGg+MCl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRzID0gW11cclxuICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5tYXAoIGFzeW5jICh2YXJpYW50KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA6IHZhcmlhbnQubW9kaWZpZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiB2YXJpYW50LnByb2R1Y3RfcHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kT2JqID0gYXdhaXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhWzBdLnByb2R1Y3RfdGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZXNwb25zZS5kYXRhWzBdLmRlc2NyaXB0aW9uID8gcmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbiA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTpyZXNwb25zZS5kYXRhWzBdLnByb2R1Y3RfcHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlczpyZXNwb25zZS5kYXRhWzBdLmltYWdlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVXJsOnJlc3BvbnNlLmRhdGFbMF0ucHJvZHVjdF91cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTpxdWVyeS5lY29tLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50czp2YXJpYW50cyxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3N1Y2Nlc3M6dHJ1ZSxwcm9kdWN0RGV0YWlsOnByb2RPYmp9KVxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoIUFycmF5LmlzQXJyYXkocmVzcG9uc2UuZGF0YSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2RPYmogPSBhd2FpdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS5kYXRhLnByb2R1Y3RfdGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZXNwb25zZS5kYXRhLmRlc2NyaXB0aW9uID8gcmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbiA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTpyZXNwb25zZS5kYXRhLnByb2R1Y3RfcHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlczpyZXNwb25zZS5kYXRhLmltYWdlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVXJsOnJlc3BvbnNlLmRhdGEucHJvZHVjdF91cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTpxdWVyeS5lY29tLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50czpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3N1Y2Nlc3M6dHJ1ZSxwcm9kdWN0RGV0YWlsOnByb2RPYmp9KVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3N1Y2Nlc3M6dHJ1ZSxwcm9kdWN0RGV0YWlsOm51bGx9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtzdWNjZXNzOmZhbHNlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IHt9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe3N1Y2Nlc3M6dHJ1ZSxkYXRhOnByb2R1Y3R9KVxyXG5cclxuICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtzdWNjZXNzOmZhbHNlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7c3VjY2VzczpmYWxzZX0pXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hlZXJpb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9