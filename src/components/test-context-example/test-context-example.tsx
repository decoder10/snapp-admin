import React, { useContext, useEffect } from 'react';

import { TestContext } from 'contexts/test-context';

let incrementNumber = 1;

export default function TestContextExample() {
  const { state, updateStateWithDispatch, increaseStateWithDispatch } = useContext(TestContext);

  useEffect(() => {
    updateStateWithDispatch({ test: 5 });
    setInterval(() => {
      increaseStateWithDispatch({ test: incrementNumber });
      incrementNumber += 10;
    }, 1000);
  }, [increaseStateWithDispatch, updateStateWithDispatch]);

  return <div>{state.test}</div>;
}
