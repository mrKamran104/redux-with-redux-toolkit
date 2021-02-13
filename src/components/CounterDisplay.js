import React from 'react';
import { useSelector } from 'react-redux'


function CounterDisplay() {
    const counter = useSelector((state) => {
        return state.counter.count
    })
    return (
        <div>
            <h2>CounterDisplay Component</h2>
            Counter: {counter}
        </div>
    );
}

export default CounterDisplay;