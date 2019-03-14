"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateStats = exports.calculateBrokenLinks = exports.calculateUniqueLinks = void 0;

const calculateUniqueLinks = arrLinks => {
  const uniqueLinks = arrLinks.reduce((acum, obj) => {
    if (acum.indexOf(obj.href) === -1) {
      acum.push(obj.href);
    }

    return acum;
  }, []);
  return uniqueLinks.length;
};

exports.calculateUniqueLinks = calculateUniqueLinks;

const calculateBrokenLinks = arrLinks => {
  const brokenLinks = arrLinks.filter(links => links.value === 'Fail');
  return brokenLinks.length;
};

exports.calculateBrokenLinks = calculateBrokenLinks;

const calculateStats = (arrObj, condition) => {
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

exports.calculateStats = calculateStats;