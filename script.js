const pizza = document.querySelector('.pizza-container');

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    pizza.style.transform = `translate(-50%, calc(-50% + ${scrollY}px))`;
});
