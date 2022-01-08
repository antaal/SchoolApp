const API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDA4NDQ3OCwiZXhwIjoxOTU1NjYwNDc4fQ.EpAcIjyyxGlxQBERz0kL3sqqCE1SgMrwSyXmsP8LccU"
const API_URL = "https://plkjtdwhwxsklfxblqad.supabase.co/rest/v1/Apprenants"
const API_URL2 = "https://plkjtdwhwxsklfxblqad.supabase.co/rest/v1/Competences"




const detail = document.getElementById('details')
const valider = document.getElementById('valider')
const value1 = document.getElementById('value1')
const value2 = document.getElementById('value2')
const value3 = document.getElementById('value3')
const value4 = document.getElementById('value4')
const value5 = document.getElementById('value5')
const value6 = document.getElementById('value6')
const value7 = document.getElementById('value7')
const value8 = document.getElementById('value8')
window.addEventListener("DOMContentLoaded", (event) => {
    //RECUPERATION DES DONNEES VIA API
    fetch(API_URL, {
      headers: {
        apikey: API_KEY,
      },
    })
    .then((response) => response.json())
    .then((Apprenants) => {
      Apprenants.forEach((App) => {
          let getId = localStorage.getItem("MonId");
          if(App.id == getId){
              afficherDetail(App)
          }
            
                    
        })
    })
})




function afficherDetail(idee){
    detail.insertAdjacentHTML(
        "afterbegin",
        `
    
        <div class="card mb-3 "  style="max-width: 1000px;margin-left:2%;">
      <div class="row g-0">
        <div class="col-md-3 mx-3" style=" height: 50%;">
          <img src="/images/undraw_female.svg" class="img-fluid rounded-start" alt="...">
        </div><br>
        <div class="col-md-8 mt-5">
          <div class="card-body"style="font-size:30px;>
            <h5 class="card-title" >${idee.prenom} ${idee.nom}</h5>
            <p class="card-text">${idee.niveau}</p>
            <p class="card-text">${idee.bio}</p>
          </div>
          
       
      </div>
      </div>
      `
    )
    
}

valider.addEventListener('click', function(e){
    e.preventDefault()
    let value9 = localStorage.getItem("MonId");
    alert(value9)
const COMPETENCE = {
    maquettage : value1.value,
    realisation : value2.value,
   developpement : value3.value,
    interface : value4.value,
    BDD : value5.value,
    acceeData : value6.value,
    Backend : value7.value,
    Ecommerce : value8.value,
    id_app: value9
  
  }
  
  alert(COMPETENCE.maquettage)
  //ENVOYER LES DONNEES VERS SUPABASE
  fetch(API_URL2, {
    method: "POST",
    headers: {
      apikey: API_KEY,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(COMPETENCE),
   
  })
  console.log(COMPETENCE)
})

const maquette = document.getElementById('maquette')
const Realisation = document.getElementById('Realisation')
const devops = document.getElementById('devops')
const commerce = document.getElementById('commerce')
const bd = document.getElementById('bd')
const donnes = document.getElementById('donnes')
const backend = document.getElementById('backend')
const appli = document.getElementById('appli')
let pourcentage1 = 0
let pourcentage2 = 0
let pourcentage3 = 0
let pourcentage4 = 0
let pourcentage5 = 0
let pourcentage6 = 0
let pourcentage7 = 0
let pourcentage8 = 0


//recuperer les donnees
window.addEventListener("DOMContentLoaded", (event) => {
    //RECUPERATION DES DONNEES VIA API
    fetch(API_URL2, {
      headers: {
        apikey: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((Competences) => {
        Competences.forEach((competence) => {
            let getId = localStorage.getItem("MonId");
            if(competence.id_app == getId){
                pourcentage1 = (competence.maquettage * 100) / 30
                maquette.style.width = pourcentage1 + "%"
                maquette.style.backgroundColor = "red"

                pourcentage2 = (competence.realisation * 100) / 30
                Realisation.style.width = pourcentage2 + "%"
                Realisation.style.backgroundColor = "green"

                pourcentage3 = (competence.developpement * 100) / 30
                devops.style.width = pourcentage3 + "%"
                devops.style.backgroundColor = "yellow"

                pourcentage4 = (competence.interface * 100) / 30
                commerce.style.width = pourcentage4 + "%"
                commerce.style.backgroundColor = "orange"

                pourcentage5 = (competence.BDD * 100) / 30
                bd.style.width = pourcentage5 + "%"
                bd.style.backgroundColor = "blue"

                pourcentage6 = (competence.acceeData * 100) / 30
                donnes.style.width = pourcentage6 + "%"
                donnes.style.backgroundColor = "pink"

                pourcentage7 = (competence.Backend * 100) / 30
                backend.style.width = pourcentage7 + "%"
                backend.style.backgroundColor = "purple"

                pourcentage8 = (competence.Ecommerce * 100) / 30
                appli.style.width = pourcentage8 + "%"
                appli.style.backgroundColor = "brown"
            }
                    
        })
    })
})

