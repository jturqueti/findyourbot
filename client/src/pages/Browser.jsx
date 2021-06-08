import axios from "axios";
import React, { Component } from "react";
import ChannelSelector from "../components/Forms/SelectChannelForm";
import ClientTypeSelector from "../components/Forms/SelectClientTypeForm";

class CreateProspect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: [
        { value: 'Facebook Messenger', label: {x:'Facebook Messenger'} },
        { value: 'WhatsApp', label: {x:'WhatsApp'} },
      ],
      budget: "",
      clientType: [
        { value: 'TPE-PME', label: {x: 'TPE-PME'} },
      ],
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

    const newProspect = {
      channel: this.state.channel.map((object) => object.value),
      budget: this.state.budget,     
      clientType: this.state.clientType.map((object) => object.value),
      email: this.state.email,
      companyName: this.state.companyName,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    };

    console.log(newProspect);

    axios
      .post("http://localhost:5000/api/prospect/", newProspect)
      .then((response) => {
        this.props.history.push("/profile/prospects");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  };


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
            <ChannelSelector 
            defaultValue={this.state.channel}
            onChange={this.getChannels}
            />
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
              name="budget"
              id="budget"
              onChange={this.handleChange}
              value={this.state.budget}
              className="Form__input"
            >
              <option value="Gratuit">Gratuit</option>
              <option value="€">€</option>
              <option value="€€">€€</option>
              <option value="€€€">€€€</option>
            </select>
          </div>

          <br></br>

          <h2>Clientèle visée</h2>

          <br></br>

          <div className="Form__field">
            <label className="Form__label" htmlFor="clientType">
              Type de client
            </label>
            <ClientTypeSelector
              defaultValue={this.state.clientType}
              onChange={this.getClientTypes} 
            />
          </div>

          <br></br>

          <h2>Informations de contact (nom, email, société)</h2>

          <div className="Form__field">
            <label className="Form__label" htmlFor="email">
              Email
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
              Nom de famille
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
          <button>Submit</button>
        </form>
      </div>
    );
  }
}


export default CreateProspect;
