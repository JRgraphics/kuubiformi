import React, { useEffect, useState } from "react";

const AvatarPreview = ({ avatar = "" }) => {
  // State hooks
  const [fader, setFader] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");
  const [avatarNext, setAvatarNext] = useState(null);

  // Changes preview for selected avatar with fade effect
  const handleAvatarChange = () => {
    setAvatarNext(avatar);
    setFader("fade-in");
    setTimeout(() => {
      setAvatarPreview(avatar);
      setFader("");
    }, 500);
  };

  // UseEffect hooks
  useEffect(() => {
    handleAvatarChange();
  }, [avatar]);

  return (
    <div className={"avatar-preview "}>
      <img className="preview__image" src={avatarPreview} alt="avatar" />
      <img
        className={"preview__image opacity-0 " + fader}
        src={avatarNext}
        alt="avatar"
      />
    </div>
  );
};
export default AvatarPreview;
