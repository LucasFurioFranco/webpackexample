"use strict";
/*
const Person = require('Person.js');
const Bullet = require('Bullet.js');
*/
class Map {
  constructor() {
    this.generalPosition = {
      'x': 0,
      'y': 0
    };
    this.dimensions = {
      'x': 600,
      'y': 600
    };
    this.walls = [{
      'minX': 300,
      'maxX': 330,
      'minY': 50,
      'maxY': 400
    }];

    this.getWalls = function(){
      return this.walls;
    };
  }
}

module.exports = Map;
