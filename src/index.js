import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Project from "./pages/Project";
import Resume from "./pages/Resume";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "projects",
		element: <Project />,
	},

	{
		path: "resume",
		element: <Resume />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
