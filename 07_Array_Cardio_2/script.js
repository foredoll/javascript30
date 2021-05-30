const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

let isAdult = people.some(person => new Date().getFullYear() - person.year > 18);
console.log(isAdult);

let allAdult = people.every(person => new Date().getFullYear() - person.year > 18);
console.log(allAdult);

let comment = comments.find(comment => comment.id === 823423);
console.log(comment);

let commentIndex = comments.findIndex(comment => comment.id === 823423);

let newComments = [...comments.slice(0, commentIndex), ...comments.slice(commentIndex + 1)];

console.log(newComments.join(", "));

comments.splice(commentIndex, 1);
console.log(comments.join(", "));
