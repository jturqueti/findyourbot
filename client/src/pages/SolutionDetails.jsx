import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../styles/solution-detail.css";

class SolutionDetails extends Component {
    state = {}
    componentDidMount(){
        this.getSingleProject();
    }
    getSingleProject = () => {
        const { params } = this.props.match;
        axios.get(process.env.REACT_APP_BACKEND_URL + `/api/solutions/${params.id}`)
        .then( responseFromApi =>{
            const theProject = responseFromApi.data;
            this.setState(theProject);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
      return(
        <div>
          <Link className="btn-return" to={'/solutions'}>Retour à la liste</Link>
        <div className="inside-solutions-detail">
          <img className="logo-solution" src={this.state.logo} alt={this.state.solutionName} />

          <div className="container-solution-detail">
          <h1 className="title-solution"> {this.state.solutionName} </h1>
          <p>Date de création de l'entreprise : {this.state.creationDate}</p>
          <p>Pays d'origine : {this.state.originCountry}</p>
          <p>Channels disponibles : {this.state.channel}</p>
          <p>Intégrations proposées : {this.state.integration}</p>
          <p>Pricing : {this.state.pricing}</p>
          <p>Services support et construction :{
                this.state.additionalServices ? 
                <span>Yes</span>
                :
                <span>No</span>
            }</p>
          <p>NLP propriétaire :  {
                this.state.nlpProp ? 
                <span>Yes</span>
                :
                <span>No</span>
            }</p>
          <p>Bot multilangage :  {
                this.state.multiLanguages ? 
                <span>Yes</span>
                :
                <span>No</span>
            }</p>
          <p>NLP disponibles : {this.state.languagesNLP}</p>
          <p>Type de clients : {this.state.clientType}</p>
          <br/>
          <a className="btn-go-website" href={this.state.companyURL}>Aller sur le site</a>
          
        </div>
        </div>
        </div>
      )
    }
  }


export default SolutionDetails;
