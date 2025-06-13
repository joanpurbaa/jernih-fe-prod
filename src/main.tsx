import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./auth-page/login.tsx";
import Register from "./auth-page/register.tsx";
import Edukasi1 from "./education-page/edukasi1.tsx";
import Edukasi2 from "./education-page/edukasi2.tsx";
import Edukasi3 from "./education-page/edukasi3.tsx";
import Edukasi4 from "./education-page/edukasi4.tsx";
import PostPage from "./post-page/postPage.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import PublicRoute from "./components/PublicRoute.tsx";
import Upload from "./upload-page/upload.tsx";

axios.defaults.withCredentials = true;

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: (
			<PublicRoute>
				<Login />
			</PublicRoute>
		),
	},
	{
		path: "/register",
		element: (
			<PublicRoute>
				<Register />
			</PublicRoute>
		),
	},
	{
		path: "/membuat-filter-air-sederhana",
		element: <Edukasi1 />,
	},
	{
		path: "/air-kamu-layak-pakai-atau-tidak",
		element: <Edukasi2 />,
	},
	{
		path: "/cara-menyimpan-air-bersih-agar-aman",
		element: <Edukasi3 />,
	},
	{
		path: "/dampak-air-tercemar-bagi-kehidupan",
		element: <Edukasi4 />,
	},
	{
		path: "/post/:slug",
		element: <PostPage />,
	},
	{
		path: "/upload",
		element: <Upload />,
	},
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={queryClient}>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</QueryClientProvider>
);
