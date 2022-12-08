const form = document.querySelector(".form");
const validateBtn = form.querySelector(".submit");
// const fields = form.querySelectorAll(".validate");
const name = form.querySelector(".name");
const phone = form.querySelector(".telephone");
const nameError = form.querySelector(".name-error");
const telError = form.querySelector(".tel-error");

checkFields = function () {
  if (!name.value) {
    nameError.classList.remove("not-visible");
    name.classList.add("error-value");
  } else {
    nameError.classList.add("not-visible");
    name.classList.remove("error-value");
  }

  if (!phone.value) {
    telError.classList.remove("not-visible");
    phone.classList.add("error-value");
  } else {
    telError.classList.add("not-visible");
    phone.classList.remove("error-value");
  }
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkFields();
});
