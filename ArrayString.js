/* write a programme that sort an array string */

'use strict'
arr = ['ab', 'abacdefgh', 'xyz', 'pqrst'];
arr.sort((a, b) => b.length - a.length);

console.log(arr);