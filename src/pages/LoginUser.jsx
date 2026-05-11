import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/loginuser.css";

function LoginUser() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
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
        console.log("Data login:", formData);

        navigate("/");
        window.scrollTo(0, 0);
    };

    return (
        <div className="loginuser-container">
            <div className="loginuser-card">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit">Masuk</button>
                </form>
                <p>
                    Belum punya akun? <Link to="/register-user">Daftar di sini</Link>
                </p>
            </div>
        </div>
    );
}

export default LoginUser;