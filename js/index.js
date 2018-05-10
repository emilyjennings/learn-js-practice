$(document).ready(function(){
  /*
animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat'
  return animal
}

function add2(n) {
  var two = 2
  return n + two

  // Feel free to move things around!

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()



var funkyFunction = function() { // funkyFunction
  return function() { // funkyFunction()
    return "FUNKY!"; // funkyFunction()()
  };
};

var theFunk = funkyFunction()();




-----
const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  name = "Ralph";
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  name = "Bob";
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(){
  var newArray = [...kittens, "Broom"];
  return newArray;
}

function prependKitten(){
  var newArray = ["Arnold", ...kittens];
  return newArray;
}

function removeLastKitten(){
  var newArray = kittens.slice(0, kittens.length-1);
  return newArray;
}

function removeFirstKitten() {
  var newArray = kittens.slice(-2);
  return newArray;
}




----
var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newRecipes = Object.assign({[key]: value}, object);
  return newRecipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  Object.assign({}, object);
  return object
}

function deleteFromObjectByKey(object, key) {
  var newRecipes = Object.assign({}, recipes)
  return newRecipes
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}



----
var playlist = { "Slowdive": "Alison", "My Bloody Valentine": "Sometimes"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist["Phil Ochs"] = "Here's to the State of Mississippi";
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist["Slowdive"]
}
*/
window.alert("hello world");

var array = [];
i = 3

function forLoop(array) {

for (var i = 0; i < 24; i++) {
  if (i === 1) {
    array.push("I am 1 strange loop.");
  } else {
    array.push("I am ${i} strange loop.");
  }
}

}



});
