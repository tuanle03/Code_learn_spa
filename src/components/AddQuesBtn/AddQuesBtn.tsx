// AddQuesBtn.tsx
import "./addQuesBtn.css";

const AddQuesBtn = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <button className="addQuesBtn" onClick={handleClick}>
      Ask Question
    </button>
  );
};

export default AddQuesBtn;
