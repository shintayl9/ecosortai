import React from "react";
import "../styles/About.css";


const teamData = [
  {
    name: "Shinta Yulistiana",
    kampus: "Politeknik Negeri Banyuwangi",
    path: "Full-Stack Web Developer",
    photo: "/shinta.jpeg",

    instagram:"https://instagram.com/shintaylstn_", 
    email:"mailto:shintayulistiana2004@gmail.com",
    linkedin:"https://www.linkedin.com/in/shinta-yulistiana-a0b819326/",
  },
  {
    name: "Wanda Safitri",
    kampus: "Politeknik Negeri Banyuwangi",
    path: "Full-Stack Web Developer",
    photo: "/wanda.jpg",

    instagram:"https://instagram.com/wandasvt", 
    email:"mailto:wandaforone@gmail.com",
    linkedin:"https://www.linkedin.com/in/wanda-safitri-01295b3a2/",
    
  },
  {
    name: "Nurvi A'Malina",
    kampus: "Politeknik Negeri Banyuwangi",
    path: "Data Scientist",
    photo: "/nurvi.jpeg",

    instagram:"https://instagram.com/nurviamalina", 
    email:"mailto:nurviamalina@gmail.com",
    linkedin:"https://www.linkedin.com/in/nurviamalina/",
  },
  {
    name: "Nasywa Salsabiila Romadhona",
    kampus: "Universitas Darwan Ali",
    path: "AI Engineer",
    photo: "nasywa.jpeg",

    instagram:"https://instagram.com/mzhb.hi", 
    email:"mailto:nnaassyywwaa16@gmail.com",
    linkedin:"https://www.linkedin.com/in/nasywasr/",
  },
  {
    name: "Muhammad Jumail Ilham Sahupula",
    kampus: "Universitas Darwan Ali",
    path: "AI Engineer",
    photo: "jumail.jpg",

    instagram:"https://instagram.com/wandasvt", 
    email:"mailto:wandaforone@gmail.com",
    linkedin:"https://www.linkedin.com/in/wanda-safitri-01295b3a2/",
  },
  {
    name: "Bili Ramdani",
    kampus: "Institut Teknologi Bandung",
    path: "Data Scientist",
    photo: "bili.jpeg",

    instagram:"https://instagram.com/bili_ramdani", 
    email:"mailto:ramdanibili46@gmail.com",
    linkedin:"https://www.linkedin.com/in/ramdanibili46/",
  },
];

function About() {
  return (
    <div className="about-container">

      {/* HEADER */}
      <div className="about-header">
        <h1>About EcoShortAI</h1>

        {/* ICON */}
        <img
          src="/planet-earth.png"
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
                  <p className="team-campus">{member.kampus}</p>
                  <p className="team-path">{member.path}</p>

                  <div className="about-social-icons">
                    <a href={member.linkedin} target="_blank" rel="noreferrer">
                      <img src="/linkedin.png" alt="linkedin" />
                    </a>
                    
                    <a href={member.email}>
                      <img src="/email.png" alt="email" />
                    </a>

                    <a href={member.instagram} target="_blank" rel="noreferrer">
                      <img src="/instagram.png" alt="instagram" />
                    </a>
                  </div>

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