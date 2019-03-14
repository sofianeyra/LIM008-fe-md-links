// calling modules
const fs = require('fs');
const myPath = require('path');
const marked = require('marked'); 

export const evaluatePath = (path) => {
  const typeOfPath = myPath.isAbsolute(path);
  return typeOfPath;
};

export const convertToAbsolutePath = (path) => {
  let absolutePath = myPath.resolve(path);
  return absolutePath;
};

export const isADirectory = (route) => {
  const thePath = fs.lstatSync(route).isDirectory();
  return thePath;
};

export const getFiles = (route) => {
  const applyDirStats = isADirectory(route);
  let arrFiles = [];
  if (applyDirStats === false) {
    arrFiles.push(route);
  } else { 
    const file = fs.readdirSync(route);
    file.forEach((element) => {
      const childOfDir = myPath.join(route, element);
      const stats = fs.lstatSync(childOfDir);
      if (stats.isDirectory()) {
        arrFiles = arrFiles.concat(getFiles(childOfDir));
      } else { 
        arrFiles.push(childOfDir);
      }
    });
  }
  return arrFiles;
};

export const extractLinks = (AllFiles) => {
  const links = [];
  const getLinks = getFiles(AllFiles);
  getLinks.forEach(file => {
    const dataFile = fs.readFileSync(file, 'utf8');
    const renderer = new marked.Renderer();
    renderer.link = (href, title, text) => {
      links.push({
        href: href,
        text: text.slice(0, 50),
        path: file
      });
    };
    marked(dataFile, { renderer: renderer });
  });
  return links;
};