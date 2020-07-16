const hamburger = document.querySelector(".js--hamburger");
const hamburgerNav = document.querySelector(".hamburger__section")
const closeIcon = document.querySelector(".hamburger__section--close")


hamburger.addEventListener('click', () => {
    hamburgerNav.style.display = "block";
    hamburger.style.display = "none";
})

closeIcon.addEventListener('click', () => {
    hamburgerNav.style.display = "none";
    hamburger.style.display = "block";

})