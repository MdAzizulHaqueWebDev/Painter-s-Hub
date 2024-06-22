/** @format */

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
	return (
		<div >
			{/* navbar section */}
			<section className="fixed w-full z-50 top-0  bg-gradient-to-r from-fuchsia-300 to-cyan-300">
				<div className="rubik  text-black h-14  font-bold text-xl  backdrop-filter backdrop-blur-[21px] backdrop-saturate-[200%] bg-[rgba(255,_255,_255,_0.54)] border border-[rgba(209,213,219,0.3)]">
					<Navbar />
				</div>
			</section>
			{/* outlet section */}
			<section className="mt-16">
				<Outlet />
			</section>
			{/* footer section */}
			<section>
                <Footer/>
            </section>
		</div>
	);
};

export default Root;
