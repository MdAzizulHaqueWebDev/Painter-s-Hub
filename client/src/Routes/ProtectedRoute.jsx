/** @format */

import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";

const ProtectedRoute = ({ children }) => {
	const { pathname } = useLocation();

	const { user, loader } = useContext(AuthContext);
	if (loader) {
		return <Loader/>
	}
	if (user) {
		return children;
	}
	return <Navigate state={pathname} to={"/login"}></Navigate>;
};

export default ProtectedRoute;
