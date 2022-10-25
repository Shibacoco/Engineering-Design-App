/* data objects */

let receptenLijst = {
  recepten: [
    {
      id: 0,
      name: "Pumpkin Spice Koekjes",
      ingredients: [
        "flespompoen",
        "MonChou",
        "basterdsuiker",
        "koek- en speculaaskruiden",
        "quiche & taartdeeg",
        "ei",
        "kaneelsuiker",
      ],
      URL: "https://www.ah.nl/allerhande/recept/R-R1197493/pumpkin-spice-koekjes",
      photo:
        "https://static.ah.nl/static/recepten/img_RAM_PRD171145_1024x748_JPG.jpg",
    },
    {
      id: 1,
      name: "Feta Wintergroente",
      ingredients: [
        "luxe roerbak Hollands",
        "feta",
        "knoflook",
        "penne",
        "pijnboompitten",
      ],
      URL: "https://www.ah.nl/allerhande/recept/R-R1197491/baked-feta-pasta-wintergroente",
      photo:
        "https://static.ah.nl/static/recepten/img_RAM_PRD171142_1024x748_JPG.jpg",
    },
    {
      id: 2,
      name: "Koningsoesterzwam",
      ingredients: [
        "koningsoesterzwammen",
        "ongezouten roomboter",
        "pastinaken",
        "knoflook",
        "peterselie",
        "citroen",
        "crème fraîche",
      ],
      URL: "https://www.ah.nl/allerhande/recept/R-R1197478/koningsoesterzwam-coquilles-met-pastinaakpuree",
      photo:
        "https://static.ah.nl/static/recepten/img_RAM_PRD170851_1024x748_JPG.jpg",
    },
    {
      id: 3,
      name: "Zuurkool Ovenschotel",
      ingredients: [
        "ui",
        "knoflook",
        "kookzuivel",
        "kruidenzuurkool",
        "geraspte oude kaas",
        "gerookte slagersachterham",
        "aardappelschijfjes",
      ],
      URL: "https://www.ah.nl/allerhande/recept/R-R1197458/zuurkool-ovenschotel-met-ham-en-aardappelschijfjes",
      photo:
        "https://static.ah.nl/static/recepten/img_RAM_PRD170828_1024x748_JPG.jpg",
    },
    {
      id: 4,
      name: "Paddenstoelenstoof",
      ingredients: [
        "ui",
        "knoflook",
        "paddenstoelen",
        "kastanjechampignons",
        "roomboter",
        "zoete-aardappelblokjes",
        "tarwebloem",
        "groentebouillontablet",
        "peterselie",
        "citroen",
      ],
      URL: "https://www.ah.nl/allerhande/recept/R-R1197442/paddenstoelenstoof-met-zoete-aardappel",
      photo:
        "https://static.ah.nl/static/recepten/img_RAM_PRD170812_1024x748_JPG.jpg",
    },
    {
      id: 5,
      name: "Hachee",
      ingredients: [
        "flespompoen",
        "basterdsuiker",
        "koek- en speculaaskruiden",
        "quiche & taartdeeg",
        "ei",
        "kaneelsuiker",
      ],
      URL: "https://www.ah.nl/allerhande/recept/R-R1197437/hachee-uit-de-oven-met-rodekoolsalade-geroosterde-appeltjes-en-friet",
      photo:
        "https://static.ah.nl/static/recepten/img_RAM_PRD170802_1024x748_JPG.jpg",
    },
    {
      id: 6,
      name: "Tomaat-Broodsoep",
      ingredients: [
        "volkorenbrood",
        "trostomaten",
        "knoflook",
        "ui",
        "tomatenpuree",
        "basilicum",
      ],
      URL: "https://www.ah.nl/allerhande/recept/R-R1195556/tomaat-broodsoep-met-basilicum",
      photo:
        "https://static.ah.nl/static/recepten/img_RAM_PRD151846_1024x748_JPG.jpg",
    },
  ],
};

