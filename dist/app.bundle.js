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
___CSS_LOADER_EXPORT___.push([module.id, ".marginTop {\n  margin-top: 2em;\n  min-height: 100vh; }\n\n.card-title {\n  font-family: Verdana, Geneva, Tahoma, sans-serif; }\n\n.footer {\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  margin-top: 2em;\n  /*margin-bottom: 0;\r\n  margin-top: 10em;*/\n  color: #fff;\n  height: 10vh;\n  background-color: #212121; }\n\n.footer_book {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  color: #fff;\n  height: 10vh;\n  background-color: #212121; }\n\n.img {\n  width: 180px !important;\n  height: 280px !important; }\n\n.img_book {\n  width: 354px !important;\n  height: 100% !important; }\n\n@media (min-width: 576px) and (max-width: 768px) {\n  .col-6 {\n    display: flex !important;\n    justify-content: center !important; }\n  .card {\n    width: 300px; }\n  .img,\n  .img_book {\n    width: 100% !important;\n    height: 280px !important; } }\n\n@media (max-width: 576px) {\n  /*#collpaseDescription {\r\n    display: block;\r\n  }*/\n  .footer_book {\n    position: static;\n    margin-top: 10em; }\n  .col-6 {\n    width: 100% !important;\n    display: flex !important;\n    justify-content: center !important; }\n    .col-6 .card {\n      width: 300px; }\n  .img,\n  .img_book {\n    width: 100% !important;\n    height: 280px !important; } }\n\n/*collapse*/\n.m-d.expand-list {\n  margin: 0;\n  padding: 0;\n  color: #fff !important; }\n\n.m-d.expand-list > li {\n  list-style-type: none;\n  padding: 15px 0;\n  border-bottom: 1px solid #fff;\n  position: relative;\n  /*         max-width: 80%; */ }\n\n.m-d label[class^=\"tab\"]:hover {\n  cursor: pointer; }\n\n.m-d input {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.m-d input[class^=\"tab\"] {\n  width: 100%;\n  height: 40px;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.m-d input[class^=\"tab\"]:hover {\n  cursor: pointer; }\n\n.m-d label[class^=\"tab\"] {\n  color: #fff;\n  font-weight: bold; }\n\n.m-d .content {\n  height: auto;\n  max-height: 0;\n  max-width: 100%;\n  color: #fff;\n  /*        background: yellow;*/\n  overflow: scroll;\n  transform: translateY(20px);\n  transition: all 180ms ease-in-out 0ms; }\n\n.content::-webkit-scrollbar {\n  display: none; }\n\n.content {\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */ }\n\n.m-d li[data-md-content=\"100\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 100px;\n  transition: all 150ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"200\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 200px;\n  transition: all 200ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"300\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 300px;\n  transition: all 250ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"400\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 400px;\n  transition: all 250ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"500\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 500px;\n  transition: all 250ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"600\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 600px;\n  transition: all 250ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"700\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 700px;\n  transition: all 300ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"800\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 800px;\n  transition: all 300ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"900\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 900px;\n  transition: all 300ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"1000\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 1000px;\n  transition: all 350ms ease-in-out 0ms; }\n\n.m-d li[data-md-content=\"\"] input[class^=\"tab\"]:checked ~ .content {\n  max-height: 1000px;\n  transition: all 250ms ease-in-out 0ms; }\n\n.m-d input[class^=\"tab\"]:checked ~ .content {\n  margin-bottom: 20px; }\n\n.m-d .open-close-icon {\n  display: inline-block;\n  position: absolute;\n  right: 20px;\n  transform: translatey(2px); }\n\n.m-d .open-close-icon i {\n  position: absolute;\n  left: 0; }\n\n.m-d .open-close-icon .fa-minus {\n  transform: rotate(-90deg);\n  transition: transform 150ms ease-in-out 0ms; }\n\n.m-d input[class^=\"tab\"]:checked ~ .open-close-icon .fa-minus {\n  transform: rotate(0deg);\n  transition: transform 150ms ease-in-out 0ms; }\n\n.m-d .open-close-icon .fa-plus {\n  opacity: 1;\n  transform: rotate(-90deg);\n  transition: opacity 50ms linear 0ms, transform 150ms ease-in-out 0ms; }\n\n.m-d input[class^=\"tab\"]:checked ~ .open-close-icon .fa-plus {\n  opacity: 0;\n  transform: rotate(0deg);\n  transition: opacity 50ms linear 0ms, transform 150ms ease-in-out 0ms; }\n", "",{"version":3,"sources":["webpack://./src/css/category.scss"],"names":[],"mappings":"AAGA;EAEE,eAAe;EACf,iBAAiB,EAAA;;AAEnB;EACE,gDAAgD,EAAA;;AAElD;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,eAAe;EACf;oBAHkB;EAKlB,WAAW;EACX,YAAY;EACZ,yBAAyB,EAAA;;AAE3B;EACE,eAAe;EACf,SAAS;EACT,WAAW;EAEX,WAAW;EACX,YAAY;EACZ,yBAAyB,EAAA;;AAG3B;EACE,uBAAuB;EACvB,wBAAwB,EAAA;;AAE1B;EACE,uBAAuB;EACvB,uBAAuB,EAAA;;AAGzB;EACE;IACE,wBAAwB;IACxB,kCAAkC,EAAA;EAEpC;IACE,YAAY,EAAA;EAEd;;IAEE,sBAAsB;IACtB,wBAAwB,EAAA,EACzB;;AAEH;EACE;;IARE;EAWF;IACE,gBAAgB;IAChB,gBAAgB,EAAA;EAElB;IACE,sBAAsB;IACtB,wBAAwB;IACxB,kCAAkC,EAAA;IAHpC;MAKI,YAAY,EAAA;EAIhB;;IAEE,sBAAsB;IACtB,wBAAwB,EAAA,EACzB;;AAGH,WAAA;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB,EAAA;;AAExB;EACE,qBAAqB;EACrB,eAAe;EACf,6BAA6B;EAC7B,kBAAkB;EAClB,4BAAA,EAA6B;;AAE/B;EACE,eAAe,EAAA;;AAEjB;EACE,wBAAwB;EACxB,qBAAqB;EACrB,gBAAgB,EAAA;;AAElB;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,OAAO;EACP,MAAM,EAAA;;AAER;EACE,eAAe,EAAA;;AAEjB;EACE,WAAW;EACX,iBAAiB,EAAA;;AAEnB;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,WAAW;EACX,8BAAA;EACA,gBAAgB;EAChB,2BAA2B;EAC3B,qCAAqC,EAAA;;AAEvC;EACE,aAAa,EAAA;;AAEf;EACE,wBAAwB;EAAE,gBAAA;EAC1B,qBAAqB;EAAE,YAAA,EAAa;;AAGtC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,iBAAiB;EACjB,qCAAqC,EAAA;;AAEvC;EACE,kBAAkB;EAClB,qCAAqC,EAAA;;AAEvC;EACE,kBAAkB;EAClB,qCAAqC,EAAA;;AAEvC;EACE,mBAAmB,EAAA;;AAGrB;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;EACX,0BAA0B,EAAA;;AAE5B;EACE,kBAAkB;EAClB,OAAO,EAAA;;AAET;EACE,yBAAyB;EACzB,2CAA2C,EAAA;;AAE7C;EACE,uBAAuB;EACvB,2CAA2C,EAAA;;AAE7C;EACE,UAAU;EACV,yBAAyB;EACzB,oEAAoE,EAAA;;AAEtE;EACE,UAAU;EACV,uBAAuB;EACvB,oEAAoE,EAAA","sourcesContent":["$breakpoint-tablet: 768px;\r\n$breakpoint-mobile: 576px;\r\n\r\n.marginTop {\r\n  //padding-top: 5em;\r\n  margin-top: 2em;\r\n  min-height: 100vh;\r\n}\r\n.card-title {\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n.footer {\r\n  position: relative;\r\n  bottom: 0;\r\n  width: 100%;\r\n  margin-top: 2em;\r\n  /*margin-bottom: 0;\r\n  margin-top: 10em;*/\r\n  color: #fff;\r\n  height: 10vh;\r\n  background-color: #212121;\r\n}\r\n.footer_book {\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n\r\n  color: #fff;\r\n  height: 10vh;\r\n  background-color: #212121;\r\n}\r\n\r\n.img {\r\n  width: 180px !important;\r\n  height: 280px !important;\r\n}\r\n.img_book {\r\n  width: 354px !important;\r\n  height: 100% !important;\r\n}\r\n\r\n@media (min-width: $breakpoint-mobile) and (max-width: $breakpoint-tablet) {\r\n  .col-6 {\r\n    display: flex !important;\r\n    justify-content: center !important;\r\n  }\r\n  .card {\r\n    width: 300px;\r\n  }\r\n  .img,\r\n  .img_book {\r\n    width: 100% !important;\r\n    height: 280px !important;\r\n  }\r\n}\r\n@media (max-width: $breakpoint-mobile) {\r\n  /*#collpaseDescription {\r\n    display: block;\r\n  }*/\r\n  .footer_book {\r\n    position: static;\r\n    margin-top: 10em;\r\n  }\r\n  .col-6 {\r\n    width: 100% !important;\r\n    display: flex !important;\r\n    justify-content: center !important;\r\n    .card {\r\n      width: 300px;\r\n    }\r\n  }\r\n\r\n  .img,\r\n  .img_book {\r\n    width: 100% !important;\r\n    height: 280px !important;\r\n  }\r\n}\r\n\r\n/*collapse*/\r\n.m-d.expand-list {\r\n  margin: 0;\r\n  padding: 0;\r\n  color: #fff !important;\r\n}\r\n.m-d.expand-list > li {\r\n  list-style-type: none;\r\n  padding: 15px 0;\r\n  border-bottom: 1px solid #fff;\r\n  position: relative;\r\n  /*         max-width: 80%; */\r\n}\r\n.m-d label[class^=\"tab\"]:hover {\r\n  cursor: pointer;\r\n}\r\n.m-d input {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n}\r\n.m-d input[class^=\"tab\"] {\r\n  width: 100%;\r\n  height: 40px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n.m-d input[class^=\"tab\"]:hover {\r\n  cursor: pointer;\r\n}\r\n.m-d label[class^=\"tab\"] {\r\n  color: #fff;\r\n  font-weight: bold;\r\n}\r\n.m-d .content {\r\n  height: auto;\r\n  max-height: 0;\r\n  max-width: 100%;\r\n  color: #fff;\r\n  /*        background: yellow;*/\r\n  overflow: scroll;\r\n  transform: translateY(20px);\r\n  transition: all 180ms ease-in-out 0ms;\r\n}\r\n.content::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n.content {\r\n  -ms-overflow-style: none; /* IE and Edge */\r\n  scrollbar-width: none; /* Firefox */\r\n}\r\n\r\n.m-d li[data-md-content=\"100\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 100px;\r\n  transition: all 150ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"200\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 200px;\r\n  transition: all 200ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"300\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 300px;\r\n  transition: all 250ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"400\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 400px;\r\n  transition: all 250ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"500\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 500px;\r\n  transition: all 250ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"600\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 600px;\r\n  transition: all 250ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"700\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 700px;\r\n  transition: all 300ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"800\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 800px;\r\n  transition: all 300ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"900\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 900px;\r\n  transition: all 300ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"1000\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 1000px;\r\n  transition: all 350ms ease-in-out 0ms;\r\n}\r\n.m-d li[data-md-content=\"\"] input[class^=\"tab\"]:checked ~ .content {\r\n  max-height: 1000px;\r\n  transition: all 250ms ease-in-out 0ms;\r\n}\r\n.m-d input[class^=\"tab\"]:checked ~ .content {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.m-d .open-close-icon {\r\n  display: inline-block;\r\n  position: absolute;\r\n  right: 20px;\r\n  transform: translatey(2px);\r\n}\r\n.m-d .open-close-icon i {\r\n  position: absolute;\r\n  left: 0;\r\n}\r\n.m-d .open-close-icon .fa-minus {\r\n  transform: rotate(-90deg);\r\n  transition: transform 150ms ease-in-out 0ms;\r\n}\r\n.m-d input[class^=\"tab\"]:checked ~ .open-close-icon .fa-minus {\r\n  transform: rotate(0deg);\r\n  transition: transform 150ms ease-in-out 0ms;\r\n}\r\n.m-d .open-close-icon .fa-plus {\r\n  opacity: 1;\r\n  transform: rotate(-90deg);\r\n  transition: opacity 50ms linear 0ms, transform 150ms ease-in-out 0ms;\r\n}\r\n.m-d input[class^=\"tab\"]:checked ~ .open-close-icon .fa-plus {\r\n  opacity: 0;\r\n  transform: rotate(0deg);\r\n  transition: opacity 50ms linear 0ms, transform 150ms ease-in-out 0ms;\r\n}\r\n"],"sourceRoot":""}]);
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../font/Mark-Bold.ttf */ "./src/font/Mark-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../font/MessinaSans-Book.ttf */ "./src/font/MessinaSans-Book.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*--------------------------------------------------------- BASICS -------------------------------------------------------------------*/\n/**********FONT************/\n@font-face {\n  font-family: CardTitle;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\"); }\n\n@font-face {\n  font-family: CardText;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\"); }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nbody {\n  background-color: #292e32; }\n\na {\n  text-decoration: none; }\n\n#nameCategory {\n  color: #fff !important; }\n\n.card {\n  background-color: #212121;\n  box-shadow: 2px 1px 5px 1px rgba(0, 0, 0, 0.6); }\n\n.card-title {\n  font-family: Verdana, Geneva, Tahoma, sans-serif !important;\n  color: #e8d639 !important; }\n\n.text-muted {\n  color: #fff !important;\n  font-size: 0.8em;\n  font-style: italic; }\n\n.back-home {\n  margin-bottom: 2em;\n  width: 100%;\n  color: white !important; }\n  .back-home .btn {\n    color: white !important; }\n\n/*---------------------------------------------------------- GENERAL ICONS ---------------------------------------------------------------*/\n.icon {\n  cursor: pointer;\n  background-color: #212121;\n  transition: all 0.2s ease-in-out, all 0.2s ease-in-out;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n  border-radius: 5em;\n  box-sizing: border-box;\n  color: #fff !important; }\n\n.icon-np {\n  padding: 0 !important;\n  width: auto !important;\n  height: auto !important; }\n\n.icon-small {\n  width: 25px;\n  height: 25px; }\n\n.icon-medium {\n  width: 35px;\n  height: 35px; }\n\n.icon-large {\n  width: 42px;\n  height: 42px; }\n\n.icon-huge {\n  width: 65px;\n  height: 65px; }\n\n@media (min-width: 900px) {\n  .icon-small {\n    width: 35px;\n    height: 35px; }\n  .icon-medium {\n    width: 45px;\n    height: 45px; }\n  .icon-large {\n    width: 60px;\n    height: 60px; } }\n\n.icon img {\n  filter: invert(1);\n  width: 100%;\n  height: 100%;\n  opacity: 1; }\n\n.icon-small img {\n  width: 15px;\n  height: 15px; }\n\n.icon-medium img {\n  width: 20px;\n  height: 20px; }\n\n.icon-large img {\n  width: 20px !important;\n  height: 20px !important; }\n\n@media (min-width: 900px) {\n  .icon-small img {\n    width: 18px;\n    height: 18px; }\n  .icon-medium img {\n    width: 20px;\n    height: 20px; }\n  .icon-large img {\n    width: 25px !important;\n    height: 25px !important; } }\n", "",{"version":3,"sources":["webpack://./src/css/main.scss"],"names":[],"mappings":"AAAA,uIAAA;AAQA,2BAAA;AAEA;EACE,sBAAsB;EACtB,+DAAoD,EAAA;;AAGtD;EACE,qBAAqB;EACrB,+DAA2D,EAAA;;AAG7D;EACE,SAAS;EACT,UAAU;EACV,sBAAsB,EAAA;;AAExB;EACE,yBAvBuB,EAAA;;AAyBzB;EACE,qBAAqB,EAAA;;AAEvB;EACE,sBAAsB,EAAA;;AAExB;EACE,yBA7BuB;EA8BvB,8CAA8C,EAAA;;AAEhD;EACE,2DAA2D;EAC3D,yBAAyB,EAAA;;AAE3B;EACE,sBAAsB;EACtB,gBAAgB;EAChB,kBAAkB,EAAA;;AAEpB;EACE,kBAAkB;EAElB,WAAW;EACX,uBAAuB,EAAA;EAJzB;IAMI,uBAAuB,EAAA;;AAG3B,2IAAA;AAEA;EACE,eAAe;EACf,yBAtDuB;EAuDvB,sDAAsD;EACtD,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;EAClB,sBAAsB;EACtB,sBAAsB,EAAA;;AAGxB;EACE,qBAAqB;EACrB,sBAAsB;EACtB,uBAAuB,EAAA;;AAGzB;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE;IACE,WAAW;IACX,YAAY,EAAA;EAGd;IACE,WAAW;IACX,YAAY,EAAA;EAGd;IACE,WAAW;IACX,YAAY,EAAA,EACb;;AAGH;EACE,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,UAAU,EAAA;;AAGZ;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,WAAW;EACX,YAAY,EAAA;;AAGd;EACE,sBAAsB;EACtB,uBAAuB,EAAA;;AAGzB;EACE;IACE,WAAW;IACX,YAAY,EAAA;EAGd;IACE,WAAW;IACX,YAAY,EAAA;EAGd;IACE,sBAAsB;IACtB,uBAAuB,EAAA,EACxB","sourcesContent":["/*--------------------------------------------------------- BASICS -------------------------------------------------------------------*/\r\n\r\n//$background_card: #212121;\r\n$background_body: #292e32;\r\n$background_card: rgba(73, 73, 73, 0.867);\r\n$background_card: #131629;\r\n$background_card: #212121;\r\n\r\n/**********FONT************/\r\n\r\n@font-face {\r\n  font-family: CardTitle;\r\n  src: url(\"../font/Mark-Bold.ttf\") format(\"truetype\");\r\n}\r\n\r\n@font-face {\r\n  font-family: CardText;\r\n  src: url(\"../font/MessinaSans-Book.ttf\") format(\"truetype\");\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  background-color: $background_body;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\n#nameCategory {\r\n  color: #fff !important;\r\n}\r\n.card {\r\n  background-color: $background_card;\r\n  box-shadow: 2px 1px 5px 1px rgba(0, 0, 0, 0.6);\r\n}\r\n.card-title {\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif !important;\r\n  color: #e8d639 !important;\r\n}\r\n.text-muted {\r\n  color: #fff !important;\r\n  font-size: 0.8em;\r\n  font-style: italic;\r\n}\r\n.back-home {\r\n  margin-bottom: 2em;\r\n  //\r\n  width: 100%;\r\n  color: white !important;\r\n  .btn {\r\n    color: white !important;\r\n  }\r\n}\r\n/*---------------------------------------------------------- GENERAL ICONS ---------------------------------------------------------------*/\r\n\r\n.icon {\r\n  cursor: pointer;\r\n  background-color: $background_card;\r\n  transition: all 0.2s ease-in-out, all 0.2s ease-in-out;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  vertical-align: middle;\r\n  border-radius: 5em;\r\n  box-sizing: border-box;\r\n  color: #fff !important;\r\n}\r\n\r\n.icon-np {\r\n  padding: 0 !important;\r\n  width: auto !important;\r\n  height: auto !important;\r\n}\r\n\r\n.icon-small {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n.icon-medium {\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n\r\n.icon-large {\r\n  width: 42px;\r\n  height: 42px;\r\n}\r\n\r\n.icon-huge {\r\n  width: 65px;\r\n  height: 65px;\r\n}\r\n\r\n@media (min-width: 900px) {\r\n  .icon-small {\r\n    width: 35px;\r\n    height: 35px;\r\n  }\r\n\r\n  .icon-medium {\r\n    width: 45px;\r\n    height: 45px;\r\n  }\r\n\r\n  .icon-large {\r\n    width: 60px;\r\n    height: 60px;\r\n  }\r\n}\r\n\r\n.icon img {\r\n  filter: invert(1);\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 1;\r\n}\r\n\r\n.icon-small img {\r\n  width: 15px;\r\n  height: 15px;\r\n}\r\n\r\n.icon-medium img {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.icon-large img {\r\n  width: 20px !important;\r\n  height: 20px !important;\r\n}\r\n\r\n@media (min-width: 900px) {\r\n  .icon-small img {\r\n    width: 18px;\r\n    height: 18px;\r\n  }\r\n\r\n  .icon-medium img {\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n\r\n  .icon-large img {\r\n    width: 25px !important;\r\n    height: 25px !important;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RyeXdlYnBhY2svLi9zcmMvY3NzL2NhdGVnb3J5LnNjc3MiLCJ3ZWJwYWNrOi8vdHJ5d2VicGFjay8uL3NyYy9jc3MvaG9tZS5zY3NzIiwid2VicGFjazovL3RyeXdlYnBhY2svLi9zcmMvY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly90cnl3ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90cnl3ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90cnl3ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdHJ5d2VicGFjay8uL3NyYy9jc3MvY2F0ZWdvcnkuc2Nzcz84OTU3Iiwid2VicGFjazovL3RyeXdlYnBhY2svLi9zcmMvY3NzL2hvbWUuc2Nzcz85NmFlIiwid2VicGFjazovL3RyeXdlYnBhY2svLi9zcmMvY3NzL21haW4uc2Nzcz9lOWRjIiwid2VicGFjazovL3RyeXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdHJ5d2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdHJ5d2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90cnl3ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RyeXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90cnl3ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdHJ5d2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cnl3ZWJwYWNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RyeXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RyeXdlYnBhY2svd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90cnl3ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHJ5d2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RyeXdlYnBhY2svd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdHJ5d2VicGFjay93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90cnl3ZWJwYWNrLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1hcmdpblRvcCB7XFxuICBtYXJnaW4tdG9wOiAyZW07XFxuICBtaW4taGVpZ2h0OiAxMDB2aDsgfVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjsgfVxcblxcbi5mb290ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAyZW07XFxuICAvKm1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBtYXJnaW4tdG9wOiAxMGVtOyovXFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7IH1cXG5cXG4uZm9vdGVyX2Jvb2sge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7IH1cXG5cXG4uaW1nIHtcXG4gIHdpZHRoOiAxODBweCAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiAyODBweCAhaW1wb3J0YW50OyB9XFxuXFxuLmltZ19ib29rIHtcXG4gIHdpZHRoOiAzNTRweCAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbC02IHtcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50OyB9XFxuICAuY2FyZCB7XFxuICAgIHdpZHRoOiAzMDBweDsgfVxcbiAgLmltZyxcXG4gIC5pbWdfYm9vayB7XFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogMjgwcHggIWltcG9ydGFudDsgfSB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAvKiNjb2xscGFzZURlc2NyaXB0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9Ki9cXG4gIC5mb290ZXJfYm9vayB7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIG1hcmdpbi10b3A6IDEwZW07IH1cXG4gIC5jb2wtNiB7XFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDsgfVxcbiAgICAuY29sLTYgLmNhcmQge1xcbiAgICAgIHdpZHRoOiAzMDBweDsgfVxcbiAgLmltZyxcXG4gIC5pbWdfYm9vayB7XFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogMjgwcHggIWltcG9ydGFudDsgfSB9XFxuXFxuLypjb2xsYXBzZSovXFxuLm0tZC5leHBhbmQtbGlzdCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDsgfVxcblxcbi5tLWQuZXhwYW5kLWxpc3QgPiBsaSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC8qICAgICAgICAgbWF4LXdpZHRoOiA4MCU7ICovIH1cXG5cXG4ubS1kIGxhYmVsW2NsYXNzXj1cXFwidGFiXFxcIl06aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLm0tZCBpbnB1dCB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lOyB9XFxuXFxuLm0tZCBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDsgfVxcblxcbi5tLWQgaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ubS1kIGxhYmVsW2NsYXNzXj1cXFwidGFiXFxcIl0ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5tLWQgLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgLyogICAgICAgIGJhY2tncm91bmQ6IHllbGxvdzsqL1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gIHRyYW5zaXRpb246IGFsbCAxODBtcyBlYXNlLWluLW91dCAwbXM7IH1cXG5cXG4uY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5jb250ZW50IHtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG4gIC8qIElFIGFuZCBFZGdlICovXFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICAvKiBGaXJlZm94ICovIH1cXG5cXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiMTAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcbiAgbWF4LWhlaWdodDogMTAwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQgMG1zOyB9XFxuXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjIwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0IDBtczsgfVxcblxcbi5tLWQgbGlbZGF0YS1tZC1jb250ZW50PVxcXCIzMDBcXFwiXSBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAuY29udGVudCB7XFxuICBtYXgtaGVpZ2h0OiAzMDBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dCAwbXM7IH1cXG5cXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiNDAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcbiAgbWF4LWhlaWdodDogNDAwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgMG1zOyB9XFxuXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjUwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBtczsgfVxcblxcbi5tLWQgbGlbZGF0YS1tZC1jb250ZW50PVxcXCI2MDBcXFwiXSBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAuY29udGVudCB7XFxuICBtYXgtaGVpZ2h0OiA2MDBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dCAwbXM7IH1cXG5cXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiNzAwXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcbiAgbWF4LWhlaWdodDogNzAwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQgMG1zOyB9XFxuXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjgwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXG4gIG1heC1oZWlnaHQ6IDgwMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0IDBtczsgfVxcblxcbi5tLWQgbGlbZGF0YS1tZC1jb250ZW50PVxcXCI5MDBcXFwiXSBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAuY29udGVudCB7XFxuICBtYXgtaGVpZ2h0OiA5MDBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dCAwbXM7IH1cXG5cXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiMTAwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXG4gIG1heC1oZWlnaHQ6IDEwMDBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAzNTBtcyBlYXNlLWluLW91dCAwbXM7IH1cXG5cXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcbiAgbWF4LWhlaWdodDogMTAwMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBtczsgfVxcblxcbi5tLWQgaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxcblxcbi5tLWQgLm9wZW4tY2xvc2UtaWNvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMjBweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRleSgycHgpOyB9XFxuXFxuLm0tZCAub3Blbi1jbG9zZS1pY29uIGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDsgfVxcblxcbi5tLWQgLm9wZW4tY2xvc2UtaWNvbiAuZmEtbWludXMge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dCAwbXM7IH1cXG5cXG4ubS1kIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5vcGVuLWNsb3NlLWljb24gLmZhLW1pbnVzIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0IDBtczsgfVxcblxcbi5tLWQgLm9wZW4tY2xvc2UtaWNvbiAuZmEtcGx1cyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTBtcyBsaW5lYXIgMG1zLCB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQgMG1zOyB9XFxuXFxuLm0tZCBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAub3Blbi1jbG9zZS1pY29uIC5mYS1wbHVzIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTBtcyBsaW5lYXIgMG1zLCB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQgMG1zOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9jYXRlZ29yeS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBRUUsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGdEQUFnRCxFQUFBOztBQUVsRDtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZjtvQkFIa0I7RUFLbEIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFdBQVc7RUFFWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0IsRUFBQTs7QUFFMUI7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsa0NBQWtDLEVBQUE7RUFFcEM7SUFDRSxZQUFZLEVBQUE7RUFFZDs7SUFFRSxzQkFBc0I7SUFDdEIsd0JBQXdCLEVBQUEsRUFDekI7O0FBRUg7RUFDRTs7SUFSRTtFQVdGO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQixFQUFBO0VBRWxCO0lBQ0Usc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixrQ0FBa0MsRUFBQTtJQUhwQztNQUtJLFlBQVksRUFBQTtFQUloQjs7SUFFRSxzQkFBc0I7SUFDdEIsd0JBQXdCLEVBQUEsRUFDekI7O0FBR0gsV0FBQTtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsNEJBQUEsRUFBNkI7O0FBRS9CO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU0sRUFBQTs7QUFFUjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLDhCQUFBO0VBQ0EsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixxQ0FBcUMsRUFBQTs7QUFFdkM7RUFDRSxhQUFhLEVBQUE7O0FBRWY7RUFDRSx3QkFBd0I7RUFBRSxnQkFBQTtFQUMxQixxQkFBcUI7RUFBRSxZQUFBLEVBQWE7O0FBR3RDO0VBQ0UsaUJBQWlCO0VBQ2pCLHFDQUFxQyxFQUFBOztBQUV2QztFQUNFLGlCQUFpQjtFQUNqQixxQ0FBcUMsRUFBQTs7QUFFdkM7RUFDRSxpQkFBaUI7RUFDakIscUNBQXFDLEVBQUE7O0FBRXZDO0VBQ0UsaUJBQWlCO0VBQ2pCLHFDQUFxQyxFQUFBOztBQUV2QztFQUNFLGlCQUFpQjtFQUNqQixxQ0FBcUMsRUFBQTs7QUFFdkM7RUFDRSxpQkFBaUI7RUFDakIscUNBQXFDLEVBQUE7O0FBRXZDO0VBQ0UsaUJBQWlCO0VBQ2pCLHFDQUFxQyxFQUFBOztBQUV2QztFQUNFLGlCQUFpQjtFQUNqQixxQ0FBcUMsRUFBQTs7QUFFdkM7RUFDRSxpQkFBaUI7RUFDakIscUNBQXFDLEVBQUE7O0FBRXZDO0VBQ0Usa0JBQWtCO0VBQ2xCLHFDQUFxQyxFQUFBOztBQUV2QztFQUNFLGtCQUFrQjtFQUNsQixxQ0FBcUMsRUFBQTs7QUFFdkM7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCwwQkFBMEIsRUFBQTs7QUFFNUI7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTyxFQUFBOztBQUVUO0VBQ0UseUJBQXlCO0VBQ3pCLDJDQUEyQyxFQUFBOztBQUU3QztFQUNFLHVCQUF1QjtFQUN2QiwyQ0FBMkMsRUFBQTs7QUFFN0M7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLG9FQUFvRSxFQUFBOztBQUV0RTtFQUNFLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsb0VBQW9FLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGJyZWFrcG9pbnQtdGFibGV0OiA3NjhweDtcXHJcXG4kYnJlYWtwb2ludC1tb2JpbGU6IDU3NnB4O1xcclxcblxcclxcbi5tYXJnaW5Ub3Age1xcclxcbiAgLy9wYWRkaW5nLXRvcDogNWVtO1xcclxcbiAgbWFyZ2luLXRvcDogMmVtO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcbi5jYXJkLXRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuLmZvb3RlciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDJlbTtcXHJcXG4gIC8qbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwZW07Ki9cXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcXHJcXG59XFxyXFxuLmZvb3Rlcl9ib29rIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nIHtcXHJcXG4gIHdpZHRoOiAxODBweCAhaW1wb3J0YW50O1xcclxcbiAgaGVpZ2h0OiAyODBweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4uaW1nX2Jvb2sge1xcclxcbiAgd2lkdGg6IDM1NHB4ICFpbXBvcnRhbnQ7XFxyXFxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1vYmlsZSkgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXRhYmxldCkge1xcclxcbiAgLmNvbC02IHtcXHJcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcbiAgLmNhcmQge1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICB9XFxyXFxuICAuaW1nLFxcclxcbiAgLmltZ19ib29rIHtcXHJcXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXHJcXG4gICAgaGVpZ2h0OiAyODBweCAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbW9iaWxlKSB7XFxyXFxuICAvKiNjb2xscGFzZURlc2NyaXB0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9Ki9cXHJcXG4gIC5mb290ZXJfYm9vayB7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwZW07XFxyXFxuICB9XFxyXFxuICAuY29sLTYge1xcclxcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XFxyXFxuICAgIC5jYXJkIHtcXHJcXG4gICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbWcsXFxyXFxuICAuaW1nX2Jvb2sge1xcclxcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcclxcbiAgICBoZWlnaHQ6IDI4MHB4ICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qY29sbGFwc2UqL1xcclxcbi5tLWQuZXhwYW5kLWxpc3Qge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5tLWQuZXhwYW5kLWxpc3QgPiBsaSB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDA7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIC8qICAgICAgICAgbWF4LXdpZHRoOiA4MCU7ICovXFxyXFxufVxcclxcbi5tLWQgbGFiZWxbY2xhc3NePVxcXCJ0YWJcXFwiXTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5tLWQgaW5wdXQge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuLm0tZCBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuLm0tZCBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLm0tZCBsYWJlbFtjbGFzc149XFxcInRhYlxcXCJdIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5tLWQgLmNvbnRlbnQge1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWF4LWhlaWdodDogMDtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgLyogICAgICAgIGJhY2tncm91bmQ6IHllbGxvdzsqL1xcclxcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAxODBtcyBlYXNlLWluLW91dCAwbXM7XFxyXFxufVxcclxcbi5jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4uY29udGVudCB7XFxyXFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIElFIGFuZCBFZGdlICovXFxyXFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cXHJcXG59XFxyXFxuXFxyXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjEwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjIwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjMwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjQwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjUwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjYwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjcwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDcwMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjgwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDgwMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjkwMFxcXCJdIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5jb250ZW50IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDkwMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLm0tZCBsaVtkYXRhLW1kLWNvbnRlbnQ9XFxcIjEwMDBcXFwiXSBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAuY29udGVudCB7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMzUwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGxpW2RhdGEtbWQtY29udGVudD1cXFwiXFxcIl0gaW5wdXRbY2xhc3NePVxcXCJ0YWJcXFwiXTpjaGVja2VkIH4gLmNvbnRlbnQge1xcclxcbiAgbWF4LWhlaWdodDogMTAwMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLm0tZCBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAuY29udGVudCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubS1kIC5vcGVuLWNsb3NlLWljb24ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDIwcHg7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMnB4KTtcXHJcXG59XFxyXFxuLm0tZCAub3Blbi1jbG9zZS1pY29uIGkge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuLm0tZCAub3Blbi1jbG9zZS1pY29uIC5mYS1taW51cyB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0IDBtcztcXHJcXG59XFxyXFxuLm0tZCBpbnB1dFtjbGFzc149XFxcInRhYlxcXCJdOmNoZWNrZWQgfiAub3Blbi1jbG9zZS1pY29uIC5mYS1taW51cyB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dCAwbXM7XFxyXFxufVxcclxcbi5tLWQgLm9wZW4tY2xvc2UtaWNvbiAuZmEtcGx1cyB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTBtcyBsaW5lYXIgMG1zLCB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQgMG1zO1xcclxcbn1cXHJcXG4ubS1kIGlucHV0W2NsYXNzXj1cXFwidGFiXFxcIl06Y2hlY2tlZCB+IC5vcGVuLWNsb3NlLWljb24gLmZhLXBsdXMge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MG1zIGxpbmVhciAwbXMsIHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dCAwbXM7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2hlcm9fYm9vay5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2hlcm9fYm9va19tb2JpbGUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5hbGVydCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcXG4gIGNvbG9yOiB3aGl0ZTsgfVxcbiAgLmFsZXJ0IC5jbG9zZWJ0biB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4zczsgfVxcbiAgLmFsZXJ0IC5jbG9zZWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTsgfVxcblxcbnNlY3Rpb24uaGVybyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxcbiAgc2VjdGlvbi5oZXJvIC5jYXJkIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50OyB9XFxuICBzZWN0aW9uLmhlcm8gLmNhcmQtdGl0bGUge1xcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yZW07IH1cXG4gIHNlY3Rpb24uaGVybyAuY2FyZC1zdWJ0aXRsZSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjhlbTsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgc2VjdGlvbi5oZXJvIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ob21lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBTUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IseUJBWG1CO0VBWW5CLFlBQVksRUFBQTtFQU5kO0lBU0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQixFQUFBO0VBaEJwQjtJQW9CSSxZQUFZLEVBQUE7O0FBSWhCO0VBQ0UseURBOUJ3QztFQStCeEMsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQixFQUFBO0VBTjdCO0lBU0ksa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsMkJBQTJCLEVBQUE7RUFaL0I7SUFlSSxzQkFBc0I7SUFDdEIscUJBQXFCLEVBQUE7RUFoQnpCO0lBbUJJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNFO0lBQ0UseURBcERtRDtJQXFEbkQsc0JBQXNCLEVBQUEsRUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGFsZXJ0X2NvbG9yOiAjZjQ0MzM2O1xcclxcbiRpbWdfaGVybzogdXJsKFxcXCIuLi9pbWFnZXMvaGVyb19ib29rLmpwZWdcXFwiKTtcXHJcXG4kaW1nX2hlcm9fbW9iaWxlOiB1cmwoXFxcIi4uL2ltYWdlcy9oZXJvX2Jvb2tfbW9iaWxlLmpwZ1xcXCIpO1xcclxcbiRicmVha3BvaW50LXRhYmxldDogNzY4cHg7XFxyXFxuJGJyZWFrcG9pbnQtbW9iaWxlOiA1NzZweDtcXHJcXG5cXHJcXG4uYWxlcnQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRhbGVydF9jb2xvcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG4gIC5jbG9zZWJ0biB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jbG9zZWJ0bjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbi5oZXJvIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6ICRpbWdfaGVybztcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAuY2FyZCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG4gIC5jYXJkLXRpdGxlIHtcXHJcXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDAuMmVtO1xcclxcbiAgfVxcclxcbiAgLmNhcmQtc3VidGl0bGUge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMC44ZW07XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tb2JpbGUpIHtcXHJcXG4gIHNlY3Rpb24uaGVybyB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICRpbWdfaGVyb19tb2JpbGU7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9NYXJrLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9NZXNzaW5hU2Fucy1Cb29rLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBCQVNJQ1MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLyoqKioqKioqKipGT05UKioqKioqKioqKioqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IENhcmRUaXRsZTtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBDYXJkVGV4dDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7IH1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyZTMyOyB9XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG5cXG4jbmFtZUNhdGVnb3J5IHtcXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7IH1cXG5cXG4uY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcbiAgYm94LXNoYWRvdzogMnB4IDFweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC42KTsgfVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xcbiAgY29sb3I6ICNlOGQ2MzkgIWltcG9ydGFudDsgfVxcblxcbi50ZXh0LW11dGVkIHtcXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuXFxuLmJhY2staG9tZSB7XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyB9XFxuICAuYmFjay1ob21lIC5idG4ge1xcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsgfVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBHRU5FUkFMIElDT05TIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLmljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0LCBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50OyB9XFxuXFxuLmljb24tbnAge1xcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50OyB9XFxuXFxuLmljb24tc21hbGwge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7IH1cXG5cXG4uaWNvbi1tZWRpdW0ge1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDM1cHg7IH1cXG5cXG4uaWNvbi1sYXJnZSB7XFxuICB3aWR0aDogNDJweDtcXG4gIGhlaWdodDogNDJweDsgfVxcblxcbi5pY29uLWh1Z2Uge1xcbiAgd2lkdGg6IDY1cHg7XFxuICBoZWlnaHQ6IDY1cHg7IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcXG4gIC5pY29uLXNtYWxsIHtcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDsgfVxcbiAgLmljb24tbWVkaXVtIHtcXG4gICAgd2lkdGg6IDQ1cHg7XFxuICAgIGhlaWdodDogNDVweDsgfVxcbiAgLmljb24tbGFyZ2Uge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4OyB9IH1cXG5cXG4uaWNvbiBpbWcge1xcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4uaWNvbi1zbWFsbCBpbWcge1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7IH1cXG5cXG4uaWNvbi1tZWRpdW0gaW1nIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4OyB9XFxuXFxuLmljb24tbGFyZ2UgaW1nIHtcXG4gIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDsgfVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xcbiAgLmljb24tc21hbGwgaW1nIHtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIGhlaWdodDogMThweDsgfVxcbiAgLmljb24tbWVkaXVtIGltZyB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7IH1cXG4gIC5pY29uLWxhcmdlIGltZyB7XFxuICAgIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogMjVweCAhaW1wb3J0YW50OyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx1SUFBQTtBQVFBLDJCQUFBO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsK0RBQW9ELEVBQUE7O0FBR3REO0VBQ0UscUJBQXFCO0VBQ3JCLCtEQUEyRCxFQUFBOztBQUc3RDtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UseUJBdkJ1QixFQUFBOztBQXlCekI7RUFDRSxxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSxzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSx5QkE3QnVCO0VBOEJ2Qiw4Q0FBOEMsRUFBQTs7QUFFaEQ7RUFDRSwyREFBMkQ7RUFDM0QseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxrQkFBa0I7RUFFbEIsV0FBVztFQUNYLHVCQUF1QixFQUFBO0VBSnpCO0lBTUksdUJBQXVCLEVBQUE7O0FBRzNCLDJJQUFBO0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBdER1QjtFQXVEdkIsc0RBQXNEO0VBQ3RELG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVksRUFBQTtFQUdkO0lBQ0UsV0FBVztJQUNYLFlBQVksRUFBQTtFQUdkO0lBQ0UsV0FBVztJQUNYLFlBQVksRUFBQSxFQUNiOztBQUdIO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdaO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBR2Q7SUFDRSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBR2Q7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCLEVBQUEsRUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQkFTSUNTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcclxcblxcclxcbi8vJGJhY2tncm91bmRfY2FyZDogIzIxMjEyMTtcXHJcXG4kYmFja2dyb3VuZF9ib2R5OiAjMjkyZTMyO1xcclxcbiRiYWNrZ3JvdW5kX2NhcmQ6IHJnYmEoNzMsIDczLCA3MywgMC44NjcpO1xcclxcbiRiYWNrZ3JvdW5kX2NhcmQ6ICMxMzE2Mjk7XFxyXFxuJGJhY2tncm91bmRfY2FyZDogIzIxMjEyMTtcXHJcXG5cXHJcXG4vKioqKioqKioqKkZPTlQqKioqKioqKioqKiovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogQ2FyZFRpdGxlO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnQvTWFyay1Cb2xkLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogQ2FyZFRleHQ7XFxyXFxuICBzcmM6IHVybChcXFwiLi4vZm9udC9NZXNzaW5hU2Fucy1Cb29rLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZF9ib2R5O1xcclxcbn1cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuI25hbWVDYXRlZ29yeSB7XFxyXFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4uY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZF9jYXJkO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDFweCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG59XFxyXFxuLmNhcmQtdGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XFxyXFxuICBjb2xvcjogI2U4ZDYzOSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4udGV4dC1tdXRlZCB7XFxyXFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcclxcbiAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuLmJhY2staG9tZSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxyXFxuICAvL1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXHJcXG4gIC5idG4ge1xcclxcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEdFTkVSQUwgSUNPTlMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZF9jYXJkO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQsIGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNWVtO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5pY29uLW5wIHtcXHJcXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXHJcXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XFxyXFxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24tc21hbGwge1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5pY29uLW1lZGl1bSB7XFxyXFxuICB3aWR0aDogMzVweDtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24tbGFyZ2Uge1xcclxcbiAgd2lkdGg6IDQycHg7XFxyXFxuICBoZWlnaHQ6IDQycHg7XFxyXFxufVxcclxcblxcclxcbi5pY29uLWh1Z2Uge1xcclxcbiAgd2lkdGg6IDY1cHg7XFxyXFxuICBoZWlnaHQ6IDY1cHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xcclxcbiAgLmljb24tc21hbGwge1xcclxcbiAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmljb24tbWVkaXVtIHtcXHJcXG4gICAgd2lkdGg6IDQ1cHg7XFxyXFxuICAgIGhlaWdodDogNDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pY29uLWxhcmdlIHtcXHJcXG4gICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmljb24gaW1nIHtcXHJcXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1zbWFsbCBpbWcge1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5pY29uLW1lZGl1bSBpbWcge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pY29uLWxhcmdlIGltZyB7XFxyXFxuICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xcclxcbiAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xcclxcbiAgLmljb24tc21hbGwgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDE4cHg7XFxyXFxuICAgIGhlaWdodDogMThweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pY29uLW1lZGl1bSBpbWcge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmljb24tbGFyZ2UgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDI1cHggIWltcG9ydGFudDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2F0ZWdvcnkuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhdGVnb3J5LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYXBwXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgXCIuLi9jc3MvaG9tZS5zY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9tYWluLnNjc3NcIjtcclxuaW1wb3J0IFwiLi4vY3NzL2NhdGVnb3J5LnNjc3NcIjtcclxuXHJcbi8qIFxyXG48ZGl2XHJcbiAgICAgIGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgdG9wLTBcIlxyXG4gICAgICBzdHlsZT1cIndpZHRoOiAxMDAlOyBkaXNwbGF5OiBub25lXCJcclxuICAgICAgaWQ9XCJhbGVydF9jYXRlZ29yeVwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlclwiPlxyXG4gICAgICAgIFRoZSByZXNlYXJjaCByZXR1cm5lZCBubyByZXN1bHRzXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJoZXJvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgc3R5bGU9XCJ3aWR0aDogMjByZW1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3M9XCJjYXJkLXRpdGxlXCI+T05MSU5FIEJPT0s8L2gxPlxyXG4gICAgICAgICAgPGg2IGNsYXNzPVwiY2FyZC1zdWJ0aXRsZSBtYi0yIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgV2VsY29tZSwgc2VhcmNoIGJvb2tzIGJ5IGNhdGVnb3J5XHJcbiAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgPGZvcm0gbWV0aG9kPVwiZ2V0XCIgYWN0aW9uPVwiXCIgbmFtZT1cInNlYXJjaF9jYXRlZ29yeVwiIGNsYXNzPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIG1lLTJcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZmFudGFzeSwgaG9ycm9yIGV0Yy4uXCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8IS0tb25jbGljaz1cImdldEJvb2tDYXRlZ29yeShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnknKS52YWx1ZSlcIi0tPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT1cImhlaWdodDogMTBlbVwiPjwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4qL1xyXG5cclxuLypsZXQgaW1nID0gYXhpb3NcclxuICAgICAgICAuZ2V0KGBodHRwczovL2NvdmVycy5vcGVubGlicmFyeS5vcmcvYi9pZC8ke2VsZS5jb3Zlcl9pZH0tTS5qcGdgLCB7XHJcbiAgICAgICAgICByZXNwb25zZVR5cGU6IFwiYXJyYXlidWZmZXJcIixcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgbGV0IGltYWdlID0gYnRvYShcclxuICAgICAgICAgICAgbmV3IFVpbnQ4QXJyYXkocmVzcG9uc2UuZGF0YSkucmVkdWNlKFxyXG4gICAgICAgICAgICAgIChkYXRhLCBieXRlKSA9PiBkYXRhICsgU3RyaW5nLmZyb21DaGFyQ29kZShieXRlKSxcclxuICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICByZXR1cm4gYGRhdGE6JHtyZXNwb25zZS5oZWFkZXJzW1xyXG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiXHJcbiAgICAgICAgICBdLnRvTG93ZXJDYXNlKCl9O2Jhc2U2NCwke2ltYWdlfWA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgICAgUHJvbWlzZS5hbGwoW2ltZ10pLnRoZW4oKHZhbHVlcykgPT4ge1xyXG4gICAgICAgIGFycmF5Qm9vay5wdXNoKHtcclxuICAgICAgICAgIHRpdGxlOiBlbGUudGl0bGUsXHJcbiAgICAgICAgICBrZXk6IGVsZS5rZXksXHJcbiAgICAgICAgICBhdXRob3JzOiBlbGUuYXV0aG9ycyxcclxuICAgICAgICAgIGltYWdlOiB2YWx1ZXNbMF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pOyovXHJcbi8qbGV0IGF1dGhvciA9IGF4aW9zXHJcbiAgICAuZ2V0KGBodHRwczovL29wZW5saWJyYXJ5Lm9yZyR7cmVzcG9uc2VbMV0ua2V5fS5qc29uYClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIC8vIGhhbmRsZSBlcnJvclxyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KTtcclxuXHJcbiAgbGV0IGltZyA9IGF4aW9zXHJcbiAgICAuZ2V0KGBodHRwczovL2NvdmVycy5vcGVubGlicmFyeS5vcmcvYi9pZC8ke2F1dGhvci5jb3ZlcnNbM119LU0uanBnYCwge1xyXG4gICAgICByZXNwb25zZVR5cGU6IFwiYXJyYXlidWZmZXJcIixcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgbGV0IGltYWdlID0gYnRvYShcclxuICAgICAgICBuZXcgVWludDhBcnJheShyZXNwb25zZS5kYXRhKS5yZWR1Y2UoXHJcbiAgICAgICAgICAoZGF0YSwgYnl0ZSkgPT4gZGF0YSArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSksXHJcbiAgICAgICAgICBcIlwiXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gYGRhdGE6JHtyZXNwb25zZS5oZWFkZXJzW1xyXG4gICAgICAgIFwiY29udGVudC10eXBlXCJcclxuICAgICAgXS50b0xvd2VyQ2FzZSgpfTtiYXNlNjQsJHtpbWFnZX1gO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgLy8gaGFuZGxlIGVycm9yXHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pOyovXHJcblxyXG4vKlByb21pc2UuYWxsKFtyZXNwb25zZSAvKiwgYXV0aG9yLCBpbWddKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codHlwZW9mIHZhbHVlWzBdKTtcclxuICAgIGlmICh2YWx1ZVswXS5sZW5naHQgPT09IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGFycmF5Qm9vayA9IFtdO1xyXG4gICAgICB2YWx1ZVswXS5mb2FyZWNoKChlbGUpID0+IHtcclxuICAgICAgICBhcnJheUJvb2sucHVzaCh7IHRpdGxlOiBlbGUudGl0bGUsIGtleTogZWxlLmtleSwgYXV0aG9yczogZWxlLmF1dGhvcnMgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlc10gb2YgT2JqZWN0LmVudHJpZXModmFsdWVbMF0pKSB7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gXCJcIjtcclxuICAgICAgICBsZXQgd29ya0lkID0gXCJcIjtcclxuICAgICAgICBsZXQgYXV0aG9yID0gW107XHJcbiAgICAgICAgaWYgKGtleSA9PT0gXCJ0aXRsZVwiKSB7XHJcbiAgICAgICAgICB0aXRsZSA9IHZhbHVlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleSA9PT0gXCJrZXlcIikge1xyXG4gICAgICAgICAgd29ya0lkID0gdmFsdWVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5ID09PSBcImF1dGhvcnNcIikge1xyXG4gICAgICAgICAgYXV0aG9yID0gdmFsdWVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBhcnJheUJvb2sucHVzaCh7IHRpdGxlOiB0aXRsZSwga2V5OiB3b3JrSWQsIGF1dGhvcnM6IGF1dGhvciB9KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhhcnJheUJvb2spO1xyXG4gICAgICAvKmxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgIGltYWdlLnNyYyA9IHZhbHVlWzJdO1xyXG4gIFxyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgIH1cclxuICB9KTsqL1xyXG5cclxuLy8gUmljZXJjYSBsaWJyaVxyXG4vKlxyXG5hc3luYyBmdW5jdGlvbiBnZXRJbWcoZWxlKSB7XHJcbiAgbGV0IGltZyA9IGF3YWl0IGF4aW9zXHJcbiAgICAuZ2V0KGBodHRwczovL2NvdmVycy5vcGVubGlicmFyeS5vcmcvYi9pZC8ke2VsZX0tTS5qcGdgLCB7XHJcbiAgICAgIHJlc3BvbnNlVHlwZTogXCJhcnJheWJ1ZmZlclwiLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBsZXQgaW1hZ2UgPSBidG9hKFxyXG4gICAgICAgIG5ldyBVaW50OEFycmF5KHJlc3BvbnNlLmRhdGEpLnJlZHVjZShcclxuICAgICAgICAgIChkYXRhLCBieXRlKSA9PiBkYXRhICsgU3RyaW5nLmZyb21DaGFyQ29kZShieXRlKSxcclxuICAgICAgICAgIFwiXCJcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBgZGF0YToke3Jlc3BvbnNlLmhlYWRlcnNbXHJcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIlxyXG4gICAgICBdLnRvTG93ZXJDYXNlKCl9O2Jhc2U2NCwke2ltYWdlfWA7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAvLyBoYW5kbGUgZXJyb3JcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgLy9jb25zb2xlLmxvZyhcInNzXCIsIGltZyk7XHJcbiAgcmV0dXJuIGltZztcclxufSovXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==