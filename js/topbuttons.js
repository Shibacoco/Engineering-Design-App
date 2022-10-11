const scanButton = document.getElementById("scanAdd");
const addButton = document.getElementById("manualAdd");
const removeButton = document.getElementById("deleteSelected");




addButton.addEventListener('click', (event => {
    console.log("jottem.")
}) )




removeButton.addEventListener('click', (event => {
    var checkboxes = document.getElementsByName("checkboxInTable");

    if(document.getElementById("selectAllCheckbox").checked){
        document.getElementById("selectAllCheckbox").checked = false;
    }

    for(var i = checkboxes.length; i > 0; i--) {
        if(checkboxes[i - 1].checked){
            checkboxes[i - 1].parentElement.parentElement.remove();
            //remove from database
        }
    } 
}))

function addWithScanner(){
    //dialog gebruiken
    //https://www.electronjs.org/docs/latest/api/dialog
    //msg naar scanner sturen dat scanner aan gaat
    //input scanner afwachten
    //input toevoegen aan db
}

function addManually(){



    //dialog gebruiken 
    //https://www.electronjs.org/docs/latest/api/dialog
    //input gebruiker afwachten
    //input toevoegen aan db
}