import { Link } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { Plus } from "lucide-react";

export default function Header() {
	const { isAuthenticated, logout } = useAuth();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		logout();
		location.reload();
	};

	return (
		<header className="fixed z-10 w-full bg-white flex justify-between items-center shadow-lg py-3 sm:py-7 px-2 sm:px-7 xl:px-[200px] 2xl:px-[350px]">
			<h1 className="text-lg sm:text-3xl text-blue-500 font-black">Jernih</h1>
			<nav>
				<ul>
					{isAuthenticated ? (
						<div className="flex gap-3">
							<Link to={"/upload"}>
								<Plus className="cursor-pointer w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md" />
							</Link>
							<li>
								<form onSubmit={handleSubmit}>
									<button className="cursor-pointer bg-red-400 hover:bg-red-600 text-white text-xs sm:text-base font-semibold py-3 px-4 rounded-md">
										Keluar
									</button>
								</form>
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
