let openMenu = document.querySelector(".open_menu");
let closeMenu = document.querySelector(".close_menu");
let menu = document.querySelector("#ul");
let menuBg = document.querySelector(".menu_responsive");

openMenu.onclick = () => {
  menu.style.display = "block";

  setTimeout(() => {
    menuBg.style.opacity = "1";
  }, 200);
};
closeMenu.onclick = () => {
  menuBg.style.opacity = "0";
  setTimeout(() => {
    menu.style.display = "none";
  }, 200);
};
