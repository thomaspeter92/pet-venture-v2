var leftArrow = document.querySelector('#leftArrow');
    var rightArrow = document.querySelector('#rightArrow')
    var profileContainer = document.querySelector('.profile-carousel__container')
    let translateLeft = 0
    leftArrow.addEventListener('click', function() {
        if(translateLeft == 0) {
            console.log('hi')

        return null;
        } else {
            translateLeft -= 650;
            profileContainer.style.transform = `translateX(-${translateLeft}px)`;
            console.log(translateLeft);
        }
    })
    rightArrow.addEventListener('click', function(){
        if(translateLeft >= 1300) {
            console.log('hi')
            return null;
        } else {
            translateLeft += 650;
            profileContainer.style.transform = `translateX(-${translateLeft}px)`;
            console.log(translateLeft);
        }
    })
