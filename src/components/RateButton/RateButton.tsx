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
  const [changeAmount, setChangeAmount] = useState(0);

  const handleRate = (value: number) => {
    setChangeAmount(value);
    setRating(rating + value);
  };

  return (
    <div className="rateButtonContainer">
      <div className="ratingDisplay">Rating: {rating}</div>
      {changeAmount !== 0 && (
        <div className="changeAmountDisplay">
          {changeAmount > 0 ? `+${changeAmount}` : changeAmount}
        </div>
      )}
      <button className="rateUpBtn" onClick={() => handleRate(1)}>
        👍🏻
      </button>
      <button className="rateDownBtn" onClick={() => handleRate(-1)}>
        👎🏻
      </button>
    </div>
  );
};

// Use sampleProps as default props
RateButton.defaultProps = sampleProps;

export default RateButton;
