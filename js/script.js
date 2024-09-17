const menuBtn = document.querySelector('.menuToggle');
const menu = document.querySelector('.menu');



menuBtn.addEventListener('click', () => {

    const toggleVision = (e) => {
        e.preventDefault();
        menu.classList.toggle('hidden');
        menu.removeEventListener('click', toggleVision);
        menu.querySelector('.item').style.right = "-300px"
    }

    menu.classList.toggle('hidden');
    menu.addEventListener('click', toggleVision);
    menu.querySelector('.item').style.right = "0px"
})