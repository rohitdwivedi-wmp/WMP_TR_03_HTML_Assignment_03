// for Nav bar
let menuBtn = document.querySelector('#menu-btn');
let navBtns = document.getElementById('mobile-view-nav');


// for Carousel
const carousel = document.querySelector('.carousel');
const leftBtn = document.getElementById('left-move');
const rightBtn = document.getElementById('right-move');
let card = document.querySelector('.card');






// Navbar Menu btn 
menuBtn.addEventListener('click',function(){
    if(menuBtn.classList.contains('fa-bars')){
        menuBtn.classList.replace('fa-bars','fa-times');
    }
    else menuBtn.classList.replace('fa-times','fa-bars');
    navBtns.classList.toggle('menu-show');
});




// Carousel Logic
const getCardWidth =()=>{
    return card.offsetWidth + 32; // beacuse of 1 rem = 16px and 32 px is the column-gap between the cards.
}

rightBtn.addEventListener('click', () => {
    carousel.scrollLeft += getCardWidth();
});

leftBtn.addEventListener('click', () => {
    carousel.scrollLeft -= getCardWidth();
});