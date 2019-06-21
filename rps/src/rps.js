function Match() {
    this.playMatch = (player1Throw, player2Throw, observer, repo) => {
        new PlayMatchRequest(player1Throw, player2Throw, observer, repo).process()
    }

    this.getHistory = function(observer, repo) {
        if (repo.isEmpty()) {
            observer.noMatches()
        } else {
            observer.matches(repo.getAll())
        }
    }
}

function PlayMatchRequest(player1Throw, player2Throw, observer, repo) {
    this.process = () => {
        if (invalid(player1Throw) || invalid(player2Throw)) {
            observer.invalid()
            repo.save(new MatchResult(player1Throw, player2Throw, 'invalid'))
        } else if (draw()) {
            observer.draw()
            repo.save(new MatchResult(player1Throw, player2Throw, 'draw'))
        } else if (player1WinsScenarios()) {
            observer.player1Wins()
            repo.save(new MatchResult(player1Throw, player2Throw, 'p1_wins'))
        } else {
            observer.player2Wins()
            repo.save(new MatchResult(player1Throw, player2Throw, 'p2_wins'))
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

function MatchResult(player1Throw, player2Throw, result) {
    this.player1Throw = player1Throw
    this.player2Throw = player2Throw
    this.result = result
}

module.exports = {Match, MatchResult}


