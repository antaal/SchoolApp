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

const Form4 = document.querySelector(".details")
  const idCardIdee= "numero_card" +idee.id


  
 Form4.insertAdjacentHTML(
      "afterbegin",
      `      
      <div class="card mb-3" id="${idCardIdee}" style="max-width: 8000px;">
      <div class="row g-0">
        <div class="col-md-3 mx-3" style=" height: 50%;">
          <img src="/images/undraw_female.svg" class="img-fluid rounded-start" alt="...">
        </div><br>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" >${idee.prenom} ${idee.nom}</h5>
            <p class="card-text">${idee.option}</p>
            <p class="card-text">${idee.bio}</p>
          </div>
          <div class=" row" >
              <div  class="gauche">
                <label for="file" class="text-black libele"> ${idee.Competence1}<br>
                <progress id="file" max="100" value="90" class="barre"> ${idee.Value1} </progress></label><br>
                <label for="file " class="text-black libele">${idee.Competence2} <br>
                <progress id="file" max="100" value="80"class="barre"> ${idee.Value2}</progress></label>
              </div>
                <div class="droite ">
                <label for="file" class="text-black libele">${idee.Competence3}<br>
                <progress id="file" max="100" value="70" class="barre"> ${idee.Value2}</progress></label> <br>
                <label for="file" class="text-black libele">${idee.Competence4}<br>
                <progress id="file" max="100" value="50" class="barre"> ${idee.Value3}</progress></label>
              </div>
              <div class="droite ">
                  <label for="file" class="text-black libele">${idee.Competence5}<br>
                  <progress id="file" max="100" value="70" class="barre">${idee.Value3} </progress></label> <br>
                </div>
            </div> 
        </div>
      </div>
      </div>
      
      `
  )


}



