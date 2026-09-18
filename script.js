// ==============================
// SOBRE → CONTRASEÑA → CARTA
// ==============================

function mostrarPassword() {
    document.getElementById("inicio").classList.add("oculto");
    document.getElementById("password").classList.remove("oculto");
}

function comprobarPassword() {

    const respuesta = document
        .getElementById("passwordInput")
        .value
        .trim();

    const error = document.getElementById("errorPassword");

    if (respuesta === "1808") {

        // Ocultar contraseña
        document.getElementById("password").classList.add("oculto");

        // Mostrar carta
        document.getElementById("carta").classList.remove("oculto");

        // Llevar automáticamente al inicio de la carta
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        error.textContent = "Mmm... esa no es 💙 Intenta otra vez.";

    }
}


// ==============================
// CASSETTE
// ==============================

let youtubePlayer;
let youtubeListo = false;
let musicaReproduciendo = false;

function onYouTubeIframeAPIReady() {

    youtubePlayer = new YT.Player("youtubePlayer", {

        events: {

            onReady: function () {
                youtubeListo = true;
            },

            onStateChange: function (event) {

                if (event.data === YT.PlayerState.PLAYING) {
                    musicaReproduciendo = true;
                }

                if (
                    event.data === YT.PlayerState.PAUSED ||
                    event.data === YT.PlayerState.ENDED
                ) {
                    musicaReproduciendo = false;
                }

            }

        }

    });

}

function reproducirMusica() {

    if (!youtubeListo) {
        alert("Espera un segundo y vuelve a tocar el cassette 🎵");
        return;
    }

    if (musicaReproduciendo) {

        youtubePlayer.pauseVideo();

    } else {

        youtubePlayer.playVideo();

    }

}
    if (!youtubePlayer) return;

    if (musicaReproduciendo) {
        youtubePlayer.pauseVideo();
        musicaReproduciendo = false;
    } else {
        youtubePlayer.playVideo();
        musicaReproduciendo = true;
    }

}

// ==============================
// RECUERDOS
// ==============================

const recuerdos = [
    "img/recuerdo1.jpg",
    "img/recuerdo2.jpg",
    "img/recuerdo3.jpg",
    "img/recuerdo4.jpg",
    "img/recuerdo5.jpg",
    "img/recuerdo6.jpg"
];

let recuerdoActual = 0;


// ==============================
// CORAZÓN
// ==============================

function siguienteRecuerdo() {

    const contenedor = document.getElementById("recuerdos");
    const contador = document.getElementById("contador");
    const corazon = document.getElementById("corazon");
    const textoCorazon = document.getElementById("textoCorazon");
    const imagenFinal = document.getElementById("imagenFinal");
    const teAmo = document.getElementById("teAmo");


    // Si todavía quedan recuerdos
    if (recuerdoActual < recuerdos.length) {

        contenedor.innerHTML = `
            <img
                src="${recuerdos[recuerdoActual]}"
                alt="Recuerdo"
            >
        `;

        recuerdoActual++;


        // Mostrar cuántos quedan
        const quedan = recuerdos.length - recuerdoActual;

        if (quedan > 0) {

            contador.textContent =
                `❤️ ${quedan} recuerdos restantes`;

            textoCorazon.textContent =
                `SIGUIENTE ❤️`;

        } else {

            contador.textContent =
                "❤️ 0 recuerdos restantes";

            textoCorazon.textContent =
                "FINAL ❤️";

        }

    }

    // Cuando ya se mostraron los 6 recuerdos
    else {

        corazon.style.display = "none";
        contador.style.display = "none";
        contenedor.style.display = "none";

        imagenFinal.style.display = "block";
        teAmo.style.display = "block";

        imagenFinal.scrollIntoView({
            behavior: "smooth"
        });

    }

}
