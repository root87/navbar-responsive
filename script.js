// funsi x hamburger menu
function myFunction(x) {
    x.classList.toggle("change");
}

// funsi slide mobile
const menuToggle = document.querySelector ('.toggle-menu');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});