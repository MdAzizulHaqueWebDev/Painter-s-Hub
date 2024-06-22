/** @format */

import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Home from "../pages/Home/Home";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import AllArtsAndCraftsItems from "../pages/AllArtsAndCraftsItem/AllArtsAndCraftsItems";
import MyArtAndCraftList from "../pages/MyArtAndCraftsList/MyArtAndCraftList";
import UserItemUpdate from "../pages/UpdatePage/UserItemUpdate";
import Details from "../pages/Details/Details";
import LandscapePainting from "../pages/SubcategoryItems/LandscapePainting";
import PortraitDrawing from "../pages/SubcategoryItems/PortraitDrawing";
import WatercolorPainting from "../pages/SubcategoryItems/WatercolorPainting";
import OilPainting from "../pages/SubcategoryItems/OilPainting";
import CharcoalSkectcihing from "../pages/SubcategoryItems/CharcoalSkectcihing";
import CartoonDrawing from "../pages/SubcategoryItems/CartoonDrawing";
import SubcategoryItem from "../pages/SubcategoryItems/SubcategoryItem";
import ProtectedRoute from "./ProtectedRoute";

const routes = createBrowserRouter([
	{
		errorElement: <ErrorPage />,
	},
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/add-craft-item",
				element: <AddCraftItem />,
			},
			{
				path: "/all-arts-and-crafts",
				loader:()=>fetch('https://assign-ment-10-server-side.vercel.app/all-arts-and-crafts'),
				element: <AllArtsAndCraftsItems />,
			},
			{
				path: "/my-art-and-craft",
				loader:()=>fetch('https://assign-ment-10-server-side.vercel.app/my-art-and-craft'),
				element: <MyArtAndCraftList />,
			},
			{
				path: "/itemUpdate/:id",
				loader: ({ params }) =>
					fetch(
						`https://assign-ment-10-server-side.vercel.app/usersAddedData/${params.id}`,
					),
				element: (
					<ProtectedRoute>
						{" "}
						<UserItemUpdate />
					</ProtectedRoute>
				),
			},
			{
				path: "/details/:id",
				loader: ({ params }) =>
					fetch(
						`https://assign-ment-10-server-side.vercel.app/details/${params.id}`,
					),
				element: (
					<ProtectedRoute>
						{" "}
						<Details />{" "}
					</ProtectedRoute>
				),
			},
			{
				path: "/subcategoryItem/:id",
				loader: ({ params }) =>
					fetch(
						`https://assign-ment-10-server-side.vercel.app/allArtsAndCrafts/${params.id}`,
					),
				element: <SubcategoryItem />,
			},
			{
				path: "/landscape-painting",
				element: <LandscapePainting />,
			},
			{
				path: "/portrait-drawing",
				element: <PortraitDrawing />,
			},
			{
				path: "/watercolour-painting",
				element: <WatercolorPainting />,
			},
			{
				path: "/oil-painting",
				element: <OilPainting />,
			},
			{
				path: "/charcoal-sketching",
				element: <CharcoalSkectcihing />,
			},
			{
				path: "/cartoon-drawing",
				element: <CartoonDrawing />,
			},
		],
	},
]);
export default routes;
