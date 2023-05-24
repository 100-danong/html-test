const loginform = document.querySelector("#login-form");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const greeting = document.querySelector("#greeting");

loginform.addEventListener("submit", (event) => {
  const { value } = loginInput;
  event.preventDefault();
  console.log(value);
  greeting.innerHTML = `${value}님 꺼지세연`;

  localStorage.setItem("username", value);

  greeting.classList.remove("hidden");
  loginform.classList.add("hidden");
});
