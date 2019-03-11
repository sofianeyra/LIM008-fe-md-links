// calling functions
import {
  calculateStats,
  calculateUniqueLinks,
  calculateBrokenLinks
} from '../src/models/stats.js';

const input = [{
  href: 'https://developers.google.com/',
  status: 200,
  value: 'OK'}, 
{
  href: 'https://es.wikipedia.org/wiki/Markdown',
  status: 200,
  value: 'OK'
}, 
{ href: 'https://es.wikipedia.org/wiki/Markdown',
  status: 200,
  value: 'OK'
},
{ href: 'https://github.com/sofianeyra/LIM008-md-links',
  status: 404,
  value: 'Fail'
}];
const output = 'Total: 4, Unique: 3';
const outputValidate = 'Total: 4, Unique: 3, Broken: 1';

describe('calculate stats ', () => {
  it('should be a function', () => {
    expect(typeof calculateStats).toBe('function');
  });
  it('should return total and unique links', () => {
    expect(calculateStats(input)).toBe(output);
  });
  it('should return total and unique links', () => {
    expect(calculateStats(input, 'validate')).toBe(outputValidate);
  });
});

describe('calculate broken links', () => {
  it('should be a function', () => {
    expect(typeof calculateBrokenLinks).toBe('function');
  });
  it('should return the amount of broken links', () => {
    expect(typeof calculateBrokenLinks(input)).toEqual('number');
  });
});

describe('calculate unique links', () => {
  it('should be a function', () => {
    expect(typeof calculateUniqueLinks).toBe('function');
  });
  it('should return the amount of broken links', () => {
    expect(typeof calculateUniqueLinks(input)).toEqual('number');
  });
});

