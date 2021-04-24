import React, { useEffect, useState } from "react";

const AvatarPreview = ({ avatar = "" }) => {
  const [fader, setFader] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");
  const [avatarNext, setAvatarNext] = useState(null);
  useEffect(() => {
    setAvatarNext(avatar);
    setFader("fade-in");
    setTimeout(() => {
      setAvatarPreview(avatar);
      setFader("");
    }, 500);
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
