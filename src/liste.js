const API_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDA4NDQ3OCwiZXhwIjoxOTU1NjYwNDc4fQ.EpAcIjyyxGlxQBERz0kL3sqqCE1SgMrwSyXmsP8LccU"
const API_URL = "https://plkjtdwhwxsklfxblqad.supabase.co/rest/v1/Apprenants"


    
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
      `<div class="card mb-3" id="${idCardIdee}" style="border: 5px solid black">
      <div class="row g-0">
      <div class="col-md-3 mx-3" style=" height: 50%;">
      <img src="/images/undraw_female.svg" class="img-fluid rounded-start" alt="...">
      </div><br>
      <div class="col-md-8 mt-5">
      <div class="card-body" style="font-size:30px;">
        <h5 class="card-title">${idee.prenom} ${idee.nom}</h5>
        <p class="card-text">${idee.niveau}</p>
        <p class="card-text">${idee.bio}</p>
      </div>
      </div>
      <div class="d-grid gap-2 col-4 mx-auto">
      <button class="btn btn-danger" id="${idee.id}">Detail</button>
      </div>
      </div>
      </div>
      `
  )

  // const detail = document.getElementById(idButtonDetail)
  //   detail.addEventListener("click", (event) =>{
  //     console.log("hello");
  //     event.preventDefault();
  //     window.location.href="detail.html"

      let detail = document.getElementById(idee.id)
      detail.addEventListener('click', function(){
        localStorage.setItem('MonId', idee.id)
        window.location.href = "detail.html"
      
    })
}


      
