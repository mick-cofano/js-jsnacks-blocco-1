// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

var numero = parseInt(prompt('Inserisci un numero intero da 0 a 10:')); //prompt per richiesta numero

if (numero > 10) { //se il numero è maggiore di 10, allora lo script chiederà di fermarsi
  alert('Stop!');
} else { // altrimenti, se è un numero compreso in quelli indicati
  for (var i = 1; i <= numero; i++) {
     console.log(Math.pow(i, 3)); // scriverà in console i risultati della potenza
  }
}
