import axios from "axios";
import React, { Component } from "react";
import ChannelSelector from "../components/Forms/SelectChannelForm";
import ClientTypeSelector from "../components/Forms/SelectClientTypeForm";
import IntegrationSelector from "../components/Forms/SelectIntegrationForm";
import LanguageSelector from "../components/Forms/SelectLanguageForm";
import "./../styles/CreateUpdateForms.css";

class CreateSolution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solutionName: "",
      creationDate: "",
      originCountry: "",
      channel: [
        { value: 'Facebook Messenger', label: {x:'Facebook Messenger'} },
        { value: 'WhatsApp', label: {x:'WhatsApp'} },
      ],
      integration: [
        { value: 'Mailchimp', label: {x:'Mailchimp'} },
        { value: 'Zapier', label: {x:'Zapier'} },
      ],
      pricing: "",
      additionalServices: false,
      nlpProp: false,
      multiLanguages: false,
      languagesNLP: [
        { value: "Français", label: { x: "Français" } },
        { value: "Anglais", label: { x: "Anglais" } },
      ],
      clientType: [
        { value: 'TPE-PME', label: {x: 'TPE-PME'} },
      ],
      contactName: "",
      contactEmail: "",
      companyURL: "",
      logo: "",
    };
    
  }

  getChannels = (something) => {
    this.setState({
      channel: something,
    });
  };

  getIntegrations = (something) => {
    this.setState({
      integration: something,
    });

  };

  getLanguages = (something) => {
    this.setState({
      languagesNLP: something,
    });
  };


  getClientTypes = (something) => {
    this.setState({
      clientType: something,
    });
  };

  handleChange = (event) => {
    let { name, value, type } = event.target;

    if (type === "checkbox") {
      value = event.target.checked;
    }

    this.setState({
          [name]: value,
        });
  };

  

  handleSubmit = (event) => {
    event.preventDefault();

    const newSolution = {
      solutionName: this.state.solutionName,
      creationDate: this.state.creationDate,
      originCountry: this.state.originCountry,
      channel: this.state.channel.map((object) => object.value),
      integration: this.state.integration.map((object) => object.value),
      pricing: this.state.pricing,
      additionalServices: this.state.additionalServices,
      nlpProp: this.state.nlpProp,
      multiLanguages: this.state.multiLanguages,
      languagesNLP: this.state.languagesNLP.map((object) => object.value),
      clientType: this.state.clientType.map((object) => object.value),
      contactName: this.state.contactName,
      contactEmail: this.state.contactEmail,
      companyURL: this.state.companyURL,
      logo: this.state.logo,
    };

    console.log(newSolution);

    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/solutions/", newSolution)
      .then((response) => {
        this.props.history.push("/solutions");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  render() {  
    return (
      <div className="CreateUpdateForm">
        <h1 className="FormTitle">Ajouter une solution</h1>
        <form className="Form" onSubmit={this.handleSubmit}>
          <div className="Form__field">
            <label className="Form__label" htmlFor="solutionName">
              Nom de la solution
            </label>
            <input
              type="text"
              name="solutionName"
              id="solutionName"
              className="Form__input"
              value={this.state.solutionName}
              onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div className="Form__field">
            <label className="Form__label" htmlFor="creationDate">
              Date de création de la société
            </label>
            
            <input
              type="text"
              name="creationDate"
              id="creationDate"
              className="Form__input"
              value={this.state.creationDate}
              onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div className="Form__field">
            <label className="Form__label" htmlFor="originCountry">
              Pays d'origine
            </label>
            
            <input
              type="text"
              id="originCountry"
              name="originCountry"
              className="Form__input"
              value={this.state.originCountry}
              onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div className="Form__field">
            <label className="Form__label" htmlFor="channel">
              Channel(s) disponible(s)
            </label>
            <ChannelSelector 
            defaultValue={this.state.channel}
            onChange={this.getChannels}
            />
          </div>
          <br></br>
          <div className="Form__field">
            <label className="Form__label" htmlFor="integration">
              Intégration(s)
            </label>
            <IntegrationSelector
            defaultValue={this.state.integration}
            onChange={this.getIntegrations}
            />
          </div>
          <br></br>
          <div className="Form__field">
            <label className="Form__label" htmlFor="pricing">
              Pricing moyen
            </label>
            
            <select
              name="pricing"
              id="pricing"
              onChange={this.handleChange}
              value={this.state.pricing}
              className="Form__input"
            >
              <option value="select" disabled>Select</option>
              <option value="Gratuit">Gratuit</option>
              <option value="€">€</option>
              <option value="€€">€€</option>
              <option value="€€€">€€€</option>
            </select>
          </div>
          <br></br>
          <div className="Form__field checkboxForm  ">
            <label className="Form__label" htmlFor="additionalServices">
              Services additionnels ?
            </label>
            
            <input
              type="checkbox"
              name="additionalServices"
              id="additionalServices"
              className="Form__input checkboxInput"
              checked={this.state.additionalServices}
              onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div className="Form__field checkboxForm">
            <label className="Form__label" htmlFor="nlpProp">
              NLP Propriétaire ?
            </label>
            
            <input
              type="checkbox"
              name="nlpProp"
              id="nlpProp"
              className="Form__input checkboxInput"
              checked={this.state.nlpProp}
              onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div className="Form__field checkboxForm">
            <label className="Form__label" htmlFor="multiLanguages">
              MultiLanguages ?
            </label>
            
            <input
              type="checkbox"
              name="multiLanguages"
              id="multiLanguages"
              className="Form__input checkboxInput"
              checked={this.state.multiLanguages}
              onChange={this.handleChange}
            />
          </div>
            <br></br>
          <div className="Form__field">
            <label className="Form__label" htmlFor="languagesNLP">
              Langages supportés par le NLP
            </label>

            <LanguageSelector
              defaultValue={this.state.languagesNLP}
              onChange={this.getLanguages}
            />
            
          </div>
          <br></br>
          <div className="Form__field">
            <label className="Form__label" htmlFor="clientType">
              Type de clients
            </label>
            <ClientTypeSelector
              defaultValue={this.state.clientType}
              onChange={this.getClientTypes} 
            />
          </div>
          <br></br>
          <div className="Form__field">
            <label className="Form__label" htmlFor="contactName">
              Nom du contact référent
            </label>
          
            <input
              type="text"
              name="contactName"
              id="contactName"
              className="Form__input"
              value={this.state.contactName}
              onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div className="Form__field">
            <label className="Form__label" htmlFor="contactEmail">
              Email contact
            </label>
            
            <input
              type="text"
              name="contactEmail"
              id="contactEmail"
              className="Form__input"
              value={this.state.contactEmail}
              onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div className="Form__field">
            <label className="Form__label" htmlFor="companyURL">
              URL du site
            </label>
            
            <input
              type="text"
              name="companyURL"
              id="companyURL"
              className="Form__input"
              value={this.state.companyURL}
              onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div className="Form__field">
            <label className="Form__label" htmlFor="logo">
              Url de l'image du logo
            </label>
            
            <input
              type="text"
              name="logo"
              id="logo"
              className="Form__input"
              value={this.state.logo}
              onChange={this.handleChange}
            />
          </div>
          <br></br>
          <button className="btn-return" >Envoyer</button>
        </form>
      </div>
    );
  }
}


export default CreateSolution;
