// 1.
// function sum(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }

// original code
// let res = sum(null);
// console.log(res);

// solutions to part 1:
// try {
//   let res = sum(null);
//   console.log(res);
// } catch (e) {
//   if (e.name === 'TypeError') {
//     console.log(e);
//     console.error(e);
//   }
// }
// console.log('test')

// 2.
// tests
// solutions
// sayName = (str) => {
//   if (typeof str !== 'string') {
//     throw TypeError ('Invalid name! Must be a string!')
//   }
//   console.log(str);
// }

// try {
//   sayName(1);
// } catch(e) {
//   console.log(e.name)
// }


// sayName("Alex");
// sayName(1);


// // 3.
// function greet(greeting) {
//   if (!greeting) {
//     throw new Error("There was no greeting given.");
//   }

//   console.log(greeting);
// }

try {
  greet();
} catch(e) {
  console.log('Hello World')
}


