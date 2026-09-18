// ==============================
// SOBRE → CONTRASEÑA → CARTA
// ==============================

function mostrarPassword() {

    document.getElementById("inicio").classList.add("oculto");

    document.getElementById("password").classList.remove("oculto");

}


// ==============================
// CONTRASEÑA
// ==============================

function comprobarPassword() {

    const respuesta = document
        .getElementById("passwordInput")
        .value
        .trim();

    const error = document.getElementById("errorPassword");

    if (respuesta === "1808") {

        document
            .getElementById("password")
            .classList.add("oculto");

        document
            .getElementById("carta")
            .classList.remove("oculto");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        error.textContent =
            "Mmm... esa no es 💙 Intenta otra vez.";

    }

}


// ==============================
// YOUTUBE
// ==============================

let youtubePlayer = null;
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


// ==============================
// CASSETTE
// ==============================

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

    const contenedor =
        document.getElementById("recuerdos");

    const contador =
        document.getElementById("contador");

    const corazon =
        document.getElementById("corazon");

    const textoCorazon =
        document.getElementById("textoCorazon");

    const imagenFinal =
        document.getElementById("imagenFinal");

    const teAmo =
        document.getElementById("teAmo");


    if (recuerdoActual < recuerdos.length) {

        contenedor.innerHTML = `
            <img
                src="${recuerdos[recuerdoActual]}"
                alt="Recuerdo"
            >
        `;


        recuerdoActual++;


        const quedan =
            recuerdos.length - recuerdoActual;


        if (quedan > 0) {

            contador.textContent =
                `❤️ ${quedan} recuerdos restantes`;

            textoCorazon.textContent =
                "SIGUIENTE ❤️";

        } else {

            contador.textContent =
                "❤️ 0 recuerdos restantes";

            textoCorazon.textContent =
                "FINAL ❤️";

        }

    } else {

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
