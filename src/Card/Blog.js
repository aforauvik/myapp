import {useState, useEffect} from "react";

const articles = [
	{
		title: "Harnessing Social Norms to Drive User Behavior",
		url: "https://auvik.substack.com/p/harnessing-social-norms-to-drive",
	},
	{
		title: "Understanding Cognitive Load in UX Design",
		url: "https://auvik.substack.com/p/understanding-cognitive-load-in-ux",
	},
	{
		title:
			"The Hippo Syndrome: When Design Decisions are Driven by the Loudest Voice",
		url: "https://auvik.substack.com/p/the-hippo-syndrome-when-design-decisions",
	},
	{
		title: "Three Need-finding Strategies",
		url: "https://auvik.substack.com/p/three-need-finding-strategies",
	},
	{
		title: "4 Types Of User Interview Questions To Avoid",
		url: "https://auvik.substack.com/p/4-types-of-user-interview-questions",
	},
	{
		title: "PMI Technique For Ideation",
		url: "https://auvik.substack.com/p/pmi-technique-for-ideation",
	},
	{
		title: "How To Tell If You Are Building A Feature Factory",
		url: "https://auvik.substack.com/p/how-to-tell-if-you-are-building-a",
	},
	{
		title: "Minimum Viable Product",
		url: "https://auvik.substack.com/p/minimum-viable-product",
	},
	{
		title: "How God Complex Leads To Feature Bloat",
		url: "https://auvik.substack.com/p/mistakes-often-made-by-first-time",
	},
	{
		title: "Dark Patterns in UX Design",
		url: "https://auvik.substack.com/p/dark-patterns-in-ux-design",
	},
	{
		title: "Embracing Accessibility: WCAG for Designers and Developers",
		url: "https://auvik.substack.com/p/embracing-accessibility-wcag-for",
	},
];

const MessageRotator = () => {
	const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

	useEffect(() => {
		// Function to change message every 5 seconds
		const interval = setInterval(() => {
			setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % articles.length);
		}, 5000);

		// Stop changing messages after 100 seconds
		setTimeout(() => {
			clearInterval(interval);
		}, 100000);

		// Clean up interval on component unmount
		return () => clearInterval(interval);
	}, []);

	return (
		<div>
			<a
				href={articles[currentMessageIndex].url}
				target="_blank"
				rel="noopener noreferrer"
			>
				{articles[currentMessageIndex].title}
			</a>
		</div>
	);
};

export default MessageRotator;
