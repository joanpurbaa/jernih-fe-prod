import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Edukasi1() {
	return (
		<>
			<Header />
			<section className="py-20 sm:py-36 px-2 sm:px-7 xl:px-[200px] 2xl:px-[350px] space-y-10 md:space-y-15">
				<p className="text-sm sm:text-xl">
					<a href="/">Beranda</a> /{" "}
					<a href="/membuat-filter-air-sederhana">Membuat filter air sederhana</a>
				</p>
				<img
					className="w-full h-[200px] md:h-[400px] rounded-2xl object-cover"
					src="./bannerEdukasi1.jpg"
					alt=""
				/>
				<h1 className="text-xl md:text-3xl text-blue-500 font-bold">
					Membuat filter air sederhana
				</h1>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">🧪 Pendahuluan</h2>
					<p className="text-xs sm:text-sm md:text-xl">
						Air bersih adalah kebutuhan utama dalam kehidupan sehari-hari. Namun,
						tidak semua orang memiliki akses mudah ke air bersih. Dalam situasi
						darurat atau sebagai bagian dari edukasi lingkungan, kita bisa membuat
						filter air sederhana menggunakan bahan-bahan yang mudah ditemukan.
						Meskipun hasilnya belum tentu layak langsung diminum, filter ini sangat
						membantu untuk menjernihkan air yang keruh agar lebih aman digunakan untuk
						keperluan non-konsumsi.
					</p>
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">
						🧰 Alat dan Bahan yang Diperlukan
					</h2>
					<p className="text-xs sm:text-sm md:text-xl">
						Sebelum memulai, siapkan alat dan bahan berikut:
					</p>
					<ul className="grid grid-cols-12 text-lg gap-5">
						<li className="col-span-6 sm:col-span-4 lg:col-span-3 bg-gray-100 p-3 sm:p-5 rounded-md sm:rounded-xl space-y-5">
							<img
								className="w-full h-[100px] object-cover"
								src="./botolBekas.jpg"
								alt=""
							/>
							<p className="text-xs sm:text-sm md:text-xl">
								1 botol plastik bekas (ukuran 1,5 liter atau lebih besar)
							</p>
						</li>
						<li className="col-span-6 sm:col-span-4 lg:col-span-3 bg-gray-100 p-3 sm:p-5 rounded-md sm:rounded-xl space-y-5">
							<img
								className="w-full h-[100px] object-cover"
								src="./gunting.webp"
								alt=""
							/>
							<p className="text-xs sm:text-sm md:text-xl">Gunting atau cutter</p>
						</li>
						<li className="col-span-6 sm:col-span-4 lg:col-span-3 bg-gray-100 p-3 sm:p-5 rounded-md sm:rounded-xl space-y-5">
							<img
								className="w-full h-[100px] object-cover"
								src="./kapas.jpg"
								alt=""
							/>
							<p className="text-xs sm:text-sm md:text-xl">Kain saringan atau kapas</p>
						</li>
						<li className="col-span-6 sm:col-span-4 lg:col-span-3 bg-gray-100 p-3 sm:p-5 rounded-md sm:rounded-xl space-y-5">
							<img
								className="w-full h-[100px] object-cover"
								src="./arangAktif.webp"
								alt=""
							/>
							<p className="text-xs sm:text-sm md:text-xl">
								Arang aktif (opsional, tapi sangat disarankan)
							</p>
						</li>
						<li className="col-span-6 sm:col-span-4 lg:col-span-3 bg-gray-100 p-3 sm:p-5 rounded-md sm:rounded-xl space-y-5">
							<img
								className="w-full h-[100px] object-cover"
								src="./pasirBersih.jpg"
								alt=""
							/>
							<p className="text-xs sm:text-sm md:text-xl">Pasir bersih</p>
						</li>
						<li className="col-span-6 sm:col-span-4 lg:col-span-3 bg-gray-100 p-3 sm:p-5 rounded-md sm:rounded-xl space-y-5">
							<img
								className="w-full h-[100px] object-cover"
								src="./kerikilKecil.jpg"
								alt=""
							/>
							<p className="text-xs sm:text-sm md:text-xl">Kerikil kecil</p>
						</li>
						<li className="col-span-6 sm:col-span-4 lg:col-span-3 bg-gray-100 p-3 sm:p-5 rounded-md sm:rounded-xl space-y-5">
							<img
								className="w-full h-[100px] object-cover"
								src="./karetGelang.jpg"
								alt=""
							/>
							<p className="text-xs sm:text-sm md:text-xl">Karet gelang atau tali</p>
						</li>
						<li className="col-span-6 sm:col-span-4 lg:col-span-3 bg-gray-100 p-3 sm:p-5 rounded-md sm:rounded-xl space-y-5">
							<img
								className="w-full h-[100px] object-cover"
								src="./wadah.jpg"
								alt=""
							/>
							<p className="text-xs sm:text-sm md:text-xl">
								Wadah untuk menampung air hasil saringan
							</p>
						</li>
					</ul>
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">
						⚙️ Langkah-langkah Pembuatan
					</h2>
					<iframe
						className="w-full h-[250px] sm:h-[600px]"
						src="https://www.youtube.com/embed/0KozcywBkK4?si=yCyAsinrjG9wHrcO"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">
						💧 Cara Menggunakan Filter
					</h2>
					<p className="text-xs sm:text-sm md:text-xl">
						Untuk menggunakan filter ini, cukup tuangkan air keruh ke bagian atas
						botol. Biarkan air menetes ke bawah secara alami. Tampung air hasil
						saringan di wadah bersih. Jangan menuangkan air terlalu cepat agar proses
						penyaringan tetap maksimal.
					</p>
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">
						✅ Hasil dan Efektivitas
					</h2>
					<p className="text-xs sm:text-sm md:text-xl">
						Air yang telah melalui filter ini akan tampak lebih jernih karena partikel
						lumpur dan kotoran kasar telah tersaring. Namun, perlu diingat bahwa
						filter ini tidak membunuh bakteri atau virus. Untuk keperluan konsumsi,
						sangat disarankan untuk merebus air terlebih dahulu setelah disaring agar
						aman diminum.
					</p>
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">
						📚 Artikel yang cocok untuk kamu!
					</h2>
					<div className="grid grid-cols-12 gap-5">
						<div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-gray-100 p-5 rounded-md space-y-3">
							<img
								className="w-full h-[200px] object-cover"
								src="https://ottopay.id/lkapps/wp-content/uploads/2022/04/03.-Yang-Terjadi-Kalau-Nggak-Punya-Air-Bersih_216729520.jpg"
								alt=""
							/>
							<p className="text-xs sm:text-sm md:text-xl">
								Air kamu layak pakai atau tidak?
							</p>
							<a href="/air-kamu-layak-pakai-atau-tidak">
								<button className="w-full cursor-pointer bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-base font-semibold py-3 px-4 rounded-md">
									Kepoin disini
								</button>
							</a>
						</div>
						<div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-gray-100 p-5 rounded-md space-y-3">
							<img
								className="w-full h-[200px] object-cover"
								src="https://unnu.com/storage/blog/ed47812d88e873368d0804605ccf225a.jpeg"
								alt=""
							/>
							<p className="text-xs sm:text-sm md:text-xl">
								Cara menyimpan air bersih agar aman
							</p>
							<a href="/cara-menyimpan-air-bersih-agar-aman">
								<button className="w-full cursor-pointer bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-base font-semibold py-3 px-4 rounded-md">
									Kepoin disini
								</button>
							</a>
						</div>
						<div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-gray-100 p-5 rounded-md space-y-3">
							<img
								className="w-full h-[200px] object-cover"
								src="https://www.blog.yukiwaterfilter.com/wp-content/uploads/2019/04/water-polution-1024x621.jpg"
							/>
							<p className="text-xs sm:text-sm md:text-xl">
								Dampak air tercemar bagi kehidupan
							</p>
							<a href="/dampak-air-tercemar-bagi-kehidupan">
								<button className="w-full cursor-pointer bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-base font-semibold py-3 px-4 rounded-md">
									Kepoin disini
								</button>
							</a>
						</div>
					</div>
				</section>
			</section>
			<Footer />
		</>
	);
}