let groceriesLijst = {
  vegetables: [
    {
      id: 0,
      name: "Tomato",
      photo:
        "https://www.mamanatural.com/wp-content/uploads/28-Things-to-Do-With-Too-Many-Tomatoes-tips-by-Mama-Natural.jpg",
    },
    {
      id: 1,
      name: "Parsnip",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XMllENQsGh5CZNpSwh7o2vqY5eFk6rP-L9HWp2W1XrhHrZg95l2HlOgsmEt9XINaPjc&usqp=CAU",
    },
    {
      id: 2,
      name: "Fungi",
      photo:
        "https://foodprint.org/wp-content/uploads/2019/12/real-food-mushrooms.jpg",
    },
  ],
  fruit: [
    {
      id: 3,
      name: "Apple",
      photo: "https://static3.bigstockphoto.com/2/5/3/large1500/352853702.jpg",
    },
    {
      id: 4,
      name: "Banana",
      photo:
        "https://i.pinimg.com/originals/e6/2f/26/e62f266e99dc33ac48c9fae01ba3f873.jpg",
    },
    {
      id: 5,
      name: "Galia",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Lebensmittel-Galiamelone1-Asio.JPG/220px-Lebensmittel-Galiamelone1-Asio.JPG",
    },
  ],
  other: [
    {
      id: 6,
      name: "Bread",
      photo:
        "https://www.seriouseats.com/thmb/5uU9Q8K591Q4geBPbE9SiGEvf2g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/better-no-knead-bread-recipe-hero-01_1-48d654bfadeb4a5caf9b233b00fc74ca.JPG",
    },
    {
      id: 7,
      name: "Egg",
      photo: "https://nutritionfacts.org/app/uploads/2022/06/eggs.jpg",
    },
    {
      id: 8,
      name: "Cheese",
      photo:
        "https://img.taste.com.au/Hk62j_1w/taste/2019/11/camembert-cheese-155925-2.jpg",
    },
  ],
};

/* classes */

foodAm = 0;

class Food {
    id;
  name;
  category;
  expirationDate;
  amount;
  photo;

  constructor(name, category, amount, expirationDate) {
    this.id = makeid(10);
    this.name = name;
    this.category = category;
    this.expirationDate = expirationDate;
    this.amount = amount;
  }


}

/* functions */

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const resetFridge = () => {
  let cont = document.querySelector(".fridge");
  cont.innerHTML = "";
  let title = document.createElement("h1");
  title.classList.add("fridge-title");
  title.innerText = "MY FRIDGE";
  let closeDiv = document.createElement("div");
  closeDiv.classList.add("close-fridge");
  closeDiv.innerText = "X";
  closeDiv.addEventListener("click", () => {
    document.querySelector(".fridge").classList.remove("fridge-open");
  });
  cont.appendChild(title);
  cont.appendChild(closeDiv);

  let fridgeItemsStorage = JSON.parse(localStorage.getItem("fridge"));

  fridgeItemsStorage.forEach((item) => {
    let fridgeItem = document.createElement("div");
    fridgeItem.classList.add("fridge-item");
    let fridgeItemImage = document.createElement("div");
    fridgeItemImage.classList.add("fridge-item-image");
    let img = document.createElement("img");
    img.width = "150";
    let fridgeItemWrapper = document.createElement("div");
    fridgeItemWrapper.classList.add("fridge-item-wrapper");
    let fridgeItemName = document.createElement("div");
    fridgeItemName.classList.add("fridge-item-name");
    let fridgeItemDue = document.createElement("div");
    fridgeItemDue.classList.add("fridge-item-due");
    //------------------------------------------------------
    //------------------------------------------------------
    //------------------------------------------------------
    //changed voor de button
    let fridgeItemAmount = document.createElement("input");
    fridgeItemAmount.type = "number";
    fridgeItemAmount.classList.add("fridge-item-amount");
    let updateDiv = document.createElement("input");
    updateDiv.type = "button";
    updateDiv.classList.add("fridge-item-update");
    //------------------------------------------------------
    //------------------------------------------------------
    //------------------------------------------------------
    let deleteDiv = document.createElement("div");
    deleteDiv.classList.add("delete");
    let calenderIcon = document.createElement("i");
    let deleteIcon = document.createElement("i");
    calenderIcon.classList.add("fa-solid", "fa-calender-days");
    deleteIcon.classList.add("fa-solid", "fa-trash");

    fridgeItem.appendChild(fridgeItemImage);
    fridgeItem.appendChild(fridgeItemWrapper);

    fridgeItemWrapper.appendChild(fridgeItemName);
    fridgeItemWrapper.appendChild(fridgeItemDue);
    fridgeItemWrapper.appendChild(fridgeItemAmount);
    fridgeItemWrapper.appendChild(updateDiv);
    fridgeItemWrapper.appendChild(deleteDiv);

    deleteDiv.appendChild(deleteIcon);

    let updateText = "Update";

    fridgeItemDue.appendChild(calenderIcon);
    fridgeItemDue.innerText = item.expirationDate;
    fridgeItemName.innerText = item.name;
    fridgeItemAmount.value = item.amount;
    updateDiv.value = updateText;

    let URL = "";

    for (let i = 0; i < 3; i++) {
      if (groceriesLijst.fruit[i].name == item.name) {
        URL = groceriesLijst.fruit[i].photo;
      } else if (groceriesLijst.vegetables[i].name == item.name) {
        URL = groceriesLijst.vegetables[i].photo;
      } else if (groceriesLijst.other[i].name == item.name) {
        URL = groceriesLijst.other[i].photo;
      }
    }
    img.src = URL;
    fridgeItemImage.appendChild(img);

    deleteIcon.addEventListener("click", () => {
      document.querySelector(".fridge").removeChild(fridgeItem);      
      let fridgeItems = JSON.parse(localStorage.getItem('fridge'));
      let results = fridgeItems.map((itemInStorage) => itemInStorage.id == item.id);
      let index = 0;
      let toRemove = 0;
      results.forEach(result => {
        if (result) {
            toRemove = index; 
        }
        index++
      });

      fridgeItems.splice(toRemove, 1);
      localStorage.setItem('fridge', JSON.stringify(fridgeItems));

      resetFirstOut();
    });

    document.querySelector(".fridge").appendChild(fridgeItem);
  });
};

