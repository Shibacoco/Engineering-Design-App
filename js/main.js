import mysql from 'mysql';
var msg = require('./tableFunctions');

    
const conn = mysql.createConnection({
    host: "localhost", 
    user: "test", 
    password: "",
    database: "test"
});

conn.connect(function(err) {
    if(err) throw err;

    conn.query("SELECT * FROM barcodes", function (err, result, fields){
        if (err) throw err;
        // var iets = result.JSON;
        // console.log(result[0].Name);
        showAll(result);
        // showAllIngredients(iets);
    });
});

function showAll(res) {
    // console.log(res[0]);
    console.log(res.length);

    // res.forEach(element => {
    //     var row = table.insertRow();

    // });
}


// function showAllIngredients(result) {
//     //update to get items from database instead of from local array
//     var table = document.getElementById("food");
//     console.log("result");
    
//     result.forEach(c => { 
//         var row = table.insertRow();
        
//         var cell0 = row.insertCell(0);
//         var cell1 = row.insertCell(1);
//         var cell2 = row.insertCell(2);
//         var cell3 = row.insertCell(3);
//         var cell4 = row.insertCell(4);
        
//         // cell0.innerHTML = '<input name="checkboxInTable" type="checkbox" class="checkboxtable">'
//         // cell1.innerHTML = '<td class="tabledata">' + c.Name + '</td>';
//         // cell2.innerHTML = '<td class="tabledata">' + c.ExpirationDate + '</td>';
//         // cell3.innerHTML = '<td class="tabledata">' + c.Category + '</td>';
//         // cell4.innerHTML = '<td class="tabledata">' + c.AmountLeft + '</td>';
//     })    
// }
