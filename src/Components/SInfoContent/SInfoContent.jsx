import React from 'react';
import styles from './SInfoContent.module.scss';
import Button from "../button/Button";

function SInfoContent() {
  return(
    <section className={styles.wrapper}>
      <div className={styles.container}>

        <div className={styles.containerItemOne}>
          <article className={styles.contentItem}>
            <h3>Польза для здоровья</h3>
            <br />
            <h2>Физические упражнения дают Вашему Телу Крылья</h2>
            <br />
            <p>Физическая активность может принести немедленную и долгосрочную пользу здоровью. Самое главное, регулярная физическая активность может улучшить качество вашей жизни.</p>
            <br />
            <div>
              <Button text='Интересно' link='/' />
            </div>
          </article>
        </div>

        <div className={styles.containerItemTwo}>
          <article className={styles.contentItem}>
            <h3>Улучшить настроение</h3>
            <br />
            <h2>Делает Вас Более Активными <br /> И Улучшает Настроение</h2>
            <br />
            <p>Физическая активность и физические упражнения могут принести немедленную и долгосрочную пользу здоровью. Самое главное, регулярная физическая активность может улучшить качество вашей жизни.Физические упражнения могут улучшить ваше здоровье и снизить риск.</p>
            <br />
            <div>
              <Button text='Интересно' link='/' />
            </div>
          </article>
        </div>

        <div className={styles.containerItemOne}>
          <article className={styles.contentItem}>
            <h3>Калькулятор калорий</h3>
            <br />
            <h2>Контролируйте свой рацион</h2>
            <br />
            <p>Наш калькулятор калорий поможет вам определить ваш ежедневный калорийный баланс на основе таких факторов, как пол, возраст, вес, рост и уровень физической активности. Это поможет вам контролировать свой рацион и обеспечивать необходимое количество питательных веществ для поддержания здоровья и достижения ваших фитнес-целей.</p>
            <br />
            <div>
              <Button text='Интересно' link='/' />
            </div>
          </article>
        </div>

      </div>
    </section>
  )
}

export default SInfoContent;