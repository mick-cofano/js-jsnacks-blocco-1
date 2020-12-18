// l'utente inserisce due parole in successione, con due prompt. il software stampa prima la parola più corta, poi quella più lunga


var primaParola = prompt('Scrivi la prima parola'); //prompt per prima parola
var secondaParola = prompt('Scrivi la seconda parola'); //prompt per seconda parola

if (primaParola.length > secondaParola.length) { // se la prima parola è più lunga
  console.log(primaParola  + '' + secondaParola); // allorascrivi prima parola è più lunga della seconda

} else if (secondaParola.length > primaParola.length) { // altrimenti se la seconda è più lunga
  console.log(secondaParola  + '' + primaParola); // allora scrivi seconda parola è più lunga della prima
}
