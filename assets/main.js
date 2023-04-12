/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede */

//array di oggetti
const team = [
     {
       name: 'Wayne Barnett',
       role: 'Founder & CEO',
       image: 'wayne-barnett-founder-ceo.jpg',
     },
     {
       name: 'Angela Caroll',
       role: 'Chief Editor',
       image: 'angela-caroll-chief-editor.jpg',
     },
     {
       name: 'Walter Gordon',
       role: 'Office Manager',
       image: 'walter-gordon-office-manager.jpg',
     },
     {
       name: 'Angela Lopez',
       role: 'Social Media Manager',
       image: 'angela-lopez-social-media-manager.jpg',
     },
     {
       name: 'Scott Estrada',
       role: 'Developer',
       image: 'scott-estrada-developer.jpg',
     },
     {
       name: 'Barbara Ramos',
       role: 'Graphic Designer',
       image: 'barbara-ramos-graphic-designer.jpg',
     },
   ];

     //stampo su console le info
     console.log(team)

//do valore agli oggetti
for(let i = 0; i < team.length; i++){
     console.log(team[i])

     let singoloOggetto = team[i]

     let imgSingola = './assets/img/'

     //creo le card
     document.querySelector('.col').innerHTML += `
          <div class="card" style="width: 18rem;">
               <img src="${imgSingola}${singoloOggetto.image}" class="card-img-top" alt="...">
               <div class="card-body" id='${i}'>
                    <h5 class="card-title"> ${ singoloOggetto.name } </h5>
                    <p class="card-text"> ${ singoloOggetto.role} </p>
               </div>
          </div>
          `

}


