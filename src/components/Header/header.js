import React from "react";
import { Dp, MailIco, TelegramIco, WhatsappIco } from "../../utils/allImg";
import "./header.css";
import Typed from "react-typed";
const Header = () => {
  return (
    <div
      className="main-header
  "
    >
      <div className="header-flex">
        <div className="left-block">
          <h4 className="heading-intro">
            Hi, I’m <span className="blue">Pritom Sarker</span>.
          </h4>
          <div className="dev-head">
            <h1>
              I’m a Blockchain
              <Typed
                className="auto-type"
                strings={["Developer"]}
                typeSpeed={80}
                backSpeed={100}
                loop
              />
            </h1>
            <div className="para">
              <p>
                As a researcher and developer, I am particularly interested in
                blockchain, data science, and computer algorithms. I've been
                working on the blockchain smart contract since 2020, utilizing
                Solidarity, Rust, Haskell, and other programming languages. I've
                worked on various NFT, DAO, DEFI, and Metaverse projects with
                satisfactory services
              </p>
            </div>
            <div className="cv-btn">
              <button>DOWNLOAD MY CV</button>
            </div>
            <div className="social-links">
              <a className="no-mar" href="">
                <img src={WhatsappIco} alt="" />
              </a>
              <a href="">
                <img className="spec" src={MailIco} alt="" />
              </a>
              <a href="">
                <img src={TelegramIco} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="right-block">
          <img src={Dp} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
