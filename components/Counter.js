import React from 'react';
import { onCount } from '../actions';

const Counter = ({ count, onDecrement, onIncrement, onReset, clickCount, onCount }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <h3>Times the increment/decrement buttons have been clicked: {clickCount}</h3>
          <input type='number' onChange={event => onReset(event.target.value)}></input>
          <button onClick={onCount}>Change</button>
        </div>
      </div>
    );
}


export default Counter;