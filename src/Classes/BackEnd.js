"use strict";

const Map = require('./Map.js');
const Wall = require('./Wall.js');
const Person = require('./Person.js');
const Bullet = require('./Bullet.js');

class BackEnd{
  constructor(maps){
    this.maps = maps;
    this.identify = function(){
      console.info(this);
    };
  }
}

module.exports = BackEnd;
