/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict"
	const _config = __webpack_require__(1);
	const Person = __webpack_require__(2)(_config.path.classes + 'Person.js');
	let cats = __webpack_require__(4)(_config.path.classes + 'Cat.js');

	let person = [
	  new Person("fulano"),
	  new Person("ciclano")
	];

	person[0].say("hellom how are you?");
	person[1].say("I'm fine, how about you?");
	person[0].shout("GO TO HELL");


/***/ },
/* 1 */
/***/ function(module, exports) {

	__config__ = {
	  'path': {
	    'classes' : './src/Classes/'
	  }
	}
	module.exports = __config__;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./src/Classes/Person.js": 3
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 2;


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict"
	class Person{
	  constructor(name){
	    this.name = name;
	    this.say = function(str){
	      console.log(this.name + " says \"" + str + "\"");
	    }
	    this.shout = function(str){
	      console.log(this.name + " shouts \"" + str + "\"");
	    };
	  };
	}
	module.exports = Person;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./src/Classes/Cat.js": 5
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 4;


/***/ },
/* 5 */
/***/ function(module, exports) {

	var cats = ['dave', 'henry', 'martha'];
	module.exports = cats;


/***/ }
/******/ ]);