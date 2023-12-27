// Select all dropdown items
const dropdown = document.getElementsByClassName('dropdown')[0];

toggleDropdown();

// Toggle dropdown items visibility
function toggleDropdown() {
    dropdown.classList.toggle('hidden');

    // Toggle dropdown icon
    const dropdownIcon = document.getElementById('dropdown-button');

    if (dropdown.classList.contains('hidden')) {
        dropdownIcon.innerHTML = 'menu';
    }

    else {
        dropdownIcon.innerHTML = 'close';
    }
}
