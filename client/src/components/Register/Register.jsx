/** @format */

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../../Authentication/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
	const [showPassword, setShowPassword] = useState(false);
	const { createUser, logOut } = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleRegisterForm = (e) => {
		const username = e.username;
		const email = e.email;
		const password = e.password;
		const photoUrl = e.photoUrl;

		createUser(email, password)
			.then((result) => {
				// console.log(result);
				updateProfile(result.user, {
					displayName: username,
					photoURL: photoUrl,
				});
				logOut();
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Register Successfully",
					showConfirmButton: false,
					timer: 1200,
				});
				setTimeout(() => {
					window.location.replace("/login");
				}, 1300);
			})
			.catch(() =>
				Swal.fire({
					position: "center",
					icon: "warning",
					title: "Email Already Using",
					showConfirmButton: false,
					timer: 1800,
				}),
			);
	};

	return (
		<>
			<Helmet>
				<title>  Register | Painter's hub</title>
			</Helmet>
			<div className="justify-center mt-5 gap-5 md:flex items-center">
				{/* login page login form */}
				<section className=" w-full md:w-1/2">
					<div className=" bg-gradient-to-r from-fuchsia-300 to-cyan-300 mx-auto p-10 space-y-3 rounded-xl text-gray-800 ">
						<form
							onSubmit={handleSubmit(handleRegisterForm)}
							className="flex flex-col w-full p-10 rounded shadow-lg dark:text-gray-800 space-y-2"
						>
							<div>
								<label
									htmlFor="username"
									className="self-start text-xs font-semibold"
								>
									Username
								</label>
								<input
									{...register("username", {
										required: {
											value: true,
											message: "please fill out this username  field",
										},
									})}
									id="username"
									type="text"
									placeholder="Enter Your Name"
									className="flex items-center w-full h-12 px-4 mt-2 rounded dark:text-gray-50 focus:outline-none focus:ring-2 focus:dark:border-blue-600 focus:dark:ring-blue-600"
								/>
								{errors.username && (
									<p className="text-red-500 text-start">
										{errors.username.message}{" "}
									</p>
								)}
							</div>
							<div>
								<label
									htmlFor="email"
									className="self-start mt-3 text-xs font-semibold"
								>
									Email
								</label>
								<input
									{...register("email", {
										required: {
											value: true,
											message: "please fill out this  email field",
										},
									})}
									id="email"
									type="email"
									placeholder="Enter Your Email"
									className="flex items-center w-full h-12 px-4 mt-2 rounded dark:text-gray-50 focus:outline-none focus:ring-2 focus:dark:border-blue-600 focus:dark:ring-blue-600"
								/>
								{errors.email && (
									<p className="text-red-500 text-start">
										{errors.email.message}{" "}
									</p>
								)}
							</div>
							<div>
								<label
									htmlFor="photoUrl"
									className="self-start mt-3 text-xs font-semibold"
								>
									PhotoURl
								</label>
								<input
									{...register("photoUrl", {
										required: {
											value: true,
											message: "please fill out this photoURL  field",
										},
									})}
									id="photoUrl"
									type="url"
									placeholder="Enter Your Photo Url"
									className="flex items-center w-full  h-12 px-4 mt-2 rounded dark:text-gray-50 focus:outline-none focus:ring-2 focus:dark:border-blue-600 focus:dark:ring-blue-600"
								/>
								{errors.photoUrl && (
									<p className="text-red-500 text-start">
										{errors.photoUrl.message}{" "}
									</p>
								)}
							</div>
							<div className="relative  block">
								<label
									htmlFor="password"
									className="self-start text-xs font-semibold"
								>
									Password
								</label>
								<input
									{...register("password", {
										required: {
											value: true,
											message: "please fill out this password  field ",
										},

										pattern: {
											value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
											message:
												"Password must contain at least one uppercase  & lowercase letter .",
										},

										minLength: {
											value: 6,
											message: "password must be 6 characters",
										},
									})}
									name="password"
									id="password"
									type={showPassword ? "text" : "password"}
									placeholder="Enter Your Password "
									className="flex items-center -z-50 h-12 px-4 mt-1 rounded dark:text-gray-50 focus:outline-none focus:ring-2 focus:dark:border-violet-600 w-full focus:dark:ring-violet-600"
								/>
								<span
									onClick={() => setShowPassword(!showPassword)}
									className=" absolute text-2xl right-3 top-[55%] text-red-400"
								>
									{showPassword ? <FaEye /> : <FaRegEyeSlash />}
								</span>
							</div>
							{errors.password && (
								<p className="text-red-500 text-start">
									{errors.password.message}{" "}
								</p>
							)}
							<button type="submit" className="btn w-full  hover:btn-accent">
								Register
							</button>
							<div className="flex items-center  justify-center mt-6 space-x-2 text-xs">
								<span className="dark:text-gray-600">
									already have an account ?
								</span>
								<Link
									to="/login"
									className="playfair text-sm hover:text-red-400 text-pretty font-bold link underline dark:text-gray-600"
								>
									login
								</Link>
							</div>
						</form>
					</div>
				</section>
				{/* login page img */}
				<section className="hidden md:block md:w-1-2">
					<img
						className=""
						src="https://i.postimg.cc/d3Rhc2Gz/login-img-removebg-preview.png"
						alt=""
					/>
				</section>
			</div>
			);
		</>
	);
};

export default Register;
