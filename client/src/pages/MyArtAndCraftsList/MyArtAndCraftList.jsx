/** @format */

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
// import ItemCard from "./ItemCard";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyArtAndCraftList = () => {
	const { user } = useContext(AuthContext);
	const allArtAndCraftListLoadedData = useLoaderData();
	const myArtAndCraftData = allArtAndCraftListLoadedData.filter(
		(data) => data?.email === user?.email,
	);
	const [myAddedArtAndCraftData, setMyAddedArtAndCraftData] =
		useState(myArtAndCraftData);

	const handleDeleteItem = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(
					`https://assign-ment-10-server-side.vercel.app/my-art-and-craft/${id}`,
					{
						method: "DELETE",
					},
				)
					.then((res) => res.json())
					.then((data) => {
						if (data.acknowledged) {
							Swal.fire({
								title: "Deleted!",
								text: "Your Item has been deleted.",
								icon: "success",
							});
							const remainingData = myArtAndCraftData?.filter(
								(data) => data._id !== id,
							);
							setMyAddedArtAndCraftData(remainingData);
						}
					});
			}
		});
	};
	const filterToYes = (yes) => {
		const yesData = myArtAndCraftData.filter(
			(data) => data?.customization === yes,
		);
		setMyAddedArtAndCraftData(yesData);
	};
	const filterToNo = (no) => {
		const noData = myArtAndCraftData.filter(
			(data) => data?.customization === no,
		);
		setMyAddedArtAndCraftData(noData);
	};
	const filterToAll = () => {
		setMyAddedArtAndCraftData(myArtAndCraftData);
	};

	return (
		<>
			<Helmet>
				<title>My Art & Crafts</title>
			</Helmet>
			<div className="text-center my-4 ">
				<div className="dropdown dropdown-hover ">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-wide btn-accent hover:btn-warning m-1"
					>
						Filter By Customization
					</div>
					<ul
						tabIndex={0}
						className="dropdown-content text-center z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 space-y-1"
					>
						<li>
							<a
								onClick={() => filterToYes("Yes")}
								className="mx-auto btn btn-wide btn-sm hover:btn-error"
							>
								Yes
							</a>
						</li>
						<li>
							<a
								onClick={() => filterToNo("No")}
								className="mx-auto btn btn-wide hover:btn-error btn-sm"
							>
								No
							</a>
						</li>
						<li>
							<a
								onClick={() => filterToAll()}
								className="mx-auto btn btn-wide hover:btn-error btn-sm"
							>
								All
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="grid grid-cols-1 gap-6 container mx-auto">
				{myAddedArtAndCraftData?.map((data, index) => (
					<>
						<section
							key={index}
							className="p-4 playfair card bg-gray-100 shadow-xl lg:p-8  text-gray-800"
						>
							<div className="container mx-auto  space-y-12">
								<div className="flex flex-col gap-3 overflow-hidden rounded-md shadow-sm lg:flex-row">
									<img
										src={data?.photoUrl}
										alt="image not found"
										className="h-72 object-cover w- rounded-xl p-2 shadow-lg aspect-video"
									/>
									<div className="flex flex-col justify-center flex-1 p-6 ">
										<div className="card-body">
											<h2 className="card-title">
												Item Name: {data?.itemName}
											</h2>
											<p>Price: {data?.price} $</p>
											<p>Rating: {data?.rating}</p>
											<p>Customization: {data?.customization}</p>
											<p>Stock Status: {data?.stock}</p>
											<div className="card-actions">
												<Link to={`/itemUpdate/${data._id}`}>
													<button
														data-tip="Update This Item"
														className="tooltip-accent btn tooltip tooltip-top bg-lime-200 text-xl hover:btn-accent"
													>
														<FaRegEdit></FaRegEdit>
													</button>
												</Link>
												<button
													onClick={() => handleDeleteItem(data?._id)}
													data-tip="Delete This Item "
													className="btn tooltip-error tooltip tooltip-top bg-orange-200 text-xl hover:btn-error"
												>
													<MdDeleteForever />{" "}
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</>
				))}
			</div>
		</>
	);
};

export default MyArtAndCraftList;
