import { useState, useEffect } from "react";
import styles from "./CircuitModal.module.css";

const CircuitModal = ({ isOpen, onClose, gpData }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [shareMessage, setShareMessage] = useState("");

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
      "https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2021/5/18/ipsdfstmkuw0faah8vru/guide-circuit-monaco-formule-1",
      "https://operator-front-static-cdn.winamax.fr/img/editorial/2025/05/22/Monaco%20Layout.png",
      "https://www.2playbook.com/uploads/s1/45/52/99/gp-monaco-2024.jpeg",
    ],
    "Barcelona-Catalunya": [
      "https://www.2playbook.com/uploads/s1/33/27/60/circuit-de-catalunya-2023.jpeg",
      "https://cdn-imgix.headout.com/media/images/3778aeb84fa62f7f1a2ec0d9c982e552-F1%20Barcelona%202025%20Circuit%20Map%20for%20MB%20General%20Admission.png",
      "https://fotografias.lasexta.com/clipping/cmsimages02/2026/02/17/6ACFF01F-D0B7-4084-AE80-D49C527C55F5/circuit-barcelona-catalunya_103.jpg?crop=1707,1280,x109,y0&width=1200&height=900&optimize=low&format=webply",
    ],
    Spielberg: [
      "https://images.daznservices.com/di/library/DAZN_News/89/45/2024-06-30-verstappen-austria-red-bull-ring-circuit-f1-formula-1_12dfmkuq3vc651k7zuab3ng6vb.jpg?t=-1617578649",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEbK3cwUyEdne8m1svPyXqWlZw0NIxTvv81Q&s",
      "https://circuitomotor.com/wp-content/uploads/2024/01/Circuito-de-Austria-Red-Bull-Ring-Spielberg.jpg",
    ],
    "Silverstone (Sprint)": [
      "https://www.formulatours.com/wp-content/uploads/2020/02/Silverstone-F1-2021.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyr8jUagKRDD2Okz3QZBlGJulHOKdE2HVZZg&s",
      "https://admin.carburando.com/images/uploads/gp-silverstone-formula-1-motogp_1evqrslsd385y1e93cif1dzusp.jpg",
    ],
    "Spa-Francorchamps": [
      "https://img.asmedia.epimg.net/resizer/v2/ASEHRJGEJBHSHNP5WAMUGVBMDY.jpg?auth=6a296d549e664c0b84751777fc2cd0424b3e699d7795b95d35937a385825ff32&width=1472&height=828&smart=true",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdzg5cCVg_vG0fEjzzd5ZwgM4O9hvp9mklkg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2gQVBOK9pLcgrkKZUREaWNxtl2Q7WGc3sA&s",
    ],
    Budapest: [
      "https://www.news.gp/i/images/3689/f1-hungary-1_f.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoSiOBZyZRByUTtEZaborPC7Jzj6fr_bRbJw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQS6u8GwWOfgyalRdxmMb1Wi-cC8xkw5sIw&s",
    ],
    "Zandvoort (Sprint)": [
      "https://newsgpcdn.vshcdn.net/i/images/243/f1-dutch-grand-prix-2024_f.png",
      "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Netherlands_Circuit.webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6iOlBOrbCALMj_VEtohimhcDYBrqgQV2JsQ&s",
    ],
    Monza: [
      "https://matraxlubricantes.com/wp-content/uploads/2019/09/lo.jpg",
      "https://fbi.cults3d.com/uploaders/14667527/illustration-file/7475d448-97c9-4f9f-a9a9-420b9de61af7/image.png",
      "https://www.formulatours.com/wp-content/uploads/2020/02/italy-balcony-view-52773-4.jpeg",
    ],
    Madrid: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvfAbRO_8vpBdZTVTnYJJYj3YLmO5CPi1x1w&s",
      "https://pbs.twimg.com/media/GEhIU9BXIAAgnN0.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrtrYokrdnZ79zBsSLeGo4QM8qftLwfH72hA&s",
    ],
    Bakú: [
      "https://newsgpcdn.vshcdn.net/i/images/1445/baku-city-circuit-f1-cars-going-through-castle-section_f.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsh__XgGh4lP8diIGg3Fv6cHbmvYz-ONbuw&s",
      "https://st1.uvnimg.com/5d/6c/0cbc66a14be089d17e924043334e/09e1bea128cb4a61b36299f8dfc630e8",
    ],
    "Singapore (Sprint)": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJDjp7bpkOBl4Zj72vUgvdcq3ETD14aDCBg&s",
      "https://images.daznservices.com/di/library/DAZN_News/28/a4/circuito-marina-bay-gp-de-singapur-gran-premio-de-singapur-formula-1-f1_1k1olc1ugk7yv1txswzmqmhtxd.jpg?t=2134940323",
      "https://media.ambito.com/p/dfaefcc84b02df06e54b92767e8f2f5e/adjuntos/239/imagenes/042/822/0042822119/gp-singapur-2025.jpg",
    ],
    Austin: [
      "https://circuitomotor.com/wp-content/uploads/2024/01/Circuito-de-Austin-Texas.jpg",
      "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000001/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/USA_Circuit.webp",
      "https://images.adsttc.com/media/images/5720/2798/e58e/ce88/9200/0003/large_jpg/01_Observation_Tower.jpg?1461725068",
    ],
    "Ciudad de México": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnwS2OhBSVLgozCRvLyUBJjziyUtHR7-Avwg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9QE-RDkzUD1F2tLs2Yup6X2upcQHV0Pkvw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz-c9aJe6aIVK6hAka2w7QjzYGXjQqDn4Eog&s",
    ],
    "São Paulo": [
      "https://images.daznservices.com/di/library/DAZN_News/98/97/2021-11-10-2019-brazil-interlagos-circuit-sao-paulo-circuit-f1-formula-1_s3d27fndgf7x1pz3c0c2994xo.jpg?t=180701525",
      "https://alpha-assets.tadevel-cdn.com/67243256cd92e0b9c57c532d/720.webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ARWODm8eyz-pxPomOZy4Z02KSdJyaWu4rA&s",
    ],
    "Las Vegas": [
      "https://media.gq.com.mx/photos/645560d22f52f48c1a2e076e/16:9/w_2560%2Cc_limit/F1%2520LasVegas.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qTpWvzhllEGRhUa-8YVsb0QIEtn0Gs3hxg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgkbNAAtzvs9EAAzJoXLpkkWoTM8vbACRKyQ&s",
    ],
    Lusail: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdosauz50JaKHwrThUcdBzGMKc352zZyhTg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT5cM12YfGdzhPi9nIh1w2Kh5T7mEnyTHUeg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRaVEL-_osSwUOHgDmKgTIsYPlugGwCXb8ww&s",
    ],
    "Yas Marina": [
      "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_728/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/f0vchxm8k6xkoc2v2em7/VisitaalCircuitoYasMarinaenAbuDabi.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlPmUc_v8oQfuZ5ovenze68ctUQv-kt0flYg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh2DrbNROaBcJn-0So_YzGS3vfRsk9BEK6QQ&sg",
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
        race: "Domingo 24 May - 17:00",
      },
      Monaco: {
        fp1: "Jueves 5 Jun - 08:30",
        fp2: "Jueves 5 Jun - 12:00",
        fp3: "Sábado 6 Jun - 07:30",
        qualy: "Sábado 6 Jun - 11:00",
        sprint: null,
        race: "Domingo 7 Jun - 10:00",
      },
      "Barcelona-Catalunya": {
        fp1: "Viernes 12 Jun - 08:30",
        fp2: "Viernes 12 Jun - 12:00",
        fp3: "Sábado 13 Jun - 07:30",
        qualy: "Sábado 13 Jun - 11:00",
        sprint: null,
        race: "Domingo 14 Jun - 10:00",
      },
      Spielberg: {
        fp1: "Viernes 26 Jun - 08:30",
        fp2: "Viernes 26 Jun - 12:00",
        fp3: "Sábado 27 Jun - 07:30",
        qualy: "Sábado 27 Jun - 11:00",
        sprint: null,
        race: "Domingo 28 Jun - 10:00",
      },
      "Silverstone (Sprint)": {
        fp1: "Viernes 3 Jul - 08:30",
        qualySprint: "Viernes 3 Jul - 12:30",
        sprint: "Sábado 4 Jul - 08:00",
        qualy: "Sábado 4 Jul - 12:00",
        race: "Domingo 5 Jul - 11:00",
      },
      "Spa-Francorchamps": {
        fp1: "Viernes 17 Jul - 08:30",
        fp2: "Viernes 17 Jul - 12:00",
        fp3: "Sábado 18 Jul - 07:30",
        qualy: "Sábado 18 Jul - 11:00",
        sprint: null,
        race: "Domingo 19 Jul - 10:00",
      },
      Budapest: {
        fp1: "Viernes 24 Jul - 08:30",
        fp2: "Viernes 24 Jul - 12:00",
        fp3: "Sábado 25 Jul - 07:30",
        qualy: "Sábado 25 Jul - 11:00",
        sprint: null,
        race: "Domingo 26 Jul - 10:00",
      },
      "Zandvoort (Sprint)": {
        fp1: "Viernes 21 Ago - 07:30",
        qualySprint: "Viernes 21 Ago - 11:30",
        sprint: "Sábado 22 Ago - 07:00",
        qualy: "Sábado 22 Ago - 11:00",
        race: "Domingo 23 Ago - 10:00",
      },
      Monza: {
        fp1: "Viernes 4 Sep - 07:30",
        fp2: "Viernes 4 Sep - 11:00",
        fp3: "Sábado 5 Sep - 07:30",
        qualy: "Sábado 5 Sep - 11:00",
        sprint: null,
        race: "Domingo 6 Sep - 10:00",
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
    "/circuits/logof1.webp",
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

  // ========== FUNCIONES DE COMPARTIR ==========

  // Texto y URL a compartir
  const shareTitle = `🏁 ${gpData.gp} - Gran Premio de F1 2026`;
  const shareText = `¡No me pierdo el GP ${gpData.gp} en ${gpData.circuit}! 🏎️💨 Carrera: ${schedule.race}. #F1 #Colapinto #Alpine`;
  const shareUrl = window.location.href; // URL actual de la página
  const currentImageUrl = images[currentImageIndex];

  // Mostrar mensaje temporal
  const showTemporaryMessage = (msg) => {
    setShareMessage(msg);
    setTimeout(() => setShareMessage(""), 2000);
  };

  // Web Share API (móviles/tablets)
  const handleNativeShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        showTemporaryMessage("✅ ¡Compartido con éxito!");
      } else {
        // Si no soporta Web Share, mostrar menú manual
        setShowShareMenu(!showShareMenu);
      }
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error("Error al compartir:", err);
        showTemporaryMessage("❌ Error al compartir");
      }
    }
  };

  // Compartir a Instagram (abre la app o web)
  const shareToInstagram = () => {
    // Instagram no permite compartir texto directamente, solo imágenes
    // Abrimos Instagram Stories o feed
    const instagramUrl = `instagram://library?AssetPath=${encodeURIComponent(currentImageUrl)}`;
    const instagramWebUrl = "https://www.instagram.com";

    // Intentar abrir la app, si no, abrir web
    window.location.href = instagramUrl;
    setTimeout(() => {
      window.open(instagramWebUrl, "_blank");
    }, 500);

    showTemporaryMessage("📸 Abriendo Instagram...");
    setShowShareMenu(false);
  };

  // Compartir a TikTok (abre la app)
  const shareToTikTok = () => {
    const tiktokUrl = `tiktok://share?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    const tiktokWebUrl = "https://www.tiktok.com";

    window.location.href = tiktokUrl;
    setTimeout(() => {
      window.open(tiktokWebUrl, "_blank");
    }, 500);

    showTemporaryMessage("🎵 Abriendo TikTok...");
    setShowShareMenu(false);
  };

  // Compartir a Facebook
  const shareToFacebook = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(facebookShareUrl, "_blank", "width=600,height=400");
    showTemporaryMessage("📘 Abriendo Facebook...");
    setShowShareMenu(false);
  };

  // Compartir a Twitter/X
  const shareToTwitter = () => {
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterShareUrl, "_blank", "width=600,height=400");
    showTemporaryMessage("🐦 Abriendo Twitter...");
    setShowShareMenu(false);
  };

  // Compartir a WhatsApp
  const shareToWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
    window.open(whatsappUrl, "_blank");
    showTemporaryMessage("💬 Abriendo WhatsApp...");
    setShowShareMenu(false);
  };

  // Compartir a Telegram
  const shareToTelegram = () => {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(telegramUrl, "_blank");
    showTemporaryMessage("📱 Abriendo Telegram...");
    setShowShareMenu(false);
  };

  // Copiar al portapapeles
  const copyToClipboard = async () => {
    try {
      const textToCopy = `${shareText}\n${shareUrl}`;
      await navigator.clipboard.writeText(textToCopy);
      showTemporaryMessage("📋 ¡Copiado al portapapeles!");
    } catch {
      showTemporaryMessage("❌ No se pudo copiar");
    }
    setShowShareMenu(false);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        {/* Mensaje temporal flotante */}
        {shareMessage && (
          <div className={styles.shareMessage}>{shareMessage}</div>
        )}

        <div className={styles.modalHeader}>
          <span className={styles.modalFlag}>{gpData.flag}</span>
          <h2 className="mb-0">{gpData.gp}</h2>
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
        <div className={styles.shareContainer}>
          <button className={styles.shareButton} onClick={handleNativeShare}>
            📤 Compartir este GP
          </button>

          {/* Menú desplegable de redes sociales */}
          {showShareMenu && (
            <div className={styles.shareMenu}>
              <button onClick={shareToInstagram} className={styles.shareOption}>
                <span className={styles.shareIcon}>📸</span> Instagram
              </button>
              <button onClick={shareToTikTok} className={styles.shareOption}>
                <span className={styles.shareIcon}>🎵</span> TikTok
              </button>
              <button onClick={shareToFacebook} className={styles.shareOption}>
                <span className={styles.shareIcon}>📘</span> Facebook
              </button>
              <button onClick={shareToTwitter} className={styles.shareOption}>
                <span className={styles.shareIcon}>🐦</span> Twitter/X
              </button>
              <button onClick={shareToWhatsApp} className={styles.shareOption}>
                <span className={styles.shareIcon}>💬</span> WhatsApp
              </button>
              <button onClick={shareToTelegram} className={styles.shareOption}>
                <span className={styles.shareIcon}>📱</span> Telegram
              </button>
              <button onClick={copyToClipboard} className={styles.shareOption}>
                <span className={styles.shareIcon}>📋</span> Copiar enlace
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CircuitModal;
