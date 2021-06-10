import React from "react";
import "../styles/espace-admin.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      solutions: [],
      searchValue:'',
    }
  }

  componentDidMount() {
      axios
        .get(process.env.REACT_APP_BACKEND_URL + '/api/solutions')
        .then((response) => {
          this.setState({
            solutions: response.data.reverse(),
          });
        })
        .catch((error) => {
          console.log(error);
        });
  }

  // deleteSolution(index) {
  //   this.setState({
  //    solutions: this.state.solutions.filter((c, i) => i !== index)
  //   });
  // }

  deleteSolution(id, e) {
    axios
      .delete('http://localhost:5000/api/solutions/' + id)
      .then((response) => {
        this.setState({
        solutions: this.state.solutions.filter((item) => item._id !== id)
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
      .includes(this.state.searchValue.toLowerCase())
    });

    if ( this.state.searchValue === ''){
      return this.state.solutions.map((eachSolution, index) => {
        return (
          <tr key={index}>
              <td><h2>{eachSolution.solutionName}</h2></td>
            <td>
              <img
                className="img-profile-solution"
                src={eachSolution.logo}
                alt={eachSolution.solutionName}
              />
             </td>
             <td>
              <button
              className="btn-gestion"
                onClick={(e) => this.deleteSolution
                  (eachSolution._id, e)}
              >
                Delete
              </button></td>
              <td>
              <Link className="btn-gestion" to={`/update/${eachSolution._id}`}>Update</Link>
            </td>
            <td><Link  className="btn-gestion" to={`/solutions/${eachSolution._id}`}>Voir la fiche</Link></td>
          </tr>
        );
      });
    }  else {
      return filteredSolutions.map((eachSolution, index) => {
        return (
          <tr key={index}>
              <td><h2>{eachSolution.solutionName}</h2></td>
            <td>
              <img
                className="img-profile-solution"
                src={eachSolution.logo}
                alt={eachSolution.solutionName}
              />
             </td>
            <td>
            <button
               className="btn-gestion"
                onClick={(e) => this.deleteSolution
                  (eachSolution._id, e)}
                // onClick={this.deleteSolution}
              >
                Delete
              </button></td>
              <td>
              <Link to={`/update/${eachSolution._id}`}>Update</Link>
            </td>
            <td><Link to={`/solutions/${eachSolution._id}`}>Voir la fiche</Link></td>
          </tr>
         
        );
      });
    } 
  }

  sortSolutions(field) {
    // Create a different compareFunction based on "field" value
    let compareFunction;
    if (field === "solutionName") {
      compareFunction = (a, b) => (a.solutionName > b.solutionName ? 1 : -1);
    } 

    this.setState({
        solutions: this.state.solutions
        .slice()
        .sort(compareFunction),
    });
  }

  render() {

    return (
      <div>
      <div className="background-survey">

      <div className="container-buttons-profile">
        <h1>
Espace Admin          
        </h1>
        </div>
        <div className="container-cta-profile">
        <div className="ctadiv"><Link className="btn-return" to={'/create'}>Créer une solution</Link></div>
        <div className="ctadiv"><Link className="btn-return" to={'/prospect'}>Liste des prospects</Link></div>
        </div>
        <div className="thin-line"></div>
        <div className="search-and-btn">
        <div className="searchbar">
<p>Rechercher par nom de société: </p><SearchBar handleChange={this.handleSearchValue}
            value={this.state.searchValue} />
</div>
<div className="container-btn-sort">
        
        <button
          className="btn-clicked"
          onClick={() => this.sortSolutions("solutionName")}
        >
          Sort by name
        </button>
        </div>
        </div>
        </div>
        <div className="solutions-profile-list">
        <table className="table">
          <tbody>{this.showSolutions()}</tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default Profile;

