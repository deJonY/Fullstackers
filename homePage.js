const navbar = document.getElementById('navbar');
const logoImg = document.getElementById('logoPDP');

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled")
        logoImg.src = "https://pdp.uz/static/media/dark-logo.b60d4801fba35368079b1552cb52c715.svg" 
        document.querySelector('.hamburger-btn').style.color = "black"
    } else {
        navbar.classList.remove("scrolled")
        logoImg.src = "https://pdp.uz/static/media/logo.e84aba9a5311ad12b26f240237513b5b.svg"
        document.querySelector('.hamburger-btn').style.color = "white"
    }
});