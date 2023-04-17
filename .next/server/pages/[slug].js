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
exports.id = "pages/[slug]";
exports.ids = ["pages/[slug]"];
exports.modules = {

/***/ "./src/styles/Home.module.css":
/*!************************************!*\
  !*** ./src/styles/Home.module.css ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJhY3RpY2UtbmV4dGpzLWJsb2ctY29udGVudGZ1bC8uL3NyYy9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzI3YWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/Home.module.css\n");

/***/ }),

/***/ "./src/lib/contentful.ts":
/*!*******************************!*\
  !*** ./src/lib/contentful.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildClient\": () => (/* binding */ buildClient)\n/* harmony export */ });\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! contentful */ \"contentful\");\n/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_0__);\n\nconst buildClient = ()=>{\n    const client = (0,contentful__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n        space: process.env.CF_SPACE_ID || \"\",\n        accessToken: process.env.CF_ACCESS_TOKEN || \"\"\n    });\n    return client;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2NvbnRlbnRmdWwudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBDO0FBaUNuQyxNQUFNQyxjQUFjLElBQU07SUFDL0IsTUFBTUMsU0FBU0Ysd0RBQVlBLENBQUM7UUFDMUJHLE9BQU9DLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxJQUFJO1FBQ2xDQyxhQUFhSCxRQUFRQyxHQUFHLENBQUNHLGVBQWUsSUFBSTtJQUM5QztJQUNBLE9BQU9OO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3ByYWN0aWNlLW5leHRqcy1ibG9nLWNvbnRlbnRmdWwvLi9zcmMvbGliL2NvbnRlbnRmdWwudHM/MTI0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiY29udGVudGZ1bFwiO1xuXG5pbXBvcnQgeyBFbnRyeSB9IGZyb20gXCJjb250ZW50ZnVsXCI7XG5pbXBvcnQgeyBEb2N1bWVudCB9IGZyb20gXCJAY29udGVudGZ1bC9yaWNoLXRleHQtdHlwZXNcIjtcbmltcG9ydCB7IEVudHJ5U3lzIH0gZnJvbSAnY29udGVudGZ1bC1tYW5hZ2VtZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBJUG9zdEZpZWxkcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHNsdWc6IHN0cmluZztcbiAgY29udGVudDogRG9jdW1lbnQ7XG4gIGZpZWxkczoge1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfTtcbiAgY29udGVudFR5cGVJZDogJ3Bvc3QnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQb3N0IGV4dGVuZHMgRW50cnk8SVBvc3RGaWVsZHM+IHtcbiAgc3lzOiBFbnRyeVN5cyAmIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBjcmVhdGVkQXQ6IHN0cmluZztcbiAgICB1cGRhdGVkQXQ6IHN0cmluZztcbiAgICBsb2NhbGU6IHN0cmluZztcbiAgICBjb250ZW50VHlwZToge1xuICAgICAgc3lzOiB7XG4gICAgICAgIGlkOiBcInBvc3RcIjtcbiAgICAgICAgbGlua1R5cGU6IFwiQ29udGVudFR5cGVcIjtcbiAgICAgICAgdHlwZTogXCJMaW5rXCI7XG4gICAgICB9O1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBidWlsZENsaWVudCA9ICgpID0+IHtcbiAgY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgICBzcGFjZTogcHJvY2Vzcy5lbnYuQ0ZfU1BBQ0VfSUQgfHwgXCJcIixcbiAgICBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuQ0ZfQUNDRVNTX1RPS0VOIHx8IFwiXCIsXG4gIH0pO1xuICByZXR1cm4gY2xpZW50O1xufTsiXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwiYnVpbGRDbGllbnQiLCJjbGllbnQiLCJzcGFjZSIsInByb2Nlc3MiLCJlbnYiLCJDRl9TUEFDRV9JRCIsImFjY2Vzc1Rva2VuIiwiQ0ZfQUNDRVNTX1RPS0VOIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/contentful.ts\n");

/***/ }),

