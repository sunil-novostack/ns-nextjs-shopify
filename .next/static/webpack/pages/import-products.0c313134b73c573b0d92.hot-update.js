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
      var product, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return items.filter(function (item) {
                return item._id == _id;
              });

            case 2:
              product = _context2.sent;
              _context2.next = 5;
              return AddNewProduct({
                variables: {
                  input: {
                    title: product.title,
                    descriptionHtml: product.description
                  },
                  media: [{
                    originalSource: product.images.image,
                    alt: "Sample image testing",
                    mediaContentType: "IMAGE"
                  }]
                }
              });

            case 5:
              response = _context2.sent;

            case 6:
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
        lineNumber: 106,
        columnNumber: 26
      }, this),
      fullWidth: true,
      id: "import-product",
      children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Please Wait While product fetching from server..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
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
                lineNumber: 121,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
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
                    lineNumber: 130,
                    columnNumber: 63
                  }, _this), " ABC Company", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "text-v-line"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 130,
                    columnNumber: 124
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["DisplayText"], {
                  size: "small",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["TextStyle"], {
                    variation: "subdued",
                    children: "Shop"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 63
                  }, _this), " ", item.source, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "text-v-line"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 125
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["DisplayText"], {
                  size: "medium",
                  children: [" ", item.price, " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "item-operation",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["Link"], {
                    extenal: true,
                    url: item.sourceUrl,
                    children: "Original Product Link"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
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
                    lineNumber: 135,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "item-title",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["TextStyle"], {
                  variation: "subdued",
                  children: "Product Title"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["DisplayText"], {
                  size: "small",
                  children: item.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 138,
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
                    lineNumber: 143,
                    columnNumber: 78
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
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
                        lineNumber: 147,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 146,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "variation-props",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "Black"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 150,
                          columnNumber: 52
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "text-v-line"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 150,
                          columnNumber: 70
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "24"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 150,
                          columnNumber: 107
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 150,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "$45"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 151,
                          columnNumber: 52
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 151,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 149,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "v-item",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "image-holder",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: item.images[2]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 156,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 155,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "variation-props",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "Black"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 159,
                          columnNumber: 52
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "text-v-line"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 159,
                          columnNumber: 70
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "24"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 159,
                          columnNumber: 107
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 159,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "$45"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 160,
                          columnNumber: 52
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 160,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 158,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "description",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["TextStyle"], {
                  variation: "subdued",
                  children: "Description"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["DisplayText"], {
                  size: "small",
                  children: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "tags",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["Tag"], {
                  children: "Movie"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["Tag"], {
                  children: "Series"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 53
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["Tag"], {
                  children: "Collectibles"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 70
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 33
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "No Product Listed Yet..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 103,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1wb3J0LXByb2R1Y3RzLmpzIl0sIm5hbWVzIjpbIkFERF9ORVdfUFJPRFVDVCIsImdxbCIsIkltcG9ydHByb2R1Y3RzIiwidXNlU3RhdGUiLCJpdGVtcyIsInNldEl0ZW1zIiwidXNlTXV0YXRpb24iLCJBZGROZXdQcm9kdWN0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJheGlvc0NhbGxlZCIsInNldEF4aW9zQ2FsbGVkIiwidXNlRWZmZWN0IiwiZmlyZWJhc2UiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsIlJvdXRlciIsInB1c2giLCJyZXNwb25zZSIsImF4aW9zIiwiaGVhZGVycyIsIkNvb2tpZXMiLCJnZXQiLCJ1cmwiLCJtZXRob2QiLCJwYXJhbXMiLCJwYWdlIiwibGltaXQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJwcm9kdWN0cyIsIkhhbmRsZUNsaWNrSW1wb3J0UHJvZHVjdCIsIl9pZCIsImZpbHRlciIsIml0ZW0iLCJwcm9kdWN0IiwidmFyaWFibGVzIiwiaW5wdXQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uSHRtbCIsImRlc2NyaXB0aW9uIiwibWVkaWEiLCJvcmlnaW5hbFNvdXJjZSIsImltYWdlcyIsImltYWdlIiwiYWx0IiwibWVkaWFDb250ZW50VHlwZSIsIk5hcnZpZ2F0aW9uQmFyIiwibGVuZ3RoIiwic291cmNlIiwicHJpY2UiLCJzb3VyY2VVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLG1EQUFILG1CQUFyQjtBQVVlLFNBQVNDLGNBQVQsR0FBMEI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDWkMsc0RBQVEsQ0FBQyxFQUFELENBREk7QUFB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ay9wYWdlcy9pbXBvcnQtcHJvZHVjdHMuMGMzMTMxMzRiNzNjNTczYjBkOTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgUGFnZSxcclxuICBIZWFkaW5nLFxyXG4gIEZyYW1lLFxyXG4gIENhcmQsXHJcbiAgQnV0dG9uLFxyXG4gIFJlc291cmNlTGlzdCxcclxuICBUZXh0U3R5bGUsXHJcbiAgRGlzcGxheVRleHQsXHJcbiAgVGFnLFxyXG4gIExpbmssXHJcbiAgVGh1bWJuYWlsLFxyXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGZpcmViYXNlICBmcm9tICcuLi9saWIvZGIvRmlyZWJhc2UnO1xyXG5pbXBvcnQgTmFydmlnYXRpb25CYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyJztcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuXHJcbmltcG9ydCB7IEZhVXNlckFsdFNsYXNoIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBJb01kVGhlcm1vbWV0ZXIgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcblxyXG5jb25zdCBBRERfTkVXX1BST0RVQ1QgPSBncWxgXHJcbiAgICBtdXRhdGlvbiBhZGROZXdQcm9kdWN0KCRpbnB1dDogUHJvZHVjdElucHV0ISwgJG1lZGlhOiBbQ3JlYXRlTWVkaWFJbnB1dCFdISkge1xyXG4gICAgICAgIHByb2R1Y3RDcmVhdGUoaW5wdXQ6ICRpbnB1dCwgbWVkaWE6JG1lZGlhKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltcG9ydHByb2R1Y3RzICgpe1xyXG4gICAgY29uc3QgW2l0ZW1zLHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW0FkZE5ld1Byb2R1Y3RdID0gdXNlTXV0YXRpb24oQUREX05FV19QUk9EVUNUKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFtheGlvc0NhbGxlZCxzZXRBeGlvc0NhbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoIGFzeW5jICh1c2VyKT0+e1xyXG4gICAgICAgICAgICBpZighdXNlcil7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL3NpZ25pbicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKCFheGlvc0NhbGxlZCl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXhpb3Moe1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3Nob3BuYW1lJzpDb29raWVzLmdldCgnc2hvcE9yaWdpbicpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdXJsOicvYXBpL3Byb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonZ2V0JyxcclxuICAgICAgICAgICAgICAgIHBhcmFtczp7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZToxLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OjIwLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIHNldEl0ZW1zKHJlc3BvbnNlLmRhdGEucHJvZHVjdHMpXHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHNldEF4aW9zQ2FsbGVkKHRydWUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgY29uc3QgZmlyZWRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKClcclxuICAgICAgICBsZXQgcHJvZHVjdHMgPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICBmaXJlZGIuY29sbGVjdGlvbignc3VuaWwtbm92b3N0YWNrLm15c2hvcGlmeS5jb20nKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBwcm9kdWN0cy5wdXNoKGRvYy5kYXRhKCkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNldEl0ZW1zKHByb2R1Y3RzKVxyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICovXHJcbiAgICB9LFtpdGVtcyxsb2FkaW5nXSkgXHJcbiAgICBjb25zdCBIYW5kbGVDbGlja0ltcG9ydFByb2R1Y3QgPSBhc3luYyAoX2lkKSA9PntcclxuXHJcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uX2lkID09IF9pZCk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBZGROZXdQcm9kdWN0KHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOntcclxuICAgICAgICAgICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiBwcm9kdWN0LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSHRtbDpwcm9kdWN0LmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWVkaWE6W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxTb3VyY2U6cHJvZHVjdC5pbWFnZXMuaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdDpcIlNhbXBsZSBpbWFnZSB0ZXN0aW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhQ29udGVudFR5cGU6XCJJTUFHRVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxGcmFtZVxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbj17TmFydmlnYXRpb25CYXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPFBhZ2UgdGl0bGU9ezxIZWFkaW5nPkltcG9ydGVkIFByb2R1Y3RzPC9IZWFkaW5nPn0gZnVsbFdpZHRoIGlkPVwiaW1wb3J0LXByb2R1Y3RcIj5cclxuICAgICAgICAgICAge2xvYWRpbmdcclxuICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlBsZWFzZSBXYWl0IFdoaWxlIHByb2R1Y3QgZmV0Y2hpbmcgZnJvbSBzZXJ2ZXIuLi48L3A+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIChpdGVtcy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lZGlhID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1wb3J0LWl0ZW0taW1hZ2UtaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlc1swXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLl9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE9e21lZGlhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tc2VsbGVyLXNvdXJjZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+PFRleHRTdHlsZSB2YXJpYXRpb249XCJzdWJkdWVkXCI+U2VsbGVyPC9UZXh0U3R5bGU+IEFCQyBDb21wYW55PHNwYW4gY2xhc3NOYW1lPVwidGV4dC12LWxpbmVcIj48L3NwYW4+PC9EaXNwbGF5VGV4dD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPjxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3ViZHVlZFwiPlNob3A8L1RleHRTdHlsZT4ge2l0ZW0uc291cmNlfSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXYtbGluZVwiPjwvc3Bhbj48L0Rpc3BsYXlUZXh0PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzcGxheVRleHQgc2l6ZT1cIm1lZGl1bVwiPiB7aXRlbS5wcmljZX0gPC9EaXNwbGF5VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXRlbS1vcGVyYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGV4dGVuYWwgdXJsPXtpdGVtLnNvdXJjZVVybH0+T3JpZ2luYWwgUHJvZHVjdCBMaW5rPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic2xpbVwiIHByaW1hcnkgb25DbGljaz17ICgpID0+IEhhbmRsZUNsaWNrSW1wb3J0UHJvZHVjdChpdGVtLl9pZCl9PkltcG9ydDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3ViZHVlZFwiPlByb2R1Y3QgVGl0bGU8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPntpdGVtLnRpdGxlfTwvRGlzcGxheVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3ViZHVlZFwiPlZhcmlhdGlvbiA8c3BhbiBjbGFzc05hbWU9XCJ2YXJpYXRpb24tY291bnRcIj4oMik8L3NwYW4+PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9uLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2VzWzFdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9uLXByb3BzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuPkJsYWNrPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInRleHQtdi1saW5lXCI+PC9zcGFuPjxzcGFuPjI0PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4+JDQ1PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZXNbMl19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb24tcHJvcHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4+QmxhY2s8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwidGV4dC12LWxpbmVcIj48L3NwYW4+PHNwYW4+MjQ8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Bhbj4kNDU8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdWJkdWVkXCI+RGVzY3JpcHRpb248L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EaXNwbGF5VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhZz5Nb3ZpZTwvVGFnPjxUYWc+U2VyaWVzPC9UYWc+PFRhZz5Db2xsZWN0aWJsZXM8L1RhZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jlc291cmNlTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jlc291cmNlTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Tm8gUHJvZHVjdCBMaXN0ZWQgWWV0Li4uPC9wPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgICAgICAgPC9GcmFtZT5cclxuICAgICAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==