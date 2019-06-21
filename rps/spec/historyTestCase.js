const {Match, MatchResult} = require('../src/rps')

describe('history', () => {
    it('should save the game result after a game has been played and is invalid', function () {
        let spyRepo = jasmine.createSpyObj('repo', ['save']);

        let playMatchResult = {
            invalid() {
            }
        }

        new Match().playMatch('rock', 'sailboat', playMatchResult, spyRepo);

        expect(spyRepo.save).toHaveBeenCalledWith(new MatchResult('rock', 'sailboat', 'invalid'))
    });

    it('should save the game result after a game has been played and p1 wins', function () {
        let spyRepo = jasmine.createSpyObj('repo', ['save']);

        let playMatchResult = {
            player1Wins() {
            }
        }

        new Match().playMatch('rock', 'scissors', playMatchResult, spyRepo);

        expect(spyRepo.save).toHaveBeenCalledWith(new MatchResult('rock', 'scissors', 'p1_wins'))
    });

    it('should save the game result after a game has been played and p2 wins', function () {
        let spyRepo = jasmine.createSpyObj('repo', ['save']);

        let playMatchResult = {
            player2Wins() {
            }
        }

        new Match().playMatch('scissors', 'rock', playMatchResult, spyRepo);

        expect(spyRepo.save).toHaveBeenCalledWith(new MatchResult('scissors', 'rock', 'p2_wins'))
    });

    it('should save the game result after a game has been played and it is a draw', function () {
        let spyRepo = jasmine.createSpyObj('repo', ['save']);

        let playMatchResult = {
            draw() {
            }
        }

        new Match().playMatch('rock', 'rock', playMatchResult, spyRepo);

        expect(spyRepo.save).toHaveBeenCalledWith(new MatchResult('rock', 'rock', 'draw'))
    });
});