import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";

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

export default function SemuaKonten() {
	const API_BASE = import.meta.env.VITE_API_BASE;

	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await axios.get(API_BASE + "/posts");
			const data: ApiResponse = await response.data;

			if (data.success && data.responseObject) {
				setPosts(data.responseObject);
			}
		};

		fetchPosts();
	}, []);

	return (
		<>
			<Header />
			<section className="py-20 sm:py-36 px-2 sm:px-7 xl:px-[200px] 2xl:px-[350px]">
				<p className="text-sm sm:text-xl">
					<a className="hover:underline" href="/">
						Beranda
					</a>{" "}
					/ Semua Konten
				</p>
				<section className="mt-5 grid grid-cols-12 text-zinc-800 gap-5">
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
								</div>
							</div>
						))}
				</section>
			</section>
		</>
	);
}
