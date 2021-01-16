webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@shopify/app-bridge-react/components/ClientRouter/ClientRouter.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/ClientRouter/ClientRouter.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var context_1 = __webpack_require__(/*! ../../context */ "./node_modules/@shopify/app-bridge-react/context.js");
var router_1 = __webpack_require__(/*! ./router */ "./node_modules/@shopify/app-bridge-react/components/ClientRouter/router.js");
/**
 * ClientRouter component
 *
 * @remarks
 * React component which keeps the Shopify admin url in sync with the app url
 *
 * @public
 */
var ClientRouter = /** @class */ (function (_super) {
    __extends(ClientRouter, _super);
    function ClientRouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClientRouter.prototype.componentDidMount = function () {
        var history = this.props.history;
        this.unsubscribe = router_1.handleRouteChange(this.context, history);
    };
    ClientRouter.prototype.componentWillUnmount = function () {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    };
    ClientRouter.prototype.render = function () {
        return null;
    };
    ClientRouter.contextType = context_1.AppBridgeContext;
    return ClientRouter;
}(react_1.default.Component));
exports.default = ClientRouter;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/ClientRouter/hook.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/ClientRouter/hook.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var useAppBridge_1 = __webpack_require__(/*! ../../useAppBridge */ "./node_modules/@shopify/app-bridge-react/useAppBridge.js");
var router_1 = __webpack_require__(/*! ./router */ "./node_modules/@shopify/app-bridge-react/components/ClientRouter/router.js");
/**
 * useRoutePropagation
 *
 * @remarks
 * A hook which keeps the Shopify admin url in sync with the app url
 *
 * @public
 */
function useClientRouting(history) {
    var app = useAppBridge_1.useAppBridge();
    react_1.useEffect(function () {
        return router_1.handleRouteChange(app, history);
    }, [app, history]);
}
exports.default = useClientRouting;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/ClientRouter/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/ClientRouter/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClientRouter_1 = __webpack_require__(/*! ./ClientRouter */ "./node_modules/@shopify/app-bridge-react/components/ClientRouter/ClientRouter.js");
Object.defineProperty(exports, "ClientRouter", { enumerable: true, get: function () { return ClientRouter_1.default; } });
var hook_1 = __webpack_require__(/*! ./hook */ "./node_modules/@shopify/app-bridge-react/components/ClientRouter/hook.js");
Object.defineProperty(exports, "useClientRouting", { enumerable: true, get: function () { return hook_1.default; } });


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/ClientRouter/router.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/ClientRouter/router.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRouteChange = void 0;
var actions_1 = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
function handleRouteChange(app, history) {
    return app.subscribe(actions_1.Redirect.ActionType.APP, function (_a) {
        var path = _a.path;
        history.replace(path);
    });
}
exports.handleRouteChange = handleRouteChange;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/Loading/Loading.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/Loading/Loading.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var actions_1 = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
var context_1 = __webpack_require__(/*! ../../context */ "./node_modules/@shopify/app-bridge-react/context.js");
/**
 * Loading component
 *
 * @remarks
 * React component which wraps the Shopify App Bridge Loading action.
 *
 * @public
 */
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Loading.prototype.componentDidMount = function () {
        var app = this.context;
        this.loading = actions_1.Loading.create(app);
        if (this.loading != null) {
            this.loading.dispatch(actions_1.Loading.Action.START);
        }
    };
    Loading.prototype.componentWillUnmount = function () {
        if (this.loading != null) {
            this.loading.dispatch(actions_1.Loading.Action.STOP);
        }
    };
    Loading.prototype.render = function () {
        return null;
    };
    Loading.contextType = context_1.AppBridgeContext;
    return Loading;
}(react_1.default.Component));
exports.default = Loading;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/Loading/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/Loading/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Loading_1 = __importDefault(__webpack_require__(/*! ./Loading */ "./node_modules/@shopify/app-bridge-react/components/Loading/Loading.js"));
exports.default = Loading_1.default;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/Modal/Modal.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/Modal/Modal.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var actions_1 = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
var transformers_1 = __webpack_require__(/*! ../../utilities/transformers */ "./node_modules/@shopify/app-bridge-react/utilities/transformers.js");
var context_1 = __webpack_require__(/*! ../../context */ "./node_modules/@shopify/app-bridge-react/context.js");
/**
 * Modal component
 *
 * @remarks
 * React component which wraps the Shopify App Bridge Modal action.
 *
 * @public
 */
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.focusReturnPoint = null;
        return _this;
    }
    Modal.prototype.componentDidMount = function () {
        var _a = this.props, open = _a.open, onClose = _a.onClose;
        var app = this.context;
        this.modal = actions_1.Modal.create(app, this.transformProps());
        if (onClose != null) {
            this.modal.subscribe(actions_1.Modal.Action.CLOSE, onClose);
        }
        if (open) {
            this.focusReturnPoint = document.activeElement;
            this.modal.dispatch(actions_1.Modal.Action.OPEN);
        }
    };
    Modal.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, open = _a.open, onClose = _a.onClose;
        var wasOpen = prevProps.open;
        var transformedProps = this.transformProps();
        this.modal.unsubscribe();
        if (isIframeModal(transformedProps)) {
            this.modal.set(transformedProps, open);
        }
        else {
            this.modal.set(transformedProps, open);
        }
        if (onClose != null) {
            this.modal.subscribe(actions_1.Modal.Action.CLOSE, onClose);
        }
        if (wasOpen !== open) {
            if (open) {
                this.modal.dispatch(actions_1.Modal.Action.OPEN);
            }
            else {
                this.modal.dispatch(actions_1.Modal.Action.CLOSE);
            }
        }
        if (!wasOpen && open) {
            this.focusReturnPoint = document.activeElement;
        }
        else if (wasOpen &&
            !open &&
            this.focusReturnPoint != null &&
            document.contains(this.focusReturnPoint)) {
            this.focusReturnPoint.focus();
            this.focusReturnPoint = null;
        }
    };
    Modal.prototype.componentWillUnmount = function () {
        this.modal.unsubscribe();
        if (this.props.open) {
            this.modal.dispatch(actions_1.Modal.Action.CLOSE);
        }
    };
    Modal.prototype.render = function () {
        return null;
    };
    Modal.prototype.transformProps = function () {
        var _a = this.props, title = _a.title, size = _a.size, message = _a.message, src = _a.src, primaryAction = _a.primaryAction, secondaryActions = _a.secondaryActions;
        var app = this.context;
        var safeSize = size == null ? undefined : actions_1.Modal.Size[size];
        var srcPayload = {};
        if (src != null) {
            if (src.match('^https?://')) {
                srcPayload.url = src;
            }
            else {
                srcPayload.path = src;
            }
        }
        return __assign(__assign({ title: title,
            message: message, size: safeSize }, srcPayload), { footer: {
                buttons: transformers_1.transformActions(app, {
                    primaryAction: primaryAction,
                    secondaryActions: secondaryActions,
                }),
            } });
    };
    Modal.contextType = context_1.AppBridgeContext;
    return Modal;
}(react_1.default.PureComponent));
function isIframeModal(options) {
    return (typeof options.url === 'string' ||
        typeof options.path === 'string');
}
exports.default = Modal;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/Modal/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/Modal/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Modal_1 = __importDefault(__webpack_require__(/*! ./Modal */ "./node_modules/@shopify/app-bridge-react/components/Modal/Modal.js"));
exports.default = Modal_1.default;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/Provider/Provider.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/Provider/Provider.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setClientInterfaceHook = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var app_bridge_1 = __importStar(__webpack_require__(/*! @shopify/app-bridge */ "./node_modules/@shopify/app-bridge/index.js"));
var context_1 = __webpack_require__(/*! ../../context */ "./node_modules/@shopify/app-bridge-react/context.js");
var packageJson = __webpack_require__(/*! ../../package.json */ "./node_modules/@shopify/app-bridge-react/package.json");
/**
 * Create an App Bridge client application from a config and pass it as the
 * value to the context provider.
 *
 * @remarks
 * You'll probably want something a little more robust than storing the current
 * app instance in a module-level global.
 *
 * @public
 */
var Provider = /** @class */ (function (_super) {
    __extends(Provider, _super);
    function Provider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.app = _this.appInstance;
        return _this;
    }
    Object.defineProperty(Provider.prototype, "appInstance", {
        get: function () {
            if (!this.app) {
                this.app = app_bridge_1.default(this.props.config);
                if (this.app && this.app.hooks) {
                    this.app.hooks.set(app_bridge_1.LifecycleHook.DispatchAction, exports.setClientInterfaceHook);
                }
            }
            return this.app;
        },
        enumerable: false,
        configurable: true
    });
    Provider.prototype.render = function () {
        return (react_1.default.createElement(context_1.AppBridgeContext.Provider, { value: this.appInstance }, this.props.children));
    };
    return Provider;
}(react_1.default.Component));
exports.default = Provider;
/**
 * Augment actions with clientInterface metadata, identifying use of this library
 *
 * @internal
 */
exports.setClientInterfaceHook = function (next) {
    return function (action) {
        action.clientInterface = {
            name: '@shopify/app-bridge-react',
            version: packageJson.version,
        };
        return next(action);
    };
};


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/Provider/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/Provider/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Provider_1 = __importDefault(__webpack_require__(/*! ./Provider */ "./node_modules/@shopify/app-bridge-react/components/Provider/Provider.js"));
exports.default = Provider_1.default;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/ResourcePicker/ResourcePicker.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/ResourcePicker/ResourcePicker.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var actions_1 = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
var context_1 = __webpack_require__(/*! ../../context */ "./node_modules/@shopify/app-bridge-react/context.js");
/**
 * ResourcePicker component
 *
 * @remarks
 * React component which wraps the Shopify App Bridge ResourcePicker action.
 *
 * @public
 */
var ResourcePicker = /** @class */ (function (_super) {
    __extends(ResourcePicker, _super);
    function ResourcePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.focusReturnPoint = null;
        return _this;
    }
    ResourcePicker.prototype.componentDidMount = function () {
        var _a = this.props, open = _a.open, resourceType = _a.resourceType, onSelection = _a.onSelection, onCancel = _a.onCancel;
        var app = this.context;
        this.picker = actions_1.ResourcePicker.create(app, {
            resourceType: actions_1.ResourcePicker.ResourceType[resourceType],
            options: this.getActionOptions(),
        });
        if (onSelection != null) {
            this.picker.subscribe(actions_1.ResourcePicker.Action.SELECT, onSelection);
        }
        if (onCancel != null) {
            this.picker.subscribe(actions_1.ResourcePicker.Action.CANCEL, onCancel);
        }
        if (open) {
            this.focusReturnPoint = document.activeElement;
            this.picker.dispatch(actions_1.ResourcePicker.Action.OPEN);
        }
    };
    ResourcePicker.prototype.componentDidUpdate = function (prevProps) {
        var wasOpen = prevProps.open;
        var _a = this.props, open = _a.open, onCancel = _a.onCancel, onSelection = _a.onSelection;
        this.picker.unsubscribe();
        this.picker.set(this.getActionOptions());
        if (onSelection != null) {
            this.picker.subscribe(actions_1.ResourcePicker.Action.SELECT, onSelection);
        }
        if (onCancel != null) {
            this.picker.subscribe(actions_1.ResourcePicker.Action.CANCEL, onCancel);
        }
        if (wasOpen !== open) {
            if (open) {
                this.picker.dispatch(actions_1.ResourcePicker.Action.OPEN);
            }
            else {
                this.picker.dispatch(actions_1.ResourcePicker.Action.CLOSE);
            }
        }
        if (!wasOpen && open) {
            this.focusReturnPoint = document.activeElement;
        }
        else if (wasOpen &&
            !open &&
            this.focusReturnPoint != null &&
            document.contains(this.focusReturnPoint)) {
            this.focusReturnPoint.focus();
            this.focusReturnPoint = null;
        }
    };
    ResourcePicker.prototype.componentWillUnmount = function () {
        this.picker.unsubscribe();
    };
    ResourcePicker.prototype.render = function () {
        return null;
    };
    ResourcePicker.prototype.getActionOptions = function () {
        var _a = this.props, initialQuery = _a.initialQuery, initialSelectionIds = _a.initialSelectionIds, showHidden = _a.showHidden, allowMultiple = _a.allowMultiple, selectMultiple = _a.selectMultiple, actionVerb = _a.actionVerb;
        var sharedOptions = {
            initialQuery: initialQuery,
            initialSelectionIds: initialSelectionIds,
            showHidden: showHidden,
            selectMultiple: selectMultiple !== null && selectMultiple !== void 0 ? selectMultiple : allowMultiple,
            actionVerb: actionVerb,
        };
        var result = sharedOptions;
        if (this.props.resourceType === 'Product') {
            var _b = this.props, showVariants = _b.showVariants, showDraft = _b.showDraft, showArchived = _b.showArchived, showDraftBadge = _b.showDraftBadge, showArchivedBadge = _b.showArchivedBadge;
            var productSpecificOptions = {
                showVariants: showVariants,
                showDraft: showDraft,
                showArchived: showArchived,
                showDraftBadge: showDraftBadge,
                showArchivedBadge: showArchivedBadge,
            };
            result = __assign(__assign({}, sharedOptions), productSpecificOptions);
        }
        return result;
    };
    ResourcePicker.contextType = context_1.AppBridgeContext;
    ResourcePicker.ActionVerb = actions_1.ResourcePicker.ActionVerb;
    return ResourcePicker;
}(react_1.default.PureComponent));
exports.default = ResourcePicker;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/ResourcePicker/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/ResourcePicker/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ResourcePicker_1 = __importDefault(__webpack_require__(/*! ./ResourcePicker */ "./node_modules/@shopify/app-bridge-react/components/ResourcePicker/ResourcePicker.js"));
exports.default = ResourcePicker_1.default;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/RoutePropagator.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/RoutePropagator/RoutePropagator.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var context_1 = __webpack_require__(/*! ../../context */ "./node_modules/@shopify/app-bridge-react/context.js");
var route_propagator_1 = __webpack_require__(/*! ./route-propagator */ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/route-propagator.js");
/**
 * RoutePropagator component
 *
 * @remarks
 * React component which keeps the Shopify admin url in sync with the app url
 *
 * @public
 */
var RoutePropagator = /** @class */ (function (_super) {
    __extends(RoutePropagator, _super);
    function RoutePropagator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoutePropagator.prototype.componentDidMount = function () {
        var location = this.props.location;
        route_propagator_1.updateHistory(this.context, location);
    };
    RoutePropagator.prototype.componentDidUpdate = function (_a) {
        var prevLocation = _a.location;
        var location = this.props.location;
        if (location !== prevLocation) {
            route_propagator_1.updateHistory(this.context, location);
        }
    };
    RoutePropagator.prototype.render = function () {
        return null;
    };
    RoutePropagator.contextType = context_1.AppBridgeContext;
    return RoutePropagator;
}(react_1.default.Component));
exports.default = RoutePropagator;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/globals.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/RoutePropagator/globals.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrigin = exports.getTopWindow = exports.getSelfWindow = void 0;
function getSelfWindow() {
    return window.self;
}
exports.getSelfWindow = getSelfWindow;
function getTopWindow() {
    return window.top;
}
exports.getTopWindow = getTopWindow;
function getOrigin() {
    return location.origin;
}
exports.getOrigin = getOrigin;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/hook.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/RoutePropagator/hook.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var useAppBridge_1 = __webpack_require__(/*! ../../useAppBridge */ "./node_modules/@shopify/app-bridge-react/useAppBridge.js");
var route_propagator_1 = __webpack_require__(/*! ./route-propagator */ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/route-propagator.js");
/**
 * useRoutePropagation
 *
 * @remarks
 * A hook which keeps the Shopify admin url in sync with the app url
 *
 * @public
 */
function useRoutePropagation(location) {
    var app = useAppBridge_1.useAppBridge();
    react_1.useEffect(function () {
        route_propagator_1.updateHistory(app, location);
    }, [app, location]);
}
exports.default = useRoutePropagation;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/RoutePropagator/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RoutePropagator_1 = __webpack_require__(/*! ./RoutePropagator */ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/RoutePropagator.js");
Object.defineProperty(exports, "RoutePropagator", { enumerable: true, get: function () { return RoutePropagator_1.default; } });
var hook_1 = __webpack_require__(/*! ./hook */ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/hook.js");
Object.defineProperty(exports, "useRoutePropagation", { enumerable: true, get: function () { return hook_1.default; } });


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/route-propagator.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/RoutePropagator/route-propagator.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateHistory = void 0;
var app_bridge_1 = __webpack_require__(/*! @shopify/app-bridge */ "./node_modules/@shopify/app-bridge/index.js");
var actions_1 = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
var globals_1 = __webpack_require__(/*! ./globals */ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/globals.js");
// These parameters are added to the iframe url but we don't want to propagate
// them up to the address bar as they are not provided by the application
// Removing hmac is especially important as its presence may cause infinite
// oauth authentication loops
var embeddedFrameParamsToRemove = ['hmac', 'locale', 'protocol', 'session', 'shop', 'timestamp'];
function updateHistory(app, location) {
    return __awaiter(this, void 0, void 0, function () {
        var selfWindow, topWindow, renderedInTheTopWindow, renderedAsMainApp, normalizedLocation, pathname, search, hash, locationStr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selfWindow = globals_1.getSelfWindow();
                    topWindow = globals_1.getTopWindow();
                    renderedInTheTopWindow = selfWindow === topWindow;
                    return [4 /*yield*/, app.getState('context').then(function (context) {
                            return context === app_bridge_1.Context.Main;
                        })];
                case 1:
                    renderedAsMainApp = _a.sent();
                    if (renderedInTheTopWindow || !renderedAsMainApp) {
                        return [2 /*return*/];
                    }
                    normalizedLocation = getNormalizedURL(location);
                    embeddedFrameParamsToRemove.forEach(function (param) { return normalizedLocation.searchParams.delete(param); });
                    pathname = normalizedLocation.pathname, search = normalizedLocation.search, hash = normalizedLocation.hash;
                    locationStr = "" + pathname + search + hash;
                    actions_1.History.create(app).dispatch(actions_1.History.Action.REPLACE, locationStr);
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateHistory = updateHistory;
function getNormalizedURL(location) {
    var origin = globals_1.getOrigin();
    if (typeof location === 'string') {
        return new URL(location, origin);
    }
    var pathname = location.pathname, search = location.search, hash = location.hash;
    return new URL("" + pathname + search + hash, origin);
}


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/TitleBar/TitleBar.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/TitleBar/TitleBar.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var actions_1 = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
var transformers_1 = __webpack_require__(/*! ../../utilities/transformers */ "./node_modules/@shopify/app-bridge-react/utilities/transformers.js");
var context_1 = __webpack_require__(/*! ../../context */ "./node_modules/@shopify/app-bridge-react/context.js");
var TitleBar = /** @class */ (function (_super) {
    __extends(TitleBar, _super);
    function TitleBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TitleBar.prototype.componentDidMount = function () {
        var app = this.context;
        this.titleBar = actions_1.TitleBar.create(app, this.transformProps());
    };
    TitleBar.prototype.componentDidUpdate = function () {
        this.titleBar.unsubscribe();
        this.titleBar.set(this.transformProps());
    };
    TitleBar.prototype.componentWillUnmount = function () {
        this.titleBar.unsubscribe();
    };
    TitleBar.prototype.render = function () {
        return null;
    };
    TitleBar.prototype.transformProps = function () {
        var app = this.context;
        var _a = this.props, title = _a.title, primaryAction = _a.primaryAction, secondaryActions = _a.secondaryActions, actionGroups = _a.actionGroups;
        return {
            title: title,
            buttons: transformers_1.transformActions(app, {
                primaryAction: primaryAction,
                secondaryActions: secondaryActions,
                actionGroups: actionGroups,
            }),
            breadcrumbs: this.transformBreadcrumbs(),
        };
    };
    TitleBar.prototype.transformBreadcrumbs = function () {
        var app = this.context;
        var breadcrumbs = this.props.breadcrumbs;
        if (breadcrumbs == null || breadcrumbs.length === 0) {
            return undefined;
        }
        var breadcrumb = breadcrumbs[breadcrumbs.length - 1];
        var url = breadcrumb.url, onAction = breadcrumb.onAction, target = breadcrumb.target, content = breadcrumb.content;
        var button = actions_1.Button.create(app, {
            label: content || '',
        });
        var redirect = transformers_1.generateRedirect(app, url, target);
        if (redirect != null) {
            button.subscribe(actions_1.Button.Action.CLICK, redirect);
        }
        if (onAction != null) {
            button.subscribe(actions_1.Button.Action.CLICK, onAction);
        }
        return button;
    };
    TitleBar.contextType = context_1.AppBridgeContext;
    return TitleBar;
}(react_1.default.PureComponent));
exports.default = TitleBar;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/TitleBar/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/TitleBar/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TitleBar_1 = __importDefault(__webpack_require__(/*! ./TitleBar */ "./node_modules/@shopify/app-bridge-react/components/TitleBar/TitleBar.js"));
exports.default = TitleBar_1.default;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/Toast/Toast.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/Toast/Toast.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_TOAST_DURATION = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var actions_1 = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
var context_1 = __webpack_require__(/*! ../../context */ "./node_modules/@shopify/app-bridge-react/context.js");
exports.DEFAULT_TOAST_DURATION = 5000;
/**
 * Toast component
 *
 * @remarks
 * React component which wraps the Shopify App Bridge Toast action.
 *
 * @public
 */
var Toast = /** @class */ (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toast.prototype.componentDidMount = function () {
        var app = this.context;
        var _a = this.props, error = _a.error, content = _a.content, _b = _a.duration, duration = _b === void 0 ? exports.DEFAULT_TOAST_DURATION : _b, onDismiss = _a.onDismiss;
        this.toast = actions_1.Toast.create(app, {
            message: content,
            duration: duration,
            isError: error,
        });
        this.toast.subscribe(actions_1.Toast.Action.CLEAR, onDismiss);
        this.toast.dispatch(actions_1.Toast.Action.SHOW);
    };
    Toast.prototype.componentWillUnmount = function () {
        this.toast.unsubscribe();
    };
    Toast.prototype.render = function () {
        return null;
    };
    Toast.contextType = context_1.AppBridgeContext;
    return Toast;
}(react_1.default.PureComponent));
exports.default = Toast;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/Toast/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/Toast/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Toast_1 = __importDefault(__webpack_require__(/*! ./Toast */ "./node_modules/@shopify/app-bridge-react/components/Toast/Toast.js"));
exports.default = Toast_1.default;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Provider_1 = __webpack_require__(/*! ./Provider */ "./node_modules/@shopify/app-bridge-react/components/Provider/index.js");
Object.defineProperty(exports, "Provider", { enumerable: true, get: function () { return Provider_1.default; } });
var Loading_1 = __webpack_require__(/*! ./Loading */ "./node_modules/@shopify/app-bridge-react/components/Loading/index.js");
Object.defineProperty(exports, "Loading", { enumerable: true, get: function () { return Loading_1.default; } });
var Toast_1 = __webpack_require__(/*! ./Toast */ "./node_modules/@shopify/app-bridge-react/components/Toast/index.js");
Object.defineProperty(exports, "Toast", { enumerable: true, get: function () { return Toast_1.default; } });
var TitleBar_1 = __webpack_require__(/*! ./TitleBar */ "./node_modules/@shopify/app-bridge-react/components/TitleBar/index.js");
Object.defineProperty(exports, "TitleBar", { enumerable: true, get: function () { return TitleBar_1.default; } });
var Modal_1 = __webpack_require__(/*! ./Modal */ "./node_modules/@shopify/app-bridge-react/components/Modal/index.js");
Object.defineProperty(exports, "Modal", { enumerable: true, get: function () { return Modal_1.default; } });
var ResourcePicker_1 = __webpack_require__(/*! ./ResourcePicker */ "./node_modules/@shopify/app-bridge-react/components/ResourcePicker/index.js");
Object.defineProperty(exports, "ResourcePicker", { enumerable: true, get: function () { return ResourcePicker_1.default; } });
__exportStar(__webpack_require__(/*! ./RoutePropagator */ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/index.js"), exports);
__exportStar(__webpack_require__(/*! ./ClientRouter */ "./node_modules/@shopify/app-bridge-react/components/ClientRouter/index.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/context.js":
/*!***********************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/context.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppBridgeContext = void 0;
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/**
 * App Bridge context.
 *
 * @public
 */
exports.AppBridgeContext = react_1.createContext(null);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./components */ "./node_modules/@shopify/app-bridge-react/components/index.js"), exports);
var context_1 = __webpack_require__(/*! ./context */ "./node_modules/@shopify/app-bridge-react/context.js");
Object.defineProperty(exports, "Context", { enumerable: true, get: function () { return context_1.AppBridgeContext; } });
var useAppBridge_1 = __webpack_require__(/*! ./useAppBridge */ "./node_modules/@shopify/app-bridge-react/useAppBridge.js");
Object.defineProperty(exports, "useAppBridge", { enumerable: true, get: function () { return useAppBridge_1.useAppBridge; } });


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/package.json":
/*!*************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/package.json ***!
  \*************************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, dependencies, deprecated, description, devDependencies, files, gitHead, homepage, jsdelivr, license, main, name, peerDependencies, private, publishConfig, repository, scripts, sideEffects, size-limit, types, unpkg, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"@shopify/app-bridge-react@^1.25.0\",\"_id\":\"@shopify/app-bridge-react@1.28.0\",\"_inBundle\":false,\"_integrity\":\"sha512-p/Gr1n9+IgECWcK6m5AVrfzZ2BoEouLE/Cc2UYr53iNTgDM2mug9t5nK65znk+5QoL4uGo9DzVqW2ixg92dS8Q==\",\"_location\":\"/@shopify/app-bridge-react\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"range\",\"registry\":true,\"raw\":\"@shopify/app-bridge-react@^1.25.0\",\"name\":\"@shopify/app-bridge-react\",\"escapedName\":\"@shopify%2fapp-bridge-react\",\"scope\":\"@shopify\",\"rawSpec\":\"^1.25.0\",\"saveSpec\":null,\"fetchSpec\":\"^1.25.0\"},\"_requiredBy\":[\"/\"],\"_resolved\":\"https://registry.npmjs.org/@shopify/app-bridge-react/-/app-bridge-react-1.28.0.tgz\",\"_shasum\":\"eef17d47ab08d4db0ffa5472ac0c48450999b24e\",\"_spec\":\"@shopify/app-bridge-react@^1.25.0\",\"_where\":\"E:\\\\novostack\\\\shopify\\\\apps\\\\ns-nextjs-shopify\",\"author\":{\"name\":\"Shopify Inc.\"},\"bugs\":{\"url\":\"https://github.com/Shopify/app-bridge/issues\"},\"bundleDependencies\":false,\"dependencies\":{\"@shopify/app-bridge\":\"^1.28.0\"},\"deprecated\":false,\"description\":\"Shopify App Bridge offers React component wrappers for some App Bridge actions. This is a great option if you are already using React and want to follow familiar patterns.\",\"devDependencies\":{\"@types/react\":\"^16.7.3\",\"enzyme\":\"3.11.0\"},\"files\":[\"/components/\",\"/context.d.ts\",\"/context.js\",\"/useAppBridge.d.ts\",\"/useAppBridge.js\",\"/index.d.ts\",\"/index.js\",\"/umd/\",\"/utilities/\",\"/types.d.ts\",\"/types.js\"],\"gitHead\":\"56eb20c23b9fc9777a03848c06d93e3a0b747026\",\"homepage\":\"https://shopify.dev/tools/app-bridge/react-components\",\"jsdelivr\":\"umd/index.js\",\"license\":\"MIT\",\"main\":\"index.js\",\"name\":\"@shopify/app-bridge-react\",\"peerDependencies\":{\"react\":\"^16.0.0\"},\"private\":false,\"publishConfig\":{\"access\":\"public\",\"@shopify:registry\":\"https://registry.npmjs.org\"},\"repository\":{\"type\":\"git\",\"url\":\"git+ssh://git@github.com/Shopify/app-bridge.git\"},\"scripts\":{\"build\":\"yarn build:tsc && yarn build:umd\",\"build:tsc\":\"NODE_ENV=production tsc\",\"build:umd\":\"NODE_ENV=production webpack -p\",\"check\":\"tsc\",\"clean\":\"cat package.json | node -pe \\\"JSON.parse(require('fs').readFileSync('/dev/stdin').toString()).files.map(f => './'+f).join(' ')\\\" | xargs rm -rf\",\"pack\":\"yarn pack\",\"size\":\"size-limit\"},\"sideEffects\":false,\"size-limit\":[{\"limit\":\"27 KB\",\"path\":\"index.js\"}],\"types\":\"index.d.ts\",\"unpkg\":\"umd/index.js\",\"version\":\"1.28.0\"}");

/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/useAppBridge.js":
/*!****************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/useAppBridge.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppBridge = void 0;
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var context_1 = __webpack_require__(/*! ./context */ "./node_modules/@shopify/app-bridge-react/context.js");
function useAppBridge() {
    var appBridge = react_1.useContext(context_1.AppBridgeContext);
    if (!appBridge) {
        throw new Error('No AppBridge context provided. Your component must be wrapped in an AppBridge <Context> component.');
    }
    return appBridge;
}
exports.useAppBridge = useAppBridge;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/utilities/transformers.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/utilities/transformers.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformActions = exports.generateRedirect = void 0;
var actions_1 = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
function generateRedirect(appBridge, url, target, external) {
    if (target === void 0) { target = 'APP'; }
    if (url == null) {
        return undefined;
    }
    var redirect = actions_1.Redirect.create(appBridge);
    var payload = external === true
        ? {
            url: url,
            newContext: true,
        }
        : url;
    return function () {
        redirect.dispatch(redirectAction(target, external), payload);
    };
}
exports.generateRedirect = generateRedirect;
function redirectAction(target, external) {
    if (external === true) {
        return actions_1.Redirect.Action.REMOTE;
    }
    return actions_1.Redirect.Action[target];
}
function transformActions(appBridge, _a) {
    var primaryAction = _a.primaryAction, secondaryActions = _a.secondaryActions, actionGroups = _a.actionGroups;
    var primary = transformPrimaryAction(appBridge, primaryAction);
    var secondary = __spreadArrays(transformSecondaryActions(appBridge, secondaryActions), transformActionGroups(appBridge, actionGroups));
    return {
        primary: primary,
        secondary: secondary,
    };
}
exports.transformActions = transformActions;
function transformAction(appBridge, action) {
    var style = action.destructive === true ? actions_1.Button.Style.Danger : undefined;
    var button = actions_1.Button.create(appBridge, {
        label: action.content || '',
        disabled: action.disabled,
        loading: action.loading,
        style: style,
    });
    if (action.onAction) {
        button.subscribe(actions_1.Button.Action.CLICK, action.onAction);
    }
    var redirect = generateRedirect(appBridge, action.url, action.target, action.external);
    if (redirect != null) {
        button.subscribe(actions_1.Button.Action.CLICK, redirect);
    }
    return button;
}
function transformPrimaryAction(appBridge, primaryAction) {
    if (primaryAction == null) {
        return undefined;
    }
    var primary = transformAction(appBridge, primaryAction);
    return primary;
}
function transformSecondaryActions(appBridge, secondaryActions) {
    if (secondaryActions === void 0) { secondaryActions = []; }
    var secondary = __spreadArrays(secondaryActions.map(function (secondaryAction) {
        return transformAction(appBridge, secondaryAction);
    }));
    return secondary;
}
function transformActionGroups(appBridge, actionGroups) {
    if (actionGroups === void 0) { actionGroups = []; }
    var buttonGroups = __spreadArrays(actionGroups.map(function (group) {
        var buttons = group.actions.map(function (groupAction) {
            return transformAction(appBridge, groupAction);
        });
        return actions_1.ButtonGroup.create(appBridge, { label: group.title, buttons: buttons });
    }));
    return buttonGroups;
}


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/MessageTransport.js":
/*!**************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/MessageTransport.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransportListener = exports.fromWindow = exports.fromFrame = exports.Context = void 0;
var Error_1 = __webpack_require__(/*! ./actions/Error */ "./node_modules/@shopify/app-bridge/actions/Error/index.js");
var validator_1 = __webpack_require__(/*! ./actions/validator */ "./node_modules/@shopify/app-bridge/actions/validator.js");
var types_1 = __webpack_require__(/*! ./client/types */ "./node_modules/@shopify/app-bridge/client/types.js");
var collection_1 = __webpack_require__(/*! ./util/collection */ "./node_modules/@shopify/app-bridge/util/collection.js");
var env_1 = __webpack_require__(/*! ./util/env */ "./node_modules/@shopify/app-bridge/util/env.js");
var Context;
(function (Context) {
    Context["Modal"] = "Modal";
    Context["Main"] = "Main";
})(Context = exports.Context || (exports.Context = {}));
/**
 * Create a MessageTransport from an IFrame.
 * @remarks
 * Used on the host-side to create a postMessage MessageTransport.
 * @beta
 */
function fromFrame(frame, localOrigin, context) {
    var handlers = [];
    if (typeof frame === 'undefined' || !frame.ownerDocument || !frame.ownerDocument.defaultView) {
        throw Error_1.fromAction('App frame is undefined', Error_1.AppActionType.WINDOW_UNDEFINED);
    }
    var parent = frame.ownerDocument.defaultView;
    parent.addEventListener('message', function (event) {
        if (!validator_1.isAppMessage(event)) {
            return;
        }
        if (event.origin !== localOrigin) {
            var contentWindow = frame.contentWindow;
            if (contentWindow) {
                var errorMessage = "Message origin '" + event.origin + "' does not match app origin '" + localOrigin + "'.";
                var payload = Error_1.invalidOriginAction(errorMessage);
                var message = {
                    type: 'dispatch',
                    payload: payload,
                };
                contentWindow.postMessage(message, event.origin);
            }
            return;
        }
        for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
            var handler = handlers_1[_i];
            handler(event);
        }
    });
    return {
        context: context,
        localOrigin: localOrigin,
        frameWindow: frame.contentWindow,
        hostFrame: parent,
        dispatch: function (message) {
            var contentWindow = frame.contentWindow;
            if (contentWindow) {
                contentWindow.postMessage(message, localOrigin);
            }
        },
        subscribe: function (handler) {
            return collection_1.addAndRemoveFromCollection(handlers, handler);
        },
    };
}
exports.fromFrame = fromFrame;
/**
 * Create a MessageTransport from a parent window.
 * @remarks
 * Used on the client-side to create a postMessage MessageTransport.
 * @internalremarks
 * In frameless mode, message should be dispatched via SmartWebView.handleMessage instead of postMessage.
 * @beta
 */
function fromWindow(contentWindow, localOrigin) {
    var handlers = [];
    if (typeof window !== undefined) {
        window.addEventListener('message', function (event) {
            if ((window === contentWindow && !env_1.isFrameless) ||
                event.source !== contentWindow ||
                !(validator_1.isAppBridgeAction(event.data.payload) || validator_1.isAppMessage(event))) {
                return;
            }
            for (var _i = 0, handlers_2 = handlers; _i < handlers_2.length; _i++) {
                var handler = handlers_2[_i];
                handler(event);
            }
        });
    }
    return {
        localOrigin: localOrigin,
        hostFrame: contentWindow,
        dispatch: function (message) {
            if (!message.source || !message.source.shopOrigin) {
                return;
            }
            if (env_1.isFrameless && window && window.SmartWebView) {
                window.SmartWebView.handleMessage('frameless://fromClient', JSON.stringify(message));
                return;
            }
            var messageOrigin = "https://" + message.source.shopOrigin;
            contentWindow.postMessage(message, messageOrigin);
        },
        subscribe: function (handler) {
            return collection_1.addAndRemoveFromCollection(handlers, handler);
        },
    };
}
exports.fromWindow = fromWindow;
function createTransportListener() {
    var listeners = [];
    var actionListeners = {};
    function createSubscribeHandler(dispatcher) {
        function subscribe() {
            if (arguments.length < 2) {
                // eslint-disable-next-line prefer-rest-params
                return collection_1.addAndRemoveFromCollection(listeners, { callback: arguments[0] });
            }
            // eslint-disable-next-line prefer-rest-params
            var _a = Array.from(arguments), type = _a[0], callback = _a[1], id = _a[2];
            var actionCallback = { callback: callback, id: id };
            var payload = { type: type, id: id };
            if (!Object.prototype.hasOwnProperty.call(actionListeners, type)) {
                actionListeners[type] = [];
            }
            if (dispatcher) {
                dispatcher(types_1.MessageType.Subscribe, payload);
            }
            return collection_1.addAndRemoveFromCollection(actionListeners[type], actionCallback, function () {
                if (dispatcher) {
                    dispatcher(types_1.MessageType.Unsubscribe, payload);
                }
            });
        }
        return subscribe;
    }
    return {
        createSubscribeHandler: createSubscribeHandler,
        handleMessage: function (message) {
            listeners.forEach(function (listener) { return listener.callback(message); });
        },
        handleActionDispatch: function (_a) {
            var type = _a.type, payload = _a.payload;
            var hasCallback = false;
            if (Object.prototype.hasOwnProperty.call(actionListeners, type)) {
                for (var _i = 0, _b = actionListeners[type]; _i < _b.length; _i++) {
                    var listener = _b[_i];
                    var id = listener.id, callback = listener.callback;
                    var matchId = payload && payload.id === id;
                    if (matchId || !id) {
                        callback(payload);
                        hasCallback = true;
                    }
                }
            }
            return hasCallback;
        },
    };
}
exports.createTransportListener = createTransportListener;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/AuthCode/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/AuthCode/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.respond = exports.request = exports.Action = exports.ActionType = void 0;
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var ActionType;
(function (ActionType) {
    ActionType["REQUEST"] = "APP::AUTH_CODE::REQUEST";
    ActionType["RESPOND"] = "APP::AUTH_CODE::RESPOND";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var Action;
(function (Action) {
    Action["REQUEST"] = "REQUEST";
    Action["RESPOND"] = "RESPOND";
})(Action = exports.Action || (exports.Action = {}));
function request(id) {
    return helper_1.actionWrapper({
        group: types_1.Group.AuthCode,
        type: ActionType.REQUEST,
        payload: { id: id },
    });
}
exports.request = request;
function respond(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.AuthCode,
        type: ActionType.RESPOND,
    });
}
exports.respond = respond;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Button/actions.js":
/*!********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Button/actions.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.Button = exports.isValidButtonProps = exports.update = exports.clickButton = void 0;
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var types_2 = __webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/Button/types.js");
function clickButton(group, component, payload) {
    var id = component.id;
    var action = helper_1.getEventNameSpace(group, types_2.Action.CLICK, component);
    var buttonPayload = {
        id: id,
        payload: payload,
    };
    return helper_1.actionWrapper({ type: action, group: group, payload: buttonPayload });
}
exports.clickButton = clickButton;
function update(group, component, props) {
    var id = component.id;
    var label = props.label;
    var action = helper_1.getEventNameSpace(group, types_2.Action.UPDATE, component);
    var buttonPayload = __assign(__assign({}, props), { id: id,
        label: label });
    return helper_1.actionWrapper({ type: action, group: group, payload: buttonPayload });
}
exports.update = update;
function isValidButtonProps(button) {
    return typeof button.id === 'string' && typeof button.label === 'string';
}
exports.isValidButtonProps = isValidButtonProps;
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(app, options) {
        var _this = _super.call(this, app, types_1.ComponentType.Button, types_1.Group.Button) || this;
        _this.disabled = false;
        _this.loading = false;
        _this.set(options, false);
        return _this;
    }
    Object.defineProperty(Button.prototype, "options", {
        get: function () {
            return {
                disabled: this.disabled,
                icon: this.icon,
                label: this.label,
                style: this.style,
                loading: this.loading,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "payload", {
        get: function () {
            return __assign(__assign({}, this.options), { id: this.id });
        },
        enumerable: false,
        configurable: true
    });
    Button.prototype.set = function (options, shouldUpdate) {
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var label = mergedOptions.label, disabled = mergedOptions.disabled, icon = mergedOptions.icon, style = mergedOptions.style, loading = mergedOptions.loading;
        this.label = label;
        this.disabled = Boolean(disabled);
        this.icon = icon;
        this.style = style;
        this.loading = Boolean(loading);
        if (shouldUpdate) {
            this.dispatch(types_2.Action.UPDATE);
        }
        return this;
    };
    Button.prototype.dispatch = function (action, payload) {
        switch (action) {
            case types_2.Action.CLICK:
                this.app.dispatch(clickButton(this.group, this.component, payload));
                break;
            case types_2.Action.UPDATE:
                var updateAction = update(this.group, this.component, this.payload);
                this.app.dispatch(updateAction);
                break;
        }
        return this;
    };
    return Button;
}(helper_1.ActionSet));
exports.Button = Button;
function create(app, options) {
    return new Button(app, options);
}
exports.create = create;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Button/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Button/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./actions */ "./node_modules/@shopify/app-bridge/actions/Button/actions.js"), exports);
__exportStar(__webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/Button/types.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Button/types.js":
/*!******************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Button/types.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Style = exports.Icon = exports.ActionType = exports.Action = void 0;
var Action;
(function (Action) {
    Action["CLICK"] = "CLICK";
    Action["UPDATE"] = "UPDATE";
})(Action = exports.Action || (exports.Action = {}));
var ActionType;
(function (ActionType) {
    ActionType["CLICK"] = "APP::BUTTON::CLICK";
    ActionType["UPDATE"] = "APP::BUTTON::UPDATE";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var Icon;
(function (Icon) {
    Icon["Print"] = "print";
})(Icon = exports.Icon || (exports.Icon = {}));
var Style;
(function (Style) {
    Style["Danger"] = "danger";
})(Style = exports.Style || (exports.Style = {}));


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/ButtonGroup/actions.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/ButtonGroup/actions.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.ButtonGroup = exports.isGroupedButtonPayload = exports.isGroupedButton = exports.update = void 0;
var buttonHelper_1 = __webpack_require__(/*! ../buttonHelper */ "./node_modules/@shopify/app-bridge/actions/buttonHelper.js");
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var types_2 = __webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/ButtonGroup/types.js");
function update(group, component, props) {
    return buttonActionWrapper(group, component, types_2.Action.UPDATE, props);
}
exports.update = update;
function isGroupedButton(options) {
    var castOptions = options;
    return castOptions.buttons && castOptions.buttons.length > 0 && castOptions.label !== undefined;
}
exports.isGroupedButton = isGroupedButton;
function isGroupedButtonPayload(payload) {
    var castOptions = payload;
    return (Array.isArray(castOptions.buttons) &&
        typeof castOptions.id === 'string' &&
        typeof castOptions.label === 'string');
}
exports.isGroupedButtonPayload = isGroupedButtonPayload;
var ButtonGroup = /** @class */ (function (_super) {
    __extends(ButtonGroup, _super);
    function ButtonGroup(app, options) {
        var _this = _super.call(this, app, types_1.ComponentType.ButtonGroup, types_1.Group.ButtonGroup) || this;
        _this.disabled = false;
        _this.buttonsOptions = [];
        _this.buttons = [];
        _this.set(options, false);
        return _this;
    }
    Object.defineProperty(ButtonGroup.prototype, "options", {
        get: function () {
            return {
                buttons: this.buttonsOptions,
                disabled: this.disabled,
                label: this.label,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ButtonGroup.prototype, "payload", {
        get: function () {
            return __assign(__assign({}, this.options), { buttons: this.buttons, id: this.id });
        },
        enumerable: false,
        configurable: true
    });
    ButtonGroup.prototype.set = function (options, shouldUpdate) {
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var label = mergedOptions.label, disabled = mergedOptions.disabled, buttons = mergedOptions.buttons;
        this.label = label;
        this.disabled = Boolean(disabled);
        this.buttons = this.getButtons(buttons);
        if (shouldUpdate) {
            this.dispatch(types_2.Action.UPDATE);
        }
        return this;
    };
    ButtonGroup.prototype.dispatch = function (action) {
        switch (action) {
            case types_2.Action.UPDATE:
                var updateAction = update(this.group, this.component, this.payload);
                this.app.dispatch(updateAction);
                break;
        }
        return this;
    };
    ButtonGroup.prototype.updateButtons = function (newPayload) {
        if (!this.buttons || this.buttons.length === 0) {
            return;
        }
        var updated;
        for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
            var action = _a[_i];
            updated = helper_1.updateActionFromPayload(action, newPayload);
            if (updated) {
                break;
            }
        }
        if (updated) {
            this.dispatch(types_2.Action.UPDATE);
        }
    };
    ButtonGroup.prototype.getSingleButton = function (button) {
        return buttonHelper_1.getSingleButton(this, button, this.subgroups, this.updateButtons);
    };
    ButtonGroup.prototype.getButtons = function (buttonOptions) {
        var _this = this;
        var buttons = [];
        if (!buttonOptions) {
            return [];
        }
        buttonOptions.forEach(function (button) {
            var singleButton = buttonHelper_1.getSingleButton(_this, button, _this.subgroups, _this.updateButtons);
            buttons.push(singleButton);
        });
        this.buttonsOptions = buttonOptions;
        return buttons;
    };
    return ButtonGroup;
}(helper_1.ActionSetWithChildren));
exports.ButtonGroup = ButtonGroup;
function create(app, options) {
    return new ButtonGroup(app, options);
}
exports.create = create;
function buttonActionWrapper(group, component, eventName, props, payload) {
    var id = component.id;
    var label = props.label;
    var action = helper_1.getEventNameSpace(group, eventName, component);
    var buttonPayload = __assign(__assign({}, props), { id: id,
        label: label,
        payload: payload });
    return helper_1.actionWrapper({ type: action, group: group, payload: buttonPayload });
}


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/ButtonGroup/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/ButtonGroup/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./actions */ "./node_modules/@shopify/app-bridge/actions/ButtonGroup/actions.js"), exports);
__exportStar(__webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/ButtonGroup/types.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/ButtonGroup/types.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/ButtonGroup/types.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionType = exports.Action = void 0;
var Action;
(function (Action) {
    Action["UPDATE"] = "UPDATE";
})(Action = exports.Action || (exports.Action = {}));
var ActionType;
(function (ActionType) {
    ActionType["UPDATE"] = "APP::BUTTONGROUP::UPDATE";
})(ActionType = exports.ActionType || (exports.ActionType = {}));


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Cart/actions.js":
/*!******************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Cart/actions.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.Cart = void 0;
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var types_2 = __webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/Cart/types.js");
/**
 * Cart
 */
var Cart = /** @class */ (function (_super) {
    __extends(Cart, _super);
    function Cart(app, options) {
        return _super.call(this, app, types_1.Group.Cart, types_1.Group.Cart, options ? options.id : undefined) || this;
    }
    Cart.prototype.dispatch = function (action, payload) {
        switch (action) {
            case types_2.Action.FETCH:
                this.dispatchCartAction(types_2.ActionType.FETCH);
                break;
            case types_2.Action.UPDATE:
                this.dispatchCartAction(types_2.ActionType.UPDATE, payload);
                break;
            case types_2.Action.SET_CUSTOMER:
                this.dispatchCartAction(types_2.ActionType.SET_CUSTOMER, payload);
                break;
            case types_2.Action.REMOVE_CUSTOMER:
                this.dispatchCartAction(types_2.ActionType.REMOVE_CUSTOMER, payload);
                break;
            case types_2.Action.ADD_CUSTOMER_ADDRESS:
                this.dispatchCartAction(types_2.ActionType.ADD_CUSTOMER_ADDRESS, payload);
                break;
            case types_2.Action.UPDATE_CUSTOMER_ADDRESS:
                this.dispatchCartAction(types_2.ActionType.UPDATE_CUSTOMER_ADDRESS, payload);
                break;
            case types_2.Action.SET_DISCOUNT:
                this.dispatchCartAction(types_2.ActionType.SET_DISCOUNT, payload);
                break;
            case types_2.Action.REMOVE_DISCOUNT:
                this.dispatchCartAction(types_2.ActionType.REMOVE_DISCOUNT, payload);
                break;
            case types_2.Action.SET_PROPERTIES:
                this.dispatchCartAction(types_2.ActionType.SET_PROPERTIES, payload);
                break;
            case types_2.Action.REMOVE_PROPERTIES:
                this.dispatchCartAction(types_2.ActionType.REMOVE_PROPERTIES, payload);
                break;
            case types_2.Action.CLEAR:
                this.dispatchCartAction(types_2.ActionType.CLEAR, payload);
                break;
            case types_2.Action.ADD_LINE_ITEM:
                this.dispatchCartAction(types_2.ActionType.ADD_LINE_ITEM, payload);
                break;
            case types_2.Action.UPDATE_LINE_ITEM:
                this.dispatchCartAction(types_2.ActionType.UPDATE_LINE_ITEM, payload);
                break;
            case types_2.Action.REMOVE_LINE_ITEM:
                this.dispatchCartAction(types_2.ActionType.REMOVE_LINE_ITEM, payload);
                break;
            case types_2.Action.SET_LINE_ITEM_DISCOUNT:
                this.dispatchCartAction(types_2.ActionType.SET_LINE_ITEM_DISCOUNT, payload);
                break;
            case types_2.Action.REMOVE_LINE_ITEM_DISCOUNT:
                this.dispatchCartAction(types_2.ActionType.REMOVE_LINE_ITEM_DISCOUNT, payload);
                break;
            case types_2.Action.SET_LINE_ITEM_PROPERTIES:
                this.dispatchCartAction(types_2.ActionType.SET_LINE_ITEM_PROPERTIES, payload);
                break;
            case types_2.Action.REMOVE_LINE_ITEM_PROPERTIES:
                this.dispatchCartAction(types_2.ActionType.REMOVE_LINE_ITEM_PROPERTIES, payload);
                break;
        }
        return this;
    };
    Cart.prototype.dispatchCartAction = function (type, payload) {
        this.app.dispatch(helper_1.actionWrapper({
            type: type,
            group: types_1.Group.Cart,
            payload: __assign(__assign({}, (payload || {})), { id: this.id }),
        }));
    };
    return Cart;
}(helper_1.ActionSet));
exports.Cart = Cart;
function create(app, options) {
    return new Cart(app, options);
}
exports.create = create;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Cart/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Cart/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./actions */ "./node_modules/@shopify/app-bridge/actions/Cart/actions.js"), exports);
__exportStar(__webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/Cart/types.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Cart/types.js":
/*!****************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Cart/types.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = exports.ActionType = void 0;
var ActionType;
(function (ActionType) {
    ActionType["FETCH"] = "APP::CART::FETCH";
    ActionType["UPDATE"] = "APP::CART::UPDATE";
    ActionType["SET_CUSTOMER"] = "APP::CART::SET_CUSTOMER";
    ActionType["REMOVE_CUSTOMER"] = "APP::CART::REMOVE_CUSTOMER";
    ActionType["ADD_CUSTOMER_ADDRESS"] = "APP::CART::ADD_CUSTOMER_ADDRESS";
    ActionType["UPDATE_CUSTOMER_ADDRESS"] = "APP::CART::UPDATE_CUSTOMER_ADDRESS";
    ActionType["SET_DISCOUNT"] = "APP::CART::SET_DISCOUNT";
    ActionType["REMOVE_DISCOUNT"] = "APP::CART::REMOVE_DISCOUNT";
    ActionType["SET_PROPERTIES"] = "APP::CART::SET_PROPERTIES";
    ActionType["REMOVE_PROPERTIES"] = "APP::CART::REMOVE_PROPERTIES";
    ActionType["CLEAR"] = "APP::CART::CLEAR";
    ActionType["ADD_LINE_ITEM"] = "APP::CART::ADD_LINE_ITEM";
    ActionType["UPDATE_LINE_ITEM"] = "APP::CART::UPDATE_LINE_ITEM";
    ActionType["REMOVE_LINE_ITEM"] = "APP::CART::REMOVE_LINE_ITEM";
    ActionType["SET_LINE_ITEM_DISCOUNT"] = "APP::CART::SET_LINE_ITEM_DISCOUNT";
    ActionType["REMOVE_LINE_ITEM_DISCOUNT"] = "APP::CART::REMOVE_LINE_ITEM_DISCOUNT";
    ActionType["SET_LINE_ITEM_PROPERTIES"] = "APP::CART::SET_LINE_ITEM_PROPERTIES";
    ActionType["REMOVE_LINE_ITEM_PROPERTIES"] = "APP::CART::REMOVE_LINE_ITEM_PROPERTIES";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var Action;
(function (Action) {
    Action["FETCH"] = "FETCH";
    Action["UPDATE"] = "UPDATE";
    Action["SET_CUSTOMER"] = "SET_CUSTOMER";
    Action["REMOVE_CUSTOMER"] = "REMOVE_CUSTOMER";
    Action["ADD_CUSTOMER_ADDRESS"] = "ADD_CUSTOMER_ADDRESS";
    Action["UPDATE_CUSTOMER_ADDRESS"] = "UPDATE_CUSTOMER_ADDRESS";
    Action["SET_DISCOUNT"] = "SET_DISCOUNT";
    Action["REMOVE_DISCOUNT"] = "REMOVE_DISCOUNT";
    Action["SET_PROPERTIES"] = "SET_PROPERTIES";
    Action["REMOVE_PROPERTIES"] = "REMOVE_PROPERTIES";
    Action["CLEAR"] = "CLEAR";
    Action["ADD_LINE_ITEM"] = "ADD_LINE_ITEM";
    Action["UPDATE_LINE_ITEM"] = "UPDATE_LINE_ITEM";
    Action["REMOVE_LINE_ITEM"] = "REMOVE_LINE_ITEM";
    Action["SET_LINE_ITEM_DISCOUNT"] = "SET_LINE_ITEM_DISCOUNT";
    Action["REMOVE_LINE_ITEM_DISCOUNT"] = "REMOVE_LINE_ITEM_DISCOUNT";
    Action["SET_LINE_ITEM_PROPERTIES"] = "SET_LINE_ITEM_PROPERTIES";
    Action["REMOVE_LINE_ITEM_PROPERTIES"] = "REMOVE_LINE_ITEM_PROPERTIES";
})(Action = exports.Action || (exports.Action = {}));


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/ContextualSaveBar/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/ContextualSaveBar/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.ContextualSaveBar = exports.discard = exports.save = exports.hide = exports.show = exports.ActionType = exports.Action = void 0;
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
/**
 * ContextualSaveBar action enum
 */
var Action;
(function (Action) {
    Action["DISCARD"] = "DISCARD";
    Action["SAVE"] = "SAVE";
    Action["SHOW"] = "SHOW";
    Action["HIDE"] = "HIDE";
    Action["UPDATE"] = "UPDATE";
})(Action = exports.Action || (exports.Action = {}));
/**
 * ContextualSaveBar action type enum
 * @remarks includes the action prefix and group
 *
 */
var ActionType;
(function (ActionType) {
    ActionType["DISCARD"] = "APP::CONTEXTUAL_SAVE_BAR::DISCARD";
    ActionType["SAVE"] = "APP::CONTEXTUAL_SAVE_BAR::SAVE";
    ActionType["SHOW"] = "APP::CONTEXTUAL_SAVE_BAR::SHOW";
    ActionType["HIDE"] = "APP::CONTEXTUAL_SAVE_BAR::HIDE";
    ActionType["UPDATE"] = "APP::CONTEXTUAL_SAVE_BAR::UPDATE";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
function createContextBarAction(action, payload) {
    return helper_1.actionWrapper({
        group: types_1.Group.ContextualSaveBar,
        type: ActionType[action],
        payload: payload,
    });
}
function show(payload) {
    return createContextBarAction(Action.SHOW, payload);
}
exports.show = show;
function hide(payload) {
    return createContextBarAction(Action.HIDE, payload);
}
exports.hide = hide;
function save(payload) {
    return createContextBarAction(Action.SAVE, payload);
}
exports.save = save;
function discard(payload) {
    return createContextBarAction(Action.DISCARD, payload);
}
exports.discard = discard;
/**
 * ContextualSaveBar action set
 */
var ContextualSaveBar = /** @class */ (function (_super) {
    __extends(ContextualSaveBar, _super);
    /**
     * Returns a new instance of a ContextualSaveBar action set
     * @param app the client application
     */
    function ContextualSaveBar(app, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, app, types_1.Group.ContextualSaveBar, types_1.Group.ContextualSaveBar) || this;
        _this.options = options;
        _this.set(options, false);
        return _this;
    }
    Object.defineProperty(ContextualSaveBar.prototype, "payload", {
        /**
         * Returns the action set payload
         */
        get: function () {
            return __assign({ id: this.id }, this.options);
        },
        enumerable: false,
        configurable: true
    });
    ContextualSaveBar.prototype.set = function (options, shouldUpdate) {
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        this.options = mergedOptions;
        if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
        }
        return this;
    };
    /**
     * Dispatches a given action with the action set payload
     * @param action the action enum
     * @returns the action set instance
     */
    ContextualSaveBar.prototype.dispatch = function (action) {
        this.app.dispatch(createContextBarAction(action, this.payload));
        return this;
    };
    return ContextualSaveBar;
}(helper_1.ActionSet));
exports.ContextualSaveBar = ContextualSaveBar;
/**
 * Returns a new instance of a ContextualSaveBar action set
 * @param app the client application
 *
 */
function create(app, options) {
    return new ContextualSaveBar(app, options);
}
exports.create = create;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Error/actions.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Error/actions.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.throwError = exports.fromAction = exports.AppBridgeError = exports.invalidOriginAction = exports.isErrorEventName = exports.permissionAction = exports.networkAction = exports.persistenceAction = exports.unsupportedOperationAction = exports.unexpectedAction = exports.invalidAction = exports.invalidActionType = exports.invalidPayload = exports.Message = void 0;
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var types_2 = __webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/Error/types.js");
function errorActionWrapperWithId(type, action, message) {
    var castPayload = action.payload;
    return helper_1.actionWrapper({
        type: type,
        group: types_1.Group.Error,
        payload: {
            action: action,
            message: message,
            type: type,
            id: castPayload && castPayload.id ? castPayload.id : undefined,
        },
    });
}
var Message;
(function (Message) {
    Message["MISSING_PAYLOAD"] = "Missing payload";
    Message["INVALID_PAYLOAD_ID"] = "Id in payload is missing or invalid";
})(Message = exports.Message || (exports.Message = {}));
function invalidPayload(action, message) {
    return errorActionWrapperWithId(types_2.ActionType.INVALID_PAYLOAD, action, message || "The action's payload is missing required properties or has invalid properties");
}
exports.invalidPayload = invalidPayload;
function invalidActionType(action, message) {
    return helper_1.actionWrapper({
        group: types_1.Group.Error,
        payload: {
            action: action,
            message: message || 'The action type is invalid or unsupported',
            type: types_2.ActionType.INVALID_ACTION_TYPE,
        },
        type: types_2.ActionType.INVALID_ACTION_TYPE,
    });
}
exports.invalidActionType = invalidActionType;
function invalidAction(action, message) {
    return helper_1.actionWrapper({
        group: types_1.Group.Error,
        payload: {
            action: action,
            message: message || "The action's has missing/invalid values for `group`, `type` or `version`",
            type: types_2.ActionType.INVALID_ACTION,
        },
        type: types_2.ActionType.INVALID_ACTION,
    });
}
exports.invalidAction = invalidAction;
function unexpectedAction(action, message) {
    return helper_1.actionWrapper({
        group: types_1.Group.Error,
        payload: {
            action: action,
            message: message || 'Action cannot be called at this time',
            type: types_2.ActionType.UNEXPECTED_ACTION,
        },
        type: types_2.ActionType.UNEXPECTED_ACTION,
    });
}
exports.unexpectedAction = unexpectedAction;
function unsupportedOperationAction(action, message) {
    return errorActionWrapperWithId(types_2.ActionType.UNSUPPORTED_OPERATION, action, message || 'The action type is unsupported');
}
exports.unsupportedOperationAction = unsupportedOperationAction;
function persistenceAction(action, message) {
    return errorActionWrapperWithId(types_2.ActionType.PERSISTENCE, action, message || 'Action cannot be persisted on server');
}
exports.persistenceAction = persistenceAction;
function networkAction(action, message) {
    return errorActionWrapperWithId(types_2.ActionType.NETWORK, action, message || 'Network error');
}
exports.networkAction = networkAction;
function permissionAction(action, message) {
    return errorActionWrapperWithId(types_2.ActionType.PERMISSION, action, message || 'Action is not permitted');
}
exports.permissionAction = permissionAction;
function isErrorEventName(eventName) {
    var match = helper_1.findMatchInEnum(types_2.Action, eventName);
    return typeof match === 'string';
}
exports.isErrorEventName = isErrorEventName;
function invalidOriginAction(message) {
    return helper_1.actionWrapper({
        group: types_1.Group.Error,
        payload: {
            message: message,
            type: types_2.ActionType.INVALID_ORIGIN,
        },
        type: types_2.ActionType.INVALID_ORIGIN,
    });
}
exports.invalidOriginAction = invalidOriginAction;
var AppBridgeError = /** @class */ (function () {
    function AppBridgeError(message) {
        this.name = 'AppBridgeError';
        this.message = message;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        }
        else {
            this.stack = new Error(this.message).stack;
        }
    }
    return AppBridgeError;
}());
exports.AppBridgeError = AppBridgeError;
AppBridgeError.prototype = Object.create(Error.prototype);
function fromAction(message, type, action) {
    var errorMessage = message ? type + ": " + message : type;
    var error = new AppBridgeError(errorMessage);
    error.action = action;
    error.type = type;
    return error;
}
exports.fromAction = fromAction;
function throwError() {
    var type = arguments[0];
    var message;
    var action;
    if (typeof arguments[1] === 'string') {
        message = arguments[1];
    }
    else {
        action = arguments[1];
        message = arguments[2] || '';
    }
    throw fromAction(message, type, action);
}
exports.throwError = throwError;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Error/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Error/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./actions */ "./node_modules/@shopify/app-bridge/actions/Error/actions.js"), exports);
__exportStar(__webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/Error/types.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Error/types.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Error/types.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppActionType = exports.ActionType = exports.Action = void 0;
var Action;
(function (Action) {
    Action["INVALID_ACTION"] = "INVALID_ACTION";
    Action["INVALID_ACTION_TYPE"] = "INVALID_ACTION_TYPE";
    Action["INVALID_OPTIONS"] = "INVALID_OPTIONS";
    Action["INVALID_PAYLOAD"] = "INVALID_PAYLOAD";
    Action["UNEXPECTED_ACTION"] = "UNEXPECTED_ACTION";
    Action["PERSISTENCE"] = "PERSISTENCE";
    Action["UNSUPPORTED_OPERATION"] = "UNSUPPORTED_OPERATION";
    Action["NETWORK"] = "NETWORK";
    Action["PERMISSION"] = "PERMISSION";
})(Action = exports.Action || (exports.Action = {}));
// Errors triggered in response to an action
var ActionType;
(function (ActionType) {
    ActionType["INVALID_ACTION"] = "APP::ERROR::INVALID_ACTION";
    ActionType["INVALID_ACTION_TYPE"] = "APP::ERROR::INVALID_ACTION_TYPE";
    ActionType["INVALID_PAYLOAD"] = "APP::ERROR::INVALID_PAYLOAD";
    ActionType["INVALID_OPTIONS"] = "APP::ERROR::INVALID_OPTIONS";
    ActionType["UNEXPECTED_ACTION"] = "APP::ERROR::UNEXPECTED_ACTION";
    ActionType["PERSISTENCE"] = "APP::ERROR::PERSISTENCE";
    ActionType["UNSUPPORTED_OPERATION"] = "APP::ERROR::UNSUPPORTED_OPERATION";
    ActionType["NETWORK"] = "APP::ERROR::NETWORK";
    ActionType["PERMISSION"] = "APP::ERROR::PERMISSION";
    ActionType["FAILED_AUTHENTICATION"] = "APP::ERROR::FAILED_AUTHENTICATION";
    ActionType["INVALID_ORIGIN"] = "APP::ERROR::INVALID_ORIGIN";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
// Errors thrown in response to app setup
var AppActionType;
(function (AppActionType) {
    AppActionType["INVALID_CONFIG"] = "APP::ERROR::INVALID_CONFIG";
    AppActionType["MISSING_CONFIG"] = "APP::APP_ERROR::MISSING_CONFIG";
    AppActionType["MISSING_APP_BRIDGE_MIDDLEWARE"] = "APP::APP_ERROR::MISSING_APP_BRIDGE_MIDDLEWARE";
    AppActionType["WINDOW_UNDEFINED"] = "APP::APP_ERROR::WINDOW_UNDEFINED";
    AppActionType["MISSING_LOCAL_ORIGIN"] = "APP::APP_ERROR::MISSING_LOCAL_ORIGIN";
    AppActionType["MISSING_HOST_PROVIDER"] = "APP::APP_ERROR::MISSING_HOST_PROVIDER";
    AppActionType["MISSING_ROUTER_CONTEXT"] = "APP::APP_ERROR::MISSING_ROUTER_CONTEXT";
    AppActionType["MISSING_HISTORY_BLOCK"] = "APP::APP_ERROR::MISSING_HISTORY_BLOCK";
})(AppActionType = exports.AppActionType || (exports.AppActionType = {}));


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Features/actions.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Features/actions.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.Features = void 0;
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var types_2 = __webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/Features/types.js");
/**
 * A set of Actions for Updating, Requesting Features of AppBridge
 * @public
 */
var Features = /** @class */ (function (_super) {
    __extends(Features, _super);
    function Features(app, options) {
        return _super.call(this, app, types_1.Group.Features, types_1.Group.Features, options ? options.id : undefined) || this;
    }
    /**
     * @public
     */
    Features.prototype.dispatch = function (action, payload) {
        switch (action) {
            case types_2.Action.REQUEST:
                this.dispatchFeaturesAction(types_2.ActionType.REQUEST, payload);
                break;
        }
        return this;
    };
    /**
     * @internal
     */
    Features.prototype.dispatchFeaturesAction = function (type, payload) {
        this.app.dispatch(helper_1.actionWrapper({
            group: types_1.Group.Features,
            type: type,
            payload: __assign(__assign({}, (payload || {})), { id: this.id }),
        }));
    };
    return Features;
}(helper_1.ActionSet));
exports.Features = Features;
/**
 * @public
 */
function create(app, options) {
    return new Features(app, options);
}
exports.create = create;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Features/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Features/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./actions */ "./node_modules/@shopify/app-bridge/actions/Features/actions.js"), exports);
__exportStar(__webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/Features/types.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Features/types.js":
/*!********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Features/types.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = exports.ActionType = void 0;
/**
 * Action Types for the Features group
 * @public
 */
var ActionType;
(function (ActionType) {
    ActionType["UPDATE"] = "APP::FEATURES::UPDATE";
    ActionType["REQUEST"] = "APP::FEATURES::REQUEST";
    ActionType["REQUEST_UPDATE"] = "APP::FEATURES::REQUEST::UPDATE";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
/**
 * Actions available to the Features group
 * @public
 */
var Action;
(function (Action) {
    Action["UPDATE"] = "UPDATE";
    Action["REQUEST"] = "REQUEST";
    Action["REQUEST_UPDATE"] = "REQUEST::UPDATE";
})(Action = exports.Action || (exports.Action = {}));


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/FeedbackModal/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/FeedbackModal/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.FeedbackModal = exports.close = exports.open = exports.ActionType = exports.Action = void 0;
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
/**
 * Action for the Feedback Modal group
 * @public
 */
var Action;
(function (Action) {
    Action["OPEN"] = "OPEN";
    Action["CLOSE"] = "CLOSE";
})(Action = exports.Action || (exports.Action = {}));
/**
 * Action types for the Feedback Modal group
 * @public
 */
var ActionType;
(function (ActionType) {
    ActionType["OPEN"] = "APP::FEEDBACK_MODAL::OPEN";
    ActionType["CLOSE"] = "APP::FEEDBACK_MODAL::CLOSE";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
function open(payload) {
    return helper_1.actionWrapper({
        group: types_1.Group.FeedbackModal,
        payload: payload,
        type: ActionType.OPEN,
    });
}
exports.open = open;
function close(payload) {
    return helper_1.actionWrapper({
        group: types_1.Group.FeedbackModal,
        payload: payload,
        type: ActionType.CLOSE,
    });
}
exports.close = close;
/**
 * FeedbackModal action set
 */
var FeedbackModal = /** @class */ (function (_super) {
    __extends(FeedbackModal, _super);
    /**
     * Returns a new instance of a FeedbackModal action set
     * @param app the client application
     */
    function FeedbackModal(app, options) {
        var _this = _super.call(this, app, types_1.Group.FeedbackModal, types_1.Group.FeedbackModal) || this;
        _this.options = options;
        _this.set(options);
        return _this;
    }
    Object.defineProperty(FeedbackModal.prototype, "payload", {
        /**
         * Returns the action set payload
         */
        get: function () {
            return __assign({ id: this.id }, this.options);
        },
        enumerable: false,
        configurable: true
    });
    FeedbackModal.prototype.set = function (options) {
        this.options = helper_1.getMergedProps(this.options, options);
        return this;
    };
    /**
     * Dispatches a given action with the action set payload
     * @param action the action enum
     * @returns the action set instance
     */
    FeedbackModal.prototype.dispatch = function (action) {
        switch (action) {
            case Action.OPEN:
                var openAction = open(this.payload);
                this.app.dispatch(openAction);
                break;
            case Action.CLOSE:
                var closeAction = close(this.payload);
                this.app.dispatch(closeAction);
                break;
        }
        return this;
    };
    return FeedbackModal;
}(helper_1.ActionSet));
exports.FeedbackModal = FeedbackModal;
/**
 * Returns a new instance of a FeedbackModal action set
 * @param app the client application
 */
function create(app, options) {
    return new FeedbackModal(app, options);
}
exports.create = create;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Flash/actions.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Flash/actions.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.Flash = void 0;
var Toast_1 = __webpack_require__(/*! ../Toast */ "./node_modules/@shopify/app-bridge/actions/Toast/index.js");
var Toast_2 = __webpack_require__(/*! ../Toast */ "./node_modules/@shopify/app-bridge/actions/Toast/index.js");
Object.defineProperty(exports, "clear", { enumerable: true, get: function () { return Toast_2.clear; } });
Object.defineProperty(exports, "show", { enumerable: true, get: function () { return Toast_2.show; } });
var Flash = /** @class */ (function (_super) {
    __extends(Flash, _super);
    function Flash() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Flash;
}(Toast_1.Toast));
exports.Flash = Flash;
function create(app, options) {
    return new Flash(app, options);
}
exports.create = create;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Flash/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Flash/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./actions */ "./node_modules/@shopify/app-bridge/actions/Flash/actions.js"), exports);
__exportStar(__webpack_require__(/*! ../Toast/types */ "./node_modules/@shopify/app-bridge/actions/Toast/types.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Fullscreen/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Fullscreen/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.Fullscreen = exports.exit = exports.enter = exports.ActionType = exports.Action = void 0;
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
/**
 * Fullscreen action enum
 * @beta
 */
var Action;
(function (Action) {
    Action["ENTER"] = "ENTER";
    Action["EXIT"] = "EXIT";
})(Action = exports.Action || (exports.Action = {}));
/**
 * Fullscreen action type enum
 * @remarks includes the action prefix and group
 *
 * @beta
 */
var ActionType;
(function (ActionType) {
    ActionType["ENTER"] = "APP::FULLSCREEN::ENTER";
    ActionType["EXIT"] = "APP::FULLSCREEN::EXIT";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
function enter() {
    return helper_1.actionWrapper({
        group: types_1.Group.Fullscreen,
        type: ActionType.ENTER,
    });
}
exports.enter = enter;
function exit() {
    return helper_1.actionWrapper({
        group: types_1.Group.Fullscreen,
        type: ActionType.EXIT,
    });
}
exports.exit = exit;
/**
 * Fullscreen action set
 * @beta
 */
var Fullscreen = /** @class */ (function (_super) {
    __extends(Fullscreen, _super);
    /**
     * Returns a new instance of a Fullscreen action set
     * @param app the client application
     */
    function Fullscreen(app) {
        return _super.call(this, app, types_1.Group.Fullscreen, types_1.Group.Fullscreen) || this;
    }
    Object.defineProperty(Fullscreen.prototype, "payload", {
        /**
         * Returns the action set payload
         */
        get: function () {
            return { id: this.id };
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Dispatches a given action with the action set payload
     * @param action the action enum
     * @returns the action set instance
     */
    Fullscreen.prototype.dispatch = function (action) {
        this.app.dispatch(helper_1.actionWrapper({
            group: this.group,
            type: ActionType[action],
            payload: this.payload,
        }));
        return this;
    };
    return Fullscreen;
}(helper_1.ActionSet));
exports.Fullscreen = Fullscreen;
/**
 * Returns a new instance of a Fullscreen action set
 * @param app the client application
 *
 * @beta
 */
function create(app) {
    return new Fullscreen(app);
}
exports.create = create;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/LeaveConfirmation/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/LeaveConfirmation/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.LeaveConfirmation = exports.confirm = exports.disable = exports.enable = exports.ActionType = exports.Action = void 0;
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
/**
 * Action for the Leave Confirmation group
 * @public
 */
var Action;
(function (Action) {
    Action["ENABLE"] = "ENABLE";
    Action["DISABLE"] = "DISABLE";
    Action["CONFIRM"] = "CONFIRM";
})(Action = exports.Action || (exports.Action = {}));
/**
 * Action types for the Leave Confirmation group
 * @public
 */
var ActionType;
(function (ActionType) {
    ActionType["ENABLE"] = "APP::LEAVE_CONFIRMATION::ENABLE";
    ActionType["DISABLE"] = "APP::LEAVE_CONFIRMATION::DISABLE";
    ActionType["CONFIRM"] = "APP::LEAVE_CONFIRMATION::CONFIRM";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
function enable(payload) {
    if (payload === void 0) { payload = {}; }
    return helper_1.actionWrapper({
        group: types_1.Group.LeaveConfirmation,
        payload: payload,
        type: ActionType.ENABLE,
    });
}
exports.enable = enable;
function disable(payload) {
    if (payload === void 0) { payload = {}; }
    return helper_1.actionWrapper({
        group: types_1.Group.LeaveConfirmation,
        payload: payload,
        type: ActionType.DISABLE,
    });
}
exports.disable = disable;
function confirm(payload) {
    if (payload === void 0) { payload = {}; }
    return helper_1.actionWrapper({
        group: types_1.Group.LeaveConfirmation,
        payload: payload,
        type: ActionType.CONFIRM,
    });
}
exports.confirm = confirm;
/**
 * Leave Confirmation action set
 */
var LeaveConfirmation = /** @class */ (function (_super) {
    __extends(LeaveConfirmation, _super);
    /**
     * Returns a new instance of a Leave Confirmation action set
     * @param app the client application
     */
    function LeaveConfirmation(app, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, app, types_1.Group.LeaveConfirmation, types_1.Group.LeaveConfirmation) || this;
        _this.options = options;
        _this.set(options);
        return _this;
    }
    Object.defineProperty(LeaveConfirmation.prototype, "payload", {
        /**
         * Returns the action set payload
         */
        get: function () {
            return __assign({ id: this.id }, this.options);
        },
        enumerable: false,
        configurable: true
    });
    LeaveConfirmation.prototype.set = function (options) {
        this.options = helper_1.getMergedProps(this.options, options);
        return this;
    };
    /**
     * Dispatches a given action with the action set payload
     * @param action the action enum
     * @returns the action set instance
     */
    LeaveConfirmation.prototype.dispatch = function (action) {
        switch (action) {
            case Action.ENABLE:
                var enableAction = enable(this.payload);
                this.app.dispatch(enableAction);
                break;
            case Action.DISABLE:
                var disableAction = disable(this.payload);
                this.app.dispatch(disableAction);
                break;
            case Action.CONFIRM:
                var confirmAction = confirm(this.payload);
                this.app.dispatch(confirmAction);
                break;
        }
        return this;
    };
    return LeaveConfirmation;
}(helper_1.ActionSet));
exports.LeaveConfirmation = LeaveConfirmation;
/**
 * Returns a new instance of a Leave Confirmation action set
 * @param app the client application
 */
function create(app, options) {
    if (options === void 0) { options = {}; }
    return new LeaveConfirmation(app, options);
}
exports.create = create;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Link/AppLink/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Link/AppLink/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.AppLink = exports.update = exports.ActionType = exports.Action = void 0;
var helper_1 = __webpack_require__(/*! ../../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var Redirect_1 = __webpack_require__(/*! ../../Navigation/Redirect */ "./node_modules/@shopify/app-bridge/actions/Navigation/Redirect/index.js");
var Action;
(function (Action) {
    Action["UPDATE"] = "UPDATE";
})(Action = exports.Action || (exports.Action = {}));
var ActionType;
(function (ActionType) {
    ActionType["UPDATE"] = "APP::LINK::UPDATE";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
function update(updatePayload) {
    return helper_1.actionWrapper({
        group: types_1.Group.Link,
        type: ActionType.UPDATE,
        payload: updatePayload,
    });
}
exports.update = update;
var AppLink = /** @class */ (function (_super) {
    __extends(AppLink, _super);
    function AppLink(app, options) {
        var _this = _super.call(this, app, types_1.Group.Link, types_1.Group.Link) || this;
        _this.label = '';
        _this.destination = '';
        _this.set(options, false);
        return _this;
    }
    Object.defineProperty(AppLink.prototype, "options", {
        get: function () {
            var _a = this, label = _a.label, destination = _a.destination;
            return {
                label: label,
                destination: destination,
                redirectType: Redirect_1.Action.APP,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppLink.prototype, "payload", {
        get: function () {
            var _a = this.options, label = _a.label, destination = _a.destination, redirectType = _a.redirectType;
            var path = destination;
            return {
                id: this.id,
                label: label,
                destination: { path: path },
                redirectType: redirectType,
            };
        },
        enumerable: false,
        configurable: true
    });
    AppLink.prototype.set = function (options, shouldUpdate) {
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var _a = helper_1.getMergedProps(this.options, options), label = _a.label, destination = _a.destination;
        this.label = label;
        this.destination = destination;
        if (shouldUpdate) {
            this.dispatch(ActionType.UPDATE);
        }
        return this;
    };
    AppLink.prototype.dispatch = function (action) {
        switch (action) {
            case ActionType.UPDATE:
                this.app.dispatch(update(this.payload));
                break;
        }
        return this;
    };
    return AppLink;
}(helper_1.ActionSet));
exports.AppLink = AppLink;
function create(app, options) {
    return new AppLink(app, options);
}
exports.create = create;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Loading/actions.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Loading/actions.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.Loading = exports.stop = exports.start = void 0;
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var types_2 = __webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/Loading/types.js");
function start(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Loading,
        type: types_2.ActionType.START,
    });
}
exports.start = start;
function stop(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Loading,
        type: types_2.ActionType.STOP,
    });
}
exports.stop = stop;
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading(app) {
        return _super.call(this, app, types_1.Group.Loading, types_1.Group.Loading) || this;
    }
    Object.defineProperty(Loading.prototype, "payload", {
        get: function () {
            return { id: this.id };
        },
        enumerable: false,
        configurable: true
    });
    Loading.prototype.dispatch = function (action) {
        switch (action) {
            case types_2.Action.START:
                this.app.dispatch(start(this.payload));
                break;
            case types_2.Action.STOP:
                this.app.dispatch(stop(this.payload));
                break;
        }
        return this;
    };
    return Loading;
}(helper_1.ActionSet));
exports.Loading = Loading;
function create(app) {
    return new Loading(app);
}
exports.create = create;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Loading/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Loading/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./actions */ "./node_modules/@shopify/app-bridge/actions/Loading/actions.js"), exports);
__exportStar(__webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/Loading/types.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Loading/types.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Loading/types.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = exports.ActionType = void 0;
var ActionType;
(function (ActionType) {
    ActionType["START"] = "APP::LOADING::START";
    ActionType["STOP"] = "APP::LOADING::STOP";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var Action;
(function (Action) {
    Action["START"] = "START";
    Action["STOP"] = "STOP";
})(Action = exports.Action || (exports.Action = {}));


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/MarketingExternalActivityTopBar/index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/MarketingExternalActivityTopBar/index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.MarketingExternalActivityTopBar = exports.update = exports.clickActionButton = exports.MarketingActivityStatusBadgeType = exports.ActionType = exports.Action = void 0;
var Button_1 = __webpack_require__(/*! ../Button */ "./node_modules/@shopify/app-bridge/actions/Button/index.js");
var buttonHelper_1 = __webpack_require__(/*! ../buttonHelper */ "./node_modules/@shopify/app-bridge/actions/buttonHelper.js");
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var Action;
(function (Action) {
    Action["UPDATE"] = "UPDATE";
})(Action = exports.Action || (exports.Action = {}));
var ActionType;
(function (ActionType) {
    ActionType["UPDATE"] = "APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::UPDATE";
    ActionType["BUTTON_CLICK"] = "APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::BUTTONS::BUTTON::CLICK";
    ActionType["BUTTON_UPDATE"] = "APP::MARKETING_EXTERNAL_ACTIVITY_TOP_BAR::BUTTONS::BUTTON::UPDATE";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var MarketingActivityStatusBadgeType;
(function (MarketingActivityStatusBadgeType) {
    MarketingActivityStatusBadgeType["Default"] = "DEFAULT";
    MarketingActivityStatusBadgeType["Success"] = "SUCCESS";
    MarketingActivityStatusBadgeType["Attention"] = "ATTENTION";
    MarketingActivityStatusBadgeType["Warning"] = "WARNING";
    MarketingActivityStatusBadgeType["Info"] = "INFO";
})(MarketingActivityStatusBadgeType = exports.MarketingActivityStatusBadgeType || (exports.MarketingActivityStatusBadgeType = {}));
var MARKETING_ACTIVITY_TOPBAR_BUTTON_PROPS = {
    group: types_1.Group.MarketingExternalActivityTopBar,
    subgroups: ['Buttons'],
};
function clickActionButton(id, payload) {
    var type = types_1.ComponentType.Button;
    var component = __assign({ id: id, type: type }, MARKETING_ACTIVITY_TOPBAR_BUTTON_PROPS);
    return Button_1.clickButton(types_1.Group.MarketingExternalActivityTopBar, component, payload);
}
exports.clickActionButton = clickActionButton;
function update(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.MarketingExternalActivityTopBar,
        type: ActionType.UPDATE,
    });
}
exports.update = update;
var MarketingExternalActivityTopBar = /** @class */ (function (_super) {
    __extends(MarketingExternalActivityTopBar, _super);
    function MarketingExternalActivityTopBar(app, options) {
        var _this = _super.call(this, app, types_1.Group.MarketingExternalActivityTopBar, types_1.Group.MarketingExternalActivityTopBar) || this;
        // Trigger 'update' on creation
        _this.set(options);
        return _this;
    }
    Object.defineProperty(MarketingExternalActivityTopBar.prototype, "buttons", {
        get: function () {
            if (!this.primary && !this.secondary) {
                return undefined;
            }
            return {
                primary: this.primary,
                secondary: this.secondary,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarketingExternalActivityTopBar.prototype, "buttonsOptions", {
        get: function () {
            if (!this.primaryOptions && !this.secondaryOptions) {
                return undefined;
            }
            return {
                primary: this.primaryOptions,
                secondary: this.secondaryOptions,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarketingExternalActivityTopBar.prototype, "options", {
        get: function () {
            return {
                title: this.title,
                status: this.status,
                saving: this.saving,
                saved: this.saved,
                buttons: this.buttonsOptions,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarketingExternalActivityTopBar.prototype, "payload", {
        get: function () {
            return __assign(__assign({}, this.options), { buttons: this.buttons, id: this.id });
        },
        enumerable: false,
        configurable: true
    });
    MarketingExternalActivityTopBar.prototype.set = function (options, shouldUpdate) {
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var title = mergedOptions.title, buttons = mergedOptions.buttons, saved = mergedOptions.saved, saving = mergedOptions.saving, status = mergedOptions.status;
        this.title = title;
        this.saving = saving;
        this.saved = saved;
        this.status = status;
        this.setPrimaryButton(buttons ? buttons.primary : undefined);
        this.setSecondaryButtons(buttons ? buttons.secondary : undefined);
        if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
        }
        return this;
    };
    MarketingExternalActivityTopBar.prototype.dispatch = function (action) {
        switch (action) {
            case Action.UPDATE:
                this.app.dispatch(update(this.payload));
                break;
        }
        return this;
    };
    MarketingExternalActivityTopBar.prototype.getButton = function (button, subgroups, updateCb) {
        return buttonHelper_1.getSingleButton(this, button, subgroups, updateCb);
    };
    MarketingExternalActivityTopBar.prototype.updatePrimaryButton = function (newPayload) {
        if (!this.primary) {
            return;
        }
        if (helper_1.updateActionFromPayload(this.primary, newPayload)) {
            this.dispatch(Action.UPDATE);
        }
    };
    MarketingExternalActivityTopBar.prototype.updateSecondaryButtons = function (newPayload) {
        if (!this.secondary) {
            return;
        }
        var buttonToUpdate = this.secondary.find(function (action) { return action.id === newPayload.id; });
        if (!buttonToUpdate) {
            return;
        }
        var updated = helper_1.updateActionFromPayload(buttonToUpdate, newPayload);
        if (updated) {
            this.dispatch(Action.UPDATE);
        }
    };
    MarketingExternalActivityTopBar.prototype.setPrimaryButton = function (newOptions) {
        this.primaryOptions = this.getChildButton(newOptions, this.primaryOptions);
        this.primary = this.primaryOptions
            ? this.getButton(this.primaryOptions, MARKETING_ACTIVITY_TOPBAR_BUTTON_PROPS.subgroups, this.updatePrimaryButton)
            : undefined;
    };
    MarketingExternalActivityTopBar.prototype.setSecondaryButtons = function (newOptions) {
        var _this = this;
        var newButtons = newOptions || [];
        var currentButtons = this.secondaryOptions || [];
        this.secondaryOptions = this.getUpdatedChildActions(newButtons, currentButtons);
        this.secondary = this.secondaryOptions
            ? this.secondaryOptions.map(function (action) {
                return _this.getButton(action, MARKETING_ACTIVITY_TOPBAR_BUTTON_PROPS.subgroups, _this.updateSecondaryButtons);
            })
            : undefined;
    };
    MarketingExternalActivityTopBar.prototype.updateSaving = function (saving) {
        this.saving = saving;
        this.dispatch(Action.UPDATE);
    };
    MarketingExternalActivityTopBar.prototype.updateSaved = function (saved) {
        this.saved = saved;
        this.dispatch(Action.UPDATE);
    };
    MarketingExternalActivityTopBar.prototype.updateStatus = function (newPayload) {
        this.status = newPayload;
        this.dispatch(Action.UPDATE);
    };
    MarketingExternalActivityTopBar.prototype.getChildButton = function (newAction, currentAction) {
        var newButtons = newAction ? [newAction] : [];
        var currentButtons = currentAction ? [currentAction] : [];
        var updatedButton = this.getUpdatedChildActions(newButtons, currentButtons);
        return updatedButton ? updatedButton[0] : undefined;
    };
    return MarketingExternalActivityTopBar;
}(helper_1.ActionSetWithChildren));
exports.MarketingExternalActivityTopBar = MarketingExternalActivityTopBar;
function create(app, options) {
    return new MarketingExternalActivityTopBar(app, options);
}
exports.create = create;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Menu/ChannelMenu/actions.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Menu/ChannelMenu/actions.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.ChannelMenu = exports.update = exports.ActionType = exports.Action = void 0;
var AppLink_1 = __webpack_require__(/*! ../../Link/AppLink */ "./node_modules/@shopify/app-bridge/actions/Link/AppLink/index.js");
var helper_1 = __webpack_require__(/*! ../../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var SUBGROUPS = ['Channel_Menu'];
var Action;
(function (Action) {
    Action["UPDATE"] = "UPDATE";
    Action["LINK_UPDATE"] = "LINK::UPDATE";
})(Action = exports.Action || (exports.Action = {}));
var ActionType;
(function (ActionType) {
    ActionType["UPDATE"] = "APP::MENU::CHANNEL_MENU::UPDATE";
    ActionType["LINK_UPDATE"] = "APP::MENU::CHANNEL_MENU::LINK::UPDATE";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
function update(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Menu,
        type: ActionType.UPDATE,
    });
}
exports.update = update;
var ChannelMenu = /** @class */ (function (_super) {
    __extends(ChannelMenu, _super);
    function ChannelMenu(app, options) {
        var _this = _super.call(this, app, 'Channel_Menu', types_1.Group.Menu) || this;
        _this.items = [];
        // Trigger 'update' on creation
        _this.set(options);
        return _this;
    }
    Object.defineProperty(ChannelMenu.prototype, "options", {
        get: function () {
            return {
                items: this.itemsOptions,
                active: this.activeOptions,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChannelMenu.prototype, "payload", {
        get: function () {
            return __assign(__assign({}, this.options), { active: this.active, items: this.items, id: this.id });
        },
        enumerable: false,
        configurable: true
    });
    ChannelMenu.prototype.set = function (options, shouldUpdate) {
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var items = mergedOptions.items, active = mergedOptions.active;
        this.setItems(items);
        this.activeOptions = active;
        this.active = active && active.id;
        if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
        }
        return this;
    };
    ChannelMenu.prototype.dispatch = function (action) {
        switch (action) {
            case Action.UPDATE:
                this.app.dispatch(update(this.payload));
                break;
        }
        return this;
    };
    ChannelMenu.prototype.updateItem = function (newPayload) {
        if (!this.items) {
            return;
        }
        var itemToUpdate = this.items.find(function (action) { return action.id === newPayload.id; });
        if (!itemToUpdate) {
            return;
        }
        if (helper_1.updateActionFromPayload(itemToUpdate, newPayload)) {
            this.dispatch(Action.UPDATE);
        }
    };
    ChannelMenu.prototype.setItems = function (newOptions) {
        var _this = this;
        var newItems = newOptions || [];
        var currentItems = this.itemsOptions || [];
        this.itemsOptions = this.getUpdatedChildActions(newItems, currentItems);
        this.items = this.itemsOptions
            ? this.itemsOptions.map(function (action) {
                _this.addChild(action, _this.group, SUBGROUPS);
                _this.subscribeToChild(action, AppLink_1.Action.UPDATE, _this.updateItem);
                return action.payload;
            })
            : [];
    };
    return ChannelMenu;
}(helper_1.ActionSetWithChildren));
exports.ChannelMenu = ChannelMenu;
function create(app, options) {
    return new ChannelMenu(app, options);
}
exports.create = create;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Menu/ChannelMenu/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Menu/ChannelMenu/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./actions */ "./node_modules/@shopify/app-bridge/actions/Menu/ChannelMenu/actions.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Menu/NavigationMenu/actions.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Menu/NavigationMenu/actions.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.NavigationMenu = exports.update = exports.ActionType = exports.Action = void 0;
var AppLink_1 = __webpack_require__(/*! ../../Link/AppLink */ "./node_modules/@shopify/app-bridge/actions/Link/AppLink/index.js");
var helper_1 = __webpack_require__(/*! ../../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var SUBGROUPS = ['Navigation_Menu'];
var Action;
(function (Action) {
    Action["UPDATE"] = "UPDATE";
    Action["LINK_UPDATE"] = "LINK::UPDATE";
})(Action = exports.Action || (exports.Action = {}));
var ActionType;
(function (ActionType) {
    ActionType["UPDATE"] = "APP::MENU::NAVIGATION_MENU::UPDATE";
    ActionType["LINK_UPDATE"] = "APP::MENU::NAVIGATION_MENU::LINK::UPDATE";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
function update(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Menu,
        type: ActionType.UPDATE,
    });
}
exports.update = update;
var NavigationMenu = /** @class */ (function (_super) {
    __extends(NavigationMenu, _super);
    function NavigationMenu(app, options) {
        var _this = _super.call(this, app, 'Navigation_Menu', types_1.Group.Menu) || this;
        _this.items = [];
        // Trigger 'update' on creation
        _this.set(options);
        return _this;
    }
    Object.defineProperty(NavigationMenu.prototype, "options", {
        get: function () {
            return {
                items: this.itemsOptions,
                active: this.activeOptions,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NavigationMenu.prototype, "payload", {
        get: function () {
            return __assign(__assign({}, this.options), { active: this.active, items: this.items, id: this.id });
        },
        enumerable: false,
        configurable: true
    });
    NavigationMenu.prototype.set = function (options, shouldUpdate) {
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var items = mergedOptions.items, active = mergedOptions.active;
        this.setItems(items);
        this.activeOptions = active;
        this.active = active && active.id;
        if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
        }
        return this;
    };
    NavigationMenu.prototype.dispatch = function (action) {
        switch (action) {
            case Action.UPDATE:
                this.app.dispatch(update(this.payload));
                break;
        }
        return this;
    };
    NavigationMenu.prototype.updateItem = function (newPayload) {
        if (!this.items) {
            return;
        }
        var itemToUpdate = this.items.find(function (action) { return action.id === newPayload.id; });
        if (!itemToUpdate) {
            return;
        }
        if (helper_1.updateActionFromPayload(itemToUpdate, newPayload)) {
            this.dispatch(Action.UPDATE);
        }
    };
    NavigationMenu.prototype.setItems = function (newOptions) {
        var _this = this;
        var newItems = newOptions || [];
        var currentItems = this.itemsOptions || [];
        this.itemsOptions = this.getUpdatedChildActions(newItems, currentItems);
        this.items = this.itemsOptions
            ? this.itemsOptions.map(function (action) {
                _this.addChild(action, _this.group, SUBGROUPS);
                _this.subscribeToChild(action, AppLink_1.Action.UPDATE, _this.updateItem);
                return action.payload;
            })
            : [];
    };
    return NavigationMenu;
}(helper_1.ActionSetWithChildren));
exports.NavigationMenu = NavigationMenu;
function create(app, options) {
    return new NavigationMenu(app, options);
}
exports.create = create;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Menu/NavigationMenu/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Menu/NavigationMenu/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./actions */ "./node_modules/@shopify/app-bridge/actions/Menu/NavigationMenu/actions.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Modal/actions.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Modal/actions.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.ModalIframe = exports.ModalMessage = exports.Modal = exports.isMessageModal = exports.isIframeModal = exports.data = exports.update = exports.clickFooterButton = exports.updateModalSize = exports.closeModal = exports.openModal = void 0;
var buttonHelper_1 = __webpack_require__(/*! ../buttonHelper */ "./node_modules/@shopify/app-bridge/actions/buttonHelper.js");
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var Button_1 = __webpack_require__(/*! ../Button */ "./node_modules/@shopify/app-bridge/actions/Button/index.js");
var types_2 = __webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/Modal/types.js");
var FOOTER_BUTTON_PROPS = {
    group: types_1.Group.Modal,
    subgroups: ['Footer'],
    type: types_1.ComponentType.Button,
};
function openModal(modalPayload) {
    return helper_1.actionWrapper({
        group: types_1.Group.Modal,
        payload: modalPayload,
        type: types_2.ActionType.OPEN,
    });
}
exports.openModal = openModal;
function closeModal(modalClosePayload) {
    return helper_1.actionWrapper({
        group: types_1.Group.Modal,
        payload: modalClosePayload,
        type: types_2.ActionType.CLOSE,
    });
}
exports.closeModal = closeModal;
/**
 * Action creator for modal update size action
 * @internal
 */
function updateModalSize(updateSizePayload) {
    return helper_1.actionWrapper({
        group: types_1.Group.Modal,
        payload: updateSizePayload,
        type: types_2.ActionType.UPDATE_SIZE,
    });
}
exports.updateModalSize = updateModalSize;
function clickFooterButton(id, payload) {
    var component = __assign({ id: id }, FOOTER_BUTTON_PROPS);
    return Button_1.clickButton(types_1.Group.Modal, component, payload);
}
exports.clickFooterButton = clickFooterButton;
function update(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Modal,
        type: types_2.ActionType.UPDATE,
    });
}
exports.update = update;
function data(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Modal,
        type: types_2.ActionType.DATA,
    });
}
exports.data = data;
function isIframeModal(options) {
    return (typeof options.url === 'string' ||
        typeof options.path === 'string');
}
exports.isIframeModal = isIframeModal;
function isMessageModal(options) {
    return typeof options.message === 'string';
}
exports.isMessageModal = isMessageModal;
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.size = types_2.Size.Small;
        return _this;
    }
    Object.defineProperty(Modal.prototype, "footer", {
        get: function () {
            if (!this.footerPrimary && !this.footerSecondary) {
                return undefined;
            }
            return {
                buttons: {
                    primary: this.footerPrimary,
                    secondary: this.footerSecondary,
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "footerOptions", {
        get: function () {
            if (!this.footerPrimaryOptions && !this.footerSecondaryOptions) {
                return undefined;
            }
            return {
                buttons: {
                    primary: this.footerPrimaryOptions,
                    secondary: this.footerSecondaryOptions,
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Modal.prototype.close = function () {
        this.app.dispatch(closeModal({ id: this.id }));
    };
    Modal.prototype.setFooterPrimaryButton = function (newOptions, updateCb) {
        var _this = this;
        var subgroups = FOOTER_BUTTON_PROPS.subgroups;
        this.footerPrimaryOptions = this.getChildButton(newOptions, this.footerPrimaryOptions);
        this.footerPrimary = this.footerPrimaryOptions
            ? buttonHelper_1.getSingleButton(this, this.footerPrimaryOptions, subgroups, function (newPayload) {
                _this.updatePrimaryFooterButton(newPayload, updateCb);
            })
            : undefined;
    };
    Modal.prototype.setFooterSecondaryButtons = function (newOptions, updateCb) {
        var _this = this;
        var subgroups = FOOTER_BUTTON_PROPS.subgroups;
        var newButtons = newOptions || [];
        var currentOptions = (this.footerOptions && this.footerOptions.buttons.secondary) || [];
        this.footerSecondaryOptions = this.getUpdatedChildActions(newButtons, currentOptions);
        this.footerSecondary = this.footerSecondaryOptions
            ? this.footerSecondaryOptions.map(function (action) {
                return buttonHelper_1.getSingleButton(_this, action, subgroups, function (newPayload) {
                    _this.updateSecondaryFooterButton(newPayload, updateCb);
                });
            })
            : undefined;
    };
    Modal.prototype.getChildButton = function (newAction, currentAction) {
        var newButtons = newAction ? [newAction] : [];
        var currentButtons = currentAction ? [currentAction] : [];
        var updatedButton = this.getUpdatedChildActions(newButtons, currentButtons);
        return updatedButton ? updatedButton[0] : undefined;
    };
    Modal.prototype.updatePrimaryFooterButton = function (newPayload, updateCb) {
        if (!this.footer || !this.footer.buttons.primary) {
            return;
        }
        if (helper_1.updateActionFromPayload(this.footer.buttons.primary, newPayload)) {
            updateCb();
        }
    };
    Modal.prototype.updateSecondaryFooterButton = function (newPayload, updateCb) {
        if (!this.footer || !this.footer.buttons || !this.footer.buttons.secondary) {
            return;
        }
        var updated;
        for (var _i = 0, _a = this.footer.buttons.secondary; _i < _a.length; _i++) {
            var action = _a[_i];
            updated = helper_1.updateActionFromPayload(action, newPayload);
            if (updated) {
                break;
            }
        }
        if (updated) {
            updateCb();
        }
    };
    return Modal;
}(helper_1.ActionSetWithChildren));
exports.Modal = Modal;
var ModalMessage = /** @class */ (function (_super) {
    __extends(ModalMessage, _super);
    function ModalMessage(app, options) {
        var _this = _super.call(this, app, types_1.Group.Modal, types_1.Group.Modal) || this;
        _this.set(options, false);
        return _this;
    }
    Object.defineProperty(ModalMessage.prototype, "payload", {
        get: function () {
            return __assign(__assign({}, this.options), { footer: this.footer, id: this.id });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModalMessage.prototype, "options", {
        get: function () {
            return {
                footer: this.footerOptions,
                message: this.message,
                size: this.size,
                title: this.title,
            };
        },
        enumerable: false,
        configurable: true
    });
    ModalMessage.prototype.set = function (options, shouldUpdate) {
        var _this = this;
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var title = mergedOptions.title, footer = mergedOptions.footer, message = mergedOptions.message, size = mergedOptions.size;
        this.title = title;
        this.message = message;
        this.size = size;
        this.setFooterPrimaryButton(footer ? footer.buttons.primary : undefined, function () {
            _this.dispatch(types_2.Action.UPDATE);
        });
        this.setFooterSecondaryButtons(footer ? footer.buttons.secondary : undefined, function () {
            _this.dispatch(types_2.Action.UPDATE);
        });
        if (shouldUpdate) {
            this.dispatch(types_2.Action.UPDATE);
        }
        return this;
    };
    ModalMessage.prototype.dispatch = function (action) {
        switch (action) {
            case types_2.Action.OPEN:
                this.app.dispatch(openModal(this.payload));
                break;
            case types_2.Action.CLOSE:
                this.close();
                break;
            case types_2.Action.UPDATE:
                this.app.dispatch(update(this.payload));
                break;
        }
        return this;
    };
    return ModalMessage;
}(Modal));
exports.ModalMessage = ModalMessage;
var ModalIframe = /** @class */ (function (_super) {
    __extends(ModalIframe, _super);
    function ModalIframe(app, options) {
        var _this = _super.call(this, app, types_1.Group.Modal, types_1.Group.Modal) || this;
        _this.set(options, false);
        return _this;
    }
    Object.defineProperty(ModalIframe.prototype, "payload", {
        get: function () {
            return __assign(__assign({}, this.options), { footer: this.footer, id: this.id });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModalIframe.prototype, "options", {
        get: function () {
            return {
                footer: this.footerOptions,
                path: this.path,
                size: this.size,
                title: this.title,
                url: this.url,
            };
        },
        enumerable: false,
        configurable: true
    });
    ModalIframe.prototype.set = function (options, shouldUpdate) {
        var _this = this;
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var title = mergedOptions.title, footer = mergedOptions.footer, path = mergedOptions.path, url = mergedOptions.url, size = mergedOptions.size;
        this.title = title;
        this.url = url;
        this.path = path;
        this.size = size;
        this.setFooterPrimaryButton(footer ? footer.buttons.primary : undefined, function () {
            _this.dispatch(types_2.Action.UPDATE);
        });
        this.setFooterSecondaryButtons(footer ? footer.buttons.secondary : undefined, function () {
            _this.dispatch(types_2.Action.UPDATE);
        });
        if (shouldUpdate) {
            this.dispatch(types_2.Action.UPDATE);
        }
        return this;
    };
    ModalIframe.prototype.dispatch = function (action, payload) {
        switch (action) {
            case types_2.Action.OPEN:
                this.app.dispatch(openModal(this.payload));
                break;
            case types_2.Action.CLOSE:
                this.close();
                break;
            case types_2.Action.UPDATE:
                this.app.dispatch(update(this.payload));
                break;
            case types_2.Action.DATA:
                this.app.dispatch(data(payload || {}));
                break;
        }
        return this;
    };
    return ModalIframe;
}(Modal));
exports.ModalIframe = ModalIframe;
exports.create = function (app, options) {
    if (isIframeModal(options)) {
        return new ModalIframe(app, options);
    }
    return new ModalMessage(app, options);
};


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Modal/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Modal/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./actions */ "./node_modules/@shopify/app-bridge/actions/Modal/actions.js"), exports);
__exportStar(__webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/Modal/types.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Modal/types.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Modal/types.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Size = exports.ActionType = exports.Action = void 0;
var Action;
(function (Action) {
    Action["OPEN"] = "OPEN";
    Action["CLOSE"] = "CLOSE";
    Action["UPDATE"] = "UPDATE";
    Action["UPDATE_SIZE"] = "UPDATE_SIZE";
    Action["DATA"] = "DATA";
})(Action = exports.Action || (exports.Action = {}));
/**
 * Action types for the Modal group
 * @public
 */
var ActionType;
(function (ActionType) {
    ActionType["OPEN"] = "APP::MODAL::OPEN";
    ActionType["CLOSE"] = "APP::MODAL::CLOSE";
    ActionType["UPDATE"] = "APP::MODAL::UPDATE";
    ActionType["FOOTER_BUTTON_CLICK"] = "APP::MODAL::FOOTER::BUTTON::CLICK";
    ActionType["FOOTER_BUTTON_UPDATE"] = "APP::MODAL::FOOTER::BUTTON::UPDATE";
    ActionType["UPDATE_SIZE"] = "APP::MODAL::UPDATE_SIZE";
    ActionType["DATA"] = "APP::MODAL::DATA";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
/**
 * Options available to the Modal `size` param
 * @public
 */
var Size;
(function (Size) {
    /** Small modal size */
    Size["Small"] = "small";
    /** Medium modal size */
    Size["Medium"] = "medium";
    /** Large modal size (wider than medium) */
    Size["Large"] = "large";
    /** @deprecated as of 1.6.5 */
    Size["Full"] = "full";
    /**
     * @deprecated as of 1.12.x
     * @remarks
     * This option has been removed in favour of the `setUpModalAutoSizing` utility.
     * See `app-bridge-utils` package for more information
     */
    Size["Auto"] = "auto";
})(Size = exports.Size || (exports.Size = {}));


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Navigation/History/actions.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Navigation/History/actions.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.History = exports.replace = exports.push = void 0;
var helper_1 = __webpack_require__(/*! ../../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var types_2 = __webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/Navigation/History/types.js");
function push(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Navigation,
        type: types_2.ActionType.PUSH,
    });
}
exports.push = push;
function replace(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Navigation,
        type: types_2.ActionType.REPLACE,
    });
}
exports.replace = replace;
var History = /** @class */ (function (_super) {
    __extends(History, _super);
    function History(app) {
        return _super.call(this, app, 'History', types_1.Group.Navigation) || this;
    }
    Object.defineProperty(History.prototype, "payload", {
        get: function () {
            return { id: this.id };
        },
        enumerable: false,
        configurable: true
    });
    History.prototype.dispatch = function (type, path) {
        var payload = __assign(__assign({}, this.payload), { path: path });
        switch (type) {
            case types_2.Action.PUSH:
                this.app.dispatch(push(payload));
                break;
            case types_2.Action.REPLACE:
                this.app.dispatch(replace(payload));
                break;
        }
        return this;
    };
    return History;
}(helper_1.ActionSet));
exports.History = History;
function create(app) {
    return new History(app);
}
exports.create = create;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Navigation/History/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Navigation/History/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./actions */ "./node_modules/@shopify/app-bridge/actions/Navigation/History/actions.js"), exports);
__exportStar(__webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/Navigation/History/types.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Navigation/History/types.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Navigation/History/types.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = exports.ActionType = void 0;
var ActionType;
(function (ActionType) {
    ActionType["PUSH"] = "APP::NAVIGATION::HISTORY::PUSH";
    ActionType["REPLACE"] = "APP::NAVIGATION::HISTORY::REPLACE";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var Action;
(function (Action) {
    Action["PUSH"] = "PUSH";
    Action["REPLACE"] = "REPLACE";
})(Action = exports.Action || (exports.Action = {}));


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Navigation/Redirect/actions.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Navigation/Redirect/actions.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.Redirect = exports.isRemotePayload = exports.isAdminSectionPayload = exports.isAdminPathPayload = exports.isAppPayload = exports.toDestination = exports.toApp = exports.toRemote = exports.toAdminSection = exports.toAdminPath = exports.isProductVariantCreateResourcePayload = exports.isProductVariantResourcePayload = exports.isCreateResourcePayload = exports.isResourcePayload = void 0;
var helper_1 = __webpack_require__(/*! ../../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var types_2 = __webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/Navigation/Redirect/types.js");
function isResourcePayload(resource) {
    // tslint:disable-next-line:no-boolean-literal-compare
    return typeof resource.id === 'string';
}
exports.isResourcePayload = isResourcePayload;
function isCreateResourcePayload(resource) {
    // tslint:disable-next-line:no-boolean-literal-compare
    return resource.create === true;
}
exports.isCreateResourcePayload = isCreateResourcePayload;
function isProductVariantResourcePayload(resource) {
    var castResource = resource;
    // tslint:disable-next-line:no-boolean-literal-compare
    return castResource.id !== undefined && castResource.variant !== undefined;
}
exports.isProductVariantResourcePayload = isProductVariantResourcePayload;
function isProductVariantCreateResourcePayload(resource) {
    if (!isProductVariantResourcePayload(resource)) {
        return false;
    }
    return isCreateResourcePayload(resource.variant);
}
exports.isProductVariantCreateResourcePayload = isProductVariantCreateResourcePayload;
function toAdminPath(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Navigation,
        type: types_2.ActionType.ADMIN_PATH,
    });
}
exports.toAdminPath = toAdminPath;
function toAdminSection(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Navigation,
        type: types_2.ActionType.ADMIN_SECTION,
    });
}
exports.toAdminSection = toAdminSection;
function toRemote(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Navigation,
        type: types_2.ActionType.REMOTE,
    });
}
exports.toRemote = toRemote;
function toApp(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Navigation,
        type: types_2.ActionType.APP,
    });
}
exports.toApp = toApp;
function toDestination(action, payload, id) {
    switch (action) {
        case types_2.Action.APP:
            var appPayload = isAppPayload(payload) ? payload : { path: payload };
            return toApp(__assign({ id: id }, appPayload));
        case types_2.Action.ADMIN_PATH:
            var adminPathPayload = isAdminPathPayload(payload) ? payload : { path: payload };
            return toAdminPath(__assign({ id: id }, adminPathPayload));
        case types_2.Action.ADMIN_SECTION:
            var adminSectionPayload = isAdminSectionPayload(payload)
                ? payload
                : { section: payload };
            return toAdminSection(__assign({ id: id }, adminSectionPayload));
        case types_2.Action.REMOTE:
            var remotePayload = isRemotePayload(payload) ? payload : { url: payload };
            return toRemote(__assign({ id: id }, remotePayload));
    }
}
exports.toDestination = toDestination;
function isAppPayload(payload) {
    return typeof payload === 'object' && payload.hasOwnProperty('path');
}
exports.isAppPayload = isAppPayload;
function isAdminPathPayload(payload) {
    return typeof payload === 'object' && payload.hasOwnProperty('path');
}
exports.isAdminPathPayload = isAdminPathPayload;
function isAdminSectionPayload(payload) {
    return (typeof payload === 'object' &&
        typeof payload.section === 'object' &&
        payload.section.hasOwnProperty('name'));
}
exports.isAdminSectionPayload = isAdminSectionPayload;
function isRemotePayload(payload) {
    return typeof payload === 'object' && payload.hasOwnProperty('url');
}
exports.isRemotePayload = isRemotePayload;
var Redirect = /** @class */ (function (_super) {
    __extends(Redirect, _super);
    function Redirect(app) {
        return _super.call(this, app, 'Redirect', types_1.Group.Navigation) || this;
    }
    Object.defineProperty(Redirect.prototype, "payload", {
        get: function () {
            return { id: this.id };
        },
        enumerable: false,
        configurable: true
    });
    Redirect.prototype.dispatch = function (action, payload) {
        var redirectAction = toDestination(action, payload, this.payload.id);
        this.app.dispatch(redirectAction);
        return this;
    };
    return Redirect;
}(helper_1.ActionSet));
exports.Redirect = Redirect;
function create(app) {
    return new Redirect(app);
}
exports.create = create;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Navigation/Redirect/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Navigation/Redirect/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./actions */ "./node_modules/@shopify/app-bridge/actions/Navigation/Redirect/actions.js"), exports);
__exportStar(__webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/Navigation/Redirect/types.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Navigation/Redirect/types.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Navigation/Redirect/types.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceType = exports.ActionType = exports.Action = void 0;
var Action;
(function (Action) {
    Action["ADMIN_PATH"] = "ADMIN::PATH";
    Action["ADMIN_SECTION"] = "ADMIN::SECTION";
    Action["REMOTE"] = "REMOTE";
    Action["APP"] = "APP";
})(Action = exports.Action || (exports.Action = {}));
var ActionType;
(function (ActionType) {
    ActionType["ADMIN_SECTION"] = "APP::NAVIGATION::REDIRECT::ADMIN::SECTION";
    ActionType["ADMIN_PATH"] = "APP::NAVIGATION::REDIRECT::ADMIN::PATH";
    ActionType["REMOTE"] = "APP::NAVIGATION::REDIRECT::REMOTE";
    ActionType["APP"] = "APP::NAVIGATION::REDIRECT::APP";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["Product"] = "products";
    ResourceType["Collection"] = "collections";
    ResourceType["Order"] = "orders";
    ResourceType["Customer"] = "customers";
    ResourceType["Discount"] = "discounts";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Performance/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Performance/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.fullPageLoad = exports.skeletonPageLoad = exports.Action = exports.ActionType = void 0;
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var ActionType;
(function (ActionType) {
    ActionType["SKELETON_PAGE_LOAD"] = "APP::PERFORMANCE::SKELETON_PAGE_LOAD";
    ActionType["FULL_PAGE_LOAD"] = "APP::PERFORMANCE::FULL_PAGE_LOAD";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var Action;
(function (Action) {
    Action["SKELETON_PAGE_LOAD"] = "SKELETON_PAGE_LOAD";
    Action["FULL_PAGE_LOAD"] = "FULL_PAGE_LOAD";
})(Action = exports.Action || (exports.Action = {}));
function skeletonPageLoad() {
    return helper_1.actionWrapper({
        group: types_1.Group.Performance,
        type: ActionType.SKELETON_PAGE_LOAD,
    });
}
exports.skeletonPageLoad = skeletonPageLoad;
function fullPageLoad() {
    return helper_1.actionWrapper({
        group: types_1.Group.Performance,
        type: ActionType.FULL_PAGE_LOAD,
    });
}
exports.fullPageLoad = fullPageLoad;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Pos/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Pos/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.Pos = exports.close = exports.ActionType = exports.Action = void 0;
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var Action;
(function (Action) {
    Action["CLOSE"] = "CLOSE";
})(Action = exports.Action || (exports.Action = {}));
/**
 * Pos action type enum
 * @remarks includes the action prefix and group
 *
 */
var ActionType;
(function (ActionType) {
    ActionType["CLOSE"] = "APP::POS::CLOSE";
    ActionType["LOCATION_UPDATE"] = "APP::POS::LOCATION::UPDATE";
    ActionType["USER_UPDATE"] = "APP::POS::USER::UPDATE";
    ActionType["DEVICE_UPDATE"] = "APP::POS::DEVICE::UPDATE";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
function close() {
    return helper_1.actionWrapper({
        group: types_1.Group.Pos,
        type: ActionType.CLOSE,
    });
}
exports.close = close;
var Pos = /** @class */ (function (_super) {
    __extends(Pos, _super);
    function Pos(app) {
        return _super.call(this, app, types_1.Group.Pos, types_1.Group.Pos) || this;
    }
    Pos.prototype.dispatch = function (action) {
        switch (action) {
            case ActionType.CLOSE:
                this.app.dispatch(close());
                break;
        }
        return this;
    };
    return Pos;
}(helper_1.ActionSet));
exports.Pos = Pos;
function create(app) {
    return new Pos(app);
}
exports.create = create;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Print/actions.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Print/actions.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var types_2 = __webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/Print/types.js");
function app() {
    return helper_1.actionWrapper({
        group: types_1.Group.Print,
        type: types_2.ActionType.APP,
    });
}
exports.app = app;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Print/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Print/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./actions */ "./node_modules/@shopify/app-bridge/actions/Print/actions.js"), exports);
__exportStar(__webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/Print/types.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Print/types.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Print/types.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = exports.ActionType = void 0;
var ActionType;
(function (ActionType) {
    ActionType["APP"] = "APP::PRINT::APP";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var Action;
(function (Action) {
    Action["APP"] = "APP";
})(Action = exports.Action || (exports.Action = {}));


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/ResourcePicker/actions.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/ResourcePicker/actions.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.ResourcePicker = exports.update = exports.close = exports.cancel = exports.open = exports.select = void 0;
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var types_2 = __webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/ResourcePicker/types.js");
function select(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.ResourcePicker,
        type: types_2.ActionType.SELECT,
    });
}
exports.select = select;
function open(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.ResourcePicker,
        type: types_2.ActionType.OPEN,
    });
}
exports.open = open;
function cancel(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.ResourcePicker,
        type: types_2.ActionType.CANCEL,
    });
}
exports.cancel = cancel;
function close(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.ResourcePicker,
        type: types_2.ActionType.CANCEL,
    });
}
exports.close = close;
function update(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.ResourcePicker,
        type: types_2.ActionType.UPDATE,
    });
}
exports.update = update;
var ResourcePicker = /** @class */ (function (_super) {
    __extends(ResourcePicker, _super);
    function ResourcePicker(app, options, resourceType) {
        var _this = _super.call(this, app, types_1.Group.ResourcePicker, types_1.Group.ResourcePicker) || this;
        _this.initialSelectionIds = [];
        _this.selection = [];
        _this.resourceType = resourceType;
        _this.set(options, false);
        return _this;
    }
    Object.defineProperty(ResourcePicker.prototype, "payload", {
        get: function () {
            return __assign(__assign({}, this.options), { id: this.id, resourceType: this.resourceType });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ResourcePicker.prototype, "options", {
        get: function () {
            var options = {
                initialQuery: this.initialQuery,
                selectMultiple: this.selectMultiple,
                initialSelectionIds: this.initialSelectionIds,
                showHidden: this.showHidden,
                actionVerb: this.actionVerb,
            };
            if (this.resourceType === types_2.ResourceType.Product) {
                var productOptions = __assign(__assign({}, options), { showVariants: this.showVariants, showDraft: this.showDraft, showArchived: this.showArchived, showDraftBadge: this.showDraftBadge, showArchivedBadge: this.showArchivedBadge });
                return productOptions;
            }
            return options;
        },
        enumerable: false,
        configurable: true
    });
    ResourcePicker.prototype.set = function (options, shouldUpdate) {
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var initialQuery = mergedOptions.initialQuery, _a = mergedOptions.initialSelectionIds, initialSelectionIds = _a === void 0 ? [] : _a, _b = mergedOptions.showHidden, showHidden = _b === void 0 ? true : _b, _c = mergedOptions.showVariants, showVariants = _c === void 0 ? true : _c, _d = mergedOptions.showDraft, showDraft = _d === void 0 ? true : _d, _e = mergedOptions.showArchived, showArchived = _e === void 0 ? true : _e, _f = mergedOptions.showDraftBadge, showDraftBadge = _f === void 0 ? false : _f, _g = mergedOptions.showArchivedBadge, showArchivedBadge = _g === void 0 ? false : _g, _h = mergedOptions.selectMultiple, selectMultiple = _h === void 0 ? true : _h, _j = mergedOptions.actionVerb, actionVerb = _j === void 0 ? types_2.ActionVerb.Add : _j;
        this.initialQuery = initialQuery;
        this.initialSelectionIds = initialSelectionIds;
        this.showHidden = showHidden;
        this.showVariants = showVariants;
        this.showDraft = showDraft;
        this.showArchived = showArchived;
        this.showDraftBadge = showDraftBadge;
        this.showArchivedBadge = showArchivedBadge;
        this.selectMultiple = selectMultiple;
        this.actionVerb = actionVerb;
        if (shouldUpdate) {
            this.update();
        }
        return this;
    };
    ResourcePicker.prototype.dispatch = function (action, selection) {
        if (action === types_2.Action.OPEN) {
            this.open();
        }
        else if (action === types_2.Action.UPDATE) {
            this.update();
        }
        else if (action === types_2.Action.CLOSE || action === types_2.Action.CANCEL) {
            this.cancel();
        }
        else if (action === types_2.Action.SELECT) {
            this.selection = selection;
            this.app.dispatch(select({ id: this.id, selection: this.selection }));
        }
        return this;
    };
    ResourcePicker.prototype.update = function () {
        this.app.dispatch(update(this.payload));
    };
    ResourcePicker.prototype.open = function () {
        this.app.dispatch(open(this.payload));
    };
    ResourcePicker.prototype.cancel = function () {
        this.app.dispatch(cancel({ id: this.id }));
    };
    ResourcePicker.prototype.close = function () {
        this.cancel();
    };
    return ResourcePicker;
}(helper_1.ActionSet));
exports.ResourcePicker = ResourcePicker;
exports.create = function (app, baseOptions) {
    var resourceType = baseOptions.resourceType, _a = baseOptions.options, options = _a === void 0 ? {} : _a;
    return new ResourcePicker(app, options, resourceType);
};


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/ResourcePicker/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/ResourcePicker/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./actions */ "./node_modules/@shopify/app-bridge/actions/ResourcePicker/actions.js"), exports);
__exportStar(__webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/ResourcePicker/types.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/ResourcePicker/types.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/ResourcePicker/types.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionVerb = exports.ResourceType = exports.ProductStatus = exports.ProductVariantInventoryManagement = exports.ProductVariantInventoryPolicy = exports.WeightUnit = exports.FulfillmentServiceType = exports.CollectionSortOrder = exports.ActionType = exports.Action = void 0;
var Action;
(function (Action) {
    Action["OPEN"] = "OPEN";
    Action["SELECT"] = "SELECT";
    Action["CLOSE"] = "CLOSE";
    Action["UPDATE"] = "UPDATE";
    Action["CANCEL"] = "CANCEL";
})(Action = exports.Action || (exports.Action = {}));
var ActionType;
(function (ActionType) {
    ActionType["OPEN"] = "APP::RESOURCE_PICKER::OPEN";
    ActionType["SELECT"] = "APP::RESOURCE_PICKER::SELECT";
    ActionType["CLOSE"] = "APP::RESOURCE_PICKER::CLOSE";
    ActionType["UPDATE"] = "APP::RESOURCE_PICKER::UPDATE";
    ActionType["CANCEL"] = "APP::RESOURCE_PICKER::CANCEL";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var CollectionSortOrder;
(function (CollectionSortOrder) {
    CollectionSortOrder["Manual"] = "MANUAL";
    CollectionSortOrder["BestSelling"] = "BEST_SELLING";
    CollectionSortOrder["AlphaAsc"] = "ALPHA_ASC";
    CollectionSortOrder["AlphaDesc"] = "ALPHA_DESC";
    CollectionSortOrder["PriceDesc"] = "PRICE_DESC";
    CollectionSortOrder["PriceAsc"] = "PRICE_ASC";
    CollectionSortOrder["CreatedDesc"] = "CREATED_DESC";
    CollectionSortOrder["Created"] = "CREATED";
})(CollectionSortOrder = exports.CollectionSortOrder || (exports.CollectionSortOrder = {}));
var FulfillmentServiceType;
(function (FulfillmentServiceType) {
    FulfillmentServiceType["GiftCard"] = "GIFT_CARD";
    FulfillmentServiceType["Manual"] = "MANUAL";
    FulfillmentServiceType["ThirdParty"] = "THIRD_PARTY";
})(FulfillmentServiceType = exports.FulfillmentServiceType || (exports.FulfillmentServiceType = {}));
var WeightUnit;
(function (WeightUnit) {
    WeightUnit["Kilograms"] = "KILOGRAMS";
    WeightUnit["Grams"] = "GRAMS";
    WeightUnit["Pounds"] = "POUNDS";
    WeightUnit["Ounces"] = "OUNCES";
})(WeightUnit = exports.WeightUnit || (exports.WeightUnit = {}));
var ProductVariantInventoryPolicy;
(function (ProductVariantInventoryPolicy) {
    ProductVariantInventoryPolicy["Deny"] = "DENY";
    ProductVariantInventoryPolicy["Continue"] = "CONTINUE";
})(ProductVariantInventoryPolicy = exports.ProductVariantInventoryPolicy || (exports.ProductVariantInventoryPolicy = {}));
var ProductVariantInventoryManagement;
(function (ProductVariantInventoryManagement) {
    ProductVariantInventoryManagement["Shopify"] = "SHOPIFY";
    ProductVariantInventoryManagement["NotManaged"] = "NOT_MANAGED";
    ProductVariantInventoryManagement["FulfillmentService"] = "FULFILLMENT_SERVICE";
})(ProductVariantInventoryManagement = exports.ProductVariantInventoryManagement || (exports.ProductVariantInventoryManagement = {}));
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["Active"] = "ACTIVE";
    ProductStatus["Archived"] = "ARCHIVED";
    ProductStatus["Draft"] = "DRAFT";
})(ProductStatus = exports.ProductStatus || (exports.ProductStatus = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["Product"] = "product";
    ResourceType["ProductVariant"] = "variant";
    ResourceType["Collection"] = "collection";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var ActionVerb;
(function (ActionVerb) {
    ActionVerb["Add"] = "add";
    ActionVerb["Select"] = "select";
})(ActionVerb = exports.ActionVerb || (exports.ActionVerb = {}));


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Scanner/actions.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Scanner/actions.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.Scanner = void 0;
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var types_2 = __webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/Scanner/types.js");
/**
 * A set of Actions for displaying a Camera or NFC Scanner component
 * @public
 */
var Scanner = /** @class */ (function (_super) {
    __extends(Scanner, _super);
    function Scanner(app, options) {
        return _super.call(this, app, types_1.Group.Scanner, types_1.Group.Scanner, options ? options.id : undefined) || this;
    }
    /**
     * @public
     */
    Scanner.prototype.dispatch = function (action) {
        switch (action) {
            case types_2.Action.OPEN_CAMERA:
                this.dispatchScannerAction(types_2.ActionType.OPEN_CAMERA);
                break;
            case types_2.Action.OPEN_NFC:
                this.dispatchScannerAction(types_2.ActionType.OPEN_NFC);
                break;
        }
        return this;
    };
    /**
     * @internal
     */
    Scanner.prototype.dispatchScannerAction = function (type) {
        this.app.dispatch(helper_1.actionWrapper({
            type: type,
            group: types_1.Group.Scanner,
            payload: {
                id: this.id,
            },
        }));
    };
    return Scanner;
}(helper_1.ActionSet));
exports.Scanner = Scanner;
/**
 * @public
 */
function create(app, options) {
    return new Scanner(app, options);
}
exports.create = create;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Scanner/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Scanner/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./actions */ "./node_modules/@shopify/app-bridge/actions/Scanner/actions.js"), exports);
__exportStar(__webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/Scanner/types.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Scanner/types.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Scanner/types.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Action Types for the Features group
 * @public
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = exports.ActionType = void 0;
var ActionType;
(function (ActionType) {
    ActionType["OPEN_CAMERA"] = "APP::SCANNER::OPEN::CAMERA";
    ActionType["OPEN_NFC"] = "APP::SCANNER::OPEN::NFC";
    ActionType["CAPTURE"] = "APP::SCANNER::CAPTURE";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
/**
 * Actions available to the Features group
 * @public
 */
var Action;
(function (Action) {
    Action["OPEN_CAMERA"] = "OPEN::CAMERA";
    Action["OPEN_NFC"] = "OPEN::NFC";
    Action["CAPTURE"] = "CAPTURE";
})(Action = exports.Action || (exports.Action = {}));


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/SessionToken/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/SessionToken/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.respond = exports.request = exports.Action = exports.ActionType = void 0;
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var ActionType;
(function (ActionType) {
    ActionType["REQUEST"] = "APP::SESSION_TOKEN::REQUEST";
    ActionType["RESPOND"] = "APP::SESSION_TOKEN::RESPOND";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var Action;
(function (Action) {
    Action["REQUEST"] = "REQUEST";
    Action["RESPOND"] = "RESPOND";
})(Action = exports.Action || (exports.Action = {}));
function request() {
    return helper_1.actionWrapper({
        group: types_1.Group.SessionToken,
        type: ActionType.REQUEST,
    });
}
exports.request = request;
function respond(sessionToken) {
    return helper_1.actionWrapper({
        payload: sessionToken,
        group: types_1.Group.SessionToken,
        type: ActionType.RESPOND,
    });
}
exports.respond = respond;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Share/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Share/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.Share = exports.Action = exports.ActionType = void 0;
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
/**
 * Types
 */
/**
 * @public
 */
var ActionType;
(function (ActionType) {
    ActionType["SHOW"] = "APP::SHARE::SHOW";
    ActionType["CLOSE"] = "APP::SHARE::CLOSE";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
/**
 * @public
 */
var Action;
(function (Action) {
    Action["SHOW"] = "SHOW";
    Action["CLOSE"] = "CLOSE";
})(Action = exports.Action || (exports.Action = {}));
/**
 * Action
 */
/**
 * A set of actions for displaying a Share Sheet component
 * @public
 */
var Share = /** @class */ (function (_super) {
    __extends(Share, _super);
    function Share(app) {
        return _super.call(this, app, types_1.Group.Share, types_1.Group.Share) || this;
    }
    /**
     * @public
     */
    Share.prototype.dispatch = function (action, payload) {
        switch (action) {
            case Action.SHOW:
                this.dispatchShareAction(ActionType.SHOW, payload);
                break;
            default:
                throw "Action: " + action + " not supported";
        }
        return this;
    };
    /**
     * @internal
     */
    Share.prototype.dispatchShareAction = function (actionType, payload) {
        this.app.dispatch(helper_1.actionWrapper({
            type: actionType,
            group: types_1.Group.Share,
            payload: __assign({ id: this.id }, payload),
        }));
    };
    return Share;
}(helper_1.ActionSet));
exports.Share = Share;
/**
 * @public
 */
function create(app) {
    return new Share(app);
}
exports.create = create;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/TitleBar/actions.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/TitleBar/actions.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.TitleBar = exports.update = exports.clickBreadcrumb = exports.clickActionButton = void 0;
var Button_1 = __webpack_require__(/*! ../Button */ "./node_modules/@shopify/app-bridge/actions/Button/index.js");
var ButtonGroup_1 = __webpack_require__(/*! ../ButtonGroup */ "./node_modules/@shopify/app-bridge/actions/ButtonGroup/index.js");
var buttonGroupHelper_1 = __webpack_require__(/*! ../buttonGroupHelper */ "./node_modules/@shopify/app-bridge/actions/buttonGroupHelper.js");
var buttonHelper_1 = __webpack_require__(/*! ../buttonHelper */ "./node_modules/@shopify/app-bridge/actions/buttonHelper.js");
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var types_2 = __webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/TitleBar/types.js");
var TITLEBAR_BUTTON_PROPS = {
    group: types_1.Group.TitleBar,
    subgroups: ['Buttons'],
};
var BREADCRUMB_BUTTON_PROPS = {
    group: types_1.Group.TitleBar,
    subgroups: ['Breadcrumbs'],
    type: types_1.ComponentType.Button,
};
function clickActionButton(id, payload) {
    var type = types_1.ComponentType.Button;
    var component = __assign({ id: id, type: type }, TITLEBAR_BUTTON_PROPS);
    return Button_1.clickButton(types_1.Group.TitleBar, component, payload);
}
exports.clickActionButton = clickActionButton;
function clickBreadcrumb(id, payload) {
    var component = __assign({ id: id }, BREADCRUMB_BUTTON_PROPS);
    return Button_1.clickButton(types_1.Group.TitleBar, component, payload);
}
exports.clickBreadcrumb = clickBreadcrumb;
function update(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.TitleBar,
        type: types_2.ActionType.UPDATE,
    });
}
exports.update = update;
var TitleBar = /** @class */ (function (_super) {
    __extends(TitleBar, _super);
    function TitleBar(app, options) {
        var _this = _super.call(this, app, types_1.Group.TitleBar, types_1.Group.TitleBar) || this;
        // Trigger 'update' on creation
        _this.set(options);
        return _this;
    }
    Object.defineProperty(TitleBar.prototype, "buttons", {
        get: function () {
            if (!this.primary && !this.secondary) {
                return undefined;
            }
            return {
                primary: this.primary,
                secondary: this.secondary,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TitleBar.prototype, "buttonsOptions", {
        get: function () {
            if (!this.primaryOptions && !this.secondaryOptions) {
                return undefined;
            }
            return {
                primary: this.primaryOptions,
                secondary: this.secondaryOptions,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TitleBar.prototype, "options", {
        get: function () {
            return {
                breadcrumbs: this.breadcrumbsOption,
                buttons: this.buttonsOptions,
                title: this.title,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TitleBar.prototype, "payload", {
        get: function () {
            return __assign(__assign({}, this.options), { breadcrumbs: this.breadcrumb, buttons: this.buttons, id: this.id });
        },
        enumerable: false,
        configurable: true
    });
    TitleBar.prototype.set = function (options, shouldUpdate) {
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var title = mergedOptions.title, buttons = mergedOptions.buttons, breadcrumbs = mergedOptions.breadcrumbs;
        this.title = title;
        this.setBreadcrumbs(breadcrumbs);
        this.setPrimaryButton(buttons ? buttons.primary : undefined);
        this.setSecondaryButton(buttons ? buttons.secondary : undefined);
        if (shouldUpdate) {
            this.dispatch(types_2.Action.UPDATE);
        }
        return this;
    };
    TitleBar.prototype.dispatch = function (action) {
        switch (action) {
            case types_2.Action.UPDATE:
                this.app.dispatch(update(this.payload));
                break;
        }
        return this;
    };
    TitleBar.prototype.getButton = function (button, subgroups, updateCb) {
        if (button instanceof ButtonGroup_1.ButtonGroup) {
            return buttonGroupHelper_1.getGroupedButton(this, button, subgroups, updateCb);
        }
        return buttonHelper_1.getSingleButton(this, button, subgroups, updateCb);
    };
    TitleBar.prototype.updatePrimaryButton = function (newPayload) {
        if (!this.primary) {
            return;
        }
        if (helper_1.updateActionFromPayload(this.primary, newPayload)) {
            this.dispatch(types_2.Action.UPDATE);
        }
    };
    TitleBar.prototype.updateSecondaryButtons = function (newPayload) {
        if (!this.secondary) {
            return;
        }
        var buttonToUpdate = this.secondary.find(function (action) { return action.id === newPayload.id; });
        if (!buttonToUpdate) {
            return;
        }
        var updated = false;
        if (ButtonGroup_1.isGroupedButtonPayload(newPayload)) {
            updated = helper_1.updateActionFromPayload(buttonToUpdate, newPayload);
        }
        else {
            updated = helper_1.updateActionFromPayload(buttonToUpdate, newPayload);
        }
        if (updated) {
            this.dispatch(types_2.Action.UPDATE);
        }
    };
    TitleBar.prototype.updateBreadcrumbButton = function (newPayload) {
        if (!this.breadcrumb) {
            return;
        }
        if (helper_1.updateActionFromPayload(this.breadcrumb, newPayload)) {
            this.dispatch(types_2.Action.UPDATE);
        }
    };
    TitleBar.prototype.setPrimaryButton = function (newOptions) {
        this.primaryOptions = this.getChildButton(newOptions, this.primaryOptions);
        this.primary = this.primaryOptions
            ? this.getButton(this.primaryOptions, TITLEBAR_BUTTON_PROPS.subgroups, this.updatePrimaryButton)
            : undefined;
    };
    TitleBar.prototype.setSecondaryButton = function (newOptions) {
        var _this = this;
        var newButtons = newOptions || [];
        var currentButtons = this.secondaryOptions || [];
        this.secondaryOptions = this.getUpdatedChildActions(newButtons, currentButtons);
        this.secondary = this.secondaryOptions
            ? this.secondaryOptions.map(function (action) {
                return _this.getButton(action, TITLEBAR_BUTTON_PROPS.subgroups, _this.updateSecondaryButtons);
            })
            : undefined;
    };
    TitleBar.prototype.setBreadcrumbs = function (breadcrumb) {
        this.breadcrumbsOption = this.getChildButton(breadcrumb, this.breadcrumbsOption);
        this.breadcrumb = this.breadcrumbsOption
            ? this.getButton(this.breadcrumbsOption, BREADCRUMB_BUTTON_PROPS.subgroups, this.updateBreadcrumbButton)
            : undefined;
    };
    TitleBar.prototype.getChildButton = function (newAction, currentAction) {
        var newButtons = newAction ? [newAction] : [];
        var currentButtons = currentAction ? [currentAction] : [];
        var updatedButton = this.getUpdatedChildActions(newButtons, currentButtons);
        return updatedButton ? updatedButton[0] : undefined;
    };
    return TitleBar;
}(helper_1.ActionSetWithChildren));
exports.TitleBar = TitleBar;
function create(app, options) {
    return new TitleBar(app, options);
}
exports.create = create;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/TitleBar/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/TitleBar/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./actions */ "./node_modules/@shopify/app-bridge/actions/TitleBar/actions.js"), exports);
__exportStar(__webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/TitleBar/types.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/TitleBar/types.js":
/*!********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/TitleBar/types.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionType = exports.Action = void 0;
var Action;
(function (Action) {
    Action["UPDATE"] = "UPDATE";
})(Action = exports.Action || (exports.Action = {}));
var ActionType;
(function (ActionType) {
    ActionType["UPDATE"] = "APP::TITLEBAR::UPDATE";
    ActionType["BUTTON_CLICK"] = "APP::TITLEBAR::BUTTONS::BUTTON::CLICK";
    ActionType["BUTTON_UPDATE"] = "APP::TITLEBAR::BUTTONS::BUTTON::UPDATE";
    ActionType["BUTTON_GROUP_UPDATE"] = "APP::TITLEBAR::BUTTONS::BUTTONGROUP::UPDATE";
    ActionType["BREADCRUMBS_CLICK"] = "APP::TITLEBAR::BREADCRUMBS::BUTTON::CLICK";
    ActionType["BREADCRUMBS_UPDATE"] = "APP::TITLEBAR::BREADCRUMBS::BUTTON::UPDATE";
})(ActionType = exports.ActionType || (exports.ActionType = {}));


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Toast/actions.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Toast/actions.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.Toast = exports.clear = exports.show = void 0;
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var types_2 = __webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/Toast/types.js");
function show(toastMessage) {
    return helper_1.actionWrapper({
        group: types_1.Group.Toast,
        payload: toastMessage,
        type: types_2.ActionType.SHOW,
    });
}
exports.show = show;
function clear(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Toast,
        type: types_2.ActionType.CLEAR,
    });
}
exports.clear = clear;
var Toast = /** @class */ (function (_super) {
    __extends(Toast, _super);
    function Toast(app, options) {
        var _this = _super.call(this, app, types_1.Group.Toast, types_1.Group.Toast) || this;
        _this.message = '';
        _this.duration = 5000;
        _this.set(options);
        return _this;
    }
    Object.defineProperty(Toast.prototype, "options", {
        get: function () {
            return {
                duration: this.duration,
                isError: this.isError,
                message: this.message,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Toast.prototype, "payload", {
        get: function () {
            return __assign({ id: this.id }, this.options);
        },
        enumerable: false,
        configurable: true
    });
    Toast.prototype.set = function (options) {
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var message = mergedOptions.message, duration = mergedOptions.duration, isError = mergedOptions.isError;
        this.message = message;
        this.duration = duration;
        this.isError = isError;
        return this;
    };
    Toast.prototype.dispatch = function (action) {
        switch (action) {
            case types_2.Action.SHOW:
                var openAction = show(this.payload);
                this.app.dispatch(openAction);
                break;
            case types_2.Action.CLEAR:
                this.app.dispatch(clear({ id: this.id }));
                break;
        }
        return this;
    };
    return Toast;
}(helper_1.ActionSet));
exports.Toast = Toast;
function create(app, options) {
    return new Toast(app, options);
}
exports.create = create;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Toast/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Toast/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./actions */ "./node_modules/@shopify/app-bridge/actions/Toast/actions.js"), exports);
__exportStar(__webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/Toast/types.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Toast/types.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Toast/types.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = exports.ActionType = void 0;
var ActionType;
(function (ActionType) {
    ActionType["SHOW"] = "APP::TOAST::SHOW";
    ActionType["CLEAR"] = "APP::TOAST::CLEAR";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var Action;
(function (Action) {
    Action["SHOW"] = "SHOW";
    Action["CLEAR"] = "CLEAR";
})(Action = exports.Action || (exports.Action = {}));


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/buttonGroupHelper.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/buttonGroupHelper.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getGroupedButton = void 0;
var ButtonGroup_1 = __webpack_require__(/*! ./ButtonGroup */ "./node_modules/@shopify/app-bridge/actions/ButtonGroup/index.js");
function getGroupedButton(action, button, subgroups, updateCb) {
    action.addChild(button, action.group, subgroups);
    var id = button.id, label = button.label, disabled = button.disabled, buttons = button.buttons;
    action.subscribeToChild(button, ButtonGroup_1.Action.UPDATE, updateCb);
    return { id: id, label: label, buttons: buttons, disabled: disabled };
}
exports.getGroupedButton = getGroupedButton;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/buttonHelper.js":
/*!******************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/buttonHelper.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleButton = void 0;
var Button_1 = __webpack_require__(/*! ./Button */ "./node_modules/@shopify/app-bridge/actions/Button/index.js");
function getSingleButton(action, button, subgroups, updateCb) {
    action.addChild(button, action.group, subgroups);
    action.subscribeToChild(button, Button_1.Action.UPDATE, updateCb);
    return button.payload;
}
exports.getSingleButton = getSingleButton;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/constants.js":
/*!***************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/constants.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SEPARATOR = exports.PREFIX = void 0;
exports.PREFIX = 'APP';
exports.SEPARATOR = '::';


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/helper.js":
/*!************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/helper.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonSnakeCaseGroup = exports.findMatchInEnum = exports.forEachInEnum = exports.getMergedProps = exports.updateActionFromPayload = exports.ActionSetWithChildren = exports.ActionSet = exports.isValidOptionalString = exports.isValidOptionalNumber = exports.getEventNameSpace = exports.getVersion = exports.actionWrapper = void 0;
var types_1 = __webpack_require__(/*! ../client/types */ "./node_modules/@shopify/app-bridge/client/types.js");
var collection_1 = __webpack_require__(/*! ../util/collection */ "./node_modules/@shopify/app-bridge/util/collection.js");
var Error_1 = __webpack_require__(/*! ./Error */ "./node_modules/@shopify/app-bridge/actions/Error/index.js");
var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/@shopify/app-bridge/actions/constants.js");
var merge_1 = __importDefault(__webpack_require__(/*! ./merge */ "./node_modules/@shopify/app-bridge/actions/merge.js"));
var types_2 = __webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var uuid_1 = __importDefault(__webpack_require__(/*! ./uuid */ "./node_modules/@shopify/app-bridge/actions/uuid.js"));
var packageJson = __webpack_require__(/*! ../package.json */ "./node_modules/@shopify/app-bridge/package.json");
function actionWrapper(action) {
    return __assign(__assign({}, action), { version: getVersion(), clientInterface: {
            name: packageJson.name,
            version: getVersion(),
        } });
}
exports.actionWrapper = actionWrapper;
function getVersion() {
    return packageJson.version;
}
exports.getVersion = getVersion;
/**
 * Returns full event name with prefix, group, subgroups and type formatted with separators
 * @internal
 * */
function getEventNameSpace(group, eventName, component) {
    var eventNameSpace = groupToEventNameSpace(group);
    if (component) {
        var subgroups_1 = component.subgroups, type = component.type;
        if (subgroups_1 && subgroups_1.length > 0) {
            eventNameSpace += eventNameSpace.length > 0 ? constants_1.SEPARATOR : '';
            subgroups_1.forEach(function (subgroup, index) {
                eventNameSpace += "" + subgroup.toUpperCase() + (index < subgroups_1.length - 1 ? constants_1.SEPARATOR : '');
            });
        }
        if (type !== group && type) {
            eventNameSpace += "" + (eventNameSpace.length > 0 ? constants_1.SEPARATOR : '') + type.toUpperCase();
        }
    }
    if (eventNameSpace) {
        eventNameSpace += "" + (eventNameSpace.length > 0 ? constants_1.SEPARATOR : '') + eventName.toUpperCase();
    }
    return "" + constants_1.PREFIX + constants_1.SEPARATOR + eventNameSpace;
}
exports.getEventNameSpace = getEventNameSpace;
function isValidOptionalNumber(value) {
    return value === null || value === undefined || typeof value === 'number';
}
exports.isValidOptionalNumber = isValidOptionalNumber;
function isValidOptionalString(value) {
    return value === null || value === undefined || typeof value === 'string';
}
exports.isValidOptionalString = isValidOptionalString;
var ActionSet = /** @class */ (function () {
    function ActionSet(app, type, group, id) {
        var _this = this;
        this.app = app;
        this.type = type;
        this.group = group;
        this.subgroups = [];
        this.subscriptions = [];
        if (!app) {
            Error_1.throwError(Error_1.ActionType.INVALID_OPTIONS, 'Missing required `app`');
        }
        this.id = id || uuid_1.default();
        this.defaultGroup = group;
        var defaultSet = this.set;
        this.set = function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!_this.app.hooks) {
                return defaultSet.apply(_this, args);
            }
            return (_a = _this.app.hooks).run.apply(_a, __spreadArrays([types_1.LifecycleHook.UpdateAction, defaultSet, _this], args));
        };
    }
    ActionSet.prototype.set = function () {
        var _ = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _[_i] = arguments[_i];
        }
    };
    Object.defineProperty(ActionSet.prototype, "component", {
        get: function () {
            return {
                id: this.id,
                subgroups: this.subgroups,
                type: this.type,
            };
        },
        enumerable: false,
        configurable: true
    });
    ActionSet.prototype.updateSubscription = function (subscriptionToRemove, group, subgroups) {
        var eventType = subscriptionToRemove.eventType, callback = subscriptionToRemove.callback, component = subscriptionToRemove.component;
        var currentIndex;
        currentIndex = this.subscriptions.findIndex(function (subscription) { return subscription === subscriptionToRemove; });
        if (currentIndex >= 0) {
            this.subscriptions[currentIndex].unsubscribe();
        }
        else {
            currentIndex = undefined;
        }
        this.group = group;
        this.subgroups = subgroups;
        Object.assign(component, { subgroups: this.subgroups });
        return this.subscribe(eventType, callback, component, currentIndex);
    };
    ActionSet.prototype.error = function (callback) {
        var _this = this;
        var subscriptionIndices = [];
        forEachInEnum(Error_1.Action, function (eventNameSpace) {
            // Keep track of subscription index so we can call unsubscribe later
            // This ensure it will continue to work even when the subscription has been updated
            subscriptionIndices.push(_this.subscriptions.length);
            _this.subscribe(eventNameSpace, callback);
        });
        return function () {
            var subscriptionsToRemove = subscriptionIndices.map(function (index) { return _this.subscriptions[index]; });
            subscriptionsToRemove.forEach(function (toRemove) {
                collection_1.removeFromCollection(_this.subscriptions, toRemove, function (removed) {
                    removed.unsubscribe();
                });
            });
        };
    };
    ActionSet.prototype.subscribe = function (eventName, callback, component, currentIndex) {
        var _this = this;
        var eventComponent = component || this.component;
        var eventType = eventName.toUpperCase();
        var boundedCallback = typeof currentIndex === 'number' ? callback : callback.bind(this);
        var eventNameSpace;
        if (Error_1.isErrorEventName(eventName)) {
            eventNameSpace = getEventNameSpace(types_2.Group.Error, eventName, __assign(__assign({}, eventComponent), { type: '' }));
        }
        else {
            eventNameSpace = getEventNameSpace(this.group, eventName, eventComponent);
        }
        var unsubscribe = this.app.subscribe(eventNameSpace, boundedCallback, component ? component.id : this.id);
        var subscription = {
            eventType: eventType,
            unsubscribe: unsubscribe,
            callback: boundedCallback,
            component: eventComponent,
            updateSubscribe: function (group, subgroups) {
                return _this.updateSubscription.call(_this, subscription, group, subgroups);
            },
        };
        if (typeof currentIndex === 'number' &&
            currentIndex >= 0 &&
            currentIndex < this.subscriptions.length) {
            this.subscriptions[currentIndex] = subscription;
        }
        else {
            this.subscriptions.push(subscription);
        }
        return unsubscribe;
    };
    ActionSet.prototype.unsubscribe = function (resetOnly) {
        if (resetOnly === void 0) { resetOnly = false; }
        unsubscribeActions(this.subscriptions, this.defaultGroup, resetOnly);
        return this;
    };
    return ActionSet;
}());
exports.ActionSet = ActionSet;
var ActionSetWithChildren = /** @class */ (function (_super) {
    __extends(ActionSetWithChildren, _super);
    function ActionSetWithChildren() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = [];
        return _this;
    }
    ActionSetWithChildren.prototype.unsubscribe = function (unsubscribeChildren, resetParentOnly) {
        if (unsubscribeChildren === void 0) { unsubscribeChildren = true; }
        if (resetParentOnly === void 0) { resetParentOnly = false; }
        unsubscribeActions(this.subscriptions, this.defaultGroup, resetParentOnly);
        this.children.forEach(function (child) {
            if (ActionSetWithChildren.prototype.isPrototypeOf(child)) {
                child.unsubscribe(unsubscribeChildren, !unsubscribeChildren);
            }
            else {
                child.unsubscribe(!unsubscribeChildren);
            }
        });
        return this;
    };
    ActionSetWithChildren.prototype.getChild = function (id) {
        var childIndex = this.children.findIndex(function (child) { return child.id === id; });
        return childIndex >= 0 ? this.children[childIndex] : undefined;
    };
    ActionSetWithChildren.prototype.getChildIndex = function (id) {
        return this.children.findIndex(function (child) { return child.id === id; });
    };
    ActionSetWithChildren.prototype.getChildSubscriptions = function (id, eventType) {
        return this.subscriptions.filter(function (sub) { return sub.component.id === id && (!eventType || eventType === sub.eventType); });
    };
    ActionSetWithChildren.prototype.addChild = function (child, group, subgroups) {
        var _this = this;
        var subscriptions = child.subscriptions;
        var existingChild = this.getChild(child.id);
        // Add child if it doesn't already exist
        if (!existingChild) {
            this.children.push(child);
        }
        if (!subscriptions || (group === child.group && subgroups === child.subgroups)) {
            return this;
        }
        subscriptions.forEach(function (subscription) {
            var updateSubscribe = subscription.updateSubscribe;
            updateSubscribe(group, subgroups);
        });
        // Update child's group and subgroups
        Object.assign(child, { group: group, subgroups: subgroups });
        // Update child's children subscriptions
        if (ActionSetWithChildren.prototype.isPrototypeOf(child)) {
            child.children.forEach(function (c) { return _this.addChild(c, group, subgroups); });
        }
        return this;
    };
    ActionSetWithChildren.prototype.removeChild = function (id) {
        var _this = this;
        collection_1.removeFromCollection(this.children, this.getChild(id), function () {
            var toBeRemoved = _this.subscriptions.filter(function (subs) { return subs.component.id === id; });
            toBeRemoved.forEach(function (toRemove) {
                collection_1.removeFromCollection(_this.subscriptions, toRemove, function (removed) {
                    removed.unsubscribe();
                });
            });
        });
        return this;
    };
    ActionSetWithChildren.prototype.subscribeToChild = function (child, eventName, callback) {
        var _this = this;
        var boundedCallback = callback.bind(this);
        if (eventName instanceof Array) {
            eventName.forEach(function (e) { return _this.subscribeToChild(child, e, callback); });
            return this;
        }
        if (typeof eventName !== 'string') {
            return this;
        }
        var eventType = eventName.toUpperCase();
        var currentSubscriptions = this.getChildSubscriptions(child.id, eventType);
        if (currentSubscriptions.length > 0) {
            // Subscription is already there, simply update it
            currentSubscriptions.forEach(function (subs) { return subs.updateSubscribe(_this.group, child.subgroups); });
        }
        else {
            var childComponent = {
                id: child.id,
                subgroups: child.subgroups,
                type: child.type,
            };
            this.subscribe(eventType, boundedCallback, childComponent);
        }
        return this;
    };
    ActionSetWithChildren.prototype.getUpdatedChildActions = function (newActions, currentActions) {
        if (newActions.length === 0) {
            while (currentActions.length > 0) {
                var action = currentActions.pop();
                if (!action) {
                    break;
                }
                this.removeChild(action.id);
            }
            return undefined;
        }
        // Only allow unique actions
        var uniqueActions = newActions.filter(function (action, index, actionsArr) { return index === actionsArr.indexOf(action); });
        var newActionIds = uniqueActions.map(function (action) { return action.id; });
        // Remove unused actions
        var unusedActions = currentActions.filter(function (action) {
            return newActionIds.indexOf(action.id) < 0;
        });
        while (unusedActions.length > 0) {
            var action = unusedActions.pop();
            if (!action) {
                break;
            }
            this.removeChild(action.id);
        }
        return uniqueActions;
    };
    return ActionSetWithChildren;
}(ActionSet));
exports.ActionSetWithChildren = ActionSetWithChildren;
function unsubscribeActions(subscriptions, defaultGroup, reassign) {
    if (reassign === void 0) { reassign = false; }
    subscriptions.forEach(function (subscription) {
        if (reassign) {
            var updateSubscribe = subscription.updateSubscribe;
            // TODO: Support cases where we don't wipe out group and subgroups to defaults
            updateSubscribe(defaultGroup, []);
        }
        else {
            var unsubscribe = subscription.unsubscribe;
            unsubscribe();
        }
    });
    if (!reassign) {
        subscriptions.length = 0;
    }
}
function updateActionFromPayload(action, newProps) {
    var id = action.id;
    if (id === newProps.id) {
        // Merge new properties
        Object.assign(action, getMergedProps(action, newProps));
        return true;
    }
    return false;
}
exports.updateActionFromPayload = updateActionFromPayload;
function getMergedProps(props, newProps) {
    var merged = merge_1.default(props, newProps);
    if (!merged) {
        // tslint:disable-next-line:prefer-object-spread
        var cloned = Object.assign(props, newProps);
        return cloned;
    }
    return merged;
}
exports.getMergedProps = getMergedProps;
function forEachInEnum(types, callback) {
    Object.keys(types).forEach(function (key) {
        callback(types[key]);
    });
}
exports.forEachInEnum = forEachInEnum;
function findMatchInEnum(types, lookup) {
    var match = Object.keys(types).find(function (key) {
        return lookup === types[key];
    });
    return match ? types[match] : undefined;
}
exports.findMatchInEnum = findMatchInEnum;
function camelCaseToSnakeCase(value) {
    return value.replace(/([A-Z])/g, function (matcher, _val, index) {
        return "" + (index !== 0 ? '_' : '') + matcher[0].toLowerCase();
    });
}
exports.NonSnakeCaseGroup = [
    types_2.Group.AuthCode,
    types_2.Group.Button,
    types_2.Group.ButtonGroup,
    types_2.Group.Cart,
    types_2.Group.Error,
    types_2.Group.Features,
    types_2.Group.Fullscreen,
    types_2.Group.Link,
    types_2.Group.Loading,
    types_2.Group.Menu,
    types_2.Group.Modal,
    types_2.Group.Navigation,
    types_2.Group.Pos,
    types_2.Group.Print,
    types_2.Group.ResourcePicker,
    types_2.Group.Scanner,
    types_2.Group.SessionToken,
    types_2.Group.Share,
    types_2.Group.TitleBar,
    types_2.Group.Toast,
];
/**
 * Maps the group name to its event name
 * @internal
 * @remarks - This method is necessary for the new pattern of using snake case
 * which makes it more readable and easier to reconstruct the group from an event name.
 * Example: `ContextualSaveBar` becomes `CONTEXTUAL_SAVE_BAR`
 * */
function groupToEventNameSpace(group) {
    if (exports.NonSnakeCaseGroup.includes(group)) {
        return group.toUpperCase();
    }
    return camelCaseToSnakeCase(group).toUpperCase();
}


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Performance = exports.Pos = exports.AppLink = exports.ChannelMenu = exports.NavigationMenu = exports.Share = exports.ContextualSaveBar = exports.MarketingExternalActivityTopBar = exports.TitleBar = exports.SessionToken = exports.ResourcePicker = exports.Redirect = exports.Print = exports.Modal = exports.Loading = exports.LeaveConfirmation = exports.History = exports.Toast = exports.Fullscreen = exports.FeedbackModal = exports.Features = exports.Flash = exports.Error = exports.Cart = exports.Scanner = exports.ButtonGroup = exports.Button = exports.AuthCode = void 0;
var AuthCode = __importStar(__webpack_require__(/*! ./AuthCode */ "./node_modules/@shopify/app-bridge/actions/AuthCode/index.js"));
exports.AuthCode = AuthCode;
var Button = __importStar(__webpack_require__(/*! ./Button */ "./node_modules/@shopify/app-bridge/actions/Button/index.js"));
exports.Button = Button;
var ButtonGroup = __importStar(__webpack_require__(/*! ./ButtonGroup */ "./node_modules/@shopify/app-bridge/actions/ButtonGroup/index.js"));
exports.ButtonGroup = ButtonGroup;
var Cart = __importStar(__webpack_require__(/*! ./Cart */ "./node_modules/@shopify/app-bridge/actions/Cart/index.js"));
exports.Cart = Cart;
var Error = __importStar(__webpack_require__(/*! ./Error */ "./node_modules/@shopify/app-bridge/actions/Error/index.js"));
exports.Error = Error;
var Flash = __importStar(__webpack_require__(/*! ./Flash */ "./node_modules/@shopify/app-bridge/actions/Flash/index.js"));
exports.Flash = Flash;
var Features = __importStar(__webpack_require__(/*! ./Features */ "./node_modules/@shopify/app-bridge/actions/Features/index.js"));
exports.Features = Features;
var FeedbackModal = __importStar(__webpack_require__(/*! ./FeedbackModal */ "./node_modules/@shopify/app-bridge/actions/FeedbackModal/index.js"));
exports.FeedbackModal = FeedbackModal;
var Fullscreen = __importStar(__webpack_require__(/*! ./Fullscreen */ "./node_modules/@shopify/app-bridge/actions/Fullscreen/index.js"));
exports.Fullscreen = Fullscreen;
var LeaveConfirmation = __importStar(__webpack_require__(/*! ./LeaveConfirmation */ "./node_modules/@shopify/app-bridge/actions/LeaveConfirmation/index.js"));
exports.LeaveConfirmation = LeaveConfirmation;
var Loading = __importStar(__webpack_require__(/*! ./Loading */ "./node_modules/@shopify/app-bridge/actions/Loading/index.js"));
exports.Loading = Loading;
var Modal = __importStar(__webpack_require__(/*! ./Modal */ "./node_modules/@shopify/app-bridge/actions/Modal/index.js"));
exports.Modal = Modal;
var History = __importStar(__webpack_require__(/*! ./Navigation/History */ "./node_modules/@shopify/app-bridge/actions/Navigation/History/index.js"));
exports.History = History;
var Redirect = __importStar(__webpack_require__(/*! ./Navigation/Redirect */ "./node_modules/@shopify/app-bridge/actions/Navigation/Redirect/index.js"));
exports.Redirect = Redirect;
var Print = __importStar(__webpack_require__(/*! ./Print */ "./node_modules/@shopify/app-bridge/actions/Print/index.js"));
exports.Print = Print;
var ResourcePicker = __importStar(__webpack_require__(/*! ./ResourcePicker */ "./node_modules/@shopify/app-bridge/actions/ResourcePicker/index.js"));
exports.ResourcePicker = ResourcePicker;
var Scanner = __importStar(__webpack_require__(/*! ./Scanner */ "./node_modules/@shopify/app-bridge/actions/Scanner/index.js"));
exports.Scanner = Scanner;
var SessionToken = __importStar(__webpack_require__(/*! ./SessionToken */ "./node_modules/@shopify/app-bridge/actions/SessionToken/index.js"));
exports.SessionToken = SessionToken;
var TitleBar = __importStar(__webpack_require__(/*! ./TitleBar */ "./node_modules/@shopify/app-bridge/actions/TitleBar/index.js"));
exports.TitleBar = TitleBar;
var Toast = __importStar(__webpack_require__(/*! ./Toast */ "./node_modules/@shopify/app-bridge/actions/Toast/index.js"));
exports.Toast = Toast;
var ContextualSaveBar = __importStar(__webpack_require__(/*! ./ContextualSaveBar */ "./node_modules/@shopify/app-bridge/actions/ContextualSaveBar/index.js"));
exports.ContextualSaveBar = ContextualSaveBar;
var Share = __importStar(__webpack_require__(/*! ./Share */ "./node_modules/@shopify/app-bridge/actions/Share/index.js"));
exports.Share = Share;
var NavigationMenu = __importStar(__webpack_require__(/*! ./Menu/NavigationMenu */ "./node_modules/@shopify/app-bridge/actions/Menu/NavigationMenu/index.js"));
exports.NavigationMenu = NavigationMenu;
var ChannelMenu = __importStar(__webpack_require__(/*! ./Menu/ChannelMenu */ "./node_modules/@shopify/app-bridge/actions/Menu/ChannelMenu/index.js"));
exports.ChannelMenu = ChannelMenu;
var AppLink = __importStar(__webpack_require__(/*! ./Link/AppLink */ "./node_modules/@shopify/app-bridge/actions/Link/AppLink/index.js"));
exports.AppLink = AppLink;
var Pos = __importStar(__webpack_require__(/*! ./Pos */ "./node_modules/@shopify/app-bridge/actions/Pos/index.js"));
exports.Pos = Pos;
var MarketingExternalActivityTopBar = __importStar(__webpack_require__(/*! ./MarketingExternalActivityTopBar */ "./node_modules/@shopify/app-bridge/actions/MarketingExternalActivityTopBar/index.js"));
exports.MarketingExternalActivityTopBar = MarketingExternalActivityTopBar;
var Performance = __importStar(__webpack_require__(/*! ./Performance */ "./node_modules/@shopify/app-bridge/actions/Performance/index.js"));
exports.Performance = Performance;
var validator_1 = __webpack_require__(/*! ./validator */ "./node_modules/@shopify/app-bridge/actions/validator.js");
Object.defineProperty(exports, "isAppBridgeAction", { enumerable: true, get: function () { return validator_1.isAppBridgeAction; } });
__exportStar(__webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/types.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/merge.js":
/*!***********************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/merge.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns a deeply merged object with properties from the 2 provided objects
 * @remarks - Only deeply merge objects. The second argument overrides the
 * first if it is provided as `null`, `undefined` or an array.
 * @public
 * */
function mergeProps(obj, newObj) {
    if (newObj == null) {
        return newObj;
    }
    // If setting to a different prototype or a non-object or non-array, don't merge any props
    if (typeof obj === 'undefined' ||
        !Object.getPrototypeOf(obj).isPrototypeOf(newObj) ||
        (newObj.constructor.name !== 'Object' && newObj.constructor.name !== 'Array')) {
        return newObj;
    }
    var clone = {};
    Object.keys(newObj).forEach(function (key) {
        var exists = obj.hasOwnProperty(key);
        if (!exists) {
            clone[key] = newObj[key];
        }
        else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            clone[key] = mergeProps(obj[key], newObj[key]);
        }
        else {
            clone[key] = newObj[key];
        }
    });
    // Copy old props that are not present in new object only if this is a simple object
    Object.keys(obj).forEach(function (key) {
        var exists = newObj.hasOwnProperty(key);
        if (!exists) {
            clone[key] = obj[key];
        }
    });
    // Set prototype of cloned object to match original
    Object.setPrototypeOf(clone, Object.getPrototypeOf(obj));
    return clone;
}
exports.default = mergeProps;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/types.js":
/*!***********************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/types.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentType = exports.Group = void 0;
/**
 * Various action groups.
 * @public
 */
var Group;
(function (Group) {
    Group["AuthCode"] = "AuthCode";
    Group["Button"] = "Button";
    Group["ButtonGroup"] = "ButtonGroup";
    Group["Cart"] = "Cart";
    Group["ContextualSaveBar"] = "ContextualSaveBar";
    Group["Error"] = "Error";
    Group["Features"] = "Features";
    Group["FeedbackModal"] = "FeedbackModal";
    Group["Fullscreen"] = "Fullscreen";
    Group["LeaveConfirmation"] = "LeaveConfirmation";
    Group["Link"] = "Link";
    Group["Loading"] = "Loading";
    Group["Menu"] = "Menu";
    Group["Modal"] = "Modal";
    Group["Navigation"] = "Navigation";
    Group["Performance"] = "Performance";
    Group["Pos"] = "Pos";
    Group["Print"] = "Print";
    Group["ResourcePicker"] = "Resource_Picker";
    Group["Scanner"] = "Scanner";
    Group["SessionToken"] = "SessionToken";
    Group["Share"] = "Share";
    Group["TitleBar"] = "TitleBar";
    Group["Toast"] = "Toast";
    Group["MarketingExternalActivityTopBar"] = "MarketingExternalActivityTopBar";
})(Group = exports.Group || (exports.Group = {}));
/**
 * @internal
 */
var ComponentType;
(function (ComponentType) {
    ComponentType["Button"] = "Button";
    ComponentType["ButtonGroup"] = "ButtonGroup";
})(ComponentType = exports.ComponentType || (exports.ComponentType = {}));


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/uuid.js":
/*!**********************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/uuid.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUuid = void 0;
/**
 * Convert a number or array of integers to a string of padded hex octets.
 */
function asHex(value) {
    return Array.from(value)
        .map(function (i) { return ("00" + i.toString(16)).slice(-2); })
        .join('');
}
/**
 * Attempt to securely generate random bytes/
 */
function getRandomBytes(size) {
    // SPRNG
    if (typeof Uint8Array === 'function' && typeof window === 'object' && window.crypto) {
        var buffer = new Uint8Array(size);
        var randomValues = window.crypto.getRandomValues(buffer);
        if (randomValues) {
            return randomValues;
        }
    }
    // Insecure random
    return Array.from(new Array(size), function () { return (Math.random() * 255) | 0; });
}
/**
 * Generate a RFC4122-compliant v4 UUID.
 *
 * @see http://www.ietf.org/rfc/rfc4122.txt
 */
function generateUuid() {
    var version = 64;
    var clockSeqHiAndReserved = getRandomBytes(1);
    var timeHiAndVersion = getRandomBytes(2);
    clockSeqHiAndReserved[0] &= 63 | 128;
    // tslint:disable-next-line:binary-expression-operand-order
    timeHiAndVersion[0] &= 15 | version;
    return [
        asHex(getRandomBytes(4)),
        '-',
        asHex(getRandomBytes(2)),
        '-',
        asHex(timeHiAndVersion),
        '-',
        asHex(clockSeqHiAndReserved),
        asHex(getRandomBytes(1)),
        '-',
        asHex(getRandomBytes(6)),
    ].join('');
}
exports.generateUuid = generateUuid;
// Default
exports.default = generateUuid;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/validator.js":
/*!***************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/validator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isAppMessage = exports.isPermitted = exports.getPermissionKey = exports.isFromApp = exports.isAppBridgeAction = void 0;
var types_1 = __webpack_require__(/*! ../client/types */ "./node_modules/@shopify/app-bridge/client/types.js");
var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/@shopify/app-bridge/actions/constants.js");
var helper_1 = __webpack_require__(/*! ./helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
/**
 * Predicate to determine if an action is an App Bridge action.
 * @public
 */
function isAppBridgeAction(action) {
    return (action instanceof Object &&
        action.hasOwnProperty('type') &&
        action.type.toString().startsWith(constants_1.PREFIX));
}
exports.isAppBridgeAction = isAppBridgeAction;
/**
 * Predicate to determine if an action originated from an application.
 * @internal
 */
function isFromApp(action) {
    if (typeof action !== 'object' || typeof action.source !== 'object') {
        return false;
    }
    return typeof action.source.apiKey === 'string';
}
exports.isFromApp = isFromApp;
/**
 * Returns the action type without the prefix and group
 * @internal
 */
function getPermissionKey(type) {
    return type.replace(new RegExp("^" + constants_1.PREFIX + constants_1.SEPARATOR + "\\w+" + constants_1.SEPARATOR), '');
}
exports.getPermissionKey = getPermissionKey;
/**
 * Predicate to determine if an action is permitted
 * @internal
 */
function isPermitted(features, _a, permissionType) {
    var group = _a.group, type = _a.type;
    if (!group || !features.hasOwnProperty(group)) {
        return false;
    }
    var feature = features[group];
    if (!feature) {
        return false;
    }
    var actionType = getPermissionKey(type);
    return feature[actionType] ? feature[actionType][permissionType] === true : false;
}
exports.isPermitted = isPermitted;
/**
 * Predicate to determine if an event originated from an application.
 * @internal
 */
function isAppMessage(event) {
    if (typeof event !== 'object' || !event.data || typeof event.data !== 'object') {
        return false;
    }
    var data = event.data;
    return data.hasOwnProperty('type') && helper_1.findMatchInEnum(types_1.MessageType, data.type) !== undefined;
}
exports.isAppMessage = isAppMessage;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/client/Client.js":
/*!***********************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/client/Client.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = exports.createAppWrapper = exports.createClientApp = exports.getShopOrigin = exports.getUrlParams = exports.WINDOW_UNDEFINED_MESSAGE = void 0;
var helper_1 = __webpack_require__(/*! ../actions/helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var Error_1 = __webpack_require__(/*! ../actions/Error */ "./node_modules/@shopify/app-bridge/actions/Error/index.js");
var Print_1 = __webpack_require__(/*! ../actions/Print */ "./node_modules/@shopify/app-bridge/actions/Print/index.js");
var MessageTransport_1 = __webpack_require__(/*! ../MessageTransport */ "./node_modules/@shopify/app-bridge/MessageTransport.js");
var shared_1 = __webpack_require__(/*! ../util/shared */ "./node_modules/@shopify/app-bridge/util/shared.js");
var env_1 = __webpack_require__(/*! ../util/env */ "./node_modules/@shopify/app-bridge/util/env.js");
var print_1 = __webpack_require__(/*! ./print */ "./node_modules/@shopify/app-bridge/client/print.js");
var redirect_1 = __webpack_require__(/*! ./redirect */ "./node_modules/@shopify/app-bridge/client/redirect.js");
var types_1 = __webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/client/types.js");
var Hooks_1 = __importDefault(__webpack_require__(/*! ./Hooks */ "./node_modules/@shopify/app-bridge/client/Hooks.js"));
exports.WINDOW_UNDEFINED_MESSAGE = 'window is not defined. Running an app outside a browser is not supported';
function redirectHandler(hostFrame, config) {
    var apiKey = config.apiKey, shopOrigin = config.shopOrigin, _a = config.forceRedirect, forceRedirect = _a === void 0 ? !env_1.isDevelopmentClient : _a;
    var location = redirect_1.getLocation();
    if (env_1.isFrameless ||
        !location ||
        !apiKey ||
        !shopOrigin ||
        !forceRedirect ||
        !redirect_1.shouldRedirect(hostFrame)) {
        return;
    }
    var url = "https://" + shopOrigin + "/admin/apps/" + apiKey + location.pathname + (location.search || '');
    redirect_1.redirect(url);
}
function appSetUp(app) {
    app.subscribe(Print_1.ActionType.APP, print_1.handleAppPrint);
}
/**
 * Extracts the query parameters from the current URL.
 * @deprecated This function has been deprecated.
 * @public
 */
function getUrlParams() {
    var params = {};
    var location = redirect_1.getLocation();
    if (!location) {
        return params;
    }
    var hashes = location.search.slice(location.search.indexOf('?') + 1).split('&');
    return hashes.reduce(function (acc, hash) {
        var _a;
        var _b = hash.split('='), key = _b[0], val = _b[1];
        return __assign(__assign({}, acc), (_a = {}, _a[decodeURIComponent(key)] = decodeURIComponent(val), _a));
    }, params);
}
exports.getUrlParams = getUrlParams;
/**
 * Extracts the `shop` query parameter from the current URL.
 * @deprecated This function has been deprecated, see {@link https://help.shopify.com/api/embedded-apps/shop-origin}
 * @public
 */
function getShopOrigin() {
    var params = getUrlParams();
    return params.shop;
}
exports.getShopOrigin = getShopOrigin;
/**
 * @internal
 */
exports.createClientApp = function (transport, middlewares) {
    if (middlewares === void 0) { middlewares = []; }
    var getStateListeners = [];
    var transportListener = MessageTransport_1.createTransportListener();
    var handler = function (event) {
        var message = event.data;
        var type = message.type, payload = message.payload;
        switch (type) {
            case 'getState':
                var resolvers = getStateListeners.splice(0);
                resolvers.forEach(function (resolver) { return resolver(payload); });
                break;
            case 'dispatch':
                transportListener.handleMessage(payload);
                var hasCallback = transportListener.handleActionDispatch(payload);
                if (hasCallback) {
                    return;
                }
                // Throw an error if there are no subscriptions to this error
                var errorType = helper_1.findMatchInEnum(Error_1.ActionType, payload.type);
                if (errorType) {
                    Error_1.throwError(errorType, payload);
                }
                break;
            default:
            // Silently swallow unknown actions
        }
    };
    transport.subscribe(handler);
    return function (config) {
        if (!config.shopOrigin) {
            throw Error_1.fromAction('shopOrigin must be provided', Error_1.AppActionType.INVALID_CONFIG);
        }
        var protocol = /^https?:\/\//;
        if (protocol.test(config.shopOrigin)) {
            var message = "shopOrigin should not include protocol, please use: " + config.shopOrigin.replace(protocol, '');
            throw Error_1.fromAction(message, Error_1.AppActionType.INVALID_CONFIG);
        }
        if (!config.apiKey) {
            throw Error_1.fromAction('apiKey must be provided', Error_1.AppActionType.INVALID_CONFIG);
        }
        var dispatcher = createDispatcher(transport, config);
        var subscribe = transportListener.createSubscribeHandler(dispatcher);
        // It is possible to initialize an app multiple times
        // Therefore we need to clear subscriptions to be safe
        dispatcher(types_1.MessageType.Unsubscribe);
        function dispatch(action) {
            dispatcher(types_1.MessageType.Dispatch, action);
            return action;
        }
        redirectHandler(transport.hostFrame, config);
        var hooks = new Hooks_1.default();
        var app = {
            localOrigin: transport.localOrigin,
            hooks: hooks,
            dispatch: function (action) {
                if (!app.hooks) {
                    return dispatch(action);
                }
                return app.hooks.run(types_1.LifecycleHook.DispatchAction, dispatch, app, action);
            },
            featuresAvailable: function (features) {
                return app.getState('features').then(function (state) {
                    if (features) {
                        Object.keys(state).forEach(function (feature) {
                            if (!features.includes(feature)) {
                                delete state[feature];
                            }
                        });
                    }
                    return state;
                });
            },
            getState: function (query) {
                return new Promise(function (resolve) {
                    getStateListeners.push(resolve);
                    dispatcher(types_1.MessageType.GetState);
                }).then(function (state) {
                    if (query) {
                        return query.split('.').reduce(function (value, key) {
                            if (typeof state !== 'object' || Array.isArray(state)) {
                                return undefined;
                            }
                            value = state[key];
                            state = value;
                            return value;
                        }, undefined);
                    }
                    return state;
                });
            },
            subscribe: subscribe,
            error: function (listener, id) {
                var unsubscribeCb = [];
                helper_1.forEachInEnum(Error_1.ActionType, function (eventNameSpace) {
                    unsubscribeCb.push(subscribe(eventNameSpace, listener, id));
                });
                return function () {
                    unsubscribeCb.forEach(function (unsubscribe) { return unsubscribe(); });
                };
            },
        };
        for (var _i = 0, middlewares_1 = middlewares; _i < middlewares_1.length; _i++) {
            var middleware = middlewares_1[_i];
            middleware(hooks, app);
        }
        appSetUp(app);
        return app;
    };
};
/**
 * @public
 */
function createAppWrapper(frame, localOrigin, middleware) {
    if (middleware === void 0) { middleware = []; }
    if (!frame) {
        throw Error_1.fromAction(exports.WINDOW_UNDEFINED_MESSAGE, Error_1.AppActionType.WINDOW_UNDEFINED);
    }
    var location = redirect_1.getLocation();
    var origin = localOrigin || (location && location.origin);
    if (!origin) {
        throw Error_1.fromAction('local origin cannot be blank', Error_1.AppActionType.MISSING_LOCAL_ORIGIN);
    }
    var transport = MessageTransport_1.fromWindow(frame, origin);
    var appCreator = exports.createClientApp(transport, middleware);
    return appCreator;
}
exports.createAppWrapper = createAppWrapper;
/**
 * Creates your application instance.
 * @param config - Both `apiKey` and `shopOrigin` are required.
 * @remarks
 * You will need to store `shopOrigin` during the authentication process and then retrieve it for the code to work properly. To learn more about this process, see {@link https://help.shopify.com/api/embedded-apps/shop-origin | Getting and storing the shop origin}.
 * @public
 */
function createApp(config) {
    var currentWindow = redirect_1.getWindow();
    if (!currentWindow) {
        return shared_1.serverAppBridge;
    }
    return createAppWrapper(currentWindow.top)(config);
}
exports.createApp = createApp;
function createDispatcher(transport, config) {
    return function (type, payload) {
        transport.dispatch({
            payload: payload,
            source: config,
            type: type,
        });
    };
}
/**
 * {@inheritdocs createApp}
 * @public
 */
exports.default = createApp;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/client/Hooks.js":
/*!**********************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/client/Hooks.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var collection_1 = __webpack_require__(/*! ../util/collection */ "./node_modules/@shopify/app-bridge/util/collection.js");
/**
 * Shopify App Bridge can be extended with hooks, which run when actions are dispatched and updated.
 * Hooks are middleware functions that can modify or cancel actions.
 *
 * The [validation middleware](../validate/README.md) is implemented using hooks.
 *
 * @remarks
 * Here’s an example hook that modifies all Toast show actions to have a duration of five seconds.
 *
 * ```ts
 * import createApp, {LifecycleHook, DispatchActionHook} from '@shopify/app-bridge';
 * import {Toast} from '@shopify/app-bridge/actions'
 *
 * const app = createApp({apiKey: API_KEY, shopOrigin: SHOP_ORIGIN});
 *
 * function makeToastsFiveSeconds: DispatchActionHook(next) {
 *   return function(action){
 *       if(action.type === Toast.ActionType.SHOW) {
 *         const modifiedAction = {
 *           ...action,
 *           payload: {
 *             ...action.payload,
 *             duration: 5000,
 *           },
 *         };
 *         return next(modifiedAction);
 *       } else {
 *         // don’t modify non-Toast actions
 *         return next(action);
 *       }
 *   }
 * }
 *
 * app.hooks.set(LifecycleHook.DispatchAction, makeToastsFiveSeconds);
 * ```
 *
 * The hook function `makeToastsFiveSeconds()` takes a `next()` function as its argument.
 * The hook function returns an anonymous function, which takes the action being dispatched as its argument.
 *
 * To modify an action, call `next()` with the modified action, as in the example.
 * To cancel an action, don’t call `next()`, and the action will not be dispatched.
 */
var Hooks = /** @class */ (function () {
    function Hooks() {
        this.map = {};
    }
    Hooks.prototype.set = function (hook, handler) {
        if (!this.map.hasOwnProperty(hook)) {
            this.map[hook] = [];
        }
        var value = { handler: handler, remove: function () { } };
        var remove = collection_1.addAndRemoveFromCollection(this.map[hook], value);
        value = { handler: handler, remove: remove };
        return remove;
    };
    Hooks.prototype.get = function (hook) {
        var value = this.map[hook];
        return value ? value.map(function (val) { return val.handler; }) : undefined;
    };
    Hooks.prototype.run = function (hook, final, context) {
        var initialArgs = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            initialArgs[_i - 3] = arguments[_i];
        }
        var index = 0;
        var handlers = this.get(hook) || [];
        function handler() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var childHandler = handlers[index++];
            if (childHandler) {
                return childHandler(handler).apply(context, args);
            }
            return final.apply(context, args);
        }
        return handler.apply(context, initialArgs);
    };
    return Hooks;
}());
exports.default = Hooks;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/client/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/client/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Client_1 = __webpack_require__(/*! ./Client */ "./node_modules/@shopify/app-bridge/client/Client.js");
__exportStar(__webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/client/types.js"), exports);
__exportStar(__webpack_require__(/*! ./Client */ "./node_modules/@shopify/app-bridge/client/Client.js"), exports);
exports.default = Client_1.createClientApp;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/client/print.js":
/*!**********************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/client/print.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAppPrint = void 0;
var redirect_1 = __webpack_require__(/*! ./redirect */ "./node_modules/@shopify/app-bridge/client/redirect.js");
function isRunningOniOS() {
    return navigator.userAgent.indexOf('iOS') >= 0;
}
function createHiddenInput() {
    var currentWindow = redirect_1.getWindow();
    if (!currentWindow || !currentWindow.document || !currentWindow.document.body) {
        return;
    }
    var inputElement = window.document.createElement('input');
    inputElement.style.display = 'none';
    window.document.body.appendChild(inputElement);
    return inputElement;
}
function printWindow() {
    if (!redirect_1.getWindow()) {
        return;
    }
    // @ts-ignore: Fixed in TypeScript 2.8.2
    window.print();
}
function handleMobileAppPrint() {
    var input = createHiddenInput();
    if (!input) {
        return;
    }
    input.select();
    printWindow();
    input.remove();
}
function handleAppPrint() {
    if (isRunningOniOS()) {
        handleMobileAppPrint();
    }
    else {
        printWindow();
    }
}
exports.handleAppPrint = handleAppPrint;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/client/redirect.js":
/*!*************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/client/redirect.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getWindow = exports.getLocation = exports.redirect = exports.shouldRedirect = void 0;
function shouldRedirect(frame) {
    return frame === window;
}
exports.shouldRedirect = shouldRedirect;
function redirect(url) {
    var location = getLocation();
    if (!location) {
        return;
    }
    location.assign(url);
}
exports.redirect = redirect;
function getLocation() {
    return hasWindow() ? window.location : undefined;
}
exports.getLocation = getLocation;
function getWindow() {
    return hasWindow() ? window : undefined;
}
exports.getWindow = getWindow;
function hasWindow() {
    return typeof window !== 'undefined';
}


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/client/types.js":
/*!**********************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/client/types.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LifecycleHook = exports.MessageType = exports.PermissionType = void 0;
/**
 * @internal
 */
var PermissionType;
(function (PermissionType) {
    PermissionType["Dispatch"] = "Dispatch";
    PermissionType["Subscribe"] = "Subscribe";
})(PermissionType = exports.PermissionType || (exports.PermissionType = {}));
/**
 * @internal
 */
var MessageType;
(function (MessageType) {
    MessageType["GetState"] = "getState";
    MessageType["Dispatch"] = "dispatch";
    MessageType["Subscribe"] = "subscribe";
    MessageType["Unsubscribe"] = "unsubscribe";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
/**
 *
 * There are two types of hooks: `LifecycleHook.DispatchAction` and `LifecycleHook.UpdateAction`.
 *
 * @remarks
 * `DispatchAction` hooks are run when an action is dispatched with the `.dispatch()` function:
 *
 * ```js
 * const toastNotice = Toast.create(app, {message: 'Product saved'});
 * toastNotice.dispatch(Toast.Action.SHOW);
 * ```
 *
 * `UpdateAction` hooks are run when an action is updated, using the `.set()` function:
 *
 * ```js
 * toastNotice.set({message: 'Product could not be saved', isError: true});
 * ```
 *
 * @public
 */
var LifecycleHook;
(function (LifecycleHook) {
    LifecycleHook["UpdateAction"] = "UpdateAction";
    LifecycleHook["DispatchAction"] = "DispatchAction";
})(LifecycleHook = exports.LifecycleHook || (exports.LifecycleHook = {}));


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/development.js":
/*!*********************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/development.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
var validate_1 = __importDefault(__webpack_require__(/*! ./validate */ "./node_modules/@shopify/app-bridge/validate/index.js"));
var utils_1 = __webpack_require__(/*! ./validate/utils */ "./node_modules/@shopify/app-bridge/validate/utils.js");
var redirect_1 = __webpack_require__(/*! ./client/redirect */ "./node_modules/@shopify/app-bridge/client/redirect.js");
var client_1 = __webpack_require__(/*! ./client */ "./node_modules/@shopify/app-bridge/client/index.js");
var shared_1 = __webpack_require__(/*! ./util/shared */ "./node_modules/@shopify/app-bridge/util/shared.js");
/**
 * Creates your application instance with validator middleware.
 * @param config - Both `apiKey` and `shopOrigin` are required.
 * @remarks
 * Please note that `forceRedirect` only works in production environment (`shopname.myshopify.com/admin`).
 * You will need to store `shopOrigin` during the authentication process and then retrieve it for the code
 * to work properly. To learn more about this process, see
 * {@link https://help.shopify.com/api/embedded-apps/shop-origin | Getting and storing the shop origin}.
 * @public
 */
function createApp(config) {
    var currentWindow = redirect_1.getWindow();
    if (!currentWindow) {
        return shared_1.serverAppBridge;
    }
    utils_1.mixedAppClientCheck(currentWindow);
    return client_1.createAppWrapper(currentWindow.top, currentWindow.location.origin, [validate_1.default])(config);
}
exports.createApp = createApp;
exports.default = createApp;
__exportStar(__webpack_require__(/*! ./MessageTransport */ "./node_modules/@shopify/app-bridge/MessageTransport.js"), exports);
__exportStar(__webpack_require__(/*! ./client */ "./node_modules/@shopify/app-bridge/client/index.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
var env_1 = __webpack_require__(/*! ./util/env */ "./node_modules/@shopify/app-bridge/util/env.js");
var createApp = env_1.isDevelopment
    ? __webpack_require__(/*! ./development */ "./node_modules/@shopify/app-bridge/development.js").default
    : __webpack_require__(/*! ./production */ "./node_modules/@shopify/app-bridge/production.js").default;
exports.default = createApp;
__exportStar(__webpack_require__(/*! ./MessageTransport */ "./node_modules/@shopify/app-bridge/MessageTransport.js"), exports);
__exportStar(__webpack_require__(/*! ./client */ "./node_modules/@shopify/app-bridge/client/index.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/package.json":
/*!*******************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/package.json ***!
  \*******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, jsdelivr, license, main, name, private, publishConfig, repository, scripts, sideEffects, size-limit, types, unpkg, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"@shopify/app-bridge@^1.28.0\",\"_id\":\"@shopify/app-bridge@1.28.0\",\"_inBundle\":false,\"_integrity\":\"sha512-EAvOAddypfRVSaHO5un9jRiJUcLGfDxdd8s3FAa1yTXVrLD/3RAFEjwYFePuQsJxt9ieaUL17naE3iHK1HywgA==\",\"_location\":\"/@shopify/app-bridge\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"range\",\"registry\":true,\"raw\":\"@shopify/app-bridge@^1.28.0\",\"name\":\"@shopify/app-bridge\",\"escapedName\":\"@shopify%2fapp-bridge\",\"scope\":\"@shopify\",\"rawSpec\":\"^1.28.0\",\"saveSpec\":null,\"fetchSpec\":\"^1.28.0\"},\"_requiredBy\":[\"/@shopify/app-bridge-react\",\"/@shopify/polaris\"],\"_resolved\":\"https://registry.npmjs.org/@shopify/app-bridge/-/app-bridge-1.28.0.tgz\",\"_shasum\":\"8fc2d941d528c7b10aa727ae590fff7ad152a86e\",\"_spec\":\"@shopify/app-bridge@^1.28.0\",\"_where\":\"E:\\\\novostack\\\\shopify\\\\apps\\\\ns-nextjs-shopify\\\\node_modules\\\\@shopify\\\\app-bridge-react\",\"author\":{\"name\":\"Shopify Inc.\"},\"bugs\":{\"url\":\"https://github.com/Shopify/app-bridge/issues\"},\"bundleDependencies\":false,\"deprecated\":false,\"description\":\"[![Build Status](https://travis-ci.com/Shopify/app-bridge.svg?token=RBRyvqQyN525bnfz7J8p&branch=master)](https://travis-ci.com/Shopify/app-bridge) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md) [![npm version](https://badge.fury.io/js/%40shopify%2Fapp-bridge.svg)](https://badge.fury.io/js/%40shopify%2Fapp-bridge.svg) [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@shopify/app-bridge.svg)](https://img.shields.io/bundlephobia/minzip/@shopify/app-bridge.svg)\",\"devDependencies\":{\"@types/node\":\"^10.12.5\"},\"files\":[\"/actions/\",\"/client/\",\"/umd/\",\"/util/\",\"/validate/\",\"/MessageTransport.d.ts\",\"/MessageTransport.js\",\"/development.d.ts\",\"/development.js\",\"/index.d.ts\",\"/index.js\",\"/production.d.ts\",\"/production.js\"],\"gitHead\":\"56eb20c23b9fc9777a03848c06d93e3a0b747026\",\"homepage\":\"https://shopify.dev/tools/app-bridge\",\"jsdelivr\":\"umd/index.js\",\"license\":\"MIT\",\"main\":\"index.js\",\"name\":\"@shopify/app-bridge\",\"private\":false,\"publishConfig\":{\"access\":\"public\",\"@shopify:registry\":\"https://registry.npmjs.org\"},\"repository\":{\"type\":\"git\",\"url\":\"git+ssh://git@github.com/Shopify/app-bridge.git\"},\"scripts\":{\"build\":\"yarn build:tsc && yarn build:umd\",\"build:tsc\":\"NODE_ENV=production tsc\",\"build:umd\":\"NODE_ENV=production webpack -p\",\"check\":\"tsc\",\"clean\":\"cat package.json | node -pe \\\"JSON.parse(require('fs').readFileSync('/dev/stdin').toString()).files.map(f => './'+f).join(' ')\\\" | xargs rm -rf\",\"pack\":\"yarn pack\",\"size\":\"size-limit\"},\"sideEffects\":false,\"size-limit\":[{\"limit\":\"16 KB\",\"path\":\"production.js\"}],\"types\":\"index.d.ts\",\"unpkg\":\"umd/index.js\",\"version\":\"1.28.0\"}");

/***/ }),

/***/ "./node_modules/@shopify/app-bridge/production.js":
/*!********************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/production.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./MessageTransport */ "./node_modules/@shopify/app-bridge/MessageTransport.js"), exports);
__exportStar(__webpack_require__(/*! ./client */ "./node_modules/@shopify/app-bridge/client/index.js"), exports);
var production_1 = __webpack_require__(/*! ./production */ "./node_modules/@shopify/app-bridge/production.js");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return production_1.createApp; } });


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/util/collection.js":
/*!*************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/util/collection.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFromCollection = exports.addAndRemoveFromCollection = void 0;
/**
 * Add an item to a collection, return a function that can then be used to
 * remove the item from the collection. Optionally accepting a callback that is
 * invoked when the item is removed from the collection.
 *
 * @internal
 */
function addAndRemoveFromCollection(collection, item, then) {
    collection.push(item);
    return function () {
        return removeFromCollection(collection, item, then);
    };
}
exports.addAndRemoveFromCollection = addAndRemoveFromCollection;
/**
 * Remove the item from the collection. Optionally accepting a callback that is
 * invoked when the item is removed from the collection.
 *
 * @internal
 */
function removeFromCollection(collection, item, then) {
    var idx = collection.findIndex(function (i) { return i === item; });
    if (idx >= 0) {
        collection.splice(idx, 1);
        if (then) {
            then(item);
        }
        return true;
    }
    return false;
}
exports.removeFromCollection = removeFromCollection;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/util/env.js":
/*!******************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/util/env.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFrameless = exports.isDevelopmentClient = exports.isProduction = exports.isDevelopment = exports.isClient = exports.isServer = void 0;
exports.isServer = typeof window === 'undefined';
exports.isClient = !exports.isServer;
exports.isDevelopment = typeof process !== 'undefined' && process.env && "development" === 'development';
exports.isProduction = !exports.isDevelopment;
exports.isDevelopmentClient = exports.isDevelopment && exports.isClient;
exports.isFrameless = !exports.isServer && window.navigator.userAgent.indexOf(' Frameless ') > 0;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@shopify/app-bridge/util/shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/util/shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.serverAppBridge = void 0;
var Error_1 = __webpack_require__(/*! ../actions/Error */ "./node_modules/@shopify/app-bridge/actions/Error/index.js");
var noop = function () { };
/**
 * @internal
 */
exports.serverAppBridge = {
    dispatch: function () {
        return {};
    },
    error: function () {
        return noop;
    },
    featuresAvailable: function () {
        return Promise.reject(Error_1.fromAction('Feature detection is only available on the client side.', Error_1.AppActionType.WINDOW_UNDEFINED));
    },
    getState: function () {
        return Promise.reject(Error_1.fromAction('State is only available on the client side.', Error_1.AppActionType.WINDOW_UNDEFINED));
    },
    localOrigin: '',
    subscribe: function () {
        return noop;
    },
};


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/validate/actions/button.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/validate/actions/button.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionType = exports.validateAction = exports.validateProps = exports.buttonSchemaWithId = exports.buttonSchema = void 0;
var Button_1 = __webpack_require__(/*! ../../actions/Button */ "./node_modules/@shopify/app-bridge/actions/Button/index.js");
Object.defineProperty(exports, "ActionType", { enumerable: true, get: function () { return Button_1.ActionType; } });
var type_validate_1 = __webpack_require__(/*! ../type-validate */ "./node_modules/@shopify/app-bridge/validate/type-validate.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@shopify/app-bridge/validate/utils.js");
exports.buttonSchema = type_validate_1.matchesObject({
    disabled: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
    label: type_validate_1.matchesString(),
    style: type_validate_1.makeOptional(type_validate_1.matchesEnum(Button_1.Style)),
    icon: type_validate_1.makeOptional(type_validate_1.matchesEnum(Button_1.Icon)),
    loading: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
});
exports.buttonSchemaWithId = type_validate_1.composeSchemas(type_validate_1.matchesObject({
    id: type_validate_1.matchesString(),
}), exports.buttonSchema);
function validateProps(props) {
    return type_validate_1.validate(props, exports.buttonSchema);
}
exports.validateProps = validateProps;
function validateAction(action) {
    var validator = utils_1.createActionValidator(Button_1.ActionType, action.type === Button_1.ActionType.UPDATE ? exports.buttonSchema : undefined, true, true);
    return type_validate_1.validate(action, validator);
}
exports.validateAction = validateAction;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/validate/actions/buttonGroup.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/validate/actions/buttonGroup.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionType = exports.validateAction = exports.validateProps = exports.buttonGroupSchema = void 0;
var ButtonGroup_1 = __webpack_require__(/*! ../../actions/ButtonGroup */ "./node_modules/@shopify/app-bridge/actions/ButtonGroup/index.js");
Object.defineProperty(exports, "ActionType", { enumerable: true, get: function () { return ButtonGroup_1.ActionType; } });
var type_validate_1 = __webpack_require__(/*! ../type-validate */ "./node_modules/@shopify/app-bridge/validate/type-validate.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@shopify/app-bridge/validate/utils.js");
var button_1 = __webpack_require__(/*! ./button */ "./node_modules/@shopify/app-bridge/validate/actions/button.js");
exports.buttonGroupSchema = type_validate_1.composeSchemas(button_1.buttonSchema, type_validate_1.matchesObject({
    buttons: type_validate_1.matchesArray(type_validate_1.makeOptional(button_1.buttonSchemaWithId)),
}));
function validateProps(props) {
    return type_validate_1.validate(props, exports.buttonGroupSchema);
}
exports.validateProps = validateProps;
function validateAction(action) {
    var validator = utils_1.createActionValidator(ButtonGroup_1.ActionType, exports.buttonGroupSchema, true, true);
    return type_validate_1.validate(action, validator);
}
exports.validateAction = validateAction;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/validate/actions/cart.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/validate/actions/cart.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionType = exports.validateAction = void 0;
var Cart_1 = __webpack_require__(/*! ../../actions/Cart */ "./node_modules/@shopify/app-bridge/actions/Cart/index.js");
Object.defineProperty(exports, "ActionType", { enumerable: true, get: function () { return Cart_1.ActionType; } });
var type_validate_1 = __webpack_require__(/*! ../type-validate */ "./node_modules/@shopify/app-bridge/validate/type-validate.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@shopify/app-bridge/validate/utils.js");
var addressSchema = type_validate_1.matchesObject({
    address1: type_validate_1.makeOptional(type_validate_1.matchesString()),
    address2: type_validate_1.makeOptional(type_validate_1.matchesString()),
    city: type_validate_1.makeOptional(type_validate_1.matchesString()),
    company: type_validate_1.makeOptional(type_validate_1.matchesString()),
    firstName: type_validate_1.makeOptional(type_validate_1.matchesString()),
    lastName: type_validate_1.makeOptional(type_validate_1.matchesString()),
    phone: type_validate_1.makeOptional(type_validate_1.matchesString()),
    province: type_validate_1.makeOptional(type_validate_1.matchesString()),
    country: type_validate_1.makeOptional(type_validate_1.matchesString()),
    zip: type_validate_1.makeOptional(type_validate_1.matchesString()),
    name: type_validate_1.makeOptional(type_validate_1.matchesString()),
    provinceCode: type_validate_1.makeOptional(type_validate_1.matchesString()),
    countryCode: type_validate_1.makeOptional(type_validate_1.matchesString()),
});
var discountSchema = type_validate_1.matchesObject({
    amount: type_validate_1.makeOptional(type_validate_1.matchesPositiveInteger()),
    discountDescription: type_validate_1.makeOptional(type_validate_1.matchesString()),
    type: type_validate_1.makeOptional(type_validate_1.matchesString()),
    discountCode: type_validate_1.makeOptional(type_validate_1.matchesString()),
});
var discountAmount = type_validate_1.matchesObject({
    amount: type_validate_1.matchesPositiveNumber(),
    discountDescription: type_validate_1.makeOptional(type_validate_1.matchesString()),
    type: type_validate_1.makeOptional(type_validate_1.matchesString()),
});
var discountCode = type_validate_1.matchesObject({
    discountCode: type_validate_1.matchesString(),
});
var lineItemSchema = type_validate_1.matchesObject({
    price: type_validate_1.makeOptional(type_validate_1.matchesPositiveNumber()),
    quantity: type_validate_1.makeOptional(type_validate_1.matchesPositiveInteger()),
    title: type_validate_1.makeOptional(type_validate_1.matchesString()),
    variantId: type_validate_1.makeOptional(type_validate_1.matchesPositiveInteger()),
    discount: type_validate_1.makeOptional(discountAmount),
});
var updateLineItemSchema = type_validate_1.matchesObject({
    quantity: type_validate_1.matchesPositiveInteger(),
});
var customerSchema = type_validate_1.matchesObject({
    id: type_validate_1.makeOptional(type_validate_1.matchesPositiveInteger()),
    email: type_validate_1.makeOptional(type_validate_1.matchesString()),
    firstName: type_validate_1.makeOptional(type_validate_1.matchesString()),
    lastName: type_validate_1.makeOptional(type_validate_1.matchesString()),
    note: type_validate_1.makeOptional(type_validate_1.matchesString()),
    addresses: type_validate_1.makeOptional(type_validate_1.matchesArray(addressSchema)),
});
var noteSchema = type_validate_1.matchesObject({
    name: type_validate_1.matchesString(),
    value: type_validate_1.matchesString(),
});
var cartSchema = type_validate_1.matchesObject({
    cartDiscount: type_validate_1.makeOptional(discountSchema),
    customer: type_validate_1.makeOptional(customerSchema),
    grandTotal: type_validate_1.makeOptional(type_validate_1.matchesString()),
    lineItems: type_validate_1.makeOptional(type_validate_1.matchesArray(lineItemSchema)),
    noteAttributes: type_validate_1.makeOptional(type_validate_1.matchesArray(noteSchema)),
    subTotal: type_validate_1.makeOptional(type_validate_1.matchesString()),
    taxTotal: type_validate_1.makeOptional(type_validate_1.matchesString()),
});
var propertiesSchema = type_validate_1.composeSchemas(type_validate_1.matchesObject({}), function (value) {
    var validator = type_validate_1.matchesString();
    var schema = Object.keys(value).reduce(function (acc, key) {
        acc[key] = validator;
        return acc;
    }, {});
    return type_validate_1.validate(value, type_validate_1.matchesObject(schema));
});
var matchesStringArray = type_validate_1.matchesArray(type_validate_1.matchesString());
function createDataValidator(data) {
    return utils_1.createActionValidator(Cart_1.ActionType, data ? type_validate_1.matchesObject({ data: data }) : undefined, true, true);
}
function createDataValidatorWithIndex(data) {
    var indexSchema = type_validate_1.matchesObject({ index: type_validate_1.matchesPositiveInteger() });
    if (data) {
        var dataSchema = type_validate_1.matchesObject({ data: data });
        return utils_1.createActionValidator(Cart_1.ActionType, type_validate_1.composeSchemas(indexSchema, dataSchema), true, true);
    }
    return utils_1.createActionValidator(Cart_1.ActionType, indexSchema, true, true);
}
function getDiscountSchema(data) {
    if (data.amount) {
        return discountAmount;
    }
    return discountCode;
}
function validateAction(action) {
    switch (action.type) {
        case Cart_1.ActionType.UPDATE:
            return type_validate_1.validate(action, createDataValidator(cartSchema));
        case Cart_1.ActionType.SET_CUSTOMER:
            return type_validate_1.validate(action, createDataValidator(customerSchema));
        case Cart_1.ActionType.ADD_CUSTOMER_ADDRESS:
            return type_validate_1.validate(action, createDataValidator(addressSchema));
        case Cart_1.ActionType.UPDATE_CUSTOMER_ADDRESS:
            return type_validate_1.validate(action, createDataValidatorWithIndex(addressSchema));
        case Cart_1.ActionType.SET_DISCOUNT:
            return type_validate_1.validate(action, createDataValidator(getDiscountSchema(action.payload.data)));
        case Cart_1.ActionType.SET_PROPERTIES:
            return type_validate_1.validate(action, createDataValidator(propertiesSchema));
        case Cart_1.ActionType.REMOVE_PROPERTIES:
            return type_validate_1.validate(action, createDataValidator(matchesStringArray));
        case Cart_1.ActionType.ADD_LINE_ITEM:
            return type_validate_1.validate(action, createDataValidator(lineItemSchema));
        case Cart_1.ActionType.UPDATE_LINE_ITEM:
            return type_validate_1.validate(action, createDataValidatorWithIndex(updateLineItemSchema));
        case Cart_1.ActionType.REMOVE_LINE_ITEM:
            return type_validate_1.validate(action, createDataValidatorWithIndex());
        case Cart_1.ActionType.SET_LINE_ITEM_DISCOUNT:
            return type_validate_1.validate(action, createDataValidatorWithIndex(discountAmount));
        case Cart_1.ActionType.REMOVE_LINE_ITEM_DISCOUNT:
            return type_validate_1.validate(action, createDataValidatorWithIndex());
        case Cart_1.ActionType.SET_LINE_ITEM_PROPERTIES:
            return type_validate_1.validate(action, createDataValidatorWithIndex(propertiesSchema));
        case Cart_1.ActionType.REMOVE_LINE_ITEM_PROPERTIES:
            return type_validate_1.validate(action, createDataValidatorWithIndex(matchesStringArray));
        case Cart_1.ActionType.FETCH:
        case Cart_1.ActionType.REMOVE_CUSTOMER:
        case Cart_1.ActionType.REMOVE_DISCOUNT:
        case Cart_1.ActionType.CLEAR:
        default:
            return type_validate_1.validate(action, utils_1.createActionValidator(Cart_1.ActionType, undefined, false, true));
    }
}
exports.validateAction = validateAction;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/validate/actions/contextualSaveBar.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/validate/actions/contextualSaveBar.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionType = exports.validateAction = exports.validateProps = exports.contextSaveBarSchema = void 0;
var type_validate_1 = __webpack_require__(/*! ../type-validate */ "./node_modules/@shopify/app-bridge/validate/type-validate.js");
var ContextualSaveBar_1 = __webpack_require__(/*! ../../actions/ContextualSaveBar */ "./node_modules/@shopify/app-bridge/actions/ContextualSaveBar/index.js");
Object.defineProperty(exports, "ActionType", { enumerable: true, get: function () { return ContextualSaveBar_1.ActionType; } });
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@shopify/app-bridge/validate/utils.js");
exports.contextSaveBarSchema = type_validate_1.makeOptional(type_validate_1.matchesObject({
    fullWidth: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
    discardAction: type_validate_1.makeOptional(type_validate_1.matchesObject({
        disabled: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
        discardConfirmationModal: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
    })),
    saveAction: type_validate_1.makeOptional(type_validate_1.matchesObject({
        disabled: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
    })),
    leaveConfirmationDisable: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
}));
function validateProps(props) {
    return type_validate_1.validate(props, exports.contextSaveBarSchema);
}
exports.validateProps = validateProps;
function validateAction(action) {
    var validator = utils_1.createActionValidator(ContextualSaveBar_1.ActionType, exports.contextSaveBarSchema);
    return type_validate_1.validate(action, validator);
}
exports.validateAction = validateAction;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/validate/actions/feedbackModal.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/validate/actions/feedbackModal.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionType = exports.validateAction = exports.validateProps = exports.feedbackModalSchema = void 0;
var FeedbackModal_1 = __webpack_require__(/*! ../../actions/FeedbackModal */ "./node_modules/@shopify/app-bridge/actions/FeedbackModal/index.js");
Object.defineProperty(exports, "ActionType", { enumerable: true, get: function () { return FeedbackModal_1.ActionType; } });
var type_validate_1 = __webpack_require__(/*! ../type-validate */ "./node_modules/@shopify/app-bridge/validate/type-validate.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@shopify/app-bridge/validate/utils.js");
exports.feedbackModalSchema = type_validate_1.matchesObject({
    formId: type_validate_1.matchesPositiveInteger(),
});
function validateProps(props) {
    return type_validate_1.validate(props, exports.feedbackModalSchema);
}
exports.validateProps = validateProps;
function validateAction(action) {
    switch (action.type) {
        case FeedbackModal_1.ActionType.OPEN:
            return type_validate_1.validate(action, utils_1.createActionValidator(FeedbackModal_1.ActionType, exports.feedbackModalSchema, true));
        case FeedbackModal_1.ActionType.CLOSE:
        default:
            return type_validate_1.validate(action, utils_1.createActionValidator(FeedbackModal_1.ActionType));
    }
}
exports.validateAction = validateAction;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/validate/actions/fullscreen.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/validate/actions/fullscreen.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionType = exports.validateAction = void 0;
var Fullscreen_1 = __webpack_require__(/*! ../../actions/Fullscreen */ "./node_modules/@shopify/app-bridge/actions/Fullscreen/index.js");
Object.defineProperty(exports, "ActionType", { enumerable: true, get: function () { return Fullscreen_1.ActionType; } });
var type_validate_1 = __webpack_require__(/*! ../type-validate */ "./node_modules/@shopify/app-bridge/validate/type-validate.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@shopify/app-bridge/validate/utils.js");
/**
 * Performs validation for an fullscreen action
 * @param action the action being dispatched
 * @returns undefined or an array of validation errors
 *
 * @beta
 */
function validateAction(action) {
    var validator = utils_1.createActionValidator(Fullscreen_1.ActionType);
    return type_validate_1.validate(action, validator);
}
exports.validateAction = validateAction;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/validate/actions/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/validate/actions/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = exports.Menu = exports.TitleBar = exports.Toast = exports.ResourcePicker = exports.Print = exports.Navigation = exports.Modal = exports.Loading = exports.LeaveConfirmation = exports.Fullscreen = exports.FeedbackModal = exports.ContextualSaveBar = exports.Cart = exports.Scanner = exports.ButtonGroup = exports.Button = void 0;
var Button = __importStar(__webpack_require__(/*! ./button */ "./node_modules/@shopify/app-bridge/validate/actions/button.js"));
exports.Button = Button;
var Scanner = __importStar(__webpack_require__(/*! ./scanner */ "./node_modules/@shopify/app-bridge/validate/actions/scanner.js"));
exports.Scanner = Scanner;
var Cart = __importStar(__webpack_require__(/*! ./cart */ "./node_modules/@shopify/app-bridge/validate/actions/cart.js"));
exports.Cart = Cart;
var ContextualSaveBar = __importStar(__webpack_require__(/*! ./contextualSaveBar */ "./node_modules/@shopify/app-bridge/validate/actions/contextualSaveBar.js"));
exports.ContextualSaveBar = ContextualSaveBar;
var FeedbackModal = __importStar(__webpack_require__(/*! ./feedbackModal */ "./node_modules/@shopify/app-bridge/validate/actions/feedbackModal.js"));
exports.FeedbackModal = FeedbackModal;
var Fullscreen = __importStar(__webpack_require__(/*! ./fullscreen */ "./node_modules/@shopify/app-bridge/validate/actions/fullscreen.js"));
exports.Fullscreen = Fullscreen;
var LeaveConfirmation = __importStar(__webpack_require__(/*! ./leaveConfirmation */ "./node_modules/@shopify/app-bridge/validate/actions/leaveConfirmation.js"));
exports.LeaveConfirmation = LeaveConfirmation;
var Loading = __importStar(__webpack_require__(/*! ./loading */ "./node_modules/@shopify/app-bridge/validate/actions/loading.js"));
exports.Loading = Loading;
var Modal = __importStar(__webpack_require__(/*! ./modal */ "./node_modules/@shopify/app-bridge/validate/actions/modal.js"));
exports.Modal = Modal;
var Navigation = __importStar(__webpack_require__(/*! ./navigation */ "./node_modules/@shopify/app-bridge/validate/actions/navigation.js"));
exports.Navigation = Navigation;
var Print = __importStar(__webpack_require__(/*! ./print */ "./node_modules/@shopify/app-bridge/validate/actions/print.js"));
exports.Print = Print;
var ButtonGroup = __importStar(__webpack_require__(/*! ./buttonGroup */ "./node_modules/@shopify/app-bridge/validate/actions/buttonGroup.js"));
exports.ButtonGroup = ButtonGroup;
var ResourcePicker = __importStar(__webpack_require__(/*! ./resourcePicker */ "./node_modules/@shopify/app-bridge/validate/actions/resourcePicker.js"));
exports.ResourcePicker = ResourcePicker;
var Toast = __importStar(__webpack_require__(/*! ./toast */ "./node_modules/@shopify/app-bridge/validate/actions/toast.js"));
exports.Toast = Toast;
var TitleBar = __importStar(__webpack_require__(/*! ./titleBar */ "./node_modules/@shopify/app-bridge/validate/actions/titleBar.js"));
exports.TitleBar = TitleBar;
var Menu = __importStar(__webpack_require__(/*! ./menu */ "./node_modules/@shopify/app-bridge/validate/actions/menu.js"));
exports.Menu = Menu;
var Link = __importStar(__webpack_require__(/*! ./link */ "./node_modules/@shopify/app-bridge/validate/actions/link.js"));
exports.Link = Link;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/validate/actions/leaveConfirmation.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/validate/actions/leaveConfirmation.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionType = exports.validateAction = void 0;
var LeaveConfirmation_1 = __webpack_require__(/*! ../../actions/LeaveConfirmation */ "./node_modules/@shopify/app-bridge/actions/LeaveConfirmation/index.js");
Object.defineProperty(exports, "ActionType", { enumerable: true, get: function () { return LeaveConfirmation_1.ActionType; } });
var type_validate_1 = __webpack_require__(/*! ../type-validate */ "./node_modules/@shopify/app-bridge/validate/type-validate.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@shopify/app-bridge/validate/utils.js");
function validateAction(action) {
    var validator = utils_1.createActionValidator(LeaveConfirmation_1.ActionType);
    return type_validate_1.validate(action, validator);
}
exports.validateAction = validateAction;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/validate/actions/link.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/validate/actions/link.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionType = exports.validateAction = exports.validateProps = exports.linkActionSchema = exports.linkPropsSchema = void 0;
var actions_1 = __webpack_require__(/*! ../../actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
var type_validate_1 = __webpack_require__(/*! ../type-validate */ "./node_modules/@shopify/app-bridge/validate/type-validate.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@shopify/app-bridge/validate/utils.js");
var AppLink_1 = __webpack_require__(/*! ../../actions/Link/AppLink */ "./node_modules/@shopify/app-bridge/actions/Link/AppLink/index.js");
Object.defineProperty(exports, "ActionType", { enumerable: true, get: function () { return AppLink_1.ActionType; } });
var allowedRedirectTypes;
(function (allowedRedirectTypes) {
    allowedRedirectTypes["APP"] = "APP";
})(allowedRedirectTypes || (allowedRedirectTypes = {}));
exports.linkPropsSchema = type_validate_1.matchesObject({
    label: type_validate_1.matchesString(),
    destination: utils_1.relativeUrlSchema,
    redirectType: type_validate_1.matchesEnum(allowedRedirectTypes),
});
exports.linkActionSchema = type_validate_1.matchesObject({
    label: type_validate_1.matchesString(),
    destination: utils_1.relativePathSchema,
    redirectType: type_validate_1.matchesEnum(allowedRedirectTypes),
});
function validateProps(props) {
    return type_validate_1.validate(props, exports.linkPropsSchema);
}
exports.validateProps = validateProps;
function validateAction(action) {
    var actionType = actions_1.AppLink.ActionType;
    var schema;
    switch (action.type) {
        case actions_1.AppLink.ActionType.UPDATE:
            actionType = actions_1.AppLink.ActionType;
            schema = exports.linkActionSchema;
    }
    return type_validate_1.validate(action, utils_1.createActionValidator(actionType, schema, true, true));
}
exports.validateAction = validateAction;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/validate/actions/loading.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/validate/actions/loading.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionType = exports.validateAction = void 0;
var Loading_1 = __webpack_require__(/*! ../../actions/Loading */ "./node_modules/@shopify/app-bridge/actions/Loading/index.js");
Object.defineProperty(exports, "ActionType", { enumerable: true, get: function () { return Loading_1.ActionType; } });
var type_validate_1 = __webpack_require__(/*! ../type-validate */ "./node_modules/@shopify/app-bridge/validate/type-validate.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@shopify/app-bridge/validate/utils.js");
function validateAction(action) {
    var validator = utils_1.createActionValidator(Loading_1.ActionType);
    return type_validate_1.validate(action, validator);
}
exports.validateAction = validateAction;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/validate/actions/menu.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/validate/actions/menu.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAction = exports.validateProps = void 0;
var actions_1 = __webpack_require__(/*! ../../actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
var type_validate_1 = __webpack_require__(/*! ../type-validate */ "./node_modules/@shopify/app-bridge/validate/type-validate.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@shopify/app-bridge/validate/utils.js");
var link_1 = __webpack_require__(/*! ./link */ "./node_modules/@shopify/app-bridge/validate/actions/link.js");
var linkOptionsValidator = type_validate_1.matchesObject({ id: type_validate_1.matchesString(), options: link_1.linkPropsSchema });
function activeLinkError(value) {
    return [
        {
            error: 'invalid_active_item',
            value: value,
            message: 'expected active item to exist in menu items',
        },
    ];
}
function getOptionsSchema(options) {
    var baseSchema = type_validate_1.matchesObject({
        items: type_validate_1.makeOptional(type_validate_1.matchesArray(linkOptionsValidator)),
        active: type_validate_1.makeOptional(linkOptionsValidator),
    });
    var items = options.items, active = options.active;
    if (items && active) {
        var activeItemSchema = type_validate_1.matchesObject({
            active: type_validate_1.composeSchemas(linkOptionsValidator, function (value) {
                return items.find(function (item) { return item.id === value.id; }) ? undefined : activeLinkError(value);
            }),
        });
        return type_validate_1.composeSchemas(baseSchema, activeItemSchema);
    }
    return baseSchema;
}
function getPayloadSchema(payload) {
    var baseSchema = type_validate_1.matchesObject({
        items: type_validate_1.makeOptional(type_validate_1.matchesArray(link_1.linkActionSchema)),
        active: type_validate_1.makeOptional(type_validate_1.matchesString()),
    });
    var items = payload.items, active = payload.active;
    if (items && active) {
        var activeItemSchema = type_validate_1.matchesObject({
            active: type_validate_1.composeSchemas(type_validate_1.matchesString(), function (value) {
                return items.find(function (item) { return item.id === value; })
                    ? undefined
                    : activeLinkError(value);
            }),
        });
        return type_validate_1.composeSchemas(baseSchema, activeItemSchema);
    }
    return baseSchema;
}
function validateProps(props) {
    var result = type_validate_1.validate(props, getOptionsSchema(props));
    return result;
}
exports.validateProps = validateProps;
function validateAction(action) {
    var actionType = actions_1.NavigationMenu.ActionType;
    if (action.type === actions_1.ChannelMenu.ActionType.LINK_UPDATE ||
        action.type === actions_1.ChannelMenu.ActionType.UPDATE) {
        actionType = actions_1.ChannelMenu.ActionType;
    }
    return type_validate_1.validate(action, utils_1.createActionValidator(actionType, getPayloadSchema(action.payload), true, false));
}
exports.validateAction = validateAction;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/validate/actions/modal.js":
/*!********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/validate/actions/modal.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionType = exports.validateAction = exports.validateProps = void 0;
var type_validate_1 = __webpack_require__(/*! ../type-validate */ "./node_modules/@shopify/app-bridge/validate/type-validate.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@shopify/app-bridge/validate/utils.js");
var Modal_1 = __webpack_require__(/*! ../../actions/Modal */ "./node_modules/@shopify/app-bridge/actions/Modal/index.js");
Object.defineProperty(exports, "ActionType", { enumerable: true, get: function () { return Modal_1.ActionType; } });
var Button_1 = __webpack_require__(/*! ../../actions/Button */ "./node_modules/@shopify/app-bridge/actions/Button/index.js");
var safe_redirect_1 = __webpack_require__(/*! ../safe-redirect */ "./node_modules/@shopify/app-bridge/validate/safe-redirect.js");
var button_1 = __webpack_require__(/*! ./button */ "./node_modules/@shopify/app-bridge/validate/actions/button.js");
function matchesSafeOrigin(value, localOrigin) {
    var hostName;
    try {
        hostName = new URL(localOrigin).hostname;
    }
    catch (error) {
        return [
            {
                error: 'invalid_app_origin',
                value: localOrigin,
                message: "Provided value for app origin: `" + localOrigin + "` is invalid",
            },
        ];
    }
    var isSafeSrc = safe_redirect_1.isSafe(value, {
        requireAbsolute: true,
        requireSSL: true,
        allowedDomains: [hostName],
    });
    if (!isSafeSrc) {
        return [
            {
                error: 'not_matching_app_origin',
                value: value,
                message: "Provided URL origin does not match app origin `" + hostName + "`",
            },
        ];
    }
}
function matchesSize() {
    return function (value) {
        var values = [Modal_1.Size.Small, Modal_1.Size.Medium, Modal_1.Size.Large];
        if (values.includes(value)) {
            return;
        }
        var message = "expected:" + values.map(function (val) { return "`" + val + "`"; }).join(' or ');
        if (value === Modal_1.Size.Full) {
            message += ". Size `" + value + "` is deprecated as of version 1.6.5 and will fall back to size `medium`";
        }
        if (value === Modal_1.Size.Auto) {
            message += ". Size `" + value + "` is deprecated as of version 1.12.x and will fall back to size `medium`. Use the `setUpModalAutoSizing` utility from `app-bridge-utils` instead";
        }
        return [
            {
                error: 'invalid_enum_value',
                value: value,
                message: message,
            },
        ];
    };
}
function getModalSchema(props, localOrigin) {
    if (props === void 0) { props = {}; }
    var baseModalSchema = type_validate_1.matchesObject({
        title: type_validate_1.makeOptional(type_validate_1.matchesString()),
        footer: type_validate_1.makeOptional(type_validate_1.matchesObject({
            buttons: type_validate_1.matchesObject({
                primary: type_validate_1.makeOptional(button_1.buttonSchemaWithId),
                secondary: type_validate_1.makeOptional(type_validate_1.matchesArray(button_1.buttonSchemaWithId)),
            }),
        })),
        size: type_validate_1.makeOptional(matchesSize()),
    });
    if (Modal_1.isIframeModal(props)) {
        if (props.url) {
            var urlSchema = type_validate_1.matchesObject({
                url: type_validate_1.composeSchemas(type_validate_1.matchesString(), function (value) {
                    return value.startsWith('https://')
                        ? undefined
                        : [
                            {
                                error: 'invalid_secure_url',
                                value: value,
                                message: 'expected string to start with `https://`',
                            },
                        ];
                }, function (value) { return (localOrigin ? matchesSafeOrigin(value, localOrigin) : undefined); }),
            });
            return type_validate_1.composeSchemas(baseModalSchema, urlSchema);
        }
        return type_validate_1.composeSchemas(baseModalSchema, utils_1.relativePathSchema);
    }
    return type_validate_1.composeSchemas(baseModalSchema, type_validate_1.matchesObject({ message: type_validate_1.matchesString() }));
}
function validateProps(props, localOrigin) {
    return type_validate_1.validate(props, getModalSchema(props, localOrigin));
}
exports.validateProps = validateProps;
function validateAction(action, localOrigin) {
    var schema = getModalSchema(action.payload, localOrigin);
    switch (action.type) {
        case Modal_1.ActionType.OPEN:
        case Modal_1.ActionType.UPDATE:
            return type_validate_1.validate(action, utils_1.createActionValidator(Modal_1.ActionType, schema, true, action.type === Modal_1.ActionType.UPDATE));
        case Modal_1.ActionType.FOOTER_BUTTON_CLICK:
            return button_1.validateAction(__assign(__assign({}, action), { type: Button_1.ActionType.CLICK }));
        case Modal_1.ActionType.FOOTER_BUTTON_UPDATE:
            return button_1.validateAction(__assign(__assign({}, action), { type: Button_1.ActionType.UPDATE }));
        case Modal_1.ActionType.CLOSE:
        default:
            return type_validate_1.validate(action, utils_1.createActionValidator(Modal_1.ActionType));
    }
}
exports.validateAction = validateAction;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/validate/actions/navigation.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/validate/actions/navigation.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAction = exports.getSectionSchema = exports.matchesAbsolutePath = void 0;
var actions_1 = __webpack_require__(/*! ../../actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
var type_validate_1 = __webpack_require__(/*! ../type-validate */ "./node_modules/@shopify/app-bridge/validate/type-validate.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@shopify/app-bridge/validate/utils.js");
function matchesAbsolutePath(value) {
    return value.match('^https?://')
        ? undefined
        : [
            {
                value: value,
                error: 'invalid_absolute_url',
                message: 'expected string to start with `https://` or `http://`',
            },
        ];
}
exports.matchesAbsolutePath = matchesAbsolutePath;
function getSectionSchema(payload) {
    var isProductVariant = payload &&
        payload.section &&
        payload.section.resource &&
        payload.section.name === actions_1.Redirect.ResourceType.Product;
    var resourceSchema = {
        create: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
        id: type_validate_1.makeOptional(type_validate_1.matchesString()),
    };
    var productVariantSchema = __assign(__assign({}, resourceSchema), { variant: type_validate_1.makeOptional(type_validate_1.matchesObject(resourceSchema)) });
    return type_validate_1.matchesObject({
        section: type_validate_1.matchesObject({
            name: type_validate_1.matchesEnum(actions_1.Redirect.ResourceType),
            resource: type_validate_1.makeOptional(type_validate_1.matchesObject(isProductVariant ? productVariantSchema : resourceSchema)),
        }),
    });
}
exports.getSectionSchema = getSectionSchema;
function validateAction(action) {
    var newContextSchema = type_validate_1.matchesObject({ newContext: type_validate_1.makeOptional(type_validate_1.matchesBoolean()) });
    var actionType = actions_1.Redirect.ActionType;
    var schema;
    switch (action.type) {
        case actions_1.History.ActionType.PUSH:
        case actions_1.History.ActionType.REPLACE:
            actionType = actions_1.History.ActionType;
            schema = utils_1.relativePathSchema;
            break;
        case actions_1.Redirect.ActionType.APP:
            schema = utils_1.relativePathSchema;
            break;
        case actions_1.Redirect.ActionType.REMOTE:
            schema = type_validate_1.composeSchemas(type_validate_1.matchesObject({
                url: type_validate_1.composeSchemas(type_validate_1.matchesString(), function (value) { return matchesAbsolutePath(value); }),
            }), newContextSchema);
            break;
        case actions_1.Redirect.ActionType.ADMIN_PATH:
            schema = type_validate_1.composeSchemas(utils_1.relativePathSchema, newContextSchema);
            break;
        case actions_1.Redirect.ActionType.ADMIN_SECTION:
            schema = type_validate_1.composeSchemas(getSectionSchema(action.payload), newContextSchema);
            break;
    }
    return type_validate_1.validate(action, utils_1.createActionValidator(actionType, schema));
}
exports.validateAction = validateAction;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/validate/actions/print.js":
/*!********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/validate/actions/print.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionType = exports.validateAction = void 0;
var Print_1 = __webpack_require__(/*! ../../actions/Print */ "./node_modules/@shopify/app-bridge/actions/Print/index.js");
Object.defineProperty(exports, "ActionType", { enumerable: true, get: function () { return Print_1.ActionType; } });
var type_validate_1 = __webpack_require__(/*! ../type-validate */ "./node_modules/@shopify/app-bridge/validate/type-validate.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@shopify/app-bridge/validate/utils.js");
function validateAction(action) {
    return type_validate_1.validate(action, utils_1.createActionValidator(Print_1.ActionType));
}
exports.validateAction = validateAction;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/validate/actions/resourcePicker.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/validate/actions/resourcePicker.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionType = exports.validateAction = exports.validateProps = void 0;
var ResourcePicker_1 = __webpack_require__(/*! ../../actions/ResourcePicker */ "./node_modules/@shopify/app-bridge/actions/ResourcePicker/index.js");
Object.defineProperty(exports, "ActionType", { enumerable: true, get: function () { return ResourcePicker_1.ActionType; } });
var type_validate_1 = __webpack_require__(/*! ../type-validate */ "./node_modules/@shopify/app-bridge/validate/type-validate.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@shopify/app-bridge/validate/utils.js");
var resourceSelectionSchema = type_validate_1.matchesArray(type_validate_1.matchesObject({
    id: type_validate_1.matchesString(),
}));
var resourcePickerOptions = type_validate_1.matchesObject({
    initialQuery: type_validate_1.makeOptional(type_validate_1.matchesString()),
    initialSelectionIds: type_validate_1.makeOptional(resourceSelectionSchema),
    selectMultiple: type_validate_1.makeOptional(type_validate_1.oneOf(type_validate_1.matchesBoolean(), type_validate_1.matchesPositiveInteger())),
    showHidden: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
    showVariants: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
    showDraft: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
    showArchived: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
    showDraftBadge: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
    showArchivedBadge: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
    actionVerb: type_validate_1.makeOptional(type_validate_1.matchesEnum(ResourcePicker_1.ActionVerb)),
});
var resourcePickerActionSchema = type_validate_1.matchesObject({
    resourceType: type_validate_1.matchesEnum(ResourcePicker_1.ResourceType),
    options: type_validate_1.makeOptional(resourcePickerOptions),
});
var selectionSchema = type_validate_1.matchesObject({
    selection: resourceSelectionSchema,
});
function validateProps(props) {
    return type_validate_1.validate(props, resourcePickerOptions);
}
exports.validateProps = validateProps;
function validateAction(action) {
    switch (action.type) {
        case ResourcePicker_1.ActionType.UPDATE:
        case ResourcePicker_1.ActionType.OPEN:
            return type_validate_1.validate(action, utils_1.createActionValidator(ResourcePicker_1.ActionType, resourcePickerActionSchema, false, true));
        case ResourcePicker_1.ActionType.SELECT:
            return type_validate_1.validate(action, utils_1.createActionValidator(ResourcePicker_1.ActionType, selectionSchema, true, true));
        case ResourcePicker_1.ActionType.CANCEL:
        case ResourcePicker_1.ActionType.CLOSE:
        default:
            return type_validate_1.validate(action, utils_1.createActionValidator(ResourcePicker_1.ActionType));
    }
}
exports.validateAction = validateAction;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/validate/actions/scanner.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/validate/actions/scanner.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionType = exports.validateAction = void 0;
var Scanner_1 = __webpack_require__(/*! ../../actions/Scanner */ "./node_modules/@shopify/app-bridge/actions/Scanner/index.js");
Object.defineProperty(exports, "ActionType", { enumerable: true, get: function () { return Scanner_1.ActionType; } });
var type_validate_1 = __webpack_require__(/*! ../type-validate */ "./node_modules/@shopify/app-bridge/validate/type-validate.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@shopify/app-bridge/validate/utils.js");
function validateAction(action) {
    return type_validate_1.validate(action, utils_1.createActionValidator(Scanner_1.ActionType));
}
exports.validateAction = validateAction;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/validate/actions/titleBar.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/validate/actions/titleBar.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionType = exports.validateAction = exports.validateProps = exports.titleBarSchema = void 0;
var TitleBar_1 = __webpack_require__(/*! ../../actions/TitleBar */ "./node_modules/@shopify/app-bridge/actions/TitleBar/index.js");
Object.defineProperty(exports, "ActionType", { enumerable: true, get: function () { return TitleBar_1.ActionType; } });
var Button_1 = __webpack_require__(/*! ../../actions/Button */ "./node_modules/@shopify/app-bridge/actions/Button/index.js");
var ButtonGroup_1 = __webpack_require__(/*! ../../actions/ButtonGroup */ "./node_modules/@shopify/app-bridge/actions/ButtonGroup/index.js");
var type_validate_1 = __webpack_require__(/*! ../type-validate */ "./node_modules/@shopify/app-bridge/validate/type-validate.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@shopify/app-bridge/validate/utils.js");
var button_1 = __webpack_require__(/*! ./button */ "./node_modules/@shopify/app-bridge/validate/actions/button.js");
var buttonGroup_1 = __webpack_require__(/*! ./buttonGroup */ "./node_modules/@shopify/app-bridge/validate/actions/buttonGroup.js");
var buttonSchemaWithId = type_validate_1.composeSchemas(button_1.buttonSchema, type_validate_1.matchesObject({
    id: type_validate_1.matchesString(),
}));
exports.titleBarSchema = type_validate_1.matchesObject({
    breadcrumbs: type_validate_1.makeOptional(button_1.buttonSchema),
    title: type_validate_1.makeOptional(type_validate_1.matchesString()),
    buttons: type_validate_1.makeOptional(type_validate_1.matchesObject({
        primary: type_validate_1.makeOptional(buttonSchemaWithId),
        secondary: type_validate_1.makeOptional(type_validate_1.matchesArray(type_validate_1.composeSchemas(buttonSchemaWithId, type_validate_1.matchesObject({
            buttons: type_validate_1.makeOptional(type_validate_1.matchesArray(buttonSchemaWithId)),
        })))),
    })),
});
function validateProps(props) {
    return type_validate_1.validate(props, exports.titleBarSchema);
}
exports.validateProps = validateProps;
function validateAction(action) {
    switch (action.type) {
        default:
        case TitleBar_1.ActionType.UPDATE:
            return type_validate_1.validate(action, utils_1.createActionValidator(TitleBar_1.ActionType, exports.titleBarSchema, true, false));
        case TitleBar_1.ActionType.BUTTON_CLICK:
        case TitleBar_1.ActionType.BREADCRUMBS_CLICK:
            return button_1.validateAction(__assign(__assign({}, action), { type: Button_1.ActionType.CLICK }));
        case TitleBar_1.ActionType.BUTTON_UPDATE:
        case TitleBar_1.ActionType.BREADCRUMBS_UPDATE:
            return button_1.validateAction(__assign(__assign({}, action), { type: Button_1.ActionType.UPDATE }));
        case TitleBar_1.ActionType.BUTTON_GROUP_UPDATE:
            return buttonGroup_1.validateAction(__assign(__assign({}, action), { type: ButtonGroup_1.ActionType.UPDATE }));
    }
}
exports.validateAction = validateAction;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/validate/actions/toast.js":
/*!********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/validate/actions/toast.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionType = exports.validateAction = exports.validateProps = exports.toastSchema = void 0;
var Toast_1 = __webpack_require__(/*! ../../actions/Toast */ "./node_modules/@shopify/app-bridge/actions/Toast/index.js");
Object.defineProperty(exports, "ActionType", { enumerable: true, get: function () { return Toast_1.ActionType; } });
var type_validate_1 = __webpack_require__(/*! ../type-validate */ "./node_modules/@shopify/app-bridge/validate/type-validate.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@shopify/app-bridge/validate/utils.js");
exports.toastSchema = type_validate_1.matchesObject({
    message: type_validate_1.matchesString(),
    duration: type_validate_1.matchesPositiveInteger(),
    isError: type_validate_1.makeOptional(type_validate_1.matchesBoolean()),
});
function validateProps(props) {
    return type_validate_1.validate(props, exports.toastSchema);
}
exports.validateProps = validateProps;
function validateAction(action) {
    switch (action.type) {
        case Toast_1.ActionType.SHOW:
            return type_validate_1.validate(action, utils_1.createActionValidator(Toast_1.ActionType, exports.toastSchema, true));
        default:
            return type_validate_1.validate(action, utils_1.createActionValidator(Toast_1.ActionType));
    }
}
exports.validateAction = validateAction;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/validate/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/validate/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = __webpack_require__(/*! ./validator */ "./node_modules/@shopify/app-bridge/validate/validator.js");
exports.default = validator_1.validatorMiddleware;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/validate/safe-redirect.js":
/*!********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/validate/safe-redirect.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSafe = exports.isSafe = void 0;
var FILE_URI_MATCH = /\/\/\//;
var INVALID_RELATIVE_URL = /[/\\][/\\]/;
var VALID_PROTOCOLS = ['https:', 'http:'];
var DUMMY_HOSTNAME = 'http://test.com';
function isSafe(redirectUrl, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.allowedDomains, allowedDomains = _c === void 0 ? [] : _c, _d = _b.subdomains, subdomains = _d === void 0 ? [] : _d, matchPath = _b.matchPath, requireAbsolute = _b.requireAbsolute, requireSSL = _b.requireSSL;
    if (FILE_URI_MATCH.test(redirectUrl)) {
        return false;
    }
    if (redirectUrl.startsWith('/')) {
        if (allowedDomains.length > 0 || subdomains.length > 0 || requireAbsolute || requireSSL) {
            return false;
        }
        if (matchPath) {
            // Creating a new URL expands the pathname in case of things like `/a/../b`
            return pathMatches(new URL(redirectUrl, DUMMY_HOSTNAME), redirectUrl, matchPath);
        }
        return !INVALID_RELATIVE_URL.test(redirectUrl);
    }
    var url;
    try {
        url = new URL(redirectUrl);
    }
    catch (error) {
        return false;
    }
    if (!VALID_PROTOCOLS.includes(url.protocol)) {
        return false;
    }
    if (requireSSL && url.protocol !== 'https:') {
        return false;
    }
    if (url.username || url.password) {
        return false;
    }
    if (matchPath && !pathMatches(url, redirectUrl, matchPath)) {
        return false;
    }
    if (!hostIsValid(url, allowedDomains, subdomains)) {
        return false;
    }
    return true;
}
exports.isSafe = isSafe;
function hostIsValid(url, allowedDomains, subdomains) {
    if (!subdomains.every(function (subdomain) { return subdomain.startsWith('.'); })) {
        throw new TypeError('Subdomains must begin with .');
    }
    var hostname = url.hostname;
    return ((allowedDomains.length === 0 && subdomains.length === 0) ||
        allowedDomains.includes(hostname) ||
        subdomains.some(function (subdomain) { return hostname.endsWith(subdomain); }));
}
function pathMatches(url, originalUrl, matcher) {
    var pathname = url.pathname;
    // Gets just the unresolve pathname, i.e., `http://foo.com/a/../b => /a/../b
    var originalPathname = originalUrl.replace(url.origin, '').split('?')[0];
    return typeof matcher === 'string'
        ? pathname === matcher && originalPathname === matcher
        : matcher.test(pathname) && matcher.test(originalPathname);
}
function makeSafe(url, fallback, options) {
    return isSafe(url, options) ? encodeURI(url) : fallback;
}
exports.makeSafe = makeSafe;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/validate/type-validate.js":
/*!********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/validate/type-validate.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.composeSchemas = exports.makeOptional = exports.oneOf = exports.matchesObject = exports.matchesArray = exports.matchesEnum = exports.matchesPositiveNumber = exports.matchesPositiveInteger = exports.matchesString = exports.matchesBoolean = void 0;
var TYPE_ERROR = 'type_error_expected';
function constructErrors(value, error, options) {
    if (options === void 0) { options = { message: undefined }; }
    return [
        {
            value: value,
            error: error,
            message: typeof options.message === 'function' ? options.message(error, value) : options.message,
        },
    ];
}
function getErrors(obj, validator, key) {
    var value = key ? obj[key] : obj;
    var path = key ? "['" + key + "']" : undefined;
    var error = validator(value);
    if (!error) {
        return;
    }
    return error.map(function (o) { return (__assign(__assign({}, o), { path: "" + (path || '') + (o.path || '') || undefined })); });
}
function matchesBoolean(options) {
    return function (value) {
        return typeof value === 'boolean'
            ? undefined
            : constructErrors(value, TYPE_ERROR + "_boolean", options);
    };
}
exports.matchesBoolean = matchesBoolean;
function matchesString(options) {
    return function (value) {
        return typeof value === 'string' ? undefined : constructErrors(value, TYPE_ERROR + "_string", options);
    };
}
exports.matchesString = matchesString;
function matchesPositiveInteger(options) {
    return function (value) {
        return !Number.isInteger(value) || value < 0
            ? constructErrors(value, TYPE_ERROR + "_integer", options)
            : undefined;
    };
}
exports.matchesPositiveInteger = matchesPositiveInteger;
function matchesPositiveNumber(options) {
    return function (value) {
        return Number.isNaN(value) || !Number.isFinite(value) || value < 0
            ? constructErrors(value, TYPE_ERROR + "_number", options)
            : undefined;
    };
}
exports.matchesPositiveNumber = matchesPositiveNumber;
/**
 * Returns a validator that matches values in the given enum
 * @param type - enum to use for match values
 * @public
 */
function matchesEnum(types, options) {
    return function (value) {
        var values = Object.keys(types).map(function (key) { return types[key]; });
        var message = (options && options.message) || "expected:" + values.map(function (val) { return "`" + val + "`"; }).join(' or ');
        return values.includes(value)
            ? undefined
            : constructErrors(value, 'invalid_enum_value', __assign(__assign({}, options), { message: message }));
    };
}
exports.matchesEnum = matchesEnum;
function matchesArray(validator, options) {
    return function (value) {
        if (!Array.isArray(value)) {
            return constructErrors(value, TYPE_ERROR + "_array", options);
        }
        if (!validator) {
            return;
        }
        var errors = [];
        value.forEach(function (val, key) {
            var objectError = validator(val);
            if (objectError) {
                errors = errors.concat(objectError.map(function (error) { return (__assign(__assign({}, error), { path: "['" + key + "']" + (error.path || '') })); }));
            }
        });
        return errors.length ? errors : undefined;
    };
}
exports.matchesArray = matchesArray;
function matchesObject(schema, options) {
    return function (val) {
        if (typeof val !== 'object' || !val || Array.isArray(val)) {
            return constructErrors(val, TYPE_ERROR + "_object", options);
        }
        var flattened = Object.keys(schema).reduce(function (acc, key) {
            return __spreadArrays(acc, (getErrors(val, schema[key], key) || []));
        }, []);
        return flattened.length ? flattened : undefined;
    };
}
exports.matchesObject = matchesObject;
function oneOf() {
    var validators = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        validators[_i] = arguments[_i];
    }
    return function (val) {
        var errors = [];
        for (var _i = 0, validators_1 = validators; _i < validators_1.length; _i++) {
            var validator = validators_1[_i];
            var result = validator(val);
            if (result == null)
                return result;
            errors.push.apply(errors, result);
        }
        return errors;
    };
}
exports.oneOf = oneOf;
function makeOptional(validator) {
    return function (value) {
        if (value === undefined || value === null) {
            return undefined;
        }
        return validator(value);
    };
}
exports.makeOptional = makeOptional;
function composeSchemas() {
    var validators = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        validators[_i] = arguments[_i];
    }
    return function (val) {
        var error;
        var i = 0;
        var len = validators.length;
        while (!error && i < len) {
            error = validators[i](val);
            if (error) {
                return error;
            }
            i++;
        }
    };
}
exports.composeSchemas = composeSchemas;
function validate(obj, validator) {
    return getErrors(obj, validator);
}
exports.validate = validate;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/validate/utils.js":
/*!************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/validate/utils.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.mixedAppClientCheck = exports.relativePathSchema = exports.relativeUrlSchema = exports.isValidRelativePath = exports.actionMessage = exports.createActionValidator = void 0;
var type_validate_1 = __webpack_require__(/*! ./type-validate */ "./node_modules/@shopify/app-bridge/validate/type-validate.js");
function createActionValidator(type, payloadSchema, payloadRequired, idRequired) {
    if (payloadSchema === void 0) { payloadSchema = undefined; }
    if (payloadRequired === void 0) { payloadRequired = false; }
    if (idRequired === void 0) { idRequired = false; }
    var idSchema = type_validate_1.matchesObject({
        id: idRequired ? type_validate_1.matchesString() : type_validate_1.makeOptional(type_validate_1.matchesString()),
    });
    var schema = payloadSchema ? type_validate_1.composeSchemas(idSchema, payloadSchema) : idSchema;
    return type_validate_1.matchesObject({
        type: type_validate_1.matchesEnum(type, {
            message: function (_, val) { return "The action type `" + val + "` is invalid or unsupported"; },
        }),
        payload: payloadRequired ? schema : type_validate_1.makeOptional(schema),
    });
}
exports.createActionValidator = createActionValidator;
function actionMessage(errors) {
    return errors
        .map(function (err) {
        var path = err.path, error = err.error, message = err.message, value = err.value;
        var valueStr = typeof value === 'object' ? JSON.stringify(value) : value;
        return "`" + error + "` thrown for" + (path ? " path: " + path + " and" : '') + " value: `" + valueStr + "`" + (message ? " with message: " + message : '');
    })
        .join(' | ');
}
exports.actionMessage = actionMessage;
function isValidRelativePath(path) {
    return typeof path === 'string' && (path === '' || path.startsWith('/'));
}
exports.isValidRelativePath = isValidRelativePath;
exports.relativeUrlSchema = type_validate_1.composeSchemas(type_validate_1.matchesString(), function (value) {
    return isValidRelativePath(value)
        ? undefined
        : [{ error: 'invalid_relative_path', value: value, message: 'expected string to start with `/`' }];
});
exports.relativePathSchema = type_validate_1.matchesObject({
    path: exports.relativeUrlSchema,
});
function mixedAppClientCheck(window) {
    window.addEventListener('DOMContentLoaded', function () {
        if (!window.hasOwnProperty('ShopifyApp')) {
            return;
        }
        console.error("%cException Detected \uD83D\uDEAB\n\n%cAn instance of the EASDK client was detected while initializing Shopify App Bridge. Using Shopify App Bridge and the EASDK simultaneously is not supported.\n\nIf you're migrating an existing app that was built with the shopify_app gem, then the EASDK client might have been included in the home page view template. In this case, remove it from your app before initializing Shopify App Bridge again.", 'font-size: large;', 'font-size: normal;');
    }, { once: true });
}
exports.mixedAppClientCheck = mixedAppClientCheck;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/validate/validator.js":
/*!****************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/validate/validator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorMiddleware = exports.connectValidatorToDispatchHook = exports.connectValidatorToUpdateHook = void 0;
var client_1 = __webpack_require__(/*! ../client */ "./node_modules/@shopify/app-bridge/client/index.js");
var types_1 = __webpack_require__(/*! ../actions/types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var Error_1 = __webpack_require__(/*! ../actions/Error */ "./node_modules/@shopify/app-bridge/actions/Error/index.js");
var helper_1 = __webpack_require__(/*! ../actions/helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var actions_1 = __webpack_require__(/*! ./actions */ "./node_modules/@shopify/app-bridge/validate/actions/index.js");
var type_validate_1 = __webpack_require__(/*! ./type-validate */ "./node_modules/@shopify/app-bridge/validate/type-validate.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/@shopify/app-bridge/validate/utils.js");
function updateValidator(localOrigin, group, options) {
    switch (group) {
        case types_1.Group.Button:
            return actions_1.Button.validateProps(options);
        case types_1.Group.ButtonGroup:
            return actions_1.ButtonGroup.validateProps(options);
        case types_1.Group.Modal:
            return actions_1.Modal.validateProps(options, localOrigin);
        case types_1.Group.Menu:
            return actions_1.Menu.validateProps(options);
        case types_1.Group.Link:
            return actions_1.Link.validateProps(options);
        case types_1.Group.TitleBar:
            return actions_1.TitleBar.validateProps(options);
        case types_1.Group.ResourcePicker:
            return actions_1.ResourcePicker.validateProps(options);
        case types_1.Group.Toast:
            return actions_1.Toast.validateProps(options);
        case types_1.Group.ContextualSaveBar:
            return actions_1.ContextualSaveBar.validateProps(options);
    }
}
function dispatchPayloadValidator(action, localOrigin) {
    switch (action.group) {
        case types_1.Group.Button:
            return actions_1.Button.validateAction(action);
        case types_1.Group.ButtonGroup:
            return actions_1.ButtonGroup.validateAction(action);
        case types_1.Group.Modal:
            return actions_1.Modal.validateAction(action, localOrigin);
        case types_1.Group.Menu:
            return actions_1.Menu.validateAction(action);
        case types_1.Group.TitleBar:
            return actions_1.TitleBar.validateAction(action);
        case types_1.Group.ResourcePicker:
            return actions_1.ResourcePicker.validateAction(action);
        case types_1.Group.Loading:
            return actions_1.Loading.validateAction(action);
        case types_1.Group.Toast:
            return actions_1.Toast.validateAction(action);
        case types_1.Group.Cart:
            return actions_1.Cart.validateAction(action);
        case types_1.Group.Navigation:
            return actions_1.Navigation.validateAction(action);
        case types_1.Group.Print:
            return actions_1.Print.validateAction(action);
        case types_1.Group.Scanner:
            return actions_1.Scanner.validateAction(action);
        case types_1.Group.Fullscreen:
            return actions_1.Fullscreen.validateAction(action);
        case types_1.Group.ContextualSaveBar:
            return actions_1.ContextualSaveBar.validateAction(action);
        case types_1.Group.Link:
            return actions_1.Link.validateAction(action);
    }
}
function dispatchValidator(action, origin) {
    var errors = type_validate_1.validate(action, type_validate_1.matchesObject({
        group: type_validate_1.matchesEnum(types_1.Group, {
            message: function (_, value) { return "Unknown or unsupported action group `" + value + "`"; },
        }),
        version: type_validate_1.matchesString(),
    }));
    if (errors) {
        return Error_1.invalidAction(action, utils_1.actionMessage(errors));
    }
    var payloadErrors = dispatchPayloadValidator(action, origin);
    return payloadErrors ? Error_1.invalidPayload(action, utils_1.actionMessage(payloadErrors)) : action;
}
exports.connectValidatorToUpdateHook = function (next) {
    return function (options) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // The group should be staticly set to the default initial group as certain components
        // (ex. Button and ButtonGroup) can be dynamically grouped under a new group (ex. TitleBar)
        // We accept partial options so the validator should be called on merged new and old options
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var errors = updateValidator(this.app.localOrigin, this.defaultGroup, mergedOptions);
        if (errors) {
            throw Error_1.fromAction(utils_1.actionMessage(errors), Error_1.ActionType.INVALID_OPTIONS);
        }
        return next.apply(void 0, __spreadArrays([options], args));
    };
};
exports.connectValidatorToDispatchHook = function (next) {
    return function (action) {
        var finalAction = dispatchValidator(action, this.localOrigin);
        return next(finalAction);
    };
};
exports.validatorMiddleware = function (hooks) {
    hooks.set(client_1.LifecycleHook.UpdateAction, exports.connectValidatorToUpdateHook);
    hooks.set(client_1.LifecycleHook.DispatchAction, exports.connectValidatorToDispatchHook);
};


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WrappedApp; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shopify/polaris/locales/en.json */ "./node_modules/@shopify/polaris/locales/en.json");
var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! @shopify/polaris/locales/en.json */ "./node_modules/@shopify/polaris/locales/en.json", 1);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _shopify_polaris_dist_styles_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shopify/polaris/dist/styles.css */ "./node_modules/@shopify/polaris/dist/styles.css");
/* harmony import */ var _shopify_polaris_dist_styles_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_dist_styles_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _resource_css_style_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../resource/css/style.css */ "./resource/css/style.css");
/* harmony import */ var _resource_css_style_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_resource_css_style_css__WEBPACK_IMPORTED_MODULE_17__);







var _jsxFileName = "E:\\novostack\\shopify\\apps\\ns-nextjs-shopify\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var client = new apollo_boost__WEBPACK_IMPORTED_MODULE_13__["default"]({
  fetchOptions: {
    credentials: 'include'
  }
});

var WrappedApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(WrappedApp, _App);

  var _super = _createSuper(WrappedApp);

  function WrappedApp(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, WrappedApp);

    _this = _super.call(this, props);
    _this.state = {
      isuserLoggedin: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(WrappedApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isuserLoggedin: false
      });

      if (!this.state.isuserLoggedin) {
        next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/signin');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
            children: "FB DropShipping"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
            charSet: "utf-8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__["Provider"], {
          config: config,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_12__["AppProvider"], {
            i18n: _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_14__,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }, this);
    }
  }]);

  return WrappedApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QvY29tcG9uZW50cy9DbGllbnRSb3V0ZXIvQ2xpZW50Um91dGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdC9jb21wb25lbnRzL0NsaWVudFJvdXRlci9ob29rLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdC9jb21wb25lbnRzL0NsaWVudFJvdXRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QvY29tcG9uZW50cy9DbGllbnRSb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdC9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QvY29tcG9uZW50cy9Mb2FkaW5nL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdC9jb21wb25lbnRzL01vZGFsL01vZGFsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdC9jb21wb25lbnRzL01vZGFsL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdC9jb21wb25lbnRzL1Byb3ZpZGVyL1Byb3ZpZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdC9jb21wb25lbnRzL1Byb3ZpZGVyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdC9jb21wb25lbnRzL1Jlc291cmNlUGlja2VyL1Jlc291cmNlUGlja2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdC9jb21wb25lbnRzL1Jlc291cmNlUGlja2VyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdC9jb21wb25lbnRzL1JvdXRlUHJvcGFnYXRvci9Sb3V0ZVByb3BhZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0L2NvbXBvbmVudHMvUm91dGVQcm9wYWdhdG9yL2dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0L2NvbXBvbmVudHMvUm91dGVQcm9wYWdhdG9yL2hvb2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0L2NvbXBvbmVudHMvUm91dGVQcm9wYWdhdG9yL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdC9jb21wb25lbnRzL1JvdXRlUHJvcGFnYXRvci9yb3V0ZS1wcm9wYWdhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdC9jb21wb25lbnRzL1RpdGxlQmFyL1RpdGxlQmFyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdC9jb21wb25lbnRzL1RpdGxlQmFyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdC9jb21wb25lbnRzL1RvYXN0L1RvYXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdC9jb21wb25lbnRzL1RvYXN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdC9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdC9jb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QvdXNlQXBwQnJpZGdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdC91dGlsaXRpZXMvdHJhbnNmb3JtZXJzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9NZXNzYWdlVHJhbnNwb3J0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL0F1dGhDb2RlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL0J1dHRvbi9hY3Rpb25zLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL0J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucy9CdXR0b24vdHlwZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMvQnV0dG9uR3JvdXAvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucy9CdXR0b25Hcm91cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucy9CdXR0b25Hcm91cC90eXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucy9DYXJ0L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMvQ2FydC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucy9DYXJ0L3R5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL0NvbnRleHR1YWxTYXZlQmFyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL0Vycm9yL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMvRXJyb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMvRXJyb3IvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMvRmVhdHVyZXMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucy9GZWF0dXJlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucy9GZWF0dXJlcy90eXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucy9GZWVkYmFja01vZGFsL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL0ZsYXNoL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMvRmxhc2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMvRnVsbHNjcmVlbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucy9MZWF2ZUNvbmZpcm1hdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucy9MaW5rL0FwcExpbmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMvTG9hZGluZy9hY3Rpb25zLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL0xvYWRpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMvTG9hZGluZy90eXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucy9NYXJrZXRpbmdFeHRlcm5hbEFjdGl2aXR5VG9wQmFyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL01lbnUvQ2hhbm5lbE1lbnUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucy9NZW51L0NoYW5uZWxNZW51L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL01lbnUvTmF2aWdhdGlvbk1lbnUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucy9NZW51L05hdmlnYXRpb25NZW51L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL01vZGFsL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMvTW9kYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMvTW9kYWwvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMvTmF2aWdhdGlvbi9IaXN0b3J5L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMvTmF2aWdhdGlvbi9IaXN0b3J5L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL05hdmlnYXRpb24vSGlzdG9yeS90eXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucy9OYXZpZ2F0aW9uL1JlZGlyZWN0L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMvTmF2aWdhdGlvbi9SZWRpcmVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucy9OYXZpZ2F0aW9uL1JlZGlyZWN0L3R5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL1BlcmZvcm1hbmNlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL1Bvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucy9QcmludC9hY3Rpb25zLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL1ByaW50L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL1ByaW50L3R5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL1Jlc291cmNlUGlja2VyL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMvUmVzb3VyY2VQaWNrZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMvUmVzb3VyY2VQaWNrZXIvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMvU2Nhbm5lci9hY3Rpb25zLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL1NjYW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMvU2Nhbm5lci90eXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucy9TZXNzaW9uVG9rZW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMvU2hhcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMvVGl0bGVCYXIvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucy9UaXRsZUJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucy9UaXRsZUJhci90eXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucy9Ub2FzdC9hY3Rpb25zLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL1RvYXN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL1RvYXN0L3R5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL2J1dHRvbkdyb3VwSGVscGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL2J1dHRvbkhlbHBlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMvaGVscGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL21lcmdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL3R5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zL3V1aWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMvdmFsaWRhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9jbGllbnQvQ2xpZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9jbGllbnQvSG9va3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvY2xpZW50L3ByaW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9jbGllbnQvcmVkaXJlY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2NsaWVudC90eXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS9wcm9kdWN0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS91dGlsL2NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL3V0aWwvZW52LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS91dGlsL3NoYXJlZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvdmFsaWRhdGUvYWN0aW9ucy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL3ZhbGlkYXRlL2FjdGlvbnMvYnV0dG9uR3JvdXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL3ZhbGlkYXRlL2FjdGlvbnMvY2FydC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvdmFsaWRhdGUvYWN0aW9ucy9jb250ZXh0dWFsU2F2ZUJhci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvdmFsaWRhdGUvYWN0aW9ucy9mZWVkYmFja01vZGFsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS92YWxpZGF0ZS9hY3Rpb25zL2Z1bGxzY3JlZW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL3ZhbGlkYXRlL2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL3ZhbGlkYXRlL2FjdGlvbnMvbGVhdmVDb25maXJtYXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL3ZhbGlkYXRlL2FjdGlvbnMvbGluay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvdmFsaWRhdGUvYWN0aW9ucy9sb2FkaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS92YWxpZGF0ZS9hY3Rpb25zL21lbnUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL3ZhbGlkYXRlL2FjdGlvbnMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL3ZhbGlkYXRlL2FjdGlvbnMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvdmFsaWRhdGUvYWN0aW9ucy9wcmludC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvdmFsaWRhdGUvYWN0aW9ucy9yZXNvdXJjZVBpY2tlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvdmFsaWRhdGUvYWN0aW9ucy9zY2FubmVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS92YWxpZGF0ZS9hY3Rpb25zL3RpdGxlQmFyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS92YWxpZGF0ZS9hY3Rpb25zL3RvYXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHNob3BpZnkvYXBwLWJyaWRnZS92YWxpZGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvdmFsaWRhdGUvc2FmZS1yZWRpcmVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvdmFsaWRhdGUvdHlwZS12YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L2FwcC1icmlkZ2UvdmFsaWRhdGUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS9hcHAtYnJpZGdlL3ZhbGlkYXRlL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJjbGllbnQiLCJBcG9sbG9DbGllbnQiLCJmZXRjaE9wdGlvbnMiLCJjcmVkZW50aWFscyIsIldyYXBwZWRBcHAiLCJwcm9wcyIsInN0YXRlIiwiaXN1c2VyTG9nZ2VkaW4iLCJzZXRTdGF0ZSIsIlJvdXRlciIsInB1c2giLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjb25maWciLCJlblRyYW5zbGF0aW9ucyIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdD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RVAsMEJBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsZ0NBQ0UscUVBQUMsZ0RBQUQ7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQU0sbUJBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBS0UscUVBQUMsbUVBQUQ7QUFBVSxnQkFBTSxFQUFFQyxNQUFsQjtBQUFBLGlDQUNFLHFFQUFDLDZEQUFEO0FBQWEsZ0JBQUksRUFBRUMsOERBQW5CO0FBQUEsbUNBQ0kscUVBQUMsU0FBRCxvQkFBZUYsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFhRDs7OztFQTlCcUNHLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjNkMmQxZGEwZTBkZjgwZDBhM2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIGNvbnRleHRfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb250ZXh0XCIpO1xudmFyIHJvdXRlcl8xID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuLyoqXG4gKiBDbGllbnRSb3V0ZXIgY29tcG9uZW50XG4gKlxuICogQHJlbWFya3NcbiAqIFJlYWN0IGNvbXBvbmVudCB3aGljaCBrZWVwcyB0aGUgU2hvcGlmeSBhZG1pbiB1cmwgaW4gc3luYyB3aXRoIHRoZSBhcHAgdXJsXG4gKlxuICogQHB1YmxpY1xuICovXG52YXIgQ2xpZW50Um91dGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDbGllbnRSb3V0ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ2xpZW50Um91dGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIENsaWVudFJvdXRlci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBoaXN0b3J5ID0gdGhpcy5wcm9wcy5oaXN0b3J5O1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlID0gcm91dGVyXzEuaGFuZGxlUm91dGVDaGFuZ2UodGhpcy5jb250ZXh0LCBoaXN0b3J5KTtcbiAgICB9O1xuICAgIENsaWVudFJvdXRlci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENsaWVudFJvdXRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIENsaWVudFJvdXRlci5jb250ZXh0VHlwZSA9IGNvbnRleHRfMS5BcHBCcmlkZ2VDb250ZXh0O1xuICAgIHJldHVybiBDbGllbnRSb3V0ZXI7XG59KHJlYWN0XzEuZGVmYXVsdC5Db21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IENsaWVudFJvdXRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgdXNlQXBwQnJpZGdlXzEgPSByZXF1aXJlKFwiLi4vLi4vdXNlQXBwQnJpZGdlXCIpO1xudmFyIHJvdXRlcl8xID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuLyoqXG4gKiB1c2VSb3V0ZVByb3BhZ2F0aW9uXG4gKlxuICogQHJlbWFya3NcbiAqIEEgaG9vayB3aGljaCBrZWVwcyB0aGUgU2hvcGlmeSBhZG1pbiB1cmwgaW4gc3luYyB3aXRoIHRoZSBhcHAgdXJsXG4gKlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiB1c2VDbGllbnRSb3V0aW5nKGhpc3RvcnkpIHtcbiAgICB2YXIgYXBwID0gdXNlQXBwQnJpZGdlXzEudXNlQXBwQnJpZGdlKCk7XG4gICAgcmVhY3RfMS51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcm91dGVyXzEuaGFuZGxlUm91dGVDaGFuZ2UoYXBwLCBoaXN0b3J5KTtcbiAgICB9LCBbYXBwLCBoaXN0b3J5XSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSB1c2VDbGllbnRSb3V0aW5nO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQ2xpZW50Um91dGVyXzEgPSByZXF1aXJlKFwiLi9DbGllbnRSb3V0ZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDbGllbnRSb3V0ZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIENsaWVudFJvdXRlcl8xLmRlZmF1bHQ7IH0gfSk7XG52YXIgaG9va18xID0gcmVxdWlyZShcIi4vaG9va1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInVzZUNsaWVudFJvdXRpbmdcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhvb2tfMS5kZWZhdWx0OyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZVJvdXRlQ2hhbmdlID0gdm9pZCAwO1xudmFyIGFjdGlvbnNfMSA9IHJlcXVpcmUoXCJAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnNcIik7XG5mdW5jdGlvbiBoYW5kbGVSb3V0ZUNoYW5nZShhcHAsIGhpc3RvcnkpIHtcbiAgICByZXR1cm4gYXBwLnN1YnNjcmliZShhY3Rpb25zXzEuUmVkaXJlY3QuQWN0aW9uVHlwZS5BUFAsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgcGF0aCA9IF9hLnBhdGg7XG4gICAgICAgIGhpc3RvcnkucmVwbGFjZShwYXRoKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuaGFuZGxlUm91dGVDaGFuZ2UgPSBoYW5kbGVSb3V0ZUNoYW5nZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIGFjdGlvbnNfMSA9IHJlcXVpcmUoXCJAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnNcIik7XG52YXIgY29udGV4dF8xID0gcmVxdWlyZShcIi4uLy4uL2NvbnRleHRcIik7XG4vKipcbiAqIExvYWRpbmcgY29tcG9uZW50XG4gKlxuICogQHJlbWFya3NcbiAqIFJlYWN0IGNvbXBvbmVudCB3aGljaCB3cmFwcyB0aGUgU2hvcGlmeSBBcHAgQnJpZGdlIExvYWRpbmcgYWN0aW9uLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xudmFyIExvYWRpbmcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExvYWRpbmcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTG9hZGluZygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBMb2FkaW5nLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFwcCA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gYWN0aW9uc18xLkxvYWRpbmcuY3JlYXRlKGFwcCk7XG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nLmRpc3BhdGNoKGFjdGlvbnNfMS5Mb2FkaW5nLkFjdGlvbi5TVEFSVCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIExvYWRpbmcucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZy5kaXNwYXRjaChhY3Rpb25zXzEuTG9hZGluZy5BY3Rpb24uU1RPUCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIExvYWRpbmcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBMb2FkaW5nLmNvbnRleHRUeXBlID0gY29udGV4dF8xLkFwcEJyaWRnZUNvbnRleHQ7XG4gICAgcmV0dXJuIExvYWRpbmc7XG59KHJlYWN0XzEuZGVmYXVsdC5Db21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRpbmc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBMb2FkaW5nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTG9hZGluZ1wiKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBMb2FkaW5nXzEuZGVmYXVsdDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBhY3Rpb25zXzEgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zXCIpO1xudmFyIHRyYW5zZm9ybWVyc18xID0gcmVxdWlyZShcIi4uLy4uL3V0aWxpdGllcy90cmFuc2Zvcm1lcnNcIik7XG52YXIgY29udGV4dF8xID0gcmVxdWlyZShcIi4uLy4uL2NvbnRleHRcIik7XG4vKipcbiAqIE1vZGFsIGNvbXBvbmVudFxuICpcbiAqIEByZW1hcmtzXG4gKiBSZWFjdCBjb21wb25lbnQgd2hpY2ggd3JhcHMgdGhlIFNob3BpZnkgQXBwIEJyaWRnZSBNb2RhbCBhY3Rpb24uXG4gKlxuICogQHB1YmxpY1xuICovXG52YXIgTW9kYWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1vZGFsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1vZGFsKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZm9jdXNSZXR1cm5Qb2ludCA9IG51bGw7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTW9kYWwucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBvcGVuID0gX2Eub3Blbiwgb25DbG9zZSA9IF9hLm9uQ2xvc2U7XG4gICAgICAgIHZhciBhcHAgPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIHRoaXMubW9kYWwgPSBhY3Rpb25zXzEuTW9kYWwuY3JlYXRlKGFwcCwgdGhpcy50cmFuc2Zvcm1Qcm9wcygpKTtcbiAgICAgICAgaWYgKG9uQ2xvc2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5tb2RhbC5zdWJzY3JpYmUoYWN0aW9uc18xLk1vZGFsLkFjdGlvbi5DTE9TRSwgb25DbG9zZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNSZXR1cm5Qb2ludCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLm1vZGFsLmRpc3BhdGNoKGFjdGlvbnNfMS5Nb2RhbC5BY3Rpb24uT1BFTik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1vZGFsLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiAocHJldlByb3BzKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIG9wZW4gPSBfYS5vcGVuLCBvbkNsb3NlID0gX2Eub25DbG9zZTtcbiAgICAgICAgdmFyIHdhc09wZW4gPSBwcmV2UHJvcHMub3BlbjtcbiAgICAgICAgdmFyIHRyYW5zZm9ybWVkUHJvcHMgPSB0aGlzLnRyYW5zZm9ybVByb3BzKCk7XG4gICAgICAgIHRoaXMubW9kYWwudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgaWYgKGlzSWZyYW1lTW9kYWwodHJhbnNmb3JtZWRQcm9wcykpIHtcbiAgICAgICAgICAgIHRoaXMubW9kYWwuc2V0KHRyYW5zZm9ybWVkUHJvcHMsIG9wZW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tb2RhbC5zZXQodHJhbnNmb3JtZWRQcm9wcywgb3Blbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9uQ2xvc2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5tb2RhbC5zdWJzY3JpYmUoYWN0aW9uc18xLk1vZGFsLkFjdGlvbi5DTE9TRSwgb25DbG9zZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdhc09wZW4gIT09IG9wZW4pIHtcbiAgICAgICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbC5kaXNwYXRjaChhY3Rpb25zXzEuTW9kYWwuQWN0aW9uLk9QRU4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbC5kaXNwYXRjaChhY3Rpb25zXzEuTW9kYWwuQWN0aW9uLkNMT1NFKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXdhc09wZW4gJiYgb3Blbikge1xuICAgICAgICAgICAgdGhpcy5mb2N1c1JldHVyblBvaW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh3YXNPcGVuICYmXG4gICAgICAgICAgICAhb3BlbiAmJlxuICAgICAgICAgICAgdGhpcy5mb2N1c1JldHVyblBvaW50ICE9IG51bGwgJiZcbiAgICAgICAgICAgIGRvY3VtZW50LmNvbnRhaW5zKHRoaXMuZm9jdXNSZXR1cm5Qb2ludCkpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNSZXR1cm5Qb2ludC5mb2N1cygpO1xuICAgICAgICAgICAgdGhpcy5mb2N1c1JldHVyblBvaW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTW9kYWwucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm1vZGFsLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMubW9kYWwuZGlzcGF0Y2goYWN0aW9uc18xLk1vZGFsLkFjdGlvbi5DTE9TRSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1vZGFsLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgTW9kYWwucHJvdG90eXBlLnRyYW5zZm9ybVByb3BzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCB0aXRsZSA9IF9hLnRpdGxlLCBzaXplID0gX2Euc2l6ZSwgbWVzc2FnZSA9IF9hLm1lc3NhZ2UsIHNyYyA9IF9hLnNyYywgcHJpbWFyeUFjdGlvbiA9IF9hLnByaW1hcnlBY3Rpb24sIHNlY29uZGFyeUFjdGlvbnMgPSBfYS5zZWNvbmRhcnlBY3Rpb25zO1xuICAgICAgICB2YXIgYXBwID0gdGhpcy5jb250ZXh0O1xuICAgICAgICB2YXIgc2FmZVNpemUgPSBzaXplID09IG51bGwgPyB1bmRlZmluZWQgOiBhY3Rpb25zXzEuTW9kYWwuU2l6ZVtzaXplXTtcbiAgICAgICAgdmFyIHNyY1BheWxvYWQgPSB7fTtcbiAgICAgICAgaWYgKHNyYyAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoc3JjLm1hdGNoKCdeaHR0cHM/Oi8vJykpIHtcbiAgICAgICAgICAgICAgICBzcmNQYXlsb2FkLnVybCA9IHNyYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNyY1BheWxvYWQucGF0aCA9IHNyYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oeyB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLCBzaXplOiBzYWZlU2l6ZSB9LCBzcmNQYXlsb2FkKSwgeyBmb290ZXI6IHtcbiAgICAgICAgICAgICAgICBidXR0b25zOiB0cmFuc2Zvcm1lcnNfMS50cmFuc2Zvcm1BY3Rpb25zKGFwcCwge1xuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5QWN0aW9uOiBwcmltYXJ5QWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlBY3Rpb25zOiBzZWNvbmRhcnlBY3Rpb25zLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfSB9KTtcbiAgICB9O1xuICAgIE1vZGFsLmNvbnRleHRUeXBlID0gY29udGV4dF8xLkFwcEJyaWRnZUNvbnRleHQ7XG4gICAgcmV0dXJuIE1vZGFsO1xufShyZWFjdF8xLmRlZmF1bHQuUHVyZUNvbXBvbmVudCkpO1xuZnVuY3Rpb24gaXNJZnJhbWVNb2RhbChvcHRpb25zKSB7XG4gICAgcmV0dXJuICh0eXBlb2Ygb3B0aW9ucy51cmwgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgIHR5cGVvZiBvcHRpb25zLnBhdGggPT09ICdzdHJpbmcnKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IE1vZGFsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgTW9kYWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Nb2RhbFwiKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBNb2RhbF8xLmRlZmF1bHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2V0Q2xpZW50SW50ZXJmYWNlSG9vayA9IHZvaWQgMDtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgYXBwX2JyaWRnZV8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJAc2hvcGlmeS9hcHAtYnJpZGdlXCIpKTtcbnZhciBjb250ZXh0XzEgPSByZXF1aXJlKFwiLi4vLi4vY29udGV4dFwiKTtcbnZhciBwYWNrYWdlSnNvbiA9IHJlcXVpcmUoJy4uLy4uL3BhY2thZ2UuanNvbicpO1xuLyoqXG4gKiBDcmVhdGUgYW4gQXBwIEJyaWRnZSBjbGllbnQgYXBwbGljYXRpb24gZnJvbSBhIGNvbmZpZyBhbmQgcGFzcyBpdCBhcyB0aGVcbiAqIHZhbHVlIHRvIHRoZSBjb250ZXh0IHByb3ZpZGVyLlxuICpcbiAqIEByZW1hcmtzXG4gKiBZb3UnbGwgcHJvYmFibHkgd2FudCBzb21ldGhpbmcgYSBsaXR0bGUgbW9yZSByb2J1c3QgdGhhbiBzdG9yaW5nIHRoZSBjdXJyZW50XG4gKiBhcHAgaW5zdGFuY2UgaW4gYSBtb2R1bGUtbGV2ZWwgZ2xvYmFsLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xudmFyIFByb3ZpZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhQcm92aWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBQcm92aWRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmFwcCA9IF90aGlzLmFwcEluc3RhbmNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShQcm92aWRlci5wcm90b3R5cGUsIFwiYXBwSW5zdGFuY2VcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5hcHApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcCA9IGFwcF9icmlkZ2VfMS5kZWZhdWx0KHRoaXMucHJvcHMuY29uZmlnKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hcHAgJiYgdGhpcy5hcHAuaG9va3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHAuaG9va3Muc2V0KGFwcF9icmlkZ2VfMS5MaWZlY3ljbGVIb29rLkRpc3BhdGNoQWN0aW9uLCBleHBvcnRzLnNldENsaWVudEludGVyZmFjZUhvb2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoY29udGV4dF8xLkFwcEJyaWRnZUNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IHRoaXMuYXBwSW5zdGFuY2UgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbikpO1xuICAgIH07XG4gICAgcmV0dXJuIFByb3ZpZGVyO1xufShyZWFjdF8xLmRlZmF1bHQuQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBQcm92aWRlcjtcbi8qKlxuICogQXVnbWVudCBhY3Rpb25zIHdpdGggY2xpZW50SW50ZXJmYWNlIG1ldGFkYXRhLCBpZGVudGlmeWluZyB1c2Ugb2YgdGhpcyBsaWJyYXJ5XG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydHMuc2V0Q2xpZW50SW50ZXJmYWNlSG9vayA9IGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgYWN0aW9uLmNsaWVudEludGVyZmFjZSA9IHtcbiAgICAgICAgICAgIG5hbWU6ICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JyxcbiAgICAgICAgICAgIHZlcnNpb246IHBhY2thZ2VKc29uLnZlcnNpb24sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgfTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBQcm92aWRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1Byb3ZpZGVyXCIpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFByb3ZpZGVyXzEuZGVmYXVsdDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBhY3Rpb25zXzEgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zXCIpO1xudmFyIGNvbnRleHRfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb250ZXh0XCIpO1xuLyoqXG4gKiBSZXNvdXJjZVBpY2tlciBjb21wb25lbnRcbiAqXG4gKiBAcmVtYXJrc1xuICogUmVhY3QgY29tcG9uZW50IHdoaWNoIHdyYXBzIHRoZSBTaG9waWZ5IEFwcCBCcmlkZ2UgUmVzb3VyY2VQaWNrZXIgYWN0aW9uLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xudmFyIFJlc291cmNlUGlja2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhSZXNvdXJjZVBpY2tlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBSZXNvdXJjZVBpY2tlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmZvY3VzUmV0dXJuUG9pbnQgPSBudWxsO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFJlc291cmNlUGlja2VyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgb3BlbiA9IF9hLm9wZW4sIHJlc291cmNlVHlwZSA9IF9hLnJlc291cmNlVHlwZSwgb25TZWxlY3Rpb24gPSBfYS5vblNlbGVjdGlvbiwgb25DYW5jZWwgPSBfYS5vbkNhbmNlbDtcbiAgICAgICAgdmFyIGFwcCA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgdGhpcy5waWNrZXIgPSBhY3Rpb25zXzEuUmVzb3VyY2VQaWNrZXIuY3JlYXRlKGFwcCwge1xuICAgICAgICAgICAgcmVzb3VyY2VUeXBlOiBhY3Rpb25zXzEuUmVzb3VyY2VQaWNrZXIuUmVzb3VyY2VUeXBlW3Jlc291cmNlVHlwZV0sXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLmdldEFjdGlvbk9wdGlvbnMoKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvblNlbGVjdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBpY2tlci5zdWJzY3JpYmUoYWN0aW9uc18xLlJlc291cmNlUGlja2VyLkFjdGlvbi5TRUxFQ1QsIG9uU2VsZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob25DYW5jZWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5waWNrZXIuc3Vic2NyaWJlKGFjdGlvbnNfMS5SZXNvdXJjZVBpY2tlci5BY3Rpb24uQ0FOQ0VMLCBvbkNhbmNlbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNSZXR1cm5Qb2ludCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLnBpY2tlci5kaXNwYXRjaChhY3Rpb25zXzEuUmVzb3VyY2VQaWNrZXIuQWN0aW9uLk9QRU4pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZXNvdXJjZVBpY2tlci5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gKHByZXZQcm9wcykge1xuICAgICAgICB2YXIgd2FzT3BlbiA9IHByZXZQcm9wcy5vcGVuO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBvcGVuID0gX2Eub3Blbiwgb25DYW5jZWwgPSBfYS5vbkNhbmNlbCwgb25TZWxlY3Rpb24gPSBfYS5vblNlbGVjdGlvbjtcbiAgICAgICAgdGhpcy5waWNrZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5waWNrZXIuc2V0KHRoaXMuZ2V0QWN0aW9uT3B0aW9ucygpKTtcbiAgICAgICAgaWYgKG9uU2VsZWN0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucGlja2VyLnN1YnNjcmliZShhY3Rpb25zXzEuUmVzb3VyY2VQaWNrZXIuQWN0aW9uLlNFTEVDVCwgb25TZWxlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvbkNhbmNlbCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBpY2tlci5zdWJzY3JpYmUoYWN0aW9uc18xLlJlc291cmNlUGlja2VyLkFjdGlvbi5DQU5DRUwsIG9uQ2FuY2VsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2FzT3BlbiAhPT0gb3Blbikge1xuICAgICAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlci5kaXNwYXRjaChhY3Rpb25zXzEuUmVzb3VyY2VQaWNrZXIuQWN0aW9uLk9QRU4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXIuZGlzcGF0Y2goYWN0aW9uc18xLlJlc291cmNlUGlja2VyLkFjdGlvbi5DTE9TRSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF3YXNPcGVuICYmIG9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNSZXR1cm5Qb2ludCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAod2FzT3BlbiAmJlxuICAgICAgICAgICAgIW9wZW4gJiZcbiAgICAgICAgICAgIHRoaXMuZm9jdXNSZXR1cm5Qb2ludCAhPSBudWxsICYmXG4gICAgICAgICAgICBkb2N1bWVudC5jb250YWlucyh0aGlzLmZvY3VzUmV0dXJuUG9pbnQpKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzUmV0dXJuUG9pbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNSZXR1cm5Qb2ludCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlc291cmNlUGlja2VyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5waWNrZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIFJlc291cmNlUGlja2VyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgUmVzb3VyY2VQaWNrZXIucHJvdG90eXBlLmdldEFjdGlvbk9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGluaXRpYWxRdWVyeSA9IF9hLmluaXRpYWxRdWVyeSwgaW5pdGlhbFNlbGVjdGlvbklkcyA9IF9hLmluaXRpYWxTZWxlY3Rpb25JZHMsIHNob3dIaWRkZW4gPSBfYS5zaG93SGlkZGVuLCBhbGxvd011bHRpcGxlID0gX2EuYWxsb3dNdWx0aXBsZSwgc2VsZWN0TXVsdGlwbGUgPSBfYS5zZWxlY3RNdWx0aXBsZSwgYWN0aW9uVmVyYiA9IF9hLmFjdGlvblZlcmI7XG4gICAgICAgIHZhciBzaGFyZWRPcHRpb25zID0ge1xuICAgICAgICAgICAgaW5pdGlhbFF1ZXJ5OiBpbml0aWFsUXVlcnksXG4gICAgICAgICAgICBpbml0aWFsU2VsZWN0aW9uSWRzOiBpbml0aWFsU2VsZWN0aW9uSWRzLFxuICAgICAgICAgICAgc2hvd0hpZGRlbjogc2hvd0hpZGRlbixcbiAgICAgICAgICAgIHNlbGVjdE11bHRpcGxlOiBzZWxlY3RNdWx0aXBsZSAhPT0gbnVsbCAmJiBzZWxlY3RNdWx0aXBsZSAhPT0gdm9pZCAwID8gc2VsZWN0TXVsdGlwbGUgOiBhbGxvd011bHRpcGxlLFxuICAgICAgICAgICAgYWN0aW9uVmVyYjogYWN0aW9uVmVyYixcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHNoYXJlZE9wdGlvbnM7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnJlc291cmNlVHlwZSA9PT0gJ1Byb2R1Y3QnKSB7XG4gICAgICAgICAgICB2YXIgX2IgPSB0aGlzLnByb3BzLCBzaG93VmFyaWFudHMgPSBfYi5zaG93VmFyaWFudHMsIHNob3dEcmFmdCA9IF9iLnNob3dEcmFmdCwgc2hvd0FyY2hpdmVkID0gX2Iuc2hvd0FyY2hpdmVkLCBzaG93RHJhZnRCYWRnZSA9IF9iLnNob3dEcmFmdEJhZGdlLCBzaG93QXJjaGl2ZWRCYWRnZSA9IF9iLnNob3dBcmNoaXZlZEJhZGdlO1xuICAgICAgICAgICAgdmFyIHByb2R1Y3RTcGVjaWZpY09wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgc2hvd1ZhcmlhbnRzOiBzaG93VmFyaWFudHMsXG4gICAgICAgICAgICAgICAgc2hvd0RyYWZ0OiBzaG93RHJhZnQsXG4gICAgICAgICAgICAgICAgc2hvd0FyY2hpdmVkOiBzaG93QXJjaGl2ZWQsXG4gICAgICAgICAgICAgICAgc2hvd0RyYWZ0QmFkZ2U6IHNob3dEcmFmdEJhZGdlLFxuICAgICAgICAgICAgICAgIHNob3dBcmNoaXZlZEJhZGdlOiBzaG93QXJjaGl2ZWRCYWRnZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXN1bHQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc2hhcmVkT3B0aW9ucyksIHByb2R1Y3RTcGVjaWZpY09wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBSZXNvdXJjZVBpY2tlci5jb250ZXh0VHlwZSA9IGNvbnRleHRfMS5BcHBCcmlkZ2VDb250ZXh0O1xuICAgIFJlc291cmNlUGlja2VyLkFjdGlvblZlcmIgPSBhY3Rpb25zXzEuUmVzb3VyY2VQaWNrZXIuQWN0aW9uVmVyYjtcbiAgICByZXR1cm4gUmVzb3VyY2VQaWNrZXI7XG59KHJlYWN0XzEuZGVmYXVsdC5QdXJlQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBSZXNvdXJjZVBpY2tlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJlc291cmNlUGlja2VyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vUmVzb3VyY2VQaWNrZXJcIikpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUmVzb3VyY2VQaWNrZXJfMS5kZWZhdWx0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgY29udGV4dF8xID0gcmVxdWlyZShcIi4uLy4uL2NvbnRleHRcIik7XG52YXIgcm91dGVfcHJvcGFnYXRvcl8xID0gcmVxdWlyZShcIi4vcm91dGUtcHJvcGFnYXRvclwiKTtcbi8qKlxuICogUm91dGVQcm9wYWdhdG9yIGNvbXBvbmVudFxuICpcbiAqIEByZW1hcmtzXG4gKiBSZWFjdCBjb21wb25lbnQgd2hpY2gga2VlcHMgdGhlIFNob3BpZnkgYWRtaW4gdXJsIGluIHN5bmMgd2l0aCB0aGUgYXBwIHVybFxuICpcbiAqIEBwdWJsaWNcbiAqL1xudmFyIFJvdXRlUHJvcGFnYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUm91dGVQcm9wYWdhdG9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJvdXRlUHJvcGFnYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBSb3V0ZVByb3BhZ2F0b3IucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbG9jYXRpb24gPSB0aGlzLnByb3BzLmxvY2F0aW9uO1xuICAgICAgICByb3V0ZV9wcm9wYWdhdG9yXzEudXBkYXRlSGlzdG9yeSh0aGlzLmNvbnRleHQsIGxvY2F0aW9uKTtcbiAgICB9O1xuICAgIFJvdXRlUHJvcGFnYXRvci5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBwcmV2TG9jYXRpb24gPSBfYS5sb2NhdGlvbjtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gdGhpcy5wcm9wcy5sb2NhdGlvbjtcbiAgICAgICAgaWYgKGxvY2F0aW9uICE9PSBwcmV2TG9jYXRpb24pIHtcbiAgICAgICAgICAgIHJvdXRlX3Byb3BhZ2F0b3JfMS51cGRhdGVIaXN0b3J5KHRoaXMuY29udGV4dCwgbG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSb3V0ZVByb3BhZ2F0b3IucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBSb3V0ZVByb3BhZ2F0b3IuY29udGV4dFR5cGUgPSBjb250ZXh0XzEuQXBwQnJpZGdlQ29udGV4dDtcbiAgICByZXR1cm4gUm91dGVQcm9wYWdhdG9yO1xufShyZWFjdF8xLmRlZmF1bHQuQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZVByb3BhZ2F0b3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0T3JpZ2luID0gZXhwb3J0cy5nZXRUb3BXaW5kb3cgPSBleHBvcnRzLmdldFNlbGZXaW5kb3cgPSB2b2lkIDA7XG5mdW5jdGlvbiBnZXRTZWxmV2luZG93KCkge1xuICAgIHJldHVybiB3aW5kb3cuc2VsZjtcbn1cbmV4cG9ydHMuZ2V0U2VsZldpbmRvdyA9IGdldFNlbGZXaW5kb3c7XG5mdW5jdGlvbiBnZXRUb3BXaW5kb3coKSB7XG4gICAgcmV0dXJuIHdpbmRvdy50b3A7XG59XG5leHBvcnRzLmdldFRvcFdpbmRvdyA9IGdldFRvcFdpbmRvdztcbmZ1bmN0aW9uIGdldE9yaWdpbigpIHtcbiAgICByZXR1cm4gbG9jYXRpb24ub3JpZ2luO1xufVxuZXhwb3J0cy5nZXRPcmlnaW4gPSBnZXRPcmlnaW47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIHVzZUFwcEJyaWRnZV8xID0gcmVxdWlyZShcIi4uLy4uL3VzZUFwcEJyaWRnZVwiKTtcbnZhciByb3V0ZV9wcm9wYWdhdG9yXzEgPSByZXF1aXJlKFwiLi9yb3V0ZS1wcm9wYWdhdG9yXCIpO1xuLyoqXG4gKiB1c2VSb3V0ZVByb3BhZ2F0aW9uXG4gKlxuICogQHJlbWFya3NcbiAqIEEgaG9vayB3aGljaCBrZWVwcyB0aGUgU2hvcGlmeSBhZG1pbiB1cmwgaW4gc3luYyB3aXRoIHRoZSBhcHAgdXJsXG4gKlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiB1c2VSb3V0ZVByb3BhZ2F0aW9uKGxvY2F0aW9uKSB7XG4gICAgdmFyIGFwcCA9IHVzZUFwcEJyaWRnZV8xLnVzZUFwcEJyaWRnZSgpO1xuICAgIHJlYWN0XzEudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcm91dGVfcHJvcGFnYXRvcl8xLnVwZGF0ZUhpc3RvcnkoYXBwLCBsb2NhdGlvbik7XG4gICAgfSwgW2FwcCwgbG9jYXRpb25dKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHVzZVJvdXRlUHJvcGFnYXRpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBSb3V0ZVByb3BhZ2F0b3JfMSA9IHJlcXVpcmUoXCIuL1JvdXRlUHJvcGFnYXRvclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlUHJvcGFnYXRvclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gUm91dGVQcm9wYWdhdG9yXzEuZGVmYXVsdDsgfSB9KTtcbnZhciBob29rXzEgPSByZXF1aXJlKFwiLi9ob29rXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidXNlUm91dGVQcm9wYWdhdGlvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaG9va18xLmRlZmF1bHQ7IH0gfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVwZGF0ZUhpc3RvcnkgPSB2b2lkIDA7XG52YXIgYXBwX2JyaWRnZV8xID0gcmVxdWlyZShcIkBzaG9waWZ5L2FwcC1icmlkZ2VcIik7XG52YXIgYWN0aW9uc18xID0gcmVxdWlyZShcIkBzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9uc1wiKTtcbnZhciBnbG9iYWxzXzEgPSByZXF1aXJlKFwiLi9nbG9iYWxzXCIpO1xuLy8gVGhlc2UgcGFyYW1ldGVycyBhcmUgYWRkZWQgdG8gdGhlIGlmcmFtZSB1cmwgYnV0IHdlIGRvbid0IHdhbnQgdG8gcHJvcGFnYXRlXG4vLyB0aGVtIHVwIHRvIHRoZSBhZGRyZXNzIGJhciBhcyB0aGV5IGFyZSBub3QgcHJvdmlkZWQgYnkgdGhlIGFwcGxpY2F0aW9uXG4vLyBSZW1vdmluZyBobWFjIGlzIGVzcGVjaWFsbHkgaW1wb3J0YW50IGFzIGl0cyBwcmVzZW5jZSBtYXkgY2F1c2UgaW5maW5pdGVcbi8vIG9hdXRoIGF1dGhlbnRpY2F0aW9uIGxvb3BzXG52YXIgZW1iZWRkZWRGcmFtZVBhcmFtc1RvUmVtb3ZlID0gWydobWFjJywgJ2xvY2FsZScsICdwcm90b2NvbCcsICdzZXNzaW9uJywgJ3Nob3AnLCAndGltZXN0YW1wJ107XG5mdW5jdGlvbiB1cGRhdGVIaXN0b3J5KGFwcCwgbG9jYXRpb24pIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxmV2luZG93LCB0b3BXaW5kb3csIHJlbmRlcmVkSW5UaGVUb3BXaW5kb3csIHJlbmRlcmVkQXNNYWluQXBwLCBub3JtYWxpemVkTG9jYXRpb24sIHBhdGhuYW1lLCBzZWFyY2gsIGhhc2gsIGxvY2F0aW9uU3RyO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBzZWxmV2luZG93ID0gZ2xvYmFsc18xLmdldFNlbGZXaW5kb3coKTtcbiAgICAgICAgICAgICAgICAgICAgdG9wV2luZG93ID0gZ2xvYmFsc18xLmdldFRvcFdpbmRvdygpO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlZEluVGhlVG9wV2luZG93ID0gc2VsZldpbmRvdyA9PT0gdG9wV2luZG93O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBhcHAuZ2V0U3RhdGUoJ2NvbnRleHQnKS50aGVuKGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQgPT09IGFwcF9icmlkZ2VfMS5Db250ZXh0Lk1haW47XG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICByZW5kZXJlZEFzTWFpbkFwcCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbmRlcmVkSW5UaGVUb3BXaW5kb3cgfHwgIXJlbmRlcmVkQXNNYWluQXBwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZExvY2F0aW9uID0gZ2V0Tm9ybWFsaXplZFVSTChsb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGVtYmVkZGVkRnJhbWVQYXJhbXNUb1JlbW92ZS5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkgeyByZXR1cm4gbm9ybWFsaXplZExvY2F0aW9uLnNlYXJjaFBhcmFtcy5kZWxldGUocGFyYW0pOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVkTG9jYXRpb24ucGF0aG5hbWUsIHNlYXJjaCA9IG5vcm1hbGl6ZWRMb2NhdGlvbi5zZWFyY2gsIGhhc2ggPSBub3JtYWxpemVkTG9jYXRpb24uaGFzaDtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25TdHIgPSBcIlwiICsgcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoO1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zXzEuSGlzdG9yeS5jcmVhdGUoYXBwKS5kaXNwYXRjaChhY3Rpb25zXzEuSGlzdG9yeS5BY3Rpb24uUkVQTEFDRSwgbG9jYXRpb25TdHIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0cy51cGRhdGVIaXN0b3J5ID0gdXBkYXRlSGlzdG9yeTtcbmZ1bmN0aW9uIGdldE5vcm1hbGl6ZWRVUkwobG9jYXRpb24pIHtcbiAgICB2YXIgb3JpZ2luID0gZ2xvYmFsc18xLmdldE9yaWdpbigpO1xuICAgIGlmICh0eXBlb2YgbG9jYXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBuZXcgVVJMKGxvY2F0aW9uLCBvcmlnaW4pO1xuICAgIH1cbiAgICB2YXIgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZSwgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoLCBoYXNoID0gbG9jYXRpb24uaGFzaDtcbiAgICByZXR1cm4gbmV3IFVSTChcIlwiICsgcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoLCBvcmlnaW4pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgYWN0aW9uc18xID0gcmVxdWlyZShcIkBzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9uc1wiKTtcbnZhciB0cmFuc2Zvcm1lcnNfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsaXRpZXMvdHJhbnNmb3JtZXJzXCIpO1xudmFyIGNvbnRleHRfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb250ZXh0XCIpO1xudmFyIFRpdGxlQmFyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUaXRsZUJhciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUaXRsZUJhcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBUaXRsZUJhci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcHAgPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIHRoaXMudGl0bGVCYXIgPSBhY3Rpb25zXzEuVGl0bGVCYXIuY3JlYXRlKGFwcCwgdGhpcy50cmFuc2Zvcm1Qcm9wcygpKTtcbiAgICB9O1xuICAgIFRpdGxlQmFyLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudGl0bGVCYXIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy50aXRsZUJhci5zZXQodGhpcy50cmFuc2Zvcm1Qcm9wcygpKTtcbiAgICB9O1xuICAgIFRpdGxlQmFyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50aXRsZUJhci51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgVGl0bGVCYXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBUaXRsZUJhci5wcm90b3R5cGUudHJhbnNmb3JtUHJvcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcHAgPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIHRpdGxlID0gX2EudGl0bGUsIHByaW1hcnlBY3Rpb24gPSBfYS5wcmltYXJ5QWN0aW9uLCBzZWNvbmRhcnlBY3Rpb25zID0gX2Euc2Vjb25kYXJ5QWN0aW9ucywgYWN0aW9uR3JvdXBzID0gX2EuYWN0aW9uR3JvdXBzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgYnV0dG9uczogdHJhbnNmb3JtZXJzXzEudHJhbnNmb3JtQWN0aW9ucyhhcHAsIHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5QWN0aW9uOiBwcmltYXJ5QWN0aW9uLFxuICAgICAgICAgICAgICAgIHNlY29uZGFyeUFjdGlvbnM6IHNlY29uZGFyeUFjdGlvbnMsXG4gICAgICAgICAgICAgICAgYWN0aW9uR3JvdXBzOiBhY3Rpb25Hcm91cHMsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGJyZWFkY3J1bWJzOiB0aGlzLnRyYW5zZm9ybUJyZWFkY3J1bWJzKCksXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBUaXRsZUJhci5wcm90b3R5cGUudHJhbnNmb3JtQnJlYWRjcnVtYnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcHAgPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIHZhciBicmVhZGNydW1icyA9IHRoaXMucHJvcHMuYnJlYWRjcnVtYnM7XG4gICAgICAgIGlmIChicmVhZGNydW1icyA9PSBudWxsIHx8IGJyZWFkY3J1bWJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYnJlYWRjcnVtYiA9IGJyZWFkY3J1bWJzW2JyZWFkY3J1bWJzLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgdXJsID0gYnJlYWRjcnVtYi51cmwsIG9uQWN0aW9uID0gYnJlYWRjcnVtYi5vbkFjdGlvbiwgdGFyZ2V0ID0gYnJlYWRjcnVtYi50YXJnZXQsIGNvbnRlbnQgPSBicmVhZGNydW1iLmNvbnRlbnQ7XG4gICAgICAgIHZhciBidXR0b24gPSBhY3Rpb25zXzEuQnV0dG9uLmNyZWF0ZShhcHAsIHtcbiAgICAgICAgICAgIGxhYmVsOiBjb250ZW50IHx8ICcnLFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHJlZGlyZWN0ID0gdHJhbnNmb3JtZXJzXzEuZ2VuZXJhdGVSZWRpcmVjdChhcHAsIHVybCwgdGFyZ2V0KTtcbiAgICAgICAgaWYgKHJlZGlyZWN0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5zdWJzY3JpYmUoYWN0aW9uc18xLkJ1dHRvbi5BY3Rpb24uQ0xJQ0ssIHJlZGlyZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob25BY3Rpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgYnV0dG9uLnN1YnNjcmliZShhY3Rpb25zXzEuQnV0dG9uLkFjdGlvbi5DTElDSywgb25BY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfTtcbiAgICBUaXRsZUJhci5jb250ZXh0VHlwZSA9IGNvbnRleHRfMS5BcHBCcmlkZ2VDb250ZXh0O1xuICAgIHJldHVybiBUaXRsZUJhcjtcbn0ocmVhY3RfMS5kZWZhdWx0LlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRpdGxlQmFyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgVGl0bGVCYXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9UaXRsZUJhclwiKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBUaXRsZUJhcl8xLmRlZmF1bHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ERUZBVUxUX1RPQVNUX0RVUkFUSU9OID0gdm9pZCAwO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBhY3Rpb25zXzEgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zXCIpO1xudmFyIGNvbnRleHRfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb250ZXh0XCIpO1xuZXhwb3J0cy5ERUZBVUxUX1RPQVNUX0RVUkFUSU9OID0gNTAwMDtcbi8qKlxuICogVG9hc3QgY29tcG9uZW50XG4gKlxuICogQHJlbWFya3NcbiAqIFJlYWN0IGNvbXBvbmVudCB3aGljaCB3cmFwcyB0aGUgU2hvcGlmeSBBcHAgQnJpZGdlIFRvYXN0IGFjdGlvbi5cbiAqXG4gKiBAcHVibGljXG4gKi9cbnZhciBUb2FzdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVG9hc3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVG9hc3QoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgVG9hc3QucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXBwID0gdGhpcy5jb250ZXh0O1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBlcnJvciA9IF9hLmVycm9yLCBjb250ZW50ID0gX2EuY29udGVudCwgX2IgPSBfYS5kdXJhdGlvbiwgZHVyYXRpb24gPSBfYiA9PT0gdm9pZCAwID8gZXhwb3J0cy5ERUZBVUxUX1RPQVNUX0RVUkFUSU9OIDogX2IsIG9uRGlzbWlzcyA9IF9hLm9uRGlzbWlzcztcbiAgICAgICAgdGhpcy50b2FzdCA9IGFjdGlvbnNfMS5Ub2FzdC5jcmVhdGUoYXBwLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiBjb250ZW50LFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgaXNFcnJvcjogZXJyb3IsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRvYXN0LnN1YnNjcmliZShhY3Rpb25zXzEuVG9hc3QuQWN0aW9uLkNMRUFSLCBvbkRpc21pc3MpO1xuICAgICAgICB0aGlzLnRvYXN0LmRpc3BhdGNoKGFjdGlvbnNfMS5Ub2FzdC5BY3Rpb24uU0hPVyk7XG4gICAgfTtcbiAgICBUb2FzdC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudG9hc3QudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIFRvYXN0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgVG9hc3QuY29udGV4dFR5cGUgPSBjb250ZXh0XzEuQXBwQnJpZGdlQ29udGV4dDtcbiAgICByZXR1cm4gVG9hc3Q7XG59KHJlYWN0XzEuZGVmYXVsdC5QdXJlQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBUb2FzdDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFRvYXN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVG9hc3RcIikpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVG9hc3RfMS5kZWZhdWx0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuL1Byb3ZpZGVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUHJvdmlkZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb3ZpZGVyXzEuZGVmYXVsdDsgfSB9KTtcbnZhciBMb2FkaW5nXzEgPSByZXF1aXJlKFwiLi9Mb2FkaW5nXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTG9hZGluZ1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gTG9hZGluZ18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgVG9hc3RfMSA9IHJlcXVpcmUoXCIuL1RvYXN0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiVG9hc3RcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFRvYXN0XzEuZGVmYXVsdDsgfSB9KTtcbnZhciBUaXRsZUJhcl8xID0gcmVxdWlyZShcIi4vVGl0bGVCYXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJUaXRsZUJhclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gVGl0bGVCYXJfMS5kZWZhdWx0OyB9IH0pO1xudmFyIE1vZGFsXzEgPSByZXF1aXJlKFwiLi9Nb2RhbFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk1vZGFsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBNb2RhbF8xLmRlZmF1bHQ7IH0gfSk7XG52YXIgUmVzb3VyY2VQaWNrZXJfMSA9IHJlcXVpcmUoXCIuL1Jlc291cmNlUGlja2VyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUmVzb3VyY2VQaWNrZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFJlc291cmNlUGlja2VyXzEuZGVmYXVsdDsgfSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9Sb3V0ZVByb3BhZ2F0b3JcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL0NsaWVudFJvdXRlclwiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQXBwQnJpZGdlQ29udGV4dCA9IHZvaWQgMDtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xuLyoqXG4gKiBBcHAgQnJpZGdlIGNvbnRleHQuXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnRzLkFwcEJyaWRnZUNvbnRleHQgPSByZWFjdF8xLmNyZWF0ZUNvbnRleHQobnVsbCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jb21wb25lbnRzXCIpLCBleHBvcnRzKTtcbnZhciBjb250ZXh0XzEgPSByZXF1aXJlKFwiLi9jb250ZXh0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ29udGV4dFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29udGV4dF8xLkFwcEJyaWRnZUNvbnRleHQ7IH0gfSk7XG52YXIgdXNlQXBwQnJpZGdlXzEgPSByZXF1aXJlKFwiLi91c2VBcHBCcmlkZ2VcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ1c2VBcHBCcmlkZ2VcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVzZUFwcEJyaWRnZV8xLnVzZUFwcEJyaWRnZTsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51c2VBcHBCcmlkZ2UgPSB2b2lkIDA7XG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBjb250ZXh0XzEgPSByZXF1aXJlKFwiLi9jb250ZXh0XCIpO1xuZnVuY3Rpb24gdXNlQXBwQnJpZGdlKCkge1xuICAgIHZhciBhcHBCcmlkZ2UgPSByZWFjdF8xLnVzZUNvbnRleHQoY29udGV4dF8xLkFwcEJyaWRnZUNvbnRleHQpO1xuICAgIGlmICghYXBwQnJpZGdlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gQXBwQnJpZGdlIGNvbnRleHQgcHJvdmlkZWQuIFlvdXIgY29tcG9uZW50IG11c3QgYmUgd3JhcHBlZCBpbiBhbiBBcHBCcmlkZ2UgPENvbnRleHQ+IGNvbXBvbmVudC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIGFwcEJyaWRnZTtcbn1cbmV4cG9ydHMudXNlQXBwQnJpZGdlID0gdXNlQXBwQnJpZGdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xuICAgIHJldHVybiByO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudHJhbnNmb3JtQWN0aW9ucyA9IGV4cG9ydHMuZ2VuZXJhdGVSZWRpcmVjdCA9IHZvaWQgMDtcbnZhciBhY3Rpb25zXzEgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zXCIpO1xuZnVuY3Rpb24gZ2VuZXJhdGVSZWRpcmVjdChhcHBCcmlkZ2UsIHVybCwgdGFyZ2V0LCBleHRlcm5hbCkge1xuICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgeyB0YXJnZXQgPSAnQVBQJzsgfVxuICAgIGlmICh1cmwgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB2YXIgcmVkaXJlY3QgPSBhY3Rpb25zXzEuUmVkaXJlY3QuY3JlYXRlKGFwcEJyaWRnZSk7XG4gICAgdmFyIHBheWxvYWQgPSBleHRlcm5hbCA9PT0gdHJ1ZVxuICAgICAgICA/IHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgbmV3Q29udGV4dDogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgICA6IHVybDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZWRpcmVjdC5kaXNwYXRjaChyZWRpcmVjdEFjdGlvbih0YXJnZXQsIGV4dGVybmFsKSwgcGF5bG9hZCk7XG4gICAgfTtcbn1cbmV4cG9ydHMuZ2VuZXJhdGVSZWRpcmVjdCA9IGdlbmVyYXRlUmVkaXJlY3Q7XG5mdW5jdGlvbiByZWRpcmVjdEFjdGlvbih0YXJnZXQsIGV4dGVybmFsKSB7XG4gICAgaWYgKGV4dGVybmFsID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBhY3Rpb25zXzEuUmVkaXJlY3QuQWN0aW9uLlJFTU9URTtcbiAgICB9XG4gICAgcmV0dXJuIGFjdGlvbnNfMS5SZWRpcmVjdC5BY3Rpb25bdGFyZ2V0XTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybUFjdGlvbnMoYXBwQnJpZGdlLCBfYSkge1xuICAgIHZhciBwcmltYXJ5QWN0aW9uID0gX2EucHJpbWFyeUFjdGlvbiwgc2Vjb25kYXJ5QWN0aW9ucyA9IF9hLnNlY29uZGFyeUFjdGlvbnMsIGFjdGlvbkdyb3VwcyA9IF9hLmFjdGlvbkdyb3VwcztcbiAgICB2YXIgcHJpbWFyeSA9IHRyYW5zZm9ybVByaW1hcnlBY3Rpb24oYXBwQnJpZGdlLCBwcmltYXJ5QWN0aW9uKTtcbiAgICB2YXIgc2Vjb25kYXJ5ID0gX19zcHJlYWRBcnJheXModHJhbnNmb3JtU2Vjb25kYXJ5QWN0aW9ucyhhcHBCcmlkZ2UsIHNlY29uZGFyeUFjdGlvbnMpLCB0cmFuc2Zvcm1BY3Rpb25Hcm91cHMoYXBwQnJpZGdlLCBhY3Rpb25Hcm91cHMpKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcmltYXJ5OiBwcmltYXJ5LFxuICAgICAgICBzZWNvbmRhcnk6IHNlY29uZGFyeSxcbiAgICB9O1xufVxuZXhwb3J0cy50cmFuc2Zvcm1BY3Rpb25zID0gdHJhbnNmb3JtQWN0aW9ucztcbmZ1bmN0aW9uIHRyYW5zZm9ybUFjdGlvbihhcHBCcmlkZ2UsIGFjdGlvbikge1xuICAgIHZhciBzdHlsZSA9IGFjdGlvbi5kZXN0cnVjdGl2ZSA9PT0gdHJ1ZSA/IGFjdGlvbnNfMS5CdXR0b24uU3R5bGUuRGFuZ2VyIDogdW5kZWZpbmVkO1xuICAgIHZhciBidXR0b24gPSBhY3Rpb25zXzEuQnV0dG9uLmNyZWF0ZShhcHBCcmlkZ2UsIHtcbiAgICAgICAgbGFiZWw6IGFjdGlvbi5jb250ZW50IHx8ICcnLFxuICAgICAgICBkaXNhYmxlZDogYWN0aW9uLmRpc2FibGVkLFxuICAgICAgICBsb2FkaW5nOiBhY3Rpb24ubG9hZGluZyxcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgIH0pO1xuICAgIGlmIChhY3Rpb24ub25BY3Rpb24pIHtcbiAgICAgICAgYnV0dG9uLnN1YnNjcmliZShhY3Rpb25zXzEuQnV0dG9uLkFjdGlvbi5DTElDSywgYWN0aW9uLm9uQWN0aW9uKTtcbiAgICB9XG4gICAgdmFyIHJlZGlyZWN0ID0gZ2VuZXJhdGVSZWRpcmVjdChhcHBCcmlkZ2UsIGFjdGlvbi51cmwsIGFjdGlvbi50YXJnZXQsIGFjdGlvbi5leHRlcm5hbCk7XG4gICAgaWYgKHJlZGlyZWN0ICE9IG51bGwpIHtcbiAgICAgICAgYnV0dG9uLnN1YnNjcmliZShhY3Rpb25zXzEuQnV0dG9uLkFjdGlvbi5DTElDSywgcmVkaXJlY3QpO1xuICAgIH1cbiAgICByZXR1cm4gYnV0dG9uO1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtUHJpbWFyeUFjdGlvbihhcHBCcmlkZ2UsIHByaW1hcnlBY3Rpb24pIHtcbiAgICBpZiAocHJpbWFyeUFjdGlvbiA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHZhciBwcmltYXJ5ID0gdHJhbnNmb3JtQWN0aW9uKGFwcEJyaWRnZSwgcHJpbWFyeUFjdGlvbik7XG4gICAgcmV0dXJuIHByaW1hcnk7XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1TZWNvbmRhcnlBY3Rpb25zKGFwcEJyaWRnZSwgc2Vjb25kYXJ5QWN0aW9ucykge1xuICAgIGlmIChzZWNvbmRhcnlBY3Rpb25zID09PSB2b2lkIDApIHsgc2Vjb25kYXJ5QWN0aW9ucyA9IFtdOyB9XG4gICAgdmFyIHNlY29uZGFyeSA9IF9fc3ByZWFkQXJyYXlzKHNlY29uZGFyeUFjdGlvbnMubWFwKGZ1bmN0aW9uIChzZWNvbmRhcnlBY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybUFjdGlvbihhcHBCcmlkZ2UsIHNlY29uZGFyeUFjdGlvbik7XG4gICAgfSkpO1xuICAgIHJldHVybiBzZWNvbmRhcnk7XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1BY3Rpb25Hcm91cHMoYXBwQnJpZGdlLCBhY3Rpb25Hcm91cHMpIHtcbiAgICBpZiAoYWN0aW9uR3JvdXBzID09PSB2b2lkIDApIHsgYWN0aW9uR3JvdXBzID0gW107IH1cbiAgICB2YXIgYnV0dG9uR3JvdXBzID0gX19zcHJlYWRBcnJheXMoYWN0aW9uR3JvdXBzLm1hcChmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgICAgdmFyIGJ1dHRvbnMgPSBncm91cC5hY3Rpb25zLm1hcChmdW5jdGlvbiAoZ3JvdXBBY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2Zvcm1BY3Rpb24oYXBwQnJpZGdlLCBncm91cEFjdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWN0aW9uc18xLkJ1dHRvbkdyb3VwLmNyZWF0ZShhcHBCcmlkZ2UsIHsgbGFiZWw6IGdyb3VwLnRpdGxlLCBidXR0b25zOiBidXR0b25zIH0pO1xuICAgIH0pKTtcbiAgICByZXR1cm4gYnV0dG9uR3JvdXBzO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZVRyYW5zcG9ydExpc3RlbmVyID0gZXhwb3J0cy5mcm9tV2luZG93ID0gZXhwb3J0cy5mcm9tRnJhbWUgPSBleHBvcnRzLkNvbnRleHQgPSB2b2lkIDA7XG52YXIgRXJyb3JfMSA9IHJlcXVpcmUoXCIuL2FjdGlvbnMvRXJyb3JcIik7XG52YXIgdmFsaWRhdG9yXzEgPSByZXF1aXJlKFwiLi9hY3Rpb25zL3ZhbGlkYXRvclwiKTtcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4vY2xpZW50L3R5cGVzXCIpO1xudmFyIGNvbGxlY3Rpb25fMSA9IHJlcXVpcmUoXCIuL3V0aWwvY29sbGVjdGlvblwiKTtcbnZhciBlbnZfMSA9IHJlcXVpcmUoXCIuL3V0aWwvZW52XCIpO1xudmFyIENvbnRleHQ7XG4oZnVuY3Rpb24gKENvbnRleHQpIHtcbiAgICBDb250ZXh0W1wiTW9kYWxcIl0gPSBcIk1vZGFsXCI7XG4gICAgQ29udGV4dFtcIk1haW5cIl0gPSBcIk1haW5cIjtcbn0pKENvbnRleHQgPSBleHBvcnRzLkNvbnRleHQgfHwgKGV4cG9ydHMuQ29udGV4dCA9IHt9KSk7XG4vKipcbiAqIENyZWF0ZSBhIE1lc3NhZ2VUcmFuc3BvcnQgZnJvbSBhbiBJRnJhbWUuXG4gKiBAcmVtYXJrc1xuICogVXNlZCBvbiB0aGUgaG9zdC1zaWRlIHRvIGNyZWF0ZSBhIHBvc3RNZXNzYWdlIE1lc3NhZ2VUcmFuc3BvcnQuXG4gKiBAYmV0YVxuICovXG5mdW5jdGlvbiBmcm9tRnJhbWUoZnJhbWUsIGxvY2FsT3JpZ2luLCBjb250ZXh0KSB7XG4gICAgdmFyIGhhbmRsZXJzID0gW107XG4gICAgaWYgKHR5cGVvZiBmcmFtZSA9PT0gJ3VuZGVmaW5lZCcgfHwgIWZyYW1lLm93bmVyRG9jdW1lbnQgfHwgIWZyYW1lLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpIHtcbiAgICAgICAgdGhyb3cgRXJyb3JfMS5mcm9tQWN0aW9uKCdBcHAgZnJhbWUgaXMgdW5kZWZpbmVkJywgRXJyb3JfMS5BcHBBY3Rpb25UeXBlLldJTkRPV19VTkRFRklORUQpO1xuICAgIH1cbiAgICB2YXIgcGFyZW50ID0gZnJhbWUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICBwYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoIXZhbGlkYXRvcl8xLmlzQXBwTWVzc2FnZShldmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luICE9PSBsb2NhbE9yaWdpbikge1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRXaW5kb3cgPSBmcmFtZS5jb250ZW50V2luZG93O1xuICAgICAgICAgICAgaWYgKGNvbnRlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gXCJNZXNzYWdlIG9yaWdpbiAnXCIgKyBldmVudC5vcmlnaW4gKyBcIicgZG9lcyBub3QgbWF0Y2ggYXBwIG9yaWdpbiAnXCIgKyBsb2NhbE9yaWdpbiArIFwiJy5cIjtcbiAgICAgICAgICAgICAgICB2YXIgcGF5bG9hZCA9IEVycm9yXzEuaW52YWxpZE9yaWdpbkFjdGlvbihlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGlzcGF0Y2gnLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShtZXNzYWdlLCBldmVudC5vcmlnaW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgaGFuZGxlcnNfMSA9IGhhbmRsZXJzOyBfaSA8IGhhbmRsZXJzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlciA9IGhhbmRsZXJzXzFbX2ldO1xuICAgICAgICAgICAgaGFuZGxlcihldmVudCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICBsb2NhbE9yaWdpbjogbG9jYWxPcmlnaW4sXG4gICAgICAgIGZyYW1lV2luZG93OiBmcmFtZS5jb250ZW50V2luZG93LFxuICAgICAgICBob3N0RnJhbWU6IHBhcmVudCxcbiAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgICAgICB2YXIgY29udGVudFdpbmRvdyA9IGZyYW1lLmNvbnRlbnRXaW5kb3c7XG4gICAgICAgICAgICBpZiAoY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UobWVzc2FnZSwgbG9jYWxPcmlnaW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbl8xLmFkZEFuZFJlbW92ZUZyb21Db2xsZWN0aW9uKGhhbmRsZXJzLCBoYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5mcm9tRnJhbWUgPSBmcm9tRnJhbWU7XG4vKipcbiAqIENyZWF0ZSBhIE1lc3NhZ2VUcmFuc3BvcnQgZnJvbSBhIHBhcmVudCB3aW5kb3cuXG4gKiBAcmVtYXJrc1xuICogVXNlZCBvbiB0aGUgY2xpZW50LXNpZGUgdG8gY3JlYXRlIGEgcG9zdE1lc3NhZ2UgTWVzc2FnZVRyYW5zcG9ydC5cbiAqIEBpbnRlcm5hbHJlbWFya3NcbiAqIEluIGZyYW1lbGVzcyBtb2RlLCBtZXNzYWdlIHNob3VsZCBiZSBkaXNwYXRjaGVkIHZpYSBTbWFydFdlYlZpZXcuaGFuZGxlTWVzc2FnZSBpbnN0ZWFkIG9mIHBvc3RNZXNzYWdlLlxuICogQGJldGFcbiAqL1xuZnVuY3Rpb24gZnJvbVdpbmRvdyhjb250ZW50V2luZG93LCBsb2NhbE9yaWdpbikge1xuICAgIHZhciBoYW5kbGVycyA9IFtdO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICgod2luZG93ID09PSBjb250ZW50V2luZG93ICYmICFlbnZfMS5pc0ZyYW1lbGVzcykgfHxcbiAgICAgICAgICAgICAgICBldmVudC5zb3VyY2UgIT09IGNvbnRlbnRXaW5kb3cgfHxcbiAgICAgICAgICAgICAgICAhKHZhbGlkYXRvcl8xLmlzQXBwQnJpZGdlQWN0aW9uKGV2ZW50LmRhdGEucGF5bG9hZCkgfHwgdmFsaWRhdG9yXzEuaXNBcHBNZXNzYWdlKGV2ZW50KSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGhhbmRsZXJzXzIgPSBoYW5kbGVyczsgX2kgPCBoYW5kbGVyc18yLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVyID0gaGFuZGxlcnNfMltfaV07XG4gICAgICAgICAgICAgICAgaGFuZGxlcihldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBsb2NhbE9yaWdpbjogbG9jYWxPcmlnaW4sXG4gICAgICAgIGhvc3RGcmFtZTogY29udGVudFdpbmRvdyxcbiAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgICAgICBpZiAoIW1lc3NhZ2Uuc291cmNlIHx8ICFtZXNzYWdlLnNvdXJjZS5zaG9wT3JpZ2luKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVudl8xLmlzRnJhbWVsZXNzICYmIHdpbmRvdyAmJiB3aW5kb3cuU21hcnRXZWJWaWV3KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LlNtYXJ0V2ViVmlldy5oYW5kbGVNZXNzYWdlKCdmcmFtZWxlc3M6Ly9mcm9tQ2xpZW50JywgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBtZXNzYWdlT3JpZ2luID0gXCJodHRwczovL1wiICsgbWVzc2FnZS5zb3VyY2Uuc2hvcE9yaWdpbjtcbiAgICAgICAgICAgIGNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UobWVzc2FnZSwgbWVzc2FnZU9yaWdpbik7XG4gICAgICAgIH0sXG4gICAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uXzEuYWRkQW5kUmVtb3ZlRnJvbUNvbGxlY3Rpb24oaGFuZGxlcnMsIGhhbmRsZXIpO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmZyb21XaW5kb3cgPSBmcm9tV2luZG93O1xuZnVuY3Rpb24gY3JlYXRlVHJhbnNwb3J0TGlzdGVuZXIoKSB7XG4gICAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICAgIHZhciBhY3Rpb25MaXN0ZW5lcnMgPSB7fTtcbiAgICBmdW5jdGlvbiBjcmVhdGVTdWJzY3JpYmVIYW5kbGVyKGRpc3BhdGNoZXIpIHtcbiAgICAgICAgZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uXzEuYWRkQW5kUmVtb3ZlRnJvbUNvbGxlY3Rpb24obGlzdGVuZXJzLCB7IGNhbGxiYWNrOiBhcmd1bWVudHNbMF0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgICAgICAgICB2YXIgX2EgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyksIHR5cGUgPSBfYVswXSwgY2FsbGJhY2sgPSBfYVsxXSwgaWQgPSBfYVsyXTtcbiAgICAgICAgICAgIHZhciBhY3Rpb25DYWxsYmFjayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBpZDogaWQgfTtcbiAgICAgICAgICAgIHZhciBwYXlsb2FkID0geyB0eXBlOiB0eXBlLCBpZDogaWQgfTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFjdGlvbkxpc3RlbmVycywgdHlwZSkpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25MaXN0ZW5lcnNbdHlwZV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXNwYXRjaGVyKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2hlcih0eXBlc18xLk1lc3NhZ2VUeXBlLlN1YnNjcmliZSwgcGF5bG9hZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbl8xLmFkZEFuZFJlbW92ZUZyb21Db2xsZWN0aW9uKGFjdGlvbkxpc3RlbmVyc1t0eXBlXSwgYWN0aW9uQ2FsbGJhY2ssIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGlzcGF0Y2hlcikge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaGVyKHR5cGVzXzEuTWVzc2FnZVR5cGUuVW5zdWJzY3JpYmUsIHBheWxvYWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmU7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZVN1YnNjcmliZUhhbmRsZXI6IGNyZWF0ZVN1YnNjcmliZUhhbmRsZXIsXG4gICAgICAgIGhhbmRsZU1lc3NhZ2U6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIGxpc3RlbmVyLmNhbGxiYWNrKG1lc3NhZ2UpOyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlQWN0aW9uRGlzcGF0Y2g6IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBfYS50eXBlLCBwYXlsb2FkID0gX2EucGF5bG9hZDtcbiAgICAgICAgICAgIHZhciBoYXNDYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhY3Rpb25MaXN0ZW5lcnMsIHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYiA9IGFjdGlvbkxpc3RlbmVyc1t0eXBlXTsgX2kgPCBfYi5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gX2JbX2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSBsaXN0ZW5lci5pZCwgY2FsbGJhY2sgPSBsaXN0ZW5lci5jYWxsYmFjaztcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoSWQgPSBwYXlsb2FkICYmIHBheWxvYWQuaWQgPT09IGlkO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hJZCB8fCAhaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHBheWxvYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhhc0NhbGxiYWNrO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmNyZWF0ZVRyYW5zcG9ydExpc3RlbmVyID0gY3JlYXRlVHJhbnNwb3J0TGlzdGVuZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVzcG9uZCA9IGV4cG9ydHMucmVxdWVzdCA9IGV4cG9ydHMuQWN0aW9uID0gZXhwb3J0cy5BY3Rpb25UeXBlID0gdm9pZCAwO1xudmFyIGhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlclwiKTtcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpO1xudmFyIEFjdGlvblR5cGU7XG4oZnVuY3Rpb24gKEFjdGlvblR5cGUpIHtcbiAgICBBY3Rpb25UeXBlW1wiUkVRVUVTVFwiXSA9IFwiQVBQOjpBVVRIX0NPREU6OlJFUVVFU1RcIjtcbiAgICBBY3Rpb25UeXBlW1wiUkVTUE9ORFwiXSA9IFwiQVBQOjpBVVRIX0NPREU6OlJFU1BPTkRcIjtcbn0pKEFjdGlvblR5cGUgPSBleHBvcnRzLkFjdGlvblR5cGUgfHwgKGV4cG9ydHMuQWN0aW9uVHlwZSA9IHt9KSk7XG52YXIgQWN0aW9uO1xuKGZ1bmN0aW9uIChBY3Rpb24pIHtcbiAgICBBY3Rpb25bXCJSRVFVRVNUXCJdID0gXCJSRVFVRVNUXCI7XG4gICAgQWN0aW9uW1wiUkVTUE9ORFwiXSA9IFwiUkVTUE9ORFwiO1xufSkoQWN0aW9uID0gZXhwb3J0cy5BY3Rpb24gfHwgKGV4cG9ydHMuQWN0aW9uID0ge30pKTtcbmZ1bmN0aW9uIHJlcXVlc3QoaWQpIHtcbiAgICByZXR1cm4gaGVscGVyXzEuYWN0aW9uV3JhcHBlcih7XG4gICAgICAgIGdyb3VwOiB0eXBlc18xLkdyb3VwLkF1dGhDb2RlLFxuICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLlJFUVVFU1QsXG4gICAgICAgIHBheWxvYWQ6IHsgaWQ6IGlkIH0sXG4gICAgfSk7XG59XG5leHBvcnRzLnJlcXVlc3QgPSByZXF1ZXN0O1xuZnVuY3Rpb24gcmVzcG9uZChwYXlsb2FkKSB7XG4gICAgcmV0dXJuIGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoe1xuICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5BdXRoQ29kZSxcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5SRVNQT05ELFxuICAgIH0pO1xufVxuZXhwb3J0cy5yZXNwb25kID0gcmVzcG9uZDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGUgPSBleHBvcnRzLkJ1dHRvbiA9IGV4cG9ydHMuaXNWYWxpZEJ1dHRvblByb3BzID0gZXhwb3J0cy51cGRhdGUgPSBleHBvcnRzLmNsaWNrQnV0dG9uID0gdm9pZCAwO1xudmFyIGhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlclwiKTtcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpO1xudmFyIHR5cGVzXzIgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcbmZ1bmN0aW9uIGNsaWNrQnV0dG9uKGdyb3VwLCBjb21wb25lbnQsIHBheWxvYWQpIHtcbiAgICB2YXIgaWQgPSBjb21wb25lbnQuaWQ7XG4gICAgdmFyIGFjdGlvbiA9IGhlbHBlcl8xLmdldEV2ZW50TmFtZVNwYWNlKGdyb3VwLCB0eXBlc18yLkFjdGlvbi5DTElDSywgY29tcG9uZW50KTtcbiAgICB2YXIgYnV0dG9uUGF5bG9hZCA9IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgIH07XG4gICAgcmV0dXJuIGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoeyB0eXBlOiBhY3Rpb24sIGdyb3VwOiBncm91cCwgcGF5bG9hZDogYnV0dG9uUGF5bG9hZCB9KTtcbn1cbmV4cG9ydHMuY2xpY2tCdXR0b24gPSBjbGlja0J1dHRvbjtcbmZ1bmN0aW9uIHVwZGF0ZShncm91cCwgY29tcG9uZW50LCBwcm9wcykge1xuICAgIHZhciBpZCA9IGNvbXBvbmVudC5pZDtcbiAgICB2YXIgbGFiZWwgPSBwcm9wcy5sYWJlbDtcbiAgICB2YXIgYWN0aW9uID0gaGVscGVyXzEuZ2V0RXZlbnROYW1lU3BhY2UoZ3JvdXAsIHR5cGVzXzIuQWN0aW9uLlVQREFURSwgY29tcG9uZW50KTtcbiAgICB2YXIgYnV0dG9uUGF5bG9hZCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcm9wcyksIHsgaWQ6IGlkLFxuICAgICAgICBsYWJlbDogbGFiZWwgfSk7XG4gICAgcmV0dXJuIGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoeyB0eXBlOiBhY3Rpb24sIGdyb3VwOiBncm91cCwgcGF5bG9hZDogYnV0dG9uUGF5bG9hZCB9KTtcbn1cbmV4cG9ydHMudXBkYXRlID0gdXBkYXRlO1xuZnVuY3Rpb24gaXNWYWxpZEJ1dHRvblByb3BzKGJ1dHRvbikge1xuICAgIHJldHVybiB0eXBlb2YgYnV0dG9uLmlkID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgYnV0dG9uLmxhYmVsID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNWYWxpZEJ1dHRvblByb3BzID0gaXNWYWxpZEJ1dHRvblByb3BzO1xudmFyIEJ1dHRvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQnV0dG9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJ1dHRvbihhcHAsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgYXBwLCB0eXBlc18xLkNvbXBvbmVudFR5cGUuQnV0dG9uLCB0eXBlc18xLkdyb3VwLkJ1dHRvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5zZXQob3B0aW9ucywgZmFsc2UpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b24ucHJvdG90eXBlLCBcIm9wdGlvbnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgaWNvbjogdGhpcy5pY29uLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB0aGlzLnN0eWxlLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRoaXMubG9hZGluZyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uLnByb3RvdHlwZSwgXCJwYXlsb2FkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucyksIHsgaWQ6IHRoaXMuaWQgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBCdXR0b24ucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChvcHRpb25zLCBzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSA9PT0gdm9pZCAwKSB7IHNob3VsZFVwZGF0ZSA9IHRydWU7IH1cbiAgICAgICAgdmFyIG1lcmdlZE9wdGlvbnMgPSBoZWxwZXJfMS5nZXRNZXJnZWRQcm9wcyh0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB2YXIgbGFiZWwgPSBtZXJnZWRPcHRpb25zLmxhYmVsLCBkaXNhYmxlZCA9IG1lcmdlZE9wdGlvbnMuZGlzYWJsZWQsIGljb24gPSBtZXJnZWRPcHRpb25zLmljb24sIHN0eWxlID0gbWVyZ2VkT3B0aW9ucy5zdHlsZSwgbG9hZGluZyA9IG1lcmdlZE9wdGlvbnMubG9hZGluZztcbiAgICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gQm9vbGVhbihkaXNhYmxlZCk7XG4gICAgICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gQm9vbGVhbihsb2FkaW5nKTtcbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaCh0eXBlc18yLkFjdGlvbi5VUERBVEUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgQnV0dG9uLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChhY3Rpb24sIHBheWxvYWQpIHtcbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgdHlwZXNfMi5BY3Rpb24uQ0xJQ0s6XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuZGlzcGF0Y2goY2xpY2tCdXR0b24odGhpcy5ncm91cCwgdGhpcy5jb21wb25lbnQsIHBheWxvYWQpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXNfMi5BY3Rpb24uVVBEQVRFOlxuICAgICAgICAgICAgICAgIHZhciB1cGRhdGVBY3Rpb24gPSB1cGRhdGUodGhpcy5ncm91cCwgdGhpcy5jb21wb25lbnQsIHRoaXMucGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuZGlzcGF0Y2godXBkYXRlQWN0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBCdXR0b247XG59KGhlbHBlcl8xLkFjdGlvblNldCkpO1xuZXhwb3J0cy5CdXR0b24gPSBCdXR0b247XG5mdW5jdGlvbiBjcmVhdGUoYXBwLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBCdXR0b24oYXBwLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY3JlYXRlID0gY3JlYXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vYWN0aW9uc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdHlwZXNcIiksIGV4cG9ydHMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN0eWxlID0gZXhwb3J0cy5JY29uID0gZXhwb3J0cy5BY3Rpb25UeXBlID0gZXhwb3J0cy5BY3Rpb24gPSB2b2lkIDA7XG52YXIgQWN0aW9uO1xuKGZ1bmN0aW9uIChBY3Rpb24pIHtcbiAgICBBY3Rpb25bXCJDTElDS1wiXSA9IFwiQ0xJQ0tcIjtcbiAgICBBY3Rpb25bXCJVUERBVEVcIl0gPSBcIlVQREFURVwiO1xufSkoQWN0aW9uID0gZXhwb3J0cy5BY3Rpb24gfHwgKGV4cG9ydHMuQWN0aW9uID0ge30pKTtcbnZhciBBY3Rpb25UeXBlO1xuKGZ1bmN0aW9uIChBY3Rpb25UeXBlKSB7XG4gICAgQWN0aW9uVHlwZVtcIkNMSUNLXCJdID0gXCJBUFA6OkJVVFRPTjo6Q0xJQ0tcIjtcbiAgICBBY3Rpb25UeXBlW1wiVVBEQVRFXCJdID0gXCJBUFA6OkJVVFRPTjo6VVBEQVRFXCI7XG59KShBY3Rpb25UeXBlID0gZXhwb3J0cy5BY3Rpb25UeXBlIHx8IChleHBvcnRzLkFjdGlvblR5cGUgPSB7fSkpO1xudmFyIEljb247XG4oZnVuY3Rpb24gKEljb24pIHtcbiAgICBJY29uW1wiUHJpbnRcIl0gPSBcInByaW50XCI7XG59KShJY29uID0gZXhwb3J0cy5JY29uIHx8IChleHBvcnRzLkljb24gPSB7fSkpO1xudmFyIFN0eWxlO1xuKGZ1bmN0aW9uIChTdHlsZSkge1xuICAgIFN0eWxlW1wiRGFuZ2VyXCJdID0gXCJkYW5nZXJcIjtcbn0pKFN0eWxlID0gZXhwb3J0cy5TdHlsZSB8fCAoZXhwb3J0cy5TdHlsZSA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlID0gZXhwb3J0cy5CdXR0b25Hcm91cCA9IGV4cG9ydHMuaXNHcm91cGVkQnV0dG9uUGF5bG9hZCA9IGV4cG9ydHMuaXNHcm91cGVkQnV0dG9uID0gZXhwb3J0cy51cGRhdGUgPSB2b2lkIDA7XG52YXIgYnV0dG9uSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vYnV0dG9uSGVscGVyXCIpO1xudmFyIGhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlclwiKTtcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpO1xudmFyIHR5cGVzXzIgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcbmZ1bmN0aW9uIHVwZGF0ZShncm91cCwgY29tcG9uZW50LCBwcm9wcykge1xuICAgIHJldHVybiBidXR0b25BY3Rpb25XcmFwcGVyKGdyb3VwLCBjb21wb25lbnQsIHR5cGVzXzIuQWN0aW9uLlVQREFURSwgcHJvcHMpO1xufVxuZXhwb3J0cy51cGRhdGUgPSB1cGRhdGU7XG5mdW5jdGlvbiBpc0dyb3VwZWRCdXR0b24ob3B0aW9ucykge1xuICAgIHZhciBjYXN0T3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgcmV0dXJuIGNhc3RPcHRpb25zLmJ1dHRvbnMgJiYgY2FzdE9wdGlvbnMuYnV0dG9ucy5sZW5ndGggPiAwICYmIGNhc3RPcHRpb25zLmxhYmVsICE9PSB1bmRlZmluZWQ7XG59XG5leHBvcnRzLmlzR3JvdXBlZEJ1dHRvbiA9IGlzR3JvdXBlZEJ1dHRvbjtcbmZ1bmN0aW9uIGlzR3JvdXBlZEJ1dHRvblBheWxvYWQocGF5bG9hZCkge1xuICAgIHZhciBjYXN0T3B0aW9ucyA9IHBheWxvYWQ7XG4gICAgcmV0dXJuIChBcnJheS5pc0FycmF5KGNhc3RPcHRpb25zLmJ1dHRvbnMpICYmXG4gICAgICAgIHR5cGVvZiBjYXN0T3B0aW9ucy5pZCA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgdHlwZW9mIGNhc3RPcHRpb25zLmxhYmVsID09PSAnc3RyaW5nJyk7XG59XG5leHBvcnRzLmlzR3JvdXBlZEJ1dHRvblBheWxvYWQgPSBpc0dyb3VwZWRCdXR0b25QYXlsb2FkO1xudmFyIEJ1dHRvbkdyb3VwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCdXR0b25Hcm91cCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCdXR0b25Hcm91cChhcHAsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgYXBwLCB0eXBlc18xLkNvbXBvbmVudFR5cGUuQnV0dG9uR3JvdXAsIHR5cGVzXzEuR3JvdXAuQnV0dG9uR3JvdXApIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmJ1dHRvbnNPcHRpb25zID0gW107XG4gICAgICAgIF90aGlzLmJ1dHRvbnMgPSBbXTtcbiAgICAgICAgX3RoaXMuc2V0KG9wdGlvbnMsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uR3JvdXAucHJvdG90eXBlLCBcIm9wdGlvbnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uczogdGhpcy5idXR0b25zT3B0aW9ucyxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uR3JvdXAucHJvdG90eXBlLCBcInBheWxvYWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5vcHRpb25zKSwgeyBidXR0b25zOiB0aGlzLmJ1dHRvbnMsIGlkOiB0aGlzLmlkIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQnV0dG9uR3JvdXAucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChvcHRpb25zLCBzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSA9PT0gdm9pZCAwKSB7IHNob3VsZFVwZGF0ZSA9IHRydWU7IH1cbiAgICAgICAgdmFyIG1lcmdlZE9wdGlvbnMgPSBoZWxwZXJfMS5nZXRNZXJnZWRQcm9wcyh0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB2YXIgbGFiZWwgPSBtZXJnZWRPcHRpb25zLmxhYmVsLCBkaXNhYmxlZCA9IG1lcmdlZE9wdGlvbnMuZGlzYWJsZWQsIGJ1dHRvbnMgPSBtZXJnZWRPcHRpb25zLmJ1dHRvbnM7XG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IEJvb2xlYW4oZGlzYWJsZWQpO1xuICAgICAgICB0aGlzLmJ1dHRvbnMgPSB0aGlzLmdldEJ1dHRvbnMoYnV0dG9ucyk7XG4gICAgICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2godHlwZXNfMi5BY3Rpb24uVVBEQVRFKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEJ1dHRvbkdyb3VwLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgdHlwZXNfMi5BY3Rpb24uVVBEQVRFOlxuICAgICAgICAgICAgICAgIHZhciB1cGRhdGVBY3Rpb24gPSB1cGRhdGUodGhpcy5ncm91cCwgdGhpcy5jb21wb25lbnQsIHRoaXMucGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuZGlzcGF0Y2godXBkYXRlQWN0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEJ1dHRvbkdyb3VwLnByb3RvdHlwZS51cGRhdGVCdXR0b25zID0gZnVuY3Rpb24gKG5ld1BheWxvYWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJ1dHRvbnMgfHwgdGhpcy5idXR0b25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1cGRhdGVkO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5idXR0b25zOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IF9hW19pXTtcbiAgICAgICAgICAgIHVwZGF0ZWQgPSBoZWxwZXJfMS51cGRhdGVBY3Rpb25Gcm9tUGF5bG9hZChhY3Rpb24sIG5ld1BheWxvYWQpO1xuICAgICAgICAgICAgaWYgKHVwZGF0ZWQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodXBkYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaCh0eXBlc18yLkFjdGlvbi5VUERBVEUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBCdXR0b25Hcm91cC5wcm90b3R5cGUuZ2V0U2luZ2xlQnV0dG9uID0gZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgICAgICByZXR1cm4gYnV0dG9uSGVscGVyXzEuZ2V0U2luZ2xlQnV0dG9uKHRoaXMsIGJ1dHRvbiwgdGhpcy5zdWJncm91cHMsIHRoaXMudXBkYXRlQnV0dG9ucyk7XG4gICAgfTtcbiAgICBCdXR0b25Hcm91cC5wcm90b3R5cGUuZ2V0QnV0dG9ucyA9IGZ1bmN0aW9uIChidXR0b25PcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBidXR0b25zID0gW107XG4gICAgICAgIGlmICghYnV0dG9uT3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbk9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICAgICAgICB2YXIgc2luZ2xlQnV0dG9uID0gYnV0dG9uSGVscGVyXzEuZ2V0U2luZ2xlQnV0dG9uKF90aGlzLCBidXR0b24sIF90aGlzLnN1Ymdyb3VwcywgX3RoaXMudXBkYXRlQnV0dG9ucyk7XG4gICAgICAgICAgICBidXR0b25zLnB1c2goc2luZ2xlQnV0dG9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnV0dG9uc09wdGlvbnMgPSBidXR0b25PcHRpb25zO1xuICAgICAgICByZXR1cm4gYnV0dG9ucztcbiAgICB9O1xuICAgIHJldHVybiBCdXR0b25Hcm91cDtcbn0oaGVscGVyXzEuQWN0aW9uU2V0V2l0aENoaWxkcmVuKSk7XG5leHBvcnRzLkJ1dHRvbkdyb3VwID0gQnV0dG9uR3JvdXA7XG5mdW5jdGlvbiBjcmVhdGUoYXBwLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBCdXR0b25Hcm91cChhcHAsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jcmVhdGUgPSBjcmVhdGU7XG5mdW5jdGlvbiBidXR0b25BY3Rpb25XcmFwcGVyKGdyb3VwLCBjb21wb25lbnQsIGV2ZW50TmFtZSwgcHJvcHMsIHBheWxvYWQpIHtcbiAgICB2YXIgaWQgPSBjb21wb25lbnQuaWQ7XG4gICAgdmFyIGxhYmVsID0gcHJvcHMubGFiZWw7XG4gICAgdmFyIGFjdGlvbiA9IGhlbHBlcl8xLmdldEV2ZW50TmFtZVNwYWNlKGdyb3VwLCBldmVudE5hbWUsIGNvbXBvbmVudCk7XG4gICAgdmFyIGJ1dHRvblBheWxvYWQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJvcHMpLCB7IGlkOiBpZCxcbiAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICBwYXlsb2FkOiBwYXlsb2FkIH0pO1xuICAgIHJldHVybiBoZWxwZXJfMS5hY3Rpb25XcmFwcGVyKHsgdHlwZTogYWN0aW9uLCBncm91cDogZ3JvdXAsIHBheWxvYWQ6IGJ1dHRvblBheWxvYWQgfSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9hY3Rpb25zXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90eXBlc1wiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQWN0aW9uVHlwZSA9IGV4cG9ydHMuQWN0aW9uID0gdm9pZCAwO1xudmFyIEFjdGlvbjtcbihmdW5jdGlvbiAoQWN0aW9uKSB7XG4gICAgQWN0aW9uW1wiVVBEQVRFXCJdID0gXCJVUERBVEVcIjtcbn0pKEFjdGlvbiA9IGV4cG9ydHMuQWN0aW9uIHx8IChleHBvcnRzLkFjdGlvbiA9IHt9KSk7XG52YXIgQWN0aW9uVHlwZTtcbihmdW5jdGlvbiAoQWN0aW9uVHlwZSkge1xuICAgIEFjdGlvblR5cGVbXCJVUERBVEVcIl0gPSBcIkFQUDo6QlVUVE9OR1JPVVA6OlVQREFURVwiO1xufSkoQWN0aW9uVHlwZSA9IGV4cG9ydHMuQWN0aW9uVHlwZSB8fCAoZXhwb3J0cy5BY3Rpb25UeXBlID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGUgPSBleHBvcnRzLkNhcnQgPSB2b2lkIDA7XG52YXIgaGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVyXCIpO1xudmFyIHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG52YXIgdHlwZXNfMiA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xuLyoqXG4gKiBDYXJ0XG4gKi9cbnZhciBDYXJ0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDYXJ0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENhcnQoYXBwLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBhcHAsIHR5cGVzXzEuR3JvdXAuQ2FydCwgdHlwZXNfMS5Hcm91cC5DYXJ0LCBvcHRpb25zID8gb3B0aW9ucy5pZCA6IHVuZGVmaW5lZCkgfHwgdGhpcztcbiAgICB9XG4gICAgQ2FydC5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiAoYWN0aW9uLCBwYXlsb2FkKSB7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIHR5cGVzXzIuQWN0aW9uLkZFVENIOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hDYXJ0QWN0aW9uKHR5cGVzXzIuQWN0aW9uVHlwZS5GRVRDSCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzXzIuQWN0aW9uLlVQREFURTpcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoQ2FydEFjdGlvbih0eXBlc18yLkFjdGlvblR5cGUuVVBEQVRFLCBwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXNfMi5BY3Rpb24uU0VUX0NVU1RPTUVSOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hDYXJ0QWN0aW9uKHR5cGVzXzIuQWN0aW9uVHlwZS5TRVRfQ1VTVE9NRVIsIHBheWxvYWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlc18yLkFjdGlvbi5SRU1PVkVfQ1VTVE9NRVI6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaENhcnRBY3Rpb24odHlwZXNfMi5BY3Rpb25UeXBlLlJFTU9WRV9DVVNUT01FUiwgcGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzXzIuQWN0aW9uLkFERF9DVVNUT01FUl9BRERSRVNTOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hDYXJ0QWN0aW9uKHR5cGVzXzIuQWN0aW9uVHlwZS5BRERfQ1VTVE9NRVJfQUREUkVTUywgcGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzXzIuQWN0aW9uLlVQREFURV9DVVNUT01FUl9BRERSRVNTOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hDYXJ0QWN0aW9uKHR5cGVzXzIuQWN0aW9uVHlwZS5VUERBVEVfQ1VTVE9NRVJfQUREUkVTUywgcGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzXzIuQWN0aW9uLlNFVF9ESVNDT1VOVDpcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoQ2FydEFjdGlvbih0eXBlc18yLkFjdGlvblR5cGUuU0VUX0RJU0NPVU5ULCBwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXNfMi5BY3Rpb24uUkVNT1ZFX0RJU0NPVU5UOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hDYXJ0QWN0aW9uKHR5cGVzXzIuQWN0aW9uVHlwZS5SRU1PVkVfRElTQ09VTlQsIHBheWxvYWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlc18yLkFjdGlvbi5TRVRfUFJPUEVSVElFUzpcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoQ2FydEFjdGlvbih0eXBlc18yLkFjdGlvblR5cGUuU0VUX1BST1BFUlRJRVMsIHBheWxvYWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlc18yLkFjdGlvbi5SRU1PVkVfUFJPUEVSVElFUzpcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoQ2FydEFjdGlvbih0eXBlc18yLkFjdGlvblR5cGUuUkVNT1ZFX1BST1BFUlRJRVMsIHBheWxvYWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlc18yLkFjdGlvbi5DTEVBUjpcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoQ2FydEFjdGlvbih0eXBlc18yLkFjdGlvblR5cGUuQ0xFQVIsIHBheWxvYWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlc18yLkFjdGlvbi5BRERfTElORV9JVEVNOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hDYXJ0QWN0aW9uKHR5cGVzXzIuQWN0aW9uVHlwZS5BRERfTElORV9JVEVNLCBwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXNfMi5BY3Rpb24uVVBEQVRFX0xJTkVfSVRFTTpcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoQ2FydEFjdGlvbih0eXBlc18yLkFjdGlvblR5cGUuVVBEQVRFX0xJTkVfSVRFTSwgcGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzXzIuQWN0aW9uLlJFTU9WRV9MSU5FX0lURU06XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaENhcnRBY3Rpb24odHlwZXNfMi5BY3Rpb25UeXBlLlJFTU9WRV9MSU5FX0lURU0sIHBheWxvYWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlc18yLkFjdGlvbi5TRVRfTElORV9JVEVNX0RJU0NPVU5UOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hDYXJ0QWN0aW9uKHR5cGVzXzIuQWN0aW9uVHlwZS5TRVRfTElORV9JVEVNX0RJU0NPVU5ULCBwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXNfMi5BY3Rpb24uUkVNT1ZFX0xJTkVfSVRFTV9ESVNDT1VOVDpcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoQ2FydEFjdGlvbih0eXBlc18yLkFjdGlvblR5cGUuUkVNT1ZFX0xJTkVfSVRFTV9ESVNDT1VOVCwgcGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzXzIuQWN0aW9uLlNFVF9MSU5FX0lURU1fUFJPUEVSVElFUzpcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoQ2FydEFjdGlvbih0eXBlc18yLkFjdGlvblR5cGUuU0VUX0xJTkVfSVRFTV9QUk9QRVJUSUVTLCBwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXNfMi5BY3Rpb24uUkVNT1ZFX0xJTkVfSVRFTV9QUk9QRVJUSUVTOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hDYXJ0QWN0aW9uKHR5cGVzXzIuQWN0aW9uVHlwZS5SRU1PVkVfTElORV9JVEVNX1BST1BFUlRJRVMsIHBheWxvYWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgQ2FydC5wcm90b3R5cGUuZGlzcGF0Y2hDYXJ0QWN0aW9uID0gZnVuY3Rpb24gKHR5cGUsIHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5hcHAuZGlzcGF0Y2goaGVscGVyXzEuYWN0aW9uV3JhcHBlcih7XG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgZ3JvdXA6IHR5cGVzXzEuR3JvdXAuQ2FydCxcbiAgICAgICAgICAgIHBheWxvYWQ6IF9fYXNzaWduKF9fYXNzaWduKHt9LCAocGF5bG9hZCB8fCB7fSkpLCB7IGlkOiB0aGlzLmlkIH0pLFxuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICByZXR1cm4gQ2FydDtcbn0oaGVscGVyXzEuQWN0aW9uU2V0KSk7XG5leHBvcnRzLkNhcnQgPSBDYXJ0O1xuZnVuY3Rpb24gY3JlYXRlKGFwcCwgb3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgQ2FydChhcHAsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jcmVhdGUgPSBjcmVhdGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9hY3Rpb25zXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90eXBlc1wiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQWN0aW9uID0gZXhwb3J0cy5BY3Rpb25UeXBlID0gdm9pZCAwO1xudmFyIEFjdGlvblR5cGU7XG4oZnVuY3Rpb24gKEFjdGlvblR5cGUpIHtcbiAgICBBY3Rpb25UeXBlW1wiRkVUQ0hcIl0gPSBcIkFQUDo6Q0FSVDo6RkVUQ0hcIjtcbiAgICBBY3Rpb25UeXBlW1wiVVBEQVRFXCJdID0gXCJBUFA6OkNBUlQ6OlVQREFURVwiO1xuICAgIEFjdGlvblR5cGVbXCJTRVRfQ1VTVE9NRVJcIl0gPSBcIkFQUDo6Q0FSVDo6U0VUX0NVU1RPTUVSXCI7XG4gICAgQWN0aW9uVHlwZVtcIlJFTU9WRV9DVVNUT01FUlwiXSA9IFwiQVBQOjpDQVJUOjpSRU1PVkVfQ1VTVE9NRVJcIjtcbiAgICBBY3Rpb25UeXBlW1wiQUREX0NVU1RPTUVSX0FERFJFU1NcIl0gPSBcIkFQUDo6Q0FSVDo6QUREX0NVU1RPTUVSX0FERFJFU1NcIjtcbiAgICBBY3Rpb25UeXBlW1wiVVBEQVRFX0NVU1RPTUVSX0FERFJFU1NcIl0gPSBcIkFQUDo6Q0FSVDo6VVBEQVRFX0NVU1RPTUVSX0FERFJFU1NcIjtcbiAgICBBY3Rpb25UeXBlW1wiU0VUX0RJU0NPVU5UXCJdID0gXCJBUFA6OkNBUlQ6OlNFVF9ESVNDT1VOVFwiO1xuICAgIEFjdGlvblR5cGVbXCJSRU1PVkVfRElTQ09VTlRcIl0gPSBcIkFQUDo6Q0FSVDo6UkVNT1ZFX0RJU0NPVU5UXCI7XG4gICAgQWN0aW9uVHlwZVtcIlNFVF9QUk9QRVJUSUVTXCJdID0gXCJBUFA6OkNBUlQ6OlNFVF9QUk9QRVJUSUVTXCI7XG4gICAgQWN0aW9uVHlwZVtcIlJFTU9WRV9QUk9QRVJUSUVTXCJdID0gXCJBUFA6OkNBUlQ6OlJFTU9WRV9QUk9QRVJUSUVTXCI7XG4gICAgQWN0aW9uVHlwZVtcIkNMRUFSXCJdID0gXCJBUFA6OkNBUlQ6OkNMRUFSXCI7XG4gICAgQWN0aW9uVHlwZVtcIkFERF9MSU5FX0lURU1cIl0gPSBcIkFQUDo6Q0FSVDo6QUREX0xJTkVfSVRFTVwiO1xuICAgIEFjdGlvblR5cGVbXCJVUERBVEVfTElORV9JVEVNXCJdID0gXCJBUFA6OkNBUlQ6OlVQREFURV9MSU5FX0lURU1cIjtcbiAgICBBY3Rpb25UeXBlW1wiUkVNT1ZFX0xJTkVfSVRFTVwiXSA9IFwiQVBQOjpDQVJUOjpSRU1PVkVfTElORV9JVEVNXCI7XG4gICAgQWN0aW9uVHlwZVtcIlNFVF9MSU5FX0lURU1fRElTQ09VTlRcIl0gPSBcIkFQUDo6Q0FSVDo6U0VUX0xJTkVfSVRFTV9ESVNDT1VOVFwiO1xuICAgIEFjdGlvblR5cGVbXCJSRU1PVkVfTElORV9JVEVNX0RJU0NPVU5UXCJdID0gXCJBUFA6OkNBUlQ6OlJFTU9WRV9MSU5FX0lURU1fRElTQ09VTlRcIjtcbiAgICBBY3Rpb25UeXBlW1wiU0VUX0xJTkVfSVRFTV9QUk9QRVJUSUVTXCJdID0gXCJBUFA6OkNBUlQ6OlNFVF9MSU5FX0lURU1fUFJPUEVSVElFU1wiO1xuICAgIEFjdGlvblR5cGVbXCJSRU1PVkVfTElORV9JVEVNX1BST1BFUlRJRVNcIl0gPSBcIkFQUDo6Q0FSVDo6UkVNT1ZFX0xJTkVfSVRFTV9QUk9QRVJUSUVTXCI7XG59KShBY3Rpb25UeXBlID0gZXhwb3J0cy5BY3Rpb25UeXBlIHx8IChleHBvcnRzLkFjdGlvblR5cGUgPSB7fSkpO1xudmFyIEFjdGlvbjtcbihmdW5jdGlvbiAoQWN0aW9uKSB7XG4gICAgQWN0aW9uW1wiRkVUQ0hcIl0gPSBcIkZFVENIXCI7XG4gICAgQWN0aW9uW1wiVVBEQVRFXCJdID0gXCJVUERBVEVcIjtcbiAgICBBY3Rpb25bXCJTRVRfQ1VTVE9NRVJcIl0gPSBcIlNFVF9DVVNUT01FUlwiO1xuICAgIEFjdGlvbltcIlJFTU9WRV9DVVNUT01FUlwiXSA9IFwiUkVNT1ZFX0NVU1RPTUVSXCI7XG4gICAgQWN0aW9uW1wiQUREX0NVU1RPTUVSX0FERFJFU1NcIl0gPSBcIkFERF9DVVNUT01FUl9BRERSRVNTXCI7XG4gICAgQWN0aW9uW1wiVVBEQVRFX0NVU1RPTUVSX0FERFJFU1NcIl0gPSBcIlVQREFURV9DVVNUT01FUl9BRERSRVNTXCI7XG4gICAgQWN0aW9uW1wiU0VUX0RJU0NPVU5UXCJdID0gXCJTRVRfRElTQ09VTlRcIjtcbiAgICBBY3Rpb25bXCJSRU1PVkVfRElTQ09VTlRcIl0gPSBcIlJFTU9WRV9ESVNDT1VOVFwiO1xuICAgIEFjdGlvbltcIlNFVF9QUk9QRVJUSUVTXCJdID0gXCJTRVRfUFJPUEVSVElFU1wiO1xuICAgIEFjdGlvbltcIlJFTU9WRV9QUk9QRVJUSUVTXCJdID0gXCJSRU1PVkVfUFJPUEVSVElFU1wiO1xuICAgIEFjdGlvbltcIkNMRUFSXCJdID0gXCJDTEVBUlwiO1xuICAgIEFjdGlvbltcIkFERF9MSU5FX0lURU1cIl0gPSBcIkFERF9MSU5FX0lURU1cIjtcbiAgICBBY3Rpb25bXCJVUERBVEVfTElORV9JVEVNXCJdID0gXCJVUERBVEVfTElORV9JVEVNXCI7XG4gICAgQWN0aW9uW1wiUkVNT1ZFX0xJTkVfSVRFTVwiXSA9IFwiUkVNT1ZFX0xJTkVfSVRFTVwiO1xuICAgIEFjdGlvbltcIlNFVF9MSU5FX0lURU1fRElTQ09VTlRcIl0gPSBcIlNFVF9MSU5FX0lURU1fRElTQ09VTlRcIjtcbiAgICBBY3Rpb25bXCJSRU1PVkVfTElORV9JVEVNX0RJU0NPVU5UXCJdID0gXCJSRU1PVkVfTElORV9JVEVNX0RJU0NPVU5UXCI7XG4gICAgQWN0aW9uW1wiU0VUX0xJTkVfSVRFTV9QUk9QRVJUSUVTXCJdID0gXCJTRVRfTElORV9JVEVNX1BST1BFUlRJRVNcIjtcbiAgICBBY3Rpb25bXCJSRU1PVkVfTElORV9JVEVNX1BST1BFUlRJRVNcIl0gPSBcIlJFTU9WRV9MSU5FX0lURU1fUFJPUEVSVElFU1wiO1xufSkoQWN0aW9uID0gZXhwb3J0cy5BY3Rpb24gfHwgKGV4cG9ydHMuQWN0aW9uID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGUgPSBleHBvcnRzLkNvbnRleHR1YWxTYXZlQmFyID0gZXhwb3J0cy5kaXNjYXJkID0gZXhwb3J0cy5zYXZlID0gZXhwb3J0cy5oaWRlID0gZXhwb3J0cy5zaG93ID0gZXhwb3J0cy5BY3Rpb25UeXBlID0gZXhwb3J0cy5BY3Rpb24gPSB2b2lkIDA7XG52YXIgaGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVyXCIpO1xudmFyIHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG4vKipcbiAqIENvbnRleHR1YWxTYXZlQmFyIGFjdGlvbiBlbnVtXG4gKi9cbnZhciBBY3Rpb247XG4oZnVuY3Rpb24gKEFjdGlvbikge1xuICAgIEFjdGlvbltcIkRJU0NBUkRcIl0gPSBcIkRJU0NBUkRcIjtcbiAgICBBY3Rpb25bXCJTQVZFXCJdID0gXCJTQVZFXCI7XG4gICAgQWN0aW9uW1wiU0hPV1wiXSA9IFwiU0hPV1wiO1xuICAgIEFjdGlvbltcIkhJREVcIl0gPSBcIkhJREVcIjtcbiAgICBBY3Rpb25bXCJVUERBVEVcIl0gPSBcIlVQREFURVwiO1xufSkoQWN0aW9uID0gZXhwb3J0cy5BY3Rpb24gfHwgKGV4cG9ydHMuQWN0aW9uID0ge30pKTtcbi8qKlxuICogQ29udGV4dHVhbFNhdmVCYXIgYWN0aW9uIHR5cGUgZW51bVxuICogQHJlbWFya3MgaW5jbHVkZXMgdGhlIGFjdGlvbiBwcmVmaXggYW5kIGdyb3VwXG4gKlxuICovXG52YXIgQWN0aW9uVHlwZTtcbihmdW5jdGlvbiAoQWN0aW9uVHlwZSkge1xuICAgIEFjdGlvblR5cGVbXCJESVNDQVJEXCJdID0gXCJBUFA6OkNPTlRFWFRVQUxfU0FWRV9CQVI6OkRJU0NBUkRcIjtcbiAgICBBY3Rpb25UeXBlW1wiU0FWRVwiXSA9IFwiQVBQOjpDT05URVhUVUFMX1NBVkVfQkFSOjpTQVZFXCI7XG4gICAgQWN0aW9uVHlwZVtcIlNIT1dcIl0gPSBcIkFQUDo6Q09OVEVYVFVBTF9TQVZFX0JBUjo6U0hPV1wiO1xuICAgIEFjdGlvblR5cGVbXCJISURFXCJdID0gXCJBUFA6OkNPTlRFWFRVQUxfU0FWRV9CQVI6OkhJREVcIjtcbiAgICBBY3Rpb25UeXBlW1wiVVBEQVRFXCJdID0gXCJBUFA6OkNPTlRFWFRVQUxfU0FWRV9CQVI6OlVQREFURVwiO1xufSkoQWN0aW9uVHlwZSA9IGV4cG9ydHMuQWN0aW9uVHlwZSB8fCAoZXhwb3J0cy5BY3Rpb25UeXBlID0ge30pKTtcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHRCYXJBY3Rpb24oYWN0aW9uLCBwYXlsb2FkKSB7XG4gICAgcmV0dXJuIGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoe1xuICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5Db250ZXh0dWFsU2F2ZUJhcixcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZVthY3Rpb25dLFxuICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgIH0pO1xufVxuZnVuY3Rpb24gc2hvdyhwYXlsb2FkKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNvbnRleHRCYXJBY3Rpb24oQWN0aW9uLlNIT1csIHBheWxvYWQpO1xufVxuZXhwb3J0cy5zaG93ID0gc2hvdztcbmZ1bmN0aW9uIGhpZGUocGF5bG9hZCkge1xuICAgIHJldHVybiBjcmVhdGVDb250ZXh0QmFyQWN0aW9uKEFjdGlvbi5ISURFLCBwYXlsb2FkKTtcbn1cbmV4cG9ydHMuaGlkZSA9IGhpZGU7XG5mdW5jdGlvbiBzYXZlKHBheWxvYWQpIHtcbiAgICByZXR1cm4gY3JlYXRlQ29udGV4dEJhckFjdGlvbihBY3Rpb24uU0FWRSwgcGF5bG9hZCk7XG59XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZnVuY3Rpb24gZGlzY2FyZChwYXlsb2FkKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNvbnRleHRCYXJBY3Rpb24oQWN0aW9uLkRJU0NBUkQsIHBheWxvYWQpO1xufVxuZXhwb3J0cy5kaXNjYXJkID0gZGlzY2FyZDtcbi8qKlxuICogQ29udGV4dHVhbFNhdmVCYXIgYWN0aW9uIHNldFxuICovXG52YXIgQ29udGV4dHVhbFNhdmVCYXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvbnRleHR1YWxTYXZlQmFyLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBuZXcgaW5zdGFuY2Ugb2YgYSBDb250ZXh0dWFsU2F2ZUJhciBhY3Rpb24gc2V0XG4gICAgICogQHBhcmFtIGFwcCB0aGUgY2xpZW50IGFwcGxpY2F0aW9uXG4gICAgICovXG4gICAgZnVuY3Rpb24gQ29udGV4dHVhbFNhdmVCYXIoYXBwLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGFwcCwgdHlwZXNfMS5Hcm91cC5Db250ZXh0dWFsU2F2ZUJhciwgdHlwZXNfMS5Hcm91cC5Db250ZXh0dWFsU2F2ZUJhcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIF90aGlzLnNldChvcHRpb25zLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRleHR1YWxTYXZlQmFyLnByb3RvdHlwZSwgXCJwYXlsb2FkXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGFjdGlvbiBzZXQgcGF5bG9hZFxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oeyBpZDogdGhpcy5pZCB9LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQ29udGV4dHVhbFNhdmVCYXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChvcHRpb25zLCBzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSA9PT0gdm9pZCAwKSB7IHNob3VsZFVwZGF0ZSA9IHRydWU7IH1cbiAgICAgICAgdmFyIG1lcmdlZE9wdGlvbnMgPSBoZWxwZXJfMS5nZXRNZXJnZWRQcm9wcyh0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBtZXJnZWRPcHRpb25zO1xuICAgICAgICBpZiAoc2hvdWxkVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoKEFjdGlvbi5VUERBVEUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2hlcyBhIGdpdmVuIGFjdGlvbiB3aXRoIHRoZSBhY3Rpb24gc2V0IHBheWxvYWRcbiAgICAgKiBAcGFyYW0gYWN0aW9uIHRoZSBhY3Rpb24gZW51bVxuICAgICAqIEByZXR1cm5zIHRoZSBhY3Rpb24gc2V0IGluc3RhbmNlXG4gICAgICovXG4gICAgQ29udGV4dHVhbFNhdmVCYXIucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB0aGlzLmFwcC5kaXNwYXRjaChjcmVhdGVDb250ZXh0QmFyQWN0aW9uKGFjdGlvbiwgdGhpcy5wYXlsb2FkKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgcmV0dXJuIENvbnRleHR1YWxTYXZlQmFyO1xufShoZWxwZXJfMS5BY3Rpb25TZXQpKTtcbmV4cG9ydHMuQ29udGV4dHVhbFNhdmVCYXIgPSBDb250ZXh0dWFsU2F2ZUJhcjtcbi8qKlxuICogUmV0dXJucyBhIG5ldyBpbnN0YW5jZSBvZiBhIENvbnRleHR1YWxTYXZlQmFyIGFjdGlvbiBzZXRcbiAqIEBwYXJhbSBhcHAgdGhlIGNsaWVudCBhcHBsaWNhdGlvblxuICpcbiAqL1xuZnVuY3Rpb24gY3JlYXRlKGFwcCwgb3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgQ29udGV4dHVhbFNhdmVCYXIoYXBwLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY3JlYXRlID0gY3JlYXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnRocm93RXJyb3IgPSBleHBvcnRzLmZyb21BY3Rpb24gPSBleHBvcnRzLkFwcEJyaWRnZUVycm9yID0gZXhwb3J0cy5pbnZhbGlkT3JpZ2luQWN0aW9uID0gZXhwb3J0cy5pc0Vycm9yRXZlbnROYW1lID0gZXhwb3J0cy5wZXJtaXNzaW9uQWN0aW9uID0gZXhwb3J0cy5uZXR3b3JrQWN0aW9uID0gZXhwb3J0cy5wZXJzaXN0ZW5jZUFjdGlvbiA9IGV4cG9ydHMudW5zdXBwb3J0ZWRPcGVyYXRpb25BY3Rpb24gPSBleHBvcnRzLnVuZXhwZWN0ZWRBY3Rpb24gPSBleHBvcnRzLmludmFsaWRBY3Rpb24gPSBleHBvcnRzLmludmFsaWRBY3Rpb25UeXBlID0gZXhwb3J0cy5pbnZhbGlkUGF5bG9hZCA9IGV4cG9ydHMuTWVzc2FnZSA9IHZvaWQgMDtcbnZhciBoZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJcIik7XG52YXIgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcbnZhciB0eXBlc18yID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG5mdW5jdGlvbiBlcnJvckFjdGlvbldyYXBwZXJXaXRoSWQodHlwZSwgYWN0aW9uLCBtZXNzYWdlKSB7XG4gICAgdmFyIGNhc3RQYXlsb2FkID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgcmV0dXJuIGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoe1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5FcnJvcixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIGlkOiBjYXN0UGF5bG9hZCAmJiBjYXN0UGF5bG9hZC5pZCA/IGNhc3RQYXlsb2FkLmlkIDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgIH0pO1xufVxudmFyIE1lc3NhZ2U7XG4oZnVuY3Rpb24gKE1lc3NhZ2UpIHtcbiAgICBNZXNzYWdlW1wiTUlTU0lOR19QQVlMT0FEXCJdID0gXCJNaXNzaW5nIHBheWxvYWRcIjtcbiAgICBNZXNzYWdlW1wiSU5WQUxJRF9QQVlMT0FEX0lEXCJdID0gXCJJZCBpbiBwYXlsb2FkIGlzIG1pc3Npbmcgb3IgaW52YWxpZFwiO1xufSkoTWVzc2FnZSA9IGV4cG9ydHMuTWVzc2FnZSB8fCAoZXhwb3J0cy5NZXNzYWdlID0ge30pKTtcbmZ1bmN0aW9uIGludmFsaWRQYXlsb2FkKGFjdGlvbiwgbWVzc2FnZSkge1xuICAgIHJldHVybiBlcnJvckFjdGlvbldyYXBwZXJXaXRoSWQodHlwZXNfMi5BY3Rpb25UeXBlLklOVkFMSURfUEFZTE9BRCwgYWN0aW9uLCBtZXNzYWdlIHx8IFwiVGhlIGFjdGlvbidzIHBheWxvYWQgaXMgbWlzc2luZyByZXF1aXJlZCBwcm9wZXJ0aWVzIG9yIGhhcyBpbnZhbGlkIHByb3BlcnRpZXNcIik7XG59XG5leHBvcnRzLmludmFsaWRQYXlsb2FkID0gaW52YWxpZFBheWxvYWQ7XG5mdW5jdGlvbiBpbnZhbGlkQWN0aW9uVHlwZShhY3Rpb24sIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gaGVscGVyXzEuYWN0aW9uV3JhcHBlcih7XG4gICAgICAgIGdyb3VwOiB0eXBlc18xLkdyb3VwLkVycm9yLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgJ1RoZSBhY3Rpb24gdHlwZSBpcyBpbnZhbGlkIG9yIHVuc3VwcG9ydGVkJyxcbiAgICAgICAgICAgIHR5cGU6IHR5cGVzXzIuQWN0aW9uVHlwZS5JTlZBTElEX0FDVElPTl9UWVBFLFxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiB0eXBlc18yLkFjdGlvblR5cGUuSU5WQUxJRF9BQ1RJT05fVFlQRSxcbiAgICB9KTtcbn1cbmV4cG9ydHMuaW52YWxpZEFjdGlvblR5cGUgPSBpbnZhbGlkQWN0aW9uVHlwZTtcbmZ1bmN0aW9uIGludmFsaWRBY3Rpb24oYWN0aW9uLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoe1xuICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5FcnJvcixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlIHx8IFwiVGhlIGFjdGlvbidzIGhhcyBtaXNzaW5nL2ludmFsaWQgdmFsdWVzIGZvciBgZ3JvdXBgLCBgdHlwZWAgb3IgYHZlcnNpb25gXCIsXG4gICAgICAgICAgICB0eXBlOiB0eXBlc18yLkFjdGlvblR5cGUuSU5WQUxJRF9BQ1RJT04sXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IHR5cGVzXzIuQWN0aW9uVHlwZS5JTlZBTElEX0FDVElPTixcbiAgICB9KTtcbn1cbmV4cG9ydHMuaW52YWxpZEFjdGlvbiA9IGludmFsaWRBY3Rpb247XG5mdW5jdGlvbiB1bmV4cGVjdGVkQWN0aW9uKGFjdGlvbiwgbWVzc2FnZSkge1xuICAgIHJldHVybiBoZWxwZXJfMS5hY3Rpb25XcmFwcGVyKHtcbiAgICAgICAgZ3JvdXA6IHR5cGVzXzEuR3JvdXAuRXJyb3IsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSB8fCAnQWN0aW9uIGNhbm5vdCBiZSBjYWxsZWQgYXQgdGhpcyB0aW1lJyxcbiAgICAgICAgICAgIHR5cGU6IHR5cGVzXzIuQWN0aW9uVHlwZS5VTkVYUEVDVEVEX0FDVElPTixcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTogdHlwZXNfMi5BY3Rpb25UeXBlLlVORVhQRUNURURfQUNUSU9OLFxuICAgIH0pO1xufVxuZXhwb3J0cy51bmV4cGVjdGVkQWN0aW9uID0gdW5leHBlY3RlZEFjdGlvbjtcbmZ1bmN0aW9uIHVuc3VwcG9ydGVkT3BlcmF0aW9uQWN0aW9uKGFjdGlvbiwgbWVzc2FnZSkge1xuICAgIHJldHVybiBlcnJvckFjdGlvbldyYXBwZXJXaXRoSWQodHlwZXNfMi5BY3Rpb25UeXBlLlVOU1VQUE9SVEVEX09QRVJBVElPTiwgYWN0aW9uLCBtZXNzYWdlIHx8ICdUaGUgYWN0aW9uIHR5cGUgaXMgdW5zdXBwb3J0ZWQnKTtcbn1cbmV4cG9ydHMudW5zdXBwb3J0ZWRPcGVyYXRpb25BY3Rpb24gPSB1bnN1cHBvcnRlZE9wZXJhdGlvbkFjdGlvbjtcbmZ1bmN0aW9uIHBlcnNpc3RlbmNlQWN0aW9uKGFjdGlvbiwgbWVzc2FnZSkge1xuICAgIHJldHVybiBlcnJvckFjdGlvbldyYXBwZXJXaXRoSWQodHlwZXNfMi5BY3Rpb25UeXBlLlBFUlNJU1RFTkNFLCBhY3Rpb24sIG1lc3NhZ2UgfHwgJ0FjdGlvbiBjYW5ub3QgYmUgcGVyc2lzdGVkIG9uIHNlcnZlcicpO1xufVxuZXhwb3J0cy5wZXJzaXN0ZW5jZUFjdGlvbiA9IHBlcnNpc3RlbmNlQWN0aW9uO1xuZnVuY3Rpb24gbmV0d29ya0FjdGlvbihhY3Rpb24sIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gZXJyb3JBY3Rpb25XcmFwcGVyV2l0aElkKHR5cGVzXzIuQWN0aW9uVHlwZS5ORVRXT1JLLCBhY3Rpb24sIG1lc3NhZ2UgfHwgJ05ldHdvcmsgZXJyb3InKTtcbn1cbmV4cG9ydHMubmV0d29ya0FjdGlvbiA9IG5ldHdvcmtBY3Rpb247XG5mdW5jdGlvbiBwZXJtaXNzaW9uQWN0aW9uKGFjdGlvbiwgbWVzc2FnZSkge1xuICAgIHJldHVybiBlcnJvckFjdGlvbldyYXBwZXJXaXRoSWQodHlwZXNfMi5BY3Rpb25UeXBlLlBFUk1JU1NJT04sIGFjdGlvbiwgbWVzc2FnZSB8fCAnQWN0aW9uIGlzIG5vdCBwZXJtaXR0ZWQnKTtcbn1cbmV4cG9ydHMucGVybWlzc2lvbkFjdGlvbiA9IHBlcm1pc3Npb25BY3Rpb247XG5mdW5jdGlvbiBpc0Vycm9yRXZlbnROYW1lKGV2ZW50TmFtZSkge1xuICAgIHZhciBtYXRjaCA9IGhlbHBlcl8xLmZpbmRNYXRjaEluRW51bSh0eXBlc18yLkFjdGlvbiwgZXZlbnROYW1lKTtcbiAgICByZXR1cm4gdHlwZW9mIG1hdGNoID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNFcnJvckV2ZW50TmFtZSA9IGlzRXJyb3JFdmVudE5hbWU7XG5mdW5jdGlvbiBpbnZhbGlkT3JpZ2luQWN0aW9uKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gaGVscGVyXzEuYWN0aW9uV3JhcHBlcih7XG4gICAgICAgIGdyb3VwOiB0eXBlc18xLkdyb3VwLkVycm9yLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgICAgdHlwZTogdHlwZXNfMi5BY3Rpb25UeXBlLklOVkFMSURfT1JJR0lOLFxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiB0eXBlc18yLkFjdGlvblR5cGUuSU5WQUxJRF9PUklHSU4sXG4gICAgfSk7XG59XG5leHBvcnRzLmludmFsaWRPcmlnaW5BY3Rpb24gPSBpbnZhbGlkT3JpZ2luQWN0aW9uO1xudmFyIEFwcEJyaWRnZUVycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFwcEJyaWRnZUVycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0FwcEJyaWRnZUVycm9yJztcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgaWYgKHR5cGVvZiBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YWNrID0gbmV3IEVycm9yKHRoaXMubWVzc2FnZSkuc3RhY2s7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIEFwcEJyaWRnZUVycm9yO1xufSgpKTtcbmV4cG9ydHMuQXBwQnJpZGdlRXJyb3IgPSBBcHBCcmlkZ2VFcnJvcjtcbkFwcEJyaWRnZUVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbmZ1bmN0aW9uIGZyb21BY3Rpb24obWVzc2FnZSwgdHlwZSwgYWN0aW9uKSB7XG4gICAgdmFyIGVycm9yTWVzc2FnZSA9IG1lc3NhZ2UgPyB0eXBlICsgXCI6IFwiICsgbWVzc2FnZSA6IHR5cGU7XG4gICAgdmFyIGVycm9yID0gbmV3IEFwcEJyaWRnZUVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgZXJyb3IuYWN0aW9uID0gYWN0aW9uO1xuICAgIGVycm9yLnR5cGUgPSB0eXBlO1xuICAgIHJldHVybiBlcnJvcjtcbn1cbmV4cG9ydHMuZnJvbUFjdGlvbiA9IGZyb21BY3Rpb247XG5mdW5jdGlvbiB0aHJvd0Vycm9yKCkge1xuICAgIHZhciB0eXBlID0gYXJndW1lbnRzWzBdO1xuICAgIHZhciBtZXNzYWdlO1xuICAgIHZhciBhY3Rpb247XG4gICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBhcmd1bWVudHNbMV07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG4gICAgICAgIG1lc3NhZ2UgPSBhcmd1bWVudHNbMl0gfHwgJyc7XG4gICAgfVxuICAgIHRocm93IGZyb21BY3Rpb24obWVzc2FnZSwgdHlwZSwgYWN0aW9uKTtcbn1cbmV4cG9ydHMudGhyb3dFcnJvciA9IHRocm93RXJyb3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9hY3Rpb25zXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90eXBlc1wiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQXBwQWN0aW9uVHlwZSA9IGV4cG9ydHMuQWN0aW9uVHlwZSA9IGV4cG9ydHMuQWN0aW9uID0gdm9pZCAwO1xudmFyIEFjdGlvbjtcbihmdW5jdGlvbiAoQWN0aW9uKSB7XG4gICAgQWN0aW9uW1wiSU5WQUxJRF9BQ1RJT05cIl0gPSBcIklOVkFMSURfQUNUSU9OXCI7XG4gICAgQWN0aW9uW1wiSU5WQUxJRF9BQ1RJT05fVFlQRVwiXSA9IFwiSU5WQUxJRF9BQ1RJT05fVFlQRVwiO1xuICAgIEFjdGlvbltcIklOVkFMSURfT1BUSU9OU1wiXSA9IFwiSU5WQUxJRF9PUFRJT05TXCI7XG4gICAgQWN0aW9uW1wiSU5WQUxJRF9QQVlMT0FEXCJdID0gXCJJTlZBTElEX1BBWUxPQURcIjtcbiAgICBBY3Rpb25bXCJVTkVYUEVDVEVEX0FDVElPTlwiXSA9IFwiVU5FWFBFQ1RFRF9BQ1RJT05cIjtcbiAgICBBY3Rpb25bXCJQRVJTSVNURU5DRVwiXSA9IFwiUEVSU0lTVEVOQ0VcIjtcbiAgICBBY3Rpb25bXCJVTlNVUFBPUlRFRF9PUEVSQVRJT05cIl0gPSBcIlVOU1VQUE9SVEVEX09QRVJBVElPTlwiO1xuICAgIEFjdGlvbltcIk5FVFdPUktcIl0gPSBcIk5FVFdPUktcIjtcbiAgICBBY3Rpb25bXCJQRVJNSVNTSU9OXCJdID0gXCJQRVJNSVNTSU9OXCI7XG59KShBY3Rpb24gPSBleHBvcnRzLkFjdGlvbiB8fCAoZXhwb3J0cy5BY3Rpb24gPSB7fSkpO1xuLy8gRXJyb3JzIHRyaWdnZXJlZCBpbiByZXNwb25zZSB0byBhbiBhY3Rpb25cbnZhciBBY3Rpb25UeXBlO1xuKGZ1bmN0aW9uIChBY3Rpb25UeXBlKSB7XG4gICAgQWN0aW9uVHlwZVtcIklOVkFMSURfQUNUSU9OXCJdID0gXCJBUFA6OkVSUk9SOjpJTlZBTElEX0FDVElPTlwiO1xuICAgIEFjdGlvblR5cGVbXCJJTlZBTElEX0FDVElPTl9UWVBFXCJdID0gXCJBUFA6OkVSUk9SOjpJTlZBTElEX0FDVElPTl9UWVBFXCI7XG4gICAgQWN0aW9uVHlwZVtcIklOVkFMSURfUEFZTE9BRFwiXSA9IFwiQVBQOjpFUlJPUjo6SU5WQUxJRF9QQVlMT0FEXCI7XG4gICAgQWN0aW9uVHlwZVtcIklOVkFMSURfT1BUSU9OU1wiXSA9IFwiQVBQOjpFUlJPUjo6SU5WQUxJRF9PUFRJT05TXCI7XG4gICAgQWN0aW9uVHlwZVtcIlVORVhQRUNURURfQUNUSU9OXCJdID0gXCJBUFA6OkVSUk9SOjpVTkVYUEVDVEVEX0FDVElPTlwiO1xuICAgIEFjdGlvblR5cGVbXCJQRVJTSVNURU5DRVwiXSA9IFwiQVBQOjpFUlJPUjo6UEVSU0lTVEVOQ0VcIjtcbiAgICBBY3Rpb25UeXBlW1wiVU5TVVBQT1JURURfT1BFUkFUSU9OXCJdID0gXCJBUFA6OkVSUk9SOjpVTlNVUFBPUlRFRF9PUEVSQVRJT05cIjtcbiAgICBBY3Rpb25UeXBlW1wiTkVUV09SS1wiXSA9IFwiQVBQOjpFUlJPUjo6TkVUV09SS1wiO1xuICAgIEFjdGlvblR5cGVbXCJQRVJNSVNTSU9OXCJdID0gXCJBUFA6OkVSUk9SOjpQRVJNSVNTSU9OXCI7XG4gICAgQWN0aW9uVHlwZVtcIkZBSUxFRF9BVVRIRU5USUNBVElPTlwiXSA9IFwiQVBQOjpFUlJPUjo6RkFJTEVEX0FVVEhFTlRJQ0FUSU9OXCI7XG4gICAgQWN0aW9uVHlwZVtcIklOVkFMSURfT1JJR0lOXCJdID0gXCJBUFA6OkVSUk9SOjpJTlZBTElEX09SSUdJTlwiO1xufSkoQWN0aW9uVHlwZSA9IGV4cG9ydHMuQWN0aW9uVHlwZSB8fCAoZXhwb3J0cy5BY3Rpb25UeXBlID0ge30pKTtcbi8vIEVycm9ycyB0aHJvd24gaW4gcmVzcG9uc2UgdG8gYXBwIHNldHVwXG52YXIgQXBwQWN0aW9uVHlwZTtcbihmdW5jdGlvbiAoQXBwQWN0aW9uVHlwZSkge1xuICAgIEFwcEFjdGlvblR5cGVbXCJJTlZBTElEX0NPTkZJR1wiXSA9IFwiQVBQOjpFUlJPUjo6SU5WQUxJRF9DT05GSUdcIjtcbiAgICBBcHBBY3Rpb25UeXBlW1wiTUlTU0lOR19DT05GSUdcIl0gPSBcIkFQUDo6QVBQX0VSUk9SOjpNSVNTSU5HX0NPTkZJR1wiO1xuICAgIEFwcEFjdGlvblR5cGVbXCJNSVNTSU5HX0FQUF9CUklER0VfTUlERExFV0FSRVwiXSA9IFwiQVBQOjpBUFBfRVJST1I6Ok1JU1NJTkdfQVBQX0JSSURHRV9NSURETEVXQVJFXCI7XG4gICAgQXBwQWN0aW9uVHlwZVtcIldJTkRPV19VTkRFRklORURcIl0gPSBcIkFQUDo6QVBQX0VSUk9SOjpXSU5ET1dfVU5ERUZJTkVEXCI7XG4gICAgQXBwQWN0aW9uVHlwZVtcIk1JU1NJTkdfTE9DQUxfT1JJR0lOXCJdID0gXCJBUFA6OkFQUF9FUlJPUjo6TUlTU0lOR19MT0NBTF9PUklHSU5cIjtcbiAgICBBcHBBY3Rpb25UeXBlW1wiTUlTU0lOR19IT1NUX1BST1ZJREVSXCJdID0gXCJBUFA6OkFQUF9FUlJPUjo6TUlTU0lOR19IT1NUX1BST1ZJREVSXCI7XG4gICAgQXBwQWN0aW9uVHlwZVtcIk1JU1NJTkdfUk9VVEVSX0NPTlRFWFRcIl0gPSBcIkFQUDo6QVBQX0VSUk9SOjpNSVNTSU5HX1JPVVRFUl9DT05URVhUXCI7XG4gICAgQXBwQWN0aW9uVHlwZVtcIk1JU1NJTkdfSElTVE9SWV9CTE9DS1wiXSA9IFwiQVBQOjpBUFBfRVJST1I6Ok1JU1NJTkdfSElTVE9SWV9CTE9DS1wiO1xufSkoQXBwQWN0aW9uVHlwZSA9IGV4cG9ydHMuQXBwQWN0aW9uVHlwZSB8fCAoZXhwb3J0cy5BcHBBY3Rpb25UeXBlID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGUgPSBleHBvcnRzLkZlYXR1cmVzID0gdm9pZCAwO1xudmFyIGhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlclwiKTtcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpO1xudmFyIHR5cGVzXzIgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcbi8qKlxuICogQSBzZXQgb2YgQWN0aW9ucyBmb3IgVXBkYXRpbmcsIFJlcXVlc3RpbmcgRmVhdHVyZXMgb2YgQXBwQnJpZGdlXG4gKiBAcHVibGljXG4gKi9cbnZhciBGZWF0dXJlcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmVhdHVyZXMsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmVhdHVyZXMoYXBwLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBhcHAsIHR5cGVzXzEuR3JvdXAuRmVhdHVyZXMsIHR5cGVzXzEuR3JvdXAuRmVhdHVyZXMsIG9wdGlvbnMgPyBvcHRpb25zLmlkIDogdW5kZWZpbmVkKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgRmVhdHVyZXMucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24gKGFjdGlvbiwgcGF5bG9hZCkge1xuICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSB0eXBlc18yLkFjdGlvbi5SRVFVRVNUOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hGZWF0dXJlc0FjdGlvbih0eXBlc18yLkFjdGlvblR5cGUuUkVRVUVTVCwgcGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBGZWF0dXJlcy5wcm90b3R5cGUuZGlzcGF0Y2hGZWF0dXJlc0FjdGlvbiA9IGZ1bmN0aW9uICh0eXBlLCBwYXlsb2FkKSB7XG4gICAgICAgIHRoaXMuYXBwLmRpc3BhdGNoKGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoe1xuICAgICAgICAgICAgZ3JvdXA6IHR5cGVzXzEuR3JvdXAuRmVhdHVyZXMsXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgcGF5bG9hZDogX19hc3NpZ24oX19hc3NpZ24oe30sIChwYXlsb2FkIHx8IHt9KSksIHsgaWQ6IHRoaXMuaWQgfSksXG4gICAgICAgIH0pKTtcbiAgICB9O1xuICAgIHJldHVybiBGZWF0dXJlcztcbn0oaGVscGVyXzEuQWN0aW9uU2V0KSk7XG5leHBvcnRzLkZlYXR1cmVzID0gRmVhdHVyZXM7XG4vKipcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlKGFwcCwgb3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgRmVhdHVyZXMoYXBwLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY3JlYXRlID0gY3JlYXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vYWN0aW9uc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdHlwZXNcIiksIGV4cG9ydHMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFjdGlvbiA9IGV4cG9ydHMuQWN0aW9uVHlwZSA9IHZvaWQgMDtcbi8qKlxuICogQWN0aW9uIFR5cGVzIGZvciB0aGUgRmVhdHVyZXMgZ3JvdXBcbiAqIEBwdWJsaWNcbiAqL1xudmFyIEFjdGlvblR5cGU7XG4oZnVuY3Rpb24gKEFjdGlvblR5cGUpIHtcbiAgICBBY3Rpb25UeXBlW1wiVVBEQVRFXCJdID0gXCJBUFA6OkZFQVRVUkVTOjpVUERBVEVcIjtcbiAgICBBY3Rpb25UeXBlW1wiUkVRVUVTVFwiXSA9IFwiQVBQOjpGRUFUVVJFUzo6UkVRVUVTVFwiO1xuICAgIEFjdGlvblR5cGVbXCJSRVFVRVNUX1VQREFURVwiXSA9IFwiQVBQOjpGRUFUVVJFUzo6UkVRVUVTVDo6VVBEQVRFXCI7XG59KShBY3Rpb25UeXBlID0gZXhwb3J0cy5BY3Rpb25UeXBlIHx8IChleHBvcnRzLkFjdGlvblR5cGUgPSB7fSkpO1xuLyoqXG4gKiBBY3Rpb25zIGF2YWlsYWJsZSB0byB0aGUgRmVhdHVyZXMgZ3JvdXBcbiAqIEBwdWJsaWNcbiAqL1xudmFyIEFjdGlvbjtcbihmdW5jdGlvbiAoQWN0aW9uKSB7XG4gICAgQWN0aW9uW1wiVVBEQVRFXCJdID0gXCJVUERBVEVcIjtcbiAgICBBY3Rpb25bXCJSRVFVRVNUXCJdID0gXCJSRVFVRVNUXCI7XG4gICAgQWN0aW9uW1wiUkVRVUVTVF9VUERBVEVcIl0gPSBcIlJFUVVFU1Q6OlVQREFURVwiO1xufSkoQWN0aW9uID0gZXhwb3J0cy5BY3Rpb24gfHwgKGV4cG9ydHMuQWN0aW9uID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGUgPSBleHBvcnRzLkZlZWRiYWNrTW9kYWwgPSBleHBvcnRzLmNsb3NlID0gZXhwb3J0cy5vcGVuID0gZXhwb3J0cy5BY3Rpb25UeXBlID0gZXhwb3J0cy5BY3Rpb24gPSB2b2lkIDA7XG52YXIgaGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVyXCIpO1xudmFyIHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG4vKipcbiAqIEFjdGlvbiBmb3IgdGhlIEZlZWRiYWNrIE1vZGFsIGdyb3VwXG4gKiBAcHVibGljXG4gKi9cbnZhciBBY3Rpb247XG4oZnVuY3Rpb24gKEFjdGlvbikge1xuICAgIEFjdGlvbltcIk9QRU5cIl0gPSBcIk9QRU5cIjtcbiAgICBBY3Rpb25bXCJDTE9TRVwiXSA9IFwiQ0xPU0VcIjtcbn0pKEFjdGlvbiA9IGV4cG9ydHMuQWN0aW9uIHx8IChleHBvcnRzLkFjdGlvbiA9IHt9KSk7XG4vKipcbiAqIEFjdGlvbiB0eXBlcyBmb3IgdGhlIEZlZWRiYWNrIE1vZGFsIGdyb3VwXG4gKiBAcHVibGljXG4gKi9cbnZhciBBY3Rpb25UeXBlO1xuKGZ1bmN0aW9uIChBY3Rpb25UeXBlKSB7XG4gICAgQWN0aW9uVHlwZVtcIk9QRU5cIl0gPSBcIkFQUDo6RkVFREJBQ0tfTU9EQUw6Ok9QRU5cIjtcbiAgICBBY3Rpb25UeXBlW1wiQ0xPU0VcIl0gPSBcIkFQUDo6RkVFREJBQ0tfTU9EQUw6OkNMT1NFXCI7XG59KShBY3Rpb25UeXBlID0gZXhwb3J0cy5BY3Rpb25UeXBlIHx8IChleHBvcnRzLkFjdGlvblR5cGUgPSB7fSkpO1xuZnVuY3Rpb24gb3BlbihwYXlsb2FkKSB7XG4gICAgcmV0dXJuIGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoe1xuICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5GZWVkYmFja01vZGFsLFxuICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLk9QRU4sXG4gICAgfSk7XG59XG5leHBvcnRzLm9wZW4gPSBvcGVuO1xuZnVuY3Rpb24gY2xvc2UocGF5bG9hZCkge1xuICAgIHJldHVybiBoZWxwZXJfMS5hY3Rpb25XcmFwcGVyKHtcbiAgICAgICAgZ3JvdXA6IHR5cGVzXzEuR3JvdXAuRmVlZGJhY2tNb2RhbCxcbiAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5DTE9TRSxcbiAgICB9KTtcbn1cbmV4cG9ydHMuY2xvc2UgPSBjbG9zZTtcbi8qKlxuICogRmVlZGJhY2tNb2RhbCBhY3Rpb24gc2V0XG4gKi9cbnZhciBGZWVkYmFja01vZGFsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGZWVkYmFja01vZGFsLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBuZXcgaW5zdGFuY2Ugb2YgYSBGZWVkYmFja01vZGFsIGFjdGlvbiBzZXRcbiAgICAgKiBAcGFyYW0gYXBwIHRoZSBjbGllbnQgYXBwbGljYXRpb25cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBGZWVkYmFja01vZGFsKGFwcCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBhcHAsIHR5cGVzXzEuR3JvdXAuRmVlZGJhY2tNb2RhbCwgdHlwZXNfMS5Hcm91cC5GZWVkYmFja01vZGFsKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgX3RoaXMuc2V0KG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGZWVkYmFja01vZGFsLnByb3RvdHlwZSwgXCJwYXlsb2FkXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGFjdGlvbiBzZXQgcGF5bG9hZFxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oeyBpZDogdGhpcy5pZCB9LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgRmVlZGJhY2tNb2RhbC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gaGVscGVyXzEuZ2V0TWVyZ2VkUHJvcHModGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaGVzIGEgZ2l2ZW4gYWN0aW9uIHdpdGggdGhlIGFjdGlvbiBzZXQgcGF5bG9hZFxuICAgICAqIEBwYXJhbSBhY3Rpb24gdGhlIGFjdGlvbiBlbnVtXG4gICAgICogQHJldHVybnMgdGhlIGFjdGlvbiBzZXQgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBGZWVkYmFja01vZGFsLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgQWN0aW9uLk9QRU46XG4gICAgICAgICAgICAgICAgdmFyIG9wZW5BY3Rpb24gPSBvcGVuKHRoaXMucGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuZGlzcGF0Y2gob3BlbkFjdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFjdGlvbi5DTE9TRTpcbiAgICAgICAgICAgICAgICB2YXIgY2xvc2VBY3Rpb24gPSBjbG9zZSh0aGlzLnBheWxvYWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwLmRpc3BhdGNoKGNsb3NlQWN0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBGZWVkYmFja01vZGFsO1xufShoZWxwZXJfMS5BY3Rpb25TZXQpKTtcbmV4cG9ydHMuRmVlZGJhY2tNb2RhbCA9IEZlZWRiYWNrTW9kYWw7XG4vKipcbiAqIFJldHVybnMgYSBuZXcgaW5zdGFuY2Ugb2YgYSBGZWVkYmFja01vZGFsIGFjdGlvbiBzZXRcbiAqIEBwYXJhbSBhcHAgdGhlIGNsaWVudCBhcHBsaWNhdGlvblxuICovXG5mdW5jdGlvbiBjcmVhdGUoYXBwLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBGZWVkYmFja01vZGFsKGFwcCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZSA9IGV4cG9ydHMuRmxhc2ggPSB2b2lkIDA7XG52YXIgVG9hc3RfMSA9IHJlcXVpcmUoXCIuLi9Ub2FzdFwiKTtcbnZhciBUb2FzdF8yID0gcmVxdWlyZShcIi4uL1RvYXN0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY2xlYXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFRvYXN0XzIuY2xlYXI7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzaG93XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBUb2FzdF8yLnNob3c7IH0gfSk7XG52YXIgRmxhc2ggPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZsYXNoLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZsYXNoKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBGbGFzaDtcbn0oVG9hc3RfMS5Ub2FzdCkpO1xuZXhwb3J0cy5GbGFzaCA9IEZsYXNoO1xuZnVuY3Rpb24gY3JlYXRlKGFwcCwgb3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgRmxhc2goYXBwLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY3JlYXRlID0gY3JlYXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vYWN0aW9uc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4uL1RvYXN0L3R5cGVzXCIpLCBleHBvcnRzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZSA9IGV4cG9ydHMuRnVsbHNjcmVlbiA9IGV4cG9ydHMuZXhpdCA9IGV4cG9ydHMuZW50ZXIgPSBleHBvcnRzLkFjdGlvblR5cGUgPSBleHBvcnRzLkFjdGlvbiA9IHZvaWQgMDtcbnZhciBoZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJcIik7XG52YXIgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcbi8qKlxuICogRnVsbHNjcmVlbiBhY3Rpb24gZW51bVxuICogQGJldGFcbiAqL1xudmFyIEFjdGlvbjtcbihmdW5jdGlvbiAoQWN0aW9uKSB7XG4gICAgQWN0aW9uW1wiRU5URVJcIl0gPSBcIkVOVEVSXCI7XG4gICAgQWN0aW9uW1wiRVhJVFwiXSA9IFwiRVhJVFwiO1xufSkoQWN0aW9uID0gZXhwb3J0cy5BY3Rpb24gfHwgKGV4cG9ydHMuQWN0aW9uID0ge30pKTtcbi8qKlxuICogRnVsbHNjcmVlbiBhY3Rpb24gdHlwZSBlbnVtXG4gKiBAcmVtYXJrcyBpbmNsdWRlcyB0aGUgYWN0aW9uIHByZWZpeCBhbmQgZ3JvdXBcbiAqXG4gKiBAYmV0YVxuICovXG52YXIgQWN0aW9uVHlwZTtcbihmdW5jdGlvbiAoQWN0aW9uVHlwZSkge1xuICAgIEFjdGlvblR5cGVbXCJFTlRFUlwiXSA9IFwiQVBQOjpGVUxMU0NSRUVOOjpFTlRFUlwiO1xuICAgIEFjdGlvblR5cGVbXCJFWElUXCJdID0gXCJBUFA6OkZVTExTQ1JFRU46OkVYSVRcIjtcbn0pKEFjdGlvblR5cGUgPSBleHBvcnRzLkFjdGlvblR5cGUgfHwgKGV4cG9ydHMuQWN0aW9uVHlwZSA9IHt9KSk7XG5mdW5jdGlvbiBlbnRlcigpIHtcbiAgICByZXR1cm4gaGVscGVyXzEuYWN0aW9uV3JhcHBlcih7XG4gICAgICAgIGdyb3VwOiB0eXBlc18xLkdyb3VwLkZ1bGxzY3JlZW4sXG4gICAgICAgIHR5cGU6IEFjdGlvblR5cGUuRU5URVIsXG4gICAgfSk7XG59XG5leHBvcnRzLmVudGVyID0gZW50ZXI7XG5mdW5jdGlvbiBleGl0KCkge1xuICAgIHJldHVybiBoZWxwZXJfMS5hY3Rpb25XcmFwcGVyKHtcbiAgICAgICAgZ3JvdXA6IHR5cGVzXzEuR3JvdXAuRnVsbHNjcmVlbixcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5FWElULFxuICAgIH0pO1xufVxuZXhwb3J0cy5leGl0ID0gZXhpdDtcbi8qKlxuICogRnVsbHNjcmVlbiBhY3Rpb24gc2V0XG4gKiBAYmV0YVxuICovXG52YXIgRnVsbHNjcmVlbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRnVsbHNjcmVlbiwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbmV3IGluc3RhbmNlIG9mIGEgRnVsbHNjcmVlbiBhY3Rpb24gc2V0XG4gICAgICogQHBhcmFtIGFwcCB0aGUgY2xpZW50IGFwcGxpY2F0aW9uXG4gICAgICovXG4gICAgZnVuY3Rpb24gRnVsbHNjcmVlbihhcHApIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIGFwcCwgdHlwZXNfMS5Hcm91cC5GdWxsc2NyZWVuLCB0eXBlc18xLkdyb3VwLkZ1bGxzY3JlZW4pIHx8IHRoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGdWxsc2NyZWVuLnByb3RvdHlwZSwgXCJwYXlsb2FkXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGFjdGlvbiBzZXQgcGF5bG9hZFxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4geyBpZDogdGhpcy5pZCB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2hlcyBhIGdpdmVuIGFjdGlvbiB3aXRoIHRoZSBhY3Rpb24gc2V0IHBheWxvYWRcbiAgICAgKiBAcGFyYW0gYWN0aW9uIHRoZSBhY3Rpb24gZW51bVxuICAgICAqIEByZXR1cm5zIHRoZSBhY3Rpb24gc2V0IGluc3RhbmNlXG4gICAgICovXG4gICAgRnVsbHNjcmVlbi5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuYXBwLmRpc3BhdGNoKGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoe1xuICAgICAgICAgICAgZ3JvdXA6IHRoaXMuZ3JvdXAsXG4gICAgICAgICAgICB0eXBlOiBBY3Rpb25UeXBlW2FjdGlvbl0sXG4gICAgICAgICAgICBwYXlsb2FkOiB0aGlzLnBheWxvYWQsXG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gRnVsbHNjcmVlbjtcbn0oaGVscGVyXzEuQWN0aW9uU2V0KSk7XG5leHBvcnRzLkZ1bGxzY3JlZW4gPSBGdWxsc2NyZWVuO1xuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGluc3RhbmNlIG9mIGEgRnVsbHNjcmVlbiBhY3Rpb24gc2V0XG4gKiBAcGFyYW0gYXBwIHRoZSBjbGllbnQgYXBwbGljYXRpb25cbiAqXG4gKiBAYmV0YVxuICovXG5mdW5jdGlvbiBjcmVhdGUoYXBwKSB7XG4gICAgcmV0dXJuIG5ldyBGdWxsc2NyZWVuKGFwcCk7XG59XG5leHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGUgPSBleHBvcnRzLkxlYXZlQ29uZmlybWF0aW9uID0gZXhwb3J0cy5jb25maXJtID0gZXhwb3J0cy5kaXNhYmxlID0gZXhwb3J0cy5lbmFibGUgPSBleHBvcnRzLkFjdGlvblR5cGUgPSBleHBvcnRzLkFjdGlvbiA9IHZvaWQgMDtcbnZhciBoZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJcIik7XG52YXIgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcbi8qKlxuICogQWN0aW9uIGZvciB0aGUgTGVhdmUgQ29uZmlybWF0aW9uIGdyb3VwXG4gKiBAcHVibGljXG4gKi9cbnZhciBBY3Rpb247XG4oZnVuY3Rpb24gKEFjdGlvbikge1xuICAgIEFjdGlvbltcIkVOQUJMRVwiXSA9IFwiRU5BQkxFXCI7XG4gICAgQWN0aW9uW1wiRElTQUJMRVwiXSA9IFwiRElTQUJMRVwiO1xuICAgIEFjdGlvbltcIkNPTkZJUk1cIl0gPSBcIkNPTkZJUk1cIjtcbn0pKEFjdGlvbiA9IGV4cG9ydHMuQWN0aW9uIHx8IChleHBvcnRzLkFjdGlvbiA9IHt9KSk7XG4vKipcbiAqIEFjdGlvbiB0eXBlcyBmb3IgdGhlIExlYXZlIENvbmZpcm1hdGlvbiBncm91cFxuICogQHB1YmxpY1xuICovXG52YXIgQWN0aW9uVHlwZTtcbihmdW5jdGlvbiAoQWN0aW9uVHlwZSkge1xuICAgIEFjdGlvblR5cGVbXCJFTkFCTEVcIl0gPSBcIkFQUDo6TEVBVkVfQ09ORklSTUFUSU9OOjpFTkFCTEVcIjtcbiAgICBBY3Rpb25UeXBlW1wiRElTQUJMRVwiXSA9IFwiQVBQOjpMRUFWRV9DT05GSVJNQVRJT046OkRJU0FCTEVcIjtcbiAgICBBY3Rpb25UeXBlW1wiQ09ORklSTVwiXSA9IFwiQVBQOjpMRUFWRV9DT05GSVJNQVRJT046OkNPTkZJUk1cIjtcbn0pKEFjdGlvblR5cGUgPSBleHBvcnRzLkFjdGlvblR5cGUgfHwgKGV4cG9ydHMuQWN0aW9uVHlwZSA9IHt9KSk7XG5mdW5jdGlvbiBlbmFibGUocGF5bG9hZCkge1xuICAgIGlmIChwYXlsb2FkID09PSB2b2lkIDApIHsgcGF5bG9hZCA9IHt9OyB9XG4gICAgcmV0dXJuIGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoe1xuICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5MZWF2ZUNvbmZpcm1hdGlvbixcbiAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5FTkFCTEUsXG4gICAgfSk7XG59XG5leHBvcnRzLmVuYWJsZSA9IGVuYWJsZTtcbmZ1bmN0aW9uIGRpc2FibGUocGF5bG9hZCkge1xuICAgIGlmIChwYXlsb2FkID09PSB2b2lkIDApIHsgcGF5bG9hZCA9IHt9OyB9XG4gICAgcmV0dXJuIGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoe1xuICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5MZWF2ZUNvbmZpcm1hdGlvbixcbiAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5ESVNBQkxFLFxuICAgIH0pO1xufVxuZXhwb3J0cy5kaXNhYmxlID0gZGlzYWJsZTtcbmZ1bmN0aW9uIGNvbmZpcm0ocGF5bG9hZCkge1xuICAgIGlmIChwYXlsb2FkID09PSB2b2lkIDApIHsgcGF5bG9hZCA9IHt9OyB9XG4gICAgcmV0dXJuIGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoe1xuICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5MZWF2ZUNvbmZpcm1hdGlvbixcbiAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5DT05GSVJNLFxuICAgIH0pO1xufVxuZXhwb3J0cy5jb25maXJtID0gY29uZmlybTtcbi8qKlxuICogTGVhdmUgQ29uZmlybWF0aW9uIGFjdGlvbiBzZXRcbiAqL1xudmFyIExlYXZlQ29uZmlybWF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMZWF2ZUNvbmZpcm1hdGlvbiwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbmV3IGluc3RhbmNlIG9mIGEgTGVhdmUgQ29uZmlybWF0aW9uIGFjdGlvbiBzZXRcbiAgICAgKiBAcGFyYW0gYXBwIHRoZSBjbGllbnQgYXBwbGljYXRpb25cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBMZWF2ZUNvbmZpcm1hdGlvbihhcHAsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgYXBwLCB0eXBlc18xLkdyb3VwLkxlYXZlQ29uZmlybWF0aW9uLCB0eXBlc18xLkdyb3VwLkxlYXZlQ29uZmlybWF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgX3RoaXMuc2V0KG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMZWF2ZUNvbmZpcm1hdGlvbi5wcm90b3R5cGUsIFwicGF5bG9hZFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBhY3Rpb24gc2V0IHBheWxvYWRcbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKHsgaWQ6IHRoaXMuaWQgfSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIExlYXZlQ29uZmlybWF0aW9uLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBoZWxwZXJfMS5nZXRNZXJnZWRQcm9wcyh0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERpc3BhdGNoZXMgYSBnaXZlbiBhY3Rpb24gd2l0aCB0aGUgYWN0aW9uIHNldCBwYXlsb2FkXG4gICAgICogQHBhcmFtIGFjdGlvbiB0aGUgYWN0aW9uIGVudW1cbiAgICAgKiBAcmV0dXJucyB0aGUgYWN0aW9uIHNldCBpbnN0YW5jZVxuICAgICAqL1xuICAgIExlYXZlQ29uZmlybWF0aW9uLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgQWN0aW9uLkVOQUJMRTpcbiAgICAgICAgICAgICAgICB2YXIgZW5hYmxlQWN0aW9uID0gZW5hYmxlKHRoaXMucGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuZGlzcGF0Y2goZW5hYmxlQWN0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQWN0aW9uLkRJU0FCTEU6XG4gICAgICAgICAgICAgICAgdmFyIGRpc2FibGVBY3Rpb24gPSBkaXNhYmxlKHRoaXMucGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuZGlzcGF0Y2goZGlzYWJsZUFjdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFjdGlvbi5DT05GSVJNOlxuICAgICAgICAgICAgICAgIHZhciBjb25maXJtQWN0aW9uID0gY29uZmlybSh0aGlzLnBheWxvYWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwLmRpc3BhdGNoKGNvbmZpcm1BY3Rpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgcmV0dXJuIExlYXZlQ29uZmlybWF0aW9uO1xufShoZWxwZXJfMS5BY3Rpb25TZXQpKTtcbmV4cG9ydHMuTGVhdmVDb25maXJtYXRpb24gPSBMZWF2ZUNvbmZpcm1hdGlvbjtcbi8qKlxuICogUmV0dXJucyBhIG5ldyBpbnN0YW5jZSBvZiBhIExlYXZlIENvbmZpcm1hdGlvbiBhY3Rpb24gc2V0XG4gKiBAcGFyYW0gYXBwIHRoZSBjbGllbnQgYXBwbGljYXRpb25cbiAqL1xuZnVuY3Rpb24gY3JlYXRlKGFwcCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgcmV0dXJuIG5ldyBMZWF2ZUNvbmZpcm1hdGlvbihhcHAsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jcmVhdGUgPSBjcmVhdGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGUgPSBleHBvcnRzLkFwcExpbmsgPSBleHBvcnRzLnVwZGF0ZSA9IGV4cG9ydHMuQWN0aW9uVHlwZSA9IGV4cG9ydHMuQWN0aW9uID0gdm9pZCAwO1xudmFyIGhlbHBlcl8xID0gcmVxdWlyZShcIi4uLy4uL2hlbHBlclwiKTtcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4uLy4uL3R5cGVzXCIpO1xudmFyIFJlZGlyZWN0XzEgPSByZXF1aXJlKFwiLi4vLi4vTmF2aWdhdGlvbi9SZWRpcmVjdFwiKTtcbnZhciBBY3Rpb247XG4oZnVuY3Rpb24gKEFjdGlvbikge1xuICAgIEFjdGlvbltcIlVQREFURVwiXSA9IFwiVVBEQVRFXCI7XG59KShBY3Rpb24gPSBleHBvcnRzLkFjdGlvbiB8fCAoZXhwb3J0cy5BY3Rpb24gPSB7fSkpO1xudmFyIEFjdGlvblR5cGU7XG4oZnVuY3Rpb24gKEFjdGlvblR5cGUpIHtcbiAgICBBY3Rpb25UeXBlW1wiVVBEQVRFXCJdID0gXCJBUFA6OkxJTks6OlVQREFURVwiO1xufSkoQWN0aW9uVHlwZSA9IGV4cG9ydHMuQWN0aW9uVHlwZSB8fCAoZXhwb3J0cy5BY3Rpb25UeXBlID0ge30pKTtcbmZ1bmN0aW9uIHVwZGF0ZSh1cGRhdGVQYXlsb2FkKSB7XG4gICAgcmV0dXJuIGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoe1xuICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5MaW5rLFxuICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLlVQREFURSxcbiAgICAgICAgcGF5bG9hZDogdXBkYXRlUGF5bG9hZCxcbiAgICB9KTtcbn1cbmV4cG9ydHMudXBkYXRlID0gdXBkYXRlO1xudmFyIEFwcExpbmsgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFwcExpbmssIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXBwTGluayhhcHAsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgYXBwLCB0eXBlc18xLkdyb3VwLkxpbmssIHR5cGVzXzEuR3JvdXAuTGluaykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubGFiZWwgPSAnJztcbiAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSAnJztcbiAgICAgICAgX3RoaXMuc2V0KG9wdGlvbnMsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXBwTGluay5wcm90b3R5cGUsIFwib3B0aW9uc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgbGFiZWwgPSBfYS5sYWJlbCwgZGVzdGluYXRpb24gPSBfYS5kZXN0aW5hdGlvbjtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICByZWRpcmVjdFR5cGU6IFJlZGlyZWN0XzEuQWN0aW9uLkFQUCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXBwTGluay5wcm90b3R5cGUsIFwicGF5bG9hZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5vcHRpb25zLCBsYWJlbCA9IF9hLmxhYmVsLCBkZXN0aW5hdGlvbiA9IF9hLmRlc3RpbmF0aW9uLCByZWRpcmVjdFR5cGUgPSBfYS5yZWRpcmVjdFR5cGU7XG4gICAgICAgICAgICB2YXIgcGF0aCA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb246IHsgcGF0aDogcGF0aCB9LFxuICAgICAgICAgICAgICAgIHJlZGlyZWN0VHlwZTogcmVkaXJlY3RUeXBlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEFwcExpbmsucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChvcHRpb25zLCBzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSA9PT0gdm9pZCAwKSB7IHNob3VsZFVwZGF0ZSA9IHRydWU7IH1cbiAgICAgICAgdmFyIF9hID0gaGVscGVyXzEuZ2V0TWVyZ2VkUHJvcHModGhpcy5vcHRpb25zLCBvcHRpb25zKSwgbGFiZWwgPSBfYS5sYWJlbCwgZGVzdGluYXRpb24gPSBfYS5kZXN0aW5hdGlvbjtcbiAgICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gICAgICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2goQWN0aW9uVHlwZS5VUERBVEUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgQXBwTGluay5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIEFjdGlvblR5cGUuVVBEQVRFOlxuICAgICAgICAgICAgICAgIHRoaXMuYXBwLmRpc3BhdGNoKHVwZGF0ZSh0aGlzLnBheWxvYWQpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBBcHBMaW5rO1xufShoZWxwZXJfMS5BY3Rpb25TZXQpKTtcbmV4cG9ydHMuQXBwTGluayA9IEFwcExpbms7XG5mdW5jdGlvbiBjcmVhdGUoYXBwLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBBcHBMaW5rKGFwcCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZSA9IGV4cG9ydHMuTG9hZGluZyA9IGV4cG9ydHMuc3RvcCA9IGV4cG9ydHMuc3RhcnQgPSB2b2lkIDA7XG52YXIgaGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVyXCIpO1xudmFyIHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG52YXIgdHlwZXNfMiA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xuZnVuY3Rpb24gc3RhcnQocGF5bG9hZCkge1xuICAgIHJldHVybiBoZWxwZXJfMS5hY3Rpb25XcmFwcGVyKHtcbiAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgICAgZ3JvdXA6IHR5cGVzXzEuR3JvdXAuTG9hZGluZyxcbiAgICAgICAgdHlwZTogdHlwZXNfMi5BY3Rpb25UeXBlLlNUQVJULFxuICAgIH0pO1xufVxuZXhwb3J0cy5zdGFydCA9IHN0YXJ0O1xuZnVuY3Rpb24gc3RvcChwYXlsb2FkKSB7XG4gICAgcmV0dXJuIGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoe1xuICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5Mb2FkaW5nLFxuICAgICAgICB0eXBlOiB0eXBlc18yLkFjdGlvblR5cGUuU1RPUCxcbiAgICB9KTtcbn1cbmV4cG9ydHMuc3RvcCA9IHN0b3A7XG52YXIgTG9hZGluZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTG9hZGluZywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMb2FkaW5nKGFwcCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgYXBwLCB0eXBlc18xLkdyb3VwLkxvYWRpbmcsIHR5cGVzXzEuR3JvdXAuTG9hZGluZykgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExvYWRpbmcucHJvdG90eXBlLCBcInBheWxvYWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGlkOiB0aGlzLmlkIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBMb2FkaW5nLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgdHlwZXNfMi5BY3Rpb24uU1RBUlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuZGlzcGF0Y2goc3RhcnQodGhpcy5wYXlsb2FkKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzXzIuQWN0aW9uLlNUT1A6XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuZGlzcGF0Y2goc3RvcCh0aGlzLnBheWxvYWQpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBMb2FkaW5nO1xufShoZWxwZXJfMS5BY3Rpb25TZXQpKTtcbmV4cG9ydHMuTG9hZGluZyA9IExvYWRpbmc7XG5mdW5jdGlvbiBjcmVhdGUoYXBwKSB7XG4gICAgcmV0dXJuIG5ldyBMb2FkaW5nKGFwcCk7XG59XG5leHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2FjdGlvbnNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3R5cGVzXCIpLCBleHBvcnRzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BY3Rpb24gPSBleHBvcnRzLkFjdGlvblR5cGUgPSB2b2lkIDA7XG52YXIgQWN0aW9uVHlwZTtcbihmdW5jdGlvbiAoQWN0aW9uVHlwZSkge1xuICAgIEFjdGlvblR5cGVbXCJTVEFSVFwiXSA9IFwiQVBQOjpMT0FESU5HOjpTVEFSVFwiO1xuICAgIEFjdGlvblR5cGVbXCJTVE9QXCJdID0gXCJBUFA6OkxPQURJTkc6OlNUT1BcIjtcbn0pKEFjdGlvblR5cGUgPSBleHBvcnRzLkFjdGlvblR5cGUgfHwgKGV4cG9ydHMuQWN0aW9uVHlwZSA9IHt9KSk7XG52YXIgQWN0aW9uO1xuKGZ1bmN0aW9uIChBY3Rpb24pIHtcbiAgICBBY3Rpb25bXCJTVEFSVFwiXSA9IFwiU1RBUlRcIjtcbiAgICBBY3Rpb25bXCJTVE9QXCJdID0gXCJTVE9QXCI7XG59KShBY3Rpb24gPSBleHBvcnRzLkFjdGlvbiB8fCAoZXhwb3J0cy5BY3Rpb24gPSB7fSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZSA9IGV4cG9ydHMuTWFya2V0aW5nRXh0ZXJuYWxBY3Rpdml0eVRvcEJhciA9IGV4cG9ydHMudXBkYXRlID0gZXhwb3J0cy5jbGlja0FjdGlvbkJ1dHRvbiA9IGV4cG9ydHMuTWFya2V0aW5nQWN0aXZpdHlTdGF0dXNCYWRnZVR5cGUgPSBleHBvcnRzLkFjdGlvblR5cGUgPSBleHBvcnRzLkFjdGlvbiA9IHZvaWQgMDtcbnZhciBCdXR0b25fMSA9IHJlcXVpcmUoXCIuLi9CdXR0b25cIik7XG52YXIgYnV0dG9uSGVscGVyXzEgPSByZXF1aXJlKFwiLi4vYnV0dG9uSGVscGVyXCIpO1xudmFyIGhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlclwiKTtcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpO1xudmFyIEFjdGlvbjtcbihmdW5jdGlvbiAoQWN0aW9uKSB7XG4gICAgQWN0aW9uW1wiVVBEQVRFXCJdID0gXCJVUERBVEVcIjtcbn0pKEFjdGlvbiA9IGV4cG9ydHMuQWN0aW9uIHx8IChleHBvcnRzLkFjdGlvbiA9IHt9KSk7XG52YXIgQWN0aW9uVHlwZTtcbihmdW5jdGlvbiAoQWN0aW9uVHlwZSkge1xuICAgIEFjdGlvblR5cGVbXCJVUERBVEVcIl0gPSBcIkFQUDo6TUFSS0VUSU5HX0VYVEVSTkFMX0FDVElWSVRZX1RPUF9CQVI6OlVQREFURVwiO1xuICAgIEFjdGlvblR5cGVbXCJCVVRUT05fQ0xJQ0tcIl0gPSBcIkFQUDo6TUFSS0VUSU5HX0VYVEVSTkFMX0FDVElWSVRZX1RPUF9CQVI6OkJVVFRPTlM6OkJVVFRPTjo6Q0xJQ0tcIjtcbiAgICBBY3Rpb25UeXBlW1wiQlVUVE9OX1VQREFURVwiXSA9IFwiQVBQOjpNQVJLRVRJTkdfRVhURVJOQUxfQUNUSVZJVFlfVE9QX0JBUjo6QlVUVE9OUzo6QlVUVE9OOjpVUERBVEVcIjtcbn0pKEFjdGlvblR5cGUgPSBleHBvcnRzLkFjdGlvblR5cGUgfHwgKGV4cG9ydHMuQWN0aW9uVHlwZSA9IHt9KSk7XG52YXIgTWFya2V0aW5nQWN0aXZpdHlTdGF0dXNCYWRnZVR5cGU7XG4oZnVuY3Rpb24gKE1hcmtldGluZ0FjdGl2aXR5U3RhdHVzQmFkZ2VUeXBlKSB7XG4gICAgTWFya2V0aW5nQWN0aXZpdHlTdGF0dXNCYWRnZVR5cGVbXCJEZWZhdWx0XCJdID0gXCJERUZBVUxUXCI7XG4gICAgTWFya2V0aW5nQWN0aXZpdHlTdGF0dXNCYWRnZVR5cGVbXCJTdWNjZXNzXCJdID0gXCJTVUNDRVNTXCI7XG4gICAgTWFya2V0aW5nQWN0aXZpdHlTdGF0dXNCYWRnZVR5cGVbXCJBdHRlbnRpb25cIl0gPSBcIkFUVEVOVElPTlwiO1xuICAgIE1hcmtldGluZ0FjdGl2aXR5U3RhdHVzQmFkZ2VUeXBlW1wiV2FybmluZ1wiXSA9IFwiV0FSTklOR1wiO1xuICAgIE1hcmtldGluZ0FjdGl2aXR5U3RhdHVzQmFkZ2VUeXBlW1wiSW5mb1wiXSA9IFwiSU5GT1wiO1xufSkoTWFya2V0aW5nQWN0aXZpdHlTdGF0dXNCYWRnZVR5cGUgPSBleHBvcnRzLk1hcmtldGluZ0FjdGl2aXR5U3RhdHVzQmFkZ2VUeXBlIHx8IChleHBvcnRzLk1hcmtldGluZ0FjdGl2aXR5U3RhdHVzQmFkZ2VUeXBlID0ge30pKTtcbnZhciBNQVJLRVRJTkdfQUNUSVZJVFlfVE9QQkFSX0JVVFRPTl9QUk9QUyA9IHtcbiAgICBncm91cDogdHlwZXNfMS5Hcm91cC5NYXJrZXRpbmdFeHRlcm5hbEFjdGl2aXR5VG9wQmFyLFxuICAgIHN1Ymdyb3VwczogWydCdXR0b25zJ10sXG59O1xuZnVuY3Rpb24gY2xpY2tBY3Rpb25CdXR0b24oaWQsIHBheWxvYWQpIHtcbiAgICB2YXIgdHlwZSA9IHR5cGVzXzEuQ29tcG9uZW50VHlwZS5CdXR0b247XG4gICAgdmFyIGNvbXBvbmVudCA9IF9fYXNzaWduKHsgaWQ6IGlkLCB0eXBlOiB0eXBlIH0sIE1BUktFVElOR19BQ1RJVklUWV9UT1BCQVJfQlVUVE9OX1BST1BTKTtcbiAgICByZXR1cm4gQnV0dG9uXzEuY2xpY2tCdXR0b24odHlwZXNfMS5Hcm91cC5NYXJrZXRpbmdFeHRlcm5hbEFjdGl2aXR5VG9wQmFyLCBjb21wb25lbnQsIHBheWxvYWQpO1xufVxuZXhwb3J0cy5jbGlja0FjdGlvbkJ1dHRvbiA9IGNsaWNrQWN0aW9uQnV0dG9uO1xuZnVuY3Rpb24gdXBkYXRlKHBheWxvYWQpIHtcbiAgICByZXR1cm4gaGVscGVyXzEuYWN0aW9uV3JhcHBlcih7XG4gICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICAgIGdyb3VwOiB0eXBlc18xLkdyb3VwLk1hcmtldGluZ0V4dGVybmFsQWN0aXZpdHlUb3BCYXIsXG4gICAgICAgIHR5cGU6IEFjdGlvblR5cGUuVVBEQVRFLFxuICAgIH0pO1xufVxuZXhwb3J0cy51cGRhdGUgPSB1cGRhdGU7XG52YXIgTWFya2V0aW5nRXh0ZXJuYWxBY3Rpdml0eVRvcEJhciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTWFya2V0aW5nRXh0ZXJuYWxBY3Rpdml0eVRvcEJhciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNYXJrZXRpbmdFeHRlcm5hbEFjdGl2aXR5VG9wQmFyKGFwcCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBhcHAsIHR5cGVzXzEuR3JvdXAuTWFya2V0aW5nRXh0ZXJuYWxBY3Rpdml0eVRvcEJhciwgdHlwZXNfMS5Hcm91cC5NYXJrZXRpbmdFeHRlcm5hbEFjdGl2aXR5VG9wQmFyKSB8fCB0aGlzO1xuICAgICAgICAvLyBUcmlnZ2VyICd1cGRhdGUnIG9uIGNyZWF0aW9uXG4gICAgICAgIF90aGlzLnNldChvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWFya2V0aW5nRXh0ZXJuYWxBY3Rpdml0eVRvcEJhci5wcm90b3R5cGUsIFwiYnV0dG9uc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnByaW1hcnkgJiYgIXRoaXMuc2Vjb25kYXJ5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcHJpbWFyeTogdGhpcy5wcmltYXJ5LFxuICAgICAgICAgICAgICAgIHNlY29uZGFyeTogdGhpcy5zZWNvbmRhcnksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hcmtldGluZ0V4dGVybmFsQWN0aXZpdHlUb3BCYXIucHJvdG90eXBlLCBcImJ1dHRvbnNPcHRpb25zXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucHJpbWFyeU9wdGlvbnMgJiYgIXRoaXMuc2Vjb25kYXJ5T3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHByaW1hcnk6IHRoaXMucHJpbWFyeU9wdGlvbnMsXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5OiB0aGlzLnNlY29uZGFyeU9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hcmtldGluZ0V4dGVybmFsQWN0aXZpdHlUb3BCYXIucHJvdG90eXBlLCBcIm9wdGlvbnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgICAgICAgICAgICBzYXZpbmc6IHRoaXMuc2F2aW5nLFxuICAgICAgICAgICAgICAgIHNhdmVkOiB0aGlzLnNhdmVkLFxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IHRoaXMuYnV0dG9uc09wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hcmtldGluZ0V4dGVybmFsQWN0aXZpdHlUb3BCYXIucHJvdG90eXBlLCBcInBheWxvYWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5vcHRpb25zKSwgeyBidXR0b25zOiB0aGlzLmJ1dHRvbnMsIGlkOiB0aGlzLmlkIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTWFya2V0aW5nRXh0ZXJuYWxBY3Rpdml0eVRvcEJhci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNob3VsZFVwZGF0ZSkge1xuICAgICAgICBpZiAoc2hvdWxkVXBkYXRlID09PSB2b2lkIDApIHsgc2hvdWxkVXBkYXRlID0gdHJ1ZTsgfVxuICAgICAgICB2YXIgbWVyZ2VkT3B0aW9ucyA9IGhlbHBlcl8xLmdldE1lcmdlZFByb3BzKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHZhciB0aXRsZSA9IG1lcmdlZE9wdGlvbnMudGl0bGUsIGJ1dHRvbnMgPSBtZXJnZWRPcHRpb25zLmJ1dHRvbnMsIHNhdmVkID0gbWVyZ2VkT3B0aW9ucy5zYXZlZCwgc2F2aW5nID0gbWVyZ2VkT3B0aW9ucy5zYXZpbmcsIHN0YXR1cyA9IG1lcmdlZE9wdGlvbnMuc3RhdHVzO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuc2F2aW5nID0gc2F2aW5nO1xuICAgICAgICB0aGlzLnNhdmVkID0gc2F2ZWQ7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLnNldFByaW1hcnlCdXR0b24oYnV0dG9ucyA/IGJ1dHRvbnMucHJpbWFyeSA6IHVuZGVmaW5lZCk7XG4gICAgICAgIHRoaXMuc2V0U2Vjb25kYXJ5QnV0dG9ucyhidXR0b25zID8gYnV0dG9ucy5zZWNvbmRhcnkgOiB1bmRlZmluZWQpO1xuICAgICAgICBpZiAoc2hvdWxkVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoKEFjdGlvbi5VUERBVEUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgTWFya2V0aW5nRXh0ZXJuYWxBY3Rpdml0eVRvcEJhci5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIEFjdGlvbi5VUERBVEU6XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuZGlzcGF0Y2godXBkYXRlKHRoaXMucGF5bG9hZCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgTWFya2V0aW5nRXh0ZXJuYWxBY3Rpdml0eVRvcEJhci5wcm90b3R5cGUuZ2V0QnV0dG9uID0gZnVuY3Rpb24gKGJ1dHRvbiwgc3ViZ3JvdXBzLCB1cGRhdGVDYikge1xuICAgICAgICByZXR1cm4gYnV0dG9uSGVscGVyXzEuZ2V0U2luZ2xlQnV0dG9uKHRoaXMsIGJ1dHRvbiwgc3ViZ3JvdXBzLCB1cGRhdGVDYik7XG4gICAgfTtcbiAgICBNYXJrZXRpbmdFeHRlcm5hbEFjdGl2aXR5VG9wQmFyLnByb3RvdHlwZS51cGRhdGVQcmltYXJ5QnV0dG9uID0gZnVuY3Rpb24gKG5ld1BheWxvYWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByaW1hcnkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVscGVyXzEudXBkYXRlQWN0aW9uRnJvbVBheWxvYWQodGhpcy5wcmltYXJ5LCBuZXdQYXlsb2FkKSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaChBY3Rpb24uVVBEQVRFKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTWFya2V0aW5nRXh0ZXJuYWxBY3Rpdml0eVRvcEJhci5wcm90b3R5cGUudXBkYXRlU2Vjb25kYXJ5QnV0dG9ucyA9IGZ1bmN0aW9uIChuZXdQYXlsb2FkKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWNvbmRhcnkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYnV0dG9uVG9VcGRhdGUgPSB0aGlzLnNlY29uZGFyeS5maW5kKGZ1bmN0aW9uIChhY3Rpb24pIHsgcmV0dXJuIGFjdGlvbi5pZCA9PT0gbmV3UGF5bG9hZC5pZDsgfSk7XG4gICAgICAgIGlmICghYnV0dG9uVG9VcGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXBkYXRlZCA9IGhlbHBlcl8xLnVwZGF0ZUFjdGlvbkZyb21QYXlsb2FkKGJ1dHRvblRvVXBkYXRlLCBuZXdQYXlsb2FkKTtcbiAgICAgICAgaWYgKHVwZGF0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2goQWN0aW9uLlVQREFURSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1hcmtldGluZ0V4dGVybmFsQWN0aXZpdHlUb3BCYXIucHJvdG90eXBlLnNldFByaW1hcnlCdXR0b24gPSBmdW5jdGlvbiAobmV3T3B0aW9ucykge1xuICAgICAgICB0aGlzLnByaW1hcnlPcHRpb25zID0gdGhpcy5nZXRDaGlsZEJ1dHRvbihuZXdPcHRpb25zLCB0aGlzLnByaW1hcnlPcHRpb25zKTtcbiAgICAgICAgdGhpcy5wcmltYXJ5ID0gdGhpcy5wcmltYXJ5T3B0aW9uc1xuICAgICAgICAgICAgPyB0aGlzLmdldEJ1dHRvbih0aGlzLnByaW1hcnlPcHRpb25zLCBNQVJLRVRJTkdfQUNUSVZJVFlfVE9QQkFSX0JVVFRPTl9QUk9QUy5zdWJncm91cHMsIHRoaXMudXBkYXRlUHJpbWFyeUJ1dHRvbilcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH07XG4gICAgTWFya2V0aW5nRXh0ZXJuYWxBY3Rpdml0eVRvcEJhci5wcm90b3R5cGUuc2V0U2Vjb25kYXJ5QnV0dG9ucyA9IGZ1bmN0aW9uIChuZXdPcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBuZXdCdXR0b25zID0gbmV3T3B0aW9ucyB8fCBbXTtcbiAgICAgICAgdmFyIGN1cnJlbnRCdXR0b25zID0gdGhpcy5zZWNvbmRhcnlPcHRpb25zIHx8IFtdO1xuICAgICAgICB0aGlzLnNlY29uZGFyeU9wdGlvbnMgPSB0aGlzLmdldFVwZGF0ZWRDaGlsZEFjdGlvbnMobmV3QnV0dG9ucywgY3VycmVudEJ1dHRvbnMpO1xuICAgICAgICB0aGlzLnNlY29uZGFyeSA9IHRoaXMuc2Vjb25kYXJ5T3B0aW9uc1xuICAgICAgICAgICAgPyB0aGlzLnNlY29uZGFyeU9wdGlvbnMubWFwKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuZ2V0QnV0dG9uKGFjdGlvbiwgTUFSS0VUSU5HX0FDVElWSVRZX1RPUEJBUl9CVVRUT05fUFJPUFMuc3ViZ3JvdXBzLCBfdGhpcy51cGRhdGVTZWNvbmRhcnlCdXR0b25zKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIE1hcmtldGluZ0V4dGVybmFsQWN0aXZpdHlUb3BCYXIucHJvdG90eXBlLnVwZGF0ZVNhdmluZyA9IGZ1bmN0aW9uIChzYXZpbmcpIHtcbiAgICAgICAgdGhpcy5zYXZpbmcgPSBzYXZpbmc7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2goQWN0aW9uLlVQREFURSk7XG4gICAgfTtcbiAgICBNYXJrZXRpbmdFeHRlcm5hbEFjdGl2aXR5VG9wQmFyLnByb3RvdHlwZS51cGRhdGVTYXZlZCA9IGZ1bmN0aW9uIChzYXZlZCkge1xuICAgICAgICB0aGlzLnNhdmVkID0gc2F2ZWQ7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2goQWN0aW9uLlVQREFURSk7XG4gICAgfTtcbiAgICBNYXJrZXRpbmdFeHRlcm5hbEFjdGl2aXR5VG9wQmFyLnByb3RvdHlwZS51cGRhdGVTdGF0dXMgPSBmdW5jdGlvbiAobmV3UGF5bG9hZCkge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IG5ld1BheWxvYWQ7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2goQWN0aW9uLlVQREFURSk7XG4gICAgfTtcbiAgICBNYXJrZXRpbmdFeHRlcm5hbEFjdGl2aXR5VG9wQmFyLnByb3RvdHlwZS5nZXRDaGlsZEJ1dHRvbiA9IGZ1bmN0aW9uIChuZXdBY3Rpb24sIGN1cnJlbnRBY3Rpb24pIHtcbiAgICAgICAgdmFyIG5ld0J1dHRvbnMgPSBuZXdBY3Rpb24gPyBbbmV3QWN0aW9uXSA6IFtdO1xuICAgICAgICB2YXIgY3VycmVudEJ1dHRvbnMgPSBjdXJyZW50QWN0aW9uID8gW2N1cnJlbnRBY3Rpb25dIDogW107XG4gICAgICAgIHZhciB1cGRhdGVkQnV0dG9uID0gdGhpcy5nZXRVcGRhdGVkQ2hpbGRBY3Rpb25zKG5ld0J1dHRvbnMsIGN1cnJlbnRCdXR0b25zKTtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWRCdXR0b24gPyB1cGRhdGVkQnV0dG9uWzBdIDogdW5kZWZpbmVkO1xuICAgIH07XG4gICAgcmV0dXJuIE1hcmtldGluZ0V4dGVybmFsQWN0aXZpdHlUb3BCYXI7XG59KGhlbHBlcl8xLkFjdGlvblNldFdpdGhDaGlsZHJlbikpO1xuZXhwb3J0cy5NYXJrZXRpbmdFeHRlcm5hbEFjdGl2aXR5VG9wQmFyID0gTWFya2V0aW5nRXh0ZXJuYWxBY3Rpdml0eVRvcEJhcjtcbmZ1bmN0aW9uIGNyZWF0ZShhcHAsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IE1hcmtldGluZ0V4dGVybmFsQWN0aXZpdHlUb3BCYXIoYXBwLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY3JlYXRlID0gY3JlYXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZSA9IGV4cG9ydHMuQ2hhbm5lbE1lbnUgPSBleHBvcnRzLnVwZGF0ZSA9IGV4cG9ydHMuQWN0aW9uVHlwZSA9IGV4cG9ydHMuQWN0aW9uID0gdm9pZCAwO1xudmFyIEFwcExpbmtfMSA9IHJlcXVpcmUoXCIuLi8uLi9MaW5rL0FwcExpbmtcIik7XG52YXIgaGVscGVyXzEgPSByZXF1aXJlKFwiLi4vLi4vaGVscGVyXCIpO1xudmFyIHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XG52YXIgU1VCR1JPVVBTID0gWydDaGFubmVsX01lbnUnXTtcbnZhciBBY3Rpb247XG4oZnVuY3Rpb24gKEFjdGlvbikge1xuICAgIEFjdGlvbltcIlVQREFURVwiXSA9IFwiVVBEQVRFXCI7XG4gICAgQWN0aW9uW1wiTElOS19VUERBVEVcIl0gPSBcIkxJTks6OlVQREFURVwiO1xufSkoQWN0aW9uID0gZXhwb3J0cy5BY3Rpb24gfHwgKGV4cG9ydHMuQWN0aW9uID0ge30pKTtcbnZhciBBY3Rpb25UeXBlO1xuKGZ1bmN0aW9uIChBY3Rpb25UeXBlKSB7XG4gICAgQWN0aW9uVHlwZVtcIlVQREFURVwiXSA9IFwiQVBQOjpNRU5VOjpDSEFOTkVMX01FTlU6OlVQREFURVwiO1xuICAgIEFjdGlvblR5cGVbXCJMSU5LX1VQREFURVwiXSA9IFwiQVBQOjpNRU5VOjpDSEFOTkVMX01FTlU6OkxJTks6OlVQREFURVwiO1xufSkoQWN0aW9uVHlwZSA9IGV4cG9ydHMuQWN0aW9uVHlwZSB8fCAoZXhwb3J0cy5BY3Rpb25UeXBlID0ge30pKTtcbmZ1bmN0aW9uIHVwZGF0ZShwYXlsb2FkKSB7XG4gICAgcmV0dXJuIGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoe1xuICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5NZW51LFxuICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLlVQREFURSxcbiAgICB9KTtcbn1cbmV4cG9ydHMudXBkYXRlID0gdXBkYXRlO1xudmFyIENoYW5uZWxNZW51ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDaGFubmVsTWVudSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDaGFubmVsTWVudShhcHAsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgYXBwLCAnQ2hhbm5lbF9NZW51JywgdHlwZXNfMS5Hcm91cC5NZW51KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICAvLyBUcmlnZ2VyICd1cGRhdGUnIG9uIGNyZWF0aW9uXG4gICAgICAgIF90aGlzLnNldChvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2hhbm5lbE1lbnUucHJvdG90eXBlLCBcIm9wdGlvbnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IHRoaXMuaXRlbXNPcHRpb25zLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogdGhpcy5hY3RpdmVPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDaGFubmVsTWVudS5wcm90b3R5cGUsIFwicGF5bG9hZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMpLCB7IGFjdGl2ZTogdGhpcy5hY3RpdmUsIGl0ZW1zOiB0aGlzLml0ZW1zLCBpZDogdGhpcy5pZCB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIENoYW5uZWxNZW51LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAob3B0aW9ucywgc2hvdWxkVXBkYXRlKSB7XG4gICAgICAgIGlmIChzaG91bGRVcGRhdGUgPT09IHZvaWQgMCkgeyBzaG91bGRVcGRhdGUgPSB0cnVlOyB9XG4gICAgICAgIHZhciBtZXJnZWRPcHRpb25zID0gaGVscGVyXzEuZ2V0TWVyZ2VkUHJvcHModGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdmFyIGl0ZW1zID0gbWVyZ2VkT3B0aW9ucy5pdGVtcywgYWN0aXZlID0gbWVyZ2VkT3B0aW9ucy5hY3RpdmU7XG4gICAgICAgIHRoaXMuc2V0SXRlbXMoaXRlbXMpO1xuICAgICAgICB0aGlzLmFjdGl2ZU9wdGlvbnMgPSBhY3RpdmU7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlICYmIGFjdGl2ZS5pZDtcbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaChBY3Rpb24uVVBEQVRFKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIENoYW5uZWxNZW51LnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgQWN0aW9uLlVQREFURTpcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5kaXNwYXRjaCh1cGRhdGUodGhpcy5wYXlsb2FkKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBDaGFubmVsTWVudS5wcm90b3R5cGUudXBkYXRlSXRlbSA9IGZ1bmN0aW9uIChuZXdQYXlsb2FkKSB7XG4gICAgICAgIGlmICghdGhpcy5pdGVtcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpdGVtVG9VcGRhdGUgPSB0aGlzLml0ZW1zLmZpbmQoZnVuY3Rpb24gKGFjdGlvbikgeyByZXR1cm4gYWN0aW9uLmlkID09PSBuZXdQYXlsb2FkLmlkOyB9KTtcbiAgICAgICAgaWYgKCFpdGVtVG9VcGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVscGVyXzEudXBkYXRlQWN0aW9uRnJvbVBheWxvYWQoaXRlbVRvVXBkYXRlLCBuZXdQYXlsb2FkKSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaChBY3Rpb24uVVBEQVRFKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ2hhbm5lbE1lbnUucHJvdG90eXBlLnNldEl0ZW1zID0gZnVuY3Rpb24gKG5ld09wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG5ld0l0ZW1zID0gbmV3T3B0aW9ucyB8fCBbXTtcbiAgICAgICAgdmFyIGN1cnJlbnRJdGVtcyA9IHRoaXMuaXRlbXNPcHRpb25zIHx8IFtdO1xuICAgICAgICB0aGlzLml0ZW1zT3B0aW9ucyA9IHRoaXMuZ2V0VXBkYXRlZENoaWxkQWN0aW9ucyhuZXdJdGVtcywgY3VycmVudEl0ZW1zKTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXNPcHRpb25zXG4gICAgICAgICAgICA/IHRoaXMuaXRlbXNPcHRpb25zLm1hcChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRkQ2hpbGQoYWN0aW9uLCBfdGhpcy5ncm91cCwgU1VCR1JPVVBTKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zdWJzY3JpYmVUb0NoaWxkKGFjdGlvbiwgQXBwTGlua18xLkFjdGlvbi5VUERBVEUsIF90aGlzLnVwZGF0ZUl0ZW0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IFtdO1xuICAgIH07XG4gICAgcmV0dXJuIENoYW5uZWxNZW51O1xufShoZWxwZXJfMS5BY3Rpb25TZXRXaXRoQ2hpbGRyZW4pKTtcbmV4cG9ydHMuQ2hhbm5lbE1lbnUgPSBDaGFubmVsTWVudTtcbmZ1bmN0aW9uIGNyZWF0ZShhcHAsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IENoYW5uZWxNZW51KGFwcCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2FjdGlvbnNcIiksIGV4cG9ydHMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZSA9IGV4cG9ydHMuTmF2aWdhdGlvbk1lbnUgPSBleHBvcnRzLnVwZGF0ZSA9IGV4cG9ydHMuQWN0aW9uVHlwZSA9IGV4cG9ydHMuQWN0aW9uID0gdm9pZCAwO1xudmFyIEFwcExpbmtfMSA9IHJlcXVpcmUoXCIuLi8uLi9MaW5rL0FwcExpbmtcIik7XG52YXIgaGVscGVyXzEgPSByZXF1aXJlKFwiLi4vLi4vaGVscGVyXCIpO1xudmFyIHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XG52YXIgU1VCR1JPVVBTID0gWydOYXZpZ2F0aW9uX01lbnUnXTtcbnZhciBBY3Rpb247XG4oZnVuY3Rpb24gKEFjdGlvbikge1xuICAgIEFjdGlvbltcIlVQREFURVwiXSA9IFwiVVBEQVRFXCI7XG4gICAgQWN0aW9uW1wiTElOS19VUERBVEVcIl0gPSBcIkxJTks6OlVQREFURVwiO1xufSkoQWN0aW9uID0gZXhwb3J0cy5BY3Rpb24gfHwgKGV4cG9ydHMuQWN0aW9uID0ge30pKTtcbnZhciBBY3Rpb25UeXBlO1xuKGZ1bmN0aW9uIChBY3Rpb25UeXBlKSB7XG4gICAgQWN0aW9uVHlwZVtcIlVQREFURVwiXSA9IFwiQVBQOjpNRU5VOjpOQVZJR0FUSU9OX01FTlU6OlVQREFURVwiO1xuICAgIEFjdGlvblR5cGVbXCJMSU5LX1VQREFURVwiXSA9IFwiQVBQOjpNRU5VOjpOQVZJR0FUSU9OX01FTlU6OkxJTks6OlVQREFURVwiO1xufSkoQWN0aW9uVHlwZSA9IGV4cG9ydHMuQWN0aW9uVHlwZSB8fCAoZXhwb3J0cy5BY3Rpb25UeXBlID0ge30pKTtcbmZ1bmN0aW9uIHVwZGF0ZShwYXlsb2FkKSB7XG4gICAgcmV0dXJuIGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoe1xuICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5NZW51LFxuICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLlVQREFURSxcbiAgICB9KTtcbn1cbmV4cG9ydHMudXBkYXRlID0gdXBkYXRlO1xudmFyIE5hdmlnYXRpb25NZW51ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOYXZpZ2F0aW9uTWVudSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBOYXZpZ2F0aW9uTWVudShhcHAsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgYXBwLCAnTmF2aWdhdGlvbl9NZW51JywgdHlwZXNfMS5Hcm91cC5NZW51KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICAvLyBUcmlnZ2VyICd1cGRhdGUnIG9uIGNyZWF0aW9uXG4gICAgICAgIF90aGlzLnNldChvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTmF2aWdhdGlvbk1lbnUucHJvdG90eXBlLCBcIm9wdGlvbnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IHRoaXMuaXRlbXNPcHRpb25zLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogdGhpcy5hY3RpdmVPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOYXZpZ2F0aW9uTWVudS5wcm90b3R5cGUsIFwicGF5bG9hZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMpLCB7IGFjdGl2ZTogdGhpcy5hY3RpdmUsIGl0ZW1zOiB0aGlzLml0ZW1zLCBpZDogdGhpcy5pZCB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE5hdmlnYXRpb25NZW51LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAob3B0aW9ucywgc2hvdWxkVXBkYXRlKSB7XG4gICAgICAgIGlmIChzaG91bGRVcGRhdGUgPT09IHZvaWQgMCkgeyBzaG91bGRVcGRhdGUgPSB0cnVlOyB9XG4gICAgICAgIHZhciBtZXJnZWRPcHRpb25zID0gaGVscGVyXzEuZ2V0TWVyZ2VkUHJvcHModGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdmFyIGl0ZW1zID0gbWVyZ2VkT3B0aW9ucy5pdGVtcywgYWN0aXZlID0gbWVyZ2VkT3B0aW9ucy5hY3RpdmU7XG4gICAgICAgIHRoaXMuc2V0SXRlbXMoaXRlbXMpO1xuICAgICAgICB0aGlzLmFjdGl2ZU9wdGlvbnMgPSBhY3RpdmU7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlICYmIGFjdGl2ZS5pZDtcbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaChBY3Rpb24uVVBEQVRFKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIE5hdmlnYXRpb25NZW51LnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgQWN0aW9uLlVQREFURTpcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5kaXNwYXRjaCh1cGRhdGUodGhpcy5wYXlsb2FkKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBOYXZpZ2F0aW9uTWVudS5wcm90b3R5cGUudXBkYXRlSXRlbSA9IGZ1bmN0aW9uIChuZXdQYXlsb2FkKSB7XG4gICAgICAgIGlmICghdGhpcy5pdGVtcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpdGVtVG9VcGRhdGUgPSB0aGlzLml0ZW1zLmZpbmQoZnVuY3Rpb24gKGFjdGlvbikgeyByZXR1cm4gYWN0aW9uLmlkID09PSBuZXdQYXlsb2FkLmlkOyB9KTtcbiAgICAgICAgaWYgKCFpdGVtVG9VcGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVscGVyXzEudXBkYXRlQWN0aW9uRnJvbVBheWxvYWQoaXRlbVRvVXBkYXRlLCBuZXdQYXlsb2FkKSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaChBY3Rpb24uVVBEQVRFKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTmF2aWdhdGlvbk1lbnUucHJvdG90eXBlLnNldEl0ZW1zID0gZnVuY3Rpb24gKG5ld09wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG5ld0l0ZW1zID0gbmV3T3B0aW9ucyB8fCBbXTtcbiAgICAgICAgdmFyIGN1cnJlbnRJdGVtcyA9IHRoaXMuaXRlbXNPcHRpb25zIHx8IFtdO1xuICAgICAgICB0aGlzLml0ZW1zT3B0aW9ucyA9IHRoaXMuZ2V0VXBkYXRlZENoaWxkQWN0aW9ucyhuZXdJdGVtcywgY3VycmVudEl0ZW1zKTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXNPcHRpb25zXG4gICAgICAgICAgICA/IHRoaXMuaXRlbXNPcHRpb25zLm1hcChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRkQ2hpbGQoYWN0aW9uLCBfdGhpcy5ncm91cCwgU1VCR1JPVVBTKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zdWJzY3JpYmVUb0NoaWxkKGFjdGlvbiwgQXBwTGlua18xLkFjdGlvbi5VUERBVEUsIF90aGlzLnVwZGF0ZUl0ZW0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IFtdO1xuICAgIH07XG4gICAgcmV0dXJuIE5hdmlnYXRpb25NZW51O1xufShoZWxwZXJfMS5BY3Rpb25TZXRXaXRoQ2hpbGRyZW4pKTtcbmV4cG9ydHMuTmF2aWdhdGlvbk1lbnUgPSBOYXZpZ2F0aW9uTWVudTtcbmZ1bmN0aW9uIGNyZWF0ZShhcHAsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IE5hdmlnYXRpb25NZW51KGFwcCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2FjdGlvbnNcIiksIGV4cG9ydHMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZSA9IGV4cG9ydHMuTW9kYWxJZnJhbWUgPSBleHBvcnRzLk1vZGFsTWVzc2FnZSA9IGV4cG9ydHMuTW9kYWwgPSBleHBvcnRzLmlzTWVzc2FnZU1vZGFsID0gZXhwb3J0cy5pc0lmcmFtZU1vZGFsID0gZXhwb3J0cy5kYXRhID0gZXhwb3J0cy51cGRhdGUgPSBleHBvcnRzLmNsaWNrRm9vdGVyQnV0dG9uID0gZXhwb3J0cy51cGRhdGVNb2RhbFNpemUgPSBleHBvcnRzLmNsb3NlTW9kYWwgPSBleHBvcnRzLm9wZW5Nb2RhbCA9IHZvaWQgMDtcbnZhciBidXR0b25IZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9idXR0b25IZWxwZXJcIik7XG52YXIgaGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVyXCIpO1xudmFyIHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG52YXIgQnV0dG9uXzEgPSByZXF1aXJlKFwiLi4vQnV0dG9uXCIpO1xudmFyIHR5cGVzXzIgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcbnZhciBGT09URVJfQlVUVE9OX1BST1BTID0ge1xuICAgIGdyb3VwOiB0eXBlc18xLkdyb3VwLk1vZGFsLFxuICAgIHN1Ymdyb3VwczogWydGb290ZXInXSxcbiAgICB0eXBlOiB0eXBlc18xLkNvbXBvbmVudFR5cGUuQnV0dG9uLFxufTtcbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbFBheWxvYWQpIHtcbiAgICByZXR1cm4gaGVscGVyXzEuYWN0aW9uV3JhcHBlcih7XG4gICAgICAgIGdyb3VwOiB0eXBlc18xLkdyb3VwLk1vZGFsLFxuICAgICAgICBwYXlsb2FkOiBtb2RhbFBheWxvYWQsXG4gICAgICAgIHR5cGU6IHR5cGVzXzIuQWN0aW9uVHlwZS5PUEVOLFxuICAgIH0pO1xufVxuZXhwb3J0cy5vcGVuTW9kYWwgPSBvcGVuTW9kYWw7XG5mdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsQ2xvc2VQYXlsb2FkKSB7XG4gICAgcmV0dXJuIGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoe1xuICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5Nb2RhbCxcbiAgICAgICAgcGF5bG9hZDogbW9kYWxDbG9zZVBheWxvYWQsXG4gICAgICAgIHR5cGU6IHR5cGVzXzIuQWN0aW9uVHlwZS5DTE9TRSxcbiAgICB9KTtcbn1cbmV4cG9ydHMuY2xvc2VNb2RhbCA9IGNsb3NlTW9kYWw7XG4vKipcbiAqIEFjdGlvbiBjcmVhdG9yIGZvciBtb2RhbCB1cGRhdGUgc2l6ZSBhY3Rpb25cbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiB1cGRhdGVNb2RhbFNpemUodXBkYXRlU2l6ZVBheWxvYWQpIHtcbiAgICByZXR1cm4gaGVscGVyXzEuYWN0aW9uV3JhcHBlcih7XG4gICAgICAgIGdyb3VwOiB0eXBlc18xLkdyb3VwLk1vZGFsLFxuICAgICAgICBwYXlsb2FkOiB1cGRhdGVTaXplUGF5bG9hZCxcbiAgICAgICAgdHlwZTogdHlwZXNfMi5BY3Rpb25UeXBlLlVQREFURV9TSVpFLFxuICAgIH0pO1xufVxuZXhwb3J0cy51cGRhdGVNb2RhbFNpemUgPSB1cGRhdGVNb2RhbFNpemU7XG5mdW5jdGlvbiBjbGlja0Zvb3RlckJ1dHRvbihpZCwgcGF5bG9hZCkge1xuICAgIHZhciBjb21wb25lbnQgPSBfX2Fzc2lnbih7IGlkOiBpZCB9LCBGT09URVJfQlVUVE9OX1BST1BTKTtcbiAgICByZXR1cm4gQnV0dG9uXzEuY2xpY2tCdXR0b24odHlwZXNfMS5Hcm91cC5Nb2RhbCwgY29tcG9uZW50LCBwYXlsb2FkKTtcbn1cbmV4cG9ydHMuY2xpY2tGb290ZXJCdXR0b24gPSBjbGlja0Zvb3RlckJ1dHRvbjtcbmZ1bmN0aW9uIHVwZGF0ZShwYXlsb2FkKSB7XG4gICAgcmV0dXJuIGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoe1xuICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5Nb2RhbCxcbiAgICAgICAgdHlwZTogdHlwZXNfMi5BY3Rpb25UeXBlLlVQREFURSxcbiAgICB9KTtcbn1cbmV4cG9ydHMudXBkYXRlID0gdXBkYXRlO1xuZnVuY3Rpb24gZGF0YShwYXlsb2FkKSB7XG4gICAgcmV0dXJuIGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoe1xuICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5Nb2RhbCxcbiAgICAgICAgdHlwZTogdHlwZXNfMi5BY3Rpb25UeXBlLkRBVEEsXG4gICAgfSk7XG59XG5leHBvcnRzLmRhdGEgPSBkYXRhO1xuZnVuY3Rpb24gaXNJZnJhbWVNb2RhbChvcHRpb25zKSB7XG4gICAgcmV0dXJuICh0eXBlb2Ygb3B0aW9ucy51cmwgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgIHR5cGVvZiBvcHRpb25zLnBhdGggPT09ICdzdHJpbmcnKTtcbn1cbmV4cG9ydHMuaXNJZnJhbWVNb2RhbCA9IGlzSWZyYW1lTW9kYWw7XG5mdW5jdGlvbiBpc01lc3NhZ2VNb2RhbChvcHRpb25zKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvcHRpb25zLm1lc3NhZ2UgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0cy5pc01lc3NhZ2VNb2RhbCA9IGlzTWVzc2FnZU1vZGFsO1xudmFyIE1vZGFsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNb2RhbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNb2RhbCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNpemUgPSB0eXBlc18yLlNpemUuU21hbGw7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1vZGFsLnByb3RvdHlwZSwgXCJmb290ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5mb290ZXJQcmltYXJ5ICYmICF0aGlzLmZvb3RlclNlY29uZGFyeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeTogdGhpcy5mb290ZXJQcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnk6IHRoaXMuZm9vdGVyU2Vjb25kYXJ5LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1vZGFsLnByb3RvdHlwZSwgXCJmb290ZXJPcHRpb25zXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZm9vdGVyUHJpbWFyeU9wdGlvbnMgJiYgIXRoaXMuZm9vdGVyU2Vjb25kYXJ5T3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeTogdGhpcy5mb290ZXJQcmltYXJ5T3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5OiB0aGlzLmZvb3RlclNlY29uZGFyeU9wdGlvbnMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNb2RhbC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXBwLmRpc3BhdGNoKGNsb3NlTW9kYWwoeyBpZDogdGhpcy5pZCB9KSk7XG4gICAgfTtcbiAgICBNb2RhbC5wcm90b3R5cGUuc2V0Rm9vdGVyUHJpbWFyeUJ1dHRvbiA9IGZ1bmN0aW9uIChuZXdPcHRpb25zLCB1cGRhdGVDYikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3ViZ3JvdXBzID0gRk9PVEVSX0JVVFRPTl9QUk9QUy5zdWJncm91cHM7XG4gICAgICAgIHRoaXMuZm9vdGVyUHJpbWFyeU9wdGlvbnMgPSB0aGlzLmdldENoaWxkQnV0dG9uKG5ld09wdGlvbnMsIHRoaXMuZm9vdGVyUHJpbWFyeU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmZvb3RlclByaW1hcnkgPSB0aGlzLmZvb3RlclByaW1hcnlPcHRpb25zXG4gICAgICAgICAgICA/IGJ1dHRvbkhlbHBlcl8xLmdldFNpbmdsZUJ1dHRvbih0aGlzLCB0aGlzLmZvb3RlclByaW1hcnlPcHRpb25zLCBzdWJncm91cHMsIGZ1bmN0aW9uIChuZXdQYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlUHJpbWFyeUZvb3RlckJ1dHRvbihuZXdQYXlsb2FkLCB1cGRhdGVDYik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBNb2RhbC5wcm90b3R5cGUuc2V0Rm9vdGVyU2Vjb25kYXJ5QnV0dG9ucyA9IGZ1bmN0aW9uIChuZXdPcHRpb25zLCB1cGRhdGVDYikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3ViZ3JvdXBzID0gRk9PVEVSX0JVVFRPTl9QUk9QUy5zdWJncm91cHM7XG4gICAgICAgIHZhciBuZXdCdXR0b25zID0gbmV3T3B0aW9ucyB8fCBbXTtcbiAgICAgICAgdmFyIGN1cnJlbnRPcHRpb25zID0gKHRoaXMuZm9vdGVyT3B0aW9ucyAmJiB0aGlzLmZvb3Rlck9wdGlvbnMuYnV0dG9ucy5zZWNvbmRhcnkpIHx8IFtdO1xuICAgICAgICB0aGlzLmZvb3RlclNlY29uZGFyeU9wdGlvbnMgPSB0aGlzLmdldFVwZGF0ZWRDaGlsZEFjdGlvbnMobmV3QnV0dG9ucywgY3VycmVudE9wdGlvbnMpO1xuICAgICAgICB0aGlzLmZvb3RlclNlY29uZGFyeSA9IHRoaXMuZm9vdGVyU2Vjb25kYXJ5T3B0aW9uc1xuICAgICAgICAgICAgPyB0aGlzLmZvb3RlclNlY29uZGFyeU9wdGlvbnMubWFwKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnV0dG9uSGVscGVyXzEuZ2V0U2luZ2xlQnV0dG9uKF90aGlzLCBhY3Rpb24sIHN1Ymdyb3VwcywgZnVuY3Rpb24gKG5ld1BheWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlU2Vjb25kYXJ5Rm9vdGVyQnV0dG9uKG5ld1BheWxvYWQsIHVwZGF0ZUNiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIE1vZGFsLnByb3RvdHlwZS5nZXRDaGlsZEJ1dHRvbiA9IGZ1bmN0aW9uIChuZXdBY3Rpb24sIGN1cnJlbnRBY3Rpb24pIHtcbiAgICAgICAgdmFyIG5ld0J1dHRvbnMgPSBuZXdBY3Rpb24gPyBbbmV3QWN0aW9uXSA6IFtdO1xuICAgICAgICB2YXIgY3VycmVudEJ1dHRvbnMgPSBjdXJyZW50QWN0aW9uID8gW2N1cnJlbnRBY3Rpb25dIDogW107XG4gICAgICAgIHZhciB1cGRhdGVkQnV0dG9uID0gdGhpcy5nZXRVcGRhdGVkQ2hpbGRBY3Rpb25zKG5ld0J1dHRvbnMsIGN1cnJlbnRCdXR0b25zKTtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWRCdXR0b24gPyB1cGRhdGVkQnV0dG9uWzBdIDogdW5kZWZpbmVkO1xuICAgIH07XG4gICAgTW9kYWwucHJvdG90eXBlLnVwZGF0ZVByaW1hcnlGb290ZXJCdXR0b24gPSBmdW5jdGlvbiAobmV3UGF5bG9hZCwgdXBkYXRlQ2IpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZvb3RlciB8fCAhdGhpcy5mb290ZXIuYnV0dG9ucy5wcmltYXJ5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlbHBlcl8xLnVwZGF0ZUFjdGlvbkZyb21QYXlsb2FkKHRoaXMuZm9vdGVyLmJ1dHRvbnMucHJpbWFyeSwgbmV3UGF5bG9hZCkpIHtcbiAgICAgICAgICAgIHVwZGF0ZUNiKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1vZGFsLnByb3RvdHlwZS51cGRhdGVTZWNvbmRhcnlGb290ZXJCdXR0b24gPSBmdW5jdGlvbiAobmV3UGF5bG9hZCwgdXBkYXRlQ2IpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZvb3RlciB8fCAhdGhpcy5mb290ZXIuYnV0dG9ucyB8fCAhdGhpcy5mb290ZXIuYnV0dG9ucy5zZWNvbmRhcnkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXBkYXRlZDtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuZm9vdGVyLmJ1dHRvbnMuc2Vjb25kYXJ5OyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IF9hW19pXTtcbiAgICAgICAgICAgIHVwZGF0ZWQgPSBoZWxwZXJfMS51cGRhdGVBY3Rpb25Gcm9tUGF5bG9hZChhY3Rpb24sIG5ld1BheWxvYWQpO1xuICAgICAgICAgICAgaWYgKHVwZGF0ZWQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodXBkYXRlZCkge1xuICAgICAgICAgICAgdXBkYXRlQ2IoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1vZGFsO1xufShoZWxwZXJfMS5BY3Rpb25TZXRXaXRoQ2hpbGRyZW4pKTtcbmV4cG9ydHMuTW9kYWwgPSBNb2RhbDtcbnZhciBNb2RhbE1lc3NhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1vZGFsTWVzc2FnZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNb2RhbE1lc3NhZ2UoYXBwLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGFwcCwgdHlwZXNfMS5Hcm91cC5Nb2RhbCwgdHlwZXNfMS5Hcm91cC5Nb2RhbCkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2V0KG9wdGlvbnMsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTW9kYWxNZXNzYWdlLnByb3RvdHlwZSwgXCJwYXlsb2FkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucyksIHsgZm9vdGVyOiB0aGlzLmZvb3RlciwgaWQ6IHRoaXMuaWQgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTW9kYWxNZXNzYWdlLnByb3RvdHlwZSwgXCJvcHRpb25zXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGZvb3RlcjogdGhpcy5mb290ZXJPcHRpb25zLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgICAgICAgICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTW9kYWxNZXNzYWdlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAob3B0aW9ucywgc2hvdWxkVXBkYXRlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChzaG91bGRVcGRhdGUgPT09IHZvaWQgMCkgeyBzaG91bGRVcGRhdGUgPSB0cnVlOyB9XG4gICAgICAgIHZhciBtZXJnZWRPcHRpb25zID0gaGVscGVyXzEuZ2V0TWVyZ2VkUHJvcHModGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdmFyIHRpdGxlID0gbWVyZ2VkT3B0aW9ucy50aXRsZSwgZm9vdGVyID0gbWVyZ2VkT3B0aW9ucy5mb290ZXIsIG1lc3NhZ2UgPSBtZXJnZWRPcHRpb25zLm1lc3NhZ2UsIHNpemUgPSBtZXJnZWRPcHRpb25zLnNpemU7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5zZXRGb290ZXJQcmltYXJ5QnV0dG9uKGZvb3RlciA/IGZvb3Rlci5idXR0b25zLnByaW1hcnkgOiB1bmRlZmluZWQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmRpc3BhdGNoKHR5cGVzXzIuQWN0aW9uLlVQREFURSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldEZvb3RlclNlY29uZGFyeUJ1dHRvbnMoZm9vdGVyID8gZm9vdGVyLmJ1dHRvbnMuc2Vjb25kYXJ5IDogdW5kZWZpbmVkLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5kaXNwYXRjaCh0eXBlc18yLkFjdGlvbi5VUERBVEUpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaCh0eXBlc18yLkFjdGlvbi5VUERBVEUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgTW9kYWxNZXNzYWdlLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgdHlwZXNfMi5BY3Rpb24uT1BFTjpcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5kaXNwYXRjaChvcGVuTW9kYWwodGhpcy5wYXlsb2FkKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzXzIuQWN0aW9uLkNMT1NFOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXNfMi5BY3Rpb24uVVBEQVRFOlxuICAgICAgICAgICAgICAgIHRoaXMuYXBwLmRpc3BhdGNoKHVwZGF0ZSh0aGlzLnBheWxvYWQpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBNb2RhbE1lc3NhZ2U7XG59KE1vZGFsKSk7XG5leHBvcnRzLk1vZGFsTWVzc2FnZSA9IE1vZGFsTWVzc2FnZTtcbnZhciBNb2RhbElmcmFtZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTW9kYWxJZnJhbWUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTW9kYWxJZnJhbWUoYXBwLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGFwcCwgdHlwZXNfMS5Hcm91cC5Nb2RhbCwgdHlwZXNfMS5Hcm91cC5Nb2RhbCkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2V0KG9wdGlvbnMsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTW9kYWxJZnJhbWUucHJvdG90eXBlLCBcInBheWxvYWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5vcHRpb25zKSwgeyBmb290ZXI6IHRoaXMuZm9vdGVyLCBpZDogdGhpcy5pZCB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNb2RhbElmcmFtZS5wcm90b3R5cGUsIFwib3B0aW9uc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmb290ZXI6IHRoaXMuZm9vdGVyT3B0aW9ucyxcbiAgICAgICAgICAgICAgICBwYXRoOiB0aGlzLnBhdGgsXG4gICAgICAgICAgICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTW9kYWxJZnJhbWUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChvcHRpb25zLCBzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSA9PT0gdm9pZCAwKSB7IHNob3VsZFVwZGF0ZSA9IHRydWU7IH1cbiAgICAgICAgdmFyIG1lcmdlZE9wdGlvbnMgPSBoZWxwZXJfMS5nZXRNZXJnZWRQcm9wcyh0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB2YXIgdGl0bGUgPSBtZXJnZWRPcHRpb25zLnRpdGxlLCBmb290ZXIgPSBtZXJnZWRPcHRpb25zLmZvb3RlciwgcGF0aCA9IG1lcmdlZE9wdGlvbnMucGF0aCwgdXJsID0gbWVyZ2VkT3B0aW9ucy51cmwsIHNpemUgPSBtZXJnZWRPcHRpb25zLnNpemU7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMuc2V0Rm9vdGVyUHJpbWFyeUJ1dHRvbihmb290ZXIgPyBmb290ZXIuYnV0dG9ucy5wcmltYXJ5IDogdW5kZWZpbmVkLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5kaXNwYXRjaCh0eXBlc18yLkFjdGlvbi5VUERBVEUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRGb290ZXJTZWNvbmRhcnlCdXR0b25zKGZvb3RlciA/IGZvb3Rlci5idXR0b25zLnNlY29uZGFyeSA6IHVuZGVmaW5lZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuZGlzcGF0Y2godHlwZXNfMi5BY3Rpb24uVVBEQVRFKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2godHlwZXNfMi5BY3Rpb24uVVBEQVRFKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIE1vZGFsSWZyYW1lLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChhY3Rpb24sIHBheWxvYWQpIHtcbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgdHlwZXNfMi5BY3Rpb24uT1BFTjpcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5kaXNwYXRjaChvcGVuTW9kYWwodGhpcy5wYXlsb2FkKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzXzIuQWN0aW9uLkNMT1NFOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXNfMi5BY3Rpb24uVVBEQVRFOlxuICAgICAgICAgICAgICAgIHRoaXMuYXBwLmRpc3BhdGNoKHVwZGF0ZSh0aGlzLnBheWxvYWQpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXNfMi5BY3Rpb24uREFUQTpcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5kaXNwYXRjaChkYXRhKHBheWxvYWQgfHwge30pKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBNb2RhbElmcmFtZTtcbn0oTW9kYWwpKTtcbmV4cG9ydHMuTW9kYWxJZnJhbWUgPSBNb2RhbElmcmFtZTtcbmV4cG9ydHMuY3JlYXRlID0gZnVuY3Rpb24gKGFwcCwgb3B0aW9ucykge1xuICAgIGlmIChpc0lmcmFtZU1vZGFsKG9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiBuZXcgTW9kYWxJZnJhbWUoYXBwLCBvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBNb2RhbE1lc3NhZ2UoYXBwLCBvcHRpb25zKTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9hY3Rpb25zXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90eXBlc1wiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2l6ZSA9IGV4cG9ydHMuQWN0aW9uVHlwZSA9IGV4cG9ydHMuQWN0aW9uID0gdm9pZCAwO1xudmFyIEFjdGlvbjtcbihmdW5jdGlvbiAoQWN0aW9uKSB7XG4gICAgQWN0aW9uW1wiT1BFTlwiXSA9IFwiT1BFTlwiO1xuICAgIEFjdGlvbltcIkNMT1NFXCJdID0gXCJDTE9TRVwiO1xuICAgIEFjdGlvbltcIlVQREFURVwiXSA9IFwiVVBEQVRFXCI7XG4gICAgQWN0aW9uW1wiVVBEQVRFX1NJWkVcIl0gPSBcIlVQREFURV9TSVpFXCI7XG4gICAgQWN0aW9uW1wiREFUQVwiXSA9IFwiREFUQVwiO1xufSkoQWN0aW9uID0gZXhwb3J0cy5BY3Rpb24gfHwgKGV4cG9ydHMuQWN0aW9uID0ge30pKTtcbi8qKlxuICogQWN0aW9uIHR5cGVzIGZvciB0aGUgTW9kYWwgZ3JvdXBcbiAqIEBwdWJsaWNcbiAqL1xudmFyIEFjdGlvblR5cGU7XG4oZnVuY3Rpb24gKEFjdGlvblR5cGUpIHtcbiAgICBBY3Rpb25UeXBlW1wiT1BFTlwiXSA9IFwiQVBQOjpNT0RBTDo6T1BFTlwiO1xuICAgIEFjdGlvblR5cGVbXCJDTE9TRVwiXSA9IFwiQVBQOjpNT0RBTDo6Q0xPU0VcIjtcbiAgICBBY3Rpb25UeXBlW1wiVVBEQVRFXCJdID0gXCJBUFA6Ok1PREFMOjpVUERBVEVcIjtcbiAgICBBY3Rpb25UeXBlW1wiRk9PVEVSX0JVVFRPTl9DTElDS1wiXSA9IFwiQVBQOjpNT0RBTDo6Rk9PVEVSOjpCVVRUT046OkNMSUNLXCI7XG4gICAgQWN0aW9uVHlwZVtcIkZPT1RFUl9CVVRUT05fVVBEQVRFXCJdID0gXCJBUFA6Ok1PREFMOjpGT09URVI6OkJVVFRPTjo6VVBEQVRFXCI7XG4gICAgQWN0aW9uVHlwZVtcIlVQREFURV9TSVpFXCJdID0gXCJBUFA6Ok1PREFMOjpVUERBVEVfU0laRVwiO1xuICAgIEFjdGlvblR5cGVbXCJEQVRBXCJdID0gXCJBUFA6Ok1PREFMOjpEQVRBXCI7XG59KShBY3Rpb25UeXBlID0gZXhwb3J0cy5BY3Rpb25UeXBlIHx8IChleHBvcnRzLkFjdGlvblR5cGUgPSB7fSkpO1xuLyoqXG4gKiBPcHRpb25zIGF2YWlsYWJsZSB0byB0aGUgTW9kYWwgYHNpemVgIHBhcmFtXG4gKiBAcHVibGljXG4gKi9cbnZhciBTaXplO1xuKGZ1bmN0aW9uIChTaXplKSB7XG4gICAgLyoqIFNtYWxsIG1vZGFsIHNpemUgKi9cbiAgICBTaXplW1wiU21hbGxcIl0gPSBcInNtYWxsXCI7XG4gICAgLyoqIE1lZGl1bSBtb2RhbCBzaXplICovXG4gICAgU2l6ZVtcIk1lZGl1bVwiXSA9IFwibWVkaXVtXCI7XG4gICAgLyoqIExhcmdlIG1vZGFsIHNpemUgKHdpZGVyIHRoYW4gbWVkaXVtKSAqL1xuICAgIFNpemVbXCJMYXJnZVwiXSA9IFwibGFyZ2VcIjtcbiAgICAvKiogQGRlcHJlY2F0ZWQgYXMgb2YgMS42LjUgKi9cbiAgICBTaXplW1wiRnVsbFwiXSA9IFwiZnVsbFwiO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIGFzIG9mIDEuMTIueFxuICAgICAqIEByZW1hcmtzXG4gICAgICogVGhpcyBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZCBpbiBmYXZvdXIgb2YgdGhlIGBzZXRVcE1vZGFsQXV0b1NpemluZ2AgdXRpbGl0eS5cbiAgICAgKiBTZWUgYGFwcC1icmlkZ2UtdXRpbHNgIHBhY2thZ2UgZm9yIG1vcmUgaW5mb3JtYXRpb25cbiAgICAgKi9cbiAgICBTaXplW1wiQXV0b1wiXSA9IFwiYXV0b1wiO1xufSkoU2l6ZSA9IGV4cG9ydHMuU2l6ZSB8fCAoZXhwb3J0cy5TaXplID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGUgPSBleHBvcnRzLkhpc3RvcnkgPSBleHBvcnRzLnJlcGxhY2UgPSBleHBvcnRzLnB1c2ggPSB2b2lkIDA7XG52YXIgaGVscGVyXzEgPSByZXF1aXJlKFwiLi4vLi4vaGVscGVyXCIpO1xudmFyIHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XG52YXIgdHlwZXNfMiA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xuZnVuY3Rpb24gcHVzaChwYXlsb2FkKSB7XG4gICAgcmV0dXJuIGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoe1xuICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5OYXZpZ2F0aW9uLFxuICAgICAgICB0eXBlOiB0eXBlc18yLkFjdGlvblR5cGUuUFVTSCxcbiAgICB9KTtcbn1cbmV4cG9ydHMucHVzaCA9IHB1c2g7XG5mdW5jdGlvbiByZXBsYWNlKHBheWxvYWQpIHtcbiAgICByZXR1cm4gaGVscGVyXzEuYWN0aW9uV3JhcHBlcih7XG4gICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICAgIGdyb3VwOiB0eXBlc18xLkdyb3VwLk5hdmlnYXRpb24sXG4gICAgICAgIHR5cGU6IHR5cGVzXzIuQWN0aW9uVHlwZS5SRVBMQUNFLFxuICAgIH0pO1xufVxuZXhwb3J0cy5yZXBsYWNlID0gcmVwbGFjZTtcbnZhciBIaXN0b3J5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhIaXN0b3J5LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEhpc3RvcnkoYXBwKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBhcHAsICdIaXN0b3J5JywgdHlwZXNfMS5Hcm91cC5OYXZpZ2F0aW9uKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSGlzdG9yeS5wcm90b3R5cGUsIFwicGF5bG9hZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IHRoaXMuaWQgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEhpc3RvcnkucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24gKHR5cGUsIHBhdGgpIHtcbiAgICAgICAgdmFyIHBheWxvYWQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5wYXlsb2FkKSwgeyBwYXRoOiBwYXRoIH0pO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgdHlwZXNfMi5BY3Rpb24uUFVTSDpcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5kaXNwYXRjaChwdXNoKHBheWxvYWQpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZXNfMi5BY3Rpb24uUkVQTEFDRTpcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5kaXNwYXRjaChyZXBsYWNlKHBheWxvYWQpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBIaXN0b3J5O1xufShoZWxwZXJfMS5BY3Rpb25TZXQpKTtcbmV4cG9ydHMuSGlzdG9yeSA9IEhpc3Rvcnk7XG5mdW5jdGlvbiBjcmVhdGUoYXBwKSB7XG4gICAgcmV0dXJuIG5ldyBIaXN0b3J5KGFwcCk7XG59XG5leHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2FjdGlvbnNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3R5cGVzXCIpLCBleHBvcnRzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BY3Rpb24gPSBleHBvcnRzLkFjdGlvblR5cGUgPSB2b2lkIDA7XG52YXIgQWN0aW9uVHlwZTtcbihmdW5jdGlvbiAoQWN0aW9uVHlwZSkge1xuICAgIEFjdGlvblR5cGVbXCJQVVNIXCJdID0gXCJBUFA6Ok5BVklHQVRJT046OkhJU1RPUlk6OlBVU0hcIjtcbiAgICBBY3Rpb25UeXBlW1wiUkVQTEFDRVwiXSA9IFwiQVBQOjpOQVZJR0FUSU9OOjpISVNUT1JZOjpSRVBMQUNFXCI7XG59KShBY3Rpb25UeXBlID0gZXhwb3J0cy5BY3Rpb25UeXBlIHx8IChleHBvcnRzLkFjdGlvblR5cGUgPSB7fSkpO1xudmFyIEFjdGlvbjtcbihmdW5jdGlvbiAoQWN0aW9uKSB7XG4gICAgQWN0aW9uW1wiUFVTSFwiXSA9IFwiUFVTSFwiO1xuICAgIEFjdGlvbltcIlJFUExBQ0VcIl0gPSBcIlJFUExBQ0VcIjtcbn0pKEFjdGlvbiA9IGV4cG9ydHMuQWN0aW9uIHx8IChleHBvcnRzLkFjdGlvbiA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlID0gZXhwb3J0cy5SZWRpcmVjdCA9IGV4cG9ydHMuaXNSZW1vdGVQYXlsb2FkID0gZXhwb3J0cy5pc0FkbWluU2VjdGlvblBheWxvYWQgPSBleHBvcnRzLmlzQWRtaW5QYXRoUGF5bG9hZCA9IGV4cG9ydHMuaXNBcHBQYXlsb2FkID0gZXhwb3J0cy50b0Rlc3RpbmF0aW9uID0gZXhwb3J0cy50b0FwcCA9IGV4cG9ydHMudG9SZW1vdGUgPSBleHBvcnRzLnRvQWRtaW5TZWN0aW9uID0gZXhwb3J0cy50b0FkbWluUGF0aCA9IGV4cG9ydHMuaXNQcm9kdWN0VmFyaWFudENyZWF0ZVJlc291cmNlUGF5bG9hZCA9IGV4cG9ydHMuaXNQcm9kdWN0VmFyaWFudFJlc291cmNlUGF5bG9hZCA9IGV4cG9ydHMuaXNDcmVhdGVSZXNvdXJjZVBheWxvYWQgPSBleHBvcnRzLmlzUmVzb3VyY2VQYXlsb2FkID0gdm9pZCAwO1xudmFyIGhlbHBlcl8xID0gcmVxdWlyZShcIi4uLy4uL2hlbHBlclwiKTtcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4uLy4uL3R5cGVzXCIpO1xudmFyIHR5cGVzXzIgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcbmZ1bmN0aW9uIGlzUmVzb3VyY2VQYXlsb2FkKHJlc291cmNlKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJvb2xlYW4tbGl0ZXJhbC1jb21wYXJlXG4gICAgcmV0dXJuIHR5cGVvZiByZXNvdXJjZS5pZCA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzUmVzb3VyY2VQYXlsb2FkID0gaXNSZXNvdXJjZVBheWxvYWQ7XG5mdW5jdGlvbiBpc0NyZWF0ZVJlc291cmNlUGF5bG9hZChyZXNvdXJjZSkge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1ib29sZWFuLWxpdGVyYWwtY29tcGFyZVxuICAgIHJldHVybiByZXNvdXJjZS5jcmVhdGUgPT09IHRydWU7XG59XG5leHBvcnRzLmlzQ3JlYXRlUmVzb3VyY2VQYXlsb2FkID0gaXNDcmVhdGVSZXNvdXJjZVBheWxvYWQ7XG5mdW5jdGlvbiBpc1Byb2R1Y3RWYXJpYW50UmVzb3VyY2VQYXlsb2FkKHJlc291cmNlKSB7XG4gICAgdmFyIGNhc3RSZXNvdXJjZSA9IHJlc291cmNlO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1ib29sZWFuLWxpdGVyYWwtY29tcGFyZVxuICAgIHJldHVybiBjYXN0UmVzb3VyY2UuaWQgIT09IHVuZGVmaW5lZCAmJiBjYXN0UmVzb3VyY2UudmFyaWFudCAhPT0gdW5kZWZpbmVkO1xufVxuZXhwb3J0cy5pc1Byb2R1Y3RWYXJpYW50UmVzb3VyY2VQYXlsb2FkID0gaXNQcm9kdWN0VmFyaWFudFJlc291cmNlUGF5bG9hZDtcbmZ1bmN0aW9uIGlzUHJvZHVjdFZhcmlhbnRDcmVhdGVSZXNvdXJjZVBheWxvYWQocmVzb3VyY2UpIHtcbiAgICBpZiAoIWlzUHJvZHVjdFZhcmlhbnRSZXNvdXJjZVBheWxvYWQocmVzb3VyY2UpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQ3JlYXRlUmVzb3VyY2VQYXlsb2FkKHJlc291cmNlLnZhcmlhbnQpO1xufVxuZXhwb3J0cy5pc1Byb2R1Y3RWYXJpYW50Q3JlYXRlUmVzb3VyY2VQYXlsb2FkID0gaXNQcm9kdWN0VmFyaWFudENyZWF0ZVJlc291cmNlUGF5bG9hZDtcbmZ1bmN0aW9uIHRvQWRtaW5QYXRoKHBheWxvYWQpIHtcbiAgICByZXR1cm4gaGVscGVyXzEuYWN0aW9uV3JhcHBlcih7XG4gICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICAgIGdyb3VwOiB0eXBlc18xLkdyb3VwLk5hdmlnYXRpb24sXG4gICAgICAgIHR5cGU6IHR5cGVzXzIuQWN0aW9uVHlwZS5BRE1JTl9QQVRILFxuICAgIH0pO1xufVxuZXhwb3J0cy50b0FkbWluUGF0aCA9IHRvQWRtaW5QYXRoO1xuZnVuY3Rpb24gdG9BZG1pblNlY3Rpb24ocGF5bG9hZCkge1xuICAgIHJldHVybiBoZWxwZXJfMS5hY3Rpb25XcmFwcGVyKHtcbiAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgICAgZ3JvdXA6IHR5cGVzXzEuR3JvdXAuTmF2aWdhdGlvbixcbiAgICAgICAgdHlwZTogdHlwZXNfMi5BY3Rpb25UeXBlLkFETUlOX1NFQ1RJT04sXG4gICAgfSk7XG59XG5leHBvcnRzLnRvQWRtaW5TZWN0aW9uID0gdG9BZG1pblNlY3Rpb247XG5mdW5jdGlvbiB0b1JlbW90ZShwYXlsb2FkKSB7XG4gICAgcmV0dXJuIGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoe1xuICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5OYXZpZ2F0aW9uLFxuICAgICAgICB0eXBlOiB0eXBlc18yLkFjdGlvblR5cGUuUkVNT1RFLFxuICAgIH0pO1xufVxuZXhwb3J0cy50b1JlbW90ZSA9IHRvUmVtb3RlO1xuZnVuY3Rpb24gdG9BcHAocGF5bG9hZCkge1xuICAgIHJldHVybiBoZWxwZXJfMS5hY3Rpb25XcmFwcGVyKHtcbiAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgICAgZ3JvdXA6IHR5cGVzXzEuR3JvdXAuTmF2aWdhdGlvbixcbiAgICAgICAgdHlwZTogdHlwZXNfMi5BY3Rpb25UeXBlLkFQUCxcbiAgICB9KTtcbn1cbmV4cG9ydHMudG9BcHAgPSB0b0FwcDtcbmZ1bmN0aW9uIHRvRGVzdGluYXRpb24oYWN0aW9uLCBwYXlsb2FkLCBpZCkge1xuICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgIGNhc2UgdHlwZXNfMi5BY3Rpb24uQVBQOlxuICAgICAgICAgICAgdmFyIGFwcFBheWxvYWQgPSBpc0FwcFBheWxvYWQocGF5bG9hZCkgPyBwYXlsb2FkIDogeyBwYXRoOiBwYXlsb2FkIH07XG4gICAgICAgICAgICByZXR1cm4gdG9BcHAoX19hc3NpZ24oeyBpZDogaWQgfSwgYXBwUGF5bG9hZCkpO1xuICAgICAgICBjYXNlIHR5cGVzXzIuQWN0aW9uLkFETUlOX1BBVEg6XG4gICAgICAgICAgICB2YXIgYWRtaW5QYXRoUGF5bG9hZCA9IGlzQWRtaW5QYXRoUGF5bG9hZChwYXlsb2FkKSA/IHBheWxvYWQgOiB7IHBhdGg6IHBheWxvYWQgfTtcbiAgICAgICAgICAgIHJldHVybiB0b0FkbWluUGF0aChfX2Fzc2lnbih7IGlkOiBpZCB9LCBhZG1pblBhdGhQYXlsb2FkKSk7XG4gICAgICAgIGNhc2UgdHlwZXNfMi5BY3Rpb24uQURNSU5fU0VDVElPTjpcbiAgICAgICAgICAgIHZhciBhZG1pblNlY3Rpb25QYXlsb2FkID0gaXNBZG1pblNlY3Rpb25QYXlsb2FkKHBheWxvYWQpXG4gICAgICAgICAgICAgICAgPyBwYXlsb2FkXG4gICAgICAgICAgICAgICAgOiB7IHNlY3Rpb246IHBheWxvYWQgfTtcbiAgICAgICAgICAgIHJldHVybiB0b0FkbWluU2VjdGlvbihfX2Fzc2lnbih7IGlkOiBpZCB9LCBhZG1pblNlY3Rpb25QYXlsb2FkKSk7XG4gICAgICAgIGNhc2UgdHlwZXNfMi5BY3Rpb24uUkVNT1RFOlxuICAgICAgICAgICAgdmFyIHJlbW90ZVBheWxvYWQgPSBpc1JlbW90ZVBheWxvYWQocGF5bG9hZCkgPyBwYXlsb2FkIDogeyB1cmw6IHBheWxvYWQgfTtcbiAgICAgICAgICAgIHJldHVybiB0b1JlbW90ZShfX2Fzc2lnbih7IGlkOiBpZCB9LCByZW1vdGVQYXlsb2FkKSk7XG4gICAgfVxufVxuZXhwb3J0cy50b0Rlc3RpbmF0aW9uID0gdG9EZXN0aW5hdGlvbjtcbmZ1bmN0aW9uIGlzQXBwUGF5bG9hZChwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBwYXlsb2FkID09PSAnb2JqZWN0JyAmJiBwYXlsb2FkLmhhc093blByb3BlcnR5KCdwYXRoJyk7XG59XG5leHBvcnRzLmlzQXBwUGF5bG9hZCA9IGlzQXBwUGF5bG9hZDtcbmZ1bmN0aW9uIGlzQWRtaW5QYXRoUGF5bG9hZChwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBwYXlsb2FkID09PSAnb2JqZWN0JyAmJiBwYXlsb2FkLmhhc093blByb3BlcnR5KCdwYXRoJyk7XG59XG5leHBvcnRzLmlzQWRtaW5QYXRoUGF5bG9hZCA9IGlzQWRtaW5QYXRoUGF5bG9hZDtcbmZ1bmN0aW9uIGlzQWRtaW5TZWN0aW9uUGF5bG9hZChwYXlsb2FkKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgcGF5bG9hZCA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgdHlwZW9mIHBheWxvYWQuc2VjdGlvbiA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgcGF5bG9hZC5zZWN0aW9uLmhhc093blByb3BlcnR5KCduYW1lJykpO1xufVxuZXhwb3J0cy5pc0FkbWluU2VjdGlvblBheWxvYWQgPSBpc0FkbWluU2VjdGlvblBheWxvYWQ7XG5mdW5jdGlvbiBpc1JlbW90ZVBheWxvYWQocGF5bG9hZCkge1xuICAgIHJldHVybiB0eXBlb2YgcGF5bG9hZCA9PT0gJ29iamVjdCcgJiYgcGF5bG9hZC5oYXNPd25Qcm9wZXJ0eSgndXJsJyk7XG59XG5leHBvcnRzLmlzUmVtb3RlUGF5bG9hZCA9IGlzUmVtb3RlUGF5bG9hZDtcbnZhciBSZWRpcmVjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUmVkaXJlY3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUmVkaXJlY3QoYXBwKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBhcHAsICdSZWRpcmVjdCcsIHR5cGVzXzEuR3JvdXAuTmF2aWdhdGlvbikgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlZGlyZWN0LnByb3RvdHlwZSwgXCJwYXlsb2FkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4geyBpZDogdGhpcy5pZCB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgUmVkaXJlY3QucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24gKGFjdGlvbiwgcGF5bG9hZCkge1xuICAgICAgICB2YXIgcmVkaXJlY3RBY3Rpb24gPSB0b0Rlc3RpbmF0aW9uKGFjdGlvbiwgcGF5bG9hZCwgdGhpcy5wYXlsb2FkLmlkKTtcbiAgICAgICAgdGhpcy5hcHAuZGlzcGF0Y2gocmVkaXJlY3RBY3Rpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBSZWRpcmVjdDtcbn0oaGVscGVyXzEuQWN0aW9uU2V0KSk7XG5leHBvcnRzLlJlZGlyZWN0ID0gUmVkaXJlY3Q7XG5mdW5jdGlvbiBjcmVhdGUoYXBwKSB7XG4gICAgcmV0dXJuIG5ldyBSZWRpcmVjdChhcHApO1xufVxuZXhwb3J0cy5jcmVhdGUgPSBjcmVhdGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9hY3Rpb25zXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90eXBlc1wiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUmVzb3VyY2VUeXBlID0gZXhwb3J0cy5BY3Rpb25UeXBlID0gZXhwb3J0cy5BY3Rpb24gPSB2b2lkIDA7XG52YXIgQWN0aW9uO1xuKGZ1bmN0aW9uIChBY3Rpb24pIHtcbiAgICBBY3Rpb25bXCJBRE1JTl9QQVRIXCJdID0gXCJBRE1JTjo6UEFUSFwiO1xuICAgIEFjdGlvbltcIkFETUlOX1NFQ1RJT05cIl0gPSBcIkFETUlOOjpTRUNUSU9OXCI7XG4gICAgQWN0aW9uW1wiUkVNT1RFXCJdID0gXCJSRU1PVEVcIjtcbiAgICBBY3Rpb25bXCJBUFBcIl0gPSBcIkFQUFwiO1xufSkoQWN0aW9uID0gZXhwb3J0cy5BY3Rpb24gfHwgKGV4cG9ydHMuQWN0aW9uID0ge30pKTtcbnZhciBBY3Rpb25UeXBlO1xuKGZ1bmN0aW9uIChBY3Rpb25UeXBlKSB7XG4gICAgQWN0aW9uVHlwZVtcIkFETUlOX1NFQ1RJT05cIl0gPSBcIkFQUDo6TkFWSUdBVElPTjo6UkVESVJFQ1Q6OkFETUlOOjpTRUNUSU9OXCI7XG4gICAgQWN0aW9uVHlwZVtcIkFETUlOX1BBVEhcIl0gPSBcIkFQUDo6TkFWSUdBVElPTjo6UkVESVJFQ1Q6OkFETUlOOjpQQVRIXCI7XG4gICAgQWN0aW9uVHlwZVtcIlJFTU9URVwiXSA9IFwiQVBQOjpOQVZJR0FUSU9OOjpSRURJUkVDVDo6UkVNT1RFXCI7XG4gICAgQWN0aW9uVHlwZVtcIkFQUFwiXSA9IFwiQVBQOjpOQVZJR0FUSU9OOjpSRURJUkVDVDo6QVBQXCI7XG59KShBY3Rpb25UeXBlID0gZXhwb3J0cy5BY3Rpb25UeXBlIHx8IChleHBvcnRzLkFjdGlvblR5cGUgPSB7fSkpO1xudmFyIFJlc291cmNlVHlwZTtcbihmdW5jdGlvbiAoUmVzb3VyY2VUeXBlKSB7XG4gICAgUmVzb3VyY2VUeXBlW1wiUHJvZHVjdFwiXSA9IFwicHJvZHVjdHNcIjtcbiAgICBSZXNvdXJjZVR5cGVbXCJDb2xsZWN0aW9uXCJdID0gXCJjb2xsZWN0aW9uc1wiO1xuICAgIFJlc291cmNlVHlwZVtcIk9yZGVyXCJdID0gXCJvcmRlcnNcIjtcbiAgICBSZXNvdXJjZVR5cGVbXCJDdXN0b21lclwiXSA9IFwiY3VzdG9tZXJzXCI7XG4gICAgUmVzb3VyY2VUeXBlW1wiRGlzY291bnRcIl0gPSBcImRpc2NvdW50c1wiO1xufSkoUmVzb3VyY2VUeXBlID0gZXhwb3J0cy5SZXNvdXJjZVR5cGUgfHwgKGV4cG9ydHMuUmVzb3VyY2VUeXBlID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mdWxsUGFnZUxvYWQgPSBleHBvcnRzLnNrZWxldG9uUGFnZUxvYWQgPSBleHBvcnRzLkFjdGlvbiA9IGV4cG9ydHMuQWN0aW9uVHlwZSA9IHZvaWQgMDtcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpO1xudmFyIGhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlclwiKTtcbnZhciBBY3Rpb25UeXBlO1xuKGZ1bmN0aW9uIChBY3Rpb25UeXBlKSB7XG4gICAgQWN0aW9uVHlwZVtcIlNLRUxFVE9OX1BBR0VfTE9BRFwiXSA9IFwiQVBQOjpQRVJGT1JNQU5DRTo6U0tFTEVUT05fUEFHRV9MT0FEXCI7XG4gICAgQWN0aW9uVHlwZVtcIkZVTExfUEFHRV9MT0FEXCJdID0gXCJBUFA6OlBFUkZPUk1BTkNFOjpGVUxMX1BBR0VfTE9BRFwiO1xufSkoQWN0aW9uVHlwZSA9IGV4cG9ydHMuQWN0aW9uVHlwZSB8fCAoZXhwb3J0cy5BY3Rpb25UeXBlID0ge30pKTtcbnZhciBBY3Rpb247XG4oZnVuY3Rpb24gKEFjdGlvbikge1xuICAgIEFjdGlvbltcIlNLRUxFVE9OX1BBR0VfTE9BRFwiXSA9IFwiU0tFTEVUT05fUEFHRV9MT0FEXCI7XG4gICAgQWN0aW9uW1wiRlVMTF9QQUdFX0xPQURcIl0gPSBcIkZVTExfUEFHRV9MT0FEXCI7XG59KShBY3Rpb24gPSBleHBvcnRzLkFjdGlvbiB8fCAoZXhwb3J0cy5BY3Rpb24gPSB7fSkpO1xuZnVuY3Rpb24gc2tlbGV0b25QYWdlTG9hZCgpIHtcbiAgICByZXR1cm4gaGVscGVyXzEuYWN0aW9uV3JhcHBlcih7XG4gICAgICAgIGdyb3VwOiB0eXBlc18xLkdyb3VwLlBlcmZvcm1hbmNlLFxuICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLlNLRUxFVE9OX1BBR0VfTE9BRCxcbiAgICB9KTtcbn1cbmV4cG9ydHMuc2tlbGV0b25QYWdlTG9hZCA9IHNrZWxldG9uUGFnZUxvYWQ7XG5mdW5jdGlvbiBmdWxsUGFnZUxvYWQoKSB7XG4gICAgcmV0dXJuIGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoe1xuICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5QZXJmb3JtYW5jZSxcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5GVUxMX1BBR0VfTE9BRCxcbiAgICB9KTtcbn1cbmV4cG9ydHMuZnVsbFBhZ2VMb2FkID0gZnVsbFBhZ2VMb2FkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlID0gZXhwb3J0cy5Qb3MgPSBleHBvcnRzLmNsb3NlID0gZXhwb3J0cy5BY3Rpb25UeXBlID0gZXhwb3J0cy5BY3Rpb24gPSB2b2lkIDA7XG52YXIgaGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVyXCIpO1xudmFyIHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG52YXIgQWN0aW9uO1xuKGZ1bmN0aW9uIChBY3Rpb24pIHtcbiAgICBBY3Rpb25bXCJDTE9TRVwiXSA9IFwiQ0xPU0VcIjtcbn0pKEFjdGlvbiA9IGV4cG9ydHMuQWN0aW9uIHx8IChleHBvcnRzLkFjdGlvbiA9IHt9KSk7XG4vKipcbiAqIFBvcyBhY3Rpb24gdHlwZSBlbnVtXG4gKiBAcmVtYXJrcyBpbmNsdWRlcyB0aGUgYWN0aW9uIHByZWZpeCBhbmQgZ3JvdXBcbiAqXG4gKi9cbnZhciBBY3Rpb25UeXBlO1xuKGZ1bmN0aW9uIChBY3Rpb25UeXBlKSB7XG4gICAgQWN0aW9uVHlwZVtcIkNMT1NFXCJdID0gXCJBUFA6OlBPUzo6Q0xPU0VcIjtcbiAgICBBY3Rpb25UeXBlW1wiTE9DQVRJT05fVVBEQVRFXCJdID0gXCJBUFA6OlBPUzo6TE9DQVRJT046OlVQREFURVwiO1xuICAgIEFjdGlvblR5cGVbXCJVU0VSX1VQREFURVwiXSA9IFwiQVBQOjpQT1M6OlVTRVI6OlVQREFURVwiO1xuICAgIEFjdGlvblR5cGVbXCJERVZJQ0VfVVBEQVRFXCJdID0gXCJBUFA6OlBPUzo6REVWSUNFOjpVUERBVEVcIjtcbn0pKEFjdGlvblR5cGUgPSBleHBvcnRzLkFjdGlvblR5cGUgfHwgKGV4cG9ydHMuQWN0aW9uVHlwZSA9IHt9KSk7XG5mdW5jdGlvbiBjbG9zZSgpIHtcbiAgICByZXR1cm4gaGVscGVyXzEuYWN0aW9uV3JhcHBlcih7XG4gICAgICAgIGdyb3VwOiB0eXBlc18xLkdyb3VwLlBvcyxcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5DTE9TRSxcbiAgICB9KTtcbn1cbmV4cG9ydHMuY2xvc2UgPSBjbG9zZTtcbnZhciBQb3MgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFBvcywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBQb3MoYXBwKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBhcHAsIHR5cGVzXzEuR3JvdXAuUG9zLCB0eXBlc18xLkdyb3VwLlBvcykgfHwgdGhpcztcbiAgICB9XG4gICAgUG9zLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgQWN0aW9uVHlwZS5DTE9TRTpcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5kaXNwYXRjaChjbG9zZSgpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBQb3M7XG59KGhlbHBlcl8xLkFjdGlvblNldCkpO1xuZXhwb3J0cy5Qb3MgPSBQb3M7XG5mdW5jdGlvbiBjcmVhdGUoYXBwKSB7XG4gICAgcmV0dXJuIG5ldyBQb3MoYXBwKTtcbn1cbmV4cG9ydHMuY3JlYXRlID0gY3JlYXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFwcCA9IHZvaWQgMDtcbnZhciBoZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJcIik7XG52YXIgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcbnZhciB0eXBlc18yID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG5mdW5jdGlvbiBhcHAoKSB7XG4gICAgcmV0dXJuIGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoe1xuICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5QcmludCxcbiAgICAgICAgdHlwZTogdHlwZXNfMi5BY3Rpb25UeXBlLkFQUCxcbiAgICB9KTtcbn1cbmV4cG9ydHMuYXBwID0gYXBwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vYWN0aW9uc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdHlwZXNcIiksIGV4cG9ydHMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFjdGlvbiA9IGV4cG9ydHMuQWN0aW9uVHlwZSA9IHZvaWQgMDtcbnZhciBBY3Rpb25UeXBlO1xuKGZ1bmN0aW9uIChBY3Rpb25UeXBlKSB7XG4gICAgQWN0aW9uVHlwZVtcIkFQUFwiXSA9IFwiQVBQOjpQUklOVDo6QVBQXCI7XG59KShBY3Rpb25UeXBlID0gZXhwb3J0cy5BY3Rpb25UeXBlIHx8IChleHBvcnRzLkFjdGlvblR5cGUgPSB7fSkpO1xudmFyIEFjdGlvbjtcbihmdW5jdGlvbiAoQWN0aW9uKSB7XG4gICAgQWN0aW9uW1wiQVBQXCJdID0gXCJBUFBcIjtcbn0pKEFjdGlvbiA9IGV4cG9ydHMuQWN0aW9uIHx8IChleHBvcnRzLkFjdGlvbiA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlID0gZXhwb3J0cy5SZXNvdXJjZVBpY2tlciA9IGV4cG9ydHMudXBkYXRlID0gZXhwb3J0cy5jbG9zZSA9IGV4cG9ydHMuY2FuY2VsID0gZXhwb3J0cy5vcGVuID0gZXhwb3J0cy5zZWxlY3QgPSB2b2lkIDA7XG52YXIgaGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVyXCIpO1xudmFyIHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG52YXIgdHlwZXNfMiA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xuZnVuY3Rpb24gc2VsZWN0KHBheWxvYWQpIHtcbiAgICByZXR1cm4gaGVscGVyXzEuYWN0aW9uV3JhcHBlcih7XG4gICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICAgIGdyb3VwOiB0eXBlc18xLkdyb3VwLlJlc291cmNlUGlja2VyLFxuICAgICAgICB0eXBlOiB0eXBlc18yLkFjdGlvblR5cGUuU0VMRUNULFxuICAgIH0pO1xufVxuZXhwb3J0cy5zZWxlY3QgPSBzZWxlY3Q7XG5mdW5jdGlvbiBvcGVuKHBheWxvYWQpIHtcbiAgICByZXR1cm4gaGVscGVyXzEuYWN0aW9uV3JhcHBlcih7XG4gICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICAgIGdyb3VwOiB0eXBlc18xLkdyb3VwLlJlc291cmNlUGlja2VyLFxuICAgICAgICB0eXBlOiB0eXBlc18yLkFjdGlvblR5cGUuT1BFTixcbiAgICB9KTtcbn1cbmV4cG9ydHMub3BlbiA9IG9wZW47XG5mdW5jdGlvbiBjYW5jZWwocGF5bG9hZCkge1xuICAgIHJldHVybiBoZWxwZXJfMS5hY3Rpb25XcmFwcGVyKHtcbiAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgICAgZ3JvdXA6IHR5cGVzXzEuR3JvdXAuUmVzb3VyY2VQaWNrZXIsXG4gICAgICAgIHR5cGU6IHR5cGVzXzIuQWN0aW9uVHlwZS5DQU5DRUwsXG4gICAgfSk7XG59XG5leHBvcnRzLmNhbmNlbCA9IGNhbmNlbDtcbmZ1bmN0aW9uIGNsb3NlKHBheWxvYWQpIHtcbiAgICByZXR1cm4gaGVscGVyXzEuYWN0aW9uV3JhcHBlcih7XG4gICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICAgIGdyb3VwOiB0eXBlc18xLkdyb3VwLlJlc291cmNlUGlja2VyLFxuICAgICAgICB0eXBlOiB0eXBlc18yLkFjdGlvblR5cGUuQ0FOQ0VMLFxuICAgIH0pO1xufVxuZXhwb3J0cy5jbG9zZSA9IGNsb3NlO1xuZnVuY3Rpb24gdXBkYXRlKHBheWxvYWQpIHtcbiAgICByZXR1cm4gaGVscGVyXzEuYWN0aW9uV3JhcHBlcih7XG4gICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICAgIGdyb3VwOiB0eXBlc18xLkdyb3VwLlJlc291cmNlUGlja2VyLFxuICAgICAgICB0eXBlOiB0eXBlc18yLkFjdGlvblR5cGUuVVBEQVRFLFxuICAgIH0pO1xufVxuZXhwb3J0cy51cGRhdGUgPSB1cGRhdGU7XG52YXIgUmVzb3VyY2VQaWNrZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJlc291cmNlUGlja2VyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJlc291cmNlUGlja2VyKGFwcCwgb3B0aW9ucywgcmVzb3VyY2VUeXBlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGFwcCwgdHlwZXNfMS5Hcm91cC5SZXNvdXJjZVBpY2tlciwgdHlwZXNfMS5Hcm91cC5SZXNvdXJjZVBpY2tlcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaW5pdGlhbFNlbGVjdGlvbklkcyA9IFtdO1xuICAgICAgICBfdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICAgICAgX3RoaXMucmVzb3VyY2VUeXBlID0gcmVzb3VyY2VUeXBlO1xuICAgICAgICBfdGhpcy5zZXQob3B0aW9ucywgZmFsc2UpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZXNvdXJjZVBpY2tlci5wcm90b3R5cGUsIFwicGF5bG9hZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMpLCB7IGlkOiB0aGlzLmlkLCByZXNvdXJjZVR5cGU6IHRoaXMucmVzb3VyY2VUeXBlIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlc291cmNlUGlja2VyLnByb3RvdHlwZSwgXCJvcHRpb25zXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBpbml0aWFsUXVlcnk6IHRoaXMuaW5pdGlhbFF1ZXJ5LFxuICAgICAgICAgICAgICAgIHNlbGVjdE11bHRpcGxlOiB0aGlzLnNlbGVjdE11bHRpcGxlLFxuICAgICAgICAgICAgICAgIGluaXRpYWxTZWxlY3Rpb25JZHM6IHRoaXMuaW5pdGlhbFNlbGVjdGlvbklkcyxcbiAgICAgICAgICAgICAgICBzaG93SGlkZGVuOiB0aGlzLnNob3dIaWRkZW4sXG4gICAgICAgICAgICAgICAgYWN0aW9uVmVyYjogdGhpcy5hY3Rpb25WZXJiLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc291cmNlVHlwZSA9PT0gdHlwZXNfMi5SZXNvdXJjZVR5cGUuUHJvZHVjdCkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0T3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBzaG93VmFyaWFudHM6IHRoaXMuc2hvd1ZhcmlhbnRzLCBzaG93RHJhZnQ6IHRoaXMuc2hvd0RyYWZ0LCBzaG93QXJjaGl2ZWQ6IHRoaXMuc2hvd0FyY2hpdmVkLCBzaG93RHJhZnRCYWRnZTogdGhpcy5zaG93RHJhZnRCYWRnZSwgc2hvd0FyY2hpdmVkQmFkZ2U6IHRoaXMuc2hvd0FyY2hpdmVkQmFkZ2UgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3RPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBSZXNvdXJjZVBpY2tlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNob3VsZFVwZGF0ZSkge1xuICAgICAgICBpZiAoc2hvdWxkVXBkYXRlID09PSB2b2lkIDApIHsgc2hvdWxkVXBkYXRlID0gdHJ1ZTsgfVxuICAgICAgICB2YXIgbWVyZ2VkT3B0aW9ucyA9IGhlbHBlcl8xLmdldE1lcmdlZFByb3BzKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHZhciBpbml0aWFsUXVlcnkgPSBtZXJnZWRPcHRpb25zLmluaXRpYWxRdWVyeSwgX2EgPSBtZXJnZWRPcHRpb25zLmluaXRpYWxTZWxlY3Rpb25JZHMsIGluaXRpYWxTZWxlY3Rpb25JZHMgPSBfYSA9PT0gdm9pZCAwID8gW10gOiBfYSwgX2IgPSBtZXJnZWRPcHRpb25zLnNob3dIaWRkZW4sIHNob3dIaWRkZW4gPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG1lcmdlZE9wdGlvbnMuc2hvd1ZhcmlhbnRzLCBzaG93VmFyaWFudHMgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG1lcmdlZE9wdGlvbnMuc2hvd0RyYWZ0LCBzaG93RHJhZnQgPSBfZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9kLCBfZSA9IG1lcmdlZE9wdGlvbnMuc2hvd0FyY2hpdmVkLCBzaG93QXJjaGl2ZWQgPSBfZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9lLCBfZiA9IG1lcmdlZE9wdGlvbnMuc2hvd0RyYWZ0QmFkZ2UsIHNob3dEcmFmdEJhZGdlID0gX2YgPT09IHZvaWQgMCA/IGZhbHNlIDogX2YsIF9nID0gbWVyZ2VkT3B0aW9ucy5zaG93QXJjaGl2ZWRCYWRnZSwgc2hvd0FyY2hpdmVkQmFkZ2UgPSBfZyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfZywgX2ggPSBtZXJnZWRPcHRpb25zLnNlbGVjdE11bHRpcGxlLCBzZWxlY3RNdWx0aXBsZSA9IF9oID09PSB2b2lkIDAgPyB0cnVlIDogX2gsIF9qID0gbWVyZ2VkT3B0aW9ucy5hY3Rpb25WZXJiLCBhY3Rpb25WZXJiID0gX2ogPT09IHZvaWQgMCA/IHR5cGVzXzIuQWN0aW9uVmVyYi5BZGQgOiBfajtcbiAgICAgICAgdGhpcy5pbml0aWFsUXVlcnkgPSBpbml0aWFsUXVlcnk7XG4gICAgICAgIHRoaXMuaW5pdGlhbFNlbGVjdGlvbklkcyA9IGluaXRpYWxTZWxlY3Rpb25JZHM7XG4gICAgICAgIHRoaXMuc2hvd0hpZGRlbiA9IHNob3dIaWRkZW47XG4gICAgICAgIHRoaXMuc2hvd1ZhcmlhbnRzID0gc2hvd1ZhcmlhbnRzO1xuICAgICAgICB0aGlzLnNob3dEcmFmdCA9IHNob3dEcmFmdDtcbiAgICAgICAgdGhpcy5zaG93QXJjaGl2ZWQgPSBzaG93QXJjaGl2ZWQ7XG4gICAgICAgIHRoaXMuc2hvd0RyYWZ0QmFkZ2UgPSBzaG93RHJhZnRCYWRnZTtcbiAgICAgICAgdGhpcy5zaG93QXJjaGl2ZWRCYWRnZSA9IHNob3dBcmNoaXZlZEJhZGdlO1xuICAgICAgICB0aGlzLnNlbGVjdE11bHRpcGxlID0gc2VsZWN0TXVsdGlwbGU7XG4gICAgICAgIHRoaXMuYWN0aW9uVmVyYiA9IGFjdGlvblZlcmI7XG4gICAgICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBSZXNvdXJjZVBpY2tlci5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiAoYWN0aW9uLCBzZWxlY3Rpb24pIHtcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gdHlwZXNfMi5BY3Rpb24uT1BFTikge1xuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYWN0aW9uID09PSB0eXBlc18yLkFjdGlvbi5VUERBVEUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYWN0aW9uID09PSB0eXBlc18yLkFjdGlvbi5DTE9TRSB8fCBhY3Rpb24gPT09IHR5cGVzXzIuQWN0aW9uLkNBTkNFTCkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhY3Rpb24gPT09IHR5cGVzXzIuQWN0aW9uLlNFTEVDVCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBzZWxlY3Rpb247XG4gICAgICAgICAgICB0aGlzLmFwcC5kaXNwYXRjaChzZWxlY3QoeyBpZDogdGhpcy5pZCwgc2VsZWN0aW9uOiB0aGlzLnNlbGVjdGlvbiB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBSZXNvdXJjZVBpY2tlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFwcC5kaXNwYXRjaCh1cGRhdGUodGhpcy5wYXlsb2FkKSk7XG4gICAgfTtcbiAgICBSZXNvdXJjZVBpY2tlci5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hcHAuZGlzcGF0Y2gob3Blbih0aGlzLnBheWxvYWQpKTtcbiAgICB9O1xuICAgIFJlc291cmNlUGlja2VyLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYXBwLmRpc3BhdGNoKGNhbmNlbCh7IGlkOiB0aGlzLmlkIH0pKTtcbiAgICB9O1xuICAgIFJlc291cmNlUGlja2VyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9O1xuICAgIHJldHVybiBSZXNvdXJjZVBpY2tlcjtcbn0oaGVscGVyXzEuQWN0aW9uU2V0KSk7XG5leHBvcnRzLlJlc291cmNlUGlja2VyID0gUmVzb3VyY2VQaWNrZXI7XG5leHBvcnRzLmNyZWF0ZSA9IGZ1bmN0aW9uIChhcHAsIGJhc2VPcHRpb25zKSB7XG4gICAgdmFyIHJlc291cmNlVHlwZSA9IGJhc2VPcHRpb25zLnJlc291cmNlVHlwZSwgX2EgPSBiYXNlT3B0aW9ucy5vcHRpb25zLCBvcHRpb25zID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2E7XG4gICAgcmV0dXJuIG5ldyBSZXNvdXJjZVBpY2tlcihhcHAsIG9wdGlvbnMsIHJlc291cmNlVHlwZSk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vYWN0aW9uc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdHlwZXNcIiksIGV4cG9ydHMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFjdGlvblZlcmIgPSBleHBvcnRzLlJlc291cmNlVHlwZSA9IGV4cG9ydHMuUHJvZHVjdFN0YXR1cyA9IGV4cG9ydHMuUHJvZHVjdFZhcmlhbnRJbnZlbnRvcnlNYW5hZ2VtZW50ID0gZXhwb3J0cy5Qcm9kdWN0VmFyaWFudEludmVudG9yeVBvbGljeSA9IGV4cG9ydHMuV2VpZ2h0VW5pdCA9IGV4cG9ydHMuRnVsZmlsbG1lbnRTZXJ2aWNlVHlwZSA9IGV4cG9ydHMuQ29sbGVjdGlvblNvcnRPcmRlciA9IGV4cG9ydHMuQWN0aW9uVHlwZSA9IGV4cG9ydHMuQWN0aW9uID0gdm9pZCAwO1xudmFyIEFjdGlvbjtcbihmdW5jdGlvbiAoQWN0aW9uKSB7XG4gICAgQWN0aW9uW1wiT1BFTlwiXSA9IFwiT1BFTlwiO1xuICAgIEFjdGlvbltcIlNFTEVDVFwiXSA9IFwiU0VMRUNUXCI7XG4gICAgQWN0aW9uW1wiQ0xPU0VcIl0gPSBcIkNMT1NFXCI7XG4gICAgQWN0aW9uW1wiVVBEQVRFXCJdID0gXCJVUERBVEVcIjtcbiAgICBBY3Rpb25bXCJDQU5DRUxcIl0gPSBcIkNBTkNFTFwiO1xufSkoQWN0aW9uID0gZXhwb3J0cy5BY3Rpb24gfHwgKGV4cG9ydHMuQWN0aW9uID0ge30pKTtcbnZhciBBY3Rpb25UeXBlO1xuKGZ1bmN0aW9uIChBY3Rpb25UeXBlKSB7XG4gICAgQWN0aW9uVHlwZVtcIk9QRU5cIl0gPSBcIkFQUDo6UkVTT1VSQ0VfUElDS0VSOjpPUEVOXCI7XG4gICAgQWN0aW9uVHlwZVtcIlNFTEVDVFwiXSA9IFwiQVBQOjpSRVNPVVJDRV9QSUNLRVI6OlNFTEVDVFwiO1xuICAgIEFjdGlvblR5cGVbXCJDTE9TRVwiXSA9IFwiQVBQOjpSRVNPVVJDRV9QSUNLRVI6OkNMT1NFXCI7XG4gICAgQWN0aW9uVHlwZVtcIlVQREFURVwiXSA9IFwiQVBQOjpSRVNPVVJDRV9QSUNLRVI6OlVQREFURVwiO1xuICAgIEFjdGlvblR5cGVbXCJDQU5DRUxcIl0gPSBcIkFQUDo6UkVTT1VSQ0VfUElDS0VSOjpDQU5DRUxcIjtcbn0pKEFjdGlvblR5cGUgPSBleHBvcnRzLkFjdGlvblR5cGUgfHwgKGV4cG9ydHMuQWN0aW9uVHlwZSA9IHt9KSk7XG52YXIgQ29sbGVjdGlvblNvcnRPcmRlcjtcbihmdW5jdGlvbiAoQ29sbGVjdGlvblNvcnRPcmRlcikge1xuICAgIENvbGxlY3Rpb25Tb3J0T3JkZXJbXCJNYW51YWxcIl0gPSBcIk1BTlVBTFwiO1xuICAgIENvbGxlY3Rpb25Tb3J0T3JkZXJbXCJCZXN0U2VsbGluZ1wiXSA9IFwiQkVTVF9TRUxMSU5HXCI7XG4gICAgQ29sbGVjdGlvblNvcnRPcmRlcltcIkFscGhhQXNjXCJdID0gXCJBTFBIQV9BU0NcIjtcbiAgICBDb2xsZWN0aW9uU29ydE9yZGVyW1wiQWxwaGFEZXNjXCJdID0gXCJBTFBIQV9ERVNDXCI7XG4gICAgQ29sbGVjdGlvblNvcnRPcmRlcltcIlByaWNlRGVzY1wiXSA9IFwiUFJJQ0VfREVTQ1wiO1xuICAgIENvbGxlY3Rpb25Tb3J0T3JkZXJbXCJQcmljZUFzY1wiXSA9IFwiUFJJQ0VfQVNDXCI7XG4gICAgQ29sbGVjdGlvblNvcnRPcmRlcltcIkNyZWF0ZWREZXNjXCJdID0gXCJDUkVBVEVEX0RFU0NcIjtcbiAgICBDb2xsZWN0aW9uU29ydE9yZGVyW1wiQ3JlYXRlZFwiXSA9IFwiQ1JFQVRFRFwiO1xufSkoQ29sbGVjdGlvblNvcnRPcmRlciA9IGV4cG9ydHMuQ29sbGVjdGlvblNvcnRPcmRlciB8fCAoZXhwb3J0cy5Db2xsZWN0aW9uU29ydE9yZGVyID0ge30pKTtcbnZhciBGdWxmaWxsbWVudFNlcnZpY2VUeXBlO1xuKGZ1bmN0aW9uIChGdWxmaWxsbWVudFNlcnZpY2VUeXBlKSB7XG4gICAgRnVsZmlsbG1lbnRTZXJ2aWNlVHlwZVtcIkdpZnRDYXJkXCJdID0gXCJHSUZUX0NBUkRcIjtcbiAgICBGdWxmaWxsbWVudFNlcnZpY2VUeXBlW1wiTWFudWFsXCJdID0gXCJNQU5VQUxcIjtcbiAgICBGdWxmaWxsbWVudFNlcnZpY2VUeXBlW1wiVGhpcmRQYXJ0eVwiXSA9IFwiVEhJUkRfUEFSVFlcIjtcbn0pKEZ1bGZpbGxtZW50U2VydmljZVR5cGUgPSBleHBvcnRzLkZ1bGZpbGxtZW50U2VydmljZVR5cGUgfHwgKGV4cG9ydHMuRnVsZmlsbG1lbnRTZXJ2aWNlVHlwZSA9IHt9KSk7XG52YXIgV2VpZ2h0VW5pdDtcbihmdW5jdGlvbiAoV2VpZ2h0VW5pdCkge1xuICAgIFdlaWdodFVuaXRbXCJLaWxvZ3JhbXNcIl0gPSBcIktJTE9HUkFNU1wiO1xuICAgIFdlaWdodFVuaXRbXCJHcmFtc1wiXSA9IFwiR1JBTVNcIjtcbiAgICBXZWlnaHRVbml0W1wiUG91bmRzXCJdID0gXCJQT1VORFNcIjtcbiAgICBXZWlnaHRVbml0W1wiT3VuY2VzXCJdID0gXCJPVU5DRVNcIjtcbn0pKFdlaWdodFVuaXQgPSBleHBvcnRzLldlaWdodFVuaXQgfHwgKGV4cG9ydHMuV2VpZ2h0VW5pdCA9IHt9KSk7XG52YXIgUHJvZHVjdFZhcmlhbnRJbnZlbnRvcnlQb2xpY3k7XG4oZnVuY3Rpb24gKFByb2R1Y3RWYXJpYW50SW52ZW50b3J5UG9saWN5KSB7XG4gICAgUHJvZHVjdFZhcmlhbnRJbnZlbnRvcnlQb2xpY3lbXCJEZW55XCJdID0gXCJERU5ZXCI7XG4gICAgUHJvZHVjdFZhcmlhbnRJbnZlbnRvcnlQb2xpY3lbXCJDb250aW51ZVwiXSA9IFwiQ09OVElOVUVcIjtcbn0pKFByb2R1Y3RWYXJpYW50SW52ZW50b3J5UG9saWN5ID0gZXhwb3J0cy5Qcm9kdWN0VmFyaWFudEludmVudG9yeVBvbGljeSB8fCAoZXhwb3J0cy5Qcm9kdWN0VmFyaWFudEludmVudG9yeVBvbGljeSA9IHt9KSk7XG52YXIgUHJvZHVjdFZhcmlhbnRJbnZlbnRvcnlNYW5hZ2VtZW50O1xuKGZ1bmN0aW9uIChQcm9kdWN0VmFyaWFudEludmVudG9yeU1hbmFnZW1lbnQpIHtcbiAgICBQcm9kdWN0VmFyaWFudEludmVudG9yeU1hbmFnZW1lbnRbXCJTaG9waWZ5XCJdID0gXCJTSE9QSUZZXCI7XG4gICAgUHJvZHVjdFZhcmlhbnRJbnZlbnRvcnlNYW5hZ2VtZW50W1wiTm90TWFuYWdlZFwiXSA9IFwiTk9UX01BTkFHRURcIjtcbiAgICBQcm9kdWN0VmFyaWFudEludmVudG9yeU1hbmFnZW1lbnRbXCJGdWxmaWxsbWVudFNlcnZpY2VcIl0gPSBcIkZVTEZJTExNRU5UX1NFUlZJQ0VcIjtcbn0pKFByb2R1Y3RWYXJpYW50SW52ZW50b3J5TWFuYWdlbWVudCA9IGV4cG9ydHMuUHJvZHVjdFZhcmlhbnRJbnZlbnRvcnlNYW5hZ2VtZW50IHx8IChleHBvcnRzLlByb2R1Y3RWYXJpYW50SW52ZW50b3J5TWFuYWdlbWVudCA9IHt9KSk7XG52YXIgUHJvZHVjdFN0YXR1cztcbihmdW5jdGlvbiAoUHJvZHVjdFN0YXR1cykge1xuICAgIFByb2R1Y3RTdGF0dXNbXCJBY3RpdmVcIl0gPSBcIkFDVElWRVwiO1xuICAgIFByb2R1Y3RTdGF0dXNbXCJBcmNoaXZlZFwiXSA9IFwiQVJDSElWRURcIjtcbiAgICBQcm9kdWN0U3RhdHVzW1wiRHJhZnRcIl0gPSBcIkRSQUZUXCI7XG59KShQcm9kdWN0U3RhdHVzID0gZXhwb3J0cy5Qcm9kdWN0U3RhdHVzIHx8IChleHBvcnRzLlByb2R1Y3RTdGF0dXMgPSB7fSkpO1xudmFyIFJlc291cmNlVHlwZTtcbihmdW5jdGlvbiAoUmVzb3VyY2VUeXBlKSB7XG4gICAgUmVzb3VyY2VUeXBlW1wiUHJvZHVjdFwiXSA9IFwicHJvZHVjdFwiO1xuICAgIFJlc291cmNlVHlwZVtcIlByb2R1Y3RWYXJpYW50XCJdID0gXCJ2YXJpYW50XCI7XG4gICAgUmVzb3VyY2VUeXBlW1wiQ29sbGVjdGlvblwiXSA9IFwiY29sbGVjdGlvblwiO1xufSkoUmVzb3VyY2VUeXBlID0gZXhwb3J0cy5SZXNvdXJjZVR5cGUgfHwgKGV4cG9ydHMuUmVzb3VyY2VUeXBlID0ge30pKTtcbnZhciBBY3Rpb25WZXJiO1xuKGZ1bmN0aW9uIChBY3Rpb25WZXJiKSB7XG4gICAgQWN0aW9uVmVyYltcIkFkZFwiXSA9IFwiYWRkXCI7XG4gICAgQWN0aW9uVmVyYltcIlNlbGVjdFwiXSA9IFwic2VsZWN0XCI7XG59KShBY3Rpb25WZXJiID0gZXhwb3J0cy5BY3Rpb25WZXJiIHx8IChleHBvcnRzLkFjdGlvblZlcmIgPSB7fSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlID0gZXhwb3J0cy5TY2FubmVyID0gdm9pZCAwO1xudmFyIGhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlclwiKTtcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpO1xudmFyIHR5cGVzXzIgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcbi8qKlxuICogQSBzZXQgb2YgQWN0aW9ucyBmb3IgZGlzcGxheWluZyBhIENhbWVyYSBvciBORkMgU2Nhbm5lciBjb21wb25lbnRcbiAqIEBwdWJsaWNcbiAqL1xudmFyIFNjYW5uZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNjYW5uZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2Nhbm5lcihhcHAsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIGFwcCwgdHlwZXNfMS5Hcm91cC5TY2FubmVyLCB0eXBlc18xLkdyb3VwLlNjYW5uZXIsIG9wdGlvbnMgPyBvcHRpb25zLmlkIDogdW5kZWZpbmVkKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgU2Nhbm5lci5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIHR5cGVzXzIuQWN0aW9uLk9QRU5fQ0FNRVJBOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hTY2FubmVyQWN0aW9uKHR5cGVzXzIuQWN0aW9uVHlwZS5PUEVOX0NBTUVSQSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzXzIuQWN0aW9uLk9QRU5fTkZDOlxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hTY2FubmVyQWN0aW9uKHR5cGVzXzIuQWN0aW9uVHlwZS5PUEVOX05GQyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBTY2FubmVyLnByb3RvdHlwZS5kaXNwYXRjaFNjYW5uZXJBY3Rpb24gPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB0aGlzLmFwcC5kaXNwYXRjaChoZWxwZXJfMS5hY3Rpb25XcmFwcGVyKHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5TY2FubmVyLFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgcmV0dXJuIFNjYW5uZXI7XG59KGhlbHBlcl8xLkFjdGlvblNldCkpO1xuZXhwb3J0cy5TY2FubmVyID0gU2Nhbm5lcjtcbi8qKlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBjcmVhdGUoYXBwLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBTY2FubmVyKGFwcCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2FjdGlvbnNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3R5cGVzXCIpLCBleHBvcnRzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBBY3Rpb24gVHlwZXMgZm9yIHRoZSBGZWF0dXJlcyBncm91cFxuICogQHB1YmxpY1xuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFjdGlvbiA9IGV4cG9ydHMuQWN0aW9uVHlwZSA9IHZvaWQgMDtcbnZhciBBY3Rpb25UeXBlO1xuKGZ1bmN0aW9uIChBY3Rpb25UeXBlKSB7XG4gICAgQWN0aW9uVHlwZVtcIk9QRU5fQ0FNRVJBXCJdID0gXCJBUFA6OlNDQU5ORVI6Ok9QRU46OkNBTUVSQVwiO1xuICAgIEFjdGlvblR5cGVbXCJPUEVOX05GQ1wiXSA9IFwiQVBQOjpTQ0FOTkVSOjpPUEVOOjpORkNcIjtcbiAgICBBY3Rpb25UeXBlW1wiQ0FQVFVSRVwiXSA9IFwiQVBQOjpTQ0FOTkVSOjpDQVBUVVJFXCI7XG59KShBY3Rpb25UeXBlID0gZXhwb3J0cy5BY3Rpb25UeXBlIHx8IChleHBvcnRzLkFjdGlvblR5cGUgPSB7fSkpO1xuLyoqXG4gKiBBY3Rpb25zIGF2YWlsYWJsZSB0byB0aGUgRmVhdHVyZXMgZ3JvdXBcbiAqIEBwdWJsaWNcbiAqL1xudmFyIEFjdGlvbjtcbihmdW5jdGlvbiAoQWN0aW9uKSB7XG4gICAgQWN0aW9uW1wiT1BFTl9DQU1FUkFcIl0gPSBcIk9QRU46OkNBTUVSQVwiO1xuICAgIEFjdGlvbltcIk9QRU5fTkZDXCJdID0gXCJPUEVOOjpORkNcIjtcbiAgICBBY3Rpb25bXCJDQVBUVVJFXCJdID0gXCJDQVBUVVJFXCI7XG59KShBY3Rpb24gPSBleHBvcnRzLkFjdGlvbiB8fCAoZXhwb3J0cy5BY3Rpb24gPSB7fSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlc3BvbmQgPSBleHBvcnRzLnJlcXVlc3QgPSBleHBvcnRzLkFjdGlvbiA9IGV4cG9ydHMuQWN0aW9uVHlwZSA9IHZvaWQgMDtcbnZhciBoZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJcIik7XG52YXIgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcbnZhciBBY3Rpb25UeXBlO1xuKGZ1bmN0aW9uIChBY3Rpb25UeXBlKSB7XG4gICAgQWN0aW9uVHlwZVtcIlJFUVVFU1RcIl0gPSBcIkFQUDo6U0VTU0lPTl9UT0tFTjo6UkVRVUVTVFwiO1xuICAgIEFjdGlvblR5cGVbXCJSRVNQT05EXCJdID0gXCJBUFA6OlNFU1NJT05fVE9LRU46OlJFU1BPTkRcIjtcbn0pKEFjdGlvblR5cGUgPSBleHBvcnRzLkFjdGlvblR5cGUgfHwgKGV4cG9ydHMuQWN0aW9uVHlwZSA9IHt9KSk7XG52YXIgQWN0aW9uO1xuKGZ1bmN0aW9uIChBY3Rpb24pIHtcbiAgICBBY3Rpb25bXCJSRVFVRVNUXCJdID0gXCJSRVFVRVNUXCI7XG4gICAgQWN0aW9uW1wiUkVTUE9ORFwiXSA9IFwiUkVTUE9ORFwiO1xufSkoQWN0aW9uID0gZXhwb3J0cy5BY3Rpb24gfHwgKGV4cG9ydHMuQWN0aW9uID0ge30pKTtcbmZ1bmN0aW9uIHJlcXVlc3QoKSB7XG4gICAgcmV0dXJuIGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoe1xuICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5TZXNzaW9uVG9rZW4sXG4gICAgICAgIHR5cGU6IEFjdGlvblR5cGUuUkVRVUVTVCxcbiAgICB9KTtcbn1cbmV4cG9ydHMucmVxdWVzdCA9IHJlcXVlc3Q7XG5mdW5jdGlvbiByZXNwb25kKHNlc3Npb25Ub2tlbikge1xuICAgIHJldHVybiBoZWxwZXJfMS5hY3Rpb25XcmFwcGVyKHtcbiAgICAgICAgcGF5bG9hZDogc2Vzc2lvblRva2VuLFxuICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5TZXNzaW9uVG9rZW4sXG4gICAgICAgIHR5cGU6IEFjdGlvblR5cGUuUkVTUE9ORCxcbiAgICB9KTtcbn1cbmV4cG9ydHMucmVzcG9uZCA9IHJlc3BvbmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlID0gZXhwb3J0cy5TaGFyZSA9IGV4cG9ydHMuQWN0aW9uID0gZXhwb3J0cy5BY3Rpb25UeXBlID0gdm9pZCAwO1xudmFyIHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vdHlwZXNcIik7XG52YXIgaGVscGVyXzEgPSByZXF1aXJlKFwiLi4vaGVscGVyXCIpO1xuLyoqXG4gKiBUeXBlc1xuICovXG4vKipcbiAqIEBwdWJsaWNcbiAqL1xudmFyIEFjdGlvblR5cGU7XG4oZnVuY3Rpb24gKEFjdGlvblR5cGUpIHtcbiAgICBBY3Rpb25UeXBlW1wiU0hPV1wiXSA9IFwiQVBQOjpTSEFSRTo6U0hPV1wiO1xuICAgIEFjdGlvblR5cGVbXCJDTE9TRVwiXSA9IFwiQVBQOjpTSEFSRTo6Q0xPU0VcIjtcbn0pKEFjdGlvblR5cGUgPSBleHBvcnRzLkFjdGlvblR5cGUgfHwgKGV4cG9ydHMuQWN0aW9uVHlwZSA9IHt9KSk7XG4vKipcbiAqIEBwdWJsaWNcbiAqL1xudmFyIEFjdGlvbjtcbihmdW5jdGlvbiAoQWN0aW9uKSB7XG4gICAgQWN0aW9uW1wiU0hPV1wiXSA9IFwiU0hPV1wiO1xuICAgIEFjdGlvbltcIkNMT1NFXCJdID0gXCJDTE9TRVwiO1xufSkoQWN0aW9uID0gZXhwb3J0cy5BY3Rpb24gfHwgKGV4cG9ydHMuQWN0aW9uID0ge30pKTtcbi8qKlxuICogQWN0aW9uXG4gKi9cbi8qKlxuICogQSBzZXQgb2YgYWN0aW9ucyBmb3IgZGlzcGxheWluZyBhIFNoYXJlIFNoZWV0IGNvbXBvbmVudFxuICogQHB1YmxpY1xuICovXG52YXIgU2hhcmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNoYXJlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNoYXJlKGFwcCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgYXBwLCB0eXBlc18xLkdyb3VwLlNoYXJlLCB0eXBlc18xLkdyb3VwLlNoYXJlKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgU2hhcmUucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24gKGFjdGlvbiwgcGF5bG9hZCkge1xuICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBBY3Rpb24uU0hPVzpcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoU2hhcmVBY3Rpb24oQWN0aW9uVHlwZS5TSE9XLCBwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJBY3Rpb246IFwiICsgYWN0aW9uICsgXCIgbm90IHN1cHBvcnRlZFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgU2hhcmUucHJvdG90eXBlLmRpc3BhdGNoU2hhcmVBY3Rpb24gPSBmdW5jdGlvbiAoYWN0aW9uVHlwZSwgcGF5bG9hZCkge1xuICAgICAgICB0aGlzLmFwcC5kaXNwYXRjaChoZWxwZXJfMS5hY3Rpb25XcmFwcGVyKHtcbiAgICAgICAgICAgIHR5cGU6IGFjdGlvblR5cGUsXG4gICAgICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5TaGFyZSxcbiAgICAgICAgICAgIHBheWxvYWQ6IF9fYXNzaWduKHsgaWQ6IHRoaXMuaWQgfSwgcGF5bG9hZCksXG4gICAgICAgIH0pKTtcbiAgICB9O1xuICAgIHJldHVybiBTaGFyZTtcbn0oaGVscGVyXzEuQWN0aW9uU2V0KSk7XG5leHBvcnRzLlNoYXJlID0gU2hhcmU7XG4vKipcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlKGFwcCkge1xuICAgIHJldHVybiBuZXcgU2hhcmUoYXBwKTtcbn1cbmV4cG9ydHMuY3JlYXRlID0gY3JlYXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZSA9IGV4cG9ydHMuVGl0bGVCYXIgPSBleHBvcnRzLnVwZGF0ZSA9IGV4cG9ydHMuY2xpY2tCcmVhZGNydW1iID0gZXhwb3J0cy5jbGlja0FjdGlvbkJ1dHRvbiA9IHZvaWQgMDtcbnZhciBCdXR0b25fMSA9IHJlcXVpcmUoXCIuLi9CdXR0b25cIik7XG52YXIgQnV0dG9uR3JvdXBfMSA9IHJlcXVpcmUoXCIuLi9CdXR0b25Hcm91cFwiKTtcbnZhciBidXR0b25Hcm91cEhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2J1dHRvbkdyb3VwSGVscGVyXCIpO1xudmFyIGJ1dHRvbkhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2J1dHRvbkhlbHBlclwiKTtcbnZhciBoZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJcIik7XG52YXIgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi90eXBlc1wiKTtcbnZhciB0eXBlc18yID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG52YXIgVElUTEVCQVJfQlVUVE9OX1BST1BTID0ge1xuICAgIGdyb3VwOiB0eXBlc18xLkdyb3VwLlRpdGxlQmFyLFxuICAgIHN1Ymdyb3VwczogWydCdXR0b25zJ10sXG59O1xudmFyIEJSRUFEQ1JVTUJfQlVUVE9OX1BST1BTID0ge1xuICAgIGdyb3VwOiB0eXBlc18xLkdyb3VwLlRpdGxlQmFyLFxuICAgIHN1Ymdyb3VwczogWydCcmVhZGNydW1icyddLFxuICAgIHR5cGU6IHR5cGVzXzEuQ29tcG9uZW50VHlwZS5CdXR0b24sXG59O1xuZnVuY3Rpb24gY2xpY2tBY3Rpb25CdXR0b24oaWQsIHBheWxvYWQpIHtcbiAgICB2YXIgdHlwZSA9IHR5cGVzXzEuQ29tcG9uZW50VHlwZS5CdXR0b247XG4gICAgdmFyIGNvbXBvbmVudCA9IF9fYXNzaWduKHsgaWQ6IGlkLCB0eXBlOiB0eXBlIH0sIFRJVExFQkFSX0JVVFRPTl9QUk9QUyk7XG4gICAgcmV0dXJuIEJ1dHRvbl8xLmNsaWNrQnV0dG9uKHR5cGVzXzEuR3JvdXAuVGl0bGVCYXIsIGNvbXBvbmVudCwgcGF5bG9hZCk7XG59XG5leHBvcnRzLmNsaWNrQWN0aW9uQnV0dG9uID0gY2xpY2tBY3Rpb25CdXR0b247XG5mdW5jdGlvbiBjbGlja0JyZWFkY3J1bWIoaWQsIHBheWxvYWQpIHtcbiAgICB2YXIgY29tcG9uZW50ID0gX19hc3NpZ24oeyBpZDogaWQgfSwgQlJFQURDUlVNQl9CVVRUT05fUFJPUFMpO1xuICAgIHJldHVybiBCdXR0b25fMS5jbGlja0J1dHRvbih0eXBlc18xLkdyb3VwLlRpdGxlQmFyLCBjb21wb25lbnQsIHBheWxvYWQpO1xufVxuZXhwb3J0cy5jbGlja0JyZWFkY3J1bWIgPSBjbGlja0JyZWFkY3J1bWI7XG5mdW5jdGlvbiB1cGRhdGUocGF5bG9hZCkge1xuICAgIHJldHVybiBoZWxwZXJfMS5hY3Rpb25XcmFwcGVyKHtcbiAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgICAgZ3JvdXA6IHR5cGVzXzEuR3JvdXAuVGl0bGVCYXIsXG4gICAgICAgIHR5cGU6IHR5cGVzXzIuQWN0aW9uVHlwZS5VUERBVEUsXG4gICAgfSk7XG59XG5leHBvcnRzLnVwZGF0ZSA9IHVwZGF0ZTtcbnZhciBUaXRsZUJhciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVGl0bGVCYXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVGl0bGVCYXIoYXBwLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGFwcCwgdHlwZXNfMS5Hcm91cC5UaXRsZUJhciwgdHlwZXNfMS5Hcm91cC5UaXRsZUJhcikgfHwgdGhpcztcbiAgICAgICAgLy8gVHJpZ2dlciAndXBkYXRlJyBvbiBjcmVhdGlvblxuICAgICAgICBfdGhpcy5zZXQob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRpdGxlQmFyLnByb3RvdHlwZSwgXCJidXR0b25zXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucHJpbWFyeSAmJiAhdGhpcy5zZWNvbmRhcnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5OiB0aGlzLnByaW1hcnksXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5OiB0aGlzLnNlY29uZGFyeSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGl0bGVCYXIucHJvdG90eXBlLCBcImJ1dHRvbnNPcHRpb25zXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucHJpbWFyeU9wdGlvbnMgJiYgIXRoaXMuc2Vjb25kYXJ5T3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHByaW1hcnk6IHRoaXMucHJpbWFyeU9wdGlvbnMsXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5OiB0aGlzLnNlY29uZGFyeU9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRpdGxlQmFyLnByb3RvdHlwZSwgXCJvcHRpb25zXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGJyZWFkY3J1bWJzOiB0aGlzLmJyZWFkY3J1bWJzT3B0aW9uLFxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IHRoaXMuYnV0dG9uc09wdGlvbnMsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRpdGxlQmFyLnByb3RvdHlwZSwgXCJwYXlsb2FkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucyksIHsgYnJlYWRjcnVtYnM6IHRoaXMuYnJlYWRjcnVtYiwgYnV0dG9uczogdGhpcy5idXR0b25zLCBpZDogdGhpcy5pZCB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFRpdGxlQmFyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAob3B0aW9ucywgc2hvdWxkVXBkYXRlKSB7XG4gICAgICAgIGlmIChzaG91bGRVcGRhdGUgPT09IHZvaWQgMCkgeyBzaG91bGRVcGRhdGUgPSB0cnVlOyB9XG4gICAgICAgIHZhciBtZXJnZWRPcHRpb25zID0gaGVscGVyXzEuZ2V0TWVyZ2VkUHJvcHModGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdmFyIHRpdGxlID0gbWVyZ2VkT3B0aW9ucy50aXRsZSwgYnV0dG9ucyA9IG1lcmdlZE9wdGlvbnMuYnV0dG9ucywgYnJlYWRjcnVtYnMgPSBtZXJnZWRPcHRpb25zLmJyZWFkY3J1bWJzO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuc2V0QnJlYWRjcnVtYnMoYnJlYWRjcnVtYnMpO1xuICAgICAgICB0aGlzLnNldFByaW1hcnlCdXR0b24oYnV0dG9ucyA/IGJ1dHRvbnMucHJpbWFyeSA6IHVuZGVmaW5lZCk7XG4gICAgICAgIHRoaXMuc2V0U2Vjb25kYXJ5QnV0dG9uKGJ1dHRvbnMgPyBidXR0b25zLnNlY29uZGFyeSA6IHVuZGVmaW5lZCk7XG4gICAgICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2godHlwZXNfMi5BY3Rpb24uVVBEQVRFKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFRpdGxlQmFyLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgdHlwZXNfMi5BY3Rpb24uVVBEQVRFOlxuICAgICAgICAgICAgICAgIHRoaXMuYXBwLmRpc3BhdGNoKHVwZGF0ZSh0aGlzLnBheWxvYWQpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFRpdGxlQmFyLnByb3RvdHlwZS5nZXRCdXR0b24gPSBmdW5jdGlvbiAoYnV0dG9uLCBzdWJncm91cHMsIHVwZGF0ZUNiKSB7XG4gICAgICAgIGlmIChidXR0b24gaW5zdGFuY2VvZiBCdXR0b25Hcm91cF8xLkJ1dHRvbkdyb3VwKSB7XG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uR3JvdXBIZWxwZXJfMS5nZXRHcm91cGVkQnV0dG9uKHRoaXMsIGJ1dHRvbiwgc3ViZ3JvdXBzLCB1cGRhdGVDYik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1dHRvbkhlbHBlcl8xLmdldFNpbmdsZUJ1dHRvbih0aGlzLCBidXR0b24sIHN1Ymdyb3VwcywgdXBkYXRlQ2IpO1xuICAgIH07XG4gICAgVGl0bGVCYXIucHJvdG90eXBlLnVwZGF0ZVByaW1hcnlCdXR0b24gPSBmdW5jdGlvbiAobmV3UGF5bG9hZCkge1xuICAgICAgICBpZiAoIXRoaXMucHJpbWFyeSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoZWxwZXJfMS51cGRhdGVBY3Rpb25Gcm9tUGF5bG9hZCh0aGlzLnByaW1hcnksIG5ld1BheWxvYWQpKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoKHR5cGVzXzIuQWN0aW9uLlVQREFURSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRpdGxlQmFyLnByb3RvdHlwZS51cGRhdGVTZWNvbmRhcnlCdXR0b25zID0gZnVuY3Rpb24gKG5ld1BheWxvYWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlY29uZGFyeSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBidXR0b25Ub1VwZGF0ZSA9IHRoaXMuc2Vjb25kYXJ5LmZpbmQoZnVuY3Rpb24gKGFjdGlvbikgeyByZXR1cm4gYWN0aW9uLmlkID09PSBuZXdQYXlsb2FkLmlkOyB9KTtcbiAgICAgICAgaWYgKCFidXR0b25Ub1VwZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1cGRhdGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChCdXR0b25Hcm91cF8xLmlzR3JvdXBlZEJ1dHRvblBheWxvYWQobmV3UGF5bG9hZCkpIHtcbiAgICAgICAgICAgIHVwZGF0ZWQgPSBoZWxwZXJfMS51cGRhdGVBY3Rpb25Gcm9tUGF5bG9hZChidXR0b25Ub1VwZGF0ZSwgbmV3UGF5bG9hZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB1cGRhdGVkID0gaGVscGVyXzEudXBkYXRlQWN0aW9uRnJvbVBheWxvYWQoYnV0dG9uVG9VcGRhdGUsIG5ld1BheWxvYWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1cGRhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoKHR5cGVzXzIuQWN0aW9uLlVQREFURSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRpdGxlQmFyLnByb3RvdHlwZS51cGRhdGVCcmVhZGNydW1iQnV0dG9uID0gZnVuY3Rpb24gKG5ld1BheWxvYWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJyZWFkY3J1bWIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGVscGVyXzEudXBkYXRlQWN0aW9uRnJvbVBheWxvYWQodGhpcy5icmVhZGNydW1iLCBuZXdQYXlsb2FkKSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaCh0eXBlc18yLkFjdGlvbi5VUERBVEUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUaXRsZUJhci5wcm90b3R5cGUuc2V0UHJpbWFyeUJ1dHRvbiA9IGZ1bmN0aW9uIChuZXdPcHRpb25zKSB7XG4gICAgICAgIHRoaXMucHJpbWFyeU9wdGlvbnMgPSB0aGlzLmdldENoaWxkQnV0dG9uKG5ld09wdGlvbnMsIHRoaXMucHJpbWFyeU9wdGlvbnMpO1xuICAgICAgICB0aGlzLnByaW1hcnkgPSB0aGlzLnByaW1hcnlPcHRpb25zXG4gICAgICAgICAgICA/IHRoaXMuZ2V0QnV0dG9uKHRoaXMucHJpbWFyeU9wdGlvbnMsIFRJVExFQkFSX0JVVFRPTl9QUk9QUy5zdWJncm91cHMsIHRoaXMudXBkYXRlUHJpbWFyeUJ1dHRvbilcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH07XG4gICAgVGl0bGVCYXIucHJvdG90eXBlLnNldFNlY29uZGFyeUJ1dHRvbiA9IGZ1bmN0aW9uIChuZXdPcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBuZXdCdXR0b25zID0gbmV3T3B0aW9ucyB8fCBbXTtcbiAgICAgICAgdmFyIGN1cnJlbnRCdXR0b25zID0gdGhpcy5zZWNvbmRhcnlPcHRpb25zIHx8IFtdO1xuICAgICAgICB0aGlzLnNlY29uZGFyeU9wdGlvbnMgPSB0aGlzLmdldFVwZGF0ZWRDaGlsZEFjdGlvbnMobmV3QnV0dG9ucywgY3VycmVudEJ1dHRvbnMpO1xuICAgICAgICB0aGlzLnNlY29uZGFyeSA9IHRoaXMuc2Vjb25kYXJ5T3B0aW9uc1xuICAgICAgICAgICAgPyB0aGlzLnNlY29uZGFyeU9wdGlvbnMubWFwKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuZ2V0QnV0dG9uKGFjdGlvbiwgVElUTEVCQVJfQlVUVE9OX1BST1BTLnN1Ymdyb3VwcywgX3RoaXMudXBkYXRlU2Vjb25kYXJ5QnV0dG9ucyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBUaXRsZUJhci5wcm90b3R5cGUuc2V0QnJlYWRjcnVtYnMgPSBmdW5jdGlvbiAoYnJlYWRjcnVtYikge1xuICAgICAgICB0aGlzLmJyZWFkY3J1bWJzT3B0aW9uID0gdGhpcy5nZXRDaGlsZEJ1dHRvbihicmVhZGNydW1iLCB0aGlzLmJyZWFkY3J1bWJzT3B0aW9uKTtcbiAgICAgICAgdGhpcy5icmVhZGNydW1iID0gdGhpcy5icmVhZGNydW1ic09wdGlvblxuICAgICAgICAgICAgPyB0aGlzLmdldEJ1dHRvbih0aGlzLmJyZWFkY3J1bWJzT3B0aW9uLCBCUkVBRENSVU1CX0JVVFRPTl9QUk9QUy5zdWJncm91cHMsIHRoaXMudXBkYXRlQnJlYWRjcnVtYkJ1dHRvbilcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH07XG4gICAgVGl0bGVCYXIucHJvdG90eXBlLmdldENoaWxkQnV0dG9uID0gZnVuY3Rpb24gKG5ld0FjdGlvbiwgY3VycmVudEFjdGlvbikge1xuICAgICAgICB2YXIgbmV3QnV0dG9ucyA9IG5ld0FjdGlvbiA/IFtuZXdBY3Rpb25dIDogW107XG4gICAgICAgIHZhciBjdXJyZW50QnV0dG9ucyA9IGN1cnJlbnRBY3Rpb24gPyBbY3VycmVudEFjdGlvbl0gOiBbXTtcbiAgICAgICAgdmFyIHVwZGF0ZWRCdXR0b24gPSB0aGlzLmdldFVwZGF0ZWRDaGlsZEFjdGlvbnMobmV3QnV0dG9ucywgY3VycmVudEJ1dHRvbnMpO1xuICAgICAgICByZXR1cm4gdXBkYXRlZEJ1dHRvbiA/IHVwZGF0ZWRCdXR0b25bMF0gOiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICByZXR1cm4gVGl0bGVCYXI7XG59KGhlbHBlcl8xLkFjdGlvblNldFdpdGhDaGlsZHJlbikpO1xuZXhwb3J0cy5UaXRsZUJhciA9IFRpdGxlQmFyO1xuZnVuY3Rpb24gY3JlYXRlKGFwcCwgb3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgVGl0bGVCYXIoYXBwLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY3JlYXRlID0gY3JlYXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vYWN0aW9uc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdHlwZXNcIiksIGV4cG9ydHMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFjdGlvblR5cGUgPSBleHBvcnRzLkFjdGlvbiA9IHZvaWQgMDtcbnZhciBBY3Rpb247XG4oZnVuY3Rpb24gKEFjdGlvbikge1xuICAgIEFjdGlvbltcIlVQREFURVwiXSA9IFwiVVBEQVRFXCI7XG59KShBY3Rpb24gPSBleHBvcnRzLkFjdGlvbiB8fCAoZXhwb3J0cy5BY3Rpb24gPSB7fSkpO1xudmFyIEFjdGlvblR5cGU7XG4oZnVuY3Rpb24gKEFjdGlvblR5cGUpIHtcbiAgICBBY3Rpb25UeXBlW1wiVVBEQVRFXCJdID0gXCJBUFA6OlRJVExFQkFSOjpVUERBVEVcIjtcbiAgICBBY3Rpb25UeXBlW1wiQlVUVE9OX0NMSUNLXCJdID0gXCJBUFA6OlRJVExFQkFSOjpCVVRUT05TOjpCVVRUT046OkNMSUNLXCI7XG4gICAgQWN0aW9uVHlwZVtcIkJVVFRPTl9VUERBVEVcIl0gPSBcIkFQUDo6VElUTEVCQVI6OkJVVFRPTlM6OkJVVFRPTjo6VVBEQVRFXCI7XG4gICAgQWN0aW9uVHlwZVtcIkJVVFRPTl9HUk9VUF9VUERBVEVcIl0gPSBcIkFQUDo6VElUTEVCQVI6OkJVVFRPTlM6OkJVVFRPTkdST1VQOjpVUERBVEVcIjtcbiAgICBBY3Rpb25UeXBlW1wiQlJFQURDUlVNQlNfQ0xJQ0tcIl0gPSBcIkFQUDo6VElUTEVCQVI6OkJSRUFEQ1JVTUJTOjpCVVRUT046OkNMSUNLXCI7XG4gICAgQWN0aW9uVHlwZVtcIkJSRUFEQ1JVTUJTX1VQREFURVwiXSA9IFwiQVBQOjpUSVRMRUJBUjo6QlJFQURDUlVNQlM6OkJVVFRPTjo6VVBEQVRFXCI7XG59KShBY3Rpb25UeXBlID0gZXhwb3J0cy5BY3Rpb25UeXBlIHx8IChleHBvcnRzLkFjdGlvblR5cGUgPSB7fSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZSA9IGV4cG9ydHMuVG9hc3QgPSBleHBvcnRzLmNsZWFyID0gZXhwb3J0cy5zaG93ID0gdm9pZCAwO1xudmFyIGhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlclwiKTtcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4uL3R5cGVzXCIpO1xudmFyIHR5cGVzXzIgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcbmZ1bmN0aW9uIHNob3codG9hc3RNZXNzYWdlKSB7XG4gICAgcmV0dXJuIGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoe1xuICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5Ub2FzdCxcbiAgICAgICAgcGF5bG9hZDogdG9hc3RNZXNzYWdlLFxuICAgICAgICB0eXBlOiB0eXBlc18yLkFjdGlvblR5cGUuU0hPVyxcbiAgICB9KTtcbn1cbmV4cG9ydHMuc2hvdyA9IHNob3c7XG5mdW5jdGlvbiBjbGVhcihwYXlsb2FkKSB7XG4gICAgcmV0dXJuIGhlbHBlcl8xLmFjdGlvbldyYXBwZXIoe1xuICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgICBncm91cDogdHlwZXNfMS5Hcm91cC5Ub2FzdCxcbiAgICAgICAgdHlwZTogdHlwZXNfMi5BY3Rpb25UeXBlLkNMRUFSLFxuICAgIH0pO1xufVxuZXhwb3J0cy5jbGVhciA9IGNsZWFyO1xudmFyIFRvYXN0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUb2FzdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUb2FzdChhcHAsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgYXBwLCB0eXBlc18xLkdyb3VwLlRvYXN0LCB0eXBlc18xLkdyb3VwLlRvYXN0KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5tZXNzYWdlID0gJyc7XG4gICAgICAgIF90aGlzLmR1cmF0aW9uID0gNTAwMDtcbiAgICAgICAgX3RoaXMuc2V0KG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUb2FzdC5wcm90b3R5cGUsIFwib3B0aW9uc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICBpc0Vycm9yOiB0aGlzLmlzRXJyb3IsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUb2FzdC5wcm90b3R5cGUsIFwicGF5bG9hZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKHsgaWQ6IHRoaXMuaWQgfSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFRvYXN0LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgbWVyZ2VkT3B0aW9ucyA9IGhlbHBlcl8xLmdldE1lcmdlZFByb3BzKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHZhciBtZXNzYWdlID0gbWVyZ2VkT3B0aW9ucy5tZXNzYWdlLCBkdXJhdGlvbiA9IG1lcmdlZE9wdGlvbnMuZHVyYXRpb24sIGlzRXJyb3IgPSBtZXJnZWRPcHRpb25zLmlzRXJyb3I7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgdGhpcy5pc0Vycm9yID0gaXNFcnJvcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBUb2FzdC5wcm90b3R5cGUuZGlzcGF0Y2ggPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIHR5cGVzXzIuQWN0aW9uLlNIT1c6XG4gICAgICAgICAgICAgICAgdmFyIG9wZW5BY3Rpb24gPSBzaG93KHRoaXMucGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuZGlzcGF0Y2gob3BlbkFjdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHR5cGVzXzIuQWN0aW9uLkNMRUFSOlxuICAgICAgICAgICAgICAgIHRoaXMuYXBwLmRpc3BhdGNoKGNsZWFyKHsgaWQ6IHRoaXMuaWQgfSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgcmV0dXJuIFRvYXN0O1xufShoZWxwZXJfMS5BY3Rpb25TZXQpKTtcbmV4cG9ydHMuVG9hc3QgPSBUb2FzdDtcbmZ1bmN0aW9uIGNyZWF0ZShhcHAsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFRvYXN0KGFwcCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2FjdGlvbnNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3R5cGVzXCIpLCBleHBvcnRzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BY3Rpb24gPSBleHBvcnRzLkFjdGlvblR5cGUgPSB2b2lkIDA7XG52YXIgQWN0aW9uVHlwZTtcbihmdW5jdGlvbiAoQWN0aW9uVHlwZSkge1xuICAgIEFjdGlvblR5cGVbXCJTSE9XXCJdID0gXCJBUFA6OlRPQVNUOjpTSE9XXCI7XG4gICAgQWN0aW9uVHlwZVtcIkNMRUFSXCJdID0gXCJBUFA6OlRPQVNUOjpDTEVBUlwiO1xufSkoQWN0aW9uVHlwZSA9IGV4cG9ydHMuQWN0aW9uVHlwZSB8fCAoZXhwb3J0cy5BY3Rpb25UeXBlID0ge30pKTtcbnZhciBBY3Rpb247XG4oZnVuY3Rpb24gKEFjdGlvbikge1xuICAgIEFjdGlvbltcIlNIT1dcIl0gPSBcIlNIT1dcIjtcbiAgICBBY3Rpb25bXCJDTEVBUlwiXSA9IFwiQ0xFQVJcIjtcbn0pKEFjdGlvbiA9IGV4cG9ydHMuQWN0aW9uIHx8IChleHBvcnRzLkFjdGlvbiA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0R3JvdXBlZEJ1dHRvbiA9IHZvaWQgMDtcbnZhciBCdXR0b25Hcm91cF8xID0gcmVxdWlyZShcIi4vQnV0dG9uR3JvdXBcIik7XG5mdW5jdGlvbiBnZXRHcm91cGVkQnV0dG9uKGFjdGlvbiwgYnV0dG9uLCBzdWJncm91cHMsIHVwZGF0ZUNiKSB7XG4gICAgYWN0aW9uLmFkZENoaWxkKGJ1dHRvbiwgYWN0aW9uLmdyb3VwLCBzdWJncm91cHMpO1xuICAgIHZhciBpZCA9IGJ1dHRvbi5pZCwgbGFiZWwgPSBidXR0b24ubGFiZWwsIGRpc2FibGVkID0gYnV0dG9uLmRpc2FibGVkLCBidXR0b25zID0gYnV0dG9uLmJ1dHRvbnM7XG4gICAgYWN0aW9uLnN1YnNjcmliZVRvQ2hpbGQoYnV0dG9uLCBCdXR0b25Hcm91cF8xLkFjdGlvbi5VUERBVEUsIHVwZGF0ZUNiKTtcbiAgICByZXR1cm4geyBpZDogaWQsIGxhYmVsOiBsYWJlbCwgYnV0dG9uczogYnV0dG9ucywgZGlzYWJsZWQ6IGRpc2FibGVkIH07XG59XG5leHBvcnRzLmdldEdyb3VwZWRCdXR0b24gPSBnZXRHcm91cGVkQnV0dG9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldFNpbmdsZUJ1dHRvbiA9IHZvaWQgMDtcbnZhciBCdXR0b25fMSA9IHJlcXVpcmUoXCIuL0J1dHRvblwiKTtcbmZ1bmN0aW9uIGdldFNpbmdsZUJ1dHRvbihhY3Rpb24sIGJ1dHRvbiwgc3ViZ3JvdXBzLCB1cGRhdGVDYikge1xuICAgIGFjdGlvbi5hZGRDaGlsZChidXR0b24sIGFjdGlvbi5ncm91cCwgc3ViZ3JvdXBzKTtcbiAgICBhY3Rpb24uc3Vic2NyaWJlVG9DaGlsZChidXR0b24sIEJ1dHRvbl8xLkFjdGlvbi5VUERBVEUsIHVwZGF0ZUNiKTtcbiAgICByZXR1cm4gYnV0dG9uLnBheWxvYWQ7XG59XG5leHBvcnRzLmdldFNpbmdsZUJ1dHRvbiA9IGdldFNpbmdsZUJ1dHRvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TRVBBUkFUT1IgPSBleHBvcnRzLlBSRUZJWCA9IHZvaWQgMDtcbmV4cG9ydHMuUFJFRklYID0gJ0FQUCc7XG5leHBvcnRzLlNFUEFSQVRPUiA9ICc6Oic7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgICAgcltrXSA9IGFbal07XG4gICAgcmV0dXJuIHI7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Ob25TbmFrZUNhc2VHcm91cCA9IGV4cG9ydHMuZmluZE1hdGNoSW5FbnVtID0gZXhwb3J0cy5mb3JFYWNoSW5FbnVtID0gZXhwb3J0cy5nZXRNZXJnZWRQcm9wcyA9IGV4cG9ydHMudXBkYXRlQWN0aW9uRnJvbVBheWxvYWQgPSBleHBvcnRzLkFjdGlvblNldFdpdGhDaGlsZHJlbiA9IGV4cG9ydHMuQWN0aW9uU2V0ID0gZXhwb3J0cy5pc1ZhbGlkT3B0aW9uYWxTdHJpbmcgPSBleHBvcnRzLmlzVmFsaWRPcHRpb25hbE51bWJlciA9IGV4cG9ydHMuZ2V0RXZlbnROYW1lU3BhY2UgPSBleHBvcnRzLmdldFZlcnNpb24gPSBleHBvcnRzLmFjdGlvbldyYXBwZXIgPSB2b2lkIDA7XG52YXIgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi9jbGllbnQvdHlwZXNcIik7XG52YXIgY29sbGVjdGlvbl8xID0gcmVxdWlyZShcIi4uL3V0aWwvY29sbGVjdGlvblwiKTtcbnZhciBFcnJvcl8xID0gcmVxdWlyZShcIi4vRXJyb3JcIik7XG52YXIgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XG52YXIgbWVyZ2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tZXJnZVwiKSk7XG52YXIgdHlwZXNfMiA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xudmFyIHV1aWRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi91dWlkXCIpKTtcbnZhciBwYWNrYWdlSnNvbiA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpO1xuZnVuY3Rpb24gYWN0aW9uV3JhcHBlcihhY3Rpb24pIHtcbiAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIGFjdGlvbiksIHsgdmVyc2lvbjogZ2V0VmVyc2lvbigpLCBjbGllbnRJbnRlcmZhY2U6IHtcbiAgICAgICAgICAgIG5hbWU6IHBhY2thZ2VKc29uLm5hbWUsXG4gICAgICAgICAgICB2ZXJzaW9uOiBnZXRWZXJzaW9uKCksXG4gICAgICAgIH0gfSk7XG59XG5leHBvcnRzLmFjdGlvbldyYXBwZXIgPSBhY3Rpb25XcmFwcGVyO1xuZnVuY3Rpb24gZ2V0VmVyc2lvbigpIHtcbiAgICByZXR1cm4gcGFja2FnZUpzb24udmVyc2lvbjtcbn1cbmV4cG9ydHMuZ2V0VmVyc2lvbiA9IGdldFZlcnNpb247XG4vKipcbiAqIFJldHVybnMgZnVsbCBldmVudCBuYW1lIHdpdGggcHJlZml4LCBncm91cCwgc3ViZ3JvdXBzIGFuZCB0eXBlIGZvcm1hdHRlZCB3aXRoIHNlcGFyYXRvcnNcbiAqIEBpbnRlcm5hbFxuICogKi9cbmZ1bmN0aW9uIGdldEV2ZW50TmFtZVNwYWNlKGdyb3VwLCBldmVudE5hbWUsIGNvbXBvbmVudCkge1xuICAgIHZhciBldmVudE5hbWVTcGFjZSA9IGdyb3VwVG9FdmVudE5hbWVTcGFjZShncm91cCk7XG4gICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICB2YXIgc3ViZ3JvdXBzXzEgPSBjb21wb25lbnQuc3ViZ3JvdXBzLCB0eXBlID0gY29tcG9uZW50LnR5cGU7XG4gICAgICAgIGlmIChzdWJncm91cHNfMSAmJiBzdWJncm91cHNfMS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBldmVudE5hbWVTcGFjZSArPSBldmVudE5hbWVTcGFjZS5sZW5ndGggPiAwID8gY29uc3RhbnRzXzEuU0VQQVJBVE9SIDogJyc7XG4gICAgICAgICAgICBzdWJncm91cHNfMS5mb3JFYWNoKGZ1bmN0aW9uIChzdWJncm91cCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBldmVudE5hbWVTcGFjZSArPSBcIlwiICsgc3ViZ3JvdXAudG9VcHBlckNhc2UoKSArIChpbmRleCA8IHN1Ymdyb3Vwc18xLmxlbmd0aCAtIDEgPyBjb25zdGFudHNfMS5TRVBBUkFUT1IgOiAnJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSAhPT0gZ3JvdXAgJiYgdHlwZSkge1xuICAgICAgICAgICAgZXZlbnROYW1lU3BhY2UgKz0gXCJcIiArIChldmVudE5hbWVTcGFjZS5sZW5ndGggPiAwID8gY29uc3RhbnRzXzEuU0VQQVJBVE9SIDogJycpICsgdHlwZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChldmVudE5hbWVTcGFjZSkge1xuICAgICAgICBldmVudE5hbWVTcGFjZSArPSBcIlwiICsgKGV2ZW50TmFtZVNwYWNlLmxlbmd0aCA+IDAgPyBjb25zdGFudHNfMS5TRVBBUkFUT1IgOiAnJykgKyBldmVudE5hbWUudG9VcHBlckNhc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCIgKyBjb25zdGFudHNfMS5QUkVGSVggKyBjb25zdGFudHNfMS5TRVBBUkFUT1IgKyBldmVudE5hbWVTcGFjZTtcbn1cbmV4cG9ydHMuZ2V0RXZlbnROYW1lU3BhY2UgPSBnZXRFdmVudE5hbWVTcGFjZTtcbmZ1bmN0aW9uIGlzVmFsaWRPcHRpb25hbE51bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzVmFsaWRPcHRpb25hbE51bWJlciA9IGlzVmFsaWRPcHRpb25hbE51bWJlcjtcbmZ1bmN0aW9uIGlzVmFsaWRPcHRpb25hbFN0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzVmFsaWRPcHRpb25hbFN0cmluZyA9IGlzVmFsaWRPcHRpb25hbFN0cmluZztcbnZhciBBY3Rpb25TZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQWN0aW9uU2V0KGFwcCwgdHlwZSwgZ3JvdXAsIGlkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmdyb3VwID0gZ3JvdXA7XG4gICAgICAgIHRoaXMuc3ViZ3JvdXBzID0gW107XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IFtdO1xuICAgICAgICBpZiAoIWFwcCkge1xuICAgICAgICAgICAgRXJyb3JfMS50aHJvd0Vycm9yKEVycm9yXzEuQWN0aW9uVHlwZS5JTlZBTElEX09QVElPTlMsICdNaXNzaW5nIHJlcXVpcmVkIGBhcHBgJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pZCA9IGlkIHx8IHV1aWRfMS5kZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZGVmYXVsdEdyb3VwID0gZ3JvdXA7XG4gICAgICAgIHZhciBkZWZhdWx0U2V0ID0gdGhpcy5zZXQ7XG4gICAgICAgIHRoaXMuc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFfdGhpcy5hcHAuaG9va3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdFNldC5hcHBseShfdGhpcywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKF9hID0gX3RoaXMuYXBwLmhvb2tzKS5ydW4uYXBwbHkoX2EsIF9fc3ByZWFkQXJyYXlzKFt0eXBlc18xLkxpZmVjeWNsZUhvb2suVXBkYXRlQWN0aW9uLCBkZWZhdWx0U2V0LCBfdGhpc10sIGFyZ3MpKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgQWN0aW9uU2V0LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBfW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBY3Rpb25TZXQucHJvdG90eXBlLCBcImNvbXBvbmVudFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgICAgICBzdWJncm91cHM6IHRoaXMuc3ViZ3JvdXBzLFxuICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBBY3Rpb25TZXQucHJvdG90eXBlLnVwZGF0ZVN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIChzdWJzY3JpcHRpb25Ub1JlbW92ZSwgZ3JvdXAsIHN1Ymdyb3Vwcykge1xuICAgICAgICB2YXIgZXZlbnRUeXBlID0gc3Vic2NyaXB0aW9uVG9SZW1vdmUuZXZlbnRUeXBlLCBjYWxsYmFjayA9IHN1YnNjcmlwdGlvblRvUmVtb3ZlLmNhbGxiYWNrLCBjb21wb25lbnQgPSBzdWJzY3JpcHRpb25Ub1JlbW92ZS5jb21wb25lbnQ7XG4gICAgICAgIHZhciBjdXJyZW50SW5kZXg7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IHRoaXMuc3Vic2NyaXB0aW9ucy5maW5kSW5kZXgoZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikgeyByZXR1cm4gc3Vic2NyaXB0aW9uID09PSBzdWJzY3JpcHRpb25Ub1JlbW92ZTsgfSk7XG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW2N1cnJlbnRJbmRleF0udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdyb3VwID0gZ3JvdXA7XG4gICAgICAgIHRoaXMuc3ViZ3JvdXBzID0gc3ViZ3JvdXBzO1xuICAgICAgICBPYmplY3QuYXNzaWduKGNvbXBvbmVudCwgeyBzdWJncm91cHM6IHRoaXMuc3ViZ3JvdXBzIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJzY3JpYmUoZXZlbnRUeXBlLCBjYWxsYmFjaywgY29tcG9uZW50LCBjdXJyZW50SW5kZXgpO1xuICAgIH07XG4gICAgQWN0aW9uU2V0LnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uSW5kaWNlcyA9IFtdO1xuICAgICAgICBmb3JFYWNoSW5FbnVtKEVycm9yXzEuQWN0aW9uLCBmdW5jdGlvbiAoZXZlbnROYW1lU3BhY2UpIHtcbiAgICAgICAgICAgIC8vIEtlZXAgdHJhY2sgb2Ygc3Vic2NyaXB0aW9uIGluZGV4IHNvIHdlIGNhbiBjYWxsIHVuc3Vic2NyaWJlIGxhdGVyXG4gICAgICAgICAgICAvLyBUaGlzIGVuc3VyZSBpdCB3aWxsIGNvbnRpbnVlIHRvIHdvcmsgZXZlbiB3aGVuIHRoZSBzdWJzY3JpcHRpb24gaGFzIGJlZW4gdXBkYXRlZFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uSW5kaWNlcy5wdXNoKF90aGlzLnN1YnNjcmlwdGlvbnMubGVuZ3RoKTtcbiAgICAgICAgICAgIF90aGlzLnN1YnNjcmliZShldmVudE5hbWVTcGFjZSwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb25zVG9SZW1vdmUgPSBzdWJzY3JpcHRpb25JbmRpY2VzLm1hcChmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIF90aGlzLnN1YnNjcmlwdGlvbnNbaW5kZXhdOyB9KTtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbnNUb1JlbW92ZS5mb3JFYWNoKGZ1bmN0aW9uICh0b1JlbW92ZSkge1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25fMS5yZW1vdmVGcm9tQ29sbGVjdGlvbihfdGhpcy5zdWJzY3JpcHRpb25zLCB0b1JlbW92ZSwgZnVuY3Rpb24gKHJlbW92ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZC51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBBY3Rpb25TZXQucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGNhbGxiYWNrLCBjb21wb25lbnQsIGN1cnJlbnRJbmRleCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZXZlbnRDb21wb25lbnQgPSBjb21wb25lbnQgfHwgdGhpcy5jb21wb25lbnQ7XG4gICAgICAgIHZhciBldmVudFR5cGUgPSBldmVudE5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgdmFyIGJvdW5kZWRDYWxsYmFjayA9IHR5cGVvZiBjdXJyZW50SW5kZXggPT09ICdudW1iZXInID8gY2FsbGJhY2sgOiBjYWxsYmFjay5iaW5kKHRoaXMpO1xuICAgICAgICB2YXIgZXZlbnROYW1lU3BhY2U7XG4gICAgICAgIGlmIChFcnJvcl8xLmlzRXJyb3JFdmVudE5hbWUoZXZlbnROYW1lKSkge1xuICAgICAgICAgICAgZXZlbnROYW1lU3BhY2UgPSBnZXRFdmVudE5hbWVTcGFjZSh0eXBlc18yLkdyb3VwLkVycm9yLCBldmVudE5hbWUsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBldmVudENvbXBvbmVudCksIHsgdHlwZTogJycgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnROYW1lU3BhY2UgPSBnZXRFdmVudE5hbWVTcGFjZSh0aGlzLmdyb3VwLCBldmVudE5hbWUsIGV2ZW50Q29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSB0aGlzLmFwcC5zdWJzY3JpYmUoZXZlbnROYW1lU3BhY2UsIGJvdW5kZWRDYWxsYmFjaywgY29tcG9uZW50ID8gY29tcG9uZW50LmlkIDogdGhpcy5pZCk7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSB7XG4gICAgICAgICAgICBldmVudFR5cGU6IGV2ZW50VHlwZSxcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBib3VuZGVkQ2FsbGJhY2ssXG4gICAgICAgICAgICBjb21wb25lbnQ6IGV2ZW50Q29tcG9uZW50LFxuICAgICAgICAgICAgdXBkYXRlU3Vic2NyaWJlOiBmdW5jdGlvbiAoZ3JvdXAsIHN1Ymdyb3Vwcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy51cGRhdGVTdWJzY3JpcHRpb24uY2FsbChfdGhpcywgc3Vic2NyaXB0aW9uLCBncm91cCwgc3ViZ3JvdXBzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0eXBlb2YgY3VycmVudEluZGV4ID09PSAnbnVtYmVyJyAmJlxuICAgICAgICAgICAgY3VycmVudEluZGV4ID49IDAgJiZcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCA8IHRoaXMuc3Vic2NyaXB0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1tjdXJyZW50SW5kZXhdID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5zdWJzY3JpYmU7XG4gICAgfTtcbiAgICBBY3Rpb25TZXQucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKHJlc2V0T25seSkge1xuICAgICAgICBpZiAocmVzZXRPbmx5ID09PSB2b2lkIDApIHsgcmVzZXRPbmx5ID0gZmFsc2U7IH1cbiAgICAgICAgdW5zdWJzY3JpYmVBY3Rpb25zKHRoaXMuc3Vic2NyaXB0aW9ucywgdGhpcy5kZWZhdWx0R3JvdXAsIHJlc2V0T25seSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgcmV0dXJuIEFjdGlvblNldDtcbn0oKSk7XG5leHBvcnRzLkFjdGlvblNldCA9IEFjdGlvblNldDtcbnZhciBBY3Rpb25TZXRXaXRoQ2hpbGRyZW4gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFjdGlvblNldFdpdGhDaGlsZHJlbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBY3Rpb25TZXRXaXRoQ2hpbGRyZW4oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEFjdGlvblNldFdpdGhDaGlsZHJlbi5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAodW5zdWJzY3JpYmVDaGlsZHJlbiwgcmVzZXRQYXJlbnRPbmx5KSB7XG4gICAgICAgIGlmICh1bnN1YnNjcmliZUNoaWxkcmVuID09PSB2b2lkIDApIHsgdW5zdWJzY3JpYmVDaGlsZHJlbiA9IHRydWU7IH1cbiAgICAgICAgaWYgKHJlc2V0UGFyZW50T25seSA9PT0gdm9pZCAwKSB7IHJlc2V0UGFyZW50T25seSA9IGZhbHNlOyB9XG4gICAgICAgIHVuc3Vic2NyaWJlQWN0aW9ucyh0aGlzLnN1YnNjcmlwdGlvbnMsIHRoaXMuZGVmYXVsdEdyb3VwLCByZXNldFBhcmVudE9ubHkpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoQWN0aW9uU2V0V2l0aENoaWxkcmVuLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIGNoaWxkLnVuc3Vic2NyaWJlKHVuc3Vic2NyaWJlQ2hpbGRyZW4sICF1bnN1YnNjcmliZUNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoaWxkLnVuc3Vic2NyaWJlKCF1bnN1YnNjcmliZUNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgQWN0aW9uU2V0V2l0aENoaWxkcmVuLnByb3RvdHlwZS5nZXRDaGlsZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgY2hpbGRJbmRleCA9IHRoaXMuY2hpbGRyZW4uZmluZEluZGV4KGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQuaWQgPT09IGlkOyB9KTtcbiAgICAgICAgcmV0dXJuIGNoaWxkSW5kZXggPj0gMCA/IHRoaXMuY2hpbGRyZW5bY2hpbGRJbmRleF0gOiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBBY3Rpb25TZXRXaXRoQ2hpbGRyZW4ucHJvdG90eXBlLmdldENoaWxkSW5kZXggPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uZmluZEluZGV4KGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQuaWQgPT09IGlkOyB9KTtcbiAgICB9O1xuICAgIEFjdGlvblNldFdpdGhDaGlsZHJlbi5wcm90b3R5cGUuZ2V0Q2hpbGRTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gKGlkLCBldmVudFR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3Vic2NyaXB0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKHN1YikgeyByZXR1cm4gc3ViLmNvbXBvbmVudC5pZCA9PT0gaWQgJiYgKCFldmVudFR5cGUgfHwgZXZlbnRUeXBlID09PSBzdWIuZXZlbnRUeXBlKTsgfSk7XG4gICAgfTtcbiAgICBBY3Rpb25TZXRXaXRoQ2hpbGRyZW4ucHJvdG90eXBlLmFkZENoaWxkID0gZnVuY3Rpb24gKGNoaWxkLCBncm91cCwgc3ViZ3JvdXBzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb25zID0gY2hpbGQuc3Vic2NyaXB0aW9ucztcbiAgICAgICAgdmFyIGV4aXN0aW5nQ2hpbGQgPSB0aGlzLmdldENoaWxkKGNoaWxkLmlkKTtcbiAgICAgICAgLy8gQWRkIGNoaWxkIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdFxuICAgICAgICBpZiAoIWV4aXN0aW5nQ2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdWJzY3JpcHRpb25zIHx8IChncm91cCA9PT0gY2hpbGQuZ3JvdXAgJiYgc3ViZ3JvdXBzID09PSBjaGlsZC5zdWJncm91cHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBzdWJzY3JpcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdmFyIHVwZGF0ZVN1YnNjcmliZSA9IHN1YnNjcmlwdGlvbi51cGRhdGVTdWJzY3JpYmU7XG4gICAgICAgICAgICB1cGRhdGVTdWJzY3JpYmUoZ3JvdXAsIHN1Ymdyb3Vwcyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBVcGRhdGUgY2hpbGQncyBncm91cCBhbmQgc3ViZ3JvdXBzXG4gICAgICAgIE9iamVjdC5hc3NpZ24oY2hpbGQsIHsgZ3JvdXA6IGdyb3VwLCBzdWJncm91cHM6IHN1Ymdyb3VwcyB9KTtcbiAgICAgICAgLy8gVXBkYXRlIGNoaWxkJ3MgY2hpbGRyZW4gc3Vic2NyaXB0aW9uc1xuICAgICAgICBpZiAoQWN0aW9uU2V0V2l0aENoaWxkcmVuLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGNoaWxkKSkge1xuICAgICAgICAgICAgY2hpbGQuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoYykgeyByZXR1cm4gX3RoaXMuYWRkQ2hpbGQoYywgZ3JvdXAsIHN1Ymdyb3Vwcyk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgQWN0aW9uU2V0V2l0aENoaWxkcmVuLnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjb2xsZWN0aW9uXzEucmVtb3ZlRnJvbUNvbGxlY3Rpb24odGhpcy5jaGlsZHJlbiwgdGhpcy5nZXRDaGlsZChpZCksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0b0JlUmVtb3ZlZCA9IF90aGlzLnN1YnNjcmlwdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChzdWJzKSB7IHJldHVybiBzdWJzLmNvbXBvbmVudC5pZCA9PT0gaWQ7IH0pO1xuICAgICAgICAgICAgdG9CZVJlbW92ZWQuZm9yRWFjaChmdW5jdGlvbiAodG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uXzEucmVtb3ZlRnJvbUNvbGxlY3Rpb24oX3RoaXMuc3Vic2NyaXB0aW9ucywgdG9SZW1vdmUsIGZ1bmN0aW9uIChyZW1vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZWQudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBBY3Rpb25TZXRXaXRoQ2hpbGRyZW4ucHJvdG90eXBlLnN1YnNjcmliZVRvQ2hpbGQgPSBmdW5jdGlvbiAoY2hpbGQsIGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGJvdW5kZWRDYWxsYmFjayA9IGNhbGxiYWNrLmJpbmQodGhpcyk7XG4gICAgICAgIGlmIChldmVudE5hbWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgZXZlbnROYW1lLmZvckVhY2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLnN1YnNjcmliZVRvQ2hpbGQoY2hpbGQsIGUsIGNhbGxiYWNrKTsgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGV2ZW50TmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHZhciBldmVudFR5cGUgPSBldmVudE5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgdmFyIGN1cnJlbnRTdWJzY3JpcHRpb25zID0gdGhpcy5nZXRDaGlsZFN1YnNjcmlwdGlvbnMoY2hpbGQuaWQsIGV2ZW50VHlwZSk7XG4gICAgICAgIGlmIChjdXJyZW50U3Vic2NyaXB0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBTdWJzY3JpcHRpb24gaXMgYWxyZWFkeSB0aGVyZSwgc2ltcGx5IHVwZGF0ZSBpdFxuICAgICAgICAgICAgY3VycmVudFN1YnNjcmlwdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc3VicykgeyByZXR1cm4gc3Vicy51cGRhdGVTdWJzY3JpYmUoX3RoaXMuZ3JvdXAsIGNoaWxkLnN1Ymdyb3Vwcyk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNoaWxkQ29tcG9uZW50ID0ge1xuICAgICAgICAgICAgICAgIGlkOiBjaGlsZC5pZCxcbiAgICAgICAgICAgICAgICBzdWJncm91cHM6IGNoaWxkLnN1Ymdyb3VwcyxcbiAgICAgICAgICAgICAgICB0eXBlOiBjaGlsZC50eXBlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlKGV2ZW50VHlwZSwgYm91bmRlZENhbGxiYWNrLCBjaGlsZENvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBBY3Rpb25TZXRXaXRoQ2hpbGRyZW4ucHJvdG90eXBlLmdldFVwZGF0ZWRDaGlsZEFjdGlvbnMgPSBmdW5jdGlvbiAobmV3QWN0aW9ucywgY3VycmVudEFjdGlvbnMpIHtcbiAgICAgICAgaWYgKG5ld0FjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudEFjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBhY3Rpb24gPSBjdXJyZW50QWN0aW9ucy5wb3AoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZChhY3Rpb24uaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBPbmx5IGFsbG93IHVuaXF1ZSBhY3Rpb25zXG4gICAgICAgIHZhciB1bmlxdWVBY3Rpb25zID0gbmV3QWN0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKGFjdGlvbiwgaW5kZXgsIGFjdGlvbnNBcnIpIHsgcmV0dXJuIGluZGV4ID09PSBhY3Rpb25zQXJyLmluZGV4T2YoYWN0aW9uKTsgfSk7XG4gICAgICAgIHZhciBuZXdBY3Rpb25JZHMgPSB1bmlxdWVBY3Rpb25zLm1hcChmdW5jdGlvbiAoYWN0aW9uKSB7IHJldHVybiBhY3Rpb24uaWQ7IH0pO1xuICAgICAgICAvLyBSZW1vdmUgdW51c2VkIGFjdGlvbnNcbiAgICAgICAgdmFyIHVudXNlZEFjdGlvbnMgPSBjdXJyZW50QWN0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIG5ld0FjdGlvbklkcy5pbmRleE9mKGFjdGlvbi5pZCkgPCAwO1xuICAgICAgICB9KTtcbiAgICAgICAgd2hpbGUgKHVudXNlZEFjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IHVudXNlZEFjdGlvbnMucG9wKCk7XG4gICAgICAgICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZChhY3Rpb24uaWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmlxdWVBY3Rpb25zO1xuICAgIH07XG4gICAgcmV0dXJuIEFjdGlvblNldFdpdGhDaGlsZHJlbjtcbn0oQWN0aW9uU2V0KSk7XG5leHBvcnRzLkFjdGlvblNldFdpdGhDaGlsZHJlbiA9IEFjdGlvblNldFdpdGhDaGlsZHJlbjtcbmZ1bmN0aW9uIHVuc3Vic2NyaWJlQWN0aW9ucyhzdWJzY3JpcHRpb25zLCBkZWZhdWx0R3JvdXAsIHJlYXNzaWduKSB7XG4gICAgaWYgKHJlYXNzaWduID09PSB2b2lkIDApIHsgcmVhc3NpZ24gPSBmYWxzZTsgfVxuICAgIHN1YnNjcmlwdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIGlmIChyZWFzc2lnbikge1xuICAgICAgICAgICAgdmFyIHVwZGF0ZVN1YnNjcmliZSA9IHN1YnNjcmlwdGlvbi51cGRhdGVTdWJzY3JpYmU7XG4gICAgICAgICAgICAvLyBUT0RPOiBTdXBwb3J0IGNhc2VzIHdoZXJlIHdlIGRvbid0IHdpcGUgb3V0IGdyb3VwIGFuZCBzdWJncm91cHMgdG8gZGVmYXVsdHNcbiAgICAgICAgICAgIHVwZGF0ZVN1YnNjcmliZShkZWZhdWx0R3JvdXAsIFtdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB1bnN1YnNjcmliZSA9IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZTtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIXJlYXNzaWduKSB7XG4gICAgICAgIHN1YnNjcmlwdGlvbnMubGVuZ3RoID0gMDtcbiAgICB9XG59XG5mdW5jdGlvbiB1cGRhdGVBY3Rpb25Gcm9tUGF5bG9hZChhY3Rpb24sIG5ld1Byb3BzKSB7XG4gICAgdmFyIGlkID0gYWN0aW9uLmlkO1xuICAgIGlmIChpZCA9PT0gbmV3UHJvcHMuaWQpIHtcbiAgICAgICAgLy8gTWVyZ2UgbmV3IHByb3BlcnRpZXNcbiAgICAgICAgT2JqZWN0LmFzc2lnbihhY3Rpb24sIGdldE1lcmdlZFByb3BzKGFjdGlvbiwgbmV3UHJvcHMpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMudXBkYXRlQWN0aW9uRnJvbVBheWxvYWQgPSB1cGRhdGVBY3Rpb25Gcm9tUGF5bG9hZDtcbmZ1bmN0aW9uIGdldE1lcmdlZFByb3BzKHByb3BzLCBuZXdQcm9wcykge1xuICAgIHZhciBtZXJnZWQgPSBtZXJnZV8xLmRlZmF1bHQocHJvcHMsIG5ld1Byb3BzKTtcbiAgICBpZiAoIW1lcmdlZCkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLW9iamVjdC1zcHJlYWRcbiAgICAgICAgdmFyIGNsb25lZCA9IE9iamVjdC5hc3NpZ24ocHJvcHMsIG5ld1Byb3BzKTtcbiAgICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICB9XG4gICAgcmV0dXJuIG1lcmdlZDtcbn1cbmV4cG9ydHMuZ2V0TWVyZ2VkUHJvcHMgPSBnZXRNZXJnZWRQcm9wcztcbmZ1bmN0aW9uIGZvckVhY2hJbkVudW0odHlwZXMsIGNhbGxiYWNrKSB7XG4gICAgT2JqZWN0LmtleXModHlwZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBjYWxsYmFjayh0eXBlc1trZXldKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZm9yRWFjaEluRW51bSA9IGZvckVhY2hJbkVudW07XG5mdW5jdGlvbiBmaW5kTWF0Y2hJbkVudW0odHlwZXMsIGxvb2t1cCkge1xuICAgIHZhciBtYXRjaCA9IE9iamVjdC5rZXlzKHR5cGVzKS5maW5kKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGxvb2t1cCA9PT0gdHlwZXNba2V5XTtcbiAgICB9KTtcbiAgICByZXR1cm4gbWF0Y2ggPyB0eXBlc1ttYXRjaF0gOiB1bmRlZmluZWQ7XG59XG5leHBvcnRzLmZpbmRNYXRjaEluRW51bSA9IGZpbmRNYXRjaEluRW51bTtcbmZ1bmN0aW9uIGNhbWVsQ2FzZVRvU25ha2VDYXNlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24gKG1hdGNoZXIsIF92YWwsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBcIlwiICsgKGluZGV4ICE9PSAwID8gJ18nIDogJycpICsgbWF0Y2hlclswXS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5Ob25TbmFrZUNhc2VHcm91cCA9IFtcbiAgICB0eXBlc18yLkdyb3VwLkF1dGhDb2RlLFxuICAgIHR5cGVzXzIuR3JvdXAuQnV0dG9uLFxuICAgIHR5cGVzXzIuR3JvdXAuQnV0dG9uR3JvdXAsXG4gICAgdHlwZXNfMi5Hcm91cC5DYXJ0LFxuICAgIHR5cGVzXzIuR3JvdXAuRXJyb3IsXG4gICAgdHlwZXNfMi5Hcm91cC5GZWF0dXJlcyxcbiAgICB0eXBlc18yLkdyb3VwLkZ1bGxzY3JlZW4sXG4gICAgdHlwZXNfMi5Hcm91cC5MaW5rLFxuICAgIHR5cGVzXzIuR3JvdXAuTG9hZGluZyxcbiAgICB0eXBlc18yLkdyb3VwLk1lbnUsXG4gICAgdHlwZXNfMi5Hcm91cC5Nb2RhbCxcbiAgICB0eXBlc18yLkdyb3VwLk5hdmlnYXRpb24sXG4gICAgdHlwZXNfMi5Hcm91cC5Qb3MsXG4gICAgdHlwZXNfMi5Hcm91cC5QcmludCxcbiAgICB0eXBlc18yLkdyb3VwLlJlc291cmNlUGlja2VyLFxuICAgIHR5cGVzXzIuR3JvdXAuU2Nhbm5lcixcbiAgICB0eXBlc18yLkdyb3VwLlNlc3Npb25Ub2tlbixcbiAgICB0eXBlc18yLkdyb3VwLlNoYXJlLFxuICAgIHR5cGVzXzIuR3JvdXAuVGl0bGVCYXIsXG4gICAgdHlwZXNfMi5Hcm91cC5Ub2FzdCxcbl07XG4vKipcbiAqIE1hcHMgdGhlIGdyb3VwIG5hbWUgdG8gaXRzIGV2ZW50IG5hbWVcbiAqIEBpbnRlcm5hbFxuICogQHJlbWFya3MgLSBUaGlzIG1ldGhvZCBpcyBuZWNlc3NhcnkgZm9yIHRoZSBuZXcgcGF0dGVybiBvZiB1c2luZyBzbmFrZSBjYXNlXG4gKiB3aGljaCBtYWtlcyBpdCBtb3JlIHJlYWRhYmxlIGFuZCBlYXNpZXIgdG8gcmVjb25zdHJ1Y3QgdGhlIGdyb3VwIGZyb20gYW4gZXZlbnQgbmFtZS5cbiAqIEV4YW1wbGU6IGBDb250ZXh0dWFsU2F2ZUJhcmAgYmVjb21lcyBgQ09OVEVYVFVBTF9TQVZFX0JBUmBcbiAqICovXG5mdW5jdGlvbiBncm91cFRvRXZlbnROYW1lU3BhY2UoZ3JvdXApIHtcbiAgICBpZiAoZXhwb3J0cy5Ob25TbmFrZUNhc2VHcm91cC5pbmNsdWRlcyhncm91cCkpIHtcbiAgICAgICAgcmV0dXJuIGdyb3VwLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICAgIHJldHVybiBjYW1lbENhc2VUb1NuYWtlQ2FzZShncm91cCkudG9VcHBlckNhc2UoKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QZXJmb3JtYW5jZSA9IGV4cG9ydHMuUG9zID0gZXhwb3J0cy5BcHBMaW5rID0gZXhwb3J0cy5DaGFubmVsTWVudSA9IGV4cG9ydHMuTmF2aWdhdGlvbk1lbnUgPSBleHBvcnRzLlNoYXJlID0gZXhwb3J0cy5Db250ZXh0dWFsU2F2ZUJhciA9IGV4cG9ydHMuTWFya2V0aW5nRXh0ZXJuYWxBY3Rpdml0eVRvcEJhciA9IGV4cG9ydHMuVGl0bGVCYXIgPSBleHBvcnRzLlNlc3Npb25Ub2tlbiA9IGV4cG9ydHMuUmVzb3VyY2VQaWNrZXIgPSBleHBvcnRzLlJlZGlyZWN0ID0gZXhwb3J0cy5QcmludCA9IGV4cG9ydHMuTW9kYWwgPSBleHBvcnRzLkxvYWRpbmcgPSBleHBvcnRzLkxlYXZlQ29uZmlybWF0aW9uID0gZXhwb3J0cy5IaXN0b3J5ID0gZXhwb3J0cy5Ub2FzdCA9IGV4cG9ydHMuRnVsbHNjcmVlbiA9IGV4cG9ydHMuRmVlZGJhY2tNb2RhbCA9IGV4cG9ydHMuRmVhdHVyZXMgPSBleHBvcnRzLkZsYXNoID0gZXhwb3J0cy5FcnJvciA9IGV4cG9ydHMuQ2FydCA9IGV4cG9ydHMuU2Nhbm5lciA9IGV4cG9ydHMuQnV0dG9uR3JvdXAgPSBleHBvcnRzLkJ1dHRvbiA9IGV4cG9ydHMuQXV0aENvZGUgPSB2b2lkIDA7XG52YXIgQXV0aENvZGUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vQXV0aENvZGVcIikpO1xuZXhwb3J0cy5BdXRoQ29kZSA9IEF1dGhDb2RlO1xudmFyIEJ1dHRvbiA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9CdXR0b25cIikpO1xuZXhwb3J0cy5CdXR0b24gPSBCdXR0b247XG52YXIgQnV0dG9uR3JvdXAgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vQnV0dG9uR3JvdXBcIikpO1xuZXhwb3J0cy5CdXR0b25Hcm91cCA9IEJ1dHRvbkdyb3VwO1xudmFyIENhcnQgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vQ2FydFwiKSk7XG5leHBvcnRzLkNhcnQgPSBDYXJ0O1xudmFyIEVycm9yID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL0Vycm9yXCIpKTtcbmV4cG9ydHMuRXJyb3IgPSBFcnJvcjtcbnZhciBGbGFzaCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9GbGFzaFwiKSk7XG5leHBvcnRzLkZsYXNoID0gRmxhc2g7XG52YXIgRmVhdHVyZXMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vRmVhdHVyZXNcIikpO1xuZXhwb3J0cy5GZWF0dXJlcyA9IEZlYXR1cmVzO1xudmFyIEZlZWRiYWNrTW9kYWwgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vRmVlZGJhY2tNb2RhbFwiKSk7XG5leHBvcnRzLkZlZWRiYWNrTW9kYWwgPSBGZWVkYmFja01vZGFsO1xudmFyIEZ1bGxzY3JlZW4gPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vRnVsbHNjcmVlblwiKSk7XG5leHBvcnRzLkZ1bGxzY3JlZW4gPSBGdWxsc2NyZWVuO1xudmFyIExlYXZlQ29uZmlybWF0aW9uID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL0xlYXZlQ29uZmlybWF0aW9uXCIpKTtcbmV4cG9ydHMuTGVhdmVDb25maXJtYXRpb24gPSBMZWF2ZUNvbmZpcm1hdGlvbjtcbnZhciBMb2FkaW5nID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL0xvYWRpbmdcIikpO1xuZXhwb3J0cy5Mb2FkaW5nID0gTG9hZGluZztcbnZhciBNb2RhbCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9Nb2RhbFwiKSk7XG5leHBvcnRzLk1vZGFsID0gTW9kYWw7XG52YXIgSGlzdG9yeSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9OYXZpZ2F0aW9uL0hpc3RvcnlcIikpO1xuZXhwb3J0cy5IaXN0b3J5ID0gSGlzdG9yeTtcbnZhciBSZWRpcmVjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9OYXZpZ2F0aW9uL1JlZGlyZWN0XCIpKTtcbmV4cG9ydHMuUmVkaXJlY3QgPSBSZWRpcmVjdDtcbnZhciBQcmludCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9QcmludFwiKSk7XG5leHBvcnRzLlByaW50ID0gUHJpbnQ7XG52YXIgUmVzb3VyY2VQaWNrZXIgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vUmVzb3VyY2VQaWNrZXJcIikpO1xuZXhwb3J0cy5SZXNvdXJjZVBpY2tlciA9IFJlc291cmNlUGlja2VyO1xudmFyIFNjYW5uZXIgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vU2Nhbm5lclwiKSk7XG5leHBvcnRzLlNjYW5uZXIgPSBTY2FubmVyO1xudmFyIFNlc3Npb25Ub2tlbiA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9TZXNzaW9uVG9rZW5cIikpO1xuZXhwb3J0cy5TZXNzaW9uVG9rZW4gPSBTZXNzaW9uVG9rZW47XG52YXIgVGl0bGVCYXIgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vVGl0bGVCYXJcIikpO1xuZXhwb3J0cy5UaXRsZUJhciA9IFRpdGxlQmFyO1xudmFyIFRvYXN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL1RvYXN0XCIpKTtcbmV4cG9ydHMuVG9hc3QgPSBUb2FzdDtcbnZhciBDb250ZXh0dWFsU2F2ZUJhciA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9Db250ZXh0dWFsU2F2ZUJhclwiKSk7XG5leHBvcnRzLkNvbnRleHR1YWxTYXZlQmFyID0gQ29udGV4dHVhbFNhdmVCYXI7XG52YXIgU2hhcmUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vU2hhcmVcIikpO1xuZXhwb3J0cy5TaGFyZSA9IFNoYXJlO1xudmFyIE5hdmlnYXRpb25NZW51ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL01lbnUvTmF2aWdhdGlvbk1lbnVcIikpO1xuZXhwb3J0cy5OYXZpZ2F0aW9uTWVudSA9IE5hdmlnYXRpb25NZW51O1xudmFyIENoYW5uZWxNZW51ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL01lbnUvQ2hhbm5lbE1lbnVcIikpO1xuZXhwb3J0cy5DaGFubmVsTWVudSA9IENoYW5uZWxNZW51O1xudmFyIEFwcExpbmsgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vTGluay9BcHBMaW5rXCIpKTtcbmV4cG9ydHMuQXBwTGluayA9IEFwcExpbms7XG52YXIgUG9zID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL1Bvc1wiKSk7XG5leHBvcnRzLlBvcyA9IFBvcztcbnZhciBNYXJrZXRpbmdFeHRlcm5hbEFjdGl2aXR5VG9wQmFyID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL01hcmtldGluZ0V4dGVybmFsQWN0aXZpdHlUb3BCYXJcIikpO1xuZXhwb3J0cy5NYXJrZXRpbmdFeHRlcm5hbEFjdGl2aXR5VG9wQmFyID0gTWFya2V0aW5nRXh0ZXJuYWxBY3Rpdml0eVRvcEJhcjtcbnZhciBQZXJmb3JtYW5jZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9QZXJmb3JtYW5jZVwiKSk7XG5leHBvcnRzLlBlcmZvcm1hbmNlID0gUGVyZm9ybWFuY2U7XG52YXIgdmFsaWRhdG9yXzEgPSByZXF1aXJlKFwiLi92YWxpZGF0b3JcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc0FwcEJyaWRnZUFjdGlvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdmFsaWRhdG9yXzEuaXNBcHBCcmlkZ2VBY3Rpb247IH0gfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdHlwZXNcIiksIGV4cG9ydHMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFJldHVybnMgYSBkZWVwbHkgbWVyZ2VkIG9iamVjdCB3aXRoIHByb3BlcnRpZXMgZnJvbSB0aGUgMiBwcm92aWRlZCBvYmplY3RzXG4gKiBAcmVtYXJrcyAtIE9ubHkgZGVlcGx5IG1lcmdlIG9iamVjdHMuIFRoZSBzZWNvbmQgYXJndW1lbnQgb3ZlcnJpZGVzIHRoZVxuICogZmlyc3QgaWYgaXQgaXMgcHJvdmlkZWQgYXMgYG51bGxgLCBgdW5kZWZpbmVkYCBvciBhbiBhcnJheS5cbiAqIEBwdWJsaWNcbiAqICovXG5mdW5jdGlvbiBtZXJnZVByb3BzKG9iaiwgbmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaiA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBuZXdPYmo7XG4gICAgfVxuICAgIC8vIElmIHNldHRpbmcgdG8gYSBkaWZmZXJlbnQgcHJvdG90eXBlIG9yIGEgbm9uLW9iamVjdCBvciBub24tYXJyYXksIGRvbid0IG1lcmdlIGFueSBwcm9wc1xuICAgIGlmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICAhT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikuaXNQcm90b3R5cGVPZihuZXdPYmopIHx8XG4gICAgICAgIChuZXdPYmouY29uc3RydWN0b3IubmFtZSAhPT0gJ09iamVjdCcgJiYgbmV3T2JqLmNvbnN0cnVjdG9yLm5hbWUgIT09ICdBcnJheScpKSB7XG4gICAgICAgIHJldHVybiBuZXdPYmo7XG4gICAgfVxuICAgIHZhciBjbG9uZSA9IHt9O1xuICAgIE9iamVjdC5rZXlzKG5ld09iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBleGlzdHMgPSBvYmouaGFzT3duUHJvcGVydHkoa2V5KTtcbiAgICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgICAgIGNsb25lW2tleV0gPSBuZXdPYmpba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygb2JqW2tleV0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KG9ialtrZXldKSkge1xuICAgICAgICAgICAgY2xvbmVba2V5XSA9IG1lcmdlUHJvcHMob2JqW2tleV0sIG5ld09ialtrZXldKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsb25lW2tleV0gPSBuZXdPYmpba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIENvcHkgb2xkIHByb3BzIHRoYXQgYXJlIG5vdCBwcmVzZW50IGluIG5ldyBvYmplY3Qgb25seSBpZiB0aGlzIGlzIGEgc2ltcGxlIG9iamVjdFxuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBleGlzdHMgPSBuZXdPYmouaGFzT3duUHJvcGVydHkoa2V5KTtcbiAgICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgICAgIGNsb25lW2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIFNldCBwcm90b3R5cGUgb2YgY2xvbmVkIG9iamVjdCB0byBtYXRjaCBvcmlnaW5hbFxuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihjbG9uZSwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpO1xuICAgIHJldHVybiBjbG9uZTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG1lcmdlUHJvcHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29tcG9uZW50VHlwZSA9IGV4cG9ydHMuR3JvdXAgPSB2b2lkIDA7XG4vKipcbiAqIFZhcmlvdXMgYWN0aW9uIGdyb3Vwcy5cbiAqIEBwdWJsaWNcbiAqL1xudmFyIEdyb3VwO1xuKGZ1bmN0aW9uIChHcm91cCkge1xuICAgIEdyb3VwW1wiQXV0aENvZGVcIl0gPSBcIkF1dGhDb2RlXCI7XG4gICAgR3JvdXBbXCJCdXR0b25cIl0gPSBcIkJ1dHRvblwiO1xuICAgIEdyb3VwW1wiQnV0dG9uR3JvdXBcIl0gPSBcIkJ1dHRvbkdyb3VwXCI7XG4gICAgR3JvdXBbXCJDYXJ0XCJdID0gXCJDYXJ0XCI7XG4gICAgR3JvdXBbXCJDb250ZXh0dWFsU2F2ZUJhclwiXSA9IFwiQ29udGV4dHVhbFNhdmVCYXJcIjtcbiAgICBHcm91cFtcIkVycm9yXCJdID0gXCJFcnJvclwiO1xuICAgIEdyb3VwW1wiRmVhdHVyZXNcIl0gPSBcIkZlYXR1cmVzXCI7XG4gICAgR3JvdXBbXCJGZWVkYmFja01vZGFsXCJdID0gXCJGZWVkYmFja01vZGFsXCI7XG4gICAgR3JvdXBbXCJGdWxsc2NyZWVuXCJdID0gXCJGdWxsc2NyZWVuXCI7XG4gICAgR3JvdXBbXCJMZWF2ZUNvbmZpcm1hdGlvblwiXSA9IFwiTGVhdmVDb25maXJtYXRpb25cIjtcbiAgICBHcm91cFtcIkxpbmtcIl0gPSBcIkxpbmtcIjtcbiAgICBHcm91cFtcIkxvYWRpbmdcIl0gPSBcIkxvYWRpbmdcIjtcbiAgICBHcm91cFtcIk1lbnVcIl0gPSBcIk1lbnVcIjtcbiAgICBHcm91cFtcIk1vZGFsXCJdID0gXCJNb2RhbFwiO1xuICAgIEdyb3VwW1wiTmF2aWdhdGlvblwiXSA9IFwiTmF2aWdhdGlvblwiO1xuICAgIEdyb3VwW1wiUGVyZm9ybWFuY2VcIl0gPSBcIlBlcmZvcm1hbmNlXCI7XG4gICAgR3JvdXBbXCJQb3NcIl0gPSBcIlBvc1wiO1xuICAgIEdyb3VwW1wiUHJpbnRcIl0gPSBcIlByaW50XCI7XG4gICAgR3JvdXBbXCJSZXNvdXJjZVBpY2tlclwiXSA9IFwiUmVzb3VyY2VfUGlja2VyXCI7XG4gICAgR3JvdXBbXCJTY2FubmVyXCJdID0gXCJTY2FubmVyXCI7XG4gICAgR3JvdXBbXCJTZXNzaW9uVG9rZW5cIl0gPSBcIlNlc3Npb25Ub2tlblwiO1xuICAgIEdyb3VwW1wiU2hhcmVcIl0gPSBcIlNoYXJlXCI7XG4gICAgR3JvdXBbXCJUaXRsZUJhclwiXSA9IFwiVGl0bGVCYXJcIjtcbiAgICBHcm91cFtcIlRvYXN0XCJdID0gXCJUb2FzdFwiO1xuICAgIEdyb3VwW1wiTWFya2V0aW5nRXh0ZXJuYWxBY3Rpdml0eVRvcEJhclwiXSA9IFwiTWFya2V0aW5nRXh0ZXJuYWxBY3Rpdml0eVRvcEJhclwiO1xufSkoR3JvdXAgPSBleHBvcnRzLkdyb3VwIHx8IChleHBvcnRzLkdyb3VwID0ge30pKTtcbi8qKlxuICogQGludGVybmFsXG4gKi9cbnZhciBDb21wb25lbnRUeXBlO1xuKGZ1bmN0aW9uIChDb21wb25lbnRUeXBlKSB7XG4gICAgQ29tcG9uZW50VHlwZVtcIkJ1dHRvblwiXSA9IFwiQnV0dG9uXCI7XG4gICAgQ29tcG9uZW50VHlwZVtcIkJ1dHRvbkdyb3VwXCJdID0gXCJCdXR0b25Hcm91cFwiO1xufSkoQ29tcG9uZW50VHlwZSA9IGV4cG9ydHMuQ29tcG9uZW50VHlwZSB8fCAoZXhwb3J0cy5Db21wb25lbnRUeXBlID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZW5lcmF0ZVV1aWQgPSB2b2lkIDA7XG4vKipcbiAqIENvbnZlcnQgYSBudW1iZXIgb3IgYXJyYXkgb2YgaW50ZWdlcnMgdG8gYSBzdHJpbmcgb2YgcGFkZGVkIGhleCBvY3RldHMuXG4gKi9cbmZ1bmN0aW9uIGFzSGV4KHZhbHVlKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odmFsdWUpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIChcIjAwXCIgKyBpLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpOyB9KVxuICAgICAgICAuam9pbignJyk7XG59XG4vKipcbiAqIEF0dGVtcHQgdG8gc2VjdXJlbHkgZ2VuZXJhdGUgcmFuZG9tIGJ5dGVzL1xuICovXG5mdW5jdGlvbiBnZXRSYW5kb21CeXRlcyhzaXplKSB7XG4gICAgLy8gU1BSTkdcbiAgICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93LmNyeXB0bykge1xuICAgICAgICB2YXIgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSk7XG4gICAgICAgIHZhciByYW5kb21WYWx1ZXMgPSB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhidWZmZXIpO1xuICAgICAgICBpZiAocmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gcmFuZG9tVmFsdWVzO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEluc2VjdXJlIHJhbmRvbVxuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBBcnJheShzaXplKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gKE1hdGgucmFuZG9tKCkgKiAyNTUpIHwgMDsgfSk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEgUkZDNDEyMi1jb21wbGlhbnQgdjQgVVVJRC5cbiAqXG4gKiBAc2VlIGh0dHA6Ly93d3cuaWV0Zi5vcmcvcmZjL3JmYzQxMjIudHh0XG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlVXVpZCgpIHtcbiAgICB2YXIgdmVyc2lvbiA9IDY0O1xuICAgIHZhciBjbG9ja1NlcUhpQW5kUmVzZXJ2ZWQgPSBnZXRSYW5kb21CeXRlcygxKTtcbiAgICB2YXIgdGltZUhpQW5kVmVyc2lvbiA9IGdldFJhbmRvbUJ5dGVzKDIpO1xuICAgIGNsb2NrU2VxSGlBbmRSZXNlcnZlZFswXSAmPSA2MyB8IDEyODtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6YmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlclxuICAgIHRpbWVIaUFuZFZlcnNpb25bMF0gJj0gMTUgfCB2ZXJzaW9uO1xuICAgIHJldHVybiBbXG4gICAgICAgIGFzSGV4KGdldFJhbmRvbUJ5dGVzKDQpKSxcbiAgICAgICAgJy0nLFxuICAgICAgICBhc0hleChnZXRSYW5kb21CeXRlcygyKSksXG4gICAgICAgICctJyxcbiAgICAgICAgYXNIZXgodGltZUhpQW5kVmVyc2lvbiksXG4gICAgICAgICctJyxcbiAgICAgICAgYXNIZXgoY2xvY2tTZXFIaUFuZFJlc2VydmVkKSxcbiAgICAgICAgYXNIZXgoZ2V0UmFuZG9tQnl0ZXMoMSkpLFxuICAgICAgICAnLScsXG4gICAgICAgIGFzSGV4KGdldFJhbmRvbUJ5dGVzKDYpKSxcbiAgICBdLmpvaW4oJycpO1xufVxuZXhwb3J0cy5nZW5lcmF0ZVV1aWQgPSBnZW5lcmF0ZVV1aWQ7XG4vLyBEZWZhdWx0XG5leHBvcnRzLmRlZmF1bHQgPSBnZW5lcmF0ZVV1aWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaXNBcHBNZXNzYWdlID0gZXhwb3J0cy5pc1Blcm1pdHRlZCA9IGV4cG9ydHMuZ2V0UGVybWlzc2lvbktleSA9IGV4cG9ydHMuaXNGcm9tQXBwID0gZXhwb3J0cy5pc0FwcEJyaWRnZUFjdGlvbiA9IHZvaWQgMDtcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4uL2NsaWVudC90eXBlc1wiKTtcbnZhciBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKTtcbnZhciBoZWxwZXJfMSA9IHJlcXVpcmUoXCIuL2hlbHBlclwiKTtcbi8qKlxuICogUHJlZGljYXRlIHRvIGRldGVybWluZSBpZiBhbiBhY3Rpb24gaXMgYW4gQXBwIEJyaWRnZSBhY3Rpb24uXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGlzQXBwQnJpZGdlQWN0aW9uKGFjdGlvbikge1xuICAgIHJldHVybiAoYWN0aW9uIGluc3RhbmNlb2YgT2JqZWN0ICYmXG4gICAgICAgIGFjdGlvbi5oYXNPd25Qcm9wZXJ0eSgndHlwZScpICYmXG4gICAgICAgIGFjdGlvbi50eXBlLnRvU3RyaW5nKCkuc3RhcnRzV2l0aChjb25zdGFudHNfMS5QUkVGSVgpKTtcbn1cbmV4cG9ydHMuaXNBcHBCcmlkZ2VBY3Rpb24gPSBpc0FwcEJyaWRnZUFjdGlvbjtcbi8qKlxuICogUHJlZGljYXRlIHRvIGRldGVybWluZSBpZiBhbiBhY3Rpb24gb3JpZ2luYXRlZCBmcm9tIGFuIGFwcGxpY2F0aW9uLlxuICogQGludGVybmFsXG4gKi9cbmZ1bmN0aW9uIGlzRnJvbUFwcChhY3Rpb24pIHtcbiAgICBpZiAodHlwZW9mIGFjdGlvbiAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIGFjdGlvbi5zb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHR5cGVvZiBhY3Rpb24uc291cmNlLmFwaUtleSA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzRnJvbUFwcCA9IGlzRnJvbUFwcDtcbi8qKlxuICogUmV0dXJucyB0aGUgYWN0aW9uIHR5cGUgd2l0aG91dCB0aGUgcHJlZml4IGFuZCBncm91cFxuICogQGludGVybmFsXG4gKi9cbmZ1bmN0aW9uIGdldFBlcm1pc3Npb25LZXkodHlwZSkge1xuICAgIHJldHVybiB0eXBlLnJlcGxhY2UobmV3IFJlZ0V4cChcIl5cIiArIGNvbnN0YW50c18xLlBSRUZJWCArIGNvbnN0YW50c18xLlNFUEFSQVRPUiArIFwiXFxcXHcrXCIgKyBjb25zdGFudHNfMS5TRVBBUkFUT1IpLCAnJyk7XG59XG5leHBvcnRzLmdldFBlcm1pc3Npb25LZXkgPSBnZXRQZXJtaXNzaW9uS2V5O1xuLyoqXG4gKiBQcmVkaWNhdGUgdG8gZGV0ZXJtaW5lIGlmIGFuIGFjdGlvbiBpcyBwZXJtaXR0ZWRcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiBpc1Blcm1pdHRlZChmZWF0dXJlcywgX2EsIHBlcm1pc3Npb25UeXBlKSB7XG4gICAgdmFyIGdyb3VwID0gX2EuZ3JvdXAsIHR5cGUgPSBfYS50eXBlO1xuICAgIGlmICghZ3JvdXAgfHwgIWZlYXR1cmVzLmhhc093blByb3BlcnR5KGdyb3VwKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBmZWF0dXJlID0gZmVhdHVyZXNbZ3JvdXBdO1xuICAgIGlmICghZmVhdHVyZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBhY3Rpb25UeXBlID0gZ2V0UGVybWlzc2lvbktleSh0eXBlKTtcbiAgICByZXR1cm4gZmVhdHVyZVthY3Rpb25UeXBlXSA/IGZlYXR1cmVbYWN0aW9uVHlwZV1bcGVybWlzc2lvblR5cGVdID09PSB0cnVlIDogZmFsc2U7XG59XG5leHBvcnRzLmlzUGVybWl0dGVkID0gaXNQZXJtaXR0ZWQ7XG4vKipcbiAqIFByZWRpY2F0ZSB0byBkZXRlcm1pbmUgaWYgYW4gZXZlbnQgb3JpZ2luYXRlZCBmcm9tIGFuIGFwcGxpY2F0aW9uLlxuICogQGludGVybmFsXG4gKi9cbmZ1bmN0aW9uIGlzQXBwTWVzc2FnZShldmVudCkge1xuICAgIGlmICh0eXBlb2YgZXZlbnQgIT09ICdvYmplY3QnIHx8ICFldmVudC5kYXRhIHx8IHR5cGVvZiBldmVudC5kYXRhICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBkYXRhID0gZXZlbnQuZGF0YTtcbiAgICByZXR1cm4gZGF0YS5oYXNPd25Qcm9wZXJ0eSgndHlwZScpICYmIGhlbHBlcl8xLmZpbmRNYXRjaEluRW51bSh0eXBlc18xLk1lc3NhZ2VUeXBlLCBkYXRhLnR5cGUpICE9PSB1bmRlZmluZWQ7XG59XG5leHBvcnRzLmlzQXBwTWVzc2FnZSA9IGlzQXBwTWVzc2FnZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlQXBwID0gZXhwb3J0cy5jcmVhdGVBcHBXcmFwcGVyID0gZXhwb3J0cy5jcmVhdGVDbGllbnRBcHAgPSBleHBvcnRzLmdldFNob3BPcmlnaW4gPSBleHBvcnRzLmdldFVybFBhcmFtcyA9IGV4cG9ydHMuV0lORE9XX1VOREVGSU5FRF9NRVNTQUdFID0gdm9pZCAwO1xudmFyIGhlbHBlcl8xID0gcmVxdWlyZShcIi4uL2FjdGlvbnMvaGVscGVyXCIpO1xudmFyIEVycm9yXzEgPSByZXF1aXJlKFwiLi4vYWN0aW9ucy9FcnJvclwiKTtcbnZhciBQcmludF8xID0gcmVxdWlyZShcIi4uL2FjdGlvbnMvUHJpbnRcIik7XG52YXIgTWVzc2FnZVRyYW5zcG9ydF8xID0gcmVxdWlyZShcIi4uL01lc3NhZ2VUcmFuc3BvcnRcIik7XG52YXIgc2hhcmVkXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9zaGFyZWRcIik7XG52YXIgZW52XzEgPSByZXF1aXJlKFwiLi4vdXRpbC9lbnZcIik7XG52YXIgcHJpbnRfMSA9IHJlcXVpcmUoXCIuL3ByaW50XCIpO1xudmFyIHJlZGlyZWN0XzEgPSByZXF1aXJlKFwiLi9yZWRpcmVjdFwiKTtcbnZhciB0eXBlc18xID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG52YXIgSG9va3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Ib29rc1wiKSk7XG5leHBvcnRzLldJTkRPV19VTkRFRklORURfTUVTU0FHRSA9ICd3aW5kb3cgaXMgbm90IGRlZmluZWQuIFJ1bm5pbmcgYW4gYXBwIG91dHNpZGUgYSBicm93c2VyIGlzIG5vdCBzdXBwb3J0ZWQnO1xuZnVuY3Rpb24gcmVkaXJlY3RIYW5kbGVyKGhvc3RGcmFtZSwgY29uZmlnKSB7XG4gICAgdmFyIGFwaUtleSA9IGNvbmZpZy5hcGlLZXksIHNob3BPcmlnaW4gPSBjb25maWcuc2hvcE9yaWdpbiwgX2EgPSBjb25maWcuZm9yY2VSZWRpcmVjdCwgZm9yY2VSZWRpcmVjdCA9IF9hID09PSB2b2lkIDAgPyAhZW52XzEuaXNEZXZlbG9wbWVudENsaWVudCA6IF9hO1xuICAgIHZhciBsb2NhdGlvbiA9IHJlZGlyZWN0XzEuZ2V0TG9jYXRpb24oKTtcbiAgICBpZiAoZW52XzEuaXNGcmFtZWxlc3MgfHxcbiAgICAgICAgIWxvY2F0aW9uIHx8XG4gICAgICAgICFhcGlLZXkgfHxcbiAgICAgICAgIXNob3BPcmlnaW4gfHxcbiAgICAgICAgIWZvcmNlUmVkaXJlY3QgfHxcbiAgICAgICAgIXJlZGlyZWN0XzEuc2hvdWxkUmVkaXJlY3QoaG9zdEZyYW1lKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB1cmwgPSBcImh0dHBzOi8vXCIgKyBzaG9wT3JpZ2luICsgXCIvYWRtaW4vYXBwcy9cIiArIGFwaUtleSArIGxvY2F0aW9uLnBhdGhuYW1lICsgKGxvY2F0aW9uLnNlYXJjaCB8fCAnJyk7XG4gICAgcmVkaXJlY3RfMS5yZWRpcmVjdCh1cmwpO1xufVxuZnVuY3Rpb24gYXBwU2V0VXAoYXBwKSB7XG4gICAgYXBwLnN1YnNjcmliZShQcmludF8xLkFjdGlvblR5cGUuQVBQLCBwcmludF8xLmhhbmRsZUFwcFByaW50KTtcbn1cbi8qKlxuICogRXh0cmFjdHMgdGhlIHF1ZXJ5IHBhcmFtZXRlcnMgZnJvbSB0aGUgY3VycmVudCBVUkwuXG4gKiBAZGVwcmVjYXRlZCBUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGRlcHJlY2F0ZWQuXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGdldFVybFBhcmFtcygpIHtcbiAgICB2YXIgcGFyYW1zID0ge307XG4gICAgdmFyIGxvY2F0aW9uID0gcmVkaXJlY3RfMS5nZXRMb2NhdGlvbigpO1xuICAgIGlmICghbG9jYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9XG4gICAgdmFyIGhhc2hlcyA9IGxvY2F0aW9uLnNlYXJjaC5zbGljZShsb2NhdGlvbi5zZWFyY2guaW5kZXhPZignPycpICsgMSkuc3BsaXQoJyYnKTtcbiAgICByZXR1cm4gaGFzaGVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBoYXNoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFyIF9iID0gaGFzaC5zcGxpdCgnPScpLCBrZXkgPSBfYlswXSwgdmFsID0gX2JbMV07XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYWNjKSwgKF9hID0ge30sIF9hW2RlY29kZVVSSUNvbXBvbmVudChrZXkpXSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWwpLCBfYSkpO1xuICAgIH0sIHBhcmFtcyk7XG59XG5leHBvcnRzLmdldFVybFBhcmFtcyA9IGdldFVybFBhcmFtcztcbi8qKlxuICogRXh0cmFjdHMgdGhlIGBzaG9wYCBxdWVyeSBwYXJhbWV0ZXIgZnJvbSB0aGUgY3VycmVudCBVUkwuXG4gKiBAZGVwcmVjYXRlZCBUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGRlcHJlY2F0ZWQsIHNlZSB7QGxpbmsgaHR0cHM6Ly9oZWxwLnNob3BpZnkuY29tL2FwaS9lbWJlZGRlZC1hcHBzL3Nob3Atb3JpZ2lufVxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBnZXRTaG9wT3JpZ2luKCkge1xuICAgIHZhciBwYXJhbXMgPSBnZXRVcmxQYXJhbXMoKTtcbiAgICByZXR1cm4gcGFyYW1zLnNob3A7XG59XG5leHBvcnRzLmdldFNob3BPcmlnaW4gPSBnZXRTaG9wT3JpZ2luO1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0cy5jcmVhdGVDbGllbnRBcHAgPSBmdW5jdGlvbiAodHJhbnNwb3J0LCBtaWRkbGV3YXJlcykge1xuICAgIGlmIChtaWRkbGV3YXJlcyA9PT0gdm9pZCAwKSB7IG1pZGRsZXdhcmVzID0gW107IH1cbiAgICB2YXIgZ2V0U3RhdGVMaXN0ZW5lcnMgPSBbXTtcbiAgICB2YXIgdHJhbnNwb3J0TGlzdGVuZXIgPSBNZXNzYWdlVHJhbnNwb3J0XzEuY3JlYXRlVHJhbnNwb3J0TGlzdGVuZXIoKTtcbiAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgIHZhciB0eXBlID0gbWVzc2FnZS50eXBlLCBwYXlsb2FkID0gbWVzc2FnZS5wYXlsb2FkO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2dldFN0YXRlJzpcbiAgICAgICAgICAgICAgICB2YXIgcmVzb2x2ZXJzID0gZ2V0U3RhdGVMaXN0ZW5lcnMuc3BsaWNlKDApO1xuICAgICAgICAgICAgICAgIHJlc29sdmVycy5mb3JFYWNoKGZ1bmN0aW9uIChyZXNvbHZlcikgeyByZXR1cm4gcmVzb2x2ZXIocGF5bG9hZCk7IH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGlzcGF0Y2gnOlxuICAgICAgICAgICAgICAgIHRyYW5zcG9ydExpc3RlbmVyLmhhbmRsZU1lc3NhZ2UocGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgdmFyIGhhc0NhbGxiYWNrID0gdHJhbnNwb3J0TGlzdGVuZXIuaGFuZGxlQWN0aW9uRGlzcGF0Y2gocGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVGhyb3cgYW4gZXJyb3IgaWYgdGhlcmUgYXJlIG5vIHN1YnNjcmlwdGlvbnMgdG8gdGhpcyBlcnJvclxuICAgICAgICAgICAgICAgIHZhciBlcnJvclR5cGUgPSBoZWxwZXJfMS5maW5kTWF0Y2hJbkVudW0oRXJyb3JfMS5BY3Rpb25UeXBlLCBwYXlsb2FkLnR5cGUpO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvclR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgRXJyb3JfMS50aHJvd0Vycm9yKGVycm9yVHlwZSwgcGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIC8vIFNpbGVudGx5IHN3YWxsb3cgdW5rbm93biBhY3Rpb25zXG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRyYW5zcG9ydC5zdWJzY3JpYmUoaGFuZGxlcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgaWYgKCFjb25maWcuc2hvcE9yaWdpbikge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3JfMS5mcm9tQWN0aW9uKCdzaG9wT3JpZ2luIG11c3QgYmUgcHJvdmlkZWQnLCBFcnJvcl8xLkFwcEFjdGlvblR5cGUuSU5WQUxJRF9DT05GSUcpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcm90b2NvbCA9IC9eaHR0cHM/OlxcL1xcLy87XG4gICAgICAgIGlmIChwcm90b2NvbC50ZXN0KGNvbmZpZy5zaG9wT3JpZ2luKSkge1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBcInNob3BPcmlnaW4gc2hvdWxkIG5vdCBpbmNsdWRlIHByb3RvY29sLCBwbGVhc2UgdXNlOiBcIiArIGNvbmZpZy5zaG9wT3JpZ2luLnJlcGxhY2UocHJvdG9jb2wsICcnKTtcbiAgICAgICAgICAgIHRocm93IEVycm9yXzEuZnJvbUFjdGlvbihtZXNzYWdlLCBFcnJvcl8xLkFwcEFjdGlvblR5cGUuSU5WQUxJRF9DT05GSUcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY29uZmlnLmFwaUtleSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3JfMS5mcm9tQWN0aW9uKCdhcGlLZXkgbXVzdCBiZSBwcm92aWRlZCcsIEVycm9yXzEuQXBwQWN0aW9uVHlwZS5JTlZBTElEX0NPTkZJRyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRpc3BhdGNoZXIgPSBjcmVhdGVEaXNwYXRjaGVyKHRyYW5zcG9ydCwgY29uZmlnKTtcbiAgICAgICAgdmFyIHN1YnNjcmliZSA9IHRyYW5zcG9ydExpc3RlbmVyLmNyZWF0ZVN1YnNjcmliZUhhbmRsZXIoZGlzcGF0Y2hlcik7XG4gICAgICAgIC8vIEl0IGlzIHBvc3NpYmxlIHRvIGluaXRpYWxpemUgYW4gYXBwIG11bHRpcGxlIHRpbWVzXG4gICAgICAgIC8vIFRoZXJlZm9yZSB3ZSBuZWVkIHRvIGNsZWFyIHN1YnNjcmlwdGlvbnMgdG8gYmUgc2FmZVxuICAgICAgICBkaXNwYXRjaGVyKHR5cGVzXzEuTWVzc2FnZVR5cGUuVW5zdWJzY3JpYmUpO1xuICAgICAgICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICAgICAgICAgIGRpc3BhdGNoZXIodHlwZXNfMS5NZXNzYWdlVHlwZS5EaXNwYXRjaCwgYWN0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgcmVkaXJlY3RIYW5kbGVyKHRyYW5zcG9ydC5ob3N0RnJhbWUsIGNvbmZpZyk7XG4gICAgICAgIHZhciBob29rcyA9IG5ldyBIb29rc18xLmRlZmF1bHQoKTtcbiAgICAgICAgdmFyIGFwcCA9IHtcbiAgICAgICAgICAgIGxvY2FsT3JpZ2luOiB0cmFuc3BvcnQubG9jYWxPcmlnaW4sXG4gICAgICAgICAgICBob29rczogaG9va3MsXG4gICAgICAgICAgICBkaXNwYXRjaDogZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmICghYXBwLmhvb2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYXBwLmhvb2tzLnJ1bih0eXBlc18xLkxpZmVjeWNsZUhvb2suRGlzcGF0Y2hBY3Rpb24sIGRpc3BhdGNoLCBhcHAsIGFjdGlvbik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmVhdHVyZXNBdmFpbGFibGU6IGZ1bmN0aW9uIChmZWF0dXJlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcHAuZ2V0U3RhdGUoJ2ZlYXR1cmVzJykudGhlbihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzdGF0ZSkuZm9yRWFjaChmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZmVhdHVyZXMuaW5jbHVkZXMoZmVhdHVyZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0YXRlW2ZlYXR1cmVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRTdGF0ZTogZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldFN0YXRlTGlzdGVuZXJzLnB1c2gocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoZXIodHlwZXNfMS5NZXNzYWdlVHlwZS5HZXRTdGF0ZSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnkuc3BsaXQoJy4nKS5yZWR1Y2UoZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KHN0YXRlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHN0YXRlW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAobGlzdGVuZXIsIGlkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVuc3Vic2NyaWJlQ2IgPSBbXTtcbiAgICAgICAgICAgICAgICBoZWxwZXJfMS5mb3JFYWNoSW5FbnVtKEVycm9yXzEuQWN0aW9uVHlwZSwgZnVuY3Rpb24gKGV2ZW50TmFtZVNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlQ2IucHVzaChzdWJzY3JpYmUoZXZlbnROYW1lU3BhY2UsIGxpc3RlbmVyLCBpZCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlQ2IuZm9yRWFjaChmdW5jdGlvbiAodW5zdWJzY3JpYmUpIHsgcmV0dXJuIHVuc3Vic2NyaWJlKCk7IH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIG1pZGRsZXdhcmVzXzEgPSBtaWRkbGV3YXJlczsgX2kgPCBtaWRkbGV3YXJlc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIG1pZGRsZXdhcmUgPSBtaWRkbGV3YXJlc18xW19pXTtcbiAgICAgICAgICAgIG1pZGRsZXdhcmUoaG9va3MsIGFwcCk7XG4gICAgICAgIH1cbiAgICAgICAgYXBwU2V0VXAoYXBwKTtcbiAgICAgICAgcmV0dXJuIGFwcDtcbiAgICB9O1xufTtcbi8qKlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBjcmVhdGVBcHBXcmFwcGVyKGZyYW1lLCBsb2NhbE9yaWdpbiwgbWlkZGxld2FyZSkge1xuICAgIGlmIChtaWRkbGV3YXJlID09PSB2b2lkIDApIHsgbWlkZGxld2FyZSA9IFtdOyB9XG4gICAgaWYgKCFmcmFtZSkge1xuICAgICAgICB0aHJvdyBFcnJvcl8xLmZyb21BY3Rpb24oZXhwb3J0cy5XSU5ET1dfVU5ERUZJTkVEX01FU1NBR0UsIEVycm9yXzEuQXBwQWN0aW9uVHlwZS5XSU5ET1dfVU5ERUZJTkVEKTtcbiAgICB9XG4gICAgdmFyIGxvY2F0aW9uID0gcmVkaXJlY3RfMS5nZXRMb2NhdGlvbigpO1xuICAgIHZhciBvcmlnaW4gPSBsb2NhbE9yaWdpbiB8fCAobG9jYXRpb24gJiYgbG9jYXRpb24ub3JpZ2luKTtcbiAgICBpZiAoIW9yaWdpbikge1xuICAgICAgICB0aHJvdyBFcnJvcl8xLmZyb21BY3Rpb24oJ2xvY2FsIG9yaWdpbiBjYW5ub3QgYmUgYmxhbmsnLCBFcnJvcl8xLkFwcEFjdGlvblR5cGUuTUlTU0lOR19MT0NBTF9PUklHSU4pO1xuICAgIH1cbiAgICB2YXIgdHJhbnNwb3J0ID0gTWVzc2FnZVRyYW5zcG9ydF8xLmZyb21XaW5kb3coZnJhbWUsIG9yaWdpbik7XG4gICAgdmFyIGFwcENyZWF0b3IgPSBleHBvcnRzLmNyZWF0ZUNsaWVudEFwcCh0cmFuc3BvcnQsIG1pZGRsZXdhcmUpO1xuICAgIHJldHVybiBhcHBDcmVhdG9yO1xufVxuZXhwb3J0cy5jcmVhdGVBcHBXcmFwcGVyID0gY3JlYXRlQXBwV3JhcHBlcjtcbi8qKlxuICogQ3JlYXRlcyB5b3VyIGFwcGxpY2F0aW9uIGluc3RhbmNlLlxuICogQHBhcmFtIGNvbmZpZyAtIEJvdGggYGFwaUtleWAgYW5kIGBzaG9wT3JpZ2luYCBhcmUgcmVxdWlyZWQuXG4gKiBAcmVtYXJrc1xuICogWW91IHdpbGwgbmVlZCB0byBzdG9yZSBgc2hvcE9yaWdpbmAgZHVyaW5nIHRoZSBhdXRoZW50aWNhdGlvbiBwcm9jZXNzIGFuZCB0aGVuIHJldHJpZXZlIGl0IGZvciB0aGUgY29kZSB0byB3b3JrIHByb3Blcmx5LiBUbyBsZWFybiBtb3JlIGFib3V0IHRoaXMgcHJvY2Vzcywgc2VlIHtAbGluayBodHRwczovL2hlbHAuc2hvcGlmeS5jb20vYXBpL2VtYmVkZGVkLWFwcHMvc2hvcC1vcmlnaW4gfCBHZXR0aW5nIGFuZCBzdG9yaW5nIHRoZSBzaG9wIG9yaWdpbn0uXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFwcChjb25maWcpIHtcbiAgICB2YXIgY3VycmVudFdpbmRvdyA9IHJlZGlyZWN0XzEuZ2V0V2luZG93KCk7XG4gICAgaWYgKCFjdXJyZW50V2luZG93KSB7XG4gICAgICAgIHJldHVybiBzaGFyZWRfMS5zZXJ2ZXJBcHBCcmlkZ2U7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVBcHBXcmFwcGVyKGN1cnJlbnRXaW5kb3cudG9wKShjb25maWcpO1xufVxuZXhwb3J0cy5jcmVhdGVBcHAgPSBjcmVhdGVBcHA7XG5mdW5jdGlvbiBjcmVhdGVEaXNwYXRjaGVyKHRyYW5zcG9ydCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0eXBlLCBwYXlsb2FkKSB7XG4gICAgICAgIHRyYW5zcG9ydC5kaXNwYXRjaCh7XG4gICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgICAgICAgc291cmNlOiBjb25maWcsXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICB9KTtcbiAgICB9O1xufVxuLyoqXG4gKiB7QGluaGVyaXRkb2NzIGNyZWF0ZUFwcH1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlQXBwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29sbGVjdGlvbl8xID0gcmVxdWlyZShcIi4uL3V0aWwvY29sbGVjdGlvblwiKTtcbi8qKlxuICogU2hvcGlmeSBBcHAgQnJpZGdlIGNhbiBiZSBleHRlbmRlZCB3aXRoIGhvb2tzLCB3aGljaCBydW4gd2hlbiBhY3Rpb25zIGFyZSBkaXNwYXRjaGVkIGFuZCB1cGRhdGVkLlxuICogSG9va3MgYXJlIG1pZGRsZXdhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIG1vZGlmeSBvciBjYW5jZWwgYWN0aW9ucy5cbiAqXG4gKiBUaGUgW3ZhbGlkYXRpb24gbWlkZGxld2FyZV0oLi4vdmFsaWRhdGUvUkVBRE1FLm1kKSBpcyBpbXBsZW1lbnRlZCB1c2luZyBob29rcy5cbiAqXG4gKiBAcmVtYXJrc1xuICogSGVyZeKAmXMgYW4gZXhhbXBsZSBob29rIHRoYXQgbW9kaWZpZXMgYWxsIFRvYXN0IHNob3cgYWN0aW9ucyB0byBoYXZlIGEgZHVyYXRpb24gb2YgZml2ZSBzZWNvbmRzLlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgY3JlYXRlQXBwLCB7TGlmZWN5Y2xlSG9vaywgRGlzcGF0Y2hBY3Rpb25Ib29rfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlJztcbiAqIGltcG9ydCB7VG9hc3R9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucydcbiAqXG4gKiBjb25zdCBhcHAgPSBjcmVhdGVBcHAoe2FwaUtleTogQVBJX0tFWSwgc2hvcE9yaWdpbjogU0hPUF9PUklHSU59KTtcbiAqXG4gKiBmdW5jdGlvbiBtYWtlVG9hc3RzRml2ZVNlY29uZHM6IERpc3BhdGNoQWN0aW9uSG9vayhuZXh0KSB7XG4gKiAgIHJldHVybiBmdW5jdGlvbihhY3Rpb24pe1xuICogICAgICAgaWYoYWN0aW9uLnR5cGUgPT09IFRvYXN0LkFjdGlvblR5cGUuU0hPVykge1xuICogICAgICAgICBjb25zdCBtb2RpZmllZEFjdGlvbiA9IHtcbiAqICAgICAgICAgICAuLi5hY3Rpb24sXG4gKiAgICAgICAgICAgcGF5bG9hZDoge1xuICogICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gKiAgICAgICAgICAgICBkdXJhdGlvbjogNTAwMCxcbiAqICAgICAgICAgICB9LFxuICogICAgICAgICB9O1xuICogICAgICAgICByZXR1cm4gbmV4dChtb2RpZmllZEFjdGlvbik7XG4gKiAgICAgICB9IGVsc2Uge1xuICogICAgICAgICAvLyBkb27igJl0IG1vZGlmeSBub24tVG9hc3QgYWN0aW9uc1xuICogICAgICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xuICogICAgICAgfVxuICogICB9XG4gKiB9XG4gKlxuICogYXBwLmhvb2tzLnNldChMaWZlY3ljbGVIb29rLkRpc3BhdGNoQWN0aW9uLCBtYWtlVG9hc3RzRml2ZVNlY29uZHMpO1xuICogYGBgXG4gKlxuICogVGhlIGhvb2sgZnVuY3Rpb24gYG1ha2VUb2FzdHNGaXZlU2Vjb25kcygpYCB0YWtlcyBhIGBuZXh0KClgIGZ1bmN0aW9uIGFzIGl0cyBhcmd1bWVudC5cbiAqIFRoZSBob29rIGZ1bmN0aW9uIHJldHVybnMgYW4gYW5vbnltb3VzIGZ1bmN0aW9uLCB3aGljaCB0YWtlcyB0aGUgYWN0aW9uIGJlaW5nIGRpc3BhdGNoZWQgYXMgaXRzIGFyZ3VtZW50LlxuICpcbiAqIFRvIG1vZGlmeSBhbiBhY3Rpb24sIGNhbGwgYG5leHQoKWAgd2l0aCB0aGUgbW9kaWZpZWQgYWN0aW9uLCBhcyBpbiB0aGUgZXhhbXBsZS5cbiAqIFRvIGNhbmNlbCBhbiBhY3Rpb24sIGRvbuKAmXQgY2FsbCBgbmV4dCgpYCwgYW5kIHRoZSBhY3Rpb24gd2lsbCBub3QgYmUgZGlzcGF0Y2hlZC5cbiAqL1xudmFyIEhvb2tzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEhvb2tzKCkge1xuICAgICAgICB0aGlzLm1hcCA9IHt9O1xuICAgIH1cbiAgICBIb29rcy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGhvb2ssIGhhbmRsZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShob29rKSkge1xuICAgICAgICAgICAgdGhpcy5tYXBbaG9va10gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSB7IGhhbmRsZXI6IGhhbmRsZXIsIHJlbW92ZTogZnVuY3Rpb24gKCkgeyB9IH07XG4gICAgICAgIHZhciByZW1vdmUgPSBjb2xsZWN0aW9uXzEuYWRkQW5kUmVtb3ZlRnJvbUNvbGxlY3Rpb24odGhpcy5tYXBbaG9va10sIHZhbHVlKTtcbiAgICAgICAgdmFsdWUgPSB7IGhhbmRsZXI6IGhhbmRsZXIsIHJlbW92ZTogcmVtb3ZlIH07XG4gICAgICAgIHJldHVybiByZW1vdmU7XG4gICAgfTtcbiAgICBIb29rcy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGhvb2spIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5tYXBbaG9va107XG4gICAgICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlLm1hcChmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWwuaGFuZGxlcjsgfSkgOiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBIb29rcy5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKGhvb2ssIGZpbmFsLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBpbml0aWFsQXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDM7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgaW5pdGlhbEFyZ3NbX2kgLSAzXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5nZXQoaG9vaykgfHwgW107XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY2hpbGRIYW5kbGVyID0gaGFuZGxlcnNbaW5kZXgrK107XG4gICAgICAgICAgICBpZiAoY2hpbGRIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkSGFuZGxlcihoYW5kbGVyKS5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmaW5hbC5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFuZGxlci5hcHBseShjb250ZXh0LCBpbml0aWFsQXJncyk7XG4gICAgfTtcbiAgICByZXR1cm4gSG9va3M7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gSG9va3M7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBDbGllbnRfMSA9IHJlcXVpcmUoXCIuL0NsaWVudFwiKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90eXBlc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vQ2xpZW50XCIpLCBleHBvcnRzKTtcbmV4cG9ydHMuZGVmYXVsdCA9IENsaWVudF8xLmNyZWF0ZUNsaWVudEFwcDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVBcHBQcmludCA9IHZvaWQgMDtcbnZhciByZWRpcmVjdF8xID0gcmVxdWlyZShcIi4vcmVkaXJlY3RcIik7XG5mdW5jdGlvbiBpc1J1bm5pbmdPbmlPUygpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpT1MnKSA+PSAwO1xufVxuZnVuY3Rpb24gY3JlYXRlSGlkZGVuSW5wdXQoKSB7XG4gICAgdmFyIGN1cnJlbnRXaW5kb3cgPSByZWRpcmVjdF8xLmdldFdpbmRvdygpO1xuICAgIGlmICghY3VycmVudFdpbmRvdyB8fCAhY3VycmVudFdpbmRvdy5kb2N1bWVudCB8fCAhY3VycmVudFdpbmRvdy5kb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGlucHV0RWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlucHV0RWxlbWVudCk7XG4gICAgcmV0dXJuIGlucHV0RWxlbWVudDtcbn1cbmZ1bmN0aW9uIHByaW50V2luZG93KCkge1xuICAgIGlmICghcmVkaXJlY3RfMS5nZXRXaW5kb3coKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEB0cy1pZ25vcmU6IEZpeGVkIGluIFR5cGVTY3JpcHQgMi44LjJcbiAgICB3aW5kb3cucHJpbnQoKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZU1vYmlsZUFwcFByaW50KCkge1xuICAgIHZhciBpbnB1dCA9IGNyZWF0ZUhpZGRlbklucHV0KCk7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlucHV0LnNlbGVjdCgpO1xuICAgIHByaW50V2luZG93KCk7XG4gICAgaW5wdXQucmVtb3ZlKCk7XG59XG5mdW5jdGlvbiBoYW5kbGVBcHBQcmludCgpIHtcbiAgICBpZiAoaXNSdW5uaW5nT25pT1MoKSkge1xuICAgICAgICBoYW5kbGVNb2JpbGVBcHBQcmludCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcHJpbnRXaW5kb3coKTtcbiAgICB9XG59XG5leHBvcnRzLmhhbmRsZUFwcFByaW50ID0gaGFuZGxlQXBwUHJpbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0V2luZG93ID0gZXhwb3J0cy5nZXRMb2NhdGlvbiA9IGV4cG9ydHMucmVkaXJlY3QgPSBleHBvcnRzLnNob3VsZFJlZGlyZWN0ID0gdm9pZCAwO1xuZnVuY3Rpb24gc2hvdWxkUmVkaXJlY3QoZnJhbWUpIHtcbiAgICByZXR1cm4gZnJhbWUgPT09IHdpbmRvdztcbn1cbmV4cG9ydHMuc2hvdWxkUmVkaXJlY3QgPSBzaG91bGRSZWRpcmVjdDtcbmZ1bmN0aW9uIHJlZGlyZWN0KHVybCkge1xuICAgIHZhciBsb2NhdGlvbiA9IGdldExvY2F0aW9uKCk7XG4gICAgaWYgKCFsb2NhdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxvY2F0aW9uLmFzc2lnbih1cmwpO1xufVxuZXhwb3J0cy5yZWRpcmVjdCA9IHJlZGlyZWN0O1xuZnVuY3Rpb24gZ2V0TG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIGhhc1dpbmRvdygpID8gd2luZG93LmxvY2F0aW9uIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbiA9IGdldExvY2F0aW9uO1xuZnVuY3Rpb24gZ2V0V2luZG93KCkge1xuICAgIHJldHVybiBoYXNXaW5kb3coKSA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydHMuZ2V0V2luZG93ID0gZ2V0V2luZG93O1xuZnVuY3Rpb24gaGFzV2luZG93KCkge1xuICAgIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5MaWZlY3ljbGVIb29rID0gZXhwb3J0cy5NZXNzYWdlVHlwZSA9IGV4cG9ydHMuUGVybWlzc2lvblR5cGUgPSB2b2lkIDA7XG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG52YXIgUGVybWlzc2lvblR5cGU7XG4oZnVuY3Rpb24gKFBlcm1pc3Npb25UeXBlKSB7XG4gICAgUGVybWlzc2lvblR5cGVbXCJEaXNwYXRjaFwiXSA9IFwiRGlzcGF0Y2hcIjtcbiAgICBQZXJtaXNzaW9uVHlwZVtcIlN1YnNjcmliZVwiXSA9IFwiU3Vic2NyaWJlXCI7XG59KShQZXJtaXNzaW9uVHlwZSA9IGV4cG9ydHMuUGVybWlzc2lvblR5cGUgfHwgKGV4cG9ydHMuUGVybWlzc2lvblR5cGUgPSB7fSkpO1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xudmFyIE1lc3NhZ2VUeXBlO1xuKGZ1bmN0aW9uIChNZXNzYWdlVHlwZSkge1xuICAgIE1lc3NhZ2VUeXBlW1wiR2V0U3RhdGVcIl0gPSBcImdldFN0YXRlXCI7XG4gICAgTWVzc2FnZVR5cGVbXCJEaXNwYXRjaFwiXSA9IFwiZGlzcGF0Y2hcIjtcbiAgICBNZXNzYWdlVHlwZVtcIlN1YnNjcmliZVwiXSA9IFwic3Vic2NyaWJlXCI7XG4gICAgTWVzc2FnZVR5cGVbXCJVbnN1YnNjcmliZVwiXSA9IFwidW5zdWJzY3JpYmVcIjtcbn0pKE1lc3NhZ2VUeXBlID0gZXhwb3J0cy5NZXNzYWdlVHlwZSB8fCAoZXhwb3J0cy5NZXNzYWdlVHlwZSA9IHt9KSk7XG4vKipcbiAqXG4gKiBUaGVyZSBhcmUgdHdvIHR5cGVzIG9mIGhvb2tzOiBgTGlmZWN5Y2xlSG9vay5EaXNwYXRjaEFjdGlvbmAgYW5kIGBMaWZlY3ljbGVIb29rLlVwZGF0ZUFjdGlvbmAuXG4gKlxuICogQHJlbWFya3NcbiAqIGBEaXNwYXRjaEFjdGlvbmAgaG9va3MgYXJlIHJ1biB3aGVuIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkIHdpdGggdGhlIGAuZGlzcGF0Y2goKWAgZnVuY3Rpb246XG4gKlxuICogYGBganNcbiAqIGNvbnN0IHRvYXN0Tm90aWNlID0gVG9hc3QuY3JlYXRlKGFwcCwge21lc3NhZ2U6ICdQcm9kdWN0IHNhdmVkJ30pO1xuICogdG9hc3ROb3RpY2UuZGlzcGF0Y2goVG9hc3QuQWN0aW9uLlNIT1cpO1xuICogYGBgXG4gKlxuICogYFVwZGF0ZUFjdGlvbmAgaG9va3MgYXJlIHJ1biB3aGVuIGFuIGFjdGlvbiBpcyB1cGRhdGVkLCB1c2luZyB0aGUgYC5zZXQoKWAgZnVuY3Rpb246XG4gKlxuICogYGBganNcbiAqIHRvYXN0Tm90aWNlLnNldCh7bWVzc2FnZTogJ1Byb2R1Y3QgY291bGQgbm90IGJlIHNhdmVkJywgaXNFcnJvcjogdHJ1ZX0pO1xuICogYGBgXG4gKlxuICogQHB1YmxpY1xuICovXG52YXIgTGlmZWN5Y2xlSG9vaztcbihmdW5jdGlvbiAoTGlmZWN5Y2xlSG9vaykge1xuICAgIExpZmVjeWNsZUhvb2tbXCJVcGRhdGVBY3Rpb25cIl0gPSBcIlVwZGF0ZUFjdGlvblwiO1xuICAgIExpZmVjeWNsZUhvb2tbXCJEaXNwYXRjaEFjdGlvblwiXSA9IFwiRGlzcGF0Y2hBY3Rpb25cIjtcbn0pKExpZmVjeWNsZUhvb2sgPSBleHBvcnRzLkxpZmVjeWNsZUhvb2sgfHwgKGV4cG9ydHMuTGlmZWN5Y2xlSG9vayA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlQXBwID0gdm9pZCAwO1xudmFyIHZhbGlkYXRlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGVcIikpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi92YWxpZGF0ZS91dGlsc1wiKTtcbnZhciByZWRpcmVjdF8xID0gcmVxdWlyZShcIi4vY2xpZW50L3JlZGlyZWN0XCIpO1xudmFyIGNsaWVudF8xID0gcmVxdWlyZShcIi4vY2xpZW50XCIpO1xudmFyIHNoYXJlZF8xID0gcmVxdWlyZShcIi4vdXRpbC9zaGFyZWRcIik7XG4vKipcbiAqIENyZWF0ZXMgeW91ciBhcHBsaWNhdGlvbiBpbnN0YW5jZSB3aXRoIHZhbGlkYXRvciBtaWRkbGV3YXJlLlxuICogQHBhcmFtIGNvbmZpZyAtIEJvdGggYGFwaUtleWAgYW5kIGBzaG9wT3JpZ2luYCBhcmUgcmVxdWlyZWQuXG4gKiBAcmVtYXJrc1xuICogUGxlYXNlIG5vdGUgdGhhdCBgZm9yY2VSZWRpcmVjdGAgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIGVudmlyb25tZW50IChgc2hvcG5hbWUubXlzaG9waWZ5LmNvbS9hZG1pbmApLlxuICogWW91IHdpbGwgbmVlZCB0byBzdG9yZSBgc2hvcE9yaWdpbmAgZHVyaW5nIHRoZSBhdXRoZW50aWNhdGlvbiBwcm9jZXNzIGFuZCB0aGVuIHJldHJpZXZlIGl0IGZvciB0aGUgY29kZVxuICogdG8gd29yayBwcm9wZXJseS4gVG8gbGVhcm4gbW9yZSBhYm91dCB0aGlzIHByb2Nlc3MsIHNlZVxuICoge0BsaW5rIGh0dHBzOi8vaGVscC5zaG9waWZ5LmNvbS9hcGkvZW1iZWRkZWQtYXBwcy9zaG9wLW9yaWdpbiB8IEdldHRpbmcgYW5kIHN0b3JpbmcgdGhlIHNob3Agb3JpZ2lufS5cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXBwKGNvbmZpZykge1xuICAgIHZhciBjdXJyZW50V2luZG93ID0gcmVkaXJlY3RfMS5nZXRXaW5kb3coKTtcbiAgICBpZiAoIWN1cnJlbnRXaW5kb3cpIHtcbiAgICAgICAgcmV0dXJuIHNoYXJlZF8xLnNlcnZlckFwcEJyaWRnZTtcbiAgICB9XG4gICAgdXRpbHNfMS5taXhlZEFwcENsaWVudENoZWNrKGN1cnJlbnRXaW5kb3cpO1xuICAgIHJldHVybiBjbGllbnRfMS5jcmVhdGVBcHBXcmFwcGVyKGN1cnJlbnRXaW5kb3cudG9wLCBjdXJyZW50V2luZG93LmxvY2F0aW9uLm9yaWdpbiwgW3ZhbGlkYXRlXzEuZGVmYXVsdF0pKGNvbmZpZyk7XG59XG5leHBvcnRzLmNyZWF0ZUFwcCA9IGNyZWF0ZUFwcDtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUFwcDtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9NZXNzYWdlVHJhbnNwb3J0XCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jbGllbnRcIiksIGV4cG9ydHMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZW52XzEgPSByZXF1aXJlKFwiLi91dGlsL2VudlwiKTtcbnZhciBjcmVhdGVBcHAgPSBlbnZfMS5pc0RldmVsb3BtZW50XG4gICAgPyByZXF1aXJlKCcuL2RldmVsb3BtZW50JykuZGVmYXVsdFxuICAgIDogcmVxdWlyZSgnLi9wcm9kdWN0aW9uJykuZGVmYXVsdDtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUFwcDtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9NZXNzYWdlVHJhbnNwb3J0XCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jbGllbnRcIiksIGV4cG9ydHMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vTWVzc2FnZVRyYW5zcG9ydFwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY2xpZW50XCIpLCBleHBvcnRzKTtcbnZhciBwcm9kdWN0aW9uXzEgPSByZXF1aXJlKFwiLi9wcm9kdWN0aW9uXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcHJvZHVjdGlvbl8xLmNyZWF0ZUFwcDsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZW1vdmVGcm9tQ29sbGVjdGlvbiA9IGV4cG9ydHMuYWRkQW5kUmVtb3ZlRnJvbUNvbGxlY3Rpb24gPSB2b2lkIDA7XG4vKipcbiAqIEFkZCBhbiBpdGVtIHRvIGEgY29sbGVjdGlvbiwgcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCBjYW4gdGhlbiBiZSB1c2VkIHRvXG4gKiByZW1vdmUgdGhlIGl0ZW0gZnJvbSB0aGUgY29sbGVjdGlvbi4gT3B0aW9uYWxseSBhY2NlcHRpbmcgYSBjYWxsYmFjayB0aGF0IGlzXG4gKiBpbnZva2VkIHdoZW4gdGhlIGl0ZW0gaXMgcmVtb3ZlZCBmcm9tIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiBhZGRBbmRSZW1vdmVGcm9tQ29sbGVjdGlvbihjb2xsZWN0aW9uLCBpdGVtLCB0aGVuKSB7XG4gICAgY29sbGVjdGlvbi5wdXNoKGl0ZW0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVGcm9tQ29sbGVjdGlvbihjb2xsZWN0aW9uLCBpdGVtLCB0aGVuKTtcbiAgICB9O1xufVxuZXhwb3J0cy5hZGRBbmRSZW1vdmVGcm9tQ29sbGVjdGlvbiA9IGFkZEFuZFJlbW92ZUZyb21Db2xsZWN0aW9uO1xuLyoqXG4gKiBSZW1vdmUgdGhlIGl0ZW0gZnJvbSB0aGUgY29sbGVjdGlvbi4gT3B0aW9uYWxseSBhY2NlcHRpbmcgYSBjYWxsYmFjayB0aGF0IGlzXG4gKiBpbnZva2VkIHdoZW4gdGhlIGl0ZW0gaXMgcmVtb3ZlZCBmcm9tIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiByZW1vdmVGcm9tQ29sbGVjdGlvbihjb2xsZWN0aW9uLCBpdGVtLCB0aGVuKSB7XG4gICAgdmFyIGlkeCA9IGNvbGxlY3Rpb24uZmluZEluZGV4KGZ1bmN0aW9uIChpKSB7IHJldHVybiBpID09PSBpdGVtOyB9KTtcbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgY29sbGVjdGlvbi5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgaWYgKHRoZW4pIHtcbiAgICAgICAgICAgIHRoZW4oaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMucmVtb3ZlRnJvbUNvbGxlY3Rpb24gPSByZW1vdmVGcm9tQ29sbGVjdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc0ZyYW1lbGVzcyA9IGV4cG9ydHMuaXNEZXZlbG9wbWVudENsaWVudCA9IGV4cG9ydHMuaXNQcm9kdWN0aW9uID0gZXhwb3J0cy5pc0RldmVsb3BtZW50ID0gZXhwb3J0cy5pc0NsaWVudCA9IGV4cG9ydHMuaXNTZXJ2ZXIgPSB2b2lkIDA7XG5leHBvcnRzLmlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLmlzQ2xpZW50ID0gIWV4cG9ydHMuaXNTZXJ2ZXI7XG5leHBvcnRzLmlzRGV2ZWxvcG1lbnQgPSB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XG5leHBvcnRzLmlzUHJvZHVjdGlvbiA9ICFleHBvcnRzLmlzRGV2ZWxvcG1lbnQ7XG5leHBvcnRzLmlzRGV2ZWxvcG1lbnRDbGllbnQgPSBleHBvcnRzLmlzRGV2ZWxvcG1lbnQgJiYgZXhwb3J0cy5pc0NsaWVudDtcbmV4cG9ydHMuaXNGcmFtZWxlc3MgPSAhZXhwb3J0cy5pc1NlcnZlciAmJiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCcgRnJhbWVsZXNzICcpID4gMDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zZXJ2ZXJBcHBCcmlkZ2UgPSB2b2lkIDA7XG52YXIgRXJyb3JfMSA9IHJlcXVpcmUoXCIuLi9hY3Rpb25zL0Vycm9yXCIpO1xudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7IH07XG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnRzLnNlcnZlckFwcEJyaWRnZSA9IHtcbiAgICBkaXNwYXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICB9LFxuICAgIGZlYXR1cmVzQXZhaWxhYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChFcnJvcl8xLmZyb21BY3Rpb24oJ0ZlYXR1cmUgZGV0ZWN0aW9uIGlzIG9ubHkgYXZhaWxhYmxlIG9uIHRoZSBjbGllbnQgc2lkZS4nLCBFcnJvcl8xLkFwcEFjdGlvblR5cGUuV0lORE9XX1VOREVGSU5FRCkpO1xuICAgIH0sXG4gICAgZ2V0U3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KEVycm9yXzEuZnJvbUFjdGlvbignU3RhdGUgaXMgb25seSBhdmFpbGFibGUgb24gdGhlIGNsaWVudCBzaWRlLicsIEVycm9yXzEuQXBwQWN0aW9uVHlwZS5XSU5ET1dfVU5ERUZJTkVEKSk7XG4gICAgfSxcbiAgICBsb2NhbE9yaWdpbjogJycsXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBub29wO1xuICAgIH0sXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFjdGlvblR5cGUgPSBleHBvcnRzLnZhbGlkYXRlQWN0aW9uID0gZXhwb3J0cy52YWxpZGF0ZVByb3BzID0gZXhwb3J0cy5idXR0b25TY2hlbWFXaXRoSWQgPSBleHBvcnRzLmJ1dHRvblNjaGVtYSA9IHZvaWQgMDtcbnZhciBCdXR0b25fMSA9IHJlcXVpcmUoXCIuLi8uLi9hY3Rpb25zL0J1dHRvblwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFjdGlvblR5cGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEJ1dHRvbl8xLkFjdGlvblR5cGU7IH0gfSk7XG52YXIgdHlwZV92YWxpZGF0ZV8xID0gcmVxdWlyZShcIi4uL3R5cGUtdmFsaWRhdGVcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmV4cG9ydHMuYnV0dG9uU2NoZW1hID0gdHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNPYmplY3Qoe1xuICAgIGRpc2FibGVkOiB0eXBlX3ZhbGlkYXRlXzEubWFrZU9wdGlvbmFsKHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzQm9vbGVhbigpKSxcbiAgICBsYWJlbDogdHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNTdHJpbmcoKSxcbiAgICBzdHlsZTogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc0VudW0oQnV0dG9uXzEuU3R5bGUpKSxcbiAgICBpY29uOiB0eXBlX3ZhbGlkYXRlXzEubWFrZU9wdGlvbmFsKHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzRW51bShCdXR0b25fMS5JY29uKSksXG4gICAgbG9hZGluZzogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc0Jvb2xlYW4oKSksXG59KTtcbmV4cG9ydHMuYnV0dG9uU2NoZW1hV2l0aElkID0gdHlwZV92YWxpZGF0ZV8xLmNvbXBvc2VTY2hlbWFzKHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzT2JqZWN0KHtcbiAgICBpZDogdHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNTdHJpbmcoKSxcbn0pLCBleHBvcnRzLmJ1dHRvblNjaGVtYSk7XG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BzKHByb3BzKSB7XG4gICAgcmV0dXJuIHR5cGVfdmFsaWRhdGVfMS52YWxpZGF0ZShwcm9wcywgZXhwb3J0cy5idXR0b25TY2hlbWEpO1xufVxuZXhwb3J0cy52YWxpZGF0ZVByb3BzID0gdmFsaWRhdGVQcm9wcztcbmZ1bmN0aW9uIHZhbGlkYXRlQWN0aW9uKGFjdGlvbikge1xuICAgIHZhciB2YWxpZGF0b3IgPSB1dGlsc18xLmNyZWF0ZUFjdGlvblZhbGlkYXRvcihCdXR0b25fMS5BY3Rpb25UeXBlLCBhY3Rpb24udHlwZSA9PT0gQnV0dG9uXzEuQWN0aW9uVHlwZS5VUERBVEUgPyBleHBvcnRzLmJ1dHRvblNjaGVtYSA6IHVuZGVmaW5lZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgcmV0dXJuIHR5cGVfdmFsaWRhdGVfMS52YWxpZGF0ZShhY3Rpb24sIHZhbGlkYXRvcik7XG59XG5leHBvcnRzLnZhbGlkYXRlQWN0aW9uID0gdmFsaWRhdGVBY3Rpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQWN0aW9uVHlwZSA9IGV4cG9ydHMudmFsaWRhdGVBY3Rpb24gPSBleHBvcnRzLnZhbGlkYXRlUHJvcHMgPSBleHBvcnRzLmJ1dHRvbkdyb3VwU2NoZW1hID0gdm9pZCAwO1xudmFyIEJ1dHRvbkdyb3VwXzEgPSByZXF1aXJlKFwiLi4vLi4vYWN0aW9ucy9CdXR0b25Hcm91cFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFjdGlvblR5cGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEJ1dHRvbkdyb3VwXzEuQWN0aW9uVHlwZTsgfSB9KTtcbnZhciB0eXBlX3ZhbGlkYXRlXzEgPSByZXF1aXJlKFwiLi4vdHlwZS12YWxpZGF0ZVwiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIGJ1dHRvbl8xID0gcmVxdWlyZShcIi4vYnV0dG9uXCIpO1xuZXhwb3J0cy5idXR0b25Hcm91cFNjaGVtYSA9IHR5cGVfdmFsaWRhdGVfMS5jb21wb3NlU2NoZW1hcyhidXR0b25fMS5idXR0b25TY2hlbWEsIHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzT2JqZWN0KHtcbiAgICBidXR0b25zOiB0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc0FycmF5KHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwoYnV0dG9uXzEuYnV0dG9uU2NoZW1hV2l0aElkKSksXG59KSk7XG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BzKHByb3BzKSB7XG4gICAgcmV0dXJuIHR5cGVfdmFsaWRhdGVfMS52YWxpZGF0ZShwcm9wcywgZXhwb3J0cy5idXR0b25Hcm91cFNjaGVtYSk7XG59XG5leHBvcnRzLnZhbGlkYXRlUHJvcHMgPSB2YWxpZGF0ZVByb3BzO1xuZnVuY3Rpb24gdmFsaWRhdGVBY3Rpb24oYWN0aW9uKSB7XG4gICAgdmFyIHZhbGlkYXRvciA9IHV0aWxzXzEuY3JlYXRlQWN0aW9uVmFsaWRhdG9yKEJ1dHRvbkdyb3VwXzEuQWN0aW9uVHlwZSwgZXhwb3J0cy5idXR0b25Hcm91cFNjaGVtYSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgcmV0dXJuIHR5cGVfdmFsaWRhdGVfMS52YWxpZGF0ZShhY3Rpb24sIHZhbGlkYXRvcik7XG59XG5leHBvcnRzLnZhbGlkYXRlQWN0aW9uID0gdmFsaWRhdGVBY3Rpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQWN0aW9uVHlwZSA9IGV4cG9ydHMudmFsaWRhdGVBY3Rpb24gPSB2b2lkIDA7XG52YXIgQ2FydF8xID0gcmVxdWlyZShcIi4uLy4uL2FjdGlvbnMvQ2FydFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFjdGlvblR5cGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIENhcnRfMS5BY3Rpb25UeXBlOyB9IH0pO1xudmFyIHR5cGVfdmFsaWRhdGVfMSA9IHJlcXVpcmUoXCIuLi90eXBlLXZhbGlkYXRlXCIpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgYWRkcmVzc1NjaGVtYSA9IHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzT2JqZWN0KHtcbiAgICBhZGRyZXNzMTogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc1N0cmluZygpKSxcbiAgICBhZGRyZXNzMjogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc1N0cmluZygpKSxcbiAgICBjaXR5OiB0eXBlX3ZhbGlkYXRlXzEubWFrZU9wdGlvbmFsKHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzU3RyaW5nKCkpLFxuICAgIGNvbXBhbnk6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNTdHJpbmcoKSksXG4gICAgZmlyc3ROYW1lOiB0eXBlX3ZhbGlkYXRlXzEubWFrZU9wdGlvbmFsKHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzU3RyaW5nKCkpLFxuICAgIGxhc3ROYW1lOiB0eXBlX3ZhbGlkYXRlXzEubWFrZU9wdGlvbmFsKHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzU3RyaW5nKCkpLFxuICAgIHBob25lOiB0eXBlX3ZhbGlkYXRlXzEubWFrZU9wdGlvbmFsKHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzU3RyaW5nKCkpLFxuICAgIHByb3ZpbmNlOiB0eXBlX3ZhbGlkYXRlXzEubWFrZU9wdGlvbmFsKHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzU3RyaW5nKCkpLFxuICAgIGNvdW50cnk6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNTdHJpbmcoKSksXG4gICAgemlwOiB0eXBlX3ZhbGlkYXRlXzEubWFrZU9wdGlvbmFsKHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzU3RyaW5nKCkpLFxuICAgIG5hbWU6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNTdHJpbmcoKSksXG4gICAgcHJvdmluY2VDb2RlOiB0eXBlX3ZhbGlkYXRlXzEubWFrZU9wdGlvbmFsKHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzU3RyaW5nKCkpLFxuICAgIGNvdW50cnlDb2RlOiB0eXBlX3ZhbGlkYXRlXzEubWFrZU9wdGlvbmFsKHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzU3RyaW5nKCkpLFxufSk7XG52YXIgZGlzY291bnRTY2hlbWEgPSB0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc09iamVjdCh7XG4gICAgYW1vdW50OiB0eXBlX3ZhbGlkYXRlXzEubWFrZU9wdGlvbmFsKHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzUG9zaXRpdmVJbnRlZ2VyKCkpLFxuICAgIGRpc2NvdW50RGVzY3JpcHRpb246IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNTdHJpbmcoKSksXG4gICAgdHlwZTogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc1N0cmluZygpKSxcbiAgICBkaXNjb3VudENvZGU6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNTdHJpbmcoKSksXG59KTtcbnZhciBkaXNjb3VudEFtb3VudCA9IHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzT2JqZWN0KHtcbiAgICBhbW91bnQ6IHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzUG9zaXRpdmVOdW1iZXIoKSxcbiAgICBkaXNjb3VudERlc2NyaXB0aW9uOiB0eXBlX3ZhbGlkYXRlXzEubWFrZU9wdGlvbmFsKHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzU3RyaW5nKCkpLFxuICAgIHR5cGU6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNTdHJpbmcoKSksXG59KTtcbnZhciBkaXNjb3VudENvZGUgPSB0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc09iamVjdCh7XG4gICAgZGlzY291bnRDb2RlOiB0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc1N0cmluZygpLFxufSk7XG52YXIgbGluZUl0ZW1TY2hlbWEgPSB0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc09iamVjdCh7XG4gICAgcHJpY2U6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNQb3NpdGl2ZU51bWJlcigpKSxcbiAgICBxdWFudGl0eTogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc1Bvc2l0aXZlSW50ZWdlcigpKSxcbiAgICB0aXRsZTogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc1N0cmluZygpKSxcbiAgICB2YXJpYW50SWQ6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNQb3NpdGl2ZUludGVnZXIoKSksXG4gICAgZGlzY291bnQ6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwoZGlzY291bnRBbW91bnQpLFxufSk7XG52YXIgdXBkYXRlTGluZUl0ZW1TY2hlbWEgPSB0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc09iamVjdCh7XG4gICAgcXVhbnRpdHk6IHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzUG9zaXRpdmVJbnRlZ2VyKCksXG59KTtcbnZhciBjdXN0b21lclNjaGVtYSA9IHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzT2JqZWN0KHtcbiAgICBpZDogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc1Bvc2l0aXZlSW50ZWdlcigpKSxcbiAgICBlbWFpbDogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc1N0cmluZygpKSxcbiAgICBmaXJzdE5hbWU6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNTdHJpbmcoKSksXG4gICAgbGFzdE5hbWU6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNTdHJpbmcoKSksXG4gICAgbm90ZTogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc1N0cmluZygpKSxcbiAgICBhZGRyZXNzZXM6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNBcnJheShhZGRyZXNzU2NoZW1hKSksXG59KTtcbnZhciBub3RlU2NoZW1hID0gdHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNPYmplY3Qoe1xuICAgIG5hbWU6IHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzU3RyaW5nKCksXG4gICAgdmFsdWU6IHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzU3RyaW5nKCksXG59KTtcbnZhciBjYXJ0U2NoZW1hID0gdHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNPYmplY3Qoe1xuICAgIGNhcnREaXNjb3VudDogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbChkaXNjb3VudFNjaGVtYSksXG4gICAgY3VzdG9tZXI6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwoY3VzdG9tZXJTY2hlbWEpLFxuICAgIGdyYW5kVG90YWw6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNTdHJpbmcoKSksXG4gICAgbGluZUl0ZW1zOiB0eXBlX3ZhbGlkYXRlXzEubWFrZU9wdGlvbmFsKHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzQXJyYXkobGluZUl0ZW1TY2hlbWEpKSxcbiAgICBub3RlQXR0cmlidXRlczogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc0FycmF5KG5vdGVTY2hlbWEpKSxcbiAgICBzdWJUb3RhbDogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc1N0cmluZygpKSxcbiAgICB0YXhUb3RhbDogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc1N0cmluZygpKSxcbn0pO1xudmFyIHByb3BlcnRpZXNTY2hlbWEgPSB0eXBlX3ZhbGlkYXRlXzEuY29tcG9zZVNjaGVtYXModHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNPYmplY3Qoe30pLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgdmFsaWRhdG9yID0gdHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNTdHJpbmcoKTtcbiAgICB2YXIgc2NoZW1hID0gT2JqZWN0LmtleXModmFsdWUpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgYWNjW2tleV0gPSB2YWxpZGF0b3I7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICAgIHJldHVybiB0eXBlX3ZhbGlkYXRlXzEudmFsaWRhdGUodmFsdWUsIHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzT2JqZWN0KHNjaGVtYSkpO1xufSk7XG52YXIgbWF0Y2hlc1N0cmluZ0FycmF5ID0gdHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNBcnJheSh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc1N0cmluZygpKTtcbmZ1bmN0aW9uIGNyZWF0ZURhdGFWYWxpZGF0b3IoZGF0YSkge1xuICAgIHJldHVybiB1dGlsc18xLmNyZWF0ZUFjdGlvblZhbGlkYXRvcihDYXJ0XzEuQWN0aW9uVHlwZSwgZGF0YSA/IHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzT2JqZWN0KHsgZGF0YTogZGF0YSB9KSA6IHVuZGVmaW5lZCwgdHJ1ZSwgdHJ1ZSk7XG59XG5mdW5jdGlvbiBjcmVhdGVEYXRhVmFsaWRhdG9yV2l0aEluZGV4KGRhdGEpIHtcbiAgICB2YXIgaW5kZXhTY2hlbWEgPSB0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc09iamVjdCh7IGluZGV4OiB0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc1Bvc2l0aXZlSW50ZWdlcigpIH0pO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHZhciBkYXRhU2NoZW1hID0gdHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNPYmplY3QoeyBkYXRhOiBkYXRhIH0pO1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5jcmVhdGVBY3Rpb25WYWxpZGF0b3IoQ2FydF8xLkFjdGlvblR5cGUsIHR5cGVfdmFsaWRhdGVfMS5jb21wb3NlU2NoZW1hcyhpbmRleFNjaGVtYSwgZGF0YVNjaGVtYSksIHRydWUsIHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gdXRpbHNfMS5jcmVhdGVBY3Rpb25WYWxpZGF0b3IoQ2FydF8xLkFjdGlvblR5cGUsIGluZGV4U2NoZW1hLCB0cnVlLCB0cnVlKTtcbn1cbmZ1bmN0aW9uIGdldERpc2NvdW50U2NoZW1hKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5hbW91bnQpIHtcbiAgICAgICAgcmV0dXJuIGRpc2NvdW50QW1vdW50O1xuICAgIH1cbiAgICByZXR1cm4gZGlzY291bnRDb2RlO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVBY3Rpb24oYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIENhcnRfMS5BY3Rpb25UeXBlLlVQREFURTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlX3ZhbGlkYXRlXzEudmFsaWRhdGUoYWN0aW9uLCBjcmVhdGVEYXRhVmFsaWRhdG9yKGNhcnRTY2hlbWEpKTtcbiAgICAgICAgY2FzZSBDYXJ0XzEuQWN0aW9uVHlwZS5TRVRfQ1VTVE9NRVI6XG4gICAgICAgICAgICByZXR1cm4gdHlwZV92YWxpZGF0ZV8xLnZhbGlkYXRlKGFjdGlvbiwgY3JlYXRlRGF0YVZhbGlkYXRvcihjdXN0b21lclNjaGVtYSkpO1xuICAgICAgICBjYXNlIENhcnRfMS5BY3Rpb25UeXBlLkFERF9DVVNUT01FUl9BRERSRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGVfdmFsaWRhdGVfMS52YWxpZGF0ZShhY3Rpb24sIGNyZWF0ZURhdGFWYWxpZGF0b3IoYWRkcmVzc1NjaGVtYSkpO1xuICAgICAgICBjYXNlIENhcnRfMS5BY3Rpb25UeXBlLlVQREFURV9DVVNUT01FUl9BRERSRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGVfdmFsaWRhdGVfMS52YWxpZGF0ZShhY3Rpb24sIGNyZWF0ZURhdGFWYWxpZGF0b3JXaXRoSW5kZXgoYWRkcmVzc1NjaGVtYSkpO1xuICAgICAgICBjYXNlIENhcnRfMS5BY3Rpb25UeXBlLlNFVF9ESVNDT1VOVDpcbiAgICAgICAgICAgIHJldHVybiB0eXBlX3ZhbGlkYXRlXzEudmFsaWRhdGUoYWN0aW9uLCBjcmVhdGVEYXRhVmFsaWRhdG9yKGdldERpc2NvdW50U2NoZW1hKGFjdGlvbi5wYXlsb2FkLmRhdGEpKSk7XG4gICAgICAgIGNhc2UgQ2FydF8xLkFjdGlvblR5cGUuU0VUX1BST1BFUlRJRVM6XG4gICAgICAgICAgICByZXR1cm4gdHlwZV92YWxpZGF0ZV8xLnZhbGlkYXRlKGFjdGlvbiwgY3JlYXRlRGF0YVZhbGlkYXRvcihwcm9wZXJ0aWVzU2NoZW1hKSk7XG4gICAgICAgIGNhc2UgQ2FydF8xLkFjdGlvblR5cGUuUkVNT1ZFX1BST1BFUlRJRVM6XG4gICAgICAgICAgICByZXR1cm4gdHlwZV92YWxpZGF0ZV8xLnZhbGlkYXRlKGFjdGlvbiwgY3JlYXRlRGF0YVZhbGlkYXRvcihtYXRjaGVzU3RyaW5nQXJyYXkpKTtcbiAgICAgICAgY2FzZSBDYXJ0XzEuQWN0aW9uVHlwZS5BRERfTElORV9JVEVNOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGVfdmFsaWRhdGVfMS52YWxpZGF0ZShhY3Rpb24sIGNyZWF0ZURhdGFWYWxpZGF0b3IobGluZUl0ZW1TY2hlbWEpKTtcbiAgICAgICAgY2FzZSBDYXJ0XzEuQWN0aW9uVHlwZS5VUERBVEVfTElORV9JVEVNOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGVfdmFsaWRhdGVfMS52YWxpZGF0ZShhY3Rpb24sIGNyZWF0ZURhdGFWYWxpZGF0b3JXaXRoSW5kZXgodXBkYXRlTGluZUl0ZW1TY2hlbWEpKTtcbiAgICAgICAgY2FzZSBDYXJ0XzEuQWN0aW9uVHlwZS5SRU1PVkVfTElORV9JVEVNOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGVfdmFsaWRhdGVfMS52YWxpZGF0ZShhY3Rpb24sIGNyZWF0ZURhdGFWYWxpZGF0b3JXaXRoSW5kZXgoKSk7XG4gICAgICAgIGNhc2UgQ2FydF8xLkFjdGlvblR5cGUuU0VUX0xJTkVfSVRFTV9ESVNDT1VOVDpcbiAgICAgICAgICAgIHJldHVybiB0eXBlX3ZhbGlkYXRlXzEudmFsaWRhdGUoYWN0aW9uLCBjcmVhdGVEYXRhVmFsaWRhdG9yV2l0aEluZGV4KGRpc2NvdW50QW1vdW50KSk7XG4gICAgICAgIGNhc2UgQ2FydF8xLkFjdGlvblR5cGUuUkVNT1ZFX0xJTkVfSVRFTV9ESVNDT1VOVDpcbiAgICAgICAgICAgIHJldHVybiB0eXBlX3ZhbGlkYXRlXzEudmFsaWRhdGUoYWN0aW9uLCBjcmVhdGVEYXRhVmFsaWRhdG9yV2l0aEluZGV4KCkpO1xuICAgICAgICBjYXNlIENhcnRfMS5BY3Rpb25UeXBlLlNFVF9MSU5FX0lURU1fUFJPUEVSVElFUzpcbiAgICAgICAgICAgIHJldHVybiB0eXBlX3ZhbGlkYXRlXzEudmFsaWRhdGUoYWN0aW9uLCBjcmVhdGVEYXRhVmFsaWRhdG9yV2l0aEluZGV4KHByb3BlcnRpZXNTY2hlbWEpKTtcbiAgICAgICAgY2FzZSBDYXJ0XzEuQWN0aW9uVHlwZS5SRU1PVkVfTElORV9JVEVNX1BST1BFUlRJRVM6XG4gICAgICAgICAgICByZXR1cm4gdHlwZV92YWxpZGF0ZV8xLnZhbGlkYXRlKGFjdGlvbiwgY3JlYXRlRGF0YVZhbGlkYXRvcldpdGhJbmRleChtYXRjaGVzU3RyaW5nQXJyYXkpKTtcbiAgICAgICAgY2FzZSBDYXJ0XzEuQWN0aW9uVHlwZS5GRVRDSDpcbiAgICAgICAgY2FzZSBDYXJ0XzEuQWN0aW9uVHlwZS5SRU1PVkVfQ1VTVE9NRVI6XG4gICAgICAgIGNhc2UgQ2FydF8xLkFjdGlvblR5cGUuUkVNT1ZFX0RJU0NPVU5UOlxuICAgICAgICBjYXNlIENhcnRfMS5BY3Rpb25UeXBlLkNMRUFSOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHR5cGVfdmFsaWRhdGVfMS52YWxpZGF0ZShhY3Rpb24sIHV0aWxzXzEuY3JlYXRlQWN0aW9uVmFsaWRhdG9yKENhcnRfMS5BY3Rpb25UeXBlLCB1bmRlZmluZWQsIGZhbHNlLCB0cnVlKSk7XG4gICAgfVxufVxuZXhwb3J0cy52YWxpZGF0ZUFjdGlvbiA9IHZhbGlkYXRlQWN0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFjdGlvblR5cGUgPSBleHBvcnRzLnZhbGlkYXRlQWN0aW9uID0gZXhwb3J0cy52YWxpZGF0ZVByb3BzID0gZXhwb3J0cy5jb250ZXh0U2F2ZUJhclNjaGVtYSA9IHZvaWQgMDtcbnZhciB0eXBlX3ZhbGlkYXRlXzEgPSByZXF1aXJlKFwiLi4vdHlwZS12YWxpZGF0ZVwiKTtcbnZhciBDb250ZXh0dWFsU2F2ZUJhcl8xID0gcmVxdWlyZShcIi4uLy4uL2FjdGlvbnMvQ29udGV4dHVhbFNhdmVCYXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBY3Rpb25UeXBlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBDb250ZXh0dWFsU2F2ZUJhcl8xLkFjdGlvblR5cGU7IH0gfSk7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmV4cG9ydHMuY29udGV4dFNhdmVCYXJTY2hlbWEgPSB0eXBlX3ZhbGlkYXRlXzEubWFrZU9wdGlvbmFsKHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzT2JqZWN0KHtcbiAgICBmdWxsV2lkdGg6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNCb29sZWFuKCkpLFxuICAgIGRpc2NhcmRBY3Rpb246IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNPYmplY3Qoe1xuICAgICAgICBkaXNhYmxlZDogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc0Jvb2xlYW4oKSksXG4gICAgICAgIGRpc2NhcmRDb25maXJtYXRpb25Nb2RhbDogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc0Jvb2xlYW4oKSksXG4gICAgfSkpLFxuICAgIHNhdmVBY3Rpb246IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNPYmplY3Qoe1xuICAgICAgICBkaXNhYmxlZDogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc0Jvb2xlYW4oKSksXG4gICAgfSkpLFxuICAgIGxlYXZlQ29uZmlybWF0aW9uRGlzYWJsZTogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc0Jvb2xlYW4oKSksXG59KSk7XG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BzKHByb3BzKSB7XG4gICAgcmV0dXJuIHR5cGVfdmFsaWRhdGVfMS52YWxpZGF0ZShwcm9wcywgZXhwb3J0cy5jb250ZXh0U2F2ZUJhclNjaGVtYSk7XG59XG5leHBvcnRzLnZhbGlkYXRlUHJvcHMgPSB2YWxpZGF0ZVByb3BzO1xuZnVuY3Rpb24gdmFsaWRhdGVBY3Rpb24oYWN0aW9uKSB7XG4gICAgdmFyIHZhbGlkYXRvciA9IHV0aWxzXzEuY3JlYXRlQWN0aW9uVmFsaWRhdG9yKENvbnRleHR1YWxTYXZlQmFyXzEuQWN0aW9uVHlwZSwgZXhwb3J0cy5jb250ZXh0U2F2ZUJhclNjaGVtYSk7XG4gICAgcmV0dXJuIHR5cGVfdmFsaWRhdGVfMS52YWxpZGF0ZShhY3Rpb24sIHZhbGlkYXRvcik7XG59XG5leHBvcnRzLnZhbGlkYXRlQWN0aW9uID0gdmFsaWRhdGVBY3Rpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQWN0aW9uVHlwZSA9IGV4cG9ydHMudmFsaWRhdGVBY3Rpb24gPSBleHBvcnRzLnZhbGlkYXRlUHJvcHMgPSBleHBvcnRzLmZlZWRiYWNrTW9kYWxTY2hlbWEgPSB2b2lkIDA7XG52YXIgRmVlZGJhY2tNb2RhbF8xID0gcmVxdWlyZShcIi4uLy4uL2FjdGlvbnMvRmVlZGJhY2tNb2RhbFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFjdGlvblR5cGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEZlZWRiYWNrTW9kYWxfMS5BY3Rpb25UeXBlOyB9IH0pO1xudmFyIHR5cGVfdmFsaWRhdGVfMSA9IHJlcXVpcmUoXCIuLi90eXBlLXZhbGlkYXRlXCIpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5leHBvcnRzLmZlZWRiYWNrTW9kYWxTY2hlbWEgPSB0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc09iamVjdCh7XG4gICAgZm9ybUlkOiB0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc1Bvc2l0aXZlSW50ZWdlcigpLFxufSk7XG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BzKHByb3BzKSB7XG4gICAgcmV0dXJuIHR5cGVfdmFsaWRhdGVfMS52YWxpZGF0ZShwcm9wcywgZXhwb3J0cy5mZWVkYmFja01vZGFsU2NoZW1hKTtcbn1cbmV4cG9ydHMudmFsaWRhdGVQcm9wcyA9IHZhbGlkYXRlUHJvcHM7XG5mdW5jdGlvbiB2YWxpZGF0ZUFjdGlvbihhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgRmVlZGJhY2tNb2RhbF8xLkFjdGlvblR5cGUuT1BFTjpcbiAgICAgICAgICAgIHJldHVybiB0eXBlX3ZhbGlkYXRlXzEudmFsaWRhdGUoYWN0aW9uLCB1dGlsc18xLmNyZWF0ZUFjdGlvblZhbGlkYXRvcihGZWVkYmFja01vZGFsXzEuQWN0aW9uVHlwZSwgZXhwb3J0cy5mZWVkYmFja01vZGFsU2NoZW1hLCB0cnVlKSk7XG4gICAgICAgIGNhc2UgRmVlZGJhY2tNb2RhbF8xLkFjdGlvblR5cGUuQ0xPU0U6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gdHlwZV92YWxpZGF0ZV8xLnZhbGlkYXRlKGFjdGlvbiwgdXRpbHNfMS5jcmVhdGVBY3Rpb25WYWxpZGF0b3IoRmVlZGJhY2tNb2RhbF8xLkFjdGlvblR5cGUpKTtcbiAgICB9XG59XG5leHBvcnRzLnZhbGlkYXRlQWN0aW9uID0gdmFsaWRhdGVBY3Rpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQWN0aW9uVHlwZSA9IGV4cG9ydHMudmFsaWRhdGVBY3Rpb24gPSB2b2lkIDA7XG52YXIgRnVsbHNjcmVlbl8xID0gcmVxdWlyZShcIi4uLy4uL2FjdGlvbnMvRnVsbHNjcmVlblwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFjdGlvblR5cGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEZ1bGxzY3JlZW5fMS5BY3Rpb25UeXBlOyB9IH0pO1xudmFyIHR5cGVfdmFsaWRhdGVfMSA9IHJlcXVpcmUoXCIuLi90eXBlLXZhbGlkYXRlXCIpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG4vKipcbiAqIFBlcmZvcm1zIHZhbGlkYXRpb24gZm9yIGFuIGZ1bGxzY3JlZW4gYWN0aW9uXG4gKiBAcGFyYW0gYWN0aW9uIHRoZSBhY3Rpb24gYmVpbmcgZGlzcGF0Y2hlZFxuICogQHJldHVybnMgdW5kZWZpbmVkIG9yIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3JzXG4gKlxuICogQGJldGFcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVBY3Rpb24oYWN0aW9uKSB7XG4gICAgdmFyIHZhbGlkYXRvciA9IHV0aWxzXzEuY3JlYXRlQWN0aW9uVmFsaWRhdG9yKEZ1bGxzY3JlZW5fMS5BY3Rpb25UeXBlKTtcbiAgICByZXR1cm4gdHlwZV92YWxpZGF0ZV8xLnZhbGlkYXRlKGFjdGlvbiwgdmFsaWRhdG9yKTtcbn1cbmV4cG9ydHMudmFsaWRhdGVBY3Rpb24gPSB2YWxpZGF0ZUFjdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTGluayA9IGV4cG9ydHMuTWVudSA9IGV4cG9ydHMuVGl0bGVCYXIgPSBleHBvcnRzLlRvYXN0ID0gZXhwb3J0cy5SZXNvdXJjZVBpY2tlciA9IGV4cG9ydHMuUHJpbnQgPSBleHBvcnRzLk5hdmlnYXRpb24gPSBleHBvcnRzLk1vZGFsID0gZXhwb3J0cy5Mb2FkaW5nID0gZXhwb3J0cy5MZWF2ZUNvbmZpcm1hdGlvbiA9IGV4cG9ydHMuRnVsbHNjcmVlbiA9IGV4cG9ydHMuRmVlZGJhY2tNb2RhbCA9IGV4cG9ydHMuQ29udGV4dHVhbFNhdmVCYXIgPSBleHBvcnRzLkNhcnQgPSBleHBvcnRzLlNjYW5uZXIgPSBleHBvcnRzLkJ1dHRvbkdyb3VwID0gZXhwb3J0cy5CdXR0b24gPSB2b2lkIDA7XG52YXIgQnV0dG9uID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2J1dHRvblwiKSk7XG5leHBvcnRzLkJ1dHRvbiA9IEJ1dHRvbjtcbnZhciBTY2FubmVyID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3NjYW5uZXJcIikpO1xuZXhwb3J0cy5TY2FubmVyID0gU2Nhbm5lcjtcbnZhciBDYXJ0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2NhcnRcIikpO1xuZXhwb3J0cy5DYXJ0ID0gQ2FydDtcbnZhciBDb250ZXh0dWFsU2F2ZUJhciA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9jb250ZXh0dWFsU2F2ZUJhclwiKSk7XG5leHBvcnRzLkNvbnRleHR1YWxTYXZlQmFyID0gQ29udGV4dHVhbFNhdmVCYXI7XG52YXIgRmVlZGJhY2tNb2RhbCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9mZWVkYmFja01vZGFsXCIpKTtcbmV4cG9ydHMuRmVlZGJhY2tNb2RhbCA9IEZlZWRiYWNrTW9kYWw7XG52YXIgRnVsbHNjcmVlbiA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9mdWxsc2NyZWVuXCIpKTtcbmV4cG9ydHMuRnVsbHNjcmVlbiA9IEZ1bGxzY3JlZW47XG52YXIgTGVhdmVDb25maXJtYXRpb24gPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbGVhdmVDb25maXJtYXRpb25cIikpO1xuZXhwb3J0cy5MZWF2ZUNvbmZpcm1hdGlvbiA9IExlYXZlQ29uZmlybWF0aW9uO1xudmFyIExvYWRpbmcgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbG9hZGluZ1wiKSk7XG5leHBvcnRzLkxvYWRpbmcgPSBMb2FkaW5nO1xudmFyIE1vZGFsID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL21vZGFsXCIpKTtcbmV4cG9ydHMuTW9kYWwgPSBNb2RhbDtcbnZhciBOYXZpZ2F0aW9uID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL25hdmlnYXRpb25cIikpO1xuZXhwb3J0cy5OYXZpZ2F0aW9uID0gTmF2aWdhdGlvbjtcbnZhciBQcmludCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9wcmludFwiKSk7XG5leHBvcnRzLlByaW50ID0gUHJpbnQ7XG52YXIgQnV0dG9uR3JvdXAgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vYnV0dG9uR3JvdXBcIikpO1xuZXhwb3J0cy5CdXR0b25Hcm91cCA9IEJ1dHRvbkdyb3VwO1xudmFyIFJlc291cmNlUGlja2VyID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3Jlc291cmNlUGlja2VyXCIpKTtcbmV4cG9ydHMuUmVzb3VyY2VQaWNrZXIgPSBSZXNvdXJjZVBpY2tlcjtcbnZhciBUb2FzdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi90b2FzdFwiKSk7XG5leHBvcnRzLlRvYXN0ID0gVG9hc3Q7XG52YXIgVGl0bGVCYXIgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vdGl0bGVCYXJcIikpO1xuZXhwb3J0cy5UaXRsZUJhciA9IFRpdGxlQmFyO1xudmFyIE1lbnUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbWVudVwiKSk7XG5leHBvcnRzLk1lbnUgPSBNZW51O1xudmFyIExpbmsgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vbGlua1wiKSk7XG5leHBvcnRzLkxpbmsgPSBMaW5rO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFjdGlvblR5cGUgPSBleHBvcnRzLnZhbGlkYXRlQWN0aW9uID0gdm9pZCAwO1xudmFyIExlYXZlQ29uZmlybWF0aW9uXzEgPSByZXF1aXJlKFwiLi4vLi4vYWN0aW9ucy9MZWF2ZUNvbmZpcm1hdGlvblwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFjdGlvblR5cGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIExlYXZlQ29uZmlybWF0aW9uXzEuQWN0aW9uVHlwZTsgfSB9KTtcbnZhciB0eXBlX3ZhbGlkYXRlXzEgPSByZXF1aXJlKFwiLi4vdHlwZS12YWxpZGF0ZVwiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuZnVuY3Rpb24gdmFsaWRhdGVBY3Rpb24oYWN0aW9uKSB7XG4gICAgdmFyIHZhbGlkYXRvciA9IHV0aWxzXzEuY3JlYXRlQWN0aW9uVmFsaWRhdG9yKExlYXZlQ29uZmlybWF0aW9uXzEuQWN0aW9uVHlwZSk7XG4gICAgcmV0dXJuIHR5cGVfdmFsaWRhdGVfMS52YWxpZGF0ZShhY3Rpb24sIHZhbGlkYXRvcik7XG59XG5leHBvcnRzLnZhbGlkYXRlQWN0aW9uID0gdmFsaWRhdGVBY3Rpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQWN0aW9uVHlwZSA9IGV4cG9ydHMudmFsaWRhdGVBY3Rpb24gPSBleHBvcnRzLnZhbGlkYXRlUHJvcHMgPSBleHBvcnRzLmxpbmtBY3Rpb25TY2hlbWEgPSBleHBvcnRzLmxpbmtQcm9wc1NjaGVtYSA9IHZvaWQgMDtcbnZhciBhY3Rpb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vYWN0aW9uc1wiKTtcbnZhciB0eXBlX3ZhbGlkYXRlXzEgPSByZXF1aXJlKFwiLi4vdHlwZS12YWxpZGF0ZVwiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIEFwcExpbmtfMSA9IHJlcXVpcmUoXCIuLi8uLi9hY3Rpb25zL0xpbmsvQXBwTGlua1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFjdGlvblR5cGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEFwcExpbmtfMS5BY3Rpb25UeXBlOyB9IH0pO1xudmFyIGFsbG93ZWRSZWRpcmVjdFR5cGVzO1xuKGZ1bmN0aW9uIChhbGxvd2VkUmVkaXJlY3RUeXBlcykge1xuICAgIGFsbG93ZWRSZWRpcmVjdFR5cGVzW1wiQVBQXCJdID0gXCJBUFBcIjtcbn0pKGFsbG93ZWRSZWRpcmVjdFR5cGVzIHx8IChhbGxvd2VkUmVkaXJlY3RUeXBlcyA9IHt9KSk7XG5leHBvcnRzLmxpbmtQcm9wc1NjaGVtYSA9IHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzT2JqZWN0KHtcbiAgICBsYWJlbDogdHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNTdHJpbmcoKSxcbiAgICBkZXN0aW5hdGlvbjogdXRpbHNfMS5yZWxhdGl2ZVVybFNjaGVtYSxcbiAgICByZWRpcmVjdFR5cGU6IHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzRW51bShhbGxvd2VkUmVkaXJlY3RUeXBlcyksXG59KTtcbmV4cG9ydHMubGlua0FjdGlvblNjaGVtYSA9IHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzT2JqZWN0KHtcbiAgICBsYWJlbDogdHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNTdHJpbmcoKSxcbiAgICBkZXN0aW5hdGlvbjogdXRpbHNfMS5yZWxhdGl2ZVBhdGhTY2hlbWEsXG4gICAgcmVkaXJlY3RUeXBlOiB0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc0VudW0oYWxsb3dlZFJlZGlyZWN0VHlwZXMpLFxufSk7XG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BzKHByb3BzKSB7XG4gICAgcmV0dXJuIHR5cGVfdmFsaWRhdGVfMS52YWxpZGF0ZShwcm9wcywgZXhwb3J0cy5saW5rUHJvcHNTY2hlbWEpO1xufVxuZXhwb3J0cy52YWxpZGF0ZVByb3BzID0gdmFsaWRhdGVQcm9wcztcbmZ1bmN0aW9uIHZhbGlkYXRlQWN0aW9uKGFjdGlvbikge1xuICAgIHZhciBhY3Rpb25UeXBlID0gYWN0aW9uc18xLkFwcExpbmsuQWN0aW9uVHlwZTtcbiAgICB2YXIgc2NoZW1hO1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBhY3Rpb25zXzEuQXBwTGluay5BY3Rpb25UeXBlLlVQREFURTpcbiAgICAgICAgICAgIGFjdGlvblR5cGUgPSBhY3Rpb25zXzEuQXBwTGluay5BY3Rpb25UeXBlO1xuICAgICAgICAgICAgc2NoZW1hID0gZXhwb3J0cy5saW5rQWN0aW9uU2NoZW1hO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZV92YWxpZGF0ZV8xLnZhbGlkYXRlKGFjdGlvbiwgdXRpbHNfMS5jcmVhdGVBY3Rpb25WYWxpZGF0b3IoYWN0aW9uVHlwZSwgc2NoZW1hLCB0cnVlLCB0cnVlKSk7XG59XG5leHBvcnRzLnZhbGlkYXRlQWN0aW9uID0gdmFsaWRhdGVBY3Rpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQWN0aW9uVHlwZSA9IGV4cG9ydHMudmFsaWRhdGVBY3Rpb24gPSB2b2lkIDA7XG52YXIgTG9hZGluZ18xID0gcmVxdWlyZShcIi4uLy4uL2FjdGlvbnMvTG9hZGluZ1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFjdGlvblR5cGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIExvYWRpbmdfMS5BY3Rpb25UeXBlOyB9IH0pO1xudmFyIHR5cGVfdmFsaWRhdGVfMSA9IHJlcXVpcmUoXCIuLi90eXBlLXZhbGlkYXRlXCIpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5mdW5jdGlvbiB2YWxpZGF0ZUFjdGlvbihhY3Rpb24pIHtcbiAgICB2YXIgdmFsaWRhdG9yID0gdXRpbHNfMS5jcmVhdGVBY3Rpb25WYWxpZGF0b3IoTG9hZGluZ18xLkFjdGlvblR5cGUpO1xuICAgIHJldHVybiB0eXBlX3ZhbGlkYXRlXzEudmFsaWRhdGUoYWN0aW9uLCB2YWxpZGF0b3IpO1xufVxuZXhwb3J0cy52YWxpZGF0ZUFjdGlvbiA9IHZhbGlkYXRlQWN0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnZhbGlkYXRlQWN0aW9uID0gZXhwb3J0cy52YWxpZGF0ZVByb3BzID0gdm9pZCAwO1xudmFyIGFjdGlvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9hY3Rpb25zXCIpO1xudmFyIHR5cGVfdmFsaWRhdGVfMSA9IHJlcXVpcmUoXCIuLi90eXBlLXZhbGlkYXRlXCIpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgbGlua18xID0gcmVxdWlyZShcIi4vbGlua1wiKTtcbnZhciBsaW5rT3B0aW9uc1ZhbGlkYXRvciA9IHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzT2JqZWN0KHsgaWQ6IHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzU3RyaW5nKCksIG9wdGlvbnM6IGxpbmtfMS5saW5rUHJvcHNTY2hlbWEgfSk7XG5mdW5jdGlvbiBhY3RpdmVMaW5rRXJyb3IodmFsdWUpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgICBlcnJvcjogJ2ludmFsaWRfYWN0aXZlX2l0ZW0nLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgbWVzc2FnZTogJ2V4cGVjdGVkIGFjdGl2ZSBpdGVtIHRvIGV4aXN0IGluIG1lbnUgaXRlbXMnLFxuICAgICAgICB9LFxuICAgIF07XG59XG5mdW5jdGlvbiBnZXRPcHRpb25zU2NoZW1hKG9wdGlvbnMpIHtcbiAgICB2YXIgYmFzZVNjaGVtYSA9IHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzT2JqZWN0KHtcbiAgICAgICAgaXRlbXM6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNBcnJheShsaW5rT3B0aW9uc1ZhbGlkYXRvcikpLFxuICAgICAgICBhY3RpdmU6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwobGlua09wdGlvbnNWYWxpZGF0b3IpLFxuICAgIH0pO1xuICAgIHZhciBpdGVtcyA9IG9wdGlvbnMuaXRlbXMsIGFjdGl2ZSA9IG9wdGlvbnMuYWN0aXZlO1xuICAgIGlmIChpdGVtcyAmJiBhY3RpdmUpIHtcbiAgICAgICAgdmFyIGFjdGl2ZUl0ZW1TY2hlbWEgPSB0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc09iamVjdCh7XG4gICAgICAgICAgICBhY3RpdmU6IHR5cGVfdmFsaWRhdGVfMS5jb21wb3NlU2NoZW1hcyhsaW5rT3B0aW9uc1ZhbGlkYXRvciwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0uaWQgPT09IHZhbHVlLmlkOyB9KSA/IHVuZGVmaW5lZCA6IGFjdGl2ZUxpbmtFcnJvcih2YWx1ZSk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlX3ZhbGlkYXRlXzEuY29tcG9zZVNjaGVtYXMoYmFzZVNjaGVtYSwgYWN0aXZlSXRlbVNjaGVtYSk7XG4gICAgfVxuICAgIHJldHVybiBiYXNlU2NoZW1hO1xufVxuZnVuY3Rpb24gZ2V0UGF5bG9hZFNjaGVtYShwYXlsb2FkKSB7XG4gICAgdmFyIGJhc2VTY2hlbWEgPSB0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc09iamVjdCh7XG4gICAgICAgIGl0ZW1zOiB0eXBlX3ZhbGlkYXRlXzEubWFrZU9wdGlvbmFsKHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzQXJyYXkobGlua18xLmxpbmtBY3Rpb25TY2hlbWEpKSxcbiAgICAgICAgYWN0aXZlOiB0eXBlX3ZhbGlkYXRlXzEubWFrZU9wdGlvbmFsKHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzU3RyaW5nKCkpLFxuICAgIH0pO1xuICAgIHZhciBpdGVtcyA9IHBheWxvYWQuaXRlbXMsIGFjdGl2ZSA9IHBheWxvYWQuYWN0aXZlO1xuICAgIGlmIChpdGVtcyAmJiBhY3RpdmUpIHtcbiAgICAgICAgdmFyIGFjdGl2ZUl0ZW1TY2hlbWEgPSB0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc09iamVjdCh7XG4gICAgICAgICAgICBhY3RpdmU6IHR5cGVfdmFsaWRhdGVfMS5jb21wb3NlU2NoZW1hcyh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc1N0cmluZygpLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXMuZmluZChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5pZCA9PT0gdmFsdWU7IH0pXG4gICAgICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIDogYWN0aXZlTGlua0Vycm9yKHZhbHVlKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGVfdmFsaWRhdGVfMS5jb21wb3NlU2NoZW1hcyhiYXNlU2NoZW1hLCBhY3RpdmVJdGVtU2NoZW1hKTtcbiAgICB9XG4gICAgcmV0dXJuIGJhc2VTY2hlbWE7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BzKHByb3BzKSB7XG4gICAgdmFyIHJlc3VsdCA9IHR5cGVfdmFsaWRhdGVfMS52YWxpZGF0ZShwcm9wcywgZ2V0T3B0aW9uc1NjaGVtYShwcm9wcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnZhbGlkYXRlUHJvcHMgPSB2YWxpZGF0ZVByb3BzO1xuZnVuY3Rpb24gdmFsaWRhdGVBY3Rpb24oYWN0aW9uKSB7XG4gICAgdmFyIGFjdGlvblR5cGUgPSBhY3Rpb25zXzEuTmF2aWdhdGlvbk1lbnUuQWN0aW9uVHlwZTtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnNfMS5DaGFubmVsTWVudS5BY3Rpb25UeXBlLkxJTktfVVBEQVRFIHx8XG4gICAgICAgIGFjdGlvbi50eXBlID09PSBhY3Rpb25zXzEuQ2hhbm5lbE1lbnUuQWN0aW9uVHlwZS5VUERBVEUpIHtcbiAgICAgICAgYWN0aW9uVHlwZSA9IGFjdGlvbnNfMS5DaGFubmVsTWVudS5BY3Rpb25UeXBlO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZV92YWxpZGF0ZV8xLnZhbGlkYXRlKGFjdGlvbiwgdXRpbHNfMS5jcmVhdGVBY3Rpb25WYWxpZGF0b3IoYWN0aW9uVHlwZSwgZ2V0UGF5bG9hZFNjaGVtYShhY3Rpb24ucGF5bG9hZCksIHRydWUsIGZhbHNlKSk7XG59XG5leHBvcnRzLnZhbGlkYXRlQWN0aW9uID0gdmFsaWRhdGVBY3Rpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFjdGlvblR5cGUgPSBleHBvcnRzLnZhbGlkYXRlQWN0aW9uID0gZXhwb3J0cy52YWxpZGF0ZVByb3BzID0gdm9pZCAwO1xudmFyIHR5cGVfdmFsaWRhdGVfMSA9IHJlcXVpcmUoXCIuLi90eXBlLXZhbGlkYXRlXCIpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgTW9kYWxfMSA9IHJlcXVpcmUoXCIuLi8uLi9hY3Rpb25zL01vZGFsXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWN0aW9uVHlwZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gTW9kYWxfMS5BY3Rpb25UeXBlOyB9IH0pO1xudmFyIEJ1dHRvbl8xID0gcmVxdWlyZShcIi4uLy4uL2FjdGlvbnMvQnV0dG9uXCIpO1xudmFyIHNhZmVfcmVkaXJlY3RfMSA9IHJlcXVpcmUoXCIuLi9zYWZlLXJlZGlyZWN0XCIpO1xudmFyIGJ1dHRvbl8xID0gcmVxdWlyZShcIi4vYnV0dG9uXCIpO1xuZnVuY3Rpb24gbWF0Y2hlc1NhZmVPcmlnaW4odmFsdWUsIGxvY2FsT3JpZ2luKSB7XG4gICAgdmFyIGhvc3ROYW1lO1xuICAgIHRyeSB7XG4gICAgICAgIGhvc3ROYW1lID0gbmV3IFVSTChsb2NhbE9yaWdpbikuaG9zdG5hbWU7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVycm9yOiAnaW52YWxpZF9hcHBfb3JpZ2luJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbG9jYWxPcmlnaW4sXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJQcm92aWRlZCB2YWx1ZSBmb3IgYXBwIG9yaWdpbjogYFwiICsgbG9jYWxPcmlnaW4gKyBcImAgaXMgaW52YWxpZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgdmFyIGlzU2FmZVNyYyA9IHNhZmVfcmVkaXJlY3RfMS5pc1NhZmUodmFsdWUsIHtcbiAgICAgICAgcmVxdWlyZUFic29sdXRlOiB0cnVlLFxuICAgICAgICByZXF1aXJlU1NMOiB0cnVlLFxuICAgICAgICBhbGxvd2VkRG9tYWluczogW2hvc3ROYW1lXSxcbiAgICB9KTtcbiAgICBpZiAoIWlzU2FmZVNyYykge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVycm9yOiAnbm90X21hdGNoaW5nX2FwcF9vcmlnaW4nLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlByb3ZpZGVkIFVSTCBvcmlnaW4gZG9lcyBub3QgbWF0Y2ggYXBwIG9yaWdpbiBgXCIgKyBob3N0TmFtZSArIFwiYFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICB9XG59XG5mdW5jdGlvbiBtYXRjaGVzU2l6ZSgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBbTW9kYWxfMS5TaXplLlNtYWxsLCBNb2RhbF8xLlNpemUuTWVkaXVtLCBNb2RhbF8xLlNpemUuTGFyZ2VdO1xuICAgICAgICBpZiAodmFsdWVzLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtZXNzYWdlID0gXCJleHBlY3RlZDpcIiArIHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gXCJgXCIgKyB2YWwgKyBcImBcIjsgfSkuam9pbignIG9yICcpO1xuICAgICAgICBpZiAodmFsdWUgPT09IE1vZGFsXzEuU2l6ZS5GdWxsKSB7XG4gICAgICAgICAgICBtZXNzYWdlICs9IFwiLiBTaXplIGBcIiArIHZhbHVlICsgXCJgIGlzIGRlcHJlY2F0ZWQgYXMgb2YgdmVyc2lvbiAxLjYuNSBhbmQgd2lsbCBmYWxsIGJhY2sgdG8gc2l6ZSBgbWVkaXVtYFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gTW9kYWxfMS5TaXplLkF1dG8pIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgKz0gXCIuIFNpemUgYFwiICsgdmFsdWUgKyBcImAgaXMgZGVwcmVjYXRlZCBhcyBvZiB2ZXJzaW9uIDEuMTIueCBhbmQgd2lsbCBmYWxsIGJhY2sgdG8gc2l6ZSBgbWVkaXVtYC4gVXNlIHRoZSBgc2V0VXBNb2RhbEF1dG9TaXppbmdgIHV0aWxpdHkgZnJvbSBgYXBwLWJyaWRnZS11dGlsc2AgaW5zdGVhZFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZXJyb3I6ICdpbnZhbGlkX2VudW1fdmFsdWUnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0TW9kYWxTY2hlbWEocHJvcHMsIGxvY2FsT3JpZ2luKSB7XG4gICAgaWYgKHByb3BzID09PSB2b2lkIDApIHsgcHJvcHMgPSB7fTsgfVxuICAgIHZhciBiYXNlTW9kYWxTY2hlbWEgPSB0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc09iamVjdCh7XG4gICAgICAgIHRpdGxlOiB0eXBlX3ZhbGlkYXRlXzEubWFrZU9wdGlvbmFsKHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzU3RyaW5nKCkpLFxuICAgICAgICBmb290ZXI6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNPYmplY3Qoe1xuICAgICAgICAgICAgYnV0dG9uczogdHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNPYmplY3Qoe1xuICAgICAgICAgICAgICAgIHByaW1hcnk6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwoYnV0dG9uXzEuYnV0dG9uU2NoZW1hV2l0aElkKSxcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnk6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNBcnJheShidXR0b25fMS5idXR0b25TY2hlbWFXaXRoSWQpKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KSksXG4gICAgICAgIHNpemU6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwobWF0Y2hlc1NpemUoKSksXG4gICAgfSk7XG4gICAgaWYgKE1vZGFsXzEuaXNJZnJhbWVNb2RhbChwcm9wcykpIHtcbiAgICAgICAgaWYgKHByb3BzLnVybCkge1xuICAgICAgICAgICAgdmFyIHVybFNjaGVtYSA9IHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzT2JqZWN0KHtcbiAgICAgICAgICAgICAgICB1cmw6IHR5cGVfdmFsaWRhdGVfMS5jb21wb3NlU2NoZW1hcyh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc1N0cmluZygpLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJylcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiAnaW52YWxpZF9zZWN1cmVfdXJsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnZXhwZWN0ZWQgc3RyaW5nIHRvIHN0YXJ0IHdpdGggYGh0dHBzOi8vYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiAobG9jYWxPcmlnaW4gPyBtYXRjaGVzU2FmZU9yaWdpbih2YWx1ZSwgbG9jYWxPcmlnaW4pIDogdW5kZWZpbmVkKTsgfSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0eXBlX3ZhbGlkYXRlXzEuY29tcG9zZVNjaGVtYXMoYmFzZU1vZGFsU2NoZW1hLCB1cmxTY2hlbWEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0eXBlX3ZhbGlkYXRlXzEuY29tcG9zZVNjaGVtYXMoYmFzZU1vZGFsU2NoZW1hLCB1dGlsc18xLnJlbGF0aXZlUGF0aFNjaGVtYSk7XG4gICAgfVxuICAgIHJldHVybiB0eXBlX3ZhbGlkYXRlXzEuY29tcG9zZVNjaGVtYXMoYmFzZU1vZGFsU2NoZW1hLCB0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc09iamVjdCh7IG1lc3NhZ2U6IHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzU3RyaW5nKCkgfSkpO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wcyhwcm9wcywgbG9jYWxPcmlnaW4pIHtcbiAgICByZXR1cm4gdHlwZV92YWxpZGF0ZV8xLnZhbGlkYXRlKHByb3BzLCBnZXRNb2RhbFNjaGVtYShwcm9wcywgbG9jYWxPcmlnaW4pKTtcbn1cbmV4cG9ydHMudmFsaWRhdGVQcm9wcyA9IHZhbGlkYXRlUHJvcHM7XG5mdW5jdGlvbiB2YWxpZGF0ZUFjdGlvbihhY3Rpb24sIGxvY2FsT3JpZ2luKSB7XG4gICAgdmFyIHNjaGVtYSA9IGdldE1vZGFsU2NoZW1hKGFjdGlvbi5wYXlsb2FkLCBsb2NhbE9yaWdpbik7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIE1vZGFsXzEuQWN0aW9uVHlwZS5PUEVOOlxuICAgICAgICBjYXNlIE1vZGFsXzEuQWN0aW9uVHlwZS5VUERBVEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZV92YWxpZGF0ZV8xLnZhbGlkYXRlKGFjdGlvbiwgdXRpbHNfMS5jcmVhdGVBY3Rpb25WYWxpZGF0b3IoTW9kYWxfMS5BY3Rpb25UeXBlLCBzY2hlbWEsIHRydWUsIGFjdGlvbi50eXBlID09PSBNb2RhbF8xLkFjdGlvblR5cGUuVVBEQVRFKSk7XG4gICAgICAgIGNhc2UgTW9kYWxfMS5BY3Rpb25UeXBlLkZPT1RFUl9CVVRUT05fQ0xJQ0s6XG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uXzEudmFsaWRhdGVBY3Rpb24oX19hc3NpZ24oX19hc3NpZ24oe30sIGFjdGlvbiksIHsgdHlwZTogQnV0dG9uXzEuQWN0aW9uVHlwZS5DTElDSyB9KSk7XG4gICAgICAgIGNhc2UgTW9kYWxfMS5BY3Rpb25UeXBlLkZPT1RFUl9CVVRUT05fVVBEQVRFOlxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbl8xLnZhbGlkYXRlQWN0aW9uKF9fYXNzaWduKF9fYXNzaWduKHt9LCBhY3Rpb24pLCB7IHR5cGU6IEJ1dHRvbl8xLkFjdGlvblR5cGUuVVBEQVRFIH0pKTtcbiAgICAgICAgY2FzZSBNb2RhbF8xLkFjdGlvblR5cGUuQ0xPU0U6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gdHlwZV92YWxpZGF0ZV8xLnZhbGlkYXRlKGFjdGlvbiwgdXRpbHNfMS5jcmVhdGVBY3Rpb25WYWxpZGF0b3IoTW9kYWxfMS5BY3Rpb25UeXBlKSk7XG4gICAgfVxufVxuZXhwb3J0cy52YWxpZGF0ZUFjdGlvbiA9IHZhbGlkYXRlQWN0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy52YWxpZGF0ZUFjdGlvbiA9IGV4cG9ydHMuZ2V0U2VjdGlvblNjaGVtYSA9IGV4cG9ydHMubWF0Y2hlc0Fic29sdXRlUGF0aCA9IHZvaWQgMDtcbnZhciBhY3Rpb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vYWN0aW9uc1wiKTtcbnZhciB0eXBlX3ZhbGlkYXRlXzEgPSByZXF1aXJlKFwiLi4vdHlwZS12YWxpZGF0ZVwiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuZnVuY3Rpb24gbWF0Y2hlc0Fic29sdXRlUGF0aCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5tYXRjaCgnXmh0dHBzPzovLycpXG4gICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgIDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ2ludmFsaWRfYWJzb2x1dGVfdXJsJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnZXhwZWN0ZWQgc3RyaW5nIHRvIHN0YXJ0IHdpdGggYGh0dHBzOi8vYCBvciBgaHR0cDovL2AnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbn1cbmV4cG9ydHMubWF0Y2hlc0Fic29sdXRlUGF0aCA9IG1hdGNoZXNBYnNvbHV0ZVBhdGg7XG5mdW5jdGlvbiBnZXRTZWN0aW9uU2NoZW1hKHBheWxvYWQpIHtcbiAgICB2YXIgaXNQcm9kdWN0VmFyaWFudCA9IHBheWxvYWQgJiZcbiAgICAgICAgcGF5bG9hZC5zZWN0aW9uICYmXG4gICAgICAgIHBheWxvYWQuc2VjdGlvbi5yZXNvdXJjZSAmJlxuICAgICAgICBwYXlsb2FkLnNlY3Rpb24ubmFtZSA9PT0gYWN0aW9uc18xLlJlZGlyZWN0LlJlc291cmNlVHlwZS5Qcm9kdWN0O1xuICAgIHZhciByZXNvdXJjZVNjaGVtYSA9IHtcbiAgICAgICAgY3JlYXRlOiB0eXBlX3ZhbGlkYXRlXzEubWFrZU9wdGlvbmFsKHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzQm9vbGVhbigpKSxcbiAgICAgICAgaWQ6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNTdHJpbmcoKSksXG4gICAgfTtcbiAgICB2YXIgcHJvZHVjdFZhcmlhbnRTY2hlbWEgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVzb3VyY2VTY2hlbWEpLCB7IHZhcmlhbnQ6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNPYmplY3QocmVzb3VyY2VTY2hlbWEpKSB9KTtcbiAgICByZXR1cm4gdHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNPYmplY3Qoe1xuICAgICAgICBzZWN0aW9uOiB0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc09iamVjdCh7XG4gICAgICAgICAgICBuYW1lOiB0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc0VudW0oYWN0aW9uc18xLlJlZGlyZWN0LlJlc291cmNlVHlwZSksXG4gICAgICAgICAgICByZXNvdXJjZTogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc09iamVjdChpc1Byb2R1Y3RWYXJpYW50ID8gcHJvZHVjdFZhcmlhbnRTY2hlbWEgOiByZXNvdXJjZVNjaGVtYSkpLFxuICAgICAgICB9KSxcbiAgICB9KTtcbn1cbmV4cG9ydHMuZ2V0U2VjdGlvblNjaGVtYSA9IGdldFNlY3Rpb25TY2hlbWE7XG5mdW5jdGlvbiB2YWxpZGF0ZUFjdGlvbihhY3Rpb24pIHtcbiAgICB2YXIgbmV3Q29udGV4dFNjaGVtYSA9IHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzT2JqZWN0KHsgbmV3Q29udGV4dDogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc0Jvb2xlYW4oKSkgfSk7XG4gICAgdmFyIGFjdGlvblR5cGUgPSBhY3Rpb25zXzEuUmVkaXJlY3QuQWN0aW9uVHlwZTtcbiAgICB2YXIgc2NoZW1hO1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBhY3Rpb25zXzEuSGlzdG9yeS5BY3Rpb25UeXBlLlBVU0g6XG4gICAgICAgIGNhc2UgYWN0aW9uc18xLkhpc3RvcnkuQWN0aW9uVHlwZS5SRVBMQUNFOlxuICAgICAgICAgICAgYWN0aW9uVHlwZSA9IGFjdGlvbnNfMS5IaXN0b3J5LkFjdGlvblR5cGU7XG4gICAgICAgICAgICBzY2hlbWEgPSB1dGlsc18xLnJlbGF0aXZlUGF0aFNjaGVtYTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGFjdGlvbnNfMS5SZWRpcmVjdC5BY3Rpb25UeXBlLkFQUDpcbiAgICAgICAgICAgIHNjaGVtYSA9IHV0aWxzXzEucmVsYXRpdmVQYXRoU2NoZW1hO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgYWN0aW9uc18xLlJlZGlyZWN0LkFjdGlvblR5cGUuUkVNT1RFOlxuICAgICAgICAgICAgc2NoZW1hID0gdHlwZV92YWxpZGF0ZV8xLmNvbXBvc2VTY2hlbWFzKHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzT2JqZWN0KHtcbiAgICAgICAgICAgICAgICB1cmw6IHR5cGVfdmFsaWRhdGVfMS5jb21wb3NlU2NoZW1hcyh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc1N0cmluZygpLCBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIG1hdGNoZXNBYnNvbHV0ZVBhdGgodmFsdWUpOyB9KSxcbiAgICAgICAgICAgIH0pLCBuZXdDb250ZXh0U2NoZW1hKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGFjdGlvbnNfMS5SZWRpcmVjdC5BY3Rpb25UeXBlLkFETUlOX1BBVEg6XG4gICAgICAgICAgICBzY2hlbWEgPSB0eXBlX3ZhbGlkYXRlXzEuY29tcG9zZVNjaGVtYXModXRpbHNfMS5yZWxhdGl2ZVBhdGhTY2hlbWEsIG5ld0NvbnRleHRTY2hlbWEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgYWN0aW9uc18xLlJlZGlyZWN0LkFjdGlvblR5cGUuQURNSU5fU0VDVElPTjpcbiAgICAgICAgICAgIHNjaGVtYSA9IHR5cGVfdmFsaWRhdGVfMS5jb21wb3NlU2NoZW1hcyhnZXRTZWN0aW9uU2NoZW1hKGFjdGlvbi5wYXlsb2FkKSwgbmV3Q29udGV4dFNjaGVtYSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHR5cGVfdmFsaWRhdGVfMS52YWxpZGF0ZShhY3Rpb24sIHV0aWxzXzEuY3JlYXRlQWN0aW9uVmFsaWRhdG9yKGFjdGlvblR5cGUsIHNjaGVtYSkpO1xufVxuZXhwb3J0cy52YWxpZGF0ZUFjdGlvbiA9IHZhbGlkYXRlQWN0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFjdGlvblR5cGUgPSBleHBvcnRzLnZhbGlkYXRlQWN0aW9uID0gdm9pZCAwO1xudmFyIFByaW50XzEgPSByZXF1aXJlKFwiLi4vLi4vYWN0aW9ucy9QcmludFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFjdGlvblR5cGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByaW50XzEuQWN0aW9uVHlwZTsgfSB9KTtcbnZhciB0eXBlX3ZhbGlkYXRlXzEgPSByZXF1aXJlKFwiLi4vdHlwZS12YWxpZGF0ZVwiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuZnVuY3Rpb24gdmFsaWRhdGVBY3Rpb24oYWN0aW9uKSB7XG4gICAgcmV0dXJuIHR5cGVfdmFsaWRhdGVfMS52YWxpZGF0ZShhY3Rpb24sIHV0aWxzXzEuY3JlYXRlQWN0aW9uVmFsaWRhdG9yKFByaW50XzEuQWN0aW9uVHlwZSkpO1xufVxuZXhwb3J0cy52YWxpZGF0ZUFjdGlvbiA9IHZhbGlkYXRlQWN0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFjdGlvblR5cGUgPSBleHBvcnRzLnZhbGlkYXRlQWN0aW9uID0gZXhwb3J0cy52YWxpZGF0ZVByb3BzID0gdm9pZCAwO1xudmFyIFJlc291cmNlUGlja2VyXzEgPSByZXF1aXJlKFwiLi4vLi4vYWN0aW9ucy9SZXNvdXJjZVBpY2tlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFjdGlvblR5cGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFJlc291cmNlUGlja2VyXzEuQWN0aW9uVHlwZTsgfSB9KTtcbnZhciB0eXBlX3ZhbGlkYXRlXzEgPSByZXF1aXJlKFwiLi4vdHlwZS12YWxpZGF0ZVwiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIHJlc291cmNlU2VsZWN0aW9uU2NoZW1hID0gdHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNBcnJheSh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc09iamVjdCh7XG4gICAgaWQ6IHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzU3RyaW5nKCksXG59KSk7XG52YXIgcmVzb3VyY2VQaWNrZXJPcHRpb25zID0gdHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNPYmplY3Qoe1xuICAgIGluaXRpYWxRdWVyeTogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc1N0cmluZygpKSxcbiAgICBpbml0aWFsU2VsZWN0aW9uSWRzOiB0eXBlX3ZhbGlkYXRlXzEubWFrZU9wdGlvbmFsKHJlc291cmNlU2VsZWN0aW9uU2NoZW1hKSxcbiAgICBzZWxlY3RNdWx0aXBsZTogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEub25lT2YodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNCb29sZWFuKCksIHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzUG9zaXRpdmVJbnRlZ2VyKCkpKSxcbiAgICBzaG93SGlkZGVuOiB0eXBlX3ZhbGlkYXRlXzEubWFrZU9wdGlvbmFsKHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzQm9vbGVhbigpKSxcbiAgICBzaG93VmFyaWFudHM6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNCb29sZWFuKCkpLFxuICAgIHNob3dEcmFmdDogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc0Jvb2xlYW4oKSksXG4gICAgc2hvd0FyY2hpdmVkOiB0eXBlX3ZhbGlkYXRlXzEubWFrZU9wdGlvbmFsKHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzQm9vbGVhbigpKSxcbiAgICBzaG93RHJhZnRCYWRnZTogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc0Jvb2xlYW4oKSksXG4gICAgc2hvd0FyY2hpdmVkQmFkZ2U6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNCb29sZWFuKCkpLFxuICAgIGFjdGlvblZlcmI6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNFbnVtKFJlc291cmNlUGlja2VyXzEuQWN0aW9uVmVyYikpLFxufSk7XG52YXIgcmVzb3VyY2VQaWNrZXJBY3Rpb25TY2hlbWEgPSB0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc09iamVjdCh7XG4gICAgcmVzb3VyY2VUeXBlOiB0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc0VudW0oUmVzb3VyY2VQaWNrZXJfMS5SZXNvdXJjZVR5cGUpLFxuICAgIG9wdGlvbnM6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwocmVzb3VyY2VQaWNrZXJPcHRpb25zKSxcbn0pO1xudmFyIHNlbGVjdGlvblNjaGVtYSA9IHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzT2JqZWN0KHtcbiAgICBzZWxlY3Rpb246IHJlc291cmNlU2VsZWN0aW9uU2NoZW1hLFxufSk7XG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BzKHByb3BzKSB7XG4gICAgcmV0dXJuIHR5cGVfdmFsaWRhdGVfMS52YWxpZGF0ZShwcm9wcywgcmVzb3VyY2VQaWNrZXJPcHRpb25zKTtcbn1cbmV4cG9ydHMudmFsaWRhdGVQcm9wcyA9IHZhbGlkYXRlUHJvcHM7XG5mdW5jdGlvbiB2YWxpZGF0ZUFjdGlvbihhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgUmVzb3VyY2VQaWNrZXJfMS5BY3Rpb25UeXBlLlVQREFURTpcbiAgICAgICAgY2FzZSBSZXNvdXJjZVBpY2tlcl8xLkFjdGlvblR5cGUuT1BFTjpcbiAgICAgICAgICAgIHJldHVybiB0eXBlX3ZhbGlkYXRlXzEudmFsaWRhdGUoYWN0aW9uLCB1dGlsc18xLmNyZWF0ZUFjdGlvblZhbGlkYXRvcihSZXNvdXJjZVBpY2tlcl8xLkFjdGlvblR5cGUsIHJlc291cmNlUGlja2VyQWN0aW9uU2NoZW1hLCBmYWxzZSwgdHJ1ZSkpO1xuICAgICAgICBjYXNlIFJlc291cmNlUGlja2VyXzEuQWN0aW9uVHlwZS5TRUxFQ1Q6XG4gICAgICAgICAgICByZXR1cm4gdHlwZV92YWxpZGF0ZV8xLnZhbGlkYXRlKGFjdGlvbiwgdXRpbHNfMS5jcmVhdGVBY3Rpb25WYWxpZGF0b3IoUmVzb3VyY2VQaWNrZXJfMS5BY3Rpb25UeXBlLCBzZWxlY3Rpb25TY2hlbWEsIHRydWUsIHRydWUpKTtcbiAgICAgICAgY2FzZSBSZXNvdXJjZVBpY2tlcl8xLkFjdGlvblR5cGUuQ0FOQ0VMOlxuICAgICAgICBjYXNlIFJlc291cmNlUGlja2VyXzEuQWN0aW9uVHlwZS5DTE9TRTpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB0eXBlX3ZhbGlkYXRlXzEudmFsaWRhdGUoYWN0aW9uLCB1dGlsc18xLmNyZWF0ZUFjdGlvblZhbGlkYXRvcihSZXNvdXJjZVBpY2tlcl8xLkFjdGlvblR5cGUpKTtcbiAgICB9XG59XG5leHBvcnRzLnZhbGlkYXRlQWN0aW9uID0gdmFsaWRhdGVBY3Rpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQWN0aW9uVHlwZSA9IGV4cG9ydHMudmFsaWRhdGVBY3Rpb24gPSB2b2lkIDA7XG52YXIgU2Nhbm5lcl8xID0gcmVxdWlyZShcIi4uLy4uL2FjdGlvbnMvU2Nhbm5lclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFjdGlvblR5cGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFNjYW5uZXJfMS5BY3Rpb25UeXBlOyB9IH0pO1xudmFyIHR5cGVfdmFsaWRhdGVfMSA9IHJlcXVpcmUoXCIuLi90eXBlLXZhbGlkYXRlXCIpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5mdW5jdGlvbiB2YWxpZGF0ZUFjdGlvbihhY3Rpb24pIHtcbiAgICByZXR1cm4gdHlwZV92YWxpZGF0ZV8xLnZhbGlkYXRlKGFjdGlvbiwgdXRpbHNfMS5jcmVhdGVBY3Rpb25WYWxpZGF0b3IoU2Nhbm5lcl8xLkFjdGlvblR5cGUpKTtcbn1cbmV4cG9ydHMudmFsaWRhdGVBY3Rpb24gPSB2YWxpZGF0ZUFjdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQWN0aW9uVHlwZSA9IGV4cG9ydHMudmFsaWRhdGVBY3Rpb24gPSBleHBvcnRzLnZhbGlkYXRlUHJvcHMgPSBleHBvcnRzLnRpdGxlQmFyU2NoZW1hID0gdm9pZCAwO1xudmFyIFRpdGxlQmFyXzEgPSByZXF1aXJlKFwiLi4vLi4vYWN0aW9ucy9UaXRsZUJhclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFjdGlvblR5cGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFRpdGxlQmFyXzEuQWN0aW9uVHlwZTsgfSB9KTtcbnZhciBCdXR0b25fMSA9IHJlcXVpcmUoXCIuLi8uLi9hY3Rpb25zL0J1dHRvblwiKTtcbnZhciBCdXR0b25Hcm91cF8xID0gcmVxdWlyZShcIi4uLy4uL2FjdGlvbnMvQnV0dG9uR3JvdXBcIik7XG52YXIgdHlwZV92YWxpZGF0ZV8xID0gcmVxdWlyZShcIi4uL3R5cGUtdmFsaWRhdGVcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBidXR0b25fMSA9IHJlcXVpcmUoXCIuL2J1dHRvblwiKTtcbnZhciBidXR0b25Hcm91cF8xID0gcmVxdWlyZShcIi4vYnV0dG9uR3JvdXBcIik7XG52YXIgYnV0dG9uU2NoZW1hV2l0aElkID0gdHlwZV92YWxpZGF0ZV8xLmNvbXBvc2VTY2hlbWFzKGJ1dHRvbl8xLmJ1dHRvblNjaGVtYSwgdHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNPYmplY3Qoe1xuICAgIGlkOiB0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc1N0cmluZygpLFxufSkpO1xuZXhwb3J0cy50aXRsZUJhclNjaGVtYSA9IHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzT2JqZWN0KHtcbiAgICBicmVhZGNydW1iczogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbChidXR0b25fMS5idXR0b25TY2hlbWEpLFxuICAgIHRpdGxlOiB0eXBlX3ZhbGlkYXRlXzEubWFrZU9wdGlvbmFsKHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzU3RyaW5nKCkpLFxuICAgIGJ1dHRvbnM6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNPYmplY3Qoe1xuICAgICAgICBwcmltYXJ5OiB0eXBlX3ZhbGlkYXRlXzEubWFrZU9wdGlvbmFsKGJ1dHRvblNjaGVtYVdpdGhJZCksXG4gICAgICAgIHNlY29uZGFyeTogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc0FycmF5KHR5cGVfdmFsaWRhdGVfMS5jb21wb3NlU2NoZW1hcyhidXR0b25TY2hlbWFXaXRoSWQsIHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzT2JqZWN0KHtcbiAgICAgICAgICAgIGJ1dHRvbnM6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwodHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNBcnJheShidXR0b25TY2hlbWFXaXRoSWQpKSxcbiAgICAgICAgfSkpKSksXG4gICAgfSkpLFxufSk7XG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BzKHByb3BzKSB7XG4gICAgcmV0dXJuIHR5cGVfdmFsaWRhdGVfMS52YWxpZGF0ZShwcm9wcywgZXhwb3J0cy50aXRsZUJhclNjaGVtYSk7XG59XG5leHBvcnRzLnZhbGlkYXRlUHJvcHMgPSB2YWxpZGF0ZVByb3BzO1xuZnVuY3Rpb24gdmFsaWRhdGVBY3Rpb24oYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICBjYXNlIFRpdGxlQmFyXzEuQWN0aW9uVHlwZS5VUERBVEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZV92YWxpZGF0ZV8xLnZhbGlkYXRlKGFjdGlvbiwgdXRpbHNfMS5jcmVhdGVBY3Rpb25WYWxpZGF0b3IoVGl0bGVCYXJfMS5BY3Rpb25UeXBlLCBleHBvcnRzLnRpdGxlQmFyU2NoZW1hLCB0cnVlLCBmYWxzZSkpO1xuICAgICAgICBjYXNlIFRpdGxlQmFyXzEuQWN0aW9uVHlwZS5CVVRUT05fQ0xJQ0s6XG4gICAgICAgIGNhc2UgVGl0bGVCYXJfMS5BY3Rpb25UeXBlLkJSRUFEQ1JVTUJTX0NMSUNLOlxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbl8xLnZhbGlkYXRlQWN0aW9uKF9fYXNzaWduKF9fYXNzaWduKHt9LCBhY3Rpb24pLCB7IHR5cGU6IEJ1dHRvbl8xLkFjdGlvblR5cGUuQ0xJQ0sgfSkpO1xuICAgICAgICBjYXNlIFRpdGxlQmFyXzEuQWN0aW9uVHlwZS5CVVRUT05fVVBEQVRFOlxuICAgICAgICBjYXNlIFRpdGxlQmFyXzEuQWN0aW9uVHlwZS5CUkVBRENSVU1CU19VUERBVEU6XG4gICAgICAgICAgICByZXR1cm4gYnV0dG9uXzEudmFsaWRhdGVBY3Rpb24oX19hc3NpZ24oX19hc3NpZ24oe30sIGFjdGlvbiksIHsgdHlwZTogQnV0dG9uXzEuQWN0aW9uVHlwZS5VUERBVEUgfSkpO1xuICAgICAgICBjYXNlIFRpdGxlQmFyXzEuQWN0aW9uVHlwZS5CVVRUT05fR1JPVVBfVVBEQVRFOlxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbkdyb3VwXzEudmFsaWRhdGVBY3Rpb24oX19hc3NpZ24oX19hc3NpZ24oe30sIGFjdGlvbiksIHsgdHlwZTogQnV0dG9uR3JvdXBfMS5BY3Rpb25UeXBlLlVQREFURSB9KSk7XG4gICAgfVxufVxuZXhwb3J0cy52YWxpZGF0ZUFjdGlvbiA9IHZhbGlkYXRlQWN0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFjdGlvblR5cGUgPSBleHBvcnRzLnZhbGlkYXRlQWN0aW9uID0gZXhwb3J0cy52YWxpZGF0ZVByb3BzID0gZXhwb3J0cy50b2FzdFNjaGVtYSA9IHZvaWQgMDtcbnZhciBUb2FzdF8xID0gcmVxdWlyZShcIi4uLy4uL2FjdGlvbnMvVG9hc3RcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBY3Rpb25UeXBlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBUb2FzdF8xLkFjdGlvblR5cGU7IH0gfSk7XG52YXIgdHlwZV92YWxpZGF0ZV8xID0gcmVxdWlyZShcIi4uL3R5cGUtdmFsaWRhdGVcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmV4cG9ydHMudG9hc3RTY2hlbWEgPSB0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc09iamVjdCh7XG4gICAgbWVzc2FnZTogdHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNTdHJpbmcoKSxcbiAgICBkdXJhdGlvbjogdHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNQb3NpdGl2ZUludGVnZXIoKSxcbiAgICBpc0Vycm9yOiB0eXBlX3ZhbGlkYXRlXzEubWFrZU9wdGlvbmFsKHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzQm9vbGVhbigpKSxcbn0pO1xuZnVuY3Rpb24gdmFsaWRhdGVQcm9wcyhwcm9wcykge1xuICAgIHJldHVybiB0eXBlX3ZhbGlkYXRlXzEudmFsaWRhdGUocHJvcHMsIGV4cG9ydHMudG9hc3RTY2hlbWEpO1xufVxuZXhwb3J0cy52YWxpZGF0ZVByb3BzID0gdmFsaWRhdGVQcm9wcztcbmZ1bmN0aW9uIHZhbGlkYXRlQWN0aW9uKGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBUb2FzdF8xLkFjdGlvblR5cGUuU0hPVzpcbiAgICAgICAgICAgIHJldHVybiB0eXBlX3ZhbGlkYXRlXzEudmFsaWRhdGUoYWN0aW9uLCB1dGlsc18xLmNyZWF0ZUFjdGlvblZhbGlkYXRvcihUb2FzdF8xLkFjdGlvblR5cGUsIGV4cG9ydHMudG9hc3RTY2hlbWEsIHRydWUpKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB0eXBlX3ZhbGlkYXRlXzEudmFsaWRhdGUoYWN0aW9uLCB1dGlsc18xLmNyZWF0ZUFjdGlvblZhbGlkYXRvcihUb2FzdF8xLkFjdGlvblR5cGUpKTtcbiAgICB9XG59XG5leHBvcnRzLnZhbGlkYXRlQWN0aW9uID0gdmFsaWRhdGVBY3Rpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB2YWxpZGF0b3JfMSA9IHJlcXVpcmUoXCIuL3ZhbGlkYXRvclwiKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZhbGlkYXRvcl8xLnZhbGlkYXRvck1pZGRsZXdhcmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubWFrZVNhZmUgPSBleHBvcnRzLmlzU2FmZSA9IHZvaWQgMDtcbnZhciBGSUxFX1VSSV9NQVRDSCA9IC9cXC9cXC9cXC8vO1xudmFyIElOVkFMSURfUkVMQVRJVkVfVVJMID0gL1svXFxcXF1bL1xcXFxdLztcbnZhciBWQUxJRF9QUk9UT0NPTFMgPSBbJ2h0dHBzOicsICdodHRwOiddO1xudmFyIERVTU1ZX0hPU1ROQU1FID0gJ2h0dHA6Ly90ZXN0LmNvbSc7XG5mdW5jdGlvbiBpc1NhZmUocmVkaXJlY3RVcmwsIF9hKSB7XG4gICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIF9jID0gX2IuYWxsb3dlZERvbWFpbnMsIGFsbG93ZWREb21haW5zID0gX2MgPT09IHZvaWQgMCA/IFtdIDogX2MsIF9kID0gX2Iuc3ViZG9tYWlucywgc3ViZG9tYWlucyA9IF9kID09PSB2b2lkIDAgPyBbXSA6IF9kLCBtYXRjaFBhdGggPSBfYi5tYXRjaFBhdGgsIHJlcXVpcmVBYnNvbHV0ZSA9IF9iLnJlcXVpcmVBYnNvbHV0ZSwgcmVxdWlyZVNTTCA9IF9iLnJlcXVpcmVTU0w7XG4gICAgaWYgKEZJTEVfVVJJX01BVENILnRlc3QocmVkaXJlY3RVcmwpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHJlZGlyZWN0VXJsLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBpZiAoYWxsb3dlZERvbWFpbnMubGVuZ3RoID4gMCB8fCBzdWJkb21haW5zLmxlbmd0aCA+IDAgfHwgcmVxdWlyZUFic29sdXRlIHx8IHJlcXVpcmVTU0wpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hQYXRoKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGluZyBhIG5ldyBVUkwgZXhwYW5kcyB0aGUgcGF0aG5hbWUgaW4gY2FzZSBvZiB0aGluZ3MgbGlrZSBgL2EvLi4vYmBcbiAgICAgICAgICAgIHJldHVybiBwYXRoTWF0Y2hlcyhuZXcgVVJMKHJlZGlyZWN0VXJsLCBEVU1NWV9IT1NUTkFNRSksIHJlZGlyZWN0VXJsLCBtYXRjaFBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhSU5WQUxJRF9SRUxBVElWRV9VUkwudGVzdChyZWRpcmVjdFVybCk7XG4gICAgfVxuICAgIHZhciB1cmw7XG4gICAgdHJ5IHtcbiAgICAgICAgdXJsID0gbmV3IFVSTChyZWRpcmVjdFVybCk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghVkFMSURfUFJPVE9DT0xTLmluY2x1ZGVzKHVybC5wcm90b2NvbCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocmVxdWlyZVNTTCAmJiB1cmwucHJvdG9jb2wgIT09ICdodHRwczonKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHVybC51c2VybmFtZSB8fCB1cmwucGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAobWF0Y2hQYXRoICYmICFwYXRoTWF0Y2hlcyh1cmwsIHJlZGlyZWN0VXJsLCBtYXRjaFBhdGgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFob3N0SXNWYWxpZCh1cmwsIGFsbG93ZWREb21haW5zLCBzdWJkb21haW5zKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy5pc1NhZmUgPSBpc1NhZmU7XG5mdW5jdGlvbiBob3N0SXNWYWxpZCh1cmwsIGFsbG93ZWREb21haW5zLCBzdWJkb21haW5zKSB7XG4gICAgaWYgKCFzdWJkb21haW5zLmV2ZXJ5KGZ1bmN0aW9uIChzdWJkb21haW4pIHsgcmV0dXJuIHN1YmRvbWFpbi5zdGFydHNXaXRoKCcuJyk7IH0pKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1YmRvbWFpbnMgbXVzdCBiZWdpbiB3aXRoIC4nKTtcbiAgICB9XG4gICAgdmFyIGhvc3RuYW1lID0gdXJsLmhvc3RuYW1lO1xuICAgIHJldHVybiAoKGFsbG93ZWREb21haW5zLmxlbmd0aCA9PT0gMCAmJiBzdWJkb21haW5zLmxlbmd0aCA9PT0gMCkgfHxcbiAgICAgICAgYWxsb3dlZERvbWFpbnMuaW5jbHVkZXMoaG9zdG5hbWUpIHx8XG4gICAgICAgIHN1YmRvbWFpbnMuc29tZShmdW5jdGlvbiAoc3ViZG9tYWluKSB7IHJldHVybiBob3N0bmFtZS5lbmRzV2l0aChzdWJkb21haW4pOyB9KSk7XG59XG5mdW5jdGlvbiBwYXRoTWF0Y2hlcyh1cmwsIG9yaWdpbmFsVXJsLCBtYXRjaGVyKSB7XG4gICAgdmFyIHBhdGhuYW1lID0gdXJsLnBhdGhuYW1lO1xuICAgIC8vIEdldHMganVzdCB0aGUgdW5yZXNvbHZlIHBhdGhuYW1lLCBpLmUuLCBgaHR0cDovL2Zvby5jb20vYS8uLi9iID0+IC9hLy4uL2JcbiAgICB2YXIgb3JpZ2luYWxQYXRobmFtZSA9IG9yaWdpbmFsVXJsLnJlcGxhY2UodXJsLm9yaWdpbiwgJycpLnNwbGl0KCc/JylbMF07XG4gICAgcmV0dXJuIHR5cGVvZiBtYXRjaGVyID09PSAnc3RyaW5nJ1xuICAgICAgICA/IHBhdGhuYW1lID09PSBtYXRjaGVyICYmIG9yaWdpbmFsUGF0aG5hbWUgPT09IG1hdGNoZXJcbiAgICAgICAgOiBtYXRjaGVyLnRlc3QocGF0aG5hbWUpICYmIG1hdGNoZXIudGVzdChvcmlnaW5hbFBhdGhuYW1lKTtcbn1cbmZ1bmN0aW9uIG1ha2VTYWZlKHVybCwgZmFsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gaXNTYWZlKHVybCwgb3B0aW9ucykgPyBlbmNvZGVVUkkodXJsKSA6IGZhbGxiYWNrO1xufVxuZXhwb3J0cy5tYWtlU2FmZSA9IG1ha2VTYWZlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcbiAgICByZXR1cm4gcjtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnZhbGlkYXRlID0gZXhwb3J0cy5jb21wb3NlU2NoZW1hcyA9IGV4cG9ydHMubWFrZU9wdGlvbmFsID0gZXhwb3J0cy5vbmVPZiA9IGV4cG9ydHMubWF0Y2hlc09iamVjdCA9IGV4cG9ydHMubWF0Y2hlc0FycmF5ID0gZXhwb3J0cy5tYXRjaGVzRW51bSA9IGV4cG9ydHMubWF0Y2hlc1Bvc2l0aXZlTnVtYmVyID0gZXhwb3J0cy5tYXRjaGVzUG9zaXRpdmVJbnRlZ2VyID0gZXhwb3J0cy5tYXRjaGVzU3RyaW5nID0gZXhwb3J0cy5tYXRjaGVzQm9vbGVhbiA9IHZvaWQgMDtcbnZhciBUWVBFX0VSUk9SID0gJ3R5cGVfZXJyb3JfZXhwZWN0ZWQnO1xuZnVuY3Rpb24gY29uc3RydWN0RXJyb3JzKHZhbHVlLCBlcnJvciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHsgbWVzc2FnZTogdW5kZWZpbmVkIH07IH1cbiAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICBtZXNzYWdlOiB0eXBlb2Ygb3B0aW9ucy5tZXNzYWdlID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5tZXNzYWdlKGVycm9yLCB2YWx1ZSkgOiBvcHRpb25zLm1lc3NhZ2UsXG4gICAgICAgIH0sXG4gICAgXTtcbn1cbmZ1bmN0aW9uIGdldEVycm9ycyhvYmosIHZhbGlkYXRvciwga2V5KSB7XG4gICAgdmFyIHZhbHVlID0ga2V5ID8gb2JqW2tleV0gOiBvYmo7XG4gICAgdmFyIHBhdGggPSBrZXkgPyBcIlsnXCIgKyBrZXkgKyBcIiddXCIgOiB1bmRlZmluZWQ7XG4gICAgdmFyIGVycm9yID0gdmFsaWRhdG9yKHZhbHVlKTtcbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGVycm9yLm1hcChmdW5jdGlvbiAobykgeyByZXR1cm4gKF9fYXNzaWduKF9fYXNzaWduKHt9LCBvKSwgeyBwYXRoOiBcIlwiICsgKHBhdGggfHwgJycpICsgKG8ucGF0aCB8fCAnJykgfHwgdW5kZWZpbmVkIH0pKTsgfSk7XG59XG5mdW5jdGlvbiBtYXRjaGVzQm9vbGVhbihvcHRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbiAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICA6IGNvbnN0cnVjdEVycm9ycyh2YWx1ZSwgVFlQRV9FUlJPUiArIFwiX2Jvb2xlYW5cIiwgb3B0aW9ucyk7XG4gICAgfTtcbn1cbmV4cG9ydHMubWF0Y2hlc0Jvb2xlYW4gPSBtYXRjaGVzQm9vbGVhbjtcbmZ1bmN0aW9uIG1hdGNoZXNTdHJpbmcob3B0aW9ucykge1xuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB1bmRlZmluZWQgOiBjb25zdHJ1Y3RFcnJvcnModmFsdWUsIFRZUEVfRVJST1IgKyBcIl9zdHJpbmdcIiwgb3B0aW9ucyk7XG4gICAgfTtcbn1cbmV4cG9ydHMubWF0Y2hlc1N0cmluZyA9IG1hdGNoZXNTdHJpbmc7XG5mdW5jdGlvbiBtYXRjaGVzUG9zaXRpdmVJbnRlZ2VyKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAhTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSkgfHwgdmFsdWUgPCAwXG4gICAgICAgICAgICA/IGNvbnN0cnVjdEVycm9ycyh2YWx1ZSwgVFlQRV9FUlJPUiArIFwiX2ludGVnZXJcIiwgb3B0aW9ucylcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH07XG59XG5leHBvcnRzLm1hdGNoZXNQb3NpdGl2ZUludGVnZXIgPSBtYXRjaGVzUG9zaXRpdmVJbnRlZ2VyO1xuZnVuY3Rpb24gbWF0Y2hlc1Bvc2l0aXZlTnVtYmVyKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNOYU4odmFsdWUpIHx8ICFOdW1iZXIuaXNGaW5pdGUodmFsdWUpIHx8IHZhbHVlIDwgMFxuICAgICAgICAgICAgPyBjb25zdHJ1Y3RFcnJvcnModmFsdWUsIFRZUEVfRVJST1IgKyBcIl9udW1iZXJcIiwgb3B0aW9ucylcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH07XG59XG5leHBvcnRzLm1hdGNoZXNQb3NpdGl2ZU51bWJlciA9IG1hdGNoZXNQb3NpdGl2ZU51bWJlcjtcbi8qKlxuICogUmV0dXJucyBhIHZhbGlkYXRvciB0aGF0IG1hdGNoZXMgdmFsdWVzIGluIHRoZSBnaXZlbiBlbnVtXG4gKiBAcGFyYW0gdHlwZSAtIGVudW0gdG8gdXNlIGZvciBtYXRjaCB2YWx1ZXNcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gbWF0Y2hlc0VudW0odHlwZXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBPYmplY3Qua2V5cyh0eXBlcykubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHR5cGVzW2tleV07IH0pO1xuICAgICAgICB2YXIgbWVzc2FnZSA9IChvcHRpb25zICYmIG9wdGlvbnMubWVzc2FnZSkgfHwgXCJleHBlY3RlZDpcIiArIHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gXCJgXCIgKyB2YWwgKyBcImBcIjsgfSkuam9pbignIG9yICcpO1xuICAgICAgICByZXR1cm4gdmFsdWVzLmluY2x1ZGVzKHZhbHVlKVxuICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgIDogY29uc3RydWN0RXJyb3JzKHZhbHVlLCAnaW52YWxpZF9lbnVtX3ZhbHVlJywgX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IG1lc3NhZ2U6IG1lc3NhZ2UgfSkpO1xuICAgIH07XG59XG5leHBvcnRzLm1hdGNoZXNFbnVtID0gbWF0Y2hlc0VudW07XG5mdW5jdGlvbiBtYXRjaGVzQXJyYXkodmFsaWRhdG9yLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc3RydWN0RXJyb3JzKHZhbHVlLCBUWVBFX0VSUk9SICsgXCJfYXJyYXlcIiwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3JzID0gW107XG4gICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKHZhbCwga2V5KSB7XG4gICAgICAgICAgICB2YXIgb2JqZWN0RXJyb3IgPSB2YWxpZGF0b3IodmFsKTtcbiAgICAgICAgICAgIGlmIChvYmplY3RFcnJvcikge1xuICAgICAgICAgICAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQob2JqZWN0RXJyb3IubWFwKGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gKF9fYXNzaWduKF9fYXNzaWduKHt9LCBlcnJvciksIHsgcGF0aDogXCJbJ1wiICsga2V5ICsgXCInXVwiICsgKGVycm9yLnBhdGggfHwgJycpIH0pKTsgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVycm9ycy5sZW5ndGggPyBlcnJvcnMgOiB1bmRlZmluZWQ7XG4gICAgfTtcbn1cbmV4cG9ydHMubWF0Y2hlc0FycmF5ID0gbWF0Y2hlc0FycmF5O1xuZnVuY3Rpb24gbWF0Y2hlc09iamVjdChzY2hlbWEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ29iamVjdCcgfHwgIXZhbCB8fCBBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3RFcnJvcnModmFsLCBUWVBFX0VSUk9SICsgXCJfb2JqZWN0XCIsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmbGF0dGVuZWQgPSBPYmplY3Qua2V5cyhzY2hlbWEpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5cyhhY2MsIChnZXRFcnJvcnModmFsLCBzY2hlbWFba2V5XSwga2V5KSB8fCBbXSkpO1xuICAgICAgICB9LCBbXSk7XG4gICAgICAgIHJldHVybiBmbGF0dGVuZWQubGVuZ3RoID8gZmxhdHRlbmVkIDogdW5kZWZpbmVkO1xuICAgIH07XG59XG5leHBvcnRzLm1hdGNoZXNPYmplY3QgPSBtYXRjaGVzT2JqZWN0O1xuZnVuY3Rpb24gb25lT2YoKSB7XG4gICAgdmFyIHZhbGlkYXRvcnMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YWxpZGF0b3JzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHZhciBlcnJvcnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCB2YWxpZGF0b3JzXzEgPSB2YWxpZGF0b3JzOyBfaSA8IHZhbGlkYXRvcnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciB2YWxpZGF0b3IgPSB2YWxpZGF0b3JzXzFbX2ldO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHZhbGlkYXRvcih2YWwpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICBlcnJvcnMucHVzaC5hcHBseShlcnJvcnMsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycm9ycztcbiAgICB9O1xufVxuZXhwb3J0cy5vbmVPZiA9IG9uZU9mO1xuZnVuY3Rpb24gbWFrZU9wdGlvbmFsKHZhbGlkYXRvcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRvcih2YWx1ZSk7XG4gICAgfTtcbn1cbmV4cG9ydHMubWFrZU9wdGlvbmFsID0gbWFrZU9wdGlvbmFsO1xuZnVuY3Rpb24gY29tcG9zZVNjaGVtYXMoKSB7XG4gICAgdmFyIHZhbGlkYXRvcnMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YWxpZGF0b3JzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgbGVuID0gdmFsaWRhdG9ycy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICghZXJyb3IgJiYgaSA8IGxlbikge1xuICAgICAgICAgICAgZXJyb3IgPSB2YWxpZGF0b3JzW2ldKHZhbCk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5jb21wb3NlU2NoZW1hcyA9IGNvbXBvc2VTY2hlbWFzO1xuZnVuY3Rpb24gdmFsaWRhdGUob2JqLCB2YWxpZGF0b3IpIHtcbiAgICByZXR1cm4gZ2V0RXJyb3JzKG9iaiwgdmFsaWRhdG9yKTtcbn1cbmV4cG9ydHMudmFsaWRhdGUgPSB2YWxpZGF0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5taXhlZEFwcENsaWVudENoZWNrID0gZXhwb3J0cy5yZWxhdGl2ZVBhdGhTY2hlbWEgPSBleHBvcnRzLnJlbGF0aXZlVXJsU2NoZW1hID0gZXhwb3J0cy5pc1ZhbGlkUmVsYXRpdmVQYXRoID0gZXhwb3J0cy5hY3Rpb25NZXNzYWdlID0gZXhwb3J0cy5jcmVhdGVBY3Rpb25WYWxpZGF0b3IgPSB2b2lkIDA7XG52YXIgdHlwZV92YWxpZGF0ZV8xID0gcmVxdWlyZShcIi4vdHlwZS12YWxpZGF0ZVwiKTtcbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvblZhbGlkYXRvcih0eXBlLCBwYXlsb2FkU2NoZW1hLCBwYXlsb2FkUmVxdWlyZWQsIGlkUmVxdWlyZWQpIHtcbiAgICBpZiAocGF5bG9hZFNjaGVtYSA9PT0gdm9pZCAwKSB7IHBheWxvYWRTY2hlbWEgPSB1bmRlZmluZWQ7IH1cbiAgICBpZiAocGF5bG9hZFJlcXVpcmVkID09PSB2b2lkIDApIHsgcGF5bG9hZFJlcXVpcmVkID0gZmFsc2U7IH1cbiAgICBpZiAoaWRSZXF1aXJlZCA9PT0gdm9pZCAwKSB7IGlkUmVxdWlyZWQgPSBmYWxzZTsgfVxuICAgIHZhciBpZFNjaGVtYSA9IHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzT2JqZWN0KHtcbiAgICAgICAgaWQ6IGlkUmVxdWlyZWQgPyB0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc1N0cmluZygpIDogdHlwZV92YWxpZGF0ZV8xLm1ha2VPcHRpb25hbCh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc1N0cmluZygpKSxcbiAgICB9KTtcbiAgICB2YXIgc2NoZW1hID0gcGF5bG9hZFNjaGVtYSA/IHR5cGVfdmFsaWRhdGVfMS5jb21wb3NlU2NoZW1hcyhpZFNjaGVtYSwgcGF5bG9hZFNjaGVtYSkgOiBpZFNjaGVtYTtcbiAgICByZXR1cm4gdHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNPYmplY3Qoe1xuICAgICAgICB0eXBlOiB0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc0VudW0odHlwZSwge1xuICAgICAgICAgICAgbWVzc2FnZTogZnVuY3Rpb24gKF8sIHZhbCkgeyByZXR1cm4gXCJUaGUgYWN0aW9uIHR5cGUgYFwiICsgdmFsICsgXCJgIGlzIGludmFsaWQgb3IgdW5zdXBwb3J0ZWRcIjsgfSxcbiAgICAgICAgfSksXG4gICAgICAgIHBheWxvYWQ6IHBheWxvYWRSZXF1aXJlZCA/IHNjaGVtYSA6IHR5cGVfdmFsaWRhdGVfMS5tYWtlT3B0aW9uYWwoc2NoZW1hKSxcbiAgICB9KTtcbn1cbmV4cG9ydHMuY3JlYXRlQWN0aW9uVmFsaWRhdG9yID0gY3JlYXRlQWN0aW9uVmFsaWRhdG9yO1xuZnVuY3Rpb24gYWN0aW9uTWVzc2FnZShlcnJvcnMpIHtcbiAgICByZXR1cm4gZXJyb3JzXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGVycikge1xuICAgICAgICB2YXIgcGF0aCA9IGVyci5wYXRoLCBlcnJvciA9IGVyci5lcnJvciwgbWVzc2FnZSA9IGVyci5tZXNzYWdlLCB2YWx1ZSA9IGVyci52YWx1ZTtcbiAgICAgICAgdmFyIHZhbHVlU3RyID0gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICByZXR1cm4gXCJgXCIgKyBlcnJvciArIFwiYCB0aHJvd24gZm9yXCIgKyAocGF0aCA/IFwiIHBhdGg6IFwiICsgcGF0aCArIFwiIGFuZFwiIDogJycpICsgXCIgdmFsdWU6IGBcIiArIHZhbHVlU3RyICsgXCJgXCIgKyAobWVzc2FnZSA/IFwiIHdpdGggbWVzc2FnZTogXCIgKyBtZXNzYWdlIDogJycpO1xuICAgIH0pXG4gICAgICAgIC5qb2luKCcgfCAnKTtcbn1cbmV4cG9ydHMuYWN0aW9uTWVzc2FnZSA9IGFjdGlvbk1lc3NhZ2U7XG5mdW5jdGlvbiBpc1ZhbGlkUmVsYXRpdmVQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHBhdGggPT09ICdzdHJpbmcnICYmIChwYXRoID09PSAnJyB8fCBwYXRoLnN0YXJ0c1dpdGgoJy8nKSk7XG59XG5leHBvcnRzLmlzVmFsaWRSZWxhdGl2ZVBhdGggPSBpc1ZhbGlkUmVsYXRpdmVQYXRoO1xuZXhwb3J0cy5yZWxhdGl2ZVVybFNjaGVtYSA9IHR5cGVfdmFsaWRhdGVfMS5jb21wb3NlU2NoZW1hcyh0eXBlX3ZhbGlkYXRlXzEubWF0Y2hlc1N0cmluZygpLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gaXNWYWxpZFJlbGF0aXZlUGF0aCh2YWx1ZSlcbiAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgOiBbeyBlcnJvcjogJ2ludmFsaWRfcmVsYXRpdmVfcGF0aCcsIHZhbHVlOiB2YWx1ZSwgbWVzc2FnZTogJ2V4cGVjdGVkIHN0cmluZyB0byBzdGFydCB3aXRoIGAvYCcgfV07XG59KTtcbmV4cG9ydHMucmVsYXRpdmVQYXRoU2NoZW1hID0gdHlwZV92YWxpZGF0ZV8xLm1hdGNoZXNPYmplY3Qoe1xuICAgIHBhdGg6IGV4cG9ydHMucmVsYXRpdmVVcmxTY2hlbWEsXG59KTtcbmZ1bmN0aW9uIG1peGVkQXBwQ2xpZW50Q2hlY2sod2luZG93KSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghd2luZG93Lmhhc093blByb3BlcnR5KCdTaG9waWZ5QXBwJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmVycm9yKFwiJWNFeGNlcHRpb24gRGV0ZWN0ZWQgXFx1RDgzRFxcdURFQUJcXG5cXG4lY0FuIGluc3RhbmNlIG9mIHRoZSBFQVNESyBjbGllbnQgd2FzIGRldGVjdGVkIHdoaWxlIGluaXRpYWxpemluZyBTaG9waWZ5IEFwcCBCcmlkZ2UuIFVzaW5nIFNob3BpZnkgQXBwIEJyaWRnZSBhbmQgdGhlIEVBU0RLIHNpbXVsdGFuZW91c2x5IGlzIG5vdCBzdXBwb3J0ZWQuXFxuXFxuSWYgeW91J3JlIG1pZ3JhdGluZyBhbiBleGlzdGluZyBhcHAgdGhhdCB3YXMgYnVpbHQgd2l0aCB0aGUgc2hvcGlmeV9hcHAgZ2VtLCB0aGVuIHRoZSBFQVNESyBjbGllbnQgbWlnaHQgaGF2ZSBiZWVuIGluY2x1ZGVkIGluIHRoZSBob21lIHBhZ2UgdmlldyB0ZW1wbGF0ZS4gSW4gdGhpcyBjYXNlLCByZW1vdmUgaXQgZnJvbSB5b3VyIGFwcCBiZWZvcmUgaW5pdGlhbGl6aW5nIFNob3BpZnkgQXBwIEJyaWRnZSBhZ2Fpbi5cIiwgJ2ZvbnQtc2l6ZTogbGFyZ2U7JywgJ2ZvbnQtc2l6ZTogbm9ybWFsOycpO1xuICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcbn1cbmV4cG9ydHMubWl4ZWRBcHBDbGllbnRDaGVjayA9IG1peGVkQXBwQ2xpZW50Q2hlY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgICAgcltrXSA9IGFbal07XG4gICAgcmV0dXJuIHI7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy52YWxpZGF0b3JNaWRkbGV3YXJlID0gZXhwb3J0cy5jb25uZWN0VmFsaWRhdG9yVG9EaXNwYXRjaEhvb2sgPSBleHBvcnRzLmNvbm5lY3RWYWxpZGF0b3JUb1VwZGF0ZUhvb2sgPSB2b2lkIDA7XG52YXIgY2xpZW50XzEgPSByZXF1aXJlKFwiLi4vY2xpZW50XCIpO1xudmFyIHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vYWN0aW9ucy90eXBlc1wiKTtcbnZhciBFcnJvcl8xID0gcmVxdWlyZShcIi4uL2FjdGlvbnMvRXJyb3JcIik7XG52YXIgaGVscGVyXzEgPSByZXF1aXJlKFwiLi4vYWN0aW9ucy9oZWxwZXJcIik7XG52YXIgYWN0aW9uc18xID0gcmVxdWlyZShcIi4vYWN0aW9uc1wiKTtcbnZhciB0eXBlX3ZhbGlkYXRlXzEgPSByZXF1aXJlKFwiLi90eXBlLXZhbGlkYXRlXCIpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbmZ1bmN0aW9uIHVwZGF0ZVZhbGlkYXRvcihsb2NhbE9yaWdpbiwgZ3JvdXAsIG9wdGlvbnMpIHtcbiAgICBzd2l0Y2ggKGdyb3VwKSB7XG4gICAgICAgIGNhc2UgdHlwZXNfMS5Hcm91cC5CdXR0b246XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uc18xLkJ1dHRvbi52YWxpZGF0ZVByb3BzKG9wdGlvbnMpO1xuICAgICAgICBjYXNlIHR5cGVzXzEuR3JvdXAuQnV0dG9uR3JvdXA6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uc18xLkJ1dHRvbkdyb3VwLnZhbGlkYXRlUHJvcHMob3B0aW9ucyk7XG4gICAgICAgIGNhc2UgdHlwZXNfMS5Hcm91cC5Nb2RhbDpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zXzEuTW9kYWwudmFsaWRhdGVQcm9wcyhvcHRpb25zLCBsb2NhbE9yaWdpbik7XG4gICAgICAgIGNhc2UgdHlwZXNfMS5Hcm91cC5NZW51OlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnNfMS5NZW51LnZhbGlkYXRlUHJvcHMob3B0aW9ucyk7XG4gICAgICAgIGNhc2UgdHlwZXNfMS5Hcm91cC5MaW5rOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnNfMS5MaW5rLnZhbGlkYXRlUHJvcHMob3B0aW9ucyk7XG4gICAgICAgIGNhc2UgdHlwZXNfMS5Hcm91cC5UaXRsZUJhcjpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zXzEuVGl0bGVCYXIudmFsaWRhdGVQcm9wcyhvcHRpb25zKTtcbiAgICAgICAgY2FzZSB0eXBlc18xLkdyb3VwLlJlc291cmNlUGlja2VyOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnNfMS5SZXNvdXJjZVBpY2tlci52YWxpZGF0ZVByb3BzKG9wdGlvbnMpO1xuICAgICAgICBjYXNlIHR5cGVzXzEuR3JvdXAuVG9hc3Q6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uc18xLlRvYXN0LnZhbGlkYXRlUHJvcHMob3B0aW9ucyk7XG4gICAgICAgIGNhc2UgdHlwZXNfMS5Hcm91cC5Db250ZXh0dWFsU2F2ZUJhcjpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zXzEuQ29udGV4dHVhbFNhdmVCYXIudmFsaWRhdGVQcm9wcyhvcHRpb25zKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkaXNwYXRjaFBheWxvYWRWYWxpZGF0b3IoYWN0aW9uLCBsb2NhbE9yaWdpbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLmdyb3VwKSB7XG4gICAgICAgIGNhc2UgdHlwZXNfMS5Hcm91cC5CdXR0b246XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uc18xLkJ1dHRvbi52YWxpZGF0ZUFjdGlvbihhY3Rpb24pO1xuICAgICAgICBjYXNlIHR5cGVzXzEuR3JvdXAuQnV0dG9uR3JvdXA6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uc18xLkJ1dHRvbkdyb3VwLnZhbGlkYXRlQWN0aW9uKGFjdGlvbik7XG4gICAgICAgIGNhc2UgdHlwZXNfMS5Hcm91cC5Nb2RhbDpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zXzEuTW9kYWwudmFsaWRhdGVBY3Rpb24oYWN0aW9uLCBsb2NhbE9yaWdpbik7XG4gICAgICAgIGNhc2UgdHlwZXNfMS5Hcm91cC5NZW51OlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnNfMS5NZW51LnZhbGlkYXRlQWN0aW9uKGFjdGlvbik7XG4gICAgICAgIGNhc2UgdHlwZXNfMS5Hcm91cC5UaXRsZUJhcjpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zXzEuVGl0bGVCYXIudmFsaWRhdGVBY3Rpb24oYWN0aW9uKTtcbiAgICAgICAgY2FzZSB0eXBlc18xLkdyb3VwLlJlc291cmNlUGlja2VyOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnNfMS5SZXNvdXJjZVBpY2tlci52YWxpZGF0ZUFjdGlvbihhY3Rpb24pO1xuICAgICAgICBjYXNlIHR5cGVzXzEuR3JvdXAuTG9hZGluZzpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zXzEuTG9hZGluZy52YWxpZGF0ZUFjdGlvbihhY3Rpb24pO1xuICAgICAgICBjYXNlIHR5cGVzXzEuR3JvdXAuVG9hc3Q6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uc18xLlRvYXN0LnZhbGlkYXRlQWN0aW9uKGFjdGlvbik7XG4gICAgICAgIGNhc2UgdHlwZXNfMS5Hcm91cC5DYXJ0OlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnNfMS5DYXJ0LnZhbGlkYXRlQWN0aW9uKGFjdGlvbik7XG4gICAgICAgIGNhc2UgdHlwZXNfMS5Hcm91cC5OYXZpZ2F0aW9uOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnNfMS5OYXZpZ2F0aW9uLnZhbGlkYXRlQWN0aW9uKGFjdGlvbik7XG4gICAgICAgIGNhc2UgdHlwZXNfMS5Hcm91cC5QcmludDpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zXzEuUHJpbnQudmFsaWRhdGVBY3Rpb24oYWN0aW9uKTtcbiAgICAgICAgY2FzZSB0eXBlc18xLkdyb3VwLlNjYW5uZXI6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uc18xLlNjYW5uZXIudmFsaWRhdGVBY3Rpb24oYWN0aW9uKTtcbiAgICAgICAgY2FzZSB0eXBlc18xLkdyb3VwLkZ1bGxzY3JlZW46XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uc18xLkZ1bGxzY3JlZW4udmFsaWRhdGVBY3Rpb24oYWN0aW9uKTtcbiAgICAgICAgY2FzZSB0eXBlc18xLkdyb3VwLkNvbnRleHR1YWxTYXZlQmFyOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnNfMS5Db250ZXh0dWFsU2F2ZUJhci52YWxpZGF0ZUFjdGlvbihhY3Rpb24pO1xuICAgICAgICBjYXNlIHR5cGVzXzEuR3JvdXAuTGluazpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zXzEuTGluay52YWxpZGF0ZUFjdGlvbihhY3Rpb24pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRpc3BhdGNoVmFsaWRhdG9yKGFjdGlvbiwgb3JpZ2luKSB7XG4gICAgdmFyIGVycm9ycyA9IHR5cGVfdmFsaWRhdGVfMS52YWxpZGF0ZShhY3Rpb24sIHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzT2JqZWN0KHtcbiAgICAgICAgZ3JvdXA6IHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzRW51bSh0eXBlc18xLkdyb3VwLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiBmdW5jdGlvbiAoXywgdmFsdWUpIHsgcmV0dXJuIFwiVW5rbm93biBvciB1bnN1cHBvcnRlZCBhY3Rpb24gZ3JvdXAgYFwiICsgdmFsdWUgKyBcImBcIjsgfSxcbiAgICAgICAgfSksXG4gICAgICAgIHZlcnNpb246IHR5cGVfdmFsaWRhdGVfMS5tYXRjaGVzU3RyaW5nKCksXG4gICAgfSkpO1xuICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgcmV0dXJuIEVycm9yXzEuaW52YWxpZEFjdGlvbihhY3Rpb24sIHV0aWxzXzEuYWN0aW9uTWVzc2FnZShlcnJvcnMpKTtcbiAgICB9XG4gICAgdmFyIHBheWxvYWRFcnJvcnMgPSBkaXNwYXRjaFBheWxvYWRWYWxpZGF0b3IoYWN0aW9uLCBvcmlnaW4pO1xuICAgIHJldHVybiBwYXlsb2FkRXJyb3JzID8gRXJyb3JfMS5pbnZhbGlkUGF5bG9hZChhY3Rpb24sIHV0aWxzXzEuYWN0aW9uTWVzc2FnZShwYXlsb2FkRXJyb3JzKSkgOiBhY3Rpb247XG59XG5leHBvcnRzLmNvbm5lY3RWYWxpZGF0b3JUb1VwZGF0ZUhvb2sgPSBmdW5jdGlvbiAobmV4dCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgZ3JvdXAgc2hvdWxkIGJlIHN0YXRpY2x5IHNldCB0byB0aGUgZGVmYXVsdCBpbml0aWFsIGdyb3VwIGFzIGNlcnRhaW4gY29tcG9uZW50c1xuICAgICAgICAvLyAoZXguIEJ1dHRvbiBhbmQgQnV0dG9uR3JvdXApIGNhbiBiZSBkeW5hbWljYWxseSBncm91cGVkIHVuZGVyIGEgbmV3IGdyb3VwIChleC4gVGl0bGVCYXIpXG4gICAgICAgIC8vIFdlIGFjY2VwdCBwYXJ0aWFsIG9wdGlvbnMgc28gdGhlIHZhbGlkYXRvciBzaG91bGQgYmUgY2FsbGVkIG9uIG1lcmdlZCBuZXcgYW5kIG9sZCBvcHRpb25zXG4gICAgICAgIHZhciBtZXJnZWRPcHRpb25zID0gaGVscGVyXzEuZ2V0TWVyZ2VkUHJvcHModGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdmFyIGVycm9ycyA9IHVwZGF0ZVZhbGlkYXRvcih0aGlzLmFwcC5sb2NhbE9yaWdpbiwgdGhpcy5kZWZhdWx0R3JvdXAsIG1lcmdlZE9wdGlvbnMpO1xuICAgICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcl8xLmZyb21BY3Rpb24odXRpbHNfMS5hY3Rpb25NZXNzYWdlKGVycm9ycyksIEVycm9yXzEuQWN0aW9uVHlwZS5JTlZBTElEX09QVElPTlMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXh0LmFwcGx5KHZvaWQgMCwgX19zcHJlYWRBcnJheXMoW29wdGlvbnNdLCBhcmdzKSk7XG4gICAgfTtcbn07XG5leHBvcnRzLmNvbm5lY3RWYWxpZGF0b3JUb0Rpc3BhdGNoSG9vayA9IGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdmFyIGZpbmFsQWN0aW9uID0gZGlzcGF0Y2hWYWxpZGF0b3IoYWN0aW9uLCB0aGlzLmxvY2FsT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIG5leHQoZmluYWxBY3Rpb24pO1xuICAgIH07XG59O1xuZXhwb3J0cy52YWxpZGF0b3JNaWRkbGV3YXJlID0gZnVuY3Rpb24gKGhvb2tzKSB7XG4gICAgaG9va3Muc2V0KGNsaWVudF8xLkxpZmVjeWNsZUhvb2suVXBkYXRlQWN0aW9uLCBleHBvcnRzLmNvbm5lY3RWYWxpZGF0b3JUb1VwZGF0ZUhvb2spO1xuICAgIGhvb2tzLnNldChjbGllbnRfMS5MaWZlY3ljbGVIb29rLkRpc3BhdGNoQWN0aW9uLCBleHBvcnRzLmNvbm5lY3RWYWxpZGF0b3JUb0Rpc3BhdGNoSG9vayk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LHsgQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcclxuaW1wb3J0IHtBcHBQcm92aWRlcn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBBcG9sbG9DbGllbnQgZnJvbSAnYXBvbGxvLWJvb3N0JztcclxuaW1wb3J0IGVuVHJhbnNsYXRpb25zIGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMvbG9jYWxlcy9lbi5qc29uJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0ICdAc2hvcGlmeS9wb2xhcmlzL2Rpc3Qvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAnLi4vcmVzb3VyY2UvY3NzL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIGZldGNoT3B0aW9uczp7XHJcbiAgICAgICAgY3JlZGVudGlhbHM6J2luY2x1ZGUnXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXcmFwcGVkQXBwIGV4dGVuZHMgQXBwIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKSAgXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgaXN1c2VyTG9nZ2VkaW46ZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtpc3VzZXJMb2dnZWRpbjpmYWxzZX0pXHJcbiAgICBpZighdGhpcy5zdGF0ZS5pc3VzZXJMb2dnZWRpbil7XHJcbiAgICAgIFJvdXRlci5wdXNoKCcvc2lnbmluJylcclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5GQiBEcm9wU2hpcHBpbmc8L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPFByb3ZpZGVyIGNvbmZpZz17Y29uZmlnfT5cclxuICAgICAgICAgIDxBcHBQcm92aWRlciBpMThuPXtlblRyYW5zbGF0aW9uc30+XHJcbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgPC9BcHBQcm92aWRlcj5cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9