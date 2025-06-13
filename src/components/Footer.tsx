import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
	return (
		<footer className="w-full bg-gradient-to-br from-blue-900 to-blue-500 py-7 px-2 sm:px-10 xl:px-[200px] 2xl:px-[350px] space-y-5 sm:space-y-10">
			<div className="flex justify-between items-center">
				<h1 className="text-lg sm:text-2xl text-white font-medium">Jernih</h1>
				<div className="flex items-center gap-5 text-white">
					<p className="text-xs sm:text-base">Follow kami</p>
					<Instagram className="w-5 sm:w-7 h-5 sm:h-7" />
					<Facebook className="w-5 sm:w-7 h-5 sm:h-7" />
					<Twitter className="w-5 sm:w-7 h-5 sm:h-7" />
				</div>
			</div>
			<div className="border-t border-white pt-5">
				<p className="text-white text-center text-xs sm:text-base">
					&copy; Copyright Jernih | All Rights Reserved
				</p>
			</div>
		</footer>
	);
}
