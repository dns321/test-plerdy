const openModalBtn = document.querySelectorAll("[data-modal-open]");
const closeModalBtn = document.querySelector("[data-modal-close]");
const modal = document.querySelector("[data-modal]");

openModalBtn.forEach((btn) => btn.addEventListener("click", toggleModal));
closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  document.body.classList.toggle("modal-open");
  modal.classList.toggle("is-hidden");
}
