import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import "../styles/AdminDashboard.css";

import {
  LayoutDashboard,
  MessageSquare,
  History,
  LogOut,
  Leaf,
  Recycle,
  Trash2,
  Menu,
} from "lucide-react";

function AdminDashboard() {

  const navigate = useNavigate();

  const [historyData, setHistoryData] =
    useState([]);

  const [activeMenu, setActiveMenu] =
    useState("dashboard");

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {

    const isLogin =
      localStorage.getItem(
        "adminLogin"
      );

    if (!isLogin) {

      navigate("/login");

    }

    const history =
      JSON.parse(
        localStorage.getItem(
          "history"
        )
      ) || [];

    setHistoryData(history);

  }, []);

  // ===== TOTAL =====

  const totalData =
    historyData.length;

  const organikCount =
    historyData.filter(
      (item) =>
        item.hasil
          ?.toLowerCase()
          .includes("organik")
    ).length;

  const anorganikCount =
    historyData.filter(
      (item) =>
        item.hasil
          ?.toLowerCase()
          .includes("anorganik")
    ).length;

  // ===== FEEDBACK =====

  const feedbackData =
    JSON.parse(
      localStorage.getItem(
        "feedbacks"
      )
    ) || [];

  // ===== LOGOUT =====

  const handleLogout = () => {

    localStorage.removeItem(
      "adminLogin"
    );

    navigate("/login");

  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <button className="hamburger-btn" onClick={toggleSidebar}>
        <Menu size={22} />
      </button>

      <div
        className={`sidebar-overlay ${sidebarOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      />

      <div className="admin-layout">

        {/* ===== SIDEBAR ===== */}
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>

          <div>
            <h2>EcoSortAI</h2>
            <p className="admin-role">Admin Panel</p>

            {/* MENU */}
            <div className="sidebar-menu">

              {/* DASHBOARD */}
              <div
                className={`menu-item ${activeMenu === "dashboard" ? "active" : ""}`}
                onClick={() => {
                  setActiveMenu("dashboard");
                  setSidebarOpen(false);
                }}
              >
                <LayoutDashboard size={18} />
                Dashboard
              </div>

              {/* HISTORY */}
              <div
                className={`menu-item ${activeMenu === "history" ? "active" : ""}`}
                onClick={() => {
                  setActiveMenu("history");
                  setSidebarOpen(false);
                }}
              >
                <History size={18} />
                History AI
              </div>

              {/* FEEDBACK */}
              <div
                className={`menu-item ${activeMenu === "feedback" ? "active" : ""}`}
                onClick={() => {
                  setActiveMenu("feedback");
                  setSidebarOpen(false);
                }}
              >
                <MessageSquare size={18} />
                Feedback
              </div>

            </div>
          </div>

          {/* LOGOUT */}
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={18} />
            Logout
          </button>

        </div>

        {/* ===== MAIN ===== */}
        <div className="admin-main">

          {/* ===== DASHBOARD ===== */}
          {activeMenu === "dashboard" && (
            <>
              <div className="topbar">
                <h1 style={{ marginTop: 0 }}>Hello, Admin!👋</h1> {/* tambahan inline style */}
                <p>Monitoring Klasifikasi EcoSortAI</p>
              </div>

              {/* STATS */}
              <div className="stats-grid">
                <div className="stats-card">
                  <div className="stats-icon total">
                    <Trash2 size={20} />
                  </div>
                  <div>
                    <h2>{totalData}</h2>
                    <p>Total Prediksi</p>
                  </div>
                </div>

                <div className="stats-card">
                  <div className="stats-icon organik">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <h2>{organikCount}</h2>
                    <p>Organik</p>
                  </div>
                </div>

                <div className="stats-card">
                  <div className="stats-icon anorganik">
                    <Recycle size={20} />
                  </div>
                  <div>
                    <h2>{anorganikCount}</h2>
                    <p>Anorganik</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ===== HISTORY ===== */}
          {activeMenu === "history" && (
            <div className="table-box">
              <div className="table-header">
                <h3>History Prediksi</h3>
              </div>

              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Image</th>
                      <th>Category</th>
                      <th>Accuracy</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {historyData.length > 0 ? (
                      historyData.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <img src={item.image} alt="history" className="table-img" />
                          </td>
                          <td>
                            <span className="category-text">
                              <span className="dot"></span>
                              {item.hasil}
                            </span>
                          </td>
                          <td className="accuracy">96%</td>
                          <td>{item.date}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="empty-table">
                          Belum ada history
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ===== FEEDBACK ===== */}
          {activeMenu === "feedback" && (
            <div className="table-box">
              <div className="table-header">
                <h3>Feedback User</h3>
              </div>

              {feedbackData.length > 0 ? (
                <div className="feedback-list">
                  {feedbackData.map((item, index) => (
                    <div className="feedback-card" key={index}>
                      <h4>{item.status}</h4>
                      <p>{item.message}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="empty-table">Belum ada feedback</p>
              )}
            </div>
          )}

        </div>

      </div>
    </>
  );
}

export default AdminDashboard;