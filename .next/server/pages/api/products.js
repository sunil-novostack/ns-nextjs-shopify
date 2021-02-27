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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/products/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/mongoose/dbCon.js":
/*!*******************************!*\
  !*** ./lib/mongoose/dbCon.js ***!
  \*******************************/
/*! exports provided: connectToDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectToDatabase", function() { return connectToDatabase; });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const {
  SHOPIFY_MONGO_URI,
  SHOPIFY_MONGO_DB
} = process.env;
let cached = global.mongo;

if (!cached) {
  cached = global.mongo = {
    conn: null,
    promise: null
  };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };
    cached.promise = mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"].connect(SHOPIFY_MONGO_URI, opts).then(client => {
      return {
        client,
        db: client.db(SHOPIFY_MONGO_DB)
      };
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

/***/ }),

/***/ "./pages/api/products/index.js":
/*!*************************************!*\
  !*** ./pages/api/products/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_mongoose_dbCon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongoose/dbCon */ "./lib/mongoose/dbCon.js");
/*
import dbConnect from '../../../lib/mongoose/dbConnect';
import Product from '../../../lib/mongoose/Product';

dbConnect();
*/

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    db
  } = await Object(_lib_mongoose_dbCon__WEBPACK_IMPORTED_MODULE_0__["connectToDatabase"])();
  const {
    method,
    headers
  } = req;

  switch (method) {
    case 'GET':
      try {
        const products = await Product.find({});
        res.status(200).json({
          success: true,
          data: products
        });
      } catch (error) {
        res.status(400).json({
          success: false
        });
      }

      break;

    case 'POST':
      try {
        //const product = await Product.create(req.body)
        const response = await db.collection(headers.shopname).insert(req.body);
        res.status(201).json({
          success: true,
          data: response
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          error: error
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

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL21vbmdvb3NlL2RiQ29uLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9wcm9kdWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCIiXSwibmFtZXMiOlsiU0hPUElGWV9NT05HT19VUkkiLCJTSE9QSUZZX01PTkdPX0RCIiwicHJvY2VzcyIsImVudiIsImNhY2hlZCIsImdsb2JhbCIsIm1vbmdvIiwiY29ubiIsInByb21pc2UiLCJjb25uZWN0VG9EYXRhYmFzZSIsIm9wdHMiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJ0aGVuIiwiY2xpZW50IiwiZGIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJoZWFkZXJzIiwicHJvZHVjdHMiLCJQcm9kdWN0IiwiZmluZCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZGF0YSIsImVycm9yIiwicmVzcG9uc2UiLCJjb2xsZWN0aW9uIiwic2hvcG5hbWUiLCJpbnNlcnQiLCJib2R5Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMs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Q0Q7O0FBQ0o7QUFDSVYsU0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsZUFBTyxFQUFDO0FBQVQsT0FBckI7QUFDQTtBQXBCUjtBQXNCSCxDQXpCRCxFOzs7Ozs7Ozs7OztBQ1RBLG9DIiwiZmlsZSI6InBhZ2VzL2FwaS9wcm9kdWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL3Byb2R1Y3RzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHtNb25nb0NsaWVudH0gZnJvbSAnbW9uZ29kYic7XHJcblxyXG5jb25zdCB7U0hPUElGWV9NT05HT19VUkksU0hPUElGWV9NT05HT19EQn0gPSBwcm9jZXNzLmVudlxyXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvXHJcblxyXG5pZighY2FjaGVkKXtcclxuICAgIGNhY2hlZCA9IGdsb2JhbC5tb25nbyA9IHsgY29ubiA6bnVsbCxwcm9taXNlOm51bGwgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCl7XHJcbiAgICBpZihjYWNoZWQuY29ubil7XHJcbiAgICAgICAgcmV0dXJuIGNhY2hlZC5jb25uXHJcbiAgICB9XHJcbiAgICBpZighY2FjaGVkLnByb21pc2Upe1xyXG4gICAgICAgIGNvbnN0IG9wdHMgPSB7XHJcbiAgICAgICAgICAgIHVzZU5ld1VybFBhcnNlcjp0cnVlLFxyXG4gICAgICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6dHJ1ZSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhY2hlZC5wcm9taXNlID0gTW9uZ29DbGllbnQuY29ubmVjdChTSE9QSUZZX01PTkdPX1VSSSxvcHRzKS50aGVuKChjbGllbnQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNsaWVudCxcclxuICAgICAgICAgICAgICAgIGRiOmNsaWVudC5kYihTSE9QSUZZX01PTkdPX0RCKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2VcclxuICAgIHJldHVybiBjYWNoZWQuY29ublxyXG59IiwiLypcclxuaW1wb3J0IGRiQ29ubmVjdCBmcm9tICcuLi8uLi8uLi9saWIvbW9uZ29vc2UvZGJDb25uZWN0JztcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vLi4vLi4vbGliL21vbmdvb3NlL1Byb2R1Y3QnO1xyXG5cclxuZGJDb25uZWN0KCk7XHJcbiovXHJcblxyXG5pbXBvcnQge2Nvbm5lY3RUb0RhdGFiYXNlfSBmcm9tICcuLi8uLi8uLi9saWIvbW9uZ29vc2UvZGJDb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSxyZXMpID0+IHtcclxuICAgIGNvbnN0IHtkYn0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG4gICAgY29uc3Qge21ldGhvZCxoZWFkZXJzfSA9IHJlcTtcclxuICAgIHN3aXRjaChtZXRob2Qpe1xyXG4gICAgICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgUHJvZHVjdC5maW5kKHt9KVxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3N1Y2Nlc3M6dHJ1ZSxkYXRhOnByb2R1Y3RzfSlcclxuICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtzdWNjZXNzOmZhbHNlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgLy9jb25zdCBwcm9kdWN0ID0gYXdhaXQgUHJvZHVjdC5jcmVhdGUocmVxLmJvZHkpXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oaGVhZGVycy5zaG9wbmFtZSkuaW5zZXJ0KHJlcS5ib2R5KVxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe3N1Y2Nlc3M6dHJ1ZSxkYXRhOnJlc3BvbnNlfSlcclxuICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtzdWNjZXNzOmZhbHNlLGVycm9yOmVycm9yfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7c3VjY2VzczpmYWxzZX0pXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9