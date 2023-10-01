// script.js
document.addEventListener("DOMContentLoaded", function () {
  const flecha = document.querySelector(".flecha");
  const resultado = document.querySelector("#resultado"); // Get the result element

  document.addEventListener("click", function () {
      // Disable the click event while spinning
      document.body.style.pointerEvents = "none";

      // Generate a random angle for rotation
      const angulo = Math.floor(Math.random() * 360);

      // Rotate the arrow with a transition effect
      flecha.style.transition = "transform 0.5s ease-out";
      flecha.style.transform = `translate(-50%, -50%) rotate(${angulo}deg)`;

      // Calculate the result based on the angle
      setTimeout(function () {
          let textoResultado;
          if (angulo < 180) {
              textoResultado = "No";
          } else {
              textoResultado = "Sí";
          }

          // Display the result below the arrow
          resultado.textContent = `Resultado: ${textoResultado}`;

          // Reset the arrow's rotation and transition effect
          flecha.style.transition = "none";
          flecha.style.transform = "translate(-50%, -50%) rotate(0deg)";

          // Enable the click event again
          document.body.style.pointerEvents = "auto";
      }, 500); // Adjust the time to match the rotation duration
  });
});