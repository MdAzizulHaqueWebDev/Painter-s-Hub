/** @format */

import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Authentication/AuthProvider";
import { ScrollRestoration } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AddCraftItem = () => {
	const { user } = useContext(AuthContext);
	console.log(user);
	const handleAddCraftForm = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const itemName = formData.get("itemName");
		const subcategory = formData.get("subcategory");
		const rating = formData.get("rating");
		const price = formData.get("price");
		const stock = formData.get("stock");
		const processingTime = formData.get("processing-time");
		const username = formData.get("username");
		const email = user?.email;
		const photoUrl = formData.get("photoUrl");
		const description = formData.get("description");
		const customization = formData.get("customization");
		const addCraftData = {
			itemName,
			subcategory,
			rating,
			price,
			stock,
			processingTime,
			username,
			email,
			photoUrl,
			description,
			customization,
		};
		console.log(subcategory);

		fetch("https://assign-ment-10-server-side.vercel.app/add-craft-item", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(addCraftData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					Swal.fire({
						position: "center",
						icon: "success",
						title: "Item Added Successfully",
						showConfirmButton: false,
						timer: 1200,
					});
				}
			});
		setTimeout(() => {
			e.target.reset();
		}, 1000);
	};

	return (
		<div>
			<Helmet>
				<title>Add Craft Item</title>
			</Helmet>
			<ScrollRestoration />
			<div className="md:w-3/4 w-[96%] mx-auto md:p-4 lg:p-8 p-2 min-h-screen rounded-xl bg-fuchsia-100 mt-3 text-gray-800">
				<h1 className="text-2xl font-bold text-center">Add Your Craft Item</h1>
				<form onSubmit={handleAddCraftForm} className="space-y-1">
					<section className="space-y-1 items-center flex gap-4 text-sm">
						<div className="w-1/2 space-y-1">
							<label
								htmlFor="Item-Name"
								className="block text-black font-semibold"
							>
								Item Name
							</label>
							<input
								required
								type="text"
								name="itemName"
								id="Item-Name"
								placeholder="Item Name"
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
								required
								type="text"
								name="processing-time"
								id="processing-time"
								placeholder="Enter Your Item Price"
								className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600"
							/>
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
								required
								type="text"
								name="rating"
								id="rating"
								placeholder="Item Rating"
								className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600"
							/>
						</div>
						<div className="w-1/2 space-y-1">
							<label htmlFor="price" className="block text-black font-semibold">
								Price
							</label>
							<input
								required
								type="text"
								name="price"
								id="price"
								placeholder="Enter Your Item Price"
								className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600"
							/>
						</div>
					</section>
					<section className="space-y-1 flex items-center gap-4 text-sm">
						<div className="w-1/2 space-y-1">
							<label
								htmlFor="Customization"
								className="block text-black font-semibold"
							>
								Customization
							</label>
							<select
								name="customization"
								className="select border-none w-full"
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
								stock status
							</label>
							<select required name="stock" className="select border-none w-full">
								<option disabled selected>
									stock
								</option>
								<option>In Stock</option>
								<option> Made to Order</option>
							</select>
						</div>
					</section>
					<section className="space-y-1 flex gap-4 text-sm">
						<div className="w-full space-y-1">
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
					</section>
					<section className="space-y-1 flex gap-4 text-sm">
						<div className="w-1/2 space-y-1">
							<label
								htmlFor="username"
								className="block text-black font-semibold"
							>
								Username
							</label>
							<input
								required
								type="text"
								name="username"
								id="username"
								disabled
								value={user?.displayName}
								className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600"
							/>
						</div>
						<div className="w-1/2 space-y-1">
							<label htmlFor="email" className="block text-black font-semibold">
								Email
							</label>
							<input
								required
								type="text"
								disabled
								name="email"
								value={
									user?.email || "Your Email Not Accessible login with others"
								}
								id="email"
								placeholder="Enter Your Email"
								className="w-full px-4 py-3  rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600"
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
								required
								type="text"
								name="photoUrl"
								id="photoUrl"
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
								placeholder="Enter Item Short Description"
								className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-sky-600"
							/>
						</div>
					</section>

					<button className="block btn  w-full p-3 text-center rounded-sm text-gray-50 bg-sky-600">
						Add Item
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddCraftItem;
