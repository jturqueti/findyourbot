import React, { Component } from 'react';
import axios from 'axios';
import "../styles/profile.css";
//import SolutionCard from "./../components/SolutionCard";

axios
        .post('http://localhost:5000/api/solutions', {
            q1:["Particulier", "TPE-PME", "Grande Entreprise", "Administration publique"],
            q2:["Français", "Anglais", "Allemand", "Espagnol", "Autre"],
            q3:["Gratuit", "€", "€€", "€€€"]
        })
        .then((response) => {
          this.setState({
            solutions: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });


class Browser extends Component {
  constructor(){
    super();
    this.state = {
      solutions: [],
      searchValue:'',
    }
  }


  render() {
    return (
      <div>
        <p>Quelle est la structure de votre organisation?(1 seul choix)</p>
        <p>Dans quelle.s langue.s souhaitez-vous développer votre projet? (multi-choices)</p>
        <p>Quel est votre budget (1 seul choix)</p>
      </div>
    );
  }
}

export default Browser;