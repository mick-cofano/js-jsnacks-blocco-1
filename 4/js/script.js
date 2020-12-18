// in un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all'utente il suo nome e comunicagli se può partecipare o no all afesta

listaInvitati = ['michele', 'ottavio', 'alfredo', 'marian', 'gianluca', 'stefania', 'sabrina', 'danilo', 'francesco', 'marco', 'giovanni', 'osvaldo', 'sergio', 'emilia'];

var nomeUtente = prompt('Inserisci il tuo nome'); // prompt per richiesta nome
var invitato = false; 
for (var x = 0; x < listaInvitati.length; x++) {
  if (nomeUtente === listaInvitati[x]) {
    invitato = true;
  }
}

if (invitato) {
  console.log('Perfetto, ' + nomeUtente + '. Sei ufficialmente invitato alla festa!');
} else {
  console.log(nomeUtente + ', Purtroppo non sei invitato alla festa');
}
