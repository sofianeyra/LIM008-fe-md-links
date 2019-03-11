// calling functions 
import {
  verifyLinks,
} from '../src/models/validate.js';

// inputs and outputs
const input = [{ href: 'https://nodejs.org/es/', text: 'Node.js', path: 'D:\\Proyects\\LIM008-fe-md-links\\proof\\text2.md' }];
const inputTwo = [{ href: 'https://github.com/sofianeyra/LIM008-md-links', text: 'Node.js', path: 'D:\\Proyects\\LIM008-fe-md-links\\proof\\text2.md' }];
const output = [{ href: 'https://nodejs.org/es/', text: 'Node.js', path: 'D:\\Proyects\\LIM008-fe-md-links\\proof\\text2.md', status: 200, value: 'OK' }];
const outputTwo = [{ href: 'https://github.com/sofianeyra/LIM008-md-links', text: 'Node.js', path: 'D:\\Proyects\\LIM008-fe-md-links\\proof\\text2.md', status: 404, value: 'Fail' }];
describe('verify Links', () => {
  it('should be a function', () => {
    expect(typeof verifyLinks).toBe('function');
  });
  it('should return a ok value', (done) => {
    verifyLinks(input).then((response) => {
      expect(response).toEqual(output);
      done();
    });
  });
  it('should return a fail value', (done) => {
    verifyLinks(inputTwo).then((response) => {
      expect(response).toEqual(outputTwo);
      done();
    });
  });
});
