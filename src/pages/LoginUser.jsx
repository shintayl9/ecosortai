import { useState } from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import {
  CheckCircle,
  AlertCircle,
  X,
} from "lucide-react";

import "../styles/loginuser.css";

function LoginUser() {

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const [notif, setNotif] =
    useState({
      show: false,
      type: "",
      message: "",
    });

  const navigate =
    useNavigate();

  // ===== SHOW NOTIF =====

  const showNotif = (
    type,
    message
  ) => {

    setNotif({
      show: true,
      type,
      message,
    });

    setTimeout(() => {

      setNotif({
        show: false,
        type: "",
        message: "",
      });

    }, 3000);

  };

  // ===== HANDLE CHANGE =====

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  // ===== HANDLE SUBMIT =====

  const handleSubmit = (e) => {

    e.preventDefault();

    // GET USERS

    const users =
      JSON.parse(
        localStorage.getItem(
          "users"
        )
      ) || [];

    // CHECK USER

    const foundUser =
      users.find(
        (user) =>
          user.email ===
            formData.email &&
          user.password ===
            formData.password
      );

    // LOGIN FAILED

    if (!foundUser) {

      showNotif(
        "error",
        "Email atau password salah"
      );

      return;
    }

    // SAVE LOGIN USER

    localStorage.setItem(
      "currentUser",
      JSON.stringify(foundUser)
    );

    // SUCCESS

    showNotif(
      "success",
      `Selamat datang ${foundUser.name}`
    );

    // RESET

    setFormData({
      email: "",
      password: "",
    });

    // NAVIGATE

    setTimeout(() => {

      navigate("/");

      window.scrollTo(0, 0);

    }, 1800);

  };

  return (

    <div className="loginuser-container">

      {/* ===== NOTIFICATION ===== */}

      {notif.show && (

        <div
          className={`custom-notif ${
            notif.type
          }`}
        >

          <div className="notif-left">

            {notif.type ===
            "success" ? (

              <CheckCircle
                size={22}
              />

            ) : (

              <AlertCircle
                size={22}
              />

            )}

            <span>
              {notif.message}
            </span>

          </div>

          <button
            className="close-notif"
            onClick={() =>
              setNotif({
                show: false,
                type: "",
                message: "",
              })
            }
          >

            <X size={18} />

          </button>

        </div>

      )}

      {/* ===== CARD ===== */}

      <div className="loginuser-card">

        <h1>
          Login
        </h1>

        <form
          onSubmit={handleSubmit}
        >

          {/* EMAIL */}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={
              formData.email
            }
            onChange={
              handleChange
            }
            required
          />

          {/* PASSWORD */}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={
              formData.password
            }
            onChange={
              handleChange
            }
            required
          />

          {/* BUTTON */}

          <button type="submit">
            Masuk
          </button>

        </form>

        {/* REGISTER */}

        <p>

          Belum punya akun?

          <Link to="/register-user">
            Daftar di sini
          </Link>

        </p>

      </div>

    </div>

  );
}

export default LoginUser;