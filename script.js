document.addEventListener("DOMContentLoaded", function () {
  const girarBoton = document.getElementById("girar");
  const resultadoDiv = document.getElementById("resultado");

  girarBoton.addEventListener("click", function () {
      const numeroAleatorio = Math.random();
      const resultado = numeroAleatorio < 0.5 ? "Sí" : "No";

      resultadoDiv.textContent = resultado;
  });
});