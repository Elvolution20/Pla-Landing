import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import logo from "../Assets/logo.svg";

import "../Styles/Footer.css";

const Footer = () => {
	return (
		<footer>
			<center>
				<hr className="separator" />
			</center>
			<div className="footer-container">
				<div className="footer-col">
					<ul className="footer-links">
						<h3>Community</h3>
						<li>
							<a href="https://twitter.com/Planetopia_Defi">Twitter</a>
						</li>
						<li>
							<a href="/">Discord</a>
						</li>
						<li>
							<a href="/">Telegram</a>
						</li>
					</ul>
				</div>
				<div className="footer-col">
					<ul className="footer-links">
						<h3>Dapps</h3>
						<li>
							<a href="https://planetopia-market.vercel.app/">MarketPlace</a>
						</li>
						<li>
							<a href="/">Swap</a>
						</li>
						<li>
							<a href="/">Bridge</a>
						</li>
						<li>
							<a href="/">Games</a>
						</li>
						<li>
							<a href="/">SpaceVerse</a>
						</li>

					</ul>
				</div>
			</div>
			<div className="copyright">
				<small>
					Copyright © 2022 Planetopia, All rights reserved.
				</small>
			</div>
		</footer>
	);
};

export default Footer;
