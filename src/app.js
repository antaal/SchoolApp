const API_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDA4NDQ3OCwiZXhwIjoxOTU1NjYwNDc4fQ.EpAcIjyyxGlxQBERz0kL3sqqCE1SgMrwSyXmsP8LccU"
const API_URL = "https://plkjtdwhwxsklfxblqad.supabase.co/rest/v1/Apprenants"


/*
const signUp = e => {
    let prenom = document.getElementById('prenom').value,
        nom = document.getElementById('nom').value,
        niveau = document.getElementById('niveau').value;
        bio = document.getElementById('bio').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.prenom.toLowerCase() == prenom.toLowerCase() && 
            data.nom.toLowerCase() == nom.toLowerCase()
        );

    if(!exist){
        formData.push({ prenom, nom, niveau ,bio});
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('prenom').focus();
        alert("Successfull");
    }
    else{
        alert("Ooopppssss... Deja creer");
    }
  
}
*/

// RECUPERATION DES INFORMAIONS DU FORMULAIRE
const SecondForm = document.getElementById("form2")
const ideeForm = document.querySelector("form")
const inputPrenom = document.querySelector("input#prenom")
const inputNom = document.querySelector("input#nom")
const inputOption = document.querySelector("select#niveau")
const inputBio = document.querySelector("textarea#bio")
const BtnAdd =document.getElementById("btnAjout")
const Valider = document.getElementById("valider")
const base = document.querySelector(".donnes")


Valider.addEventListener("click", (event) => {
  event.preventDefault()
console.log("valider");


  // Récupération des informations saisies
  const prenomSaisi = inputPrenom.value
  const nomSaisi = inputNom.value
  const optionSaisi = inputOption.value
  const bioSaisi = inputBio.value

  
  // mettre les informations sous forme
  const nouvelleIdee = {
    prenom: prenomSaisi,
    nom:nomSaisi,
    niveau:optionSaisi,
    bio: bioSaisi,
    
  }
  

  //ENVOYER LES DONNEES VERS SUPABASE
  fetch(API_URL, {
    method: "POST",
    headers: {
      apikey: API_KEY,
      "Content-Type": "application/json",
      Prefer:"return=representation",
    },
    body: JSON.stringify(nouvelleIdee),
  })
  .then((response) => response.json())

       // on vide les champs
       inputPrenom.value = ""
       inputNom.value = ""
       inputOption.value = ""
       inputBio.value = ""


     
  
})




const creerUneCarte = (idee) => {
  const idButtonModifier ="btn_modifier-" +idee.id
  const idButtonSupprimer ="btn_supprimer-" +idee.id
    const idCardIdee= "numero_card" +idee.id
     
    
   
     SecondForm.insertAdjacentHTML(
         "afterbegin",
         `<div class="card " id="${idCardIdee}" style="border: 5px solid black">
         <div >
         <img class="card-img-left" alt="" src="./images/undraw_female.svg" width="500px" height="200px">
         </div>
         <div class="card-body">
           <h5 class="card-title">${inputPrenom.value} ${inputNom.value}</h5>
           <p class="card-text">${inputOption.value}</p>
           <p class="card-text">${inputBio.value}</p>
          </div>
    <div class ="d-flex ">
      <i class="fas fa-trash-alt mx-3 card-link btn"id="${idButtonSupprimer}"style="font-size:3rem"></i>
      <i class="fas fa-edit mx-3 card-link btn"id="${idButtonModifier}"style="font-size:3rem; color:#ce0033"></i>
    </div>
    </div>
     </div><br>`
     )
   const Clear =document.getElementById(idButtonSupprimer)
   console.log("Supprime");
  Clear.addEventListener("click", (e) => {
     alert("je Supprime")
   })
   const Modify =document.getElementById(idButtonModifier)
   console.log("Modifie");
  Modify.addEventListener("click", (e) => {
     alert("je Modifie")
   })

   }

   

   BtnAdd.addEventListener("click", (e) => {
       e.preventDefault();
      
       if (inputPrenom.value == "" || inputNom.value == "" || inputOption.value == "" || inputBio.value =="" ) {
        return alert("Veuillez remplir tous les champs !!!")
      }
      const prenomSaisi = inputPrenom.value
        const nomSaisi = inputNom.value
        const optionSaisi = inputOption.value
        const bioSaisi = inputBio.value
       
       
        const Apprenant = {
        prenom:prenomSaisi,
        nom:nomSaisi,
        niveau:optionSaisi,
        bio: bioSaisi,
        
        }
      
      creerUneCarte(Apprenant);
      
 
   })
    
