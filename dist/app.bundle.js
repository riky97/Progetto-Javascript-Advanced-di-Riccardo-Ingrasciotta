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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".marginTop {\n  margin-top: 2em;\n  min-height: 100vh; }\n\n.card-title {\n  font-family: Verdana, Geneva, Tahoma, sans-serif; }\n\n.footer {\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  margin-top: 2em;\n  /*margin-bottom: 0;\r\n  margin-top: 10em;*/\n  color: #fff;\n  height: 10vh;\n  background-color: #212121; }\n\n.footer_book {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  margin-top: 10em;\n  color: #fff;\n  height: 10vh;\n  background-color: #212121; }\n\n.img {\n  width: 180px !important;\n  height: 280px !important; }\n\n.img_book {\n  width: 354px !important;\n  height: 100% !important; }\n\n@media (min-width: 576px) and (max-width: 768px) {\n  .col-6 {\n    display: flex !important;\n    justify-content: center !important; }\n  .card {\n    width: 300px; }\n  .img,\n  .img_book {\n    width: 100% !important;\n    height: 280px !important; } }\n\n@media (max-width: 576px) {\n  /*#collpaseDescription {\r\n    display: block;\r\n  }*/\n  .footer_book {\n    position: static;\n    margin-top: 9em; }\n  .col-6 {\n    width: 100% !important;\n    display: flex !important;\n    justify-content: center !important; }\n    .col-6 .card {\n      width: 300px; }\n  .img,\n  .img_book {\n    width: 100% !important;\n    height: 280px !important; } }\n\n/*collapse*/\n.m-d.expand-list {\n  margin: 0;\n  padding: 0;\n  color: #fff !important; }\n\n.m-d.expand-list > li {\n  list-style-type: none;\n  padding: 15px 0;\n  border-bottom: 1px solid #fff;\n  position: relative;\n  /*         max-width: 80%; */ }\n\n.m-d label[class^=\"tab\"]:hover {\n  cursor: pointer; }\n\n.m-d input {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.m-d input[class^=\"tab\"] {\n  width: 100%;\n  height: 40px;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.m-d input[class^=\"tab\"]:hover {\n  cursor: pointer; }\n\n.m-d label[class^=\"tab\"] {\n  color: #fff;\n  font-weight: bold; }\n\n.m-d .content {\n  height: auto;\n  max-height: 0;\n  max-width: 100%;\n  color: #fff;\n  /*        background: yellow;*/\n  overflow: scroll;\n  transform: translateY(20px);\n  transition: all 180ms ease-in-out 0ms; }\n\n.content::-webkit-scrollbar {\n  display: none; }\n\n.content {\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */ }\n\n.m-d li[data-md-content=\"100\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 100px;\n  transition: all 150ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"200\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 200px;\n  transition: all 200ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"300\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 300px;\n  transition: all 250ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"400\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 400px;\n  transition: all 250ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"500\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 500px;\n  transition: all 250ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"600\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 600px;\n  transition: all 250ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"700\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 700px;\n  transition: all 300ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"800\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 800px;\n  transition: all 300ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"900\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 900px;\n  transition: all 300ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"1000\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 1000px;\n  transition: all 350ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 1000px;\n  transition: all 250ms ease-in-out 0ms; }\n\n.m-d input[class^=\"tab\"]:checked ~ .content {\n  margin-bottom: 20px; }\n\n.m-d .open-close-icon {\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  transform: translatey(2px); }\n\n.m-d .open-close-icon i {\n  position: absolute;\n  left: 0; }\n\n.m-d .open-close-icon .fa-minus {\n  transform: rotate(-90deg);\n  transition: transform 150ms ease-in-out 0ms; }\n\n.m-d input[class^=\"tab\"]:checked ~ .open-close-icon .fa-minus {\n  transform: rotate(0deg);\n  transition: transform 150ms ease-in-out 0ms; }\n\n.m-d .open-close-icon .fa-plus {\n  opacity: 1;\n  transform: rotate(-90deg);\n  transition: opacity 50ms linear 0ms, transform 150ms ease-in-out 0ms; }\n\n.m-d input[class^=\"tab\"]:checked ~ .open-close-icon .fa-plus {\n  opacity: 0;\n  transform: rotate(0deg);\n  transition: opacity 50ms linear 0ms, transform 150ms ease-in-out 0ms; }\n", "",{"version":3,"sources":["webpack://./src/css/category.scss"],"names":[],"mappings":"AAGA;EAEE,eAAe;EACf,iBAAiB,EAAA;;AAEnB;EACE,gDAAgD,EAAA;;AAElD;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,eAAe;EACf;oBAHkB;EAKlB,WAAW;EACX,YAAY;EACZ,yBAAyB,EAAA;;AAE3B;EACE,eAAe;EACf,SAAS;EACT,WAAW;EACX,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,yBAAyB,EAAA;;AAG3B;EACE,uBAAuB;EACvB,wBAAwB,EAAA;;AAE1B;EACE,uBAAuB;EACvB,uBAAuB,EAAA;;AAGzB;EACE;IACE,wBAAwB;IACxB,kCAAkC,EAAA;EAEpC;IACE,YAAY,EAAA;EAEd;;IAEE,sBAAsB;IACtB,wBAAwB,EAAA,EACzB;;AAEH;EACE;;IAPE;EAUF;IACE,gBAAgB;IAChB,eAAe,EAAA;EAEjB;IACE,sBAAsB;IACtB,wBAAwB;IACxB,kCAAkC,EAAA;IAHpC;MAKI,YAAY,EAAA;EAIhB;;IAEE,sBAAsB;IACtB,wBAAwB,EAAA,EACzB;;AAGH,WAAA;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB,EAAA;;AAExB;EACE,qBAAqB;EACrB,eAAe;EACf,6BAA6B;EAC7B,kBAAkB;EAClB,4BAAA,EAA6B;;AAE/B;EACE,eAAe,EAAA;;AAEjB;EACE,wBAAwB;EACxB,qBAAqB;EACrB,gBAAgB,EAAA;;AAElB;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,OAAO;EACP,MAAM,EAAA;;AAER;EACE,eAAe,EAAA;;AAEjB;EACE,WAAW;EACX,iBAAiB,EAAA;;AAEnB;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,WAAW;EACX,8BAAA;EACA,gBAAgB;EAChB,2BAA2B;EAC3B,qCAAqC,EAAA;;AAEvC;EACE,aAAa,EAAA;;AAEf;EACE,wBAAwB;EAAE,gBAAA;EAC1B,qBAAqB;EAAE,YAAA,EAAa;;AAGtC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,kBAAkB;EAClB,qCAAqC,EAAA;;AAEvC;EACE,kBAAkB;EAClB,qCAAqC,EAAA;;AAEvC;EACE,mBAAmB,EAAA;;AAGrB;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;EACX,0BAA0B,EAAA;;AAE5B;EACE,kBAAkB;EAClB,OAAO,EAAA;;AAET;EACE,yBAAyB;EACzB,2CAA2C,EAAA;;AAE7C;EACE,uBAAuB;EACvB,2CAA2C,EAAA;;AAE7C;EACE,UAAU;EACV,yBAAyB;EACzB,oEAAoE,EAAA;;AAEtE;EACE,UAAU;EACV,uBAAuB;EACvB,oEAAoE,EAAA","sourcesContent":["$breakpoint-tablet: 768px;\r\n$breakpoint-mobile: 576px;\r\n\r\n.marginTop {\r\n  //padding-top: 5em;\r\n  margin-top: 2em;\r\n  min-height: 100vh;\r\n}\r\n.card-title {\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n.footer {\r\n  position: relative;\r\n  bottom: 0;\r\n  width: 100%;\r\n  margin-top: 2em;\r\n  /*margin-bottom: 0;\r\n  margin-top: 10em;*/\r\n  color: #fff;\r\n  height: 10vh;\r\n  background-color: #212121;\r\n}\r\n.footer_book {\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  margin-top: 10em;\r\n  color: #fff;\r\n  height: 10vh;\r\n  background-color: #212121;\r\n}\r\n\r\n.img {\r\n  width: 180px !important;\r\n  height: 280px !important;\r\n}\r\n.img_book {\r\n  width: 354px !important;\r\n  height: 100% !important;\r\n}\r\n\r\n@media (min-width: $breakpoint-mobile) and (max-width: $breakpoint-tablet) {\r\n  .col-6 {\r\n    display: flex !important;\r\n    justify-content: center !important;\r\n  }\r\n  .card {\r\n    width: 300px;\r\n  }\r\n  .img,\r\n  .img_book {\r\n    width: 100% !important;\r\n    height: 280px !important;\r\n  }\r\n}\r\n@media (max-width: $breakpoint-mobile) {\r\n  /*#collpaseDescription {\r\n    display: block;\r\n  }*/\r\n  .footer_book {\r\n    position: static;\r\n    margin-top: 9em;\r\n  }\r\n  .col-6 {\r\n    width: 100% !important;\r\n    display: flex !important;\r\n    justify-content: center !important;\r\n    .card {\r\n      width: 300px;\r\n    }\r\n  }\r\n\r\n  .img,\r\n  .img_book {\r\n    width: 100% !important;\r\n    height: 280px !important;\r\n  }\r\n}\r\n\r\n/*collapse*/\r\n.m-d.expand-list {\r\n  margin: 0;\r\n  padding: 0;\r\n  color: #fff !important;\r\n}\r\n.m-d.expand-list > li {\r\n  list-style-type: none;\r\n  padding: 15px 0;\r\n  border-bottom: 1px solid #fff;\r\n  position: relative;\r\n  /*         max-width: 80%; */\r\n}\r\n.m-d label[class^=\"tab\"]:hover {\r\n  cursor: pointer;\r\n}\r\n.m-d input {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n}\r\n.m-d input[class^=\"tab\"] {\r\n  width: 100%;\r\n  height: 40px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n.m-d input[class^=\"tab\"]:hover {\r\n  cursor: pointer;\r\n}\r\n.m-d label[class^=\"tab\"] {\r\n  color: #fff;\r\n  font-weight: bold;\r\n}\r\n.m-d .content {\r\n  height: auto;\r\n  max-height: 0;\r\n  max-width: 100%;\r\n  color: #fff;\r\n  /*        background: yellow;*/\r\n  overflow: scroll;\r\n  transform: translateY(20px);\r\n  transition: all 180ms ease-in-out 0ms;\r\n}\r\n.content::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n.content {\r\n  -ms-overflow-style: none; /* IE and Edge */\r\n  scrollbar-width: none; /* Firefox */\r\n}\r\n\r\n.m-d li[data-md-content=\"100\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 100px;\r\n  transition: all 150ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"200\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 200px;\r\n  transition: all 200ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"300\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 300px;\r\n  transition: all 250ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"400\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 400px;\r\n  transition: all 250ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"500\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 500px;\r\n  transition: all 250ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"600\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 600px;\r\n  transition: all 250ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"700\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 700px;\r\n  transition: all 300ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"800\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 800px;\r\n  transition: all 300ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"900\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 900px;\r\n  transition: all 300ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"1000\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 1000px;\r\n  transition: all 350ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 1000px;\r\n  transition: all 250ms ease-in-out 0ms;\r\n}\r\n.m-d input[class^=\"tab\"]:checked ~ .content {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.m-d .open-close-icon {\r\n  display: inline-block;\r\n  position: absolute;\r\n  right: 20px;\r\n  transform: translatey(2px);\r\n}\r\n.m-d .open-close-icon i {\r\n  position: absolute;\r\n  left: 0;\r\n}\r\n.m-d .open-close-icon .fa-minus {\r\n  transform: rotate(-90deg);\r\n  transition: transform 150ms ease-in-out 0ms;\r\n}\r\n.m-d input[class^=\"tab\"]:checked ~ .open-close-icon .fa-minus {\r\n  transform: rotate(0deg);\r\n  transition: transform 150ms ease-in-out 0ms;\r\n}\r\n.m-d .open-close-icon .fa-plus {\r\n  opacity: 1;\r\n  transform: rotate(-90deg);\r\n  transition: opacity 50ms linear 0ms, transform 150ms ease-in-out 0ms;\r\n}\r\n.m-d input[class^=\"tab\"]:checked ~ .open-close-icon .fa-plus {\r\n  opacity: 0;\r\n  transform: rotate(0deg);\r\n  transition: opacity 50ms linear 0ms, transform 150ms ease-in-out 0ms;\r\n}\r\n"],"sourceRoot":""}]);
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*--------------------------------------------------------- BASICS -------------------------------------------------------------------*/\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nbody {\n  background-color: #292e32; }\n\na {\n  text-decoration: none; }\n\n#nameCategory {\n  color: #fff !important; }\n\n.card {\n  background-color: #212121;\n  box-shadow: 2px 1px 5px 1px rgba(0, 0, 0, 0.6); }\n\n.card-title {\n  font-family: Verdana, Geneva, Tahoma, sans-serif !important;\n  color: #e8d639 !important; }\n\n.text-muted {\n  color: #fff !important;\n  font-size: 0.8em;\n  font-style: italic; }\n\n.back-home {\n  margin-bottom: 2em;\n  background-color: #212121;\n  width: 100%;\n  color: white !important; }\n  .back-home .btn {\n    color: white !important; }\n\n/*---------------------------------------------------------- GENERAL ICONS ---------------------------------------------------------------*/\n.icon {\n  cursor: pointer;\n  transition: all 0.2s ease-in-out, all 0.2s ease-in-out;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n  border-radius: 50%;\n  box-sizing: border-box;\n  color: #fff !important; }\n\n.icon-np {\n  padding: 0 !important;\n  width: auto !important;\n  height: auto !important; }\n\n.icon-small {\n  width: 25px;\n  height: 25px; }\n\n.icon-medium {\n  width: 35px;\n  height: 35px; }\n\n.icon-large {\n  width: 42px;\n  height: 42px; }\n\n.icon-huge {\n  width: 65px;\n  height: 65px; }\n\n@media (min-width: 900px) {\n  .icon-small {\n    width: 35px;\n    height: 35px; }\n  .icon-medium {\n    width: 45px;\n    height: 45px; }\n  .icon-large {\n    width: 60px;\n    height: 60px; } }\n\n.icon img {\n  filter: invert(1);\n  width: 100%;\n  height: 100%;\n  opacity: 1; }\n\n.icon-small img {\n  width: 15px;\n  height: 15px; }\n\n.icon-medium img {\n  width: 20px;\n  height: 20px; }\n\n.icon-large img {\n  width: 20px !important;\n  height: 20px !important; }\n\n@media (min-width: 900px) {\n  .icon-small img {\n    width: 18px;\n    height: 18px; }\n  .icon-medium img {\n    width: 20px;\n    height: 20px; }\n  .icon-large img {\n    width: 25px !important;\n    height: 25px !important; } }\n", "",{"version":3,"sources":["webpack://./src/css/main.scss"],"names":[],"mappings":"AAAA,uIAAA;AAOA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB,EAAA;;AAExB;EACE,yBAVuB,EAAA;;AAYzB;EACE,qBAAqB,EAAA;;AAEvB;EACE,sBAAsB,EAAA;;AAExB;EACE,yBAhBuB;EAiBvB,8CAA8C,EAAA;;AAEhD;EACE,2DAA2D;EAC3D,yBAAyB,EAAA;;AAE3B;EACE,sBAAsB;EACtB,gBAAgB;EAChB,kBAAkB,EAAA;;AAEpB;EACE,kBAAkB;EAClB,yBA9BuB;EA+BvB,WAAW;EACX,uBAAuB,EAAA;EAJzB;IAMI,uBAAuB,EAAA;;AAG3B,2IAAA;AACA;EACE,eAAe;EACf,sDAAsD;EACtD,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;EAClB,sBAAsB;EACtB,sBAAsB,EAAA;;AAGxB;EACE,qBAAqB;EACrB,sBAAsB;EACtB,uBAAuB,EAAA;;AAGzB;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE;IACE,WAAW;IACX,YAAY,EAAA;EAGd;IACE,WAAW;IACX,YAAY,EAAA;EAGd;IACE,WAAW;IACX,YAAY,EAAA,EACb;;AAGH;EACE,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,UAAU,EAAA;;AAGZ;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,sBAAsB;EACtB,uBAAuB,EAAA;;AAGzB;EACE;IACE,WAAW;IACX,YAAY,EAAA;EAGd;IACE,WAAW;IACX,YAAY,EAAA;EAGd;IACE,sBAAsB;IACtB,uBAAuB,EAAA,EACxB","sourcesContent":["/*--------------------------------------------------------- BASICS -------------------------------------------------------------------*/\r\n\r\n//$background_card: #212121;\r\n$background_body: #292e32;\r\n$background_card: rgba(73, 73, 73, 0.867);\r\n$background_card: #131629;\r\n$background_card: #212121;\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  background-color: $background_body;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\n#nameCategory {\r\n  color: #fff !important;\r\n}\r\n.card {\r\n  background-color: $background_card;\r\n  box-shadow: 2px 1px 5px 1px rgba(0, 0, 0, 0.6);\r\n}\r\n.card-title {\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif !important;\r\n  color: #e8d639 !important;\r\n}\r\n.text-muted {\r\n  color: #fff !important;\r\n  font-size: 0.8em;\r\n  font-style: italic;\r\n}\r\n.back-home {\r\n  margin-bottom: 2em;\r\n  background-color: $background_card;\r\n  width: 100%;\r\n  color: white !important;\r\n  .btn {\r\n    color: white !important;\r\n  }\r\n}\r\n/*---------------------------------------------------------- GENERAL ICONS ---------------------------------------------------------------*/\r\n.icon {\r\n  cursor: pointer;\r\n  transition: all 0.2s ease-in-out, all 0.2s ease-in-out;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  vertical-align: middle;\r\n  border-radius: 50%;\r\n  box-sizing: border-box;\r\n  color: #fff !important;\r\n}\r\n\r\n.icon-np {\r\n  padding: 0 !important;\r\n  width: auto !important;\r\n  height: auto !important;\r\n}\r\n\r\n.icon-small {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n.icon-medium {\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n\r\n.icon-large {\r\n  width: 42px;\r\n  height: 42px;\r\n}\r\n\r\n.icon-huge {\r\n  width: 65px;\r\n  height: 65px;\r\n}\r\n\r\n@media (min-width: 900px) {\r\n  .icon-small {\r\n    width: 35px;\r\n    height: 35px;\r\n  }\r\n\r\n  .icon-medium {\r\n    width: 45px;\r\n    height: 45px;\r\n  }\r\n\r\n  .icon-large {\r\n    width: 60px;\r\n    height: 60px;\r\n  }\r\n}\r\n\r\n.icon img {\r\n  filter: invert(1);\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 1;\r\n}\r\n\r\n.icon-small img {\r\n  width: 15px;\r\n  height: 15px;\r\n}\r\n\r\n.icon-medium img {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.icon-large img {\r\n  width: 20px !important;\r\n  height: 20px !important;\r\n}\r\n\r\n@media (min-width: 900px) {\r\n  .icon-small img {\r\n    width: 18px;\r\n    height: 18px;\r\n  }\r\n\r\n  .icon-medium img {\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n\r\n  .icon-large img {\r\n    width: 25px !important;\r\n    height: 25px !important;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RyeXdlYnBhY2svLi9zcmMvY3NzL2NhdGVnb3J5LnNjc3MiLCJ3ZWJwYWNrOi8vdHJ5d2VicGFjay8uL3NyYy9jc3MvaG9tZS5zY3NzIiwid2VicGFjazovL3RyeXdlYnBhY2svLi9zcmMvY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly90cnl3ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90cnl3ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90cnl3ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdHJ5d2VicGFjay8uL3NyYy9jc3MvY2F0ZWdvcnkuc2Nzcz84OTU3Iiwid2VicGFjazovL3RyeXdlYnBhY2svLi9zcmMvY3NzL2hvbWUuc2Nzcz85NmFlIiwid2VicGFjazovL3RyeXdlYnBhY2svLi9zcmMvY3NzL21haW4uc2Nzcz9lOWRjIiwid2VicGFjazovL3RyeXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdHJ5d2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdHJ5d2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90cnl3ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RyeXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90cnl3ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdHJ5d2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cnl3ZWJwYWNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RyeXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RyeXdlYnBhY2svd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90cnl3ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHJ5d2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RyeXdlYnBhY2svd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdHJ5d2VicGFjay93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90cnl3ZWJwYWNrLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1hcmdpblRvcCB7XFxuICBtYXJnaW4tdG9wOiAyZW07XFxuICBtaW4taGVpZ2h0OiAxMDB2aDsgfVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjsgfVxcblxcbi5mb290ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAyZW07XFxuICAvKm1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBtYXJnaW4tdG9wOiAxMGVtOyovXFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7IH1cXG5cXG4uZm9vdGVyX2Jvb2sge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxMGVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxOyB9XFxuXFxuLmltZyB7XFxuICB3aWR0aDogMTgwcHggIWltcG9ydGFudDtcXG4gIGhlaWdodDogMjgwcHggIWltcG9ydGFudDsgfVxcblxcbi5pbWdfYm9vayB7XFxuICB3aWR0aDogMzU0cHggIWltcG9ydGFudDtcXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50OyB9XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5jb2wtNiB7XFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDsgfVxcbiAgLmNhcmQge1xcbiAgICB3aWR0aDogMzAwcHg7IH1cXG4gIC5pbWcsXFxuICAuaW1nX2Jvb2sge1xcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgICBoZWlnaHQ6IDI4MHB4ICFpbXBvcnRhbnQ7IH0gfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgLyojY29sbHBhc2VEZXNjcmlwdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfSovXFxuICAuZm9vdGVyX2Jvb2sge1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICBtYXJnaW4tdG9wOiA5ZW07IH1cXG4gIC5jb2wtNiB7XFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDsgfVxcbiAgICAuY29sLTYgLmNhcmQge1xcbiAgICAgIHdpZHRoOiAzMDBweDsgfVxcbiAgLmltZyxcXG4gIC5pbWdfYm9vayB7XFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogMjgwcHggIWltcG9ydGFudDsgfSB9XFxuXFxuLypjb2xsYXBzZSovXFxuLm0tZC5leHBhbmQtbGlzdCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDsgfVxcblxcbi5tLWQuZXhwYW5kLWxpc3QgPiBsaSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC8qICAgICAgICAgbWF4LXdpZHRoOiA4MCU7ICovIH1cXG5cXG4ubS1kIGxhYmVsW2NsYXNzXj1cXFwidGFiXFxcIl06aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLm0tZCBpbnB1dCB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lOyB9XFxuXFxuLm0tZCBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDsgfVxcblxcbi5tLWQgaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ubS1kIGxhYmVsW2NsYXNzXj1cXFwidGFiXFxcIl0ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5tLWQgLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgLyogICAgICAgIGJhY2tncm91bmQ6IHllbGxvdzsqL1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gIHRyYW5zaXRpb246IGFsbCAxODBtcyBlYXNlLWluLW91dCAwbXM7IH1cXG5cXG4uY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5jb250ZW50IHtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG4gIC8qIElFIGFuZCBFZGdlICovXFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICAvKiBGaXJlZm94ICovIH1cXG5cXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiMTAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcbiAgbWF4LWhlaWdodDogMTAwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQgMG1zOyB9XFxuXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjIwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0IDBtczsgfVxcblxcbi5tLWQgbGlbZGF0YS1tZC1jb250ZW50PVxcXCIzMDBcXFwiXSBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAuY29udGVudCB7XFxuICBtYXgtaGVpZ2h0OiAzMDBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dCAwbXM7IH1cXG5cXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiNDAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcbiAgbWF4LWhlaWdodDogNDAwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgMG1zOyB9XFxuXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjUwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBtczsgfVxcblxcbi5tLWQgbGlbZGF0YS1tZC1jb250ZW50PVxcXCI2MDBcXFwiXSBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAuY29udGVudCB7XFxuICBtYXgtaGVpZ2h0OiA2MDBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dCAwbXM7IH1cXG5cXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiNzAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcbiAgbWF4LWhlaWdodDogNzAwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQgMG1zOyB9XFxuXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjgwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXG4gIG1heC1oZWlnaHQ6IDgwMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0IDBtczsgfVxcblxcbi5tLWQgbGlbZGF0YS1tZC1jb250ZW50PVxcXCI5MDBcXFwiXSBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAuY29udGVudCB7XFxuICBtYXgtaGVpZ2h0OiA5MDBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dCAwbXM7IH1cXG5cXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiMTAwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXG4gIG1heC1oZWlnaHQ6IDEwMDBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlLWluLW91dCAwbXM7IH1cXG5cXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcbiAgbWF4LWhlaWdodDogMTAwMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBtczsgfVxcblxcbi5tLWQgaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxcblxcbi5tLWQgLm9wZW4tY2xvc2UtaWNvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMjBweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRleSgycHgpOyB9XFxuXFxuLm0tZCAub3Blbi1jbG9zZS1pY29uIGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDsgfVxcblxcbi5tLWQgLm9wZW4tY2xvc2UtaWNvbiAuZmEtbWludXMge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dCAwbXM7IH1cXG5cXG4ubS1kIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5vcGVuLWNsb3NlLWljb24gLmZhLW1pbnVzIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0IDBtczsgfVxcblxcbi5tLWQgLm9wZW4tY2xvc2UtaWNvbiAuZmEtcGx1cyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTBtcyBsaW5lYXIgMG1zLCB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQgMG1zOyB9XFxuXFxuLm0tZCBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAub3Blbi1jbG9zZS1pY29uIC5mYS1wbHVzIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTBtcyBsaW5lYXIgMG1zLCB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQgMG1zOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9jYXRlZ29yeS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBRUUsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGdEQUFnRCxFQUFBOztBQUVsRDtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZjtvQkFIa0I7RUFLbEIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQXdCLEVBQUE7O0FBRTFCO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLGtDQUFrQyxFQUFBO0VBRXBDO0lBQ0UsWUFBWSxFQUFBO0VBRWQ7O0lBRUUsc0JBQXNCO0lBQ3RCLHdCQUF3QixFQUFBLEVBQ3pCOztBQUVIO0VBQ0U7O0lBUEU7RUFVRjtJQUNFLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7RUFFakI7SUFDRSxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLGtDQUFrQyxFQUFBO0lBSHBDO01BS0ksWUFBWSxFQUFBO0VBSWhCOztJQUVFLHNCQUFzQjtJQUN0Qix3QkFBd0IsRUFBQSxFQUN6Qjs7QUFHSCxXQUFBO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQiw0QkFBQSxFQUE2Qjs7QUFFL0I7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTSxFQUFBOztBQUVSO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsOEJBQUE7RUFDQSxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLHFDQUFxQyxFQUFBOztBQUV2QztFQUNFLGFBQWEsRUFBQTs7QUFFZjtFQUNFLHdCQUF3QjtFQUFFLGdCQUFBO0VBQzFCLHFCQUFxQjtFQUFFLFlBQUEsRUFBYTs7QUFHdEM7RUFDRSxpQkFBaUI7RUFDakIscUNBQXFDLEVBQUE7O0FBRXZDO0VBQ0UsaUJBQWlCO0VBQ2pCLHFDQUFxQyxFQUFBOztBQUV2QztFQUNFLGlCQUFpQjtFQUNqQixxQ0FBcUMsRUFBQTs7QUFFdkM7RUFDRSxpQkFBaUI7RUFDakIscUNBQXFDLEVBQUE7O0FBRXZDO0VBQ0UsaUJBQWlCO0VBQ2pCLHFDQUFxQyxFQUFBOztBQUV2QztFQUNFLGlCQUFpQjtFQUNqQixxQ0FBcUMsRUFBQTs7QUFFdkM7RUFDRSxpQkFBaUI7RUFDakIscUNBQXFDLEVBQUE7O0FBRXZDO0VBQ0UsaUJBQWlCO0VBQ2pCLHFDQUFxQyxFQUFBOztBQUV2QztFQUNFLGlCQUFpQjtFQUNqQixxQ0FBcUMsRUFBQTs7QUFFdkM7RUFDRSxrQkFBa0I7RUFDbEIscUNBQXFDLEVBQUE7O0FBRXZDO0VBQ0Usa0JBQWtCO0VBQ2xCLHFDQUFxQyxFQUFBOztBQUV2QztFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDBCQUEwQixFQUFBOztBQUU1QjtFQUNFLGtCQUFrQjtFQUNsQixPQUFPLEVBQUE7O0FBRVQ7RUFDRSx5QkFBeUI7RUFDekIsMkNBQTJDLEVBQUE7O0FBRTdDO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJDQUEyQyxFQUFBOztBQUU3QztFQUNFLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsb0VBQW9FLEVBQUE7O0FBRXRFO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixvRUFBb0UsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYnJlYWtwb2ludC10YWJsZXQ6IDc2OHB4O1xcclxcbiRicmVha3BvaW50LW1vYmlsZTogNTc2cHg7XFxyXFxuXFxyXFxuLm1hcmdpblRvcCB7XFxyXFxuICAvL3BhZGRpbmctdG9wOiA1ZW07XFxyXFxuICBtYXJnaW4tdG9wOiAyZW07XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuLmNhcmQtdGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLXRvcDogMmVtO1xcclxcbiAgLyptYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgbWFyZ2luLXRvcDogMTBlbTsqL1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcclxcbn1cXHJcXG4uZm9vdGVyX2Jvb2sge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tdG9wOiAxMGVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nIHtcXHJcXG4gIHdpZHRoOiAxODBweCAhaW1wb3J0YW50O1xcclxcbiAgaGVpZ2h0OiAyODBweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4uaW1nX2Jvb2sge1xcclxcbiAgd2lkdGg6IDM1NHB4ICFpbXBvcnRhbnQ7XFxyXFxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1vYmlsZSkgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXRhYmxldCkge1xcclxcbiAgLmNvbC02IHtcXHJcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcbiAgLmNhcmQge1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICB9XFxyXFxuICAuaW1nLFxcclxcbiAgLmltZ19ib29rIHtcXHJcXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXHJcXG4gICAgaGVpZ2h0OiAyODBweCAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbW9iaWxlKSB7XFxyXFxuICAvKiNjb2xscGFzZURlc2NyaXB0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9Ki9cXHJcXG4gIC5mb290ZXJfYm9vayB7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuICAgIG1hcmdpbi10b3A6IDllbTtcXHJcXG4gIH1cXHJcXG4gIC5jb2wtNiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXHJcXG4gICAgLmNhcmQge1xcclxcbiAgICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmltZyxcXHJcXG4gIC5pbWdfYm9vayB7XFxyXFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxuICAgIGhlaWdodDogMjgwcHggIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLypjb2xsYXBzZSovXFxyXFxuLm0tZC5leHBhbmQtbGlzdCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLm0tZC5leHBhbmQtbGlzdCA+IGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDE1cHggMDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgLyogICAgICAgICBtYXgtd2lkdGg6IDgwJTsgKi9cXHJcXG59XFxyXFxuLm0tZCBsYWJlbFtjbGFzc149XFxcInRhYlxcXCJdOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLm0tZCBpbnB1dCB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG4ubS1kIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG4ubS1kIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ubS1kIGxhYmVsW2NsYXNzXj1cXFwidGFiXFxcIl0ge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLm0tZCAuY29udGVudCB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXgtaGVpZ2h0OiAwO1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICAvKiAgICAgICAgYmFja2dyb3VuZDogeWVsbG93OyovXFxyXFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDE4MG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLmNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5jb250ZW50IHtcXHJcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cXHJcXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xcclxcbn1cXHJcXG5cXHJcXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiMTAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcclxcbiAgbWF4LWhlaWdodDogMTAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiMjAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcclxcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiMzAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcclxcbiAgbWF4LWhlaWdodDogMzAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiNDAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcclxcbiAgbWF4LWhlaWdodDogNDAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiNTAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcclxcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiNjAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcclxcbiAgbWF4LWhlaWdodDogNjAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiNzAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcclxcbiAgbWF4LWhlaWdodDogNzAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiODAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcclxcbiAgbWF4LWhlaWdodDogODAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiOTAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcclxcbiAgbWF4LWhlaWdodDogOTAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiMTAwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMDBweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlLWluLW91dCAwbXM7XFxyXFxufVxcclxcbi5tLWQgbGlbZGF0YS1tZC1jb250ZW50PVxcXCJcXFwiXSBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAuY29udGVudCB7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tLWQgLm9wZW4tY2xvc2UtaWNvbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMjBweDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRleSgycHgpO1xcclxcbn1cXHJcXG4ubS1kIC5vcGVuLWNsb3NlLWljb24gaSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG4ubS1kIC5vcGVuLWNsb3NlLWljb24gLmZhLW1pbnVzIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5vcGVuLWNsb3NlLWljb24gLmZhLW1pbnVzIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLm0tZCAub3Blbi1jbG9zZS1pY29uIC5mYS1wbHVzIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MG1zIGxpbmVhciAwbXMsIHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dCAwbXM7XFxyXFxufVxcclxcbi5tLWQgaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLm9wZW4tY2xvc2UtaWNvbiAuZmEtcGx1cyB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwbXMgbGluZWFyIDBtcywgdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaGVyb19ib29rLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaGVyb19ib29rX21vYmlsZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmFsZXJ0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xcbiAgY29sb3I6IHdoaXRlOyB9XFxuICAuYWxlcnQgLmNsb3NlYnRuIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzOyB9XFxuICAuYWxlcnQgLmNsb3NlYnRuOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuXFxuc2VjdGlvbi5oZXJvIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyB9XFxuICBzZWN0aW9uLmhlcm8gLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7IH1cXG4gIHNlY3Rpb24uaGVybyAuY2FyZC10aXRsZSB7XFxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjJlbTsgfVxcbiAgc2VjdGlvbi5oZXJvIC5jYXJkLXN1YnRpdGxlIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuOGVtOyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICBzZWN0aW9uLmhlcm8ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hvbWUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFNQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYix5QkFYbUI7RUFZbkIsWUFBWSxFQUFBO0VBTmQ7SUFTSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7RUFoQnBCO0lBb0JJLFlBQVksRUFBQTs7QUFJaEI7RUFDRSx5REE5QndDO0VBK0J4QyxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCLEVBQUE7RUFON0I7SUFTSSxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QiwyQkFBMkIsRUFBQTtFQVovQjtJQWVJLHNCQUFzQjtJQUN0QixxQkFBcUIsRUFBQTtFQWhCekI7SUFtQkkscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0U7SUFDRSx5REFwRG1EO0lBcURuRCxzQkFBc0IsRUFBQSxFQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYWxlcnRfY29sb3I6ICNmNDQzMzY7XFxyXFxuJGltZ19oZXJvOiB1cmwoXFxcIi4uL2ltYWdlcy9oZXJvX2Jvb2suanBlZ1xcXCIpO1xcclxcbiRpbWdfaGVyb19tb2JpbGU6IHVybChcXFwiLi4vaW1hZ2VzL2hlcm9fYm9va19tb2JpbGUuanBnXFxcIik7XFxyXFxuJGJyZWFrcG9pbnQtdGFibGV0OiA3NjhweDtcXHJcXG4kYnJlYWtwb2ludC1tb2JpbGU6IDU3NnB4O1xcclxcblxcclxcbi5hbGVydCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFsZXJ0X2NvbG9yO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcblxcclxcbiAgLmNsb3NlYnRuIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNsb3NlYnRuOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLmhlcm8ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogJGltZ19oZXJvO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG5cXHJcXG4gIC5jYXJkIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcbiAgLmNhcmQtdGl0bGUge1xcclxcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yZW07XFxyXFxuICB9XFxyXFxuICAuY2FyZC1zdWJ0aXRsZSB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjhlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1vYmlsZSkge1xcclxcbiAgc2VjdGlvbi5oZXJvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogJGltZ19oZXJvX21vYmlsZTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQkFTSUNTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTJlMzI7IH1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcblxcbiNuYW1lQ2F0ZWdvcnkge1xcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDsgfVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxuICBib3gtc2hhZG93OiAycHggMXB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjYpOyB9XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogI2U4ZDYzOSAhaW1wb3J0YW50OyB9XFxuXFxuLnRleHQtbXV0ZWQge1xcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG4uYmFjay1ob21lIHtcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyB9XFxuICAuYmFjay1ob21lIC5idG4ge1xcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsgfVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBHRU5FUkFMIElDT05TIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLmljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQsIGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7IH1cXG5cXG4uaWNvbi1ucCB7XFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7IH1cXG5cXG4uaWNvbi1zbWFsbCB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDsgfVxcblxcbi5pY29uLW1lZGl1bSB7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDsgfVxcblxcbi5pY29uLWxhcmdlIHtcXG4gIHdpZHRoOiA0MnB4O1xcbiAgaGVpZ2h0OiA0MnB4OyB9XFxuXFxuLmljb24taHVnZSB7XFxuICB3aWR0aDogNjVweDtcXG4gIGhlaWdodDogNjVweDsgfVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xcbiAgLmljb24tc21hbGwge1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzNXB4OyB9XFxuICAuaWNvbi1tZWRpdW0ge1xcbiAgICB3aWR0aDogNDVweDtcXG4gICAgaGVpZ2h0OiA0NXB4OyB9XFxuICAuaWNvbi1sYXJnZSB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7IH0gfVxcblxcbi5pY29uIGltZyB7XFxuICBmaWx0ZXI6IGludmVydCgxKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi5pY29uLXNtYWxsIGltZyB7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDsgfVxcblxcbi5pY29uLW1lZGl1bSBpbWcge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7IH1cXG5cXG4uaWNvbi1sYXJnZSBpbWcge1xcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcXG4gIGhlaWdodDogMjBweCAhaW1wb3J0YW50OyB9XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XFxuICAuaWNvbi1zbWFsbCBpbWcge1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgaGVpZ2h0OiAxOHB4OyB9XFxuICAuaWNvbi1tZWRpdW0gaW1nIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDsgfVxcbiAgLmljb24tbGFyZ2UgaW1nIHtcXG4gICAgd2lkdGg6IDI1cHggIWltcG9ydGFudDtcXG4gICAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHVJQUFBO0FBT0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLHlCQVZ1QixFQUFBOztBQVl6QjtFQUNFLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLHlCQWhCdUI7RUFpQnZCLDhDQUE4QyxFQUFBOztBQUVoRDtFQUNFLDJEQUEyRDtFQUMzRCx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQjtFQUNsQix5QkE5QnVCO0VBK0J2QixXQUFXO0VBQ1gsdUJBQXVCLEVBQUE7RUFKekI7SUFNSSx1QkFBdUIsRUFBQTs7QUFHM0IsMklBQUE7QUFDQTtFQUNFLGVBQWU7RUFDZixzREFBc0Q7RUFDdEQsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBR2Q7SUFDRSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBR2Q7SUFDRSxXQUFXO0lBQ1gsWUFBWSxFQUFBLEVBQ2I7O0FBR0g7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUFHZDtJQUNFLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUFHZDtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUIsRUFBQSxFQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBCQVNJQ1MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuLy8kYmFja2dyb3VuZF9jYXJkOiAjMjEyMTIxO1xcclxcbiRiYWNrZ3JvdW5kX2JvZHk6ICMyOTJlMzI7XFxyXFxuJGJhY2tncm91bmRfY2FyZDogcmdiYSg3MywgNzMsIDczLCAwLjg2Nyk7XFxyXFxuJGJhY2tncm91bmRfY2FyZDogIzEzMTYyOTtcXHJcXG4kYmFja2dyb3VuZF9jYXJkOiAjMjEyMTIxO1xcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmRfYm9keTtcXHJcXG59XFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbiNuYW1lQ2F0ZWdvcnkge1xcclxcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLmNhcmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmRfY2FyZDtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAxcHggNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxufVxcclxcbi5jYXJkLXRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xcclxcbiAgY29sb3I6ICNlOGQ2MzkgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLnRleHQtbXV0ZWQge1xcclxcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXHJcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcbi5iYWNrLWhvbWUge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmRfY2FyZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxyXFxuICAuYnRuIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBHRU5FUkFMIElDT05TIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuLmljb24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQsIGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5pY29uLW5wIHtcXHJcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXHJcXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XFxyXFxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24tc21hbGwge1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5pY29uLW1lZGl1bSB7XFxyXFxuICB3aWR0aDogMzVweDtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24tbGFyZ2Uge1xcclxcbiAgd2lkdGg6IDQycHg7XFxyXFxuICBoZWlnaHQ6IDQycHg7XFxyXFxufVxcclxcblxcclxcbi5pY29uLWh1Z2Uge1xcclxcbiAgd2lkdGg6IDY1cHg7XFxyXFxuICBoZWlnaHQ6IDY1cHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xcclxcbiAgLmljb24tc21hbGwge1xcclxcbiAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmljb24tbWVkaXVtIHtcXHJcXG4gICAgd2lkdGg6IDQ1cHg7XFxyXFxuICAgIGhlaWdodDogNDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pY29uLWxhcmdlIHtcXHJcXG4gICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmljb24gaW1nIHtcXHJcXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1zbWFsbCBpbWcge1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5pY29uLW1lZGl1bSBpbWcge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pY29uLWxhcmdlIGltZyB7XFxyXFxuICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xcclxcbiAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xcclxcbiAgLmljb24tc21hbGwgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDE4cHg7XFxyXFxuICAgIGhlaWdodDogMThweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pY29uLW1lZGl1bSBpbWcge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmljb24tbGFyZ2UgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDI1cHggIWltcG9ydGFudDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2F0ZWdvcnkuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhdGVnb3J5LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYXBwXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgXCIuLi9jc3MvaG9tZS5zY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9tYWluLnNjc3NcIjtcclxuaW1wb3J0IFwiLi4vY3NzL2NhdGVnb3J5LnNjc3NcIjtcclxuXHJcbi8qIFxyXG48ZGl2XHJcbiAgICAgIGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgdG9wLTBcIlxyXG4gICAgICBzdHlsZT1cIndpZHRoOiAxMDAlOyBkaXNwbGF5OiBub25lXCJcclxuICAgICAgaWQ9XCJhbGVydF9jYXRlZ29yeVwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlclwiPlxyXG4gICAgICAgIFRoZSByZXNlYXJjaCByZXR1cm5lZCBubyByZXN1bHRzXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJoZXJvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgc3R5bGU9XCJ3aWR0aDogMjByZW1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3M9XCJjYXJkLXRpdGxlXCI+T05MSU5FIEJPT0s8L2gxPlxyXG4gICAgICAgICAgPGg2IGNsYXNzPVwiY2FyZC1zdWJ0aXRsZSBtYi0yIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgV2VsY29tZSwgc2VhcmNoIGJvb2tzIGJ5IGNhdGVnb3J5XHJcbiAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgPGZvcm0gbWV0aG9kPVwiZ2V0XCIgYWN0aW9uPVwiXCIgbmFtZT1cInNlYXJjaF9jYXRlZ29yeVwiIGNsYXNzPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIG1lLTJcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZmFudGFzeSwgaG9ycm9yIGV0Yy4uXCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8IS0tb25jbGljaz1cImdldEJvb2tDYXRlZ29yeShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnknKS52YWx1ZSlcIi0tPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT1cImhlaWdodDogMTBlbVwiPjwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4qL1xyXG5cclxuLypsZXQgaW1nID0gYXhpb3NcclxuICAgICAgICAuZ2V0KGBodHRwczovL2NvdmVycy5vcGVubGlicmFyeS5vcmcvYi9pZC8ke2VsZS5jb3Zlcl9pZH0tTS5qcGdgLCB7XHJcbiAgICAgICAgICByZXNwb25zZVR5cGU6IFwiYXJyYXlidWZmZXJcIixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgbGV0IGltYWdlID0gYnRvYShcclxuICAgICAgICAgICAgbmV3IFVpbnQ4QXJyYXkocmVzcG9uc2UuZGF0YSkucmVkdWNlKFxyXG4gICAgICAgICAgICAgIChkYXRhLCBieXRlKSA9PiBkYXRhICsgU3RyaW5nLmZyb21DaGFyQ29kZShieXRlKSxcclxuICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICByZXR1cm4gYGRhdGE6JHtyZXNwb25zZS5oZWFkZXJzW1xyXG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiXHJcbiAgICAgICAgICBdLnRvTG93ZXJDYXNlKCl9O2Jhc2U2NCwke2ltYWdlfWA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgICAgUHJvbWlzZS5hbGwoW2ltZ10pLnRoZW4oKHZhbHVlcykgPT4ge1xyXG4gICAgICAgIGFycmF5Qm9vay5wdXNoKHtcclxuICAgICAgICAgIHRpdGxlOiBlbGUudGl0bGUsXHJcbiAgICAgICAgICBrZXk6IGVsZS5rZXksXHJcbiAgICAgICAgICBhdXRob3JzOiBlbGUuYXV0aG9ycyxcclxuICAgICAgICAgIGltYWdlOiB2YWx1ZXNbMF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pOyovXHJcbi8qbGV0IGF1dGhvciA9IGF4aW9zXHJcbiAgICAuZ2V0KGBodHRwczovL29wZW5saWJyYXJ5Lm9yZyR7cmVzcG9uc2VbMV0ua2V5fS5qc29uYClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIC8vIGhhbmRsZSBlcnJvclxyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KTtcclxuXHJcbiAgbGV0IGltZyA9IGF4aW9zXHJcbiAgICAuZ2V0KGBodHRwczovL2NvdmVycy5vcGVubGlicmFyeS5vcmcvYi9pZC8ke2F1dGhvci5jb3ZlcnNbM119LU0uanBnYCwge1xyXG4gICAgICByZXNwb25zZVR5cGU6IFwiYXJyYXlidWZmZXJcIixcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgbGV0IGltYWdlID0gYnRvYShcclxuICAgICAgICBuZXcgVWludDhBcnJheShyZXNwb25zZS5kYXRhKS5yZWR1Y2UoXHJcbiAgICAgICAgICAoZGF0YSwgYnl0ZSkgPT4gZGF0YSArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSksXHJcbiAgICAgICAgICBcIlwiXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gYGRhdGE6JHtyZXNwb25zZS5oZWFkZXJzW1xyXG4gICAgICAgIFwiY29udGVudC10eXBlXCJcclxuICAgICAgXS50b0xvd2VyQ2FzZSgpfTtiYXNlNjQsJHtpbWFnZX1gO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgLy8gaGFuZGxlIGVycm9yXHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pOyovXHJcblxyXG4vKlByb21pc2UuYWxsKFtyZXNwb25zZSAvKiwgYXV0aG9yLCBpbWddKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codHlwZW9mIHZhbHVlWzBdKTtcclxuICAgIGlmICh2YWx1ZVswXS5sZW5naHQgPT09IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGFycmF5Qm9vayA9IFtdO1xyXG4gICAgICB2YWx1ZVswXS5mb2FyZWNoKChlbGUpID0+IHtcclxuICAgICAgICBhcnJheUJvb2sucHVzaCh7IHRpdGxlOiBlbGUudGl0bGUsIGtleTogZWxlLmtleSwgYXV0aG9yczogZWxlLmF1dGhvcnMgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlc10gb2YgT2JqZWN0LmVudHJpZXModmFsdWVbMF0pKSB7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gXCJcIjtcclxuICAgICAgICBsZXQgd29ya0lkID0gXCJcIjtcclxuICAgICAgICBsZXQgYXV0aG9yID0gW107XHJcbiAgICAgICAgaWYgKGtleSA9PT0gXCJ0aXRsZVwiKSB7XHJcbiAgICAgICAgICB0aXRsZSA9IHZhbHVlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleSA9PT0gXCJrZXlcIikge1xyXG4gICAgICAgICAgd29ya0lkID0gdmFsdWVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5ID09PSBcImF1dGhvcnNcIikge1xyXG4gICAgICAgICAgYXV0aG9yID0gdmFsdWVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBhcnJheUJvb2sucHVzaCh7IHRpdGxlOiB0aXRsZSwga2V5OiB3b3JrSWQsIGF1dGhvcnM6IGF1dGhvciB9KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhhcnJheUJvb2spO1xyXG4gICAgICAvKmxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgIGltYWdlLnNyYyA9IHZhbHVlWzJdO1xyXG4gIFxyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgIH1cclxuICB9KTsqL1xyXG5cclxuLy8gUmljZXJjYSBsaWJyaVxyXG4vKlxyXG5hc3luYyBmdW5jdGlvbiBnZXRJbWcoZWxlKSB7XHJcbiAgbGV0IGltZyA9IGF3YWl0IGF4aW9zXHJcbiAgICAuZ2V0KGBodHRwczovL2NvdmVycy5vcGVubGlicmFyeS5vcmcvYi9pZC8ke2VsZX0tTS5qcGdgLCB7XHJcbiAgICAgIHJlc3BvbnNlVHlwZTogXCJhcnJheWJ1ZmZlclwiLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBsZXQgaW1hZ2UgPSBidG9hKFxyXG4gICAgICAgIG5ldyBVaW50OEFycmF5KHJlc3BvbnNlLmRhdGEpLnJlZHVjZShcclxuICAgICAgICAgIChkYXRhLCBieXRlKSA9PiBkYXRhICsgU3RyaW5nLmZyb21DaGFyQ29kZShieXRlKSxcclxuICAgICAgICAgIFwiXCJcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBgZGF0YToke3Jlc3BvbnNlLmhlYWRlcnNbXHJcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIlxyXG4gICAgICBdLnRvTG93ZXJDYXNlKCl9O2Jhc2U2NCwke2ltYWdlfWA7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAvLyBoYW5kbGUgZXJyb3JcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgLy9jb25zb2xlLmxvZyhcInNzXCIsIGltZyk7XHJcbiAgcmV0dXJuIGltZztcclxufSovXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==