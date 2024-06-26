import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import styles from './Meditation.module.scss'

function Meditation() {
	const [timeRemaining, setTimeRemaining] = useState(0)
	const [isRunning, setIsRunning] = useState(false)
	const [isPaused, setIsPaused] = useState(false)
	const [videoUrl, setVideoUrl] = useState(
		'https://www.youtube.com/embed/kndqIj8Qgok?controls=0&modestbranding=1&rel=0&autoplay=1'
	)
	const [playVideo, setPlayVideo] = useState(false)

	useEffect(() => {
		let intervalId

		if (isRunning && !isPaused) {
			intervalId = setInterval(() => {
				setTimeRemaining(prevTime => {
					if (prevTime <= 0) {
						clearInterval(intervalId)
						setIsRunning(false)
						setPlayVideo(false) // Остановить видео, когда таймер закончится
						return 0
					}
					return prevTime - 1
				})
			}, 1000)
		} else {
			clearInterval(intervalId)
		}

		return () => clearInterval(intervalId)
	}, [isRunning, isPaused])

	const handleStart = () => {
		setIsRunning(true)
		setIsPaused(false)
		setPlayVideo(true) // Начать воспроизведение видео
	}

	const handlePause = () => {
		setIsPaused(true)
		setPlayVideo(false) // Пауза видео
	}

	const handleResume = () => {
		setIsPaused(false)
		setPlayVideo(true) // Продолжить воспроизведение видео
	}

	const handleReset = () => {
		setTimeRemaining(0)
		setIsRunning(false)
		setIsPaused(false)
		setPlayVideo(false) // Остановить видео
	}

	const handleSetTime = newTime => {
		setTimeRemaining(newTime * 60) // Преобразовать минуты в секунды
	}

	const minutes = Math.floor(timeRemaining / 60)
	const seconds = timeRemaining % 60

	return (
		<main>
			<div className='title'>
				<h1>Таймер для медитации</h1>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.timerContainer}>
					<div className={styles.timer}>
						{minutes.toString().padStart(2, '0')}:
						{seconds.toString().padStart(2, '0')}
					</div>
					<div className={styles.controls}>
						<button
							className={styles.button}
							onClick={handleStart}
							disabled={isRunning && !isPaused}
						>
							Начать
						</button>
						<button
							className={styles.button}
							onClick={handlePause}
							disabled={!isRunning || isPaused}
						>
							Пауза
						</button>
						<button
							className={styles.button}
							onClick={handleResume}
							disabled={!isRunning || !isPaused}
						>
							Продолжить
						</button>
						<button
							className={styles.button}
							onClick={handleReset}
							disabled={!isRunning}
						>
							Сброс
						</button>
					</div>
					<div className={styles.inputTime__container}>
						Введите количество минут, для таймера:{' '}
						<input
							className={styles.inputTime}
							type='number'
							min='1'
							value={Math.floor(timeRemaining / 60)}
							onChange={e => handleSetTime(parseInt(e.target.value, 10))}
						/>
					</div>
				</div>

				<div className={styles.playerWrapper}>
					<ReactPlayer url={videoUrl} playing={playVideo} controls={false} />
				</div>
			</div>
		</main>
	)
}

export default Meditation
