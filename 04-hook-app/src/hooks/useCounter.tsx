import { useState } from "react";

export const useCounter = (initialValue: number = 1 ) => {

    const [ counter, setCounter] = useState<number>(initialValue);

    const inscrement = () => {
      setCounter(counter + 1)
    }

    const decrement = () => {

        if(counter <= 1) return;

        setCounter((prev)=>prev - 1);
    }

  return {
    //props
    counter,

    //methods
    inscrement,
    decrement,
  }
}
