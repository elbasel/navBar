/******/ var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* ========== START Dark Mode Colors ========== */\n:root {\n    --primary-color: #181a1b;\n    --secondary-color: #2b2f31;\n    --blue: #004daa;\n    --text-color: #d8d4cf;\n    --caption-color: #e8e6e3;\n    --main-font: 'Montserrat', sans-serif;\n}\n\n/* ========== END Dark Mode Colors ========== */\n/* To use background images thourgh  url, use it in Javasciprt using \nimport asset statment and e.style.background = `${importedImage}` */\n\nhtml {\n    height: -webkit-fill-available;\n}\n\nbody {\n    width: 100vw;\n    min-height: 100vh;\n    min-height: -webkit-fill-available;\n    background-color: var(--primary-color);\n    display: flex;\n    flex-direction: column;\n}\n\nmain {\n    flex: 10;\n}\n\n.nav {\n    flex: 1;\n    display: flex;\n    border-radius: 24px;\n    max-height: 100px;\n    /* min-height: 90px; */\n    overflow: hidden;\n}\n\n.nav-item {\n    flex: 1;\n    background-color: var(--secondary-color);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 6px;\n\n    position: relative;\n}\n\n.nav-item img {\n    width: 60px;\n    height: 48px;\n    padding: 12px 18px;\n    border-radius: 24px;\n}\n\nimg.selected {\n    background-color: rgb(32, 32, 150);\n}\n\n.nav-item .animation {\n    position: absolute;\n    width: 100px;\n    height: 100px;\n    background-color: white;\n    /* z-index: ; */\n    border-radius: 50%;\n    bottom: 10px;\n    animation: ping 0.4s ease-in-out 1 none;\n\n    display: none;\n}\n\n.nav-item p {\n    font-size: 16px;\n    color: #666666;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-weight: 700;\n}\n\n@keyframes ping {\n    0% {\n        transform: scale(0.2);\n        opacity: 0.8;\n    }\n    80% {\n        transform: scale(1.2);\n        opacity: 0;\n    }\n    100% {\n        transform: scale(2.2);\n        opacity: 0;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAEA,iDAAiD;AACjD;IACI,wBAAwB;IACxB,0BAA0B;IAC1B,eAAe;IACf,qBAAqB;IACrB,wBAAwB;IACxB,qCAAqC;AACzC;;AAEA,+CAA+C;AAC/C;mEACmE;;AAEnE;IACI,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,kCAAkC;IAClC,sCAAsC;IACtC,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,OAAO;IACP,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,OAAO;IACP,wCAAwC;IACxC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;;IAER,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,uCAAuC;;IAEvC,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,cAAc;IACd;oEACgE;IAChE,gBAAgB;AACpB;;AAEA;IACI;QACI,qBAAqB;QACrB,YAAY;IAChB;IACA;QACI,qBAAqB;QACrB,UAAU;IACd;IACA;QACI,qBAAqB;QACrB,UAAU;IACd;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');\n\n/* ========== START Dark Mode Colors ========== */\n:root {\n    --primary-color: #181a1b;\n    --secondary-color: #2b2f31;\n    --blue: #004daa;\n    --text-color: #d8d4cf;\n    --caption-color: #e8e6e3;\n    --main-font: 'Montserrat', sans-serif;\n}\n\n/* ========== END Dark Mode Colors ========== */\n/* To use background images thourgh  url, use it in Javasciprt using \nimport asset statment and e.style.background = `${importedImage}` */\n\nhtml {\n    height: -webkit-fill-available;\n}\n\nbody {\n    width: 100vw;\n    min-height: 100vh;\n    min-height: -webkit-fill-available;\n    background-color: var(--primary-color);\n    display: flex;\n    flex-direction: column;\n}\n\nmain {\n    flex: 10;\n}\n\n.nav {\n    flex: 1;\n    display: flex;\n    border-radius: 24px;\n    max-height: 100px;\n    /* min-height: 90px; */\n    overflow: hidden;\n}\n\n.nav-item {\n    flex: 1;\n    background-color: var(--secondary-color);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 6px;\n\n    position: relative;\n}\n\n.nav-item img {\n    width: 60px;\n    height: 48px;\n    padding: 12px 18px;\n    border-radius: 24px;\n}\n\nimg.selected {\n    background-color: rgb(32, 32, 150);\n}\n\n.nav-item .animation {\n    position: absolute;\n    width: 100px;\n    height: 100px;\n    background-color: white;\n    /* z-index: ; */\n    border-radius: 50%;\n    bottom: 10px;\n    animation: ping 0.4s ease-in-out 1 none;\n\n    display: none;\n}\n\n.nav-item p {\n    font-size: 16px;\n    color: #666666;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-weight: 700;\n}\n\n@keyframes ping {\n    0% {\n        transform: scale(0.2);\n        opacity: 0.8;\n    }\n    80% {\n        transform: scale(1.2);\n        opacity: 0;\n    }\n    100% {\n        transform: scale(2.2);\n        opacity: 0;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    box-sizing: border-box;\n    font-size: 14px;\n    /* color-scheme: dark; */\n}\n\n*,\n*:before,\n*:after {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n    margin: 0;\n    padding: 0;\n    font-weight: normal;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nimg {\n    max-width: 100%;\n    height: auto;\n}\n", "",{"version":3,"sources":["webpack://./src/css/reset.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,eAAe;IACf,wBAAwB;AAC5B;;AAEA;;;IAGI,mBAAmB;IACnB,SAAS;IACT,UAAU;AACd;;AAEA;;;;;;;;;;IAUI,SAAS;IACT,UAAU;IACV,mBAAmB;AACvB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB","sourcesContent":["html {\n    box-sizing: border-box;\n    font-size: 14px;\n    /* color-scheme: dark; */\n}\n\n*,\n*:before,\n*:after {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n    margin: 0;\n    padding: 0;\n    font-weight: normal;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nimg {\n    max-width: 100%;\n    height: auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/gallery.png":
/*!********************************!*\
  !*** ./src/assets/gallery.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAB5UlEQVRoge2Zv24TQRDGv49DkWgoUqQB3gEhpaZCikhFi+isma1CQYERIrEhCoSCIh2xJdcUiIKGijZvwBOEN0gTRWcNzTk4h8/3h7GPhP1Vd7s7c/Ppmz3t2UAkEom0CScXqmptFjJhMBiwfNVvri2qkGURBbTN9aKJur3YlL/de1fXgaao6iaAQwBmZjocDr95P2OaRTjwEcAtALdJHi4g/wXcHfAmv0fye9PdATNTAD8BHJNU7/x53B3Iev6Od94imjpAVT0QkUeu1TSgiQCKyAGApyQ/hRAeehdVh9oCVHWf5FZ2u2Jmn0XkfoW4vojs166whFoCsgKe54ZvkPwqIutFcaraB9Aj2fUWUVmAiHwg2S2Yvkny1ayJEMJrAL3JPcluJsiFSgJCCG9JPpuz5ChN0yf5QVXtm9nOjPU9LydKX6Oq+t7M8m0zzVGaphuj0egkF/cGwHZRUObEafVSZzPXAVV9hz97fpqz8Xj8uG7xU/TKl8ynUICq7gF4URK/kiTJl06nszoZEJFdVCvehXkt9LJijntJknxX1Qckt8xs5mZeFF5HibsAfpjZmlO+ynge5pZePHAFvsiigLaJAtrm/DW6rN+BvLn0DkQBbVP5KPGv/H+Q59I7EAVEIpHI/80vwByA58EaPucAAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/assets/library.png":
/*!********************************!*\
  !*** ./src/assets/library.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEbUlEQVR4nO2ZT2hjRRzHvzNpXnZF1GwEobAVZE9KV8RbYRd7tKyX1Sisi5TmJY+25JCDJ69ePIf+e30pRSyCQZDVXW8uKP65yVqwoIu46AY81G2l+dtkfnvYZImvL30zL3l5DX2fW38z85sv38783kwGCAkJCQkJObUw2Y66rl/knL8NYArABQCJdtMugLsAfhBCfGZZ1i+Dl+kfY7IdOed3ejQ9AeA8gGnO+QdQMPUkwIMWEDTSK8APUqnUBc75NIBJzvlzACCE+AfAthDidqFQuOu3hkANiEQiOx0NRAQAYIx12oAhbCdpA0zTPFZMJpMhD/PXADzpYdzACLoG1AKeX34FePwPuxG4AUGvgGrA8/tXBFOp1POc80nO+TiAOIAHQoiSEGK7UCjca3dTWgHJZFJLJBJTRDQphCitr69/3q9O3wyIRCK/A4h2qjvwqMLbqvtjAzpF1mmr5XK5swcHB+8zxrJCiGfbuf7NZrNf5fP5ej86/fwMVgA87dJHagtUKpXvGGOv2sLn6vX66wC+8CKug581oCLRR2oLCCH+dooT0btKihwYCQMYY1s94ldmZ2efUVJlw08Dym4dGGNSBjQajS8B7ANoALhBRO8AuA3gjKZpb/Uj0rcaYJrmy/aYvcARUbVXWzebm5s1XdevxmKxO0tLS7sAYBjGGSKabm8Dy6vOQO8CUPgMWpb1DQCk0+mXGGNJInoPABhjlxcWFs4vLy//5UWAbwZkMpkbAN44rg9jrNb9mXQjnU7fZIzN2MK81WpdA/CRusqAi6AQ4n/nALcLF4Btp2BnNXghUANki2AHzvnHPZpe1HX9okquxzm9DJJkYJ/BDmtra78CcPzNkXPu6UwwUga0cTwTALieTCYjqslGagsAAOd8C0DLoWk8Ho9fVs6nOkABVwO6zwGyrK6u3gfwbY98yttg5FZAe1yvo3Eyl8udVcnlmwGMMdejMDz+IqRpWhHON8mnyuXyFZVcJ+YcoEI+n/8PwC2nNtVtEKgBnHPPP4kRUa9tMLO4uJhwanPU4FWABL7VAADY29u7iUfvkrsATACXiOgWgGiz2UzK5vHtXaDVapU5P95fIYTUbdCJYrHY0HX90v7+/m/FYrEFAOl0ughgRghxHcCqTB7fLkOWZf0E28uOw3W43nkJ8jjHTjabjRmGMUNESQBvAgBjbGp+fv6FlZWVP9xyBPouEI1Gq81ms68c9Xr9RwCv2MJMCHENwIdu431bAXNzc+NjY2P3j+tTrVZr0Wi036m+xlEDQERXIWGAb0VQCOFrEeya55PuP4noe8aYEYvFXpMZ79sK0DTN9SA0MTFRLZVKfc1jWdaOYRhbRPRzs9n8dGNjo7+EIaeMI98gn16BTwz280zQr8OBExoQtICgOfUGhJx2lK5imUzmAQD7c/SeaZrxwUkarh7VGvCnZGxY9K0nNGDYEw6YoRtwTzI2LPrWE64Alc5EdCS5U2xYDEKPkgGHh4dHkjvFhsVJ0xMSEhIycjwEDu+1Aodh8DYAAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/assets/search.png":
/*!*******************************!*\
  !*** ./src/assets/search.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEKklEQVRoge1YT2hcRRj/fTNLgtCbUty2Ku3F9tSyWShi3ZPgzagxQvGYt/OyN02RKD2YEg+NFMFT5r1NbgpaapucKiiNFgNS3BjwYL1oRUuk2Juw5s/O56Fvy9vZt5u3bzZNwPxu8/tmvu/78b353swA+9jH/xuUZZFSqkBEw8aYEhE9CeCpyPQHgDUAN4UQi1rrH/uVaCf0IoB83x9h5g8APJtyzW0iOh8EwTUA3Ht6KZJKM8nzvKNCiE8BPJclCDMvG2PenJ+f/z3L+m7YVsD4+PjzxpirAA46xrovhHhda/2No58WiG5G3/dLxpgbaE9+HcBnzHxWSnm8Xq8fqNfrB6SUx5n5LIDPAWxYax43xnyplDrTv/S7VCD6bG4BeKJlAdFlIprUWt/p5jhaPwNg1DLdE0Kc3m59WuQ68BR98/HkG8x8LgzDj9M4npub+w3AG0qptwBcAiAj08FGo/EJgL5UQiaRSqlRABNxjpknqtVqquTjqNVq3xeLxX8AvNTkiOjpYrH4U61W+7lXfzaS9gABmG4hiC5nSb6JIAg+YuYrcS5qx85oE+B5XgGtfX5DCPGeayAp5Tt4sPmbOFEul0+5+m0TIKV82aKuzs7O/uoaSGt9h4gW4xwRDbv6bRNgjCnFx8y8aM/JCtsXEZU6zU2LNgFEdDg+Nsb84BqkCSllLT5m5sOd5qZF0ibOxweDg4N/uQZpgojuWtSOCNiRQxcASCnteM6xkgSsxQebm5uHXIM0sb6+bvtyrm6SgJYyCyGGXIM0wcxD1tj+pHpGkoCbVhDnVvcwmBB2i15y9pkQxG6br3qed9Q1UKVSOcbMr1j0dVe/bQK01qsAbseogehU6YRGo/EhgIEYtVqtVp1bdGIXIqLzFjcanSozQSl1DsBInCOiaexQF0IQBNeYedmiLyml3u41gO/7EwDsCi7l8/mFXn0loeOFZmxs7Bkp5S1YtzFmvpLL5Sa3Ox9VKpVj0WczYpnuCyFOaq2dOxCwzZ3Y87wXhBBfARi0TBtEtBCdbVZyudyfALC1tXUEQIGIhqMNO4B2/CKEKGmt7+24AACI7rBfoA+XegB/o/1J5kIYhlNZnXa91ANAGIbfCSFOJ+yJXrAkhDgphEg6fb6vlMosoKeXOd/3X4tuUidSLlkloul8Pr8wNTVlAEAp1anzZKpEpqfFcrl8ioiGiajEzIcAHIl8rQG4y8w3AFyP+nxLwl0EABlEZBLgAt/3J5n5Yic7M89Uq9V30/pLfJXYSdRqteVisfgvgBeT7ER0plAoPLaysvJ1Gn+PXADQXxG7IgDon4hdEwD0R8SuCgDcRey6AMBNxJ4QAGQXse1R4lEiCIIZIur4DyCius3tmQo00aUSU2EYXrDn7zkBQKKIxOSBPSoAeCBiaGiIAHzbKfl97GMfwH+Zb54ppuZ2LAAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/assets/share.png":
/*!******************************!*\
  !*** ./src/assets/share.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADc0lEQVRoge1Yz0sUYRh+3m/X3QQNK4hAuniSEJJdyaBbZw+dlS6xu64b0o9LZEF0MKuDIEu0O2MJ0nrxav0HQaazLCURRUeJvMyCgc46s28HVzLbb5zR2Rktn+O+7/fN+3yz877P9wBHOML/DQq6gOHh4ahhGIMA+gF01X5eIqJCJBJRstmsYbc+UALpdLq9Wq2+BnBeklISQvTlcrll2R6BEaid/DzkxW+hFI1GL8rehPC+NGeo/W12Kx4Aug3DSMqCgRFg5gGnuUQkzQ2MABGdc5rLzF2yWGAEXKIqC4T9rAIAMplMi2VZI8x8zOkaIvoki/lJgJLJZL9pmk8AtLtZyMwFWcwXAolEIk5EE0R0aQ/LS7quK7JgQwmk0+nT1Wp1FMA11P/elgHo+D2Bd6IkhOibnZ2tyJ7RkEGWSqWaAFwH8ABAW50Ug4jGQ6HQo1AotFGpVFK1ttoFgAF8BDCj67piVzzQAAKJROKyEGICklMlojlmvqkoyjcvnucZgUwmc9Y0zVEAVyUpX4joVj6ff+PVMwEHBOqoRWLmJSIqRKPRvGVZTbW2eBtAtM4WZQAPATxTFGXDy+KBXQg4UItLAE6gflusAngphLiXy+VW9lemHFICLtTiX2Dmt8x8Y3JyUttXdQ4gbaMu1OJ2LDPzHVVVZ7DZTRoOqRZyoxYBmEQ0Fg6HO1VVLcCn4gGbN+BGLQJYz+fzIx7U4xpeqVHfTnwnQrJALBa7QkRORVeop6enube3d35hYcF2cnoN6RsQQrxysU+Yme+apvk5mUwOwMe79m5t9B2Abreb+tlGnQyyOchJfABwCpJBRkQviOh+IweZ9BsAgMXFxdWOjo6p5ubmFSI6iU1luQFAY+bH5XJ5qLW19TkzE4AL+LOrEYA4Myfj8bgRj8c1TdOkV8O94t8Xc25xaOX0dji40KwDGF9bW3vU1tZmGoYxyMwDRLR1oTkY3qhXV8rAvdH9XurtvFHbLuQVisXi92KxOBWLxb4SUS+A4y6Wn7Es64emae/rBf105lhV1UI4HO4kojEAptOFdt5oYPZ6KpVaBdDiMP2noiit9QKH3hsN0l6X+p07YeeNBkbAjdq180YDIxCJRBQAJQeptt5oYASy2awhhOiDPYldvVFf5oAMErVbAaABeKrr+tD09HQ5yBqPcISDjl97lX3ov6V6hAAAAABJRU5ErkJggg==");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _assets_gallery_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/gallery.png */ "./src/assets/gallery.png");
