"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _links = require("./models/links.js");

var _validate = require("./models/validate.js");

// calling functions
const fs = require('fs');

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(path)) {
      const arrRouteMd = (0, _links.convertToAbsolutePath)(path);
      const arrLinksMd = (0, _links.extractLinks)(arrRouteMd);

      if (arrLinksMd.length === 0) {
        resolve('Tu archivo o carpeta no contiene links');
      }

      if (options.validate) {
        resolve((0, _validate.verifyLinks)(arrLinksMd));
      } else {
        resolve(arrLinksMd);
      }
    } else {
      resolve(`Ruta no encontrada: ${(0, _links.convertToAbsolutePath)(path)}`);
    }
  });
};

exports.mdLinks = mdLinks;