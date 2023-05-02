let togglers = document.querySelectorAll('.toggler');

togglers.forEach(element => {
    element.addEventListener('click', function () {
        document.querySelector('.flip-card-front').classList.toggle('flipped');
        document.querySelector('.flip-card-back').classList.toggle('flipped');
    });
});

// script para que las transiciones se vean

//Con este cacho de javascript vamos a hacer que la carga de la pagina web tras darle un click
//al hipervinculo se demore medio segundo para asi que se vea la tremenada animacion que le
//he metido a la NavBar que mola un taco

//creamos la variable y la asignamos a la clase retraso-carga
let enlacesRetrasoCarga = document.querySelectorAll('.retraso-carga');

//declaramos la funcion con un
enlacesRetrasoCarga.forEach(function (enlace) { //este foreach es para revisar cada elemento de la lista
    enlace.addEventListener('click', function (evento) {
        evento.preventDefault(); //esta linea evita el default de lo que pasaria si hicieramos click en el enlace, que es basicamente que nos llevaria a la otra pagina
        let url = this.getAttribute('href'); //aqui metemos en una variable la url de la pagina que estemos seleccionando en la NavBar
        setTimeout(function () { //y aqui le metemos un temporizador de 500ms y despues redirigimos manualmente al usuario a la pagina que habia clicado originalmente
            window.location = url;
        }, 500); //soy un puto genio 🥵🥵
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