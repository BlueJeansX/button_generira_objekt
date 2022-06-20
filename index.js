const btn = document.querySelector('.btn');
const p = document.querySelector('.ispis');

btn.addEventListener('click', clickHandler);

function clickHandler(event) {
   console.log('Desio se klik');
   createPolaznik();
}


class Polaznik {
   constructor(ime, prezime) {
      this.ime = ime,
         this.prezime = prezime
   }
};



function createPolaznik() {

   const imena = ["Marijan", "Valentina", "Ivan", "Antun", "Bruno", "Nader", "Antonija" , "Mladen"];
   const random = Math.floor(Math.random() * imena.length);
   console.log(random, imena[random]);

   switch (imena[random]) {
      case "Marijan":
         let polaznik1 = new Polaznik('Marijan', 'Poljak')
         p.innerHTML = `${polaznik1.ime} ` + `${polaznik1.prezime}`;
         break;
      case "Valentina":
         let polaznik2 = new Polaznik('Valentina', 'Valentinić')
         p.innerHTML = `${polaznik2.ime} ` + `${polaznik2.prezime}`;
         break;
      case "Ivan":
         let polaznik3 = new Polaznik('Ivan', 'Ivanić')
         p.innerHTML = `${polaznik3.ime} ` + `${polaznik3.prezime}`;
         break;
      case "Antun":
         let polaznik4 = new Polaznik('Antun', 'Nakić')
         p.innerHTML = `${polaznik4.ime} ` + `${polaznik4.prezime}`;
         break;
      case "Bruno":
         let polaznik5 = new Polaznik('Bruno', 'Brunić')
         p.innerHTML = `${polaznik5.ime} ` + `${polaznik5.prezime}`;
         break;
      case "Nader":
         let polaznik6 = new Polaznik('Nader', 'Naderovoprezime')
         p.innerHTML = `${polaznik6.ime} ` + `${polaznik6.prezime}`;
         break;
      case "Antonija":
         let polaznik7 = new Polaznik('Antonija', 'Antonijić')
         p.innerHTML = `${polaznik7.ime} ` + `${polaznik7.prezime}`;
         break;
      case "Mladen":
         let polaznik8 = new Polaznik('Mladen', 'Mladinić')
         p.innerHTML = `${polaznik8.ime} ` + `${polaznik8.prezime}`;
         break;
      default:
         text = "Nešto nije dobro";
   }
};








