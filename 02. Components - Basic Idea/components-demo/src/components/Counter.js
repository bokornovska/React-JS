import { useState } from "react";

const getTitle = (count) => {
    switch (count) {
        case 1:
            return 'First Blood';
        case 2:
            return 'Double Kill';
        case 3:
            return 'Tripple Kill';
        case 4:
            return 'Multi Kill';
        case 5:
            return 'Unstopable';
        default:
            return 'Counter';
    }

}
const Counter = (props) => {

    const [counter, setCounter] = useState(0);
    const [title, setTitle] = useState('Counter')

    const onIncrementCounter = (e) => {
        setCounter(state => state + 1)
    }
    const onDectementCounter = (e) => {
        setCounter(state => state - 1)
    }

    const onClearCounter = (e) => {
        setCounter(0)
    }

    return (

        <div>
            <p style={{fontSize: Math.max(counter,1) + 'em'}}>
                {counter > 5 ? 'Godlike' : getTitle(counter)}: {counter}
            </p>
            <button onClick={onDectementCounter}>-</button>
            {props.canReset && <button onClick={onClearCounter}>Clear</button>}
            {counter < 10
                ? <button onClick={onIncrementCounter}>+</button>
                : ''
            }



        </div>
    )

};

export default Counter;
