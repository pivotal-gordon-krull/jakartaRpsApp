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

        it('by default does not display a game result', () => {
            expect(page()).not.toContain('INVALID!')
        })

        it('displays INVALID when clicking play', () => {
            submitForm()


            expect(page()).toContain('INVALID!')
        })
    })

    describe('when the play use case tells the UI that the result is a draw', () => {
        beforeEach(() => {
            renderApp({play: (player1Throw, player2Throw, result) => result.draw()})
        })

        it('by default does not display a game result', () => {
            expect(page()).not.toContain('DRAW!')
        })

        it('displays DRAW when clicking play', () => {
            submitForm()
            expect(page()).toContain('DRAW!')
        })
    })

    describe('when the play use case tells the UI that the result is player 1 wins', () => {
        beforeEach(() => {
            renderApp({play: (player1Throw, player2Throw, result) => result.player1Wins()})
        })

        it('by default does not display a game result', () => {
            expect(page()).not.toContain('P1 Wins!!')
        })

        it('displays P1 Wins!! when clicking play', () => {
            submitForm()
            expect(page()).toContain('P1 Wins!!')
        })
    })

    describe('when the play use case tells the UI that the result is player 2 wins', () => {
        beforeEach(() => {
            renderApp({play: (player1Throw, player2Throw, result) => result.player2Wins()})
        })

        it('by default does not display a game result', () => {
            expect(page()).not.toContain('P2 Wins!!')
        })

        it('displays P2 Wins!! when clicking play', () => {
            submitForm()
            expect(page()).toContain('P2 Wins!!')
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