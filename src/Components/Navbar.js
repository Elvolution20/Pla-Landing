import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import React, { useEffect, useState } from "react";

import logo from "../Assets/logo.svg";
import GradientButton from "./GradientButton";

import "../Styles/Navbar.css";
import "aos/dist/aos.css";

const MenuItems = [
  {
    title: "Marketplace",
    url: "http://planetopia-market.vercel.app",
    cName: "nav-link",
  },
  {
    title: "Mint",
    url: "",
    cName: "nav-link",
  },
  {
    title: "Swap",
    url: "",
    cName: "nav-link",
  },
  {
    title: "Game",
    url: "http://space-mission-eight.vercel.app/",
    cName: "nav-link",
  },
  {
    title: "Bridge",
    url: "http://pla-bridge.vercel.app/",
    cName: "nav-link",
  },
];

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <Flex
      alignItems="center"
      justify="space-between"
      w="full"
      shadow="sm"
      pb="2"
      mt="-2"
    >
      <nav className="NavbarItems" data-aos="fade-down">
        <img className="navbar-logo" src={logo} alt="Logo" />
        <Flex>
          <div className="menu-icon" onClick={handleClick}>
            {clicked ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
          <ul className={clicked ? "nav-links active" : "nav-links"}>
            {MenuItems.map((item, index) => {
              return index !== 6 ? (
                <li key={index}>
                  <a className={item.cName} href={item.url} target={"_blank"}>
                    {item.title}
                  </a>
                </li>
              ) : (
                <Button
                  fontStyle="normal"
                  fontWeight="normal"
                  fontFamily="Poppins, sans-serif;"
                  letterSpacing="0px"
                  variant="unstyled"
                  onClick={onOpen}
                >
                  {item.title}
                </Button>
              );
            })}
          </ul>
        </Flex>
      </nav>
    </Flex>
  );
};

export default Navbar;
