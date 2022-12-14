import React from 'react';

import { Button } from '@mui/material';

import { useTimer } from 'core/resend-timer/use-timer';

interface IProps {
  minutes?: number;
  seconds?: number;
  resend?(): void;
}

const defaultProps = {
  minutes: 0,
  seconds: 59,
};

const ResendTimer = ({ minutes, seconds, resend }: IProps & typeof defaultProps) => {
  const [timerMinutes, timerSeconds, resetTimer] = useTimer(minutes, seconds);

  const disabled = (timerSeconds && timerSeconds > 0) || (timerMinutes && timerMinutes > 0);

  return (
    <div className="timerContainer">
      {disabled ? (
        <p>
          Time Remaining: {timerMinutes && timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes}:
          {timerSeconds && timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}
        </p>
      ) : (
        <p>Didnt receive code</p>
      )}

      <Button
        style={{ textDecoration: disabled ? 'none' : 'underline' }}
        disabled={!!disabled}
        className="resendButton"
        variant="text"
        onClick={() => {
          resetTimer(minutes, seconds);
          resend && resend();
        }}
      >
        Resend OTP
      </Button>
    </div>
  );
};

ResendTimer.defaultProps = defaultProps;

export default ResendTimer;
