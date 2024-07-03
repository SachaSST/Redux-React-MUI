"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/server/create-instance */ \"@emotion/server/create-instance\");\n/* harmony import */ var _src_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/createEmotionCache */ \"./src/createEmotionCache.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__, _src_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__]);\n([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__, _src_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_2___default()) {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                        id: \"emotion-server-side\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sachasitbon/Desktop/Redux-React-MUI/pages/_document.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sachasitbon/Desktop/Redux-React-MUI/pages/_document.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}, void 0, false, {\n                            fileName: \"/Users/sachasitbon/Desktop/Redux-React-MUI/pages/_document.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {}, void 0, false, {\n                            fileName: \"/Users/sachasitbon/Desktop/Redux-React-MUI/pages/_document.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sachasitbon/Desktop/Redux-React-MUI/pages/_document.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sachasitbon/Desktop/Redux-React-MUI/pages/_document.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this);\n    }\n}\nMyDocument.getInitialProps = async (ctx)=>{\n    const originalRenderPage = ctx.renderPage;\n    const cache = (0,_src_createEmotionCache__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const { extractCriticalToChunks } = (0,_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(cache);\n    ctx.renderPage = ()=>originalRenderPage({\n            enhanceApp: (App)=>function EnhanceApp(props) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {\n                        emotionCache: cache,\n                        ...props\n                    }, void 0, false, {\n                        fileName: \"/Users/sachasitbon/Desktop/Redux-React-MUI/pages/_document.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 18\n                    }, this);\n                }\n        });\n    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_2___default().getInitialProps(ctx);\n    const emotionStyles = extractCriticalToChunks(initialProps.html);\n    const emotionStyleTags = emotionStyles.styles.map((style)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n            \"data-emotion\": `${style.key} ${style.ids.join(\" \")}`,\n            dangerouslySetInnerHTML: {\n                __html: style.css\n            }\n        }, style.key, false, {\n            fileName: \"/Users/sachasitbon/Desktop/Redux-React-MUI/pages/_document.tsx\",\n            lineNumber: 40,\n            columnNumber: 5\n        }, undefined));\n    return {\n        ...initialProps,\n        styles: [\n            ...react__WEBPACK_IMPORTED_MODULE_1___default().Children.toArray(initialProps.styles),\n            ...emotionStyleTags\n        ]\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDOEQ7QUFDdEI7QUFDUDtBQUU1QyxNQUFNUSxtQkFBbUJQLHNEQUFRQTtJQUM5Q1EsU0FBUztRQUNQLHFCQUNFLDhEQUFDUCwrQ0FBSUE7WUFBQ1EsTUFBSzs7OEJBQ1QsOERBQUNQLCtDQUFJQTs4QkFDSCw0RUFBQ1E7d0JBQU1DLElBQUc7Ozs7Ozs7Ozs7OzhCQUVaLDhEQUFDQzs7c0NBQ0MsOERBQUNULCtDQUFJQTs7Ozs7c0NBQ0wsOERBQUNDLHFEQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJbkI7QUFDRjtBQUVBRyxXQUFXTSxlQUFlLEdBQUcsT0FBT0M7SUFDbEMsTUFBTUMscUJBQXFCRCxJQUFJRSxVQUFVO0lBRXpDLE1BQU1DLFFBQVFYLG1FQUFrQkE7SUFDaEMsTUFBTSxFQUFFWSx1QkFBdUIsRUFBRSxHQUFHYiwyRUFBbUJBLENBQUNZO0lBRXhESCxJQUFJRSxVQUFVLEdBQUcsSUFDZkQsbUJBQW1CO1lBQ2pCSSxZQUFZLENBQUNDLE1BQ1gsU0FBU0MsV0FBV0MsS0FBSztvQkFDdkIscUJBQU8sOERBQUNGO3dCQUFJRyxjQUFjTjt3QkFBUSxHQUFHSyxLQUFLOzs7Ozs7Z0JBQzVDO1FBQ0o7SUFFRixNQUFNRSxlQUFlLE1BQU14QixvRUFBd0IsQ0FBQ2M7SUFFcEQsTUFBTVcsZ0JBQWdCUCx3QkFBd0JNLGFBQWFFLElBQUk7SUFDL0QsTUFBTUMsbUJBQW1CRixjQUFjRyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxDQUFDbkIsc0JBQ2pELDhEQUFDQTtZQUNDb0IsZ0JBQWMsQ0FBQyxFQUFFcEIsTUFBTXFCLEdBQUcsQ0FBQyxDQUFDLEVBQUVyQixNQUFNc0IsR0FBRyxDQUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBRW5EQyx5QkFBeUI7Z0JBQUVDLFFBQVF6QixNQUFNMEIsR0FBRztZQUFDO1dBRHhDMUIsTUFBTXFCLEdBQUc7Ozs7O0lBS2xCLE9BQU87UUFDTCxHQUFHUCxZQUFZO1FBQ2ZJLFFBQVE7ZUFDSDdCLHFEQUFjLENBQUN1QyxPQUFPLENBQUNkLGFBQWFJLE1BQU07ZUFDMUNEO1NBQ0o7SUFDSDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtcmVkdXgtbXVpLy4vcGFnZXMvX2RvY3VtZW50LnRzeD9kMzdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRG9jdW1lbnQsIHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCwgRG9jdW1lbnRDb250ZXh0IH0gZnJvbSAnbmV4dC9kb2N1bWVudCc7XG5pbXBvcnQgY3JlYXRlRW1vdGlvblNlcnZlciBmcm9tICdAZW1vdGlvbi9zZXJ2ZXIvY3JlYXRlLWluc3RhbmNlJztcbmltcG9ydCBjcmVhdGVFbW90aW9uQ2FjaGUgZnJvbSAnLi4vc3JjL2NyZWF0ZUVtb3Rpb25DYWNoZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEh0bWwgbGFuZz1cImVuXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxzdHlsZSBpZD1cImVtb3Rpb24tc2VydmVyLXNpZGVcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9IdG1sPlxuICAgICk7XG4gIH1cbn1cblxuTXlEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4OiBEb2N1bWVudENvbnRleHQpID0+IHtcbiAgY29uc3Qgb3JpZ2luYWxSZW5kZXJQYWdlID0gY3R4LnJlbmRlclBhZ2U7XG5cbiAgY29uc3QgY2FjaGUgPSBjcmVhdGVFbW90aW9uQ2FjaGUoKTtcbiAgY29uc3QgeyBleHRyYWN0Q3JpdGljYWxUb0NodW5rcyB9ID0gY3JlYXRlRW1vdGlvblNlcnZlcihjYWNoZSk7XG5cbiAgY3R4LnJlbmRlclBhZ2UgPSAoKSA9PlxuICAgIG9yaWdpbmFsUmVuZGVyUGFnZSh7XG4gICAgICBlbmhhbmNlQXBwOiAoQXBwOiBhbnkpID0+XG4gICAgICAgIGZ1bmN0aW9uIEVuaGFuY2VBcHAocHJvcHMpIHtcbiAgICAgICAgICByZXR1cm4gPEFwcCBlbW90aW9uQ2FjaGU9e2NhY2hlfSB7Li4ucHJvcHN9IC8+O1xuICAgICAgICB9LFxuICAgIH0pO1xuXG4gIGNvbnN0IGluaXRpYWxQcm9wcyA9IGF3YWl0IERvY3VtZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuXG4gIGNvbnN0IGVtb3Rpb25TdHlsZXMgPSBleHRyYWN0Q3JpdGljYWxUb0NodW5rcyhpbml0aWFsUHJvcHMuaHRtbCk7XG4gIGNvbnN0IGVtb3Rpb25TdHlsZVRhZ3MgPSBlbW90aW9uU3R5bGVzLnN0eWxlcy5tYXAoKHN0eWxlKSA9PiAoXG4gICAgPHN0eWxlXG4gICAgICBkYXRhLWVtb3Rpb249e2Ake3N0eWxlLmtleX0gJHtzdHlsZS5pZHMuam9pbignICcpfWB9XG4gICAgICBrZXk9e3N0eWxlLmtleX1cbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3R5bGUuY3NzIH19XG4gICAgLz5cbiAgKSk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5pbml0aWFsUHJvcHMsXG4gICAgc3R5bGVzOiBbXG4gICAgICAuLi5SZWFjdC5DaGlsZHJlbi50b0FycmF5KGluaXRpYWxQcm9wcy5zdHlsZXMpLFxuICAgICAgLi4uZW1vdGlvblN0eWxlVGFncyxcbiAgICBdLFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkRvY3VtZW50IiwiSHRtbCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsImNyZWF0ZUVtb3Rpb25TZXJ2ZXIiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJNeURvY3VtZW50IiwicmVuZGVyIiwibGFuZyIsInN0eWxlIiwiaWQiLCJib2R5IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwib3JpZ2luYWxSZW5kZXJQYWdlIiwicmVuZGVyUGFnZSIsImNhY2hlIiwiZXh0cmFjdENyaXRpY2FsVG9DaHVua3MiLCJlbmhhbmNlQXBwIiwiQXBwIiwiRW5oYW5jZUFwcCIsInByb3BzIiwiZW1vdGlvbkNhY2hlIiwiaW5pdGlhbFByb3BzIiwiZW1vdGlvblN0eWxlcyIsImh0bWwiLCJlbW90aW9uU3R5bGVUYWdzIiwic3R5bGVzIiwibWFwIiwiZGF0YS1lbW90aW9uIiwia2V5IiwiaWRzIiwiam9pbiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY3NzIiwiQ2hpbGRyZW4iLCJ0b0FycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_document.tsx\n");

