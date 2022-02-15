/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/category.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/category.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../font/Plain Medium Regular.ttf */ "./src/font/Plain Medium Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../font/Plain-Light.ttf */ "./src/font/Plain-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: BookTitleDescr;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\"); }\n\n@font-face {\n  font-family: BookParDescr;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\"); }\n\n.marginTop {\n  margin-top: 2em;\n  min-height: 100vh; }\n\n.footer {\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  margin-top: 2em;\n  color: #000;\n  height: 10vh;\n  background-color: #f4e4a9;\n  display: grid;\n  place-items: center; }\n\n.footer_book {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  color: #000;\n  height: 10vh;\n  background-color: #f4e4a9;\n  display: grid;\n  place-items: center; }\n\n.img {\n  width: 180px !important;\n  height: 280px !important; }\n\n.img_book {\n  width: 354px !important;\n  height: 100% !important; }\n\n@media (min-width: 576px) and (max-width: 768px) {\n  .col-6 {\n    display: flex !important;\n    justify-content: center !important; }\n  .card {\n    width: 300px; }\n  .img,\n  .img_book {\n    width: 100% !important;\n    height: 280px !important; } }\n\n@media (max-width: 576px) {\n  /*#collpaseDescription {\r\n    display: block;\r\n  }*/\n  .footer_book {\n    position: static;\n    margin-top: 10em; }\n  .col-6 {\n    width: 100% !important;\n    display: flex !important;\n    justify-content: center !important; }\n    .col-6 .card {\n      width: 300px; }\n  .img,\n  .img_book {\n    width: 100% !important;\n    height: 280px !important; } }\n\n/*collapse*/\n.m-d.expand-list {\n  margin: 0;\n  padding: 0;\n  color: #000 !important; }\n\n.m-d.expand-list > li {\n  list-style-type: none;\n  padding: 15px 0;\n  border-bottom: 1px solid #000;\n  position: relative;\n  /*         max-width: 80%; */ }\n\n.m-d label[class^=\"tab\"]:hover {\n  cursor: pointer; }\n\n.m-d input {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.m-d input[class^=\"tab\"] {\n  width: 100%;\n  height: 40px;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.m-d input[class^=\"tab\"]:hover {\n  cursor: pointer; }\n\n.m-d label[class^=\"tab\"] {\n  font-family: BookTitleDescr;\n  color: #000;\n  font-weight: bold; }\n\n.m-d .content {\n  height: auto;\n  max-height: 0;\n  max-width: 100%;\n  color: #000;\n  /*        background: yellow;*/\n  overflow: scroll;\n  transform: translateY(20px);\n  transition: all 180ms ease-in-out 0ms; }\n\n.content::-webkit-scrollbar {\n  display: none; }\n\n.content {\n  font-family: BookParDescr;\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */ }\n\n.m-d li[data-md-content=\"100\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 100px;\n  transition: all 150ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"200\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 200px;\n  transition: all 200ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"300\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 300px;\n  transition: all 250ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"400\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 400px;\n  transition: all 250ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"500\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 500px;\n  transition: all 250ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"600\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 600px;\n  transition: all 250ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"700\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 700px;\n  transition: all 300ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"800\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 800px;\n  transition: all 300ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"900\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 900px;\n  transition: all 300ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"1000\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 1000px;\n  transition: all 350ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 1000px;\n  transition: all 250ms ease-in-out 0ms; }\n\n.m-d input[class^=\"tab\"]:checked ~ .content {\n  margin-bottom: 20px; }\n\n.m-d .open-close-icon {\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  transform: translatey(2px); }\n\n.m-d .open-close-icon i {\n  position: absolute;\n  left: 0; }\n\n.m-d .open-close-icon .fa-minus {\n  transform: rotate(-90deg);\n  transition: transform 150ms ease-in-out 0ms; }\n\n.m-d input[class^=\"tab\"]:checked ~ .open-close-icon .fa-minus {\n  transform: rotate(0deg);\n  transition: transform 150ms ease-in-out 0ms; }\n\n.m-d .open-close-icon .fa-plus {\n  opacity: 1;\n  transform: rotate(-90deg);\n  transition: opacity 50ms linear 0ms, transform 150ms ease-in-out 0ms; }\n\n.m-d input[class^=\"tab\"]:checked ~ .open-close-icon .fa-plus {\n  opacity: 0;\n  transform: rotate(0deg);\n  transition: opacity 50ms linear 0ms, transform 150ms ease-in-out 0ms; }\n", "",{"version":3,"sources":["webpack://./src/css/category.scss"],"names":[],"mappings":"AAGA;EACE,2BAA2B;EAC3B,+DAA+D,EAAA;;AAGjE;EACE,yBAAyB;EACzB,+DAAsD,EAAA;;AAGxD;EAEE,eAAe;EACf,iBAAiB,EAAA;;AAGnB;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,eAAe;EACf,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,mBAAmB,EAAA;;AAErB;EACE,eAAe;EACf,SAAS;EACT,WAAW;EACX,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,mBAAmB,EAAA;;AAGrB;EACE,uBAAuB;EACvB,wBAAwB,EAAA;;AAE1B;EACE,uBAAuB;EACvB,uBAAuB,EAAA;;AAGzB;EACE;IACE,wBAAwB;IACxB,kCAAkC,EAAA;EAEpC;IACE,YAAY,EAAA;EAEd;;IAEE,sBAAsB;IACtB,wBAAwB,EAAA,EACzB;;AAEH;EACE;;IAVE;EAaF;IACE,gBAAgB;IAChB,gBAAgB,EAAA;EAElB;IACE,sBAAsB;IACtB,wBAAwB;IACxB,kCAAkC,EAAA;IAHpC;MAKI,YAAY,EAAA;EAIhB;;IAEE,sBAAsB;IACtB,wBAAwB,EAAA,EACzB;;AAGH,WAAA;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB,EAAA;;AAExB;EACE,qBAAqB;EACrB,eAAe;EACf,6BAA6B;EAC7B,kBAAkB;EAClB,4BAAA,EAA6B;;AAE/B;EACE,eAAe,EAAA;;AAEjB;EACE,wBAAwB;EACxB,qBAAqB;EACrB,gBAAgB,EAAA;;AAElB;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,OAAO;EACP,MAAM,EAAA;;AAER;EACE,eAAe,EAAA;;AAEjB;EACE,2BAA2B;EAC3B,WAAW;EACX,iBAAiB,EAAA;;AAEnB;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,WAAW;EACX,8BAAA;EACA,gBAAgB;EAChB,2BAA2B;EAC3B,qCAAqC,EAAA;;AAEvC;EACE,aAAa,EAAA;;AAEf;EACE,yBAAyB;EACzB,wBAAwB;EAAE,gBAAA;EAC1B,qBAAqB;EAAE,YAAA,EAAa;;AAGtC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,kBAAkB;EAClB,qCAAqC,EAAA;;AAEvC;EACE,kBAAkB;EAClB,qCAAqC,EAAA;;AAEvC;EACE,mBAAmB,EAAA;;AAGrB;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;EACX,0BAA0B,EAAA;;AAE5B;EACE,kBAAkB;EAClB,OAAO,EAAA;;AAET;EACE,yBAAyB;EACzB,2CAA2C,EAAA;;AAE7C;EACE,uBAAuB;EACvB,2CAA2C,EAAA;;AAE7C;EACE,UAAU;EACV,yBAAyB;EACzB,oEAAoE,EAAA;;AAEtE;EACE,UAAU;EACV,uBAAuB;EACvB,oEAAoE,EAAA","sourcesContent":["$breakpoint-tablet: 768px;\r\n$breakpoint-mobile: 576px;\r\n\r\n@font-face {\r\n  font-family: BookTitleDescr;\r\n  src: url(\"../font/Plain Medium Regular.ttf\") format(\"truetype\");\r\n}\r\n\r\n@font-face {\r\n  font-family: BookParDescr;\r\n  src: url(\"../font/Plain-Light.ttf\") format(\"truetype\");\r\n}\r\n\r\n.marginTop {\r\n  //padding-top: 5em;\r\n  margin-top: 2em;\r\n  min-height: 100vh;\r\n}\r\n\r\n.footer {\r\n  position: relative;\r\n  bottom: 0;\r\n  width: 100%;\r\n  margin-top: 2em;\r\n  color: #000;\r\n  height: 10vh;\r\n  background-color: #f4e4a9;\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n.footer_book {\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  color: #000;\r\n  height: 10vh;\r\n  background-color: #f4e4a9;\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n\r\n.img {\r\n  width: 180px !important;\r\n  height: 280px !important;\r\n}\r\n.img_book {\r\n  width: 354px !important;\r\n  height: 100% !important;\r\n}\r\n\r\n@media (min-width: $breakpoint-mobile) and (max-width: $breakpoint-tablet) {\r\n  .col-6 {\r\n    display: flex !important;\r\n    justify-content: center !important;\r\n  }\r\n  .card {\r\n    width: 300px;\r\n  }\r\n  .img,\r\n  .img_book {\r\n    width: 100% !important;\r\n    height: 280px !important;\r\n  }\r\n}\r\n@media (max-width: $breakpoint-mobile) {\r\n  /*#collpaseDescription {\r\n    display: block;\r\n  }*/\r\n  .footer_book {\r\n    position: static;\r\n    margin-top: 10em;\r\n  }\r\n  .col-6 {\r\n    width: 100% !important;\r\n    display: flex !important;\r\n    justify-content: center !important;\r\n    .card {\r\n      width: 300px;\r\n    }\r\n  }\r\n\r\n  .img,\r\n  .img_book {\r\n    width: 100% !important;\r\n    height: 280px !important;\r\n  }\r\n}\r\n\r\n/*collapse*/\r\n.m-d.expand-list {\r\n  margin: 0;\r\n  padding: 0;\r\n  color: #000 !important;\r\n}\r\n.m-d.expand-list > li {\r\n  list-style-type: none;\r\n  padding: 15px 0;\r\n  border-bottom: 1px solid #000;\r\n  position: relative;\r\n  /*         max-width: 80%; */\r\n}\r\n.m-d label[class^=\"tab\"]:hover {\r\n  cursor: pointer;\r\n}\r\n.m-d input {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n}\r\n.m-d input[class^=\"tab\"] {\r\n  width: 100%;\r\n  height: 40px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n.m-d input[class^=\"tab\"]:hover {\r\n  cursor: pointer;\r\n}\r\n.m-d label[class^=\"tab\"] {\r\n  font-family: BookTitleDescr;\r\n  color: #000;\r\n  font-weight: bold;\r\n}\r\n.m-d .content {\r\n  height: auto;\r\n  max-height: 0;\r\n  max-width: 100%;\r\n  color: #000;\r\n  /*        background: yellow;*/\r\n  overflow: scroll;\r\n  transform: translateY(20px);\r\n  transition: all 180ms ease-in-out 0ms;\r\n}\r\n.content::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n.content {\r\n  font-family: BookParDescr;\r\n  -ms-overflow-style: none; /* IE and Edge */\r\n  scrollbar-width: none; /* Firefox */\r\n}\r\n\r\n.m-d li[data-md-content=\"100\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 100px;\r\n  transition: all 150ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"200\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 200px;\r\n  transition: all 200ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"300\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 300px;\r\n  transition: all 250ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"400\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 400px;\r\n  transition: all 250ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"500\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 500px;\r\n  transition: all 250ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"600\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 600px;\r\n  transition: all 250ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"700\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 700px;\r\n  transition: all 300ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"800\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 800px;\r\n  transition: all 300ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"900\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 900px;\r\n  transition: all 300ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"1000\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 1000px;\r\n  transition: all 350ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 1000px;\r\n  transition: all 250ms ease-in-out 0ms;\r\n}\r\n.m-d input[class^=\"tab\"]:checked ~ .content {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.m-d .open-close-icon {\r\n  display: inline-block;\r\n  position: absolute;\r\n  right: 20px;\r\n  transform: translatey(2px);\r\n}\r\n.m-d .open-close-icon i {\r\n  position: absolute;\r\n  left: 0;\r\n}\r\n.m-d .open-close-icon .fa-minus {\r\n  transform: rotate(-90deg);\r\n  transition: transform 150ms ease-in-out 0ms;\r\n}\r\n.m-d input[class^=\"tab\"]:checked ~ .open-close-icon .fa-minus {\r\n  transform: rotate(0deg);\r\n  transition: transform 150ms ease-in-out 0ms;\r\n}\r\n.m-d .open-close-icon .fa-plus {\r\n  opacity: 1;\r\n  transform: rotate(-90deg);\r\n  transition: opacity 50ms linear 0ms, transform 150ms ease-in-out 0ms;\r\n}\r\n.m-d input[class^=\"tab\"]:checked ~ .open-close-icon .fa-plus {\r\n  opacity: 0;\r\n  transform: rotate(0deg);\r\n  transition: opacity 50ms linear 0ms, transform 150ms ease-in-out 0ms;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/home.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/home.scss ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/hero_book.jpeg */ "./src/images/hero_book.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/hero_book_mobile.jpg */ "./src/images/hero_book_mobile.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".alert {\n  display: none;\n  width: 100%;\n  position: fixed;\n  padding: 20px;\n  background-color: #f44336;\n  color: white; }\n  .alert .closebtn {\n    margin-left: 15px;\n    color: white;\n    font-weight: bold;\n    float: right;\n    font-size: 22px;\n    line-height: 20px;\n    cursor: pointer;\n    transition: 0.3s; }\n  .alert .closebtn:hover {\n    color: white; }\n\nsection.hero {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  height: 100vh;\n  display: grid;\n  place-items: center;\n  background-position: center; }\n  section.hero .card {\n    background: transparent !important;\n    text-align: center;\n    border: none !important;\n    box-shadow: none !important; }\n  section.hero .card-title {\n    color: #fff !important;\n    padding-bottom: 0.2em; }\n  section.hero .card-subtitle {\n    padding-bottom: 0.8em; }\n\n@media (max-width: 576px) {\n  section.hero {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover; } }\n", "",{"version":3,"sources":["webpack://./src/css/home.scss"],"names":[],"mappings":"AAMA;EACE,aAAa;EACb,WAAW;EACX,eAAe;EACf,aAAa;EACb,yBAXmB;EAYnB,YAAY,EAAA;EANd;IASI,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,eAAe;IACf,gBAAgB,EAAA;EAhBpB;IAoBI,YAAY,EAAA;;AAIhB;EACE,yDA9BwC;EA+BxC,sBAAsB;EACtB,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,2BAA2B,EAAA;EAN7B;IASI,kCAAkC;IAClC,kBAAkB;IAClB,uBAAuB;IACvB,2BAA2B,EAAA;EAZ/B;IAeI,sBAAsB;IACtB,qBAAqB,EAAA;EAhBzB;IAmBI,qBAAqB,EAAA;;AAGzB;EACE;IACE,yDApDmD;IAqDnD,sBAAsB,EAAA,EACvB","sourcesContent":["$alert_color: #f44336;\r\n$img_hero: url(\"../images/hero_book.jpeg\");\r\n$img_hero_mobile: url(\"../images/hero_book_mobile.jpg\");\r\n$breakpoint-tablet: 768px;\r\n$breakpoint-mobile: 576px;\r\n\r\n.alert {\r\n  display: none;\r\n  width: 100%;\r\n  position: fixed;\r\n  padding: 20px;\r\n  background-color: $alert_color;\r\n  color: white;\r\n\r\n  .closebtn {\r\n    margin-left: 15px;\r\n    color: white;\r\n    font-weight: bold;\r\n    float: right;\r\n    font-size: 22px;\r\n    line-height: 20px;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n  }\r\n\r\n  .closebtn:hover {\r\n    color: white;\r\n  }\r\n}\r\n\r\nsection.hero {\r\n  background-image: $img_hero;\r\n  background-size: cover;\r\n  height: 100vh;\r\n  display: grid;\r\n  place-items: center;\r\n  background-position: center;\r\n\r\n  .card {\r\n    background: transparent !important;\r\n    text-align: center;\r\n    border: none !important;\r\n    box-shadow: none !important;\r\n  }\r\n  .card-title {\r\n    color: #fff !important;\r\n    padding-bottom: 0.2em;\r\n  }\r\n  .card-subtitle {\r\n    padding-bottom: 0.8em;\r\n  }\r\n}\r\n@media (max-width: $breakpoint-mobile) {\r\n  section.hero {\r\n    background-image: $img_hero_mobile;\r\n    background-size: cover;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.scss ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../font/MessinaSans-black.ttf */ "./src/font/MessinaSans-black.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../font/Mark-Bold.ttf */ "./src/font/Mark-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../font/MessinaSans-Book.ttf */ "./src/font/MessinaSans-Book.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*--------------------------------------------------------- BASICS -------------------------------------------------------------------*/\n/**********FONT************/\n@font-face {\n  font-family: NameCategory;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\"); }\n\n@font-face {\n  font-family: CardTitle;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\"); }\n\n@font-face {\n  font-family: CardText;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"); }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nbody {\n  background-color: #592a20; }\n\na {\n  text-decoration: none; }\n\n#nameCategory {\n  font-family: NameCategory !important;\n  color: #fff !important; }\n\n.card {\n  background-color: #f4e4a9;\n  box-shadow: 2px 1px 5px 1px rgba(0, 0, 0, 0.6); }\n\n.card-title {\n  font-family: CardTitle !important;\n  color: #29b2e0 !important; }\n\n.text-muted {\n  font-family: CardText !important;\n  color: #000 !important;\n  font-size: 0.8em;\n  /*font-style: italic;*/ }\n\n.back-home {\n  margin-bottom: 2em;\n  width: 100%; }\n  .back-home .btn {\n    color: #000 !important; }\n\n/*---------------------------------------------------------- GENERAL ICONS ---------------------------------------------------------------*/\n.icon {\n  cursor: pointer;\n  background-color: #212121;\n  background-color: #f4e4a9;\n  transition: all 0.2s ease-in-out, all 0.2s ease-in-out;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n  border-radius: 5em;\n  box-sizing: border-box;\n  color: #000 !important; }\n\n.icon-np {\n  padding: 0 !important;\n  width: auto !important;\n  height: auto !important; }\n\n.icon-small {\n  width: 25px;\n  height: 25px; }\n\n.icon-medium {\n  width: 35px;\n  height: 35px; }\n\n.icon-large {\n  width: 42px;\n  height: 42px; }\n\n.icon-huge {\n  width: 65px;\n  height: 65px; }\n\n@media (min-width: 900px) {\n  .icon-small {\n    width: 35px;\n    height: 35px; }\n  .icon-medium {\n    width: 45px;\n    height: 45px; }\n  .icon-large {\n    width: 60px;\n    height: 60px; } }\n\n.icon img {\n  filter: invert(0);\n  width: 100%;\n  height: 100%;\n  opacity: 1; }\n\n.icon-small img {\n  width: 15px;\n  height: 15px; }\n\n.icon-medium img {\n  width: 20px;\n  height: 20px; }\n\n.icon-large img {\n  width: 20px !important;\n  height: 20px !important; }\n\n@media (min-width: 900px) {\n  .icon-small img {\n    width: 18px;\n    height: 18px; }\n  .icon-medium img {\n    width: 20px;\n    height: 20px; }\n  .icon-large img {\n    width: 25px !important;\n    height: 25px !important; } }\n", "",{"version":3,"sources":["webpack://./src/css/main.scss"],"names":[],"mappings":"AAAA,uIAAA;AAgBA,2BAAA;AACA;EACE,yBAAyB;EACzB,+DAA4D,EAAA;;AAG9D;EACE,sBAAsB;EACtB,+DAAoD,EAAA;;AAGtD;EACE,qBAAqB;EACrB,+DAA2D,EAAA;;AAG7D;EACE,SAAS;EACT,UAAU;EACV,sBAAsB,EAAA;;AAExB;EACE,yBAhCuB,EAAA;;AAkCzB;EACE,qBAAqB,EAAA;;AAEvB;EACE,oCAAoC;EACpC,sBAAsB,EAAA;;AAExB;EACE,yBApCuB;EAqCvB,8CAA8C,EAAA;;AAEhD;EACE,iCAAiC;EACjC,yBAA6B,EAAA;;AAE/B;EACE,gCAAgC;EAChC,sBAAsB;EACtB,gBAAgB;EAChB,sBAAA,EAAuB;;AAEzB;EACE,kBAAkB;EAClB,WAAW,EAAA;EAFb;IAKI,sBAAsB,EAAA;;AAG1B,2IAAA;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,yBA9DuB;EA+DvB,sDAAsD;EACtD,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;EAClB,sBAAsB;EACtB,sBAAsB,EAAA;;AAGxB;EACE,qBAAqB;EACrB,sBAAsB;EACtB,uBAAuB,EAAA;;AAGzB;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE;IACE,WAAW;IACX,YAAY,EAAA;EAGd;IACE,WAAW;IACX,YAAY,EAAA;EAGd;IACE,WAAW;IACX,YAAY,EAAA,EACb;;AAGH;EACE,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,UAAU,EAAA;;AAGZ;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,sBAAsB;EACtB,uBAAuB,EAAA;;AAGzB;EACE;IACE,WAAW;IACX,YAAY,EAAA;EAGd;IACE,WAAW;IACX,YAAY,EAAA;EAGd;IACE,sBAAsB;IACtB,uBAAuB,EAAA,EACxB","sourcesContent":["/*--------------------------------------------------------- BASICS -------------------------------------------------------------------*/\r\n\r\n//$background_card: #212121;\r\n$background_body: #292e32;\r\n$background_body: #a68d65;\r\n$background_body: #f4e4a9;\r\n$background_body: #592a20;\r\n\r\n$background_card: rgba(73, 73, 73, 0.867);\r\n$background_card: #131629;\r\n$background_card: #212121;\r\n$background_card: #428398;\r\n$background_card: #f4e4a9;\r\n\r\n$card_title: #29b2e0;\r\n\r\n/**********FONT************/\r\n@font-face {\r\n  font-family: NameCategory;\r\n  src: url(\"../font/MessinaSans-black.ttf\") format(\"truetype\");\r\n}\r\n\r\n@font-face {\r\n  font-family: CardTitle;\r\n  src: url(\"../font/Mark-Bold.ttf\") format(\"truetype\");\r\n}\r\n\r\n@font-face {\r\n  font-family: CardText;\r\n  src: url(\"../font/MessinaSans-Book.ttf\") format(\"truetype\");\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  background-color: $background_body;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\n#nameCategory {\r\n  font-family: NameCategory !important;\r\n  color: #fff !important;\r\n}\r\n.card {\r\n  background-color: $background_card;\r\n  box-shadow: 2px 1px 5px 1px rgba(0, 0, 0, 0.6);\r\n}\r\n.card-title {\r\n  font-family: CardTitle !important;\r\n  color: $card_title !important;\r\n}\r\n.text-muted {\r\n  font-family: CardText !important;\r\n  color: #000 !important;\r\n  font-size: 0.8em;\r\n  /*font-style: italic;*/\r\n}\r\n.back-home {\r\n  margin-bottom: 2em;\r\n  width: 100%;\r\n\r\n  .btn {\r\n    color: #000 !important;\r\n  }\r\n}\r\n/*---------------------------------------------------------- GENERAL ICONS ---------------------------------------------------------------*/\r\n\r\n.icon {\r\n  cursor: pointer;\r\n  background-color: #212121;\r\n  background-color: $background_card;\r\n  transition: all 0.2s ease-in-out, all 0.2s ease-in-out;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  vertical-align: middle;\r\n  border-radius: 5em;\r\n  box-sizing: border-box;\r\n  color: #000 !important;\r\n}\r\n\r\n.icon-np {\r\n  padding: 0 !important;\r\n  width: auto !important;\r\n  height: auto !important;\r\n}\r\n\r\n.icon-small {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n.icon-medium {\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n\r\n.icon-large {\r\n  width: 42px;\r\n  height: 42px;\r\n}\r\n\r\n.icon-huge {\r\n  width: 65px;\r\n  height: 65px;\r\n}\r\n\r\n@media (min-width: 900px) {\r\n  .icon-small {\r\n    width: 35px;\r\n    height: 35px;\r\n  }\r\n\r\n  .icon-medium {\r\n    width: 45px;\r\n    height: 45px;\r\n  }\r\n\r\n  .icon-large {\r\n    width: 60px;\r\n    height: 60px;\r\n  }\r\n}\r\n\r\n.icon img {\r\n  filter: invert(0);\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 1;\r\n}\r\n\r\n.icon-small img {\r\n  width: 15px;\r\n  height: 15px;\r\n}\r\n\r\n.icon-medium img {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.icon-large img {\r\n  width: 20px !important;\r\n  height: 20px !important;\r\n}\r\n\r\n@media (min-width: 900px) {\r\n  .icon-small img {\r\n    width: 18px;\r\n    height: 18px;\r\n  }\r\n\r\n  .icon-medium img {\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n\r\n  .icon-large img {\r\n    width: 25px !important;\r\n    height: 25px !important;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ "./src/css/category.scss":
/*!*******************************!*\
  !*** ./src/css/category.scss ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_category_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./category.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/category.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_category_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_category_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_category_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_category_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/home.scss":
/*!***************************!*\
  !*** ./src/css/home.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./home.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/home.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/font/Mark-Bold.ttf":
/*!********************************!*\
  !*** ./src/font/Mark-Bold.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/Mark-Bold.ttf";

/***/ }),

/***/ "./src/font/MessinaSans-Book.ttf":
/*!***************************************!*\
  !*** ./src/font/MessinaSans-Book.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/MessinaSans-Book.ttf";

/***/ }),

