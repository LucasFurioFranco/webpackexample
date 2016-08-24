"use strict"

const Item = require('./Item.js');
const Weapon = require('./Weapon.js');
const SkillSet = require('./SkillSet.js');


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
//console.log("1.0: " + damage);
      }
      else{
        damage = this.skill.getSkill("strength");
//console.log("1.1: " + damage);
      }
      console.log(this.name + " defers " + damage + " of brute damage");
//console.log("2.0: " + damage);
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
