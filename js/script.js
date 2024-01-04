const mouse = document.querySelector('.mouse');
const trash = document.querySelector('.trash');

const jump = () => {
    mouse.classList.add('jump');

    setTimeout(() => {
        mouse.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const trashPosition = trash.offsetLeft;

    if (trashPosition <= 135) {

      trash.style.animation = 'none';
      trash.style.left = '${trashPosition}px';
        
    }

}, 10)

document.addEventListener('keydown', jump); 