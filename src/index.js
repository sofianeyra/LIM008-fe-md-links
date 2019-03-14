// calling functions
import {
  convertToAbsolutePath,
  extractLinks, 
  getFiles,
} from './models/links.js';
import {
  verifyLinks
} from './models/validate.js';
const fs = require('fs');

export const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(path)) {
      const arrRouteMd = convertToAbsolutePath(path);
      const arrLinksMd = extractLinks(arrRouteMd);
      if (arrLinksMd.length === 0) {
        resolve('Tu archivo o carpeta no contiene links');
      } 
      if (options.validate) {
        resolve(verifyLinks(arrLinksMd));
      } else {
        resolve(arrLinksMd);
      }
    } else {
      resolve(`Ruta no encontrada: ${convertToAbsolutePath(path)}`);
    }
  });
};