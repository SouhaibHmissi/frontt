 $(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});


var switchMode = document.getElementById('switchMode');

switchMode.addEventListener('change', function() {
    document.body.classList.toggle('dark', this.checked);
    adjustTableColor(this.checked);
});

function adjustTableColor(isDarkMode) {
    var table = document.querySelector('.table-striped');

    if (isDarkMode) {
        table.style.backgroundColor = '#333';
        table.style.color = '#fff';
    } 
}






