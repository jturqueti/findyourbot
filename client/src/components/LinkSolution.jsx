import React from 'react';
import { Link } from 'react-router-dom';

const LinkSolution = (props) => {
  const { solution } = props;

  return (
    <Link  to={`/solutions/${solution._id}`}>
        <img src={solution.logo} alt={solution.solutionName} />
        <div>
          <h2>{solution.solutionName}</h2>
          
        </div>
    </Link>
  );
};

export default LinkSolution;
