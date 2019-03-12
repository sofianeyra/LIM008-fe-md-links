"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractLinks = exports.verifyExtName = exports.getFiles = exports.convertToAbsolutePath = exports.evaluatePath = void 0;

// calling modules
const fs = require('fs');

const myPath = require('path');

const marked = require('marked');

const evaluatePath = path => {
  const typeOfPath = myPath.isAbsolute(path);
  return typeOfPath;
};

exports.evaluatePath = evaluatePath;

const convertToAbsolutePath = path => {
  let absolutePath = myPath.resolve(path);
  return absolutePath;
};

exports.convertToAbsolutePath = convertToAbsolutePath;

const getFiles = pathDirOrFile => {
  let arrFiles = [];
  const statFile = fs.lstatSync(pathDirOrFile);

  if (statFile.isFile()) {
    const fileMd = verifyExtName(pathDirOrFile);

    if (fileMd) {
      arrFiles.push(pathDirOrFile);
    }
  } else if (statFile.isDirectory()) {
    const files = fs.readdirSync(pathDirOrFile);
    files.forEach(file => {
      arrFiles = arrFiles.concat(getFiles(myPath.join(`${pathDirOrFile}`, `${file}`)));
    });
  }

  return arrFiles;
};

exports.getFiles = getFiles;

const verifyExtName = nameFile => {
  const extMd = /\.(md|mkdn|mdown|markdown?)$/i;
  return extMd.test(myPath.extname(nameFile));
};

exports.verifyExtName = verifyExtName;

const extractLinks = arrFiles => {
  const links = [];
  const getLinks = arrFiles.forEach(file => {
    const dataFile = fs.readFileSync(file, 'utf8');
    const renderer = new marked.Renderer();

    renderer.link = (href, title, text) => {
      links.push({
        href: href,
        text: text.slice(0, 50),
        path: file
      });
    };

    marked(dataFile, {
      renderer: renderer
    });
  });
  return links;
};

exports.extractLinks = extractLinks;