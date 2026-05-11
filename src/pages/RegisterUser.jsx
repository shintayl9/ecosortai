import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/registeruser.css";

function RegisterUser() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Password dan konfirmasi password tidak cocok!");
            return;
        }
        console.log("Data pendaftaran:", formData);

        alert("Pendaftaran berhasil! Silakan login.");
        navigate("/login-user");
        window.scrollTo(0, 0);
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <h1>Daftar Akun</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nama Lengkap"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Konfirmasi Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Daftar</button>
                </form>
                <p>
                    Sudah punya akun? <Link to="/login-user">Login di sini</Link>
                </p>
            </div>
        </div>
    );
}

export default RegisterUser;