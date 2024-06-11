import styles from './STop.module.scss'
import '../../img/image/fitSelf.jpg';

function STop() {
  return(
    <section className={styles.sectionTop}>
      <div className={styles.glassContainer}>
        <article className={styles.glass}>
          <h1>Покой, Здоровье И Спорт</h1>
          <br/>
          <p>Тренажерный зал - это клуб, здание или большая комната, содержащая специальное оборудование, куда люди ходят расслабится.</p>
        </article>
      </div>
      <div className={styles.imageContainer}>
        <img src="img/image/fitSelf.jpg" alt="fit" />
      </div>
    </section>
  )
}

export default STop;