const resetNumbering = (arrayObject) => {
    let number = 0;
    arrayObject.forEach(item => {
        item.id = number;
        number++;
    });
}

const resetFirstOut = () => {
    let fridgeItemsStorage = JSON.parse(localStorage.getItem("fridge"));


  let sorted = fridgeItemsStorage.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  document.querySelector(".groceries").innerHTML = "";

  let groceryDivs = [
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
  ];

  groceryDivs.forEach((div) => {
    div.classList.add("grocery");
    document.querySelector(".groceries").appendChild(div);
  });

  for (let i = 0; i < sorted.length; i++) {
    if (i < sorted.length && i < 6) {
      let firstOut = document.querySelector(".groceries").children[i];
      let img = document.createElement("img");
      let label = document.createElement("div");
      let dayAmount = document.createElement("h2");
      let days = document.createElement("h3");

      img.height = "150";

      firstOut.appendChild(img);
      firstOut.appendChild(label);
      label.appendChild(dayAmount);
      label.appendChild(days);

      label.classList.add("label");

      dayAmount.classList.add("dayAmount");
      days.classList.add("days");

      let curDate = new Date().toISOString().split("T")[0];

      let difference =
        dateToNumber(sorted[i].expirationDate) - dateToNumber(curDate);

      dayAmount.innerText = difference;

      days.innerText = dayAmount.innerText != 1 ? "days" : "day";
      dayAmount.style.color = dayAmount.innerText < 1 ? "red" : "white";
      days.style.color = dayAmount.innerText < 1 ? "red" : "white";

      let URL = "";

      for (let j = 0; j < 3; j++) {
        if (groceriesLijst.fruit[j].name == sorted[i].name) {
          URL = groceriesLijst.fruit[j].photo;
        } else if (groceriesLijst.vegetables[j].name == sorted[i].name) {
          URL = groceriesLijst.vegetables[j].photo;
        } else if (groceriesLijst.other[j].name == sorted[i].name) {
          URL = groceriesLijst.other[j].photo;
        }
      }
      img.src = URL;
    }
  }
};

function dateToNumber(date) {
  let dateParts = date.split("-");

  return (parseInt(dateParts[0]) - 1) * 365 + parseInt(dateParts[1]) * 31 + parseInt(dateParts[2]);
}

const onOpen = () => {
  receptenLijst.recepten.forEach((recept) => {
    const pictureDiv = document.createElement("div");
    const img = document.createElement("img");

    if (recept.id == 0) {
      foodTitle.innerText = recept.name;
      pictureDiv.classList.add("selected");
    } else {
      pictureDiv.classList.add("picture");
    }

    img.addEventListener("click", () => {
      window.open(recept.URL, "_blank");
    });

    pictureDiv.id = recept.id;

    selector.children[0].classList.add("selected");

    pictureDiv.appendChild(img);

    img.src = recept.photo;
    img.alt = recept.name;

    container.appendChild(pictureDiv);
  });
}

