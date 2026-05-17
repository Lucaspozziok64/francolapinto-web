import { useState } from "react";
import CircuitModal from "../components/CircuitModal";
import SectionLabel from "../components/SectionLabel";
import racesData from "../data/races2026.json";
import styles from "./F1Results2026.module.css";

// Filtrar solo carreras finalizadas válidas (pos > 0 y status no es "canceled")
const validRaces = racesData.results.filter(
  (r) => r.pos > 0 && r.status !== "canceled",
);

const totalPts = validRaces.reduce((s, r) => s + r.pts, 0);
const bestPos = Math.min(...validRaces.map((r) => r.pos));
const ptsRaces = validRaces.filter((r) => r.pts > 0).length;

function posClass(pos, s) {
  if (pos <= 3) return s.posGold;
  if (pos <= 10) return s.posPts;
  return s.posOut;
}

export default function F1Results2026() {
  const [selectedGP, setSelectedGP] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGPClick = (gp) => {
    setSelectedGP(gp);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGP(null);
  };

  return (
    <>
      <div className={`${styles.page} page-enter`}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            F1 <span>2026</span>
          </h1>
          <p className={styles.sub}>
            Resultados de carrera y calendario de Franco Colapinto
          </p>
        </div>

        <div className={styles.content}>
          {/* Stats */}
          <SectionLabel>Resumen de temporada</SectionLabel>
          <div className={styles.statsGrid}>
            {[
              { val: totalPts, lbl: "Puntos totales" },
              { val: validRaces.length, lbl: "Carreras" },
              { val: ptsRaces, lbl: "Con puntos" },
              { val: `P${bestPos}`, lbl: "Mejor resultado" },
            ].map((s, i) => (
              <div key={i} className={styles.statCard}>
                <div className={styles.statVal}>{s.val}</div>
                <div className={styles.statLbl}>{s.lbl}</div>
              </div>
            ))}
          </div>

          {/* Results table */}
          <SectionLabel>Resultados de carrera</SectionLabel>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Rnd</th>
                  <th>Gran Premio</th>
                  <th>Grid</th>
                  <th>Posición</th>
                  <th>Puntos</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {racesData.results.map((r) => {
                  // Si la carrera está cancelada, mostrar un mensaje especial
                  if (r.status === "canceled") {
                    return (
                      <tr key={r.round} className={styles.canceledRow}>
                        <td className={styles.round}>R{r.round}</td>
                        <td className={styles.gp}>
                          <span className={styles.gpFlag}>{r.flag}</span>
                          <span>
                            {r.gp
                              .replace("Gran Premio de ", "")
                              .replace("Gran Premio del ", "")}
                          </span>
                          <span className={styles.gpDate}>{r.date}</span>
                        </td>
                        <td className={styles.grid}>—</td>
                        <td>
                          <span className={styles.canceledBadge}>
                            Cancelada
                          </span>
                        </td>
                        <td>
                          <span className={styles.ptsZero}>—</span>
                        </td>
                        <td className={styles.statusCanceled}>Cancelada</td>
                      </tr>
                    );
                  }

                  // Carreras normales
                  return (
                    <tr key={r.round}>
                      <td className={styles.round}>R{r.round}</td>
                      <td className={styles.gp}>
                        <span className={styles.gpFlag}>{r.flag}</span>
                        <span>
                          {r.gp
                            .replace("Gran Premio de ", "")
                            .replace("Gran Premio del ", "")}
                        </span>
                        <span className={styles.gpDate}>{r.date}</span>
                      </td>
                      <td className={styles.grid}>P{r.grid}</td>
                      <td>
                        <span
                          className={`${styles.posBadge} ${posClass(r.pos, styles)}`}
                        >
                          P{r.pos}
                        </span>
                      </td>
                      <td>
                        {r.pts > 0 ? (
                          <span className={styles.ptsGot}>+{r.pts}</span>
                        ) : (
                          <span className={styles.ptsZero}>—</span>
                        )}
                      </td>
                      <td className={styles.status}>{r.status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Upcoming - Clickable cards */}
          <SectionLabel>Próximas carreras</SectionLabel>
          <div className={styles.upcomingList}>
            {racesData.upcoming.map((r) => (
              <div
                key={r.round}
                className={styles.upCard}
                onClick={() => handleGPClick(r)}
              >
                <div className={styles.upLeft}>
                  <span className={styles.upFlag}>{r.flag}</span>
                  <div>
                    <div className={styles.upGp}>{r.gp}</div>
                    <div className={styles.upMeta}>
                      {r.circuit} · {r.date}
                    </div>
                  </div>
                </div>
                <div className={styles.upRound}>R{r.round}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modal */}
      <CircuitModal
        isOpen={isModalOpen}
        onClose={closeModal}
        gpData={selectedGP}
      />
    </>
  );
}