/***/ "./src/font/MessinaSans-black.ttf":
/*!****************************************!*\
  !*** ./src/font/MessinaSans-black.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/MessinaSans-black.ttf";

/***/ }),

/***/ "./src/font/Plain Medium Regular.ttf":
/*!*******************************************!*\
  !*** ./src/font/Plain Medium Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/Plain Medium Regular.ttf";

/***/ }),

/***/ "./src/font/Plain-Light.ttf":
/*!**********************************!*\
  !*** ./src/font/Plain-Light.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/Plain-Light.ttf";

/***/ }),

/***/ "./src/images/hero_book.jpeg":
/*!***********************************!*\
  !*** ./src/images/hero_book.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/hero_book.jpeg";

/***/ }),

/***/ "./src/images/hero_book_mobile.jpg":
/*!*****************************************!*\
  !*** ./src/images/hero_book_mobile.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/hero_book_mobile.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_home_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/home.scss */ "./src/css/home.scss");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.scss */ "./src/css/main.scss");
/* harmony import */ var _css_category_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/category.scss */ "./src/css/category.scss");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1Byb2dldHRvIEphdmFzY3JpcHQgQWR2YW5jZWQgZGkgUmljY2FyZG8gSW5nYXNjaW90dGEvLi9zcmMvY3NzL2NhdGVnb3J5LnNjc3MiLCJ3ZWJwYWNrOi8vUHJvZ2V0dG8gSmF2YXNjcmlwdCBBZHZhbmNlZCBkaSBSaWNjYXJkbyBJbmdhc2Npb3R0YS8uL3NyYy9jc3MvaG9tZS5zY3NzIiwid2VicGFjazovL1Byb2dldHRvIEphdmFzY3JpcHQgQWR2YW5jZWQgZGkgUmljY2FyZG8gSW5nYXNjaW90dGEvLi9zcmMvY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly9Qcm9nZXR0byBKYXZhc2NyaXB0IEFkdmFuY2VkIGRpIFJpY2NhcmRvIEluZ2FzY2lvdHRhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9Qcm9nZXR0byBKYXZhc2NyaXB0IEFkdmFuY2VkIGRpIFJpY2NhcmRvIEluZ2FzY2lvdHRhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9Qcm9nZXR0byBKYXZhc2NyaXB0IEFkdmFuY2VkIGRpIFJpY2NhcmRvIEluZ2FzY2lvdHRhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vUHJvZ2V0dG8gSmF2YXNjcmlwdCBBZHZhbmNlZCBkaSBSaWNjYXJkbyBJbmdhc2Npb3R0YS8uL3NyYy9jc3MvY2F0ZWdvcnkuc2Nzcz84OTU3Iiwid2VicGFjazovL1Byb2dldHRvIEphdmFzY3JpcHQgQWR2YW5jZWQgZGkgUmljY2FyZG8gSW5nYXNjaW90dGEvLi9zcmMvY3NzL2hvbWUuc2Nzcz85NmFlIiwid2VicGFjazovL1Byb2dldHRvIEphdmFzY3JpcHQgQWR2YW5jZWQgZGkgUmljY2FyZG8gSW5nYXNjaW90dGEvLi9zcmMvY3NzL21haW4uc2Nzcz9lOWRjIiwid2VicGFjazovL1Byb2dldHRvIEphdmFzY3JpcHQgQWR2YW5jZWQgZGkgUmljY2FyZG8gSW5nYXNjaW90dGEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vUHJvZ2V0dG8gSmF2YXNjcmlwdCBBZHZhbmNlZCBkaSBSaWNjYXJkbyBJbmdhc2Npb3R0YS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vUHJvZ2V0dG8gSmF2YXNjcmlwdCBBZHZhbmNlZCBkaSBSaWNjYXJkbyBJbmdhc2Npb3R0YS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9Qcm9nZXR0byBKYXZhc2NyaXB0IEFkdmFuY2VkIGRpIFJpY2NhcmRvIEluZ2FzY2lvdHRhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1Byb2dldHRvIEphdmFzY3JpcHQgQWR2YW5jZWQgZGkgUmljY2FyZG8gSW5nYXNjaW90dGEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9Qcm9nZXR0byBKYXZhc2NyaXB0IEFkdmFuY2VkIGRpIFJpY2NhcmRvIEluZ2FzY2lvdHRhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vUHJvZ2V0dG8gSmF2YXNjcmlwdCBBZHZhbmNlZCBkaSBSaWNjYXJkbyBJbmdhc2Npb3R0YS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Qcm9nZXR0byBKYXZhc2NyaXB0IEFkdmFuY2VkIGRpIFJpY2NhcmRvIEluZ2FzY2lvdHRhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1Byb2dldHRvIEphdmFzY3JpcHQgQWR2YW5jZWQgZGkgUmljY2FyZG8gSW5nYXNjaW90dGEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1Byb2dldHRvIEphdmFzY3JpcHQgQWR2YW5jZWQgZGkgUmljY2FyZG8gSW5nYXNjaW90dGEvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9Qcm9nZXR0byBKYXZhc2NyaXB0IEFkdmFuY2VkIGRpIFJpY2NhcmRvIEluZ2FzY2lvdHRhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vUHJvZ2V0dG8gSmF2YXNjcmlwdCBBZHZhbmNlZCBkaSBSaWNjYXJkbyBJbmdhc2Npb3R0YS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1Byb2dldHRvIEphdmFzY3JpcHQgQWR2YW5jZWQgZGkgUmljY2FyZG8gSW5nYXNjaW90dGEvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vUHJvZ2V0dG8gSmF2YXNjcmlwdCBBZHZhbmNlZCBkaSBSaWNjYXJkbyBJbmdhc2Npb3R0YS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9Qcm9nZXR0byBKYXZhc2NyaXB0IEFkdmFuY2VkIGRpIFJpY2NhcmRvIEluZ2FzY2lvdHRhLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250L1BsYWluIE1lZGl1bSBSZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvUGxhaW4tTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IEJvb2tUaXRsZURlc2NyO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IEJvb2tQYXJEZXNjcjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7IH1cXG5cXG4ubWFyZ2luVG9wIHtcXG4gIG1hcmdpbi10b3A6IDJlbTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoOyB9XFxuXFxuLmZvb3RlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDJlbTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZTRhOTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyOyB9XFxuXFxuLmZvb3Rlcl9ib29rIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICMwMDA7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlNGE5O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uaW1nIHtcXG4gIHdpZHRoOiAxODBweCAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiAyODBweCAhaW1wb3J0YW50OyB9XFxuXFxuLmltZ19ib29rIHtcXG4gIHdpZHRoOiAzNTRweCAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbC02IHtcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50OyB9XFxuICAuY2FyZCB7XFxuICAgIHdpZHRoOiAzMDBweDsgfVxcbiAgLmltZyxcXG4gIC5pbWdfYm9vayB7XFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogMjgwcHggIWltcG9ydGFudDsgfSB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAvKiNjb2xscGFzZURlc2NyaXB0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9Ki9cXG4gIC5mb290ZXJfYm9vayB7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIG1hcmdpbi10b3A6IDEwZW07IH1cXG4gIC5jb2wtNiB7XFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDsgfVxcbiAgICAuY29sLTYgLmNhcmQge1xcbiAgICAgIHdpZHRoOiAzMDBweDsgfVxcbiAgLmltZyxcXG4gIC5pbWdfYm9vayB7XFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogMjgwcHggIWltcG9ydGFudDsgfSB9XFxuXFxuLypjb2xsYXBzZSovXFxuLm0tZC5leHBhbmQtbGlzdCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDsgfVxcblxcbi5tLWQuZXhwYW5kLWxpc3QgPiBsaSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC8qICAgICAgICAgbWF4LXdpZHRoOiA4MCU7ICovIH1cXG5cXG4ubS1kIGxhYmVsW2NsYXNzXj1cXFwidGFiXFxcIl06aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLm0tZCBpbnB1dCB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lOyB9XFxuXFxuLm0tZCBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDsgfVxcblxcbi5tLWQgaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ubS1kIGxhYmVsW2NsYXNzXj1cXFwidGFiXFxcIl0ge1xcbiAgZm9udC1mYW1pbHk6IEJvb2tUaXRsZURlc2NyO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5tLWQgLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgLyogICAgICAgIGJhY2tncm91bmQ6IHllbGxvdzsqL1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gIHRyYW5zaXRpb246IGFsbCAxODBtcyBlYXNlLWluLW91dCAwbXM7IH1cXG5cXG4uY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5jb250ZW50IHtcXG4gIGZvbnQtZmFtaWx5OiBCb29rUGFyRGVzY3I7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxuICAvKiBJRSBhbmQgRWRnZSAqL1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgLyogRmlyZWZveCAqLyB9XFxuXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjEwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0IDBtczsgfVxcblxcbi5tLWQgbGlbZGF0YS1tZC1jb250ZW50PVxcXCIyMDBcXFwiXSBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAuY29udGVudCB7XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dCAwbXM7IH1cXG5cXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiMzAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcbiAgbWF4LWhlaWdodDogMzAwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgMG1zOyB9XFxuXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjQwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBtczsgfVxcblxcbi5tLWQgbGlbZGF0YS1tZC1jb250ZW50PVxcXCI1MDBcXFwiXSBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAuY29udGVudCB7XFxuICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dCAwbXM7IH1cXG5cXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiNjAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcbiAgbWF4LWhlaWdodDogNjAwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgMG1zOyB9XFxuXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjcwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXG4gIG1heC1oZWlnaHQ6IDcwMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0IDBtczsgfVxcblxcbi5tLWQgbGlbZGF0YS1tZC1jb250ZW50PVxcXCI4MDBcXFwiXSBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAuY29udGVudCB7XFxuICBtYXgtaGVpZ2h0OiA4MDBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dCAwbXM7IH1cXG5cXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiOTAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcbiAgbWF4LWhlaWdodDogOTAwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQgMG1zOyB9XFxuXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjEwMDBcXFwiXSBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAuY29udGVudCB7XFxuICBtYXgtaGVpZ2h0OiAxMDAwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMzUwbXMgZWFzZS1pbi1vdXQgMG1zOyB9XFxuXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIlxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXG4gIG1heC1oZWlnaHQ6IDEwMDBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dCAwbXM7IH1cXG5cXG4ubS1kIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cXG5cXG4ubS1kIC5vcGVuLWNsb3NlLWljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDIwcHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMnB4KTsgfVxcblxcbi5tLWQgLm9wZW4tY2xvc2UtaWNvbiBpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7IH1cXG5cXG4ubS1kIC5vcGVuLWNsb3NlLWljb24gLmZhLW1pbnVzIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQgMG1zOyB9XFxuXFxuLm0tZCBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAub3Blbi1jbG9zZS1pY29uIC5mYS1taW51cyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dCAwbXM7IH1cXG5cXG4ubS1kIC5vcGVuLWNsb3NlLWljb24gLmZhLXBsdXMge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwbXMgbGluZWFyIDBtcywgdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0IDBtczsgfVxcblxcbi5tLWQgaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLm9wZW4tY2xvc2UtaWNvbiAuZmEtcGx1cyB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwbXMgbGluZWFyIDBtcywgdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0IDBtczsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvY2F0ZWdvcnkuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLDJCQUEyQjtFQUMzQiwrREFBK0QsRUFBQTs7QUFHakU7RUFDRSx5QkFBeUI7RUFDekIsK0RBQXNELEVBQUE7O0FBR3hEO0VBRUUsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0IsRUFBQTs7QUFFMUI7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsa0NBQWtDLEVBQUE7RUFFcEM7SUFDRSxZQUFZLEVBQUE7RUFFZDs7SUFFRSxzQkFBc0I7SUFDdEIsd0JBQXdCLEVBQUEsRUFDekI7O0FBRUg7RUFDRTs7SUFWRTtFQWFGO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQixFQUFBO0VBRWxCO0lBQ0Usc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixrQ0FBa0MsRUFBQTtJQUhwQztNQUtJLFlBQVksRUFBQTtFQUloQjs7SUFFRSxzQkFBc0I7SUFDdEIsd0JBQXdCLEVBQUEsRUFDekI7O0FBR0gsV0FBQTtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsNEJBQUEsRUFBNkI7O0FBRS9CO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU0sRUFBQTs7QUFFUjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCw4QkFBQTtFQUNBLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IscUNBQXFDLEVBQUE7O0FBRXZDO0VBQ0UsYUFBYSxFQUFBOztBQUVmO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUFFLGdCQUFBO0VBQzFCLHFCQUFxQjtFQUFFLFlBQUEsRUFBYTs7QUFHdEM7RUFDRSxpQkFBaUI7RUFDakIscUNBQXFDLEVBQUE7O0FBRXZDO0VBQ0UsaUJBQWlCO0VBQ2pCLHFDQUFxQyxFQUFBOztBQUV2QztFQUNFLGlCQUFpQjtFQUNqQixxQ0FBcUMsRUFBQTs7QUFFdkM7RUFDRSxpQkFBaUI7RUFDakIscUNBQXFDLEVBQUE7O0FBRXZDO0VBQ0UsaUJBQWlCO0VBQ2pCLHFDQUFxQyxFQUFBOztBQUV2QztFQUNFLGlCQUFpQjtFQUNqQixxQ0FBcUMsRUFBQTs7QUFFdkM7RUFDRSxpQkFBaUI7RUFDakIscUNBQXFDLEVBQUE7O0FBRXZDO0VBQ0UsaUJBQWlCO0VBQ2pCLHFDQUFxQyxFQUFBOztBQUV2QztFQUNFLGlCQUFpQjtFQUNqQixxQ0FBcUMsRUFBQTs7QUFFdkM7RUFDRSxrQkFBa0I7RUFDbEIscUNBQXFDLEVBQUE7O0FBRXZDO0VBQ0Usa0JBQWtCO0VBQ2xCLHFDQUFxQyxFQUFBOztBQUV2QztFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDBCQUEwQixFQUFBOztBQUU1QjtFQUNFLGtCQUFrQjtFQUNsQixPQUFPLEVBQUE7O0FBRVQ7RUFDRSx5QkFBeUI7RUFDekIsMkNBQTJDLEVBQUE7O0FBRTdDO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJDQUEyQyxFQUFBOztBQUU3QztFQUNFLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsb0VBQW9FLEVBQUE7O0FBRXRFO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixvRUFBb0UsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYnJlYWtwb2ludC10YWJsZXQ6IDc2OHB4O1xcclxcbiRicmVha3BvaW50LW1vYmlsZTogNTc2cHg7XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogQm9va1RpdGxlRGVzY3I7XFxyXFxuICBzcmM6IHVybChcXFwiLi4vZm9udC9QbGFpbiBNZWRpdW0gUmVndWxhci50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IEJvb2tQYXJEZXNjcjtcXHJcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250L1BsYWluLUxpZ2h0LnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1hcmdpblRvcCB7XFxyXFxuICAvL3BhZGRpbmctdG9wOiA1ZW07XFxyXFxuICBtYXJnaW4tdG9wOiAyZW07XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDJlbTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZTRhOTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uZm9vdGVyX2Jvb2sge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGhlaWdodDogMTB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGU0YTk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmltZyB7XFxyXFxuICB3aWR0aDogMTgwcHggIWltcG9ydGFudDtcXHJcXG4gIGhlaWdodDogMjgwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLmltZ19ib29rIHtcXHJcXG4gIHdpZHRoOiAzNTRweCAhaW1wb3J0YW50O1xcclxcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1tb2JpbGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC10YWJsZXQpIHtcXHJcXG4gIC5jb2wtNiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG4gIC5jYXJkIHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgfVxcclxcbiAgLmltZyxcXHJcXG4gIC5pbWdfYm9vayB7XFxyXFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxuICAgIGhlaWdodDogMjgwcHggIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1vYmlsZSkge1xcclxcbiAgLyojY29sbHBhc2VEZXNjcmlwdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfSovXFxyXFxuICAuZm9vdGVyX2Jvb2sge1xcclxcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMGVtO1xcclxcbiAgfVxcclxcbiAgLmNvbC02IHtcXHJcXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXHJcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xcclxcbiAgICAuY2FyZCB7XFxyXFxuICAgICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaW1nLFxcclxcbiAgLmltZ19ib29rIHtcXHJcXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXHJcXG4gICAgaGVpZ2h0OiAyODBweCAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKmNvbGxhcHNlKi9cXHJcXG4ubS1kLmV4cGFuZC1saXN0IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4ubS1kLmV4cGFuZC1saXN0ID4gbGkge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgcGFkZGluZzogMTVweCAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAvKiAgICAgICAgIG1heC13aWR0aDogODAlOyAqL1xcclxcbn1cXHJcXG4ubS1kIGxhYmVsW2NsYXNzXj1cXFwidGFiXFxcIl06aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ubS1kIGlucHV0IHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcbi5tLWQgaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcbi5tLWQgaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5tLWQgbGFiZWxbY2xhc3NePVxcXCJ0YWJcXFwiXSB7XFxyXFxuICBmb250LWZhbWlseTogQm9va1RpdGxlRGVzY3I7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4ubS1kIC5jb250ZW50IHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1heC1oZWlnaHQ6IDA7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIC8qICAgICAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7Ki9cXHJcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMTgwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4uY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLmNvbnRlbnQge1xcclxcbiAgZm9udC1mYW1pbHk6IEJvb2tQYXJEZXNjcjtcXHJcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cXHJcXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiMTAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcclxcbiAgbWF4LWhlaWdodDogMTAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiMjAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcclxcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiMzAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcclxcbiAgbWF4LWhlaWdodDogMzAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiNDAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcclxcbiAgbWF4LWhlaWdodDogNDAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiNTAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcclxcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiNjAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcclxcbiAgbWF4LWhlaWdodDogNjAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiNzAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcclxcbiAgbWF4LWhlaWdodDogNzAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiODAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcclxcbiAgbWF4LWhlaWdodDogODAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiOTAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcclxcbiAgbWF4LWhlaWdodDogOTAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiMTAwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMDBweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlLWluLW91dCAwbXM7XFxyXFxufVxcclxcbi5tLWQgbGlbZGF0YS1tZC1jb250ZW50PVxcXCJcXFwiXSBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAuY29udGVudCB7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tLWQgLm9wZW4tY2xvc2UtaWNvbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMjBweDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRleSgycHgpO1xcclxcbn1cXHJcXG4ubS1kIC5vcGVuLWNsb3NlLWljb24gaSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG4ubS1kIC5vcGVuLWNsb3NlLWljb24gLmZhLW1pbnVzIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5vcGVuLWNsb3NlLWljb24gLmZhLW1pbnVzIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLm0tZCAub3Blbi1jbG9zZS1pY29uIC5mYS1wbHVzIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MG1zIGxpbmVhciAwbXMsIHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dCAwbXM7XFxyXFxufVxcclxcbi5tLWQgaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLm9wZW4tY2xvc2UtaWNvbiAuZmEtcGx1cyB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwbXMgbGluZWFyIDBtcywgdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaGVyb19ib29rLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaGVyb19ib29rX21vYmlsZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmFsZXJ0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xcbiAgY29sb3I6IHdoaXRlOyB9XFxuICAuYWxlcnQgLmNsb3NlYnRuIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzOyB9XFxuICAuYWxlcnQgLmNsb3NlYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuXFxuc2VjdGlvbi5oZXJvIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyB9XFxuICBzZWN0aW9uLmhlcm8gLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7IH1cXG4gIHNlY3Rpb24uaGVybyAuY2FyZC10aXRsZSB7XFxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjJlbTsgfVxcbiAgc2VjdGlvbi5oZXJvIC5jYXJkLXN1YnRpdGxlIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuOGVtOyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICBzZWN0aW9uLmhlcm8ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hvbWUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFNQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYix5QkFYbUI7RUFZbkIsWUFBWSxFQUFBO0VBTmQ7SUFTSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7RUFoQnBCO0lBb0JJLFlBQVksRUFBQTs7QUFJaEI7RUFDRSx5REE5QndDO0VBK0J4QyxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCLEVBQUE7RUFON0I7SUFTSSxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QiwyQkFBMkIsRUFBQTtFQVovQjtJQWVJLHNCQUFzQjtJQUN0QixxQkFBcUIsRUFBQTtFQWhCekI7SUFtQkkscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0U7SUFDRSx5REFwRG1EO0lBcURuRCxzQkFBc0IsRUFBQSxFQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYWxlcnRfY29sb3I6ICNmNDQzMzY7XFxyXFxuJGltZ19oZXJvOiB1cmwoXFxcIi4uL2ltYWdlcy9oZXJvX2Jvb2suanBlZ1xcXCIpO1xcclxcbiRpbWdfaGVyb19tb2JpbGU6IHVybChcXFwiLi4vaW1hZ2VzL2hlcm9fYm9va19tb2JpbGUuanBnXFxcIik7XFxyXFxuJGJyZWFrcG9pbnQtdGFibGV0OiA3NjhweDtcXHJcXG4kYnJlYWtwb2ludC1tb2JpbGU6IDU3NnB4O1xcclxcblxcclxcbi5hbGVydCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFsZXJ0X2NvbG9yO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcblxcclxcbiAgLmNsb3NlYnRuIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNsb3NlYnRuOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmhlcm8ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogJGltZ19oZXJvO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG5cXHJcXG4gIC5jYXJkIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcbiAgLmNhcmQtdGl0bGUge1xcclxcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yZW07XFxyXFxuICB9XFxyXFxuICAuY2FyZC1zdWJ0aXRsZSB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjhlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1vYmlsZSkge1xcclxcbiAgc2VjdGlvbi5oZXJvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogJGltZ19oZXJvX21vYmlsZTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250L01lc3NpbmFTYW5zLWJsYWNrLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvTWFyay1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvTWVzc2luYVNhbnMtQm9vay50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEJBU0lDUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4vKioqKioqKioqKkZPTlQqKioqKioqKioqKiovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTmFtZUNhdGVnb3J5O1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IENhcmRUaXRsZTtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBDYXJkVGV4dDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7IH1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTkyYTIwOyB9XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG5cXG4jbmFtZUNhdGVnb3J5IHtcXG4gIGZvbnQtZmFtaWx5OiBOYW1lQ2F0ZWdvcnkgIWltcG9ydGFudDtcXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7IH1cXG5cXG4uY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlNGE5O1xcbiAgYm94LXNoYWRvdzogMnB4IDFweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC42KTsgfVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBDYXJkVGl0bGUgIWltcG9ydGFudDtcXG4gIGNvbG9yOiAjMjliMmUwICFpbXBvcnRhbnQ7IH1cXG5cXG4udGV4dC1tdXRlZCB7XFxuICBmb250LWZhbWlseTogQ2FyZFRleHQgIWltcG9ydGFudDtcXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgLypmb250LXN0eWxlOiBpdGFsaWM7Ki8gfVxcblxcbi5iYWNrLWhvbWUge1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG4gIC5iYWNrLWhvbWUgLmJ0biB7XFxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7IH1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gR0VORVJBTCBJQ09OUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi5pY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRlNGE5O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQsIGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgYm9yZGVyLXJhZGl1czogNWVtO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7IH1cXG5cXG4uaWNvbi1ucCB7XFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7IH1cXG5cXG4uaWNvbi1zbWFsbCB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDsgfVxcblxcbi5pY29uLW1lZGl1bSB7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDsgfVxcblxcbi5pY29uLWxhcmdlIHtcXG4gIHdpZHRoOiA0MnB4O1xcbiAgaGVpZ2h0OiA0MnB4OyB9XFxuXFxuLmljb24taHVnZSB7XFxuICB3aWR0aDogNjVweDtcXG4gIGhlaWdodDogNjVweDsgfVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xcbiAgLmljb24tc21hbGwge1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzNXB4OyB9XFxuICAuaWNvbi1tZWRpdW0ge1xcbiAgICB3aWR0aDogNDVweDtcXG4gICAgaGVpZ2h0OiA0NXB4OyB9XFxuICAuaWNvbi1sYXJnZSB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7IH0gfVxcblxcbi5pY29uIGltZyB7XFxuICBmaWx0ZXI6IGludmVydCgwKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi5pY29uLXNtYWxsIGltZyB7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDsgfVxcblxcbi5pY29uLW1lZGl1bSBpbWcge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7IH1cXG5cXG4uaWNvbi1sYXJnZSBpbWcge1xcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcXG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50OyB9XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XFxuICAuaWNvbi1zbWFsbCBpbWcge1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgaGVpZ2h0OiAxOHB4OyB9XFxuICAuaWNvbi1tZWRpdW0gaW1nIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDsgfVxcbiAgLmljb24tbGFyZ2UgaW1nIHtcXG4gICAgd2lkdGg6IDI1cHggIWltcG9ydGFudDtcXG4gICAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHVJQUFBO0FBZ0JBLDJCQUFBO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsK0RBQTRELEVBQUE7O0FBRzlEO0VBQ0Usc0JBQXNCO0VBQ3RCLCtEQUFvRCxFQUFBOztBQUd0RDtFQUNFLHFCQUFxQjtFQUNyQiwrREFBMkQsRUFBQTs7QUFHN0Q7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLHlCQWhDdUIsRUFBQTs7QUFrQ3pCO0VBQ0UscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0Usb0NBQW9DO0VBQ3BDLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLHlCQXBDdUI7RUFxQ3ZCLDhDQUE4QyxFQUFBOztBQUVoRDtFQUNFLGlDQUFpQztFQUNqQyx5QkFBNkIsRUFBQTs7QUFFL0I7RUFDRSxnQ0FBZ0M7RUFDaEMsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixzQkFBQSxFQUF1Qjs7QUFFekI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0VBRmI7SUFLSSxzQkFBc0IsRUFBQTs7QUFHMUIsMklBQUE7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIseUJBOUR1QjtFQStEdkIsc0RBQXNEO0VBQ3RELG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVksRUFBQTtFQUdkO0lBQ0UsV0FBVztJQUNYLFlBQVksRUFBQTtFQUdkO0lBQ0UsV0FBVztJQUNYLFlBQVksRUFBQSxFQUNiOztBQUdIO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdaO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBR2Q7SUFDRSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBR2Q7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCLEVBQUEsRUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQkFTSUNTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi8vJGJhY2tncm91bmRfY2FyZDogIzIxMjEyMTtcXHJcXG4kYmFja2dyb3VuZF9ib2R5OiAjMjkyZTMyO1xcclxcbiRiYWNrZ3JvdW5kX2JvZHk6ICNhNjhkNjU7XFxyXFxuJGJhY2tncm91bmRfYm9keTogI2Y0ZTRhOTtcXHJcXG4kYmFja2dyb3VuZF9ib2R5OiAjNTkyYTIwO1xcclxcblxcclxcbiRiYWNrZ3JvdW5kX2NhcmQ6IHJnYmEoNzMsIDczLCA3MywgMC44NjcpO1xcclxcbiRiYWNrZ3JvdW5kX2NhcmQ6ICMxMzE2Mjk7XFxyXFxuJGJhY2tncm91bmRfY2FyZDogIzIxMjEyMTtcXHJcXG4kYmFja2dyb3VuZF9jYXJkOiAjNDI4Mzk4O1xcclxcbiRiYWNrZ3JvdW5kX2NhcmQ6ICNmNGU0YTk7XFxyXFxuXFxyXFxuJGNhcmRfdGl0bGU6ICMyOWIyZTA7XFxyXFxuXFxyXFxuLyoqKioqKioqKipGT05UKioqKioqKioqKioqL1xcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IE5hbWVDYXRlZ29yeTtcXHJcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250L01lc3NpbmFTYW5zLWJsYWNrLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogQ2FyZFRpdGxlO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnQvTWFyay1Cb2xkLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogQ2FyZFRleHQ7XFxyXFxuICBzcmM6IHVybChcXFwiLi4vZm9udC9NZXNzaW5hU2Fucy1Cb29rLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZF9ib2R5O1xcclxcbn1cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuI25hbWVDYXRlZ29yeSB7XFxyXFxuICBmb250LWZhbWlseTogTmFtZUNhdGVnb3J5ICFpbXBvcnRhbnQ7XFxyXFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4uY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZF9jYXJkO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDFweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG59XFxyXFxuLmNhcmQtdGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6IENhcmRUaXRsZSAhaW1wb3J0YW50O1xcclxcbiAgY29sb3I6ICRjYXJkX3RpdGxlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi50ZXh0LW11dGVkIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBDYXJkVGV4dCAhaW1wb3J0YW50O1xcclxcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcXHJcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxyXFxuICAvKmZvbnQtc3R5bGU6IGl0YWxpYzsqL1xcclxcbn1cXHJcXG4uYmFjay1ob21lIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgLmJ0biB7XFxyXFxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBHRU5FUkFMIElDT05TIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kX2NhcmQ7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCwgYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1ZW07XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24tbnAge1xcclxcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcclxcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXHJcXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1zbWFsbCB7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24tbWVkaXVtIHtcXHJcXG4gIHdpZHRoOiAzNXB4O1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1sYXJnZSB7XFxyXFxuICB3aWR0aDogNDJweDtcXHJcXG4gIGhlaWdodDogNDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24taHVnZSB7XFxyXFxuICB3aWR0aDogNjVweDtcXHJcXG4gIGhlaWdodDogNjVweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XFxyXFxuICAuaWNvbi1zbWFsbCB7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaWNvbi1tZWRpdW0ge1xcclxcbiAgICB3aWR0aDogNDVweDtcXHJcXG4gICAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmljb24tbGFyZ2Uge1xcclxcbiAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiBpbWcge1xcclxcbiAgZmlsdGVyOiBpbnZlcnQoMCk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5pY29uLXNtYWxsIGltZyB7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24tbWVkaXVtIGltZyB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24tbGFyZ2UgaW1nIHtcXHJcXG4gIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XFxyXFxuICAuaWNvbi1zbWFsbCBpbWcge1xcclxcbiAgICB3aWR0aDogMThweDtcXHJcXG4gICAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmljb24tbWVkaXVtIGltZyB7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaWNvbi1sYXJnZSBpbWcge1xcclxcbiAgICB3aWR0aDogMjVweCAhaW1wb3J0YW50O1xcclxcbiAgICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXRlZ29yeS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2F0ZWdvcnkuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJhcHBcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBcIi4uL2Nzcy9ob21lLnNjc3NcIjtcclxuaW1wb3J0IFwiLi4vY3NzL21haW4uc2Nzc1wiO1xyXG5pbXBvcnQgXCIuLi9jc3MvY2F0ZWdvcnkuc2Nzc1wiO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=