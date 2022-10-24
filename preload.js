/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 * 
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
      
    }
  })


//https://stackoverflow.com/questions/1098040/checking-if-a-key-exists-in-a-javascript-object
//var obj = { key: undefined };
//console.log("key" in obj); // true, regardless of the actual value