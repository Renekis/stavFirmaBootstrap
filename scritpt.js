// MODAL
let modal = document.querySelector(".modal-text");
let overlay = document.querySelector(".overlay");
let btncloseModal = document.querySelector(".close-modal");
let btnsOpenModal = document.querySelectorAll(".show-modal");

function openModal() {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
}

openModal();

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

//objeví se modal, zatemní se pozadí, když klikneš na čudlík show modal
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

//zmizí, když klikneš na třídu overlay
overlay.addEventListener("click", closeModal);

//zmizí při křížkem
btncloseModal.addEventListener("click", closeModal);

//zmizí při klávese esc
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});

// POPOVER
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);
const popover = new bootstrap.Popover(".example-popover", {
  container: "modal-text",
});

document.querySelector(".cudlik-souhlas").addEventListener("click", closeModal);

// TOOTLTIP
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// HAMBURGER
const navLinks = document.querySelectorAll(".nav-link");
const menuToggle = document.getElementById("navbarNavAltMarkup");
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});
