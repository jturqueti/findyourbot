import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SolutionDetails extends Component {
    state = {}
    componentDidMount(){
        this.getSingleProject();
    }
    getSingleProject = () => {
        const { params } = this.props.match;
        axios.get(`http://localhost:5000/api/solutions/${params.id}`)
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
          <h1>{this.state.solutionName}</h1>
          <p>Date de création de l'entreprise : {this.state.creationDate}</p>
          <p>Pays d'origine : {this.state.originCountry}</p>
          <p>Channels disponibles : {this.state.channel}</p>
          <p>Intégrations proposées : {this.state.integration}</p>
          <p>Pricing : {this.state.pricing}</p>
          <p>Services support et construction :{this.state.additionalServices}</p>
          <p>NLP propriétaire : {this.state.nlpProp}</p>
          <p>Bot multilanguage : {this.state.multiLanguages}</p>
          <p>NLP disponibles : {this.state.languagesNLP}</p>
          <p>Type de clients : {this.state.clientType}</p>
          <p><a href={this.state.companyURL}>{this.state.companyURL}</a></p>
          <img src={this.state.logo} alt={this.state.solutionName} />

          <Link to={'/solutions'}>Retour à la liste</Link>
        </div>
      )
    }
  }


// class SingleSolution extends Component {
//   state = {
//     solution: null,
//     loading: true,
//   };

//   componentDidMount() {
//     const solutionId = this.props.match.params.solutionId;

//     axios
//       .get('http://localhost:5000/api/solutions/' + solutionId)
//       .then((response) => {
//         this.setState({
//             solution: response.data,
//           loading: false,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//         this.setState({
//           loading: false,
//         });
//       });
//   }

//   render() {
//     if (this.state.loading) {
//       return <div>Loading...</div>;
//     }

//     if (!this.state.solution) {
//       return <div>No solution was found {":'("}</div>;
//     }

//     return (
//       <div >
//         <SolutionCard solution={this.state.solution} />
//       </div>
//     );
//   }
// }

export default SolutionDetails;
