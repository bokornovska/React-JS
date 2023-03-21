// import React from 'react';
import {useState} from 'react';

const Timer = (props) => {

    // const stateResult = React.useState();

    // stateResult[0] -> value
    // stateResult[1] -> function

    const [seconds, setSeconds] = useState(props.start);

    //not Good practice (useEffect is better)
    setTimeout(() => {
        // setSeconds(seconds+1)
        // setSeconds((oldSeconds) => oldSeconds + 1)
        setSeconds(state => state + 1)
    }, 1000)

    return (
        <div>
            <h2>Timer</h2>
            Time: {seconds}s

        </div>

    )
}

export default Timer;