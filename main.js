

let nav = document.querySelector('nav');
let scrolling = 0;
window.addEventListener('scroll', ()=>{
    window.scrollY != scrolling ? nav.setAttribute('class','scroll') : nav.removeAttribute('class', 'scroll');
});
