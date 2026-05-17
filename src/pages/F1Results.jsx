import SectionLabel from '../components/SectionLabel'
import racesData from '../data/races2025.json'
import styles from './F1Results.module.css'

const totalPts = racesData.results.reduce((s, r) => s + r.pts, 0)
const bestPos = Math.min(...racesData.results.map(r => r.pos))
const ptsRaces = racesData.results.filter(r => r.pts > 0).length
const totalRaces = racesData.results.length

function posClass(pos, s) {
  if (pos <= 3) return s.posGold
  if (pos <= 10) return s.posPts
  return s.posOut
}

function statusClass(status, s) {
  if (status === 'DNF') return s.statusDnf
  return s.statusFinished
}

export default function F1Results() {
  return (
    <div className={`${styles.page} page-enter`}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>Franco Colapinto · Trayectoria F1</div>
        <h1 className={styles.title}>Colapinto <span>F1</span></h1>
        <p className={styles.sub}>Todas las carreras de Franco Colapinto en F1 (2024-2025)</p>
      </div>

      <div className={styles.content}>
        {/* Stats */}
        <SectionLabel>Resumen de temporada</SectionLabel>
        <div className={styles.statsGrid}>
          {[
            { val: totalPts, lbl: 'Puntos totales' },
            { val: totalRaces, lbl: 'Carreras' },
            { val: ptsRaces, lbl: 'Con puntos' },
            { val: `P${bestPos}`, lbl: 'Mejor resultado' },
          ].map((s, i) => (
            <div key={i} className={styles.statCard}>
              <div className={styles.statVal}>{s.val}</div>
              <div className={styles.statLbl}>{s.lbl}</div>
            </div>
          ))}
        </div>

        {/* Results table */}
        <SectionLabel>Todas las carreras</SectionLabel>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Gran Premio</th>
                <th>Escudería</th>
                <th>Posición</th>
                <th>Puntos</th>
                <th>Estado</th>
                <th>Ganador</th>
              </tr>
            </thead>
            <tbody>
              {racesData.results.map((r, idx) => (
                <tr key={idx}>
                  <td className={styles.round}>{r.round}</td>
                  <td className={styles.gp}>
                    <span className={styles.gpFlag}>{r.flag}</span>
                    <span>{r.gp.replace('Gran Premio de ', '').replace('Gran Premio del ', '')}</span>
                    <span className={styles.gpDate}>{r.date}</span>
                  </td>
                  <td className={styles.team}>{r.team}</td>
                  <td>
                    <span className={`${styles.posBadge} ${posClass(r.pos, styles)}`}>
                      {r.status === 'DNF' ? 'DNF' : `P${r.pos}`}
                    </span>
                  </td>
                  <td>
                    {r.pts > 0
                      ? <span className={styles.ptsGot}>+{r.pts}</span>
                      : <span className={styles.ptsZero}>—</span>
                    }
                  </td>
                  <td className={`${styles.status} ${statusClass(r.status, styles)}`}>
                    {r.status === 'DNF' ? 'Abandono' : 'Finalizado'}
                  </td>
                  <td className={styles.winner}>{r.winner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}