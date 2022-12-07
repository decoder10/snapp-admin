import React, { FC, useContext, useEffect } from 'react';

import { TestContext } from 'contexts/test-context';

let incrementNumber = 1;

interface IProps {
  startNumber: number;
}

export const TestContextExample: FC<IProps> = ({ startNumber }) => {
  const { state, updateStateWithDispatch, increaseStateWithDispatch } = useContext(TestContext);

  useEffect(() => {
    updateStateWithDispatch({ test: startNumber });

    setInterval(() => {
      increaseStateWithDispatch({ test: incrementNumber });
      incrementNumber += 10;
    }, 1000);
  }, [increaseStateWithDispatch, startNumber, updateStateWithDispatch]);

  return <div>{state.test}</div>;
};
