/** @format */

import { Helmet } from "react-helmet-async";
import { ScrollRestoration, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UserItemUpdate = () => {
	const data = useLoaderData();
	const { id } = useParams();
	// console.log(data);
	const handleItemUpdateForm = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const itemName = formData.get("itemName");
		// const subcategory = formData.get("subcategory");
		const subcategory = e.target.subcategory.value;
		const rating = formData.get("rating");
		const price = formData.get("price");
		const stock = formData.get("stock");
		const processingTime = formData.get("processing-time");
		const photoUrl = formData.get("photoUrl");
		const description = formData.get("description");
		const customization = formData.get("customization");
		const updateCraftData = {
			itemName,
			subcategory,
			rating,
			price,
			stock,
			processingTime,
			photoUrl,
			description,
			customization,
		};

		fetch(`https://assign-ment-10-server-side.vercel.app/itemUpdate/${id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(updateCraftData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					Swal.fire({
						position: "center",
						icon: "success",
						title: "Item Update Successfully",
						showConfirmButton: false,
						timer: 1200,
					});
				}
			});
	};

	return (
		<div>
			<Helmet>
				<title>Update Item | Painter's Hub</title>
			</Helmet>
			<ScrollRestoration />
			<div className="w-3/4  mx-auto p-8  rounded-xl bg-fuchsia-100 mt-3 text-gray-800">
				<h1 className="text-2xl font-bold text-center">
					Update Your Art & Craft Item
				</h1>
				<form onSubmit={handleItemUpdateForm} className="space-y-1">
					<section className="space-y-1 flex items-center gap-4 text-sm">
						<div className="w-1/2 space-y-1">
							<label
								htmlFor="Item-Name"
								className="block text-black font-semibold"
							>
								Item Name
							</label>
							<input
								type="text"
								name="itemName"
								id="Item-Name"
								defaultValue={data?.itemName}
								placeholder="Item Name"
								className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600"
							/>
						</div>
						<div className="w-1/2 space-y-1">
						<div className="space-y-1">
							<label
								htmlFor="subcategory"
								className="block text-black font-semibold"
							>
								Subcategory Name
							</label>
							<select name="subcategory" className="select border-none w-full">
								<option disabled selected>
									Subcategory
								</option>
								<option>Landscape Painting</option>
								<option>Portrait Drawing</option>
								<option>Watercolor</option>
								<option>Oil Painting</option>
								<option>Charcoal Sketching</option>
								<option> Cartoon Drawing</option>
							</select>
						</div>
						</div>
					</section>

					<section className="space-y-1 flex gap-4 text-sm">
						<div className="w-1/2 space-y-1">
							<label
								htmlFor="rating"
								className="block text-black font-semibold"
							>
								Item Rating
							</label>
							<input
								type="text"
								name="rating"
								id="rating"
								defaultValue={data?.rating}
								placeholder="Item Rating"
								className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600"
							/>
						</div>
						<div className="w-1/2 space-y-1">
							<label htmlFor="price" className="block text-black font-semibold">
								Price
							</label>
							<input
								type="text"
								name="price"
								id="price"
								defaultValue={data?.price}
								placeholder="Enter Your Item Price"
								className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600"
							/>
						</div>
					</section>
					<section className="space-y-1 flex gap-4 text-sm">
						<div className="w-1/2 space-y-1">
							<label
								htmlFor="Customization"
								className="block text-black font-semibold"
							>
								Customization
							</label>
							<select
								name="customization"
								className="select border-none w-full max-w-xs"
							>
								<option disabled selected>
									Customization
								</option>
								<option>Yes</option>
								<option>No</option>
							</select>
						</div>
						<div className="w-1/2 space-y-1">
							<label htmlFor="stock" className="block text-black font-semibold">
								stock
							</label>
							<input
								type="text"
								name="stock"
								id="stock"
								defaultValue={data?.stock}
								placeholder="Enter Your Item Available Stock"
								className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600"
							/>
						</div>
						<div className="w-1/2 space-y-1">
							<label
								htmlFor="processing-time"
								className="block text-black font-semibold"
							>
								Processing Time
							</label>
							<input
								type="text"
								name="processing-time"
								id="processing-time"
								defaultValue={data?.processingTime}
								placeholder="Enter Your Item Price"
								className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600"
							/>
						</div>
					</section>
					<section className="flex  text-sm">
						<div className="w-full">
							<label
								htmlFor="photoUrl"
								className="block text-black font-semibold"
							>
								photoUrl
							</label>
							<input
								type="text"
								name="photoUrl"
								id="photoUrl"
								defaultValue={data?.photoUrl}
								placeholder="Enter Item Photo Url"
								className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600"
							/>
						</div>
					</section>
					<section className="flex  text-sm">
						<div className="w-full">
							<label
								htmlFor="description"
								className="block text-black font-semibold"
							>
								Short Description
							</label>
							<textarea
								type="text"
								name="description"
								id="description"
								defaultValue={data?.description}
								placeholder="Enter Item Short Description"
								className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600"
							/>
						</div>
					</section>
					<button className="block btn  w-full p-3 text-center rounded-sm text-gray-50 bg-sky-600">
						Update
					</button>
				</form>
			</div>
		</div>
	);
};

export default UserItemUpdate;
