const containerProyects = document.getElementById('proyects-container'); 
const btnfilterwp = document.getElementById('filter-wp');
const btnfiltercode = document.getElementById('filter-code');
const btnfilterclear = document.getElementById('filter-clear');
const qtywp = document.getElementById('qtywp');
const qtycode = document.getElementById('qtycode')

const proyectsList = [
    {name: 'Progresion', image: 'image/progresion.webp', url:'https://www.progresion.com.co/', technology:['wordpress', 'php', 'jQuery', 'css']},
    {name: 'Portal Transaccional', image: 'image/portal-transaccional.webp', url:'https://minutodediosportal.com/', technology:['wordpress', 'php', 'jQuery', 'css']},
    {name: 'Proflora', image: 'image/proflora.webp', url:'https://proflora.org.co/', technology:['wordpress', 'php', 'jQuery', 'css']},

    {name: 'Coopetrol', image: 'image/coopetrol.webp', url:'https://www.coopetrol.coop/', technology:['wordpress', 'php', 'jQuery', 'css']},
    {name: 'Praing', image: 'image/praint.webp', url:'https://praing.co/', technology:['wordpress', 'php', 'jQuery', 'css']},
    {name: 'LaRes', image: 'image/laRess.webp', url:'https://lares.com.co/', technology:['wordpress', 'php', 'jQuery', 'css']},



    {name: 'Hotel Santa Clara', image: 'image/hotel-santa-clara.webp', url:'https://www.hotelsantaclara.misitioweb.com.co/', technology:['wordpress', 'php', 'jQuery', 'css']},
    {name: 'Hotel Don Alfonso', image: 'image/donalfonso.webp', url:'https://donalfonso.misitioweb.com.co/', technology:['wordpress', 'php', 'jQuery', 'css']},
    {name: 'Hotel Campestre Pueblo bello', image: 'image/pueblobello.webp', url:'https://hotelcampestrepueblobello.com/', technology:['wordpress', 'php', 'jQuery', 'css']},
    {name: 'Xnova', image:'image/xnova.webp', url: 'https://xnova360.com/', technology:['wordpress', 'css']},
    {name: 'Abaco Films', image:'image/abaco.webp', url:'https://abacofilms.com/', technology:['wordpress', 'css', 'js']},
    {name: 'Publiink', image:'image/publiink.webp', url:'https://www.publiink.com/',  technology:['wordpress', 'css', 'js', 'php']},
    {name: 'Arbo sas', image:'image/arbo-sas.webp', url:'https://www.arbo-sas.com/', technology:['wordpress', 'css', 'js']},
    {name: 'Aqua Integral', image:'image/aqua-integral.webp', url:'https://aquaintegral.co/', technology:['wordpress','php','html', 'css', 'js']}
];


function mostrarProyectos(proyectos) {
    // Limpia el contenedor antes de mostrar proyectos
    containerProyects.innerHTML = '';

    for (const proyecto of proyectos) {
        const itemProyect = document.createElement('div');
        const favorite = 'favorite';
        proyecto.clase ? itemProyect.classList.add('proyect-item', favorite) : itemProyect.classList.add('proyect-item');

        const wrapperImagen = document.createElement('div');
        wrapperImagen.classList.add('wrapper-image');

        const proyectImage = document.createElement('img');
        proyectImage.setAttribute('src', proyecto.image);
        proyectImage.setAttribute('alt', proyecto.name);
        proyectImage.classList.add('image-proyect');

        const titleProyect = document.createElement('h3');
        titleProyect.innerText = proyecto.name;
        titleProyect.classList.add('title-proyect');

        const button = document.createElement('a');
        button.setAttribute('href', proyecto.url);
        button.setAttribute('target', '_blank');
        button.innerText = 'Ver más';
        button.classList.add('button-view-more');

        const permalink = document.createElement('a');
        permalink.setAttribute('href', proyecto.url);
        permalink.setAttribute('target', '_blank');

        containerProyects.appendChild(itemProyect);
        itemProyect.appendChild(permalink);
        itemProyect.appendChild(wrapperImagen);
        wrapperImagen.appendChild(permalink);
        permalink.appendChild(proyectImage);
        itemProyect.appendChild(titleProyect);
        itemProyect.appendChild(button);
    }
}
mostrarProyectos(proyectsList);

//Filtro proyecto en WordPress
btnfilterwp.addEventListener('click', function(){
    const proyectosWp = proyectsList.filter(function(proyecto){
        return proyecto.technology.includes('wordpress')
    });
    mostrarProyectos(proyectosWp); 
    btnfilterclear.style.display = "flex";
});

//Filtros de proyectos en Codigo
btnfiltercode.addEventListener('click', function(){
    const proyectosCode = proyectsList.filter(function(proyecto){
        return proyecto.technology.includes('code');
    });
    mostrarProyectos(proyectosCode); 
    btnfilterclear.style.display = "flex";
});

//Limpiar filtros
btnfilterclear.addEventListener('click', function(){
    containerProyects.innerHTML = '';
    mostrarProyectos(proyectsList);
    btnfilterclear.style.display = "none";
});

//Cantidad de proyectos hechos en Wordpress
const cantidadProyectosWp = proyectsList.filter(function(proyecto){
    return proyecto.technology.includes('wordpress');
}).length;

qtywp.innerText = "(" + cantidadProyectosWp.toString() + ")";

//Cantidad de proyectos hechos con Codigo
const cantidadProyectosCode = proyectsList.filter(function(proyecto){
    return proyecto.technology.includes('code');
}).length;

qtycode.innerText = "(" + cantidadProyectosCode.toString() + ")";