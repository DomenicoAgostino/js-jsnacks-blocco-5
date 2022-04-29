console.log("Ciao Mondo");


/*
Jsnack 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */


const output = document.getElementById("output");

const arrayMinori = [], arrayMaggiori = [];
let pesoMinori = 0, pesoMaggiori = 0;

const listaZucchine = [
  {
    varieta: "Inglese Crookneck",
    peso: 320,
    lunghezza: 11
  },
  {
    varieta: "Desert",
    peso: 230,
    lunghezza: 25
  },
  {
    varieta: "Romanesco",
    peso: 265,
    lunghezza: 14
  },
  {
    varieta: "Fiorentino",
    peso: 267,
    lunghezza: 29
  },
  {
    varieta: "Bianca Triestina",
    peso: 220,
    lunghezza:13
  },
  {
    varieta: "Striata Pugliese",
    peso: 300,
    lunghezza: 30
  },
  {
    varieta: "Alberello di Sarzana",
    peso: 300,
    lunghezza: 17
  },
  {
    varieta: "Mignon",
    peso: 290,
    lunghezza: 32
  },
  {
    varieta: "Tondo di Piacenza",
    peso: 380,
    lunghezza: 12
  },
  {
    varieta: "con OGM",
    peso: 200,
    lunghezza: 20
  }
];

for(let zucchina of listaZucchine){
  if(zucchina.lunghezza<=15) arrayMinori.push(zucchina);
  else arrayMaggiori.push(zucchina);
}

console.log(arrayMinori);
console.log(arrayMaggiori);

for(let zucchina of arrayMinori){
  pesoMinori += zucchina.peso;
}

for(let zucchina of arrayMaggiori){
  pesoMaggiori += zucchina.peso;
}

output.innerHTML = `Il Peso delle zucchine minori è: ${pesoMinori}; <br> Invece il Peso delle zucchine maggiori è: ${pesoMaggiori}`;
