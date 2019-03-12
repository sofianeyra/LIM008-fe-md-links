"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateValidateStats = exports.calculateStats = exports.calculateBrokenLinks = exports.calculateUniqueLinks = void 0;

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

const calculateBrokenLinks = arrObj => {
  const brokenLinks = arrObj.filter(links => links.value === 'Fail');
  return brokenLinks.length;
};

exports.calculateBrokenLinks = calculateBrokenLinks;

const calculateStats = arrLinks => {
  let result;
  result = {
    total: arrLinks.length,
    unique: calculateUniqueLinks(arrLinks)
  };
  return result;
};

exports.calculateStats = calculateStats;

const calculateValidateStats = arrLinks => {
  let result;
  result = {
    total: arrLinks.length,
    unique: calculateUniqueLinks(arrLinks),
    broken: calculateBrokenLinks(arrLinks)
  };
  return result;
};

exports.calculateValidateStats = calculateValidateStats;