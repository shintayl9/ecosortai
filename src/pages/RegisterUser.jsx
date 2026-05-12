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

import "../styles/registeruser.css";

function RegisterUser() {

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
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

    // PASSWORD CHECK

    if (
      formData.password !==
      formData.confirmPassword
    ) {

      showNotif(
        "error",
        "Password tidak cocok"
      );

      return;
    }

    // GET USERS

    const users =
      JSON.parse(
        localStorage.getItem(
          "users"
        )
      ) || [];

    // CHECK EMAIL

    const emailExists =
      users.find(
        (user) =>
          user.email ===
          formData.email
      );

    if (emailExists) {

      showNotif(
        "error",
        "Email sudah terdaftar"
      );

      return;
    }

    // NEW USER

    const newUser = {
      id: Date.now(),

      name:
        formData.name,

      email:
        formData.email,

      password:
        formData.password,
    };

    // SAVE USERS

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    // SAVE CURRENT USER

    localStorage.setItem(
      "currentUser",
      JSON.stringify(newUser)
    );

    // SUCCESS

    showNotif(
      "success",
      "Pendaftaran berhasil"
    );

    // RESET FORM

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    // NAVIGATE

    setTimeout(() => {

      navigate("/");

      window.scrollTo(0, 0);

    }, 1800);

  };

  return (

    <div className="register-container">

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

      <div className="register-card">

        <h1>
          Daftar Akun
        </h1>

        <form
          onSubmit={handleSubmit}
        >

          {/* NAME */}

          <input
            type="text"
            name="name"
            placeholder="Nama Lengkap"
            value={
              formData.name
            }
            onChange={
              handleChange
            }
            required
          />

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

          {/* CONFIRM PASSWORD */}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Konfirmasi Password"
            value={
              formData.confirmPassword
            }
            onChange={
              handleChange
            }
            required
          />

          {/* BUTTON */}

          <button type="submit">
            Daftar
          </button>

        </form>

        {/* LOGIN */}

        <p>

          Sudah punya akun?

          <Link to="/login-user">
            Login di sini
          </Link>

        </p>

      </div>

    </div>

  );
}

export default RegisterUser;