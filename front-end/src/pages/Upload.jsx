import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/upload.css";

function Upload() {
  const [image, setImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  // PROSES FILE GAMBAR
  const processImage = (file) => {
    if (!file) return; // jika tidak ada file, stop

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage({
        file: file,
        preview: reader.result, // BASE64 string
      });
    };
    reader.readAsDataURL(file);
  };

  // HANDLE KLIK UPLOAD
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    processImage(file); // ← panggil fungsi yang sama
  };

  // HAPUS GAMBAR
  const removeImage = () => {
    setImage(null);
  };

  // DRAG & DROP HANDLERS
  const onDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      processImage(file);
    }
  };

  // TRIGGER FILE INPUT
  const onButtonClick = () => {
    fileInputRef.current.click();
  };

  // RENDER
  return (
    <div className="upload-page">
      <div className="upload-header">
        <h1>EcoSortAI</h1>
      </div>

      <div className="upload-content">
        <h2>Halaman Upload</h2>

        <div
          className={`upload-box ${isDragging ? "dragging" : ""}`}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
          onDrop={onDrop}
        >
          {!image ? (
            <>
              <img
                src="/upload-icon.png"
                alt="Upload"
                className="upload-icon"
              />
              <p className="upload-text">
                {isDragging ? "Lepaskan untuk upload" : "Drop file here"}
              </p>
              <span className="upload-or">OR</span>
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
              <div className="preview-wrapper">
                <button className="remove-image" onClick={removeImage}>
                  ✕
                </button>
                <img
                  src={image.preview}
                  alt="Preview"
                  className="preview-image"
                />
              </div>
              <p className="file-name">{image.file.name}</p>
              <button
                className="submit-btn"
                onClick={() =>
                  navigate("/loading", {
                    state: { image: image.preview },
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