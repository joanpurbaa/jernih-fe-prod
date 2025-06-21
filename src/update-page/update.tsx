import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Dropzone from "react-dropzone";
import { useState, useRef, useEffect, type FormEvent } from "react";
import {
	UploadIcon,
	ChevronDown,
	MessageSquareWarning,
	XIcon,
} from "lucide-react";
import { provinces } from "../data/provinces";
import { citiesByProvince } from "../data/citiesByProvince";
import { districtsByCity } from "../data/districtsByCity";
import ModalPopUp from "../components/ModalPopUp";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useParams } from "react-router";
import axios from "axios";
import { updateApi } from "../services/update";

interface Province {
	provinces_id: number;
	name: string;
}

interface City {
	city_id: number;
	provinces_id: number;
	name: string;
}

interface District {
	districts_id: number;
	city_id: number;
	name: string;
}

type PostImageDataProps = {
	id: string;
	postId: string;
	filePath: string;
};

type DataProps = {
	id: string;
	banner: string;
	title: string;
	description: string;
	province: string;
	city: string;
	district: string;
	contactPerson: string;
	postsImagesData: PostImageDataProps[];
	embedMap: string;
	detailLocation: string;
	donationLink: string;
};

export default function Update() {
	const [data, setData] = useState<DataProps>();
	const { slug } = useParams();

	useEffect(() => {
		axios
			.get(`https://jernih-be.vercel.app/v1/posts/${slug}`)
			.then((result) => setData(result.data.responseObject));
	}, [slug]);

	const [toolip, setToolip] = useState<boolean>(true);

	const [banner, setBanner] = useState<File | null>(null);
	const [bannerPreview, setBannerPreview] = useState<string>();
	const [bannerFileName, setBannerFileName] = useState<string>("");
	const [bannerErrorType, setBannerErrorType] = useState<boolean>(false);
	const [title, setTitle] = useState<string>("");
	const [detailLocation, setDetailLocation] = useState<string>("");
	const [googleMapsLocation, setGoogleMapsLocation] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [documentation1, setDocumentation1] = useState<File>();
	const [documentation1Preview, setDocumentation1Preview] = useState<string>("");
	const [documentation1FileName, setDocumentation1FileName] =
		useState<string>("");
	const [documentation1ErrorType, setDocumentation1ErrorType] =
		useState<boolean>(false);
	const [documentation2, setDocumentation2] = useState<File>();
	const [documentation2Preview, setDocumentation2Preview] = useState<string>("");
	const [documentation2FileName, setDocumentation2FileName] =
		useState<string>("");
	const [documentation2ErrorType, setDocumentation2ErrorType] =
		useState<boolean>(false);
	const [documentation3, setDocumentation3] = useState<File>();
	const [documentation3Preview, setDocumentation3Preview] = useState<string>("");
	const [documentation3FileName, setDocumentation3FileName] =
		useState<string>("");
	const [documentation3ErrorType, setDocumentation3ErrorType] =
		useState<boolean>(false);
	const [phoneNumber, setPhoneNumber] = useState<string>("");
	const [donationLink, setDonationUrl] = useState<string>("");

	const [isProvinceOpen, setIsProvinceOpen] = useState(false);
	const [isCityOpen, setIsCityOpen] = useState(false);
	const [isDistrictOpen, setIsDistrictOpen] = useState(false);

	const [selectedProvinceId, setSelectedProvinceId] = useState("");
	const [selectedCityId, setSelectedCityId] = useState("");
	const [, setSelectedDistrictId] = useState("");

	const [selectedProvinceName, setSelectedProvinceName] = useState("");
	const [selectedCityName, setSelectedCityName] = useState("");
	const [selectedDistrictName, setSelectedDistrictName] = useState("");

	const [provinceSearch, setProvinceSearch] = useState("");
	const [citySearch, setCitySearch] = useState("");
	const [districtSearch, setDistrictSearch] = useState("");

	const provinceRef = useRef<HTMLDivElement>(null);
	const cityRef = useRef<HTMLDivElement>(null);
	const districtRef = useRef<HTMLDivElement>(null);

	const [isReplacingDoc1, setIsReplacingDoc1] = useState(false);
	const [isReplacingDoc2, setIsReplacingDoc2] = useState(false);
	const [isReplacingDoc3, setIsReplacingDoc3] = useState(false);

	useEffect(() => {
		if (data) {
			setTitle(data.title || "");
			setDetailLocation(data.detailLocation || "");
			setGoogleMapsLocation(data.embedMap || "");
			setDescription(data.description || "");
			setPhoneNumber(data.contactPerson || "");
			setDonationUrl(data.donationLink || "");

			setSelectedProvinceName(data.province || "");
			setSelectedCityName(data.city || "");
			setSelectedDistrictName(data.district || "");
		}
	}, [data]);

	const formComplete =
		(banner || data?.banner) &&
		!bannerErrorType &&
		title &&
		detailLocation &&
		googleMapsLocation &&
		description &&
		(documentation1 || data?.postsImagesData[0]) &&
		!documentation1ErrorType &&
		(documentation2 || data?.postsImagesData[1]) &&
		!documentation2ErrorType &&
		(documentation3 || data?.postsImagesData[2]) &&
		!documentation3ErrorType &&
		phoneNumber && donationLink;

	const filteredProvinces = provinces.filter((prov: Province) =>
		prov.name.toLowerCase().includes(provinceSearch.toLowerCase())
	);

	const filteredCities = selectedProvinceId
		? citiesByProvince
				.filter((city: City) => city.provinces_id === parseInt(selectedProvinceId))
				.filter((city: City) =>
					city.name.toLowerCase().includes(citySearch.toLowerCase())
				)
		: [];

	const filteredDistricts = selectedCityId
		? districtsByCity
				.filter(
					(district: District) => district.city_id === parseInt(selectedCityId)
				)
				.filter((district: District) =>
					district.name.toLowerCase().includes(districtSearch.toLowerCase())
				)
		: [];

	const navigate = useNavigate();

	const mutation = useMutation({
		mutationFn: updateApi,
		onSuccess: () => {
			navigate("/post/" + slug);
		},
		onError: (error: AxiosError<{ message: string }>) => {
			console.log(error ?? "Terjadi kesalahan");
		},
	});

	useEffect(() => {
		if (toolip || mutation.isPending) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [toolip, mutation.isPending]);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			const target = event.target as Node;
			if (provinceRef.current && !provinceRef.current.contains(target)) {
				setIsProvinceOpen(false);
			}
			if (cityRef.current && !cityRef.current.contains(target)) {
				setIsCityOpen(false);
			}
			if (districtRef.current && !districtRef.current.contains(target)) {
				setIsDistrictOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	function imageTypeValidation(type: string): boolean {
		return ["jpg", "png", "jpeg"].includes(type.split("/")[1]?.toLowerCase());
	}

	function handleBanner(files: File[]) {
		const file = files[0];
		const isValidType = imageTypeValidation(file.type);

		setBannerFileName(file.name);
		setBannerErrorType(!isValidType);

		if (isValidType) {
			setBanner(file);
			setBannerPreview(URL.createObjectURL(file));
		} else {
			setBanner(null);
			setBannerPreview("");
		}
	}

	function handleDokumentasi1(files: File[]) {
		const file = files[0];
		const isValidType = imageTypeValidation(file.type);

		setDocumentation1FileName(file.name);
		setDocumentation1ErrorType(!isValidType);

		if (isValidType) {
			setDocumentation1(file);
			setDocumentation1Preview(URL.createObjectURL(file));
		} else {
			setDocumentation1(undefined);
			setDocumentation1Preview("");
		}
	}

	function handleDokumentasi2(files: File[]) {
		const file = files[0];
		const isValidType = imageTypeValidation(file.type);

		setDocumentation2FileName(file.name);
		setDocumentation2ErrorType(!isValidType);

		if (isValidType) {
			setDocumentation2(file);
			setDocumentation2Preview(URL.createObjectURL(file));
		} else {
			setDocumentation2(undefined);
			setDocumentation2Preview("");
		}
	}

	function handleDokumentasi3(files: File[]) {
		const file = files[0];
		const isValidType = imageTypeValidation(file.type);

		setDocumentation3FileName(file.name);
		setDocumentation3ErrorType(!isValidType);

		if (isValidType) {
			setDocumentation3(file);
			setDocumentation3Preview(URL.createObjectURL(file));
		} else {
			setDocumentation3(undefined);
			setDocumentation3Preview("");
		}
	}

	function selectProvince(province: Province) {
		setSelectedProvinceId(province.provinces_id.toString());
		setSelectedProvinceName(province.name);

		setSelectedCityId("");
		setSelectedCityName("");
		setSelectedDistrictId("");
		setSelectedDistrictName("");

		setIsProvinceOpen(false);
		setProvinceSearch("");
	}

	function selectCity(city: City) {
		setSelectedCityId(city.city_id.toString());
		setSelectedCityName(city.name);

		setSelectedDistrictId("");
		setSelectedDistrictName("");

		setIsCityOpen(false);
		setCitySearch("");
	}

	function selectDistrict(district: District) {
		setSelectedDistrictId(district.districts_id.toString());
		setSelectedDistrictName(district.name);
		setIsDistrictOpen(false);
		setDistrictSearch("");
	}

	const token = localStorage.getItem("token") || "";

	function handleSubmit(e: FormEvent) {
		e.preventDefault();

		console.log("Form data before submit:", {
			title,
			detailLocation,
			googleMapsLocation,
			description,
			phoneNumber,
			donationLink,
			selectedProvinceName,
			selectedCityName,
			selectedDistrictName,
		});

		if (
			bannerErrorType ||
			documentation1ErrorType ||
			documentation2ErrorType ||
			documentation3ErrorType
		) {
			alert(
				"Mohon perbaiki file yang memiliki tipe tidak valid sebelum mengunggah."
			);
			return;
		}

		const formData = new FormData();

		if (banner && !bannerErrorType) {
			formData.append("banner", banner);
		}

		formData.append("title", title || "");
		formData.append("province", selectedProvinceName || "");
		formData.append("city", selectedCityName || "");
		formData.append("district", selectedDistrictName || "");
		formData.append("detailLocation", detailLocation || "");
		formData.append("embedMap", googleMapsLocation || "");
		formData.append("description", description || "");
		formData.append("contactPerson", phoneNumber || "");
		formData.append("donationLink", donationLink || "");

		const documentations = [];
		if (documentation1 && !documentation1ErrorType)
			documentations.push(documentation1);
		if (documentation2 && !documentation2ErrorType)
			documentations.push(documentation2);
		if (documentation3 && !documentation3ErrorType)
			documentations.push(documentation3);

		documentations.forEach((doc) => {
			formData.append("documentations", doc);
		});

		mutation.mutate({ token, formData, id: slug || "" });
	}

	return (
		<>
			<section className={`overflow-hidden`}>
				<header className="flex justify-between items-center shadow-lg py-3 sm:py-7 px-2 sm:px-7 xl:px-[200px] 2xl:px-[350px]">
					<h1 className="text-lg sm:text-3xl text-blue-500 font-black">Jernih</h1>
					<div
						onClick={() => setToolip(true)}
						className="bg-blue-500 hover:bg-blue-600 text-white rounded-md p-3 flex items-center justify-center cursor-pointer">
						<MessageSquareWarning className="w-6 h-6" />
					</div>
				</header>
				<section className="py-3 sm:py-7 px-2 sm:px-7 xl:px-[200px] 2xl:px-[350px]">
					<p className="text-sm sm:text-xl">
						<Link to="/">Beranda</Link> / Upload
					</p>
				</section>
				<section className="py-3 sm:py-7 px-2 sm:px-7 xl:px-[200px] 2xl:px-[350px]">
					<form onSubmit={handleSubmit} encType="multipart/form-data">
						<ul className="space-y-5 sm:space-y-8">
							<li className="flex flex-col gap-3">
								<label className="text-xs sm:text-base font-semibold" htmlFor="">
									Banner
								</label>
								{bannerPreview && !bannerErrorType ? (
									<div className="flex flex-col gap-3">
										<img
											className="w-full h-64 object-cover rounded-md"
											src={bannerPreview}
											alt=""
										/>
										<p className="flex justify-between items-center text-xs sm:text-base border border-gray-500 p-3 rounded-md">
											{bannerFileName.length > 10
												? `${bannerFileName.slice(0, 10)}...`
												: bannerFileName}
											<XIcon
												onClick={() => setBannerPreview("")}
												className="cursor-pointer"
											/>
										</p>
									</div>
								) : (
									<div className="flex flex-col gap-3">
										<Dropzone onDrop={handleBanner}>
											{({ getRootProps, getInputProps }) => (
												<label
													{...getRootProps()}
													htmlFor="dropzone-file"
													className="flex flex-col items-center justify-center w-full h-40 border-2 border-neutral-400 border-dashed rounded-lg cursor-pointer">
													<div className="flex flex-col items-center justify-center pt-5 pb-6">
														<UploadIcon color="gray" />
														<p className="mb-2 text-xs sm:text-sm">
															Drag & drop{" "}
															<span className="text-xs sm:text-base font-semibold">
																or browse
															</span>
														</p>
														<p className="text-xs text-gray-500 dark:text-gray-400">
															JPG, PNG and JPEG
														</p>
													</div>
													<input {...getInputProps()} className="hidden" />
												</label>
											)}
										</Dropzone>
										{bannerErrorType && bannerFileName && (
											<div className="flex flex-col gap-2">
												<p className="border border-red-500 bg-red-100 text-red-700 font-semibold p-3 rounded-md">
													❌ Hanya menerima file dengan tipe JPG, PNG atau JPEG
												</p>
											</div>
										)}
									</div>
								)}
							</li>
							<li className="flex flex-col gap-3">
								<label className="text-xs sm:text-base font-semibold" htmlFor="">
									Judul
								</label>
								<input
									onChange={(e) => setTitle(e.target.value)}
									value={data && data.title}
									className="text-xs sm:text-base 
                border border-gray-500 p-2 px-4 outline-none rounded-md"
									type="text"
									placeholder="Masukkan judul unggahan"
								/>
							</li>
							<li className="grid grid-cols-12 gap-5">
								<div className="col-span-12 md:col-span-4 flex flex-col gap-3">
									<label className="text-xs sm:text-base font-semibold" htmlFor="">
										Provinsi
									</label>
									<div className="relative" ref={provinceRef}>
										<button
											type="button"
											onClick={() => setIsProvinceOpen(!isProvinceOpen)}
											className="inline-flex justify-between items-center w-full px-4 py-2 text-xs sm:text-base text-gray-700 bg-white border border-gray-500 rounded-md">
											<span className="truncate">
												{selectedProvinceName || (data && data.province)}
											</span>
											<ChevronDown
												className={`w-4 h-4 ml-2 transition-transform ${
													isProvinceOpen ? "rotate-180" : ""
												}`}
											/>
										</button>
										{isProvinceOpen && (
											<div className="absolute z-20 w-full mt-2 bg-white border border-gray-500 rounded-md shadow-lg max-h-60 overflow-hidden">
												<div className="p-2">
													<input
														type="text"
														placeholder="Cari provinsi..."
														value={data && data.province}
														onChange={(e) => setProvinceSearch(e.target.value)}
														className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-500 outline-none rounded-md"
														autoFocus
													/>
												</div>
												<div className="max-h-48 overflow-y-auto">
													{filteredProvinces.length > 0 ? (
														filteredProvinces.map((province: Province) => (
															<button
																key={province.provinces_id}
																type="button"
																onClick={() => selectProvince(province)}
																className="w-full text-left px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
																{province.name}
															</button>
														))
													) : (
														<div className="px-4 py-2 text-xs sm:text-sm text-gray-500">
															Tidak ada hasil ditemukan
														</div>
													)}
												</div>
											</div>
										)}
									</div>
								</div>
								<div className="col-span-12 md:col-span-4 flex flex-col gap-3">
									<label className="text-xs sm:text-base font-semibold" htmlFor="">
										Kota/Kabupaten
									</label>
									<div className="relative" ref={cityRef}>
										<button
											type="button"
											onClick={() => setIsCityOpen(!isCityOpen)}
											className="inline-flex justify-between items-center w-full px-4 py-2 text-xs sm:text-base text-gray-700 bg-white border border-gray-500 rounded-md">
											<span className="truncate">
												{selectedCityName || (data && data.city)}
											</span>
											<ChevronDown
												className={`w-4 h-4 ml-2 transition-transform ${
													isCityOpen ? "rotate-180" : ""
												}`}
											/>
										</button>
										{isCityOpen && (
											<div className="absolute z-20 w-full mt-2 bg-white border border-gray-500 rounded-md shadow-lg max-h-60 overflow-hidden">
												<div className="p-2">
													<input
														type="text"
														placeholder="Cari provinsi..."
														value={data && data.city}
														onChange={(e) => setCitySearch(e.target.value)}
														className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-500 outline-none rounded-md"
														autoFocus
													/>
												</div>
												<div className="max-h-48 overflow-y-auto">
													{filteredCities.length > 0 ? (
														filteredCities.map((city: City) => (
															<button
																key={city.city_id}
																type="button"
																onClick={() => selectCity(city)}
																className="w-full text-left px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
																{city.name}
															</button>
														))
													) : (
														<div className="px-4 py-2 text-xs sm:text-sm text-gray-500">
															Tidak ada hasil ditemukan
														</div>
													)}
												</div>
											</div>
										)}
									</div>
								</div>
								<div className="col-span-12 md:col-span-4 flex flex-col gap-3">
									<label className="text-xs sm:text-base font-semibold" htmlFor="">
										Kecamatan
									</label>
									<div className="relative" ref={districtRef}>
										<button
											type="button"
											onClick={() => setIsDistrictOpen(!isDistrictOpen)}
											disabled={!selectedCityId}
											className={`inline-flex justify-between items-center w-full px-4 py-2 text-xs sm:text-base text-gray-700 bg-white border border-gray-500 rounded-md`}>
											<span className="truncate">
												{selectedDistrictName || (data && data.district)}
											</span>
											<ChevronDown
												className={`w-4 h-4 ml-2 transition-transform ${
													isDistrictOpen ? "rotate-180" : ""
												}`}
											/>
										</button>
										{isDistrictOpen && (
											<div className="absolute z-20 w-full mt-2 bg-white border border-gray-500 rounded-md shadow-lg max-h-60 overflow-hidden">
												<div className="p-2">
													<input
														type="text"
														placeholder="Cari kecamatan..."
														value={data && data.district}
														onChange={(e) => setDistrictSearch(e.target.value)}
														className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-500 outline-none rounded-md"
														autoFocus
													/>
												</div>
												<div className="max-h-48 overflow-y-auto">
													{filteredDistricts.length > 0 ? (
														filteredDistricts.map((district: District) => (
															<button
																key={district.districts_id}
																type="button"
																onClick={() => selectDistrict(district)}
																className="w-full text-left px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
																{district.name}
															</button>
														))
													) : (
														<div className="px-4 py-2 text-xs sm:text-sm text-gray-500">
															Tidak ada kecamatan untuk kota ini
														</div>
													)}
												</div>
											</div>
										)}
									</div>
								</div>
							</li>
							<li className="flex flex-col gap-3">
								<label className="text-xs sm:text-base font-semibold" htmlFor="">
									Detail Lokasi
								</label>
								<input
									onChange={(e) => setDetailLocation(e.target.value)}
									value={data && data.detailLocation}
									className="text-xs sm:text-base 
                border border-gray-500 p-2 px-4 outline-none rounded-md"
									type="text"
									placeholder="Masukkan detail lokasi"
								/>
							</li>
							<li className="flex flex-col gap-3">
								<label className="text-xs sm:text-base font-semibold" htmlFor="">
									Lokasi berdasarkan Google Maps
								</label>
								<input
									onChange={(e) => setGoogleMapsLocation(e.target.value)}
									value={data && data.embedMap}
									className="text-xs sm:text-base 
                border border-gray-500 p-2 px-4 outline-none rounded-md"
									type="text"
									placeholder="Masukkan link lokasi kamu berdasarkan Google Maps"
								/>
							</li>
							<li className="flex flex-col gap-3">
								<label className="text-xs sm:text-base font-semibold" htmlFor="">
									Deskripsi
								</label>
								<textarea
									onChange={(e) => setDescription(e.target.value)}
									value={data && data.description}
									className="text-xs sm:text-base 
                border border-gray-500 p-2 px-4 outline-none rounded-md"
									name=""
									id=""
									placeholder="Masukkan deskripsi"></textarea>
							</li>
							<li className="grid grid-cols-12 gap-5">
								<div className="col-span-12 md:col-span-4 flex flex-col gap-3">
									<label className="text-xs sm:text-base font-semibold" htmlFor="">
										Dokumentasi 1
									</label>
									{documentation1Preview ? (
										<div className="flex flex-col gap-3">
											<img
												className="w-full h-64 object-cover rounded-md"
												src={documentation1Preview}
												alt=""
											/>
											<p className="flex justify-between items-center text-xs sm:text-base border border-gray-500 p-3 rounded-md">
												{documentation1FileName.length > 10
													? `${documentation1FileName.slice(0, 10)}...`
													: documentation1FileName}
												<XIcon
													onClick={() => setBannerPreview("")}
													className="cursor-pointer"
												/>
											</p>
										</div>
									) : data && data.postsImagesData[0] && !isReplacingDoc1 ? (
										<div className="relative">
											<img
												className="w-full h-64 object-cover rounded-md"
												src={data && data.postsImagesData[0].filePath}
												alt=""
											/>
											<div
												onClick={async () => {
													setIsReplacingDoc1(true);

													await axios.delete(
														"https://jernih-be.vercel.app/v1/posts-image/" +
															slug +
															"/" +
															data.postsImagesData[0].id,
														{
															headers: {
																authorization: token,
															},
														}
													);
												}}
												className="absolute bottom-0 w-full text-center font-semibold text-white bg-red-400 p-2 rounded-md">
												Ganti gambar
											</div>
										</div>
									) : (
										<div className="flex flex-col gap-3">
											<Dropzone onDrop={handleDokumentasi1}>
												{({ getRootProps, getInputProps }) => (
													<label
														{...getRootProps()}
														htmlFor="dropzone-file"
														className="flex flex-col items-center justify-center w-full h-40 border-2 border-neutral-400 border-dashed rounded-lg cursor-pointer">
														<div className="flex flex-col items-center justify-center pt-5 pb-6">
															<UploadIcon color="gray" />
															<p className="mb-2 text-xs sm:text-sm">
																Drag & drop{" "}
																<span className="text-xs sm:text-base font-semibold">
																	or browse
																</span>
															</p>
															<p className="text-xs text-gray-500 dark:text-gray-400">
																JPG, PNG and JPEG
															</p>
														</div>
														<input {...getInputProps()} className="hidden" />
													</label>
												)}
											</Dropzone>
											{isReplacingDoc1 && data && data.postsImagesData[0] && (
												<button
													onClick={() => setIsReplacingDoc1(false)}
													className="text-sm text-gray-600 hover:text-gray-800 underline">
													Batal ganti gambar
												</button>
											)}
											{documentation1ErrorType && documentation1FileName && (
												<div className="flex flex-col gap-2">
													<p className="border border-red-500 bg-red-100 text-red-700 font-semibold p-3 rounded-md">
														❌ Hanya menerima file dengan tipe JPG, PNG atau JPEG
													</p>
												</div>
											)}
										</div>
									)}
								</div>
								<div className="col-span-12 md:col-span-4 flex flex-col gap-3">
									<label className="text-xs sm:text-base font-semibold" htmlFor="">
										Dokumentasi 2
									</label>
									{documentation2Preview ? (
										<div className="flex flex-col gap-3">
											<img
												className="w-full h-64 object-cover rounded-md"
												src={documentation2Preview}
												alt=""
											/>
											<p className="flex justify-between items-center text-xs sm:text-base border border-gray-500 p-3 rounded-md">
												{documentation2FileName.length > 10
													? `${documentation2FileName.slice(0, 10)}...`
													: documentation2FileName}
												<XIcon
													onClick={() => setBannerPreview("")}
													className="cursor-pointer"
												/>
											</p>
										</div>
									) : data && data.postsImagesData[1] && !isReplacingDoc2 ? (
										<div className="relative">
											<img
												className="w-full h-64 object-cover rounded-md"
												src={data && data.postsImagesData[1].filePath}
												alt=""
											/>
											<div
												onClick={() => {
													setIsReplacingDoc2(true);

													axios.delete(
														"https://jernih-be.vercel.app/v1/posts-image/" +
															slug +
															"/" +
															data.postsImagesData[1].id,
														{
															headers: {
																authorization: token,
															},
														}
													);
												}}
												className="absolute bottom-0 w-full text-center font-semibold text-white bg-red-400 p-2 rounded-md">
												Ganti gambar
											</div>
										</div>
									) : (
										<div className="flex flex-col gap-3">
											<Dropzone onDrop={handleDokumentasi2}>
												{({ getRootProps, getInputProps }) => (
													<label
														{...getRootProps()}
														htmlFor="dropzone-file"
														className="flex flex-col items-center justify-center w-full h-40 border-2 border-neutral-400 border-dashed rounded-lg cursor-pointer">
														<div className="flex flex-col items-center justify-center pt-5 pb-6">
															<UploadIcon color="gray" />
															<p className="mb-2 text-xs sm:text-sm">
																Drag & drop{" "}
																<span className="text-xs sm:text-base font-semibold">
																	or browse
																</span>
															</p>
															<p className="text-xs text-gray-500 dark:text-gray-400">
																JPG, PNG and JPEG
															</p>
														</div>
														<input {...getInputProps()} className="hidden" />
													</label>
												)}
											</Dropzone>
											{isReplacingDoc2 && data && data.postsImagesData[1] && (
												<button
													onClick={() => setIsReplacingDoc2(false)}
													className="text-sm text-gray-600 hover:text-gray-800 underline">
													Batal ganti gambar
												</button>
											)}
											{documentation2ErrorType && documentation2FileName && (
												<div className="flex flex-col gap-2">
													<p className="border border-red-500 bg-red-100 text-red-700 font-semibold p-3 rounded-md">
														❌ Hanya menerima file dengan tipe JPG, PNG atau JPEG
													</p>
												</div>
											)}
										</div>
									)}
								</div>
								<div className="col-span-12 md:col-span-4 flex flex-col gap-3">
									<label className="text-xs sm:text-base font-semibold" htmlFor="">
										Dokumentasi 3
									</label>
									{documentation3Preview ? (
										<div className="flex flex-col gap-3">
											<img
												className="w-full h-64 object-cover rounded-md"
												src={documentation3Preview}
												alt=""
											/>
											<p className="flex justify-between items-center text-xs sm:text-base border border-gray-500 p-3 rounded-md">
												{documentation3FileName.length > 10
													? `${documentation3FileName.slice(0, 10)}...`
													: documentation3FileName}
												<XIcon
													onClick={() => setBannerPreview("")}
													className="cursor-pointer"
												/>
											</p>
										</div>
									) : data && data.postsImagesData[2] && !isReplacingDoc3 ? (
										<div className="relative">
											<div className="relative">
												<img
													className="w-full h-64 object-cover rounded-md"
													src={data && data.postsImagesData[2].filePath}
													alt=""
												/>
												<div
													onClick={() => {
														setIsReplacingDoc3(true);

														axios.delete(
															"https://jernih-be.vercel.app/v1/posts-image/" +
																slug +
																"/" +
																data.postsImagesData[2].id,
															{
																headers: {
																	authorization: token,
																},
															}
														);
													}}
													className="absolute bottom-0 w-full text-center font-semibold text-white bg-red-400 p-2 rounded-md">
													Ganti gambar
												</div>
											</div>
										</div>
									) : (
										<div className="flex flex-col gap-3">
											<Dropzone onDrop={handleDokumentasi3}>
												{({ getRootProps, getInputProps }) => (
													<label
														{...getRootProps()}
														htmlFor="dropzone-file"
														className="flex flex-col items-center justify-center w-full h-40 border-2 border-neutral-400 border-dashed rounded-lg cursor-pointer">
														<div className="flex flex-col items-center justify-center pt-5 pb-6">
															<UploadIcon color="gray" />
															<p className="mb-2 text-xs sm:text-sm">
																Drag & drop{" "}
																<span className="text-xs sm:text-base font-semibold">
																	or browse
																</span>
															</p>
															<p className="text-xs text-gray-500 dark:text-gray-400">
																JPG, PNG and JPEG
															</p>
														</div>
														<input {...getInputProps()} className="hidden" />
													</label>
												)}
											</Dropzone>
											{isReplacingDoc3 && data && data.postsImagesData[2] && (
												<button
													onClick={() => setIsReplacingDoc3(false)}
													className="text-sm text-gray-600 hover:text-gray-800 underline">
													Batal ganti gambar
												</button>
											)}
											{documentation3ErrorType && documentation3FileName && (
												<div className="flex flex-col gap-2">
													<p className="border border-red-500 bg-red-100 text-red-700 font-semibold p-3 rounded-md">
														❌ Hanya menerima file dengan tipe JPG, PNG atau JPEG
													</p>
												</div>
											)}
										</div>
									)}
								</div>
							</li>
							<li className="grid grid-cols-12 gap-5">
								<div className="col-span-12 sm:col-span-6 flex flex-col gap-3">
									<label className="text-xs sm:text-base font-semibold" htmlFor="">
										Nomor Whats App Narahubung
									</label>
									<input
										onChange={(e) => setPhoneNumber(e.target.value)}
										value={data && data.contactPerson}
										className="text-xs sm:text-base 
                  border border-gray-500 p-2 px-4 outline-none rounded-md"
										type="text"
										placeholder="Masukkan tautan narahubung"
									/>
								</div>
								<div className="col-span-12 sm:col-span-6 flex flex-col gap-3">
									<label className="text-xs sm:text-base font-semibold" htmlFor="">
										Tautan donasi
									</label>
									<input
										onChange={(e) => setDonationUrl(e.target.value)}
										value={data && data.donationLink}
										className="text-xs sm:text-base 
                  border border-gray-500 p-2 px-4 outline-none rounded-md"
										type="text"
										placeholder="Masukkan tautan donasi"
									/>
								</div>
							</li>
							<li>
								<button
									type={"submit"}
									className={`w-full text-xs sm:text-base text-white font-semibold ${
										formComplete
											? "cursor-pointer bg-blue-500 hover:bg-blue-600"
											: "cursor-pointer bg-blue-500 hover:bg-blue-600"
									} p-3 rounded-md transition-colors`}>
									Unggah
								</button>
								{/* {!formComplete && (
									<p className="mt-3 text-red-500 italic">
										Kolom input harus terisi semua!
									</p>
								)} */}
							</li>
						</ul>
					</form>
				</section>
				<Footer />
			</section>

			{toolip && <ModalPopUp open={toolip} close={() => setToolip(!toolip)} />}

			{mutation.isPending && (
				<section className="fixed top-0 left-0 w-full h-full bg-black/50">
					<div className="relative h-full overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-r flex items-center justify-center">
						<div className="text-white text-center">
							<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
						</div>
					</div>
				</section>
			)}
		</>
	);
}
