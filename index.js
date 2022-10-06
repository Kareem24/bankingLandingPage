const hamburger = document.querySelectorAll('.Btn');
const navlink = document.querySelector('.navlink');
const main = document.getElementById('main');
hamburger.forEach((btn) => {
    btn.addEventListener('click', () => {
        navlink.classList.toggle('show__navlinks');
        main.classList.toggle('light-box');
    });
});
console.log(window)
window.addEventListener('scroll', () => { 
    if (pageYOffset > 35) {
         navlink.classList.remove('show__navlinks');
        main.classList.remove('light-box');
    }
});