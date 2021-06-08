import React from "react";
import "../styles/profile.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

class ProspectList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      prospects: [],
      searchValue:'',
    }
  }

  componentDidMount() {
      axios
        .get('http://localhost:5000/api/prospect')
        .then((response) => {
          this.setState({
            prospects: response.data.reverse(),
          });
        })
        .catch((error) => {
          console.log(error);
        });
  }

  deleteSolution(id, e) {
    axios
      .delete('http://localhost:5000/api/prospect/' + id)
      .then((response) => {
        this.setState({
        prospects: this.state.prospects.filter((item) => item._id !== id)
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
    const filteredProspect = this.state.prospects.filter((prospects) => {
      return prospects.companyName 
      .toLowerCase()
      .includes(this.state.searchValue.toLowerCase())
    });

    if ( this.state.searchValue === ''){
      return this.state.prospects.map((eachSolution, index) => {
        return (
          <tr key={index}>
              <td>{eachSolution.companyName}</td>
              <td>{eachSolution.firstName}</td>
              <td>{eachSolution.lastName}</td>
              <td>{eachSolution.email}</td>
              <td>{eachSolution.clientType}</td>
              <td>{eachSolution.budget}</td>
              <td>{eachSolution.channel}</td>
              <td>{eachSolution.languagesNLP}</td>
             <td>
              <button
                className="btn btn-secondary"
                onClick={(e) => this.deleteSolution
                  (eachSolution._id, e)}
                // onClick={this.deleteSolution}
              >
                Delete
              </button></td>
              <td>
              <Link to={`/update/${eachSolution._id}`}>Update</Link>
            </td>
        
          </tr>
        );
      });
    }  else {
      return filteredProspect.map((eachSolution, index) => {
        return (
          <tr key={index}>
              <td>{eachSolution.companyName}</td>
            <td>
            <button
                className="btn btn-secondary"
                onClick={(e) => this.deleteSolution
                  (eachSolution._id, e)}
                // onClick={this.deleteSolution}
              >
                Delete
              </button></td>
              <td>
              <Link to={`/update/${eachSolution._id}`}>Update</Link>
            </td>
    
          </tr>
        );
      });
    } 
  }

  sortSolutions(field) {
    // Create a different compareFunction based on "field" value
    let compareFunction;
    if (field === "companyName") {
      compareFunction = (a, b) => (a.companyName > b.companyName ? 1 : -1);
    } else if (field === "lastName") {
      compareFunction = (a, b) => (a.lastName > b.lastName ? 1 : -1)
    } 

    this.setState({
        prospects: this.state.prospects
        .slice()
        .sort(compareFunction),
    });
  }


  render() {

    return (
      <div className="container-fluid">
      

        <h1>
Espace Admin          
        </h1>

        <SearchBar handleChange={this.handleSearchValue}
            value={this.state.searchValue} />

        <br></br>
        <br></br>

        <button
          className="btn btn-primary"
          onClick={() => this.sortSolutions("companyName")}
        >
          Trier par société
        </button>
        <button
          className="btn btn-success"
          onClick={() => this.sortSolutions("firstName")}
        >
          Trier par nom
        </button>
        
        
        <div className="ctadiv"><Link className="cta" to={'/profile'}>Retour gestion solutions</Link></div>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Nom de la société</th>
              <th scope="col">Prénom</th>
              <th scope="col">Nom</th>
              <th scope="col">Email</th>
              <th scope="col">Taille entreprise</th>
              <th scope="col">Budget</th>
              <th scope="col">Canal de déploiement</th>
              <th scope="col">NLP nécessaire</th>
            </tr>
          </thead>
          <tbody>{this.showSolutions()}</tbody>
        </table>
      </div>
    );
  }
}

export default ProspectList;
