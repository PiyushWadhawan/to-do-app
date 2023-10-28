import React from "react";

function Card({ children, paddingAlt, rating = "11" }) {
  return (
    <div
      className="card"
      style={{
        padding: paddingAlt && "0rem 0rem 0rem 2rem",
        borderLeft:
          rating < 4 && rating >= 0
            ? "5px solid orange"
            : rating < 8
            ? "5px solid green"
            : rating <= 10
            ? "5px solid red"
            : "",
      }}
    >
      {children}
    </div>
  );
}

export default Card;
