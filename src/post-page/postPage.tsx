import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";

type PostImageDataProps = {
	filePath: string;
};

type DataProps = {
	title: string;
	description: string;
	province: string;
	city: string;
	district: string;
	contactPerson: string;
	postsImagesData: PostImageDataProps[];
};

export default function PostPage() {
	const [data, setData] = useState<DataProps>();
	const { slug } = useParams();

	useEffect(() => {
		axios
			.get(`https://jernih-be.vercel.app/v1/posts/${slug}`)
			.then((result) => setData(result.data.responseObject));
	}, [slug]);

	return (
		<>
			<Header />
			<section className="py-20 sm:py-36 px-2 sm:px-7 xl:px-[200px] 2xl:px-[350px] space-y-10 md:space-y-15">
				<p className="text-sm sm:text-xl">
					<a className="hover:underline" href="/">
						Beranda
					</a>{" "}
					/ {data && data.title}
				</p>
				<img
					className="w-full h-[200px] md:h-[400px] rounded-2xl object-cover"
					src={data && data.postsImagesData[0].filePath}
				/>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<div>
						<h1 className="text-xl md:text-3xl text-blue-500 font-bold">
							{data && data.title}
						</h1>
						<p>
							{data && data.province}, {data && data.city}, {data && data.district}
						</p>
					</div>
					<p className="text-xs sm:text-sm md:text-xl">{data && data.description}</p>
				</section>
				<section className="grid grid-cols-12 gap-2 sm:gap-5">
					{data &&
						data.postsImagesData.map((img, index) => (
							<img
								key={index}
								className="col-span-12 sm:col-span-4 h-full object-cover rounded-md"
								src={img.filePath}
							/>
						))}
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">🗺️ Lokasi</h2>
					<iframe
						className="w-full h-[200px] sm:h-[400px]"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.9401699168777!2d106.63184131006868!3d-6.178047011406357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8d362bf3b57%3A0x943ee82361ebf9d8!2sJl.%20Kiasnawi%20No.14%2C%20RT.001%2FRW.003%2C%20Sukarasa%2C%20Kec.%20Tangerang%2C%20Kota%20Tangerang%2C%20Banten%2015111!5e0!3m2!1sid!2sid!4v1749919209570!5m2!1sid!2sid"
						loading="lazy"></iframe>
				</section>
				<section className="grid grid-cols-12 gap-2 sm:gap-5">
					<a
						target="_blank"
						href={`https://wa.me/${data && data.contactPerson}`}
						className="text-center cursor-pointer col-span-12 sm:col-span-6 text-xs sm:text-base font-semibold bg-blue-500 hover:bg-blue-700 text-white border-2 border-blue-500 rounded-md p-3">
						Narahubung
					</a>
					<a className="text-center cursor-pointer col-span-12 sm:col-span-6 text-xs sm:text-base font-semibold bg-white hover:bg-blue-500 text-blue-500 hover:text-white border-2 border-blue-500 rounded-md p-3">
						Donasi
					</a>
				</section>
			</section>
			<Footer />
		</>
	);
}
