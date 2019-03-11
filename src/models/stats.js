export const calculateUniqueLinks = (arrLinks) => {
  const uniqueLinks = arrLinks.reduce((acum, obj) => {
    if (acum.indexOf(obj.href) === -1) {
      acum.push(obj.href);
    }
    return acum;
  }, []);
  return uniqueLinks.length;
};
  
export const calculateBrokenLinks = (arrObj) => {
  const brokenLinks = (arrObj.filter(links => (links.value === 'Fail'))).length;
  return brokenLinks;
};
  
export const calculateStats = (arrLinks, option) => {
  let result;
  if (option === 'validate') {
    result = `Total: ${arrLinks.length}, Unique: ${calculateUniqueLinks(arrLinks)}, Broken: ${calculateBrokenLinks(arrLinks)}`;
  } else {
    result = `Total: ${arrLinks.length}, Unique: ${calculateUniqueLinks(arrLinks)}`;
  }
  return result;
};
