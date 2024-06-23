import styles from '../../pages/HomePage/Home.module.scss'

function ServiseCard(props) {
  return (
    <a href={props.link}>
      <div className={styles.ServiseCard}>
        <div className={styles.ServiseCard__content}>
          <img src={props.img} alt={props.alt} />
          <h5>{props.nameServise}</h5>
        </div>
      </div>
    </a>
  )
}

export default ServiseCard;