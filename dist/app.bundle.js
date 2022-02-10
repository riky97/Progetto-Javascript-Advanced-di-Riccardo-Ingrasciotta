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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: BookTitleDescr;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\"); }\n\n@font-face {\n  font-family: BookParDescr;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\"); }\n\n.marginTop {\n  margin-top: 2em;\n  min-height: 100vh; }\n\n.card-title {\n  font-family: Verdana, Geneva, Tahoma, sans-serif; }\n\n.footer {\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  margin-top: 2em;\n  /*margin-bottom: 0;\r\n  margin-top: 10em;*/\n  color: #fff;\n  height: 10vh;\n  background-color: #212121; }\n\n.footer_book {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  color: #fff;\n  height: 10vh;\n  background-color: #212121; }\n\n.img {\n  width: 180px !important;\n  height: 280px !important; }\n\n.img_book {\n  width: 354px !important;\n  height: 100% !important; }\n\n@media (min-width: 576px) and (max-width: 768px) {\n  .col-6 {\n    display: flex !important;\n    justify-content: center !important; }\n  .card {\n    width: 300px; }\n  .img,\n  .img_book {\n    width: 100% !important;\n    height: 280px !important; } }\n\n@media (max-width: 576px) {\n  /*#collpaseDescription {\r\n    display: block;\r\n  }*/\n  .footer_book {\n    position: static;\n    margin-top: 10em; }\n  .col-6 {\n    width: 100% !important;\n    display: flex !important;\n    justify-content: center !important; }\n    .col-6 .card {\n      width: 300px; }\n  .img,\n  .img_book {\n    width: 100% !important;\n    height: 280px !important; } }\n\n/*collapse*/\n.m-d.expand-list {\n  margin: 0;\n  padding: 0;\n  color: #fff !important; }\n\n.m-d.expand-list > li {\n  list-style-type: none;\n  padding: 15px 0;\n  border-bottom: 1px solid #fff;\n  position: relative;\n  /*         max-width: 80%; */ }\n\n.m-d label[class^=\"tab\"]:hover {\n  cursor: pointer; }\n\n.m-d input {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.m-d input[class^=\"tab\"] {\n  width: 100%;\n  height: 40px;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.m-d input[class^=\"tab\"]:hover {\n  cursor: pointer; }\n\n.m-d label[class^=\"tab\"] {\n  font-family: BookTitleDescr;\n  color: #fff;\n  font-weight: bold; }\n\n.m-d .content {\n  height: auto;\n  max-height: 0;\n  max-width: 100%;\n  color: #fff;\n  /*        background: yellow;*/\n  overflow: scroll;\n  transform: translateY(20px);\n  transition: all 180ms ease-in-out 0ms; }\n\n.content::-webkit-scrollbar {\n  display: none; }\n\n.content {\n  font-family: BookParDescr;\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */ }\n\n.m-d li[data-md-content=\"100\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 100px;\n  transition: all 150ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"200\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 200px;\n  transition: all 200ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"300\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 300px;\n  transition: all 250ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"400\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 400px;\n  transition: all 250ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"500\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 500px;\n  transition: all 250ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"600\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 600px;\n  transition: all 250ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"700\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 700px;\n  transition: all 300ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"800\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 800px;\n  transition: all 300ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"900\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 900px;\n  transition: all 300ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"1000\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 1000px;\n  transition: all 350ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 1000px;\n  transition: all 250ms ease-in-out 0ms; }\n\n.m-d input[class^=\"tab\"]:checked ~ .content {\n  margin-bottom: 20px; }\n\n.m-d .open-close-icon {\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  transform: translatey(2px); }\n\n.m-d .open-close-icon i {\n  position: absolute;\n  left: 0; }\n\n.m-d .open-close-icon .fa-minus {\n  transform: rotate(-90deg);\n  transition: transform 150ms ease-in-out 0ms; }\n\n.m-d input[class^=\"tab\"]:checked ~ .open-close-icon .fa-minus {\n  transform: rotate(0deg);\n  transition: transform 150ms ease-in-out 0ms; }\n\n.m-d .open-close-icon .fa-plus {\n  opacity: 1;\n  transform: rotate(-90deg);\n  transition: opacity 50ms linear 0ms, transform 150ms ease-in-out 0ms; }\n\n.m-d input[class^=\"tab\"]:checked ~ .open-close-icon .fa-plus {\n  opacity: 0;\n  transform: rotate(0deg);\n  transition: opacity 50ms linear 0ms, transform 150ms ease-in-out 0ms; }\n", "",{"version":3,"sources":["webpack://./src/css/category.scss"],"names":[],"mappings":"AAGA;EACE,2BAA2B;EAC3B,+DAA+D,EAAA;;AAGjE;EACE,yBAAyB;EACzB,+DAAsD,EAAA;;AAGxD;EAEE,eAAe;EACf,iBAAiB,EAAA;;AAEnB;EACE,gDAAgD,EAAA;;AAElD;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,eAAe;EACf;oBALkB;EAOlB,WAAW;EACX,YAAY;EACZ,yBAAyB,EAAA;;AAE3B;EACE,eAAe;EACf,SAAS;EACT,WAAW;EAEX,WAAW;EACX,YAAY;EACZ,yBAAyB,EAAA;;AAG3B;EACE,uBAAuB;EACvB,wBAAwB,EAAA;;AAE1B;EACE,uBAAuB;EACvB,uBAAuB,EAAA;;AAGzB;EACE;IACE,wBAAwB;IACxB,kCAAkC,EAAA;EAEpC;IACE,YAAY,EAAA;EAEd;;IAEE,sBAAsB;IACtB,wBAAwB,EAAA,EACzB;;AAEH;EACE;;IAVE;EAaF;IACE,gBAAgB;IAChB,gBAAgB,EAAA;EAElB;IACE,sBAAsB;IACtB,wBAAwB;IACxB,kCAAkC,EAAA;IAHpC;MAKI,YAAY,EAAA;EAIhB;;IAEE,sBAAsB;IACtB,wBAAwB,EAAA,EACzB;;AAGH,WAAA;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB,EAAA;;AAExB;EACE,qBAAqB;EACrB,eAAe;EACf,6BAA6B;EAC7B,kBAAkB;EAClB,4BAAA,EAA6B;;AAE/B;EACE,eAAe,EAAA;;AAEjB;EACE,wBAAwB;EACxB,qBAAqB;EACrB,gBAAgB,EAAA;;AAElB;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,OAAO;EACP,MAAM,EAAA;;AAER;EACE,eAAe,EAAA;;AAEjB;EACE,2BAA2B;EAC3B,WAAW;EACX,iBAAiB,EAAA;;AAEnB;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,WAAW;EACX,8BAAA;EACA,gBAAgB;EAChB,2BAA2B;EAC3B,qCAAqC,EAAA;;AAEvC;EACE,aAAa,EAAA;;AAEf;EACE,yBAAyB;EACzB,wBAAwB;EAAE,gBAAA;EAC1B,qBAAqB;EAAE,YAAA,EAAa;;AAGtC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,kBAAkB;EAClB,qCAAqC,EAAA;;AAEvC;EACE,kBAAkB;EAClB,qCAAqC,EAAA;;AAEvC;EACE,mBAAmB,EAAA;;AAGrB;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;EACX,0BAA0B,EAAA;;AAE5B;EACE,kBAAkB;EAClB,OAAO,EAAA;;AAET;EACE,yBAAyB;EACzB,2CAA2C,EAAA;;AAE7C;EACE,uBAAuB;EACvB,2CAA2C,EAAA;;AAE7C;EACE,UAAU;EACV,yBAAyB;EACzB,oEAAoE,EAAA;;AAEtE;EACE,UAAU;EACV,uBAAuB;EACvB,oEAAoE,EAAA","sourcesContent":["$breakpoint-tablet: 768px;\r\n$breakpoint-mobile: 576px;\r\n\r\n@font-face {\r\n  font-family: BookTitleDescr;\r\n  src: url(\"../font/Plain Medium Regular.ttf\") format(\"truetype\");\r\n}\r\n\r\n@font-face {\r\n  font-family: BookParDescr;\r\n  src: url(\"../font/Plain-Light.ttf\") format(\"truetype\");\r\n}\r\n\r\n.marginTop {\r\n  //padding-top: 5em;\r\n  margin-top: 2em;\r\n  min-height: 100vh;\r\n}\r\n.card-title {\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n.footer {\r\n  position: relative;\r\n  bottom: 0;\r\n  width: 100%;\r\n  margin-top: 2em;\r\n  /*margin-bottom: 0;\r\n  margin-top: 10em;*/\r\n  color: #fff;\r\n  height: 10vh;\r\n  background-color: #212121;\r\n}\r\n.footer_book {\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n\r\n  color: #fff;\r\n  height: 10vh;\r\n  background-color: #212121;\r\n}\r\n\r\n.img {\r\n  width: 180px !important;\r\n  height: 280px !important;\r\n}\r\n.img_book {\r\n  width: 354px !important;\r\n  height: 100% !important;\r\n}\r\n\r\n@media (min-width: $breakpoint-mobile) and (max-width: $breakpoint-tablet) {\r\n  .col-6 {\r\n    display: flex !important;\r\n    justify-content: center !important;\r\n  }\r\n  .card {\r\n    width: 300px;\r\n  }\r\n  .img,\r\n  .img_book {\r\n    width: 100% !important;\r\n    height: 280px !important;\r\n  }\r\n}\r\n@media (max-width: $breakpoint-mobile) {\r\n  /*#collpaseDescription {\r\n    display: block;\r\n  }*/\r\n  .footer_book {\r\n    position: static;\r\n    margin-top: 10em;\r\n  }\r\n  .col-6 {\r\n    width: 100% !important;\r\n    display: flex !important;\r\n    justify-content: center !important;\r\n    .card {\r\n      width: 300px;\r\n    }\r\n  }\r\n\r\n  .img,\r\n  .img_book {\r\n    width: 100% !important;\r\n    height: 280px !important;\r\n  }\r\n}\r\n\r\n/*collapse*/\r\n.m-d.expand-list {\r\n  margin: 0;\r\n  padding: 0;\r\n  color: #fff !important;\r\n}\r\n.m-d.expand-list > li {\r\n  list-style-type: none;\r\n  padding: 15px 0;\r\n  border-bottom: 1px solid #fff;\r\n  position: relative;\r\n  /*         max-width: 80%; */\r\n}\r\n.m-d label[class^=\"tab\"]:hover {\r\n  cursor: pointer;\r\n}\r\n.m-d input {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n}\r\n.m-d input[class^=\"tab\"] {\r\n  width: 100%;\r\n  height: 40px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n.m-d input[class^=\"tab\"]:hover {\r\n  cursor: pointer;\r\n}\r\n.m-d label[class^=\"tab\"] {\r\n  font-family: BookTitleDescr;\r\n  color: #fff;\r\n  font-weight: bold;\r\n}\r\n.m-d .content {\r\n  height: auto;\r\n  max-height: 0;\r\n  max-width: 100%;\r\n  color: #fff;\r\n  /*        background: yellow;*/\r\n  overflow: scroll;\r\n  transform: translateY(20px);\r\n  transition: all 180ms ease-in-out 0ms;\r\n}\r\n.content::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n.content {\r\n  font-family: BookParDescr;\r\n  -ms-overflow-style: none; /* IE and Edge */\r\n  scrollbar-width: none; /* Firefox */\r\n}\r\n\r\n.m-d li[data-md-content=\"100\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 100px;\r\n  transition: all 150ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"200\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 200px;\r\n  transition: all 200ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"300\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 300px;\r\n  transition: all 250ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"400\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 400px;\r\n  transition: all 250ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"500\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 500px;\r\n  transition: all 250ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"600\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 600px;\r\n  transition: all 250ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"700\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 700px;\r\n  transition: all 300ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"800\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 800px;\r\n  transition: all 300ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"900\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 900px;\r\n  transition: all 300ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"1000\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 1000px;\r\n  transition: all 350ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 1000px;\r\n  transition: all 250ms ease-in-out 0ms;\r\n}\r\n.m-d input[class^=\"tab\"]:checked ~ .content {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.m-d .open-close-icon {\r\n  display: inline-block;\r\n  position: absolute;\r\n  right: 20px;\r\n  transform: translatey(2px);\r\n}\r\n.m-d .open-close-icon i {\r\n  position: absolute;\r\n  left: 0;\r\n}\r\n.m-d .open-close-icon .fa-minus {\r\n  transform: rotate(-90deg);\r\n  transition: transform 150ms ease-in-out 0ms;\r\n}\r\n.m-d input[class^=\"tab\"]:checked ~ .open-close-icon .fa-minus {\r\n  transform: rotate(0deg);\r\n  transition: transform 150ms ease-in-out 0ms;\r\n}\r\n.m-d .open-close-icon .fa-plus {\r\n  opacity: 1;\r\n  transform: rotate(-90deg);\r\n  transition: opacity 50ms linear 0ms, transform 150ms ease-in-out 0ms;\r\n}\r\n.m-d input[class^=\"tab\"]:checked ~ .open-close-icon .fa-plus {\r\n  opacity: 0;\r\n  transform: rotate(0deg);\r\n  transition: opacity 50ms linear 0ms, transform 150ms ease-in-out 0ms;\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/*--------------------------------------------------------- BASICS -------------------------------------------------------------------*/\n/**********FONT************/\n@font-face {\n  font-family: NameCategory;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\"); }\n\n@font-face {\n  font-family: CardTitle;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\"); }\n\n@font-face {\n  font-family: CardText;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"); }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nbody {\n  background-color: #292e32; }\n\na {\n  text-decoration: none; }\n\n#nameCategory {\n  font-family: NameCategory;\n  color: #fff !important; }\n\n.card {\n  background-color: #212121;\n  box-shadow: 2px 1px 5px 1px rgba(0, 0, 0, 0.6); }\n\n.card-title {\n  font-family: CardTitle !important;\n  color: #e8d639 !important; }\n\n.text-muted {\n  font-family: CardText !important;\n  color: #fff !important;\n  font-size: 0.8em;\n  /*font-style: italic;*/ }\n\n.back-home {\n  margin-bottom: 2em;\n  width: 100%;\n  color: white !important; }\n  .back-home .btn {\n    color: white !important; }\n\n/*---------------------------------------------------------- GENERAL ICONS ---------------------------------------------------------------*/\n.icon {\n  cursor: pointer;\n  background-color: #212121;\n  transition: all 0.2s ease-in-out, all 0.2s ease-in-out;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n  border-radius: 5em;\n  box-sizing: border-box;\n  color: #fff !important; }\n\n.icon-np {\n  padding: 0 !important;\n  width: auto !important;\n  height: auto !important; }\n\n.icon-small {\n  width: 25px;\n  height: 25px; }\n\n.icon-medium {\n  width: 35px;\n  height: 35px; }\n\n.icon-large {\n  width: 42px;\n  height: 42px; }\n\n.icon-huge {\n  width: 65px;\n  height: 65px; }\n\n@media (min-width: 900px) {\n  .icon-small {\n    width: 35px;\n    height: 35px; }\n  .icon-medium {\n    width: 45px;\n    height: 45px; }\n  .icon-large {\n    width: 60px;\n    height: 60px; } }\n\n.icon img {\n  filter: invert(1);\n  width: 100%;\n  height: 100%;\n  opacity: 1; }\n\n.icon-small img {\n  width: 15px;\n  height: 15px; }\n\n.icon-medium img {\n  width: 20px;\n  height: 20px; }\n\n.icon-large img {\n  width: 20px !important;\n  height: 20px !important; }\n\n@media (min-width: 900px) {\n  .icon-small img {\n    width: 18px;\n    height: 18px; }\n  .icon-medium img {\n    width: 20px;\n    height: 20px; }\n  .icon-large img {\n    width: 25px !important;\n    height: 25px !important; } }\n", "",{"version":3,"sources":["webpack://./src/css/main.scss"],"names":[],"mappings":"AAAA,uIAAA;AAQA,2BAAA;AACA;EACE,yBAAyB;EACzB,+DAA4D,EAAA;;AAG9D;EACE,sBAAsB;EACtB,+DAAoD,EAAA;;AAGtD;EACE,qBAAqB;EACrB,+DAA2D,EAAA;;AAG7D;EACE,SAAS;EACT,UAAU;EACV,sBAAsB,EAAA;;AAExB;EACE,yBA3BuB,EAAA;;AA6BzB;EACE,qBAAqB,EAAA;;AAEvB;EACE,yBAAyB;EACzB,sBAAsB,EAAA;;AAExB;EACE,yBAlCuB;EAmCvB,8CAA8C,EAAA;;AAEhD;EACE,iCAAiC;EACjC,yBAAyB,EAAA;;AAE3B;EACE,gCAAgC;EAChC,sBAAsB;EACtB,gBAAgB;EAChB,sBAAA,EAAuB;;AAEzB;EACE,kBAAkB;EAElB,WAAW;EACX,uBAAuB,EAAA;EAJzB;IAMI,uBAAuB,EAAA;;AAG3B,2IAAA;AAEA;EACE,eAAe;EACf,yBA5DuB;EA6DvB,sDAAsD;EACtD,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;EAClB,sBAAsB;EACtB,sBAAsB,EAAA;;AAGxB;EACE,qBAAqB;EACrB,sBAAsB;EACtB,uBAAuB,EAAA;;AAGzB;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE;IACE,WAAW;IACX,YAAY,EAAA;EAGd;IACE,WAAW;IACX,YAAY,EAAA;EAGd;IACE,WAAW;IACX,YAAY,EAAA,EACb;;AAGH;EACE,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,UAAU,EAAA;;AAGZ;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,sBAAsB;EACtB,uBAAuB,EAAA;;AAGzB;EACE;IACE,WAAW;IACX,YAAY,EAAA;EAGd;IACE,WAAW;IACX,YAAY,EAAA;EAGd;IACE,sBAAsB;IACtB,uBAAuB,EAAA,EACxB","sourcesContent":["/*--------------------------------------------------------- BASICS -------------------------------------------------------------------*/\r\n\r\n//$background_card: #212121;\r\n$background_body: #292e32;\r\n$background_card: rgba(73, 73, 73, 0.867);\r\n$background_card: #131629;\r\n$background_card: #212121;\r\n\r\n/**********FONT************/\r\n@font-face {\r\n  font-family: NameCategory;\r\n  src: url(\"../font/MessinaSans-black.ttf\") format(\"truetype\");\r\n}\r\n\r\n@font-face {\r\n  font-family: CardTitle;\r\n  src: url(\"../font/Mark-Bold.ttf\") format(\"truetype\");\r\n}\r\n\r\n@font-face {\r\n  font-family: CardText;\r\n  src: url(\"../font/MessinaSans-Book.ttf\") format(\"truetype\");\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  background-color: $background_body;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\n#nameCategory {\r\n  font-family: NameCategory;\r\n  color: #fff !important;\r\n}\r\n.card {\r\n  background-color: $background_card;\r\n  box-shadow: 2px 1px 5px 1px rgba(0, 0, 0, 0.6);\r\n}\r\n.card-title {\r\n  font-family: CardTitle !important;\r\n  color: #e8d639 !important;\r\n}\r\n.text-muted {\r\n  font-family: CardText !important;\r\n  color: #fff !important;\r\n  font-size: 0.8em;\r\n  /*font-style: italic;*/\r\n}\r\n.back-home {\r\n  margin-bottom: 2em;\r\n  //\r\n  width: 100%;\r\n  color: white !important;\r\n  .btn {\r\n    color: white !important;\r\n  }\r\n}\r\n/*---------------------------------------------------------- GENERAL ICONS ---------------------------------------------------------------*/\r\n\r\n.icon {\r\n  cursor: pointer;\r\n  background-color: $background_card;\r\n  transition: all 0.2s ease-in-out, all 0.2s ease-in-out;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  vertical-align: middle;\r\n  border-radius: 5em;\r\n  box-sizing: border-box;\r\n  color: #fff !important;\r\n}\r\n\r\n.icon-np {\r\n  padding: 0 !important;\r\n  width: auto !important;\r\n  height: auto !important;\r\n}\r\n\r\n.icon-small {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n.icon-medium {\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n\r\n.icon-large {\r\n  width: 42px;\r\n  height: 42px;\r\n}\r\n\r\n.icon-huge {\r\n  width: 65px;\r\n  height: 65px;\r\n}\r\n\r\n@media (min-width: 900px) {\r\n  .icon-small {\r\n    width: 35px;\r\n    height: 35px;\r\n  }\r\n\r\n  .icon-medium {\r\n    width: 45px;\r\n    height: 45px;\r\n  }\r\n\r\n  .icon-large {\r\n    width: 60px;\r\n    height: 60px;\r\n  }\r\n}\r\n\r\n.icon img {\r\n  filter: invert(1);\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 1;\r\n}\r\n\r\n.icon-small img {\r\n  width: 15px;\r\n  height: 15px;\r\n}\r\n\r\n.icon-medium img {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.icon-large img {\r\n  width: 20px !important;\r\n  height: 20px !important;\r\n}\r\n\r\n@media (min-width: 900px) {\r\n  .icon-small img {\r\n    width: 18px;\r\n    height: 18px;\r\n  }\r\n\r\n  .icon-medium img {\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n\r\n  .icon-large img {\r\n    width: 25px !important;\r\n    height: 25px !important;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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



/* 
<div
      class="position-absolute top-0"
      style="width: 100%; display: none"
      id="alert_category"
    >
      <div class="alert alert-danger" role="alert" style="text-align: center">
        The research returned no results
      </div>
    </div>

    <section class="hero">
      <div class="card" style="width: 20rem">
        <div class="card-body">
          <h1 class="card-title">ONLINE BOOK</h1>
          <h6 class="card-subtitle mb-2 text-muted">
            Welcome, search books by category
          </h6>
          <form method="get" action="" name="search_category" class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="fantasy, horror etc.."
              aria-label="Search"
              name="category"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
            <!--onclick="getBookCategory(document.getElementById('category').value)"-->
          </form>
        </div>
      </div>
      <div style="height: 10em"></div>
    </section>
*/

/*let img = axios
        .get(`https://covers.openlibrary.org/b/id/${ele.cover_id}-M.jpg`, {
          responseType: "arraybuffer",
        })
        .then((response) => {
          let image = btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          return `data:${response.headers[
            "content-type"
          ].toLowerCase()};base64,${image}`;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      Promise.all([img]).then((values) => {
        arrayBook.push({
          title: ele.title,
          key: ele.key,
          authors: ele.authors,
          image: values[0],
        });
      });*/

/*let author = axios
    .get(`https://openlibrary.org${response[1].key}.json`)
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  let img = axios
    .get(`https://covers.openlibrary.org/b/id/${author.covers[3]}-M.jpg`, {
      responseType: "arraybuffer",
    })
    .then((response) => {
      let image = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
      return `data:${response.headers[
        "content-type"
      ].toLowerCase()};base64,${image}`;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });*/

/*Promise.all([response /*, author, img]).then((value) => {
    console.log(typeof value[0]);
    if (value[0].lenght === 0) {
      return false;
    } else {
      let arrayBook = [];
      value[0].foarech((ele) => {
        arrayBook.push({ title: ele.title, key: ele.key, authors: ele.authors });
      });
      for (const [key, values] of Object.entries(value[0])) {
        let title = "";
        let workId = "";
        let author = [];
        if (key === "title") {
          title = values;
        }
        if (key === "key") {
          workId = values;
        }
        if (key === "authors") {
          author = values;
        }
        // arrayBook.push({ title: title, key: workId, authors: author });
      }
      console.log(arrayBook);
      /*let image = document.createElement("img");
      image.src = value[2];
  
      document.body.appendChild(image);
    }
  });*/
// Ricerca libri

/*
async function getImg(ele) {
  let img = await axios
    .get(`https://covers.openlibrary.org/b/id/${ele}-M.jpg`, {
      responseType: "arraybuffer",
    })
    .then((response) => {
      let image = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
      return `data:${response.headers[
        "content-type"
      ].toLowerCase()};base64,${image}`;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  //console.log("ss", img);
  return img;
}*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cnl3ZWJwYWNrLy4vc3JjL2Nzcy9jYXRlZ29yeS5zY3NzIiwid2VicGFjazovL3RyeXdlYnBhY2svLi9zcmMvY3NzL2hvbWUuc2NzcyIsIndlYnBhY2s6Ly90cnl3ZWJwYWNrLy4vc3JjL2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vdHJ5d2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdHJ5d2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdHJ5d2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RyeXdlYnBhY2svLi9zcmMvY3NzL2NhdGVnb3J5LnNjc3M/ODk1NyIsIndlYnBhY2s6Ly90cnl3ZWJwYWNrLy4vc3JjL2Nzcy9ob21lLnNjc3M/OTZhZSIsIndlYnBhY2s6Ly90cnl3ZWJwYWNrLy4vc3JjL2Nzcy9tYWluLnNjc3M/ZTlkYyIsIndlYnBhY2s6Ly90cnl3ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RyeXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RyeXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdHJ5d2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90cnl3ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdHJ5d2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RyeXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHJ5d2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90cnl3ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cnl3ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdHJ5d2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RyeXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cnl3ZWJwYWNrL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RyeXdlYnBhY2svd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdHJ5d2VicGFjay8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9QbGFpbiBNZWRpdW0gUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250L1BsYWluLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBCb29rVGl0bGVEZXNjcjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBCb29rUGFyRGVzY3I7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpOyB9XFxuXFxuLm1hcmdpblRvcCB7XFxuICBtYXJnaW4tdG9wOiAyZW07XFxuICBtaW4taGVpZ2h0OiAxMDB2aDsgfVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjsgfVxcblxcbi5mb290ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAyZW07XFxuICAvKm1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBtYXJnaW4tdG9wOiAxMGVtOyovXFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7IH1cXG5cXG4uZm9vdGVyX2Jvb2sge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7IH1cXG5cXG4uaW1nIHtcXG4gIHdpZHRoOiAxODBweCAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiAyODBweCAhaW1wb3J0YW50OyB9XFxuXFxuLmltZ19ib29rIHtcXG4gIHdpZHRoOiAzNTRweCAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbC02IHtcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50OyB9XFxuICAuY2FyZCB7XFxuICAgIHdpZHRoOiAzMDBweDsgfVxcbiAgLmltZyxcXG4gIC5pbWdfYm9vayB7XFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogMjgwcHggIWltcG9ydGFudDsgfSB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAvKiNjb2xscGFzZURlc2NyaXB0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9Ki9cXG4gIC5mb290ZXJfYm9vayB7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIG1hcmdpbi10b3A6IDEwZW07IH1cXG4gIC5jb2wtNiB7XFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDsgfVxcbiAgICAuY29sLTYgLmNhcmQge1xcbiAgICAgIHdpZHRoOiAzMDBweDsgfVxcbiAgLmltZyxcXG4gIC5pbWdfYm9vayB7XFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogMjgwcHggIWltcG9ydGFudDsgfSB9XFxuXFxuLypjb2xsYXBzZSovXFxuLm0tZC5leHBhbmQtbGlzdCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDsgfVxcblxcbi5tLWQuZXhwYW5kLWxpc3QgPiBsaSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC8qICAgICAgICAgbWF4LXdpZHRoOiA4MCU7ICovIH1cXG5cXG4ubS1kIGxhYmVsW2NsYXNzXj1cXFwidGFiXFxcIl06aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLm0tZCBpbnB1dCB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lOyB9XFxuXFxuLm0tZCBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDsgfVxcblxcbi5tLWQgaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ubS1kIGxhYmVsW2NsYXNzXj1cXFwidGFiXFxcIl0ge1xcbiAgZm9udC1mYW1pbHk6IEJvb2tUaXRsZURlc2NyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5tLWQgLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgLyogICAgICAgIGJhY2tncm91bmQ6IHllbGxvdzsqL1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gIHRyYW5zaXRpb246IGFsbCAxODBtcyBlYXNlLWluLW91dCAwbXM7IH1cXG5cXG4uY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5jb250ZW50IHtcXG4gIGZvbnQtZmFtaWx5OiBCb29rUGFyRGVzY3I7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxuICAvKiBJRSBhbmQgRWRnZSAqL1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgLyogRmlyZWZveCAqLyB9XFxuXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjEwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0IDBtczsgfVxcblxcbi5tLWQgbGlbZGF0YS1tZC1jb250ZW50PVxcXCIyMDBcXFwiXSBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAuY29udGVudCB7XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dCAwbXM7IH1cXG5cXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiMzAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcbiAgbWF4LWhlaWdodDogMzAwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgMG1zOyB9XFxuXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjQwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBtczsgfVxcblxcbi5tLWQgbGlbZGF0YS1tZC1jb250ZW50PVxcXCI1MDBcXFwiXSBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAuY29udGVudCB7XFxuICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dCAwbXM7IH1cXG5cXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiNjAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcbiAgbWF4LWhlaWdodDogNjAwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgMG1zOyB9XFxuXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjcwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXG4gIG1heC1oZWlnaHQ6IDcwMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0IDBtczsgfVxcblxcbi5tLWQgbGlbZGF0YS1tZC1jb250ZW50PVxcXCI4MDBcXFwiXSBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAuY29udGVudCB7XFxuICBtYXgtaGVpZ2h0OiA4MDBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dCAwbXM7IH1cXG5cXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiOTAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcbiAgbWF4LWhlaWdodDogOTAwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQgMG1zOyB9XFxuXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjEwMDBcXFwiXSBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAuY29udGVudCB7XFxuICBtYXgtaGVpZ2h0OiAxMDAwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMzUwbXMgZWFzZS1pbi1vdXQgMG1zOyB9XFxuXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIlxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXG4gIG1heC1oZWlnaHQ6IDEwMDBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dCAwbXM7IH1cXG5cXG4ubS1kIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cXG5cXG4ubS1kIC5vcGVuLWNsb3NlLWljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDIwcHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMnB4KTsgfVxcblxcbi5tLWQgLm9wZW4tY2xvc2UtaWNvbiBpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7IH1cXG5cXG4ubS1kIC5vcGVuLWNsb3NlLWljb24gLmZhLW1pbnVzIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQgMG1zOyB9XFxuXFxuLm0tZCBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAub3Blbi1jbG9zZS1pY29uIC5mYS1taW51cyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dCAwbXM7IH1cXG5cXG4ubS1kIC5vcGVuLWNsb3NlLWljb24gLmZhLXBsdXMge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwbXMgbGluZWFyIDBtcywgdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0IDBtczsgfVxcblxcbi5tLWQgaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLm9wZW4tY2xvc2UtaWNvbiAuZmEtcGx1cyB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwbXMgbGluZWFyIDBtcywgdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0IDBtczsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvY2F0ZWdvcnkuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLDJCQUEyQjtFQUMzQiwrREFBK0QsRUFBQTs7QUFHakU7RUFDRSx5QkFBeUI7RUFDekIsK0RBQXNELEVBQUE7O0FBR3hEO0VBRUUsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGdEQUFnRCxFQUFBOztBQUVsRDtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZjtvQkFMa0I7RUFPbEIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFdBQVc7RUFFWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0IsRUFBQTs7QUFFMUI7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsa0NBQWtDLEVBQUE7RUFFcEM7SUFDRSxZQUFZLEVBQUE7RUFFZDs7SUFFRSxzQkFBc0I7SUFDdEIsd0JBQXdCLEVBQUEsRUFDekI7O0FBRUg7RUFDRTs7SUFWRTtFQWFGO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQixFQUFBO0VBRWxCO0lBQ0Usc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixrQ0FBa0MsRUFBQTtJQUhwQztNQUtJLFlBQVksRUFBQTtFQUloQjs7SUFFRSxzQkFBc0I7SUFDdEIsd0JBQXdCLEVBQUEsRUFDekI7O0FBR0gsV0FBQTtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsNEJBQUEsRUFBNkI7O0FBRS9CO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU0sRUFBQTs7QUFFUjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCw4QkFBQTtFQUNBLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IscUNBQXFDLEVBQUE7O0FBRXZDO0VBQ0UsYUFBYSxFQUFBOztBQUVmO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUFFLGdCQUFBO0VBQzFCLHFCQUFxQjtFQUFFLFlBQUEsRUFBYTs7QUFHdEM7RUFDRSxpQkFBaUI7RUFDakIscUNBQXFDLEVBQUE7O0FBRXZDO0VBQ0UsaUJBQWlCO0VBQ2pCLHFDQUFxQyxFQUFBOztBQUV2QztFQUNFLGlCQUFpQjtFQUNqQixxQ0FBcUMsRUFBQTs7QUFFdkM7RUFDRSxpQkFBaUI7RUFDakIscUNBQXFDLEVBQUE7O0FBRXZDO0VBQ0UsaUJBQWlCO0VBQ2pCLHFDQUFxQyxFQUFBOztBQUV2QztFQUNFLGlCQUFpQjtFQUNqQixxQ0FBcUMsRUFBQTs7QUFFdkM7RUFDRSxpQkFBaUI7RUFDakIscUNBQXFDLEVBQUE7O0FBRXZDO0VBQ0UsaUJBQWlCO0VBQ2pCLHFDQUFxQyxFQUFBOztBQUV2QztFQUNFLGlCQUFpQjtFQUNqQixxQ0FBcUMsRUFBQTs7QUFFdkM7RUFDRSxrQkFBa0I7RUFDbEIscUNBQXFDLEVBQUE7O0FBRXZDO0VBQ0Usa0JBQWtCO0VBQ2xCLHFDQUFxQyxFQUFBOztBQUV2QztFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDBCQUEwQixFQUFBOztBQUU1QjtFQUNFLGtCQUFrQjtFQUNsQixPQUFPLEVBQUE7O0FBRVQ7RUFDRSx5QkFBeUI7RUFDekIsMkNBQTJDLEVBQUE7O0FBRTdDO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJDQUEyQyxFQUFBOztBQUU3QztFQUNFLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsb0VBQW9FLEVBQUE7O0FBRXRFO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixvRUFBb0UsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYnJlYWtwb2ludC10YWJsZXQ6IDc2OHB4O1xcclxcbiRicmVha3BvaW50LW1vYmlsZTogNTc2cHg7XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogQm9va1RpdGxlRGVzY3I7XFxyXFxuICBzcmM6IHVybChcXFwiLi4vZm9udC9QbGFpbiBNZWRpdW0gUmVndWxhci50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IEJvb2tQYXJEZXNjcjtcXHJcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250L1BsYWluLUxpZ2h0LnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1hcmdpblRvcCB7XFxyXFxuICAvL3BhZGRpbmctdG9wOiA1ZW07XFxyXFxuICBtYXJnaW4tdG9wOiAyZW07XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuLmNhcmQtdGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLXRvcDogMmVtO1xcclxcbiAgLyptYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgbWFyZ2luLXRvcDogMTBlbTsqL1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcclxcbn1cXHJcXG4uZm9vdGVyX2Jvb2sge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGhlaWdodDogMTB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxyXFxufVxcclxcblxcclxcbi5pbWcge1xcclxcbiAgd2lkdGg6IDE4MHB4ICFpbXBvcnRhbnQ7XFxyXFxuICBoZWlnaHQ6IDI4MHB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5pbWdfYm9vayB7XFxyXFxuICB3aWR0aDogMzU0cHggIWltcG9ydGFudDtcXHJcXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbW9iaWxlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtdGFibGV0KSB7XFxyXFxuICAuY29sLTYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuICAuY2FyZCB7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gIH1cXHJcXG4gIC5pbWcsXFxyXFxuICAuaW1nX2Jvb2sge1xcclxcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcclxcbiAgICBoZWlnaHQ6IDI4MHB4ICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tb2JpbGUpIHtcXHJcXG4gIC8qI2NvbGxwYXNlRGVzY3JpcHRpb24ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH0qL1xcclxcbiAgLmZvb3Rlcl9ib29rIHtcXHJcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBlbTtcXHJcXG4gIH1cXHJcXG4gIC5jb2wtNiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXHJcXG4gICAgLmNhcmQge1xcclxcbiAgICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmltZyxcXHJcXG4gIC5pbWdfYm9vayB7XFxyXFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxuICAgIGhlaWdodDogMjgwcHggIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLypjb2xsYXBzZSovXFxyXFxuLm0tZC5leHBhbmQtbGlzdCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLm0tZC5leHBhbmQtbGlzdCA+IGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDE1cHggMDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgLyogICAgICAgICBtYXgtd2lkdGg6IDgwJTsgKi9cXHJcXG59XFxyXFxuLm0tZCBsYWJlbFtjbGFzc149XFxcInRhYlxcXCJdOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLm0tZCBpbnB1dCB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG4ubS1kIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG4ubS1kIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ubS1kIGxhYmVsW2NsYXNzXj1cXFwidGFiXFxcIl0ge1xcclxcbiAgZm9udC1mYW1pbHk6IEJvb2tUaXRsZURlc2NyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLm0tZCAuY29udGVudCB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXgtaGVpZ2h0OiAwO1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICAvKiAgICAgICAgYmFja2dyb3VuZDogeWVsbG93OyovXFxyXFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDE4MG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLmNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5jb250ZW50IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBCb29rUGFyRGVzY3I7XFxyXFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXFxyXFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cXHJcXG59XFxyXFxuXFxyXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjEwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjIwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjMwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjQwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjUwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjYwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjcwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDcwMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjgwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDgwMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjkwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDkwMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjEwMDBcXFwiXSBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAuY29udGVudCB7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMzUwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcclxcbiAgbWF4LWhlaWdodDogMTAwMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLm0tZCBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAuY29udGVudCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubS1kIC5vcGVuLWNsb3NlLWljb24ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDIwcHg7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMnB4KTtcXHJcXG59XFxyXFxuLm0tZCAub3Blbi1jbG9zZS1pY29uIGkge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuLm0tZCAub3Blbi1jbG9zZS1pY29uIC5mYS1taW51cyB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLm0tZCBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAub3Blbi1jbG9zZS1pY29uIC5mYS1taW51cyB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dCAwbXM7XFxyXFxufVxcclxcbi5tLWQgLm9wZW4tY2xvc2UtaWNvbiAuZmEtcGx1cyB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTBtcyBsaW5lYXIgMG1zLCB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5vcGVuLWNsb3NlLWljb24gLmZhLXBsdXMge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MG1zIGxpbmVhciAwbXMsIHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dCAwbXM7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2hlcm9fYm9vay5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2hlcm9fYm9va19tb2JpbGUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5hbGVydCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcXG4gIGNvbG9yOiB3aGl0ZTsgfVxcbiAgLmFsZXJ0IC5jbG9zZWJ0biB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4zczsgfVxcbiAgLmFsZXJ0IC5jbG9zZWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTsgfVxcblxcbnNlY3Rpb24uaGVybyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxcbiAgc2VjdGlvbi5oZXJvIC5jYXJkIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50OyB9XFxuICBzZWN0aW9uLmhlcm8gLmNhcmQtdGl0bGUge1xcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yZW07IH1cXG4gIHNlY3Rpb24uaGVybyAuY2FyZC1zdWJ0aXRsZSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjhlbTsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgc2VjdGlvbi5oZXJvIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ob21lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBTUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IseUJBWG1CO0VBWW5CLFlBQVksRUFBQTtFQU5kO0lBU0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQixFQUFBO0VBaEJwQjtJQW9CSSxZQUFZLEVBQUE7O0FBSWhCO0VBQ0UseURBOUJ3QztFQStCeEMsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQixFQUFBO0VBTjdCO0lBU0ksa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsMkJBQTJCLEVBQUE7RUFaL0I7SUFlSSxzQkFBc0I7SUFDdEIscUJBQXFCLEVBQUE7RUFoQnpCO0lBbUJJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNFO0lBQ0UseURBcERtRDtJQXFEbkQsc0JBQXNCLEVBQUEsRUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGFsZXJ0X2NvbG9yOiAjZjQ0MzM2O1xcclxcbiRpbWdfaGVybzogdXJsKFxcXCIuLi9pbWFnZXMvaGVyb19ib29rLmpwZWdcXFwiKTtcXHJcXG4kaW1nX2hlcm9fbW9iaWxlOiB1cmwoXFxcIi4uL2ltYWdlcy9oZXJvX2Jvb2tfbW9iaWxlLmpwZ1xcXCIpO1xcclxcbiRicmVha3BvaW50LXRhYmxldDogNzY4cHg7XFxyXFxuJGJyZWFrcG9pbnQtbW9iaWxlOiA1NzZweDtcXHJcXG5cXHJcXG4uYWxlcnQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRhbGVydF9jb2xvcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG4gIC5jbG9zZWJ0biB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jbG9zZWJ0bjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5oZXJvIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6ICRpbWdfaGVybztcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAuY2FyZCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG4gIC5jYXJkLXRpdGxlIHtcXHJcXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDAuMmVtO1xcclxcbiAgfVxcclxcbiAgLmNhcmQtc3VidGl0bGUge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC44ZW07XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tb2JpbGUpIHtcXHJcXG4gIHNlY3Rpb24uaGVybyB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICRpbWdfaGVyb19tb2JpbGU7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9NZXNzaW5hU2Fucy1ibGFjay50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250L01hcmstQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250L01lc3NpbmFTYW5zLUJvb2sudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBCQVNJQ1MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLyoqKioqKioqKipGT05UKioqKioqKioqKioqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IE5hbWVDYXRlZ29yeTtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBDYXJkVGl0bGU7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogQ2FyZFRleHQ7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpOyB9XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MmUzMjsgfVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuXFxuI25hbWVDYXRlZ29yeSB7XFxuICBmb250LWZhbWlseTogTmFtZUNhdGVnb3J5O1xcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDsgfVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxuICBib3gtc2hhZG93OiAycHggMXB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjYpOyB9XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IENhcmRUaXRsZSAhaW1wb3J0YW50O1xcbiAgY29sb3I6ICNlOGQ2MzkgIWltcG9ydGFudDsgfVxcblxcbi50ZXh0LW11dGVkIHtcXG4gIGZvbnQtZmFtaWx5OiBDYXJkVGV4dCAhaW1wb3J0YW50O1xcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICAvKmZvbnQtc3R5bGU6IGl0YWxpYzsqLyB9XFxuXFxuLmJhY2staG9tZSB7XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyB9XFxuICAuYmFjay1ob21lIC5idG4ge1xcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsgfVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBHRU5FUkFMIElDT05TIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLmljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0LCBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50OyB9XFxuXFxuLmljb24tbnAge1xcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50OyB9XFxuXFxuLmljb24tc21hbGwge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7IH1cXG5cXG4uaWNvbi1tZWRpdW0ge1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDM1cHg7IH1cXG5cXG4uaWNvbi1sYXJnZSB7XFxuICB3aWR0aDogNDJweDtcXG4gIGhlaWdodDogNDJweDsgfVxcblxcbi5pY29uLWh1Z2Uge1xcbiAgd2lkdGg6IDY1cHg7XFxuICBoZWlnaHQ6IDY1cHg7IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcXG4gIC5pY29uLXNtYWxsIHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDsgfVxcbiAgLmljb24tbWVkaXVtIHtcXG4gICAgd2lkdGg6IDQ1cHg7XFxuICAgIGhlaWdodDogNDVweDsgfVxcbiAgLmljb24tbGFyZ2Uge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4OyB9IH1cXG5cXG4uaWNvbiBpbWcge1xcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4uaWNvbi1zbWFsbCBpbWcge1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7IH1cXG5cXG4uaWNvbi1tZWRpdW0gaW1nIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4OyB9XFxuXFxuLmljb24tbGFyZ2UgaW1nIHtcXG4gIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDsgfVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xcbiAgLmljb24tc21hbGwgaW1nIHtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIGhlaWdodDogMThweDsgfVxcbiAgLmljb24tbWVkaXVtIGltZyB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7IH1cXG4gIC5pY29uLWxhcmdlIGltZyB7XFxuICAgIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogMjVweCAhaW1wb3J0YW50OyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx1SUFBQTtBQVFBLDJCQUFBO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsK0RBQTRELEVBQUE7O0FBRzlEO0VBQ0Usc0JBQXNCO0VBQ3RCLCtEQUFvRCxFQUFBOztBQUd0RDtFQUNFLHFCQUFxQjtFQUNyQiwrREFBMkQsRUFBQTs7QUFHN0Q7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLHlCQTNCdUIsRUFBQTs7QUE2QnpCO0VBQ0UscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLHlCQWxDdUI7RUFtQ3ZCLDhDQUE4QyxFQUFBOztBQUVoRDtFQUNFLGlDQUFpQztFQUNqQyx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxnQ0FBZ0M7RUFDaEMsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixzQkFBQSxFQUF1Qjs7QUFFekI7RUFDRSxrQkFBa0I7RUFFbEIsV0FBVztFQUNYLHVCQUF1QixFQUFBO0VBSnpCO0lBTUksdUJBQXVCLEVBQUE7O0FBRzNCLDJJQUFBO0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBNUR1QjtFQTZEdkIsc0RBQXNEO0VBQ3RELG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVksRUFBQTtFQUdkO0lBQ0UsV0FBVztJQUNYLFlBQVksRUFBQTtFQUdkO0lBQ0UsV0FBVztJQUNYLFlBQVksRUFBQSxFQUNiOztBQUdIO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdaO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBR2Q7SUFDRSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBR2Q7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCLEVBQUEsRUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQkFTSUNTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi8vJGJhY2tncm91bmRfY2FyZDogIzIxMjEyMTtcXHJcXG4kYmFja2dyb3VuZF9ib2R5OiAjMjkyZTMyO1xcclxcbiRiYWNrZ3JvdW5kX2NhcmQ6IHJnYmEoNzMsIDczLCA3MywgMC44NjcpO1xcclxcbiRiYWNrZ3JvdW5kX2NhcmQ6ICMxMzE2Mjk7XFxyXFxuJGJhY2tncm91bmRfY2FyZDogIzIxMjEyMTtcXHJcXG5cXHJcXG4vKioqKioqKioqKkZPTlQqKioqKioqKioqKiovXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogTmFtZUNhdGVnb3J5O1xcclxcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnQvTWVzc2luYVNhbnMtYmxhY2sudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBDYXJkVGl0bGU7XFxyXFxuICBzcmM6IHVybChcXFwiLi4vZm9udC9NYXJrLUJvbGQudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBDYXJkVGV4dDtcXHJcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250L01lc3NpbmFTYW5zLUJvb2sudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kX2JvZHk7XFxyXFxufVxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG4jbmFtZUNhdGVnb3J5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBOYW1lQ2F0ZWdvcnk7XFxyXFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4uY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZF9jYXJkO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDFweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG59XFxyXFxuLmNhcmQtdGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6IENhcmRUaXRsZSAhaW1wb3J0YW50O1xcclxcbiAgY29sb3I6ICNlOGQ2MzkgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLnRleHQtbXV0ZWQge1xcclxcbiAgZm9udC1mYW1pbHk6IENhcmRUZXh0ICFpbXBvcnRhbnQ7XFxyXFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcclxcbiAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gIC8qZm9udC1zdHlsZTogaXRhbGljOyovXFxyXFxufVxcclxcbi5iYWNrLWhvbWUge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcclxcbiAgLy9cXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxyXFxuICAuYnRuIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBHRU5FUkFMIElDT05TIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmRfY2FyZDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0LCBhbGwgMC4ycyBlYXNlLWluLW91dDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVlbTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1ucCB7XFxyXFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxyXFxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcclxcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5pY29uLXNtYWxsIHtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1tZWRpdW0ge1xcclxcbiAgd2lkdGg6IDM1cHg7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbi5pY29uLWxhcmdlIHtcXHJcXG4gIHdpZHRoOiA0MnB4O1xcclxcbiAgaGVpZ2h0OiA0MnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1odWdlIHtcXHJcXG4gIHdpZHRoOiA2NXB4O1xcclxcbiAgaGVpZ2h0OiA2NXB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcXHJcXG4gIC5pY29uLXNtYWxsIHtcXHJcXG4gICAgd2lkdGg6IDM1cHg7XFxyXFxuICAgIGhlaWdodDogMzVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pY29uLW1lZGl1bSB7XFxyXFxuICAgIHdpZHRoOiA0NXB4O1xcclxcbiAgICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaWNvbi1sYXJnZSB7XFxyXFxuICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5pY29uIGltZyB7XFxyXFxuICBmaWx0ZXI6IGludmVydCgxKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24tc21hbGwgaW1nIHtcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1tZWRpdW0gaW1nIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1sYXJnZSBpbWcge1xcclxcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcXHJcXG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcXHJcXG4gIC5pY29uLXNtYWxsIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxOHB4O1xcclxcbiAgICBoZWlnaHQ6IDE4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaWNvbi1tZWRpdW0gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pY29uLWxhcmdlIGltZyB7XFxyXFxuICAgIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhdGVnb3J5LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXRlZ29yeS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImFwcFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IFwiLi4vY3NzL2hvbWUuc2Nzc1wiO1xyXG5pbXBvcnQgXCIuLi9jc3MvbWFpbi5zY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9jYXRlZ29yeS5zY3NzXCI7XHJcblxyXG4vKiBcclxuPGRpdlxyXG4gICAgICBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIHRvcC0wXCJcclxuICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJTsgZGlzcGxheTogbm9uZVwiXHJcbiAgICAgIGlkPVwiYWxlcnRfY2F0ZWdvcnlcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXJcIj5cclxuICAgICAgICBUaGUgcmVzZWFyY2ggcmV0dXJuZWQgbm8gcmVzdWx0c1xyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiaGVyb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIHN0eWxlPVwid2lkdGg6IDIwcmVtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzPVwiY2FyZC10aXRsZVwiPk9OTElORSBCT09LPC9oMT5cclxuICAgICAgICAgIDxoNiBjbGFzcz1cImNhcmQtc3VidGl0bGUgbWItMiB0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgIFdlbGNvbWUsIHNlYXJjaCBib29rcyBieSBjYXRlZ29yeVxyXG4gICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDxmb3JtIG1ldGhvZD1cImdldFwiIGFjdGlvbj1cIlwiIG5hbWU9XCJzZWFyY2hfY2F0ZWdvcnlcIiBjbGFzcz1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBtZS0yXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImZhbnRhc3ksIGhvcnJvciBldGMuLlwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImNhdGVnb3J5XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPCEtLW9uY2xpY2s9XCJnZXRCb29rQ2F0ZWdvcnkoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3J5JykudmFsdWUpXCItLT5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDEwZW1cIj48L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuKi9cclxuXHJcbi8qbGV0IGltZyA9IGF4aW9zXHJcbiAgICAgICAgLmdldChgaHR0cHM6Ly9jb3ZlcnMub3BlbmxpYnJhcnkub3JnL2IvaWQvJHtlbGUuY292ZXJfaWR9LU0uanBnYCwge1xyXG4gICAgICAgICAgcmVzcG9uc2VUeXBlOiBcImFycmF5YnVmZmVyXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGxldCBpbWFnZSA9IGJ0b2EoXHJcbiAgICAgICAgICAgIG5ldyBVaW50OEFycmF5KHJlc3BvbnNlLmRhdGEpLnJlZHVjZShcclxuICAgICAgICAgICAgICAoZGF0YSwgYnl0ZSkgPT4gZGF0YSArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSksXHJcbiAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgcmV0dXJuIGBkYXRhOiR7cmVzcG9uc2UuaGVhZGVyc1tcclxuICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIlxyXG4gICAgICAgICAgXS50b0xvd2VyQ2FzZSgpfTtiYXNlNjQsJHtpbWFnZX1gO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgLy8gaGFuZGxlIGVycm9yXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIFByb21pc2UuYWxsKFtpbWddKS50aGVuKCh2YWx1ZXMpID0+IHtcclxuICAgICAgICBhcnJheUJvb2sucHVzaCh7XHJcbiAgICAgICAgICB0aXRsZTogZWxlLnRpdGxlLFxyXG4gICAgICAgICAga2V5OiBlbGUua2V5LFxyXG4gICAgICAgICAgYXV0aG9yczogZWxlLmF1dGhvcnMsXHJcbiAgICAgICAgICBpbWFnZTogdmFsdWVzWzBdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTsqL1xyXG4vKmxldCBhdXRob3IgPSBheGlvc1xyXG4gICAgLmdldChgaHR0cHM6Ly9vcGVubGlicmFyeS5vcmcke3Jlc3BvbnNlWzFdLmtleX0uanNvbmApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAvLyBoYW5kbGUgZXJyb3JcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSk7XHJcblxyXG4gIGxldCBpbWcgPSBheGlvc1xyXG4gICAgLmdldChgaHR0cHM6Ly9jb3ZlcnMub3BlbmxpYnJhcnkub3JnL2IvaWQvJHthdXRob3IuY292ZXJzWzNdfS1NLmpwZ2AsIHtcclxuICAgICAgcmVzcG9uc2VUeXBlOiBcImFycmF5YnVmZmVyXCIsXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGxldCBpbWFnZSA9IGJ0b2EoXHJcbiAgICAgICAgbmV3IFVpbnQ4QXJyYXkocmVzcG9uc2UuZGF0YSkucmVkdWNlKFxyXG4gICAgICAgICAgKGRhdGEsIGJ5dGUpID0+IGRhdGEgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUpLFxyXG4gICAgICAgICAgXCJcIlxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIGBkYXRhOiR7cmVzcG9uc2UuaGVhZGVyc1tcclxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiXHJcbiAgICAgIF0udG9Mb3dlckNhc2UoKX07YmFzZTY0LCR7aW1hZ2V9YDtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIC8vIGhhbmRsZSBlcnJvclxyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KTsqL1xyXG5cclxuLypQcm9taXNlLmFsbChbcmVzcG9uc2UgLyosIGF1dGhvciwgaW1nXSkudGhlbigodmFsdWUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHR5cGVvZiB2YWx1ZVswXSk7XHJcbiAgICBpZiAodmFsdWVbMF0ubGVuZ2h0ID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBhcnJheUJvb2sgPSBbXTtcclxuICAgICAgdmFsdWVbMF0uZm9hcmVjaCgoZWxlKSA9PiB7XHJcbiAgICAgICAgYXJyYXlCb29rLnB1c2goeyB0aXRsZTogZWxlLnRpdGxlLCBrZXk6IGVsZS5rZXksIGF1dGhvcnM6IGVsZS5hdXRob3JzIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZXNdIG9mIE9iamVjdC5lbnRyaWVzKHZhbHVlWzBdKSkge1xyXG4gICAgICAgIGxldCB0aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgbGV0IHdvcmtJZCA9IFwiXCI7XHJcbiAgICAgICAgbGV0IGF1dGhvciA9IFtdO1xyXG4gICAgICAgIGlmIChrZXkgPT09IFwidGl0bGVcIikge1xyXG4gICAgICAgICAgdGl0bGUgPSB2YWx1ZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXkgPT09IFwia2V5XCIpIHtcclxuICAgICAgICAgIHdvcmtJZCA9IHZhbHVlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleSA9PT0gXCJhdXRob3JzXCIpIHtcclxuICAgICAgICAgIGF1dGhvciA9IHZhbHVlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gYXJyYXlCb29rLnB1c2goeyB0aXRsZTogdGl0bGUsIGtleTogd29ya0lkLCBhdXRob3JzOiBhdXRob3IgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coYXJyYXlCb29rKTtcclxuICAgICAgLypsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICBpbWFnZS5zcmMgPSB2YWx1ZVsyXTtcclxuICBcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICB9XHJcbiAgfSk7Ki9cclxuXHJcbi8vIFJpY2VyY2EgbGlicmlcclxuLypcclxuYXN5bmMgZnVuY3Rpb24gZ2V0SW1nKGVsZSkge1xyXG4gIGxldCBpbWcgPSBhd2FpdCBheGlvc1xyXG4gICAgLmdldChgaHR0cHM6Ly9jb3ZlcnMub3BlbmxpYnJhcnkub3JnL2IvaWQvJHtlbGV9LU0uanBnYCwge1xyXG4gICAgICByZXNwb25zZVR5cGU6IFwiYXJyYXlidWZmZXJcIixcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgbGV0IGltYWdlID0gYnRvYShcclxuICAgICAgICBuZXcgVWludDhBcnJheShyZXNwb25zZS5kYXRhKS5yZWR1Y2UoXHJcbiAgICAgICAgICAoZGF0YSwgYnl0ZSkgPT4gZGF0YSArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSksXHJcbiAgICAgICAgICBcIlwiXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gYGRhdGE6JHtyZXNwb25zZS5oZWFkZXJzW1xyXG4gICAgICAgIFwiY29udGVudC10eXBlXCJcclxuICAgICAgXS50b0xvd2VyQ2FzZSgpfTtiYXNlNjQsJHtpbWFnZX1gO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgLy8gaGFuZGxlIGVycm9yXHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pO1xyXG4gIC8vY29uc29sZS5sb2coXCJzc1wiLCBpbWcpO1xyXG4gIHJldHVybiBpbWc7XHJcbn0qL1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=