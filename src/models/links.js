// calling modules
const myPath = require('path'); 
const fs = require('fs'); 
const marked = require('marked'); 

export const evaluatePath = (path) => {
  const typeOfPath = myPath.isAbsolute(path);
  return typeOfPath;
};

export const IsFile = (absolutePath) => {
  const typeFile = fs.statSync(absolutePath).isFile();
  return typeFile;
};

export const convertToAbsolutePath = (path) => {
  let absolutePath = myPath.resolve(path);
  return absolutePath;
};

export const getFiles = (absolutePath) => {
  let files = fs.readdirSync(absolutePath);
  files.forEach((element) => {
    let currentFile = myPath.join(absolutePath, element);
    if (fs.statSync(currentFile).isFile() && myPath.extname(currentFile) === '.md') {
      files.push(currentFile);
    } else if (fs.statSync(currentFile).isDirectory()) {
      getFiles(currentFile);
    }
  });
  return files;
};

export const getMdContent = (absolutePath) => {
  const contents = fs.readFileSync(absolutePath, 'utf8');
  return contents;
};

export const extractLinks = (absolutePath) => {
  const file = fs.readFileSync(absolutePath, 'utf8');
  let links = [];
  const renderer = new marked.Renderer();
  renderer.link = (href, title, text) => {
    links.push({
      href: href,
      text: text.slice(0, 50),
      path: absolutePath,
    });
  };
  marked(file, {renderer: renderer});
  return links;
};


