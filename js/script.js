const mouse = document.querySelector('.mouse');
const trash = document.querySelector('.trash');
const gameover = document.querySelector('.gameover');

const jump = () => {
    mouse.classList.add('jump');

    setTimeout(() => {
        mouse.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const trashPosition = trash.offsetLeft;
    const mousePosition = +window.getComputedStyle(mouse).bottom.replace('px', '');

    console.log(mousePosition);

    if (trashPosition <= 135 && trashPosition > 0 && mousePosition < 80) {

      trash.style.animation = 'none';
      trash.style.left = '${trashPosition}px';

      mouse.style.animation = 'none';
      mouse.style.bottom = '${mousePosition}px';

      mouse.src = './images/mousedead.png'
      mouse.style.width = '130px'
      mouse.style.bottom = '-20px'
      mouse.style.marginLeft = '50px'

      gameover.style.display = 'block';

      clearInterval(loop);
        
    }

}, 10)

document.addEventListener('keydown', jump); 