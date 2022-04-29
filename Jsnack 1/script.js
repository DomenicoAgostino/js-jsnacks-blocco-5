console.log("Ciao Mondo");


/* Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */


const output = document.getElementById("output");
let somma = 0;

const listaZucchine = [
  {
    varieta: "Inglese Crookneck",
    peso: 320,
    lunghezza: 36
  },
  {
    varieta: "Desert",
    peso: 230,
    lunghezza: 25
  },
  {
    varieta: "Romanesco",
    peso: 265,
    lunghezza: 35
  },
  {
    varieta: "Fiorentino",
    peso: 267,
    lunghezza: 29
  },
  {
    varieta: "Bianca Triestina",
    peso: 220,
    lunghezza: 22
  },
  {
    varieta: "Striata Pugliese",
    peso: 300,
    lunghezza: 30
  },
  {
    varieta: "Alberello di Sarzana",
    peso: 300,
    lunghezza: 25
  },
  {
    varieta: "Mignon",
    peso: 290,
    lunghezza: 32
  },
  {
    varieta: "Tondo di Piacenza",
    peso: 380,
    lunghezza: 40
  },
  {
    varieta: "con OGM",
    peso: 200,
    lunghezza: 20
  }
];

for(let zucchina of listaZucchine){
  somma += zucchina.peso;
}

output.innerHTML ="Le nostro zucchine hanno un peso totale di " + somma + " gr.";
