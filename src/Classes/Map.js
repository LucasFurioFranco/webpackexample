"use strict";

const Wall = require('./Wall.js');
const Person = require('./Person.js');
const Bullet = require('./Bullet.js');

class Map {
  constructor(walls, persons, bullets) {
    /*Verifica se walls é um vetor de objetos. Caso seja um objeto que não um vetor, não haverá walls*/
    this.walls = (typeof walls === "object" && walls.forEach)? walls : typeof walls === "object"? [walls] : [];
    this.persons = (typeof persons === "object" && persons.forEach)? persons : typeof persons === "object"? [persons] : [];
    this.bullets = (typeof bullets === "object" && bullets.forEach)? bullets : typeof bullets === "object"? [bullets] : [];

    /*Methods*/
    this.updatePersons = function(){
      this.persons = (typeof persons === "object" && persons.forEach)? persons : typeof persons === "object"? [persons] : [];
      return this.persons;
    };
    this.updateBullets = function(){
      this.bullets = (typeof bullets === "object" && bullets.forEach)? bullets : typeof bullets === "object"? [bullets] : [];
      return this.bullets;
    };
    this.identity = function(){
      console.info(this);
    };
  }
}

module.exports = Map;
