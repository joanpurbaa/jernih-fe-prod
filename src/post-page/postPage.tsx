import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import postData from "../data/postData";

export default function PostPage() {
	const { slug } = useParams();
	const data = postData[slug as keyof typeof postData];

	return (
		<>
			<Header />
			<section className="py-20 sm:py-36 px-2 sm:px-7 xl:px-[200px] 2xl:px-[350px] space-y-10 md:space-y-15">
				<p className="text-sm sm:text-xl">
					{data.breadcrumbs.map((item, index) => (
						<span key={index}>
							<a href={item.href}>{item.label}</a>
							{index < data.breadcrumbs.length - 1 && " / "}
						</span>
					))}
				</p>
				<img
					className="w-full h-[200px] md:h-[400px] rounded-2xl object-cover"
					src={data.mainImage.src}
					alt={data.mainImage.alt}
				/>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h1 className="text-xl md:text-3xl text-blue-500 font-bold">
						{data.content.title}
					</h1>
					<p className="text-xs sm:text-sm md:text-xl">{data.content.description}</p>
				</section>
				<section className="grid grid-cols-12 gap-2 sm:gap-5">
					{data.galleryImages.map((img, index) => (
						<img
							key={index}
							className="col-span-12 sm:col-span-4 h-full object-cover rounded-md"
							src={img.src}
							alt={img.alt}
						/>
					))}
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">🗺️ Lokasi</h2>
					<iframe
						className="w-full h-[200px] sm:h-[400px]"
						src={data.mapEmbedUrl}
						loading="lazy"></iframe>
				</section>
				<section className="grid grid-cols-12 gap-2 sm:gap-5">
					{data.actionButtons.map((btn, index) => (
						<button
							key={index}
							className={`cursor-pointer col-span-12 sm:col-span-6 text-xs sm:text-base font-semibold ${btn.bgColor} ${btn.textColor} ${btn.hover} border-2 ${btn.borderColor} rounded-md p-3`}>
							{btn.label}
						</button>
					))}
				</section>
			</section>
			<Footer />
		</>
	);
}
