"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateTotalLinks = exports.calculateBrokenLinks = exports.calculateUniqueLinks = void 0;

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

const calculateTotalLinks = arrLinks => {
  const totalLinks = arrLinks.length;
  return totalLinks;
};

exports.calculateTotalLinks = calculateTotalLinks;