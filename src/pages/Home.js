import React from "react";
import Navigation from "../Nav/Nav";
import Body from "../Body/Body";

function Home() {
	return (
		<div className={styles.main}>
			<div className={styles.body}>
				<Navigation />
				<Body />
				<Footer />
			</div>
		</div>
	);
}

export default Home;
