import { Link } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { LogOut, Plus, User } from "lucide-react";

export default function Header() {
	const { isAuthenticated, logout } = useAuth();

	const handleSubmit = () => {
		logout();
		window.location.replace("/");
	};

	return (
		<header className="fixed z-10 w-full bg-white flex justify-between items-center shadow-lg py-3 sm:py-7 px-2 sm:px-7 xl:px-[200px] 2xl:px-[350px]">
			<h1 className="text-lg sm:text-3xl text-blue-500 font-black">Jernih</h1>
			<nav>
				<ul>
					{isAuthenticated ? (
						<div className="flex gap-3 items-center">
							<a href="/upload">
								<div className="bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2 xl:p-3 flex items-center justify-center cursor-pointer">
									<Plus className="w-6 h-6" />
								</div>
							</a>
							<a
								href={`/profil/${
									JSON.parse(localStorage.getItem("user") || "{}")?.id
								}`}>
								<div className="bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2 xl:p-3 flex items-center justify-center cursor-pointer">
									<User className="w-6 h-6" />
								</div>
							</a>
							<li>
								<div
									onClick={handleSubmit}
									className="bg-red-400 hover:bg-red-500 text-white rounded-md p-2 xl:p-3 flex items-center justify-center cursor-pointer">
									<LogOut className="w-6 h-6" />
								</div>
							</li>
						</div>
					) : (
						<li>
							<Link to={"/login"}>
								<button className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-base font-semibold py-3 px-4 rounded-md">
									Login
								</button>
							</Link>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
}
