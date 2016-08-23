class Person{
  constructor(name){
    this.name = name;
  }
  this.say(str){
    return this.name + " says \"" + str + "\"";
  }
  this.shout(str){
    return this.name + " shouts \"" + str + "\"";
  }
}
module.exports = Person;
