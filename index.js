const sandwich = document.querySelector('.sandwich');
const nav = document.querySelector('nav');
const navList = document.querySelector('.nav-list');
    
sandwich.addEventListener('click', () => {
  sandwich.classList.toggle('open')
  if (sandwich.classList.contains('open')) {
    nav.style.maxHeight = nav.scrollHeight + 'px';
  }
  else {
    nav.style.maxHeight = '30px'
  }
})

navList.addEventListener('click', () => {
  sandwich.classList.toggle('open')
  nav.style.maxHeight = '30px';
})

const slider = document.querySelector('.slider');
const sliderContainer = slider.querySelector('.slider-container');
const innerSlider = slider.querySelector('.inner-slider');
const slides = innerSlider.querySelectorAll('a');
const sliderLength = slides.length;

const section = document.querySelector('.works-examples')

const imgWidth = 1600;
const imgHeight = 900;
const imgSizeRatio = imgWidth / imgHeight;

const cloneFirstSlide = slides[0].cloneNode(true);
const cloneLastSlide = slides[sliderLength - 1].cloneNode(true);
innerSlider.appendChild(cloneFirstSlide);
innerSlider.insertBefore(cloneLastSlide, slides[0]);

let currentSlide = 1;
let allowShift = true;
let sliderWidth;
let sliderHeight;

function updateSliderSize() {
  const descriptions = Array.from(innerSlider.querySelectorAll('.description'));
  const addHeight = Math.max(...descriptions.map(item => item.clientHeight));
  sliderWidth = section.offsetWidth * 0.8 > 560 ? 560 : section.offsetWidth * 0.8 < 280 ? 230 : section.offsetWidth * 0.8 - 5;
  sliderContainer.style.width = sliderWidth + 'px';
  slider.style.height = sliderWidth / imgSizeRatio + addHeight + 40 + 'px';
  innerSlider.style.transform = `translateX(-${currentSlide * sliderWidth}px)`
}

document.addEventListener('DOMContentLoaded', updateSliderSize());
updateSliderSize()

window.addEventListener('resize', updateSliderSize)

slider.addEventListener('click', (event) => {
  if(!allowShift) return;

  const target = event.target;
  if (target.classList.contains('arrow-right')){
    moveForward();
  }
  if (target.classList.contains('arrow-left')){
    moveBackward();
  }
})

document.addEventListener('keydown', (e) => {
  if (e.code == 'ArrowLeft') {
    moveBackward()
  }
  if (e.code == 'ArrowRight') {
    moveForward()
  }
})

function moveForward() {
  innerSlider.classList.add('shifting')
  currentSlide++;
  innerSlider.style.transform = `translateX(-${currentSlide * sliderWidth}px)`;
  allowShift = false;
}

function moveBackward() {
  innerSlider.classList.add('shifting')
  currentSlide--;
  innerSlider.style.transform = `translateX(-${currentSlide * sliderWidth}px)`;
  allowShift = false;
}

innerSlider.addEventListener('transitionend', () => {
  innerSlider.classList.remove('shifting')
  if(currentSlide == 0) {
    currentSlide = sliderLength;
  }
  if(currentSlide == 4) {
    currentSlide = 1
  }
  innerSlider.style.transform = `translateX(-${currentSlide * sliderWidth}px)`;
  allowShift = true;
})