const buildVegetables = () => {
  groceriesLijst.vegetables.forEach((vegetable) => {
    const div = document.createElement("div");
    const img = document.createElement("img");

    div.classList.add(vegetable.id);
    div.classList.add("manual-add-grocery");

    img.src = vegetable.photo;
    img.alt = vegetable.name;

    div.appendChild(img);

    div.addEventListener("click", () => {
      document.querySelector(
        ".vegetable-options-name"
      ).innerText = `Add ${vegetable.name}`;
    });

    document.querySelector(".add-vegetable-grid").appendChild(div);
  });
}

const buildFruit = () => {
  groceriesLijst.fruit.forEach((fruit) => {
    const div = document.createElement("div");
    const img = document.createElement("img");

    div.classList.add(fruit.id);
    div.classList.add("manual-add-grocery");

    img.src = fruit.photo;
    img.alt = fruit.name;

    div.appendChild(img);

    div.addEventListener("click", () => {
      document.querySelector(
        ".fruit-options-name"
      ).innerText = `Add ${fruit.name}`;
    });

    document.querySelector(".add-fruit-grid").appendChild(div);
  });
}

const buildOther = () => {
  groceriesLijst.other.forEach((other) => {
    const div = document.createElement("div");
    const img = document.createElement("img");

    div.classList.add(other.id);
    div.classList.add("manual-add-grocery");

    img.src = other.photo;
    img.alt = other.name;

    div.appendChild(img);

    div.addEventListener("click", () => {
      document.querySelector(
        ".other-options-name"
      ).innerText = `Add ${other.name}`;
    });

    document.querySelector(".add-other-grid").appendChild(div);
  });
}

/* Initial startup */

localStorage.setItem("fridge", "[]");

state = 0;

const container = document.querySelector(".pictures");
const selector = document.querySelector(".selector");
const foodTitle = document.querySelector(".foodTitle");

onOpen();
buildVegetables();
buildFruit();
buildOther();

/*  Event Listeners */

document.querySelector(".buttonNext").addEventListener("click", () => {
  if (state != 6) {
    document.getElementById(state).classList.remove("selected");
    document.getElementById(state).classList.add("picture");
    document.getElementById(state + 1).classList.remove("picture");
    document.getElementById(state + 1).classList.add("selected");
    selector.children[state].classList.remove("selected");
    selector.children[state + 1].classList.add("selected");
    foodTitle.innerText = receptenLijst.recepten[state + 1].name;
    state += 1;
  } else {
    document.getElementById(state).classList.remove("selected");
    document.getElementById(state).classList.add("picture");
    document.getElementById(0).classList.remove("picture");
    document.getElementById(0).classList.add("selected");
    selector.children[state].classList.remove("selected");
    selector.children[0].classList.add("selected");
    foodTitle.innerText = receptenLijst.recepten[0].name;
    state = 0;
  }
});

document.querySelector(".buttonPrev").addEventListener("click", () => {
  if (state != 0) {
    document.getElementById(state).classList.remove("selected");
    document.getElementById(state).classList.add("picture");
    document.getElementById(state - 1).classList.remove("picture");
    document.getElementById(state - 1).classList.add("selected");
    selector.children[state].classList.remove("selected");
    selector.children[state - 1].classList.add("selected");
    foodTitle.innerText = receptenLijst.recepten[state - 1].name;
    state -= 1;
  } else {
    document.getElementById(state).classList.remove("selected");
    document.getElementById(state).classList.add("picture");
    document.getElementById(6).classList.remove("picture");
    document.getElementById(6).classList.add("selected");
    selector.children[state].classList.remove("selected");
    selector.children[6].classList.add("selected");
    foodTitle.innerText = receptenLijst.recepten[6].name;
    state = 6;
  }
});

document.querySelector(".groceryList").addEventListener("click", () => {
  document.querySelector(".fridge").classList.add("fridge-open");
});

// document.querySelector(".delete > i").addEventListener("click", (e) => {
//   document
//     .querySelector(".fridge")
//     .removeChild(e.target.parentElement.parentElement.parentElement);
// });

