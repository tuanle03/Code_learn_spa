// RateButton.tsx
import "./rateButton.css";
import React, { useState } from "react";

// Define the interface for the button
interface RateButtonProps {
  initialRating: number;
}

const sampleProps: RateButtonProps = {
  initialRating: 0,
};

const RateButton: React.FC<RateButtonProps> = ({ initialRating }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRate = (value: number) => {
    setRating(rating + value);
  };

  return (
    <div className="rateButtonContainer">
      <div className="ratingDisplay">Rating: {rating}</div>
      <div className=" btnUpDown">
        <button className="rateUpBtn twoBtn" onClick={() => handleRate(1)}>
          👍🏿
        </button>
        <button className="rateDownBtn twoBtn" onClick={() => handleRate(-1)}>
          👎🏿
        </button>
      </div>
    </div>
  );
};

// Use sampleProps as default props
RateButton.defaultProps = sampleProps;

export default RateButton;
