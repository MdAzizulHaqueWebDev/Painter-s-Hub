/** @format */

import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";
import PrivateNavlink from "../PrivateRoute/PrivateNavlink";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
	const [theme, setTheme] = useState("light");
	const { user, logOut } = useContext(AuthContext);
	const navLinks = (
		<>
			<NavLink to={"/"}>
				<li>
					<a>Home</a>
				</li>
			</NavLink>
			<NavLink to={"/all-arts-and-crafts"}>
				<li>
					<a>All Art & Craft Items</a>
				</li>
			</NavLink>
			<PrivateNavlink />
		</>
	);
	const handleLogout = () => {
		logOut()
			.then(() =>
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Logout Successfully",
					showConfirmButton: false,
					timer: 1000,
				}),
			)
			.catch((err) => console.log("log out err", err));
	};

	useEffect(() => {
		localStorage.setItem("theme", theme);
		const getLocalTheme = localStorage.getItem("theme");
		document.querySelector("html").setAttribute("data-theme", getLocalTheme);
	}, [theme]);

	return (
		<section className="container  mx-auto">
			<Tooltip
				id="my-tooltip-data-html"
				style={{ border: "2px solid ", borderRadius: "20px" }}
			/>
			<div className="drawer ">
				<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

				{/* large device content here */}
				<div className="drawer-content flex flex-col">
					<div className="w-full navbarr items-center flex ">
						{/* menu icon for small device */}
						<div className="flex-none lg:hidden">
							<label
								htmlFor="my-drawer-3"
								aria-label="open sidebar"
								className="btn btn-square btn-ghost"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="inline-block w-6 h-6 stroke-current"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									></path>
								</svg>
							</label>
						</div>

						<div className="flex-1 font-bold playfair text-xs md:text-lg  bg-gradient-to-r from-lime-500 via-pink-600 to-green-400 text-transparent bg-clip-text animate-gradient  bg-300%">
							<Link to={"/"}>Painter's Hub</Link>
						</div>

						<div className="flex-none  hidden lg:block">
							<ul className="menu justify-center items-center menu-horizontal">
								{/*large device Navbar menu content here */}
								{navLinks}
							</ul>
						</div>

						<div className="flex-1 justify-end items-center flex gap-3 px-2 mx-2">
							<div>
								<label className="relative inline-flex items-center cursor-pointer">
									<input
										onChange={(e) => {
											if (e.target.checked) {
												setTheme("dark");
											} else {
												setTheme("light");
											}
										}}
										className="sr-only peer"
										value=""
										type="checkbox"
									/>
									<div className="w-14 h-8 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-6 before:w-6 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-6 after:h-6 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"></div>
								</label>
							</div>

							{user ? (
								<>
									{" "}
									<div
										data-tooltip-id="my-tooltip-data-html"
										data-tooltip-html={`<div class="text-center rounded-2xl"><h3> ${user?.displayName} </h3></div>`}
										data-tooltip-delay-hide={1000}
										className="avatar"
									>
										<div className="md:w-10 md:h-10 w-8 h-8 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
											<img src={user?.photoURL} />
										</div>
									</div>
									<div>
										<button
											onClick={handleLogout}
											className="btn btn-sm md:btn-md hover:btn-error btn-accent "
										>
											{" "}
											LogOut{" "}
										</button>
									</div>
								</>
							) : (
								<div className="space-x-2 flex items-center">
									<Link to={"/login"}>
										<button className="btn btn-sm md:btn-md ">Login</button>
									</Link>
									<Link to={"/register"}>
										<button className="btn btn-sm md:btn-md ">Register</button>
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>

				{/* small device content */}
				<div className="drawer-side z-[20]">
					<label
						htmlFor="my-drawer-3"
						aria-label="close sidebar"
						className="drawer-overlay"
					></label>
					<ul className="menu p-4 w-80 min-h-full bg-base-200">
						{/* Sidebar content here */}
						{navLinks}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Navbar;
