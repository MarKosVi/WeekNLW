let openMenu = document.querySelector('.open-menu');
let closeMenu = document.querySelector('.close-menu');
let nav = document.querySelector('#navigation');
let home = document.querySelector('body');
let btNavegationMenu = document.querySelectorAll('.buttonNavigation a');
let backToTop = document.querySelector('#backToTopButton');

function btCloseMenu() {
    document.body.removeAttribute('class', 'menu-expanded')
};

function activateMenuAtCurrentSection() {
    const targetLine = scrollY + (innerHeight/2);

    if(targetLine <= 1130) {
        btNavegationMenu[0].setAttribute('class', 'active');
        btNavegationMenu[1].removeAttribute('class', 'active');
        btNavegationMenu[2].removeAttribute('class', 'active');
    } else if (targetLine < 2123 && targetLine >1130){
        btNavegationMenu[1].setAttribute('class', 'active');
        btNavegationMenu[2].removeAttribute('class', 'active');
        btNavegationMenu[0].removeAttribute('class', 'active');
    } else {
        btNavegationMenu[2].setAttribute('class', 'active');
        btNavegationMenu[0].removeAttribute('class', 'active');
        btNavegationMenu[1].removeAttribute('class', 'active');
    }
    
    
}



openMenu.addEventListener('click', ()=>{
    document.body.setAttribute('class', 'menu-expanded')
});

closeMenu.addEventListener('click', btCloseMenu);

window.addEventListener('scroll', ()=>{
    showNavOnScroll();
    showButtonOnScroll();
    activateMenuAtCurrentSection();
})

function showNavOnScroll() {
    window.scrollY > 0 ? nav.setAttribute('class','scroll') : nav.removeAttribute('class', 'scroll');
}

function showButtonOnScroll() {
    window.scrollY > 360 ? backToTop.setAttribute('class','show') : backToTop.removeAttribute('class', 'show');
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