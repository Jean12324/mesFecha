// Fragmentos de la historia
const historia = [
    {
        tipo: "portada",
        texto: "💛 Para mi Cachetitos 💛", // Texto opcional para la portada
    },
    {
        gif: "26869201", // Happy Cat Clapping GIF
        texto: "Kriscial, eres la persona más increíble que he conocido. Desde que llegaste a mi vida, todo cambió. Eres mi razón de sonreír, mi cachetona hermosa, y no hay un solo día en el que no piense en ti.",
    },
    {
        gif: "20616343", // Mochi Pet GIF
        texto: "Antes de conocerte, yo era alguien distante, frío y sin esperanza. Pero tú me enseñaste lo que significa confiar, amar y creer en alguien. Eres la luz que iluminó mis días más oscuros.",
    },
    {
        gif: "24815491", // Mochi Pet GIF
        texto: "Desde que llegaste, me diste razones para cambiar. Solía ser una persona tóxica y desinteresada con la sociedad. Pero tú sanaste mi corazón y mi alma de maneras que nunca imaginé.",
    },
    {
        gif: "15235504468675475208", // Mochi Pet GIF
        texto: "La primera vez que escuché tu voz, supe que había algo especial en ti. Cada palabra, cada gesto, me hicieron enamorarme más y más de la persona maravillosa que eres.",
    },
    {
        gif: "25055364", // Mochi Pet GIF
        texto: "Kriscial, admiro lo fuerte que eres. A pesar de todo lo que has pasado, sigues adelante sin dejarte derrumbar. Tu fortaleza y valentía me inspiran a ser mejor cada día.",
    },
    {
        gif: "25481757", // Mochi Pet GIF
        texto: "Sé que no siempre ha sido fácil. Hemos tenido momentos difíciles, pero seguimos adelante porque el amor que tenemos es más fuerte que cualquier obstáculo.",
    },
    {
        gif: "13406770227234332236", // Mochi Pet GIF
        texto: "Prometo ser mejor cada día por ti. Prometo no rendirme, incluso cuando las cosas se pongan difíciles. No hay nada más importante para mí que verte feliz.",
    },
    {
        gif: "12009074393571713242", // Mochi Pet GIF
        texto: "Contigo he aprendido a soñar con un futuro lleno de felicidad. Imagino nuestra casa, nuestra familia y una vida juntos llena de amor y risas.",
    },
    {
        gif: "21788644", // Mochi Pet GIF
        texto: "Aunque cometo errores, quiero que sepas que siempre estoy dispuesto a mejorar por ti. Tú eres mi motor y mi mayor motivación para cambiar.",
    },
    {
        gif: "27324918", // Mochi Pet GIF
        texto: "Eres la primera persona que confió en mí y me ayudó cuando más lo necesitaba. Nunca olvidaré cómo llenaste de luz los momentos más oscuros de mi vida.",
    },
    {
        gif: "26097836", // Mochi Pet GIF
        texto: "Hemos enfrentado miedos juntos y superado obstáculos que antes parecían imposibles. Contigo, todo parece posible.",
    },
    {
        gif: "16286609", // Mochi Pet GIF
        texto: "Nuestro amor me ha enseñado que las caídas son parte del camino, pero con esfuerzo y compromiso, siempre podemos levantarnos más fuertes.",
    },
    {
        gif: "14624597924205909386", // Mochi Pet GIF
        texto: "Kriscial, eres mi todo. Gracias por amarme tal como soy, por aceptar mis defectos y por ayudarme a convertirme en una mejor versión de mí mismo.",
    },
    {
        gif: "26377050", // Mochi Pet GIF
        texto: "Juntos hemos construido sueños que nunca pensé que tendría. Sueño con un futuro a tu lado, lleno de amor, alegría y tranquilidad.",
    },
    {
        gif: "17718234", // Mochi Pet GIF
        texto: "En los días difíciles, me recuerdo a mí mismo lo afortunado que soy de tenerte. No importa cuántos problemas enfrentemos, siempre estaré a tu lado.",
    },
    {
        gif: "411134658282219592", // Mochi Pet GIF
        texto: "Cuando me equivoco y te lastimo, me duele profundamente. Quiero que sepas que siempre lucharé por no repetir mis errores.",
    },
    {
        gif: "17643762158950276527", // Mochi Pet GIF
        texto: "Hemos tenido altibajos, pero cada momento contigo me ha enseñado el verdadero significado del amor y la paciencia.",
    },
    {
        gif: "21689549", // Mochi Pet GIF
        texto: "Tu amor me ha dado la fuerza para enfrentar mis propios miedos y debilidades. Gracias a ti, he descubierto un lado de mí que no conocía.",
    },
    {
        gif: "22525476", // Mochi Pet GIF
        texto: "Sueño con el día en que caminemos juntos hacia el altar, prometiéndonos amor eterno. No puedo esperar para construir nuestra vida juntos.",
    },
    {
        gif: "20463746", // Mochi Pet GIF
        texto: "Kriscial, cada día contigo es un regalo. Nunca dejaré de agradecerte por aparecer en mi vida y llenarla de luz.",
    },
    {
        gif: "27361998", // Mochi Pet GIF
        texto: "Eres mi todo, mi razón para seguir adelante. Gracias por ser mi apoyo, mi amor y mi mejor amiga. Te amo con todo mi corazón.",
    },
    {
        gif: "8375650168469205544", // Mochi Pet GIF
        texto: "Contigo quiero enfrentar el mundo, superar obstáculos y celebrar cada pequeña victoria. Juntos, sé que podemos con todo.",
    },
    {
        texto: "Hoy cerramos un capítulo más de nuestra historia. Cada día a tu lado es un regalo, y hoy celebramos otro mes lleno de amor y risas. Feliz día, amor mío. Que este mes sea solo uno de los miles más que viviremos juntos, construyendo sueños y disfrutando cada momento. Te amo más de lo que las palabras pueden expresar.",
    },
    {
        gif: "10447284005503087999", // Reemplaza con el ID de un GIF que simbolice amor o celebración
    },
    {
        tipo: "contraportada",
        texto: "Dedicado con todo mi amor ❤️",
    },
];

