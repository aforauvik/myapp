import styles from "../App.module.css";
import Navigation from "../Nav/Nav";
import fontstyle from "../Body/Body.module.css";
import description from "../Card/Card.module.css";

import AllProjects from "../Projects/Projects";

function Project() {
	return (
		<div className={styles.main}>
			<div className={styles.body}>
				<Navigation />
				<h1 className={fontstyle.font}>Recent Projects</h1>
				<AllProjects />
			</div>
		</div>
	);
}

export default Project;
