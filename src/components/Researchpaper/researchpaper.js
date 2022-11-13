import React, { useState } from "react";
import { Arrow } from "../../utils/allImg";
import "./researchpaper.css";
const Researchpaper = () => {
  const [show, setShow] = useState(true);
  let showMore = () => {
    setShow(true);
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <div className="research-secction">
      <h2 className="section-heading">Research Paper</h2>
      <div className="research-block">
        <div className="inner-research">
          <div className="research-index">Paper-01</div>
          <div className="left">
            <p className="ppr-date">Jun 13, 2020</p>
            <h4 className="ppr-head">
              Categorization of Protean Writers by Exploitation of Raspberry Pi
            </h4>
            <p className="ppr-para">
              International Journal of Trend in Scientific Research and
              Development (IJTSRD)
            </p>
          </div>
          <div className="right">
            <button>View Publication</button>
          </div>
        </div>
        <div className="inner-research">
          <div className="research-index">Paper-01</div>
          <div className="left">
            <p className="ppr-date">Jun 13, 2020</p>
            <h4 className="ppr-head">
              Categorization of Protean Writers by Exploitation of Raspberry Pi
            </h4>
            <p className="ppr-para">
              International Journal of Trend in Scientific Research and
              Development (IJTSRD)
            </p>
          </div>
          <div className="right">
            <button>View Publication</button>
          </div>
        </div>
        <div className="inner-research">
          <div className="research-index">Paper-01</div>
          <div className="left">
            <p className="ppr-date">Jun 13, 2020</p>
            <h4 className="ppr-head">
              Categorization of Protean Writers by Exploitation of Raspberry Pi
            </h4>
            <p className="ppr-para">
              International Journal of Trend in Scientific Research and
              Development (IJTSRD)
            </p>
          </div>
          <div className="right">
            <button>View Publication</button>
          </div>
        </div>
        <div className={show ? "hide-it" : ""}>
          <div className="inner-research">
            <div className="research-index">Paper-01</div>
            <div className="left">
              <p className="ppr-date">Jun 13, 2020</p>
              <h4 className="ppr-head">
                Categorization of Protean Writers by Exploitation of Raspberry
                Pi
              </h4>
              <p className="ppr-para">
                International Journal of Trend in Scientific Research and
                Development (IJTSRD)
              </p>
            </div>
            <div className="right">
              <button>View Publication</button>
            </div>
          </div>
          <div className="inner-research">
            <div className="research-index">Paper-01</div>
            <div className="left">
              <p className="ppr-date">Jun 13, 2020</p>
              <h4 className="ppr-head">
                Categorization of Protean Writers by Exploitation of Raspberry
                Pi
              </h4>
              <p className="ppr-para">
                International Journal of Trend in Scientific Research and
                Development (IJTSRD)
              </p>
            </div>
            <div className="right">
              <button>View Publication</button>
            </div>
          </div>
          <div className="inner-research">
            <div className="research-index">Paper-01</div>
            <div className="left">
              <p className="ppr-date">Jun 13, 2020</p>
              <h4 className="ppr-head">
                Categorization of Protean Writers by Exploitation of Raspberry
                Pi
              </h4>
              <p className="ppr-para">
                International Journal of Trend in Scientific Research and
                Development (IJTSRD)
              </p>
            </div>
            <div className="right">
              <button>View Publication</button>
            </div>
          </div>
          <div className="inner-research">
            <div className="research-index">Paper-01</div>
            <div className="left">
              <p className="ppr-date">Jun 13, 2020</p>
              <h4 className="ppr-head">
                Categorization of Protean Writers by Exploitation of Raspberry
                Pi
              </h4>
              <p className="ppr-para">
                International Journal of Trend in Scientific Research and
                Development (IJTSRD)
              </p>
            </div>
            <div className="right">
              <button>View Publication</button>
            </div>
          </div>
          <div className="inner-research">
            <div className="research-index">Paper-01</div>
            <div className="left">
              <p className="ppr-date">Jun 13, 2020</p>
              <h4 className="ppr-head">
                Categorization of Protean Writers by Exploitation of Raspberry
                Pi
              </h4>
              <p className="ppr-para">
                International Journal of Trend in Scientific Research and
                Development (IJTSRD)
              </p>
            </div>
            <div className="right">
              <button>View Publication</button>
            </div>
          </div>
          <div className="cv-btn rs-bt">
            <button>SHOW ALL RESEARCH PAPER</button>
          </div>
        </div>
        <div className="arrow">
          <img
            className={show ? "" : "rotate-it"}
            onClick={showMore}
            src={Arrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Researchpaper;
