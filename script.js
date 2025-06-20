const darkModeToggle = document.querySelector('.mode-toggle');
const element = document.documentElement;
const pfp = document.getElementById('profile-image');
const about = document.querySelector('.about-me-container');
//Gets boolean value from local storage to determine if dark mode is enabled or not.
let isDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
//Adds an event listener to the dark mode toggle button to switch between light and dark modes.
darkModeToggle.addEventListener('click', () => {
    toggleDarkMode();
});
//This function toggles dark mode styles and changes the profile picture respecively.
function toggleDarkMode() {
    if (!isDarkMode) {
        element.style.setProperty('--clr-background', '#0D1117');
        element.style.setProperty('--clr-primary', '#1F6FEB');
        element.style.setProperty('--clr-secondary', '#00FFFF');
        element.style.setProperty('--clr-accent', '#3B82F6');
        pfp.src = 'professional-photo-dark.png';
        pfp.style.boxShadow = '2px 2px 30px var(--clr-secondary), -2px -2px 30px var(--clr-secondary), 2px -2px 30px var(--clr-secondary), -2px 2px 30px var(--clr-secondary)';
        about.style.boxShadow = '5px 5px 40px var(--clr-secondary), -5px -5px 40px var(--clr-secondary), 5px -5px 40px var(--clr-secondary), -5px 5px 40px var(--clr-secondary)';
        darkModeToggle.innerHTML = 'Dark';
    } else{
        element.style.setProperty('--clr-background', '#FFFFFF');
        element.style.setProperty('--clr-primary', '#87CEEB');
        element.style.setProperty('--clr-secondary', '#333333');
        element.style.setProperty('--clr-accent', '#1E90FF');
        pfp.src = 'sebastian-brummer-professional.jpg';
        pfp.style.boxShadow = '10px 10px 4px rgba(0, 0, 0, 0.1)';
        about.style.boxShadow = '10px 10px 10px rgba(0, 0, 0, 0.2)';
        darkModeToggle.innerHTML = 'Light';
    }
    //Saves the current mode to local storage to persist the setting across page reloads.
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    isDarkMode = !isDarkMode;
}
// Initialize dark mode based on saved preference
toggleDarkMode();