// Calcola la somma e la media dei primi 10 numeri.

var primoNumero = 1; // primo numero da sommare
var ultimoNumero = 10; // ultimo numero da sommare
var somma = 0; // somma
var media = 0; // media

for (var i = primoNumero; i <= ultimoNumero; i++) { // ciclo per calcolare la somma da 1 a 10
    somma = somma + i;
}


media = somma / ultimoNumero; // calcolo della media (dividendo la somma con il 10)
console.log('La somma dei numeri che vanno da 1 a 10 è: ', somma);
console.log('La media dei numeri che vanno da 1 a 10 è: ', media);
