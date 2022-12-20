import axios from 'axios';
import getEnvVars from '../../env';

let API_URL = '';
let clientId = '';
let clientSecret = '';

getEnvVars().then((vars) => {
	API_URL = vars.API;
	clientId = vars.clientId;
	clientSecret = vars.clientSecret;
});

export const loginHandler = async (body) => {
	return await axios
		.post(`${API_URL}/users/login`, {
			clientId: clientId,
			clientSecret: clientSecret,
			email: body.email,
			password: body.password,
			RedirectURL: '',
		})
		.then((res) => res.data);
};

export const getUserInfo = (userId, token) => {
	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};
	return axios
		.get(`${API_URL}/users/${userId}/info`, config)
		.then((response) => response.data);
};
