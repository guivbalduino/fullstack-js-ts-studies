//               012345678
let umaString = 'Meu valor';

console.log(umaString.charAt(-1));
console.log(umaString.charCodeAt(4));
console.log(umaString.concat(' ', 'ei', ' ', 'sister'));
console.log(umaString.indexOf('e', 0));
console.log(umaString.lastIndexOf('e', umaString.length));
console.log(umaString.match(/[A-Za-z]+/g));
console.log(umaString.search(/[a-z]+/g));
console.log(umaString.replace(/e/g, '3'));
console.log(umaString.slice(2, 7));
console.log(umaString.slice(-3, -1));
console.log(umaString.split(' ', 2));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
