//const mdLinks = require('../mdlinks');


/*describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

});*/
const mdLinks = require('../mdlink');
const arrayUrl = require('../mdlink.js');

test('mdLinks es una funcion', () => {
  expect(typeof mdLinks).toBe('function');
});

test('arrayUrl es una funcion', () => {
  expect(typeof arrayUrl).toBe('function');
});



