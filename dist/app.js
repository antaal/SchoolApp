/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("const API_KEY =\n\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDA4NDQ3OCwiZXhwIjoxOTU1NjYwNDc4fQ.EpAcIjyyxGlxQBERz0kL3sqqCE1SgMrwSyXmsP8LccU\"\nconst API_URL = \"https://plkjtdwhwxsklfxblqad.supabase.co/rest/v1/VanillaApp\"\n\n/*\nconst signUp = e => {\n    let prenom = document.getElementById('prenom').value,\n        nom = document.getElementById('nom').value,\n        niveau = document.getElementById('niveau').value;\n        bio = document.getElementById('bio').value;\n\n    let formData = JSON.parse(localStorage.getItem('formData')) || [];\n\n    let exist = formData.length && \n        JSON.parse(localStorage.getItem('formData')).some(data => \n            data.prenom.toLowerCase() == prenom.toLowerCase() && \n            data.nom.toLowerCase() == nom.toLowerCase()\n        );\n\n    if(!exist){\n        formData.push({ prenom, nom, niveau ,bio});\n        localStorage.setItem('formData', JSON.stringify(formData));\n        document.querySelector('form').reset();\n        document.getElementById('prenom').focus();\n        alert(\"Successfull\");\n    }\n    else{\n        alert(\"Ooopppssss... Deja creer\");\n    }\n  \n}\n*/\n\n// RECUPERATION DES INFORMAIONS DU FORMULAIRE\nconst SecondForm = document.getElementById(\"form2\")\nconst ideeForm = document.querySelector(\"form\")\nconst inputPrenom = document.querySelector(\"input#prenom\")\nconst inputNom = document.querySelector(\"input#nom\")\nconst inputOption = document.querySelector(\"select#niveau\")\nconst inputBio = document.querySelector(\"textarea#bio\")\nconst BtnAdd =document.getElementById(\"btnAjout\")\nconst Valider = document.getElementById(\"valider\")\n\n\nValider.addEventListener(\"click\", (event) => {\n  event.preventDefault()\nconsole.log(\"valider\");\n\n  // Récupération des informations saisies\n  const prenomSaisi = inputPrenom.value\n  const nomSaisi = inputNom.value\n  const optionSaisi = inputOption.value\n  const bioSaisi = inputBio.value\n\n  \n\n  // mettre les informations sous forme\n  const nouvelleIdee = {\n    prenom: prenomSaisi,\n    nom:nomSaisi,\n    niveau:optionSaisi,\n    bio: bioSaisi,\n    \n  }\n  \n\n  //ENVOYER LES DONNEES VERS SUPABASE\n  fetch(API_URL, {\n    method: \"POST\",\n    headers: {\n      apikey: API_KEY,\n      \"Content-Type\": \"application/json\",\n      Prefer:\"return=representation\",\n    },\n    body: JSON.stringify(nouvelleIdee),\n  })\n  .then((response) => response.json())\n\n       // on vide les champs\n       inputPrenom.value = \"\"\n       inputNom.value = \"\"\n       inputOption.value = \"\"\n       inputBio.value = \"\"\n\n  \n})\n\n\n\n\nconst creerUneCarte = (idee) => {\n  const idButtonModifier =\"btn_modifier-\" +idee.id\n  const idButtonSupprimer =\"btn_supprimer-\" +idee.id\n    const idCardIdee= \"numero_card\" +idee.id\n     \n    \n   \n     SecondForm.insertAdjacentHTML(\n         \"afterbegin\",\n         `<div class=\"card \" id=\"${idCardIdee}\" style=\"border: 5px solid black\">\n         <div >\n         <img class=\"card-img-left\" alt=\"\" src=\"./images/undraw_female.svg\" width=\"500px\" height=\"200px\">\n         </div>\n         <div class=\"card-body\">\n           <h5 class=\"card-title\">${inputPrenom.value} ${inputNom.value}</h5>\n           <p class=\"card-text\">${inputOption.value}</p>\n           <p class=\"card-text\">${inputBio.value}</p>\n          </div>\n    <div class =\"d-flex \">\n      <i class=\"fas fa-trash-alt mx-3 card-link btn\"id=\"${idButtonModifier}\"style=\"font-size:3rem\"></i>\n      <i class=\"fas fa-edit mx-3 card-link btn\"id=\"${idButtonSupprimer}\"style=\"font-size:3rem; color:#ce0033\"></i>\n    </div>\n    </div>\n     </div><br>`\n     )\n   \n   }\n\n   \n   BtnAdd.addEventListener(\"click\", (e) => {\n       e.preventDefault();\n      \n      const prenomSaisi = inputPrenom.value\n        const nomSaisi = inputNom.value\n        const optionSaisi = inputOption.value\n        const bioSaisi = inputBio.value\n       \n       \n        const Apprenant = {\n        prenom:prenomSaisi,\n        nom:nomSaisi,\n        niveau:optionSaisi,\n        bio: bioSaisi,\n        \n        }\n      \n      creerUneCarte(Apprenant);\n \n   })\n    \n\n\n//# sourceURL=webpack://scoolapp/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;