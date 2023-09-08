/**
 * Handle menu clicks and displays
 */

const menu = document.getElementById('menu-icon');

const closeMenu = document.getElementById('close-menu-icon');

// One liner function:
// Creds: https://stackoverflow.com/users/1602301/chickens
const addCSS = (css) => document.head.appendChild(document.createElement("style")).innerHTML = css;


const hideMenuCSS = `
    #menu-icon {
        display: none;
    }
`;

const dropdownIcons = ["github-icon", "linkedin-icon", "email-icon", "dark-light-mode-small-media-icon", "close-menu-icon"]

menu.addEventListener('click', (e) => {

    // Hide the menu item
    menu.style.display = "none";

    // Drop down the github, linkedin, and mail icons in the same place
    for (const icon of dropdownIcons) {
        document.getElementById(icon).style.display = "block";
    }
    // Contain them in a ghost white background??
});

closeMenu.addEventListener('click', (e) => {
    // Remove the github, linkedin, and mail icons
        for (const icon of dropdownIcons) {
            document.getElementById(icon).style.display = "none";
        }
    // Show the menu item
    menu.style.display = "block";
});