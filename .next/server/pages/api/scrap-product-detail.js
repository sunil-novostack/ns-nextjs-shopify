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
        }).then(async response => {
          if (response.data) {
            const product = await {
              title: response.data.items[0].product_name,
              description: '',
              images: response.data.items[0].images,
              items: [],
              options: []
            };
            const options = await [];
            Promise.all(response.data.items.map((item, i) => {
              item.image = [];
              item.options = [];
              item.name = item.product_name + ' - ';
              response.data.items[i].modifiers.map((modifier, m) => {
                item.name += modifier.value;
                item.options.push(modifier.value);

                if (m < response.data.items[i].modifiers.length - 1) {
                  item.name += ' / ';
                }

                if (i <= 0) {
                  product.options.push({
                    name: modifier.name,
                    position: m,
                    values: [modifier.value]
                  });
                }
              });
              response.data.items[i] = item;
            })).then(() => {
              Promise.all(response.data.items.map((item, i) => {
                response.data.items[i].modifiers.map(async (modifier, m) => {
                  if (i > 0) {
                    if (!product.options[m].values.includes(modifier.value)) {
                      product.options[m].values.push(modifier.value);
                    }
                  }
                });
              }));
              Promise.all(response.data.items.map((item, i) => {
                delete item.modifiers;
                response.data.items[i].images.map(async (image, im) => {
                  if (!response.data.images.includes(image)) {
                    response.data.items[i].image.push(image);
                  }
                });
              }));
              Promise.all(response.data.items.map((item, i) => {
                delete item.images;
                delete item.product_name;
              }));
              product.items = response.data.items;
              res.status(200).json({
                success: true,
                product: product
              });
            }).catch(error => {
              console.log(error);
            });
          }
        }); //console.log(response.data)

        /*
        if(Array.isArray(response.data) && response.data.length>0){
            const variants = []
            Promise.all(
                response.data.map( async (variant)=>{
                    variants.push({
                        name : variant.modifiers,
                        price: variant.product_price,
                    })
                })
            )
            
            const prodObj = await{
                title: response.data[0].product_title,
                description: response.data[0].description ? response.data.description : '',
                price:response.data[0].product_price,
                images:response.data[0].images,
                sourceUrl:response.data[0].product_url,
                source:query.ecom,
                variants:variants,
            }
            
            res.status(200).json({success:true,productDetail:prodObj})
        }else if(!Array.isArray(response.data)){
            const prodObj = await {
                title: response.data.product_title,
                description: response.data.description ? response.data.description : '',
                price:response.data.product_price,
                images:response.data.images,
                sourceUrl:response.data.product_url,
                source:query.ecom,
                variants:false,
            }
            res.status(200).json({success:true,productDetail:prodObj})
        }else{
            res.status(200).json({success:true,productDetail:null})
        }
        */
      } catch (error) {
        //console.log(error)
        res.status(500).json({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3NjcmFwLXByb2R1Y3QtZGV0YWlsL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hlZXJpb1wiIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm1ldGhvZCIsInF1ZXJ5IiwicmVzcG9uc2UiLCJheGlvcyIsImhlYWRlcnMiLCJ1cmwiLCJiYXNlVVJMIiwicGFyYW1zIiwiZWNvbSIsInByb2R1Y3RfaWQiLCJkYl9lbnRyeSIsInRoZW4iLCJkYXRhIiwicHJvZHVjdCIsInRpdGxlIiwiaXRlbXMiLCJwcm9kdWN0X25hbWUiLCJkZXNjcmlwdGlvbiIsImltYWdlcyIsIm9wdGlvbnMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaXRlbSIsImkiLCJpbWFnZSIsIm5hbWUiLCJtb2RpZmllcnMiLCJtb2RpZmllciIsIm0iLCJ2YWx1ZSIsInB1c2giLCJsZW5ndGgiLCJwb3NpdGlvbiIsInZhbHVlcyIsImluY2x1ZGVzIiwiaW0iLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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ZUFBSyxFQUFDQTtBQUFyQixTQUFyQjtBQUNIOztBQUNEOztBQUNKLFNBQUssTUFBTDtBQUNJLFVBQUc7QUFDQyxjQUFNNUIsT0FBTyxHQUFHLEVBQWhCO0FBRUFkLFdBQUcsQ0FBQ3NDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDQyxpQkFBTyxFQUFDLElBQVQ7QUFBYzNCLGNBQUksRUFBQ0M7QUFBbkIsU0FBckI7QUFFSCxPQUxELENBS0MsT0FBTTRCLEtBQU4sRUFBWTtBQUNUMUMsV0FBRyxDQUFDc0MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNDLGlCQUFPLEVBQUM7QUFBVCxTQUFyQjtBQUNIOztBQUNEOztBQUNKO0FBQ0l4QyxTQUFHLENBQUNzQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsZUFBTyxFQUFDO0FBQVQsT0FBckI7QUFDQTtBQWpKUjtBQW1KSCxDQXJKRCxFOzs7Ozs7Ozs7OztBQ0hBLGtDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InBhZ2VzL2FwaS9zY3JhcC1wcm9kdWN0LWRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL3NjcmFwLXByb2R1Y3QtZGV0YWlsL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGNoZWVyaW8gZnJvbSAnY2hlZXJpbyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLHJlcykgPT4ge1xyXG4gICAgY29uc3Qge21ldGhvZCxxdWVyeX0gPSByZXE7XHJcbiAgICBzd2l0Y2gobWV0aG9kKXtcclxuICAgICAgICBjYXNlICdHRVQnOlxyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ4LWFwaS1rZXlcIjogXCIwYzYzZTg5My00YmMwLTQ0Y2FcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgdXJsOiBcIi9kZXRhaWxcIixcclxuICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgICAgICAgICAgICAgICBiYXNlVVJMOidodHRwczovL2Vjb21hcHAuaW8vZGF0YScsXHJcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogcXVlcnkudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIGVjb206IHF1ZXJ5LmVjb20sXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pZDogMCxcclxuICAgICAgICAgICAgICAgICAgICBkYl9lbnRyeTogMCxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oIGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiByZXNwb25zZS5kYXRhLml0ZW1zWzBdLnByb2R1Y3RfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXMgOiByZXNwb25zZS5kYXRhLml0ZW1zWzBdLmltYWdlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zIDogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zIDogW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gYXdhaXQgW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5pdGVtcy5tYXAoIChpdGVtLGkpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2UgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ub3B0aW9ucz0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm5hbWUgPSBpdGVtLnByb2R1Y3RfbmFtZSArJyAtICdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLml0ZW1zW2ldLm1vZGlmaWVycy5tYXAoIChtb2RpZmllcixtKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm5hbWUgKz0gbW9kaWZpZXIudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5vcHRpb25zLnB1c2gobW9kaWZpZXIudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG0gPCAocmVzcG9uc2UuZGF0YS5pdGVtc1tpXS5tb2RpZmllcnMubGVuZ3RoLTEpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubmFtZSArPScgLyAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaTw9MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Lm9wdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTptb2RpZmllci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOm0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzOlttb2RpZmllci52YWx1ZV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5pdGVtc1tpXSA9IGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLml0ZW1zLm1hcCggKGl0ZW0saSkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuaXRlbXNbaV0ubW9kaWZpZXJzLm1hcChhc3luYyAobW9kaWZpZXIsbSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGk+MCl7ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXByb2R1Y3Qub3B0aW9uc1ttXS52YWx1ZXMuaW5jbHVkZXMobW9kaWZpZXIudmFsdWUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5vcHRpb25zW21dLnZhbHVlcy5wdXNoKG1vZGlmaWVyLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5pdGVtcy5tYXAoIChpdGVtLGkpID0+eyAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBpdGVtLm1vZGlmaWVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5pdGVtc1tpXS5pbWFnZXMubWFwKGFzeW5jIChpbWFnZSxpbSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFyZXNwb25zZS5kYXRhLmltYWdlcy5pbmNsdWRlcyhpbWFnZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuaXRlbXNbaV0uaW1hZ2UucHVzaChpbWFnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5pdGVtcy5tYXAoIChpdGVtLGkpID0+eyAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBpdGVtLmltYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgaXRlbS5wcm9kdWN0X25hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuaXRlbXMgPSByZXNwb25zZS5kYXRhLml0ZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3VjY2Vzczp0cnVlLHByb2R1Y3Q6cHJvZHVjdH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcik9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShyZXNwb25zZS5kYXRhKSAmJiByZXNwb25zZS5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YXJpYW50cyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEubWFwKCBhc3luYyAodmFyaWFudCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgOiB2YXJpYW50Lm1vZGlmaWVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogdmFyaWFudC5wcm9kdWN0X3ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZE9iaiA9IGF3YWl0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YVswXS5wcm9kdWN0X3RpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcmVzcG9uc2UuZGF0YVswXS5kZXNjcmlwdGlvbiA/IHJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb24gOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6cmVzcG9uc2UuZGF0YVswXS5wcm9kdWN0X3ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXM6cmVzcG9uc2UuZGF0YVswXS5pbWFnZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVVybDpyZXNwb25zZS5kYXRhWzBdLnByb2R1Y3RfdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6cXVlcnkuZWNvbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM6dmFyaWFudHMsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtzdWNjZXNzOnRydWUscHJvZHVjdERldGFpbDpwcm9kT2JqfSlcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKCFBcnJheS5pc0FycmF5KHJlc3BvbnNlLmRhdGEpKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kT2JqID0gYXdhaXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5wcm9kdWN0X3RpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbiA/IHJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb24gOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6cmVzcG9uc2UuZGF0YS5wcm9kdWN0X3ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXM6cmVzcG9uc2UuZGF0YS5pbWFnZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVVybDpyZXNwb25zZS5kYXRhLnByb2R1Y3RfdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6cXVlcnkuZWNvbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtzdWNjZXNzOnRydWUscHJvZHVjdERldGFpbDpwcm9kT2JqfSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtzdWNjZXNzOnRydWUscHJvZHVjdERldGFpbDpudWxsfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtzdWNjZXNzOmZhbHNlLGVycm9yOmVycm9yfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IHt9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe3N1Y2Nlc3M6dHJ1ZSxkYXRhOnByb2R1Y3R9KVxyXG5cclxuICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtzdWNjZXNzOmZhbHNlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7c3VjY2VzczpmYWxzZX0pXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hlZXJpb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9