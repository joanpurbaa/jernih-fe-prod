import React, { useState } from "react";
import Layout from "./layout";
import { Link, useNavigate } from "react-router";
import { CircleAlert, Eye, EyeClosed } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../services/auth";
import { jwtDecode } from "jwt-decode";
import type { AxiosError } from "axios";

interface TokenPayload {
	email: string;
	password: string;
}

const Login: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [errorPopUp, setErrorPopUp] = useState<string>("");

	const { login } = useAuth();
	const navigate = useNavigate();

	const mutation = useMutation({
		mutationFn: loginApi,
		onSuccess: (data) => {
			const token = data.responseObject;
			const decoded: TokenPayload = jwtDecode(token);

			login({ email: decoded.email, password: decoded.password }, token);
			navigate("/");
		},
		onError: (error: AxiosError<{ message: string }>) => {
			setErrorPopUp(error?.response?.data?.message ?? "Terjadi kesalahan");
		},
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const credential = {
			email,
			password,
		};

		mutation.mutate(credential);
	};

	return (
		<Layout>
			<div className="z-10 w-full max-w-full flex flex-col justify-between">
				<p className="block xl:hidden text-blue-500 text-xl font-bold">Jernih</p>
				<p className="hidden xl:block text-end text-xs sm:text-lg font-medium text-gray-500">
					Belum punya akun?{" "}
					<Link className="text-blue-600" to={"/register"}>
						Daftar
					</Link>
				</p>
				<div className="w-full max-w-full">
					<div className="text-center space-y-5 mb-8">
						<h1 className="text-xl sm:text-3xl text-zinc-700 font-bold">
							Ayo masuk‼️
						</h1>
						<p className="text-xs sm:text-base">
							Kami ada dan hadir untuk kepedulian melahirkan perubahan
						</p>
					</div>
					<form
						onSubmit={handleSubmit}
						className="w-full max-w-md mx-auto text-xs sm:text-lg"
						action="">
						{errorPopUp && (
							<p className="my-3 flex justify-center items-center bg-red-100 border border-red-500 text-red-500 text-xs sm:text-base p-3 gap-3 rounded-md">
								<CircleAlert />
								{errorPopUp}
							</p>
						)}
						<ul className="space-y-5 sm:space-y-10">
							<li className="flex flex-col gap-2">
								<label htmlFor="">Email</label>
								<input
									onChange={(e) => setEmail(e.target.value)}
									className="w-full border border-zinc-700 py-3 px-5 rounded-xl outline-none"
									type="email"
									placeholder="Masukkan Email Kamu!"
									required
								/>
							</li>
							<li className="flex flex-col gap-2">
								<label htmlFor="">Password</label>
								<div className="flex items-center border border-zinc-700 py-3 px-5 rounded-xl">
									<input
										onChange={(e) => setPassword(e.target.value)}
										className="w-full outline-none"
										type={showPassword ? "text" : "password"}
										placeholder="Masukkan Password Kamu!"
										required
									/>
									{showPassword ? (
										<Eye
											onClick={() => setShowPassword(!showPassword)}
											className="cursor-pointer flex-shrink-0 ml-2"
										/>
									) : (
										<EyeClosed
											onClick={() => setShowPassword(!showPassword)}
											className="cursor-pointer flex-shrink-0 ml-2"
										/>
									)}
								</div>
							</li>
							<li>
								<button
									className="cursor-pointer w-full bg-blue-500 text-white font-semibold rounded-full p-3"
									disabled={mutation.isPending}>
									{mutation.isPending ? "Sedang masuk..." : "Masuk"}
								</button>
							</li>
							<li>
								<p className="block xl:hidden text-end text-xs sm:text-lg font-medium text-gray-500">
									Belum punya akun?{" "}
									<Link className="text-blue-600" to={"/register"}>
										Daftar
									</Link>
								</p>
							</li>
						</ul>
					</form>
				</div>
				<div>
					<p className="font-semibold text-zinc-900 text-center text-xs sm:text-base">
						&copy; Copyright <span className="text-blue-500">Jernih</span>
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default Login;
