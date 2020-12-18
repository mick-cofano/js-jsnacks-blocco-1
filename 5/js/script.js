// creare un array vyuoto, chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array

var listanumeri = []; //array vuoto
var numero; //numero richiesto per 6 volte nel prompt
var i = 0;
var richieste = 6; //numero di richieste

while (i < richieste) {
    numero = parseInt(prompt("Inserisci un numero: [Richiesta num. " + (i + 1) + " di " + richieste + "]"));
    if (numero % 2) {
      listanumeri.push(numero);
    }
    i++;
}


if (listanumeri.length == 0) { // se l'utente non ha inserito numeri dispari allora:
    console.log("Non hai messo numeri dispari");
} else { // altrimenti, se ha inserito numeri dispari... uscirà scritto:
    console.log("Numeri dispari inseriti: ", listanumeri);
}
