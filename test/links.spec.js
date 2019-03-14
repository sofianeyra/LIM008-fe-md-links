import {evaluatePath, 
  convertToAbsolutePath, 
  getFiles,
  extractLinks,
} from '../src/models/links.js';

const path = require('path');
// examples to test
const inputFile = 'D:/Proyects\\LIM008-fe-md-links\\proof\\text2.md';
const inputDirectory = 'D:\\Proyects\\LIM008-fe-md-links\\proof\\directory';
const output = [{
  href: 'https://developers.google.com/',
  text: 'comunidad developers',
  path: 'D:/Proyects\\LIM008-fe-md-links\\proof\\text2.md'
},
{
  href: 'https://nodejs.org/api/system',
  text: 'Node.js',
  path: 'D:/Proyects\\LIM008-fe-md-links\\proof\\text2.md'
}];
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

describe('evaluatePath', () => {
  it('should be a function', () => {
    expect(typeof evaluatePath).toBe('function');
  });
  it('should return a boolean value', () => {
    expect(evaluatePath('c:\\absolute-path')).toEqual(true);
  });
  it('should return false if its a relative path', () => {
    expect(evaluatePath('.\\relative-path')).toEqual(false);
  });
  it('should return a string value', () => {
    expect(typeof convertToAbsolutePath('.\\relative-path')).toBe('string');
  });
});

describe('convert to AbsolutePath', () => {
  it('should be a function', () => {
    expect(convertToAbsolutePath('.\\relative-path')).toEqual(path.normalize('D:\\Proyects\\LIM008-fe-md-links\\relative-path'));
  });
  it('should return a string value', () => {
    expect(typeof convertToAbsolutePath(inputFile)).toBe('string');
  });
});

describe('getFiles of the directory', () => {
  it('it should be a function', () => {
    expect(typeof getFiles).toBe('function');
  });
  it('it should return an object', () => {
    expect(typeof getFiles(inputDirectory)).toBe('object');
  });
});

describe('get links from marked renderer', () => {
  it('should be a function', () => {
    expect(typeof extractLinks).toBe('function');
  });
  it('should return the links found', () => {
    expect(extractLinks(inputFile)).toEqual(output);
  });
  it('should return the links found in the directory', () => {
    expect(extractLinks(inputDirectory)).toEqual(outputDirectory);
  });
});