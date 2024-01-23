var shoutIt = function (name) {
  var shout = `Helo ${name} nice to meet you!`.toUpperCase();
  return shout;
};

console.log(shoutIt("Steve"));
console.log(shoutIt("Maddy"));
console.log(shoutIt("Jackie"));

var multiply = function (num1, num2) {
  if (typeof num1 !== "number") {
    return `Please type in two numbers only`;
  } else if (typeof num2 !== "number") {
    return `Please type in two numbers only`;
  }

  return `The number is ${num1 * num2}`;
};

console.log(multiply(555, 1));
console.log(multiply(3, 4));
console.log(multiply("pigeon", "7"));
console.log(multiply(0, 1));

//// Other possibility:
// var multiply = function (num1, num2) {
//   if (typeof num1 === "number") {
//     if(typeof num2 === "number") {
//       return num1 * num2;
//     }
//   }
//   return `You need to provide this function with two numbers.`;
// };
