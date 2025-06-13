import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Dropzone from "react-dropzone";
// import { useState } from "react";
import { UploadIcon } from "lucide-react";

export default function Upload() {
	// const [preview, setPreview] = useState<string>("");

	function handleImage(file: File[]) {
		console.log(file);
		// const image = file[0];

		// setPreview(URL.createObjectURL(image));
	}
	return (
		<>
			<header className="shadow-lg py-3 sm:py-7 px-2 sm:px-7 xl:px-[200px] 2xl:px-[350px]">
				<h1 className="text-lg sm:text-3xl text-blue-500 font-black">Jernih</h1>
			</header>
			<section className="py-3 sm:py-7 px-2 sm:px-7 xl:px-[200px] 2xl:px-[350px]">
				<p className="text-sm sm:text-xl">
					<Link to="/">Beranda</Link> / Upload
				</p>
			</section>
			<section className="pb-15 py-3 sm:py-7 px-2 sm:px-7 xl:px-[200px] 2xl:px-[350px]">
				<form action="">
					<ul className="space-y-5 sm:space-y-8">
						<li className="flex flex-col gap-3">
							<label className="text-xs sm:text-base font-semibold" htmlFor="">
								Banner
							</label>
							<Dropzone onDrop={(file) => handleImage(file)}>
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
						</li>
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
								<Dropzone onDrop={(file) => handleImage(file)}>
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
									Dokumentasi 1
								</label>
								<Dropzone onDrop={(file) => handleImage(file)}>
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
									Dokumentasi 1
								</label>
								<Dropzone onDrop={(file) => handleImage(file)}>
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
						<li className="flex flex-col gap-3">
							<label className="text-xs sm:text-base font-semibold" htmlFor="">
								Lokasi
							</label>
							<input
								className="text-xs sm:text-base 
                border border-gray-500 p-2 px-4 outline-none rounded-md"
								type="text"
								placeholder="Masukkan lokasi Google Maps"
							/>
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
							<button className="w-full text-xs sm:text-base text-white font-semibold bg-blue-500 p-3 rounded-md">
								Unggah
							</button>
						</li>
					</ul>
				</form>
			</section>
			<Footer />
		</>
	);
}
