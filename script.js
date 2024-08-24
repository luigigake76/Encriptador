function encryptText() {
    let input = document.getElementById('text-input').value; // Obtiene el texto ingresado por el usuario
    let output = input
        .replace(/e/g, 'enter') // Reemplaza todas las "e" por "enter"
        .replace(/i/g, 'imes')  // Reemplaza todas las "i" por "imes"
        .replace(/a/g, 'ai')    // Reemplaza todas las "a" por "ai"
        .replace(/o/g, 'ober')  // Reemplaza todas las "o" por "ober"
        .replace(/u/g, 'ufat'); // Reemplaza todas las "u" por "ufat"
    displayResult(output); // Llama a la función para mostrar el resultado
}

function decryptText() {
    let input = document.getElementById('text-input').value; // Obtiene el texto ingresado por el usuario
    let output = input
        .replace(/enter/g, 'e') // Reemplaza todas las "enter" por "e"
        .replace(/imes/g, 'i')  // Reemplaza todas las "imes" por "i"
        .replace(/ai/g, 'a')    // Reemplaza todas las "ai" por "a"
        .replace(/ober/g, 'o')  // Reemplaza todas las "ober" por "o"
        .replace(/ufat/g, 'u'); // Reemplaza todas las "ufat" por "u"
    displayResult(output); // Llama a la función para mostrar el resultado
}

//Propósito: Mostrar el resultado (ya sea encriptado o desencriptado) en la pantalla del usuario.

function displayResult(result) {
    //Inserta contenido HTML dentro de un elemento en la página web que tiene el ID output-pane.
    //Muestra el texto encriptado o desencriptado (no editable).
    //el boton Copiar llama a la funcion copyText().
    document.getElementById('output-pane').innerHTML = ` 
        <div class="output">
            <textarea readonly id="result-text" class="text-input">${result}</textarea> 
            <button class="copy-btn" onclick="copyText()">Copiar</button>
        </div>
    `;
}

function copyText() {
    let resultText = document.getElementById('result-text'); // Obtiene el área de texto que contiene el resultado
    resultText.select(); // Selecciona todo el texto dentro del área de texto
    document.execCommand('copy'); // Copia el texto seleccionado al portapapeles
    alert('Texto copiado al portapapeles'); // Muestra un mensaje al usuario indicando que el texto fue copiado
}