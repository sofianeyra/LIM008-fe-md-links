// calling functions
import {
  calculateStats,
  calculateValidateStats,
  calculateUniqueLinks,
  calculateBrokenLinks,
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
const output = {total: 4, unique: 3};
const outputValidate = {total: 4, unique: 3, broken: 1};

describe('calculate stats ', () => {
  it('should be a function', () => {
    expect(typeof calculateStats).toBe('function');
  });
  it('should return total and unique links', () => {
    expect(calculateStats(input)).toEqual(output);
  });
  it('should return total and unique links', () => {
    expect(calculateValidateStats(input)).toEqual(outputValidate);
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

