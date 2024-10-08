import React, { Component } from 'react'

export default class Class extends Component {

    constructor(props) {
        super(props)
        this.state = { count: 0 };

    }

    increment = () => {
        this.setState({count : this.state.count + 1})
    }
    render() {
        return (
            <div>
                <h1 className='text-3xl font-bold text-red-900'>{this.state.count}</h1>

                <button className='text-3xl font-bold text-red-900' onClick={this.increment}>Increment</button>
            </div>
        )
    }
}
