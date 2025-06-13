import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Edukasi4() {
	return (
		<>
			<Header />
			<section className="py-20 sm:py-36 px-2 sm:px-7 xl:px-[200px] 2xl:px-[350px] space-y-10 md:space-y-15">
				<p className="text-sm sm:text-xl">
					<a href="/">Beranda</a> /{" "}
					<a href="/dampak-air-tercemar-bagi-kehidupan">
						Dampak air tercemar bagi kehidupan
					</a>
				</p>
				<img
					className="w-full h-[200px] md:h-[400px] rounded-2xl object-cover"
					src="https://www.blog.yukiwaterfilter.com/wp-content/uploads/2019/04/water-polution-1024x621.jpg"
					alt=""
				/>
				<h1 className="text-xl md:text-3xl text-blue-500 font-bold">
					Dampak air tercemar bagi kehidupan
				</h1>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">🧪 Pendahuluan</h2>
					<p className="text-xs sm:text-sm md:text-xl">
						Air adalah sumber kehidupan. Tapi ketika air tercemar, bukan hanya manusia
						yang terdampak — seluruh ekosistem bisa terganggu. Pencemaran air bisa
						berasal dari limbah industri, sampah rumah tangga, pestisida pertanian,
						hingga limbah domestik. Berikut ini adalah berbagai dampak serius dari air
						tercemar bagi manusia, lingkungan, dan makhluk hidup lainnya.
					</p>
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">
						💀 Dampak bagi Kesehatan Manusia
					</h2>
					<p className="text-xs sm:text-sm md:text-xl">
						Air tercemar mengandung bakteri, virus, logam berat, dan zat kimia
						berbahaya yang bisa memicu berbagai penyakit:{" "}
					</p>
					<div className="grid grid-cols-12 gap-5">
						<div className="col-span-12 sm:col-span-6 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Diare, kolera, dan tipus akibat bakteri patogen
							</h3>
						</div>
						<div className="col-span-12 sm:col-span-6 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Keracunan logam berat seperti merkuri dan timbal
							</h3>
						</div>
						<div className="col-span-12 sm:col-span-6 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Gangguan kulit seperti gatal, ruam, dan infeksi
							</h3>
						</div>
						<div className="col-span-12 sm:col-span-6 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Masalah perkembangan pada anak-anak, seperti keterlambatan tumbuh
								kembang
							</h3>
						</div>
					</div>
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">
						🐠 Dampak bagi Kehidupan Air
					</h2>
					<p className="text-xs sm:text-sm md:text-xl">
						Makhluk hidup di air adalah yang pertama terkena dampak dari pencemaran:
					</p>
					<div className="grid grid-cols-12 gap-5">
						<div className="col-span-12 sm:col-span-6 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Ikan dan biota air mati massal
							</h3>
						</div>
						<div className="col-span-12 sm:col-span-6 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Gangguan rantai makanan di sungai, danau, dan laut
							</h3>
						</div>
						<div className="col-span-12 sm:col-span-6 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Eutrofikasi: pertumbuhan ganggang berlebih yang mengurangi oksigen dalam
								air
							</h3>
						</div>
						<div className="col-span-12 sm:col-span-6 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Mutasi atau deformasi pada organisme air
							</h3>
						</div>
					</div>
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">
						🌱 Dampak bagi Lingkungan dan Ekosistem
					</h2>
					<p className="text-xs sm:text-sm md:text-xl">
						Air tercemar mengganggu keseimbangan lingkungan:
					</p>
					<div className="grid grid-cols-12 gap-5">
						<div className="col-span-12 sm:col-span-6 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Tanah kehilangan kesuburan karena irigasi dari air yang tercemar
							</h3>
						</div>
						<div className="col-span-12 sm:col-span-6 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Air tanah ikut tercemar, memengaruhi sumber air sumur
							</h3>
						</div>
						<div className="col-span-12 sm:col-span-6 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Kematian tanaman dan gangguan pertanian
							</h3>
						</div>
						<div className="col-span-12 sm:col-span-6 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Hilangnya keanekaragaman hayati akibat rusaknya habitat alami
							</h3>
						</div>
					</div>
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">
						💸 Dampak Sosial dan Ekonomi
					</h2>
					<div className="grid grid-cols-12 gap-5">
						<div className="col-span-12 sm:col-span-6 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Biaya pengobatan meningkat akibat penyakit dari air kotor
							</h3>
						</div>
						<div className="col-span-12 sm:col-span-6 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Pendapatan nelayan menurun karena ikan mati atau tak layak konsumsi
							</h3>
						</div>
						<div className="col-span-12 sm:col-span-6 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Krisis air bersih memicu konflik sosial di beberapa wilayah
							</h3>
						</div>
						<div className="col-span-12 sm:col-span-6 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Beban tambahan pemerintah untuk penyediaan air bersih dan penanggulangan
								pencemaran
							</h3>
						</div>
					</div>
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">
						✅ Solusi yang Bisa Dilakukan
					</h2>
					<div className="grid grid-cols-12 gap-5">
						<div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Tidak membuang sampah sembarangan ke sungai atau selokan
							</h3>
						</div>
						<div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Menggunakan produk ramah lingkungan dan mengurangi penggunaan plastik
							</h3>
						</div>
						<div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-blue-500 hover:bg-blue-600 text-white space-y-3 p-5 sm:p-10 rounded-2xl">
							<h3 className="text-sm sm:text-lg font-semibold">
								Mendukung program pengolahan limbah di lingkungan sekitar
							</h3>
						</div>
					</div>
				</section>
				<section className="space-y-2 sm:space-y-5 text-zinc-800">
					<h2 className="text-base md:text-2xl font-bold">📌 Penutup</h2>
					<p className="text-xs sm:text-sm md:text-xl">
						Air tercemar adalah ancaman nyata yang bisa merusak kesehatan, ekonomi,
						dan masa depan lingkungan. Setiap individu memiliki peran penting dalam
						menjaga kebersihan air — mulai dari rumah sendiri. Air bersih adalah hak
						bersama, maka jagalah sumbernya demi kehidupan yang lebih baik.
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
								src="https://unnu.com/storage/blog/ed47812d88e873368d0804605ccf225a.jpeg"
								alt=""
							/>
							<p className="text-xs sm:text-sm md:text-xl">
								{" "}
								Cara menyimpan air bersih agar aman
							</p>
							<a href="/cara-menyimpan-air-bersih-agar-aman">
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
