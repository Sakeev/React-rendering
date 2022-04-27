import React, { useState } from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(null)

    function increment(){
        setCounter((prevState)=>prevState +1)
    }

    function decrement(){
    setCounter(counter - 1)
    }

    return (
        <div>
            <p className='text-count'>Вы нажали {counter ? counter : 0} раз</p>
            <button onClick={increment} className='btn-count'>+</button>
            <button onClick={decrement} className='btn-count'>-</button>
        </div>
    );
};

export default Counter;