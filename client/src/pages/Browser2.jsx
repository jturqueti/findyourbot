// import React, { Component } from "react";
// import axios from "axios";
// import "../styles/profile.css";
// //import SolutionCard from "./../components/SolutionCard";

// class Browser extends Component {
//   constructor() {
//     super();
//     this.state = {
//       solutions: [],
//       searchValue: "",
//       hasResponse: false,
//     };
//   }

//   handleSubmit = (event) => {
//     axios
//       .post("http://localhost:5000/api/solutions/browser", {
//         q1: [
//           "Particulier",
//           "TPE-PME",
//           "Grande Entreprise",
//           "Administration publique",
//         ],
//         q2: ["Webchat", "Facebook Messenger", "WhatsApp", "Microsoft Teams", "Bot vocal", "Autre"],
//         q3: ["Gratuit", "€", "€€", "€€€"],
//       })
//       .then((response) => {
//         // filtered data in response
//         this.setState({
//           solutions: response.data,
//           hasResponse: true,
//         });

//         //
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <p>Quelle est la structure de votre organisation?(1 seul choix)</p>
//         <p>
//           Dans quelle.s langue.s souhaitez-vous développer votre projet?
//           (multi-choices)
//         </p>
//         <p>Quel est votre budget (1 seul choix)</p>

//         <div>Resultats</div>
//       </div>
//     );
//   }
// }

// export default Browser;
