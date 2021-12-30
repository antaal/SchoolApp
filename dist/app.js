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

eval("const API_KEY =\n\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDA4NDQ3OCwiZXhwIjoxOTU1NjYwNDc4fQ.EpAcIjyyxGlxQBERz0kL3sqqCE1SgMrwSyXmsP8LccU\"\nconst API_URL = \"https://plkjtdwhwxsklfxblqad.supabase.co/rest/v1/VanillaApp\"\nconst signUp = e => {\n    let prenom = document.getElementById('prenom').value,\n        nom = document.getElementById('nom').value,\n        niveau = document.getElementById('niveau').value;\n        bio = document.getElementById('bio').value;\n\n    let formData = JSON.parse(localStorage.getItem('formData')) || [];\n\n    let exist = formData.length && \n        JSON.parse(localStorage.getItem('formData')).some(data => \n            data.prenom.toLowerCase() == prenom.toLowerCase() && \n            data.nom.toLowerCase() == nom.toLowerCase()\n        );\n\n    if(!exist){\n        formData.push({ prenom, nom, niveau ,bio});\n        localStorage.setItem('formData', JSON.stringify(formData));\n        document.querySelector('form').reset();\n        document.getElementById('prenom').focus();\n        alert(\"Successfull\");\n    }\n    else{\n        alert(\"Ooopppssss... Deja creer\");\n    }\n  \n}\n   /////////////////////////////////////////////////// \n\n// RECUPERATION DES INFORMAIONS DU FORMULAIRE\nconst SecondForm = document.getElementById(\"form2\")\nconst ideeForm = document.querySelector(\"form\")\nconst inputPrenom = document.querySelector(\"input#prenom\")\nconst inputNom = document.querySelector(\"input#nom\")\nconst inputOption = document.querySelector(\"select#niveau\")\nconst inputBio = document.querySelector(\"textarea#bio\")\nconst BtnAdd =document.getElementById(\"btnAjout\")\nconst Valider = document.getElementById(\"valider\")\n\n\nValider.addEventListener(\"click\", (event) => {\n  event.preventDefault()\n\n\n  // Récupération des informations saisies\n  const prenomSaisi = inputPrenom.value\n  const nomSaisi = inputNom.value\n  const optionSaisi = inputOption.value\n  const bioSaisi = inputBio.value\n\n  \n\n  // mettre les informations sous forme\n  const nouvelleIdee = {\n    prenom: prenomSaisi,\n    nom:nomSaisi,\n    niveau:optionSaisi,\n    bio: bioSaisi,\n    \n  }\n  \n\n  //ENVOYER LES DONNEES VERS SUPABASE\n  fetch(API_URL, {\n    method: \"POST\",\n    headers: {\n      apikey: API_KEY,\n      \"Content-Type\": \"application/json\",\n      Prefer:\"return=representation\",\n    },\n    body: JSON.stringify(nouvelleIdee),\n  })\n  .then((response) => response.json())\n    \n   \n      \n    \n       // on vide les champs\n       inputPrenom.value = \"\"\n       inputNom.value = \"\"\n       inputOption.value = \"\"\n       inputBio.value = \"\"\n\n  \n})\n\n\n\n\nconst creerUneCarte = (idee) => {\n  const idButtonValider =\"btn_valider-\" +idee.id\n  const idButtonRefuser =\"btn_refuser-\" +idee.id\n    const idCardIdee= \"numero_card\" +idee.id\n     \n    \n   \n     SecondForm.insertAdjacentHTML(\n         \"afterbegin\",\n         `<div class=\"card \" id=\"${idCardIdee}\" style=\"border: 5px solid black\">\n         <div >\n         <img class=\"card-img-left\" alt=\"\" src=\"./images/undraw_female.svg\" width=\"500px\" height=\"200px\">\n         </div>\n         <div class=\"card-body\">\n           <h5 class=\"card-title\">${inputPrenom.value} ${inputNom.value}</h5>\n           <p class=\"card-text\">${inputOption.value}</p>\n           <p class=\"card-text\">${inputBio.value}</p>\n\n         </div>\n         <div class =\"d-flex justify-content-between\">\n         <i class=\"fas fa-trash-alt\"\n      id=\"${idButtonValider}\"  \n      style=\"font-size:2rem\">\n      \n      </i>\n\n      <i class=\"fas fa-edit\n      id=\"${idButtonRefuser}\"  \n      style=\"font-size:2rem; color:#ce0033\">\n      </i>\n      </div>\n         \n       </div>\n     </div><br>`\n     )\n   \n   }\n\n   \n   BtnAdd.addEventListener(\"click\", (e) => {\n       e.preventDefault();\n      \n      const prenomSaisi = inputPrenom.value\n        const nomSaisi = inputNom.value\n        const optionSaisi = inputOption.value\n        const bioSaisi = inputBio.value\n       \n       \n        const Apprenant = {\n        prenom:prenomSaisi,\n        nom:nomSaisi,\n        niveau:optionSaisi,\n        bio: bioSaisi,\n        \n                           }\n      \n      creerUneCarte(Apprenant);\n   \n      \n\n\n \n      \n   })\n\n\n//# sourceURL=webpack://scoolapp/./src/app.js?");

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