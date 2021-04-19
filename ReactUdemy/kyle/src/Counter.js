import React, { Component } from 'react'
import {ThemeContext} from './App';

export default class Counter extends Component {
    state={
        count: this.props.initialCount,
    }

    changeCount= (value) => {
        this.setState({
            count: this.state.count + value,
            //count: this.state.count + value,
        })
    }

    render() {
        console.log(this.state.count);
        return (
            <ThemeContext.Consumer>
                {style => (
                    <div>
                        <button style={style} onClick={() => this.changeCount(-1)}>-</button>
                        <span>{this.state.count}</span>
                        <button style={style} onClick={() => {this.changeCount(+1)}}>+</button>
                    </div>
            )}
            </ThemeContext.Consumer>
        )
    }
}
