// dati salvati nelle variabili e stampati nella console
var nome = prompt('Qual è il tuo nome?');
console.log('Il tuo nome è: ' + nome);

var cognome = prompt('Qual è il tuo cognome?');
console.log('Il tuo cognome è: ' + cognome);

var colore = prompt('Qual è il tuo colore preferito?');
console.log('Il tuo colore preferito è: ' + colore);

var anno = new Date().getFullYear()
console.log("L'anno corrente è: " + anno);

var password = nome + cognome + colore + anno;

// riprendo il div tramite id in una variabile
var passwordContainer = document.getElementById('password-generator');
// scrivo all'interno del div
passwordContainer.innerText = 'La tua nuova password  è: ' + password;

// oppure senza usare la variabile password
// passwordContainer.innerText = 'La tua nuova password è: ' + nome + cognome + colore + anno;
