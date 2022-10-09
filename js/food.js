var ingredient = [
    {
        "name" : "tomato",
        "expiration date" : "01-01-1970",
        "category" : "fruit",
        "amount" : "2"
    },
    {
        "name" : "carrot",
        "expiration date" : "01-01-1970",
        "category" : "vegetables",
        "amount" : "5"
    }
]

window.onload = showAllIngredients();

function showAllIngredients() {
    //update to get items from database instead of from local array
    var table = document.getElementById("food");

    ingredient.forEach(c => { 
        var row = table.insertRow();

        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);

        cell0.innerHTML = c["name"];
        cell1.innerHTML = c["expiration date"];
        cell2.innerHTML = c["category"];
        cell3.innerHTML = c["amount"];
    })    
}



