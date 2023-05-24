const h1 = document.querySelector("h1");
const input = document.querySelector("input");
const button = document.querySelector("button");

const buttonClick = function () {
  console.dir(input);
  console.dir(h1);

  if (input.value === "") {
    h1.innerHTML = "default Title";
  } else {
    h1.innerHTML = input.value;
    input.value = "";
  }
};
button.addEventListener("click", buttonClick);
