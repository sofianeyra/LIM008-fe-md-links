const fs = require('fs');
const myPath = require('path');
const marked = require('marked'); 

// calling functions
import {
  convertToAbsolutePath,
  extractLinks, 
  getFiles,
} from './models/links.js';
import {
  verifyLinks
} from '../src/models/validate.js';
import {
  calculateStats,
  calculateValidateStats,
  calculateBrokenLinks,
  calculateUniqueLinks,
} from '../src/models/stats.js';

// main function
const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(path)) {
      const arrRouteMd = getFiles(convertToAbsolutePath(path));
      const arrLinksMd = extractLinks(arrRouteMd);
      if (arrLinksMd.length === 0) {
        resolve('Tu archivo o carpeta no tiene links');
      }
      if (options.validate && options.stats) {
        resolve(calculateValidateStats(arrLinksMd));
      } else if (options.validate && !options.stats) {
        verifyLinks(arrLinksMd)
          .then(response => resolve(response));
      } else if (options.stats && !options.validate) {
        resolve(calculateStats(arrLinksMd));
      } else {
        resolve(arrLinksMd);
      }
    } else {
      resolve(`La ruta colocada no existe ${convertToAbsolutePath(path)}`);
    }
  });
};

module.exports = mdLinks;