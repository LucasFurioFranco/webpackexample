"use strict"

class SkillSet{
  constructor(){
    this.skill = {
      'endurance': {'value': 1},
      'strength': {'value': 1},
      'speed': {'value': 1},
      'dexterity': {'value': 1},
      'aim': {'value': 1}
    };
    this.experience = {
      'endurance': 1,
      'strength': 1,
      'speed': 1,
      'dexterity': 1,
      'aim': 1
    };
    this.facility = {
      'endurance': 1,
      'strength': 1,
      'speed': 1,
      'dexterity': 1,
      'aim': 1
    };
    this.getSkill = function(s){
      return this.skill[s];
    };
    this.getExperience = function(s){
      return this.experience[s];
    };
  };
}
module.exports = SkillSet;
