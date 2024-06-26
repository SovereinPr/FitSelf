import { useEffect } from 'react'
import styles from './Calc.module.scss'

function Calc() {
	useEffect(() => {
		const submitCalcButton = document.getElementById('submitCalcButton')
		const outputResult = document.getElementById('outputResult')

		submitCalcButton.addEventListener('click', e => {
			e.preventDefault()
			const form = document.forms.calculator
			const formInputFloor = form.elements.floor
			const formInputAge = form.elements.age
			const formInputHeight = form.elements.height
			const formInputWeight = form.elements.weight

			if (
				formInputFloor.value &&
				formInputAge.value &&
				formInputHeight.value &&
				formInputWeight.value
			) {
				const calculation =
					10 * formInputWeight.value +
					6.25 * formInputHeight.value -
					5 * formInputAge.value
				let calories = 0
				let dietPlan = {}

				switch (formInputFloor.value) {
					case 'man':
						calories = calculation + 5
						dietPlan = createDietPlan(calories)
						break
					case 'girl':
						calories = calculation - 161
						dietPlan = createDietPlan(calories)
						break
				}

				outputResult.innerHTML = calories

				if (calories > 0) {
					const dietPlanElement = document.getElementById('dietPlan')
					dietPlanElement.innerHTML = `
            <div>
              <h3>Рацион питания:</h3>
              <p>
                Завтрак: ${dietPlan.breakfast
									.map(
										item =>
											`${item.name} (${item.calories} ккал, ${item.weight} г)`
									)
									.join(', ')}
              </p>
              <p>
                Обед: ${dietPlan.lunch
									.map(
										item =>
											`${item.name} (${item.calories} ккал, ${item.weight} г)`
									)
									.join(', ')}
              </p>
              <p>
                Ужин: ${dietPlan.dinner
									.map(
										item =>
											`${item.name} (${item.calories} ккал, ${item.weight} г)`
									)
									.join(', ')}
              </p>
            </div>
          `
				} else {
					outputResult.innerHTML = 'Заполните, пожалуйста, все поля.'
					outputResult.style.color = '#E9494F'
				}
			}
		})
	}, [])

	const createDietPlan = calories => {
		const breakfast = [
			{
				name: 'Овсянка',
				calories: Math.round(calories * 0.25),
				weight: Math.round((calories * 0.25) / 4), // 4 kcal/g
				bzu: {
					protein: 20,
					fat: 30,
					carbohydrates: 50,
				},
			},
			{
				name: 'Яйцо',
				calories: Math.round(calories * 0.05),
				weight: Math.round((calories * 0.05) / 3.5), // 3.5 kcal/g
				bzu: {
					protein: 35,
					fat: 25,
					carbohydrates: 10,
				},
			},
		]

		const lunch = [
			{
				name: 'Куриная грудка с овощами',
				calories: Math.round(calories * 0.5),
				weight: Math.round((calories * 0.5) / 3.5), // 3.5 kcal/g
				bzu: {
					protein: 40,
					fat: 20,
					carbohydrates: 30,
				},
			},
			{
				name: 'Брокколи',
				calories: Math.round(calories * 0.05),
				weight: Math.round((calories * 0.05) / 0.5), // 0.5 kcal/g
				bzu: {
					protein: 20,
					fat: 10,
					carbohydrates: 60,
				},
			},
		]

		const dinner = [
			{
				name: 'Творог',
				calories: Math.round(calories * 0.25),
				weight: Math.round((calories * 0.25) / 4), // 4 kcal/g
				bzu: {
					protein: 30,
					fat: 20,
					carbohydrates: 40,
				},
			},
			{
				name: 'Яблоко',
				calories: Math.round(calories * 0.05),
				weight: Math.round((calories * 0.05) / 0.5), // 0.5 kcal/g
				bzu: {
					protein: 10,
					fat: 5,
					carbohydrates: 80,
				},
			},
		]

		return { breakfast, lunch, dinner }
	}

	return (
		<main>
			<div className='title'>
				<h1>Калькулятор калорий</h1>
			</div>
			<div className={styles.container}>
				<form className={styles.calculator} name='calculator'>
					<div className={styles.formFloor}>
						<p>Выберите пол:</p>
						<div className={styles.inputFloor}>
							<input
								className={styles.radioFloor}
								id='man'
								type='radio'
								name='floor'
								value='man'
							/>
							<label htmlFor='man'>Мужской</label>
						</div>
						<div className={styles.inputFloor}>
							<input
								className={styles.radioFloor}
								id='girl'
								type='radio'
								name='floor'
								value='girl'
							/>
							<label htmlFor='girl'>Женский</label>
						</div>
					</div>
					<div className={styles.formIn}>
						<div className={styles.inputIn}>
							<label htmlFor='age'>Возраст (лет):</label>
							<input
								className={styles.inputNumber}
								type='number'
								name='age'
								id='age'
							/>
						</div>
						<div className={styles.inputIn}>
							<label htmlFor='height'>Рост (см):</label>
							<input
								className={styles.inputNumber}
								type='number'
								name='height'
								id='height'
							/>
						</div>
						<div className={styles.inputIn}>
							<label htmlFor='weight'>Вес (кг):</label>
							<input
								className={styles.inputNumber}
								type='number'
								name='weight'
								id='weight'
							/>
						</div>
					</div>
					<div className={styles.buttonContainer}>
						<button
							id='submitCalcButton'
							className={styles.submitCalcButton}
							type='submit'
						>
							Расчитать каллории
						</button>
					</div>
				</form>
				<p className={styles.result}>
					Рекомендуемая суточная норма калорий: <br />
					<span id='outputResult'>____</span>
					<div id='dietPlan'></div>
				</p>
			</div>
		</main>
	)
}

export default Calc
