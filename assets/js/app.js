let menuBtn = document.querySelector('#menu-btn');
let navBtns = document.getElementById('mobile-view-nav');

menuBtn.addEventListener('click',function(){
    // console.log('clicked');
    if(menuBtn.classList.contains('fa-bars')){
        menuBtn.classList.replace('fa-bars','fa-times');
    }
    else menuBtn.classList.replace('fa-times','fa-bars');
    navBtns.classList.toggle('menu-show');
});