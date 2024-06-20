import React, { useEffect, useState } from 'react'

function MeditationTimer(props) {
	const [timeRemaining, setTimeRemaining] = useState(props.timeMinute * 60) // 10 minutes by default
	const [isRunning, setIsRunning] = useState(false)

	useEffect(() => {
		let intervalId
		if (isRunning) {
			intervalId = setInterval(() => {
				setTimeRemaining(prevTime => {
					if (prevTime <= 0) {
						clearInterval(intervalId)
						setIsRunning(false)
						return 0
					}
					return prevTime - 1
				})
			}, 1000)
		} else {
			clearInterval(intervalId)
		}

		return () => clearInterval(intervalId)
	}, [isRunning])

	const handleStart = () => {
		setIsRunning(true)
	}

	const handlePause = () => {
		setIsRunning(false)
	}

	const handleReset = () => {
		setTimeRemaining(props.timeMinute * 60) // Reset to 10 minutes
		setIsRunning(false)
	}

	const minutes = Math.floor(timeRemaining / 60)
	const seconds = timeRemaining % 60

	return (
		<div>
			<h1>Таймер для медитации</h1>
			<div className='timer'>
				{minutes.toString().padStart(2, '0')}:
				{seconds.toString().padStart(2, '0')}
			</div>
			<div className='controls'>
				{!isRunning && <button onClick={handleStart}>Начать</button>}
				{isRunning && (
					<>
						<button onClick={handlePause}>Пауза</button>
						<button onClick={handleReset}>Сброс</button>
					</>
				)}
			</div>
		</div>
	)
}

export default MeditationTimer
