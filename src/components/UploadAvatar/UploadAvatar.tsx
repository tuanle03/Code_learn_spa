import React, { useState, useRef, ChangeEvent } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { ReactCropperElement } from "react-cropper";
import "./uploadAvatar.css";
import { Link } from "react-router-dom";

const UploadAvatar: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const cropperRef = useRef<ReactCropperElement>(null);
  const uploadLeftRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isClickAllowedRef, setIsClickAllowedRef] = useState<boolean>(true);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);

      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
      console.log(imageUrl);
    }
    setIsClickAllowedRef(false);
  };

  const handleUploadLeftClick = () => {    
    if (isClickAllowedRef) {
      fileInputRef.current?.click();
    }
    setIsClickAllowedRef(false);
  };

  const handleSaveClick = () => {
    console.log("Saving changes");
    // Add your close or save changes logic here
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    uploadLeftRef.current?.classList.add("dragover");
    setIsClickAllowedRef(false);
  };

  const onDragLeave = () => {
    uploadLeftRef.current?.classList.remove("dragover");
    setIsClickAllowedRef(false);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    uploadLeftRef.current?.classList.remove("dragover");
    setIsClickAllowedRef(false);

    const file = e.dataTransfer.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setSelectedFile(file);
        setImageSrc(event.target?.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleRestoreDefaultClick = () => {
    setImageSrc(null);
    setIsClickAllowedRef(true);
  };

  return (
    <div className="upload">
      <h2>Change Avatar</h2>
      <div className="upload_container">
        <div
          className="upload_left"
          ref={uploadLeftRef}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <div className="centered-text">Frag an image here</div>
          <div
            className="cropper-container"
            draggable={true}
            onClick={handleUploadLeftClick}
          >
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
              ref={fileInputRef}
              style={{ display: "none" }}
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
          <button className="save" onClick={handleSaveClick}>
            Save changes
          </button>
            <Link className="close" to="/profile">
            Close
            </Link>
        </div>
      </div>
    </div>
  );
};

export default UploadAvatar;
