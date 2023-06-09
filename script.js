let searchbtn = document.querySelector('#search-btn');
let searchbar = document.querySelector('.search-bar-container');

let formBtn = document.querySelector('#login-btn');
let loginFrom = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

let videobtn = document.querySelectorAll('.vid-btn');



window.onscroll = () => {
    searchbtn.classList.remove('fa-times');
    searchbar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginFrom.classList.remove('active');
}

searchbtn.addEventListener('click', () => {
    searchbtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');
})

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

formBtn.addEventListener('click', () => {
    loginFrom.classList.add('active');
})

formClose.addEventListener('click', () => {
    loginFrom.classList.remove('active');
})

videobtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active'); 
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector("#video-slider").src = src;
    })
})

