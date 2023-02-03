const navber = document.querySelector('.mobil_navbar');
const header = document.querySelector('.header');

const activenavber = () => {
    header.classList.toggle('active');
}
navber.addEventListener('click', () => activenavber());