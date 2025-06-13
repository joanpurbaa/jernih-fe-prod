const postData = {
	post1: {
		breadcrumbs: [
			{ label: "Beranda", href: "/" },
			{ label: "Sumur keruh dan berlumpur", href: "/post1" },
		],
		mainImage: {
			src: "/pengaduan1.jpg",
			alt: "Sumur keruh dan berlumpur",
		},
		content: {
			title: "Sumur keruh dan berlumpur",
			description:
				"Sumur di daerah ini menghasilkan air yang keruh dan berlumpur, tidak layak digunakan untuk mandi, mencuci, apalagi dikonsumsi. Warga sangat membutuhkan bantuan untuk mendapatkan air bersih.",
		},
		galleryImages: [
			{
				src: "https://jakartapompa.com/wp-content/uploads/2021/03/Tips-Mengatasi-Air-Sumur-Bor-Keruh-di-Musim-Hujan.jpg",
				alt: "Sumur bor keruh",
			},
			{
				src: "https://asset.kompas.com/crops/8IS7RUrt8UJU6E0fsZt6N5qkJUc=/0x0:1000x667/750x500/data/photo/2023/01/17/63c63e3e156a7.jpg",
				alt: "Air sumur tak layak konsumsi",
			},
			{
				src: "https://cdn.rri.co.id/berita/26/images/1697625112453-S/5kdik3ax9vsxvlr.jpeg",
				alt: "Warga butuh air bersih",
			},
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.0088461915415!2d107.62296073480881!3d-7.005116292423083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e90056f53a15%3A0x8eae34dbd5766bb5!2sAyam%20Gepuk%20SANTANG!5e0!3m2!1sid!2sid!4v1749712547168!5m2!1sid!2sid",
		actionButtons: [
			{
				label: "Narahubung",
				bgColor: "bg-blue-500",
				hover: "hover:bg-blue-600",
				textColor: "text-white",
				borderColor: "border-blue-500",
			},
			{
				label: "Donasi",
				bgColor: "bg-white",
				hover: "hover:bg-blue-500",
				textColor: "text-blue-500 hover:text-white",
				borderColor: "border-blue-500",
			},
		],
	},
	post2: {
		breadcrumbs: [
			{ label: "Beranda", href: "/" },
			{ label: "Air berwarna hitam", href: "/post2" },
		],
		mainImage: {
			src: "/pengaduan2.webp",
			alt: "Air berwarna hitam",
		},
		content: {
			title: "Air berwarna hitam",
			description:
				"Air yang tersedia di wilayah ini berwarna hitam pekat, menandakan pencemaran serius. Kondisi ini sangat membahayakan kesehatan warga, terutama anak-anak dan lansia.",
		},
		galleryImages: [
			{
				src: "/pengaduan2.webp",
				alt: "Air di bak berwarna hitam",
			},
			{
				src: "https://www.pijarnews.com/wp-content/uploads/2020/11/PicsArt_11-09-10.21.29.jpg",
				alt: "Air di bak berwarna hitam",
			},
			{
				src: "https://cloud.jpnn.com/photo/sultra/news/normal/2022/04/09/air-pdam-berwarna-hitam-yang-mengalir-di-rumah-salah-seorang-6bdw.jpg",
				alt: "Air di bak berwarna hitam",
			},
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d990.0107791124894!2d107.62289900919262!3d-7.004205831144886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e90015904ab9%3A0xf359bcd640bdccd0!2sSticky%20Milk%20Agi!5e0!3m2!1sid!2sid!4v1749766504392!5m2!1sid!2sid",
		actionButtons: [
			{
				label: "Narahubung",
				bgColor: "bg-blue-500",
				hover: "hover:bg-blue-600",
				textColor: "text-white",
				borderColor: "border-blue-500",
			},
			{
				label: "Donasi",
				bgColor: "bg-white",
				hover: "hover:bg-blue-500",
				textColor: "text-blue-500 hover:text-white",
				borderColor: "border-blue-500",
			},
		],
	},
	post3: {
		breadcrumbs: [
			{ label: "Beranda", href: "/" },
			{ label: "Kekurangan air", href: "/post3" },
		],
		mainImage: {
			src: "/pengaduan3.jpg",
			alt: "Kekurangan air",
		},
		content: {
			title: "Kekurangan air",
			description:
				"Warga mengalami kekeringan berkepanjangan sehingga sulit mendapatkan air untuk kebutuhan sehari-hari. Mereka terpaksa menempuh jarak jauh untuk mencari sumber air.",
		},
		galleryImages: [
			{
				src: "/pengaduan3.jpg",
				alt: "Kekurangan air",
			},
			{
				src: "https://cdn.antaranews.com/cache/1200x800/2023/09/06/air-bersih-pasuruan.jpg",
				alt: "Kekurangan air",
			},
			{
				src: "https://akcdn.detik.net.id/visual/2019/07/03/a98cd9c1-9eb5-4a9f-a2f5-90c42c578a26_169.jpeg?w=400&q=90",
				alt: "Kekurangan air",
			},
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d494.9347917249775!2d107.51041223741565!3d-7.070406073194367!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ea287d098d5d%3A0xcacdcb951379367d!2sBaleendah%2C%20Kec.%20Baleendah%2C%20Kabupaten%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1749766738396!5m2!1sid!2sid",
		actionButtons: [
			{
				label: "Narahubung",
				bgColor: "bg-blue-500",
				hover: "hover:bg-blue-600",
				textColor: "text-white",
				borderColor: "border-blue-500",
			},
			{
				label: "Donasi",
				bgColor: "bg-white",
				hover: "hover:bg-blue-500",
				textColor: "text-blue-500 hover:text-white",
				borderColor: "border-blue-500",
			},
		],
	},
	post4: {
		breadcrumbs: [
			{ label: "Beranda", href: "/" },
			{ label: "Air keruh", href: "/post3" },
		],
		mainImage: {
			src: "/pengaduan4.jpg",
			alt: "Air keruh",
		},
		content: {
			title: "Air keruh",
			description:
				"Warga hanya memiliki akses ke air berwarna keruh dan berbau. Kondisi ini menyebabkan gangguan kesehatan dan sanitasi, terutama saat musim hujan.",
		},
		galleryImages: [
			{
				src: "/pengaduan4.jpg",
				alt: "Air keruh",
			},
			{
				src: "https://cdn.rri.co.id/berita/14/images/1704182233355-i/0ho0v5ssv7cin48.jpeg",
				alt: "Air keruh",
			},
			{
				src: "https://asset-2.tstatic.net/bangka/foto/bank/images/air-pam_20160826_084000.jpg",
				alt: "Air keruh",
			},
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.8553112222694!2d108.56179387273573!3d-6.737364864749382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee2649e6e5bbb%3A0x70a07638a7fe12fe!2sCirebon%2C%20Kota%20Cirebon%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1749766938541!5m2!1sid!2sid",
		actionButtons: [
			{
				label: "Narahubung",
				bgColor: "bg-blue-500",
				hover: "hover:bg-blue-600",
				textColor: "text-white",
				borderColor: "border-blue-500",
			},
			{
				label: "Donasi",
				bgColor: "bg-white",
				hover: "hover:bg-blue-500",
				textColor: "text-blue-500 hover:text-white",
				borderColor: "border-blue-500",
			},
		],
	},
};

export default postData;
