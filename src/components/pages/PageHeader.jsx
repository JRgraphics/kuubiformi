import React from "react";

const PageHeader = ({ rows = [] }) => {
  // Takes rows property and sets colors accordingly for each row, switching between black and turqouse.
  // 1st color for each row alternates back and forth as well
  const setUpRows = () => {
    const pageTitleContainer = []; // Title as a whole

    rows.forEach((text, textIndex) => {
      const titleChildren = []; // Words for each title row
      let color = textIndex % 2 === 0 ? true : false; // Check if row's index is divisible by 2; true equals black, false equals turqouse
      const pageTitle = (
        <div key={text + textIndex} className="page__title">
          {titleChildren}
        </div> // Title row
      );

      text.split(" ").forEach((word, index) => {
        titleChildren.push(
          <span
            key={word + index}
            className={color ? "color--black" : "color--turqouse"}
          >
            {word + " "}
          </span>
        );
        color = !color; // Switch colors between words
      });

      pageTitleContainer.push(pageTitle);
    });
    return pageTitleContainer;
  };

  return <div className="page__title-container">{setUpRows()}</div>;
};
export default PageHeader;
