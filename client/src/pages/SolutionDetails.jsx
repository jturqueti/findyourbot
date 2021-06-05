import React, { Component } from 'react';
import axios from 'axios';
import SolutionCard from '../components/SolutionCard'
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
          <p>{this.state.pricing}</p>
          <Link to={'/solutions'}>Back to projects</Link>
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
