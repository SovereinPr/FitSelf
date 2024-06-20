import React from 'react';
import styles from './SInfoContent.module.scss';
import Button from "../button/Button";
import { NavLink } from 'react-router-dom';

function SInfoContent() {
  return(
    <section className={styles.wrapper}>
      <div className={styles.container}>


        <div className={styles.containerItemOne} id='infoTasks'>
          <article className={styles.contentItem}>
            <h3>Трекер задач</h3>
            <br />
            <h2>Оставайтесь в форме с помощью нашего трекера задач</h2>
            <br />
            <p>Выберите из списка различных упражнений и тренировок, которые наилучшим образом подходят под ваши потребности и предпочтения. Затем отслеживайте свой прогресс, отмечая выполненные задачи, и наблюдайте, как ваша физическая форма улучшается с течением времени.</p>
            <br />
            <div>
              <NavLink to="/tasks"><Button text='Интересно' title='Перейти к задачам' /></NavLink>
            </div>
          </article>
        </div>

        <div className={styles.containerItemTwo} id='infoCalculator'>
          <article className={styles.contentItem}>
            <h3>Калькулятор калорий</h3>
            <br />
            <h2>Контролируйте свой рацион</h2>
            <br />
            <p>Наш калькулятор калорий поможет вам определить ваш ежедневный калорийный баланс на основе таких факторов, как пол, возраст, вес, рост и уровень физической активности. Это поможет вам контролировать свой рацион и обеспечивать необходимое количество питательных веществ для поддержания здоровья и достижения ваших фитнес-целей.</p>
            <br />
            <div>
              <NavLink to="/calculator"><Button text='Интересно' title='Перейти к калькулятору калорий' /></NavLink>
            </div>
          </article>
        </div>

        <div className={styles.containerItemOne} id='infoMeditation'>
          <article className={styles.contentItem}>
            <h3>Таймер для медитаций</h3>
            <br />
            <h2>Найдите свой внутренний мир</h2>
            <br />
            <p>Не забывайте о ментальном здоровье! Используйте наш встроенный таймер для медитаций, чтобы помочь себе сфокусироваться на дыхании, расслабиться и сосредоточиться. Выберите желаемое время для медитации (от 5 минут до часа) и наслаждайтесь спокойствием и внутренним равновесием.</p>
            <br />
            <div>
              <NavLink to="/meditation"><Button text='Интересно' title='Перейти к медитации' /></NavLink>
            </div>
          </article>
        </div>

      </div>
    </section>
  )
}

export default SInfoContent;