import { Droplets, Globe, UserPlus } from "lucide-react";
import React from "react";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<main className="grid grid-cols-12 h-screen overflow-hidden">
				<section className="relative z-10 hidden xl:block xl:col-span-5 2xl:col-span-4 h-full bg-gradient-to-br from-blue-950 to-blue-500 p-15">
					<div className="h-full flex flex-col justify-between">
						<div className="flex flex-col items-start gap-5">
							<h1 className="text-3xl text-white font-bold">Jernih</h1>
							<div className="bg-blue-500 p-3 rounded-full">
								<UserPlus className="text-white" />
							</div>
							<div className="space-y-2">
								<p className="text-white text-2xl font-medium">
									Akses dan nikmati layanan kami.
								</p>
								<p className="text-white text-lg font-light">
									Bersama, kita alirkan harapan dan kehidupan bagi mereka yang
									membutuhkan.
								</p>
							</div>
						</div>
						<div className="w-full flex justify-center">
							<div className="space-y-5">
								<div className="flex flex-col items-end text-white space-y-2 px-5">
									<Globe />
									<p>Peduli Air, Peduli Hidup</p>
								</div>
								<img className="w-[450px]" src="./loginSide.png" alt="" />
								<div className="text-white space-y-2 px-5">
									<Droplets />
									<p>Air Bersih, Hak Semua</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="relative flex justify-center col-span-12 xl:col-span-7 2xl:col-span-8 bg-gray-100 h-full px-5 py-10 md:p-15">
					<div className="absolute bottom-[100px] z-0 bg-white w-[2200px] h-[2200px] rounded-full"></div>
					{children}
				</section>
			</main>
		</>
	);
};

export default Layout;
