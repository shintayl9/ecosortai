import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/upload.css";

function Upload() {
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  // HANDLE UPLOAD
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage({
        file: file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  // HAPUS GAMBAR
  const removeImage = () => {
    setImage(null);
  };

  return (
    <div className="upload-page">

      {/* HEADER */}
      <div className="upload-header">
        <h1>EcoSortAI</h1>
      </div>

      {/* CONTENT */}
      <div className="upload-content">

        <h2>Halaman Upload</h2>

        {/* BOX */}
        <div className="upload-box">

          {!image ? (
            <>
              {/* ICON */}
              <img
                src="/upload-icon.png"
                alt="Upload"
                className="upload-icon"
              />

              <p className="upload-text">
                Drop file here
              </p>

              <span className="upload-or">
                OR
              </span>

              {/* INPUT */}
              <label className="upload-btn">
                Upload File

                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageChange}
                />
              </label>
            </>
          ) : (
            <>
              {/* PREVIEW WRAPPER */}
              <div className="preview-wrapper">

                {/* BUTTON X */}
                <button
                  className="remove-image"
                  onClick={removeImage}
                >
                  ✕
                </button>

                {/* PREVIEW IMAGE */}
                <img
                  src={image.preview}
                  alt="Preview"
                  className="preview-image"
                />

              </div>

              {/* FILE NAME */}
              <p className="file-name">
                {image.file.name}
              </p>

              {/* SUBMIT */}
              <button
                className="submit-btn"
                onClick={() =>
                  navigate("/loading", {
                    state: {
                      image: image.preview,
                    },
                  })
                }              
              >
                Submit
              </button>
            </>
          )}

        </div>

      </div>

    </div>
  );
}

export default Upload;