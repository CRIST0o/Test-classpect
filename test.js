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
    "Page":   { preguntas: [45, 46, 47, 48], puntos: 0, tipo: "pasiva", peso: 3 },
    "Seer":   { preguntas: [41, 42, 43, 44], puntos: 0, tipo: "pasiva", peso: 2 },
    "Maid":   { preguntas: [37, 38, 39, 40], puntos: 0, tipo: "pasiva", peso: 1 },
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
    "Pregunta 1 para WITCH (Activa - Peso 6)", "Pregunta 2 para WITCH (Activa - Peso 6)", "Pregunta 3 para WITCH (Activa - Peso 6)", "Pregunta 4 para WITCH (Activa - Peso 6)",
    //Prince
    "Pregunta 1 para PRINCE (Activa - Peso 5)", "Pregunta 2 para PRINCE (Activa - Peso 5)", "Pregunta 3 para PRINCE (Activa - Peso 5)", "Pregunta 4 para PRINCE (Activa - Peso 5)",
    //Thief
    "Pregunta 1 para THIEF (Activa - Peso 4)", "Pregunta 2 para THIEF (Activa - Peso 4)", "Pregunta 3 para THIEF (Activa - Peso 4)", "Pregunta 4 para THIEF (Activa - Peso 4)",
    //Knight
    "Pregunta 1 para KNIGHT (Activa - Peso 3)", "Pregunta 2 para KNIGHT (Activa - Peso 3)", "Pregunta 3 para KNIGHT (Activa - Peso 3)", "Pregunta 4 para KNIGHT (Activa - Peso 3)",
    //Mage
    "Pregunta 1 para MAGE (Activa - Peso 2)", "Pregunta 2 para MAGE (Activa - Peso 2)", "Pregunta 3 para MAGE (Activa - Peso 2)", "Pregunta 4 para MAGE (Activa - Peso 2)",
    //Sylph
    "Pregunta 1 para SYLPH (Activa - Peso 1)", "Pregunta 2 para SYLPH (Activa - Peso 1)", "Pregunta 3 para SYLPH (Activa - Peso 1)", "Pregunta 4 para SYLPH (Activa - Peso 1)",

// CLASES PASIVAS (25-48)
    //Heir
    "Pregunta 1 para HEIR (Pasiva - Peso 6)", "Pregunta 2 para HEIR (Pasiva - Peso 6)", "Pregunta 3 para HEIR (Pasiva - Peso 6)", "Pregunta 4 para HEIR (Pasiva - Peso 6)",
    //Bard
    "Pregunta 1 para BARD (Pasiva - Peso 5)", "Pregunta 2 para BARD (Pasiva - Peso 5)", "Pregunta 3 para BARD (Pasiva - Peso 5)", "Pregunta 4 para BARD (Pasiva - Peso 5)",
    //Rogue
    "Pregunta 1 para ROGUE (Pasiva - Peso 4)", "Pregunta 2 para ROGUE (Pasiva - Peso 4)", "Pregunta 3 para ROGUE (Pasiva - Peso 4)", "Pregunta 4 para ROGUE (Pasiva - Peso 4)",
    //Page
    "Pregunta 1 para PAGE (Pasiva - Peso 3)", "Pregunta 2 para PAGE (Pasiva - Peso 3)", "Pregunta 3 para PAGE (Pasiva - Peso 3)", "Pregunta 4 para PAGE (Pasiva - Peso 3)",
    //Seer
    "Pregunta 1 para SEER (Pasiva - Peso 2)", "Pregunta 2 para SEER (Pasiva - Peso 2)", "Pregunta 3 para SEER (Pasiva - Peso 2)", "Pregunta 4 para SEER (Pasiva - Peso 2)",
    //Maid
    "Pregunta 1 para MAID (Pasiva - Peso 1)", "Pregunta 2 para MAID (Pasiva - Peso 1)", "Pregunta 3 para MAID (Pasiva - Peso 1)", "Pregunta 4 para MAID (Pasiva - Peso 1)",
// ASPECTOS (49-96)
    //Light
    "Tengo miedo a ser insignificante o irrelevante", "Me siento más seguro cuando todo está a la vista y no hay secretos o ambigüedades.", "Me siento más seguro cuando todo está a la vista y no hay secretos o ambigüedades.", "Creo que no existen las coincidencias; cada evento, por pequeño que sea, es una pieza clave en un esquema mayor.",
    //Void
    "Confío en mi capacidad de resolver situaciones sin entender el proceso.", "Prefiero vivir en la duda antes que aceptar una verdad impuesta.", "Me aterra ser completamente transparente para los demás", "Siento pasión por lo que aún no existe o está oculto",
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
    "Me aterra descubrir que mis sueños eran solo fantasías sin peso real.", "Pregunta 2 para HOPE", "Me guía lo que considero que es correcto y justo, incluso si es fantasioso.", "Creo firmemente que la confianza a sí mismo es el mayor poder.",
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
    for (let key in items) { items[key].puntos = 0; }

    let totalActivo = 0;
    let totalPasivo = 0;

    for (let i = 1; i <= 96; i++) {
        const seleccionado = document.querySelector(`input[name="q${i}"]:checked`);
        if (seleccionado) {
            const valor = parseInt(seleccionado.value);
            for (let key in items) {
                if (items[key].preguntas.includes(i)) {
                    items[key].puntos += valor;
                    if (items[key].tipo === "activa") totalActivo += valor;
                    if (items[key].tipo === "pasiva") totalPasivo += valor;
                }
            }
        }
    }

    // CORRECCIÓN AQUÍ: ganClase unido, sin espacios
    let ganClase = "";
    let maxClase = -1;
    let ganAspecto = "";
    let maxAspecto = -1;

    for (let key in items) {
        if (items[key].tipo !== "aspecto") {
            if (items[key].puntos > maxClase) { 
                maxClase = items[key].puntos; 
                ganClase = key; 
            }
        } else {
            if (items[key].puntos > maxAspecto) { 
                maxAspecto = items[key].puntos; 
                ganAspecto = key; 
            }
        }
    }

    mostrarResultados(`${ganClase} of ${ganAspecto}`, ganAspecto, totalActivo, totalPasivo);
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
