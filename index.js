import { print } from './js/lib.js';
/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/Dovahkiin1991/a-tiny-JS-world
   Web app: https://dovahkiin1991.github.io/a-tiny-JS-world/
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const dog = {
    species: 'dog',
    name: 'Toby',
    gender: 'male',
    legs: 4,
    hands: 0,
    saying: 'woof-woof!'
};

const cat = {
    species: 'cat',
    name: 'Simba',
    gender: 'female',
    legs: 4,
    hands: 0,
    saying: 'meuw-meuw!'
};

const woman = {
    species: 'woman',
    name: 'Katie',
    gender: 'female',
    legs: 2,
    hands: 2,
    saying: 'Hey, my name is Katie!'
};

const man = {
    species: 'man',
    name: 'Alex',
    gender: 'male',
    legs: 2,
    hands: 2,
    saying: 'Hey, my name is Alex!'
};

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */

   print(dog.species + ';' + dog.name + ';' + dog.gender + ';' + 
  dog.legs + ';' + dog.hands + ';' + dog.saying, 'div');

  print(cat.name + ';' + cat.gender);

  print(woman.name + '- before change');
  woman.name = "Sveta";

  print(woman.name + '- after change');

  let manCopy = Object.assign({}, man);

  print(manCopy.name + ';' + man.saying);

  manCopy.legs = 3;

  print(man.legs);

  print(manCopy.legs);

//   copy json parse deep

let womanCopy = JSON.parse(JSON.stringify(woman));
print(womanCopy.name);

//copy array as shallow copy(spread operator)

let catCopy = {...cat};
print(cat.name)