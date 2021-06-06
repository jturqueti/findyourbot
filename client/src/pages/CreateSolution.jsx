import axios from "axios";
import React, { Component } from "react";

class CreateSolution extends Component {
  state = {
    solutionName: "",
    creationDate: "",
    originCountry: "",
    channel: "",
    integration: "",
    pricing: "",
    additionalServices: false,
    nlpProp: false,
    multiLanguages: false,
    languagesNLP: "",
    clientType: "",
    contactName: "",
    contactEmail: "",
    companyURL: "",
    logo: "",
  };

  handleChange = (event) => {
    const { name, value, type } = event.target;

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
      channel: this.state.channel,
      integration: this.state.integration,
      pricing: this.state.pricing,
      additionalServices: this.state.additionalServices,
      nlpProp: this.state.nlpProp,
      multiLanguages: this.state.multiLanguages,
      languagesNLP: this.state.languagesNLP,
      clientType: this.state.clientType,
      contactName: this.state.contactName,
      contactEmail: this.state.contactEmail,
      companyURL: this.state.companyURL,
      logo: this.state.logo,
    };

    axios
      .post("http://localhost:5000/api/solutions", newSolution)
      .then((response) => {
        this.props.history.push("/solutions");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <form className="Form" onSubmit={this.handleSubmit}>
          <div className="Form__field">
            <label className="Form__label" htmlFor="solutionName">
              Solution Name
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
          <div className="Form__field">
            <label className="Form__label" htmlFor="creationDate">
              Creation Date
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
          <div className="Form__field">
            <label className="Form__label" htmlFor="originCountry">
              Country of origin
            </label>
            <input
              id="originCountry"
              name="originCountry"
              className="Form__input"
              value={this.state.originCountry}
              onChange={this.handleChange}
            />
          </div>
          <div className="Form__field">
            <label className="Form__label" htmlFor="channel">
              Channel
            </label>
            {/* <input
              type="text"
              name="channel"
              id="channel"
              className="Form__input"
              value={this.state.channel}
              onChange={this.handleChange}
            />
          </div> */}
            <select
              name="channel"
              id="channel"
              onChange={this.handleChange}
              value={this.state.channel}
              className="Form__input"
              multiple
              size="7"
            >
              <option value="" disabled>
                Sélectionner une ou plusieurs canaux
              </option>
              <option value="Webchat">Webchat</option>
              <option value="Facebook Messenger">Facebook Messenger</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Microsoft Teams">Microsoft Teams</option>
              <option value="Bot vocal">Bot vocal</option>
              <option value="Autre">Autre</option>
            </select>
          </div>

          {/* <div className="Form__field">
            <label className="Form__label" htmlFor="integration">
            Integration
            </label>
            <input
              type="text"
              name="integration"
              id="integration"
              className="Form__input"
              value={this.state.integration}
              onChange={this.handleChange}
            />
          </div> */}

          <div className="Form__field">
            <label className="Form__label" htmlFor="integration">
              Intégration
            </label>
            <select
              name="integration"
              id="integration"
              onChange={this.handleChange}
              value={this.state.integration}
              className="Form__input"
              multiple
              size="5"
            >
              <option value="" disabled>
                Sélectionner une ou plusieurs intégrations
              </option>
              <option value="Salesforce">Salesforce</option>
              <option value="Mailchimp">Mailchimp</option>
              <option value="Zapier">Zapier</option>
              <option value="Autre">Autre</option>
            </select>
          </div>

          {/* <div className="Form__field">
            <label className="Form__label" htmlFor="pricing">
            Pricing
            </label>
            <input
              type="text"
              name="pricing"
              id="pricing"
              className="Form__input"
              value={this.state.pricing}
              onChange={this.handleChange}
            />
          </div> */}

          <div className="Form__field">
            <label className="Form__label" htmlFor="pricing">
              Pricing
            </label>
            <select
              name="pricing"
              id="pricing"
              onChange={this.handleChange}
              value={this.state.pricing}
              className="Form__input"
            >
              <option value="Gratuit">Gratuit</option>
              <option value="€" selected>
                €
              </option>
              <option value="€€">€€</option>
              <option value="€€€">€€€</option>
            </select>
          </div>

          <div className="Form__field">
            <label className="Form__label" htmlFor="additionalServices">
              Additional Services
            </label>
            <input
              type="checkbox"
              name="additionalServices"
              id="additionalServices"
              className="Form__input"
              checked={this.state.additionalServices}
              onChange={this.handleChange}
            />
          </div>
          <div className="Form__field">
            <label className="Form__label" htmlFor="nlpProp">
              nlpProp
            </label>
            <input
              type="checkbox"
              name="nlpProp"
              id="nlpProp"
              className="Form__input"
              checked={this.state.nlpProp}
              onChange={this.handleChange}
            />
          </div>
          <div className="Form__field">
            <label className="Form__label" htmlFor="multiLanguages">
              MultiLanguages
            </label>
            <input
              type="checkbox"
              name="multiLanguages"
              id="multiLanguages"
              className="Form__input"
              checked={this.state.multiLanguages}
              onChange={this.handleChange}
            />
          </div>

          {/* <div className="Form__field">
            <label className="Form__label" htmlFor="languagesNLP">
            Langages supportés par le NLP
            </label>
            <input
              type="text"
              name="languagesNLP"
              id="languagesNLP"
              className="Form__input"
              value={this.state.languagesNLP}
              onChange={this.handleChange}
            />
          </div> */}

          <div className="Form__field">
            <label className="Form__label" htmlFor="languagesNLP">
              Langages supportés par le NLP
            </label>
            <select
              name="languagesNLP"
              id="languagesNLP"
              onChange={this.handleChange}
              value={this.state.languagesNLP}
              className="Form__input"
              multiple
              size="6"
            >
              <option value="" disabled>
                Sélectionner un ou plusieurs langages
              </option>
              <option value="Français">Français</option>
              <option value="Anglais">Anglais</option>
              <option value="Allemand">Allemand</option>
              <option value="Espagnol">Espagnol</option>
              <option value="Autre">Autre</option>
            </select>
          </div>

          {/* <div className="Form__field">
            <label className="Form__label" htmlFor="clientType">
            Type de Client
            </label>
            <input
              type="text"
              name="clientType"
              id="clientType"
              className="Form__input"
              value={this.state.clientType}
              onChange={this.handleChange}
            />
          </div> */}

          <div className="Form__field">
            <label className="Form__label" htmlFor="clientType">
              Type de client
            </label>
            <select
              name="clientType"
              id="clientType"
              onChange={this.handleChange}
              value={this.state.clientType}
              className="Form__input"
              multiple
              size="5"
            >
              <option value="" disabled>
                Sélectionner un ou plusieurs langages
              </option>
              <option value="Particulier">Particulier</option>
              <option value="TPE-PME">TPE-PME</option>
              <option value="Grande Entreprise">Grande Entreprise</option>
              <option value="Administration publique">
                Administration publique
              </option>
            </select>
          </div>

          <div className="Form__field">
            <label className="Form__label" htmlFor="contactName">
              Nom du contact
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
          <div className="Form__field">
            <label className="Form__label" htmlFor="contactEmail">
              Mail
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
          <div className="Form__field">
            <label className="Form__label" htmlFor="companyURL">
              Lien URL de la société
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
          <div className="Form__field">
            <label className="Form__label" htmlFor="logo">
              logo
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
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateSolution;
