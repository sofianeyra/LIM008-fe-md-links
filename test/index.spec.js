const mdLinks = require('../src/index.js');
const path = require('path');
const options = {
  validate: undefined,
  stats: undefined
};
// inputs and outputs
const inputDirectory = `${process.cwd()}/proof/directory`;
const inputRelativeDirectory = './proof/directory';
const inputFile = `${process.cwd()}/proof/text2.md`;
const inputRelativeFile = './proof/text2.md';

const outputDirectory = [{ 
  href: 'https://facebook.com/', 
  text: 'Social Media', 
  path: `${process.cwd()}\\proof\\directory\\subDirectory\\text4.md`},
{ href: 'https://medium.com/punto-y-coma/la-magia-del-kanji-japon%C3%A9s-5aa20d46710', 
  text: 'Kanji Japones', 
  path: `${process.cwd()}\\proof\\directory\\subDirectory\\text5.md`},
{ href: 'https://pages.github.com/',
  text: 'Github Pages',
  path: `${process.cwd()}\\proof\\directory\\text1.md`},
{ href: 'https://medium.com/s/story/the-insane-structure-of-high-school-762fea58fe62',
  text: 'We are married to a system that has not been prope',
  path: `${process.cwd()}\\proof\\directory\\text1.md`}
];
const outputFile = [{
  href: 'https://developers.google.com/',
  text: 'comunidad developers',
  path: `${process.cwd()}\\proof\\text2.md`,
},
{
  href: 'https://nodejs.org/api/system',
  text: 'Node.js',
  path: `${process.cwd()}\\proof\\text2.md`,
}];
const outputValidate = [{
  href: 'https://developers.google.com/',
  text: 'comunidad developers',
  path: `${process.cwd()}\\proof\\text2.md`,
  status: 200,
  value: 'OK'
},
{
  href: 'https://nodejs.org/api/system',
  text: 'Node.js',
  path: `${process.cwd()}\\proof\\text2.md`,
  status: 404,
  value: 'Fail'
}];

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

test('mdLinks --validate should return the status and value of links', () => {
  options.validate = true;
  return mdLinks(inputFile, options)
    .then(arrLinks => {
      expect(arrLinks).toEqual(outputValidate);
    });
});
