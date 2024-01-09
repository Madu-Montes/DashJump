
const sonic = document.querySelector('.sonic');
const villain = document.querySelector('.villain');
const gameover = document.querySelector('.gameover');
const startButton = document.querySelector('.start-game');
const restartButton = document.querySelector('.restart-game');

let gameStarted = false;
let loop;

const jump = () => {
    if (gameStarted) {
        sonic.classList.add('jump');

        setTimeout(() => {
            sonic.classList.remove('jump');
        }, 500);
    }
}

const gameOver = () => {
    gameover.style.display = 'block';
    restartButton.style.display = 'block';
    clearInterval(loop);
}

const restartGame = () => {
    // Reinicialize as variáveis ou propriedades necessárias aqui
    sonic.src = './images/sonic.gif';
    sonic.style.width = '150px';
    sonic.style.bottom = '0px';

    villain.style.animation = 'villain-animation 2s infinite linear';
    villain.style.right = '-80px';

    gameover.style.display = 'none';
    restartButton.style.display = 'none';

    // Inicie o jogo novamente
    startGame();
}

const startGame = () => {
    gameStarted = true;
    startButton.style.display = 'none'; // Esconde o botão após iniciar o jogo
    restartButton.style.display = 'none'; // Esconde o botão de reiniciar

    loop = setInterval(() => {
        const villainPosition = villain.offsetLeft;
        const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

        if (villainPosition <= 135 && villainPosition > 0 && sonicPosition < 80) {
            villain.style.animation = 'none';
            villain.style.left = `${villainPosition}px`;

            sonic.style.animation = 'none';
            sonic.style.bottom = `${sonicPosition}px`;

            sonic.src = './images/sonicover.gif';
            sonic.style.width = '250px';
            sonic.style.bottom = '-40px';
            sonic.style.marginLeft = '0px';

            gameOver();
        }
    }, 10);

    document.addEventListener('keydown', (event) => {
        if (event.keyCode === 38) {
            jump();
        }
    });

    document.addEventListener('touchstart', (event) => {
        if (event.touches.length > 0) {
            const touchY = event.touches[0].clientY;
            const villainPosition = villain.offsetLeft;

            villain.style.animation = 'none';
            villain.style.left = `${villainPosition}px`;

            sonic.style.animation = 'none';
            sonic.style.bottom = `${touchY - sonic.clientHeight}px`;

            jump();
        }
    });
};