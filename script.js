// Mostrar la pantalla de contraseña
function mostrarPassword() {
    document.getElementById("inicio").classList.add("oculto");
    document.getElementById("password").classList.remove("oculto");
}


// Comprobar contraseña
function comprobarPassword() {
    const respuesta = document.getElementById("passwordInput").value;
    const error = document.getElementById("errorPassword");

    if (respuesta === "1808") {
        document.getElementById("password").classList.add("oculto");
        document.getElementById("carta").classList.remove("oculto");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    } else {
        error.textContent = "Mmm... esa no es 💙 Intenta otra vez.";
    }
}


// Imágenes que aparecerán al final
const recuerdos = [
    "img/recuerdo1.jpg",
    "img/recuerdo2.jpg",
    "img/recuerdo3.jpg",
    "img/recuerdo4.jpg",
    "img/recuerdo5.jpg",
    "img/recuerdo6.jpg"
];


// Mostrar las imágenes una por una
function comenzarFinal() {

    const boton = document.getElementById("corazon");
    const contenedor = document.getElementById("recuerdos");
    const contador = document.getElementById("contador");
    const imagenFinal = document.getElementById("imagenFinal");

    boton.style.display = "none";

    let numero = 0;

    function mostrarRecuerdo() {

        if (numero < recuerdos.length) {

            contenedor.innerHTML = `
                <img src="${recuerdos[numero]}" alt="Recuerdo">
            `;

            numero++;

            setTimeout(mostrarRecuerdo, 1800);

        } else {

            iniciarCuentaRegresiva();

        }
    }


    function iniciarCuentaRegresiva() {

        let tiempo = 3;

        contador.textContent = tiempo;

        const intervalo = setInterval(() => {

            tiempo--;

            if (tiempo > 0) {
                contador.textContent = tiempo;
            } else {

                clearInterval(intervalo);

                contador.textContent = "💙";

                imagenFinal.style.display = "block";

                imagenFinal.scrollIntoView({
                    behavior: "smooth"
                });
            }

        }, 1000);
    }


    mostrarRecuerdo();
}
