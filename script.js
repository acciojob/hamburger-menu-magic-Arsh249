// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.ham');
    const menu = document.querySelector('.nav-sub');

    hamburger.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});
