import { Box, Image, Link } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { faArrowRight, faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { IoIosCall } from "react-icons/io";

import chingari from "../Assets/chingari banner.svg";
// import {} from "@fortawesome/fontawesome-svg-core"
import token from "../Assets/gate.m4v";
import live from "../Assets/Surf2.mp4";
import ticket from "../Assets/ticket1.png";
import Button from "./Button";
import GradientButton from "./GradientButton";
import TwitterFeed from "./TwitterFeed";

import "../Styles/Main.css";

// import { ReactComponent as ChartIcon } from "./chart-svgrepo-com.svg";

const Main = () => {
  return (
    <main>
      <div className="features-grid" data-aos="fade-up">
        <div className="feature-image">
          <video playsInline autoPlay muted loop width={600} src={token} />
        </div>
        <div className="feature-grid-content">
          <h1>Creativity At Its Best</h1>
          <p>
            Create , Sell and Discover  Unique NFTs with nice user interface
            with ease and the power of NFTs.Also with games to keep users stressed free.
          </p>

        </div>
        <div className="feature-grid-content">
          <h1>BlackHole to another world</h1>
          <p>
            Built for the Multichain Future,
            We're currently building our Spaceverse and 
            Bridge Token To All Blockchain.
          </p>
        </div>
        <div className="feature-image">
          <video
            playsInline
            autoPlay
            muted
            loop
            width={600}
            src={live}
            alt="live"
          />
        </div>
      </div>
      <div className="features-method" data-aos="fade-up">
        <h1>Become A Member Of This Wonderful Community</h1>
        <div className="methods-flex">
          <div className="method-image">
            <img src={ticket} alt="ticket" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
