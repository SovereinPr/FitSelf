import React, { useState } from 'react'
import MeditationTimer from '../../Components/MeditationTimer'
import styles from './Meditation.module.scss'

function Meditation() {
	const [inputTime, setInputTime] = useState(5) // default value is 5 minutes

	const handleInputChange = event => {
		const newValue = parseInt(event.target.value, 10)
		if (newValue >= 0) {
			setInputTime(newValue)
		}
	}

	return (
		<main>
			<div className={styles.container}>
				<form name='formTimer' className={styles.formTimer}>
					<input
						id='inTime'
						type='number'
						name='inputTime'
						value={inputTime}
						onChange={handleInputChange}
					/>
					<MeditationTimer timeMinute={inputTime} />
				</form>
			</div>
		</main>
	)
}

export default Meditation
