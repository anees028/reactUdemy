import React, {useState, useContext} from 'react';
import {ThemeContext} from './App';

const CounterHooks = ({initialCount}) => {

    const [count, setCount] = useState(initialCount)
    const style = useContext(ThemeContext)

    return (
        console.log(count),
        <div>
        <button style={style} onClick={() => setCount(prevCount => prevCount -1)}>-</button>
        <span>{count}</span>
        <button style={style} onClick={() => setCount(prevCount => prevCount +1)}>+</button>
    </div>
    );
};

export default CounterHooks;