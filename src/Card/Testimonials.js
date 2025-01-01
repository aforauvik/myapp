import React, {useState} from "react";
import styles from "./Testimonials.module.css";

const testimonialsData = [
	{
		number: "./quote.svg",
		name: "Dr. Steven A.",
		title: "Staff Software Engineer, Netflix",
		shortDescription:
			"I worked with Auvik in the infancy of a startup. He ran the UX side of things, and his miro board was one of the main reasons I joined the startup! It was ambitious. detailed and belived a real intellectual investment on Auvik's part into the domain of the startup.",
		fullTestimonial:
			"I worked with Auvik in the infancy of a startup. He ran the UX side of things, and his miro board was one of the main reasons I joined the startup! It was ambitious. detailed and revealed a real intellectual investment on Auvik's part into the domain of the startup.",
	},
	{
		number: "./quote.svg",
		name: "Jaclyn T.",
		title: "Product Designer, Pathfinder Health",
		shortDescription:
			"As the senior designer on the team, Auvik quickly emerged as a valuable mentor. His guidance instilled in me key principles and best practices for wireframing, design systems, design organization, prototyping, and user testing. His pedagogical style was exemplary.",
		fullTestimonial:
			"As the senior designer on the team, Auvik quickly emerged as a valuable mentor. His guidance instilled in me key principles and best practices for wireframing, design systems, design organization, prototyping, and user testing. His pedagogical style was exemplary.",
	},
	{
		number: "./quote.svg",
		name: "Steve S.",
		title: "Senior Product Designer, Syniti",
		shortDescription:
			"I had the pleasure of working with Auvik, and I highly recommend him for any Product Designer role. During our time working together, Auvik consistently showcased his ability to solve complex problems with innovative solutions.",
		fullTestimonial:
			"I had the pleasure of working with Auvik, and I highly recommend him for any Product Designer role. During our time working together, Auvik consistently showcased his ability to solve complex problems with innovative solutions.",
	},
];

const Testimonials = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentTestimonial, setCurrentTestimonial] = useState(null);

	const openModal = (testimonial) => {
		setCurrentTestimonial(testimonial);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setCurrentTestimonial(null);
	};

	return (
		<div className={styles.testimonialsContainer}>
			<div className={styles.testimonials}>
				{testimonialsData.map((testimonial, index) => (
					<div className={styles.testimonial} key={index}>
						<img
							className={styles.quote}
							src={`${testimonial.number}`}
							alt=""
						/>
						<p>{testimonial.shortDescription}</p>
						<div className={styles.nameTitle}>
							<h3>{testimonial.name}</h3>
							<h2>{testimonial.title}</h2>
						</div>

						{/* <button onClick={() => openModal(testimonial)}>Read More</button> */}
					</div>
				))}
			</div>

			{isModalOpen && (
				<div className={styles.modal}>
					<div className={styles.modalContent}>
						<h3>{currentTestimonial.name}</h3>
						<p>{currentTestimonial.fullTestimonial}</p>
						<button onClick={closeModal}>Close</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Testimonials;
