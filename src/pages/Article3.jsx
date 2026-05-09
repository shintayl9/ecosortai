import "../styles/article3.css";
import { Link } from "react-router-dom";

function Article3() {
    return (
        <div className="article3-page">
            <div className="article3-wrapper">

                {/* garis putus-putus */}
                <div className="article3-dashed-border">

                    {/* judul + garis */}
                    <h1 className="article3-title">Waktu Terurai</h1>
                    <hr className="article3-title-divider" />

                    {/* teks kiri + gambar kanan */}
                    <div className="article3-row">
                        <div className="article3-text">
                            <h3 className="article3-subtitle">Sampah Biodegradable</h3>
                            <p>
                                Sampah biodegradable adalah sampah yang dapat terurai secara alami
                                oleh mikroorganisme. Contohnya sisa makanan, daun, kayu, dan kertas.
                                Sampah ini biasanya terurai dalam waktu beberapa minggu hingga bulan,
                                tergantung kondisi lingkungan seperti suhu dan kelembaban.
                            </p>
                            <p>
                                Pengelolaan sampah biodegradable yang baik adalah dengan membuat kompos.
                                Kompos dapat digunakan sebagai pupuk organik untuk menyuburkan tanaman.
                            </p>
                        </div>
                        <div className="article3-image">
                            <img src="/biodegradable.jpg" alt="Sampah Biodegradable" />
                        </div>
                    </div>

                    {/* gambar kiri + teks kanan */}
                    <div className="article3-row">
                        <div className="article3-image">
                            <img src="/non-biodegradable.jpg" alt="Sampah Non-Biodegradable" />
                        </div>
                        <div className="article3-text">
                            <h3 className="article3-subtitle">Sampah Non-Biodegradable</h3>
                            <p>
                                Sampah non-biodegradable adalah sampah yang sulit atau tidak bisa terurai
                                secara alami. Contohnya plastik, kaca, logam, dan styrofoam.
                                Sampah plastik bisa memakan waktu hingga 500 tahun untuk terurai,
                                sementara kaca bisa mencapai 1 juta tahun.
                            </p>
                            <p>
                                Solusi terbaik untuk sampah non-biodegradable adalah dengan mendaur ulang.
                                Daur ulang dapat mengurangi penumpukan sampah dan menghemat sumber daya alam.
                            </p>
                        </div>
                    </div>

                    {/* kembali ke homepage */}
                    <div className="article3-back-section">
                        <span className="article3-back-text">Klik tombol disamping ini untuk kembali ke homepage</span>
                        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                            <button className="article3-back-btn">Klik</button>
                        </Link>
                    </div>
                </div> {/* batas garis putus-putus */}
            </div>
        </div>
    );
}

export default Article3;