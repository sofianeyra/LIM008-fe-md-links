export const calculateUniqueLinks = (arrLinks) => {
  const uniqueLinks = arrLinks.reduce((acum, obj) => {
    if (acum.indexOf(obj.href) === -1) {
      acum.push(obj.href);
    }
    return acum;
  }, []);
  return uniqueLinks.length;
};

export const calculateBrokenLinks = (arrLinks) => {
  const brokenLinks = (arrLinks.filter(links => (links.value === 'Fail')));
  return brokenLinks.length;
};

export const calculateStats = (arrObj, condition) => {
  const valid = condition;
  let result;
  if (valid === 'validate') {
    result = `
       Total: ${arrObj.length}
       Unique: ${calculateUniqueLinks(arrObj)}
       Broken: ${calculateBrokenLinks(arrObj)}
        `;
  } else {
    result = `
        Total: ${arrObj.length}
        Unique: ${calculateUniqueLinks(arrObj)}
     `;
  }
  return result;
};
