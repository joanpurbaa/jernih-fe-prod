type ModalPopUpProps = {
	open: boolean;
	close: () => void;
};

export default function ModalPopUp({ open, close }: ModalPopUpProps) {
	if (!open) return null;
	return (
		<section className="w-full h-full fixed top-0 left-0 flex justify-center items-center bg-black/50 p-2 sm:p-0">
			<div className="w-full sm:w-[1000px] md:w-[700px] bg-white p-5 rounded-lg space-y-5">
				<h1 className="text-base sm:text-xl text-center font-bold text-blue-500">
					Tata cara untuk mengupload
				</h1>
				<table className="w-full">
					<thead>
						<tr>
							<th className="text-xs sm:text-base border border-gray-400 p-2">
								Kolom Input
							</th>
							<th className="text-xs sm:text-base border border-gray-400 p-2">
								Data Input
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Judul
							</td>
							<td className="text-zinc-500 text-xs sm:text-base text-center border border-gray-400 p-2">
								<i>Kondisi permasalahan air yang kamu alami sekarang</i>
							</td>
						</tr>
						<tr>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Provinsi
							</td>
							<td className="text-zinc-500 text-xs sm:text-base text-center border border-gray-400 p-2">
								<i>Provinsi</i>
							</td>
						</tr>
						<tr>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Kota/Kabupaten
							</td>
							<td className="text-zinc-500 text-xs sm:text-base text-center border border-gray-400 p-2">
								<i>Kota/Kabupaten</i>
							</td>
						</tr>
						<tr>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Kecamatan
							</td>
							<td className="text-zinc-500 text-xs sm:text-base text-center border border-gray-400 p-2">
								<i>Kecamatan</i>
							</td>
						</tr>
						<tr>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Detail Lokasi
							</td>
							<td className="text-zinc-500 text-xs sm:text-base text-center border border-gray-400 p-2">
								<i>
									Detail Lokasi kamu
									<br />
									<span className="text-red-400">
										*Kota Bandung, Bojongsoang, Citeureup, JL.Sukabirus No 6 RT 2 RW 5
									</span>
								</i>
							</td>
						</tr>
						<tr>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Lokasi berdasarkan Google Maps
							</td>
							<td className="text-zinc-500 text-xs sm:text-base text-center border border-gray-400 p-2">
								<i>
									Lokasi berdasarkan Google Maps
									<br />
									<ul className="text-xs sm:text-base text-red-400">
										<li>1. Buka Google Maps</li>
										<li>2. Klik bagikan lokasi</li>
										<li>3. Klik sematkan peta</li>
										<li>4. Salin HTML dan paste di kolom input</li>
									</ul>
								</i>
							</td>
						</tr>
						<tr>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Deskripsi
							</td>
							<td className="text-zinc-500 text-xs sm:text-base text-center border border-gray-400 p-2">
								<i>Deskripsi permasalahan air yang kamu alami sekarang</i>
							</td>
						</tr>
						<tr>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Dokumentasi 1 - 3
							</td>
							<td className="text-zinc-500 text-xs sm:text-base text-center border border-gray-400 p-2">
								<i>3 foto permasalahan air yang kamu alami</i>
							</td>
						</tr>
						<tr>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Tautan Narahubung
							</td>
							<td className="text-zinc-500 text-xs sm:text-base text-center border border-gray-400 p-2">
								<i>
									Tautan untuk menghubungi kamu
									<br />
									<span className="text-red-400">*https://wa.me/68*********</span>
								</i>
							</td>
						</tr>
						<tr>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Tautan Donasi
							</td>
							<td className="text-zinc-500 text-xs sm:text-base text-center border border-gray-400 p-2">
								<i>Tautan untuk donasi</i>
							</td>
						</tr>
					</tbody>
				</table>
				<button
					onClick={() => close()}
					className="cursor-pointer w-full text-white text-xs sm:text-base font-semibold bg-blue-500 hover:bg-blue-600 p-2 rounded-md">
					Tutup
				</button>
			</div>
		</section>
	);
}
