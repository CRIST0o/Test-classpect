// 1. CONFIGURACIÓN DE LOS 24 ÍTEMS (Clases y Aspectos)
const items = {
    // ACTIVAS (Pesos: Witch, Prince, Thief valen x2 para Lord/Muse)
    "Witch":  { preguntas: [1, 2, 3, 4], puntos: 0, tipo: "activa", peso: 2 },
    "Prince": { preguntas: [5, 6, 7, 8], puntos: 0, tipo: "activa", peso: 2 },
    "Thief":  { preguntas: [9, 10, 11, 12], puntos: 0, tipo: "activa", peso: 2 },
    "Knight": { preguntas: [13, 14, 15, 16], puntos: 0, tipo: "activa", peso: 1 },
    "Mage":   { preguntas: [17, 18, 19, 20], puntos: 0, tipo: "activa", peso: 1 },
    "Sylph":  { preguntas: [21, 22, 23, 24], puntos: 0, tipo: "activa", peso: 1 },

    // PASIVAS (Pesos: Heir, Bard, Rogue valen x2 para Lord/Muse)
    "Heir":   { preguntas: [25, 26, 27, 28], puntos: 0, tipo: "pasiva", peso: 2 },
    "Bard":   { preguntas: [29, 30, 31, 32], puntos: 0, tipo: "pasiva", peso: 2 },
    "Rogue":  { preguntas: [33, 34, 35, 36], puntos: 0, tipo: "pasiva", peso: 2 },
    "Maid":   { preguntas: [37, 38, 39, 40], puntos: 0, tipo: "pasiva", peso: 1 },
    "Seer":   { preguntas: [41, 42, 43, 44], puntos: 0, tipo: "pasiva", peso: 1 },
    "Page":   { preguntas: [45, 46, 47, 48], puntos: 0, tipo: "pasiva", peso: 1 },

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
    "Pregunta 1 para WITCH (Activa - Peso 2)", "Pregunta 2 para WITCH (Activa - Peso 2)", "Pregunta 3 para WITCH (Activa - Peso 2)", "Pregunta 4 para WITCH (Activa - Peso 2)",
    "Pregunta 1 para PRINCE (Activa - Peso 2)", "Pregunta 2 para PRINCE (Activa - Peso 2)", "Pregunta 3 para PRINCE (Activa - Peso 2)", "Pregunta 4 para PRINCE (Activa - Peso 2)",
    "Pregunta 1 para THIEF (Activa - Peso 2)", "Pregunta 2 para THIEF (Activa - Peso 2)", "Pregunta 3 para THIEF (Activa - Peso 2)", "Pregunta 4 para THIEF (Activa - Peso 2)",
    "Pregunta 1 para KNIGHT (Activa - Peso 1)", "Pregunta 2 para KNIGHT (Activa - Peso 1)", "Pregunta 3 para KNIGHT (Activa - Peso 1)", "Pregunta 4 para KNIGHT (Activa - Peso 1)",
    "Pregunta 1 para MAGE (Activa - Peso 1)", "Pregunta 2 para MAGE (Activa - Peso 1)", "Pregunta 3 para MAGE (Activa - Peso 1)", "Pregunta 4 para MAGE (Activa - Peso 1)",
    "Pregunta 1 para SYLPH (Activa - Peso 1)", "Pregunta 2 para SYLPH (Activa - Peso 1)", "Pregunta 3 para SYLPH (Activa - Peso 1)", "Pregunta 4 para SYLPH (Activa - Peso 1)",

    // CLASES PASIVAS (25-48)
    "Pregunta 1 para HEIR (Pasiva - Peso 2)", "Pregunta 2 para HEIR (Pasiva - Peso 2)", "Pregunta 3 para HEIR (Pasiva - Peso 2)", "Pregunta 4 para HEIR (Pasiva - Peso 2)",
    "Pregunta 1 para BARD (Pasiva - Peso 2)", "Pregunta 2 para BARD (Pasiva - Peso 2)", "Pregunta 3 para BARD (Pasiva - Peso 2)", "Pregunta 4 para BARD (Pasiva - Peso 2)",
    "Pregunta 1 para ROGUE (Pasiva - Peso 2)", "Pregunta 2 para ROGUE (Pasiva - Peso 2)", "Pregunta 3 para ROGUE (Pasiva - Peso 2)", "Pregunta 4 para ROGUE (Pasiva - Peso 2)",
    "Pregunta 1 para MAID (Pasiva - Peso 1)", "Pregunta 2 para MAID (Pasiva - Peso 1)", "Pregunta 3 para MAID (Pasiva - Peso 1)", "Pregunta 4 para MAID (Pasiva - Peso 1)",
    "Pregunta 1 para SEER (Pasiva - Peso 1)", "Pregunta 2 para SEER (Pasiva - Peso 1)", "Pregunta 3 para SEER (Pasiva - Peso 1)", "Pregunta 4 para SEER (Pasiva - Peso 1)",
    "Pregunta 1 para PAGE (Pasiva - Peso 1)", "Pregunta 2 para PAGE (Pasiva - Peso 1)", "Pregunta 3 para PAGE (Pasiva - Peso 1)", "Pregunta 4 para PAGE (Pasiva - Peso 1)",

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

// 4. GENERAR EL HTML DE LAS PREGUNTAS
function generarPreguntas() {
    const container = document.getElementById('quiz-container');
    if (!container) return;
    
    let indices = Array.from(Array(96).keys());
    indices = mezclarArray(indices);
    
    let htmlTotal = "";

    indices.forEach((idReal, iVisual) => {
        const numParaID = idReal + 1;
        const numeroLista = iVisual + 1;
        const texto = misPreguntas[idReal] || `Pregunta para el ítem correspondiente #${numParaID}`;
htmlTotal += `
    <div class="pregunta">
        <p><strong>${numeroLista}.</strong> ${texto}</p>
        <div class="rango-container">
            <span class="label-rango">Totalmente en desacuerdo</span>
            <input type="range" id="q${numParaID}" min="0" max="10" value="5">
            <span class="label-rango">Totalmente de acuerdo</span>
        </div>
    </div>`;
    });
    container.innerHTML = htmlTotal;
}

function calcularClasspect() {
    for (let key in items) { items[key].puntos = 0; }

    for (let key in items) {
        if (items[key].preguntas) {
            items[key].preguntas.forEach(num => {
                const el = document.getElementById(`q${num}`);
                if (el) items[key].puntos += parseInt(el.value);
            });
        }
    }

    const filtro = document.getElementById('gender-filter').value;
    const excluidasFemeninas = ["Witch", "Maid", "Sylph", "Muse"];
    const excluidasMasculinas = ["Prince", "Bard", "Heir", "Lord"];

    let maxC = -1; let ganC = "";
    let maxA = -1; let ganA = "";
    let actP = 0; let pasP = 0;

    for (let key in items) {
        const it = items[key];
        let esClaseBloqueada = (filtro === "masculine" && excluidasFemeninas.includes(key)) || 
                               (filtro === "feminine" && excluidasMasculinas.includes(key));

        if (it.tipo === "activa" || it.tipo === "pasiva") {
            if (!esClaseBloqueada && it.puntos > maxC) { maxC = it.puntos; ganC = key; }
            if (it.tipo === "activa") actP += (it.puntos * it.peso);
            if (it.tipo === "pasiva") pasP += (it.puntos * it.peso);
        } else if (it.tipo === "aspecto") {
            if (it.puntos > maxA) { maxA = it.puntos; ganA = key; }
        }
    }

    let titulo = `${ganC} of ${ganA}`;
    if (actP >= (pasP * 2) && (filtro === "all" || filtro === "masculine")) titulo = `Lord of ${ganA}`;
    else if (pasP >= (actP * 2) && (filtro === "all" || filtro === "feminine")) titulo = `Muse of ${ganA}`;

    // Llamamos a la función con el orden correcto
    mostrarResultados(titulo, ganA, actP, pasP);
}

// CORRECCIÓN: Quitamos el ";" y sincronizamos nombres de variables
function mostrarResultados(rol, aspecto, act, pas) {
    const box = document.getElementById('resultado-box');
    if (!box) return;
    
    box.style.display = "block";
    
    // El color se basa en el aspecto ganado (ganA)
    box.className = `res-${aspecto.toLowerCase()}`;
    
    // El título (ej: "Witch of Light")
    document.getElementById('rol-final').innerText = rol;

    // Los puntos de balance numéricos
    document.getElementById('detalles-puntos').innerHTML = `
        <p>Balance Activo/Pasivo: Act ${act} | Pas ${pas}</p>
    `;
    
    window.scrollTo({ top: box.offsetTop - 50, behavior: 'smooth' });
}

generarPreguntas();