"use strict"

const Item = require('./Item.js');


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
