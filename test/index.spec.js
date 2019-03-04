import {evaluatePath, 
  convertToAbsolutePath, 
  getFiles, getMdContent, 
  convertToHTML,
} from '../src/models/links.js';
import {
  extractHref, verifyLink, addVerification
} from '../src/models/validate.js';

import {
  calculateStats
} from '../src/models/stats.js';

const path = require('path'); 

const inputFile = 'D:\\Proyects\\LIM008-fe-md-links\\proof\\text2.md';
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

describe('transformToAbsolutePath', () => {
  it('should be a function', () => {
    expect(convertToAbsolutePath('.\\relative-path')).toEqual(path.normalize('D:\\Proyects\\LIM008-fe-md-links\\relative-path'));
  });
  it('should return a string value', () => {
    expect(typeof convertToAbsolutePath(inputFile)).toBe('string');
  });
});

describe('getFiles', () => {
  it('it should be a function', () => {
    expect(typeof getFiles).toBe('function');
  });
  it('it should return an object', () => {
    expect(typeof getFiles(inputDirectory)).toBe('object');
  });
});

describe('get Md Content', () => {
  it('it should be a function', () => {
    expect(typeof getMdContent).toBe('function');
  });
  it('it should return a string', () => {
    expect(typeof getMdContent(inputFile)).toBe('string');
  });
});

describe('convertToHTML', () => {
  it('should be a function', () => {
    expect(typeof convertToHTML).toBe('function');
  });
  it('should return an object', () => {
    expect(typeof convertToHTML(inputFile)).toBe('object');
  });
});
console.log(convertToHTML(inputFile));
describe('extractHref', () => {
  it('should be a function', () => {
    expect(typeof extractHref).toBe('function');
  });
  it('should return an array', () => {
    expect(typeof extractHref([{href: 'href', path: 'path', title: 'title', text: 'text'}])).toBe('object');
  });
});

describe('verifyLink', () => {
  it('should be a function', () => {
    expect(typeof verifyLink).toBe('function');
  });
  it('should return an array', () => {
    expect(typeof verifyLink(['href1', 'href2', 'href3'])).toBe('object');
  });
});

describe('addVerification', () => {
  it('should be a function', () => {
    expect(typeof addVerification).toBe('function');
  });
  it('should return an array', () => {
    expect(typeof addVerification(['href1', 'href2', 'href3'])).toBe('object');
  });
});

describe('calculateStats', () => {
  it('should be a function', () => {
    expect(typeof calculateStats).toBe('function');
  });
  it('should return an array', () => {
    expect(typeof calculateStats(
      [{href: 'link', text: 'text', file: 'path'}]
    )).toBe('object');
  });
});
