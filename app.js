"use strict"
const _config = require('./src/config.js');
const Person = require(_config.path.classes + 'Person.js');
let cats = require(_config.path.classes + 'Cat.js');

let person = [
  new Person("fulano"),
  new Person("ciclano")
];

var a = person[0];
var b = person[1];

a.say("hellom how are you?");
b.say("I'm fine, how about you?");
a.shout("GO TO HELL");

a.collectItem({
  'type': 'money',
  'value': 1,
  'quantity' : 1
});

a.collectItem({
  'type': 'keys',
  'keySecret': 'ande421184',
  'quantity' : 3
});

b.collectItem(a.discartLasttItem());

a.printItens();

b.printItens();
