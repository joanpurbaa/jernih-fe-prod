import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Edukasi3() {
	return (
		<>
			<Header />
			<section className="py-20 sm:py-36 px-2 sm:px-7 xl:px-[200px] 2xl:px-[350px] space-y-10 md:space-y-15">
				<p className="text-sm sm:text-xl">
					<a href="/">Beranda</a> /{" "}
					<a href="/cara-menyimpan-air-bersih-agar-aman">
						Cara menyimpan air bersih agar aman
					</a>
				</p>
				<img
					className="w-full h-[200px] md:h-[400px] rounded-2xl object-cover"
					src="https://unnu.com/storage/blog/ed47812d88e873368d0804605ccf225a.jpeg"
					alt=""
				/>
				<h1 className="text-xl md:text-3xl text-blue-500 font-bold">
					Cara menyimpan air bersih agar aman
				</h1>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">🧪 Pendahuluan</h2>
					<p className="text-xs sm:text-sm md:text-xl">
						Air bersih yang sudah disaring atau direbus harus disimpan dengan baik
						agar tidak kembali terkontaminasi. Banyak orang mengabaikan tahap
						penyimpanan, padahal ini sama pentingnya dengan proses penyaringan.
						Berikut ini panduan lengkap agar air bersih tetap aman digunakan, terutama
						untuk konsumsi.
					</p>
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">
						🧠 Mengapa Penyimpanan Air Itu Penting?
					</h2>
					<p className="text-xs sm:text-sm md:text-xl">
						Air yang tadinya sudah bersih bisa tercemar kembali oleh bakteri, debu,
						atau bahan kimia jika disimpan di tempat yang salah atau terbuka terlalu
						lama. Terutama di lingkungan yang lembap atau dekat sumber kontaminasi,
						air bisa dengan mudah kehilangan kelayakannya.
					</p>
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">
						🧰 Wadah yang Disarankan untuk Menyimpan Air
					</h2>
					<p className="text-xs sm:text-sm md:text-xl">
						Pastikan kamu menggunakan wadah berikut untuk menyimpan air:
					</p>
					<div className="grid grid-cols-12 gap-5">
						<div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Jerigen atau galon plastik food-grade (yang biasa digunakan untuk air
								minum)
							</h3>
						</div>
						<div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Botol kaca atau plastik bersih dengan penutup rapat
							</h3>
						</div>
						<div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">Ember dengan tutup</h3>
						</div>
					</div>
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">
						📦 Tips Menyimpan Air Bersih dengan Aman
					</h2>
					<div className="grid grid-cols-12 gap-5">
						<div className="col-span-12 sm:col-span-6 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Gunakan Wadah Tertutup
							</h3>
							<p className="text-xs sm:text-sm md:text-lg">
								Pastikan wadah memiliki penutup yang rapat untuk mencegah masuknya debu,
								serangga, atau kotoran.
							</p>
						</div>
						<div className="col-span-12 sm:col-span-6 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Jangan Celupkan Tangan atau Gelas Langsung
							</h3>
							<p className="text-xs sm:text-sm md:text-lg">
								Ambil air menggunakan gayung atau sendok bersih. Mencelupkan tangan bisa
								membawa bakteri ke dalam air.
							</p>
						</div>
						<div className="col-span-12 sm:col-span-6 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Simpan di Tempat Sejuk dan Tidak Terkena Matahari Langsung
							</h3>
							<p className="text-xs sm:text-sm md:text-lg">
								Suhu tinggi bisa mempercepat pertumbuhan mikroorganisme. Simpan air di
								tempat teduh dan bersih.
							</p>
						</div>
						<div className="col-span-12 sm:col-span-6 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Labeli Wadah dengan Tanggal Pengisian
							</h3>
							<p className="text-xs sm:text-sm md:text-lg">
								Agar kamu tahu sudah berapa lama air disimpan, beri label seperti: "Air
								disaring – 11 Juni 2025".
							</p>
						</div>
					</div>
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">
						⏳ Berapa Lama Air Bisa Disimpan?
					</h2>
					<div className="grid grid-cols-12 gap-5">
						<div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Air matang (rebusan):
							</h3>
							<p className="text-xs sm:text-sm md:text-lg">
								maksimal 24–48 jam dalam suhu ruang
							</p>
						</div>
						<div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Air dalam galon tertutup:
							</h3>
							<p className="text-xs sm:text-sm md:text-lg">
								bisa bertahan 3–5 hari asalkan tidak dibuka.
							</p>
						</div>
						<div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Air yang disimpan di lemari pendingin:
							</h3>
							<p className="text-xs sm:text-sm md:text-lg">
								bisa bertahan hingga 7 hari.
							</p>
						</div>
					</div>
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">
						🧽 Jangan Lupa Bersihkan Wadah Secara Berkala
					</h2>
					<p className="text-xs sm:text-sm md:text-xl">
						Minimal seminggu sekali, cuci wadah penyimpanan dengan:
					</p>
					<div className="grid grid-cols-12 gap-5">
						<div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">Air hangat</h3>
						</div>
						<div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Sedikit sabun (lalu bilas sampai bersih)
							</h3>
						</div>
						<div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Bisa juga disterilkan dengan air mendidih
							</h3>
						</div>
					</div>
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">✅ Kesimpulan</h2>
					<p className="text-xs sm:text-sm md:text-xl">
						Menyimpan air bersih tidak kalah penting dari cara mendapatkannya. Gunakan
						wadah yang tepat, simpan di tempat yang baik, dan jaga kebersihannya
						secara rutin. Dengan kebiasaan ini, kamu bisa memastikan air yang
						digunakan di rumah tetap aman dan sehat bagi seluruh keluarga.
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
								src="./bannerEdukasi1.jpg"
								alt=""
							/>
							<p className="text-xs sm:text-sm md:text-xl">
								Membuat filter air sederhana
							</p>
							<a href="/membuat-filter-air-sederhana">
								<button className="w-full cursor-pointer bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-base font-semibold py-3 px-4 rounded-md">
									Kepoin disini
								</button>
							</a>
						</div>
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
