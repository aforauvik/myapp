import styles from "./Nav.module.css";

const navItems = [
	{
		title: "My Blog",
		linksTo: "https://auvik.substack.com/",
	},
	{
		title: "Projects",
		linksTo: "https://www.mousepotato.co/projects",
	},
	// {
	// 	title: "Good Reads",
	// 	linksTo: "/",
	// },
	{
		title: "Contact",
		linksTo: "mailto:email@auvik.me",
	},
];

function NavBody(props) {
	return (
		<div>
			<ul>
				<li>
					<a target="blank" className={styles.font} href={`${props.linksTo}`}>
						{props.title}
					</a>
				</li>
			</ul>
		</div>
	);
}

function Navigation() {
	return <div className={styles.navigation}>{navItems.map(NavBody)}</div>;
}

export default Navigation;
