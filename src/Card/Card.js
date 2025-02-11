import React from "react";
import styles from "./Card.module.css";
import MessageRotator from "./Blog";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import Testimonials from "./Testimonials";

function Card() {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();

	return (
		<div>
			{/* first card starts here */}
			<section className={styles.firstcard}>
				<div className={styles.greetings}>
					<h1 className={styles.hello}>Hi, I am Auvik Mir</h1>
					<p className={styles.description}>
						A UX, IxD, UI designer, and front-end developer with 12 years of
						design experience guiding products through every stage—from
						discovery to launch. I like to design human-centered, minimalist,
						and most importantly functional products. I believe design is an
						iterative process and design decisions should be data-driven.
					</p>
				</div>

				<div className={styles.location}>
					<h1 className={styles.greytitle}>Located In</h1>
					<p className={styles.city}>North Carolina</p>
				</div>
			</section>
			{/* first card ends here */}

			{/* secons card starts here */}
			<section className={styles.secondcard}>
				<a target="blank" href="https://dribbble.com/auvik">
					<div className={styles.socialInstagram}>
						<img height={220} src="/dribbble.png" alt="" srcset="" />
					</div>
				</a>

				<div className={styles.invest}>
					<p className={styles.investtext}>
						Helped to secure $1.4 million in funding for my early-stage startup
						clients
					</p>
				</div>
			</section>
			{/* second card ends here */}

			{/* third card starts here */}
			<section className={styles.thirdcard}>
				<a target="blank" href="https://www.twitter.com/auvik">
					<div className={styles.socialX}>
						<img height={180} src="/x.svg" alt="" srcset="" />
					</div>
				</a>

				<div className={styles.fellow}>
					<h1 className={styles.greytitle}>Fellow</h1>
					<p className={styles.investtext}>
						On-Deck <br /> Design <br />
						Fellowship
					</p>
				</div>
			</section>
			{/* third card ends here */}

			<Testimonials />

			{/* project card starts here */}
			<a target="blank" href="/projects">
				<section className={styles.project}>
					<div className={styles.projectleft}>
						<div className={styles.projectText}>
							<h1 className={styles.city}>
								Recent
								<br />
								Projects
							</h1>
							<p className={styles.projectDes}>
								Some of the recent projects I've worked on
							</p>
						</div>
						<div className={styles.learnMore}>
							<a
								className={styles.learnMoreLink}
								target="blank"
								href="/projects"
							>
								{" "}
								Learn More
							</a>

							<a target="blank" href="/projects">
								<img width={24} src="/arrow.svg" alt="" srcset="" />
							</a>
						</div>
					</div>

					<div className={styles.screenshot}>
						<img height={500} src="./screens.png" alt="" />
					</div>
				</section>
			</a>
			{/* project card ends here */}

			{/* blog card starts here */}
			<section className={styles.blogcard}>
				<a target="blank" href="https://github.com/aforauvik">
					<div className={styles.socialBlog}>
						<img height={280} src="/github.svg" alt="" srcset="" />
					</div>
				</a>

				<div className={styles.blog}>
					<h1 className={styles.brighttitle}>1 Minute Blogs</h1>
					<p className={styles.investtext}>
						<MessageRotator />
					</p>
				</div>
			</section>
			{/* blog card ends here */}

			{/* mvp card starts here */}

			<a target="blank" href="https://cal.com/auvik">
				<section className={styles.mvpSection}>
					<div className={styles.mvp}>
						<div className={styles.projectleft}>
							<div className={styles.mvpText}>
								<p className={styles.greytitle}>The UX-Files</p>

								<h1 className={styles.city}>The MVP Is Out There</h1>
							</div>
						</div>

						<div className={styles.ufo}>
							<img height={245} src="./ufo.svg" alt="" />
						</div>
					</div>

					<div className={styles.bookux}>
						<p className={styles.investtext}>
							Book a <span className={styles.span}>free UX workshop</span> to
							help launch your startup idea. No strings attached!
						</p>
					</div>
				</section>
			</a>
			{/* mvp card ends here */}

			<Footer />
		</div>
	);
}

export default Card;
