"use strict";

var _links = require("./models/links.js");

var _validate = require("../src/models/validate.js");

var _stats = require("../src/models/stats.js");

const fs = require('fs');

const myPath = require('path');

const marked = require('marked'); // calling functions


// main function
const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(path)) {
      const arrRouteMd = (0, _links.getFiles)((0, _links.convertToAbsolutePath)(path));
      const arrLinksMd = (0, _links.extractLinks)(arrRouteMd);

      if (arrLinksMd.length === 0) {
        resolve('Tu archivo o carpeta no tiene links');
      }

      if (options.validate && options.stats) {
        resolve((0, _stats.calculateValidateStats)(arrLinksMd));
      } else if (options.validate && !options.stats) {
        (0, _validate.verifyLinks)(arrLinksMd).then(response => resolve(response));
      } else if (options.stats && !options.validate) {
        resolve((0, _stats.calculateStats)(arrLinksMd));
      } else {
        resolve(arrLinksMd);
      }
    } else {
      resolve(`La ruta colocada no existe ${(0, _links.convertToAbsolutePath)(path)}`);
    }
  });
};

module.exports = mdLinks;