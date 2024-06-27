"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/CssBaseline/index.js\");\n/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/x-date-pickers */ \"./node_modules/@mui/x-date-pickers/index.js\");\n/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ \"./node_modules/@mui/x-date-pickers/AdapterDayjs/index.js\");\n/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/store */ \"./src/store.js\");\n/* harmony import */ var _src_components_ArchivedMenuBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/ArchivedMenuBar */ \"./src/components/ArchivedMenuBar.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_features_todos_todosSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/features/todos/todosSlice */ \"./src/features/todos/todosSlice.ts\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar darkTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.createTheme)({\n    palette: {\n        mode: \"dark\"\n    }\n});\nvar ComponentWrapper = function(param) {\n    var Component = param.Component, pageProps = param.pageProps, router = param.router;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    var handleLogout = function() {\n        localStorage.removeItem(\"token\");\n        dispatch((0,_src_features_todos_todosSlice__WEBPACK_IMPORTED_MODULE_5__.clearUser)());\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ArchivedMenuBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onLogout: handleLogout\n            }, void 0, false, {\n                fileName: \"/Users/sachasitbon/Developer/Oxya/Redux-React-MUI/pages/_app.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_8__._)({}, pageProps), void 0, false, {\n                fileName: \"/Users/sachasitbon/Developer/Oxya/Redux-React-MUI/pages/_app.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(ComponentWrapper, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch\n    ];\n});\n_c = ComponentWrapper;\nvar WrappedComponentWrapper = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.withRouter)(ComponentWrapper);\n_c1 = WrappedComponentWrapper;\nvar MyApp = function(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_7__.Provider, {\n        store: _src_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {\n            theme: darkTheme,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/sachasitbon/Developer/Oxya/Redux-React-MUI/pages/_app.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_10__.LocalizationProvider, {\n                    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_11__.AdapterDayjs,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WrappedComponentWrapper, {\n                        Component: Component,\n                        pageProps: pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/sachasitbon/Developer/Oxya/Redux-React-MUI/pages/_app.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/sachasitbon/Developer/Oxya/Redux-React-MUI/pages/_app.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sachasitbon/Developer/Oxya/Redux-React-MUI/pages/_app.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/sachasitbon/Developer/Oxya/Redux-React-MUI/pages/_app.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_c2 = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ComponentWrapper\");\n$RefreshReg$(_c1, \"WrappedComponentWrapper\");\n$RefreshReg$(_c2, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUVhO0FBQzJCO0FBQ2Q7QUFDTztBQUNLO0FBQy9CO0FBQytCO0FBQ3RCO0FBQ1U7QUFDUztBQUU3RCxJQUFNWSxZQUFZVCxpRUFBV0EsQ0FBQztJQUM1QlUsU0FBUztRQUNQQyxNQUFNO0lBQ1I7QUFDRjtBQU1BLElBQU1DLG1CQUFvRDtRQUFHQyxrQkFBQUEsV0FBV0Msa0JBQUFBLFdBQVdDLGVBQUFBOztJQUNqRixJQUFNQyxXQUFXVix3REFBV0E7SUFFNUIsSUFBTVcsZUFBZTtRQUNuQkMsYUFBYUMsVUFBVSxDQUFDO1FBQ3hCSCxTQUFTUix5RUFBU0E7UUFDbEJPLE9BQU9LLElBQUksQ0FBQztJQUNkO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDZix1RUFBZUE7Z0JBQUNnQixVQUFVSjs7Ozs7OzBCQUMzQiw4REFBQ0osV0FBQUEsNkRBQUFBLEtBQWNDOzs7Ozs7O0FBR3JCO0dBZk1GOztRQUNhTixvREFBV0E7OztLQUR4Qk07QUFpQk4sSUFBTVUsMEJBQTBCZix1REFBVUEsQ0FBQ0s7TUFBckNVO0FBRU4sSUFBTUMsUUFBNEI7UUFBR1Ysa0JBQUFBLFdBQVdDLGtCQUFBQTtJQUM5QyxxQkFDRSw4REFBQ2hCLGlEQUFRQTtRQUFDTSxPQUFPQSxrREFBS0E7a0JBQ3BCLDRFQUFDTCwrREFBYUE7WUFBQ3lCLE9BQU9mOzs4QkFDcEIsOERBQUNSLGlFQUFXQTs7Ozs7OEJBQ1osOERBQUNDLHNFQUFvQkE7b0JBQUN1QixhQUFhdEIsMkVBQVlBOzhCQUM3Qyw0RUFBQ21CO3dCQUF3QlQsV0FBV0E7d0JBQVdDLFdBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BFO01BWE1TO0FBYU4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgY3JlYXRlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgeyBMb2NhbGl6YXRpb25Qcm92aWRlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMnO1xuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9BZGFwdGVyRGF5anMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3NyYy9zdG9yZSc7XG5pbXBvcnQgQXJjaGl2ZWRNZW51QmFyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0FyY2hpdmVkTWVudUJhcic7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZVJvdXRlciwgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGNsZWFyVXNlciB9IGZyb20gJy4uL3NyYy9mZWF0dXJlcy90b2Rvcy90b2Rvc1NsaWNlJztcblxuY29uc3QgZGFya1RoZW1lID0gY3JlYXRlVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgbW9kZTogJ2RhcmsnLFxuICB9LFxufSk7XG5cbmludGVyZmFjZSBDb21wb25lbnRXcmFwcGVyUHJvcHMgZXh0ZW5kcyBBcHBQcm9wcyB7XG4gIHJvdXRlcjogYW55O1xufVxuXG5jb25zdCBDb21wb25lbnRXcmFwcGVyOiBSZWFjdC5GQzxDb21wb25lbnRXcmFwcGVyUHJvcHM+ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG4gICAgZGlzcGF0Y2goY2xlYXJVc2VyKCkpO1xuICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QXJjaGl2ZWRNZW51QmFyIG9uTG9nb3V0PXtoYW5kbGVMb2dvdXR9IC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBXcmFwcGVkQ29tcG9uZW50V3JhcHBlciA9IHdpdGhSb3V0ZXIoQ29tcG9uZW50V3JhcHBlcik7XG5cbmNvbnN0IE15QXBwOiBSZWFjdC5GQzxBcHBQcm9wcz4gPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17ZGFya1RoZW1lfT5cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cbiAgICAgICAgICA8V3JhcHBlZENvbXBvbmVudFdyYXBwZXIgQ29tcG9uZW50PXtDb21wb25lbnR9IHBhZ2VQcm9wcz17cGFnZVByb3BzfSAvPlxuICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3ZpZGVyIiwiVGhlbWVQcm92aWRlciIsImNyZWF0ZVRoZW1lIiwiQ3NzQmFzZWxpbmUiLCJMb2NhbGl6YXRpb25Qcm92aWRlciIsIkFkYXB0ZXJEYXlqcyIsInN0b3JlIiwiQXJjaGl2ZWRNZW51QmFyIiwidXNlRGlzcGF0Y2giLCJ3aXRoUm91dGVyIiwiY2xlYXJVc2VyIiwiZGFya1RoZW1lIiwicGFsZXR0ZSIsIm1vZGUiLCJDb21wb25lbnRXcmFwcGVyIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiZGlzcGF0Y2giLCJoYW5kbGVMb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwicHVzaCIsIm9uTG9nb3V0IiwiV3JhcHBlZENvbXBvbmVudFdyYXBwZXIiLCJNeUFwcCIsInRoZW1lIiwiZGF0ZUFkYXB0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});