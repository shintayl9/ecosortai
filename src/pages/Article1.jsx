import "../styles/article1.css";
import { Link } from "react-router-dom";

function Article1() {
  return (
    <div className="article1-page">
      <div className="article1-wrapper">

        {/* garis putus-putus */}
        <div className="article1-dashed-border">

          {/* judul + garis */}
          <h1 className="article1-title">Mengapa Sampah Menjadi Masalah Besar di Indonesia?</h1>
          <hr className="article1-title-divider" />

          {/* 2 gambar pertama */}
          <div className="article1-two-images">
            <img src="/card-left-homepage.png" alt="Ilustrasi sampah 1" />
            <img src="/image-a1.jpg" alt="Ilustrasi sampah 2" />
          </div>

          {/* teks sebelah kiri + gambar sebelah kanan */}
          <div className="article1-row">
            <div className="article1-text">
              <p>
                Indonesia menghasilkan sekitar 35 juta ton sampah per tahun.
                Hanya 60% yang terkelola dengan baik, sisanya mencemari lingkungan.
                Sampah plastik menjadi ancaman terbesar karena sulit terurai.
              </p>
            </div>
            <div className="article1-image">
              <img src="/image-a2.jpg" alt="Ilustrasi sampah 3" />
            </div>
          </div>

          {/* teks */}
          <div className="article1-text-only">
            <p>
              Sampah yang menumpuk di Tempat Pembuangan Akhir (TPA) menghasilkan gas metana
              yang berkontribusi terhadap pemanasan global. Selain itu, sampah yang tidak
              dikelola dengan benar dapat mencemari tanah, air, dan udara, serta menjadi
              sarang penyakit seperti demam berdarah dan diare.
            </p>
          </div>

          {/* gambar sebelah kiri + teks sebelah kanan */}
          <div className="article1-row reverse">
            <div className="article1-image">
              <img src="/image-a3.jpg" alt="Ilustrasi sampah 4" />
            </div>
            <div className="article1-text">
              <p>
                Sampah plastik yang dibuang sembarangan sering berakhir di sungai dan laut.
                Indonesia merupakan negara penyumbang sampah plastik terbesar kedua di dunia.
                Hal ini mengancam ekosistem laut dan biota di dalamnya, seperti ikan, penyu,
                dan terumbu karang.
              </p>
            </div>
          </div>

          {/* kembali ke homepage */}
          <div className="article1-back-section">
            <span className="article1-back-text">Klik tombol disamping ini untuk kembali ke homepage</span>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <button className="article1-back-btn">Klik</button>
            </Link>
          </div>
        </div> {/* batas garis putus-putus */}
      </div>
    </div>
  );
}

export default Article1;