const API_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDA4NDQ3OCwiZXhwIjoxOTU1NjYwNDc4fQ.EpAcIjyyxGlxQBERz0kL3sqqCE1SgMrwSyXmsP8LccU"
const API_URL = "https://plkjtdwhwxsklfxblqad.supabase.co/rest/v1/VanillaApp"

    
  window.addEventListener("load", ()=>{
   
    
    fetch(API_URL, {
      headers: {
        apikey: API_KEY,
      },
    })
  
    .then((response) => response.json())
    .then((nouvelleIdee) => {
      nouvelleIdee.forEach((i) => {
        creerUneCarte(i)
      })
    })
  })

function creerUneCarte(idee){
//let div = document.querySelector('.liste')
const idButtonDetail ="btn-detail" +idee.id
const ThirdForm = document.querySelector(".liste")
  const idCardIdee= "numero_card" +idee.id
  
 ThirdForm.insertAdjacentHTML(
      "afterbegin",
      `<div class="card mb-2" id="${idCardIdee}" style="border: 5px solid black">
      <div >
        <img class="card-img-left" alt="" src="./images/undraw_female.svg" width="500px" height="200px">
      </div>
      <div class="card-body">
        <h5 class="card-title">${idee.prenom} ${idee.nom}</h5>
        <p class="card-text">${idee.option}</p>
        <p class="card-text">${idee.bio}</p>
        <div class="d-grid gap-2 col-4 mx-auto">
      <button class="btn btn-primary" id="${idButtonDetail}">Detail</button>
      </div>
      </div>`
  )

  const detail = document.getElementById(idButtonDetail)
    detail.addEventListener("click", (event) =>{
      console.log("hello");
      event.preventDefault();
      window.location.href="detail.html"

      
      
    })
}


      
