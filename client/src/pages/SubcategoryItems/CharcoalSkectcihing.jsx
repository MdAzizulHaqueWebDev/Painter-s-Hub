/** @format */

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, ScrollRestoration } from "react-router-dom";
import Loader from "../../components/Loader";

const CharcoalSkectcihing = () => {
	const [loader,setLoader] =useState(true)
	const [charcoalSkectcihing, setCharcoalSkectcihing] = useState(null);
	useEffect(() => {
		fetch("https://assign-ment-10-server-side.vercel.app/landscape-painting")
			.then((res) => res.json())
			.then((data) => {setCharcoalSkectcihing(data)
			setLoader(false)});
	}, []);
	if(loader){
	return <Loader/>
	}
	return (
		<>
			<Helmet>
				<title>Charcoal Skectcihing Arts</title>
			</Helmet>
			<ScrollRestoration/>
			<div className="text-center my-6 playfair">
				<h2 className="text-3xl font-bold ">
					{" "}
					Charcoal Skectcihing Arts And Crafts
				</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{charcoalSkectcihing?.map((data) => (
					<div key={data._id} className="rubik">
						<div className="card p-4 rounded-xl bg-base-300 h-full shadow-xl">
							<figure className=" flex-grow">
								<img
									src={data?.image}
									className="w-full p-4 rounded-2xl h-60"
									alt="img here"
								/>
							</figure>
							<div className="card-body">
								<h2 className=" text-xl">Name: {data?.item_name}</h2>
								<div className="flex items-center">
									<p>
										<span className="font-bold">Price</span>: {data?.price}
									</p>
									<p>
										<span className="font-bold">Rating</span>: {data?.rating}
									</p>
								</div>
								<p>
									<span className="font-bold">Processing Time</span>:{" "}
									{data?.processing_time}
								</p>
								<p>
									<span className="font-bold">Description</span>:{" "}
									{data?.description}
								</p>
								<div className="card-actions ">
									<Link to={`/subcategoryItem/${data?._id}`}>
										<button className="btn btn-accent hover:btn-neutral">
											View Details
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default CharcoalSkectcihing;
