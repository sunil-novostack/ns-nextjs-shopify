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
                    originalSource: product.images[0],
                    alt: "Sample image testing",
                    mediaContentType: "IMAGE"
                  }]
                }
              });

            case 5:
              response = _context2.sent;
              console.log(response);

            case 7:
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
        lineNumber: 107,
        columnNumber: 26
      }, this),
      fullWidth: true,
      id: "import-product",
      children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Please Wait While product fetching from server..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
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
                lineNumber: 122,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
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
                    lineNumber: 131,
                    columnNumber: 63
                  }, _this), " ABC Company", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "text-v-line"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 124
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["DisplayText"], {
                  size: "small",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["TextStyle"], {
                    variation: "subdued",
                    children: "Shop"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 63
                  }, _this), " ", item.source, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "text-v-line"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 125
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["DisplayText"], {
                  size: "medium",
                  children: [" ", item.price, " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "item-operation",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["Link"], {
                    extenal: true,
                    url: item.sourceUrl,
                    children: "Original Product Link"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
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
                    lineNumber: 136,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "item-title",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["TextStyle"], {
                  variation: "subdued",
                  children: "Product Title"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["DisplayText"], {
                  size: "small",
                  children: item.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 139,
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
                    lineNumber: 144,
                    columnNumber: 78
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
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
                        lineNumber: 148,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "variation-props",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "Black"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 151,
                          columnNumber: 52
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "text-v-line"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 151,
                          columnNumber: 70
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "24"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 151,
                          columnNumber: 107
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 151,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "$45"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 152,
                          columnNumber: 52
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 152,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 150,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "v-item",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "image-holder",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: item.images[2]
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 157,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 156,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "variation-props",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "Black"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 160,
                          columnNumber: 52
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "text-v-line"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 160,
                          columnNumber: 70
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "24"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 160,
                          columnNumber: 107
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 160,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "$45"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 161,
                          columnNumber: 52
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 161,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 159,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "description",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["TextStyle"], {
                  variation: "subdued",
                  children: "Description"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["DisplayText"], {
                  size: "small",
                  children: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "tags",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["Tag"], {
                  children: "Movie"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["Tag"], {
                  children: "Series"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 53
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["Tag"], {
                  children: "Collectibles"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 70
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 33
            }, _this);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 21
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "No Product Listed Yet..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 104,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1wb3J0LXByb2R1Y3RzLmpzIl0sIm5hbWVzIjpbIkFERF9ORVdfUFJPRFVDVCIsImdxbCIsIkltcG9ydHByb2R1Y3RzIiwidXNlU3RhdGUiLCJpdGVtcyIsInNldEl0ZW1zIiwidXNlTXV0YXRpb24iLCJBZGROZXdQcm9kdWN0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJheGlvc0NhbGxlZCIsInNldEF4aW9zQ2FsbGVkIiwidXNlRWZmZWN0IiwiZmlyZWJhc2UiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsIlJvdXRlciIsInB1c2giLCJyZXNwb25zZSIsImF4aW9zIiwiaGVhZGVycyIsIkNvb2tpZXMiLCJnZXQiLCJ1cmwiLCJtZXRob2QiLCJwYXJhbXMiLCJwYWdlIiwibGltaXQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJwcm9kdWN0cyIsIkhhbmRsZUNsaWNrSW1wb3J0UHJvZHVjdCIsIl9pZCIsImZpbHRlciIsIml0ZW0iLCJwcm9kdWN0IiwidmFyaWFibGVzIiwiaW5wdXQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uSHRtbCIsImRlc2NyaXB0aW9uIiwibWVkaWEiLCJvcmlnaW5hbFNvdXJjZSIsImltYWdlcyIsImFsdCIsIm1lZGlhQ29udGVudFR5cGUiLCJOYXJ2aWdhdGlvbkJhciIsImxlbmd0aCIsInNvdXJjZSIsInByaWNlIiwic291cmNlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQyxtREFBSCxtQkFBckI7QUFVZSxTQUFTQyxjQUFULEdBQTBCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1pDLHNEQUFRLENBQUMsRUFBRCxDQURJO0FBQUEsTUFDOUJD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O0tBRkpKLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW1wb3J0LXByb2R1Y3RzLjI3MjAyMGU3NmZkNTdkZmExNWY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIFBhZ2UsXHJcbiAgSGVhZGluZyxcclxuICBGcmFtZSxcclxuICBDYXJkLFxyXG4gIEJ1dHRvbixcclxuICBSZXNvdXJjZUxpc3QsXHJcbiAgVGV4dFN0eWxlLFxyXG4gIERpc3BsYXlUZXh0LFxyXG4gIFRhZyxcclxuICBMaW5rLFxyXG4gIFRodW1ibmFpbCxcclxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBmaXJlYmFzZSAgZnJvbSAnLi4vbGliL2RiL0ZpcmViYXNlJztcclxuaW1wb3J0IE5hcnZpZ2F0aW9uQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhcic7XHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcblxyXG5pbXBvcnQgeyBGYVVzZXJBbHRTbGFzaCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgSW9NZFRoZXJtb21ldGVyIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5cclxuY29uc3QgQUREX05FV19QUk9EVUNUID0gZ3FsYFxyXG4gICAgbXV0YXRpb24gYWRkTmV3UHJvZHVjdCgkaW5wdXQ6IFByb2R1Y3RJbnB1dCEsICRtZWRpYTogW0NyZWF0ZU1lZGlhSW5wdXQhXSEpIHtcclxuICAgICAgICBwcm9kdWN0Q3JlYXRlKGlucHV0OiAkaW5wdXQsIG1lZGlhOiRtZWRpYSkge1xyXG4gICAgICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbXBvcnRwcm9kdWN0cyAoKXtcclxuICAgIGNvbnN0IFtpdGVtcyxzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtBZGROZXdQcm9kdWN0XSA9IHVzZU11dGF0aW9uKEFERF9ORVdfUFJPRFVDVCk7XHJcbiAgICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbYXhpb3NDYWxsZWQsc2V0QXhpb3NDYWxsZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKCBhc3luYyAodXNlcik9PntcclxuICAgICAgICAgICAgaWYoIXVzZXIpe1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9zaWduaW4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZighYXhpb3NDYWxsZWQpe1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICAgICAgICdzaG9wbmFtZSc6Q29va2llcy5nZXQoJ3Nob3BPcmlnaW4nKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVybDonL2FwaS9wcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J2dldCcsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6MSxcclxuICAgICAgICAgICAgICAgICAgICBsaW1pdDoyMCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICBzZXRJdGVtcyhyZXNwb25zZS5kYXRhLnByb2R1Y3RzKVxyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRBeGlvc0NhbGxlZCh0cnVlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKlxyXG4gICAgICAgIGNvbnN0IGZpcmVkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpXHJcbiAgICAgICAgbGV0IHByb2R1Y3RzID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgZmlyZWRiLmNvbGxlY3Rpb24oJ3N1bmlsLW5vdm9zdGFjay5teXNob3BpZnkuY29tJylcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAudGhlbigocXVlcnlTbmFwc2hvdCkgPT4geyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4geyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgcHJvZHVjdHMucHVzaChkb2MuZGF0YSgpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzZXRJdGVtcyhwcm9kdWN0cylcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAqL1xyXG4gICAgfSxbaXRlbXMsbG9hZGluZ10pIFxyXG4gICAgY29uc3QgSGFuZGxlQ2xpY2tJbXBvcnRQcm9kdWN0ID0gYXN5bmMgKF9pZCkgPT57XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBpdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLl9pZCA9PSBfaWQpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQWRkTmV3UHJvZHVjdCh7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczp7XHJcbiAgICAgICAgICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlIDogcHJvZHVjdC50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkh0bWw6cHJvZHVjdC5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1lZGlhOltcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsU291cmNlOnByb2R1Y3QuaW1hZ2VzWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ6XCJTYW1wbGUgaW1hZ2UgdGVzdGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYUNvbnRlbnRUeXBlOlwiSU1BR0VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPEZyYW1lXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uPXtOYXJ2aWdhdGlvbkJhcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGFnZSB0aXRsZT17PEhlYWRpbmc+SW1wb3J0ZWQgUHJvZHVjdHM8L0hlYWRpbmc+fSBmdWxsV2lkdGggaWQ9XCJpbXBvcnQtcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICB7bG9hZGluZ1xyXG4gICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+UGxlYXNlIFdhaXQgV2hpbGUgcHJvZHVjdCBmZXRjaGluZyBmcm9tIHNlcnZlci4uLjwvcD5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgKGl0ZW1zLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17IGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVkaWEgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbXBvcnQtaXRlbS1pbWFnZS1ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2VzWzBdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpYT17bWVkaWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1zZWxsZXItc291cmNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNwbGF5VGV4dCBzaXplPVwic21hbGxcIj48VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN1YmR1ZWRcIj5TZWxsZXI8L1RleHRTdHlsZT4gQUJDIENvbXBhbnk8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXYtbGluZVwiPjwvc3Bhbj48L0Rpc3BsYXlUZXh0PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+PFRleHRTdHlsZSB2YXJpYXRpb249XCJzdWJkdWVkXCI+U2hvcDwvVGV4dFN0eWxlPiB7aXRlbS5zb3VyY2V9IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtdi1saW5lXCI+PC9zcGFuPjwvRGlzcGxheVRleHQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXNwbGF5VGV4dCBzaXplPVwibWVkaXVtXCI+IHtpdGVtLnByaWNlfSA8L0Rpc3BsYXlUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpdGVtLW9wZXJhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgZXh0ZW5hbCB1cmw9e2l0ZW0uc291cmNlVXJsfT5PcmlnaW5hbCBQcm9kdWN0IExpbms8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbGltXCIgcHJpbWFyeSBvbkNsaWNrPXsgKCkgPT4gSGFuZGxlQ2xpY2tJbXBvcnRQcm9kdWN0KGl0ZW0uX2lkKX0+SW1wb3J0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdWJkdWVkXCI+UHJvZHVjdCBUaXRsZTwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+e2l0ZW0udGl0bGV9PC9EaXNwbGF5VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdWJkdWVkXCI+VmFyaWF0aW9uIDxzcGFuIGNsYXNzTmFtZT1cInZhcmlhdGlvbi1jb3VudFwiPigyKTwvc3Bhbj48L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb24tbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZXNbMV19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb24tcHJvcHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4+QmxhY2s8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwidGV4dC12LWxpbmVcIj48L3NwYW4+PHNwYW4+MjQ8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Bhbj4kNDU8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlc1syXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbi1wcm9wc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Bhbj5CbGFjazwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXYtbGluZVwiPjwvc3Bhbj48c3Bhbj4yNDwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuPiQ0NTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN1YmR1ZWRcIj5EZXNjcmlwdGlvbjwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Rpc3BsYXlUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFnPk1vdmllPC9UYWc+PFRhZz5TZXJpZXM8L1RhZz48VGFnPkNvbGxlY3RpYmxlczwvVGFnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVzb3VyY2VMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVzb3VyY2VMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8cD5ObyBQcm9kdWN0IExpc3RlZCBZZXQuLi48L3A+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgICAgICA8L0ZyYW1lPlxyXG4gICAgICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9