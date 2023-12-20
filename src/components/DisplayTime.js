import React, { useEffect, useState } from 'react';
import './Display.css'
const DisplayTime = (props) => {
  const { city } = props;
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    message: '',
  });
  const [christmasDate, setChristmasDate] = useState(new Date('January 1, 2024 00:00:00 GMT+0530'));

  const calculateCountdown = () => {
    const currentDate = new Date();
    const timeDifference = christmasDate - currentDate;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
        message: '',
      });
    } else {
      setCountdown({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        message: 'Merry Christmas!',
      });
    }
  };

  useEffect(() => {
    let intervalId;

    switch (city) {
      case 'CHINA':
        setChristmasDate(new Date('January 1, 2024 00:00:00 GMT+0800'));
        break;
      case 'USA':
        setChristmasDate(new Date('January 1, 2024 00:00:00 GMT-0500'));
        break;
      case 'AUSTRALIA':
        setChristmasDate(new Date('January 1, 2024 00:00:00 GMT+1100'));
        break;
      case 'INDIA':
        setChristmasDate(new Date('January 1, 2024 00:00:00 GMT+0530'));
        break;
      default:
        break;
    }

    calculateCountdown();
    intervalId = setInterval(() => {
      calculateCountdown();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [city]);

  return (
    <div>
      <div id='display-time'>
      <div id='title'>NEW YEAR COUNTDOWN OF {city}</div>
      <div id='countdown'>
        {countdown.message || `${countdown.days} : ${countdown.hours} : ${countdown.minutes} : ${countdown.seconds}`}
        
      </div>
      <p id='representation'>Days | Hours | Minutes | Seconds</p>
      </div>
    </div>
  );
};

export default DisplayTime;
