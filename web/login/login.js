let togglers = document.querySelectorAll('.toggler');

togglers.forEach(element => {
    element.addEventListener('click', function() {
        document.querySelector('.flip-card-front').classList.toggle('flipped');
        document.querySelector('.flip-card-back').classList.toggle('flipped');
    });
});



// script del footer

//Con esta linea loq ue hacemos es delcarar una variable bajo el nombre de list
//que luego buscamos en el html bajo el nombre de class = "list" o .list
const list = document.querySelectorAll('.list');
//el puto querySelectorAll es lo que me lleva jodiendo toda la puta mañana
//resulta que si no le pones el all como que selecciona solo el primer item
//o un solo item, menuda trolleada manin, pero con el "All" pilla todos

function activeLink() { //en esta linea delcaramos una funcion llamada activeLink
    list.forEach((item) =>
        item.classList.remove('active')); //en estas dos lineas lo que hacemos es surcar toda la lista como si fuera un array removiendo la propiedad active de ellos, para que el circulo baje
    this.classList.add('active');
}

list.forEach((item) =>
    item.addEventListener('click', activeLink));