// ==============================
// SOBRE → CONTRASEÑA → CARTA
// ==============================

function mostrarPassword() {

    const inicio = document.getElementById("inicio");
    const password = document.getElementById("password");

    if (!inicio || !password) return;

    inicio.classList.add("oculto");

    password.classList.remove("oculto");

}


// ==============================
// CONTRASEÑA
// ==============================

function comprobarPassword() {

    const input = document.getElementById("passwordInput");
    const error = document.getElementById("errorPassword");

    const password = document.getElementById("password");
    const carta = document.getElementById("carta");

    if (!input || !error || !password || !carta) return;

    const respuesta = input.value.trim();

    if (respuesta === "1808") {

        password.classList.add("oculto");

        carta.classList.remove("oculto");

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


// Esta función la llama automáticamente YouTube
function onYouTubeIframeAPIReady() {

    youtubePlayer = new YT.Player(
        "youtubePlayer",
        {

            events: {

                onReady: function () {

                    youtubeListo = true;

                },

                onStateChange: function (event) {

                    if (
                        event.data ===
                        YT.PlayerState.PLAYING
                    ) {

                        musicaReproduciendo = true;

                        actualizarEstadoMusica(
                            "🎵 Reproduciendo..."
                        );

                    }


                    if (
                        event.data ===
                        YT.PlayerState.PAUSED
                    ) {

                        musicaReproduciendo = false;

                        actualizarEstadoMusica(
                            "⏸️ Pausado"
                        );

                    }


                    if (
                        event.data ===
                        YT.PlayerState.ENDED
                    ) {

                        musicaReproduciendo = false;

                        actualizarEstadoMusica(
                            "🎵 Toca el cassette para continuar"
                        );

                    }

                }

            }

        }
    );

}


// ==============================
// TEXTO DEL CASSETTE
// ==============================

function actualizarEstadoMusica(texto) {

    const estado =
        document.getElementById("estadoMusica");

    if (estado) {

        estado.textContent = texto;

    }

}


// ==============================
// CASSETTE
// ==============================

function reproducirMusica() {

    const reproductor =
        document.getElementById("youtubePlayer");


    // Si YouTube todavía no terminó
    // de cargar, mostramos el reproductor.

    if (!youtubeListo || !youtubePlayer) {

        if (reproductor) {

            reproductor.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

        actualizarEstadoMusica(
            "🎵 Espera a que cargue la playlist..."
        );

        return;

    }


    // PAUSAR

    if (musicaReproduciendo) {

        youtubePlayer.pauseVideo();

        return;

    }


    // REPRODUCIR

    youtubePlayer.playVideo();

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


    if (
        !contenedor ||
        !contador ||
        !corazon ||
        !textoCorazon ||
        !imagenFinal ||
        !teAmo
    ) {

        return;

    }


    // =========================
    // MOSTRAR RECUERDO
    // =========================

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

    }


    // =========================
    // IMAGEN FINAL
    // =========================

    else {

        corazon.style.display = "none";

        contador.style.display = "none";

        contenedor.style.display = "none";


        imagenFinal.style.display = "block";

        teAmo.style.display = "block";


        imagenFinal.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

}
