import axios from "axios";
import React, { Component } from "react";
import ChannelSelector from "../components/Forms/SelectChannelForm";
import ClientTypeSelector from "../components/Forms/SelectClientTypeForm";

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
      .post("http://localhost:5000/api/prospect/", newProspect)
      .then((response) => {
        console.log(response.data);
        console.log("yoyo");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

  };

  componentDidMount () {
    axios
    .get('http://localhost:5000/api/solutions')
    .then((response)=>{
      console.log("olivier")
      console.log(response)
      console.log("olivia")
      })
  }


  // componentDidMount() {
  //   const beerId = this.props.match.params.beerId;
  //   axios
  //     .get('https://ih-beers-api2.herokuapp.com/beers/' + beerId)
  //     .then((response) => {
  //       this.setState({
  //         beer: response.data,
  //         loading: false,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       this.setState({
  //         loading: false,
  //       });
  //     });
  // }


  render() {  
    return (
      <div>
        <form className="Form" onSubmit={this.handleSubmit}>
          <h1>Formulaire de demande d'informations</h1>
          <br></br>
          <h2>Channel requis</h2>
          <br></br>
          <div className="Form__field">
            <label className="Form__label" htmlFor="channel">
              Channel
            </label>
            <br></br>
            {/* <ChannelSelector 
            defaultValue={this.state.channel}
            onChange={this.getChannels}
            /> */}
            <select
              name="channel"
              id="channel"
              onChange={this.handleChange}
              value={this.state.channel}
              className="Form__input"
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
          <br></br>
          <h2>Budget à disposition</h2>
          <br></br>
          <div className="Form__field">
            <label className="Form__label" htmlFor="budget">
              Budget
            </label>
            <br></br>
            <select
              name="pricing"
              id="pricing"
              onChange={this.handleChange}
              value={this.state.pricing}
              className="Form__input"
            >
              <option >Choisir</option>
              <option value="Gratuit">Pro bono</option>
              <option value="€">€</option>
              <option value="€€">€€</option>
              <option value="€€€">€€€</option>
            </select>
          </div>
          <br></br>
          <h2>Type d'oganisation</h2>
          <br></br>
          <div className="Form__field">
            <label className="Form__label" htmlFor="clientType">
              Type de client
            </label>
            <br></br>
            {/* <ClientTypeSelector
              defaultValue={this.state.clientType}
              onChange={this.getClientTypes} 
            /> */}
            <select
              name="clientType"
              id="clientType"
              onChange={this.handleChange}
              value={this.state.clientType}
              className="Form__input"
            >
              <option >Choisir</option>
              <option value="Particulier">Particulier</option>
              <option value="TPE-PME">TPE-PME</option>
              <option value="Grande Entreprise">Grande Entreprise</option>
              <option value="Administration publique">Administration publique</option>
            </select>
          </div>
          <br></br>
          <h2>Vos informations</h2>
          <div className="Form__field">
            <label className="Form__label" htmlFor="companyName">
              Nom de la société
            </label>
            <br></br>
            <input
              type="text"
              name="companyName"
              id="companyName"
              className="Form__input"
              value={this.state.companyName}
              onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div className="Form__field">
            <label className="Form__label" htmlFor="firstName">
              Prénom
            </label>
            <br></br>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="Form__input"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div className="Form__field">
            <label className="Form__label" htmlFor="lastName">
              Nom
            </label>
            <br></br>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="Form__input"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div className="Form__field">
            <label className="Form__label" htmlFor="email">
              Email professionnel
            </label>
            <br></br>
            <input
              type="text"
              name="email"
              id="email"
              className="Form__input"
              value={this.state.email}
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


export default CreateProspect;
