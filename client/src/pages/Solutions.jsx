import React, { Component } from 'react';
import axios from 'axios';
import LinkSolution from '../components/LinkSolution';

//import SolutionCard from "./../components/SolutionCard";

class Solutions extends Component {
    state = {
        solutions: [],
    }
    
    componentDidMount() {
      axios
        .get('http://localhost:5000/api/solutions')
        .then((response) => {
          this.setState({
            solutions: response.data.reverse(),
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  

  render() {
    return (
      <div>
        <h1>Our solutions :</h1>
        <div>
        {this.state.solutions.map((solutionFromArray) => {
          return <LinkSolution key={solutionFromArray._id} solution={solutionFromArray} />;
        })}
        </div>
      </div>
    );
  }
}

export default Solutions;