import post from "./components/post.js"

const main = document.querySelector(".main");
main.insertAdjacentElement("afterbegin",post());

const infoModal = document.querySelector(".infoModal");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");

infoModal.addEventListener("click", ()=>{
  modal.style.display = "flex";
  modal.showModal();
})
closeModal.addEventListener("click",()=>{
  modal.close();
  modal.style.display = "none";
})