/* harmony import */ var _assets_search_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/search.png */ "./src/assets/search.png");
/* harmony import */ var _assets_share_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/share.png */ "./src/assets/share.png");
/* harmony import */ var _assets_library_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/library.png */ "./src/assets/library.png");







const navBar = (() => {
    const navImageElements = []
    const navElements = []

    function resetSelected() {
        navImageElements.forEach((imageElement) => {
            imageElement.classList.remove('selected')
        })
    }

    function selectButton(imgElement, backgroundElement) {
        resetSelected()
        imgElement.classList.add('selected')

        // eslint-disable-next-line no-param-reassign
        backgroundElement.style.display = 'block'
        setTimeout(() => {
            // eslint-disable-next-line no-param-reassign
            backgroundElement.style.display = 'none'
        }, 390)
    }

    function getNavElement([
        { icon0, text0 },
        { icon1, text1 },
        { icon2, text2 },
        { icon3, text3 },
    ]) {
        const nav = document.createElement('div')
        nav.classList.add('nav')
        for (let i = 0; i < 4; i += 1) {
            const elem = document.createElement('div')
            elem.classList.add('nav-item')
            navElements.push(elem)
        }

        navElements.forEach((item, i) => {
            let backgroundImg = ''
            let textContent = ''
            if (i === 0) {
                backgroundImg = icon0
                textContent = text0
            } else if (i === 1) {
                backgroundImg = icon1
                textContent = text1
            } else if (i === 2) {
                backgroundImg = icon2
                textContent = text2
            } else if (i === 3) {
                backgroundImg = icon3
                textContent = text3
            }

            const imgElement = document.createElement('img')
            // First element is selected by default
            if (i === 0) imgElement.classList.add('selected')
            imgElement.src = backgroundImg
            item.appendChild(imgElement)
            navImageElements.push(imgElement)

            const textELement = document.createElement('p')
            textELement.textContent = textContent
            item.appendChild(textELement)

            const backgroundElement = document.createElement('div')
            backgroundElement.classList.add('animation')
            item.appendChild(backgroundElement)

            item.addEventListener('click', () => {
                selectButton(imgElement, backgroundElement)
            })
        })
        navElements.forEach((elem) => {
            nav.appendChild(elem)
        })
        return nav
    }

    return { getNavElement }
})()

