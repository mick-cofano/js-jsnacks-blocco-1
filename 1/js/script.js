// l'utente inserisce due numer in successione, con due prompts. il software stampa il maggiore

//Inserimento prompt per richiesta numeri
var primoNum = prompt('Inserire il primo numero');
var secondoNum = prompt('Inserire il secondo numero');



if (primoNum > secondoNum) {
  console.log('Il primo numero ', primoNum, 'è maggiore di ', secondoNum); //primo numero è più alto
} else if (secondoNum > primoNum) {
  console.log('Il secondo numero ', secondoNum, 'è maggiore di ', primoNum); //secondo numero è più alto
}
