//3: Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni,
//con il for e con il while.

var listaNumeri = []; // array vuoto
var somma = 0; // somma
var maxCicli = 5; // cicli massimi richiesti nel comando

for (var i = 0; i < maxCicli; i++) {
    listaNumeri[i] = parseInt(prompt('Inserisci il ' + (i + 1) + '° numero:')); // prompt con richiesta
}
console.log(listaNumeri);

// versione for
// for (var i = 0; i < maxCicli; i++) {
//     somma = somma + listaNumeri[i];
// }
// console.log('Somma dei numeri: ', somma);


// versione while
var indice = 0;
while (indice < maxCicli) {
    somma = somma + listaNumeri[indice];
    indice++;
}

console.log('Somma dei numeri : ', somma);
