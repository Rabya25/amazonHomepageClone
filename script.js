const ddTrigger = document.getElementById('ddTrigger');
const menu = document.getElementById('ddMenu');
const selectedValue = document.getElementById('selectedValue');
const items = menu.querySelectorAll('.dropdown-item');

ddTrigger.addEventListener('click', (e) => {
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


const hoverTriggers = document.querySelectorAll('[data-trigger]');
const pageOverlay = document.getElementById('pageOverlay');

hoverTriggers.forEach(t => {
  t.addEventListener('mouseenter', () => pageOverlay.classList.add('active'));
  t.addEventListener('mouseleave', () => pageOverlay.classList.remove('active'));
});


const menuTrigger = document.getElementById('menuTrigger');
const sideMenu = document.getElementById('sideMenu');
const sideMenuOverlay = document.getElementById('pageOverlay');
const closeBtn = document.getElementById('closeBtn');

function openMenu() {
  sideMenu.classList.add('open');
  sideMenuOverlay.classList.add('active', 'menu-active'); 
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  sideMenu.classList.remove('open');
  sideMenuOverlay.classList.remove('active', 'menu-active'); 
  document.body.style.overflow = '';
}

menuTrigger.addEventListener('click', openMenu);
sideMenuOverlay.addEventListener('click', closeMenu);
closeBtn.addEventListener('click', closeMenu);


document.querySelectorAll('.see-all').forEach(btn => {
  const extra = btn.previousElementSibling;
  btn.addEventListener('click', () => {
    const isOpen = extra.classList.toggle('expanded');
    btn.classList.toggle('expanded', isOpen);
    btn.firstChild.textContent = isOpen ? 'See less ' : 'See all ';
  });
});


const sliderWrappers = document.querySelectorAll('.slider-wrapper');

sliderWrappers.forEach(wrapper => {
    const track = wrapper.querySelector('.product-track');
    const prevBtn = wrapper.querySelector('.prev-btn');
    const nextBtn = wrapper.querySelector('.next-btn');

    if (track && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: 600, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -600, behavior: 'smooth' });
        });
    }
});