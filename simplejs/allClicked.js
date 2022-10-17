const selectAllCheckbox = document.getElementById("selectAllCheckbox");

selectAllCheckbox.addEventListener('change', (event => {
    var checkboxes = document.getElementsByName("checkboxInTable");

    checkboxes.forEach(cb => {
        cb.checked = selectAllCheckbox.checked;
    });
}));