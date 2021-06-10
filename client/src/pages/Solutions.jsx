import React, { Component } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import "../styles/SolutionCard.css";
import { Link } from "react-router-dom";

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
    } else if (originCountry === "Allemagne") {
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/165px-Flag_of_Germany.svg.png";
    } else if (originCountry === "US" || "Etats Unis") {
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/165px-Flag_of_the_United_States.svg.png";
    } else {
      return "https://www.pngrepo.com/download/167926/rabbit.png";
    }
  };

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/solutions")
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
          <div>
            <div>
              <Link to={`/solutions/${eachSolution._id}`}>
                <div className="SolutionCard">
                  <td id="TableCard" key={index}>
                    <tr className="row1">
                      <img
                        className="CardLogo"
                        src={eachSolution.logo}
                        alt={eachSolution.solutionName}
                      />
                    </tr>
                    <tr className="row2">
                      <h3 className="CardName">{eachSolution.solutionName}</h3>
                    </tr>
                    <tr className="row3">
                      <img
                        className="CardFlag"
                        alt="CardFlag"
                        src={this.country(eachSolution.originCountry)}
                      />
                    </tr>
                  </td>
                </div>
              </Link>
            </div>
          </div>
        );
      });
    } else {
      return filteredSolutions.map((eachSolution, index) => {
        return (
          <div>
            <div className="SolutionsWrapper">
              <Link to={`/solutions/${eachSolution._id}`}>
                <div className="SolutionCard">
                  <tr key={index}>
                    <td>
                      <img
                        className="CardLogo"
                        src={eachSolution.logo}
                        alt={eachSolution.solutionName}
                      />
                    </td>
                    <td>
                      <h3 className="CardName">{eachSolution.solutionName}</h3>
                    </td>
                    <td>
                      <img
                        className="CardFlag"
                        alt="CardFlag"
                        src={this.country(eachSolution.originCountry)}
                      />
                    </td>
                  </tr>
                </div>
              </Link>
            </div>
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <div>
        <div className="container-buttons-profile">
        <h1>
Solutions référencées          
        </h1>
        </div>
        <div className="searchbar">
<p>Rechercher par nom de société: </p>
        <SearchBar handleChange={this.handleSearchValue}
            value={this.state.searchValue} />
</div>
</div>
<div className="background-survey wrapp">
        <tbody className="SolutionsWrapper">{this.showSolutions()}</tbody>
        </div>
      </div>
    );
  }
}

export default Solutions;
