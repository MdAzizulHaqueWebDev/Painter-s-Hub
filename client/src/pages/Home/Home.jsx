/** @format */

import { ScrollRestoration } from "react-router-dom";
import ArtAndCraftCategories from "../../components/ArtAndCategories/ArtAndCraftCategories";
import Banner from "./Banner";
import CraftItems from "./CraftItems";
import Feature from "./Feature";
import FeatureSectionTwo from "./FeatureSectionTwo";
import { Helmet } from "react-helmet-async";

const Home = () => {
	return (
		<div className="-z-50">
			<Helmet>
				<title>Home | Painter's Hub</title>
			</Helmet>
			<ScrollRestoration />
			<section className="mt-5">
				<Banner />
			</section>
			<section>
				<CraftItems />
			</section>
			<section>
				<ArtAndCraftCategories />
			</section>
			<section>
				<Feature />
			</section>
			<section>
				<FeatureSectionTwo />
			</section>
		</div>
	);
};

export default Home;
