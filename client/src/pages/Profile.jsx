import React from "react";
import "../styles/profile.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
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

  showContacts() {
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
              onClick={() => this.deleteContact(index)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  // Iteration 3 | Sort Contacts By Name And Popularity

  sortContacts(field) {
    // Create a different compareFunction based on "field" value
    let compareFunction;
    if (field === "solutionName") {
      compareFunction = (a, b) => (a.solutionName > b.solutionName ? 1 : -1);
    } else if (field === "originCountry") {
      compareFunction = (a, b) => b.originCountry - a.originCountry;
    }

    // this.state.contacts.slice() create a copy of the array (this.state.allContacts)
    this.setState({
        solutions: this.state.solutions
        .slice()
        .sort(compareFunction),
    });
  }

  // Iteration 4 | Remove Contacts
  deleteContact(theIndexOfTheOneToBeDeleted) {
    // Method 1
    // let copyOfContactsArr = [...this.state.firstVisibleContacts];
    // copyOfContactsArr.splice(theIndexOfTheOneToBeDeleted, 1);
    // this.setState({
    //   firstVisibleContacts: copyOfContactsArr
    // })

    //  Method 2
    this.setState({
      // filter creates a copy
      // in "(c,i)", "c" is the current contact, "i" is the current index
      solutions: this.state.solutions.filter(
        (c, i) => i !== theIndexOfTheOneToBeDeleted
      ),
    });
  }
  render() {
    return (
      <div className="container-fluid">
      

        <h1>
Espace Admin          
        </h1>
        <button
          className="btn btn-primary"
          onClick={() => this.sortContacts("originCountry")}
        >
          Sort by country of origin
        </button>
        <button
          className="btn btn-success"
          onClick={() => this.sortContacts("solutionName")}
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
          <tbody>{this.showContacts()}</tbody>
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