const selectAllCheckbox = document.getElementById("selectAllCheckbox");

var ingredient = [
    {
        "id" : "0",
        "name" : "tomato",
        "expiration date" : "01-01-1970",
        "category" : "fruit",
        "amount" : "2"
    },
    {
        "id" : "1",
        "name" : "carrot",
        "expiration date" : "01-01-1970",
        "category" : "vegetables",
        "amount" : "5"
    },
    {
        "id" : "2",
        "name" : "banana",
        "expiration date" : "01-01-1970",
        "category" : "fruit",
        "amount" : "69"
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
        var cell4 = row.insertCell(4);
        
        cell0.innerHTML = '<input name="checkboxInTable" type="checkbox" class="checkboxtable">'
        cell1.innerHTML = '<td class="tabledata">' + c["name"] + '</td>';
        cell2.innerHTML = '<td class="tabledata">' + c["expiration date"] + '</td>';
        cell3.innerHTML = '<td class="tabledata">' + c["category"] + '</td>';
        cell4.innerHTML = '<td class="tabledata">' + c["amount"] + '</td>';
    })    
}

selectAllCheckbox.addEventListener('change', (event => {
    var checkboxes = document.getElementsByName("checkboxInTable");

    checkboxes.forEach(cb => {
        cb.checked = selectAllCheckbox.checked;        
    });
}));







// function selectAll(){
//     var checkboxes = document.querySelectorAll('input[name="checkboxtable"]');
//     // var checkboxes = document.getElementsByName('checkboxtable');
//     checkboxes.forEach(element => {
//         element.checked = true;
//     });

//     for(var i = 0; i < checkboxes.length; i++){
//         checkboxes[i].checked = checkboxes[i].true;
//     }
// }



