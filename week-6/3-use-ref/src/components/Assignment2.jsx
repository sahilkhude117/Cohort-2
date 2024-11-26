/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [count , setCount] = useState(0);

    const numberOfTimesRendered = useRef();

    const handleReRender = () => {
        // Update state to force re-render
        setCount(count + 1);
    };

    numberOfTimesRendered.current = numberOfTimesRendered.current + 1;

    return (
        <div>
            <p>This component has rendered {numberOfTimesRendered} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
}