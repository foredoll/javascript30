
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function shake() {
  const p = document.querySelector('.text');

  p.classList.remove('pulse');
  p.classList.toggle('shake');
}

console.log('');
console.log('== Dev Tools Tricks ==');
console.log('');

console.log('>> log <<');
// Regular
console.log('Hello');

// Interpolated
let myVar = 'sit';
console.log('Lorem ipsum dolor %s amet', myVar);
console.log(`Lorem ipsum dolor ${myVar} amet`);

// Styled
console.log('%c Lorem ipsum dolor sit amet', 'font-size: 20px; background: green;');

console.log('>> warn <<');
// warn and error return the stack trace
// warning!
console.warn('This is a warning!');

console.log('>> error <<');
// Error :|
console.error('This is an error!');

console.log('>> info <<');
// Info
console.info('This is an info.');

console.log('>> assert <<');
// Testing
let p = document.querySelector('p');
console.assert(1 === 1, 'Not a match'); 
console.assert(1 === 3, 'Not a match');
console.assert(p.classList.contains('class'), 'Not a match');

console.log('>> dir <<');
console.log(p);
console.dir(p);

console.log('>> groupCollapsed <<');
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

console.log('>> count <<');
// counting
console.count('Marina');
console.count('Marina');
console.count('Marina');

console.log('>> table <<');
console.table(dogs);

console.log('>> time <<');

console.time('fetching data');
fetch('https://api.github.com/users/inBlackAndWhite')
  .then(response => response.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });
