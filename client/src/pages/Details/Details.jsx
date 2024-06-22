/** @format */

import { Helmet } from "react-helmet-async";
import {
	ScrollRestoration,
	useLoaderData,
	useNavigate,
} from "react-router-dom";

const Details = () => {
	const detailsData = useLoaderData();
	const navigate = useNavigate();
	const {
		itemName,
		customization,
		description,
		photoUrl,
		price,
		processingTime,
		rating,
		stock,
		subcategory,
	} = detailsData;
	// console.log(detailsData);
	return (
		<div>
			<Helmet>
				<title>{itemName ? itemName : "Details Pages"}</title>
			</Helmet>
			<ScrollRestoration />
			<section className="p-4 playfair card bg-gray-100 shadow-xl lg:p-8  text-gray-800">
				<div className="container mx-auto  space-y-12">
					<div className="flex flex-col gap-3 overflow-hidden rounded-md shadow-sm lg:flex-row">
						<img
							src={photoUrl}
							alt=""
							className="h-72 object-cover w- rounded-xl p-2 shadow-lg aspect-video"
						/>
						<div className="flex flex-col justify-center flex-1 p-6 ">
							<p className="text-2xl font-bold"><span className="font-bold">Item Name</span> : {itemName}</p>
							<h2 className=""><span className="font-bold">Category</span> : {subcategory}</h2>
							<p> <span className="font-bold">Rating</span>: {rating}</p>
							<p><span className="font-bold">Stock</span>: {stock}</p>
							<p><span className="font-bold">Price</span>: {price}</p>
							<p><span className="font-bold">Customization</span>: {customization}</p>
							<p> <span className="font-bold">Processing Time</span>: {processingTime}</p>
							<p> <span className="font-bold">Description</span>: {description}</p>
							<div className="card-actions ">
								<button
									onClick={() => navigate(-1)}
									className="btn btn-sm md:btn-md btn-primary"
								>
									Go Back
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Details;
