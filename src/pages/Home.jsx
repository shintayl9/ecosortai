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
                    <img src="/public/logo.png" alt="Logo" />
                </div>
            </div>
        </section>
    );
}

export default Home;