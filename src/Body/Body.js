import styles from "./Body.module.css";
import Card from "../Card/Card";

function Body() {
	return (
		<div>
			<h1 className={styles.font}>me != user</h1>
			<Card />
		</div>
	);
}

export default Body;
