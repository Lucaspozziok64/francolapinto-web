import SectionLabel from "../components/SectionLabel";
import styles from "./Home.module.css";
import racesData2026 from "../data/races2026.json";
import { NavLink } from "react-router";
import Footer from "../components/Footer";
import { useState } from "react";

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
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState("");

  function openModal(videoKey) {
    if (videoKey === "video1") {
      setCurrentVideoSrc(
        "https://res.cloudinary.com/dduqetzqk/video/upload/v1779119852/SnapInsta.to_AQOK-LHxK70GNvRN_Jy5Wch8_o3YH3uln0aV5zHbpjkNtra_3DpmmMBnPFnP9KATViWe52mbmU1JFCTqQZPCpgjxMXeVVSaDgAlKUw8_ljqrzm.mp4",
      );
    }
    if (videoKey == "video2") {
      setCurrentVideoSrc(
        "https://res.cloudinary.com/dduqetzqk/video/upload/v1779121780/SnapInsta.to_AQNXtXuH2yfdfQFIxjyJbZXKCoAaK42YcFWz9-QbLavGoQGuDeDJhdAmOA_liB5_a3xPzjdMWlZG1HsDonM6wr2cVKDFrFhrfWnY1sk_grvcwz.mp4",
      );
    } else if (videoKey === "video3") {
      setCurrentVideoSrc(
        "https://res.cloudinary.com/dduqetzqk/video/upload/v1779121971/SnapInsta.to_AQM6hXJ2W9sX9z16sSdLd9FraEre2h0zFkieWddaO8KcKkeoBuYDJw80G9vbOmKM1f944uWZ2ALFuFyXAvRwnF-fGh90pRtI1IqZ9Rs_ednpcj.mp4",
      );
    } else if (videoKey === "video4") {
      setCurrentVideoSrc(
        "https://res.cloudinary.com/dduqetzqk/video/upload/v1779128989/SnapInsta.to_AQM3kPD-e4gANOQ0sy6iScuzxPI2-giLfRMtNp8oH1KF53bAayCZOiE2hJ4heRTbQtnhGZZKUTgZuQtXVYfb4E4r6ruuTOHOxJblg04_rfnjdo.mp4",
      );
    } else if (videoKey === "video5") {
      setCurrentVideoSrc(
        "https://res.cloudinary.com/dduqetzqk/video/upload/v1779128611/SnapInsta.to_AQNWmmutSWPpj70giQ_v1U4s05OQzMwYaeiWjyYTyjlm9UFngW74-l9sVRzhRd6rieuA48L8ok7_Dwr1--hQ1Hrq5-5go2w4CO75WzY_iklecr.mp4",
      );
    } else if (videoKey === "birthday") {
      // Video especial de cumpleaños - Usá tu URL aquí
      setCurrentVideoSrc(
        "https://res.cloudinary.com/dduqetzqk/video/upload/v1779921729/SnapInsta.to_AQOvH9eAQSqt-7KRseA4fOfsMTMYmATWxMQpdz83-0MFtvUZC1L2PQzaIJ2L7Tp5bt5elXgaK4EOew98ljoJ33FZVPWdzAPbIag_wRA_vy8net.mp4",
      );
    }
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setCurrentVideoSrc("");
  }
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
              Número <strong className="bruno-ace-regular">#43</strong> · Piloto
              titular · Alpine Racing
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

        {/* ── TICKER CORREDIZO ── */}
        <div className={styles.tickerWrapper}>
          <div className={styles.ticker}>
            <div className={styles.tickerContent}>
              🏆 ¡HISTÓRICO! 🏆 Franco Colapinto logra su MEJOR POSICIÓN hasta
              la fecha:
              <strong className={styles.tickerP6}> ¡P6!</strong> Sumando
              <strong className={styles.tickerPoints}> 8 PUNTOS</strong> 🇦🇷🏎️✨
              • 🌟 El argentino brilla en F1 • 🏁 Supera su propio récord • 💪
              Demuestra todo su talento • 🇦🇷 Orgullo argentino en la máxima
              categoría • 🔥 La carrera más emocionante de la temporada sucedio en Canadá • 📈
              Sube en el campeonato de pilotos • 🎯 Objetivo: seguir sumando
              puntos •
            </div>
          </div>
        </div>

        {/* ── LAST RACE ── */}
        <section className={styles.section}>
          <SectionLabel>Última carrera disputada</SectionLabel>

          <div className={styles.lastRaceCard}>
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
              <div className={styles.nextLabel}>
                Nos vemos en {nextRace2026.gp} PÁ
              </div>
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
      {/* ── EXHIBICIÓN BS AS ── */}
      <section className={styles.section}>
        <SectionLabel>🇦🇷 Colapinto en las calles de CABA</SectionLabel>
        <div className={styles.expoGrid}>
          <div className={styles.expoCard} onClick={() => openModal("video1")}>
            <img
              src="https://res.cloudinary.com/dduqetzqk/image/upload/v1779120810/SnapInsta.to_674549225_18585799516008402_2389487927485289870_n_1080_ugzxlv.jpg"
              alt="Auto V8 saliendo"
            />
            <div className={styles.playIcon}>▶</div>
            <img
              src="/circuits/logof1.webp"
              alt="Imagen de Colapinto"
              className={styles.f1Logo}
            />
          </div>
          <div className={styles.expoCard}>
            <img
              src="https://res.cloudinary.com/dduqetzqk/image/upload/v1779123860/SnapInsta.to_675363519_18585799504008402_5494057017362921771_n_xi9n70.jpg"
              alt="Auto V8 saliendo"
            />
            <img
              src="/circuits/logof1.webp"
              alt="Imagen de Colapinto"
              className={styles.f1Logo}
            />
          </div>
          <div className={styles.expoCard}>
            <img
              src="https://res.cloudinary.com/dduqetzqk/image/upload/v1779123865/SnapInsta.to_682115355_18585799495008402_8730395449085486051_n_bx74jw.jpg"
              alt="Colapinto con los autos"
            />
            <img
              src="/circuits/logof1.webp"
              alt="Imagen de Colapinto"
              className={styles.f1Logo}
            />
          </div>
          <div className={styles.expoCard}>
            <img
              src="https://res.cloudinary.com/dduqetzqk/image/upload/v1779123845/SnapInsta.to_675460992_18585799585008402_8306726373912183576_n_qu8tbh.jpg"
              alt="Colapinto con los autos"
            />
            <img
              src="/circuits/logof1.webp"
              alt="Imagen de Colapinto"
              className={styles.f1Logo}
            />
          </div>
          <div className={styles.expoCard}>
            <img
              src="https://res.cloudinary.com/dduqetzqk/image/upload/v1779123838/SnapInsta.to_682077512_18585799573008402_8721296666406986794_n_famdxe.jpg"
              alt="Colapinto con los autos"
            />
            <img
              src="/circuits/logof1.webp"
              alt="Imagen de Colapinto"
              className={styles.f1Logo}
            />
          </div>
        </div>
      </section>
      {/* ── EXHIBICIÓN BS AS ── */}
      <section className={styles.section}>
        <SectionLabel>🇦🇷 Exhibición en Buenos Aires 2026</SectionLabel>
        <div className={styles.expoGrid}>
          <div className={styles.expoCard} onClick={() => openModal("video2")}>
            <img
              src="https://media.tycsports.com/files/2026/04/26/944370/buenos-aires-se-paraliza-por-una-multitudinaria-exhibicion-callejera-de-franco-colapinto_1440x810_wmk.webp"
              alt="Colapinto con los autos"
            />
            <div className={styles.playIcon}>▶</div>
            <p className="bruno-ace-regular">Road Show sin manos🚀</p>
          </div>
          <div className={styles.expoCard} onClick={() => openModal("video3")}>
            <img
              src="https://lavozdetarija.com/wp-content/uploads/2026/04/Colapinto-BsAS.jpg"
              alt="Colapinto con los autos"
            />
            <div className={styles.playIcon}>▶</div>
            <p className="bruno-ace-regular">Road Show 🚀</p>
          </div>
          <div className={styles.expoCard} onClick={() => openModal("video4")}>
            <img
              src="https://images-tools.cadena3.com/tools/r/67e260ed-99e5-4b7e-b490-8be5aecf9601.jpg?width=1200&height=763"
              alt="Colapinto con los autos"
            />
            <div className={styles.playIcon}>▶</div>
            <p className="bruno-ace-regular">Road Show 🚀</p>
          </div>
          <div className={styles.expoCard} onClick={() => openModal("video5")}>
            <img
              src="https://media.minutouno.com/p/72dae3f2cb2cfa6e98a58cffb33b451d/adjuntos/150/imagenes/043/271/0043271304/a-que-hora-empieza-el-road-show-franco-colapinto-buenos-aires.jpg"
              alt="Colapinto con los autos"
            />
            <div className={styles.playIcon}>▶</div>
            <p className="bruno-ace-regular">Road Show 🚀</p>
          </div>
        </div>
      </section>

      {/* Modal (al final del div .page o antes del Footer) */}
      {modalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeModal} onClick={closeModal}>
              ✕
            </button>
            <video controls autoPlay>
              <source src={currentVideoSrc} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
