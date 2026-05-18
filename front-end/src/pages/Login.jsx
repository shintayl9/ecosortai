import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "../styles/Login.css";

import {
  Lock,
  User,
} from "lucide-react";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if (
      username === "admin" &&
      password === "admin123"
    ) {

      localStorage.setItem(
        "adminLogin",
        "true"
      );

      navigate("/admin");

    } else {

      setError(
        "Username atau password salah"
      );

    }

  };

  return (

    <div className="login-page">

      <div className="login-container">

        {/* LEFT */}

        <div className="login-left">

          <h1>EcoSortAI</h1>

          <p>
            Kelola hasil klasifikasi
            sampah berbasis AI dengan
            lebih mudah dan cepat.
          </p>

        </div>

        {/* RIGHT */}

        <div className="login-card">

          <h3>Login Admin</h3>

          <form onSubmit={handleLogin}>

            {/* USERNAME */}

            <div className="input-group">

              <User size={18} />

              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) =>
                  setUsername(
                    e.target.value
                  )
                }
              />

            </div>

            {/* PASSWORD */}

            <div className="input-group">

              <Lock size={18} />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
              />

            </div>

            {/* ERROR */}

            {error && (
              <p className="error-text">
                {error}
              </p>
            )}

            {/* BUTTON */}

            <button
              type="submit"
              className="login-btn"
            >
              Login
            </button>

          </form>

        </div>

      </div>

    </div>

  );
}

export default Login;