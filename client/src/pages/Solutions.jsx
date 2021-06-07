import React, { Component } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import "../styles/profile.css";
//import SolutionCard from "./../components/SolutionCard";

class Solutions extends Component {
  constructor() {
    super();
    this.state = {
      solutions: [],
      searchValue: "",
    };
  }

  country = (originCountry) => {
    console.log(originCountry);
    if (originCountry === "France") {
      return "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png";
    } else if (originCountry === "Espagne") {
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Spain_%28Civil%29_alternate_colours.svg/1280px-Flag_of_Spain_%28Civil%29_alternate_colours.svg.png";
    } else {
      return "https://www.pngrepo.com/download/167926/rabbit.png";
    }
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/solutions")
      .then((response) => {
        this.setState({
          solutions: response.data.reverse(),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSearchValue = (value) => {
    this.setState({
      searchValue: value,
    });
  };

  showSolutions() {
    const filteredSolutions = this.state.solutions.filter((solutions) => {
      return solutions.solutionName
        .toLowerCase()
        .includes(this.state.searchValue.toLowerCase());
    });

    if (this.state.searchValue === "") {
      return this.state.solutions.map((eachSolution, index) => {
        return (
          <tr key={index}>
            <td>{eachSolution.solutionName}</td>
            <td>
              <img
                className="flag"
                alt="flag"
                src={this.country(eachSolution.originCountry)}
              />
            </td>
            <td>
              <img
                className="img-fluid img-thumbnail celebImg"
                src={eachSolution.logo}
                alt={eachSolution.solutionName}
              />
            </td>
          </tr>
        );
      });
    } else {
      return filteredSolutions.map((eachSolution, index) => {
        return (
          <tr key={index}>
            <td>{eachSolution.solutionName}</td>
            <td>
              <td>
                <img
                  className="flag"
                  alt="flag"
                  src={this.country(eachSolution.originCountry)}
                />
              </td>
              <img
                className="img-fluid img-thumbnail celebImg"
                src={eachSolution.logo}
                alt={eachSolution.solutionName}
              />
            </td>
          </tr>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Solutions référencées:</h1>
        <SearchBar
          handleChange={this.handleSearchValue}
          value={this.state.searchValue}
        />
        <tbody>{this.showSolutions()}</tbody>
      </div>
    );
  }
}

export default Solutions;
