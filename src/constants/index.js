/* eslint-disable no-unused-vars */
import {
	anywhereIcon,
	easyIcon,
	privateIcon,
	AfricanWildlife,
	Anywhere,
	Bees,
	Checkout,
	Compression,
	Deforestation,
	Easy,
	FeelTheBurn,
	HandCount,
	Home,
	Laughing,
	MaskUp,
	Microscope,
	PaintingWithMike,
	Plants,
	Private,
	Sleeping,
	Telescope,
	Whales,
	WildFire,
	Adafruit,
	Bison,
	CreditCards,
	Image2,
	Parrot,
	PlantsOverlay,
	PowerPlatform,
} from "../assets";

const videoCardData = [
	{
		title: "Plant Species",
		description:
			"Train your app to distinguish between different species of plants to help people identify poisonous vegetation.",
		videoLink: Plants,
	},
	{
		title: "Hand Gestures",
		description:
			"Train your app to understand the movement of your hand to create new kinds of immersive user experiences.",
		videoLink: HandCount,
	},
	{
		title: "Personal Trainer",
		description:
			"Train your app to recognize different workout positions to create an automated personal trainer that counts your reps.",
		videoLink: FeelTheBurn,
	},
	{
		title: "Emotional Reactions",
		description:
			"Train your app to react to different expressions allowing people to send emoji reactions using just their face.",
		videoLink: Laughing,
	},
	{
		title: "Interactive Painting",
		description:
			"Train your app to respond with sounds and stories while kids draw to create engaging learning experiences.",
		videoLink: PaintingWithMike,
	},
	{
		title: "Safety Precautions",
		description:
			"Train your app to monitor when masks are being correctly worn to help encourage proper safety precautions.",
		videoLink: MaskUp,
	},
	{
		title: "Whale Watching",
		description:
			"Train your app to detect marine life in tourist photos to help conservationists map and protect the ocean.",
		videoLink: Whales,
	},
	{
		title: "Beehive Health",
		description:
			"Train your app to monitor the entrance of hives to help beekeepers track and analyze the health of their colonies.",
		videoLink: Bees,
	},
	{
		title: "Baby Monitor",
		description:
			"Train your app to detect when babies are sleeping or awake to notify parents before they start crying.",
		videoLink: Sleeping,
	},
	{
		title: "Smart Checkout",
		description:
			"Train your app to recognize different types of produce to help checkout faster without the need to remember price look-up codes.",
		videoLink: Checkout,
	},
	{
		title: "Fire Watch",
		description:
			"Train your app to detect smoke and flames using remote cameras to help spot new wildfires before it's too late.",
		videoLink: WildFire,
	},
	{
		title: "Scientific Research",
		description:
			"Train your app to detect organisms under a microscope to help researchers analyze large quantities of scientific samples.",
		videoLink: Microscope,
	},
	{
		title: "Wildlife Behavior",
		description:
			"Train your app to detect wildlife behavior with remote cameras to track population and migration patterns over a large area.",
		videoLink: AfricanWildlife,
	},
	{
		title: "Equipment Analytics",
		description:
			"Train your app to monitor analog gauges and equipment to provide modern digital readouts and real time analytics.",
		videoLink: Compression,
	},
	{
		title: "Telescopic Imagery",
		description:
			"Train your app to recognize different celestial bodies to help astronomers analyze large amounts of telescopic imagery.",
		videoLink: Telescope,
	},
	{
		title: "Aerial Imagery",
		description:
			"Train your app to monitor aerial imagery to gain insights into macro level changes happening around the globe.",
		videoLink: Deforestation,
	},
];

const blogCardData = [
	{
		title: "Use your model in Power Platform",
		intro: "We're excited to announce a new integration with Microsoft Power Platform.",
		image: PowerPlatform,
		releaseDate: "November 15, 2021",
	},
	{
		title: "Introducing new ways to use your model",
		intro: "Lobe 0.9 introduces new ways of using and exporting your model to your app.",
		image: CreditCards,
		releaseDate: "March 23, 2021",
	},
	{
		title: "Using your model 101",
		intro: "Learn everything you need to know to export your model and use it in your app.",
		image: Bison,
		releaseDate: "March 23 2021",
	},
	{
		title: "Machine Learning Kit with Adafruit",
		intro: "Introducing a brand new machine learning kit from Adafruit and Lobe.",
		image: Adafruit,
		releaseDate: "March 31, 2021",
	},
	{
		title: "Four New Features in Lobe",
		intro: "Select your camera source, export your model to new formats, and more in the new Lobe.",
		image: Image2,
		releaseDate: "December 10, 2020",
	},
	{
		title: "Endless Camera Sources",
		intro: "Deep dive into the new camera sources and all the possibilities they open up inside of Lobe.",
		image: Parrot,
		releaseDate: "December 10, 2020",
	},
	{
		title: "Machine Learning Made Easy",
		intro: "Everything you need to train custom machine learning models in a free, easy to use app.",
		image: PlantsOverlay,
		releaseDate: "October 26, 2020",
	},
];

export { videoCardData, blogCardData };
