// Business Logic

function beepBoop(number) {
  const numArray = number.toString().split('')
  if (numArray.includes('3')) {
    return "Won't you be my neighbor?"
  } else if (numArray.includes('2')) {
    return "Boop!"
  } else if (numArray.includes('1')) {
    return "Beep!"
  } else {
    return number;
  }
};

function pickANum(inputNumber) {
  const output = [];
  for (let i = 0; i <= inputNumber; i++) {
    output.push(beepBoop(i));
  }
  return output;
};


// function pickANum(number) {
//   const output = [];
//   let i = 0;
//   while (i <= number) {
//     output.push(i)
//     i++
//   }
//   return output;
// };

// function beepBoop(number) {
//   const numArray = number.toString().split(" ")
//   if (numArray.includes("1")) {
//     return "Beep!"
//   }
//   else if (numArray.includes("2")) {
//     return "Boop!"
//   }
//   else if (numArray.includes("3")) {
//     return "Won't you be my neighbor?"
//   }
// };

// function numReplacer(array) {
//   const array = array.map((number) => beepBoop(number));
//   return numReplacer;
// };


