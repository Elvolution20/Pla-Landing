import { Flex } from "@chakra-ui/react";
import { Box, Image, Text } from "@chakra-ui/react";
import AOS from "aos";
import { Power3, TimelineLite, TweenMax } from "gsap";
import React, { useEffect, useRef } from "react";
import { IoIosCall } from "react-icons/io";

import conflux from "../Assets/conflux.jpg";
import evmos from "../Assets/evmos.png";
import polygon from "../Assets/polygon.png";
import headerVideo from "../Assets/spacesuit.mp4";
import GradientButton from "./GradientButton";

import "../Styles/Header.css";
import "aos/dist/aos.css";

const Header = () => {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  let videoRef = useRef(null);

  let tl = new TimelineLite({ delay: 0.8 });
  useEffect(() => {
    const headerVideo = images.firstElementChild;
    const healineFirst = content.children[0].children[0];
    const healineSecond = healineFirst.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[3];

    TweenMax.to(app, 0, { css: { visibility: "visible" } });

    tl.from(headerVideo, 1.2, { y: 1280, ease: Power3.easeOut }, "Start").from(
      headerVideo.firstElementChild,
      2,
      { scale: 1.6, ease: Power3.easeOut },
      0.2
    );

    tl.staggerFrom(
      [healineFirst.children, healineSecond.children],
      1,
      {
        y: 58,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.15,
      "Start"
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);

    AOS.init();
    AOS.refresh();
  });

  return (
    <header data-aos="fade-up" ref={(el) => (app = el)}>
      <div className="header-flex">
        <div className="header-content">
          <div className="header-content-inner" ref={(el) => (content = el)}>
            <h1>
              <div className="hero-content-line">
                <div className="hero-content-line-inner">Explore The </div>
              </div>
              <div className="hero-content-line">
                <div className="hero-content-line-inner">
                  Universe.
                </div>
              </div>
            </h1>
            <p className="subtext-head" color="white">
              Planetopia allows you to explore the blockchain universe by seeing new feature,
              consisting of NFT Marketplace,Swap,Bridging and Gaming(Meteverse).
            </p>
            <br />
            <div>
              <GradientButton>
                <a href="" target={"_blank"}>
                  {" "}
                  <Flex align="center" justify="space-between">
                    {" "}
                    Documentation{" "}
                    <Box ml="2">
                    </Box>
                  </Flex>
                </a>
              </GradientButton>
            </div>
          </div>
        </div>
        <div className="header-image">
          <div className="header-image-inner" ref={(el) => (images = el)}>
            <video
              controls={false}
              autoPlay
              loop
              playsInline
              muted
              ref={videoRef}
            >
              <source src={headerVideo} type="video/mp4" />
              Your Browser doesn't support videos.
            </video>
          </div>
        </div>
      </div>

      <Box display="flex" flexDir="column" mt="2" gap="4" align="center">
        <Text fontSize="3xl" textAlign="center" fontWeight="600">
          Supported Blockchain
        </Text>
        <Box
          display="flex"
          flexDir="row"
          gap={{ base: "8", md: "16" }}
          ml={{ base: "4", md: "0" }}
          justifyContent="center"
          alignItems="center"
        >
          <Box display="flex" flexDir="column" gap="2" alignItems="center">
            <Image
              src={polygon}
              h="14"
              w="14"
              alt="polygon"
              minH="14"
              minW="14"
            />
            Polygon Network
          </Box>
          <Box display="flex" flexDir="column" gap="2" alignItems="center">
            <Image
              h="14"
              w="14"
              src={evmos}
              alt="polygon"
              rounded="full"
              minH="14"
              minW="14"
            />
            EVMOS Foundation
          </Box>
          <Box display="flex" flexDir="column" gap="2" alignItems="center">
            <Image
              h="14"
              w="14"
              minH="14"
              minW="14"
              src={conflux}
              alt="polygon"
              rounded="full"
            />
            Conflux Network
          </Box>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
