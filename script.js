let activeSlideNumber = 1;
let leftArrow = document.querySelector('.arrow-left');
let rightArrow = document.querySelector('.arrow-right');

let hideActiveSlide = () => {
    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
}

let showSlide = (slideNumber) => {
    hideActiveSlide();
    document.querySelector('#slide' + slideNumber).classList.add('active');
}

let showNextSlide = () => {
    activeSlideNumber = activeSlideNumber +1;
    if (activeSlideNumber > 3) {
        activeSlideNumber = 1;
        showSlide(activeSlideNumber);
    } else {
        showSlide(activeSlideNumber);
    }
}

let showPreviousSlide = () => {
    activeSlideNumber = activeSlideNumber - 1;
    if (activeSlideNumber < 1) {
        activeSlideNumber = 3;
        showSlide(activeSlideNumber);
    } else {
        showSlide(activeSlideNumber );
    }
}

for (let i = 1; i <= 3; i++) {
    let showSlideI = () => {
        showSlide(i);
        activeSlideNumber = i;
    }
    document.querySelector('#dot' + i).addEventListener('click', showSlideI);
}

leftArrow.addEventListener('click', showPreviousSlide);
rightArrow.addEventListener('click', showNextSlide);