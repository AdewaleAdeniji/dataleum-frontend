import React from "react";

const Experts = () => {
  return (
    <div className="experts">
      <div className="teach-head">
        <h4 className="text-agcademy-blue">Taught by Industrial Experts</h4>
        <h6>True masters train others to remain masters</h6>
      </div>
      <div className="experts-list desk">
        <div className="expert-one">
          <img src={require("../../assets/expert-one.svg")} alt="Expert Umar" />
        </div>
        <div className="expert-two">
          <div className="expert-desc">
            <h6>Brrown Akorede</h6>
            <h5>CEO, Farmify</h5>
            <p>
              Instructors from around the world teach millions of students on
              Udemy. We provide the tools and skills to teach what you love.
            </p>
            <p className="expert-text">
              Join our global network of Instructors.
            </p>
            <button className="act-button">Join Now</button>
          </div>
          <div className="expert-img">
            <img src={require("../../assets/expert-two.svg")} alt="Experts"/>
          </div>
        </div>
        <div className="expert-three">
          <div className="expert-names">
            <h6>Segun Opaleye</h6>
            <h4>CEO, FarmRegion</h4>
          </div>  
        </div>
      </div>
      <div className="experts-list mobile">
      <div className="expert-two">
      <div className="expert-img">
            <img src={require("../../assets/expert-twos.svg")} alt="Experts"/>
          </div>
          <div className="expert-desc">
            <h6>Brrown Akorede</h6>
            <h5>CEO, Farmify</h5>
            <p>
              Instructors from around the world teach millions of students on
              Udemy. We provide the tools and skills to teach what you love.
            </p>
            <p className="expert-text">
              Join our global network of Instructors.
            </p>
            <button className="act-button">Join Now</button>
          </div>

        </div>
        </div>
    </div>
  );
};
export default Experts;
