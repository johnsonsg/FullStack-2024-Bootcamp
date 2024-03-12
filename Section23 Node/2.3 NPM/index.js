// without package.js type: module
//var generateName = require('sillyname');

// with package.js type: module
/** 
import generateName from 'sillyname';

var sillyName = generateName();
console.log(`My silly name is ${sillyName}!`);
*/

// SuperHero Name
// const superheroes = require("superheroes");
import superheroes from "superheroes";

const name = superheroes.random();
console.log(`I am ${name}!`);