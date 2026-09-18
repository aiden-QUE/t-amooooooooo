// ==========================================
// ESPERAR A QUE CARGUE TODA LA PÁGINA
// ==========================================

document.addEventListener("DOMContentLoaded", function () {


    // ==========================================
    // SOBRE
    // ==========================================

    const botonSobre = document.getElementById("botonSobre");

    const inicio = document.getElementById("inicio");

    const password = document.getElementById("password");


    if (botonSobre) {

        botonSobre.addEventListener("click", function () {

            inicio.classList.add("oculto");

            password.classList.remove("oculto");

            window.scrollTo(0, 0);

        });

    }


    // ==========================================
    // CONTRASEÑA
    // ==========================================

    const botonDesbloquear =
        document.querySelector("#password button");

    const passwordInput =
        document.getElementById("passwordInput");

    const errorPassword =
        document.getElementById("errorPassword");

    const carta =
        document.getElementById("carta");


    if (botonDesbloquear) {

        botonDesbloquear.addEventListener("click", function () {

            const respuesta =
                passwordInput.value.trim();


            if (respuesta === "1808") {

                password.classList.add("oculto");

                carta.classList.remove("oculto");

                window.scrollTo(0, 0);

            } else {

                errorPassword.textContent =
                    "Mmm... esa no es 💙 Intenta otra vez.";

            }

        });

    }


    // ==========================================
    // RECUERDOS
    // ==========================================

    const recuerdos = [

        "img/recuerdo1.jpg",
        "img/recuerdo2.jpg",
        "img/recuerdo3.jpg",
        "img/recuerdo4.jpg",
        "img/recuerdo5.jpg",
        "img/recuerdo6.jpg"

    ];


    let recuerdoActual = 0;


    // ==========================================
    // ELEMENTOS DEL CORAZÓN
    // ==========================================

    const corazon =
        document.getElementById("corazon");

    const recuerdosContenedor =
        document.getElementById("recuerdos");

    const contador =
        document.getElementById("contador");

    const textoCorazon =
        document.getElementById("textoCorazon");

    const imagenFinal =
        document.getElementById("imagenFinal");

    const teAmo =
        document.getElementById("teAmo");


    // ==========================================
    // CLIC EN EL CORAZÓN
    // ==========================================

    if (corazon) {

        corazon.addEventListener("click", function () {


            // ------------------------------
            // TODAVÍA QUEDAN RECUERDOS
            // ------------------------------

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


                // ------------------------------
                // TODAVÍA QUEDAN MÁS
                // ------------------------------

                if (quedan > 0) {

                    contador.textContent =
                        `❤️ ${quedan} recuerdos restantes`;

                    textoCorazon.textContent =
                        "SIGUIENTE ❤️";

                }


                // ------------------------------
                // YA NO QUEDAN
                // ------------------------------

                else {

                    contador.textContent =
                        "❤️ 0 recuerdos restantes";

                    textoCorazon.textContent =
                        "FINAL ❤️";

                }

            }


            // ==================================
            // MOSTRAR IMAGEN FINAL
            // ==================================

            else {

                corazon.style.display = "none";

                contador.style.display = "none";

                recuerdosContenedor.style.display = "none";


                imagenFinal.style.display = "block";

                teAmo.style.display = "block";


                imagenFinal.scrollIntoView({

                    behavior: "smooth",

                    block: "center"

                });

            }

        });

    }


});
