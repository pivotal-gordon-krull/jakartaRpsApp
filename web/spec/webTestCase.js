import React from 'react'
import * as ReactDOM from 'react-dom'
import RPSApp from '../src/RPSApp'

describe('play form', function () {
    let domFixture

    beforeEach(function () {
        setupDOM()
    })

    afterEach(function () {
        cleanupDOM()
    })

    describe('when the play use case tells the UI that the input is invalid', () => {
        beforeEach(function () {
            let matchTestDouble =
                {
                    play: function (player1Throw, player2Throw, result) {
                        return result.invalidInput()
                    }
                }
            renderApp(matchTestDouble)
        })

        it('tells the user that their input is invalid', () => {
            expect(page()).not.toContain('INVALID!')

            submitForm()

            expect(page()).toContain('INVALID!')
        })
    })

    function setupDOM() {
        domFixture = document.createElement('div')
        document.body.appendChild(domFixture)
    }

    function cleanupDOM() {
        domFixture.remove()
    }

    function renderApp(match) {
        ReactDOM.render(
            <RPSApp match={match}/>,
            domFixture
        )
    }

    function page() {
        return domFixture.innerText
    }

    function submitForm() {
        document.querySelector('button').click()
    }
})
