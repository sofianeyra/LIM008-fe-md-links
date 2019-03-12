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
  const brokenLinks = (arrObj.filter(links => (links.value === 'Fail')));
  return brokenLinks.length;
};
  
export const calculateStats = (arrLinks) => {
  let result;
  result = {
    total: arrLinks.length, 
    unique: calculateUniqueLinks(arrLinks)};
  return result;
};

export const calculateValidateStats = (arrLinks) => {
  let result;
  result = {
    total: arrLinks.length, 
    unique: calculateUniqueLinks(arrLinks), 
    broken: calculateBrokenLinks(arrLinks)};
  return result;
};
