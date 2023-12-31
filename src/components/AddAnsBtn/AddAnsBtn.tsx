// AddAnsBtn.tsx
import "./addAnsBtn.css";
import { Link } from "react-router-dom";

interface AddAnsBtnProps{
  id: string;
}
const AddAnsBtn: React.FC<AddAnsBtnProps> = ({id}) => {
  var path = "/answer/" + id;
  return (
    <Link className="addAnsBtn" to={path}>
      Add Answer
    </Link>
  );
};

export default AddAnsBtn;