/***/ "./src/pages/[slug].tsx":
/*!******************************!*\
  !*** ./src/pages/[slug].tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/error */ \"next/error\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_contentful__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/contentful */ \"./src/lib/contentful.ts\");\n/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @contentful/rich-text-react-renderer */ \"@contentful/rich-text-react-renderer\");\n/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst client = (0,_lib_contentful__WEBPACK_IMPORTED_MODULE_4__.buildClient)();\nconst getPostEntries = async ()=>{\n    const { items  } = await client.getEntries({\n        content_type: \"post\"\n    });\n    return items;\n};\nconst getStaticPaths = async ()=>{\n    const items = await getPostEntries();\n    const paths = items.map((item)=>{\n        return {\n            params: {\n                slug: item.fields.slug\n            }\n        };\n    });\n    return {\n        paths,\n        fallback: false\n    };\n};\nconst getStaticProps = async ()=>{\n    const items = await getPostEntries();\n    return {\n        props: {\n            posts: items\n        }\n    };\n};\nconst Post = ({ posts  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    if (!router.isFallback && !posts[0].fields.slug) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_3___default()), {\n            statusCode: 404\n        }, void 0, false, {\n            fileName: \"/Users/koyamakeisuke/contentful/src/pages/[slug].tsx\",\n            lineNumber: 46,\n            columnNumber: 12\n        }, undefined);\n    }\n    const post = posts[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: post.fields.title\n                }, void 0, false, {\n                    fileName: \"/Users/koyamakeisuke/contentful/src/pages/[slug].tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/koyamakeisuke/contentful/src/pages/[slug].tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: post.fields.title\n                    }, void 0, false, {\n                        fileName: \"/Users/koyamakeisuke/contentful/src/pages/[slug].tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: (0,_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_5__.documentToReactComponents)(post.fields.content)\n                    }, void 0, false, {\n                        fileName: \"/Users/koyamakeisuke/contentful/src/pages/[slug].tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/koyamakeisuke/contentful/src/pages/[slug].tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/koyamakeisuke/contentful/src/pages/[slug].tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW3NsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM2QjtBQUNXO0FBQ0w7QUFDWTtBQUNjO0FBRW9CO0FBRWpGLE1BQU1NLFNBQVNGLDREQUFXQTtBQUUxQixNQUFNRyxpQkFBaUIsVUFBWTtJQUNqQyxNQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFpQyxNQUFNRixPQUFPRyxVQUFVLENBQUM7UUFDdEVDLGNBQWM7SUFDaEI7SUFDQSxPQUFPRjtBQUNUO0FBRU8sTUFBTUcsaUJBQWlDLFVBQVk7SUFDeEQsTUFBTUgsUUFBUSxNQUFNRDtJQUNwQixNQUFNSyxRQUFRSixNQUFNSyxHQUFHLENBQUMsQ0FBQ0MsT0FBUztRQUNoQyxPQUFPO1lBQ0xDLFFBQVE7Z0JBQUVDLE1BQU1GLEtBQUtHLE1BQU0sQ0FBQ0QsSUFBSTtZQUFDO1FBQ25DO0lBQ0Y7SUFDQSxPQUFPO1FBQ0xKO1FBQ0FNLFVBQVUsS0FBSztJQUNqQjtBQUNGLEVBQUU7QUFFSyxNQUFNQyxpQkFBaUIsVUFBWTtJQUN4QyxNQUFNWCxRQUFRLE1BQU1EO0lBQ3BCLE9BQU87UUFDTGEsT0FBTztZQUNMQyxPQUFPYjtRQUNUO0lBQ0Y7QUFDRixFQUFFO0FBSUYsTUFBTWMsT0FBd0IsQ0FBQyxFQUFFRCxNQUFLLEVBQUUsR0FBSztJQUMzQyxNQUFNRSxTQUFTdEIsc0RBQVNBO0lBQ3hCLElBQUksQ0FBQ3NCLE9BQU9DLFVBQVUsSUFBSSxDQUFDSCxLQUFLLENBQUMsRUFBRSxDQUFDSixNQUFNLENBQUNELElBQUksRUFBRTtRQUMvQyxxQkFBTyw4REFBQ2QsbURBQVNBO1lBQUN1QixZQUFZOzs7Ozs7SUFDaEMsQ0FBQztJQUNELE1BQU1DLE9BQU9MLEtBQUssQ0FBQyxFQUFFO0lBQ3JCLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFXekIsMEVBQWdCOzswQkFDOUIsOERBQUNILGtEQUFJQTswQkFDSCw0RUFBQzhCOzhCQUFPSixLQUFLVCxNQUFNLENBQUNhLEtBQUs7Ozs7Ozs7Ozs7OzBCQUUzQiw4REFBQ0M7O2tDQUNDLDhEQUFDQztrQ0FBSU4sS0FBS1QsTUFBTSxDQUFDYSxLQUFLOzs7Ozs7a0NBQ3RCLDhEQUFDSDtrQ0FBS3RCLCtGQUF5QkEsQ0FBQ3FCLEtBQUtULE1BQU0sQ0FBQ2dCLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkzRDtBQUVBLGlFQUFlWCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJhY3RpY2UtbmV4dGpzLWJsb2ctY29udGVudGZ1bC8uL3NyYy9wYWdlcy9bc2x1Z10udHN4PzZmNDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSwgSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGUsIEdldFN0YXRpY1BhdGhzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEVycm9yUGFnZSBmcm9tIFwibmV4dC9lcnJvclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgYnVpbGRDbGllbnQsIElQb3N0RmllbGRzIH0gZnJvbSBcIi4uL2xpYi9jb250ZW50ZnVsXCI7XG5pbXBvcnQgeyBFbnRyeUNvbGxlY3Rpb24gfSBmcm9tIFwiY29udGVudGZ1bFwiO1xuaW1wb3J0IHsgZG9jdW1lbnRUb1JlYWN0Q29tcG9uZW50cyB9IGZyb20gXCJAY29udGVudGZ1bC9yaWNoLXRleHQtcmVhY3QtcmVuZGVyZXJcIjtcblxuY29uc3QgY2xpZW50ID0gYnVpbGRDbGllbnQoKTtcblxuY29uc3QgZ2V0UG9zdEVudHJpZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgaXRlbXMgfTogRW50cnlDb2xsZWN0aW9uPElQb3N0RmllbGRzPiA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcbiAgICBjb250ZW50X3R5cGU6IFwicG9zdFwiLFxuICB9KTtcbiAgcmV0dXJuIGl0ZW1zO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgaXRlbXMgPSBhd2FpdCBnZXRQb3N0RW50cmllcygpO1xuICBjb25zdCBwYXRocyA9IGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJhbXM6IHsgc2x1ZzogaXRlbS5maWVsZHMuc2x1ZyB9LFxuICAgIH07XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgaXRlbXMgPSBhd2FpdCBnZXRQb3N0RW50cmllcygpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0czogaXRlbXMsXG4gICAgfSxcbiAgfTtcbn07XG5cbnR5cGUgUHJvcHMgPSBJbmZlckdldFN0YXRpY1Byb3BzVHlwZTx0eXBlb2YgZ2V0U3RhdGljUHJvcHM+O1xuXG5jb25zdCBQb3N0OiBOZXh0UGFnZTxQcm9wcz4gPSAoeyBwb3N0cyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBpZiAoIXJvdXRlci5pc0ZhbGxiYWNrICYmICFwb3N0c1swXS5maWVsZHMuc2x1Zykge1xuICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz47XG4gIH1cbiAgY29uc3QgcG9zdCA9IHBvc3RzWzBdO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3Bvc3QuZmllbGRzLnRpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxPntwb3N0LmZpZWxkcy50aXRsZX08L2gxPlxuICAgICAgICA8ZGl2Pntkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzKHBvc3QuZmllbGRzLmNvbnRlbnQpfTwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDsiXSwibmFtZXMiOlsiSGVhZCIsInVzZVJvdXRlciIsIkVycm9yUGFnZSIsInN0eWxlcyIsImJ1aWxkQ2xpZW50IiwiZG9jdW1lbnRUb1JlYWN0Q29tcG9uZW50cyIsImNsaWVudCIsImdldFBvc3RFbnRyaWVzIiwiaXRlbXMiLCJnZXRFbnRyaWVzIiwiY29udGVudF90eXBlIiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsIm1hcCIsIml0ZW0iLCJwYXJhbXMiLCJzbHVnIiwiZmllbGRzIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInByb3BzIiwicG9zdHMiLCJQb3N0Iiwicm91dGVyIiwiaXNGYWxsYmFjayIsInN0YXR1c0NvZGUiLCJwb3N0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtYWluIiwiaDEiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[slug].tsx\n");

/***/ }),

/***/ "@contentful/rich-text-react-renderer":
/*!*******************************************************!*\
  !*** external "@contentful/rich-text-react-renderer" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@contentful/rich-text-react-renderer");

/***/ }),

/***/ "contentful":
/*!*****************************!*\
  !*** external "contentful" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("contentful");

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/error");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/[slug].tsx"));
module.exports = __webpack_exports__;

})();