/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
const infoTable = document.getElementById("foodTable");
const removeButton = document.getElementById("deleteSelected");

const ingredient = [
    {
        "id": "0",
        "name": "tomato",
        "expiration date": "01-01-1970",
        "category": "fruit",
        "amount": "2"
    },
    {
        "id": "1",
        "name": "carrot",
        "expiration date": "01-01-1970",
        "category": "vegetables",
        "amount": "5"
    },
    {
        "id": "2",
        "name": "banana",
        "expiration date": "01-01-1970",
        "category": "fruit",
        "amount": "69"
    }
];


function showIngredients(e){
    e.forEach(e => {
        const row = infoTable.insertRow();

        const cell0 = row.insertCell(0);
        const cell1 = row.insertCell(1);
        const cell2 = row.insertCell(2);
        const cell3 = row.insertCell(3);
        const cell4 = row.insertCell(4);
        const cell5 = row.insertCell(5);

        cell0.innerHTML = '<input name="checkboxInTable" type="checkbox" class="checkboxtable">'
        cell1.innerHTML = '<td class="tabledata">' + e["id"] + '</td>';
        cell2.innerHTML = '<td class="tabledata">' + e["name"] + '</td>';
        cell3.innerHTML = '<td class="tabledata">' + e["expiration date"] + '</td>';
        cell4.innerHTML = '<td class="tabledata">' + e["category"] + '</td>';
        cell5.innerHTML = '<td class="tabledata">' + e["amount"] + '</td>';
    })
    return null;
}

removeButton.addEventListener('click', (() => {
    const checkboxes = document.getElementsByName("checkboxInTable");

    if(document.getElementById("selectAllCheckbox").checked){
        document.getElementById("selectAllCheckbox").checked = false;
    }

    for(let i = checkboxes.length; i > 0; i--) {
        if(checkboxes[i - 1].checked){
            ingredient.splice(i - 1, 1)
            checkboxes[i - 1].parentElement.parentElement.remove();
        }
    }
}))

window.onload = showIngredients(ingredient);

const test = document.getElementById('checkarray');
test.addEventListener('click', () => {
})





