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
  Trash2,
  Check,
  X,
} from "lucide-react";

function History() {

  const [historyData, setHistoryData] =
    useState([]);

  const [currentPage, setCurrentPage] =
    useState(0);

  const [lastRead, setLastRead] =
    useState("");

  const [selectMode, setSelectMode] =
    useState(false);

  const [selectedItems, setSelectedItems] =
    useState([]);

  // ===== MODAL =====

  const [showDeleteModal, setShowDeleteModal] =
    useState(false);

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

    if (selectMode) {

      toggleSelect(item.date);

      return;

    }

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

  // ===== TOGGLE SELECT =====

  const toggleSelect = (date) => {

    if (
      selectedItems.includes(date)
    ) {

      setSelectedItems(
        selectedItems.filter(
          (item) => item !== date
        )
      );

    } else {

      setSelectedItems([
        ...selectedItems,
        date,
      ]);

    }

  };

  // ===== DELETE SELECTED =====

  const deleteSelected = () => {

    const updatedHistory =
      historyData.filter(
        (item) =>
          !selectedItems.includes(
            item.date
          )
      );

    setHistoryData(updatedHistory);

    localStorage.setItem(
      "history",
      JSON.stringify(updatedHistory)
    );

    setSelectedItems([]);

    setSelectMode(false);

  };

  // ===== DELETE ONE =====

  const deleteOne = (
    e,
    date
  ) => {

    e.stopPropagation();

    const updatedHistory =
      historyData.filter(
        (item) =>
          item.date !== date
      );

    setHistoryData(updatedHistory);

    localStorage.setItem(
      "history",
      JSON.stringify(updatedHistory)
    );

  };

  // ===== DELETE ALL =====

  const clearAllHistory = () => {

    setShowDeleteModal(true);

  };

  // ===== CONFIRM DELETE =====

  const confirmDeleteAll = () => {

    localStorage.removeItem("history");

    setHistoryData([]);

    setShowDeleteModal(false);

  };

  return (
    <div className="history-page">

      {/* ===== HEADER ===== */}

      <div className="history-top">

        <div>

          <h1>History</h1>

          <p className="history-subtitle">
            Semua gambar yang pernah dicek
            oleh EcoSortAI
          </p>

        </div>

        {/* ===== ACTION ===== */}

        <div className="history-actions">

          {!selectMode ? (
            <>

              <button
                className="action-btn"
                onClick={() =>
                  setSelectMode(true)
                }
              >
                Pilih
              </button>

              <button
                className="delete-all-btn"
                onClick={clearAllHistory}
              >
                Hapus Semua
              </button>

            </>
          ) : (
            <>

              <button
                className="delete-selected-btn"
                onClick={deleteSelected}
              >
                <Check size={16} />

                Hapus Terpilih
              </button>

              <button
                className="cancel-btn"
                onClick={() => {

                  setSelectMode(false);

                  setSelectedItems([]);

                }}
              >
                <X size={16} />

                Batal
              </button>

            </>
          )}

        </div>

      </div>

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

                const splitDate =
                  item.date.split(",");

                const isNewest =
                  historyData[0]?.date ===
                  item.date;

                const isLastRead =
                  lastRead === item.date;

                const isNewestAndRead =
                  isNewest &&
                  isLastRead;

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

                      ${
                        selectedItems.includes(
                          item.date
                        )
                          ? "selected-card"
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

                    {/* ===== CHECKBOX ===== */}

                    {selectMode && (

                      <div className="checkbox">

                        {selectedItems.includes(
                          item.date
                        ) && "✓"}

                      </div>

                    )}

                    {/* ===== DELETE ONE ===== */}

                    {!selectMode && (

                      <button
                        className="trash-btn"
                        onClick={(e) =>
                          deleteOne(
                            e,
                            item.date
                          )
                        }
                      >
                        <Trash2 size={16} />
                      </button>

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

      {/* ===== DELETE MODAL ===== */}

      {showDeleteModal && (

        <div className="modal-overlay">

          <div className="delete-modal">

            <h3>
              Anda yakin akan menghapusnya?
            </h3>

            <p>
              Semua riwayat klasifikasi berdasarkan gambar yang dicek oleh EcoShortAI akan
              dihapus permanen.
            </p>

            <div className="modal-buttons">

              <button
                className="cancel-modal-btn"
                onClick={() =>
                  setShowDeleteModal(false)
                }
              >
                Batal
              </button>

              <button
                className="confirm-modal-btn"
                onClick={confirmDeleteAll}
              >
                Hapus
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default History;