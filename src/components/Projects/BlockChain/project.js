import React from "react";
import "./project.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Video1, Video2, Video3 } from "../../../utils/allImg";
const Project = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="project-section caraousel-sec">
      <h2 className="section-heading bottom-mar ">Blockchain Projects</h2>
      <Slider {...settings}>
        <div>
          <div className="main-card">
            <video autoPlay muted loop class="card-video" src={Video1}></video>
            <h3>Dorac Art</h3>
            <p>
              Dorac NFT Marketplace NFT Marketplace where you can Buy, Sell and
              Collect exotic NFT collection.
            </p>
            <button>LIVE PREVIEW</button>
          </div>
        </div>
        <div>
          <div className="main-card">
            <video autoPlay muted loop class="card-video" src={Video2}></video>
            <h3>Dorac Art</h3>
            <p>
              Dorac NFT Marketplace NFT Marketplace where you can Buy, Sell and
              Collect exotic NFT collection.
            </p>
            <button>LIVE PREVIEW</button>
          </div>
        </div>
        <div>
          <div className="main-card">
            <video autoPlay muted loop class="card-video" src={Video3}></video>
            <h3>Dorac Art</h3>
            <p>
              Dorac NFT Marketplace NFT Marketplace where you can Buy, Sell and
              Collect exotic NFT collection.
            </p>
            <button>LIVE PREVIEW</button>
          </div>
        </div>
        <div>
          <div className="main-card">
            <video autoPlay muted loop class="card-video" src={Video1}></video>
            <h3>Dorac Art</h3>
            <p>
              Dorac NFT Marketplace NFT Marketplace where you can Buy, Sell and
              Collect exotic NFT collection.
            </p>
            <button>LIVE PREVIEW</button>
          </div>
        </div>
        <div>
          <div className="main-card">
            <video autoPlay muted loop class="card-video" src={Video2}></video>
            <h3>Dorac Art</h3>
            <p>
              Dorac NFT Marketplace NFT Marketplace where you can Buy, Sell and
              Collect exotic NFT collection.
            </p>
            <button>LIVE PREVIEW</button>
          </div>
        </div>
        <div>
          <div className="main-card">
            <video autoPlay muted loop class="card-video" src={Video3}></video>
            <h3>Dorac Art</h3>
            <p>
              Dorac NFT Marketplace NFT Marketplace where you can Buy, Sell and
              Collect exotic NFT collection.
            </p>
            <button>LIVE PREVIEW</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Project;
