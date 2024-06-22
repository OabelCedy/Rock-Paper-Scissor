const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 10;

    const playGame = () => {
        const rockImg = document.querySelector('.rock');
        const paperImg = document.querySelector('.paper');
        const scissorImg = document.querySelector('.scissor');

        const playerOptions = [rockImg, paperImg, scissorImg];
        const computerOptions = ['rock', 'paper', 'scissors'];

        playerOptions.forEach((option) => {
            option.addEventListener('click', () => {
                moves--;
                document.querySelector('.movesleft').textContent = `Moves Left: ${moves}`;
                const playerChoice = option.alt.toLowerCase();
                const computerChoice = computerOptions[Math.floor(Math.random() * 3)];

                const winner = winnerFunction(playerChoice, computerChoice);
                updateScore(winner);
                updateResult(playerChoice, computerChoice);

                if (moves === 0) {
                    checkGameOver();
                }
            });
        });
    };

    const winnerFunction = (playerChoice, computerChoice) => {
        if (playerChoice === computerChoice) {
            return 'tie';
        } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
                   (playerChoice === 'scissors' && computerChoice === 'paper') ||
                   (playerChoice === 'paper' && computerChoice === 'rock')) {
            return 'player';
        } else {
            return 'computer';
        }
    };

    const updateScore = (winner) => {
        if (winner === 'player') {
            playerScore++;
            document.querySelector('.p-count').textContent = `${playerScore}`;
        } else if (winner === 'computer') {
            computerScore++;
            document.querySelector('.c-count').textContent = `${computerScore}`;
        }
    };

    const updateResult = (playerChoice, computerChoice) => {
        document.querySelector('.result').textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}.`;
    };

    const checkGameOver = () => {
        if (moves === 0) {
            document.querySelector('.result').textContent = 'Game Over!';
            document.querySelector('.reload').addEventListener('click', () => {
                location.reload();
            });
        }
    };

    const showPopup = (message) => {
        const popup = document.getElementById('popup');
        const popupMessage = document.getElementById('popup-message');
        const closeButton = document.querySelector('.close-button');

        popupMessage.textContent = message;
        popup.style.display = 'block';

        closeButton.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target == popup) {
                popup.style.display = 'none';
            }
        });
    };

    playGame();
};

game();