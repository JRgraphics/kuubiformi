import React, { useState } from "react";

// Components
import AvatarPreview from "./AvatarPreview";
import AvatarSelectionList from "./AvatarSelectionList";

// Translation
import { useTranslation } from "react-i18next";

const Avatar = ({ avatars, onAvatarChange }) => {
  const { t } = useTranslation();

  // State hooks
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);

  return (
    <div className="avatar">
      <div className="column__header">
        {t("pages.registerationPage.headers.chooseYourAvatar")}
      </div>
      <AvatarPreview avatar={selectedAvatar} />
      <AvatarSelectionList
        avatars={avatars}
        selectAvatar={(avatar) => {
          setSelectedAvatar(avatar);
          onAvatarChange(avatar);
        }}
        currentSelection={selectedAvatar}
      />
    </div>
  );
};
export default Avatar;
