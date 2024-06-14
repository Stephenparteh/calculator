let btns = document.querySelectorAll(".number");

for (let count = 0; count < btns.length; count++) {
  btns[count].addEventListener("click", (e) => {
    console.log(btns[count].value);
  });
}

let screen = document.getElementById("screen");

const screenDisplay = (input) => {
  screen.value += input;
};

const calculate = () => {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    screen.value = "Error";
  }
};

const clearDisplay = () => {
  screen.value = "";
};

const deleteLast = () => {
  screen.value = screen.value.slice(0, -1);
};
