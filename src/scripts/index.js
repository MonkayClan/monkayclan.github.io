let linksBtn = document.getElementById("nav-links")
let modal = document.getElementById("links-modal")
let modalClose = document.getElementById("links-modal-close")
let modalDim = document.getElementById("modal-dim")

modal.style.display = "none"

linksBtn.addEventListener("click", (e) => {
    modal.style.display = "block"
    modalDim.style.display = "block"
    document.getElementsByTagName("html")[0].style.overflow = "hidden"
})
modalClose.addEventListener("click", (e) => {
  modal.style.display = "none"
  modalDim.style.display = "none"
  document.getElementsByTagName("html")[0].style.overflow = "overlay"
})