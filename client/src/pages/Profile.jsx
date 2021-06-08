import React from "react";
import "../styles/profile.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

class Profile extends React.Component {
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
              <td>{eachSolution.solutionName}</td>
            <td>
              <img
                className="img-fluid img-thumbnail celebImg"
                src={eachSolution.logo}
                alt={eachSolution.solutionName}
              />
             </td>
             <td>
              <button
                className="btn btn-secondary"
                onClick={() => this.deleteSolution
                  (index)}
              >
                Delete
              </button></td>
              <td>
              <Link>Update</Link>
            </td>
            <td><Link to={`/solutions/${eachSolution._id}`}>Voir la fiche</Link></td>
          </tr>
        );
      });
    }  else {
      return filteredSolutions.map((eachSolution, index) => {
        return (
          <tr key={index}>
              <td>{eachSolution.solutionName}</td>
            <td>
              <img
                className="img-fluid img-thumbnail celebImg"
                src={eachSolution.logo}
                alt={eachSolution.solutionName}
              />
             </td>
            <td>
              <button
                className="btn btn-secondary"
                onClick={() => this.deleteSolution
                  (index)}
              >
                Delete
              </button></td>
              <td>
              <Link>Update</Link>
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
    } else if (field === "creationDate") {
      compareFunction = (a, b) => b.creationDate - a.creationDate;
    } 

    this.setState({
        solutions: this.state.solutions
        .slice()
        .sort(compareFunction),
    });
  }

  deleteSolution(theIndexOfTheOneToBeDeleted) {
    this.setState({
      solutions: this.state.solutions.filter(
        (c, i) => i !== theIndexOfTheOneToBeDeleted
      ),
    });
  }


  render() {

    return (
      <div className="container-fluid">
      <SearchBar handleChange={this.handleSearchValue}
            value={this.state.searchValue} />

        <h1>
Espace Admin          
        </h1>

        <button
          className="btn btn-primary"
          onClick={() => this.sortSolutions("creationDate")}
        >
          Date création
        </button>
        <button
          className="btn btn-success"
          onClick={() => this.sortSolutions("solutionName")}
        >
          Sort by name
        </button>
        <div className="ctadiv"><Link className="cta" to={'/create'}>Créer une solution</Link></div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Nom de la solution</th>
            </tr>
          </thead>
          <tbody>{this.showSolutions()}</tbody>
        </table>
      </div>
    );
  }
}

export default Profile;


/// premier code de "profile"

// import React, { Component } from 'react';
// import axios from 'axios';
// import LinkSolutionAdmin from '../components/LinkSolutionAdmin';
// import { Link } from 'react-router-dom';

// //import SolutionCard from "./../components/SolutionCard";

// class Profile extends Component {
//     state = {
//         solutions: [],
//     }
    
//     componentDidMount() {
//       axios
//         .get('http://localhost:5000/api/solutions')
//         .then((response) => {
//           this.setState({
//             solutions: response.data.reverse(),
//           });
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
   

//   render() {
//     return (
//       <div>
//         <Link to={'/create'}>Créer une solution</Link>
//         <h1>Solutions :</h1>
//         <div>
//         {this.state.solutions.map((solutionFromArray) => {
          
//           return <LinkSolutionAdmin key={solutionFromArray._id} solution={solutionFromArray} />;
         
//         })}
//         </div>
//       </div>
//     );
//   }
// }

// export default Profile;