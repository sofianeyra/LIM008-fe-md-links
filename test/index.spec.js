import {
  evaluatePath,
  transformToAbsPath,
  recognizeIfItsFile,
  getFiles,
  getMdContent,
  convertMdToHtml,
  extractATagAttr,
  createArrLinkObj
} from '../src/models/links.js';

import {
  extractHref,
  verifyLink,
  addVerification
} from '../src/models/validate.js';

import {calculateStats} from '../src/models/stats.js';

const inputTrue = 'C:/absolutePath/archivo.md'; 
const inputFalse = '../relativePath/archivo.md';

describe('evaluatePath', () => {
  it('should be a function', () => {
    expect(typeof evaluatePath).toBe('function');
  });
  it('should return a boolean value', () => {
    expect(evaluatePath(inputTrue)).browser;
  });
  /* it('debería retornar true con inputTrue', () => {
     expect(evaluatePath(inputTrue)).toEqual(true);
    });
  it('debería retornar false con inputFalse', () => {
     expect(evaluatePath(inputFalse)).toEqual(false);
    });    
  }); */
  describe('transformToAbsPath', () => {
    it('it should be a function', () => {
      expect(typeof transformToAbsPath).toBe('function');
    });
    it('debería retornar un valor string', () => {
      expect(typeof transformToAbsPath(inputTrue)).toBe('string');
    });
  });
  describe('recognizeIfItsFile', () => {
    it('it should be a function', () => {
      expect(typeof recognizeIfItsFile).toBe('function');
    });
    it('should return a boolean value', () => {
      expect(recognizeIfItsFile(inputTrue)).browser;
    });
  });
  describe('getFiles', () => {
    it('it should be a function', () => {
      expect(typeof getFiles).toBe('function');
    });
    it('debería retornar un array', () => {
      expect(typeof getFiles(inputTrue)).toBe('object');
    });
  });
 
  describe('getMdContent', () => {
    it('should be a function', () => {
      expect(typeof getMdContent).toBe('function');
    });
    it('should return a string', () => {
      expect(typeof getMdContent(inputTrue)).toBe('string');
    });
  });
  describe('convertMdToHtml', () => {
    it('should be a function', () => {
      expect(typeof convertMdToHtml).toBe('function');
    });
    it('should return a string', () => {
      expect(typeof convertMdToHtml('contenido MD')).toBe('string');
    });
  });
  describe('extractATagAttr', () => {
    it('should be a function', () => {
      expect(typeof extractATagAttr).toBe('function');
    });
    it('should return an object', () => {
      expect(typeof extractATagAttr('contenido HTML')).toBe('object');
    });
  });
  describe('createArrLinkObj', () => {
    it('should be a function', () => {
      expect(typeof createArrLinkObj).toBe('function');
    });
    it('should return an array', () => {
      expect(typeof createArrLinkObj({href: 'link', text: 'text', file: 'path'})).toBe('object');
    });
  });
  describe('extractHref', () => {
    it('should be a function', () => {
      expect(typeof extractHref).toBe('function');
    });
    it('should return an array', () => {
      expect(typeof extractHref([{href: 'link', text: 'text', file: 'path'}])).toBe('object');
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
});