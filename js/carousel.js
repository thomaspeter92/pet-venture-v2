let leftArrow = document.querySelector('#leftArrow');
let rightArrow = document.querySelector('#rightArrow')
let profileCarousel = document.querySelector('.profile-carousel')

let scrollAmount = 0;
let scrollMin = 0
let scrollMax = profileCarousel.clientWidth

leftArrow.addEventListener('click', function() {

    if(scrollAmount == scrollMin) return null;

    scrollAmount -= 500;

    profileCarousel.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
      });

})
rightArrow.addEventListener('click', function(){

    if(scrollAmount >= scrollMax) return null;

    scrollAmount += 500;

    profileCarousel.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
      });

})
