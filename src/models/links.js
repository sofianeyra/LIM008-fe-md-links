export const evaluatePath = (path) => {
  if (path.isAbsolute) return true;
  else return false;
};
    
export const transformToAbsPath = (path) => {
  const relativePath = path;
  const absolutePath = 'C:/absolutePath/file.md';
  return absolutePath;
};
    
export const recognizeIfItsFile = (pathAbs) => {
  if (pathAbs) return true;
  else return false;
};
    
export const getFiles = (pathAbs) => {
  if (pathAbs) {
    const arrPath = ['path1', 'path2'];
    return arrPath;
  }
};
    
export const getMdContent = (pathAbsolute) => {
  if (pathAbsolute) {
    const content = 'md content';
    return content;
  }
};
    
export const convertMdToHtml = (content) => {
  if (content) {
    const htmlContent = 'some HTML content';
    return htmlContent;
  }
};

export const extractATagAttr = (htmlstring) => {
  if (htmlstring) {
    const attrLinks = {
      href: 'link',
      text: 'text',
      file: 'path',
    };
    return attrLinks;
  }
};
    
export const createArrLinkObj = (attrLinks) => {
  if (attrLinks) {
    const arrObjInfLinks = [{
      href: 'link',
      text: 'text',
      file: 'path',
    }];
    return arrObjInfLinks;
  }
};