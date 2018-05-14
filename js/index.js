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

window.alert("hello world");

array = ["beans"]

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push('I am 1 strange loop.');
    } else {
      array.push('I am ${i} strange loops.');
    }
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return "done"
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }


  do {
    array.pop();
  } while (array.length > 0 && maybeTrue())
  return array
}


const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
      array.push(musicians[i] + " plays " + instruments[i])
  }
  return array;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var factsPlus = []
  var i = 0
  while (facts.length > factsPlus.length) {
    factsPlus.push(facts[i] + "!!!")
    i++
  }
  return factsPlus
}

*/


var array = [];

function takeANumber(array, name) {
  array.push(name)
  return "Welcome, " + name + ". You are number " + array.length + " in line."
}



function nowServing(array) {
  var arrayLength = array.length;
  if (arrayLength > 0) {
    return "Currently serving " + array.shift() + ".";
  } else if (arrayLength === 0) {
    return "There is nobody waiting to be served!";
  }
}


var line = [];

function currentLine(array) {
  var arrayLength = array.length
  if (arrayLength === 0) {
      return "The line is currently empty.";
    } else {
      for (var i=0; i<arrayLength; i++) {
      line.push(" " + (i+1) + ". " + array[i])
    }
    return "The line is currently:" + line;
  }
}



});
