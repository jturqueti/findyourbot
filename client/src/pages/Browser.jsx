import React, { Component } from 'react';
import axios from 'axios';
import "../styles/profile.css";
//import SolutionCard from "./../components/SolutionCard";

class Browser extends Component {
  constructor(){
    super();
    this.state = {
      solutions: [],
      searchValue:'',
    }
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
        <p>Coucou</p>
      </div>
    );
  }
}

export default Browser;