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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/CssBaseline/index.js\");\n/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/x-date-pickers */ \"./node_modules/@mui/x-date-pickers/index.js\");\n/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ \"./node_modules/@mui/x-date-pickers/AdapterDayjs/index.js\");\n/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/store */ \"./src/store.js\");\n/* harmony import */ var _src_components_ArchivedMenuBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/ArchivedMenuBar */ \"./src/components/ArchivedMenuBar.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_features_todos_todosSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/features/todos/todosSlice */ \"./src/features/todos/todosSlice.ts\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar darkTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.createTheme)({\n    palette: {\n        mode: \"dark\"\n    }\n});\nvar ComponentWrapper = function(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_7__._)({}, pageProps), void 0, false, {\n        fileName: \"/Users/sachasitbon/Developer/Oxya/Redux-React-MUI/pages/_app.tsx\",\n        lineNumber: 20,\n        columnNumber: 10\n    }, _this);\n};\n_c = ComponentWrapper;\nvar MyApp = function(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var handleLogout = function() {\n        localStorage.removeItem(\"token\");\n        dispatch((0,_src_features_todos_todosSlice__WEBPACK_IMPORTED_MODULE_5__.clearUser)());\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_8__.Provider, {\n        store: _src_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {\n            theme: darkTheme,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/sachasitbon/Developer/Oxya/Redux-React-MUI/pages/_app.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_10__.LocalizationProvider, {\n                    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_11__.AdapterDayjs,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ArchivedMenuBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            onLogout: handleLogout\n                        }, void 0, false, {\n                            fileName: \"/Users/sachasitbon/Developer/Oxya/Redux-React-MUI/pages/_app.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ComponentWrapper, {\n                            Component: Component,\n                            pageProps: pageProps\n                        }, void 0, false, {\n                            fileName: \"/Users/sachasitbon/Developer/Oxya/Redux-React-MUI/pages/_app.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sachasitbon/Developer/Oxya/Redux-React-MUI/pages/_app.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sachasitbon/Developer/Oxya/Redux-React-MUI/pages/_app.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/sachasitbon/Developer/Oxya/Redux-React-MUI/pages/_app.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(MyApp, \"cnCgJZqboYHCQPt1X4vRgM1/GGo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c1 = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c, _c1;\n$RefreshReg$(_c, \"ComponentWrapper\");\n$RefreshReg$(_c1, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUwQjtBQUNjO0FBQ2Q7QUFDTztBQUNLO0FBQy9CO0FBQytCO0FBQ3hCO0FBQ3FCO0FBRTdELElBQU1ZLFlBQVlSLGlFQUFXQSxDQUFDO0lBQzVCUyxTQUFTO1FBQ1BDLE1BQU07SUFDUjtBQUNGO0FBRUEsSUFBTUMsbUJBQXVDO1FBQUdDLGtCQUFBQSxXQUFXQyxrQkFBQUE7SUFDekQscUJBQU8sOERBQUNELFdBQUFBLDZEQUFBQSxLQUFjQzs7Ozs7QUFDeEI7S0FGTUY7QUFJTixJQUFNRyxRQUE0QjtRQUFHRixrQkFBQUEsV0FBV0Msa0JBQUFBOztJQUM5QyxJQUFNRSxXQUFXakIsd0RBQVdBO0lBQzVCLElBQU1rQixTQUFTVixzREFBU0E7SUFFeEIsSUFBTVcsZUFBZTtRQUNuQkMsYUFBYUMsVUFBVSxDQUFDO1FBQ3hCSixTQUFTUix5RUFBU0E7UUFDbEJTLE9BQU9JLElBQUksQ0FBQztJQUNkO0lBRUEscUJBQ0UsOERBQUN2QixpREFBUUE7UUFBQ08sT0FBT0Esa0RBQUtBO2tCQUNwQiw0RUFBQ0wsK0RBQWFBO1lBQUNzQixPQUFPYjs7OEJBQ3BCLDhEQUFDUCxpRUFBV0E7Ozs7OzhCQUNaLDhEQUFDQyxzRUFBb0JBO29CQUFDb0IsYUFBYW5CLDJFQUFZQTs7c0NBQzdDLDhEQUFDRSx1RUFBZUE7NEJBQUNrQixVQUFVTjs7Ozs7O3NDQUMzQiw4REFBQ047NEJBQWlCQyxXQUFXQTs0QkFBV0MsV0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdEO0dBckJNQzs7UUFDYWhCLG9EQUFXQTtRQUNiUSxrREFBU0E7OztNQUZwQlE7QUF1Qk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IFByb3ZpZGVyLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIGNyZWF0ZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHsgTG9jYWxpemF0aW9uUHJvdmlkZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzJztcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zcmMvc3RvcmUnO1xuaW1wb3J0IEFyY2hpdmVkTWVudUJhciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9BcmNoaXZlZE1lbnVCYXInO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgY2xlYXJVc2VyIH0gZnJvbSAnLi4vc3JjL2ZlYXR1cmVzL3RvZG9zL3RvZG9zU2xpY2UnO1xuXG5jb25zdCBkYXJrVGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBtb2RlOiAnZGFyaycsXG4gIH0sXG59KTtcblxuY29uc3QgQ29tcG9uZW50V3JhcHBlcjogUmVhY3QuRkM8QXBwUHJvcHM+ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcbn07XG5cbmNvbnN0IE15QXBwOiBSZWFjdC5GQzxBcHBQcm9wcz4gPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICAgIGRpc3BhdGNoKGNsZWFyVXNlcigpKTtcbiAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtkYXJrVGhlbWV9PlxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxuICAgICAgICAgIDxBcmNoaXZlZE1lbnVCYXIgb25Mb2dvdXQ9e2hhbmRsZUxvZ291dH0gLz5cbiAgICAgICAgICA8Q29tcG9uZW50V3JhcHBlciBDb21wb25lbnQ9e0NvbXBvbmVudH0gcGFnZVByb3BzPXtwYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvdmlkZXIiLCJ1c2VEaXNwYXRjaCIsIlRoZW1lUHJvdmlkZXIiLCJjcmVhdGVUaGVtZSIsIkNzc0Jhc2VsaW5lIiwiTG9jYWxpemF0aW9uUHJvdmlkZXIiLCJBZGFwdGVyRGF5anMiLCJzdG9yZSIsIkFyY2hpdmVkTWVudUJhciIsInVzZVJvdXRlciIsImNsZWFyVXNlciIsImRhcmtUaGVtZSIsInBhbGV0dGUiLCJtb2RlIiwiQ29tcG9uZW50V3JhcHBlciIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIk15QXBwIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJoYW5kbGVMb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwicHVzaCIsInRoZW1lIiwiZGF0ZUFkYXB0ZXIiLCJvbkxvZ291dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});