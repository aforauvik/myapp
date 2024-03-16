import styles from "./App.module.css";
import Body from "./Body/Body";
import Navigation from "./Nav/Nav";

function App() {
	return (
		<div className={styles.main}>
			<div className={styles.body}>
				<Navigation />
				<Body />
			</div>
		</div>
	);
}

export default App;
