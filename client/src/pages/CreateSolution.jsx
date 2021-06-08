import axios from "axios";
import React, { Component } from "react";
import ChannelSelector from "../components/Forms/SelectChannelForm";
import ClientTypeSelector from "../components/Forms/SelectClientTypeForm";
import IntegrationSelector from "../components/Forms/SelectIntegrationForm";
import LanguageSelector from "../components/Forms/SelectLanguageForm";

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
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
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
      .post("http://localhost:5000/api/solutions/", newSolution)
      .then((response) => {
        this.props.history.push("/solutions");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // this.setState({
    //   solutionName: "",
    //   creationDate: "",
    //   originCountry: "",
    //   channel: "",
    //   integration: "",
    //   pricing: "",
    //   additionalServices: false,
    //   nlpProp: false,
    //   multiLanguages: false,
    //   languagesNLP: "",
    //   clientType: "",
    //   contactName: "",
    //   contactEmail: "",
    //   companyURL: "",
    //   logo: "",
    // });
  };

  // state = {
  //   solutionName: "",
  //   creationDate: "",
  //   originCountry: "",
  //   channel: "",
  //   integration: "",
  //   pricing: "",
  //   additionalServices: false,
  //   nlpProp: false,
  //   multiLanguages: false,
  //   languagesNLP: "",
  //   clientType: "",
  //   contactName: "",
  //   contactEmail: "",
  //   companyURL: "",
  //   logo: "",
  // };

  // handleChange = (event) => {
  //   let { name, value, type } = event.target;

  //   if (type === "checkbox") {
  //     value = event.target.checked;
  //   }

  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // handleSubmit = (event) => {
  //   event.preventDefault();

  //   const newSolution = {
  //     solutionName: this.state.solutionName,
  //     creationDate: this.state.creationDate,
  //     originCountry: this.state.originCountry,
  //     channel: this.state.channel,
  //     integration: this.state.integration,
  //     pricing: this.state.pricing,
  //     additionalServices: this.state.additionalServices,
  //     nlpProp: this.state.nlpProp,
  //     multiLanguages: this.state.multiLanguages,
  //     languagesNLP: this.state.languagesNLP,
  //     clientType: this.state.clientType,
  //     contactName: this.state.contactName,
  //     contactEmail: this.state.contactEmail,
  //     companyURL: this.state.companyURL,
  //     logo: this.state.logo,
  //   };

  //   axios
  //     .post("http://localhost:5000/api/solutions/", newSolution)
  //     .then((response) => {
  //       this.props.history.push("/solutions");
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //     this.setState({
  //       solutionName: "",
  //       creationDate: "",
  //       originCountry: "",
  //       channel: "",
  //       integration: "",
  //       pricing: "",
  //       additionalServices: false,
  //       nlpProp: false,
  //       multiLanguages: false,
  //       languagesNLP: "",
  //       clientType: "",
  //       contactName: "",
  //       contactEmail: "",
  //       companyURL: "",
  //       logo: "",
  //     });

  // };
  render() {  
    return (
      <div>
        <form className="Form" onSubmit={this.handleSubmit}>
          <div className="Form__field">
            <label className="Form__label" htmlFor="solutionName">
              Solution Name
            </label>
            <br></br>
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
            <br></br>
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
            <br></br>
            <input
              type="text"
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
            <ChannelSelector 
            defaultValue={this.state.channel}
            onChange={this.getChannels}
            />
          </div>
          <div className="Form__field">
            <label className="Form__label" htmlFor="integration">
              Intégration
            </label>
            <IntegrationSelector
            defaultValue={this.state.integration}
            onChange={this.getIntegrations}
            />
          </div>
          <div className="Form__field">
            <label className="Form__label" htmlFor="pricing">
              Pricing
            </label>
            <br></br>
            <select
              name="pricing"
              id="pricing"
              onChange={this.handleChange}
              value={this.state.pricing}
              className="Form__input"
            >
              <option value="Gratuit">Gratuit</option>
              <option value="€">€</option>
              <option value="€€">€€</option>
              <option value="€€€">€€€</option>
            </select>
          </div>

          <div className="Form__field">
            <label className="Form__label" htmlFor="additionalServices">
              Additional Services
            </label>
            <br></br>
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
            <br></br>
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
            <br></br>
            <input
              type="checkbox"
              name="multiLanguages"
              id="multiLanguages"
              className="Form__input"
              checked={this.state.multiLanguages}
              onChange={this.handleChange}
            />
          </div>

          <div className="Form__field">
            <label className="Form__label" htmlFor="languagesNLP">
              Langages supportés par le NLP
            </label>

            <LanguageSelector
              defaultValue={this.state.languagesNLP}
              onChange={this.getLanguages}
            />
            
          </div>
          <div className="Form__field">
            <label className="Form__label" htmlFor="clientType">
              Type de client
            </label>
            <ClientTypeSelector
              defaultValue={this.state.clientType}
              onChange={this.getClientTypes} 
            />
          </div>
          <div className="Form__field">
            <label className="Form__label" htmlFor="contactName">
              Nom du contact
            </label>
            <br></br>
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
            <br></br>
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
            <br></br>
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
            <br></br>
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
          <button>Submit</button>
        </form>
      </div>
    );
  }
}


export default CreateSolution;
