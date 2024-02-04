// Select the cursor element
const cursor = document.querySelector('.cursor');

function moveCursor() {
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    // Check if the cursor is near the edge of the window
    if (mouseX > window.innerWidth - cursor.offsetWidth) {
        mouseX = window.innerWidth - cursor.offsetWidth+15;
    }

    if (mouseY > window.innerHeight - cursor.offsetHeight) {
        mouseY = window.innerHeight - cursor.offsetHeight+15;
    }

    cursor.animate({
        left: `${mouseX}px`,
        top: `${mouseY}px`
    }, { duration: 100, fill: 'forwards', easing: 'ease-in-out' });
}

// Move the cursor with mouse movement
document.addEventListener('mousemove', function(event) {
    moveCursor();
});

// Select all links and buttons in the document
const links = document.querySelectorAll('a, button');

// Add event listeners to each link
links.forEach(link => {
    link.addEventListener('mouseover', function() {
        cursor.classList.add('cursor-hover');
    });

    link.addEventListener('mouseout', function() {
        cursor.classList.remove('cursor-hover');
    });
});
