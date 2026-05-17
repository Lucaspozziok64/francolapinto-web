import { useState, useEffect } from "react";
import styles from "./CircuitModal.module.css";

const CircuitModal = ({ isOpen, onClose, gpData }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cerrar con tecla ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Mapeo de imágenes por circuito
  const circuitImages = {
    "Montreal (Sprint)": [
      "https://images.daznservices.com/di/library/DAZN_News/2d/2e/formel-1-f1-montreal-kanada-2018_141sg1g9p0s12179365c2xkqhn.png?t=1690866913",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCF9jGQWU7CFWgCvVVsGCSA4nrKdyg2vsD7w&s",
      "https://www.autohebdo.fr/app/uploads/2024/06/DPPI_00123020_408.jpg",
    ],
    Monaco: [
      "/circuits/monaco-1.jpg",
      "/circuits/monaco-2.jpg",
      "/circuits/monaco-3.jpg",
    ],
    "Barcelona-Catalunya": [
      "/circuits/barcelona-1.jpg",
      "/circuits/barcelona-2.jpg",
      "/circuits/barcelona-3.jpg",
    ],
    Spielberg: [
      "/circuits/austria-1.jpg",
      "/circuits/austria-2.jpg",
      "/circuits/austria-3.jpg",
    ],
    "Silverstone (Sprint)": [
      "/circuits/silverstone-1.jpg",
      "/circuits/silverstone-2.jpg",
      "/circuits/silverstone-3.jpg",
    ],
    "Spa-Francorchamps": [
      "/circuits/spa-1.jpg",
      "/circuits/spa-2.jpg",
      "/circuits/spa-3.jpg",
    ],
    Budapest: [
      "/circuits/hungary-1.jpg",
      "/circuits/hungary-2.jpg",
      "/circuits/hungary-3.jpg",
    ],
    "Zandvoort (Sprint)": [
      "/circuits/zandvoort-1.jpg",
      "/circuits/zandvoort-2.jpg",
      "/circuits/zandvoort-3.jpg",
    ],
    Monza: [
      "/circuits/monza-1.jpg",
      "/circuits/monza-2.jpg",
      "/circuits/monza-3.jpg",
    ],
    Madrid: [
      "/circuits/madrid-1.jpg",
      "/circuits/madrid-2.jpg",
      "/circuits/madrid-3.jpg",
    ],
    Bakú: [
      "/circuits/baku-1.jpg",
      "/circuits/baku-2.jpg",
      "/circuits/baku-3.jpg",
    ],
    "Singapore (Sprint)": [
      "/circuits/singapore-1.jpg",
      "/circuits/singapore-2.jpg",
      "/circuits/singapore-3.jpg",
    ],
    Austin: [
      "/circuits/austin-1.jpg",
      "/circuits/austin-2.jpg",
      "/circuits/austin-3.jpg",
    ],
    "Ciudad de México": [
      "/circuits/mexico-1.jpg",
      "/circuits/mexico-2.jpg",
      "/circuits/mexico-3.jpg",
    ],
    "São Paulo": [
      "/circuits/brazil-1.jpg",
      "/circuits/brazil-2.jpg",
      "/circuits/brazil-3.jpg",
    ],
    "Las Vegas": [
      "/circuits/vegas-1.jpg",
      "/circuits/vegas-2.jpg",
      "/circuits/vegas-3.jpg",
    ],
    Lusail: [
      "/circuits/qatar-1.jpg",
      "/circuits/qatar-2.jpg",
      "/circuits/qatar-3.jpg",
    ],
    "Yas Marina": [
      "/circuits/abudhabi-1.jpg",
      "/circuits/abudhabi-2.jpg",
      "/circuits/abudhabi-3.jpg",
    ],
  };

  // Horarios Argentina (ejemplo - ajustar según GP real)
  const getSchedule = (circuit) => {
    const schedules = {
      "Montreal (Sprint)": {
        fp1: "Viernes 22 May - 13:30",
        qualySprint: "Viernes 22 May - 17:30",
        sprint: "Sábado 23 May - 13:00",
        qualy: "Sábado 23 May - 17:00",
        race: "Domingo 24 May - 15:00",
      },
      Monaco: {
        fp1: "Jue 5 Jun - 08:30",
        fp2: "Jue 5 Jun - 12:00",
        fp3: "Sáb 6 Jun - 07:30",
        qualy: "Sáb 6 Jun - 11:00",
        sprint: null,
        race: "Dom 7 Jun - 10:00",
      },
      "Barcelona-Catalunya": {
        fp1: "Vie 12 Jun - 08:30",
        fp2: "Vie 12 Jun - 12:00",
        fp3: "Sáb 13 Jun - 07:30",
        qualy: "Sáb 13 Jun - 11:00",
        sprint: null,
        race: "Dom 14 Jun - 10:00",
      },
      Spielberg: {
        fp1: "Vie 26 Jun - 08:30",
        fp2: "Vie 26 Jun - 12:00",
        fp3: "Sáb 27 Jun - 07:30",
        qualy: "Sáb 27 Jun - 11:00",
        sprint: null,
        race: "Dom 28 Jun - 10:00",
      },
      "Silverstone (Sprint)": {
        fp1: "Vie 3 Jul - 08:30",
        qualySprint: "Vie 3 Jul - 12:30",
        sprint: "Sáb 4 Jul - 08:00",
        qualy: "Sáb 4 Jul - 12:00",
        race: "Dom 5 Jul - 11:00",
      },
      "Spa-Francorchamps": {
        fp1: "Vie 17 Jul - 08:30",
        fp2: "Vie 17 Jul - 12:00",
        fp3: "Sáb 18 Jul - 07:30",
        qualy: "Sáb 18 Jul - 11:00",
        sprint: null,
        race: "Dom 19 Jul - 10:00",
      },
      Budapest: {
        fp1: "Vie 24 Jul - 08:30",
        fp2: "Vie 24 Jul - 12:00",
        fp3: "Sáb 25 Jul - 07:30",
        qualy: "Sáb 25 Jul - 11:00",
        sprint: null,
        race: "Dom 26 Jul - 10:00",
      },
      "Zandvoort (Sprint)": {
        fp1: "Vie 21 Ago - 07:30",
        qualySprint: "Vie 21 Ago - 11:30",
        sprint: "Sáb 22 Ago - 07:00",
        qualy: "Sáb 22 Ago - 11:00",
        race: "Dom 23 Ago - 10:00",
      },
      Monza: {
        fp1: "Vie 4 Sep - 07:30",
        fp2: "Vie 4 Sep - 11:00",
        fp3: "Sáb 5 Sep - 07:30",
        qualy: "Sáb 5 Sep - 11:00",
        sprint: null,
        race: "Dom 6 Sep - 10:00",
      },
      Madrid: {
        fp1: "Viernes 11 Sep - 08:30",
        fp2: "Viernes 11 Sep - 12:00",
        fp3: "Sábado 12 Sep - 07:30",
        qualy: "Sábado 12 Sep - 11:00",
        race: "Domingo 13 Sep - 10:00",
      },
      Bakú: {
        fp1: "Viernes 24 Sep - 05:30",
        fp2: "Viernes 24 Sep - 09:00",
        fp3: "Sábado 25 Sep - 05:30",
        qualy: "Sábado 25 Sep - 09:00",
        race: "Domingo 26 Sep - 08:00",
      },
      "Singapore (Sprint)": {
        fp1: "Viernes 9 Oct - 05:30",
        qualySprint: "Viernes 9 Oct - 09:30",
        sprint: "Sábado 10 Oct - 06:00",
        qualy: "Sábado 10 Oct - 10:00",
        race: "Domingo 11 Oct - 09:00",
      },
      Austin: {
        fp1: "Viernes 23 Oct - 14:30",
        fp2: "Viernes 23 Oct - 18:00",
        fp3: "Sábado 24 Oct - 14:30",
        qualy: "Sábado 24 Oct - 18:00",
        race: "Domingo 25 Oct - 17:00",
      },
      "Ciudad de México": {
        fp1: "Viernes 30 Oct - 15:30",
        fp2: "Viernes 30 Oct - 19:00",
        fp3: "Sábado 31 Oct - 14:30",
        qualy: "Sábado 31 Oct - 18:00",
        race: "Domingo 1 Nov - 17:00",
      },
      "São Paulo": {
        fp1: "Viernes 6 Nov - 12:30",
        fp2: "Viernes 6 Nov - 16:00",
        fp3: "Viernes 6 Nov - 11:30",
        qualy: "Sábado 7 Nov - 15:00",
        race: "Domingo 8 Nov - 14:00",
      },
      "Las Vegas": {
        fp1: "Jueves 19 Nov - 21:30",
        fp2: "Jueves 19 Nov - 01:00",
        fp3: "Viernes 20 Nov - 21:30",
        qualy: "Viernes 20 Nov - 01:00",
        race: "Sábado 21 Nov - 01:00",
      },
      Lusail: {
        fp1: "Viernes 27 Nov - 10:30",
        fp2: "Viernes 27 Nov - 14:00",
        fp3: "Sábado 28 Nov - 11:30",
        qualy: "Sábado 28 Nov - 15:00",
        race: "Domingo 29 Nov - 13:00",
      },
      "Yas Marina": {
        fp1: "Viernes 4 Dic - 06:30",
        fp2: "Viernes 4 Dic - 10:00",
        fp3: "Sábado 5 Dic - 07:30",
        qualy: "Sábado 5 Dic - 11:00",
        race: "Domingo 6 Dic - 10:00",
      },
    };
    return schedules[circuit] || schedules.Monza;
  };

  const images = circuitImages[gpData.circuit] || [
    "/circuits/default-1.jpg",
    "/circuits/default-2.jpg",
    "/circuits/default-3.jpg",
  ];
  const schedule = getSchedule(gpData.circuit);
  const hasSprint = gpData.circuit.includes("Sprint");

  // Definir las sesiones según el tipo de fin de semana
  const getSessions = () => {
    if (hasSprint) {
      // Formato Sprint: FP1, Clasificación Sprint, Sprint, Clasificación, Carrera
      return [
        { label: "Práctica 1 (FP1)", value: schedule.fp1, key: "fp1" },
        {
          label: "Clasificación Sprint",
          value: schedule.qualySprint,
          key: "qualySprint",
        },
        { label: "Carrera Sprint", value: schedule.sprint, key: "sprint" },
        { label: "Clasificación (Qualy)", value: schedule.qualy, key: "qualy" },
        {
          label: "🏁 Carrera",
          value: schedule.race,
          key: "race",
          isRace: true,
        },
      ];
    } else {
      // Formato Normal: FP1, FP2, FP3, Clasificación, Carrera
      return [
        { label: "Práctica 1 (FP1)", value: schedule.fp1, key: "fp1" },
        { label: "Práctica 2 (FP2)", value: schedule.fp2, key: "fp2" },
        { label: "Práctica 3 (FP3)", value: schedule.fp3, key: "fp3" },
        { label: "Clasificación (Qualy)", value: schedule.qualy, key: "qualy" },
        {
          label: "🏁 Carrera",
          value: schedule.race,
          key: "race",
          isRace: true,
        },
      ];
    }
  };

  const sessions = getSessions();

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <div className={styles.modalHeader}>
          <span className={styles.modalFlag}>{gpData.flag}</span>
          <h2>{gpData.gp}</h2>
          <p className={styles.modalCircuit}>{gpData.circuit}</p>
          <p className={styles.modalDate}>{gpData.date}</p>
        </div>

        {/* Carrusel */}
        <div className={styles.carouselContainer}>
          <button className={styles.carouselBtnPrev} onClick={prevImage}>
            ‹
          </button>
          <div className={styles.carouselImageContainer}>
            <img
              src={images[currentImageIndex]}
              alt={`${gpData.circuit} - Imagen ${currentImageIndex + 1}`}
              className={styles.carouselImage}
            />
            <div className={styles.imageCounter}>
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
          <button className={styles.carouselBtnNext} onClick={nextImage}>
            ›
          </button>
        </div>

        {/* Horarios */}
        <div className={styles.scheduleContainer}>
          <h3>
            <span className={styles.argentinaBadge}>Horarios 🇦🇷 Argentina</span>
          </h3>
          <div className={styles.scheduleGrid}>
            {sessions.map((session, idx) => (
              <div
                key={idx}
                className={`${styles.scheduleItem} ${session.isRace ? styles.raceItem : ""}`}
              >
                <span className={styles.scheduleLabel}>{session.label}</span>
                <span className={styles.scheduleTime}>{session.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircuitModal;