// Testing
const bar = navBar.getNavElement([
    { icon0: _assets_gallery_png__WEBPACK_IMPORTED_MODULE_2__["default"], text0: 'Photos' },
    { icon1: _assets_search_png__WEBPACK_IMPORTED_MODULE_3__["default"], text1: 'Search' },
    { icon2: _assets_share_png__WEBPACK_IMPORTED_MODULE_4__["default"], text2: 'Share' },
    { icon3: _assets_library_png__WEBPACK_IMPORTED_MODULE_5__["default"], text3: 'Library' },
])
document.body.appendChild(bar)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navBar);

})();

var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FBYztBQUN4QixVQUFVLGNBQWM7QUFDeEIsVUFBVSxjQUFjO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsTUFBTSxPQUFPLDJEQUFVLG1CQUFtQjtBQUMxQyxNQUFNLE9BQU8sMERBQVMsbUJBQW1CO0FBQ3pDLE1BQU0sT0FBTyx5REFBUSxrQkFBa0I7QUFDdkMsTUFBTSxPQUFPLDJEQUFVLG9CQUFvQjtBQUMzQztBQUNBOztBQUVBLGlFQUFlLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9uYXZCYXIvLi9zcmMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9uYXZCYXIvLi9zcmMvY3NzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9uYXZCYXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L25hdkJhci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L25hdkJhci8uL3NyYy9jc3MvaW5kZXguY3NzP2Y3ZWEiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvbmF2QmFyLy4vc3JjL2Nzcy9yZXNldC5jc3M/MTUyYiIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9uYXZCYXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvbmF2QmFyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9uYXZCYXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvbmF2QmFyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L25hdkJhci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L25hdkJhci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L25hdkJhci8uL3NyYy9hc3NldHMvZ2FsbGVyeS5wbmciLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvbmF2QmFyLy4vc3JjL2Fzc2V0cy9saWJyYXJ5LnBuZyIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9uYXZCYXIvLi9zcmMvYXNzZXRzL3NlYXJjaC5wbmciLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvbmF2QmFyLy4vc3JjL2Fzc2V0cy9zaGFyZS5wbmciLCJ3ZWJwYWNrOi8vQGVsYmFzZWw2MTkvbmF2QmFyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BlbGJhc2VsNjE5L25hdkJhci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9AZWxiYXNlbDYxOS9uYXZCYXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0BlbGJhc2VsNjE5L25hdkJhci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0BlbGJhc2VsNjE5L25hdkJhci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0BlbGJhc2VsNjE5L25hdkJhci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogPT09PT09PT09PSBTVEFSVCBEYXJrIE1vZGUgQ29sb3JzID09PT09PT09PT0gKi9cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1jb2xvcjogIzE4MWExYjtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICMyYjJmMzE7XFxuICAgIC0tYmx1ZTogIzAwNGRhYTtcXG4gICAgLS10ZXh0LWNvbG9yOiAjZDhkNGNmO1xcbiAgICAtLWNhcHRpb24tY29sb3I6ICNlOGU2ZTM7XFxuICAgIC0tbWFpbi1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qID09PT09PT09PT0gRU5EIERhcmsgTW9kZSBDb2xvcnMgPT09PT09PT09PSAqL1xcbi8qIFRvIHVzZSBiYWNrZ3JvdW5kIGltYWdlcyB0aG91cmdoICB1cmwsIHVzZSBpdCBpbiBKYXZhc2NpcHJ0IHVzaW5nIFxcbmltcG9ydCBhc3NldCBzdGF0bWVudCBhbmQgZS5zdHlsZS5iYWNrZ3JvdW5kID0gYCR7aW1wb3J0ZWRJbWFnZX1gICovXFxuXFxuaHRtbCB7XFxuICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi1oZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZmxleDogMTA7XFxufVxcblxcbi5uYXYge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gICAgLyogbWluLWhlaWdodDogOTBweDsgKi9cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm5hdi1pdGVtIHtcXG4gICAgZmxleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNnB4O1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5uYXYtaXRlbSBpbWcge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4IDE4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxufVxcblxcbmltZy5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMzIsIDE1MCk7XFxufVxcblxcbi5uYXYtaXRlbSAuYW5pbWF0aW9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAvKiB6LWluZGV4OiA7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm90dG9tOiAxMHB4O1xcbiAgICBhbmltYXRpb246IHBpbmcgMC40cyBlYXNlLWluLW91dCAxIG5vbmU7XFxuXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYXYtaXRlbSBwIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogIzY2NjY2NjtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sXFxuICAgICAgICBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbkBrZXlmcmFtZXMgcGluZyB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yKTtcXG4gICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgfVxcbiAgICA4MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMi4yKTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsaURBQWlEO0FBQ2pEO0lBQ0ksd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixxQ0FBcUM7QUFDekM7O0FBRUEsK0NBQStDO0FBQy9DO21FQUNtRTs7QUFFbkU7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksT0FBTztJQUNQLHdDQUF3QztJQUN4QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsUUFBUTs7SUFFUixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osdUNBQXVDOztJQUV2QyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZDtvRUFDZ0U7SUFDaEUsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxxQkFBcUI7UUFDckIsWUFBWTtJQUNoQjtJQUNBO1FBQ0kscUJBQXFCO1FBQ3JCLFVBQVU7SUFDZDtJQUNBO1FBQ0kscUJBQXFCO1FBQ3JCLFVBQVU7SUFDZDtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuLyogPT09PT09PT09PSBTVEFSVCBEYXJrIE1vZGUgQ29sb3JzID09PT09PT09PT0gKi9cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1jb2xvcjogIzE4MWExYjtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICMyYjJmMzE7XFxuICAgIC0tYmx1ZTogIzAwNGRhYTtcXG4gICAgLS10ZXh0LWNvbG9yOiAjZDhkNGNmO1xcbiAgICAtLWNhcHRpb24tY29sb3I6ICNlOGU2ZTM7XFxuICAgIC0tbWFpbi1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qID09PT09PT09PT0gRU5EIERhcmsgTW9kZSBDb2xvcnMgPT09PT09PT09PSAqL1xcbi8qIFRvIHVzZSBiYWNrZ3JvdW5kIGltYWdlcyB0aG91cmdoICB1cmwsIHVzZSBpdCBpbiBKYXZhc2NpcHJ0IHVzaW5nIFxcbmltcG9ydCBhc3NldCBzdGF0bWVudCBhbmQgZS5zdHlsZS5iYWNrZ3JvdW5kID0gYCR7aW1wb3J0ZWRJbWFnZX1gICovXFxuXFxuaHRtbCB7XFxuICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi1oZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZmxleDogMTA7XFxufVxcblxcbi5uYXYge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gICAgLyogbWluLWhlaWdodDogOTBweDsgKi9cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm5hdi1pdGVtIHtcXG4gICAgZmxleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNnB4O1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5uYXYtaXRlbSBpbWcge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4IDE4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxufVxcblxcbmltZy5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMzIsIDE1MCk7XFxufVxcblxcbi5uYXYtaXRlbSAuYW5pbWF0aW9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAvKiB6LWluZGV4OiA7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm90dG9tOiAxMHB4O1xcbiAgICBhbmltYXRpb246IHBpbmcgMC40cyBlYXNlLWluLW91dCAxIG5vbmU7XFxuXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYXYtaXRlbSBwIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogIzY2NjY2NjtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sXFxuICAgICAgICBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbkBrZXlmcmFtZXMgcGluZyB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yKTtcXG4gICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgfVxcbiAgICA4MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMi4yKTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgLyogY29sb3Itc2NoZW1lOiBkYXJrOyAqL1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5vbCxcXG51bCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5pbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHdCQUF3QjtBQUM1Qjs7QUFFQTs7O0lBR0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7Ozs7Ozs7Ozs7SUFVSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAvKiBjb2xvci1zY2hlbWU6IGRhcms7ICovXFxufVxcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbm9sLFxcbnVsIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUF3Q0FZQUFBQlhBdm1IQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQjVVbEVRVlJvZ2UyWnYyNFRRUkRHdjQ5RGtXZ29VcVFCM2dFaHBhWkNpa2hGaStpc21hMUNRWUVSSXJFaENvU0NJaDJ4SmRjVWlJS0dpalp2d0JPRU4wZ1RSV2NOelRrNGg4LzNoN0dQaFAxVmQ3czdjL1BwbXozdDJVQWtFb20wQ1NjWHFtcHRGakpoTUJpd2ZOVnZyaTJxa0dVUkJiVE45YUtKdXIzWWxML2RlMWZYZ2FhbzZpYUFRd0JtWmpvY0RyOTVQMk9hUlRqd0VjQXRBTGRKSGk0Zy93WGNIZkFtdjBmeWU5UGRBVE5UQUQ4QkhKTlU3L3g1M0IzSWV2Nk9kOTRpbWpwQVZUMFFrVWV1MVRTZ2lRQ0t5QUdBcHlRL2hSQWVlaGRWaDlvQ1ZIV2Y1RloydTJKbW4wWGtmb1c0dm9qczE2NndoRm9Dc2dLZTU0WnZrUHdxSXV0RmNhcmFCOUFqMmZVV1VWbUFpSHdnMlMyWXZrbnkxYXlKRU1KckFMM0pQY2x1SnNpRlNnSkNDRzlKUHB1ejVDaE4weWY1UVZYdG05bk9qUFU5THlkS1g2T3ErdDdNOG0wenpWR2FwaHVqMGVna0YvY0d3SFpSVU9iRWFmVlNaelBYQVZWOWh6OTdmcHF6OFhqOHVHN3hVL1RLbDh5blVJQ3E3Z0Y0VVJLL2tpVEpsMDZuc3pvWkVKRmRWQ3ZlaFhrdDlMSmlqbnRKa254WDFRY2t0OHhzNW1aZUZGNUhpYnNBZnBqWm1sTyt5bmdlNXBaZVBIQUZ2c2lpZ0xhSkF0cm0vRFc2ck4rQnZMbjBEa1FCYlZQNUtQR3YvSCtRNTlJN0VBVkVJcEhJLzgwdndCeUE1OEVhUHVjQUFBQUFTVVZPUks1Q1lJST1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBRWJVbEVRVlI0bk8yWlQyaGpSUnpIdnpOcFhuWkYxR3dFb2JBVlpFOUtWOFJiWVJkN3RLeVgxU2lzaTVUbUpZKzI1SkNESjY5ZVBJZitlMzBwUlN5Q1FaRFZYVzh1S1A2NXlWcXdvSXU0NkFZODFHMmwrZHRrZm52WVpJbXZMMzB6TDNsNURYMmZXMzh6ODVzdjM4Nzgza3dHQ0FrSkNRa0pPYlV3Mlk2NnJsL2tuTDhOWUFyQUJRQ0pkdE11Z0xzQWZoQkNmR1paMWkrRGwra2ZZN0lkT2VkM2VqUTlBZUE4Z0duTytRZFFNUFVrd0lNV0VEVFNLOEFQVXFuVUJjNzVOSUJKenZsekFDQ0UrQWZBdGhEaWRxRlF1T3UzaGtBTmlFUWlPeDBOUkFRQVlJeDEyb0FoYkNkcEEwelRQRlpNSnBNaEQvUFhBRHpwWWR6QUNMb0cxQUtlWDM0RmVQd1B1eEc0QVVHdmdHckE4L3RYQkZPcDFQT2M4MG5PK1RpQU9JQUhRb2lTRUdLN1VDamNhM2RUV2dISlpGSkxKQkpUUkRRcGhDaXRyNjkvM3E5TzN3eUlSQ0svQTRoMnFqdndxTUxicXZ0akF6cEYxbW1yNVhLNXN3Y0hCKzh6eHJKQ2lHZmJ1ZjdOWnJOZjVmUDVlajg2L2Z3TVZnQTg3ZEpIYWd0VUtwWHZHR092MnNMbjZ2WDY2d0MrOENLdWc1ODFvQ0xSUjJvTENDSCtkb29UMGJ0S2lod1lDUU1ZWTFzOTRsZG1aMmVmVVZKbHcwOER5bTRkR0dOU0JqUWFqUzhCN0FOb0FMaEJSTzhBdUEzZ2pLWnBiL1VqMHJjYVlKcm15L2FZdmNBUlViVlhXemVibTVzMVhkZXZ4bUt4TzB0TFM3c0FZQmpHR1NLYWJtOER5NnZPUU84Q1VQZ01XcGIxRFFDazArbVhHR05KSW5vUEFCaGpseGNXRnM0dkx5Ly81VVdBYndaa01wa2JBTjQ0cmc5anJOYjltWFFqblU3ZlpJek4yTUs4MVdwZEEvQ1J1c3FBaTZBUTRuL25BTGNMRjRCdHAyQm5OWGdoVUFOa2kyQUh6dm5IUFpwZTFIWDlva3F1eHptOURKSmtZSi9CRG10cmE3OENjUHpOa1hQdTZVd3dVZ2EwY1R3VEFMaWVUQ1lqcXNsR2Fnc0FBT2Q4QzBETG9XazhIbzlmVnM2bk9rQUJWd082endHeXJLNnUzZ2Z3Ylk5OHl0dGc1RlpBZTF5dm8zRXlsOHVkVmNubG13R01NZGVqTUR6K0lxUnBXaEhPTjhtbnl1WHlGWlZjSitZY29FSStuLzhQd0Mybk50VnRFS2dCbkhQUFA0a1JVYTl0TUxPNHVKaHdhblBVNEZXQUJMN1ZBQURZMjl1N2lVZnZrcnNBVEFDWGlPZ1dnR2l6MlV6SzV2SHRYYURWYXBVNVA5NWZJWVRVYmRDSllySFkwSFg5MHY3Ky9tL0ZZckVGQU9sMHVnaGdSZ2h4SGNDcVRCN2ZMa09XWmYwRTI4dU93M1c0M25rSjhqakhUamFialJtR01VTkVTUUJ2QWdCamJHcCtmdjZGbFpXVlA5eHlCUG91RUkxR3E4MW1zNjhjOVhyOVJ3Q3YyTUpNQ0hFTndJZHU0MzFiQVhOemMrTmpZMlAzait0VHJWWnIwV2kwMzZtK3hsRURRRVJYSVdHQWIwVlFDT0ZyRWV5YTU1UHVQNG5vZThhWUVZdkZYcE1aNzlzSzBEVE45U0EwTVRGUkxaVktmYzFqV2RhT1lSaGJSUFJ6czluOGRHTmpvNytFSWFlTUk5OGduMTZCVHd6MjgwelFyOE9CRXhvUXRJQ2dPZlVHaEp4MmxLNWltVXptQVFEN2MvU2VhWnJ4d1VrYXJoN1ZHdkNuWkd4WTlLMG5OR0RZRXc2WW9SdHdUekkyTFByV0U2NEFsYzVFZENTNVUyeFlERUtQa2dHSGg0ZEhranZGaHNWSjB4TVNFaEl5Y2p3RUR1KzFBb2RoOERZQUFBQUFTVVZPUks1Q1lJST1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUF3Q0FZQUFBQlhBdm1IQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBRUtrbEVRVlJvZ2UxWVQyaGNSUmovZlROTGd0Q2JVdHkyS3UzRjl0U3lXU2hpM1pQZ3phZ3hRdkdZdC9PeU4wMlJLRDJZRWcrTkZNRlQ1cjFOYmdwYWFwdWNLaWlORmdOUzNCandZTDFvUlV1azJKdXc1cy9PNTZGdnk5dlp0NXUzYnpaTndQeHU4L3RtdnUvNzhiMzUzc3dBKzlqSC94dVVaWkZTcWtCRXc4YVlFaEU5Q2VDcHlQUUhnRFVBTjRVUWkxcnJIL3VWYUNmMElvQjgzeDloNWc4QVBKdHl6VzBpT2g4RXdUVUEzSHQ2S1pKS004bnp2S05DaUU4QlBKY2xDRE12RzJQZW5KK2YvejNMK203WVZzRDQrUGp6eHBpckFBNDZ4cm92aEhoZGEvMk5vNThXaUc1RzMvZEx4cGdiYUU5K0hjQm56SHhXU25tOFhxOGZxTmZyQjZTVXg1bjVMSURQQVd4WWF4NDN4bnlwbERyVHYvUzdWQ0Q2Ykc0QmVLSmxBZEZsSXByVVd0L3A1amhhUHdOZzFETGRFMEtjM201OVd1UTY4QlI5OC9Ia0c4eDhMZ3pEajlNNG5wdWIrdzNBRzBxcHR3QmNBaUFqMDhGR28vRUpnTDVVUWlhUlNxbFJBQk54anBrbnF0VnFxdVRqcU5WcTN4ZUx4WDhBdk5Ua2lPanBZckg0VTYxVys3bFhmemFTOWdBQm1HNGhpQzVuU2I2SklBZytZdVlyY1M1cXg4NW9FK0I1WGdHdGZYNURDUEdlYXlBcDVUdDRzUG1iT0ZFdWwwKzUrbTBUSUtWODJhS3V6czdPL3VvYVNHdDloNGdXNHh3UkRidjZiUk5nakNuRng4eThhTS9KQ3RzWEVaVTZ6VTJMTmdGRWREZytOc2I4NEJxa0NTbGxMVDVtNXNPZDVxWkYwaWJPeHdlRGc0Ti91UVpwZ29qdVd0U09DTmlSUXhjQVNDbnRlTTZ4a2dTc3hRZWJtNXVIWElNMHNiNitidnR5cm02U2dKWXlDeUdHWElNMHdjeEQxdGorcEhwR2tvQ2JWaERuVnZjd21CQjJpMTV5OXBrUXhHNmJyM3FlZDlRMVVLVlNPY2JNcjFqMGRWZS9iUUswMXFzQWJzZW9nZWhVNllSR28vRWhnSUVZdFZxdFZwMWJkR0lYSXFMekZqY2FuU296UVNsMURzQkluQ09pYWV4UUYwSVFCTmVZZWRtaUx5bWwzdTQxZ08vN0V3RHNDaTdsOC9tRlhuMGxvZU9GWm14czdCa3A1UzFZdHpGbXZwTEw1U2EzT3g5VktwVmowV2N6WXBudUN5Rk9hcTJkT3hDd3paM1k4N3dYaEJCZkFSaTBUQnRFdEJDZGJWWnl1ZHlmQUxDMXRYVUVRSUdJaHFNTk80QjIvQ0tFS0dtdDcrMjRBQUNJN3JCZm9BK1hlZ0Ivby8xSjVrSVlobE5ablhhOTFBTkFHSWJmQ1NGT0oreUpYckFraERncGhFZzZmYjZ2bE1vc29LZVhPZC8zWDR0dVVpZFNMbGtsb3VsOFByOHdOVFZsQUVBcDFhbnpaS3BFcHFmRmNybDhpb2lHaWFqRXpJY0FISWw4clFHNHk4dzNBRnlQK254THdsMEVBQmxFWkJMZ0F0LzNKNW41WWljN004OVVxOVYzMC9wTGZKWFlTZFJxdGVWaXNmZ3ZnQmVUN0VSMHBsQW9QTGF5c3ZKMUduK1BYQURRWHhHN0lnRG9uNGhkRXdEMFI4U3VDZ0RjUmV5NkFNQk54SjRRQUdRWHNlMVI0bEVpQ0lJWkl1cjREeUNpdXMzdG1RbzAwYVVTVTJFWVhyRG43emtCUUtLSXhPU0JQU29BZUNCaWFHaUlBSHpiS2ZsOTdHTWZ3SCtaYjU0cHB1WjJMQUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURBQUFBQXdDQVlBQUFCWEF2bUhBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFEYzBsRVFWUm9nZTFZejBzVVlSaCszbS9YM1FRTks0aEF1bmlTRUpKZHlhQmJadytkbFM2eHU2NGIwbzlMWkVGME1LdURJRXUwTzJNSjBucnhhdjBIUWFhekxDVVJSVWVKdk15Q2djNDZzMjhIVnpMYmI1elIyUmt0bitPKzcvZk4rM3l6ODc3UDl3QkhPTUwvRFFxNmdPSGg0YWhoR0lNQStnRjAxWDVlSXFKQ0pCSlJzdG1zWWJjK1VBTHBkTHE5V3EyK0JuQmVrbElTUXZUbGNybGwyUjZCRWFpZC9Eemt4VytoRkkxR0w4cmVoUEMrTkdlby9XMTJLeDRBdWczRFNNcUNnUkZnNWdHbnVVUWt6UTJNQUJHZGM1ckx6RjJ5V0dBRVhLSXFDNFQ5ckFJQU1wbE1pMlZaSTh4OHpPa2FJdm9raS9sSmdKTEpaTDlwbWs4QXRMdFp5TXdGV2N3WEFvbEVJazVFRTBSMGFRL0xTN3F1SzdKZ1F3bWswK25UMVdwMUZNQTExUC9lbGdIbytEMkJkNklraE9pYm5aMnR5SjdSa0VHV1NxV2FBRndIOEFCQVc1MFVnNGpHUTZIUW8xQW90RkdwVkZLMXR0b0ZnQUY4QkRDajY3cGlWenpRQUFLSlJPS3lFR0lDa2xNbG9qbG12cWtveWpjdm51Y1pnVXdtYzlZMHpWRUFWeVVwWDRqb1ZqNmZmK1BWTXdFSEJPcW9SV0xtSlNJcVJLUFJ2R1ZaVGJXMmVCdEF0TTRXWlFBUEFUeFRGR1hEeStLQlhRZzRVSXRMQUU2Z2ZsdXNBbmdwaExpWHkrVlc5bGVtSEZJQ0x0VGlYMkRtdDh4OFkzSnlVdHRYZFE0Z2JhTXUxT0oyTERQekhWVlZaN0RaVFJvT3FSWnlveFlCbUVRMEZnNkhPMVZWTGNDbjRnR2JOK0JHTFFKWXorZnpJeDdVNHhwZXFWSGZUbnduUXJKQUxCYTdRa1JPUlZlb3A2ZW51YmUzZDM1aFljRjJjbm9ONlJzUVFyeHlzVStZbWUrYXB2azVtVXdPd01lNzltNXQ5QjJBYnJlYit0bEduUXl5T2NoSmZBQndDcEpCUmtRdmlPaCtJd2VaOUJzQWdNWEZ4ZFdPam82cDV1Ym1GU0k2aVUxbHVRRkFZK2JINVhKNXFMVzE5VGt6RTRBTCtMT3JFWUE0TXlmajhiZ1JqOGMxVGRPa1Y4Tzk0dDhYYzI1eGFPWDBkamk0MEt3REdGOWJXM3ZVMXRabUdvWXh5TXdEUkxSMW9Ua1kzcWhYVjhyQXZkSDlYdXJ0dkZIYkx1UVZpc1hpOTJLeE9CV0x4YjRTVVMrQTR5NlduN0VzNjRlbWFlL3JCZjEwNWxoVjFVSTRITzRrb2pFQXB0T0ZkdDVvWVBaNktwVmFCZERpTVAybm9paXQ5UUtIM2hzTjBsNlgrcDA3WWVlTkJrYkFqZHExODBZREl4Q0pSQlFBSlFlcHR0NW9ZQVN5MmF3aGhPaURQWWxkdlZGZjVvQU1FclZiQWFBQmVLcnIrdEQwOUhRNXlCcVBjSVNEamw5N2xYM292NlY2aEFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vY3NzL3Jlc2V0LmNzcydcbmltcG9ydCAnLi9jc3MvaW5kZXguY3NzJ1xuaW1wb3J0IGdhbGxlcnlJbWcgZnJvbSAnLi9hc3NldHMvZ2FsbGVyeS5wbmcnXG5pbXBvcnQgc2VhcmNoSW1nIGZyb20gJy4vYXNzZXRzL3NlYXJjaC5wbmcnXG5pbXBvcnQgc2hhcmVJbWcgZnJvbSAnLi9hc3NldHMvc2hhcmUucG5nJ1xuaW1wb3J0IGxpYnJhcnlJbWcgZnJvbSAnLi9hc3NldHMvbGlicmFyeS5wbmcnXG5cbmNvbnN0IG5hdkJhciA9ICgoKSA9PiB7XG4gICAgY29uc3QgbmF2SW1hZ2VFbGVtZW50cyA9IFtdXG4gICAgY29uc3QgbmF2RWxlbWVudHMgPSBbXVxuXG4gICAgZnVuY3Rpb24gcmVzZXRTZWxlY3RlZCgpIHtcbiAgICAgICAgbmF2SW1hZ2VFbGVtZW50cy5mb3JFYWNoKChpbWFnZUVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGltYWdlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VsZWN0QnV0dG9uKGltZ0VsZW1lbnQsIGJhY2tncm91bmRFbGVtZW50KSB7XG4gICAgICAgIHJlc2V0U2VsZWN0ZWQoKVxuICAgICAgICBpbWdFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcblxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgYmFja2dyb3VuZEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgIGJhY2tncm91bmRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgfSwgMzkwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE5hdkVsZW1lbnQoW1xuICAgICAgICB7IGljb24wLCB0ZXh0MCB9LFxuICAgICAgICB7IGljb24xLCB0ZXh0MSB9LFxuICAgICAgICB7IGljb24yLCB0ZXh0MiB9LFxuICAgICAgICB7IGljb24zLCB0ZXh0MyB9LFxuICAgIF0pIHtcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdicpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKVxuICAgICAgICAgICAgbmF2RWxlbWVudHMucHVzaChlbGVtKVxuICAgICAgICB9XG5cbiAgICAgICAgbmF2RWxlbWVudHMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgbGV0IGJhY2tncm91bmRJbWcgPSAnJ1xuICAgICAgICAgICAgbGV0IHRleHRDb250ZW50ID0gJydcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltZyA9IGljb24wXG4gICAgICAgICAgICAgICAgdGV4dENvbnRlbnQgPSB0ZXh0MFxuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltZyA9IGljb24xXG4gICAgICAgICAgICAgICAgdGV4dENvbnRlbnQgPSB0ZXh0MVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAyKSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltZyA9IGljb24yXG4gICAgICAgICAgICAgICAgdGV4dENvbnRlbnQgPSB0ZXh0MlxuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAzKSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltZyA9IGljb24zXG4gICAgICAgICAgICAgICAgdGV4dENvbnRlbnQgPSB0ZXh0M1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgICAgIC8vIEZpcnN0IGVsZW1lbnQgaXMgc2VsZWN0ZWQgYnkgZGVmYXVsdFxuICAgICAgICAgICAgaWYgKGkgPT09IDApIGltZ0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgICAgICAgICAgaW1nRWxlbWVudC5zcmMgPSBiYWNrZ3JvdW5kSW1nXG4gICAgICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGltZ0VsZW1lbnQpXG4gICAgICAgICAgICBuYXZJbWFnZUVsZW1lbnRzLnB1c2goaW1nRWxlbWVudClcblxuICAgICAgICAgICAgY29uc3QgdGV4dEVMZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIHRleHRFTGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnRcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQodGV4dEVMZW1lbnQpXG5cbiAgICAgICAgICAgIGNvbnN0IGJhY2tncm91bmRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGJhY2tncm91bmRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGlvbicpXG4gICAgICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGJhY2tncm91bmRFbGVtZW50KVxuXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGVjdEJ1dHRvbihpbWdFbGVtZW50LCBiYWNrZ3JvdW5kRWxlbWVudClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIG5hdkVsZW1lbnRzLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgIG5hdi5hcHBlbmRDaGlsZChlbGVtKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbmF2XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0TmF2RWxlbWVudCB9XG59KSgpXG5cbi8vIFRlc3RpbmdcbmNvbnN0IGJhciA9IG5hdkJhci5nZXROYXZFbGVtZW50KFtcbiAgICB7IGljb24wOiBnYWxsZXJ5SW1nLCB0ZXh0MDogJ1Bob3RvcycgfSxcbiAgICB7IGljb24xOiBzZWFyY2hJbWcsIHRleHQxOiAnU2VhcmNoJyB9LFxuICAgIHsgaWNvbjI6IHNoYXJlSW1nLCB0ZXh0MjogJ1NoYXJlJyB9LFxuICAgIHsgaWNvbjM6IGxpYnJhcnlJbWcsIHRleHQzOiAnTGlicmFyeScgfSxcbl0pXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJhcilcblxuZXhwb3J0IGRlZmF1bHQgbmF2QmFyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=