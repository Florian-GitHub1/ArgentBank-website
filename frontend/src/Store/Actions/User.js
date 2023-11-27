export const GET_USERPROFILE = 'GET_USERPROFILE';
export const EDIT_USERNAME = 'EDIT_USERNAME';

export const userProfile = (userData) => {
	return {
		type: GET_USERPROFILE,
		payload: userData,
	};
};

export const updateUsername = (username) => {
	return {
		type: EDIT_USERNAME,
		payload: username,
	};
};
