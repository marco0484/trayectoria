// SCROLL SUAVE EN EL MENU

document.querySelectorAll('nav a[href^="#"]').forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){
target.scrollIntoView({
behavior:"smooth",
block:"start"
});
}

});

});



// ANIMACION AL APARECER SECCIONES

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

},{
threshold:0.2
});


sections.forEach(section => {
observer.observe(section);
});



// MENSAJE AL DESCARGAR CV

const btn = document.querySelector(".btn");

if(btn){

btn.addEventListener("click", () =>{
console.log("Descargando CV...");
});

}