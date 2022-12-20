import { useRef, useState } from 'react';

export const useTimer = (
  minutes: number,
  seconds: number,
): readonly [number, number, (minutes: number, seconds: number) => void] => {
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [timerMinutes, setMinutes] = useState<number>(minutes);
  const [timerSeconds, setSeconds] = useState<number>(seconds);

  if (timerRef?.current) {
    clearInterval(timerRef.current);
  }

  timerRef.current = setInterval(() => {
    if (timerSeconds > 0) {
      setSeconds(timerSeconds - 1);
    }
    if (timerRef?.current && timerSeconds === 0) {
      if (timerMinutes === 0) {
        clearInterval(timerRef.current);
      } else {
        setSeconds(59);
        setMinutes(timerMinutes - 1);
      }
    }
  }, 1000);

  function resetTimer(minutes: number, seconds: number) {
    setMinutes(minutes);
    setSeconds(seconds);
  }

  return [timerMinutes, timerSeconds, resetTimer] as const;
};
