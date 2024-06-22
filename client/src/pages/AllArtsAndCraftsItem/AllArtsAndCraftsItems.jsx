/** @format */

// import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, ScrollRestoration, useLoaderData } from "react-router-dom";

const AllArtsAndCraftsItems = () => {
	const usersAddedAllArtAndCraftData = useLoaderData();
	return (
		<>
			<Helmet>
				<title>All Arts And Crafts Items</title>
			</Helmet>
			<ScrollRestoration />
			<div className="p-2 text-gray-800">
				<div className=" w-full mx-auto md:w-[90%] overflow-x-auto">
					<table className="w-full text-xs">
						<colgroup>
							<col />
							<col />
							<col />
							<col />
							<col />
							<col className="" />
						</colgroup>
						<thead className="bg-gray-300">
							<tr className="text-left ml-1">
								<th className="p-3">Item Name</th>
								<th className="p-3">Subcategory</th>
								<th className="p-3">Price</th>
								<th className="p-3">Stock</th>
								<th className="p-3"></th>
							</tr>
						</thead>
						<tbody>
							{usersAddedAllArtAndCraftData?.map((data) => (
								<tr
									key={data._id}
									className="border-b border-opacity-20 border-gray-300 bg-gray-50"
								>
									<td className="p-2">
										<p>{data?.itemName}</p>
									</td>
									<td className="p-2">
										<p>{data?.subcategory} </p>
									</td>
									<td className="p-2">
										<p>{data?.price} $</p>
									</td>
									<td className=" hidden md:block p-2">
										<p>{data?.stock} </p>
									</td>
									<td className="p-2 text-right">
										<Link to={`/details/${data._id}`}>
											<span className="px-3 py-1 btn font-semibold rounded-md bg-sky-600 text-gray-50">
												View Details
											</span>
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default AllArtsAndCraftsItems;
