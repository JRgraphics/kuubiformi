import React from "react";
import Button from "../Button";

const AvatarSelectionListItem = ({
  avatar,
  selectAvatar,
  selected = false,
  disabled = false,
}) => {
  return (
    <li className="avatar-selection-list-item">
      <Button
        buttonClassName={"button__avatar button--transparent"}
        buttonContent={
          <img
            className={
              "button__image " + (selected ? "button__image--selected" : "")
            }
            src={avatar}
            alt="img"
          />
        }
        onClick={selectAvatar}
        disabled={disabled}
      />
    </li>
  );
};
export default AvatarSelectionListItem;
