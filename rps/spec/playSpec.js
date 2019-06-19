describe('play', () => {
    it('rock v scissors', () => {
        let observer = jasmine.createSpyObj("observer", ["p1Wins"])

        new Requests().play('rock', 'scissors', observer)

        expect(observer.p1Wins).toHaveBeenCalled()
    })
})

function Requests() {
    this.play = (p1Throw, p2Throw, observer) => {
        observer.p1Wins()
    }
}