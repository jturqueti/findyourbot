import React from "react";
import { Link } from "react-router-dom";


const SolutionCard = (props) => {
  const { solution } =
    props;

  return (
    <Link className="SolutionLink" to={`/solutions/${solution._id}`}>
        <div className="SolutionCard">
            <div className="solutionLogo">
                <img src={solution.logo} alt={solution.name} />
            </div>
            {solution.name}
        </div>
    </Link>
  );
};

export default SolutionCard;