/** @format */

import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const ArtAndCraftCategories = () => {
	// const handleAdd = () => {
	// 	fetch("https://assign-ment-10-server-side.vercel.app/allArtsAndCrafts", {
	// 		method: "POST",
	// 		headers: { "content-type": "application/json" },
	// 		body: JSON.stringify(allData),
	// 	})
	// 		.then((res) => res.json())
	// 		.then((data) => console.log(data));
	// };

	return (
		<>
			<div className="text-center mt-14 mb-4  ">
				<h2 className="divider text-xs md:text-3xl font-bold playfair">
				Explore more to Category Wise 
				</h2>
				<h2 className="text-3xl font-medium text-red-300">
				<Fade cascade>
					Your own best choices
					</Fade>					
					</h2>
			</div>
			<div className="grid gap-3 grid-cols-1 container mx-auto  md:grid-cols-2 lg:grid-cols-3">
				<Link to="/landscape-painting">
					<div className="card hover:scale-95 transition  bg-base-200 shadow-xl">
						<figure className="pt-4">
							<img
								src="https://i.postimg.cc/rmzHG1wr/Landscape-Painting.jpg"
								alt="category img"
								className="w-full px-4 h-52"
							/>
						</figure>
						<div className="card-body items-center text-center">
							<h2 className="card-title">Landscape Painting </h2>
						</div>
					</div>
				</Link>

				<Link to="/portrait-drawing">
					<div className="card bg-base-200 hover:scale-95 transition shadow-xl">
						<figure className=" pt-4">
							<img
								src="https://i.postimg.cc/9Xx61m7j/f-Figure-Charcoal-Sketch-1.jpg"
								alt="category img"
								className="rounded-xl h-52"
							/>
						</figure>
						<div className="card-body items-center text-center">
							<h2 className="card-title">Portrait Drawing</h2>
						</div>
					</div>
				</Link>
				<Link to="/watercolour-painting">
					<div className="card bg-base-200 hover:scale-95 transition shadow-xl">
						<figure className=" pt-4">
							<img
								src="https://i.postimg.cc/L8NvyJ7B/Watercolour-Painting-4.jpg"
								alt="category img"
								className="rounded-xl h-52 w-full px-4"
							/>
						</figure>
						<div className="card-body items-center text-center">
							<h2 className="card-title"> Watercolor Painting</h2>
						</div>
					</div>
				</Link>
				<Link to="/oil-painting">
					<div className="card bg-base-200 hover:scale-95 transition shadow-xl">
						<figure className=" pt-4">
							<img
								src="https://i.postimg.cc/gcX5nH59/Oil-Painting-4.jpg"
								alt="category img"
								className="rounded-xl h-52 w-full px-4"
							/>
						</figure>
						<div className="card-body items-center text-center">
							<h2 className="card-title"> Oil Painting</h2>
						</div>
					</div>
				</Link>
				<Link to="/charcoal-sketching">
					<div className="card bg-base-200 hover:scale-95 transition shadow-xl">
						<figure className=" pt-4">
							<img
								src="https://i.postimg.cc/sx2ty8b8/Figure-Charcoal-Sketch-3.jpg"
								alt="category img"
								className="rounded-xl h-52 w-full px-4"
							/>
						</figure>
						<div className="card-body items-center text-center">
							<h2 className="card-title">Charcoal Sketching</h2>
						</div>
					</div>
				</Link>
				<Link to="/cartoon-drawing">
					<div className="card bg-base-200 hover:scale-95 transition shadow-xl">
						<figure className=" pt-4">
							<img
								src="https://i.postimg.cc/qvBQFyVb/OIP-1.jpg"
								alt="category img"
								className="rounded-xl h-52 px-4"
							/>
						</figure>
						<div className="card-body items-center text-center">
							<h2 className="card-title"> Cartoon Drawing</h2>
						</div>
					</div>
				</Link>
				{/* <button onClick={handleAdd} className="btn h-28">
					add all data
				</button> */}
			</div>
		</>
	);
};

export default ArtAndCraftCategories;
