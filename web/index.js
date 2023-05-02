// script para que las transiciones se vean

//Con este cacho de javascript vamos a hacer que la carga de la pagina web tras darle un click
//al hipervinculo se demore medio segundo para asi que se vea la tremenada animacion que le
//he metido a la NavBar que mola un taco

let enlacesRetrasoCarga = document.querySelectorAll('.retraso-carga');

enlacesRetrasoCarga.forEach(function (enlace) {
    enlace.addEventListener('click', function (evento) {
        evento.preventDefault();
        let url = this.getAttribute('href');
        setTimeout(function () {
            window.location = url;
        }, 500);
    })
})


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