import React, { useEffect, useState } from "react";

const Textarea = ({ name, register, value = "" }) => {
  const [remainingChars, setRemainingChars] = useState(500);

  const handleOnChange = (value) => {
    setRemainingChars(500 - value.length);
    console.log(remainingChars);
  };

  return (
    <textarea
      className="input input__textarea"
      {...register(name)}
      maxLength={500}
      onChange={(e) => handleOnChange(e.target.value)}
    ></textarea>
  );
};
export default Textarea;
