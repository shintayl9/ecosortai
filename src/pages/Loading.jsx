import { useEffect, useState } from "react";
import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import "../styles/Loading.css";

function Loading() {

  const navigate = useNavigate();
  const location = useLocation();

  const [status, setStatus] = useState("loading");

  useEffect(() => {

    // LOADING → SUCCESS
    const timer = setTimeout(() => {
      setStatus("success");
    }, 3500);

    return () => clearTimeout(timer);

  }, []);

  // HANDLE CLICK CARD
  const handleGoResult = () => {

    if (status === "success") {

      navigate("/hasil", {
        state: {
          hasil: "organik",
          image: location.state?.image,
        },
      });

    }
  };

  return (
    <div className="loading-page">

      <div
        className={`loading-card ${
          status === "success"
            ? "success"
            : ""
        }`}
        onClick={handleGoResult}
      >

        {/* IMAGE */}
        <div className="loading-image-wrapper">

          <img
            src={
              location.state?.image ||
              "https://via.placeholder.com/250"
            }
            alt="preview"
            className="loading-image"
          />

          {/* LOADING OVERLAY */}
          {status === "loading" && (
            <div className="loading-overlay">
              <div className="loader"></div>
            </div>
          )}

          {/* SUCCESS ICON */}
          {status === "success" && (
            <div className="success-overlay">
              ✓
            </div>
          )}

        </div>

        {/* TEXT */}
        <div className="loading-content">

          <h2>
            {status === "loading"
              ? "AI Sedang Menganalisis"
              : "Analisis Berhasil"}
          </h2>

          <p>
            {status === "loading"
              ? "Mohon tunggu sebentar..."
              : "Klik card untuk melihat hasil klasifikasi"}
          </p>

          {/* STATUS BADGE */}
          <div
            className={`status-badge ${status}`}
          >
            {status === "loading"
              ? "ONGOING"
              : "SUCCESS"}
          </div>

        </div>

      </div>

    </div>
  );
}

export default Loading;