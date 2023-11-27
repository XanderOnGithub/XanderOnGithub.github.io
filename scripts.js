const navItems = document.getElementsByClassName('navbar-item');
const cursor = document.querySelector('.cursor');

function isMobile() {
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileKeywords = ['android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];
  
    for (let keyword of mobileKeywords) {
        if (userAgent.includes(keyword)) {
            return true;
        }
    }
  
    return false;
}

if (isMobile()) {
    cursor.style.display = 'none';
}

function toggleNav() {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.toggle('hidden');
    }
}

document.addEventListener('mousemove', function(event) {
    if (!isMobile()) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const cursor = document.querySelector('.cursor');
        cursor.animate({
            left: `${mouseX}px`,
            top: `${mouseY}px`
        }, {duration: 250, fill: 'forwards', easing: 'ease-in-out'});
    }
});


// Select all links in the document
const links = document.querySelectorAll('a, button');

// Add event listeners to each link
links.forEach(link => {
    link.addEventListener('mouseover', function() {
        const cursor = document.querySelector('.cursor');
        cursor.classList.add('cursor-hover');
    });

    link.addEventListener('mouseout', function() {
        cursor.classList.remove('cursor-hover');
    });
});
