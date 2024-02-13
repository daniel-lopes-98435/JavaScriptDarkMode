const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function imageMode(color){

    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function darkMode(){
    document.documentElement.setAttribute('data-theme', 'dark');
    nav.style.background = 'rgb(0 0 0 / 50%)';
    textBox.style.background = 'rbg(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    localStorage.setItem('theme', 'dark');

    imageMode('dark')
}


function lightMode(){
    document.documentElement.removeAttribute('data-theme', 'dark');

    nav.style.background = 'rgb(255 255 255 / 50%)';
    textBox.style.background = 'rbg(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode'
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    localStorage.setItem('theme', 'light')
    imageMode('light')
}

function switchTheme(event){
    if(event.target.checked){
        darkMode();
    }else {
        lightMode();
    }
}
toggleSwitch.addEventListener('change',switchTheme )

const currentTheme = localStorage.getItem('theme');
if (currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        darkMode();
    }
}
console.log('Theme', currentTheme);