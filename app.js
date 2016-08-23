"use strict"
const _config = require('./src/path.js');
const Person = require(_config.path.classes + 'Person.js');
let cats = require(_config.path.classes + 'Cat.js');

let person = [
  new Person("fulano"),
  new Person("ciclano")
];

person[0].say("hellom how are you?");
person[1].say("I'm fine, how about you?");
person[0].shout("GO TO HELL");
