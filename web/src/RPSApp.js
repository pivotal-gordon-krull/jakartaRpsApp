import React from 'react'

export default class RPSApp extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    inputChanged(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    submitHandler() {
        this.props.match.play(this.state.p1Throw, this.state.p2Throw, this)
    }

    player1Wins() {
        this.setState({result: 'P1 Wins!!'})
    }

    player2Wins() {
        this.setState({result: 'P2 Wins!!'})
    }

    draw() {
        this.setState({result: 'DRAW!'})
    }

    invalid() {
        this.setState({result: 'INVALID!'})
    }

    render() {
        return (
            <div>
                {this.state.result}
                <input name="p1Throw" onChange={this.inputChanged.bind(this)}/>
                <input name="p2Throw" onChange={this.inputChanged.bind(this)}/>
                <button onClick={this.submitHandler.bind(this)}>PLAY</button>
            </div>
        )
    }
}