import SectionLabel from "../components/SectionLabel";
import styles from "./Home.module.css"
import racesData2026 from "../data/races2026.json";
import { NavLink } from "react-router";
import Footer from "../components/Footer";

const races2026 = racesData2026.results[racesData2026.results.length - 1];
const nextRace2026 = racesData2026.upcoming[0];
const totalPts2026 = racesData2026.results.reduce((s, r) => s + r.pts, 0);

function getPosLabel(pos) {
  if (pos === 1) return "P1";
  if (pos <= 3) return `P${pos}`;
  if (pos <= 10) return `P${pos}`;
  return `P${pos}`;
}

function getPosClass(pos) {
  if (pos <= 3) return styles.posGold;
  if (pos <= 10) return styles.posPts;
  return styles.posOut;
}

export default function Home() {
  return (
    <>
      <div className={`${styles.page} page-enter`}>
        {/* ── HERO ── */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            {/* Gradient overlay + Alpine colors */}
            <div className={styles.heroOverlay} />
            <div className={styles.alpineAccent} />
          </div>

          {/* Alpine livery visual placeholder — swap with real img */}
          <div className={styles.heroImageWrap}>
            <img
              src="https://fotos.perfil.com/2026/01/23/trim/720/410/franco-colapinto-2174514.jpg"
              alt="Franco Colapinto Alpine 2025"
              className={styles.heroImage}
              onError={(e) => {
                // fallback: show styled placeholder if image fails
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className={styles.heroImageFallback}>
              <img
                src="https://media.ambito.com/p/862b0ee03cf7998bbb07d0f318917f6a/adjuntos/239/imagenes/042/142/0042142685/colapinto-alpinejpg.jpg"
                alt=""
              />
            </div>
          </div>

          <div className={styles.heroContent}>
            <img src="/circuits/logof1.webp" alt="" className={styles.f1Logo} />
            <div className={styles.heroEyebrow}>
              <span className={styles.alpineTag}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLloqWcfJCuaT3yp6GUmZygN6AhoJEKGI_qQ&s"
                  alt="Alpine Logo"
                  className={styles.alpineLogo}
                />
                Alpine F1 Team · 2026
              </span>
              <span className={styles.argentinaBadge}>🇦🇷 Argentina</span>
            </div>
            <h1 className={styles.heroName}>
              FRANCO
              <br />
              <span className={styles.heroRed}>COLAPINTO</span>
            </h1>
            <p className={styles.heroSub}>
              Número <strong className="bruno-ace-regular">#43</strong> · Piloto titular · Alpine Racing
            </p>
            <div className={styles.heroCtas}>
              <NavLink to="/history" className={styles.ctaPrimary}>
                Ver su historia
              </NavLink>
              <NavLink to="/f1-2026" className={styles.ctaSecondary}>
                Temporada 2026 →
              </NavLink>
            </div>
          </div>
        </section>

        {/* ── LAST RACE ── */}
        <section className={styles.section}>
          <SectionLabel>Última carrera disputada</SectionLabel>

          <div
            className={styles.lastRaceCard}
          >
            <div className={styles.lrLeft}>
              <div className={styles.lrFlag}>{races2026.flag}</div>
              <div>
                <div className={styles.lrGp}>{races2026.gp}</div>
                <div className={styles.lrMeta}>
                  {races2026.circuit} · {races2026.date}
                </div>
                <div className={styles.lrMeta} style={{ marginTop: 4 }}>
                  Salida desde: <strong>P{races2026.grid}</strong>
                </div>
              </div>
            </div>
            <div className={styles.lrRight}>
              <div className={`${styles.bigPos} ${getPosClass(races2026.pos)}`}>
                {getPosLabel(races2026.pos)}
              </div>
              <div className={styles.lrPts}>
                {races2026.pts > 0 ? (
                  <span className={styles.ptsGot}>+{races2026.pts} pts</span>
                ) : (
                  <span className={styles.ptsZero}>Sin puntos</span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── SEASON STATS ── */}
        <section className={styles.section}>
          <SectionLabel>Temporada 2026 — Resumen</SectionLabel>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statVal}>{totalPts2026}</div>
              <div className={styles.statLbl}>Puntos totales</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statVal}>
                {
                  racesData2026.results.filter((r) => r.status !== "canceled")
                    .length
                }
              </div>
              <div className={styles.statLbl}>Carreras disputadas</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statVal}>
                {racesData2026.results.filter((r) => r.pts > 0).length}
              </div>
              <div className={styles.statLbl}>Carreras con puntos</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statVal}>
                {Math.min(
                  ...racesData2026.results
                    .filter((r) => r.status !== "canceled" && r.pos > 0)
                    .map((r) => r.pos),
                )}
              </div>
              <div className={styles.statLbl}>Mejor resultado</div>
            </div>
          </div>
        </section>

        {/* ── NEXT RACE ── */}
        {nextRace2026 && (
          <section className={styles.section}>
            <SectionLabel>Próxima carrera</SectionLabel>

            <div className={styles.nextCard}>
              <div className={styles.nextLabel}>A continuación</div>
              <div className={styles.nextLabel}>Nos vemos en Canada PÁ</div>
              <div className={styles.nextFlag}>{nextRace2026.flag}</div>
              <div className={styles.nextGp}>{nextRace2026.gp}</div>
              <div className={styles.nextMeta}>
                {nextRace2026.circuit} · {nextRace2026.date}
              </div>
              <NavLink to="/f1-2026" className={styles.nextCta}>
                Ver calendario completo →
              </NavLink>
            </div>
          </section>
        )}

        {/* ── QUICK NAV ── */}
        <section className={styles.section}>
          <SectionLabel>Explorar</SectionLabel>
          <div className={styles.quickNav}>
            <NavLink to="/history" className={styles.qCard}>
              <div className={styles.qIcon}>🏁</div>
              <div className={styles.qTitle}>Historia</div>
              <div className={styles.qDesc}>Del karting a la F1</div>
            </NavLink>
            <NavLink to="/f1-2025" className={styles.qCard}>
              <div className={styles.qIcon}>📊</div>
              <div className={styles.qTitle}>F1 2025/24</div>
              <div className={styles.qDesc}>Resultados y calendario</div>
            </NavLink>
            <NavLink to="/partner-sponsor" className={styles.qCard}>
              <div className={styles.qIcon}>🎙️</div>
              <div className={styles.qTitle}>Sponsors/Partners/Apoyos</div>
              <div className={styles.qDesc}>Y mas sobre Franco Colapinto</div>
            </NavLink>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
