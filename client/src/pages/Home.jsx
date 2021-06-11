import React from "react";
import { Link } from 'react-router-dom';
import "../styles/global.css";

class Home extends React.Component {
  render() {
    return (
      <div className="container-blocks-home">
        <div className="block-home block1 background-survey">
        <h1>Parcourez les solutions du marché</h1>
        <h2>Plus de 100 solutions référencées !</h2>
        <div className="header-logos">
          <div className="row">
          <img
           className="img-logo"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Dialogflow_logo.svg/1280px-Dialogflow_logo.svg.png"
            alt="logo-dialogflow"
          ></img>
          <img
           className="img-logo"
            src="https://www.inbenta.com/wp-content/uploads/2017/01/inbenta_logo_corporate-4.png"
            alt="logo-inbenta"
          ></img>
          <img
           className="img-logo"
            src="https://clustaar.com/wp-content/uploads/2020/05/Logo-Conv-AI-Vert-1.png"
            alt="logo-clustaar"
          ></img>
          </div>
          <div className="row">
          <img
           className="img-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/159px-HubSpot_Logo.svg.png"
            alt="logo-hubspot"
          ></img>
          <img
           className="img-logo"
            src="https://miro.medium.com/max/389/1*VvhNUq-RVSgJh-PwUcq-kQ.png"
            alt="logo-chat-fuel"
          ></img>
          <img
           className="img-logo"
            src="https://miro.medium.com/max/625/1*xKz_Kjmrx522jBrSHcUN6w.png"
            alt="logo-botsify"
          ></img>
          </div>
          <div className="row">
          <img
           className="img-logo"
            src="https://storageprodsitewebai3.blob.core.windows.net/images/Ai3/dydu-logo.png"
            alt="logo-dydu"
          ></img>
          <img
           className="img-logo"
            src="https://assets-global.website-files.com/5e1c4fb5db4d5243c0021d34/5f4f546c3086fe84b9e7ca6e_symbol.png"
            alt="logo-landbot"
          ></img>
          <img
           className="img-logo"
            src="https://miro.medium.com/max/419/1*6RNXDaSG-FbkRM0zrsWXUQ.png"
            alt="logo-flow-xo"
          ></img>
          </div>
        </div>


        <div className="btn-home">
          <Link className="btn-cta-home btn-blue" to={'/solutions'}>Parcourir</Link>
          
          </div>
        </div>

        <div className="block-home block2">
          <h1 >Trouvez votre solution !</h1>
          <h2>Remplissez vos critères et découvrez qui correspond à vos besoins !</h2>
          <img
           className="img-ninja"
            src="/ninja.png"
            alt="logo-clustaar"
          ></img>
          <div className="btn-home">
          <Link className="btn-cta-home btn-pink" to={'/solutions'}>Démarrer</Link>
          </div>
          </div>
      </div>
    );
  }
}

export default Home;
