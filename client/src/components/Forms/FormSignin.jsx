import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import { withUser } from "../Auth/withUser";
import "./../../styles/SignInForm.css"

class FormSignin extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signin(this.state)
      .then((data) => {
        console.log(data)
        this.props.context.setUser(data);
      })
      .catch((error) => {
        console.log("ERROR :(  !!!!!!!!!!!!", error);
        // Display error message here, if you set the state
      });
  };

  render() {
    if (this.props.context.user) {
      return <Redirect to="/" />;
    }

    return (
      <div className="SignInFormWrapper">
      <form className="SignInForm" onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <label htmlFor="email"><h3>Email</h3></label>
      
        <input type="email" id="email" name="email" />
        <br></br>
        <label htmlFor="password"><h3>Password</h3></label>
        
        <input type="password" id="password" name="password" />
        <br></br>
        <button className="SignInBtn">Submit</button>
      </form>
      </div>
    );
  }
}

export default withRouter(withUser(FormSignin));
