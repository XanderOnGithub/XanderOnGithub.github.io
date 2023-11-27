const navItems = document.getElementsByClassName('navbar-item');
const cursor = document.querySelector('.cursor');

function toggleNav() {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.toggle('hidden');
    }
}

document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const cursor = document.querySelector('.cursor');
    cursor.animate({
        left: `${mouseX}px`,
        top: `${mouseY}px`
    }, {duration: 250, fill: 'forwards', easing: 'ease-in-out'});
});


