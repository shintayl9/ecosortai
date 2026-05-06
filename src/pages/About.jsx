import React from "react";
import "../styles/About.css";

import shinta from "../assets/picpencipta/shinta.jpg";
import wanda from "../assets/picpencipta/wanda.jpg";
import nurvi from "../assets/picpencipta/nurvi.jpg";
import nasywa from "../assets/picpencipta/nasywa.jpg";
import jumail from "../assets/picpencipta/jumail.jpg";
import bili from "../assets/picpencipta/bili.jpg";
import ecoEarth from "../assets/planet-earth.png";

const teamData = [
  {
    name: "Shinta Yulistiana",
    path: "Fullstack Developer",
    kampus: "Politeknik Negeri Banyuwangi",
    photo: shinta,
  },
  {
    name: "Wanda Safitri",
    path: "Fullstack Developer",
    kampus: "Politeknik Negeri Banyuwangi",
    photo: wanda,
  },
  {
    name: "Nurvi A'Malina",
    path: "Data Scientist",
    kampus: "Politeknik Negeri Banyuwangi",
    photo: nurvi,
  },
  {
    name: "Nasywa Salsabiila Romadhona",
    path: "AI Engineer",
    kampus: "Universitas Darwan Ali",
    photo: nasywa,
  },
  {
    name: "Muhammad Jumail Ilham Sahupula",
    path: "AI Engineer",
    kampus: "Universitas Darwan Ali",
    photo: jumail,
  },
  {
    name: "Bili Ramdani",
    path: "Data Scientist", 
    kampus: "Institut Teknologi Bandung",
    photo: bili,
  },
];

function About() {
  return (
    <div className="about-container">

      {/* HEADER */}
      <div className="about-header">
        <h1>About EcoShortAI</h1>

        {/* ICON DARI ASSETS */}
        <img
          src={ecoEarth}
          alt="eco earth"
          className="about-image"
        />

        {/* ATRIBUSI */}
        <p className="credit">
          Icon by{" "}
          <a href="https://www.flaticon.com/authors/freepik" target="_blank">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com" target="_blank">
            Flaticon
          </a>
        </p>
      </div>

      {/* CONTENT */}
      <div className="about-content">

        <section className="about-section">
          <h2>EcoSortAI</h2>
          <p>
            EcoSortAI adalah platform berbasis Artificial Intelligence yang
            membantu mengklasifikasikan jenis sampah melalui gambar.
            Pengguna dapat mengetahui jenis sampah serta cara pengolahannya
            secara cepat dan mudah.
          </p>
        </section>

        <section className="about-section">
          <h2>Tujuan</h2>
          <p>
            Membantu masyarakat memilih sampah dengan lebih mudah menggunakan AI,
            serta meningkatkan kesadaran menjaga lingkungan.
          </p>
        </section>

        {/* TEAM */}
        <section>
          <h2 className="team-title">Tim</h2>

          <div className="team-grid">
            {teamData.map((member, index) => (
              <div key={index} className="team-item">

                {/* FOTO */}
                <img
                  src={member.photo}
                  alt={member.name}
                  className="team-photo"
                />

                {/* CARD */}
                <div className="team-card">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-path">{member.path}</p>
                  <p className="team-campus">{member.kampus}</p>
                </div>

              </div>
            ))}
          </div>
        </section>

      </div>

    </div>
  );
}

export default About;