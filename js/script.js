const opciones = [
    "COMO QUE NOoo? >:(",
    "Estas Segura? :(?",
    "Realmente segura :P?",
    "Deja de bromear ;p",
    "Mimee...",
    "Vuelve a pensarlooo!",
    "porfavor",
    "porfis",
    "PORFAAAAAAAAAAA",
    "Entiendo, ya no insisto :(",
    "Mentira, DI QUE SI PORFAVOOOOOR! ❤️"
];
let opcionesIndex = 0;
function dijoQueNo() {
    const noButton = document.querySelector('.boton-no');
    const yesButton = document.querySelector('.boton-si');
    noButton.textContent = opciones[opcionesIndex];
    opcionesIndex = (opcionesIndex + 1) % opciones.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.3}px`;
}
function dijoQueSi() {
    window.location.href = "dijoquesi.html";
}