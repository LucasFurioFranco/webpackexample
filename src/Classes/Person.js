"use strict"

const Item = require('./Item.js');
const Weapon = require('./Weapon.js');


function getMeleeDamage(){
  return 1;
}

function getDistanceDamage(){
  return 1;
}

class Person{
  constructor(name, life, position){
    this.name = name;
    this.life = life;
    this.position = position;
    this.itens = new Array();

    this.skill = {
      'endurance': {'value': 1, 'experience': 1},
      'strength': {'value': 1, 'experience': 1},
      'speed': {'value': 1, 'experience': 1},
      'dexterity': {'value': 1, 'experience': 1},
      'aim': {'value': 1, 'experience': 1}
    };

    this.equip = {
      'pocket1': undefined, 'pocket2': undefined,
      'handLeft': undefined, 'handRight': undefined,
      'armLeft': undefined, 'armRight': undefined,
      'feet': undefined,
      'legs': undefined,
      'torso': undefined,
      'ammo': 1
    }

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

    }
  };
}

module.exports = Person;
