import { useEffect, useState } from "react";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowModal(true);
    });
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log("User response:", outcome);
      setDeferredPrompt(null);
      setShowModal(false);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <span style={styles.logo}>FC43</span>
        <h3 style={styles.title}>Instalar Franco Colapinto #43</h3>
        <div style={styles.actions}>
          <button onClick={handleInstall} style={styles.installButton}>
            Instalar
          </button>
          <button onClick={handleClose} style={styles.closeButton}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex", alignItems: "center", justifyContent: "center",
    zIndex: 9999
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    minWidth: "250px",
    position: "relative",
    fontFamily: "'Barlow', sans-serif" // usa la fuente que importaste en index.html
  },
  logo: {
    fontFamily: "'Bruno Ace', sans-serif", // fuente específica para el logo
    fontSize: "20px",
    fontWeight: "bold",
    color: "#3d71d1",
    display: "block",
    marginBottom: "10px"
  },
  title: {
    color: "#000", // texto negro
    fontSize: "18px",
    marginBottom: "15px"
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "15px"
  },
  installButton: {
    padding: "8px 16px",
    background: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  closeButton: {
    padding: "8px 16px",
    background: "#ccc",
    color: "#000",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }
};
