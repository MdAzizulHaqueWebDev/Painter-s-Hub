/** @format */

import { Link } from "react-router-dom";

const CraftCard = ({ craftItemData }) => {
	// console.log(craftItemData)
	const { photoUrl, itemName, price, rating, processingTime, _id } =
		craftItemData;
	return (
		<div className="rubik">
			<div className="card p-4 h-[30rem] hover:scale-105 border border-red-400 transition rounded-xl bg-base-200  shadow-xl">
				<figure className=" flex-grow border-2">
					<img
						src={photoUrl}
						className="w-full p-4 rounded-2xl h-60"
						alt="img here"
					/>
				</figure>
				<div className="card-body">
					<h2 className=" text-xl">Name: {itemName}</h2>
					<div className="flex items-center">
						<p>
							<span className="font-bold">Price</span>: {price} $
						</p>
						<p>
							<span className="font-bold">Rating</span>: {rating}
						</p>
					</div>
					<p>
						<span className="font-bold">Processing Time</span>: {processingTime}
					</p>

					<div className="card-actions ">
						<Link to={`/details/${_id}`}>
							<button className="btn btn-accent hover:btn-neutral">
								View Details
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CraftCard;
