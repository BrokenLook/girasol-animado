window.addEventListener("DOMContentLoaded", () => {

    // 🌻 Animación del girasol y texto
    setTimeout(() => {
        document.querySelector(".girasol").classList.add("bloom");
        document.querySelector("#mensaje").classList.add("mostrar");
    }, 1000);

    // ✨ Contenedor correcto de partículas
    const contenedor = document.getElementById("particles");

    // ⚠️ seguridad por si no existe
    if (!contenedor) {
        console.error("No existe #particles en el HTML");
        return;
    }

    // 🌟 crear partículas
function crearParticula() {
    const p = document.createElement("div");
    p.classList.add("particula");

    const container = document.getElementById("particles");

    // posición horizontal
    const x = Math.random() * 100;
    p.style.left = x + "vw";

    // SIEMPRE empezar desde abajo bien
    p.style.bottom = "-10px";

    // tamaño
    const size = Math.random() * 4 + 2;
    p.style.width = size + "px";
    p.style.height = size + "px";

    // duración
    const duration = Math.random() * 3 + 2;
    p.style.animationDuration = duration + "s";

    container.appendChild(p);

    setTimeout(() => {
        p.remove();
    }, duration * 1000);
}
    // 🔁 generar continuamente
    setInterval(crearParticula, 150);

});