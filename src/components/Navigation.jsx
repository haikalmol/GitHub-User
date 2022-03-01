import React from "react";
// import Moon from "../assets/images/icon-moon.svg";
// import Sun from "../assets/images/icon-sun.svg";

export default function Navigation(props) {
	return (
		<nav className="navbar">
			<h1
				className={
					props.isDark
						? "logo-dark heading-primary navbar__logo"
						: "heading-primary navbar__logo"
				}
			>
				devfinder
			</h1>
			<div className="navbar--theme-switcher" onClick={props.toggle}>
				{props.isDark ? (
					<h3 className="heading-quad navbar--theme-switcher__theme-text make-it-light">
						Light <i class="fa-duotone fa-sun-bright"></i>
					</h3>
				) : (
					<h3 className="heading-quad navbar--theme-switcher__theme-text make-it-dark">
						Dark <i class="fa-duotone fa-moon-stars"></i>
					</h3>
				)}
			</div>
		</nav>
	);
}
