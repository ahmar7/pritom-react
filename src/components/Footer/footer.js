import React from "react";
import {
  CallArrow,
  GitIco,
  LinkdinIco,
  LocationArrow,
  SkypeIco,
  TimerArrow,
} from "../../utils/allImg";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-block">
        <div className="upper-detail">
          <div className="footer-detail">
            <div className="svg-ico">
              <img src={CallArrow} alt="" />
            </div>
            <div className="ph">
              <h4>CALL ME</h4>
              <p>Cell : +8801750352163</p>
            </div>
          </div>
          <div className="footer-detail">
            <div className="svg-ico">
              <img src={TimerArrow} alt="" />
            </div>
            <div className="ph">
              <h4>WORK HOURS</h4>
              <p>
                Monday - Friday : 09am - <br className="no-mb" /> 18pm Saturday
                : 09am - 1pm
              </p>
            </div>
          </div>
          <div className="footer-detail">
            <div className="svg-ico">
              <img src={LocationArrow} alt="" />
            </div>
            <div className="ph">
              <h4>ADDRESS</h4>
              <p>
                Alupotty, Rajshahi,
                <br className="no-mb" /> Bangladesh
              </p>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <div className="socials">
            <a target="_blank" href="https://github.com/Pritom-sarker">
              <img src={GitIco} alt="" /> <span className="are">GitHub</span>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/me-pritom/">
              <img src={LinkdinIco} alt="" />{" "}
              <span className="are">Linkedin</span>
            </a>
            <a target="_blank" href="skype:+8801750352163">
              <img src={SkypeIco} alt="" /> <span className="are">Skype</span>
            </a>
          </div>
        </div>
        <div className="copyright-area">
          <p>© 2022 me.pritom@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
