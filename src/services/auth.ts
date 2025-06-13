import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;

export const loginApi = async (credential: {
	email: string;
	password: string;
}) => {
	const res = await axios.post(`${API_BASE}/auth/signin`, credential);
	return res.data;
};

export const registerApi = async (credential: {
	fullname: string;
	email: string;
	password: string;
}) => {
	const res = await axios.post(`${API_BASE}/auth/signup`, credential);
	return res.data;
};
