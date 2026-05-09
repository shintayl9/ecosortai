import "../styles/howitworks.css"

function HowItWorks() {
    return (
        <div className="howitworks-page">
            <section className="howitworks-hero-section">
                <div className="wrapper">
                    <div className="howitworks-hero-content">
                        <div className="howitworks-hero-text">
                            <h1>EcoSortAI</h1>
                            <p>
                                Platform berbasis AI untuk klasifikasi sampah dan solusi pengelolaannya yang cerdas.
                            </p>
                            <button className="howitworks-cta-button">Cek Sampahmu disini!</button>
                        </div>
                        <div className="howitworks-hero-image">
                            <img src="/logo-removebg-preview.png" alt="Logo" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="steps-title-wrapper">
                <div className="wrapper">
                    <h2 className="steps-title">Cara Kerja EcoSortAI</h2>
                </div>
            </div>

            {/* Main Content */}
            <section className="steps-detail">
                <div className="wrapper">
                    {/* Step Upload Gambar */}
                    <div className="step-item step-left">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h2>Upoad Gambar</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nulla tincidunt semper urna sit amet ornare. Nam bibendum
                                pharetra mattis. Aenean laoreet eleifend ante quis interdum.
                                Vestibulum vulputate, ipsum ut convallis convallis, nunc arcu
                                vehicula sem, sed cursus purus lorem tincidunt diam. In tincidunt
                                varius mattis. Aenean placerat fringilla mauris in pulvinar.
                            </p>
                        </div>
                    </div>

                    {/* Step AI Menganalisis */}
                    <div className="step-item step-right">
                        <div className="step-content">
                            <h2>AI Menganalisis</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nulla tincidunt semper urna sit amet ornare. Nam bibendum
                                pharetra mattis. Aenean laoreet eleifend ante quis interdum.
                                Vestibulum vulputate, ipsum ut convallis convallis, nunc arcu
                                vehicula sem, sed cursus purus lorem tincidunt diam. In tincidunt
                                varius mattis. Aenean placerat fringilla mauris in pulvinar.
                            </p>
                        </div>
                        <div className="step-number">2</div>
                    </div>

                    {/* Step Hasil Klasifikasi */}
                    <div className="step-item step-left">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h2>Hasil Klasifikasi</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nulla tincidunt semper urna sit amet ornare. Nam bibendum
                                pharetra mattis. Aenean laoreet eleifend ante quis interdum.
                                Vestibulum vulputate, ipsum ut convallis convallis, nunc arcu
                                vehicula sem, sed cursus purus lorem tincidunt diam. In tincidunt
                                varius mattis. Aenean placerat fringilla mauris in pulvinar.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HowItWorks;