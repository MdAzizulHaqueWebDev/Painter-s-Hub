/** @format */

import { useEffect, useState } from "react";
import CraftCard from "./CraftCard";
import { useTypewriter } from "react-simple-typewriter";
import Loader from "../../components/Loader";

const CraftItems = () => {
	const [loader,setLoader] = useState(true)
	const [craftData, setCraftData] = useState(null);
	useEffect(() => {
		fetch("https://assign-ment-10-server-side.vercel.app/all-arts-and-crafts")
			.then((res) => res.json())
			.then((data) =>{ setCraftData(data) 
			setLoader(false)
			});
	}, []);
	// console.log(craftData)
	const [text] = useTypewriter({
		words: [
			"Discover a world",
			" of creativity at our craft",
			" Store, where imagination",
			"Meets artistry",' From vibrant paints',' to intricate brushes', 'we offer a curated selection of', 'supplies to fuel your passion for crafting', "Whether' you're a seasoned artist or a budding creator", 'our store is your one-stop',' destination for all things crafty.' 
		],
		loop: 0,
	});
	if(loader){
	return <Loader/>
	}
	return (
		<>
			<div className="text-center">
			<h2 className="md:text-2xl text-xl font-bold playfair mt-8 bg-gradient-to-r from-lime-500 via-pink-600 to-green-400 text-transparent bg-clip-text animate-gradient">
					{" "}
			
						
					Explore Our Painting and Drawing related website can serve as a <br /> comprehensive platform for artists to learn, create{" "}
				</h2>
				<p className="h-8 text-xl font-bold playfair">{text}</p>
			</div>
			<div className="grid grid-cols-1 container mx-auto px-4 mt-5 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{craftData.slice(0, 6).map((craftItemData) => (
					<CraftCard key={craftData._id} craftItemData={craftItemData} />
				))}
			</div>
		</>
	);
};

export default CraftItems;
