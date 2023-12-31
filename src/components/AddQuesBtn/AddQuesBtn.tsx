import "./addQuesBtn.css";
import { Link } from "react-router-dom";

const AddQuesBtn = () => {
  return (
    <Link className="addQuesBtn" to="/ask">
      Ask Question
    </Link>
  );
};

export default AddQuesBtn;
