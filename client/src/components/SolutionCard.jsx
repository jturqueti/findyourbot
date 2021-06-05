import React from "react";
import { Link } from "react-router-dom";


const SolutionCard = (props) => {
  const { _id, logo, name } =
    props;

  return (
    <div className="" >
        <div className="SolutionCard">
            <div className="solutionLogo">
                <img src={logo} alt={name} />
            </div>
            {name}
        </div>
    </div>
    // <Link to={`/solutions/${solution._id}`}></Link>
  );
};

export default SolutionCard;