const regiones = [
    {
        nombre: "Región de Arica y Parinacota",
        atractivos: "Arica, Camarones, General Lagos y Putre",
        imagen: "img/parinacota.jpeg"
    },
    {
        nombre: "Región de Tarapaca",
        atractivos: "Arica, Camarones, General Lagos y Putre",
        imagen: "img/parinacota.jpeg"
    },
    {
        nombre: "Región de Antofagasta",
        atractivos: "Arica, Camarones, General Lagos y Putre",
        imagen: "img/parinacota.jpeg"
    },
    {
        nombre: "Región de Atacama",
        atractivos: "Arica, Camarones, General Lagos y Putre",
        imagen: "img/valdivia.jpg"
    },
    {
        nombre: "Región de Coquimbo",
        atractivos: "Arica, Camarones, General Lagos y Putre",
        imagen: "img/valdivia.jpg"
    },
    {
        nombre: "Región de Valparaiso",
        atractivos: "Arica, Camarones, General Lagos y Putre",
        imagen: "img/valdivia.jpg"
    },
    {
        nombre: "Región Metropolitana",
        atractivos: "Arica, Camarones, General Lagos y Putre",
        imagen: "img/valdivia.jpg"
    },
    {
        nombre: "Región Libertador General Bernardo O'Higgins",
        atractivos: "Arica, Camarones, General Lagos y Putre",
        imagen: "img/valdivia.jpg"
    },
    {
        nombre: "Región del Maule",
        atractivos: "Arica, Camarones, General Lagos y Putre",
        imagen: "img/valdivia.jpg"
    },
    {
        nombre: "Región de Nuble",
        atractivos: "Arica, Camarones, General Lagos y Putre",
        imagen: "img/valdivia.jpg"
    },
    {
        nombre: "Región del Biobío",
        atractivos: "Arica, Camarones, General Lagos y Putre",
        imagen: "img/valdivia.jpg"
    },
    {
        nombre: "Región de La Araucanía",
        atractivos: "Arica, Camarones, General Lagos y Putre",
        imagen: "img/parinacota.jpeg"
    },
    {
        nombre: "Región de Los Ríos",
        atractivos: "Arica, Camarones, General Lagos y Putre",
        imagen: "img/parinacota.jpeg"
    },
    {
        nombre: "Región de Los Lagos",
        atractivos: "Arica, Camarones, General Lagos y Putre",
        imagen: "img/cementerio.jpg"
    },
    {
        nombre: "Región de Aysén del General Carlos Ibáñez del Campo",
        atractivos: "Arica, Camarones, General Lagos y Putre",
        imagen: "img/cementerio.jpg"
    },
    {
        nombre: "Región de Magallanes y de la Antártica Chilena",
        atractivos: "Arica, Camarones, General Lagos y Putre",
        imagen: "img/cementerio.jpg"
    },
];

function mostrarDato(region){
    //Buscar objeto
    const datoregion = regiones.find(r => r.nombre === region);
    if(!datoRegion){
        return;
    }
    //Actuali<ar datos del card
    document.getElementById('nombre-region').textContent = datoRegion.nombre;
    document.getElementById('atractivos-turisticos').textContent = datoRegion.atractivos;
    document.getElementById('image-region').src = datoRegion.imagen;

}