// chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.

var numeriAmmessi = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; // caratteri ammessi
var risultato = 0; // risultato dell addizione
var quattroNumeri = ''; //numeri da 0 a 9 inseriti dallo user
var valid; // prova se il num è valido p meno


do {
  valid = true;
  // richiedere all'utente il numero di 4 cifre,
  // continuare a chiedere i numeri se non sono 4
  quattroNumeri = prompt('Inserisci 4 numeri.. da 0 a 9 [0000-9999]:');
  if (quattroNumeri.length != 4) {
      valid = false; // lo user non ha messo 4 cifre
      alert('Non hai inserito 4 cifre');
  } else {
    // l'utente ha inserito 4 caratteri...check se sono giusti
    for (var i = 0; i < quattroNumeri.length; i++) {
        //se l'elemento non è numero la indexof torna a -1
        if (numeriAmmessi.indexOf(quattroNumeri[i]) == -1) {
            valid = false; // non è un numero
        }
    }
    if (!valid) {
        alert('Devi inserire solo numeri da 0 a 9, ripova');
    }
  }
}
while (!valid);

// stringa che serve per visualizzare in console il risultato della somma
for (var i = 0; i < quattroNumeri.length; i++) {
    risultato += parseInt(quattroNumeri[i]);
}

console.log('Hai inserito', quattroNumeri, '\nLa somma di:',
  quattroNumeri[0], '+', quattroNumeri[1], '+', quattroNumeri[2], '+', quattroNumeri[3],
  'è uguale a ', risultato);
