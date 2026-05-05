// halaman utama
import "../styles/home.css"

function Home() {
    return (
        <section className="home">
            <div className="home-content">
                    <div className="home-text">
                        <h1>EcoSortAI</h1>
                        <p>
                            Platform berbasis AI untuk klasifikasi sampah dan solusi pengelolaannya yang cerdas.
                        </p>
                        <button>Cek Sampahmu disini!</button>
                    </div>

                    {/* gambar bagian kanan */}
                    <div className="home-image">
                        <img src="/logo-removebg-preview.png" alt="Logo" />
                    </div>
                </div>

            <section className="how-it-works">
                    <h2>Cara Kerja</h2>
                    <p>Kelola sampahmu hanya dalam 3 langkah mudah</p>

                    <div className="steps">
                        <div className="step-card">
                            <img src="/icon-upload.png" alt="" />
                            <p>Upload Gambar</p>
                        </div>

                        <div className="step-card">
                            <img src="/icon-analisis.png" alt="" />
                            <p>AI Menganalisis</p>
                        </div>

                        <div className="step-card">
                            <img src="/icon-hasil.png" alt="" />
                            <p>Hasil Klasifikasi</p>
                        </div>
                    </div>
            </section>

            <section className="eco-knowledge">
                    <h2>ECO Knowledge</h2>
                    <p>Ubah Cara Kamu Melihat Sampah Mulai hari ini</p>

                    {/* tombol try ai */}
                    <button className="try-btn">Try AI</button>

                    <div className="eco-container">
                        {/* card sebelah kiri */}
                        <div className="eco-left">
                            <div className="eco-card big">
                                <h4>Mengapa Sampah Menjadi Masalah Besar di Indonesia?</h4>
                                <img src="/card-left-homepage.png" alt="" />
                                <span>26 April 2026 | 11.28</span>
                                <button>Baca Selengkapnya</button>
                            </div>
                        </div>

                        {/* 2 card sebelah kanan */}
                        <div className="eco-right">
                            <div className="eco-card small">
                                <div className="card-content">
                                    <img src="/card-right-1.jpg" alt="" />
                                    <div className="text">
                                        <h4>Jenis Sampah</h4>
                                        <span>26 April 2026 | 11.28</span>
                                        <p>Penjelasan singkat jenis sampah...</p>
                                        <button>Baca Selengkapnya</button>
                                    </div>
                                </div>
                            </div>

                            <div className="eco-card small">
                                <div className="card-content">
                                    <img src="/card-right-2.jpg" alt="" />
                                    <div className="text">
                                        <h4>Waktu Terurai</h4>
                                        <span>26 April 2026 | 11.28</span>
                                        <p>Penjelasan singkat lama waktu sampah terurai di lingkungan...</p>
                                        <button>Baca Selengkapnya</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
            </section>
        </section>
    );
}

export default Home;