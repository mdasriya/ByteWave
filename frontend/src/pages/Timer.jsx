
import React, { useState, useEffect } from 'react';
import { Text } from '@chakra-ui/react';
const Timer = () => {
    const [seconds, setSeconds] = useState(1 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds === 0) {
          clearInterval(interval);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Countdown: {formatTime()}</h1>
    </div>
  );
}

export default Timer
