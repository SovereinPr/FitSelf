import styles from './SServises.module.scss'

function ServiseCard(props) {
  return (
    <a href={props.link}>
      <div className={styles.ServiseCard}>
        <div className={styles.ServiseCard__content}>
          <img src={props.img} alt={props.alt} />
          <h5>{props.nameServise}</h5>
        </div>
        <a href={props.link} className={styles.linkCard}></a>
      </div>
    </a>
  )
}

export default ServiseCard;