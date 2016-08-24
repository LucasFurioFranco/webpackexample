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

	let person = [
	  new Person("fulano"),
	  new Person("ciclano")
	];

	var a = person[0];
	var b = person[1];

	a.say("hellom how are you?");
	b.say("I'm fine, how about you?");
	a.shout("GO TO HELL");

	a.collectItem({
	  'type': 'money',
	  'value': 1,
	  'quantity' : 1
	});

	a.collectItem({
	  'type': 'keys',
	  'keySecret': 'ande421184',
	  'quantity' : 3
	});

	b.collectItem(a.discartLasttItem());

	a.printItens();

	b.printItens();

	console.log("\n\n");

	b.receiveDamage(a.attack());
	b.receiveDamage(a.attack());
	a.receiveDamage(b.attack());
	b.receiveDamage(a.attack());
	a.receiveDamage(b.attack());
	a.receiveDamage(b.attack());


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict"

	module.exports = (function(){
	  return {
	    'path': {
	      'classes' : './src/Classes/'
	    }
	  };
	})();


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
/***/ function(module, exports, __webpack_require__) {

	"use strict"

	const Item = __webpack_require__(4);
	const Weapon = __webpack_require__(5);
	const SkillSet = __webpack_require__(6);


	function getMeleeDamage(){
	  return 1;
	}

	function getDistanceDamage(){
	  return 1;
	}

	class Person{
	  constructor(name, life, position){
	    life = Number(life) || 100;

	    this.name = name;
	    this.life = life;
	    this.position = position;
	    this.itens = new Array();
	    this.skill = new SkillSet();

	    this.equip = {
	      'pocket1': undefined, 'pocket2': undefined,
	      'handLeft': undefined, 'handRight': undefined,
	      'armLeft': undefined, 'armRight': undefined,
	      'feet': undefined,
	      'legs': undefined,
	      'torso': undefined,
	      'ammo': 1
	    };

	    this.say = function(str){
	      console.log(this.name + " says \"" + str + "\"");
	    };
	    this.shout = function(str){
	      console.log(this.name + " shouts \"" + str + "\"");
	    };
	    this.collectItem = function(item){
	      this.itens.push(item);
	      console.log(this.name + " got the item " + JSON.stringify(item));
	    };
	    this.discartLasttItem = function(){
	      let item = this.itens.pop();
	      console.log(this.name + " drop the item " + JSON.stringify(item));
	      return item;
	    };
	    this.printItens = function(){
	      console.log(this.name + " have " + JSON.stringify(this.itens));
	    };

	    this.attack = function(){
	      let damage = 0;
	      if(this.equip.handRight && this.equip.handRight.type === "weapon"){
	        damage = this.equip.handRight.getDammage() || 0;
	console.log("1.0: " + damage);
	      }
	      else{
	        damage = this.skill.getSkill("strength");
	console.log("1.1: " + damage);
	      }
	      console.log(this.name + " defers " + damage + " of brute damage");
	console.log("2.0: " + damage);
	      return damage;
	    };
	    this.receiveDamage = function(damage){
	      this.life -= damage;
	      console.log(this.name + " receive " + damage + " of damage. Life now: " + this.life);
	      return life;
	    };
	  };
	}

	module.exports = Person;


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict"

	class Item{
	  constructor(name, type, value){
	    this.name = name;
	    this.type = type;
	    this.value = value;
	  }
	}

	module.exports = Item;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict"

	const Item = __webpack_require__(4);


	class Weapon extends Item{
	  constructor(name, type, value, weaponType, range, dificulty, baseDamage){
	    super(name, type, value);
	    this.weaponType = weaponType;
	    this.range = range;
	    this.dificulty = dificulty;

	    this.getWeaponType = function(){
	      return weaponType;
	    }
	    this.range = function(){
	      return range;
	    }

	    this.getMeleeDamage = function(){
	      return baseDamage;
	    }
	    this.getRangedDammage = function(){
	      return baseDamage;
	    }
	    this.getDammage = function(){
	      if(this.weaponType == "melee"){
	        return this.getMeleeDamage();
	      }
	      if(this.weaponType == "ranged"){
	        return this.getRangedDammage();
	      }
	    }
	  }
	}

	module.exports = Weapon;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict"

	class SkillSet{
	  constructor(endurance, strength, speed, dexterity, aim){
	    endurance = endurance || 1;
	    strength = strength || 1;
	    speed = speed || 1;
	    dexterity = dexterity || 1;
	    aim = aim || 1;

	    this.skill = {
	      'endurance': endurance,
	      'strength': strength,
	      'speed': speed,
	      'dexterity': dexterity,
	      'aim': aim
	    };
	    this.experience = {
	      'endurance': endurance,
	      'strength': strength,
	      'speed': speed,
	      'dexterity': dexterity,
	      'aim': aim
	    };
	    this.facility = {
	      'endurance': endurance,
	      'strength': strength,
	      'speed': speed,
	      'dexterity': dexterity,
	      'aim': aim
	    };
	    this.getSkill = function(s){
	      return this.skill[s];
	    };
	    this.getExperience = function(s){
	      return this.experience[s];
	    };
	    this.addSkillExperience = function(s, e){
	      this.experience[s] = Number(this.experience[s]) + Number(e);
	      return this.experience[s]
	    }
	  };
	}
	module.exports = SkillSet;


/***/ }
/******/ ]);