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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW1wb3J0LXByb2R1Y3RzLmpzIl0sIm5hbWVzIjpbIkFERF9ORVdfUFJPRFVDVCIsImdxbCIsIkltcG9ydHByb2R1Y3RzIiwidXNlU3RhdGUiLCJpdGVtcyIsInNldEl0ZW1zIiwidXNlTXV0YXRpb24iLCJBZGROZXdQcm9kdWN0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJheGlvc0NhbGxlZCIsInNldEF4aW9zQ2FsbGVkIiwidXNlRWZmZWN0IiwiZmlyZWJhc2UiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsIlJvdXRlciIsInB1c2giLCJyZXNwb25zZSIsImF4aW9zIiwiaGVhZGVycyIsIkNvb2tpZXMiLCJnZXQiLCJ1cmwiLCJtZXRob2QiLCJwYXJhbXMiLCJwYWdlIiwibGltaXQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJwcm9kdWN0cyIsIkhhbmRsZUNsaWNrSW1wb3J0UHJvZHVjdCIsIl9pZCIsImZpbHRlciIsIml0ZW0iLCJwcm9kdWN0IiwidmFyaWFibGVzIiwiaW5wdXQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uSHRtbCIsImRlc2NyaXB0aW9uIiwibWVkaWEiLCJvcmlnaW5hbFNvdXJjZSIsImltYWdlcyIsImltYWdlIiwiYWx0IiwibWVkaWFDb250ZW50VHlwZSIsIk5hcnZpZ2F0aW9uQmFyIiwibGVuZ3RoIiwic291cmNlIiwicHJpY2UiLCJzb3VyY2VVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLG1EQUFILG1CQUFyQjtBQVVlLFNBQVNDLGNBQVQsR0FBMEI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDWkMsc0RBQVEsQ0FBQyxFQUFELENBREk7QUFB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SUksZ0U7OztLQUZKSixjIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ltcG9ydC1wcm9kdWN0cy45MzM5OWY1MTEyMWRlOTA4NGYzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBQYWdlLFxyXG4gIEhlYWRpbmcsXHJcbiAgRnJhbWUsXHJcbiAgQ2FyZCxcclxuICBCdXR0b24sXHJcbiAgUmVzb3VyY2VMaXN0LFxyXG4gIFRleHRTdHlsZSxcclxuICBEaXNwbGF5VGV4dCxcclxuICBUYWcsXHJcbiAgTGluayxcclxuICBUaHVtYm5haWwsXHJcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgZmlyZWJhc2UgIGZyb20gJy4uL2xpYi9kYi9GaXJlYmFzZSc7XHJcbmltcG9ydCBOYXJ2aWdhdGlvbkJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXInO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xyXG5cclxuaW1wb3J0IHsgRmFVc2VyQWx0U2xhc2ggfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IElvTWRUaGVybW9tZXRlciB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuXHJcbmNvbnN0IEFERF9ORVdfUFJPRFVDVCA9IGdxbGBcclxuICAgIG11dGF0aW9uIGFkZE5ld1Byb2R1Y3QoJGlucHV0OiBQcm9kdWN0SW5wdXQhLCAkbWVkaWE6IFtDcmVhdGVNZWRpYUlucHV0IV0hKSB7XHJcbiAgICAgICAgcHJvZHVjdENyZWF0ZShpbnB1dDogJGlucHV0LCBtZWRpYTokbWVkaWEpIHtcclxuICAgICAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1wb3J0cHJvZHVjdHMgKCl7XHJcbiAgICBjb25zdCBbaXRlbXMsc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbQWRkTmV3UHJvZHVjdF0gPSB1c2VNdXRhdGlvbihBRERfTkVXX1BST0RVQ1QpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW2F4aW9zQ2FsbGVkLHNldEF4aW9zQ2FsbGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCggYXN5bmMgKHVzZXIpPT57XHJcbiAgICAgICAgICAgIGlmKCF1c2VyKXtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvc2lnbmluJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYoIWF4aW9zQ2FsbGVkKXtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBheGlvcyh7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgICAgICAgICAnc2hvcG5hbWUnOkNvb2tpZXMuZ2V0KCdzaG9wT3JpZ2luJylcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB1cmw6Jy9hcGkvcHJvZHVjdHMnLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidnZXQnLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOntcclxuICAgICAgICAgICAgICAgICAgICBwYWdlOjEsXHJcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6MjAsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgc2V0SXRlbXMocmVzcG9uc2UuZGF0YS5wcm9kdWN0cylcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgc2V0QXhpb3NDYWxsZWQodHJ1ZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLypcclxuICAgICAgICBjb25zdCBmaXJlZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKVxyXG4gICAgICAgIGxldCBwcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZpcmVkYi5jb2xsZWN0aW9uKCdzdW5pbC1ub3Zvc3RhY2subXlzaG9waWZ5LmNvbScpXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIHByb2R1Y3RzLnB1c2goZG9jLmRhdGEoKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc2V0SXRlbXMocHJvZHVjdHMpXHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgKi9cclxuICAgIH0sW2l0ZW1zLGxvYWRpbmddKSBcclxuICAgIGNvbnN0IEhhbmRsZUNsaWNrSW1wb3J0UHJvZHVjdCA9IGFzeW5jIChfaWQpID0+e1xyXG5cclxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5faWQgPT0gX2lkKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFkZE5ld1Byb2R1Y3Qoe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6e1xyXG4gICAgICAgICAgICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZSA6IHByb2R1Y3QudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25IdG1sOnByb2R1Y3QuZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtZWRpYTpbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFNvdXJjZTpwcm9kdWN0LmltYWdlcy5pbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0OlwiU2FtcGxlIGltYWdlIHRlc3RpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWFDb250ZW50VHlwZTpcIklNQUdFXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIH1cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxGcmFtZVxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbj17TmFydmlnYXRpb25CYXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPFBhZ2UgdGl0bGU9ezxIZWFkaW5nPkltcG9ydGVkIFByb2R1Y3RzPC9IZWFkaW5nPn0gZnVsbFdpZHRoIGlkPVwiaW1wb3J0LXByb2R1Y3RcIj5cclxuICAgICAgICAgICAge2xvYWRpbmdcclxuICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlBsZWFzZSBXYWl0IFdoaWxlIHByb2R1Y3QgZmV0Y2hpbmcgZnJvbSBzZXJ2ZXIuLi48L3A+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIChpdGVtcy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyBpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lZGlhID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1wb3J0LWl0ZW0taW1hZ2UtaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlc1swXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLl9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE9e21lZGlhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tc2VsbGVyLXNvdXJjZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzcGxheVRleHQgc2l6ZT1cInNtYWxsXCI+PFRleHRTdHlsZSB2YXJpYXRpb249XCJzdWJkdWVkXCI+U2VsbGVyPC9UZXh0U3R5bGU+IEFCQyBDb21wYW55PHNwYW4gY2xhc3NOYW1lPVwidGV4dC12LWxpbmVcIj48L3NwYW4+PC9EaXNwbGF5VGV4dD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPjxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3ViZHVlZFwiPlNob3A8L1RleHRTdHlsZT4ge2l0ZW0uc291cmNlfSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXYtbGluZVwiPjwvc3Bhbj48L0Rpc3BsYXlUZXh0PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlzcGxheVRleHQgc2l6ZT1cIm1lZGl1bVwiPiB7aXRlbS5wcmljZX0gPC9EaXNwbGF5VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXRlbS1vcGVyYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGV4dGVuYWwgdXJsPXtpdGVtLnNvdXJjZVVybH0+T3JpZ2luYWwgUHJvZHVjdCBMaW5rPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic2xpbVwiIHByaW1hcnkgb25DbGljaz17ICgpID0+IEhhbmRsZUNsaWNrSW1wb3J0UHJvZHVjdChpdGVtLl9pZCl9PkltcG9ydDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3ViZHVlZFwiPlByb2R1Y3QgVGl0bGU8L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPntpdGVtLnRpdGxlfTwvRGlzcGxheVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3ViZHVlZFwiPlZhcmlhdGlvbiA8c3BhbiBjbGFzc05hbWU9XCJ2YXJpYXRpb24tY291bnRcIj4oMik8L3NwYW4+PC9UZXh0U3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9uLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1ob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2VzWzFdfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9uLXByb3BzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuPkJsYWNrPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInRleHQtdi1saW5lXCI+PC9zcGFuPjxzcGFuPjI0PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4+JDQ1PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZXNbMl19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYXRpb24tcHJvcHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4+QmxhY2s8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwidGV4dC12LWxpbmVcIj48L3NwYW4+PHNwYW4+MjQ8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Bhbj4kNDU8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdWJkdWVkXCI+RGVzY3JpcHRpb248L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EaXNwbGF5VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhZz5Nb3ZpZTwvVGFnPjxUYWc+U2VyaWVzPC9UYWc+PFRhZz5Db2xsZWN0aWJsZXM8L1RhZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jlc291cmNlTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jlc291cmNlTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Tm8gUHJvZHVjdCBMaXN0ZWQgWWV0Li4uPC9wPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgICAgICAgPC9GcmFtZT5cclxuICAgICAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==