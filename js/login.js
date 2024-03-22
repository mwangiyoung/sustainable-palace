const input = document.querySelectorAll("#login input");
const loginForms = document.getElementById("login");
const message = document.querySelector("#paragraph");
console.log(loginForms);

loginForms.addEventListener("submit", (e) => {
  e.preventDefault();
  let message = [];
  validateInputs();
});

const validateInputs = () => {
  const user = {};
  input.forEach(function (input) {
    const label = input.previousElementSibling;
    if (input.value === "" || input.value == null) {
      message.textContent = "Kindly fill all fields";
      input.style.border = "1px solid red";
      return;
    } else {
      user[`${input.name}`] = input.value;

      message.textContent = "";
      input.style.border = "none";
      label.style.color = "black";
    }
  });
  const users = JSON.parse(localStorage.getItem("users"));
  users.find((userItem) => {
    if (user.username === userItem.username) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      window.location.href = `${window.location.origin}/sustainable-palace/shop.html`;
    }
  });
};

console.log(validateInputs);
