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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_db_Firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/db/Firebase */ "./lib/db/Firebase.js");
/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/NavigationBar */ "./components/NavigationBar.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");






var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-nextjs-shopify\\pages\\import-products.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n    mutation addNewProduct($input: ProductInput!, $media: [CreateMediaInput!]!) {\n        productCreate(input: $input, media:$media) {\n            product {\n                id\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}












var ADD_NEW_PRODUCT = graphql_tag__WEBPACK_IMPORTED_MODULE_12___default()(_templateObject());
function Importproducts() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      items = _useState[0],
      setItems = _useState[1];

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_13__["useMutation"])(ADD_NEW_PRODUCT),
      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useMutation, 1),
      AddNewProduct = _useMutation2[0];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      axiosCalled = _useState3[0],
      setAxiosCalled = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    _lib_db_Firebase__WEBPACK_IMPORTED_MODULE_8__["default"].auth().onAuthStateChanged( /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(user) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!user) {
                  next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/signin');
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

    if (!axiosCalled) {
      var response = axios__WEBPACK_IMPORTED_MODULE_10___default()({
        headers: {
          'shopname': js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('shopOrigin')
        },
        url: '/api/products',
        method: 'get',
        params: {
          page: 1,
          limit: 20
        }
      }).then(function (response) {
        console.log(response);
        setItems(response.data.products);
        setLoading(false);
        setAxiosCalled(true);
      });
    }
    /*
    const firedb = firebase.firestore()
    let products = [];
    
    firedb.collection('sunil-novostack.myshopify.com')
    .get()
    .then((querySnapshot) => {            
        querySnapshot.forEach((doc) => {                
           products.push(doc.data())
        })
        setItems(products)
        setLoading(false);
    })
    */

  }, [items, loading]);

  var HandleClickImportProduct = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_id) {
      var product;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              product = items.filter(function (item) {
                return item._id == _id;
              });
              console.log(product);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function HandleClickImportProduct(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["Frame"], {
    navigation: _components_NavigationBar__WEBPACK_IMPORTED_MODULE_9__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["Page"], {
      title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
        children: "Imported Products"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 26
      }, this),
      fullWidth: true,
      id: "import-product",
      children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Please Wait While product fetching from server..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 21
      }, this) : items.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["Card"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["ResourceList"], {
          items: items,
          renderItem: function renderItem(item) {
            var media = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "import-item-image-holder",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: item.images[0]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 33
            }, _this);

            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["ResourceList"].Item, {
              id: item._id,
              media: media,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "item-seller-source",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["DisplayText"], {
                  size: "small",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["TextStyle"], {
                    variation: "subdued",
                    children: "Seller"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 116,
                    columnNumber: 63
                  }, _this), " ABC Company", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "text-v-line"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 116,
                    columnNumber: 124
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["DisplayText"], {
                  size: "small",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["TextStyle"], {
                    variation: "subdued",
                    children: "Shop"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 63
                  }, _this), " ", item.source, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "text-v-line"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 125
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["DisplayText"], {
                  size: "medium",
                  children: " $40-$60 "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "item-operation",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["Link"], {
                    extenal: true,
                    url: item.sourceUrl,
                    children: "Original Product Link"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["Button"], {
                    size: "slim",
                    primary: true,
                    onClick: function onClick() {
                      return HandleClickImportProduct(item._id);
                    },
                    children: "Import"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "item-title",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["TextStyle"], {
                  variation: "subdued",
                  children: "Product Title"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["DisplayText"], {
                  size: "small",
                  children: item.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "variations",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["TextStyle"], {
                  variation: "subdued",
                  children: ["Variation ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "variation-count",
                    children: "(2)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
                    columnNumber: 78
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "variation-list",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "v-item",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "image-holder",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: item.images[1]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 133,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 132,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "variation-props",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "Black"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 136,
                          columnNumber: 52
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "text-v-line"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 136,
                          columnNumber: 70
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "24"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 136,
                          columnNumber: 107
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 136,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "$45"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 137,
                          columnNumber: 52
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 137,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 135,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "v-item",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "image-holder",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: item.images[2]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 142,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "variation-props",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "Black"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 145,
                          columnNumber: 52
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "text-v-line"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 145,
                          columnNumber: 70
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "24"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 145,
                          columnNumber: 107
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 145,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "$45"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 146,
                          columnNumber: 52
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 146,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "description",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["TextStyle"], {
                  variation: "subdued",
                  children: "Description"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["DisplayText"], {
                  size: "small",
                  children: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "tags",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["Tag"], {
                  children: "Movie"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["Tag"], {
                  children: "Series"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 53
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["Tag"], {
                  children: "Collectibles"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 70
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 33
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "No Product Listed Yet..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 13
  }, this);
}

_s(Importproducts, "gCd/HG/IYF5ZKO4HYTYGrKqNf9Y=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_13__["useMutation"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1wb3J0LXByb2R1Y3RzLmpzIl0sIm5hbWVzIjpbIkFERF9ORVdfUFJPRFVDVCIsImdxbCIsIkltcG9ydHByb2R1Y3RzIiwidXNlU3RhdGUiLCJpdGVtcyIsInNldEl0ZW1zIiwidXNlTXV0YXRpb24iLCJBZGROZXdQcm9kdWN0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJheGlvc0NhbGxlZCIsInNldEF4aW9zQ2FsbGVkIiwidXNlRWZmZWN0IiwiZmlyZWJhc2UiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsIlJvdXRlciIsInB1c2giLCJyZXNwb25zZSIsImF4aW9zIiwiaGVhZGVycyIsIkNvb2tpZXMiLCJnZXQiLCJ1cmwiLCJtZXRob2QiLCJwYXJhbXMiLCJwYWdlIiwibGltaXQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJwcm9kdWN0cyIsIkhhbmRsZUNsaWNrSW1wb3J0UHJvZHVjdCIsIl9pZCIsInByb2R1Y3QiLCJmaWx0ZXIiLCJpdGVtIiwiTmFydmlnYXRpb25CYXIiLCJsZW5ndGgiLCJtZWRpYSIsImltYWdlcyIsInNvdXJjZSIsInNvdXJjZVVybCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQyxtREFBSCxtQkFBckI7QUFVZSxTQUFTQyxjQUFULEdBQTBCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1pDLHNEQUFRLENBQUMsRUFBRCxDQURJO0FBQUEsTUFDOUJDLEtBRDhCO0FBQUEsTUFDeEJDLFFBRHdCOztBQUFBLHFCQUViQyx3RUFBVyxDQUFDTixlQUFELENBRkU7QUFBQTtBQUFBLE1BRTlCTyxhQUY4Qjs7QUFBQSxtQkFHUkosc0RBQVEs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Q0EsZUE4Q0E7QUFBSyx5QkFBUyxFQUFDLE1BQWY7QUFBQSx3Q0FDSSxxRUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUNvQixxRUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEcEIsZUFDcUMscUVBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRHJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkE5Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBb0RDO0FBNURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkgsZ0JBb0VHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBM0VSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxRlA7O0dBdkl1QnhDLGM7VUFFSUksZ0U7OztLQUZKSixjIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltcG9ydC1wcm9kdWN0cy4wMGRkZjY0NWFjMDgzNjRjODA3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBQYWdlLFxyXG4gIEhlYWRpbmcsXHJcbiAgRnJhbWUsXHJcbiAgQ2FyZCxcclxuICBCdXR0b24sXHJcbiAgUmVzb3VyY2VMaXN0LFxyXG4gIFRleHRTdHlsZSxcclxuICBEaXNwbGF5VGV4dCxcclxuICBUYWcsXHJcbiAgTGluayxcclxuICBUaHVtYm5haWwsXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgZmlyZWJhc2UgIGZyb20gJy4uL2xpYi9kYi9GaXJlYmFzZSc7XHJcbmltcG9ydCBOYXJ2aWdhdGlvbkJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXInO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xyXG5cclxuaW1wb3J0IHsgRmFVc2VyQWx0U2xhc2ggfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IElvTWRUaGVybW9tZXRlciB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuXHJcbmNvbnN0IEFERF9ORVdfUFJPRFVDVCA9IGdxbGBcclxuICAgIG11dGF0aW9uIGFkZE5ld1Byb2R1Y3QoJGlucHV0OiBQcm9kdWN0SW5wdXQhLCAkbWVkaWE6IFtDcmVhdGVNZWRpYUlucHV0IV0hKSB7XHJcbiAgICAgICAgcHJvZHVjdENyZWF0ZShpbnB1dDogJGlucHV0LCBtZWRpYTokbWVkaWEpIHtcclxuICAgICAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1wb3J0cHJvZHVjdHMgKCl7XHJcbiAgICBjb25zdCBbaXRlbXMsc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbQWRkTmV3UHJvZHVjdF0gPSB1c2VNdXRhdGlvbihBRERfTkVXX1BST0RVQ1QpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW2F4aW9zQ2FsbGVkLHNldEF4aW9zQ2FsbGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCggYXN5bmMgKHVzZXIpPT57XHJcbiAgICAgICAgICAgIGlmKCF1c2VyKXtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvc2lnbmluJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYoIWF4aW9zQ2FsbGVkKXtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBheGlvcyh7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgICAgICAgICAnc2hvcG5hbWUnOkNvb2tpZXMuZ2V0KCdzaG9wT3JpZ2luJylcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB1cmw6Jy9hcGkvcHJvZHVjdHMnLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidnZXQnLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOntcclxuICAgICAgICAgICAgICAgICAgICBwYWdlOjEsXHJcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6MjAsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgc2V0SXRlbXMocmVzcG9uc2UuZGF0YS5wcm9kdWN0cylcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgc2V0QXhpb3NDYWxsZWQodHJ1ZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLypcclxuICAgICAgICBjb25zdCBmaXJlZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKVxyXG4gICAgICAgIGxldCBwcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZpcmVkYi5jb2xsZWN0aW9uKCdzdW5pbC1ub3Zvc3RhY2subXlzaG9waWZ5LmNvbScpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIHByb2R1Y3RzLnB1c2goZG9jLmRhdGEoKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc2V0SXRlbXMocHJvZHVjdHMpXHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgKi9cclxuICAgIH0sW2l0ZW1zLGxvYWRpbmddKSBcclxuICAgIGNvbnN0IEhhbmRsZUNsaWNrSW1wb3J0UHJvZHVjdCA9IGFzeW5jIChfaWQpID0+e1xyXG5cclxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5faWQgPT0gX2lkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0KVxyXG4gICAgfVxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPEZyYW1lXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uPXtOYXJ2aWdhdGlvbkJhcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGFnZSB0aXRsZT17PEhlYWRpbmc+SW1wb3J0ZWQgUHJvZHVjdHM8L0hlYWRpbmc+fSBmdWxsV2lkdGggaWQ9XCJpbXBvcnQtcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICB7bG9hZGluZ1xyXG4gICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+UGxlYXNlIFdhaXQgV2hpbGUgcHJvZHVjdCBmZXRjaGluZyBmcm9tIHNlcnZlci4uLjwvcD5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgKGl0ZW1zLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17IGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVkaWEgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbXBvcnQtaXRlbS1pbWFnZS1ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2VzWzBdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpYT17bWVkaWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1zZWxsZXItc291cmNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNwbGF5VGV4dCBzaXplPVwic21hbGxcIj48VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN1YmR1ZWRcIj5TZWxsZXI8L1RleHRTdHlsZT4gQUJDIENvbXBhbnk8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXYtbGluZVwiPjwvc3Bhbj48L0Rpc3BsYXlUZXh0PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+PFRleHRTdHlsZSB2YXJpYXRpb249XCJzdWJkdWVkXCI+U2hvcDwvVGV4dFN0eWxlPiB7aXRlbS5zb3VyY2V9IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtdi1saW5lXCI+PC9zcGFuPjwvRGlzcGxheVRleHQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNwbGF5VGV4dCBzaXplPVwibWVkaXVtXCI+ICQ0MC0kNjAgPC9EaXNwbGF5VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXRlbS1vcGVyYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGV4dGVuYWwgdXJsPXtpdGVtLnNvdXJjZVVybH0+T3JpZ2luYWwgUHJvZHVjdCBMaW5rPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic2xpbVwiIHByaW1hcnkgb25DbGljaz17ICgpID0+IEhhbmRsZUNsaWNrSW1wb3J0UHJvZHVjdChpdGVtLl9pZCl9PkltcG9ydDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3ViZHVlZFwiPlByb2R1Y3QgVGl0bGU8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPntpdGVtLnRpdGxlfTwvRGlzcGxheVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3ViZHVlZFwiPlZhcmlhdGlvbiA8c3BhbiBjbGFzc05hbWU9XCJ2YXJpYXRpb24tY291bnRcIj4oMik8L3NwYW4+PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9uLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2VzWzFdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9uLXByb3BzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuPkJsYWNrPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInRleHQtdi1saW5lXCI+PC9zcGFuPjxzcGFuPjI0PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4+JDQ1PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZXNbMl19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb24tcHJvcHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4+QmxhY2s8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwidGV4dC12LWxpbmVcIj48L3NwYW4+PHNwYW4+MjQ8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Bhbj4kNDU8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdWJkdWVkXCI+RGVzY3JpcHRpb248L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EaXNwbGF5VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhZz5Nb3ZpZTwvVGFnPjxUYWc+U2VyaWVzPC9UYWc+PFRhZz5Db2xsZWN0aWJsZXM8L1RhZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jlc291cmNlTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jlc291cmNlTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Tm8gUHJvZHVjdCBMaXN0ZWQgWWV0Li4uPC9wPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgICAgICAgPC9GcmFtZT5cclxuICAgICAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==