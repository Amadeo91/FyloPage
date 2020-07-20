const hamburger = document.querySelector(".js--hamburger");
const hamburgerActive = document.querySelector(".js--hamburgerActive");
const hamburgerNav = document.querySelector(".hamburger__section");
const closeIcon = document.querySelector(".hamburger__section--close");


hamburger.addEventListener('click', () => {
    if (hamburger.classList.toggle(".js--hamburgerActive")) {
        hamburgerNav.style.display = "block";
    } else(hamburgerNav.style.display = "none")

})

closeIcon.addEventListener('click', () => {
    hamburgerNav.style.display = "none";
})