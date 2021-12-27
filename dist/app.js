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

/***/ "./dist/app.js":
/*!*********************!*\
  !*** ./dist/app.js ***!
  \*********************/
/***/ (() => {

eval("/*\n * ATTENTION: The \"eval\" devtool has been used (maybe by default in mode: \"development\").\n * This devtool is neither made for production nor for readable output files.\n * It uses \"eval()\" calls to create a separate source file in the browser devtools.\n * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)\n * or disable the default devtool with \"devtool: false\".\n * If you are looking for production-ready output files, see mode: \"production\" (https://webpack.js.org/configuration/mode/).\n */\n/******/ (() => { // webpackBootstrap\n/******/ \tvar __webpack_modules__ = ({\n\n/***/ \"./src/app.js\":\n/*!********************!*\\\n  !*** ./src/app.js ***!\n  \\********************/\n/***/ (() => {\n\neval(\"const API_KEY =\\n\\\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDA4NDQ3OCwiZXhwIjoxOTU1NjYwNDc4fQ.EpAcIjyyxGlxQBERz0kL3sqqCE1SgMrwSyXmsP8LccU\\\"\\nconst API_URL = \\\"https://plkjtdwhwxsklfxblqad.supabase.co/rest/v1/VanillaApp\\\"\\nconst signUp = e => {\\n    let prenom = document.getElementById('prenom').value,\\n        nom = document.getElementById('nom').value,\\n        niveau = document.getElementById('niveau').value;\\n        bio = document.getElementById('bio').value;\\n\\n    let formData = JSON.parse(localStorage.getItem('formData')) || [];\\n\\n    let exist = formData.length && \\n        JSON.parse(localStorage.getItem('formData')).some(data => \\n            data.prenom.toLowerCase() == prenom.toLowerCase() && \\n            data.nom.toLowerCase() == nom.toLowerCase()\\n        );\\n\\n    if(!exist){\\n        formData.push({ prenom, nom, niveau ,bio});\\n        localStorage.setItem('formData', JSON.stringify(formData));\\n        document.querySelector('form').reset();\\n        document.getElementById('prenom').focus();\\n        alert(\\\"Creer\\\");\\n    }\\n    else{\\n        alert(\\\"Ooopppssss... Deja creer\\\");\\n    }\\n    e.preventDefault();\\n}\\n\\n//# sourceURL=webpack://ScoolApp/./src/app.js?\");\n\n/***/ })\n\n/******/ \t});\n/************************************************************************/\n/******/ \t\n/******/ \t// startup\n/******/ \t// Load entry module and return exports\n/******/ \t// This entry module can't be inlined because the eval devtool is used.\n/******/ \tvar __webpack_exports__ = {};\n/******/ \t__webpack_modules__[\"./src/app.js\"]();\n/******/ \t\n/******/ })()\n;\n\n//# sourceURL=webpack://ScoolApp/./dist/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./dist/app.js"]();
/******/ 	
/******/ })()
;