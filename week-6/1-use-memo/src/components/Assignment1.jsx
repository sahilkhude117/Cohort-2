import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    let expensiveValue = 0;
    
    function fact(input){
        if(input == 0){
            return;
        }
        if (input == 1){
            return 1;
        }
        return input*fact(input - 1);
    }

    useMemo(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
          expensiveValue = fact(input);
    },[input])
    // Your solution ends here

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}