import React, { useEffect, useMemo, useState } from 'react';

import { tKeys } from 'translations/translation-keys';

const roundLength = 30;

export function RoundProgress() {
  const [seconds, setSeconds] = useState<number>(roundLength);
  const [endAnimation, setEndAnimation] = useState<boolean>(false);

  const getBarPercentage = useMemo(() => {
    if (seconds === 0) {
      return '100%';
    }

    return `${((roundLength - seconds) * 100) / roundLength}%`;
  }, [seconds]);

  const getBetStatus = useMemo(() => {
    return roundLength - seconds < 20;
  }, [seconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => {
        if (seconds === 0) {
          setEndAnimation(true);
          return roundLength;
        } else {
          setEndAnimation(false);
        }

        return seconds - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`round-progress ${getBetStatus ? 'green' : 'red'}`}>
      <p>
        {getBetStatus ? tKeys('placeYorBets') : tKeys('betsClose')}
        <span>{seconds}</span>
      </p>

      <div
        className={`round-progress-bar ${!endAnimation ? 'animate' : ''}`}
        style={{
          width: getBarPercentage,
        }}
      />
    </div>
  );
}
