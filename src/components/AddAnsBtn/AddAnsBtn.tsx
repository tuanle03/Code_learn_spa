// AddAnsBtn.tsx
import "./addAnsBtn.css";

const AddAnsBtn = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <button className="addAnsBtn" onClick={handleClick}>
      Add Answer
    </button>
  );
};

export default AddAnsBtn;
