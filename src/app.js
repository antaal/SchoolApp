const API_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDA4NDQ3OCwiZXhwIjoxOTU1NjYwNDc4fQ.EpAcIjyyxGlxQBERz0kL3sqqCE1SgMrwSyXmsP8LccU"
const API_URL = "https://plkjtdwhwxsklfxblqad.supabase.co/rest/v1/VanillaApp"
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
    e.preventDefault();
}
