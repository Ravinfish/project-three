// Business Logic

function beepBoop(number) {
  const numArray = number.toString().split('');
  if (numArray.includes('3')) {
    return "Won't you be my neighbor?";
  } else if (numArray.includes('2')) {
    return "Boop!";
  } else if (numArray.includes('1')) {
    return "Beep!";
  } else {
    return number;
  }
}

function pickANum(inputNumber) {
  const output = [];
  for (let i = 0; i <= inputNumber; i++) {
    output.push(beepBoop(i));
  }
  return output;
}



// UI Logic

function handleFormSubmission(e) {
  e.preventDefault();
  const number = parseInt(document.getElementById("numSelect").value);
  const result = document.getElementById("result");
  result.innerHTML = "";
  const p = document.createElement("p");
  const numResult = pickANum(number);
  p.textContent = numResult.join(", "); 
  result.appendChild(p);
}

window.addEventListener("load", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmission);
});



