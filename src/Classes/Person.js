"use strict"

class Person{

  /*Expects (String, Number, {x:Number, y:Number}, {x:Number, y:Number}, Number)*/
  constructor(name, life, position, direction, radius){
    this.name = name;
    this.life = life;
    this.position = position;
    this.direction = direction;
    this.radius = radius;

    this.say = function(str){
      console.log(this.name + " says \"" + str + "\"");
    };
    this.shout = function(str){
      console.log(this.name + " shouts \"" + str + "\"");
    };
    this.identity = function(){
      console.info(this);
    };
    this.attack = function(){
      let damage = 10;
      console.log(this.name + " defers " + damage + " of brute damage");
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
