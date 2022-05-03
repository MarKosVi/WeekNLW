

let nav = document.querySelector('#navigation');
window.addEventListener('scroll', ()=>{
    window.scrollY > 0 ? nav.setAttribute('class','scroll') : nav.removeAttribute('class', 'scroll');
});