/***/ }),

/***/ "./src/createEmotionCache.ts":
/*!***********************************!*\
  !*** ./src/createEmotionCache.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_0__]);\n_emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst isBrowser = typeof document !== \"undefined\";\nfunction createEmotionCache() {\n    return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        key: \"css\",\n        prepend: true\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY3JlYXRlRW1vdGlvbkNhY2hlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlDO0FBRXpDLE1BQU1DLFlBQVksT0FBT0MsYUFBYTtBQUV2QixTQUFTQztJQUN0QixPQUFPSCwwREFBV0EsQ0FBQztRQUFFSSxLQUFLO1FBQU9DLFNBQVM7SUFBSztBQUNqRCIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXJlZHV4LW11aS8uL3NyYy9jcmVhdGVFbW90aW9uQ2FjaGUudHM/OTEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuXG5jb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbW90aW9uQ2FjaGUoKSB7XG4gIHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogJ2NzcycsIHByZXBlbmQ6IHRydWUgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2FjaGUiLCJpc0Jyb3dzZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVtb3Rpb25DYWNoZSIsImtleSIsInByZXBlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/createEmotionCache.ts\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@emotion/cache");;

/***/ }),

/***/ "@emotion/server/create-instance":
/*!**************************************************!*\
  !*** external "@emotion/server/create-instance" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("@emotion/server/create-instance");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_document.tsx")));
module.exports = __webpack_exports__;

})();