import SectionLabel from '../components/SectionLabel'
import timeline from '../data/timeline.json'
import styles from './History.module.css'

export default function History() {
  return (
    <div className={`${styles.page} page-enter`}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>El camino de un campeón</div>
        <h1 className={styles.title}>La historia de<br /><span>Franco Colapinto</span></h1>
        <p className={styles.sub}>
          De los kartings en Pilar, Buenos Aires, a las luces de salida de la Fórmula 1.
          Una historia de sacrificio, familia y pasión que inspira a toda Argentina.
        </p>
      </div>
      <div className={styles.content}>
        <SectionLabel>Trayectoria</SectionLabel>
        <div className={styles.timeline}>
          {timeline.map((item, i) => (
            <div key={i} className={styles.tlItem}>
              <div className={styles.tlDot} />
              <div className={styles.tlBody}>
                <div className={styles.tlYear}>{item.year}</div>
                <div className={styles.tlTitle}>{item.title}</div>
                <div className={styles.tlDesc}>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
