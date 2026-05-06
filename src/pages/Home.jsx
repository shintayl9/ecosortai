// halaman utama
import "../styles/home.css"

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
                            <button className="cta-button">Cek Sampahmu disini!</button>
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

                    <button className="try-btn">Try AI</button>

                    <div className="eco-container">
                        {/* Card Kiri - Besar */}
                        <div className="eco-card-large">
                            <h4>Mengapa Sampah Menjadi Masalah Besar di Indonesia?</h4>
                            <img src="/card-left-homepage.png" alt="Sampah Indonesia" />
                            <span className="date">26 April 2026 | 11.28</span>
                            <button className="read-more">Baca Selengkapnya</button>
                        </div>

                        {/* Card Kanan */}
                        <div className="eco-card-stack">
                            <div className="eco-card-small">
                                <div className="card-content">
                                    <img src="/card-right-1.jpg" alt="Jenis Sampah" />
                                    <div className="card-text">
                                        <h4>Jenis Sampah</h4>
                                        <p>Penjelasan singkat tentang berbagai jenis sampah organik dan anorganik...</p>
                                        <span className="date">26 April 2026 | 11.28</span>
                                    </div>
                                </div>
                                <button className="read-more">Baca Selengkapnya</button>
                            </div>

                            <div className="eco-card-small">
                                <div className="card-content">
                                    <img src="/card-right-2.jpg" alt="Waktu Terurai" />
                                    <div className="card-text">
                                        <h4>Waktu Terurai</h4>
                                        <p>Penjelasan singkat lama waktu sampah terurai di lingkungan...</p>
                                        <span className="date">26 April 2026 | 11.28</span>
                                    </div>
                                </div>
                                <button className="read-more">Baca Selengkapnya</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer">
                <div className="wrapper">
                    {/* Bagian atas: judul dan deskripsi */}
                    <h3>Tim Capstone Project CC26</h3>
                    <p className="footer-desc">Solusi cerdas pengelolaan sampah berbasis AI.</p>

                    {/* Baris utama: copyright, nav vertikal, email + social icons */}
                    <div className="footer-main-row">
                        <p className="copyright">EcoSortAI © 2026</p>

                        <div className="footer-nav-vertical">
                            <a href="#">How it Works</a>
                            <a href="#">Upload</a>
                            <a href="#">About</a>
                        </div>

                        <div className="footer-right-col">
                            <p className="footer-email">CC26-PSU026@student.devacademy.id</p>
                            <div className="social-icons">
                                <img src="/icon-instagram.png" alt="Instagram" />
                                <img src="/icon-whatsapp.png" alt="WhatsApp" />
                                <img src="/icon-youtube.png" alt="YouTube" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default Home;