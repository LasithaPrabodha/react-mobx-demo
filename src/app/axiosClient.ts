import axios from 'axios';
import constants from '../common/utils/constants';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = constants.API_PATH;

axiosClient.defaults.headers = { ...axiosClient.defaults.headers, ...constants.headers };

// To share cookies to cross site domain, change to true.
axiosClient.defaults.withCredentials = false;

axiosClient.interceptors.request.use(
    config => {
        if (config.headers) config.headers.Authorization = "Bearer " + getToken();

        return config;
    },
    error => {
        Promise.reject(error);
    }
);

function getToken() {
    return localStorage.getItem('access_token') || ''
}
export function getRequest(URL: string) {
    return axiosClient.get(`/${URL}`).then(response => response);
}

export function postRequest(URL: string, payload: any): Promise<any> {
    return axiosClient.post(`/${URL}`, payload).then(response => response);
}

export function patchRequest(URL: string, payload: any) {
    return axiosClient.patch(`/${URL}`, payload).then(response => response);
}

export function deleteRequest(URL: string) {
    return axiosClient.delete(`/${URL}`).then(response => response);
}
