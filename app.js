const wheel = document.querySelector(".wheelBox");
const pointer = document.querySelector(".pointer");
let rotationAngle = 0;

function spinWheel() {
  const randomSpin = Math.floor(Math.random() * 8);
  const prizeCount = 8;
  const degreesPerPrize = 360 / prizeCount;
  rotationAngle += degreesPerPrize * randomSpin + 500; 
  wheel.style.transition = "transform 3s ease-out";
  wheel.style.transform = `rotate(${rotationAngle}deg)`;
}

function clearField(button) {
  const inputField = button.previousElementSibling;
  inputField.value = "";
}

const optionsButton = document.querySelector(".optionsBtn");
const inputFields = Array.from(
  document.querySelectorAll(".optionsContent input")
);
const spanElements = Array.from(
  document.querySelectorAll(".wheelContent1 span")
);

function connectInputToSpan(inputIndex, spanIndex) {
  const inputField = inputFields[inputIndex];
  const spanElement = spanElements[spanIndex];

  const inputValue = inputField.value.trim();

  if (inputValue !== "") {
    spanElement.querySelector("b").textContent = inputValue;
  }
}

function connectSpanToInput(spanIndex, inputIndex) {
  const spanElement = spanElements[spanIndex];
  const bElement = spanElement.querySelector("b");
  const spanValue = bElement.textContent;

  const inputField = inputFields[inputIndex];
  inputField.value = spanValue; 
}


for (let i = 0; i < spanElements.length; i++) {
  connectSpanToInput(i, i);
}

optionsButton.addEventListener("click", function () {
  for (let i = 0; i < inputFields.length; i++) {
    connectInputToSpan(i, i);
  }
});
