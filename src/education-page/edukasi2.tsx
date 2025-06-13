import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Edukasi2() {
	return (
		<>
			<Header />
			<section className="py-20 sm:py-36 px-2 sm:px-7 xl:px-[200px] 2xl:px-[350px] space-y-10 md:space-y-15">
				<p className="text-sm sm:text-xl">
					<a href="/">Beranda</a> /{" "}
					<a href="/air-kamu-layak-pakai-atau-tidak">
						Air kamu layak pakai atau tidak?
					</a>
				</p>
				<img
					className="w-full h-[200px] md:h-[400px] rounded-2xl object-cover"
					src="https://ottopay.id/lkapps/wp-content/uploads/2022/04/03.-Yang-Terjadi-Kalau-Nggak-Punya-Air-Bersih_216729520.jpg"
					alt=""
				/>
				<h1 className="text-xl md:text-3xl text-blue-500 font-bold">
					Air kamu layak pakai atau tidak?
				</h1>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">🧪 Pendahuluan</h2>
					<p className="text-xs sm:text-sm md:text-xl">
						Air adalah kebutuhan utama dalam kehidupan sehari-hari — untuk minum,
						memasak, mandi, hingga mencuci. Namun, apakah kamu tahu bahwa tidak semua
						air yang terlihat bersih itu benar-benar aman digunakan? Yuk, kenali cara
						mengecek kelayakan air hanya dari tampilannya (looks), sebagai langkah
						awal yang mudah dilakukan di rumah!
					</p>
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">
						🔍 Mengapa Penilaian dari Penampilan Penting?
					</h2>
					<p className="text-xs sm:text-sm md:text-xl">
						Meskipun pemeriksaan laboratorium adalah cara paling akurat untuk
						menentukan kualitas air, melihat penampilan air secara kasat mata tetap
						menjadi langkah pertama yang praktis untuk menilai apakah air layak
						dipakai atau tidak — terutama di daerah yang aksesnya terbatas.
					</p>
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">
						👀 Ciri-Ciri Air yang Layak Pakai dari Penampilannya
					</h2>
					<p className="text-xs sm:text-sm md:text-xl">
						Berikut ini beberapa indikator visual yang menandakan air cenderung layak
						untuk digunakan:
					</p>
					<div className="grid grid-cols-12 gap-5">
						<div className="col-span-12 sm:col-span-6 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Bening dan tidak keruh
							</h3>
							<p className="text-xs sm:text-sm md:text-lg">
								Air layak pakai biasanya jernih, tanpa endapan atau kotoran melayang.
								Jika air terlihat bening, kecil kemungkinan ada partikel besar atau
								lumpur di dalamnya.
							</p>
						</div>
						<div className="col-span-12 sm:col-span-6 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Tidak berwarna mencolok
							</h3>
							<p className="text-xs sm:text-sm md:text-lg">
								Air yang baik tidak memiliki warna. Jika air tampak kehijauan,
								kekuningan, kecokelatan, atau berkilau aneh, bisa jadi ada kontaminasi
								logam atau bahan kimia.
							</p>
						</div>
						<div className="col-span-12 sm:col-span-6 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">Tidak berbau</h3>
							<p className="text-xs sm:text-sm md:text-lg">
								Cium air tersebut. Air yang layak pakai tidak mengeluarkan bau. Jika ada
								bau busuk, amis, atau menyengat (seperti bau besi atau belerang),
								kemungkinan air telah terkontaminasi.
							</p>
						</div>
						<div className="col-span-12 sm:col-span-6 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Tidak berminyak atau berlendir
							</h3>
							<p className="text-xs sm:text-sm md:text-lg">
								Perhatikan permukaan air. Jika tampak seperti ada lapisan minyak atau
								terasa licin saat disentuh, itu bisa menandakan pencemaran dari limbah
								atau bahan kimia.
							</p>
						</div>
					</div>
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">
						❌ Ciri-Ciri Air yang Perlu Diwaspadai
					</h2>
					<p className="text-xs sm:text-sm md:text-xl">
						Kalau air di rumahmu memiliki salah satu dari tanda-tanda berikut,
						sebaiknya jangan digunakan langsung tanpa disaring atau dimasak terlebih
						dahulu:
					</p>
					<div className="grid grid-cols-12 gap-5">
						<div className="col-span-12 sm:col-span-6 bg-amber-800 hover:bg-amber-900 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Keruh atau penuh endapan
							</h3>
						</div>
						<div className="col-span-12 sm:col-span-6 bg-amber-800 hover:bg-amber-900 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Bau menyengat atau aneh
							</h3>
						</div>
						<div className="col-span-12 sm:col-span-6 bg-amber-800 hover:bg-amber-900 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Berwarna kekuningan, kecokelatan, atau kehijauan
							</h3>
						</div>
						<div className="col-span-12 sm:col-span-6 bg-amber-800 hover:bg-amber-900 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Ada serangga kecil atau jentik nyamuk di dalamnya
							</h3>
						</div>
					</div>
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">
						💡 Tips Sederhana Mengecek Kualitas Air di Rumah{" "}
					</h2>
					<p className="text-xs sm:text-sm md:text-xl">
						Berikut ini beberapa indikator visual yang menandakan air cenderung layak
						untuk digunakan:
					</p>
					<div className="grid grid-cols-12 gap-5">
						<div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Gunakan gelas bening
							</h3>
							<p className="text-xs sm:text-sm md:text-lg">
								untuk menampung air, diamkan selama 5 menit. Perhatikan apakah ada
								partikel yang mengendap.
							</p>
						</div>
						<div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">Cium aromanya</h3>
							<p className="text-xs sm:text-sm md:text-lg">
								Bau yang tak biasa bisa menjadi petunjuk penting.
							</p>
						</div>
						<div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Letakkan air di bawah cahaya
							</h3>
							<p className="text-xs sm:text-sm md:text-lg">
								Air yang baik akan terlihat bening dan tidak membiaskan cahaya secara
								aneh.
							</p>
						</div>
					</div>
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">
						🔁 Apa yang Bisa Dilakukan Jika Air Terlihat Kurang Layak?
					</h2>
					<p className="text-xs sm:text-sm md:text-xl">
						Jika air tampak mencurigakan, kamu bisa:
					</p>
					<div className="grid grid-cols-12 gap-5">
						<div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Gunakan filter air sederhana (seperti dari botol, pasir, dan kerikil).
							</h3>
						</div>
						<div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Rebus air hingga mendidih untuk membunuh bakteri.
							</h3>
						</div>
						<div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Gunakan tawas atau karbon aktif untuk membantu mengendapkan kotoran.
							</h3>
						</div>
					</div>
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">📌 Penutup</h2>
					<p className="text-xs sm:text-sm md:text-xl">
						Mengetahui apakah air layak pakai atau tidak bisa dimulai dari pengamatan
						sederhana dengan mata, hidung, dan sentuhan. Ini bukan cara utama, tapi
						cukup efektif sebagai pertolongan pertama. Jangan pernah anggap remeh air
						yang terlihat "sedikit aneh" — karena kesehatan keluargamu bisa bergantung
						padanya.
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
