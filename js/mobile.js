const barIcon = document.querySelector('.icono-mobil');
const body = document.querySelector('body');
const menuLinks = document.querySelectorAll('.menu-item a')

barIcon.addEventListener('click', function(){
    this.classList.toggle('active');
    body.classList.toggle('active-popup');
});

menuLinks.forEach(function(menuLink) {
    menuLink.addEventListener('click', function() {
        body.classList.remove('active-popup');
        barIcon.classList.remove('active');
    });
});