import { useState, useEffect } from "react";
import { BadgeAlert, BookMarked, DropletOff, ShieldCheck } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useAuth } from "./contexts/AuthContext";
import axios from "axios";

interface PostImage {
	postId: string;
	filePath: string;
}

interface Post {
	id: string;
	userId: string;
	description: string;
	title: string;
	detailLocation: string;
	district: string;
	city: string;
	province: string;
	banner: PostImage[];
}

interface ApiResponse {
	success: boolean;
	message: string;
	responseObject: Post[];
	statusCode: number;
}

export default function Home() {
	const API_BASE = import.meta.env.VITE_API_BASE;

	const [currentSlide, setCurrentSlide] = useState(0);
	const [currentSlide2, setCurrentSlide2] = useState(0);
	const [posts, setPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const slides = [
		{ id: 1, image: "/banner1.jpg" },
		{ id: 2, image: "/banner2.jpg" },
		{ id: 3, image: "/banner3.png" },
		{ id: 4, image: "/banner4.png" },
	];

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				setLoading(true);
				const response = await axios.get(API_BASE + "/posts");
				const data: ApiResponse = await response.data;

				if (data.success && data.responseObject) {
					setPosts(data.responseObject);
				} else {
					setError("Failed to fetch posts");
				}
			} catch (err) {
				setError("Error fetching data: " + (err as Error).message);
			} finally {
				setLoading(false);
			}
		};

		fetchPosts();
	}, []);

	const transformedSlides = posts.map((post) => ({
		id: post.id,
		image:
			post.banner && post.banner.length > 0
				? post.banner
				: "/placeholder-image.jpg",
		title: post.title,
		description: post.description,
		contact: `${post.detailLocation}, ${post.district}, ${post.city}, ${post.province}`,
		buttons: [
			{
				text: "Lihat detail",
				href: `/post/${post.id}`,
			},
		],
	}));

	const slides2 =
		transformedSlides.length > 0
			? transformedSlides.slice(0, 3)
			: [
					{
						id: "1",
						image: "/pengaduan1.jpg",
						title: "Sumur keruh dan berlumpur",
						description:
							"Sumur di daerah ini menghasilkan air yang keruh dan berlumpur, tidak layak digunakan untuk mandi, mencuci, apalagi dikonsumsi.",
						contact: "Support +62 813-1391-5594 (Telepon & WhatsApp)",
						buttons: [
							{
								text: "Lihat detail",
								href: "/post/post1",
							},
						],
					},
			  ];

	const hasMoreThanThreePosts = transformedSlides.length > 3;

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 4000);

		return () => clearInterval(interval);
	}, [slides.length]);

	useEffect(() => {
		if (slides2.length > 0) {
			const interval = setInterval(() => {
				setCurrentSlide2((prev) => (prev + 1) % slides2.length);
			}, 6000);

			return () => clearInterval(interval);
		}
	}, [slides2.length]);

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
	};

	const goToSlide2 = (index: number) => {
		setCurrentSlide2(index);
	};

	const currentSlideData2 = slides2[currentSlide2];

	const { isAuthenticated } = useAuth();

	return (
		<>
			<main className="w-full h-dvh space-y-10 sm:space-y-32">
				<Header />
				<section className="pt-20 sm:pt-36 px-2 sm:px-7 xl:px-[200px] 2xl:px-[350px]">
					{isAuthenticated && (
						<h1 className="text-lg sm:text-3xl text-zinc-800 font-bold">
							Selamat datang{" "}
							{JSON.parse(localStorage.getItem("user") || "{}")?.fullname} 👋
						</h1>
					)}
					<div className="mt-5 relative w-full">
						<div className="relative h-[100px] sm:h-[200px] lg:h-96 overflow-hidden rounded-sm sm:rounded-2xl shadow-2xl">
							{slides.map((slide, index) => (
								<div
									key={slide.id}
									className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
										index === currentSlide
											? "translate-x-0"
											: index < currentSlide
											? "-translate-x-full"
											: "translate-x-full"
									}`}>
									<img
										src={slide.image}
										alt={`Banner ${slide.id}`}
										className="w-full h-full object-cover"
									/>
								</div>
							))}
						</div>
						<div className="flex justify-center mt-6 space-x-3">
							{slides.map((_, index) => (
								<button
									key={index}
									onClick={() => goToSlide(index)}
									className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
										index === currentSlide
											? "bg-blue-500 hover:bg-blue-700 scale-125"
											: "bg-gray-300 hover:bg-gray-400"
									}`}
								/>
							))}
						</div>
					</div>
				</section>
				<section className="flex flex-row flex-wrap justify-around sm:justify-evenly items-center px-2 sm:px-7 xl:px-[200px] 2xl:px-[350px] gap-7 sm:gap-20 lg:gap-0">
					<div className="w-[120px] sm:w-[200px] flex flex-col items-center gap-5">
						<BookMarked className="w-7 sm:w-14 h-7 sm:h-14 text-blue-500" />
						<p className="text-center text-xs sm:text-base">
							Membuat filter air sederhana
						</p>
						<a href="/membuat-filter-air-sederhana">
							<button className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-base font-semibold py-3 px-4 rounded-md">
								Kepoin disini
							</button>
						</a>
					</div>
					<div className="w-[120px] sm:w-[200px] flex flex-col items-center gap-5">
						<DropletOff className="w-7 sm:w-14 h-7 sm:h-14 text-blue-500" />
						<p className="text-center text-xs sm:text-base">
							Air kamu layak pakai atau tidak?
						</p>
						<a href="/air-kamu-layak-pakai-atau-tidak">
							<button className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-base font-semibold py-3 px-4 rounded-md">
								Kepoin disini
							</button>
						</a>
					</div>
					<div className="w-[120px] sm:w-[200px] flex flex-col items-center gap-5">
						<ShieldCheck className="w-7 sm:w-14 h-7 sm:h-14 text-blue-500" />
						<p className="text-center text-xs sm:text-base">
							Cara menyimpan air bersih agar aman
						</p>
						<a href="/cara-menyimpan-air-bersih-agar-aman">
							<button className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-base font-semibold py-3 px-4 rounded-md">
								Kepoin disini
							</button>
						</a>
					</div>
					<div className="w-[120px] sm:w-[200px] flex flex-col items-center gap-5">
						<BadgeAlert className="w-7 sm:w-14 h-7 sm:h-14 text-blue-500" />
						<p className="text-center text-xs sm:text-base">
							Dampak air tercemar bagi kehidupan
						</p>
						<a href="/dampak-air-tercemar-bagi-kehidupan">
							<button className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-base font-semibold py-3 px-4 rounded-md">
								Kepoin disini
							</button>
						</a>
					</div>
				</section>
				<section className="flex flex-col items-end px-2 sm:px-7 xl:px-[200px] 2xl:px-[350px]">
					{hasMoreThanThreePosts && (
						<a
							className="text-lg font-semibold text-white bg-blue-500 hover:bg-blue-700 px-4 py-3 rounded-md"
							href="/semua-konten">
							Lihat lebih
						</a>
					)}
					<div className="mt-5 relative w-full max-w-7xl mx-auto">
						{loading && (
							<div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-r from-blue-800 to-blue-600 flex items-center justify-center">
								<div className="text-white text-center">
									<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
									<p>Loading posts...</p>
								</div>
							</div>
						)}

						{error && !loading && (
							<div className="relative h-64 overflow-hidden rounded-2xl shadow-2xl bg-red-500 flex items-center justify-center">
								<div className="text-white text-center">
									<p>Error: {error}</p>
									<button
										onClick={() => window.location.reload()}
										className="mt-4 px-4 py-2 bg-white text-red-500 rounded-lg hover:bg-gray-100">
										Retry
									</button>
								</div>
							</div>
						)}

						{!loading && !error && slides2.length > 0 && (
							<>
								<div className="relative h-max overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-r from-blue-800 to-blue-600">
									<div className="hidden h-[400px] lg:flex flex-row">
										<div className="w-1/2 h-full relative overflow-hidden">
											{slides2.map((slide, index) => (
												<div
													key={slide.id}
													className={`absolute inset-0 transition-all duration-500 ease-in-out ${
														index === currentSlide2
															? "opacity-100 scale-100"
															: "opacity-0 scale-105"
													}`}>
													<img
														src={slide.image as string}
														alt={`Banner ${slide.id}`}
														className="w-full h-full object-cover"
														onError={(e) => {
															const target = e.target as HTMLImageElement;
															target.src = "/placeholder-image.jpg";
														}}
													/>
												</div>
											))}
										</div>
										<div className="w-1/2 p-8 text-white flex flex-col justify-center gap-7">
											<h2 className="text-2xl font-bold leading-tight">
												{currentSlideData2?.title}
											</h2>
											<div className="relative max-h-[100px] overflow-hidden mask-fade">
												<p className="text-blue-100 leading-relaxed line-clamp-4">
													{currentSlideData2?.description}
												</p>
											</div>
											<p className="text-blue-200 text-sm">{currentSlideData2?.contact}</p>
											<div className="flex space-x-4">
												{currentSlideData2?.buttons?.map((button, index) => (
													<a
														href={button.href}
														key={index}
														className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-white text-blue-600 hover:bg-gray-100">
														{button.text}
													</a>
												))}
											</div>
										</div>
									</div>

									<div className="flex lg:hidden flex-col h-full">
										<div className="w-full relative overflow-hidden h-64 sm:h-80">
											{slides2.map((slide, index) => (
												<div
													key={slide.id}
													className={`absolute inset-0 transition-all duration-500 ease-in-out ${
														index === currentSlide2
															? "opacity-100 scale-100"
															: "opacity-0 scale-105"
													}`}>
													<img
														src={slide.image as string}
														alt={`Banner ${slide.id}`}
														className="w-full h-full object-cover"
														onError={(e) => {
															const target = e.target as HTMLImageElement;
															target.src = "/placeholder-image.jpg";
														}}
													/>
												</div>
											))}
										</div>
										<div className="w-full p-6 sm:p-8 text-white flex flex-col justify-center gap-5 sm:gap-7">
											<h2 className="text-lg sm:text-2xl font-bold leading-tight">
												{currentSlideData2?.title}
											</h2>
											<p className="text-blue-100 leading-relaxed text-sm sm:text-base">
												{currentSlideData2?.description}
											</p>
											<p className="text-blue-200 text-xs sm:text-sm">
												{currentSlideData2?.contact}
											</p>
											<div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
												{currentSlideData2?.buttons?.map((button, index) => (
													<a
														href={button.href}
														key={index}
														className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-center font-semibold transition-all duration-300 text-sm sm:text-base bg-white text-blue-600 hover:bg-gray-100">
														{button.text}
													</a>
												))}
											</div>
										</div>
									</div>
								</div>
								<div className="flex justify-center mt-6 space-x-3">
									{slides2.map((_, index) => (
										<button
											key={index}
											onClick={() => goToSlide2(index)}
											className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
												index === currentSlide2
													? "bg-blue-500 scale-125"
													: "bg-gray-300 hover:bg-gray-400"
											}`}
										/>
									))}
								</div>
							</>
						)}
						{!loading && !error && slides2.length === 0 && (
							<div className="relative h-64 overflow-hidden rounded-2xl shadow-2xl bg-gray-500 flex items-center justify-center">
								<div className="text-white text-center">
									<p>No posts available</p>
								</div>
							</div>
						)}
					</div>
				</section>
				<Footer />
			</main>
		</>
	);
}
