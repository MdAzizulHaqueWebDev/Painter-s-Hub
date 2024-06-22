/** @format */

import { Helmet } from "react-helmet-async";
import {
	ScrollRestoration,
	useLoaderData,
	useNavigate,
} from "react-router-dom";

const SubcategoryItem = () => {
	const itemDetailData = useLoaderData();
	const navigate = useNavigate();
	const {
		item_name,
		customization,
		description,
		image,
		price,
		processing_time,
		rating,
		subcategory,
	} = itemDetailData;
	return (
		<div>
					<Helmet>
				<title>Items Details</title>
			</Helmet>
			<ScrollRestoration />
			<section className="p-4 playfair card bg-gray-100 shadow-xl lg:p-8  text-gray-800">
				<div className="container mx-auto  space-y-12">
					<div className="flex flex-col gap-3 overflow-hidden rounded-md shadow-sm lg:flex-row">
						<img
							src={image}
							alt=""
							className="object-cover w- rounded-xl p-2 shadow-lg aspect-video"
						/>
						<div className="flex flex-col justify-center flex-1 p-6 ">
							<p className="text-2xl font-bold">Item Name: {item_name}</p>
							<h2>
								<span className="font-bold playfair">Category</span>:{" "}
								{subcategory}
							</h2>
							<p>
								<span className="font-bold playfair">Rating</span>: {rating}
							</p>
							<p>
								<span className="font-bold playfair">Price</span>: {price}
							</p>
							<p>
								<span className="font-bold playfair">Customization</span>:{" "}
								{customization}
							</p>
							<p>
								<span className="font-bold playfair">Processing Time</span>:{" "}
								{processing_time}
							</p>
							<p>
								{" "}
								<span className="font-bold playfair">Description</span>:{" "}
								{description}
							</p>
							<div className="card-actions ">
								<button
									onClick={() => navigate(-1)}
									className="btn btn-sm md:btn-md btn-accent hover:btn-success"
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

export default SubcategoryItem;
