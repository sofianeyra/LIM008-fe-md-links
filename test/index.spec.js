const mdLinks = require('../src/index.js');
const path = require('path');
const options = {
  validate: undefined,
  stats: undefined
};
// inputs and outputs
const inputDirectory = 'D:/Proyects/LIM008-fe-md-links/proof/directory';
const inputRelativeDirectory = './proof/directory';
const inputFile = 'D:/Proyects/LIM008-fe-md-links/proof/text2.md';
const inputRelativeFile = './proof/text2.md';

const outputDirectory = [{ 
  href: 'https://facebook.com/', 
  text: 'Social Media', 
  path: 'D:\\Proyects\\LIM008-fe-md-links\\proof\\directory\\subDirectory\\text4.md'},
{ href: 'https://medium.com/punto-y-coma/la-magia-del-kanji-japon%C3%A9s-5aa20d46710', 
  text: 'Kanji Japones', 
  path: 'D:\\Proyects\\LIM008-fe-md-links\\proof\\directory\\subDirectory\\text5.md'},
{ href: 'https://pages.github.com/',
  text: 'Github Pages',
  path: 'D:\\Proyects\\LIM008-fe-md-links\\proof\\directory\\text1.md'},
{ href: 'https://medium.com/s/story/the-insane-structure-of-high-school-762fea58fe62',
  text: 'We are married to a system that has not been prope',
  path: 'D:\\Proyects\\LIM008-fe-md-links\\proof\\directory\\text1.md'}
];
const outputFile = [{
  href: 'https://developers.google.com/',
  text: 'comunidad developers',
  path: 'D:\\Proyects\\LIM008-fe-md-links\\proof\\text2.md',
},
{
  href: 'https://nodejs.org/api/system',
  text: 'Node.js',
  path: 'D:\\Proyects\\LIM008-fe-md-links\\proof\\text2.md',
}];
const outputValidate = [{
  href: 'https://developers.google.com/',
  text: 'comunidad developers',
  path: 'D:\\Proyects\\LIM008-fe-md-links\\proof\\text2.md',
  status: 200,
  value: 'OK'
},
{
  href: 'https://nodejs.org/api/system',
  text: 'Node.js',
  path: 'D:\\Proyects\\LIM008-fe-md-links\\proof\\text2.md',
  status: 404,
  value: 'Fail'
}];
const outputStats = {total: 2, unique: 2};
const outputValidateStats = {total: 2, unique: 2, broken: 0}; 

test('should return an array of objects', () => {
  return mdLinks(inputFile, options)
    .then(arrLinks => {
      expect(arrLinks).toEqual(outputFile);
    });
});

test('should return an array of objects files from directory', () => {
  return mdLinks(inputDirectory, options)
    .then(arrLinks => {
      expect(arrLinks).toEqual((outputDirectory));
    });
});

test('should return an array of objects files from relative path directory', () => {
  return mdLinks(inputRelativeDirectory, options)
    .then(arrLinks => {
      expect(arrLinks).toEqual((outputDirectory));
    });
});

test('should return an array of objects files from relative path file', () => {
  return mdLinks(inputRelativeFile, options)
    .then(arrLinks => {
      expect(arrLinks).toEqual((outputFile));
    });
});

test('mdLinks --stats should return total and unique links', () => {
  options.stats = true;
  return mdLinks(inputFile, options)
    .then(arrLinks => {
      expect(arrLinks).toEqual(outputStats);
    });
});

test('mdLinks --validate should return the status and value of links', () => {
  jest.setTimeout(30000);
  options.validate = true;
  options.stats = false;
  return mdLinks(inputFile, options)
    .then(arrLinks => {
      expect(arrLinks).toEqual(outputValidate);
    });
});

test('mdLinks --validate --stats should return the status and validation of links', () => {
  options.validate = true;
  options.stats = true;
  return mdLinks(inputFile, options)
    .then(arrLinks => {
      expect(arrLinks).toEqual(outputValidateStats);
    });
});
