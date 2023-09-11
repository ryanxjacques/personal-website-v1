/**
 * Menu activity
 */

const menuIcon = document.getElementById('menu-icon');

// Dropdown elements
const githubIcon = document.getElementById('github-icon')
const linkedinIcon = document.getElementById('linkedin-icon')
const emailIcon = document.getElementById('email-icon')
const darkLightModeSmallMediaIcon = document.getElementById('dark-light-mode-small-media-icon')
const closeMenuIcon = document.getElementById('close-menu-icon');

const dropdownIcons = [githubIcon, linkedinIcon, emailIcon, darkLightModeSmallMediaIcon, closeMenuIcon];

/**
 * Toggling Menu
 */


const openMenuTransition = () => {
    // Transition duration
    let transitionDuration = 400;
    // Hide the menu item
    menuIcon.style.display = "none";

    // Drop down the github, linkedin, and mail icons in the same place
    for (const icon of dropdownIcons) {

        // Set initial opacity (e.g., fully transparent)
        icon.style.opacity = "0";
        icon.style.display = "block";

        // Apply a CSS transition to gradually change opacity
        icon.style.transition = `opacity ${transitionDuration}ms cubic-bezier(0.25, 0.1, 0.25, 1)`;

        // Trigger a reflow (necessary for the transition to take effect)
        icon.offsetWidth;

        // Set the opacity to fully opaque
        icon.style.opacity = "1";

        transitionDuration += 400;
    }
}

const showMenuTransition = () => {
    menuIcon.style.display = "block";
    menuIcon.style.opacity = "0";

    // Apply a CSS transition to gradually change opacity
    menuIcon.style.transition = "opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)";

    // Trigger a reflow (necessary for the transition to take effect)
    menuIcon.offsetWidth;

    // Set the opacity to fully opaque
    menuIcon.style.opacity = "1";
}



const closeMenuTransition = () => {
    // Hide the menu item
    menuIcon.style.display = "none";

    // Drop down the github, linkedin, and mail icons in the same place
    const reverseDropdownIcons = [...dropdownIcons].reverse();

    // Calculate the total animation duration
    let totalTransitionDuration = 400;

    for (const icon of reverseDropdownIcons) {
        // Apply a CSS transition to gradually change opacity
        icon.style.transition = `opacity ${totalTransitionDuration}ms cubic-bezier(0.25, 0.1, 0.25, 1)`;

        // Trigger a reflow (necessary for the transition to take effect)
        icon.offsetWidth;

        // Set the opacity to fully transparent
        icon.style.opacity = "0";

        totalTransitionDuration += 400;
    }

    // After the total animation duration, set up the transition finisher
    setTimeout(() => {
        // Hide all the icons and reset opacity
        for (const icon of dropdownIcons) {
            icon.style.display = "none";
            icon.style.opacity = "1";
        }

        // Show the menu item
        showMenuTransition();
        // Set status
    }, totalTransitionDuration - 1000); // subtract 400 for starting duration
}


// Function to open and close menu
const toggleMenu = () => {

    // Menu is closed 
    if (menuIcon.dataset.status === "closed") {
          
        //Animate icon dropdown
        openMenuTransition();   
        // Swap status
        menuIcon.dataset.status = "open";
    }

    else {
        // Remove the github, linkedin, and mail icons
        closeMenuTransition();
        // Swap status
        menuIcon.dataset.status = "closed";
        
    }

}

menuIcon.addEventListener('click', () => {
    toggleMenu();
});

closeMenuIcon.addEventListener('click', () => {
    toggleMenu();
});


/**
 * Resize windows events
 */



/* Replace the buttons back to default landscape mode and close the menu.*/
const landscapeResize = () => {
    if (menuIcon.dataset.status === "open") {
        
        // Close menu
        darkLightModeSmallMediaIcon.style.display = "none"; // Hide light-dark-mode icon
        closeMenuIcon.style.display = "none"; // Hide close menu icon
        menuIcon.dataset.status = "closed";
    }
    // Reset css only if menu is visible
    if (menuIcon.style.display === "block") {
        githubIcon.style.display = "block";
        linkedinIcon.style.display = "block";
        emailIcon.style.display = "block"; 
        menuIcon.style.display = "none"; 
    }   
}

/* Collapse buttons into menu */
const portraitResize = () => {
    if (menuIcon.dataset.status === "closed") {
        for (const icon of dropdownIcons) {
            icon.style.display = "none";
        }
        menuIcon.style.display = "block";
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 750) { landscapeResize(); }
    else { portraitResize(); }
});

