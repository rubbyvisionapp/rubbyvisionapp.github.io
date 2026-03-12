document.addEventListener("DOMContentLoaded", function() {
    // Memanggil file navbar.html dari root domain (/)
    fetch('/navbar.html')
    .then(response => response.text())
    .then(data => {
        // Memasukkan isi navbar.html ke dalam div penampung
        document.getElementById('navbar-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading navbar:', error));
});
