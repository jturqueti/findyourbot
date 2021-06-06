import React from "react";
//import { Link } from "react-router-dom";


const SolutionCard = (props) => {
  return (
    <div className="card">
      <img src={props.solution.logo} alt={props.solution.solutionName} />
      <div className="card-details">
        <h2>{props.solution.name}</h2>
      </div>
    </div>
  );
};

// const SolutionCard = (props) => {
//   const { _id, logo, name } =
//     props;

//   return (
//     <div className="" >
//         <div className="SolutionCard">
//             <div className="solutionLogo">
//                 <img src={logo} alt={name} />
//             </div>
//             {name}
//         </div>
//     </div>
//     // <Link to={`/solutions/${solution._id}`}></Link>
//   );
// };

export default SolutionCard;