import React from 'react'
import * as ReactDOM from 'react-dom'
import RPSApp from '../src/RPSApp'

describe("play form", function () {
    describe('when the play use case tells the UI that the input is invalid', function () {
        it('tells the user that their input is invalid', function () {
            let domFixture = document.createElement('div')
            document.body.appendChild(domFixture)

            let alwaysInvalidRequest = {
                play: (player1Throw, player2Throw, result) => result.invalid()
            }

            ReactDOM.render(<RPSApp requests={alwaysInvalidRequest} />, domFixture)
            expect(domFixture.innerText).not.toContain('INVALID!')
            document.querySelector('button').click()
            expect(domFixture.innerText).toContain('INVALID!')
        })
    })
})