const {Match, MatchResult} = require('../src/rps')


describe('play', () => {
    let match, result, spyRepo;

    beforeEach(() => {
        match = new Match();
        spyRepo = jasmine.createSpyObj('repo', ['save'])
    });

    it('saves a game result after a game has been played', () => {
        let playMatchResult = {invalid() {}}

        new Match().playMatch('rock', 'sailboat', playMatchResult, spyRepo)

        expect(spyRepo.save).toHaveBeenCalledWith(
            new MatchResult('rock', 'sailboat', 'invalid')
        )
    })

    describe('player 1 wins scenarios', () => {
        beforeEach(() => {
            result = jasmine.createSpyObj('result', ['player1Wins']);
        });

        it('rock vs scissors', function () {
            match.playMatch('rock', 'scissors', result);

            expect(result.player1Wins).toHaveBeenCalled();
        });

        it('scissors vs paper', function () {
            match.playMatch('scissors', 'paper', result);

            expect(result.player1Wins).toHaveBeenCalled();
        });

        it('paper vs rock', function () {
            match.playMatch('paper', 'rock', result);

            expect(result.player1Wins).toHaveBeenCalled();
        });
    });

    describe('player 2 wins scenarios', () => {
        beforeEach(() => {
            result = jasmine.createSpyObj('result', ['player2Wins']);
        });

        it('scissors vs rock', function () {
            match.playMatch('scissors', 'rock', result);

            expect(result.player2Wins).toHaveBeenCalled();
        });

        it('paper vs scissors', function () {
            match.playMatch('paper', 'scissors', result);

            expect(result.player2Wins).toHaveBeenCalled();
        });

        it('rock vs paper', function () {
            match.playMatch('rock', 'paper', result);

            expect(result.player2Wins).toHaveBeenCalled();
        });
    });

    describe('draw scenarios', () => {
        beforeEach(() => {
            result = jasmine.createSpyObj('result', ['draw']);
        });

        it('rock vs rock', function () {
            match.playMatch('rock', 'rock', result);

            expect(result.draw).toHaveBeenCalled();
        });

        it('paper vs paper', function () {
            match.playMatch('paper', 'paper', result);

            expect(result.draw).toHaveBeenCalled();
        });

        it('scissors vs scissors', function () {
            match.playMatch('scissors', 'scissors', result);

            expect(result.draw).toHaveBeenCalled();
        });

    });

    describe('invalid scenarios', () => {
        beforeEach(() => {
            result = jasmine.createSpyObj('result', ['invalid']);
        });

        it('invalid vs rock', function () {
            match.playMatch('invalid', 'rock', result, spyRepo);

            expect(result.invalid).toHaveBeenCalled();
        });

        it('rock vs invalid', function () {
            match.playMatch('rock', 'invalid', result, spyRepo);

            expect(result.invalid).toHaveBeenCalled();
        });

        it('invalid vs invalid', function () {
            match.playMatch('invalid', 'invalid', result, spyRepo);

            expect(result.invalid).toHaveBeenCalled();
        });
    });
});

