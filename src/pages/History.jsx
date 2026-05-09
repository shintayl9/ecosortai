import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import "../styles/History.css";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function History() {

  const [historyData, setHistoryData] =
    useState([]);

  const [currentPage, setCurrentPage] =
    useState(0);

  const [lastRead, setLastRead] =
    useState("");

  const navigate = useNavigate();

  useEffect(() => {

    const savedHistory =
      JSON.parse(
        localStorage.getItem("history")
      ) || [];

    const savedLastRead =
      localStorage.getItem("lastRead");

    setHistoryData(savedHistory);

    setLastRead(savedLastRead || "");

  }, []);

  // ===== PAGINATION =====

  const itemsPerPage = 4;

  const startIndex =
    currentPage * itemsPerPage;

  const currentItems =
    historyData.slice(
      startIndex,
      startIndex + itemsPerPage
    );

  // ===== OPEN HISTORY =====

  const handleOpenHistory = (item) => {

    localStorage.setItem(
      "lastRead",
      item.date
    );

    setLastRead(item.date);

    navigate("/hasil", {
      state: {
        hasil:
          item.hasil.toLowerCase(),
        image:
          item.image,
      },
    });

  };

  return (
    <div className="history-page">

      <h1>History</h1>

      <p className="history-subtitle">
        Semua gambar yang pernah dicek
        oleh EcoSortAI
      </p>

      {/* ===== WRAPPER ===== */}
      <div className="history-wrapper">

        {/* ===== BUTTONS ===== */}
        <div className="slider-buttons">

          {/* LEFT */}
          <button
            className="left-btn"
            onClick={() =>
              setCurrentPage((prev) =>
                prev > 0
                  ? prev - 1
                  : prev
              )
            }
          >
            <ChevronLeft size={20} />
          </button>

          {/* RIGHT */}
          <button
            className="right-btn"
            onClick={() =>
              setCurrentPage((prev) =>
                (prev + 1) *
                  itemsPerPage <
                historyData.length
                  ? prev + 1
                  : prev
              )
            }
          >
            <ChevronRight size={20} />
          </button>

        </div>

        {/* ===== GRID ===== */}
        <div className="history-slider">

          {currentItems.length > 0 ? (
            currentItems.map(
              (item, index) => {

                // SPLIT DATE
                const splitDate =
                  item.date.split(",");

                // NEWEST
                const isNewest =
                  historyData[0]?.date ===
                  item.date;

                // LAST READ
                const isLastRead =
                  lastRead === item.date;

                // NEW + READ
                const isNewestAndRead =
                  isNewest &&
                  isLastRead;

                // OLD
                const isOld =
                  !isNewest &&
                  !isLastRead;

                return (

                  <div
                    className={`history-card

                      ${
                        isNewestAndRead
                          ? "mix-card"
                          : ""
                      }

                      ${
                        isNewest &&
                        !isNewestAndRead
                          ? "latest"
                          : ""
                      }

                      ${
                        isLastRead &&
                        !isNewestAndRead
                          ? "read-card"
                          : ""
                      }

                      ${
                        isOld
                          ? "old-card"
                          : ""
                      }
                    `}
                    key={index}
                    onClick={() =>
                      handleOpenHistory(item)
                    }
                  >

                    {/* ===== BADGES ===== */}

                    {isNewest && (
                      <div className="new-badge">
                        NEW
                      </div>
                    )}

                    {isLastRead && (
                      <div className="read-badge">
                        LAST READ
                      </div>
                    )}

                    {/* ===== DATE ===== */}

                    <div className="date-box">

                      <span>
                        {splitDate[0]}
                      </span>

                      <small>
                        {splitDate[1]}
                      </small>

                    </div>

                    {/* ===== IMAGE ===== */}

                    <img
                      src={item.image}
                      alt="history"
                    />

                    {/* ===== BOTTOM ===== */}

                    <div className="history-bottom">

                      <span className="kategori">
                        {item.hasil}
                      </span>

                      <small>
                        96% Accurate
                      </small>

                    </div>

                  </div>

                );
              }
            )
          ) : (
            <p className="empty-text">
              Belum ada riwayat 🌱
            </p>
          )}

        </div>

      </div>

    </div>
  );
}

export default History;