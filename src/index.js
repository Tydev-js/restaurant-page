import homepageContent from './homepage.js';
import menuContent from './menu.js';
const contentDiv = document.getElementById('content');

homepageContent();

homeButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    homepageContent();
});

menuButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    menuContent();
});

aboutButton.addEventListener('click', () => {
    alert('How does it know???')
})


