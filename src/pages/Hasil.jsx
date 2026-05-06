import React, { useState } from "react";
import "../styles/Hasil.css";

// ROUTER
import { useLocation, useNavigate } from "react-router-dom";

// ICON
import { RotateCcw, ThumbsUp, ThumbsDown } from "lucide-react";

function Hasil() {
  const location = useLocation();
  const navigate = useNavigate();

  // DATA DARI HALAMAN SEBELUMNYA
  const hasilDariAI = location.state?.hasil || "organik";
  const imageDariAI =
    location.state?.image || "https://via.placeholder.com/250";

  const [feedback, setFeedback] = useState(null);

  // DATA DESKRIPSI 
  const hasilData = {
    organik: {
      result: "foto yang kamu kirim termasuk sampah Organik",
      desc:
        "Sampah organik adalah jenis sampah yang berasal dari bahan alami seperti sisa makanan, daun, dan buah-buahan yang mudah terurai.",
      solusi:
        "Sampah organik sebaiknya dipisahkan dan dapat diolah menjadi kompos yang bermanfaat bagi lingkungan.",
    },
    anorganik: {
      result: "foto yang kamu kirim termasuk sampah Anorganik",
      desc:
        "Sampah anorganik sulit terurai seperti plastik, kaca, dan logam.",
      solusi:
        "Pisahkan sampah anorganik dan lakukan daur ulang untuk mengurangi pencemaran lingkungan.",
    },
  };

  const data = hasilData[hasilDariAI];

  return (
    <div className="hasil-container">
      {/* TITLE */}
      <h1 className="hasil-title">EcoSortAI</h1>
      <p className="hasil-subtitle">Hasil Klasifikasi</p>

      {/* IMAGE (DINAMIS) */}
      <img src={imageDariAI} alt="hasil" className="hasil-img" />

      {/* RELOAD (BALIK KE UPLOAD) */}
      <div className="reload-btn">
        <button onClick={() => navigate("/")}>
          <RotateCcw size={22} />
        </button>
      </div>

      {/* BOX HASIL */}
      <div className="hasil-box">
        <h2>Halo sobat Hijau!</h2>
        <h3>{data?.result}</h3>

        <p>{data?.desc}</p>

        <h4>Bagaimana cara mengolahnya?</h4>
        <p>{data?.solusi}</p>

        <div className="hasil-image-box"></div>
      </div>

      {/* FEEDBACK */}
      <div className="feedback-box">
        <p className="feedback-title">
          Apakah Anda puas dengan EcoSortAI?
        </p>

        <div className="feedback-icons">
          <div
            className={`feedback-item ${
              feedback === "like" ? "active" : ""
            }`}
            onClick={() => setFeedback("like")}
          >
            <ThumbsUp size={40} />
            <span>Ya</span>
          </div>

          <div
            className={`feedback-item ${
              feedback === "dislike" ? "active" : ""
            }`}
            onClick={() => setFeedback("dislike")}
          >
            <ThumbsDown size={40} />
            <span>Tidak</span>
          </div>
        </div>

        <textarea placeholder="Tulis feedback anda disini..." />

        <button className="kirim-btn">Kirim Feedback</button>
      </div>
    </div>
  );
}

export default Hasil;