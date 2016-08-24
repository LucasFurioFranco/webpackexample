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
