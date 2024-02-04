// Select all navigation items
const navItems = document.getElementsByClassName('navbar-item');


// Toggle navigation items visibility
function toggleNav() {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.toggle('hidden');
    }
}