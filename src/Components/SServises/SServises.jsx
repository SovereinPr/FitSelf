import styles from './SServises.module.scss'
import ServiseCard from "./ServiseCard";
import '../../img/icons/iconMeditation.svg';
import '../../img/icons/iconTasks.svg';
import '../../img/icons/iconCalc.svg';

function SServises() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.item__container}>
          <ServiseCard 
          img='img/icons/iconMeditation.svg' alt='img' 
          nameServise='Медитация' 
          link='/' />
        </div>
        <div className={styles.item__container}>
          <ServiseCard 
          img='img/icons/iconTasks.svg' alt='img' 
          nameServise='Задачи' 
          link='/' />
        </div>
        <div className={styles.item__container}>
          <ServiseCard 
          img='img/icons/iconCalc.svg' alt='img' 
          nameServise='Калькулятор калорий' 
          link='/' />
        </div>
      </div>
    </section>
  )
}

export default SServises;