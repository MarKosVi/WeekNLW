let openMenu = document.querySelector('.open-menu');
let closeMenu = document.querySelector('.close-menu');
let nav = document.querySelector('#navigation');
let btNavegationMenu = document.querySelectorAll('.buttonNavigation a');
let backToTop = document.querySelector('#backToTopButton');

function btCloseMenu() {
    document.body.removeAttribute('class', 'menu-expanded')
};

openMenu.addEventListener('click', ()=>{
    document.body.setAttribute('class', 'menu-expanded')
});

closeMenu.addEventListener('click', btCloseMenu);

window.addEventListener('scroll', ()=>{
    scrollScrean();
    scrollButton();
});

function scrollScrean() {
    window.scrollY > 0 ? nav.setAttribute('class','scroll') : nav.removeAttribute('class', 'scroll');
}

function scrollButton() {
    window.scrollY > 0 ? backToTop.setAttribute('class','show') : backToTop.removeAttribute('class', 'show');
}

btNavegationMenu.forEach(item=>{
    item.addEventListener('click', btCloseMenu);
});

ScrollReveal({
    origin:'top',
    distance: '30px',
    duration: '700'
}).reveal(`
#home, 
#home img,
#home stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about content`);