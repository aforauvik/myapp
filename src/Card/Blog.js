import {useState, useEffect} from "react";

const messages = [
	"Harnessing Social Norms to Drive User Behavior",
	"Understanding Cognitive Load in UX Design",
	"The Hippo Syndrome: When Design Decisions are Driven by the Loudest Voice",
	"Three Need-finding Strategies",
	"4 Types Of User Interview Questions To Avoid",
	"PMI Technique For Ideation",
	"How To Tell If You Are Building A Feature Factory",
	"Minimum Viable Product",
	"How God Complex Leads To Feature Bloat",
	"Dark Patterns in UX Design",
	"Embracing Accessibility: WCAG for Designers and Developers",
];

const MessageRotator = () => {
	const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

	useEffect(() => {
		// Function to change message every 10 seconds
		const interval = setInterval(() => {
			setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
		}, 5000);

		// Stop changing messages after -- seconds
		setTimeout(() => {
			clearInterval(interval);
		}, 100000);

		// Clean up interval on component unmount
		return () => clearInterval(interval);
	}, []);

	return <div>{messages[currentMessageIndex]}</div>;
};

export default MessageRotator;
