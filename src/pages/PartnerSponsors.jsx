import SectionLabel from "../components/SectionLabel";
import styles from "./PartnerSponsors.module.css";

export default function PartnerSponsors() {

  return (
    <>
      <div className={`${styles.page} page-enter`}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Sponsors · Partners · Apoyos</div>
          <h1 className={styles.title}>
            Partners
            <br />
            <span>& Sponsors</span>
          </h1>
        </div>

        <div className={styles.content}>
          <SectionLabel>Principales empresas</SectionLabel>
          <div className={styles.partnerGrid}>
            <div className={styles.partnerCard}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNICLXAjwC2pbg18zkIJ6xsNak12vYkaF5A&s"
                alt="Mercado Libre"
                className={styles.partnerLogo}
              />
              <div className={styles.partnerInfo}>
                <h3>Mercado Libre</h3>
                <p>
                  E-commerce líder en Latinoamérica, apoyo clave en su carrera.
                </p>
              </div>
            </div>
            <div className={styles.partnerCard}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMrmQJ-B0Yn5NW9_IPxPJEsvK5u7rD6zORvg&s"
                alt="Globant"
                className={styles.partnerLogo}
              />
              <div className={styles.partnerInfo}>
                <h3>Globant</h3>
                <p>Compañía de tecnología global que impulsa innovación.</p>
              </div>
            </div>
            <div className={styles.partnerCard}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpUy3dImynjRICZ69_VlIfmZGnBtyZ-EuQ4w&s"
                alt="YPF"
                className={styles.partnerLogo}
              />
              <div className={styles.partnerInfo}>
                <h3>YPF</h3>
                <p>La petrolera argentina más importante, respaldo nacional.</p>
              </div>
            </div>
            <div className={styles.partnerCard}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk515hwUdQ29tPuS7UbVSgWWCc_okwH0kEEQ&s"
                alt="Claro"
                className={styles.partnerLogo}
              />
              <div className={styles.partnerInfo}>
                <h3>Claro</h3>
                <p>Telecomunicaciones y conectividad en toda la región.</p>
              </div>
            </div>
          </div>

          <SectionLabel>Servicios y consumo</SectionLabel>
          <div className={styles.partnerGrid}>
            <div className={styles.partnerCard}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCTwtmGV1cvnVQaEYdllsqRym9iftJ_NsNsg&s"
                alt="Pax Assistance"
                className={styles.partnerLogo}
              />
              <div className={styles.partnerInfo}>
                <h3>Pax Assistance</h3>
                <p>Cobertura y asistencia integral para viajes.</p>
              </div>
            </div>
            <div className={styles.partnerCard}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6nOH6KjV8UUUon7mS6ZS85vL-ik14yWlYA&s"
                alt="Flybondi"
                className={styles.partnerLogo}
              />
              <div className={styles.partnerInfo}>
                <h3>Flybondi</h3>
                <p>Aerolínea low-cost argentina, conectando destinos.</p>
              </div>
            </div>
            <div className={styles.partnerCard}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr8JH02K_SdApMGZBbmfYMPpyv8FrwDh7NPw&s"
                alt="Ripio"
                className={styles.partnerLogo}
              />
              <div className={styles.partnerInfo}>
                <h3>Ripio</h3>
                <p>Plataforma de criptomonedas y finanzas digitales.</p>
              </div>
            </div>
            <div className={styles.partnerCard}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4aHHi9nkPirolCHU7ebJRR9RdAXPd5ohzZg&s"
                alt="Latin Securities"
                className={styles.partnerLogo}
              />
              <div className={styles.partnerInfo}>
                <h3>Latin Securities</h3>
                <p>Firma de inversiones y asesoramiento financiero.</p>
              </div>
            </div>
          </div>

          <SectionLabel>Personalidades</SectionLabel>
          <div className={styles.partnerGrid}>
            <div className={styles.partnerCard}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzeAFprXrLS_x7SjEGwtd_Mj5kWGWy-2zU3A&s"
                alt="Bizarrap"
                className={styles.partnerLogo}
              />
              <div className={styles.partnerInfo}>
                <h3>Bizarrap</h3>
                <p>
                  Productor musical y artista internacional, apoyo personal.
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "40px" }}>
            <SectionLabel>Libro autobiográfico</SectionLabel>
            <div className={styles.bookCard}>
              <div className={styles.bookCover}></div>
              <div className={styles.bookInfo}>
                <div className={styles.bookTitle}>SOY FRANCO</div>
                <div className={styles.bookAuthor}>Franco Colapinto</div>
                <p className={styles.bookDesc}>
                  Franco narra en primera persona su trayecto desde los kartings
                  en Pilar hasta las luces de salida de la Fórmula 1. Una
                  historia de sacrificio, familia y pasión que inspira a la
                  nueva generación de fanáticos latinoamericanos del
                  automovilismo.
                </p>
                <a
                  href="https://www.mercadolibre.com.ar/a/product/colapinto-cuenta-su-historia-por-primera-vez?fbclid=PAdGRleANnPcZleHRuA2FlbQIxMQABp8R7UfnZok1ksOMiERrq-KpuvQDzNgohWBC-AvsttIrPQV9cu4Ws4kCp4uPf_aem_cEPcCvbknN7O9oDJW_Es3w&skipInApp=true&utm_source=ig&utm_medium=social&utm_content=link_in_bio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.bookCta}
                >
                  Buscar libro →
                </a>
              </div>
            </div>
            <div className={styles.bookCard}>
              <div className={styles.bookCoverKid}></div>
              <div className={styles.bookInfo}>
                <div className={styles.bookTitle}>NACI PARA CORRER</div>
                <div className={styles.bookAuthor}>
                  Su libro para los más pequeños
                </div>
                <p className={styles.bookDesc}>
                  Un libro ilustrado para chicos y chicas que sueñan en grande.
                  Una historia llena de pasión, esfuerzo y aventuras sobre
                  ruedas, con un mensaje claro: nunca hay que bajar los brazos.
                  Con ilustraciones coloridas y un tono inspirador, este libro
                  muestra que ningún sueño es demasiado grande si te animás a
                  perseguirlo. A través de su recorrido, Franco transmite
                  valores como la humildad, la perseverancia y la confianza en
                  uno mismo, claves para alcanzar cualquier meta.
                </p>
                <a
                  href="https://www.mercadolibre.com.ar/a/product/colapinto-cuenta-su-historia-por-primera-vez?fbclid=PAdGRleANnPcZleHRuA2FlbQIxMQABp8R7UfnZok1ksOMiERrq-KpuvQDzNgohWBC-AvsttIrPQV9cu4Ws4kCp4uPf_aem_cEPcCvbknN7O9oDJW_Es3w&skipInApp=true&utm_source=ig&utm_medium=social&utm_content=link_in_bio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.bookCta}
                >
                  Buscar libro →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
