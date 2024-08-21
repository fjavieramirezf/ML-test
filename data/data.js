var _data = {
    diccionario: {
        entrar: "Iniciar",
        actividad: "Actividad",
        reiniciar: "Reiniciar",
        verdadero: "Verdadero",
        falso:"Falso"
    },
    pantallas: {
        inicio: {
            titulo: "Al hablar y al escribir",
            subtitulo: "Discurso oral y discurso escrito",
            fondo: "01_bg.jpg",
            personajes: [
                {
                    imagen: "assets/01_prsn01.png",
                    position: "ccenter left medium",
                }, {
                    imagen: "assets/01_prsn02.png",
                    position: "ccenter right medium",
                }
            ]
        },
        contenido: {
            fondo: "02_bg.jpg",
            personajes: [
                {
                    imagen: "assets/02_prsn02.png",
                    position: "ccenter left1 medium",
                }, {
                    imagen: "assets/02_prsn01.png",
                    position: "ccenter right1 medium",
                }
            ],
            titulos: {
                titulo1: "Al hablar",
                titulo2: "Al escribir"
            },
            modal1: {
                texto: "¿Has notado que cuando lees un texto en voz alta suena diferente de cuando hablas?<br><br>Esto ocurre porque el vocabulario que usas al hablar y al escribir tiene características diferentes. Observa:"
            },
            botones: [
                {
                    categoria: "alhablar",
                    titulo: "Repites palabras",
                    modal: {
                        texto: "Quizá te ha sucedido que cuando platicas algo que pasó en la escuela repites mucho algunas palabras.",
                        posicionpersonaje: "derecha",
                        personaje: "assets/02_modal01_hp.png",
                        globo: "assets/02_modal01_h.png",
                        textoglobo: "Y entonces, Queta no pudo más y luego, luego, Queta se atacó de risa."
                    }
                },
                {
                    categoria: "alhablar",
                    titulo: "Usas expresiones para mostrar emoción",
                    modal: {
                        texto: "Al contar una historia o algo que te sucedió, incluyes palabras que le dan emoción a lo que expresas.",
                        posicionpersonaje: "izquierda",
                        personaje: "assets/02_modal02_hp.png",
                        globo: "assets/02_modal02_h.png",
                        textoglobo: "Ayer Javi me asustó y entonces grité \"¡Aaaaaah, qué horror!\", porque de verdad me dio mucho pero muchísimo miedo."
                    }
                },
                {
                    categoria: "alhablar",
                    titulo: "No puedes borrar lo que dices",
                    modal: {
                        texto: "Cuando hablas, no puedes usar una goma para borrar tus palabras.</br>Si te equivocas, puedes decir <i>perdón</i> o alguna palabra parecida para corregir lo que dijiste.",
                        posicionpersonaje: "izquierda",
                        personaje: "assets/02_modal03_hp.png",
                        globo: "assets/02_modal03_h.png",
                        textoglobo: "Entonces Javi, ah no, perdón, Queta, se quedó dormida."
                    }
                },
                {
                    categoria: "alescribir",
                    titulo: "No repites palabras",
                    modal: {
                        texto: "Cuando escribas, evita repetir palabras. De lo contrario, no se entenderá lo que deseas informar.",
                        posicionpersonaje: "centro",
                        personaje: "assets/02_modal04_e.png",
                        globo: "",
                        textoglobo: ""
                    }
                },
                {
                    categoria: "alescribir",
                    titulo: "Usas signos para expresar emociones",
                    modal: {
                        texto: "Al escribir, transmites la emoción y la intención con <b>signos de exclamación o de interrogación</b>.</br>Así, evitas repetir letras o palabras que confundan a quien lea tu escrito.",
                        posicionpersonaje: "centro",
                        personaje: "assets/02_modal05_e.png",
                        globo: "",
                        textoglobo: ""
                    }
                },
                {
                    categoria: "alescribir",
                    titulo: "Se puede borrar",
                    modal: {
                        texto: "Si te equivocas al escribir una palabra o si la idea no te parece clara, puedes borrarla y escribirla de nuevo sin que nadie se dé cuenta.",
                        posicionpersonaje: "centro",
                        personaje: "assets/02_modal06_e.png",
                        globo: "",
                        textoglobo: ""
                    }
                },
            ]
        },
        subactividad: {
            titulos: [
                {
                    titulo: "Al hablar",
                    categoria: "alhablar"
                },
                {
                    titulo: "Al escribir",
                    categoria: "alescribir"
                }
            ],
            instrucciones: "Ayuda a Paca a recordar las diferencias entre hablar y escribir.</br>Arrastra los bloques hacia el lado correcto.",
            fondo: "03_bg.jpg",
            retroalimentacion: "¡Bien hecho!</br>Al hablar, expresas ideas de manera espontánea y es común que cometas errores o que repitas palabras.</br>Al escribir, debes organizar tus ideas y revisar tu texto antes de presentarlo a otras personas.",
            bloques: [
                {
                    texto: "No puedo borrar, pero si me equivoco, puedo usar una palabra, como <b><i>perdón</i></b>, para corregir.",
                    categoria: "alhablar"
                },
                {
                    texto: "Es común que repita palabras.",
                    categoria: "alhablar"
                },
                {
                    texto: "Uso palabras o frases que transmiten la emoción que siento.",
                    categoria: "alhablar"
                },
                {
                    texto: "Puedo usar signos de interrogación o de exclamación para expresar mis emociones.",
                    categoria: "alescribir"
                },
                {
                    texto: "Si me equivoco, puedo borrar y nadie se dará cuenta.",
                    categoria: "alescribir"
                },
                {
                    texto: "No debo repetir palabras.",
                    categoria: "alescribir"
                }
            ]
        }
    },
    actividad: {
        instrucciones: "¿Recuerdas las diferencias entre hablar y escribir? Pongamos a prueba tus conocimientos. </br>Lee con atención y señala si cada enunciado es falso o verdadero.",
        fondo: "04_bg.png",
        negativa: "Recuerda que al hablar y al escribir podemos corregir palabras, como las que repetimos, incluso para buscar alguna otra palabra que exprese con claridad lo que sentimos.",
        retroalimentacion: "¡Bien hecho!</br>Al hablar y al escribir tienes variados recursos para expresar lo que tú quieras decir, ya sean emociones, ideas o historias. Es importante que sepas que en ambos casos tienes la oportunidad de corregir tus palabras.",
        opciones: [{
            id: 1,
            esverdadero: true,
            texto: "Cuando cuentas algo, puedes transmitir la emoción que sientes."
        }, {
            id: 2,
            esverdadero: false,
            texto: "Al hablar, es posible borrar lo que se desea corregir."
        }, {
            id: 3,
            esverdadero: true,
            texto: "Cuando escribes, no debes repetir palabras."
        }, {
            id: 4,
            esverdadero: false,
            texto: "Cuando escribes, es imposible transmitir emociones."
        }, {
            id: 5,
            esverdadero: true,
            texto: "Si te equivocas al escribir, puedes borrar y nadie se dará cuenta."
        }
        ]
    }
};
