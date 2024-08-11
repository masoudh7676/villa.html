let $ = document
$.addEventListener('DOMContentLoaded', () => {  //Onload Event
  const preloadOverlay = $.querySelector('.preload-overlay');
  preloadOverlay.style.display = 'none';
});
const hamMenu = $.querySelector ('.burger__menu')
var mobileMenu = $.querySelector ('.mobile__menu')
hamMenu.addEventListener('click', () => {     //Hamburger Menu Function (Toggle Buttons)
  hamMenu.classList.toggle('active')
  mobileMenu.classList.toggle('active')
})

const accordionTitles = document.querySelectorAll('.accordion-title'); // accordion start

accordionTitles.forEach((title) => {
  title.addEventListener('click', () => {
    const content = title.nextElementSibling;
    content.classList.toggle('show');
    
    if (content.classList.contains('show')) {
      content.style.height = 'auto';
      const height = content.scrollHeight;
      content.style.height = '0px';
      setTimeout(() => {
        content.style.height = `${height}px`;
      }, 0);
    } else {
      content.style.height = `${content.scrollHeight}px`;
      setTimeout(() => {
        content.style.height = '0px';
      }, 300);
    }
    const accordionTitle = title.nextElementSibling;
    accordionTitle.toggle('show');
    accordionTitle.toggle('hide'); // toggle both classes
    title.style.color = content.classList.contains('show')? '#f35525' : 'black';
  });
});             // accordion End
                            
const slider = $.querySelector('.slider');  // image slider
const slides = $.querySelectorAll('.slide');
let currentSlide = 0;
const prevButton = $.querySelector('.prev');
const nextButton = $.querySelector('.next');
function moveSlide(direction) {       //Image Slider
  const newSlide = (currentSlide + direction + slides.length) % slides.length;
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - newSlide) * 100}%)`;
  });
  currentSlide = newSlide;
}
prevButton.addEventListener('click', () => {    //Previous Image
  moveSlide(-1);
});
nextButton.addEventListener('click', () => {    //Next Image
  moveSlide(1);
});
$.addEventListener ('keydown', (e) =>{    //Left And Right Arrow Key Function For Image Slider
    if (e.key === 'ArrowLeft') {
        moveSlide(-1)
    } else if (e.key === 'ArrowRight'){
        moveSlide (1)
    }
})
$.addEventListener('keydown', (e) =>{       //When Press ESC button The Ham Menu Will Closed
  if (e.keyCode == 27){
    hamMenu.classList.remove('active')
    mobileMenu.classList.remove('active')
  }
})
$.addEventListener('click', (e) => { // Closing Mobile Menu When clicking anywhere except the menu
  if (!mobileMenu.contains(e.target) && !e.target.classList.contains('burger__menu')) {
    hamMenu.classList.remove('active');
    mobileMenu.classList.remove('active');
  }
});
window.addEventListener('resize', () => {   //When width Exceeds 730 the Hame Menu Will Disappeared
  if (window.innerWidth > 730) {
    hamMenu.classList.remove('active');
    mobileMenu.classList.remove('active');
  }
});
const titles = $.querySelectorAll('.c__title');
titles.forEach((title, index) =>{
  title.addEventListener('click', () =>{
    // Remove the 'how' class and add the 'hide' class for all other content elements
    titles.forEach((otherTitle, otherIndex) =>{
      if (otherTitle!== title) { // exclude the current title
        const otherContent = otherTitle.nextElementSibling;
        otherContent.classList.remove('show');
        otherContent.classList.add('hide');
        otherTitle.style.color = 'black';
      }
    });

    // Toggle the 'how' class and update the color for the clicked title and its content
    const content = title.nextElementSibling;
    content.classList.toggle('show');
    content.classList.toggle('hide'); // toggle both classes
    title.style.color = content.classList.contains('show')? '#f35525' : 'black';
  });
});

const buttons = $.querySelectorAll('.appartment, .villa__btn, .penthouse__btn');
const appartmentBtn = $.querySelector('.appartment')
const locations = $.querySelectorAll('.main__items, .main__items--villa, .main__items--penthouse');
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Show the corresponding content element
    locations.forEach((location, locationIndex) => {
      if (locationIndex === index && window.innerWidth >= 1120) {
        location.style.setProperty('display', 'grid', 'important');
      } else if (locationIndex === index && window.innerWidth <= 1120) {
        location.style.setProperty('display', 'flex', 'important');
        location.style.flexDirection = 'column';
        location.style.alignItems = 'center';
      } else {
        location.style.setProperty('display', 'none', 'important');
      }
    });
          // Update button colors
          buttons.forEach((otherButton) => {
            if (otherButton !== button) {
              otherButton.classList.remove('active__btn');
            } else {
              button.classList.add('active__btn');
            }
          });
  });
});


