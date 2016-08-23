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
