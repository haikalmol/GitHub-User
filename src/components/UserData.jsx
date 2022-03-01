import React from "react";

export default function UserData(props) {
	// Converting date to readable format
	const date = new Date(props.createdAt);
	const joinedDate = date.toString().slice(4, 15);

	return (
		<div className={props.isDark ? "card-dark card" : "card"}>
			<div className="card--pp">
				<img src={props.avatar} alt="pp" />
			</div>
			<div className="card--card-data">
				<div className="userdata">
					<div className="card--pp pp-tablet">
						<img src={props.avatar} alt="pp" />
					</div>
					<div className="user-basic">
						<div className="userdata__name">
							<h1
								className={
									props.isDark
										? "darkmode-text userdata__user heading-primary"
										: "userdata__user heading-primary"
								}
							>
								{props.name}
							</h1>
							<h2 className="userdata__username">{props.username}</h2>
						</div>
						<p
							className={
								props.isDark ? "darkmode-text userdata__date" : "userdata__date"
							}
						>
							Joined {joinedDate}
						</p>
					</div>
				</div>

				<div className="card--card-data__bio">
					{props.bio === null || "" ? `This profile has no bio` : props.bio}
				</div>

				<div
					className={
						props.isDark
							? "app-dark card--card-data__repo-card"
							: "card--card-data__repo-card"
					}
				>
					<div className="repo">
						<p className="text">Repos</p>
						<h2
							className={
								props.isDark
									? "darkmode-text heading-secondary repo-numbers"
									: "heading-secondary repo-numbers"
							}
						>
							{props.repos}
						</h2>
					</div>

					<div className="followers">
						<p className="text">Followers</p>
						<h2
							className={
								props.isDark
									? "darkmode-text heading-secondary repo-numbers"
									: "heading-secondary repo-numbers"
							}
						>
							{props.followers}
						</h2>
					</div>

					<div className="following">
						<p className="text">Following</p>
						<h2
							className={
								props.isDark
									? "darkmode-text heading-secondary repo-numbers"
									: "heading-secondary repo-numbers"
							}
						>
							{props.following}
						</h2>
					</div>
				</div>

				<div className="card--card-data__social">
					<div
						className={props.isDark ? "darkmode-text socialicon" : "socialicon"}
						style={
							props.location === null
								? { color: "#AFBDD2" }
								: { color: "#4b6a9b" }
						}
					>
						<i
							class="fa-solid fa-location-dot"
							style={
								props.location === null
									? { color: "#AFBDD2" }
									: { color: "#4b6a9b" }
							}
						></i>
						{props.location === null ? "Not available" : props.location}
					</div>

					<div
						className={props.isDark ? "darkmode-text socialicon" : "socialicon"}
					>
						<i
							class="fa-brands fa-twitter"
							style={
								props.twitter === null
									? { color: "#AFBDD2" }
									: { color: "#4b6a9b" }
							}
						></i>
						<a
							href="#app"
							style={
								props.twitter === null
									? { color: "#AFBDD2" }
									: { color: "#4b6a9b" }
							}
							className={props.isDark ? "darkmode-text" : ""}
						>
							{props.twitter === null ? "Not available" : props.twitter}
						</a>
					</div>

					<div
						className={props.isDark ? "darkmode-text socialicon" : "socialicon"}
					>
						<i
							class="fa-solid fa-link"
							style={
								props.blog === "" ? { color: "#AFBDD2" } : { color: "#4b6a9b" }
							}
						></i>
						<a
							href={props.blog}
							style={
								props.blog === "" ? { color: "#AFBDD2" } : { color: "#4b6a9b" }
							}
							className={props.isDark ? "darkmode-text" : ""}
						>
							{props.blog === "" ? "Not available" : props.blog}
						</a>
					</div>

					<div
						className={props.isDark ? "darkmode-text socialicon" : "socialicon"}
						style={
							props.work === null ? { color: "#AFBDD2" } : { color: "#4b6a9b" }
						}
					>
						<i
							class="fa-solid fa-building"
							style={
								props.work === null
									? { color: "#AFBDD2" }
									: { color: "#4b6a9b" }
							}
						></i>
						{props.work === null ? "Not available" : props.work}
					</div>
				</div>
			</div>
		</div>
	);
}
