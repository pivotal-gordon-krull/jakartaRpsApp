function Match() {
    this.playMatch = (player1Throw, player2Throw, result, repo) => {
        new PlayMatchRequest(player1Throw, player2Throw, result, repo).process()
    }
}

function PlayMatchRequest(player1Throw, player2Throw, result, repo) {
    this.process = () => {
        if (invalid(player1Throw) || invalid(player2Throw)) {
            result.invalid()
            repo.save(new MatchResult(player1Throw, player2Throw, 'invalid'))
        } else if (draw()) {
            result.draw()
        } else if (player1WinsScenarios()) {
            result.player1Wins()
        } else {
            result.player2Wins()
        }
    }

    function draw() {
        return player1Throw === player2Throw
    }

    function player1WinsScenarios() {
        return player1Throw === THROW.ROCK && player2Throw === THROW.SCISSORS ||
            player1Throw === THROW.SCISSORS && player2Throw === THROW.PAPER ||
            player1Throw === THROW.PAPER && player2Throw === THROW.ROCK
    }

    function invalid(playerThrow) {
        return VALID_THROWS.includes(playerThrow) === false
    }

    const THROW = {
        ROCK: 'rock',
        SCISSORS: 'scissors',
        PAPER: 'paper'
    }

    const VALID_THROWS = [THROW.ROCK, THROW.SCISSORS, THROW.PAPER]
}

function MatchResult(player1Throw, player2Throw, result) {}

module.exports = {Match, MatchResult}


