import React, { useState } from "react";

const Textarea = ({ name, register }) => {
  const [remainingChars, setRemainingChars] = useState(500);

  const handleOnChange = (value) => {
    setRemainingChars(500 - value.length);
  };

  return (
    <div className="textarea__container">
      <textarea
        className="input input__textarea"
        {...register(name)}
        maxLength={500}
        onChange={(e) => handleOnChange(e.target.value)}
      ></textarea>
      <div className="text-right">{remainingChars}</div>
    </div>
  );
};
export default Textarea;
