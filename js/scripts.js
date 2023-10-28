// Business Logic

function pickANum(number) {
  const output = [];
  let i = 0;
  while (i <= number) {
    output.push(i)
    i++
  }
  return output;
};

function beepBoop(number) {
  const numArray = number.toString().split(" ")
  if (numArray.includes("1")) {
    return "Beep!"
  }
  else if (numArray.includes("2")) {
    return "Boop!"
  }
  else if (numArray.includes("3")) {
    return "Won't you be my neighbor?"
  }
};