document.querySelector(".scan").addEventListener("click", () => {
  document.querySelector(".scan-screen").classList.add("scan-screen-open");
});

document.querySelector(".close-scan").addEventListener("click", () => {
  document.querySelector(".scan-screen").classList.remove("scan-screen-open");
});

document.querySelector(".close-fridge").addEventListener("click", () => {
  document.querySelector(".fridge").classList.remove("fridge-open");
});

document.querySelector(".manual-add").addEventListener("click", () => {
  document.querySelector(".scan-screen").classList.remove("scan-screen-open");
  document
    .querySelector(".manual-add-screen")
    .classList.add("manual-add-screen-open");
});

document.querySelector(".close-manual-add").addEventListener("click", () => {
  document
    .querySelector(".manual-add-screen")
    .classList.remove("manual-add-screen-open");
});

document.querySelector(".vegetable-wrapper").addEventListener("click", () => {
  document
    .querySelector(".manual-add-screen")
    .classList.remove("manual-add-screen-open");
  document.querySelector(".add-vegetable").classList.add("add-open");
});

document.querySelector(".fruit-wrapper").addEventListener("click", () => {
  document
    .querySelector(".manual-add-screen")
    .classList.remove("manual-add-screen-open");
  document.querySelector(".add-fruit").classList.add("add-open");
});

document.querySelector(".other-wrapper").addEventListener("click", () => {
  document
    .querySelector(".manual-add-screen")
    .classList.remove("manual-add-screen-open");
  document.querySelector(".add-other").classList.add("add-open");
});

document.querySelector(".back-fru").addEventListener("click", () => {
  document
    .querySelector(".manual-add-screen")
    .classList.add("manual-add-screen-open");
  document.querySelector(".add-fruit").classList.remove("add-open");
});

document.querySelector(".back-veg").addEventListener("click", () => {
  document
    .querySelector(".manual-add-screen")
    .classList.add("manual-add-screen-open");
  document.querySelector(".add-vegetable").classList.remove("add-open");
});

document.querySelector(".back-oth").addEventListener("click", () => {
  document
    .querySelector(".manual-add-screen")
    .classList.add("manual-add-screen-open");
  document.querySelector(".add-other").classList.remove("add-open");
});

document.querySelector(".fruit-options-add").addEventListener("click", () => {
  let amount = document.querySelector(".fruit-amount").value;
  let dueDate = document.querySelector(".fruit-due-date").value;
  if (amount !== "" && dueDate !== "") {
    let food = new Food(
      document.querySelector(".fruit-options-name").innerText.split(" ")[1],
      "fruit",
      amount,
      dueDate
    );
    let fridge = localStorage.getItem("fridge");
    let currentfoods = JSON.parse(fridge);
    currentfoods.push(food);
    localStorage.setItem("fridge", JSON.stringify(currentfoods));
    resetFridge();
    resetFirstOut();
  }
});

document
  .querySelector(".vegetable-options-add")
  .addEventListener("click", () => {
    let amount = document.querySelector(".vegetable-amount").value;
    let dueDate = document.querySelector(".vegetable-due-date").value;
    if (amount !== "" && dueDate !== "") {
      let food = new Food(
        document
          .querySelector(".vegetable-options-name")
          .innerText.split(" ")[1],
        "vegetable",
        amount,
        dueDate
      );
      let fridge = localStorage.getItem("fridge");
      let currentfoods = JSON.parse(fridge);
      currentfoods.push(food);
      localStorage.setItem("fridge", JSON.stringify(currentfoods));
      resetFridge();
      resetFirstOut();
    }
  });

document.querySelector(".other-options-add").addEventListener("click", () => {
  let amount = document.querySelector(".other-amount").value;
  let dueDate = document.querySelector(".other-due-date").value;
  if (amount !== "" && dueDate !== "") {
    let food = new Food(
      document.querySelector(".other-options-name").innerText.split(" ")[1],
      "other",
      amount,
      dueDate
    );
    let fridge = localStorage.getItem("fridge");
    let currentfoods = JSON.parse(fridge);
    currentfoods.push(food);
    localStorage.setItem("fridge", JSON.stringify(currentfoods));
    resetFridge();
    resetFirstOut();
  }
});
