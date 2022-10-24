/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
//-------------------------------------------------CONSTS---------------------------------------------------------------
const ownedFood = [
    // {
    //     "id": "0",
    //     "name": "tomato",
    //     "category": "fruit",
    //     "expiration date": "01-01-1970",
    //     "amount": "2"
    // },
    // {
    //     "id": "1",
    //     "name": "carrot",
    //     "category": "vegetables",
    //     "expiration date": "01-01-1970",
    //     "amount": "5"
    // },
    // {
    //     "id": "2",
    //     "name": "banana",
    //     "category": "fruit",
    //     "expiration date": "01-01-1970",
    //     "amount": "69",
    // }
];

const barcodes = [
    {
        "barcode": 1,
        "name": "tomato",
        "category": "fruit",
        "daysUntilExpiration": 5,
    }
]
const infoTable = document.getElementById("foodTable");
const removeButton = document.getElementById("deleteSelected");
const addFood = document.getElementById("addFood");


//-------------------------------------------------CLASSES--------------------------------------------------------------

class food {
    static num = 0;
    id;
    name;
    category;
    expirationDate;
    amount;

    constructor(name, category, amount, expirationDate) {
        // console.log(food.num);
        this.id = food.num;
        this.name = name;
        this.category = category;
        this.expirationDate = expirationDate;
        this.amount = amount;
        // this.expirationDate = new Date(Date() + expirationtime);
        food.num++;
        ownedFood.push(this);
    }
}

//------------------------------------------------FUNCTIONS-------------------------------------------------------------

function insertIngredient(food) {
    const row = infoTable.insertRow();

    const cell0 = row.insertCell(0);
    const cell1 = row.insertCell(1);
    const cell2 = row.insertCell(2);
    const cell3 = row.insertCell(3);
    const cell4 = row.insertCell(4);
    const cell5 = row.insertCell(5);

    cell0.innerHTML = '<input name="checkboxInTable" type="checkbox" class="checkboxtable">'
    cell1.innerHTML = '<td class="tabledata">' + food["id"] + '</td>';
    cell2.innerHTML = '<td class="tabledata">' + food["name"] + '</td>';
    cell4.innerHTML = '<td class="tabledata">' + food["category"] + '</td>';
    cell3.innerHTML = '<td class="tabledata">' + food["expirationDate"] + '</td>';
    cell5.innerHTML = '<td class="tabledata">' + food["amount"] + '</td>';
}


function showIngredients(e) {
    e.forEach(e => {
        insertIngredient(e);
    })

    return null;
}

function showNewestIngredient(e) {
    insertIngredient(e.at(e.length - 1))
    console.log(e.at(e.length - 1));
    console.log(ownedFood);
}

function showForm(manual, div) {
    if (manual) {

        div.innerHTML = "<form id=\"manualAddForm\" class=\"form\">" +
            "  <p class=\"bold\">Add your ingredient here</p>\n" +
            "  <input id=\"manualName\" type=\"text\" placeholder=\"Name\">\n" +
            "  <input id=\"manualCategory\" type=\"text\" placeholder=\"Category\">\n" +
            "  <input id=\"manualAmount\" type=\"number\" placeholder=\"0\">\n" +
            "  <input id=\"manualExpirationDate\" type=\"date\" class=\"date-input\">\n" +
            "  <input id=\"manualAdd\" type=\"button\" value=\"Add Ingredient to list\">\n" +
            "</form>\n";
    }
    else if (!manual)
    {
        div.innerHTML = "<form id=\"manualAddForm\" class=\"form\">" +
            "  <input id=\"activateSanner\" type=\"button\" value=\"Activate scanner\">\n" +
            "  <p class=\"bold\">Add your ingredient here</p>\n" +
            "  <input id=\"manualName\" type=\"text\" placeholder=\"Name\">\n" +
            "  <input id=\"manualCategory\" type=\"text\" placeholder=\"Category\">\n" +
            "  <input id=\"manualAmount\" type=\"number\" placeholder=\"0\">\n" +
            "  <input id=\"manualExpirationDate\" type=\"date\" class=\"date-input\">\n" +
            "  <input id=\"manualAdd\" type=\"button\" value=\"Add Ingredient to list\">\n" +
            "</form>\n";
    }

}

function addToOwnedFoodsManually(div) {
    const manualAdd = document.getElementById('manualAdd');
    manualAdd.addEventListener('click', (() => {
        let name = document.getElementById('manualName').value;
        let category = document.getElementById('manualCategory').value;
        let amount = document.getElementById('manualAmount').value;
        let date = document.getElementById('manualExpirationDate').value;

        //check if empty

        // console.log("---------------------");
        new food(name, category, amount, date);
        div.innerHTML = "";
        showNewestIngredient(ownedFood);
    }))
}

function addToOwnedFoodsScanner(){
    const activateScanner = document.getElementById('activateScanner');
    activateScanner.addEventListener('click', (()=> {
        //activate scanner and wait for input
    }))
}

function returnStringScanner(){
    let scannerString = 1;
    //----------------------------------------------------------------------
    //
    // dingen om de scanner te laten communiceren
    //
    //----------------------------------------------------------------------
    //
    // stop de string die wordt doorgegeven door de scanner in scannerstring
    //
    //----------------------------------------------------------------------
    return scannerString;
}

//-------------------------------------------EVENTLISTENERS-------------------------------------------------------------

removeButton.addEventListener('click', (() => {
    const checkboxes = document.getElementsByName("checkboxInTable");

    if (document.getElementById("selectAllCheckbox").checked) {
        document.getElementById("selectAllCheckbox").checked = false;
    }

    for (let i = checkboxes.length; i > 0; i--) {
        if (checkboxes[i - 1].checked) {
            ownedFood.splice(i - 1, 1)
            checkboxes[i - 1].parentElement.parentElement.remove();
        }
    }
}))

addFood.addEventListener('click', (() => {
    const addFoodDiv = document.getElementById('addFoodChoice');
    addFoodDiv.innerHTML =
        "<div class=\"center\">\n" +
        "   <input type=\"button\" id=\"manually\" value=\"Add Manually\">\n" +
        "   <input type=\"button\" id=\"scanner\" value=\"Add by scanning\">\n" +
        "</div>\n";

    const manually = document.getElementById('manually');
    const scanner = document.getElementById('scanner');


    manually.addEventListener('click', () => {
        showForm(true, addFoodDiv);
        addToOwnedFoodsManually(addFoodDiv);
    })


    scanner.addEventListener('click', () => {

        showForm(false, addFoodDiv);
        addToOwnedFoodsScanner(addFoodDiv);


        //deze moet dynamisch worden aangepast naar de output die door de scanner gegenereerd wordt
        let barcode = 1;
        let tempDate = new Date();

        let thing = barcodes.find(element => element.barcode === barcode);

        // addToOwnedFoods();
    })
}));


//----------------------------------------SHOW INITIAL INGREDIENTS------------------------------------------------------

window.onload = showIngredients(ownedFood);

//------------------------------------------------TESTBUTTON------------------------------------------------------------

const testbutton = document.getElementById("testbutton");

testbutton.addEventListener('click', () => {
    console.log(ownedFood);
});











