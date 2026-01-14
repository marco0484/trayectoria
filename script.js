document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btnProyectos");
    const modal = document.getElementById("ventanaProyectos");
    const span = document.querySelector(".cerrar");
  
    btn.onclick = function () {
      modal.style.display = "block";
    };
  
    span.onclick = function () {
      modal.style.display = "none";
    };
  
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });
  