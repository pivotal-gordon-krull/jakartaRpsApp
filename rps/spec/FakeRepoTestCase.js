const {FakeRepo} = require('../src/FakeRepo')


describe('when no matches have been saved', function () {
    it('is empty', function () {
        let repo = new FakeRepo()

        expect(repo.isEmpty()).toBe(true)
    })
})

describe('when matches have been saved', function () {

})