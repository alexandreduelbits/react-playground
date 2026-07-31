import { useEffect, useState } from "react";

export function HowItWorks() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCalculation(count * 2);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <article>
      <h2>How useEffect Works</h2>

      <p>
        useEffect accepts two arguments, the first is the function that will be
        executed, the second is the list of params that will trigger the effect
        when they change.
      </p>

      <p>
        If we pass an empty list to the second argument, useEffect will only be
        executed once on the first render.
      </p>

      <p>
        If we pass one or more params in the second argument useEffect will be
        executed on the first render, and every time that one of its params
        changes.
      </p>

      <button onClick={() => setCount(count + 1)}>
        Click to increment count
      </button>

      <p>Current count is: {count}</p>

      <p>
        <strong>Calculation is a side effect {calculation}</strong>
      </p>
    </article>
  );
}

HowItWorks.displayName = "HowItWorks";
