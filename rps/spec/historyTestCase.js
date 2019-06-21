const {Match, MatchResult} = require('../src/rps')

describe('history', () => {
    describe('no one has played', function () {
        it('tells the observer that there are no matches', function () {
            let observer = jasmine.createSpyObj('observer', ['noMatches'])

            let stubRepo = {
                isEmpty() { return true }
            }

            new Match().getHistory(observer, stubRepo)

            expect(observer.noMatches).toHaveBeenCalled()
        })
    })

    describe('returning matches', function () {
        it('returns all game results to the observer', function () {
            let observer = jasmine.createSpyObj('observer', ['matches'])

            let stubRepo = {
                isEmpty() { return false },
                getAll() { return new MatchResult('rock', 'sailboat', 'invalid')}
            }

            new Match().getHistory(observer, stubRepo)

            expect(observer.matches).toHaveBeenCalledWith(
                new MatchResult('rock', 'sailboat', 'invalid')
            )

        })
    })
        
    
    it('should save the game result after a game has been played and is invalid', function () {
        let spyRepo = jasmine.createSpyObj('repo', ['save']);

        let observer = {
            invalid() {
            }
        }

        new Match().playMatch('rock', 'sailboat', observer, spyRepo);

        expect(spyRepo.save).toHaveBeenCalledWith(new MatchResult('rock', 'sailboat', 'invalid'))
    });

    it('should save the game result after a game has been played and p1 wins', function () {
        let spyRepo = jasmine.createSpyObj('repo', ['save']);

        let observer = {
            player1Wins() {
            }
        }

        new Match().playMatch('rock', 'scissors', observer, spyRepo);

        expect(spyRepo.save).toHaveBeenCalledWith(new MatchResult('rock', 'scissors', 'p1_wins'))
    });

    it('should save the game result after a game has been played and p2 wins', function () {
        let spyRepo = jasmine.createSpyObj('repo', ['save']);

        let observer = {
            player2Wins() {
            }
        }

        new Match().playMatch('scissors', 'rock', observer, spyRepo);

        expect(spyRepo.save).toHaveBeenCalledWith(new MatchResult('scissors', 'rock', 'p2_wins'))
    });

    it('should save the game result after a game has been played and it is a draw', function () {
        let spyRepo = jasmine.createSpyObj('repo', ['save']);

        let observer = {
            draw() {
            }
        }

        new Match().playMatch('rock', 'rock', observer, spyRepo);

        expect(spyRepo.save).toHaveBeenCalledWith(new MatchResult('rock', 'rock', 'draw'))
    });
});