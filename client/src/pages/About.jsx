import React from "react";
import "./../styles/FAQ.css";

const About = () => {
  return (
    <div>
      <div className="FAQdiv">
        <div >
          <img
           className="img-about"
            src="/project.png"
            alt="robot-image"
          ></img>
        </div>
        <div id="faqParagraph">
          <p>
            Final Ironhack projet made with passion and depression on React!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
