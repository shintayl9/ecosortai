import React, { useState } from "react";
import "../styles/upload.css";

function Upload() {
  const [image, setImage] = useState(null);

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

              <p className="upload-text">Drop file here</p>

              <span className="upload-or">OR</span>

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
              {/* PREVIEW */}
              <img
                src={image.preview}
                alt="Preview"
                className="preview-image"
              />

              <p className="file-name">
                {image.file.name}
              </p>

              <button className="submit-btn">
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