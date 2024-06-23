import React, { useEffect, useState } from "react";
import styles from './Meditation.module.scss';
import ReactPlayer from 'react-player'

function Meditation() {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning && !isPaused) {
      intervalId = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(intervalId);
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, isPaused, timeRemaining]);

  const handleStart = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleReset = () => {
    setTimeRemaining(0);
    setIsRunning(false);
    setIsPaused(false);
  };

  const handleSetTime = (newTime) => {
    setTimeRemaining(newTime);
  };

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;


  let urlVideos = 'https://youtu.be/kndqIj8Qgok?si=XDxxKJZD0EkBA1I1'; // default url

	return (
    <main>
      <div className="title"><h1>Таймер для медитации</h1></div>
			<div className={styles.wrapper}>

        <div className={styles.timerContainer}>
          <div className={styles.timer}>
            {minutes.toString().padStart(2, '0')}:
            {seconds.toString().padStart(2, '0')}
          </div>
          <div className={styles.controls}>
            <button className={styles.button} onClick={handleStart} disabled={isRunning && !isPaused}>Начать</button>
            <button className={styles.button} onClick={handlePause} disabled={!isRunning || isPaused}>Пауза</button>
            <button className={styles.button} onClick={handleResume} disabled={!isRunning || !isPaused}>Продолжить</button>
            <button className={styles.button} onClick={handleReset} disabled={!isRunning}>Сброс</button>
          </div>
          <div className={styles.inputTime__container}>
            Введите колличество минут, для таймера: {
              <input
                className={styles.inputTime}
                type="number"
                min="60"
                step={60}
                value={timeRemaining}
                onChange={(e) => handleSetTime(parseInt(e.target.value, 10))}
              />
            }
          </div>
        </div>

        <div className={styles.playerContainer}>
          <ReactPlayer
            url={urlVideos}
            width='40svw'
            playing={false}
            loop={false}
            controls={false}
            />
        </div>

			</div>
		</main>
	)
}

export default Meditation;
