let age = 100;
let age2 = age;
console.log({age, age2});

age = 200;
console.log({age, age2});


let name = 'Marina';
let name2 = name;
console.log({name, name2});

name = 'Valentino';
console.log({name, name2});

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

let team = players;
console.log(players, team);

team[3] = 'Marina';
console.log(players, team);

let team2 = players.slice();
team2[3] = 'Marina';
console.log(players, team2);

let team3 = [].concat(players);

let team4 = [...players];

team4[2] = 'New Player';
console.log(players, team4);

const person = {
  name: 'Wes Bos',
  age: 80
};

let captain = person;

captain.age = 99;
console.log(person, captain);

let captain2 = Object.assign({}, person, { age: 104 })
console.log(person, captain2);

let captain3 = JSON.parse(JSON.stringify(captain));
captain3.name = 'Marina';
console.log(person, captain3);
