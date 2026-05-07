import { useEffect, useState } from "react";
import "../styles/History.css";

function History() {

  const [historyData, setHistoryData] =
    useState([]);

  useEffect(() => {

    const savedHistory =
      JSON.parse(
        localStorage.getItem("history")
      ) || [];

    setHistoryData(savedHistory);

  }, []);

  return (
    <div className="history-page">

      <h1>Riwayat Klasifikasi</h1>

      <p className="history-subtitle">
        Semua gambar yang pernah dicek
        oleh EcoSortAI
      </p>

      <div className="history-grid">

        {historyData.length > 0 ? (
          historyData.map((item, index) => (

            <div
              className="history-card"
              key={index}
            >

              <img
                src={item.image}
                alt="history"
              />

              <div className="history-content">

                <span className="kategori">
                  {item.hasil}
                </span>

                <p>{item.date}</p>

              </div>

            </div>

          ))
        ) : (
          <p>
            Belum ada riwayat klasifikasi
          </p>
        )}

      </div>

    </div>
  );
}

export default History;