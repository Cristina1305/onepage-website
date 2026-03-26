const nome = document.querySelector("#exampleInputNome");
const cognome = document.querySelector("#exampleInputCognome");
const data = document.querySelector("#exampleInputData");
const residenza = document.querySelector("#exampleInputResidenza");
const messaggio = document.querySelector("#exampleTextarea");
const form = document.querySelector("#contactForm");



form.addEventListener("submit", function (event) {

    event.preventDefault();

    if (nome.value === "" || cognome.value === "" || data.value === "" || messaggio.value === "") {
        alert("Compila tutti i campi obbligatori!");
    } else {
        alert("Form inviato correttamente!");
    }

});
    
