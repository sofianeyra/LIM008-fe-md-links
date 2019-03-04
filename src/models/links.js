// calling modules
const myPath = require('path'); 
const fs = require('fs'); 
const marked = require('marked'); 

export const evaluatePath = (path) => {
  const typeOfPath = myPath.isAbsolute(path);
  return typeOfPath;
};

export const IsFile = (pathAbs) => {
  const typeFile = fs.statSync(pathAbs).isFile();
  return typeFile;
};

export const convertToAbsolutePath = (path) => {
  const absolutePath = myPath.resolve(path);
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

export const route = 'D:\\Proyects\\LIM008-fe-md-links\\proof\\text2.md';
export const convertToHTML = (route) => {
  const file = fs.readFileSync(route, 'utf8');
  // Return links in an array
  const links = [];
  const renderer = new marked.Renderer();

  renderer.link = (href, title, text, route) => {
    links.push({
      href: href,
      text: text,
      title: title,
      route: route,
    });
  };
  marked(file, {renderer: renderer});
  return links;
};