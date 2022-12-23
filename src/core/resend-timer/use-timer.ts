import { useRef, useState } from 'react';

type TResetTimer = (minutes: number, seconds: number) => void;
type TClearTimer = () => void;

export const useTimer = (
  minutes: number,
  seconds: number,
): { timerMinutes: number; timerSeconds: number; resetTimer: TResetTimer; clearTimer: TClearTimer } => {
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

  const clearTimer = () => {
    if (timerRef?.current) {
      clearInterval(timerRef.current);
    }
  };

  function resetTimer(minutes: number, seconds: number) {
    setMinutes(minutes);
    setSeconds(seconds);
  }

  return { timerMinutes, timerSeconds, resetTimer, clearTimer };
};
