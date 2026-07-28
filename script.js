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