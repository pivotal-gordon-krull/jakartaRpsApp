function Match() {
    this.playMatch = (player1Throw, player2Throw, observer) => {
        if (!['rock', 'paper', 'scissors'].includes(player1Throw) ||
            !['rock', 'paper', 'scissors'].includes(player2Throw)) {
            observer.invalid();
        }
        else if (player1Throw === player2Throw) {
            observer.draw();
        }
        else if (player1Throw === 'rock' && player2Throw === 'scissors' ||
            player1Throw === 'scissors' && player2Throw === 'paper' ||
            player1Throw === 'paper' && player2Throw === 'rock') {
            observer.player1Wins();

        } else {
            observer.player2Wins();
        }
    }
}

module.exports = {Match}
