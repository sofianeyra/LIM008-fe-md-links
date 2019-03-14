#!/usr/bin/env node
"use strict";

var _index = require("./index.js");

var _stats = require("./models/stats.js");

const args = process.argv.slice(2);
const options = {
  validate: false,
  stats: false
};
let path = args[0]; // si no ingresa ruta

if (args.length === 0) {
  console.log('Ingrese una ruta, por ejemplo: md-links ./some/example\n');
} // si solo ingresa la ruta


if (args.length === 1) {
  (0, _index.mdLinks)(path, options).then(resp => resp.forEach(element => console.log(`${element.path}\n ${element.href}\n ${element.text}\n`))).catch(err => console.log(err));
}

; // si ingresa una opción, en este caso validate

if (args.length === 2) {
  if (args[1] === '--validate') {
    options.validate = true;
    (0, _index.mdLinks)(path, options).then(resp => resp.forEach(element => console.log(` ${element.path}\n ${element.href}\n ${element.value}\n ${element.status}\n ${element.text}\n`))).catch(err => err); // si ingresa una opción, en este caso stats
  } else if (args[1] === '--stats') {
    options.stats = true;
    (0, _index.mdLinks)(path, options).then(resp => resp.forEach(element => console.log(` Total: ${(0, _stats.calculateTotalLinks)(element)}\n Unique: ${(0, _stats.calculateUniqueLinks)(element)}\n`))).catch(err => console.log(err));
  }
}

; // si ingresa ambas opciones

if (args.length === 3) {
  if (args[1] === '--validate' && args[2] === '--stats') {
    options.validate = true;
    options.stats = true;
    (0, _index.mdLinks)(path, options).then(resp => resp.forEach(element => console.log(`Total: ${(0, _stats.calculateTotalLinks)(element)}\n Unique: ${(0, _stats.calculateUniqueLinks)(element)}\n Broken: ${(0, _stats.calculateBrokenLinks)(element)}\n`))).catch(err => console.log(err));
  } else if ((args[1] === '--stats' || args[1] === '--s') && (args[2] === '--validate' || args[2] === '--v')) {
    options.validate = true;
    options.stats = true;
    (0, _index.mdLinks)(path, options).then(resp => resp.forEach(element => console.log(`Total: ${(0, _stats.calculateTotalLinks)(element)}\n Unique: ${(0, _stats.calculateUniqueLinks)(element)}\n Broken: ${(0, _stats.calculateBrokenLinks)(element)}\n`))).catch(err => console.log(err));
  }
}

;