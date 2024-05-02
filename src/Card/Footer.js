import React from "react";
import styles from "./Card.module.css";

function Footer() {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();

	return (
		<div>
			{/* footer starts here */}

			<div className={styles.footer}>
				<div className={styles.divider}></div>
				<p className={styles.footerText}>
					CopyRight © {currentYear} | Designed and Developed By Auvik Mir, North
					Carolina
				</p>
			</div>

			{/* footer ends here */}
		</div>
	);
}

export default Footer;
