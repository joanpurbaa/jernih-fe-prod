import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Dropzone from "react-dropzone";
import { useState, useRef, useEffect } from "react";
import { UploadIcon, ChevronDown, MessageSquareWarning } from "lucide-react";
import { provinces } from "../data/provinces";
import { citiesByProvince } from "../data/citiesByProvince";
import { districtsByCity } from "../data/districtsByCity";
import ModalPopUp from "../components/ModalPopUp";

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

export default function Upload() {
	const [toolip, setToolip] = useState<boolean>(true);
	const [isProvinceOpen, setIsProvinceOpen] = useState(false);
	const [isCityOpen, setIsCityOpen] = useState(false);
	const [isDistrictOpen, setIsDistrictOpen] = useState(false);

	const [selectedProvinceId, setSelectedProvinceId] = useState("");
	const [selectedCityId, setSelectedCityId] = useState("");
	const [selectedDistrictId, setSelectedDistrictId] = useState("");

	const [selectedProvinceName, setSelectedProvinceName] = useState("");
	const [selectedCityName, setSelectedCityName] = useState("");
	const [selectedDistrictName, setSelectedDistrictName] = useState("");

	const [provinceSearch, setProvinceSearch] = useState("");
	const [citySearch, setCitySearch] = useState("");
	const [districtSearch, setDistrictSearch] = useState("");

	const provinceRef = useRef<HTMLDivElement>(null);
	const cityRef = useRef<HTMLDivElement>(null);
	const districtRef = useRef<HTMLDivElement>(null);

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

	useEffect(() => {
		if (toolip) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [toolip]);

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

	function handleImage(files: File[]) {
		console.log(files[0]);
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

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const formData = {
			provinceId: selectedProvinceId,
			provinceName: selectedProvinceName,
			cityId: selectedCityId,
			cityName: selectedCityName,
			districtId: selectedDistrictId,
			districtName: selectedDistrictName,
		};

		console.log("Form Data:", formData);
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
					<form onSubmit={handleSubmit}>
						<ul className="space-y-5 sm:space-y-8">
							<li className="flex flex-col gap-3">
								<label className="text-xs sm:text-base font-semibold" htmlFor="">
									Judul
								</label>
								<input
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
												{selectedProvinceName || "Pilih Provinsi"}
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
														value={provinceSearch}
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
											disabled={!selectedProvinceId}
											className={`inline-flex justify-between items-center w-full px-4 py-2 text-xs sm:text-base text-gray-700 bg-white border border-gray-500 rounded-md ${
												!selectedProvinceId ? "opacity-50 cursor-not-allowed" : ""
											}`}>
											<span className="truncate">
												{selectedCityName || "Pilih Kota/Kabupaten"}
											</span>
											<ChevronDown
												className={`w-4 h-4 ml-2 transition-transform ${
													isCityOpen ? "rotate-180" : ""
												}`}
											/>
										</button>
										{isCityOpen && selectedProvinceId && (
											<div className="absolute z-20 w-full mt-2 bg-white border border-gray-500 rounded-md shadow-lg max-h-60 overflow-hidden">
												<div className="p-2">
													<input
														type="text"
														placeholder="Cari kota/kabupaten..."
														value={citySearch}
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
															Tidak ada kota untuk provinsi ini
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
											className={`inline-flex justify-between items-center w-full px-4 py-2 text-xs sm:text-base text-gray-700 bg-white border border-gray-500 rounded-md ${
												!selectedCityId ? "opacity-50 cursor-not-allowed" : ""
											}`}>
											<span className="truncate">
												{selectedDistrictName || "Pilih Kecamatan"}
											</span>
											<ChevronDown
												className={`w-4 h-4 ml-2 transition-transform ${
													isDistrictOpen ? "rotate-180" : ""
												}`}
											/>
										</button>
										{isDistrictOpen && selectedCityId && (
											<div className="absolute z-20 w-full mt-2 bg-white border border-gray-500 rounded-md shadow-lg max-h-60 overflow-hidden">
												<div className="p-2">
													<input
														type="text"
														placeholder="Cari kecamatan..."
														value={districtSearch}
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
									<Dropzone onDrop={handleImage}>
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
														JPG, PNG, or SVG | MAX 10 mb
													</p>
												</div>
												<input {...getInputProps()} className="hidden" />
											</label>
										)}
									</Dropzone>
								</div>
								<div className="col-span-12 md:col-span-4 flex flex-col gap-3">
									<label className="text-xs sm:text-base font-semibold" htmlFor="">
										Dokumentasi 2
									</label>
									<Dropzone onDrop={handleImage}>
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
														JPG, PNG, or SVG | MAX 10 mb
													</p>
												</div>
												<input {...getInputProps()} className="hidden" />
											</label>
										)}
									</Dropzone>
								</div>
								<div className="col-span-12 md:col-span-4 flex flex-col gap-3">
									<label className="text-xs sm:text-base font-semibold" htmlFor="">
										Dokumentasi 3
									</label>
									<Dropzone onDrop={handleImage}>
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
														JPG, PNG, or SVG | MAX 10 mb
													</p>
												</div>
												<input {...getInputProps()} className="hidden" />
											</label>
										)}
									</Dropzone>
								</div>
							</li>
							<li className="grid grid-cols-12 gap-5">
								<div className="col-span-12 sm:col-span-6 flex flex-col gap-3">
									<label className="text-xs sm:text-base font-semibold" htmlFor="">
										Tautan narahubung
									</label>
									<input
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
										className="text-xs sm:text-base 
                  border border-gray-500 p-2 px-4 outline-none rounded-md"
										type="text"
										placeholder="Masukkan tautan donasi"
									/>
								</div>
							</li>
							<li>
								<button
									type="submit"
									className="w-full text-xs sm:text-base text-white font-semibold bg-blue-500 p-3 rounded-md hover:bg-blue-600 transition-colors">
									Unggah
								</button>
							</li>
						</ul>
					</form>
				</section>
				<Footer />
			</section>

			{toolip && <ModalPopUp open={toolip} close={() => setToolip(!toolip)} />}
		</>
	);
}
