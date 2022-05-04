
let openMenu = document.querySelector('.open-menu');
let closeMenu = document.querySelector('.close-menu');
let nav = document.querySelector('#navigation');
let btNavegationMenu = document.querySelectorAll('.buttonNavigation a');


function btCloseMenu() {
    document.body.removeAttribute('class', 'menu-expanded')
};


openMenu.addEventListener('click', ()=>{
    document.body.setAttribute('class', 'menu-expanded')
});

closeMenu.addEventListener('click', btCloseMenu);

window.addEventListener('scroll', ()=>{
    window.scrollY > 0 ? nav.setAttribute('class','scroll') : nav.removeAttribute('class', 'scroll');
});

btNavegationMenu.forEach(item=>{
    item.addEventListener('click', btCloseMenu);
})
