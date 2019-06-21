const {Match} = require('../src/rps')


describe('play', () => {
    let match, observer, spyRepo;

    beforeEach(() => {
        match = new Match();
        spyRepo = jasmine.createSpyObj('repo', ['save'])
    });

    describe('player 1 wins scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['player1Wins']);
        });

        it('rock vs scissors', function () {
            match.playMatch('rock', 'scissors', observer, spyRepo);

            expect(observer.player1Wins).toHaveBeenCalled();
        });

        it('scissors vs paper', function () {
            match.playMatch('scissors', 'paper', observer, spyRepo);

            expect(observer.player1Wins).toHaveBeenCalled();
        });

        it('paper vs rock', function () {
            match.playMatch('paper', 'rock', observer, spyRepo);

            expect(observer.player1Wins).toHaveBeenCalled();
        });
    });

    describe('player 2 wins scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['player2Wins']);
        });

        it('scissors vs rock', function () {
            match.playMatch('scissors', 'rock', observer, spyRepo);

            expect(observer.player2Wins).toHaveBeenCalled();
        });

        it('paper vs scissors', function () {
            match.playMatch('paper', 'scissors', observer, spyRepo);

            expect(observer.player2Wins).toHaveBeenCalled();
        });

        it('rock vs paper', function () {
            match.playMatch('rock', 'paper', observer, spyRepo);

            expect(observer.player2Wins).toHaveBeenCalled();
        });
    });

    describe('draw scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['draw']);
        });

        it('rock vs rock', function () {
            match.playMatch('rock', 'rock', observer, spyRepo);

            expect(observer.draw).toHaveBeenCalled();
        });

        it('paper vs paper', function () {
            match.playMatch('paper', 'paper', observer, spyRepo);

            expect(observer.draw).toHaveBeenCalled();
        });

        it('scissors vs scissors', function () {
            match.playMatch('scissors', 'scissors', observer, spyRepo);

            expect(observer.draw).toHaveBeenCalled();
        });

    });

    describe('invalid scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['invalid']);
        });

        it('invalid vs rock', function () {
            match.playMatch('invalid', 'rock', observer, spyRepo);

            expect(observer.invalid).toHaveBeenCalled();
        });

        it('rock vs invalid', function () {
            match.playMatch('rock', 'invalid', observer, spyRepo);

            expect(observer.invalid).toHaveBeenCalled();
        });

        it('invalid vs invalid', function () {
            match.playMatch('invalid', 'invalid', observer, spyRepo);

            expect(observer.invalid).toHaveBeenCalled();
        });
    });
});

