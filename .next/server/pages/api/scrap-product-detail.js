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
          console.log(response);

          if (response.data) {
            const product = await {
              title: response.data.items[0].product_name,
              description: '',
              images: response.data.items[0].images,
              items: [],
              options: []
            };
            const options = await [];

            if (response.data.has_variations) {
              //if we got product with variations
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
                res.status(error.response.status).json({
                  success: true,
                  data: error.response
                });
              });
            } else {
              //if we got single product with out variations
              Promise.all(response.data.items.map((item, i) => {
                item.image = [];
                item.options = [];
                item.name = item.product_name;
                response.data.items[i] = item;
              })).then(() => {
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
              });
            }
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
        res.status(error.response.status).json({
          success: false,
          error: error.response
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3NjcmFwLXByb2R1Y3QtZGV0YWlsL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hlZXJpb1wiIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm1ldGhvZCIsInF1ZXJ5IiwicmVzcG9uc2UiLCJheGlvcyIsImhlYWRlcnMiLCJ1cmwiLCJiYXNlVVJMIiwicGFyYW1zIiwiZWNvbSIsInByb2R1Y3RfaWQiLCJkYl9lbnRyeSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInByb2R1Y3QiLCJ0aXRsZSIsIml0ZW1zIiwicHJvZHVjdF9uYW1lIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJvcHRpb25zIiwiaGFzX3ZhcmlhdGlvbnMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaXRlbSIsImkiLCJpbWFnZSIsIm5hbWUiLCJtb2RpZmllcnMiLCJtb2RpZmllciIsIm0iLCJ2YWx1ZSIsInB1c2giLCJsZW5ndGgiLCJwb3NpdGlvbiIsInZhbHVlcyIsImluY2x1ZGVzIiwiaW0iLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImNhdGNoIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFD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QyxJQUFoQixDQUFxQjtBQUFDQyxlQUFPLEVBQUM7QUFBVCxPQUFyQjtBQUNBO0FBdExSO0FBd0xILENBMUxELEU7Ozs7Ozs7Ozs7O0FDSEEsa0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvYXBpL3NjcmFwLXByb2R1Y3QtZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvc2NyYXAtcHJvZHVjdC1kZXRhaWwvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgY2hlZXJpbyBmcm9tICdjaGVlcmlvJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEscmVzKSA9PiB7XHJcbiAgICBjb25zdCB7bWV0aG9kLHF1ZXJ5fSA9IHJlcTtcclxuICAgIHN3aXRjaChtZXRob2Qpe1xyXG4gICAgICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIngtYXBpLWtleVwiOiBcIjBjNjNlODkzLTRiYzAtNDRjYVwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB1cmw6IFwiL2RldGFpbFwiLFxyXG4gICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJhc2VVUkw6J2h0dHBzOi8vZWNvbWFwcC5pby9kYXRhJyxcclxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBxdWVyeS51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgZWNvbTogcXVlcnkuZWNvbSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2lkOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRiX2VudHJ5OiAwLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSkudGhlbiggYXN5bmMgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA6IHJlc3BvbnNlLmRhdGEuaXRlbXNbMF0ucHJvZHVjdF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcyA6IHJlc3BvbnNlLmRhdGEuaXRlbXNbMF0uaW1hZ2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMgOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgOiBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBhd2FpdCBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmhhc192YXJpYXRpb25zKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgd2UgZ290IHByb2R1Y3Qgd2l0aCB2YXJpYXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbCggICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5pdGVtcy5tYXAoIChpdGVtLGkpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5vcHRpb25zPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm5hbWUgPSBpdGVtLnByb2R1Y3RfbmFtZSArJyAtICdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5pdGVtc1tpXS5tb2RpZmllcnMubWFwKCAobW9kaWZpZXIsbSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubmFtZSArPSBtb2RpZmllci52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5vcHRpb25zLnB1c2gobW9kaWZpZXIudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtIDwgKHJlc3BvbnNlLmRhdGEuaXRlbXNbaV0ubW9kaWZpZXJzLmxlbmd0aC0xKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5uYW1lICs9JyAvICdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGk8PTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Qub3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTptb2RpZmllci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjptLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6W21vZGlmaWVyLnZhbHVlXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5pdGVtc1tpXSA9IGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuaXRlbXMubWFwKCAoaXRlbSxpKSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuaXRlbXNbaV0ubW9kaWZpZXJzLm1hcChhc3luYyAobW9kaWZpZXIsbSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpPjApeyAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighcHJvZHVjdC5vcHRpb25zW21dLnZhbHVlcy5pbmNsdWRlcyhtb2RpZmllci52YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5vcHRpb25zW21dLnZhbHVlcy5wdXNoKG1vZGlmaWVyLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5pdGVtcy5tYXAoIChpdGVtLGkpID0+eyAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgaXRlbS5tb2RpZmllcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLml0ZW1zW2ldLmltYWdlcy5tYXAoYXN5bmMgKGltYWdlLGltKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFyZXNwb25zZS5kYXRhLmltYWdlcy5pbmNsdWRlcyhpbWFnZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLml0ZW1zW2ldLmltYWdlLnB1c2goaW1hZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuaXRlbXMubWFwKCAoaXRlbSxpKSA9PnsgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGl0ZW0uaW1hZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgaXRlbS5wcm9kdWN0X25hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuaXRlbXMgPSByZXNwb25zZS5kYXRhLml0ZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3N1Y2Nlc3M6dHJ1ZSxwcm9kdWN0OnByb2R1Y3R9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKT0+e1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKGVycm9yLnJlc3BvbnNlLnN0YXR1cykuanNvbih7c3VjY2Vzczp0cnVlLGRhdGE6ZXJyb3IucmVzcG9uc2V9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgd2UgZ290IHNpbmdsZSBwcm9kdWN0IHdpdGggb3V0IHZhcmlhdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKCAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLml0ZW1zLm1hcCggKGl0ZW0saSkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2UgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm9wdGlvbnM9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubmFtZSA9IGl0ZW0ucHJvZHVjdF9uYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuaXRlbXNbaV0gPSBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLml0ZW1zLm1hcCggKGl0ZW0saSkgPT57ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBpdGVtLm1vZGlmaWVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuaXRlbXNbaV0uaW1hZ2VzLm1hcChhc3luYyAoaW1hZ2UsaW0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXJlc3BvbnNlLmRhdGEuaW1hZ2VzLmluY2x1ZGVzKGltYWdlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuaXRlbXNbaV0uaW1hZ2UucHVzaChpbWFnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5pdGVtcy5tYXAoIChpdGVtLGkpID0+eyAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgaXRlbS5pbWFnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBpdGVtLnByb2R1Y3RfbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Lml0ZW1zID0gcmVzcG9uc2UuZGF0YS5pdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtzdWNjZXNzOnRydWUscHJvZHVjdDpwcm9kdWN0fSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShyZXNwb25zZS5kYXRhKSAmJiByZXNwb25zZS5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YXJpYW50cyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEubWFwKCBhc3luYyAodmFyaWFudCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgOiB2YXJpYW50Lm1vZGlmaWVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogdmFyaWFudC5wcm9kdWN0X3ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZE9iaiA9IGF3YWl0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YVswXS5wcm9kdWN0X3RpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcmVzcG9uc2UuZGF0YVswXS5kZXNjcmlwdGlvbiA/IHJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb24gOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6cmVzcG9uc2UuZGF0YVswXS5wcm9kdWN0X3ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXM6cmVzcG9uc2UuZGF0YVswXS5pbWFnZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVVybDpyZXNwb25zZS5kYXRhWzBdLnByb2R1Y3RfdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6cXVlcnkuZWNvbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM6dmFyaWFudHMsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtzdWNjZXNzOnRydWUscHJvZHVjdERldGFpbDpwcm9kT2JqfSlcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKCFBcnJheS5pc0FycmF5KHJlc3BvbnNlLmRhdGEpKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kT2JqID0gYXdhaXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS5wcm9kdWN0X3RpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbiA/IHJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb24gOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6cmVzcG9uc2UuZGF0YS5wcm9kdWN0X3ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXM6cmVzcG9uc2UuZGF0YS5pbWFnZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVVybDpyZXNwb25zZS5kYXRhLnByb2R1Y3RfdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6cXVlcnkuZWNvbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtzdWNjZXNzOnRydWUscHJvZHVjdERldGFpbDpwcm9kT2JqfSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtzdWNjZXNzOnRydWUscHJvZHVjdERldGFpbDpudWxsfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoZXJyb3IucmVzcG9uc2Uuc3RhdHVzKS5qc29uKHtzdWNjZXNzOmZhbHNlLGVycm9yOmVycm9yLnJlc3BvbnNlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IHt9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe3N1Y2Nlc3M6dHJ1ZSxkYXRhOnByb2R1Y3R9KVxyXG5cclxuICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtzdWNjZXNzOmZhbHNlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7c3VjY2VzczpmYWxzZX0pXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hlZXJpb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9