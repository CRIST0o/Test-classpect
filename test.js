// 1. CONFIGURACIÓN DE LOS 24 ÍTEMS (Clases y Aspectos)
const items = {
    // ACTIVAS
    "Witch":  { preguntas: [1, 2, 3, 4], puntos: 0, tipo: "activa", peso: 6 },
    "Prince": { preguntas: [5, 6, 7, 8], puntos: 0, tipo: "activa", peso: 5 },
    "Thief":  { preguntas: [9, 10, 11, 12], puntos: 0, tipo: "activa", peso: 4 },
    "Knight": { preguntas: [13, 14, 15, 16], puntos: 0, tipo: "activa", peso: 3 },
    "Mage":   { preguntas: [17, 18, 19, 20], puntos: 0, tipo: "activa", peso: 2 },
    "Sylph":  { preguntas: [21, 22, 23, 24], puntos: 0, tipo: "activa", peso: 1 },
    // PASIVAS
    "Heir":   { preguntas: [25, 26, 27, 28], puntos: 0, tipo: "pasiva", peso: 6 },
    "Bard":   { preguntas: [29, 30, 31, 32], puntos: 0, tipo: "pasiva", peso: 5 },
    "Rogue":  { preguntas: [33, 34, 35, 36], puntos: 0, tipo: "pasiva", peso: 4 },
    "Page":   { preguntas: [37, 38, 39, 40], puntos: 0, tipo: "pasiva", peso: 3 },
    "Seer":   { preguntas: [41, 42, 43, 44], puntos: 0, tipo: "pasiva", peso: 2 },
    "Maid":   { preguntas: [45, 46, 47, 48], puntos: 0, tipo: "pasiva", peso: 1 },
    // ASPECTOS
    "Light":  { preguntas: [49, 50, 51, 52], puntos: 0, tipo: "aspecto" },
    "Void":   { preguntas: [53, 54, 55, 56], puntos: 0, tipo: "aspecto" },
    "Breath": { preguntas: [57, 58, 59, 60], puntos: 0, tipo: "aspecto" },
    "Blood":  { preguntas: [61, 62, 63, 64], puntos: 0, tipo: "aspecto" },
    "Time":   { preguntas: [65, 66, 67, 68], puntos: 0, tipo: "aspecto" },
    "Space":  { preguntas: [69, 70, 71, 72], puntos: 0, tipo: "aspecto" },
    "Rage":   { preguntas: [73, 74, 75, 76], puntos: 0, tipo: "aspecto" },
    "Hope":   { preguntas: [77, 78, 79, 80], puntos: 0, tipo: "aspecto" },
    "Life":   { preguntas: [81, 82, 83, 84], puntos: 0, tipo: "aspecto" },
    "Doom":   { preguntas: [85, 86, 87, 88], puntos: 0, tipo: "aspecto" },
    "Mind":   { preguntas: [89, 90, 91, 92], puntos: 0, tipo: "aspecto" },
    "Heart":  { preguntas: [93, 94, 95, 96], puntos: 0, tipo: "aspecto" }
};
// 2. BANCO DE PREGUNTAS (Escribe tus 96 preguntas aquí)
const misPreguntas = [
// CLASES ACTIVAS (1-24)
    //Witch
    "Me encanta desafiar lo que todos consideran 'imposible' o 'sagrado'.", "A veces puedo ser demasiado terco cuando otros intentan ponerme límites.", "Confío plenamente en mi capacidad para tomar el control de una situación; no espero que las cosas sucedan, yo las obligo a suceder mediante mi voluntad.", "Si las leyes de mi entorno o la 'forma en que funcionan las cosas' me impiden lograr lo que quiero, no dudo en romperlas o cambiarlas a mi favor.",
    //Prince
    "Tiendo a tomar decisiones drásticas por los demás sin consultarles, porque estoy convencido de que soy el único con la voluntad necesaria para hacer lo que hace falta.", "Prefiero ser yo quien provoque el final de algo que ver cómo se desmorona lentamente fuera de mi control.", "Confío tan poco en la capacidad de los demás para manejar situaciones críticas que prefiero cargar con todo yo solo, aunque esa carga me termine amargando o destruyendo mis relaciones.", "Cuando siento que pierdo el control sobre una situación, mi reacción inmediata es actuar con fuerza y de forma tajante.",
    //Thief
    "No tengo problema en ser la persona 'difícil' o impopular si eso me garantiza el éxito,", "Confío tanto en mi visión y en mi capacidad que a menudo paso por encima de los deseos de los demás para asegurar el éxito.", "Nada me satisface más que superar a los demás y demostrar que puedo lograr objetivos que otros consideran imposibles o demasiado difíciles.", "Tengo un orgullo inmenso y me esfuerzo constantemente por demostrar que soy el mejor.",
    //Knight
    "Siento que es mi responsabilidad cargar con los problemas del grupo y proteger a los demás, incluso si eso significa sacrificar mis propios deseos o bienestar.", "Veo mis talentos y recursos como herramientas prácticas que debo dominar para ser útil en cualquier situación.", "Suelo trabajar con lo que tengo a mano, incluso si es poco, y me enorgullece mi capacidad para hacer que recursos limitados rindan al máximo.", "Me esfuerzo mucho por parecer que tengo todo bajo control y que soy alguien competente, porque me aterra que los demás descubran mis debilidades o dudas internas.",
    //Mage
    "Tengo una forma de procesar la información que a los demás les parece extraña o caótica, pero para mí tiene todo el sentido del mundo.", "Soy el tipo de persona que prefiere arreglar las cosas por su cuenta, de forma silenciosa y técnica, antes que perder el tiempo explicándoselo a los demás.", "Siento que la vida me ha obligado a aprender las lecciones de la manera más difícil posible.", "Sé exactamente cómo van a salir las cosas porque ya he pasado por eso.",
    //Sylph
    "Me tomo como una misión personal ayudar a que los demás alcancen su mejor versión, aunque a veces mi ayuda pueda parecer una imposición.", "Valoro el orden y la armonía, y me esfuerzo por ser la pieza que mantiene todo unido y funcionando, sin embargo, ese deseo de armonía me lleva a intentar controlar sutilmente las acciones de los demás para evitar que se desvíen del camino 'correcto' sin querer necesariamente ser el foco de atención.", "No necesito ser el centro de atención ni tomar decisiones drásticas, pero trabajo incansablemente en los detalles para asegurar que todo funcione correctamente", "Me cuesta mucho quedarme callada cuando veo que alguien está cometiendo un error.",

// CLASES PASIVAS (25-48)
    //Heir
    "Confío tanto en el flujo de la vida que mi tranquilidad suele contagiar a los que me rodean.", "No busco liderar ni convencer a nadie, pero me doy cuenta de que mi forma de ser motiva a otros.", "No busco el control porque siento que, de alguna manera, el entorno siempre conspira a mi favor.", "Confío en que la vida me llevará por el camino correcto y me dejo llevar por las circunstancias, adaptándome con naturalidad a lo que venga.",
    //Bard
    "No busco pelear, pero tampoco busco encajar.", "Me gusta observar cómo los demás se toman todo tan en serio y, con un par de comentarios ácidos, demostrarles lo frágiles que son sus certezas.", "A veces provoco grandes cambios o rupturas simplemente por mi falta de acción o por mi descuido", "A veces basta con mi sola presencia o un comentario al pasar para que todo lo que no funciona termine de colapsar.",
    //Rogue
    "Me siento cómodo siendo el 'villano' en la historia de los poderosos, siempre y cuando eso signifique que mi grupo tiene lo que necesita, mi lealtad no es hacia las reglas, sino hacia quienes el sistema ha dejado atrás.", "Puedo ser muy desafiante con la autoridad o con las reglas si siento que estas son injustas o privan a otros de lo que merecen.", "Mi talento es identificar las falencias y llenarlos de forma sutil, sin que nadie note siquiera que fui yo quien lo hizo.", "A veces me cuesta definir quién soy o qué quiero para mí mismo, porque tiendo a volcar toda mi energía en las necesidades de los demás.",
    //Page
    "Me cuesta mucho confiar en mi propio juicio, así que tiendo a dejar que personalidades más dominantes tomen las riendas por mí.", "Puede que ahora me vea superado por las circunstancias o por personalidades más fuertes, pero mi voluntad es inquebrantable.", "Tengo una visión optimista y un poco ingenua del mundo, lo que a veces hace que otros se aprovechen de mí.", "A menudo siento que los demás esperan poco de mí o que yo mismo no encuentro mi lugar.",
    //Seer
    "Tengo una facilidad natural para conectar puntos que otros ignoran y entender las reglas no escritas de cualquier entorno.", "Mi satisfacción no viene de ejecutar la acción, sino de saber que el éxito fue posible gracias a mi lectura de la situación.", "Tengo una capacidad natural para ver el panorama completo cuando los demás solo ven el caos del momento.", "Me gusta recolectar datos y observar patrones antes de dar una opinión.",
    //Maid
    "Soy la persona que siempre cumple, la que sostiene el peso y la que no deja que nada se rompa.", "No busco cuidar a otros todo el tiempo, busco ser tan eficiente en mi labor de soporte que, al final, no necesite a nadie más para ejecutar mi propia visión del mundo.", "Tengo una capacidad natural para absorber la carga de trabajo y las responsabilidades que otros evitan.", "Mi personalidad se define por una responsabilidad inquebrantable y una capacidad de gestión que asegura que nada se desmorone.",
// ASPECTOS (49-96)
    //Light
    "Tengo miedo a ser insignificante o irrelevante", "Me siento más seguro cuando todo está a la vista y no hay secretos o ambigüedades.", "No soporto la ignorancia ni que se me oculte la verdad.", "Creo que no existen las coincidencias, cada evento, por pequeño que sea, es una pieza clave en un esquema mayor.",
    //Void
    "Confío en mi capacidad de resolver situaciones sin entender el proceso.", "Prefiero vivir en la duda antes que aceptar una verdad impuesta.", "Me aterra ser completamente transparente para los demás.", "Siento pasión por lo que aún no existe o está oculto.",
    //Breath
    "Me asfixia que otros intenten dictar mi camino.", "Me gusta la idea de cambiar de rumbo en cualquier momento.", "Tiendo a desconectarme de las emociones en general, ya sean las mías o las de los demás.", "Me aterra no poder hacer lo que quiera.",
    //Blood
    "Me resulta casi imposible abandonar a alguien o un proyecto común.", "Creo firmemente que el consenso y la unión son más importantes que la libertad individual de hacer lo que uno quiera.", "Considero que mi identidad está definida por mis relaciones.", "Tengo miedo a que me abandonen mis seres queridos.",
    //Time
    "Siento una presión constante por avanzar.", "Si fallo no importa porque siempre se puede intentar de nuevo.", "No temo equivocarme, porque creo firmemente que de los errores se aprende.", "Si el objetivo es lo suficientemente importante, estoy dispuesto a tomar decisiones difíciles.",
    //Space
    "Creo que el momento en que algo nuevo cobra vida o forma es el evento más importante, por pequeño que sea.", "Valoro mis momentos de soledad.", "Prefiero esperar al momento preciso para actuar en lugar de forzar situaciones por impaciencia.", "Para mí, la calidad y la forma en que se desarrolla una tarea son tan importantes como el objetivo final.",
    //Rage
    "Acepto mis emociones negativas como partes esenciales de mi identidad.", "Mi mayor temor es convertirme en un seguidor complaciente que ha dejado de cuestionar la realidad.", "Cuestiono por naturaleza cualquier autoridad o sistema establecido.", "Prefiero una verdad dolorosa y destructiva antes que una mentira reconfortante que mantenga una estabilidad falsa.",
    //Hope
    "Me aterra descubrir que mis sueños eran solo fantasías sin peso real.", "Mi mayor fortaleza es mi capacidad para creer en algo incluso cuando todo el mundo dice que es imposible.", "Me guía lo que considero que es correcto y justo, incluso si es fantasioso.", "Creo firmemente que la confianza a sí mismo es el mayor poder.",
    //Life
    "La idea de conformarme con lo que tengo me parece una forma de derrota.", "Mi prioridad es la búsqueda constante de una vida más abundante.", "Me genera un rechazo profundo la idea de vivir en la escasez.", "Tiendo a evaluar las situaciones basándome en el beneficio tangible que pueden aportar.",
    //Doom
    "A menudo la gente me percibe como alguien pesimista.", "Me siento extrañamente cómodo operando dentro de límites y reglas estrictas.", "Acepto que para que algo nuevo funcione, otras cosas deben ser sacrificadas o dejadas atrás.", "No busco dar optimismo falso cuando alguien sufre.",
    //Mind
    "Superpongo la busqueda de la objetividad sobre la del 'yo'.", "Mi mayor temor es perder la objetividad o dejar que mis emociones nublen mi juicio, llevándome a tomar decisiones basadas en impulsos ciegos en lugar de en la razón.", "Una vez que he analizado todas las opciones y tomado un camino, soy capaz de ejecutar mis planes con una precisión y claridad que otros encuentran asombrosa.", "A menudo me parece fácil tomar una decisión aunque hayan tantas posibilidades, es como si lo tuviera claro.",
    //Heart
    "Para mí, lo peor que puede hacer una persona es traicionar su propia identidad.", "Mi mayor temor es perder el contacto conmigo mismo o quién soy.", "Confío en mis sentimientos e impulsos internos para navegar el mundo.", "Mi identidad no es algo que elijo o cambio, es una esencia interna y profunda que guía mis acciones y me define por encima de cualquier lógica externa."
];
// 3. MEZCLAR ÍNDICES PARA ALEATORIEDAD
function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generarPreguntas() {
    const container = document.getElementById('quiz-container');
    if (!container) return;
    let indices = mezclarArray(Array.from(Array(96).keys()));
    let htmlTotal = "";

    indices.forEach((idReal, iVisual) => {
        const qID = idReal + 1;
        htmlTotal += `
        <div class="pregunta">
            <p><strong>${iVisual + 1}.</strong> ${misPreguntas[idReal]}</p>
            
            <div class="opciones-likert">
                <div class="fila-etiquetas">
                    <span class="label-rango">De acuerdo</span>
                    <span class="label-rango">En desacuerdo</span>
                </div>
                
                <div class="fila-botones">
                    <label><input type="radio" name="q${qID}" value="10" class="iv5"><span class="circulo v5"></span></label>
                    <label><input type="radio" name="q${qID}" value="9" class="iv4"><span class="circulo v4"></span></label>
                    <label><input type="radio" name="q${qID}" value="8" class="iv3"><span class="circulo v3"></span></label>
                    <label><input type="radio" name="q${qID}" value="7" class="iv2"><span class="circulo v2"></span></label>
                    <label><input type="radio" name="q${qID}" value="6" class="iv1"><span class="circulo v1"></span></label>
                    
                    <label><input type="radio" name="q${qID}" value="5" class="in" checked><span class="circulo neutro"></span></label>
                    
                    <label><input type="radio" name="q${qID}" value="4" class="ip1"><span class="circulo p1"></span></label>
                    <label><input type="radio" name="q${qID}" value="3" class="ip2"><span class="circulo p2"></span></label>
                    <label><input type="radio" name="q${qID}" value="2" class="ip3"><span class="circulo p3"></span></label>
                    <label><input type="radio" name="q${qID}" value="1" class="ip4"><span class="circulo p4"></span></label>
                    <label><input type="radio" name="q${qID}" value="0" class="ip5"><span class="circulo p5"></span></label>
                </div>
            </div>
        </div>`;
    });
    container.innerHTML = htmlTotal;
}
function ejecutarAscenso() {
    const btn = document.getElementById('btn-ascender');
    if(btn) btn.classList.add('visitado'); 
    calcularClasspect();
}

