// BONUS: all'inizio della partita, il software richiede anche un livello di difficoltà all'utente che cambia il range di numeri totali (le mine saranno sempre 16)
var level = prompt('Scegli un livello di difficoltà: 0, 1 o 2');
console.log(level);
if (level == '0') {
    var livello_zero = getRandom(1, 100)
} else if (level == '1') {
    var livello_uno = getRandom(1, 80)
} else {
    var livello_due = getRandom(1, 50)
}
//Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine"
var array_random = [];
while (array_random.length < 16) {
    var numero_random = getRandom(1, 100);
    if (array_random.includes(numero_random) == false) {
        array_random.push(numero_random);
    }
}
console.log(array_random);
var numeri_consentiti = [];
var possibilita = 84;
while(numeri_consentiti.length < possibilita && array_random.includes(numero_utente) == false ) {
    var numero_utente = parseInt(prompt('Inserisci un numero da 1 a 100'));// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
        if (numero_utente > 100) {
            alert ('Hai inserito un numero non valido');
        }
        else if (array_random.includes(numero_utente) == false ) {
            numeri_consentiti.push(numero_utente);
            console.log('Complimenti! Non hai colpito nessuna bomba con il numero ' + numero_utente); //Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
    }
     else  {
        console.log('Game over! Hai colpito la bomba con il numero ' + numero_utente)//partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
    }
}
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere
console.log('Il tuo punteggio è ' + numeri_consentiti.length);
//Funzioni
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}



// Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
// La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere.
// BONUS: all'inizio della partita, il software richiede anche un livello di difficoltà all'utente che cambia il range di numeri totali (le mine saranno sempre 16):
// con difficoltà 0=> si gioca con numeri che vanno da 1 a 100
// con difficoltà 1 => si gioca con numeri che vanno da 1 a 80
// con difficoltà 2=> si gioca con numeri che vanno da 1 a 50
