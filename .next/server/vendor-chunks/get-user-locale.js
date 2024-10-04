"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/get-user-locale";
exports.ids = ["vendor-chunks/get-user-locale"];
exports.modules = {

/***/ "(ssr)/./node_modules/get-user-locale/dist/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/get-user-locale/dist/esm/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getUserLocale: () => (/* binding */ getUserLocale),\n/* harmony export */   getUserLocales: () => (/* binding */ getUserLocales)\n/* harmony export */ });\n/* harmony import */ var mem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mem */ \"(ssr)/./node_modules/mem/dist/index.js\");\n\nfunction isString(el) {\n    return typeof el === 'string';\n}\nfunction isUnique(el, index, arr) {\n    return arr.indexOf(el) === index;\n}\nfunction isAllLowerCase(el) {\n    return el.toLowerCase() === el;\n}\nfunction fixCommas(el) {\n    return el.indexOf(',') === -1 ? el : el.split(',');\n}\nfunction normalizeLocale(locale) {\n    if (!locale) {\n        return locale;\n    }\n    if (locale === 'C' || locale === 'posix' || locale === 'POSIX') {\n        return 'en-US';\n    }\n    // If there's a dot (.) in the locale, it's likely in the format of \"en-US.UTF-8\", so we only take the first part\n    if (locale.indexOf('.') !== -1) {\n        var _a = locale.split('.')[0], actualLocale = _a === void 0 ? '' : _a;\n        return normalizeLocale(actualLocale);\n    }\n    // If there's an at sign (@) in the locale, it's likely in the format of \"en-US@posix\", so we only take the first part\n    if (locale.indexOf('@') !== -1) {\n        var _b = locale.split('@')[0], actualLocale = _b === void 0 ? '' : _b;\n        return normalizeLocale(actualLocale);\n    }\n    // If there's a dash (-) in the locale and it's not all lower case, it's already in the format of \"en-US\", so we return it\n    if (locale.indexOf('-') === -1 || !isAllLowerCase(locale)) {\n        return locale;\n    }\n    var _c = locale.split('-'), splitEl1 = _c[0], _d = _c[1], splitEl2 = _d === void 0 ? '' : _d;\n    return \"\".concat(splitEl1, \"-\").concat(splitEl2.toUpperCase());\n}\nfunction getUserLocalesInternal(_a) {\n    var _b = _a === void 0 ? {} : _a, _c = _b.useFallbackLocale, useFallbackLocale = _c === void 0 ? true : _c, _d = _b.fallbackLocale, fallbackLocale = _d === void 0 ? 'en-US' : _d;\n    var languageList = [];\n    if (typeof navigator !== 'undefined') {\n        var rawLanguages = navigator.languages || [];\n        var languages = [];\n        for (var _i = 0, rawLanguages_1 = rawLanguages; _i < rawLanguages_1.length; _i++) {\n            var rawLanguagesItem = rawLanguages_1[_i];\n            languages = languages.concat(fixCommas(rawLanguagesItem));\n        }\n        var rawLanguage = navigator.language;\n        var language = rawLanguage ? fixCommas(rawLanguage) : rawLanguage;\n        languageList = languageList.concat(languages, language);\n    }\n    if (useFallbackLocale) {\n        languageList.push(fallbackLocale);\n    }\n    return languageList.filter(isString).map(normalizeLocale).filter(isUnique);\n}\nvar getUserLocales = mem__WEBPACK_IMPORTED_MODULE_0__(getUserLocalesInternal, { cacheKey: JSON.stringify });\nfunction getUserLocaleInternal(options) {\n    return getUserLocales(options)[0] || null;\n}\nvar getUserLocale = mem__WEBPACK_IMPORTED_MODULE_0__(getUserLocaleInternal, { cacheKey: JSON.stringify });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserLocale);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ2V0LXVzZXItbG9jYWxlL2Rpc3QvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsNEJBQTRCO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLHFCQUFxQixnQ0FBRywyQkFBMkIsMEJBQTBCO0FBQ3BGO0FBQ0E7QUFDQTtBQUNPLG9CQUFvQixnQ0FBRywwQkFBMEIsMEJBQTBCO0FBQ2xGLGlFQUFlLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xhbWEtZGV2LW5leHQtZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL2dldC11c2VyLWxvY2FsZS9kaXN0L2VzbS9pbmRleC5qcz9mZjY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZW0gZnJvbSAnbWVtJztcbmZ1bmN0aW9uIGlzU3RyaW5nKGVsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBlbCA9PT0gJ3N0cmluZyc7XG59XG5mdW5jdGlvbiBpc1VuaXF1ZShlbCwgaW5kZXgsIGFycikge1xuICAgIHJldHVybiBhcnIuaW5kZXhPZihlbCkgPT09IGluZGV4O1xufVxuZnVuY3Rpb24gaXNBbGxMb3dlckNhc2UoZWwpIHtcbiAgICByZXR1cm4gZWwudG9Mb3dlckNhc2UoKSA9PT0gZWw7XG59XG5mdW5jdGlvbiBmaXhDb21tYXMoZWwpIHtcbiAgICByZXR1cm4gZWwuaW5kZXhPZignLCcpID09PSAtMSA/IGVsIDogZWwuc3BsaXQoJywnKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZShsb2NhbGUpIHtcbiAgICBpZiAoIWxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlO1xuICAgIH1cbiAgICBpZiAobG9jYWxlID09PSAnQycgfHwgbG9jYWxlID09PSAncG9zaXgnIHx8IGxvY2FsZSA9PT0gJ1BPU0lYJykge1xuICAgICAgICByZXR1cm4gJ2VuLVVTJztcbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBhIGRvdCAoLikgaW4gdGhlIGxvY2FsZSwgaXQncyBsaWtlbHkgaW4gdGhlIGZvcm1hdCBvZiBcImVuLVVTLlVURi04XCIsIHNvIHdlIG9ubHkgdGFrZSB0aGUgZmlyc3QgcGFydFxuICAgIGlmIChsb2NhbGUuaW5kZXhPZignLicpICE9PSAtMSkge1xuICAgICAgICB2YXIgX2EgPSBsb2NhbGUuc3BsaXQoJy4nKVswXSwgYWN0dWFsTG9jYWxlID0gX2EgPT09IHZvaWQgMCA/ICcnIDogX2E7XG4gICAgICAgIHJldHVybiBub3JtYWxpemVMb2NhbGUoYWN0dWFsTG9jYWxlKTtcbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBhbiBhdCBzaWduIChAKSBpbiB0aGUgbG9jYWxlLCBpdCdzIGxpa2VseSBpbiB0aGUgZm9ybWF0IG9mIFwiZW4tVVNAcG9zaXhcIiwgc28gd2Ugb25seSB0YWtlIHRoZSBmaXJzdCBwYXJ0XG4gICAgaWYgKGxvY2FsZS5pbmRleE9mKCdAJykgIT09IC0xKSB7XG4gICAgICAgIHZhciBfYiA9IGxvY2FsZS5zcGxpdCgnQCcpWzBdLCBhY3R1YWxMb2NhbGUgPSBfYiA9PT0gdm9pZCAwID8gJycgOiBfYjtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZUxvY2FsZShhY3R1YWxMb2NhbGUpO1xuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIGEgZGFzaCAoLSkgaW4gdGhlIGxvY2FsZSBhbmQgaXQncyBub3QgYWxsIGxvd2VyIGNhc2UsIGl0J3MgYWxyZWFkeSBpbiB0aGUgZm9ybWF0IG9mIFwiZW4tVVNcIiwgc28gd2UgcmV0dXJuIGl0XG4gICAgaWYgKGxvY2FsZS5pbmRleE9mKCctJykgPT09IC0xIHx8ICFpc0FsbExvd2VyQ2FzZShsb2NhbGUpKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGU7XG4gICAgfVxuICAgIHZhciBfYyA9IGxvY2FsZS5zcGxpdCgnLScpLCBzcGxpdEVsMSA9IF9jWzBdLCBfZCA9IF9jWzFdLCBzcGxpdEVsMiA9IF9kID09PSB2b2lkIDAgPyAnJyA6IF9kO1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChzcGxpdEVsMSwgXCItXCIpLmNvbmNhdChzcGxpdEVsMi50b1VwcGVyQ2FzZSgpKTtcbn1cbmZ1bmN0aW9uIGdldFVzZXJMb2NhbGVzSW50ZXJuYWwoX2EpIHtcbiAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgX2MgPSBfYi51c2VGYWxsYmFja0xvY2FsZSwgdXNlRmFsbGJhY2tMb2NhbGUgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IF9iLmZhbGxiYWNrTG9jYWxlLCBmYWxsYmFja0xvY2FsZSA9IF9kID09PSB2b2lkIDAgPyAnZW4tVVMnIDogX2Q7XG4gICAgdmFyIGxhbmd1YWdlTGlzdCA9IFtdO1xuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgcmF3TGFuZ3VhZ2VzID0gbmF2aWdhdG9yLmxhbmd1YWdlcyB8fCBbXTtcbiAgICAgICAgdmFyIGxhbmd1YWdlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHJhd0xhbmd1YWdlc18xID0gcmF3TGFuZ3VhZ2VzOyBfaSA8IHJhd0xhbmd1YWdlc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIHJhd0xhbmd1YWdlc0l0ZW0gPSByYXdMYW5ndWFnZXNfMVtfaV07XG4gICAgICAgICAgICBsYW5ndWFnZXMgPSBsYW5ndWFnZXMuY29uY2F0KGZpeENvbW1hcyhyYXdMYW5ndWFnZXNJdGVtKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJhd0xhbmd1YWdlID0gbmF2aWdhdG9yLmxhbmd1YWdlO1xuICAgICAgICB2YXIgbGFuZ3VhZ2UgPSByYXdMYW5ndWFnZSA/IGZpeENvbW1hcyhyYXdMYW5ndWFnZSkgOiByYXdMYW5ndWFnZTtcbiAgICAgICAgbGFuZ3VhZ2VMaXN0ID0gbGFuZ3VhZ2VMaXN0LmNvbmNhdChsYW5ndWFnZXMsIGxhbmd1YWdlKTtcbiAgICB9XG4gICAgaWYgKHVzZUZhbGxiYWNrTG9jYWxlKSB7XG4gICAgICAgIGxhbmd1YWdlTGlzdC5wdXNoKGZhbGxiYWNrTG9jYWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGxhbmd1YWdlTGlzdC5maWx0ZXIoaXNTdHJpbmcpLm1hcChub3JtYWxpemVMb2NhbGUpLmZpbHRlcihpc1VuaXF1ZSk7XG59XG5leHBvcnQgdmFyIGdldFVzZXJMb2NhbGVzID0gbWVtKGdldFVzZXJMb2NhbGVzSW50ZXJuYWwsIHsgY2FjaGVLZXk6IEpTT04uc3RyaW5naWZ5IH0pO1xuZnVuY3Rpb24gZ2V0VXNlckxvY2FsZUludGVybmFsKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZ2V0VXNlckxvY2FsZXMob3B0aW9ucylbMF0gfHwgbnVsbDtcbn1cbmV4cG9ydCB2YXIgZ2V0VXNlckxvY2FsZSA9IG1lbShnZXRVc2VyTG9jYWxlSW50ZXJuYWwsIHsgY2FjaGVLZXk6IEpTT04uc3RyaW5naWZ5IH0pO1xuZXhwb3J0IGRlZmF1bHQgZ2V0VXNlckxvY2FsZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/get-user-locale/dist/esm/index.js\n");

/***/ })

};
;