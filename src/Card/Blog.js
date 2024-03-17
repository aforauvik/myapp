import {useState, useEffect} from "react";

const messages = [
	"Understanding Cognitive Load in UX Design",
	"Three Need-finding Strategies",
	"4 Types Of User Interview Questions To Avoid",
	"PMI Technique For Ideation",
	"5 Techniques To Generate Great Ideas",
	"How To Tell If You Are Building A Feature Factory",
	"Minimum Viable Product",
];

const MessageRotator = () => {
	const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

	useEffect(() => {
		// Function to change message every 10 seconds
		const interval = setInterval(() => {
			setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
		}, 10000);

		// Stop changing messages after -- seconds
		setTimeout(() => {
			clearInterval(interval);
		}, 70000);

		// Clean up interval on component unmount
		return () => clearInterval(interval);
	}, []);

	return <div>{messages[currentMessageIndex]}</div>;
};

export default MessageRotator;
