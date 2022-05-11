import axios from "axios";

export async function get(objectType, queryParams = {}, token) {
	const instance = await createAxiosInstance(token);

	return instance.get(`/${ objectType }`, { params : queryParams })
		.then((response) => {
			return response.data;
		});
}

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function createAxiosInstance(token) {

	return axios.create({
		baseURL : API_BASE_URL,
		headers : {
			'token'        : token,
			'content-type' : 'application/json',
		},
		paramsSerializer : (params) => {
			return Object.keys(params).map((key) => {
				return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
			}).join('&');
		},
	});
}