import React from "react";
import styles from "./Card.module.css";

function Footer() {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();

	const iconStyle = {
		display: "flex",
		gap: "16px",
	};

	return (
		<div>
			{/* footer starts here */}

			<div className={styles.footer}>
				<div className={styles.divider}></div>
				<div style={iconStyle}>
					<a target="blank" href="https://www.instagram.com/auvik">
						<img height={24} src="/Instagram-icon.svg" alt="" srcset="" />
					</a>
					<a target="blank" href="https://twitter.com/auvik">
						<img height={24} src="/Twitter.svg" alt="" srcset="" />{" "}
					</a>
					<a target="blank" href="mailto:email@auvik.me">
						<img height={24} src="/mailto-icon.svg" alt="" srcset="" />{" "}
					</a>
				</div>
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
