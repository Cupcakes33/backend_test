import { useState, forwardRef } from "react";
import styled from "styled-components";

const ProfileImageUploader = forwardRef((props, ref) => {
  const { prev } = props;
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const handleThumbnailImage = () => ref.current.click();

  return (
    <>
      <StyledProfileImageUploader.Input
        type="file"
        {...props}
        onChange={handleImageChange}
        ref={ref}
      />
      <StyledProfileImageUploader.Thumbnail
        src={previewImage ?? prev}
        alt="Profile thumbnail"
        onClick={handleThumbnailImage}
      />
    </>
  );
});

export default ProfileImageUploader;

const StyledProfileImageUploader = {
  Input: styled.input`
    display: none;
  `,
  Thumbnail: styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  `,
};
