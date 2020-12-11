alert('Ciao! Vuoi fare un gioco?\nPensa a un numero');
alert('aggiungi 4');
alert('moltiplica per 2');
alert('aggiungi 10');
alert('sottrai 8');
alert('dividi per 2');
alert('sottrai il numero a cui hai pensato');

var numeroCinque = document.getElementById('numero');
numeroCinque.innerHTML = '<h1>Il risultato è 5</h1><button onclick="vuoiRiprovare()">Vuoi riprovare?</button>';

function vuoiRiprovare() {
  alert('Pensa di nuovo a un numero');
  alert('moltiplicalo per 2');
  alert('aggiungi 6');
  alert('dividi per 2');
  alert('sottrai il numero a cui hai pensato');
  var numeroTre = document.getElementById('numero');
  numeroTre.innerHTML = '<h1>Il risultato è 3</h1>'
}
