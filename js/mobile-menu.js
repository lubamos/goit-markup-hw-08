(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-button]"),
    closeModalBtn: document.querySelector("[data-menu-button]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})();
