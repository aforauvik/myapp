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
				<h1 className={fontstyle.font}>
					Recent <br />
					Projects
				</h1>
				{/* <a href="https://5dtjl51z5vl.typeform.com/to/LlPhdYhj" target="blank">
					<button className={styles.casepassword}>
						Request Case Study Password
					</button>
				</a> */}

				<AllProjects />
			</div>
		</div>
	);
}

export default Project;
