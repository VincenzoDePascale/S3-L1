/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
  const risultato = (l1 * l2) / 2;
  return risultato;
}

const risultato = area(3, 5);

//console.log(risultato);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(a, b) {
  if (a === b) {
    const risultato2 = (a + b) * 3;
    return risultato2;
  } else if (a !== b) {
    const risultato2 = a + b;
    return risultato2;
  }
}

const risultato2 = crazySum(2, 3);

//console.log(risultato2);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(a) {
  const p = 19;
  const risultato3a = Math.abs(a - p);
  if (risultato3a > p) {
    const risultato3b = risultato3a * 3;
    return risultato3b;
  } else {
    return risultato3a;
  }
}

const risultato3 = crazyDiff(40);

//console.log(risultato3);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const n = Number;

function boundary(n) {
  if ((20 < n && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}

const risultato4 = boundary(25);

//console.log(risultato4);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const s = String;

function epify(s) {
  const epicode = "EPICODE";
  const sSplit = s.split(" ");
  if (sSplit[0] === epicode) {
    return s;
  } else {
    sSplit.unshift(epicode);
    s = "";
    for (let i = 0; i < sSplit.length; i++) {
      s += sSplit[i] + " ";
    }
    return s;
  }
}

const result5 = epify("EPICODE Ciao a tutti");

console.log(result5);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num = Number;

function check3and7(num) {
  switch (0) {
    case n % 3:
      (risultato = num), "è multiplo di 3";
      break;
    case n % 7:
      (risultato = num), "è multiplo di 7";
      break;
    default:
      (risultato = num), "non è multiplo ne di 3 ne di 7";
  }
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const es7 = `stringa da inseire`;

function reverseString(n) {
  return (risultato = n.split(``).reverse().join(``));
}

const nuovaStringa = reverseString(es7);
console.log(nuovaStringa);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(string1) {
  const splitstring = string1.split(` `);
  for (let i = 0; i < splitstring.length; i++) {
    splitstring[i] =
      splitstring[i].charAt(0).ToUpperCase() + splitstring[i].substring(1);
  }
  return splitstring.join(` `);
}

let upperdWord = upperFirst(` `);
console.log(upperdWord);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
