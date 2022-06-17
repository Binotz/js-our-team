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

//creo e popolo le cards
for(let i = 0; i < members.length; i++){
    const currentMember = members[i];
    createMember(currentMember);
}


//Functions
function addMember(){
    const memberName = memberNameDOM.value;
    const memberRole = memberRoleDOM.value;
    const memberImg = memberImgDOM.value;
    console.log(memberName, memberRole, memberImg);
    const newMember = {
        name: memberName,
        role: memberRole,
        img:{
            name: memberImg,
            alt: memberName
        }
    }
    createMember(newMember)
}

function createMember(member){
    //controllo se l'immagine contiene l'estensione
    let imgName = member.img.name;
    console.log(imgName)
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
