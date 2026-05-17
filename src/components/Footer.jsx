import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogoWrapper}>
         <span className={styles.logo}>FC43</span>
        </div>

        <p className={styles.footerText}>
          © 2026 — Todos los derechos reservados.
          <br />
          Desarrollado por{" "}
          <a
            href="http://lucasfigueroa.online"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>🚀Lucas Figueroa</strong>
          </a>
          .
        </p>

        <p className={styles.footerDisclaimer}>
          Esta es una web de fans no oficial de Franco Colapinto. Los datos
          fueron investigados cuidadosamente para incluirlos.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
