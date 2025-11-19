let button1 = document.getElementsByClassName('button1');
let button2 = document.getElementsByClassName('button2');
let button3 = document.getElementsByClassName('button3');
let containerTexto = document.getElementsByClassName('containerTexto');
let opcion1 = document.getElementsByClassName('opcion1');
let opcion2 = document.getElementsByClassName('opcion2');
let opcion3 = document.getElementsByClassName('opcion3');
let eliminar = document.getElementsByClassName('eliminar');


button2[0].addEventListener('click', function () {
    button1[0].classList.remove('active');
    button1[0].classList.add('desactive');
    button2[0].classList.remove('desactive');
    button2[0].classList.add('active');
    button3[0].classList.remove('active');
    button3[0].classList.add('desactive');
    containerTexto[0].style.transform = 'scale(1)';
    opcion2[0].style.display = 'initial';
    opcion1[0].style.display = 'none';
    opcion3[0].style.display = 'none';
});
button1[0].addEventListener('click', function () {
    button1[0].classList.remove('desactive');
    button1[0].classList.add('active');
    button2[0].classList.remove('active');
    button2[0].classList.add('desactive');
    button3[0].classList.remove('active');
    button3[0].classList.add('desactive');
    containerTexto[0].style.transform = 'scale(1)';
    opcion1[0].style.display = 'initial';
    opcion2[0].style.display = 'none';
    opcion3[0].style.display = 'none';
});
button3[0].addEventListener('click', function () {
    button3[0].classList.remove('desactive');
    button3[0].classList.add('active');
    button2[0].classList.remove('active');
    button2[0].classList.add('desactive');
    button1[0].classList.remove('active');
    button1[0].classList.add('desactive');
    containerTexto[0].style.transform = 'scale(1)';
    opcion3[0].style.display = 'initial';
    opcion1[0].style.display = 'none';
    opcion2[0].style.display = 'none';
});

eliminar[0].addEventListener('click', function () {
    containerTexto[0].style.transform = 'scale(0)';
})

