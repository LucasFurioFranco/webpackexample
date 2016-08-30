"use strict"
const _config = require('./src/config.js');

const Person = require(_config.path.classes + 'Person.js');
const Wall = require(_config.path.classes + 'Wall.js');
const Map = require(_config.path.classes + 'Map.js');
const Bullet = require(_config.path.classes + 'Bullet.js');
const BackEnd = require(_config.path.classes + 'BackEnd.js');

const Canvas = document.getElementById(_config.canvasId);
const CanvasContext = Canvas.getContext("2d");

if(_config.debug)console.log('creating persons');
let person1 = new Person('p1', 100, {'x': 100, 'y': 300}, {'x': 1, 'y': 0}, 5);
if(_config.debug)person1.identity();
let person2 = new Person('p2', 100, {'x': 500, 'y': 300}, {'x': -1, 'y': 0}, 5);
if(_config.debug)person2.identity();

if(_config.debug)console.log('creating walls');
let walls = [
  new Wall({'x': 300, 'y': 300}, {'x': 1, 'y': 1}, 100, 10),
  new Wall({'x': 100, 'y': 100}, {'x': 1, 'y': 0}, 100, 10),
  new Wall({'x': 500, 'y': 500}, {'x': 0, 'y': 1}, 100, 10)
];
walls.forEach(function(wall, idx){
  if(_config.debug)console.info(idx + ": ");
  if(_config.debug)wall.identity();
})

if(_config.debug)console.log('creating map');
let map = new Map(walls, [person1, person2], []);
if(_config.debug)map.identity();

if(_config.debug)console.log('creating backend');
let backend = new BackEnd([[map]]);
if(_config.debug)backend.identify();

function draw(){
  CanvasContext.fillStyle =  "#123456";
	CanvasContext.fillRect(0, 0, 100, 200);
};

person1.shout("fuuuuuuuu");

person2.receiveDamage(person2.attack());

if(_config.debug)person1.identity();
if(_config.debug)person2.identity();
