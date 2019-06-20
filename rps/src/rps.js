function Match() {
    this.playMatch = (player1Throw, player2Throw, result) => {
        new PlayMatchRequest(player1Throw, player2Throw, result).process();
    }
}

function PlayMatchRequest(player1Throw, player2Throw, result) {
    this.process = () => {
        if (!['rock', 'paper', 'scissors'].includes(player1Throw) ||
            !['rock', 'paper', 'scissors'].includes(player2Throw)) {
            result.invalid();
        }
        else if (player1Throw === player2Throw) {
            result.draw();
        }
        else if (player1Throw === 'rock' && player2Throw === 'scissors' ||
            player1Throw === 'scissors' && player2Throw === 'paper' ||
            player1Throw === 'paper' && player2Throw === 'rock') {
            result.player1Wins();

        } else {
            result.player2Wins();
        }
    }
}

module.exports = {Match}
