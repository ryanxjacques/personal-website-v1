/**
 * Handle menu clicks and displays
 */

const menu = document.getElementById('menu-icon');

// One liner function:
// Creds: https://stackoverflow.com/users/1602301/chickens
const addCSS = (css) => document.head.appendChild(document.createElement("style")).innerHTML = css;

// Usage: 
// addCSS("body{ background:red; }")

const hideMenuCSS = `
    #menu-icon {
        display: none;
    }
`


const dropdownIconsCSS = `
    #github-icon, #linkedin-icon, #email-icon, #dark-light-mode-icon {
        display: block;
    }
`;


menu.addEventListener('click', (e) => {

    console.log('click!');


    // Hide the menu item
    addCSS(hideMenuCSS)

    const rightNavigation = document.getElementById('navigation-right')

    //Append the light mode and dark mode icons to the menu container (.navigation-right)
    rightNavigation.appendChild(document.getElementById('dark-light-mode-icon'));

    // Determine the light mode and day mode!

    // Append the fragment to the menu container
    document.getElementsByClassName('')

    // Drop down the github, linkedin, and mail icons in the same place

    // Contain them in a ghost white background



    addCSS(dropdownIconsCSS);



});