import axios from 'axios';
const { REACT_APP_BASE_URL } = process.env;
console.log(REACT_APP_BASE_URL);
//const REACT_APP_BASE_URL = "http://localhost:3000";
export default axios.create({
    baseURL: `${REACT_APP_BASE_URL}`
});

export const getData = (url) => {
    return axios.get(`${REACT_APP_BASE_URL}/${url}`);
}
