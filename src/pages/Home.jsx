// halaman utama
import "../styles/home.css"

function Home() {
    return (
        <section className="home">
            <div className="home-content">
                
                {/* teks bagian kiri */}
                <div className="home-text">
                    <h1>EcoSortAI</h1>
                    <p>
                        Platform berbasis AI untuk klasifikasi sampah dan solusi pengelolaannya yang cerdas.
                    </p>

                    {/* Tombol yang mengrah ke halaman upload */}
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
        </section>
    );
}

export default Home;