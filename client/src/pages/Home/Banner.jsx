/** @format */

import { Swiper, SwiperSlide } from "swiper/react";
import { useTypewriter } from "react-simple-typewriter";
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
	const [text] = useTypewriter({
		words: ["Painter's", "Hub"],
		loop: 0,
	});
	const [text2] = useTypewriter({
		words: [
			"Step into",
			" a world where colors",
			" dance on canvas and stories come",
			" to life with each",
			" brushstroke. Welcome to",
			"Painter's Hub",
		],
		loop: 0,
	});
	return (
		<section className="relative -z-50">
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img
						className="mx-auto md:h-[30em] w-11/12 rounded-2xl"
						src="https://i.postimg.cc/L8vQ4v3F/Art-img.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="mx-auto w-11/12  md:h-[30em] rounded-2xl"
						src="https://i.postimg.cc/XNcf0qgT/slider-img-2.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="mx-auto w-11/12  md:h-[30em] rounded-2xl"
						src="https://i.postimg.cc/cJbDwHzD/b196493079f6b27bf15f76e75b0a42ee.jpg"
						alt=""
					/>
				</SwiperSlide>
			</Swiper>
			<div className="absolute text-emerald-400 top-[25%] left-[15%] z-50 text-2xl lg:text-5xl font-extrabold playfair md:text-4xl drop-shadow-2xl decoration-pink-500">
				Welcome Our {text}
				<p className="text-3xl md:block hidden my-8">{text2}</p>
			</div>
		</section>
	);
};

export default Banner;
