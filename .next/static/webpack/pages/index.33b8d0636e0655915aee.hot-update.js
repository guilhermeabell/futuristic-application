webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\nvar _jsxFileName = \"/home/guilhermeabel/Desktop/futuristic-aplication/pages/index.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar Card = function Card(_ref) {\n  var href = _ref.href,\n      imgSrc = _ref.imgSrc,\n      layoutId = _ref.layoutId;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: href,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n      className: \"relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition\",\n      variants: variants,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].img, {\n        src: imgSrc,\n        className: \"w-full h-full\",\n        layoutId: layoutId\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Card;\nvar variants = {\n  hidden: {\n    opacity: 0\n  },\n  visible: {\n    opacity: 1,\n    transition: {\n      duration: 1,\n      delayChildren: 1,\n      staggerChildren: 0.7\n    }\n  }\n};\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].h1, {\n      className: \"text-4xl mt-10 leading-none font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl md:mt-24\",\n      initial: {\n        opacity: 0\n      },\n      animate: {\n        opacity: 1\n      },\n      transition: {\n        duration: 2\n      },\n      children: \"Construa sites modernos com agilidade sem precisar sair do HTML.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n      className: \"w-full grid grid-cols-1 grid-rows-3 gap-4 mt-10 md:grid-cols-3 md:grid-rows-1 md:mt-24\",\n      transition: {\n        delay: 2\n      },\n      variants: variants,\n      initial: \"hidden\",\n      animate: \"visible\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Card, {\n        href: '/nextjs',\n        imgSrc: '/img/nextjs.svg',\n        layoutId: 'nextjs-logo'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Card, {\n        href: '/tailwind',\n        imgSrc: '/img/tailwind.svg',\n        layoutId: 'tailwind-logo'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Card, {\n        href: '/framermotion',\n        imgSrc: '/img/framermotion.svg',\n        layoutId: 'framermotion-logo'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, this);\n}\n_c2 = Home;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c2, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiQ2FyZCIsImhyZWYiLCJpbWdTcmMiLCJsYXlvdXRJZCIsInZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsInZpc2libGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheUNoaWxkcmVuIiwic3RhZ2dlckNoaWxkcmVuIiwiSG9tZSIsImRlbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFTQSxJQUFNQSxJQUF5QixHQUFHLFNBQTVCQSxJQUE0QixPQUFnQztBQUFBLE1BQTdCQyxJQUE2QixRQUE3QkEsSUFBNkI7QUFBQSxNQUF2QkMsTUFBdUIsUUFBdkJBLE1BQXVCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ2hFLHNCQUNFLHFFQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFRixJQUFaO0FBQUEsMkJBQ0UscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsZUFBUyxFQUFDLHlGQURaO0FBRUUsY0FBUSxFQUFFRyxRQUZaO0FBQUEsNkJBSUUscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsV0FBRyxFQUFFRixNQURQO0FBRUUsaUJBQVMsRUFBQyxlQUZaO0FBR0UsZ0JBQVEsRUFBRUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWNELENBZkQ7O0tBQU1ILEk7QUFpQk4sSUFBTUksUUFBa0IsR0FBRztBQUN6QkMsUUFBTSxFQUFFO0FBQUVDLFdBQU8sRUFBRTtBQUFYLEdBRGlCO0FBRXpCQyxTQUFPLEVBQUU7QUFDUEQsV0FBTyxFQUFFLENBREY7QUFFUEUsY0FBVSxFQUFFO0FBQ1ZDLGNBQVEsRUFBRSxDQURBO0FBRVZDLG1CQUFhLEVBQUUsQ0FGTDtBQUdWQyxxQkFBZSxFQUFFO0FBSFA7QUFGTDtBQUZnQixDQUEzQjtBQVllLFNBQVNDLElBQVQsR0FBZ0I7QUFDN0Isc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxvREFBRCxDQUFRLEVBQVI7QUFDRSxlQUFTLEVBQUMsMEdBRFo7QUFFRSxhQUFPLEVBQUU7QUFBRU4sZUFBTyxFQUFFO0FBQVgsT0FGWDtBQUdFLGFBQU8sRUFBRTtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUhYO0FBSUUsZ0JBQVUsRUFBRTtBQUFFRyxnQkFBUSxFQUFFO0FBQVosT0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBVUUscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsZUFBUyxFQUFDLHdGQURaO0FBRUUsZ0JBQVUsRUFBRTtBQUNWSSxhQUFLLEVBQUU7QUFERyxPQUZkO0FBS0UsY0FBUSxFQUFFVCxRQUxaO0FBTUUsYUFBTyxFQUFDLFFBTlY7QUFPRSxhQUFPLEVBQUMsU0FQVjtBQUFBLDhCQVNFLHFFQUFDLElBQUQ7QUFDRSxZQUFJLEVBQUUsU0FEUjtBQUVFLGNBQU0sRUFBRSxpQkFGVjtBQUdFLGdCQUFRLEVBQUU7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEYsZUFjRSxxRUFBQyxJQUFEO0FBQ0UsWUFBSSxFQUFFLFdBRFI7QUFFRSxjQUFNLEVBQUUsbUJBRlY7QUFHRSxnQkFBUSxFQUFFO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRGLGVBbUJFLHFFQUFDLElBQUQ7QUFDRSxZQUFJLEVBQUUsZUFEUjtBQUVFLGNBQU0sRUFBRSx1QkFGVjtBQUdFLGdCQUFRLEVBQUU7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0NEO01BdkN1QlEsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgbW90aW9uLCBWYXJpYW50cyB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmludGVyZmFjZSBDYXJkUHJvcHMge1xuICBocmVmOiBzdHJpbmdcbiAgaW1nU3JjOiBzdHJpbmdcbiAgbGF5b3V0SWQ6IHN0cmluZ1xufVxuXG5cbmNvbnN0IENhcmQ6IFJlYWN0LkZDPENhcmRQcm9wcz4gPSAoeyBocmVmLCBpbWdTcmMsIGxheW91dElkIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmPXtocmVmfT5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMjAgbWQ6aC00MCBiZy1ncmF5LTIwMCByb3VuZGVkLXhsIGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLWdyYXktNTAgdHJhbnNpdGlvblwiXG4gICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgID5cbiAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICBzcmM9e2ltZ1NyY31cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsXCJcbiAgICAgICAgICBsYXlvdXRJZD17bGF5b3V0SWR9XG4gICAgICAgIC8+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9MaW5rPlxuICApXG59XG5cbmNvbnN0IHZhcmlhbnRzOiBWYXJpYW50cyA9IHtcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcbiAgdmlzaWJsZToge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgZHVyYXRpb246IDEsXG4gICAgICBkZWxheUNoaWxkcmVuOiAxLFxuICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjdcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPG1vdGlvbi5oMVxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtdC0xMCBsZWFkaW5nLW5vbmUgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LTZ4bCBsZzp0ZXh0LTd4bCBtZDptdC0yNFwiXG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMiB9fVxuICAgICAgPlxuICAgICAgICBDb25zdHJ1YSBzaXRlcyBtb2Rlcm5vcyBjb20gYWdpbGlkYWRlIHNlbSBwcmVjaXNhciBzYWlyIGRvIEhUTUwuXG4gICAgICA8L21vdGlvbi5oMT5cblxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTEgZ3JpZC1yb3dzLTMgZ2FwLTQgbXQtMTAgbWQ6Z3JpZC1jb2xzLTMgbWQ6Z3JpZC1yb3dzLTEgbWQ6bXQtMjRcIlxuICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgZGVsYXk6IDJcbiAgICAgICAgfX1cbiAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxuICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgYW5pbWF0ZT1cInZpc2libGVcIlxuICAgICAgPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGhyZWY9eycvbmV4dGpzJ31cbiAgICAgICAgICBpbWdTcmM9eycvaW1nL25leHRqcy5zdmcnfVxuICAgICAgICAgIGxheW91dElkPXsnbmV4dGpzLWxvZ28nfVxuICAgICAgICAvPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGhyZWY9eycvdGFpbHdpbmQnfVxuICAgICAgICAgIGltZ1NyYz17Jy9pbWcvdGFpbHdpbmQuc3ZnJ31cbiAgICAgICAgICBsYXlvdXRJZD17J3RhaWx3aW5kLWxvZ28nfVxuICAgICAgICAvPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGhyZWY9eycvZnJhbWVybW90aW9uJ31cbiAgICAgICAgICBpbWdTcmM9eycvaW1nL2ZyYW1lcm1vdGlvbi5zdmcnfVxuICAgICAgICAgIGxheW91dElkPXsnZnJhbWVybW90aW9uLWxvZ28nfVxuICAgICAgICAvPlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgIDwvZGl2PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})