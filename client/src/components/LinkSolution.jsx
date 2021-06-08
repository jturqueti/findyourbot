import React from 'react';
import { Link } from 'react-router-dom';

const LinkSolution = (props) => {
  const { solution } = props;

  return (
    <Link className="card" to={`/solutions/${solution._id}`}>
        
    </Link>
  );
};

export default LinkSolution;
