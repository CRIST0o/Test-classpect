// 1. CONFIGURACIÓN DE LOS 24 ÍTEMS (Clases y Aspectos)
const items = {
    // ACTIVAS (Pesos: Witch, Prince, Thief valen x2 para Lord/Muse)
    "Witch":  { preguntas: [1, 2, 3, 4], puntos: 0, tipo: "activa", peso: 6 },
    "Prince": { preguntas: [5, 6, 7, 8], puntos: 0, tipo: "activa", peso: 5 },
    "Thief":  { preguntas: [9, 10, 11, 12], puntos: 0, tipo: "activa", peso: 4 },
    "Knight": { preguntas: [13, 14, 15, 16], puntos: 0, tipo: "activa", peso: 3 },
    "Mage":   { preguntas: [17, 18, 19, 20], puntos: 0, tipo: "activa", peso: 2 },
    "Sylph":  { preguntas: [21, 22, 23, 24], puntos: 0, tipo: "activa", peso: 1 },

    // PASIVAS (Pesos: Heir, Bard, Rogue valen x2 para Lord/Muse)
    "Heir":   { preguntas: [25, 26, 27, 28], puntos: 0, tipo: "pasiva", peso: 6 },
    "Bard":   { preguntas: [29, 30, 31, 32], puntos: 0, tipo: "pasiva", peso: 5 },
    "Rogue":  { preguntas: [33, 34, 35, 36], puntos: 0, tipo: "pasiva", peso: 4 },
    "Page":   { preguntas: [45, 46, 47, 48], puntos: 0, tipo: "pasiva", peso: 3 },
    "Seer":   { preguntas: [41, 42, 43, 44], puntos: 0, tipo: "pasiva", peso: 2 },
    "Maid":   { preguntas: [37, 38, 39, 40], puntos: 0, tipo: "pasiva", peso: 1 },

    // ASPECTOS (Suma normal, sin peso)
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
    "Pregunta 1 para WITCH (Activa - Peso 6)", "Pregunta 2 para WITCH (Activa - Peso 6)", "Pregunta 3 para WITCH (Activa - Peso 6)", "Pregunta 4 para WITCH (Activa - Peso 6)",
    "Pregunta 1 para PRINCE (Activa - Peso 5)", "Pregunta 2 para PRINCE (Activa - Peso 5)", "Pregunta 3 para PRINCE (Activa - Peso 5)", "Pregunta 4 para PRINCE (Activa - Peso 5)",
    "Pregunta 1 para THIEF (Activa - Peso 4)", "Pregunta 2 para THIEF (Activa - Peso 4)", "Pregunta 3 para THIEF (Activa - Peso 4)", "Pregunta 4 para THIEF (Activa - Peso 4)",
    "Pregunta 1 para KNIGHT (Activa - Peso 3)", "Pregunta 2 para KNIGHT (Activa - Peso 3)", "Pregunta 3 para KNIGHT (Activa - Peso 3)", "Pregunta 4 para KNIGHT (Activa - Peso 3)",
    "Pregunta 1 para MAGE (Activa - Peso 2)", "Pregunta 2 para MAGE (Activa - Peso 2)", "Pregunta 3 para MAGE (Activa - Peso 2)", "Pregunta 4 para MAGE (Activa - Peso 2)",
    "Pregunta 1 para SYLPH (Activa - Peso 1)", "Pregunta 2 para SYLPH (Activa - Peso 1)", "Pregunta 3 para SYLPH (Activa - Peso 1)", "Pregunta 4 para SYLPH (Activa - Peso 1)",

    // CLASES PASIVAS (25-48)
    "Pregunta 1 para HEIR (Pasiva - Peso 6)", "Pregunta 2 para HEIR (Pasiva - Peso 6)", "Pregunta 3 para HEIR (Pasiva - Peso 6)", "Pregunta 4 para HEIR (Pasiva - Peso 6)",
    "Pregunta 1 para BARD (Pasiva - Peso 5)", "Pregunta 2 para BARD (Pasiva - Peso 5)", "Pregunta 3 para BARD (Pasiva - Peso 5)", "Pregunta 4 para BARD (Pasiva - Peso 5)",
    "Pregunta 1 para ROGUE (Pasiva - Peso 4)", "Pregunta 2 para ROGUE (Pasiva - Peso 4)", "Pregunta 3 para ROGUE (Pasiva - Peso 4)", "Pregunta 4 para ROGUE (Pasiva - Peso 4)",
    "Pregunta 1 para PAGE (Pasiva - Peso 3)", "Pregunta 2 para PAGE (Pasiva - Peso 3)", "Pregunta 3 para PAGE (Pasiva - Peso 3)", "Pregunta 4 para PAGE (Pasiva - Peso 3)",
    "Pregunta 1 para SEER (Pasiva - Peso 2)", "Pregunta 2 para SEER (Pasiva - Peso 2)", "Pregunta 3 para SEER (Pasiva - Peso 2)", "Pregunta 4 para SEER (Pasiva - Peso 2)",
    "Pregunta 1 para MAID (Pasiva - Peso 1)", "Pregunta 2 para MAID (Pasiva - Peso 1)", "Pregunta 3 para MAID (Pasiva - Peso 1)", "Pregunta 4 para MAID (Pasiva - Peso 1)",
    // ASPECTOS (49-96)
    "Pregunta 1 para LIGHT", "Pregunta 2 para LIGHT", "Pregunta 3 para LIGHT", "Pregunta 4 para LIGHT",
    "Pregunta 1 para VOID", "Pregunta 2 para VOID", "Pregunta 3 para VOID", "Pregunta 4 para VOID",
    "Pregunta 1 para BREATH", "Pregunta 2 para BREATH", "Pregunta 3 para BREATH", "Pregunta 4 para BREATH",
    "Pregunta 1 para BLOOD", "Pregunta 2 para BLOOD", "Pregunta 3 para BLOOD", "Pregunta 4 para BLOOD",
    "Pregunta 1 para TIME", "Pregunta 2 para TIME", "Pregunta 3 para TIME", "Pregunta 4 para TIME",
    "Pregunta 1 para SPACE", "Pregunta 2 para SPACE", "Pregunta 3 para SPACE", "Pregunta 4 para SPACE",
    "Pregunta 1 para RAGE", "Pregunta 2 para RAGE", "Pregunta 3 para RAGE", "Pregunta 4 para RAGE",
    "Pregunta 1 para HOPE", "Pregunta 2 para HOPE", "Pregunta 3 para HOPE", "Pregunta 4 para HOPE",
    "Pregunta 1 para LIFE", "Pregunta 2 para LIFE", "Pregunta 3 para LIFE", "Pregunta 4 para LIFE",
    "Pregunta 1 para DOOM", "Pregunta 2 para DOOM", "Pregunta 3 para DOOM", "Pregunta 4 para DOOM",
    "Pregunta 1 para MIND", "Pregunta 2 para MIND", "Pregunta 3 para MIND", "Pregunta 4 para MIND",
    "Pregunta 1 para HEART", "Pregunta 2 para HEART", "Pregunta 3 para HEART", "Pregunta 4 para HEART"
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
                    <span class="label-rango" style="color: #33a474;">De acuerdo</span>
                    
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

                    <span class="label-rango" style="color: #885e9e;">En desacuerdo</span>
                </div>
            </div>`;
    });
    container.innerHTML = htmlTotal;
}

// Asegúrate de que el botón en tu HTML tenga: onclick="ejecutarAscenso()"
function ejecutarAscenso() {
    const btn = document.getElementById('btn-ascender');
    btn.classList.add('visitado'); // Esto lo vuelve morado permanentemente
    calcularClasspect();
}

// ... (Tus items y preguntas se mantienen igual)

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
                    <span class="label-rango" style="color: #33a474;">De acuerdo</span>
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
                    <span class="label-rango" style="color: #885e9e;">En desacuerdo</span>
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