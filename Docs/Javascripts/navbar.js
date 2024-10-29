const openNav = document.getElementById('openNav');
const responsiveNav = document.getElementById('responsiveNav');
const overlayNavbar = document.getElementById('overlayNavbar');
const closeNav = document.getElementById('closeNav');

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