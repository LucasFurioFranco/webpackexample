"use strict";

class Wall {
  constructor(position, direction, heidth, width) {
    this.position = position;
    this.direction = direction;
    this.heidth = heidth;
    this.width = width;

    this.identity = function(){
      console.info(this);
    };
  }
}

module.exports = Wall;
