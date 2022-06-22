let spanCurrentValue = document.getElementById("currentValue");
let currentValue = spanCurrentValue.innerText;

let button = document.querySelectorAll("button");

for (let i = 0; i < button.length; i++) {
  if (button[i].name == "decrement") {
    button[i].addEventListener("click", decrement);
  } else {
    button[i].addEventListener("click", increment);
  }
}

function decrement() {
  currentValue--;
  spanCurrentValue.innerHTML = currentValue;
  if (currentValue < 0) {
    spanCurrentValue.style.color = "red";
  } else {
    spanCurrentValue.style.color = "white";
  }
}

function increment() {
  currentValue++;
  spanCurrentValue.innerHTML = currentValue;
  if (currentValue < 0) {
    spanCurrentValue.style.color = "red";
  } else {
    spanCurrentValue.style.color = "white";
  }
}