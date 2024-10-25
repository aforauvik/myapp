import React from "react";
import styles from "./Projects.module.css";
import Footer from "../Card/Footer";

const projectList = [
	{
		title: "AIXR",
		description: "Augmented and virtual reality education for corporations",
		linksTo: "./AIXR.pdf",
		screenshot: "./screens.png",
		height: "500",
	},
	{
		title: "Topio",
		description:
			"An AI powered travel planning app that turns your wanderlust into wealth",
		linksTo: "./Topio.pdf",
		screenshot: "./topio.png",
		height: "450",
	},

	{
		title: "Club Funders",
		description: "Fund your favorite club or athlete",
		linksTo: "./Clubfunders.pdf",
		screenshot: "./club.png",
		height: "450",
	},
	{
		title: "Lalo",
		description: "Capture and preserve the memory of our loved ones",
		linksTo: "./Lalo.pdf",
		screenshot: "./lalo.png",
		height: "500",
	},
	{
		title: "Risen Devices",
		description: "Get proper help in an emergency medical situation",
		linksTo: "./Risen Devices.pdf",
		screenshot: "./risen.png",
		height: "450",
	},
	{
		title: "Verizon",
		description: "Experience augmented reality using Verizon 5G",
		linksTo: "./Verizon.pdf",
		screenshot: "./verizon.png",
		height: "500",
	},
];

function Projects(props) {
	return (
		<div>
			{/* project starts here */}
			<a target="blank" href={`${props.linksTo}`}>
				<section className={styles.project}>
					<div className={styles.projectleft}>
						<div className={styles.projectText}>
							<h1 className={styles.city}>{props.title}</h1>
							<p className={styles.projectDes}>{props.description}</p>
						</div>
						<div className={styles.learnMore}>
							<a
								className={styles.learnMoreLink}
								target="blank"
								href={`${props.linksTo}`}
							>
								{" "}
								View Case Study
							</a>

							<a target="blank" href={`${props.linksTo}`}>
								<img width={24} src="/arrow.svg" alt="" srcset="" />
							</a>
						</div>
					</div>

					<div className={styles.screenshot}>
						<img
							height={`${props.height}`}
							src={`${props.screenshot}`}
							alt=""
						/>
					</div>
				</section>
			</a>
			{/* project ends here */}
		</div>
	);
}

function AllProjects() {
	return (
		<div>
			<div>{projectList.map(Projects)}</div>
			<Footer />
		</div>
	);
}

export default AllProjects;
