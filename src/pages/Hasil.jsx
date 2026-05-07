import React, {
  useState,
  useEffect,
} from "react";

import "../styles/Hasil.css";

// ROUTER
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

// ICON
import { RotateCcw } from "lucide-react";

function Hasil() {

  const location = useLocation();
  const navigate = useNavigate();

  // DATA DARI HALAMAN SEBELUMNYA
  const hasilDariAI =
    location.state?.hasil || "organik";

  const imageDariAI =
    location.state?.image ||
    "https://via.placeholder.com/250";

  const [feedback, setFeedback] =
    useState(null);

  // DATA HASIL
  const hasilData = {

    organik: {
      kategori: "Organik",
      akurasi: "96%",

      result:
        "Foto yang kamu kirim termasuk sampah Organik.",

      desc:
        "Sampah organik berasal dari bahan alami seperti sisa makanan, daun, buah, dan bahan yang mudah terurai secara alami.",

      dampak:
        "Jika tidak dikelola dengan baik, sampah organik dapat menimbulkan bau tidak sedap, menghasilkan gas metana, dan mencemari lingkungan sekitar.",

      solusi:
        "Pisahkan sampah organik dan olah menjadi kompos agar lebih bermanfaat bagi lingkungan.",
    },

    anorganik: {
      kategori: "Anorganik",
      akurasi: "92%",

      result:
        "Foto yang kamu kirim termasuk sampah Anorganik.",

      desc:
        "Sampah anorganik sulit terurai seperti plastik, kaca, kaleng, dan logam.",

      dampak:
        "Sampah anorganik dapat mencemari tanah dan laut jika tidak didaur ulang dengan baik.",

      solusi:
        "Pisahkan sampah anorganik dan lakukan daur ulang untuk mengurangi pencemaran lingkungan.",
    },

  };

  const data = hasilData[hasilDariAI];

  // ===== AUTO SAVE HISTORY =====
  useEffect(() => {

    const oldHistory =
      JSON.parse(
        localStorage.getItem("history")
      ) || [];

    const newData = {
      image: imageDariAI,
      hasil: data?.kategori,
      date: new Date().toLocaleString(),
    };

    // BIAR TIDAK DOBEL TERUS
    const isExist = oldHistory.some(
      (item) =>
        item.image === newData.image
    );

    if (!isExist) {

      const updatedHistory = [
        newData,
        ...oldHistory,
      ];

      localStorage.setItem(
        "history",
        JSON.stringify(updatedHistory)
      );

    }

  }, []);

  return (
    <div className="hasil-container">

      {/* HEADER */}
      <div className="hasil-header">

        <h1>EcoSortAI</h1>

      </div>

      {/* TITLE */}
      <div className="hasil-title-box">

        <h2>Hasil Klasifikasi AI</h2>

        <p>
          EcoSortAI berhasil menganalisis
          gambar sampah yang kamu upload
        </p>

      </div>

      {/* IMAGE */}
      <div className="hasil-image-section">

        <img
          src={imageDariAI}
          alt="hasil"
          className="hasil-img"
        />

      </div>

      {/* BADGE */}
      <div className="badge-group">

        <span className="badge kategori">
          {data?.kategori}
        </span>

        <span className="badge akurasi">
          Accuracy {data?.akurasi}
        </span>

      </div>

      {/* ACTION BUTTON */}
      <div className="action-buttons">

        {/* UPLOAD ULANG */}
        <button
          className="retry-btn"
          onClick={() => navigate("/")}
        >
          Upload Ulang
        </button>

        {/* REFRESH */}
        <button
          className="retry-btn secondary"
          onClick={() =>
            window.location.reload()
          }
        >
          <RotateCcw size={18} />
          Refresh Hasil
        </button>

        {/* HISTORY */}
        <button
          className="retry-btn history-btn"
          onClick={() =>
            navigate("/history")
          }
        >
          Lihat Riwayat
        </button>

      </div>

      {/* CONTENT */}
      <div className="hasil-content">

        {/* RESULT */}
        <div className="info-box">

          <h3>{data?.result}</h3>

        </div>

        {/* SECTION 1 */}
        <div className="info-box">

          <div className="section-box">

            <div className="section-number">
              1
            </div>

            <div className="section-content">

              <h4>
                Tentang Sampah
              </h4>

              <div className="line"></div>

              <p>{data?.desc}</p>

            </div>

          </div>

        </div>

        {/* SECTION 2 */}
        <div className="info-box">

          <div className="section-box">

            <div className="section-number">
              2
            </div>

            <div className="section-content">

              <h4>
                Dampak Lingkungan
              </h4>

              <div className="line"></div>

              <p>{data?.dampak}</p>

            </div>

          </div>

        </div>

        {/* SECTION 3 */}
        <div className="info-box">

          <div className="section-box">

            <div className="section-number">
              3
            </div>

            <div className="section-content">

              <h4>
                Solusi Pengolahan
              </h4>

              <div className="line"></div>

              <p>{data?.solusi}</p>

            </div>

          </div>

        </div>

      </div>

      {/* FEEDBACK */}
      <div className="feedback-box">

        <p className="feedback-title">
          Apakah Anda puas dengan hasil
          EcoSortAI?
        </p>

        <div className="feedback-icons">

          {/* LIKE */}
          <div
            className={`feedback-item ${
              feedback === "like"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setFeedback("like")
            }
          >
            <img
              src="/like.png"
              alt="like"
              className="feedback-img"
            />

            <span>Ya</span>

          </div>

          {/* DISLIKE */}
          <div
            className={`feedback-item ${
              feedback === "dislike"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setFeedback("dislike")
            }
          >
            <img
              src="/dislike.png"
              alt="dislike"
              className="feedback-img"
            />

            <span>Tidak</span>

          </div>

        </div>

        {/* TEXTAREA */}
        <textarea
          placeholder="Tulis feedback anda disini..."
        />

        {/* BUTTON */}
        <button className="kirim-btn">
          Kirim Feedback
        </button>

      </div>

    </div>
  );
}

export default Hasil;