import React, { useState, useRef, ChangeEvent } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { ReactCropperElement } from "react-cropper";
import "./uploadAvatar.css";

const UploadAvatar: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const cropperRef = useRef<ReactCropperElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);

      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
    }
  };

  const handleRestoreDefaultClick = () => {
    console.log("Restoring default");
    // Add your restore default logic here
  };

  const handleCloseClick = () => {
    console.log("Closing or saving changes");
    // Add your close or save changes logic here
  };

  return (
    <div className="upload">
      <h2>Change Avatar</h2>
      <div className="upload_container">
        <div className="upload_left">
          <div className="centered-text">Frag an image here</div>
          <div className="cropper-container">
            {imageSrc && (
              <Cropper
                ref={cropperRef}
                src={imageSrc}
                style={{ width: "100%", height: 300 }}
                aspectRatio={1}
                viewMode={3}
              />
            )}
          </div>
          <div className="action">
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={handleFileChange}
            />
            <label className="fileInput" htmlFor="fileInput">
              Upload image
            </label>
            <a href="#" onClick={handleRestoreDefaultClick}>
              Restore default
            </a>
          </div>
        </div>
        <div className="upload_right">
          <button className="save" onClick={handleCloseClick}>Save changes</button>
          <button className="close" onClick={handleCloseClick}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default UploadAvatar;
