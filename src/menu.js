export default function menu() {
  const menuBtn = document.querySelector(".menu-icon");
  const closeBtn = document.querySelector(".close");
  const menuDiv = document.querySelector(".mobile-menu");

  function openMenu() {
    menuDiv.classList.add("active");
  }

  function closeMenu() {
    menuDiv.classList.remove("active");
  }

  menuBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
}
