const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");
const unit = document.getElementById("unit").value;
const total = document.getElementById("total");
const name = document.getElementById("name");
const tel = document.getElementById("tel").value;
const quantity = document.getElementById("quantity").value;
const form = document.getElementById("form");
const submitBtn = document.querySelector("#submitBtn");

// document.getElementById("email").addEventListener("blur", validateEmail);
// document.getElementById("password").addEventListener("blur", validatePassword);
// document
//   .querySelector(".fa-eye-slash")
//   .addEventListener("click", revealPassword);

// function validateEmail() {
//   const emailDiv = document.querySelector("#emailDiv");
//   const email = document.getElementById("email");
//   const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

//   if (!re.test(email.value)) {
//     emailDiv.classList.add("is-invalid");
//     email.classList.add("input-invalid");
//   } else {
//     emailDiv.classList.remove("is-invalid");
//     email.classList.remove("input-invalid");
//   }
// }

// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
// });

function validatePassword() {
  const password = document.getElementById("password");
  const passwordDiv = document.getElementById("passwordDiv");

  if (password.value.length < 5) {
    passwordDiv.classList.add("is-invalid");
    password.classList.add("input-invalid");
  } else {
    passwordDiv.classList.remove("is-invalid");
    password.classList.remove("input-invalid");
  }
}

function revealPassword() {
  const password = document.getElementById("password");

  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

// // Show input error message
// function showError(input, message) {
//   const formControl = input.parentElement;
//   formControl.className = "form-control error";
//   const small = formControl.querySelector("small");
//   small.innerText = message;
// }

// const clearFields = function () {
//   document.getElementById("name").value = "";
//   document.getElementById("tel").value = "";
//   document.getElementById("quantity").value = "";
// };

// Show modal
open.addEventListener("click", () => modal.classList.add("show-modal"));
console.log(open);

// Hide modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// Hide modal on outside click
window.addEventListener("click", (e) => {
  e.target == modal ? modal.classList.remove("show-modal") : false;
});

form.addEventListener("submit", function (e) {
  // // Validate
  // if (name === "" || tel === "" || quantity === "") {
  //   // Error alert
  //   showE("Please fill in all fields", "error");
  // } else {
  //   total = quantity * unit;

  //   // Show success
  //   showAlert(" Added!", "success");

  //   // Clear fields
  //   clearFields();
  // }

  e.preventDefault();
});
