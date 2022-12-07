/*

import React, { FC, useEffect, useState } from 'react';

import car from '../../../src/assets/styles/img/blueCar.png';
import car_x_1 from '../../../src/assets/styles/img/red_x.png';

const minSpeed = 1,
  repeatMilliseconds = 10,
  startPosition = -160,
  maxSpeed = 20,
  minPosition = 10,
  maxPosition = 860;

let positioner: any,
  carPosition = startPosition,
  carPosition2 = startPosition - 300,
  carPosition3 = startPosition - 600,
  leftPosition = minPosition,
  speed = minSpeed;

// Keyboard.js
('use strict');

class KeyboardController {
  private readonly keys: object;
  private readonly repeat: number;
  private timers: object;

  constructor(keys: any, repeat: any) {
    this.keys = keys;
    this.repeat = repeat;
    this.timers = {};

    document.onkeydown = event => this.keydown(event);
    document.onkeyup = event => this.keyup(event);
    window.onblur = () => this.blur;
  }

  keydown(event: any) {
    event.stopPropagation();
    const code = event.code;
    if (this.keys && !(code in this.keys)) {
      return true;
    }
    if (this.timers && !(code in this.timers)) {
      this.timers[code] = null;
      this.keys[code]();
      if (this.repeat) {
        this.timers[code] = setInterval(this.keys[code], this.repeat);
      }
    }
    return false;
  }

  keyup(event: any) {
    const code = event.code;
    if (code in this.timers) {
      if (this.timers[code]) {
        clearInterval(this.timers[code]);
      }
      delete this.timers[code];
    }
  }

  blur() {
    for (const key in this.timers) {
      if (this.timers[key]) {
        clearInterval(this.timers[key]);
      }
    }
    this.timers = {};
  }
}

const keyboard = new KeyboardController(
  {
    ArrowLeft: () => {
      if (leftPosition <= minPosition) {
        leftPosition = minPosition;
        return;
      }
      leftPosition -= speed;
    },
    ArrowRight: () => {
      if (leftPosition >= maxPosition) {
        leftPosition = maxPosition;
        return;
      }
      leftPosition += speed;
    },
    ArrowUp: () => {
      if (speed >= maxSpeed) {
        return;
      }
      speed += 0.1;
    },
    ArrowDown: () => {
      if (speed <= 0) {
        speed = 0;
        return;
      }
      speed -= 0.1;
    },
  },
  repeatMilliseconds,
);

function generateRandom(min = 1, max = 7) {
  // find diff
  const difference = max - min;

  // generate random number
  let rand = Math.random();

  // multiply with difference
  rand = Math.floor(rand * difference);

  // add with min value
  rand = rand + min;

  return rand;
}

const Racing: FC = () => {
  const [linePosition, setLinePosition] = useState<number>(0);
  const [isRun, setIsRun] = useState<boolean>(false);

  const runner = (): void => {
    if (isRun) {
      speed = 0;
      clearInterval(positioner);
    } else {
      positioner = setInterval(() => {
        console.log(generateRandom());

        setLinePosition(prev => prev + speed);

        carPosition += speed + 2;
        carPosition2 += speed + 3;
        carPosition3 += speed + 4;
      }, repeatMilliseconds);
    }
    setIsRun(!isRun);
  };

  useEffect(() => {
    if (linePosition > 140 - speed) {
      setLinePosition(-60);
    }
    if (carPosition >= 2000) {
      carPosition = generateRandom() * -200;
    }

    if (carPosition2 >= 2000) {
      carPosition2 = generateRandom() * -200;
    }

    if (carPosition3 >= 2000) {
      carPosition3 = generateRandom() * -200;
    }
  }, [linePosition]);

  useEffect(() => {
    document.addEventListener('keydown', keyboard.keydown);
  }, []);

  return (
    <div className={'area'}>
      <div className={'left-gazon'}>
        <div className={'panel'}>
          <button onClick={runner}>{!isRun ? 'Start' : 'Stop'}</button>
          <p>{`${parseInt(String(speed * 10))} km/h`}</p>
        </div>
      </div>
      <div className={'road'}>
        <img className={'car'} src={car} alt="car" style={{ bottom: 50, left: leftPosition }} />

        <img className={'car-x-1'} src={car_x_1} alt="car" style={{ top: carPosition, left: minPosition + 20 }} />
        <img className={'car-x-1'} src={car_x_1} alt="car" style={{ top: carPosition2, left: minPosition + 200 }} />
        <img className={'car-x-1'} src={car_x_1} alt="car" style={{ top: carPosition3, left: minPosition + 360 }} />
        {/!* <img *!/}
        {/!*  className={'car-x-1'} *!/}
        {/!*  src={car_x_1} *!/}
        {/!*  alt="car" *!/}
        {/!*  style={{ top: carPosition - 900, left: minPosition + 300 }} *!/}
        {/!*!/ > *!/}

        <div className={'line'}>
          <div className={'black-line'} style={{ top: linePosition }}></div>
          <div className={'black-line'} style={{ top: linePosition + 200 }}></div>
          <div className={'black-line'} style={{ top: linePosition + 400 }}></div>
          <div className={'black-line'} style={{ top: linePosition + 600 }}></div>
          <div className={'black-line'} style={{ top: linePosition + 800 }}></div>
        </div>
      </div>
      <div className={'right-gazon'}></div>
    </div>
  );
};

export default Racing;
*/

export {};
