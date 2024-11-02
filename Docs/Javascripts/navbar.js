const openNav = document.getElementById('openNav');
const responsiveNav = document.getElementById('responsiveNav');
const overlayNavbar = document.getElementById('overlayNavbar');
const closeNav = document.getElementById('closeNav');
const navScrollColorChange = document.getElementById('navScrollColorChange');

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        navScrollColorChange.style.backgroundColor = "#000000";
        
    } else {
        navScrollColorChange.style.backgroundColor = "transparent";
    }
});


openNav.addEventListener('click', () => {
    responsiveNav.style.maxWidth = "23rem"
    overlayNavbar.style.display = "block"
})
closeNav.addEventListener('click', () => {
    responsiveNav.style.maxWidth = "0rem"
    overlayNavbar.style.display = "none"
})
overlayNavbar.addEventListener('click', () => {
    responsiveNav.style.maxWidth = "0rem"
    overlayNavbar.style.display = "none"
})
