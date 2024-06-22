/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Authentication/AuthProvider";
import 'sweetalert2/src/sweetalert2.scss'
import 'react-tooltip/dist/react-tooltip.css'
import 'swiper/css';
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HelmetProvider>
			<AuthProvider>
				<RouterProvider router={routes} />
			</AuthProvider>
		</HelmetProvider>
	</React.StrictMode>,
);
