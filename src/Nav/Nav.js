import {Link} from "react-router-dom";
import styles from "./Nav.module.css";

const navItems = [
	{
		title: "Home",
		linksTo: "/",
		target: "",
	},
	{
		title: "Projects",
		linksTo: "/Projects",
		target: "",
	},

	{
		title: "Contact",
		linksTo: "mailto:email@auvik.me",
		target: "",
	},
	{
		title: "Blog",
		linksTo: "https://auvik.substack.com/",
		target: "blank",
	},
];

function NavBody(props) {
	return (
		<div>
			<ul>
				<li>
					<Link
						target={`${props.target}`}
						to={`${props.linksTo}`}
						className={styles.font}
					>
						{props.title}
					</Link>
				</li>
			</ul>
		</div>
	);
}

function Navigation() {
	return <div className={styles.navigation}>{navItems.map(NavBody)}</div>;
}

export default Navigation;
