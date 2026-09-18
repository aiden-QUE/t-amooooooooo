document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       RECUERDOS
    ========================= */

    const recuerdos = [
        "img/recuerdo1.jpg",
        "img/recuerdo2.jpg",
        "img/recuerdo3.jpg",
        "img/recuerdo4.jpg",
        "img/recuerdo5.jpg",
        "img/recuerdo6.jpg"
    ];

    let recuerdoActual = 0;

    const corazon = document.getElementById("corazon");
    const recuerdosContenedor = document.getElementById("recuerdos");
    const contador = document.getElementById("contador");
    const textoCorazon = document.getElementById("textoCorazon");
    const imagenFinal = document.getElementById("imagenFinal");
    const teAmo = document.getElementById("teAmo");

    if (corazon) {

        corazon.addEventListener("click", function () {

            if (recuerdoActual < recuerdos.length) {

                recuerdosContenedor.innerHTML = `
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
                recuerdosContenedor.style.display = "none";

                imagenFinal.style.display = "block";
                teAmo.style.display = "block";

                imagenFinal.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });
    }


    /* =========================
       CASSETTE + YOUTUBE
    ========================= */

    const cassette = document.getElementById("cassette");
    const estadoMusica = document.getElementById("estadoMusica");

    let player = null;
    let youtubeListo = false;
    let reproduciendo = false;


    /*
       Esta función se llama cuando
       la API de YouTube termina de cargar.
    */

    window.onYouTubeIframeAPIReady = function () {

        player = new YT.Player("youtubePlayer", {

            events: {

                onReady: function () {

                    youtubeListo = true;

                    if (estadoMusica) {
                        estadoMusica.textContent =
                            "Toca el cassette 🎵";
                    }
                },

                onStateChange: function (event) {

                    if (event.data === YT.PlayerState.PLAYING) {

                        reproduciendo = true;

                        if (estadoMusica) {
                            estadoMusica.textContent =
                                "Reproduciendo nuestra música 🎵💙";
                        }

                    }

                    if (
                        event.data === YT.PlayerState.PAUSED ||
                        event.data === YT.PlayerState.ENDED
                    ) {

                        reproduciendo = false;

                        if (estadoMusica) {
                            estadoMusica.textContent =
                                "Toca el cassette para continuar 🎵";
                        }
                    }
                }

            }

        });

    };


    /*
       Si la API de YouTube ya estaba cargada
       antes de ejecutar este archivo.
    */

    if (window.YT && window.YT.Player) {
        window.onYouTubeIframeAPIReady();
    }


    /* =========================
       CLICK DEL CASSETTE
    ========================= */

    if (cassette) {

        cassette.addEventListener("click", function () {

            if (!youtubeListo || !player) {

                if (estadoMusica) {
                    estadoMusica.textContent =
                        "Cargando la música... 🎵";
                }

                return;
            }


            if (reproduciendo) {

                player.pauseVideo();

            } else {

                player.playVideo();

            }

        });

    }

});
