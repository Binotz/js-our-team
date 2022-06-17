// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.

//Definisco i membri
const members = [
    {
        name: 'Wayne Barnet',
        role: 'Founder & CEO',
        img:{
            name:'wayne-barnett-founder-ceo.jpg',
            alt: 'Wayne Barnett'
        }
    },{
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img:{
            name:'angela-caroll-chief-editor.jpg',
            alt: 'Angela Caroll'
        }
    },{
        name: 'Walter Gordon',
        role: 'Office Manager',
        img:{
            name:'walter-gordon-office-manager.jpg',
            alt: 'Walter Gordon'
        } 
    },{
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img:{
            name:'angela-lopez-social-media-manager.jpg',
            alt: 'Angela Lopez'
        } 
    },{
        name: 'Scott Estrada',
        role: 'Developer',
        img:{
            name:'scott-estrada-developer.jpg',
            alt: 'Scott Estrada'
        } 
    },{
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img:{
            name:'barbara-ramos-graphic-designer.jpg',
            alt: 'Barbara Ramos'
        } 
    }
];
const memberNameDOM = document.getElementById('name');
const memberRoleDOM = document.getElementById('role');
const memberImgDOM = document.getElementById('image');
const addMemberButton = document.getElementById('addMemberButton');

const teamContainer = document.querySelector('.team-container');
addMemberButton.addEventListener('click', addMember);

memberGeneration();

//Functions
//Genero tutto i membri, partendo dall'array base (più eventuali aggiunte tramite il button)
function memberGeneration(){
    teamContainer.innerHTML = '';
    for(let i = 0; i < members.length; i++){
        const currentMember = members[i];
        createMember(currentMember);
    }
}
//Aggiungo un utente inserito dall'utente
function addMember(){
    //recupero i dati inseriti dall'utente e li metto in un nuovo oggetto
    const memberName = memberNameDOM.value;
    const memberRole = memberRoleDOM.value;
    const memberImg = memberImgDOM.value;
    const newMember = {
        name: memberName,
        role: memberRole,
        img:{
            name: memberImg,
            alt: memberName
        }
    }
    //inserisco l'utente nell'array
    members.push(newMember);
    //rigenero la griglia sul DOM con tutti gli utenti
    memberGeneration();
}

//creo ogni singola card con il member passato a parametro
function createMember(member){
    //controllo se l'immagine contiene l'estensione
    let imgName = member.img.name;
    //se non c'è, aggiungo il .jpg
    if (!imgName.includes('.jpg')){
        imgName = member.img.name.concat('.jpg');
    }
    const card = `
    <div class="team-card">
        <div class="card-image">
        <img
            src="img/${imgName}"
            alt="${member.img.alt}"
        />
        </div>
        <div class="card-text">
        <h3>${member.name}</h3>
        <p>${member.role}</p>
        </div>
    </div>`
    //aggiungo la card alla pagina
    teamContainer.innerHTML += card;
}
