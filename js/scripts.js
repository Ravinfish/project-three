// Business Logic

function pickANum(number) {
  const output = [];
  let i = 0;
  while (i <= number) {
    output.push(i)
    i++
  };
  return output;
};

function replaceANum(number) {
  const numArray = number.toString().split('')
  if (numArray.includes("1")) {
  };
  return "Beep!";
};


