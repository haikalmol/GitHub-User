import React from "react";
import Search from "../assets/images/icon-search.svg";

export default function SearchBar(props) {
	return (
		<div className={props.isDark ? "card-dark search-bar" : "search-bar"}>
			<img src={Search} alt="search" className="search-bar--icon" />
			<div className="search-bar--form">
				<input
					type="text"
					className={
						props.isDark ? "input-dark search-bar--input" : "search-bar--input"
					}
					name="username"
					onChange={props.handleChange}
					value={props.username}
					autoComplete="off"
					placeholder="Search GitHub username…"
				/>
				{props.error && <p className="search-bar--input-error">No results</p>}
			</div>
			<div className="search-bar--btn" onClick={props.search}>
				Search
			</div>
		</div>
	);
}
