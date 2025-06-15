import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;

export const uploadApi = async ({
	token,
	formData,
}: {
	token: string;
	formData: FormData;
}) => {
	const res = await axios.post(`${API_BASE}/posts`, formData, {
		headers: {
			authorization: token,
		},
	});

	return res.data;
};
