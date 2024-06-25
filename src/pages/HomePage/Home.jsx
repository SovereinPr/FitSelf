import styles from './Home.module.scss';
import ServiseCard from '../../Components/Servises/ServiseCard'
import SInfoContent from "../../Components/SInfoContent/SInfoContent";

function Home() {
  return(
    <main className='main'>
      <section className={styles.sectionTop}>
        <div className={styles.glassContainer}>
          <article className={styles.glass}>
            <h1>Покой, Здоровье И Спорт</h1>
            <br/>
            <p>Тренажерный зал - это клуб, здание или большая комната, содержащая специальное оборудование, куда люди ходят расслабится.</p>
          </article>
        </div>
      </section>
      <section className={styles.SExercise}>
        <h1>FitSelf &mdash; New Sports</h1>
      </section>
      <section className={styles.sectionServises}>
        <div className={styles.sectionServises__container}>
          <ServiseCard 
            img='img/icons/iconCalc.svg' alt='img' 
            nameServise='Калькулятор калорий' 
            link='#infoCalculator' />
          <ServiseCard 
            img='img/icons/iconMeditation.svg' alt='img' 
            nameServise='Медитация' 
            link='#infoMeditation' />
        </div>
      </section>
      <section>
        <div className={styles.sectionContent}>
          <article>
            <h3>Польза для здоровья</h3>
            <br />
            <h2>Физические упражнения дают Вашему Телу Крылья</h2>
            <br />
            <p>Физическая активность может принести немедленную и долгосрочную пользу здоровью. Самое главное, регулярная физическая активность может улучшить качество вашей жизни.</p>
          </article>
          <article>
            <h3>Улучшить настроение</h3>
            <br />
            <h2>Делает Вас Более Активными <br /> И Улучшает Настроение</h2>
            <br />
            <p>Физическая активность и физические упражнения могут принести немедленную и долгосрочную пользу здоровью. Самое главное, регулярная физическая активность может улучшить качество вашей жизни.Физические упражнения могут улучшить ваше здоровье и снизить риск.</p>
          </article>
        </div>
      </section>
      <SInfoContent />
    </main>
  )
}

export default Home;