const sonic = document.querySelector('.sonic');
const villain = document.querySelector('.villain');
const gameover = document.querySelector('.gameover');

const jump = () => {
    sonic.classList.add('jump');

    setTimeout(() => {
        sonic.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const villainPosition = villain.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

    console.log(sonicPosition);

    if (villainPosition <= 135 && villainPosition > 0 && sonicPosition < 80) {

        villain.style.animation = 'none';
        villain.style.left = '${villainPosition}px';

        sonic.style.animation = 'none';
        sonic.style.bottom = '${sonicPosition}px';

        sonic.src = './images/sonicover.gif'
        sonic.style.width = '250px'
        sonic.style.bottom = '-40px'
        sonic.style.marginLeft = '0px'

        gameover.style.display = 'block';

        clearInterval(loop);

    }

}, 10)

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 38) {
        jump();
    }
});

document.addEventListener('touchstart', () => {
    jump();
});