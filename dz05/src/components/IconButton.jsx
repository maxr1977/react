import React from "react";

const IconButton = ({ svgString, label, href = "#" }) => {
  return (
    <a href={href} className="icon-button" aria-label={label}>
      <span dangerouslySetInnerHTML={{ __html: svgString }} />
    </a>
  );
};

export default IconButton;
