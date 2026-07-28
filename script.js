const trigger = document.getElementById('ddTrigger');
const menu = document.getElementById('ddMenu');
const selectedValue = document.getElementById('selectedValue');
const items = menu.querySelectorAll('.dropdown-item');


trigger.addEventListener('click', (e) => {
    menu.classList.toggle('open');
    e.stopPropagation();
});

items.forEach(item => {
    item.addEventListener('click', (e) => {
        selectedValue.textContent = item.dataset.value;
        menu.classList.remove('open');
        e.stopPropagation();
    });
});

document.addEventListener('click', () => {
    menu.classList.remove('open');
});




const track = document.getElementById('carousel');
const slides = track.querySelectorAll('.bgimg');
let index = 0;
let timer;

function goTo(i) {
  index = (i + slides.length) % slides.length;
  track.scrollTo({ left: track.clientWidth * index, behavior: 'smooth' });
}

function startAutoplay() {
  clearInterval(timer);
  timer = setInterval(() => goTo(index + 1), 4000); 
}

document.getElementById('rightsidebtn').addEventListener('click', () => {
  goTo(index + 1);
  startAutoplay(); 
});
document.getElementById('leftsidebtn').addEventListener('click', () => {
  goTo(index - 1);
  startAutoplay();
});

track.addEventListener('scroll', () => {
  index = Math.round(track.scrollLeft / track.clientWidth);
});

startAutoplay();