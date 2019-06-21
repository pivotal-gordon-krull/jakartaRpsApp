const {FakeRepo} = require('../src/FakeRepo')
const {MatchResult} = require('../src/rps')

fakeRepoContract(FakeRepo)

function fakeRepoContract(Repo) {
    describe('FakeRepo', function () {
        let repo

        beforeEach(() => {
            repo = new Repo
        })

        describe('when no matches have been saved', function () {
            it('is empty', function () {
                expect(repo.isEmpty()).toBe(true)
            })
        })

        describe('when matches have been saved', function () {
            it('is not empty', function () {
                repo.save(new MatchResult())

                expect(repo.isEmpty()).toBe(false)
            })

            it('returns saved matches ', function () {
                let matchResult = new MatchResult()

                repo.save(matchResult)

                expect(repo.getAll()).toEqual([matchResult])
            })
        })

    })
}