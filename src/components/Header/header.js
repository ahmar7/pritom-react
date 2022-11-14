import React from "react";
import {
  Dp,
  FacebookIco,
  LinkdinIco,
  LinkdinWhiteIco,
  MailIco,
  SkypeIco,
  SkypeWhiteIco,
  TelegramIco,
  WhatsappIco,
} from "../../utils/allImg";
import "./header.css";
import Typed from "react-typed";
const Header = () => {
  return (
    <div
      className="main-header
  "
    >
      <div className="float-links">
        <ul className="float-ul">
          <li>
            <a target="_blank" href="https://t.me/iampritom">
              <img src={TelegramIco} alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://wa.me/+8801750352163">
              <img src={WhatsappIco} alt="" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/pritom.sarker.bishal"
            >
              <img src={FacebookIco} alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/me-pritom/">
              <img src={LinkdinWhiteIco} alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" href="skype:+8801750352163">
              <img src={SkypeWhiteIco} alt="" />
            </a>
          </li>
        </ul>
      </div>
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
              <a target="_blank" href="https://impritom.com/resume.pdf">
                {" "}
                <button>DOWNLOAD MY CV</button>
              </a>
            </div>
            <div className="social-links">
              <a
                target="_blank"
                className="no-mar"
                href="https://wa.me/+8801750352163"
              >
                <img src={WhatsappIco} alt="" />
              </a>
              <a
                target="_blank"
                href="https://share.streak.com/BlBBkOevxGmgGuobOXUGxI"
              >
                <img className="spec" src={MailIco} alt="" />
              </a>
              <a target="_blank" href="https://t.me/iampritom">
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
