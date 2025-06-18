const darkModeToggle = document.querySelector('.mode-toggle');
const element = document.documentElement;
const pfp = document.getElementById('profile-image');
let isDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
darkModeToggle.addEventListener('click', () => {
    toggleDarkMode();
});

function toggleDarkMode() {
    if (!isDarkMode) {
        element.style.setProperty('--clr-background', '#0D1117');
        element.style.setProperty('--clr-primary', '#1F6FEB');
        element.style.setProperty('--clr-secondary', '#00FFFF');
        element.style.setProperty('--clr-accent', '#3399FF');
        pfp.src = 'professional-photo-dark.png';
        darkModeToggle.innerHTML = 'Dark';
    } else{
        element.style.setProperty('--clr-background', '#FFFFFF');
        element.style.setProperty('--clr-primary', '#87CEEB');
        element.style.setProperty('--clr-secondary', '#333333');
        element.style.setProperty('--clr-accent', '#1E90FF');
        pfp.src = 'sebastian-brummer-professional.jpg';
        darkModeToggle.innerHTML = 'Light';
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    isDarkMode = !isDarkMode;
}
toggleDarkMode();