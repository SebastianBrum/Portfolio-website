const darkModeToggle = document.querySelector('.mode-toggle');
const element = document.documentElement;
const pfp = document.getElementById('profile-image');
document.addEventListener('click', () => {
    element.style.setProperty('--clr-background', '#0D1117');
    element.style.setProperty('--clr-primary', '#0A1F44');
    element.style.setProperty('--clr-secondary', '#00FFFF');
    pfp.src = 'professional-photo-dark.png';
}) 