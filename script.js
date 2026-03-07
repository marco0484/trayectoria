// SCROLL SUAVE EN EL MENU

// Selecciona todos los enlaces <a> dentro de <nav> cuyo href empieza con "#"
// (es decir, enlaces que apuntan a secciones de la misma página)
document.querySelectorAll('nav a[href^="#"]').forEach(link => {

    // A cada enlace encontrado se le agrega un evento cuando se hace click
    link.addEventListener("click", function(e){

        e.preventDefault(); // Evita que el navegador haga el salto automático a la sección

        // Obtiene el valor del href (#skills, #info, etc.)
        // y busca el elemento del documento que tenga ese id
        const target = document.querySelector(this.getAttribute("href"));

        
        if(target){                     // Verifica que la sección exista en la página
            target.scrollIntoView({     // Desplaza la página hasta ese elemento
                behavior:"smooth",      // Hace que el desplazamiento sea animado y suave
                block:"start"           // Coloca la sección al inicio de la pantalla
            });
        }
    });

});



// ANIMACION AL APARECER SECCIONES

const sections = document.querySelectorAll("section");      // Selecciona todas las etiquetas <section> de la página
const observer = new IntersectionObserver((entries) => {    // Crea un observador que detecta cuando un elemento entra en la pantalla

    entries.forEach(entry => {

        // Si la sección está visible dentro del viewport
        if(entry.isIntersecting){

            // Agrega la clase "show" al elemento
            // normalmente esta clase activa una animación en CSS
            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2 // La animación se activa cuando el 20% de la sección es visible
});

// Recorre todas las secciones
sections.forEach(section => {

    // Le dice al observer que observe cada sección
    // para detectar cuando aparezca en pantalla
    observer.observe(section);

});


// MENSAJE AL DESCARGAR CV
// Busca el botón que tiene la clase .btn

const btn = document.querySelector(".btn");

if(btn){ // Verifica que el botón exista en la página

    // Cuando se hace click en el botón
    btn.addEventListener("click", () =>{

        // Muestra un mensaje en la consola del navegador
        console.log("Descargando CV...");
    });

}