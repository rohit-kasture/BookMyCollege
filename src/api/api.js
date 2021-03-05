import axios from 'axios';
const { REACT_APP_BASE_URL } = process.env;

export default axios.create({
    baseURL: `${REACT_APP_BASE_URL}`
});

export const getData = (url) => {
    return axios.get(`${REACT_APP_BASE_URL}/${url}`);
}
