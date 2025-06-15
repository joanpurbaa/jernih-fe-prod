import axios from "axios";
import Header from "../components/Header";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import { CircleAlert } from "lucide-react";

interface Post {
	id: string;
	userId: string;
	description: string;
	title: string;
	detailLocation: string;
	district: string;
	city: string;
	province: string;
	banner: string;
}

interface ApiResponse {
	success: boolean;
	message: string;
	responseObject: Post[];
	statusCode: number;
}

export default function Profil() {
	const [dangerPopUp, setDangerPopUp] = useState<boolean>(false);
	const [targetId, setTargetId] = useState<string>("");

	const { isAuthenticated } = useAuth();

	const token = localStorage.getItem("token") || "";

	const API_BASE = import.meta.env.VITE_API_BASE;

	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await axios.get(API_BASE + "/posts-me", {
				headers: {
					authorization: token,
				},
			});
			const data: ApiResponse = await response.data;

			if (data.success && data.responseObject) {
				setPosts(data.responseObject);
			}
		};

		fetchPosts();
	}, []);

	const handleDelete = async () => {
		await axios.delete(API_BASE + "/posts/" + targetId);
		location.reload();
	};

	console.log(posts);

	return (
		<>
			<Header />
			<section className="pt-20 sm:pt-36 px-2 sm:px-7 xl:px-[200px] 2xl:px-[350px]">
				{isAuthenticated && (
					<>
						<h1 className="text-lg sm:text-3xl text-zinc-800 font-bold">
							Selamat datang{" "}
							{JSON.parse(localStorage.getItem("user") || "{}")?.fullname} 👋
						</h1>
						<p className="mt-2 text-xs sm:text-base">
							Berikut adalah semua postingan yang pernah kamu upload
						</p>
					</>
				)}
				<section className="mt-10 grid grid-cols-12 text-zinc-800 gap-5">
					{posts.length > 0 &&
						posts.map((post, index) => (
							<div
								key={index}
								className="col-span-12 sm:col-span-6 xl:col-span-4 bg-gradient-to-br from-blue-700 to-blue-500 text-white rounded-lg">
								<img
									className="w-full h-[200px] rounded-t-lg object-cover"
									src={post.banner}
									alt=""
								/>
								<div className="flex flex-col p-5">
									<h1 className="text-sm sm:text-lg font-semibold">{post.title}</h1>
									<p className="mt-3 mb-7 text-xs sm:text-base line-clamp-3 mask-fade">
										{post.description}
									</p>
									<p className="text-xs sm:text-base">
										{post.province}, {post.city}, {post.district}
									</p>
									<a
										href={`/post/${post.id}`}
										className="mt-3 w-full text-center text-blue-500 text-xs sm:text-base font-semibold bg-white hover:bg-gray-200 p-3 rounded-md">
										Lihat Detail
									</a>
									<div
										onClick={() => {
											setDangerPopUp(true);
											setTargetId(post.id);
										}}
										className="cursor-pointer mt-3 w-full text-center text-white text-xs sm:text-base font-semibold bg-red-400 hover:bg-red-300 p-3 rounded-md">
										Hapus
									</div>
								</div>
							</div>
						))}
				</section>
			</section>

			{dangerPopUp && (
				<section className="absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center bg-black/50">
					<div className="w-[400px] flex flex-col items-center bg-white rounded-md p-5">
						<CircleAlert className="w-30 h-30 text-red-400" />
						<p className="my-5 text-xs sm:text-base">
							Apakah kamu yakin untuk menghapus ini?
						</p>
						<div className="mt-5 w-full flex gap-3">
							<button
								onClick={() => setDangerPopUp(false)}
								className="cursor-pointer w-full bg-blue-500 hover:bg-blye-600 text-white font-semibold p-3 rounded-md">
								Batal
							</button>
							<button
								onClick={() => handleDelete()}
								className="cursor-pointer w-full bg-red-400 hover:bg-red-600 text-white font-semibold p-3 rounded-md">
								Hapus
							</button>
						</div>
					</div>
				</section>
			)}
		</>
	);
}
