// Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine"
var array_random = [];
while (array_random.length < 16) {
    var numero_random =(Math.floor(Math.random()*101)+1);
    console.log(numero_random);
    if (array_random.includes(numero_random) == false) {
        array_random.push(numero_random);
    }
}
console.log(array_random);
// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
var numeri_consentiti = [];
var possibilita = 84;
while(numeri_consentiti.length < possibilita) {
    var numero_utente = parseInt(prompt('Inserisci un numero da 1 a 100'));
    if (array_random.includes(numero_utente) == false ) {
        numeri_consentiti.push(numero_utente);
        console.log('non hai colpito nessuna bomba con il numero ' + numero_utente);
    } else {
        console.log('hai colpito la bomba con il numero ' + numero_utente)
    }
}

// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
//partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere.
// BONUS: all'inizio della partita, il software richiede anche un livello di difficoltà all'utente che cambia il range di numeri totali (le mine saranno sempre 16):
// con difficoltà 0=> si gioca con numeri che vanno da 1 a 100
// con difficoltà 1 => si gioca con numeri che vanno da 1 a 80
// con difficoltà 2=> si gioca con numeri che vanno da 1 a 50
