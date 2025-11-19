let eleccion = document.getElementsByClassName('select');
let menuElegir = document.getElementsByClassName('spanAfter');

eleccion[0].addEventListener('click', function () {
    menuElegir[0].style.opacity = '1';
})

menuElegir[0].addEventListener('mouseleave', function () {
    menuElegir[0].style.opacity = '0';
})