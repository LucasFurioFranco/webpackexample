"use strict"
const _config = require('./src/config.js');
const Person = require(_config.path.classes + 'Person.js');
const Map = require(_config.path.classes + 'Map.js');
const Canvas = document.getElementById(_config.canvasId);
const CanvasContext = Canvas.getContext("2d");

function draw(){
  CanvasContext.fillStyle =  "#123456";
	CanvasContext.fillRect(0, 0, 100, 200);
}

let map = new Map();
let player = new Person();
