const burger = document.querySelector('.header__burger');
    burger.addEventListener('click', showMenu);

function showMenu(){
    const menu = document.querySelector('.nav');
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    
}