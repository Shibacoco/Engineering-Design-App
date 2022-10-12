/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 * 
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
 let receptenLijst = {
  "recepten": [
      {
          "name": "Spruitjes Gratin",
          "ingredients": ["spruitjes","aardappelen"],
          "URL": "https://ah.nl/spruitjesgratin"
      },
      {
          "name": "Doperwten",
          "ingredients": ["doperwten", "boeie eigenlijk"],
          "URL": "https://ah.nl/letterlijk_doperwten"
      },
  ]
};

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
    
  }

  document.getElementById('recepten').innerText = receptenLijst.recepten[0].name;
})