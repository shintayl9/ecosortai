// halaman utama
import "../styles/home.css"
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">

            {/* HERO SECTION */}
            <section className="hero-section">
                <div className="wrapper">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>EcoSortAI</h1>
                            <p>
                                Platform berbasis AI untuk klasifikasi sampah dan solusi pengelolaannya yang cerdas.
                            </p>
                            <Link to="/upload">
                                <button className="cta-button">Cek Sampahmu disini!</button>
                            </Link>
                        </div>
                        <div className="hero-image">
                            <img src="/logo-removebg-preview.png" alt="Logo" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CARA KERJA */}
            <section className="how-it-works">
                <div className="wrapper">
                    <h2>Cara Kerja</h2>
                    <p className="subtitle">Kelola sampahmu hanya dalam 3 langkah mudah</p>

                    <div className="steps-container">
                        <div className="step-card">
                            <div className="step-icon">
                                <img src="/icon-upload.png" alt="Upload" />
                                <p>Upload Gambar</p>
                            </div>
                        </div>

                        <div className="step-card">
                            <div className="step-icon">
                                <img src="/icon-analisis.png" alt="Analisis" />
                                <p>AI Menganalisis</p>
                            </div>
                        </div>

                        <div className="step-card">
                            <div className="step-icon">
                                <img src="/icon-hasil.png" alt="Hasil" />
                                <p>Hasil Klasifikasi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ECO KNOWLEDGE */}
            <section className="eco-knowledge">
                <div className="wrapper">
                    <h2>ECO Knowledge</h2>
                    <p className="subtitle">Ubah Cara Kamu Melihat Sampah Mulai hari ini</p>
                    <Link to="/upload" onClick={() => window.scrollTo(0, 0)}>
                        <button className="try-btn">Try AI</button>
                    </Link>

                    <div className="eco-container">
                        {/* Card Kiri - Besar */}
                        <div className="eco-card-large">
                            <h4>Mengapa Sampah Menjadi Masalah Besar di Indonesia?</h4>
                            <img src="/card-left-homepage.png" alt="Sampah Indonesia" />
                            <span className="date">26 April 2026 | 11.28</span>
                            <Link to="/article1" onClick={() => window.scrollTo(0, 0)}>
                                <button className="read-more">Baca Selengkapnya</button>
                            </Link>
                        </div>

                        {/* Card Kanan */}
                        <div className="eco-card-stack">
                            {/* Card 1 - Jenis Sampah */}
                            <div className="eco-card-small">
                                <div className="card-content">
                                    <img src="/card-right-1.jpg" alt="Jenis Sampah" />
                                    <div className="card-text">
                                        <div className="card-header">
                                            <h4>Jenis Sampah</h4>
                                            <span className="date">26 April 2026 | 11.28</span>
                                        </div>
                                        <p>Penjelasan singkat tentang berbagai jenis sampah organik dan anorganik...</p>
                                    </div>
                                </div>
                                <button className="read-more">Baca Selengkapnya</button>
                            </div>

                            {/* Card 2 - Waktu Terurai */}
                            <div className="eco-card-small">
                                <div className="card-content">
                                    <img src="/card-right-2.jpg" alt="Waktu Terurai" />
                                    <div className="card-text">
                                        <div className="card-header">
                                            <h4>Waktu Terurai</h4>
                                            <span className="date">26 April 2026 | 11.28</span>
                                        </div>
                                        <p>Penjelasan singkat lama waktu sampah terurai di lingkungan...</p>
                                    </div>
                                </div>
                                <button className="read-more">Baca Selengkapnya</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;