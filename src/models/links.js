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

export const getFiles = (pathDirOrFile) => {
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

export const verifyExtName = (nameFile) => {
  const extMd = /\.(md|mkdn|mdown|markdown?)$/i;
  return extMd.test(myPath.extname(nameFile));
};

export const extractLinks = (arrFiles) => {
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
    marked(dataFile, { renderer: renderer });
  });
  return links;
};