function calcularClasspect() {
    const filtroGenero = document.getElementById('gender-filter').value;
    // Arrays de género actualizados (incluyendo los que faltaban)
    const clasesFemeninas = ["Witch", "Sylph", "Maid"];
    const clasesMasculinas = ["Prince", "Bard", "Heir"];

    for (let key in items) { items[key].puntos = 0; }

    let totalActivo = 0;
    let totalPasivo = 0;

    for (let i = 1; i <= 96; i++) {
        const seleccionado = document.querySelector(`input[name="q${i}"]:checked`);
        if (seleccionado) {
            // --- NUEVA LÓGICA DE NORMALIZACIÓN ---
            // El valor original es de 0 a 10. Al restar 5:
            // 10 se vuelve 5, 5 se vuelve 0, 0 se vuelve -5.
            const valorBase = parseInt(seleccionado.value);
            const valorNormalizado = valorBase - 5; 

            for (let key in items) {
                if (items[key].preguntas.includes(i)) {
                    
                    // 1. Suma para la clase (con posibilidad de restar)
                    items[key].puntos += valorNormalizado;

                    // 2. Suma para la balanza Activo/Pasivo usando pesos
                    const pesoImportancia = items[key].peso || 1;
                    const puntosConPeso = valorNormalizado * pesoImportancia;

                    if (items[key].tipo === "activa") {
                        totalActivo += puntosConPeso;
                    } else if (items[key].tipo === "pasiva") {
                        totalPasivo += puntosConPeso;
                    }
                }
            }
        }
    }

    // El resto de la búsqueda de ganClase y ganAspecto se mantiene igual
    // ...
    // El resto de tu lógica para buscar ganClase y ganAspecto sigue igual...
    // Pero ahora 'totalActivo' y 'totalPasivo' reflejan la intensidad de las clases pesadas.
    
    let ganClase = "";
    let maxClase = -Infinity; // Cambiado a Infinity por si hay puntos negativos
    let ganAspecto = "";
    let maxAspecto = -Infinity;
    
    for (let key in items) {
        if (items[key].tipo !== "aspecto") {
            if (filtroGenero === 'masculine' && clasesFemeninas.includes(key)) continue;
            if (filtroGenero === 'feminine' && clasesMasculinas.includes(key)) continue;
            if (items[key].puntos > maxClase) maxClase = items[key].puntos;
        } else {
            if (items[key].puntos > maxAspecto) maxAspecto = items[key].puntos;
        }
    }

    // 2. Recolectamos TODOS los que tengan ese puntaje máximo (para detectar empates)
    let ganadoresClase = [];
    let ganadoresAspecto = [];

    for (let key in items) {
        if (items[key].tipo !== "aspecto") {
            if (filtroGenero === 'masculine' && clasesFemeninas.includes(key)) continue;
            if (filtroGenero === 'feminine' && clasesMasculinas.includes(key)) continue;
            if (items[key].puntos === maxClase) ganadoresClase.push(key);
        } else {
            if (items[key].puntos === maxAspecto) ganadoresAspecto.push(key);
        }
    }

    // 3. Creamos los strings combinados (ej: "Rogue/Thief")
    let stringClase = ganadoresClase.join('/');
    let stringAspecto = ganadoresAspecto.join('/');

    // 4. Lógica de Master Class (Lord/Muse)
    const umbralMaster = 100; 
    let tituloFinal = `${stringClase} of ${stringAspecto}`;

    if (totalActivo - totalPasivo > umbralMaster) {
        tituloFinal = `Lord of ${stringAspecto}`;
    } else if (totalPasivo - totalActivo > umbralMaster) {
        tituloFinal = `Muse of ${stringAspecto}`;
    }

    // 5. Mostrar resultados
    mostrarResultados(tituloFinal, ganadoresAspecto[0], totalActivo, totalPasivo);
}
function mostrarResultados(rol, aspecto, act, pas) {
    const box = document.getElementById('resultado-box');
    if (!box) return;
    
    // 1. Mostrar la caja de resultados
    box.style.display = "block";
    box.className = ""; 
    box.classList.add(`res-${aspecto.toLowerCase()}`);
    
    // 2. Insertar el nombre del Classpect
    document.getElementById('rol-final').innerText = rol;

    // 3. Actualizar el balance de puntos
    const detalles = document.getElementById('detalles-puntos');
    if (detalles) {
        detalles.innerHTML = `<p id="balance-texto">Balance Activo/Pasivo: Act ${act} | Pas ${pas}</p>`;
    }

    // --- EL CAMBIO PARA EL BOTÓN ---
    // 4. Buscamos el botón y le añadimos la clase 'visitado' para que pase a morado
    const boton = document.getElementById('btn-ascender');
    if (boton) {
        boton.classList.add('visitado');
    }
    // -------------------------------
    
    // 5. Scroll suave hacia el resultado
    window.scrollTo({ top: box.offsetTop - 50, behavior: 'smooth' });
}
// Iniciar
generarPreguntas();
