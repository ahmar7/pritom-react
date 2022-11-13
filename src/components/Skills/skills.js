import React from "react";
import {
  JsLogo,
  ReactLogo,
  SolidityLogo,
  TensorLogo,
  RustLogo,
  PaythonLogo,
  ScikictLogo,
  HardoopLogo,
  HardhatLogo,
  TruffleLogo,
  FlaskLogo,
  NodeLogo,
} from "../../utils/allImg";
import "./skills.css";
const Skills = () => {
  return (
    <div
      className="skills-section
  "
    >
      <h2 className="section-heading">Skills</h2>
      <div className="skills-block">
        <div className="indiv-skill">
          <div className="inner-content">
            <div className="skill-logo">
              <img src={JsLogo} alt="" />
            </div>
            <h2 className="skill-heading">Javascript</h2>
          </div>
        </div>
        <div className="indiv-skill">
          <div className="inner-content">
            <div className="skill-logo">
              <img src={ReactLogo} alt="" />
            </div>
            <h2 className="skill-heading">React js</h2>
          </div>
        </div>
        <div className="indiv-skill">
          <div className="inner-content">
            <div className="skill-logo">
              <img src={SolidityLogo} alt="" />
            </div>
            <h2 className="skill-heading">Solidity</h2>
          </div>
        </div>
        <div className="indiv-skill">
          <div className="inner-content">
            <div className="skill-logo">
              <img src={TensorLogo} alt="" />
            </div>
            <h2 className="skill-heading">Tensorflow</h2>
          </div>
        </div>
        <div className="indiv-skill">
          <div className="inner-content">
            <div className="skill-logo">
              <img src={RustLogo} alt="" />
            </div>
            <h2 className="skill-heading">RUST</h2>
          </div>
        </div>
        <div className="indiv-skill">
          <div className="inner-content">
            <div className="skill-logo">
              <img src={PaythonLogo} alt="" />
            </div>
            <h2 className="skill-heading">Python</h2>
          </div>
        </div>
        <div className="indiv-skill">
          <div className="inner-content">
            <div className="skill-logo">
              <img src={ScikictLogo} alt="" />
            </div>
            <h2 className="skill-heading">Scikit Learn</h2>
          </div>
        </div>
        <div className="indiv-skill">
          <div className="inner-content">
            <div className="skill-logo">
              <img src={HardoopLogo} alt="" />
            </div>
            <h2 className="skill-heading">Angular js</h2>
          </div>
        </div>
        <div className="indiv-skill">
          <div className="inner-content">
            <div className="skill-logo">
              <img src={HardhatLogo} alt="" />
            </div>
            <h2 className="skill-heading">Hardhat</h2>
          </div>
        </div>
        <div className="indiv-skill">
          <div className="inner-content">
            <div className="skill-logo">
              <img src={TruffleLogo} alt="" />
            </div>
            <h2 className="skill-heading">Truffle</h2>
          </div>
        </div>
        <div className="indiv-skill">
          <div className="inner-content">
            <div className="skill-logo">
              <img src={FlaskLogo} alt="" />
            </div>
            <h2 className="skill-heading">Flask</h2>
          </div>
        </div>
        <div className="indiv-skill">
          <div className="inner-content">
            <div className="skill-logo">
              <img src={NodeLogo} alt="" />
            </div>
            <h2 className="skill-heading">Node js</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
