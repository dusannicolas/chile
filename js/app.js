let miBoton = document.getElementById("miBoton");


miBoton.onclick = saludar;
miBoton.onclick = despedir;

function saludar(){
    alert("Hola, Buenos dias");
}

function despedir(){
    alert("Buenas Noches");
}
//evento addEcentListener()
miBoton.addEventListener("click", saludar);
miBoton.addEventListener("click", despedir);

function miFuncion(){
    alert('Haz presionado el boton con exito!!!');
}

alert("¡Bienvenidos a Cachureando!");