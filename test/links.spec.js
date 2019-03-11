import {evaluatePath, 
  IsFile,
  convertToAbsolutePath, 
  getFiles, getMdContent, 
  extractLinks,
} from '../src/models/links.js';

const path = require('path');
// examples to test
const inputFile = 'D:\\Proyects\\LIM008-fe-md-links\\proof\\text2.md';
const inputFile2 = 'D:\\Proyects\\LIM008-fe-md-links\\proof\\directory\\text1.md';
const inputDirectory = 'D:\\Proyects\\LIM008-fe-md-links\\proof\\';

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

describe('Is a file', () => {
  it('it should be a function', () => {
    expect(typeof IsFile).toBe('function');
  });
  it('it should be a boolean', () => {
    expect(typeof IsFile(inputFile)).toBe('boolean');
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

describe('get Md Content from a file', () => {
  it('it should be a function', () => {
    expect(typeof getMdContent).toBe('function');
  });
  it('it should return a string', () => {
    expect(typeof getMdContent(inputFile)).toBe('string');
  });
});

describe('convert Md content To HTML', () => {
  it('should be a function', () => {
    expect(typeof extractLinks).toBe('function');
  });
  it('should return an object', () => {
    expect(typeof extractLinks(inputFile)).toBe('object');
  });
});