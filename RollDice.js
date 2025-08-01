// roll dice:
// napravi array slike
// u taj array sacuvaj 6 slika ("./slika1.jpg")
// tako da je, slike[0 ] = slika1.jpg
// kad kliknem roll, izgenerisem random broj
console.log("------------------");

//napravi jednu varijablu koja se zove totalscore
// pocinje sa nulom
// i svaki roll dodaje na taj broj izrolani broj
// svaki put ispisi vrednost na ekranu

//ako se dobije jedinica, skor se restartuje na nulu
// napravi dugme restart
//kad se ono klikne, igra se restartuje

//pokusaj da:
// u listi ispises svaki izrolani broj
// napravi u html prazni ul
// nakon svakog izrolanog broja u JS napravi list element

// unutar li elementa, da bude paragraf sa tekstom: "izrolani broj je: neki broj, totalScoreje:
// taj list element dodaj u listu
//trebace ti funkcije: createElement i appendChild. Moze se iskoristiti innerHTML
//
//obrati paznju da ovo isto uradis i na Restart

const taster = document.getElementById("roll");
const slika = document.getElementById("prikaz");
const rezultat = document.getElementById("rezultat");
const restartBtn = document.getElementById("restart");
const lista = document.getElementById("lista-brojeva");

let totalscore = 0;

const slike = [
  "./slika1.jpg",
  "./slika2.jpg",
  "./slika3.jpg",
  "./slika4.jpg",
  "./slika5.jpg",
  "./slika6.jpg",
];

function prikaziRandomSliku() {
  const index = Math.floor(Math.random() * slike.length);
  const broj = index + 1;

  slika.src = slike[index];

  if (broj === 1) {
    totalscore = 0;
  } else {
    totalscore += broj;
  }

  rezultat.textContent = `Ukupan skor: ${totalscore}`;

  const noviLi = document.createElement("li");
  const paragraf = document.createElement("p");
  paragraf.textContent = `Izrolani broj je: ${broj}, totalScore je: ${totalscore}`;
  noviLi.appendChild(paragraf);
  lista.appendChild(noviLi);
}

taster.addEventListener("click", prikaziRandomSliku);

restartBtn.addEventListener("click", function () {
  totalscore = 0;
  slika.src = "";
  rezultat.textContent = "Ukupan skor: 0";
  lista.innerHTML = "";
});

textContent;
