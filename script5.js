// You will be given an array of objects  representing data about developers 
// who have signed up to attend the next coding meetup that you are organizing.

// Your task is to return an object which includes the count 
// of each coding language represented at the meetup.

function countLanguages(list) {
}

const list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

console.log(countLanguages(list1)); // { C: 2, JavaScript: 1, Ruby: 1 };
