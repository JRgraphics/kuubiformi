import React from "react";

const Checkbox = ({ name, register, onCheck }) => {
  return (
    <label className="checkbox__container">
      <input type="checkbox" {...register(name)} onChange={onCheck} />
      <span className="checkmark"></span>
    </label>
  );
};
export default Checkbox;
