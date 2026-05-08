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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla tincidunt semper urna sit amet ornare.
                Nam bibendum pharetra mattis. Aenean laoreet eleifend ante quis interdum.
              </p>
            </div>
            <div className="article1-image">
              <img src="/image-a2.jpg" alt="Ilustrasi sampah 3" />
            </div>
          </div>

          {/* teks */}
          <div className="article1-text-only">
            <p>
              Vestibulum vulputate, ipsum ut convallis convallis, nunc arcu vehicula sem,
              sed cursus purus lorem tincidunt diam. In tincidunt varius mattis.
              Aenean placerat fringilla mauris in pulvinar.
            </p>
          </div>

          {/* gambar sebelah kiri + teks sebelah kanan */}
          <div className="article1-row reverse">
            <div className="article1-image">
              <img src="/image-a3.jpg" alt="Ilustrasi sampah 4" />
            </div>
            <div className="article1-text">
              <p>
                Sed cursus purus lorem tincidunt diam. In tincidunt varius mattis.
                Aenean placerat fringilla mauris in pulvinar.
                Vestibulum vulputate, ipsum ut convallis convallis.
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