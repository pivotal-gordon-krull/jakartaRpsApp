import React from 'react'

export default class RPSApp extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    submitHandler() {
        this.setState({

            result: 'INVALID!'
        })
    }

    render() {
        return <div>
            {this.state.result}
            <button onClick={this.submitHandler.bind(this)}>PLAY</button>
        </div>
    }
}