import React, { useEffect } from 'react';

import { Link, Typography } from '@mui/material';

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
  const { timerMinutes, timerSeconds, resetTimer, clearTimer } = useTimer(minutes, seconds);

  const disabled = (timerSeconds && timerSeconds > 0) || (timerMinutes && timerMinutes > 0);

  useEffect(() => {
    return () => clearTimer();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="timer-container">
      {disabled ? (
        <>
          <Typography fontSize="12px" fontWeight="400" lineHeight="20px">
            Time Remaining:
          </Typography>
          <Typography fontSize="12px" fontWeight="600" lineHeight="20px" marginLeft={1}>
            {timerMinutes && timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes}:
            {timerSeconds && timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}
          </Typography>
        </>
      ) : (
        <Link
          id="Resend-otp-link"
          href="#"
          onClick={() => {
            resetTimer(minutes, seconds);
            resend && resend();
          }}
        >
          Resend OTP
        </Link>
      )}
    </div>
  );
};

ResendTimer.defaultProps = defaultProps;

export default ResendTimer;
