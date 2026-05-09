import "../styles/article2.css";
import { Link } from "react-router-dom";

function Article2() {
    return (
        <div className="article2-page">
            <div className="article2-wrapper">

                {/* garis putus-putus */}
                <div className="article2-dashed-border">

                    {/* judul + garis */}
                    <h1 className="article2-title">Jenis Sampah</h1>
                    <hr className="article2-title-divider" />

                    {/* teks kiri + gambar kanan */}
                    <div className="article2-row">
                        <div className="article2-text">
                            <h3 className="article2-subtitle">Sampah Organik</h3>
                            <p>
                                Sampah organik adalah sampah yang berasal dari makhluk hidup
                                seperti sisa makanan, daun, dan kayu. Sampah ini mudah terurai
                                secara alami dan dapat diolah menjadi kompos.
                            </p>
                        </div>
                        <div className="article2-image">
                            <img src="/sampah-organik.jpg" alt="Sampah Organik" />
                        </div>
                    </div>

                    {/* gambar kiri + teks kanan */}
                    <div className="article2-row image-left">
                        <div className="article2-image">
                            <img src="/sampah-anorganik.jpg" alt="Sampah Anorganik" />
                        </div>
                        <div className="article2-text">
                            <h3 className="article2-subtitle">Sampah Anorganik</h3>
                            <p>
                                Sampah anorganik adalah sampah yang tidak mudah terurai,
                                seperti plastik, kaca, logam, dan karet. Sampah ini perlu
                                didaur ulang agar tidak mencemari lingkungan.
                            </p>
                        </div>
                    </div>

                    {/* teks kiri + gambar kanan */}
                    <div className="article2-row">
                        <div className="article2-text">
                            <h3 className="article2-subtitle">Sampah B3</h3>
                            <p>
                                Sampah B3 (Bahan Berbahaya dan Beracun) adalah sampah yang
                                mengandung zat berbahaya seperti baterai, limbah medis,
                                dan pestisida. Pengelolaannya harus khusus dan sesuai prosedur.
                            </p>
                        </div>
                        <div className="article2-image">
                            <img src="/sampah-b3.jpg" alt="Sampah B3" />
                        </div>
                    </div>

                    {/* gambar kiri + teks kanan */}
                    <div className="article2-row image-left">
                        <div className="article2-image">
                            <img src="/sampah-residu.jpg" alt="Sampah Residu" />
                        </div>
                        <div className="article2-text">
                            <h3 className="article2-subtitle">Sampah Residu</h3>
                            <p>
                                Sampah residu adalah sampah yang sudah tidak bisa didaur ulang
                                atau diolah lebih lanjut, seperti popok sekali pakai, pembalut,
                                dan puntung rokok. Sampah ini biasanya berakhir di TPA.
                            </p>
                        </div>
                    </div>

                    {/* kembali ke homepage */}
                    <div className="article2-back-section">
                        <span className="article2-back-text">Klik tombol disamping ini untuk kembali ke homepage</span>
                        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                            <button className="article2-back-btn">Klik</button>
                        </Link>
                    </div>

                </div> {/* batas garis putus-putus */}
            </div>
        </div>
    );
}

export default Article2;