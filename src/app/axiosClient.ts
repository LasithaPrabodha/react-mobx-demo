import axios from 'axios';
import constants from '../common/utils/constants';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = constants.API_PATH;

axiosClient.defaults.headers = { ...axiosClient.defaults.headers, ...constants.headers };

// To share cookies to cross site domain, change to true.
axiosClient.defaults.withCredentials = false;

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
