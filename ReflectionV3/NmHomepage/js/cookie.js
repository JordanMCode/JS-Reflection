const popUpAccept = document.querySelector('.accept-cookie');
const popUpDecline = document.querySelector('.decline-cookie');
const cookieAccept = localStorage.getItem('cookie');
const popUp = document.querySelector('.cookie-popup');
const popUpBg = document.querySelector('.cookie-bg');


window.addEventListener('DOMContentLoaded', function () {
    if (cookieAccept === 'true') {
        popUp.style.display = "none";
        popUpBg.style.display = "none";
    };

    popUpAccept.addEventListener('click', () => {
        localStorage.setItem('cookie', 'true');
        popUp.style.display = "none";
        popUpBg.style.display = "none";
    });

    popUpDecline.addEventListener('click', () => {
        popUp.style.display = "none";
        popUpBg.style.display = "none";
    })
})