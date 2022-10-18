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
          "name": "pumpkin spice-koekjes",
          "ingredients": ["flespompoen", "MonChou", "basterdsuiker", "koek- en speculaaskruiden", "quiche & taartdeeg", "ei", "kaneelsuiker"],
          "URL": "https://www.ah.nl/allerhande/recept/R-R1197493/pumpkin-spice-koekjes"
      },
      {
          "name": "Baked feta pasta wintergroente",
          "ingredients": ["luxe roerbak Hollands", "feta", "knoflook", "penne", "pijnboompitten"],
          "URL": "https://www.ah.nl/allerhande/recept/R-R1197491/baked-feta-pasta-wintergroente"
      },
         {
          "name": "Koningsoesterzwam coquilles met pastinaakpuree",
          "ingredients": ["koningsoesterzwammen", "ongezouten roomboter", "pastinaken", "knoflook", "peterselie", "citroen", "crème fraîche"],
          "URL": "https://www.ah.nl/allerhande/recept/R-R1197478/koningsoesterzwam-coquilles-met-pastinaakpuree"
      },
         {
          "name": "zuurkool ovenschotel met ham en aardappelschijfjes",
          "ingredients": ["ui", "knoflook", "kookzuivel", "kruidenzuurkool", "geraspte oude kaas", "gerookte slagersachterham", "aardappelschijfjes"],
          "URL": "https://www.ah.nl/allerhande/recept/R-R1197458/zuurkool-ovenschotel-met-ham-en-aardappelschijfjes"
      },
      {
          "name": "paddenstoelenstoof met zoete aardappel",
          "ingredients": ["ui", "knoflook", "paddenstoelen", "kastanjechampignons", "roomboter", "zoete-aardappelblokjes", "tarwebloem", "groentebouillontablet", "peterselie", "citroen"],
          "URL": "https://www.ah.nl/allerhande/recept/R-R1197442/paddenstoelenstoof-met-zoete-aardappel"
      },
         {
          "name": "Hachee uit de oven met rodekoolsalade, geroosterde appeltjes en friet",
          "ingredients": ["flespompoen", "MonChou", "basterdsuiker", "koek- en speculaaskruiden", "quiche & taartdeeg", "ei", "kaneelsuiker"],
          "URL": "https://www.ah.nl/allerhande/recept/R-R1197437/hachee-uit-de-oven-met-rodekoolsalade-geroosterde-appeltjes-en-friet"
      },
      {
          "name": "tomaat-broodsoep met basilicum",
          "ingredients": ["volkorenbrood", "trostomaten", "knoflook", "ui", "tomatenpuree", "basilicum"],
          "URL": "https://www.ah.nl/allerhande/recept/R-R1195556/tomaat-broodsoep-met-basilicum"
      }
  ]
};





let personalDatabase =  {
    "in koelkast": [
        {
            "categorie": "fruit",
            "producten": ["aardbeien, druiven, bananen"], 
            "aantal" : [1, 2, 2],
            "houdbaar" : [4, 6, 2]
        },
        {
            "categorie": "groente",
            "ingredients": ["courgette, tomaat, komkommer"],
            "aantal" : [3, 5, 1],
            "houdbaar" : [3, 5, 1]    
        },
        {
            "categorie": "overig",
            "producten": ["melk, kaas, sinaasappelsap"],
            "aantal" : [1, 1, 2],
            "houdbaar" : [1, 6, 4]           
        }
    ]
};



window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
      
    }
  
    document.getElementById('recepten').innerText = receptenLijst.recepten[0].name;
  })


//https://stackoverflow.com/questions/1098040/checking-if-a-key-exists-in-a-javascript-object
//var obj = { key: undefined };
//console.log("key" in obj); // true, regardless of the actual value