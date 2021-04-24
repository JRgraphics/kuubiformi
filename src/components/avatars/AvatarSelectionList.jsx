import React, { useState } from "react";
import AvatarSelectionListItem from "./AvatarSelectionListItem";

const AvatarSelectionList = ({
  avatars = [],
  selectAvatar,
  currentSelection,
}) => {
  const [disabled, setDisabled] = useState(false);

  const handleSelect = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 500);
  };
  return (
    <ul className="avatar-selection-list list">
      {avatars.map((avatar, index) => (
        <AvatarSelectionListItem
          key={index}
          avatar={avatar}
          selectAvatar={() => {
            selectAvatar(avatar);
            handleSelect();
          }}
          selected={avatar === currentSelection}
          disabled={disabled}
        />
      ))}
    </ul>
  );
};
export default AvatarSelectionList;
