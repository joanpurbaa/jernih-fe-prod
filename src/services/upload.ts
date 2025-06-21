import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;

export const uploadApi = async ({
	token,
	formData,
  id
}: {
	token: string;
	formData: FormData;
  id: string;
}) => {
	formData.forEach((data) => console.log(data));

	const res = await axios.put(`${API_BASE}/posts/${id}`, formData, {
		headers: {
			authorization: token,
		},
	});

	return res;
};
