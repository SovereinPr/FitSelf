import { useEffect } from 'react';
import styles from './Calc.module.scss';

function Calc() {
  useEffect(() => {
		const submitCalcButton = document.getElementById('submitCalcButton');
		const outputResult = document.getElementById('outputResult');

		submitCalcButton.addEventListener('click', (e) => {
			e.preventDefault();
			const form = document.forms.calculator;
			const formInputFloor = form.elements.floor;
			const formInputAge = form.elements.age;
			const formInputHeight = form.elements.height;
			const formInputWeight = form.elements.weight;

			if (formInputFloor.value && formInputAge.value && formInputHeight.value && formInputWeight.value) {
				const calculation = 10 * formInputWeight.value + 6.25 * formInputHeight.value - 5 * formInputAge.value;
				switch (formInputFloor.value) {
					case 'man':
						outputResult.innerHTML = calculation + 5;
					break;
					case 'gerl':
						outputResult.innerHTML = calculation - 161;
					break;
				}
			} else {
				outputResult.innerHTML = 'Заполните, пожалуйста, все поля.';
			}
		});
	}, []);

  return(
    <main>
      <div className='title'><h1>Калькулятор калорий</h1></div>
      <div className={styles.container}>
        <form className={styles.calculator} name='calculator'>
          <div className={styles.formFloor}>
            <p>Выберите пол:</p>
            <div className={styles.inputFloor}>
              <input className={styles.radioFloor} id='man' type="radio" name='floor' value='man' />
              <label htmlFor="man">Мужской</label>
            </div>
            <div className={styles.inputFloor}>
              <input className={styles.radioFloor} id='gerl' type="radio" name='floor' value='gerl' />
              <label htmlFor="gerl">Женский</label>
            </div>
          </div>
          <div className={styles.formIn}>
            <div className={styles.inputIn}>
              <label htmlFor="age">Возраст (лет):</label>
              <input className={styles.inputNumber} type="number" name="age" id="age" />
            </div>
            <div className={styles.inputIn}>
              <label htmlFor="height">Рост (см):</label>
              <input className={styles.inputNumber} type="number" name="height" id="height" />
            </div>
            <div className={styles.inputIn}>
              <label htmlFor="weight">Вес (кг):</label>
              <input className={styles.inputNumber} type="number" name="weight" id="weight" />
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button id='submitCalcButton' className={styles.submitCalcButton} type='submit'>Расчитать каллории</button>
          </div>
        </form>
        <p className={styles.result}>Рекомендуемая суточная норма калорий: <br /><span id='outputResult'>____</span></p>
      </div>
    </main>
  )
}

export default Calc;