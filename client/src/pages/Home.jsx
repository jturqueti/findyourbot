import React from "react";
import { Link } from 'react-router-dom';
import "../styles/global.css";

class Home extends React.Component {
  render() {
    return (
      <div className="container-blocks-home">
        <div className="block-home block1">
        <h1>Parcourez les solutions du marché</h1>
        <h2>Plus de XX solutions référencées!</h2>
        </div>

        <div className="block-home block2 background-survey">
          <h1 >Trouver votre solution !</h1>
          <h2>Remplissez vos critères et découvrez qui correspond à vos besoins</h2>
          <div className="btn-home">
          <Link className="btn-cta-lead" to={'/solutions'}>Let's go!</Link>
          </div>
          </div>
      </div>
    );
  }
}

export default Home;
