import axios from "axios";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../styles/browser.css";
import "../styles/SolutionCard.css"
import "../styles/SolutionCardBrowser.css"

class CreateProspect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: "",
      pricing: "",
      clientType: "",
      email: "",
      companyName: "",
      firstName: "",
      lastName: "",
      solutions: [],
    };
    
  }

  getChannels = (something) => {
    this.setState({
      channel: something,
    });
  };

  getClientTypes = (something) => {
    this.setState({
      clientType: something,
    });
  };

  handleChange = (event) => {
    let { name, value} = event.target;

    this.setState({
          [name]: value,
        });
  };

  

  handleSubmit = (event) => {
    event.preventDefault();

    const newProspect = {
      channel: this.state.channel,
      pricing: this.state.pricing,     
      clientType: this.state.clientType,
      email: this.state.email,
      companyName: this.state.companyName,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    };

    console.log(newProspect);

    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/prospect/", newProspect)
      .then((response) => {
        console.log(response.data);
        console.log(response);
        this.setState({
                solutions: response.data,
              });
        console.log("tototo")
      })
      .catch((error) => {
        console.log(error);
      });

  };


  showSolutions() {
      return  this.state.solutions.map((eachSolution, index) => {
        return (
          <div>
            <div className="SolutionsWrapperBrowser">
              <Link to={`/solutions/${eachSolution._id}`}>
                <div className="SolutionCardBrowser">
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
                  </tr>
                </div>
              </Link>
            </div>
            </div>
        );
      });
    }
  
  render() {  
    return (
      <div >
        <form  onSubmit={this.handleSubmit}>
          <div className="background-survey">
            <div className="title-browser">
          <h1 className="titre">Trouvez la solution qui correspond à votre projet !</h1>
          </div>
          <section className="container-white section section-question">
          
          <div className="blockq question-bot">

          <h2>Channel requis</h2>
         
            <label className="question-client" htmlFor="channel">
              Où connecter votre bot ?
            </label>
            <br/>
           
            <select
            className="question-client select"
              name="channel"
              id="channel"
              onChange={this.handleChange}
              value={this.state.channel}
            >
              <option >Choisir</option>
              <option value="Webchat">Webchat</option>
              <option value="Facebook Messenger">Facebook Messenger</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Microsoft Teams">Microsoft Teams</option>
              <option value="Bot vocal">Bot vocal</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
          <div className="blockq question-bot">
          
          <h2>Budget à disposition</h2>
          
            <label className="question-client"  htmlFor="pricing">
              Quel est votre budget ?
            </label>
            <br/>
            <select
            className="question-client select"
              name="pricing"
              id="pricing"
              onChange={this.handleChange}
              value={this.state.pricing}
            >
              <option >Choisir</option>
              <option value="Gratuit">No budget!</option>
              <option value="€">€</option>
              <option value="€€">€€</option>
              <option value="€€€">€€€</option>
            </select>
          </div>

          <div className="blockq question-bot">
          <h2>Type de structure</h2>
       
            <label className="question-client" htmlFor="clientType">
              Quelle est la taille de votre société ?
            </label>
           <br/>
           
            <select
              name="clientType"
              id="clientType"
              onChange={this.handleChange}
              value={this.state.clientType}
              className="question-client select"
            >
              <option >Choisir</option>
              <option value="Particulier">Particulier</option>
              <option value="TPE-PME">TPE-PME</option>
              <option value="Grande Entreprise">Grande Entreprise</option>
              <option value="Administration publique">Administration publique</option>
            </select>
          </div>
          </section>
          


<div className="container-white">
  <div className="title-info-browser">
          <h2 className="titre-info">Vos informations</h2>
          </div>
          <section className="section">
          <div className="blockq question-user">
            <label htmlFor="companyName">
              Nom de votre entreprise
            </label>
            <input
            
              type="text"
              name="companyName"
              id="companyName"
              value={this.state.companyName}
              onChange={this.handleChange}
            />
          </div>
       
          <div  className="blockq question-user">
            <label  htmlFor="firstName">
              Prénom
            </label>
            
            <input
           
              type="text"
              name="firstName"
              id="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
         
          <div  className="blockq question-user">
            <label htmlFor="lastName">
              Nom
            </label>
            <input
            
              type="text"
              name="lastName"
              id="lastName"
              
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>
 
          <div  className="blockq question-user">
            <label  htmlFor="email">
              Email professionnel
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
  </section>
  </div>
  </div>
  <div id="send-btn-browser">
  <button  className="btn-cta-lead">Envoyer</button>
  </div>
         
        </form>
        <div className="MySolutions">
        
        {this.showSolutions()}
        </div>
      </div>
    );
  }
}


export default CreateProspect;
