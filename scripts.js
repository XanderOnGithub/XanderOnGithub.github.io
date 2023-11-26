const navItems = document.getElementsByClassName('navbar-item');
function toggleNav() {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.toggle('hidden');
    }
}