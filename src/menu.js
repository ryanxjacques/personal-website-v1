/**
 * Handle menu clicks and displays
 */

const menuIcon = document.getElementById('menu-icon');
const closeMenuIcon = document.getElementById('close-menu-icon');

const dropdownIcons = ["github-icon", "linkedin-icon", "email-icon", "dark-light-mode-small-media-icon", "close-menu-icon"];

// Function to open and close menu
const toggleMenu = () => {

    // Menu is closed 
    if (menuIcon.dataset.status === "closed") {
        
        // Hide the menu item
        menuIcon.style.display = "none";

        // Drop down the github, linkedin, and mail icons in the same place
        for (const icon of dropdownIcons) {
            document.getElementById(icon).style.display = "block";
        }
        menuIcon.dataset.status = "open";
    }
    else {
        // Remove the github, linkedin, and mail icons
        for (const icon of dropdownIcons) {
            document.getElementById(icon).style.display = "none";
        }
        // Show the menu item
        menuIcon.style.display = "block";

        menuIcon.dataset.status = "closed";
    }
}

menuIcon.addEventListener('click', () => {
    toggleMenu();
});

closeMenuIcon.addEventListener('click', () => {
    toggleMenu();
});

/* Replace the buttons back to default landscape mode and close the menu.*/
const landscapeResize = () => {
    if (menuIcon.dataset.status === "open") {
        // Close menu
        toggleMenu();
    }
    // Reset css only if menu is visible
    if (menuIcon.style.display === "block") {
        document.getElementById(dropdownIcons[0]).style.display = "block"; // Github icon 
        document.getElementById(dropdownIcons[1]).style.display = "block"; // Linkedin icon 
        document.getElementById(dropdownIcons[2]).style.display = "block"; // Email icon
        menuIcon.style.display = "none"; // menu
    }
}

/* Collapse buttons into menu */
const portraitResize = () => {
    if (menuIcon.dataset.status === "closed") {
        for (const icon of dropdownIcons) {
            document.getElementById(icon).style.display = "none";
            menuIcon.style.display = "block";
        }
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 750) { landscapeResize(); }
    else { portraitResize(); }
});