let paginaActual = 0;

// Función para generar las páginas dinámicamente
function generarPaginas() {
    const libro = document.querySelector(".libro");

    historia.forEach((pagina, index) => {
        const paginaDiv = document.createElement("div");
        paginaDiv.classList.add("pagina");

        // Portada
        if (pagina.tipo === "portada") {
            paginaDiv.classList.add("portada");
            const corazon = document.createElement("div");
            corazon.classList.add("corazon");
            corazon.textContent = pagina.texto;
            paginaDiv.appendChild(corazon);
        }
        // Contraportada
        else if (pagina.tipo === "contraportada") {
            paginaDiv.classList.add("contraportada");
            const mensaje = document.createElement("p");
            mensaje.classList.add("mensaje");
            mensaje.textContent = pagina.texto;
            paginaDiv.appendChild(mensaje);
        }
        // Penúltima página: solo texto centrado
        else if (index === historia.length - 3) {
            paginaDiv.classList.add("penultima-pagina");
            const texto = document.createElement("p");
            texto.textContent = pagina.texto;
            paginaDiv.appendChild(texto);
        }
        // Antepenúltima página: imagen centrada
        else if (index === historia.length - 2) {
            paginaDiv.classList.add("antepenultima-pagina");
            const gifContainer = document.createElement("div");
            gifContainer.classList.add("gif-container");
            const gif = document.createElement("div");
            gif.className = "tenor-gif-embed";
            gif.setAttribute("data-postid", pagina.gif);
            gif.setAttribute("data-share-method", "host");
            gif.setAttribute("data-aspect-ratio", "1.28351");
            gif.setAttribute("data-width", "100%");
            gifContainer.appendChild(gif);
            paginaDiv.appendChild(gifContainer);
        }
        // Páginas normales
        else {
            const gifContainer = document.createElement("div");
            gifContainer.classList.add("gif-container");
            const gif = document.createElement("div");
            gif.className = "tenor-gif-embed";
            gif.setAttribute("data-postid", pagina.gif);
            gif.setAttribute("data-share-method", "host");
            gif.setAttribute("data-aspect-ratio", "1.28351");
            gif.setAttribute("data-width", "100%");
            gifContainer.appendChild(gif);

            const texto = document.createElement("p");
            texto.classList.add("texto-pagina");
            texto.textContent = pagina.texto;

            paginaDiv.appendChild(gifContainer);
            paginaDiv.appendChild(texto);
        }

        libro.appendChild(paginaDiv);
    });

    const tenorScript = document.createElement("script");
    tenorScript.src = "https://tenor.com/embed.js";
    tenorScript.async = true;
    document.body.appendChild(tenorScript);
}

// Función para mostrar una página específica
function mostrarPagina(index) {
    const paginas = document.querySelectorAll(".pagina");

    // Recorrer todas las páginas y actualizar su estado
    paginas.forEach((pagina, i) => {
        if (i === index) {
            pagina.style.transform = "rotateY(0deg)"; // Página visible
            pagina.style.zIndex = "1";
            pagina.classList.add("visible");
        } else {
            pagina.style.transform = i < index ? "rotateY(-180deg)" : "rotateY(0deg)";
            pagina.style.zIndex = "-1"; // Ocultar las demás
            pagina.classList.remove("visible");
        }
    });
}


// Navegación entre páginas
document.getElementById("btn-anterior").addEventListener("click", () => {
    if (paginaActual > 0) {
        paginaActual--;
        mostrarPagina(paginaActual);
    }
});

document.getElementById("btn-siguiente").addEventListener("click", () => {
    if (paginaActual < historia.length - 1) {
        paginaActual++;
        mostrarPagina(paginaActual);
    }
});



// Inicializar las páginas
document.getElementById("boton-sorpresa").addEventListener("click", () => {
    document.getElementById("carta-inicial").style.display = "none";
    document.getElementById("panel-libro").style.display = "flex";
    generarPaginas();
    mostrarPagina(0); // Mostrar la portada al inicio
});

