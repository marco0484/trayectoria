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

const btn = document.querySelector(".btn");

if(btn){ 
    
    btn.addEventListener("click", () =>{
        console.log("Descargando CV...");
    });

}