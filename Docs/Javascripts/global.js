const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

setTimeout(() => {
    const loaderDiv = document.querySelector('.LoaderDiv2');
    loaderDiv.style.opacity = '0';

    setTimeout(() => {
        loaderDiv.style.display = 'none';
    }, 500);
}, 2000); 
