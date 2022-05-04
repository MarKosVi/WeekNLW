
let openMenu = document.querySelector('.open-menu');
let closeMenu = document.querySelector('.close-menu');
let nav = document.querySelector('#navigation');


openMenu.addEventListener('click', ()=>{
    document.body.setAttribute('class', 'menu-expanded')
});

closeMenu.addEventListener('click', ()=>{
    document.body.removeAttribute('class', 'menu-expanded')
});

window.addEventListener('scroll', ()=>{
    window.scrollY > 0 ? nav.setAttribute('class','scroll') : nav.removeAttribute('class', 'scroll');
});
