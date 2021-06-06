import React, { Component } from 'react';
import axios from 'axios';
import LinkSolutionAdmin from '../components/LinkSolutionAdmin';

//import SolutionCard from "./../components/SolutionCard";

class Profile extends Component {
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
          return <LinkSolutionAdmin key={solutionFromArray._id} solution={solutionFromArray} />;
        })}
        </div>
      </div>
    );
  }
}

export default Profile;