import React from "react";
import SolutionCard from "./../components/SolutionCard";

class Solutions extends React.Component {

    state = {
        solutions: [],
    }
    
  render() {
    return (
      <div>
        <h1>Our solutions :</h1>
        <div className="solutionsGrid">
            <SolutionCard/>
        </div>
      </div>
    );
  }
}

export default Solutions;